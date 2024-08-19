import React from 'react'
import useTodos from '../../hooks/useTodos'

function Todos() {

    const { todos, loading, error } = useTodos()


    return <>
        <p style={{color:"red"}}>{error.message}</p>
        <h1>Todos</h1>
        <hr />
        {
            loading ? <p>Loading...</p> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        }
    </>
}

export default Todos