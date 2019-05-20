import React, {Component} from "react"


export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <section >
                            {location.name}
                            {location.address}
                           </section>
                        </div>
                    )
                }
           </section>
        )
    }
}