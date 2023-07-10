import {useState} from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm"
import EditForm from "./EditForm";
function App()
{
    const usersData=[
        {id:1,name:'chandru',username:'chandruchandru'},
        {id:2,name:'arun',username:'arunarun'}
    ]  
    const addUser=(user)=>{
        user.id=users.length+1
        setUsers([...users,user])
    }
    const deleteUser=(id)=>{
       setUsers(users.filter((user)=>user.id!==id))
       setEditing(false)
    }
    const [users,setUsers]=useState(usersData)
    const [editing,setEditing]=useState(false)
    const initialFormState={id:'',name:'',username:''}
    const [currentUser,setCurrentUser]=useState(initialFormState)
    const editRow=(user)=>
    {
        setEditing(true)
        setCurrentUser({id:user.id,name:user.name,username:user.username}) 
    }
    const updateUser=(id,updateUser)=>{
        setEditing(false)
        setUsers(users.map((user)=>(user.id===id?updateUser:user)))
    }
    return(
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                 <div className="flex-large">
                    {editing?(
                        <div>
                           <h2>Edit User Form</h2>
                           <EditForm currentUser={currentUser} updateUser={updateUser} setEditing={setEditing}/>
                        </div>
                    ):
                    (
                        <div>
                           <h2>Add user</h2>
                           <AddUserForm addUser={addUser}/>
                        </div>
                    )}  
                 </div>  
                
                 <div className="flex-large">
                    <h2>view users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '
                 </div>
            </div>
        </div>
        
    )
}

export default App;