import React, { Component } from "react";
import Cardlist from "./components/Cardlist/Cardlist.component";
import Search from './components/Search/Search.component'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchinput : ''
    };
  }

  handlesearch = (e) => {
    this.setState({searchinput : e.target.value})
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    const {monsters, searchinput} = this.state;

    let mons = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchinput.toLowerCase());;
    })

    return (
      <div className="app">
        <h1 className="Header">Monster Rolodex</h1>
        <Search handlesearch={this.handlesearch} />
        <Cardlist monsters = {mons} />
      </div>
    );
  }
}

export default App;
