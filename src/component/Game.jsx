import { Component } from "react";
import Boards from "./Boards";
class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            history : [Array(9).fill(null)],
            currentMove : 0
        }
        this.currentSquares = []
        this.moves = []
        this.xIsNext = true
        this.handlePlay = this.handlePlay.bind(this);
    }
    handlePlay(nextSquares) {
        const nextHistory = [...this.state.history.slice(0, this.state.currentMove + 1), nextSquares];
        this.setState({
            history: nextHistory,
            currentMove: nextHistory.length - 1
        });
    }
    
    jumpTo(nextIndex){
        this.setState(() => {
            return {
                currentMove : nextIndex
            }
        })
    }
    render(){

        this.moves = this.state.history.map((squares,index)=>{
            let description = (index > 0) ?`Go to move #${index}` :'Go to game start'
            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}>{description}</button>
                </li>
            )
        })
        this.currentSquares = this.state.history[this.state.currentMove]
        this.xIsNext = this.state.currentMove % 2 === 0
        return (
            <div className="game">
                <div className="game-boards">
                    <Boards xIsNext={this.xIsNext} squares={this.currentSquares} onPlay={this.handlePlay} />
                    
                </div>

                <div className="game-info">
                    <ol>
                        {this.moves}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Game