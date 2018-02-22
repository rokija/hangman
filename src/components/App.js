import React, { Component } from 'react'
import MainComponent from './mainComponent'

class App extends Component {
    constructor() {
        super();
        this.state = {
            newGame: false
        }
    }

    render() {
        const onClick = () => this.setState({ newGame: true });

        return (
            <div>
                <button onClick={onClick}>New Game</button>
                { this.state.newGame ? <MainComponent/> : null }
            </div>
        )
    }
}

export default App;