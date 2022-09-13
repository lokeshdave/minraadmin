import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Guests extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
  render() {
    return (
      <div>
        hy Guests
      </div>
    )
  }
}
export default adminLayout(Guests);
