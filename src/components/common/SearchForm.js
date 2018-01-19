import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import {searchFormSubmit} from '../../actions/weatherActions';
class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: this.props.value
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      value : event.target.value
    });
    //console.log(this.state.value);
  }
  onSubmit(e) {
    //console.log("form is sumbitted with value " + this.state.value);
    searchFormSubmit(this.state.value);
  }
  render() {
    return(
      <form className="form" onSubmit={this.onSubmit}>
        {/*<input type="text" value={value} placeholder="Find your location" className="search"/>*/}
        <TextInput name="Hello" value={this.state.value} label="Bebe" onChange={this.onValueChange} classN="search"/>
        <button type="submit" className="buttonPrimary">Find</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
