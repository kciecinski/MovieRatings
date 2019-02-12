import React, { Component } from 'react'
import readCookie from './libs/utils'
import DeleteLink from './DeleteLink'

export default class MovieList extends Component {

  state = {
    movies : []
  }

  componentDidMount = () =>{
    this.getAllMoveis()
  }


  getAllMoveis = () => {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'X-CSRF-Token': decodeURIComponent(readCookie('X-CSRF-Token'))
    },
      body: JSON.stringify({
        query: `
          query {
            movies {
              title
              rating
              id
            }
          }
        `
      })
    }).then(response => {
      return response.json()
    }).then(response => {
      this.setState({movies: response.data.movies})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.movies.map((movie, index)=>{
            return(
              <h2 key={index}>{movie.title}<span>{movie.rating}</span><DeleteLink refresh={this.getAllMoveis} id={movie.id} /></h2>
              )
        })
        }
      </div>
    )
  }
}
