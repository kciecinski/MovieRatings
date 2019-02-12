import React, { Component } from 'react'
import readCookie from './libs/utils'

export default class DeleteLink extends Component {

  handleClick = () =>{
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'X-CSRF-Token': decodeURIComponent(readCookie('X-CSRF-Token'))
    },
      body: JSON.stringify({
        query: `
        mutation{
          deleteMovie(input:{
            id: ${this.props.id}
          }) {
            clientMutationId
          }
        }
        `
      })
    }).then(response => {
      return response.json()
    }).then(response => {
      this.props.refresh()
    })
  }
  

  render() {
    return (
      <div className="delete_link" onClick={this.handleClick}>
        Delete
      </div>
    )
  }
}
