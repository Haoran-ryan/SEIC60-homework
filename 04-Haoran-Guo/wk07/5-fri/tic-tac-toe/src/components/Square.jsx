import React,{Component} from "react";

class Board extends Component{
    render(){
        return(
            <div className="board-row">
                <button className="square">1</button>
                <button className="square">2</button>
                <button className="square">3</button>
            </div>
        )
    }
}

export default Board;