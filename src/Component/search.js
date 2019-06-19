import React from 'react';
import Output from './Output';
import './search.css';

export default class Search extends React.Component {
  constructor() {
    super();
    this.data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 
                53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 
                33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 
                93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 
                16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 
                97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 
                26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 
                9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 
                42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
    this.count = 0;
    this.state = {
      output: null
    };
  }

  linearSearch() {
    this.count = 0;
    const value = parseInt(this.textInput.value.trim(), 10);
    console.log(value);
    this.textInput.value = '';
    for (let i = 0; i < this.data.length; i++) {
      this.count++;
      if (this.data[i] === value) {
        const output = `${value} found in position ${i} with ${this.count} tries`;
        this.setState({output:output});
        this.count=0;
        return i;
      } 
    }
    const output = `${value} is not found`;
    this.setState({output:output});
    return false;
  }

  binarySearch(data, value, start = 0, end = this.data.length) {
    this.count++;
    if (start > end) {
      return - 1;
    }
    // find the midpoint of item
    const index = Math.floor((start + end) / 2);
    console.log(`start: ${data[start]}, end: ${data[end]}, midpoint: ${data[index]}`)
    console.log(`index is here: ${index}`)
    const item = data[index];
    console.log(start, end);
    // if the middle element is the target them return that location
    if (item === value) {
      const output = `${value} found with ${this.count} tries`;
      this.setState({output: output});
      this.count = 0;
      return index;
    }
    // if the middle element is less than the targeted value then return the 
    // target that is on the right and eliminate all the left side
    // only look at the values on the right side from the said middle
    else if (item < value) {
      return this.binarySearch(data, value, index + 1, end);
    }
    // if the middle element is greater than the targeted value then the 
    // target is on the left side of the said middle value
    else if (item > value) {
        return this.binarySearch(data, value, start, index - 1);
    }
    this.count = 0;
  }

  onBinarySearch() {
    const value = parseInt(this.textInput.value.trim(), 10);
    this.textInput.value = '';
    // sorts the array from lowest to greatest
    let newData = this.data.sort(function(a, b) {return a - b});
    this.binarySearch(newData,value);
  }

  output() {
    const info = this.props.info;
      return <p>{info}</p>;
  }

  render() {
    return (
      <div className='search-wrapper'>
        <input type="text"  ref={(input) => {this.textInput = input}}/>
        <button type='button' className='linear' onClick={()=> this.linearSearch()}>Linear Search</button>
        <button type='button' className='binary' onClick={()=> this.onBinarySearch()}>Binary Search</button>
        <Output info={this.state.output}/>
      </div>
    );
  }
}