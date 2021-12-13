
import './App.css';
import React from 'react';

function Square(props){
  return (
    <button className = 'square' onClick = {props.onClick}>
        {props.value}
    </button>
  )
}

class Board extends React.Component{
  

  //相当于类中的一个方法成员
   renderSquare(i){
     return(
      <Square 
        value = {this.props.squares[i]} 
        onClick = {() => this.props.onClick(i)}/>
     )
   }

   render(){
     return(
       <div>
         <div className = 'BoardRow'>
           {this.renderSquare(0)}
           {this.renderSquare(1)}
           {this.renderSquare(2)}
         </div>
         <div className = 'BoardRow'>
           {this.renderSquare(3)}
           {this.renderSquare(4)}
           {this.renderSquare(5)}
         </div>
         <div className = 'BoardRow'>
           {this.renderSquare(6)}
           {this.renderSquare(7)}
           {this.renderSquare(8)}
         </div>
       </div>
     )
   }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNum: 0,
    }
  }

  handleClick(i){
    //history保存从开始到当前step的历史记录，可以悔棋重下
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    //阻止赢了以后继续下棋，和下好的棋被改动
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squares}]),
      xIsNext: !this.state.xIsNext,
      //0是game start
      stepNum: history.length,
    });
  }

  jumpTo(step){
    this.setState({
      stepNum: step,
      xIsNext: (step % 2) === 0,//表示下一步是X
    })
  }

  render(){
    const history = this.state.history;
    //获得当前的squares
    const current = history[this.state.stepNum];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) =>{//value\key\array
      const notion = move ?
        'Move #' + move:  'Game start';
      return (
        <li key = {move}> 
          <button onClick = {() => {
            this.jumpTo(move)
          }}>{notion}</button>
        </li>
      )
    });

    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return(
      <div className = 'game'>
        <div className = 'game-board'>
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className = 'game-info'>
            <div className = 'status'>{status}</div>
            <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4 ,5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4 ,7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    //判断不为null
    if(squares[a] && (squares[a] === squares[b]) && (squares[b] === squares[c])){
      return squares[a];
    }
  }
  return null;
}

function App() {
  return (
    < Game />
  );
}

export default App;
