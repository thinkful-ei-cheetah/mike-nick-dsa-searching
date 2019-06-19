import React from 'react';
import Output from './Output';

export default class Search extends React.Component {
  constructor(){
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
      output:null
    };
  }

  linearSearch(value) {
    this.count = 0;
    console.log(value);
    for(let i = 0; i < this.data.length; i++){
      this.count++;
      if(this.data[i] === value){
        //console.log("found it");
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

  binarySearch() {

  }

  render(){
    return (
      <div className='search-wrapper'>
        <input type="text"  ref={(input) => {this.textInput = input}}/>
        <button type='button' className='linear' onClick={()=> this.linearSearch()}>Linear Search</button>
        <button type='button' className='binary' onClick={()=> this.binarySearch()}>Binary Search</button>
        <Output info={this.state.output}/>
      </div>
    );

  }
}