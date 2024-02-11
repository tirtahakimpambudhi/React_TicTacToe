import { Component } from "react";
import PropTypes from "prop-types";


class Square extends Component {
    render() {
        return <button className="square" onClick={this.props.onSquareClick}>{this.props.value}</button>
    }
}

Square.propTypes = {
    value : PropTypes.string.isRequired,
    onSquareClick : PropTypes.func.isRequired
}

export default Square