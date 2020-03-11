import React from 'react';
import ReactDOM from 'react-dom';
export class App  extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));