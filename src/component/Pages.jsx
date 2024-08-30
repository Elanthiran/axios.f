
import { useThisContext } from "./Content/usercontext"
import { useState } from "react";


const Pages = () => {
    const{data,handleDelete,handleUpdate}=useThisContext();
    const[editId,setEditId]=useState(null);
    const[updateName,setUpdateName]=useState("");
    const[updateEmail,setUpdateEmail]=useState("");
    const[updatePhone,setUpdatePhone]=useState("");


    const handleEdit=(user)=>
    {
        setEditId(user.id)
        setUpdateName(user.name)
        setUpdateEmail(user.email)
        setUpdatePhone(user.phone)
    }

    const EditSubmit = (e) => {
        e.preventDefault();
        if (editId) {
          handleUpdate(editId, {
            name: updateName,
            email: updateEmail,
            phone: updatePhone,
          });
          setEditId(null);
        }
      };
  return (
    <div>
        <div className="table-list px-2">
      <table className="table table-bordered px-2">
        <thead>
          <tr className="table-row">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {data.map((user,index)=>
               <tr key={index}>
                <td>{index+1}</td>
                <td>
                    {editId==user.id?(
                        <input type="text" value={updateName} onChange={(e)=>setUpdateName(e.target.value)} />
                    )
                    : (user.name)
                    }
                    
                  </td>
                <td> {editId==user.id?(
                        <input type="text" value={updateEmail} onChange={(e)=>setUpdateEmail(e.target.value)} />
                    )
                    : (user.email)
                    }</td>
                <td> {editId==user.id?(
                        <input type="text" value={updatePhone} onChange={(e)=>setUpdatePhone(e.target.value)} />
                    )
                    : (user.phone)
                    }</td>
                <td>
                   { editId==user.id?(<button onClick={EditSubmit} className="btn btn-info ">Update</button>)
                    :(
                    <div>
                    <button onClick={()=>handleEdit(user)} className="btn btn-warning m-2">Edit</button>
                      <button onClick={()=>handleDelete(user.id)} className="btn btn-danger">Delete</button>
                    </div>
            )}
            </td>
               </tr>

            )}
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default Pages