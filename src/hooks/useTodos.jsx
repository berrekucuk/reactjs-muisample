import axios from "axios";
import { useEffect, useState } from "react";


//Custom hook
function useTodos(){

    const [todos, settodos] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res =>{
            settodos(res.data)
            setloading(false)
        })
        .catch(err =>{
            seterror(err)
            setloading(false)
        })
    },[])

    return {todos,loading,error}
}

export default useTodos