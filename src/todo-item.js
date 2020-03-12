import React, { Component } from 'react';


class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type="checkbox"/>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

export default TodoItem;