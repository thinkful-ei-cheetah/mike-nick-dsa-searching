import React, { Component } from 'react'
import './SearchUI.css'

export default class SearchUI extends Component {
  data = [
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5
  ]

  state = {
    input: null,
    search: null,
    count: 0
  }

  handleChange = e => {
    this.setState({ input: e.target.value, search: null })
  }

  handleBinSearch = e => {
    e.preventDefault()

    let count = 0
    let sortedData = [...this.data]
    sortedData.sort()

    count = this.binarySearch(sortedData, this.state.input)
    console.log(count)
    this.setState({
      search: 'Binary Search',
      count: count
    })
  }

  binarySearch(array, value, start, end, currCount) {
    start = start === undefined ? 0 : start
    end = end === undefined ? array.length : end
    currCount = currCount === undefined ? 0 : currCount

    if (start > end) {
      return -1
    }

    const index = Math.floor((start + end) / 2)
    const item = array[index]
    currCount++

    console.log(start, end)
    if (Number(item) === Number(value)) {
      return currCount
    } else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, currCount)
    } else if (item > value) {
      return this.binarySearch(array, value, start, index - 1, currCount)
    }
  }

  handleLinSearch = e => {
    e.preventDefault()

    let count = 0
    let found = false
    const value = Number(this.state.input)

    for (let i = 0; i < this.data.length; i++) {
      count++
      if (this.data[i] === value) {
        found = true
        break
      }
    }

    count = found ? count : -1

    this.setState({
      search: 'Linear Search',
      count: count
    })
  }

  renderResult() {
    console.log(this.state)
    if (!this.state.search) {
      return 'Click a button to perform search'
    }

    if (this.state.count < 0 || this.state.count === undefined) {
      return (
        <>
          <p>{this.state.search} Performed</p>
          <p>{this.state.input} NOT FOUND...</p>
        </>
      )
    }

    return (
      <>
        <p>{this.state.search} Performed</p>
        <p>it took {this.state.count} searches to find</p>
      </>
    )
  }

  render() {
    return (
      <div className="search-wrapper">
        <form>
          <input
            type="text"
            className="input"
            name="input"
            placeholder="enter num to search for"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button onClick={this.handleLinSearch}>Linear Search</button>
          <br />
          <br />
          <button onClick={this.handleBinSearch}>Binary Search</button>
          <br />
          <br />
        </form>

        <span className="results">{this.renderResult()}</span>
      </div>
    )
  }
}
