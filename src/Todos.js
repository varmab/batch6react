import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    addTodo=()=>{
        this.setState({
            todos:this.state.todos.concat(this.state.todo),
            todo:''
        })
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        console.log(todo);
        this.setState({
            todo
        })
    }

    render(){
        return (
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} name="todo" onChange={this.onTodoChange}/>
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {
                        this.state.todos.map((todo)=>{
                            return <li key={todo}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;