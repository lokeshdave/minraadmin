import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Make_Reservation extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Make_Reservation
      </div>
    )
  }
}

export default adminLayout(Make_Reservation);
