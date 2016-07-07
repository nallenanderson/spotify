import React, { Component } from 'react';

export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.artistSearch(this.refs.artist.value);
  }

  render(){
    return(
      <nav className="navbar navbar-dark bg-inverse">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="http://static1.squarespace.com/static/55aed6d7e4b039eb798b98ae/55aee2e4e4b081a3c7d1733b/55af2836e4b0ce8451db31d4/1437542455736/spotify-logo-vertical-white-rgb.png?format=500w"/>
            {this.props.name}
          </a>
          <form className="form-inline pull-xs-right" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form-control"
              type="text"
              placeholder="Search artists..."
              ref="artist"
            />
            <input type="submit" hidden />
          </form>
        </div>
      </nav>
    );
  }
}
