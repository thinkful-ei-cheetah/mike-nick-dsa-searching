import React, { Component } from 'react'
import './SearchUI.css'

export default class SearchUI extends Component {
  static data = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
  ]
  
  handleBinSearch = () => {}

  handleLinSearch = (value) => {
    let count = 0
    let ouput

    for(let i=0; i < this.data.length; i++) {
      count++
      if(this.data[i] === value) {
        break
      }
    }

    count = -1

    return (
      <>
        <span>Linear Search Performed</span>
        <span>it took {this.count} searches to find</span>
      </>
    )

  }

  render() {
    return (
     <div className="search-wrapper">
        <image href='/src/Images/Selection_030.png' />
        <br />
        <br />
        <input type="text" className="input" placeholder='enter num to search for' />
        <br />
        <br />
        <button onClick={this.handleLinSearch}>Linear Search</button>
        <br />
        <br />
        <button onClick={this.handleBinSearch}>Binary Search</button>
        <br />
        <br />
        <span className="results">PLACEHOLDING</span>
      </div>
    )
  }
}
