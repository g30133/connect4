import * as React from 'react';
import './App.css';

import Board from './Board'
import Message from './Message'
import Util from './Util'

interface AppState {
  board: string[][]
  xTurn: boolean
  winner: string
}

class App extends React.Component<any, AppState> {

  constructor(props:any) {
    super(props)
    this.onColumnClicked = this.onColumnClicked.bind(this)
    this.state = {
      // this way facing up ----->>
      board: [
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','','']],
      xTurn: true,
      winner: ''
    }
  }

  public render() {
    return (
      <div className="app">
        <Board
          columns={this.state.board}
          onColumnClicked={this.onColumnClicked}
        />
        <Message
          xTurn={this.state.xTurn}
          winner={this.state.winner}
        />
      </div>
    );
  }

  private onColumnClicked(colIx:number) {
    console.log('onColumnClicked(' + colIx + ')')
    if(this.state.winner === '') {
      this.addToColumn(colIx, this.state.xTurn ? 'X' : 'O')
    }
  }

  private addToColumn(colIx:number, mark:string) {
    const newBoard = Array.from(this.state.board)
    console.log('newBoard[colIx]' + newBoard[colIx])
    for(let cellIndex = 0; cellIndex < newBoard[colIx].length; cellIndex++) {
      if(newBoard[colIx][cellIndex] === '') {
        if(Util.isValidMove(newBoard[colIx])) {
          newBoard[colIx][cellIndex] = mark
          this.setState((prevState) => {
            return {
              board: newBoard,
              xTurn: !prevState.xTurn
            }
          }, () => {
            const winner = Util.checkForWinner(this.state.board)
            if(winner !== '') {
              this.setState({
                winner: winner
              })
            } else {
              if(Util.isBoardFull(this.state.board)) {
                this.setState({
                  winner: 'tie'
                })
              }
            }
          })
          break
        }
      }
    }
    
  }
}

export default App;
