import { useState } from "react"
import axios from 'axios'
const Additem  = () =>{
    const [task,settask] = useState('hello');
    const additem = (e) => {
        {task.length === 0 && console.log("Enter some task to add")}
        {task.length !==0 &&
        axios.post('http://localhost:4000/add',{task : task})
        .then(result => {location.reload()})
        .catch(err => {console.log(err)})
        settask('');
        }
       
    }
    return <div className="additem">
    <input type="text" placeholder="Enter Task" onChange={(e)=>{settask(e.target.value);}} />
    <button onClick={additem}>(DSA or DEV)DONE</button>
    </div>
}
export default Additem;