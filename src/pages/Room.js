import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Room extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Room
      </div>
    )
  }
}

export default adminLayout(Room);
