import React from 'react';
import {connect} from 'react-redux'

import {addTodo, toggleTodo} from '../actions';

class TodoList extends React.Component {
    state = {
        newTodo:''
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        })
    }

    addItem = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
    }

    render(){
        return(
            <>
                <div className ='todo-list'>
                    {this.props.todos.map((todo, index)=>(
                        <h4 onClick ={e => this.toggleTodo(e,index)} key={index}>
                            {todo.value}
                            {todo.completed}
                        </h4>
                    ))}
                </div>
                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder="Add Todo item"
                />
                <button onClick={this.addItem}>Add Todo</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        todos: state.todoList.todos
    };
};

export default connect(
    mapStateToProps,
    { addTodo, toggleTodo }
)(TodoList);