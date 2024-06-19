import { useEffect, useState } from "react";
import Task from "./Task";
import axios from 'axios';
const Itemslist = () => {
    // const removeitem = (id) => {
    //     axios.delete('http://localhost:4000/delete/'+id)
    //     .then(result => {location.reload()})
    //     .catch(err => {console.log(err)})
    // }
    const [tasks,settasks] = useState([]);
    // useEffect(()=>{
    //     axios.get('http://localhost:4000/get')
    //     .then(result => settasks(result.data))
    //     .catch(err => console.log(err))
    // }, []);

    useEffect(() => {
        axios.get('http://localhost:4000/get')
        .then(result => settasks(result.data))
        .catch(err => console.log(err))
    },[])
    
    const removeitem = (id) => {
        axios.delete('http://localhost:4000/delete/'+id)
        .then(result => location.reload())
        .catch(err => console.log(err))
    }
    return <>
    <div className="itemslist">
        {tasks.map(item => (
            <div className="itemslist__element" key={item._id}>
            <p>{item.task}</p>
            <button onClick={() => {removeitem(item._id)}}>Remove</button>
        </div>
        
        ))}
       
        
    </div>
    </>
}
export default Itemslist;