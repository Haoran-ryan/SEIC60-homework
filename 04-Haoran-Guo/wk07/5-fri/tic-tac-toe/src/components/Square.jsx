import React,{Component} from "react";

class Square extends Component{
    render(){
        function handleClick(){
            console.log('clicked')
        }
        return(
            <>
                <button className="square" onClick={handleClick}>{ this.props.value }</button>
            </>
        )
    }
}

export default Square;