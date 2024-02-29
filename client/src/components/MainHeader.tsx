import { useState } from 'react';
import './MainHeaderStyles.css';
import {useNavigate} from 'react-router-dom'

const MainHeader = () => {
  const [todo, setTodo] = useState('')
  const history = useNavigate()
  const handleClick =() => {
      history('/login')
      return <p>Hi, {}</p>
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    setTodo( e.target.value)
    
  }
  const handleButton = () => {
    console.log(todo)
    setTodo('')

  }
  
  return (
    <>
        <div className='main-header'>
            <h1>JUMIA</h1>
            <input type='search'value={todo} className='input-search' onChange={handleSearch}/>
            <button className='search'  onClick={handleButton}>Search</button>
            <button className='login'onClick={handleClick}>Login</button>
            <select name="dropdown" id="drop">
                <option value="1"></option>
            </select>
            <h4>Help</h4>
            <select id='drop1'>
                <option value="2"></option>
            </select>
            <h4>Cart</h4>
            
        </div>
    </>
  )
}

export default MainHeader