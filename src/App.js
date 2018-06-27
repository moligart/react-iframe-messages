import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.init = this.init.bind(this);
        this.handlePostMessage = this.handlePostMessage.bind(this);
    }

    componentDidMount() {
        this.init();
    }

    init = () => {
        window.addEventListener('message', this.handlePostMessage);
        window.parent.postMessage('ready', '*');
    }

    handlePostMessage = (event) => {
        console.log(event.data);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
