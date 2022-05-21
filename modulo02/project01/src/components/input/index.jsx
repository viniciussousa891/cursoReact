import { Component } from "react";
import './styles.css'

class Input extends Component {
  render() {
    const { searchValue, handleChange } = this.props;
    return (
      <input
        className="text-input"
        onChange={handleChange}
        value={searchValue} 
        placeholder="Type your search"
        type="search"/>
    )
  }
}

export default Input;