import React, { Component } from "react";
import HogTile from "./HogTile";

class HogContainer extends Component {
  render() {
    return (
      <div className='ui grid container'>
        {this.props.currentHogs.map(hog => {
          return <HogTile key={this.props.currentHogs.indexOf(hog)} hog={hog}/>
        })}
      </div>
    );
  }
}

export default HogContainer;
