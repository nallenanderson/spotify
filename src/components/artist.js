import React, { Component } from 'react';

export default class Artist extends Component {

  receiveId(artistLink){
    this.props.getArtist(artistLink);
  }

  render(){
    const artist = this.props.artist;

    let image;

    if(artist.images.length > 0){
      image = artist.images[0].url;
    } else {
      image = "http://lorempixel.com/g/400/200/";
    }

    const genre = artist.genres.map( genre => {
      return <label className="genre" key={genre}>{genre}</label>
    })

    return(
      <div className="col-lg-3 col-sm-6">

        <div className="artist-box" onClick={this.receiveId.bind(this, artist.href)}>

          <div className="artist-img">

            <img src={image} className="img-fluid" />

          </div>

          <div className="artist-info">

            <h6>{artist.name}</h6>

            <span className="popularity">{artist.popularity} / 100</span>

            {genre}

          </div>

        </div>

      </div>
    );
  }
}
