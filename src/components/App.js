import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import HogFilter from './HogFilter'

class App extends Component {

  state = {
    currentHogs: hogs,
    greaseFilter: 'all',
    filteredHogs: hogs,
    sortBy: null
  }

  handleFilterChange = (e) => {
    this.setState({
      greaseFilter: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault() // do I even need the button anymore????

    // edit list of hogs, to send to HogContainer

    this.editHogList()
  }

  editHogList = () => {
    if (this.state.greaseFilter === 'all'){
      this.setState({
        filteredHogs: this.state.currentHogs
      })
    } else {

      const newHogList = this.state.currentHogs.filter(hog => {
        return hog.greased.toString() === this.state.greaseFilter
      })

      this.setState({
        filteredHogs: newHogList
      })
    }
  }

  handleRadioChange = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <Nav />
        <HogFilter handleRadioChange={this.handleRadioChange}handleFilterChange={this.handleFilterChange} handleFormSubmit={this.handleFormSubmit}/>
        <HogContainer currentHogs={this.state.filteredHogs}/>
      </div>
    );
  }
}

export default App;
