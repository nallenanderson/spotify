import React, { Component } from 'react';

export default class RelatedArtist extends Component {

  changeArtist(link){
    this.props.getArtist(link);
  }

  render(){
    return(
      <a className="related-artist-link" onClick={this.changeArtist.bind(this, this.props.artist.href)}>
        {this.props.artist.name}
      </a>
    );
  }
}
