import React from 'react';

const Track = (props) => {
  return(
    <div className="row">

      <div className="track">

        <div className="col-xs-3">

          <img src={props.track.album.images[0].url} className="img-fluid" />

        </div>

        <div className="col-xs-9">

          <h4 style={{ marginBottom: 0 }}>{props.track.name}</h4>

          <small style={{ display: 'block'}}>{props.track.album.name}</small>

          <br />

          <a href={props.track.preview_url} target="_blank"><i className="ion-headphone"></i> Listen</a>

          <a href={props.track.external_urls.spotify} target="_blank"><i className="ion-monitor"></i> More Info</a>

        <div className={props.track.popularity > 70 ? "popularity green" : props.track.popularity > 40 ? "popularity blue" : "popularity"}>

            <i className="ion-thumbsup"></i> <small>{props.track.popularity}</small>

          </div>

        </div>

      </div>
      
    </div>
  );
}

export default Track;
