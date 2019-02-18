import React, { Component } from "react";
import PropTypes from "prop-types";

class MyName extends Component{
    static defaultProps = {
        name : "이정림"
    }
    static propTypes = {
        name : PropTypes.string
    }

    state = {
        number : 0,
        username: "",
        message : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.username+':' + this.state.message);
        this.setState({
            username: "",
            message: ""
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render(){
        return(
            <div className="content">
                <div>안녕하세요. 내 이름은<b>{this.props.name}</b>입니다.</div>
                <p>나이 : {this.state.number}</p>
                <button onClick={ () => {
                        this.setState({
                            number: this.state.number + 1
                        })  
                    }
                }>더하기</button><br />
                <input 
                type="text" 
                name="username" 
                placeholder="이름" 
                value={this.state.username} 
                onChange={this.handleChange} />
                <input 
                type="text" 
                name="message" 
                placeholder="아무말이나 쓰세여" 
                value={this.state.message} 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default MyName;