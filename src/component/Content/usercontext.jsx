import { createContext ,useContext, useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const UserContext =createContext({
    data: [],
    name: "",
    email: "",
    phone: "",
    setData: () => {},
    setName: () => {},
    setEmail: () => {},
    setPhone: () => {},
    Add: () => {},
    handleSubmit: () => {},
    handleUpdate: () => {},
    handleDelete: () => {},
})
export const useThisContext=()=>useContext(UserContext)

const API = "https://jsonplaceholder.typicode.com/users";

export function UserContextProvider({children})
{
const[data,setData]=useState([])
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[phone,setPhone]=useState("")
const Add = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };
  let navigate = useNavigate();

  const handleSubmit = (e, Data) => {
    e.preventDefault();
    axios
      .post(API,Data) 
      .then((response) => {
        console.log(response);
        Add(response.data);
        navigate("/Pages");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUpdate = (id, data) => {
    axios
      .put(`${API}/${id}`, data)
      .then((response) => {
        const updatedUser = response.data;
        setData((prevData) =>
          prevData.map((user) => (user.id === id ? updatedUser : user))
        );
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

const value=
{
    data,
    name,
    email,
    phone,
    setData,
    setName,
    setEmail,
    setPhone,
    Add,
    handleSubmit,
    handleUpdate,
    handleDelete
};
return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};