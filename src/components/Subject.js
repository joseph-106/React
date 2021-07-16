import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
            <h1><a href="/" onClick={function(e){
              e.preventDefault(); //render 함수 흐름을 멈춘다
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;