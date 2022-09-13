import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Food extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Food
      </div>
    )
  }
}

export default adminLayout(Food);
