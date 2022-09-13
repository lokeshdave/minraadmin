import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class In_house_guest extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy In house guest
      </div>
    )
  }
}

export default adminLayout(In_house_guest);
