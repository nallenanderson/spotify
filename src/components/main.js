import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './navbar';
import Artist from './artist';
import SelectedArtist from './selectedArtist';

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dirty: false,
      search: '',
      results: null,
      selectedArtist: null,
      topTracks: [],
      relatedArtists: []
    }
  }

  artistSearch(search){
    this.setState({ search });
    axios.get('https://api.spotify.com/v1/search?type=artist&q=' + search)
      .then( results => {
        this.setState({
          results: results.data.artists.items, dirty: true, selectedArtist: null
        })
      })
      .catch( error => {
        console.log(error);
      });
  }

  getArtist(artistLink){
    axios.get(artistLink)
      .then( results => {
        this.setState({
          selectedArtist: results.data
        }, this.getArtistInfo.bind(this))
      })
      .catch( error => {
        console.log(error);
      });
  }

  getArtistInfo(){
    axios.get(`https://api.spotify.com/v1/artists/${this.state.selectedArtist.id}/top-tracks?country=US`)
      .then( topTracks => {
        this.setState({ topTracks: topTracks.data.tracks });
      });

    axios.get(`https://api.spotify.com/v1/artists/${this.state.selectedArtist.id}/related-artists`)
      .then( artists => {
        this.setState({ relatedArtists: artists.data.artists });
      });
  }

  render(){

    let artists, intro, selectedArtist;

    if(this.state.results && !this.state.selectedArtist) {
      artists = this.state.results.map( artist => {
        return <Artist artist={artist}
                  key={artist.id}
                  getArtist={this.getArtist.bind(this)}
                />;
      });
    }

    if (this.state.selectedArtist){
      selectedArtist = <SelectedArtist
                          getArtist={this.getArtist.bind(this)}
                          artist={this.state.selectedArtist}
                          topTracks={this.state.topTracks}
                          relatedArtists={this.state.relatedArtists}
                        />;
    }

    if(this.state.dirty){
      intro = <p className="intro">Search results for <span className="artist-search">{this.state.search}</span>.</p>
    } else {
      intro = <p className="intro">Search for an artist...</p>
    }

    return(
      <div>
        <Navbar name="SpotifyAPI" artistSearch={this.artistSearch.bind(this)} />

        <div className="container">

          <div className="artist-results row">

            {!this.state.selectedArtist ? intro : ''}

            {artists}

          </div>

          {selectedArtist}

        </div>

      </div>

    );
  }
}
