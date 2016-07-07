import React, { Component } from 'react';
import axios from 'axios';

import Track from './track';
import RelatedArtist from './relatedArtist';

export default class SelectedArtist extends Component {

  getTracks(){
    return this.props.topTracks.map( (track, i) => {
      return <Track key={i} track={track} />
    });
  }

  getRelatedArtists(){
    return this.props.relatedArtists.map( (artist, i) => {
      return <RelatedArtist key={i}
              artist={artist}
              getArtist={this.props.getArtist.bind(this)}
              />;
    });
  }

  render(){

    const artist = this.props.artist;

    return(
      <div className="selected-artist row">

        <div className="col-md-12 back-img">

          <div className="blackover">

            <h1>{artist.name}</h1>

          </div>

          <img src={artist.images[0].url} />

        </div>

        <div className="col-md-7">

          <small className="small-head">Top Tracks</small>

          <hr />

          { this.getTracks() }

        </div>

        <div className="col-md-5">

          <small className="small-head">Related Artists</small>

          <hr />

          <ul className="list-unstyled">

            { this.getRelatedArtists() }

          </ul>

        </div>
        
      </div>
    );
  }
}
