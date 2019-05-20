import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import Joke from  "./joke/Joke"
import "./Kennel.css"


class Kennel extends Component {

    // /*
    //     Although you will eventually be pulling your objects
    //     from your json-server API, for this chapter, we're
    //     faking it and just creating those arrays in the component
    //     itself
    // */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]
    setNewJokeState = (jokeObj) => {
        this.setState({
            joke: {
                id: jokeObj.id,
                type: jokeObj.type,
                setup: jokeObj.setup,
                punchline: jokeObj.punchline
            }

        })
    }

   // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    animalsFromAPI = [
        { id: 1, name: "cat" },
        { id: 2, name: "zebra" },
        { id: 3, name: "lion" },
        { id: 4, name: "dog" },
    ]
    state =
    {
        joke: {  id: 75,
            type: "general",
            setup: "What do you give to a lemon in need?",
            punchline: "Lemonaid."
            },
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
      }



    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
                <Joke joke={this.state.joke}
                    setNewJokeState={this.setNewJokeState}
                />
            </article>
        )
    }
}

export default Kennel