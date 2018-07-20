import React, { Component } from 'react';
import TodoItem from './TodoItem';

interface Todo { text: string };

export default class TodoList extends Component {
    state = {
        todos: [] as Todo[],
        inputText: ''
    }
    render() {
        return (
            <span>
                <input type="text" value={this.state.inputText} onChange={(value) => this.setState({inputText: value.target.value})} />
                <input type="button" value="Add todo" onClick={() => this.addClick(this.state.inputText)} />
                {this.renderTodos()}
            </span>
        );
    }

    addClick = (text:string) => {
        const todos = this.state.todos;
        todos.push({text});
        this.setState({
            todos,
            inputText: ''
        });
    }

    renderTodos = () => {
        if (!this.state.todos.length) {
            return (<div>There are no todos</div>);
        }

        return this.state.todos.map((todo, i) => {
            return <TodoItem text={todo.text} index={i} />
        });
    }

}