import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
 class Employe extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }
  render() {
    return (
      <div>
        employe page
      </div>
    )
  }
}
export default adminLayout(Employe);

