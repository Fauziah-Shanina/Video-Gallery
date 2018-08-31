//Curly parentheses has been used just to pull off the property Component from react as a variable code Componenet
// it is equal to => const Component = React.Component;
import React, {Component} from 'react';

class SearchBar extends Component {
constructor(props) {
  super(props)
  this.state= {term :'Starting Value'};
}

  render () {
    return (
    <div>
    <input
    value= {this.state.term}
    onChange={event=>this.setState ({term: event.target.value})} />
    </div>)
  }
 //Define an event handler
 //The standard to name the handler is to puut ON/HANDLE in front of the function name
//we passed an event object because most of events handler called using events

//THE FOLLOWING FUNCTION HAS BEEN CHANGED INTO INLINE FUNCTION

/*onInputChange (event)=>console.log (event.target.value);
 OnInputChange (event) {
 console.log (event.target.value);
}*/



}

export default SearchBar;
