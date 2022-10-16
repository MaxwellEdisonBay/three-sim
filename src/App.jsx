import { Component } from 'react';
import * as THREE from "three";

import './App.css';
import * as game from './Game'

class App extends Component {
  componentDidMount() {
    document.body.appendChild( game.rendererDom );
  }
  render() {
    return (
      <div />
    )
  }
}

export default App;
