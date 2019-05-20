import React, { Component } from 'react';

class Joke extends Component {
    tellNewJoke =() => {
        const joke = {
            "id": 110,
            "type": "sean joke",
            "setup": "what do u call a fly with now wings?",
            "punchline": " a walk."
        }
        this.props.setNewJokeState(joke);
    }

    render() {
        return (
            <div>
                <header> Joke Type: {this.props.joke.type}</header>
                <h2>setup: {this.props.joke.setup}</h2>
                <p>Punchline:{this.props.joke.punchline}</p>
                <button onClick={this.tellNewJoke}> Tell a new joke</button>
            </div>
        );
    }
}

export default Joke;
