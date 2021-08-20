import { Component } from "react";
import { connect } from "react-redux";

class Buttons extends Component {
  onIncrease() {
    this.props.increment();
  }

  onDecrease() {
    this.props.decrement();
  }

  render() {
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.onIncrease.bind(this)}>increment</button>
        <button onClick={this.onDecrease.bind(this)}>decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DEC" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
