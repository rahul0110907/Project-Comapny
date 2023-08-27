import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Todo = ({currentUser}) => {
    const[todo ,setTodo]=useState('');
    const[todos,setTodos]=useState([]);
  
    const handleSubmit=(e)=>{
  e.preventDefault();
 
  if(todo!==''){ //condtional statement
    setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    setTodo('');
  }
    }
  
    const handleDelete=(id)=>{
  const deletetodo = todos.filter((item)=>item.id!==id);
  setTodos([...deletetodo])
  
    }
  
  return (
    <div className="min-h-[100px] flex justify-center items-center bg-black  flex-col">
       <h1 className="flex justify-center items-center  text-3xl font-bold text-white">Welcome, {currentUser.name}!</h1>
    <div className='flex flex-col border border-gray-500 h-[100vh] mt-5 mb-5 items-center justify-center p-5 text-lg text-white overflow-hidden'>
      <h1 className='mb-5 text-3xl font-bold'>Todo List</h1>
      <form  onSubmit={handleSubmit} className='flex w-[500px] justify-around'>
        <input type='text' className='w-[80%] rounded-lg p-2.5 border-none text-black' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button className='border-none py-2.5 px-5 mx-2 rounded-md text-lg bg-green-400 text-white'>Add</button>
      </form>
      <ul className='list-none m-0 p-0'>
     
      {
      todos.map((item) => (
      <li className="my-2.5 bg-green-100 py-2.5 px-5 flex w-[400px] items-center rounded-lg">
        <span className="flex-1 text-black overflow-hidden break-words" key={item.id}>
          {item.todo}
        </span>
       
        <button className='text-black' onClick={()=>handleDelete(item.id)} ><CloseIcon/></button>
      </li>
    ))}
      </ul>
    </div>
  </div>
  )
}

export default Todo