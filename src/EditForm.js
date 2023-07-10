import {useState} from "react";
import {useEffect} from 'react';
const EditForm=(props)=>
{
    const[user,setUser]=useState(props.currentUser)
    //console.log(user)
    useEffect(()=>{
        setUser(props.currentUser)
     },[props])  
  // const [name,setValue]=useState('') arun teaching
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})
      }
    return(
       <form onSubmit={
        event=>{
        event.preventDefault();
        if(!user.name || !user.username) return;
        props.updateUser(user.id,user)
      } }>
        <label>Name</label>
        <input type="text"  onChange={handleInputChange} name="name" value={user.name}/>
        <br/>
        <br/>
        <label>UserName</label>
        <input type="text" onChange={handleInputChange} name="username" value={user.username}/>
        <br/>
        <br/>
        <button >UpdatetUser</button>
        <button className="button muted-button" onClick={()=>{props.setEditing(false)}}>Cancel</button>
       </form>
    )
}
export default EditForm;