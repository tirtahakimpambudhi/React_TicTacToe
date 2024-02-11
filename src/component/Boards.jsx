import { Component } from "react";
import Square from "./Square";
import PropTypes from 'prop-types';

class Boards extends Component {
    constructor(props){
        super(props);//initialize constructor in parent
        this.totalSquare = 9
        this.winner = ''
        this.status = ''
    }

    handleClick(i){
        const nextSquares = this.props.squares.slice()
        if (nextSquares[i] || this.calculateWinner(this.props.squares)) return
        nextSquares[i] = (this.props.xIsNext) ?'X' :'O'
        this.props.onPlay(nextSquares)
    }
    calculateWinner(squares){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
        return false
    }
    render () {
        console.log(this.props.squares)
        this.winner = this.calculateWinner(this.props.squares)
        this.status = (this.winner) ?`Winner : ${this.winner}` :`Next Player : ${(this.props.xIsNext) ?'X' :'O'}`
        const squaresContain = []
        for (let i = 0 ; i < this.totalSquare ; i++){
            squaresContain.push(<Square key={i} value={this.props.squares[i]} onSquareClick={()=>{this.handleClick(i)}}/>)
        }
        return (
            <>
            <div>
                {this.status}
            </div>
            <div className="boards">
            {squaresContain}
            </div>
            </>
        )
    }
}

Boards.propTypes = {
    squares : PropTypes.array.isRequired,
    xIsNext : PropTypes.bool.isRequired,
    onPlay  : PropTypes.func.isRequired
}

export default Boards
