import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Bookings extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Bookings
      </div>
    )
  }
}

export default adminLayout(Bookings);
