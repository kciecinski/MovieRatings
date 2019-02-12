
import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import MovieList from '../MovieList'



export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <IndexPage />,
    document.body.appendChild(document.createElement('div')),
  )
})
