
import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import readCookie from '../libs/utils'


export default class NewMovie extends Component {

  state = {
    title: '',
    rating:''
  }
  

  handleChange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'X-CSRF-Token': decodeURIComponent(readCookie('X-CSRF-Token'))
    },
      body: JSON.stringify({
        query: `
        mutation{
          createMovie(input:{
              title: "${this.state.title}"
              rating: ${this.state.rating}
          }){
            movie {
              id
            }
          }
        }
        `
      })
    }).then(response => {
      return response.json()
    }).then(response => {
      location.href = "/"
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Movie</p>
          <label>
            title:
            <input type="title" name="title" onChange={this.handleChange} />
          </label>
          <label htmlFor="">
            rating:
            <input type="rating" name="rating" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
      </form>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <NewMovie />,
    document.body.appendChild(document.createElement('div')),
  )
})
