import React from 'react'
import styled from './Landing.module.css'
import {Link} from "react-router-dom"
import {useState} from 'react'
import validation from './validation'

const Landing = ({login})=>{
  const [userData, setUserData] = useState({ 
    username: '', 
    password: '' });

    const [errors, setErrors] = useState({
      username: '', 
      password: '' 
    })

    const handleInputChange = (event)=>{
setUserData({
  ...userData,
  [event.target.name]: event.target.value
})
setErrors(validation({
  ...userData,
  [event.target.name]: event.target.value

}))
    }


    const handleSubmit = (event)=>{
      event.preventDefault()
      login(userData)
    }

    return (
      <center>
        <div className={styled.App} style={{ padding: '210px' }}>
       
          <img src='https://1.bp.blogspot.com/-4fp_Mo0OIl8/YI_OSROlvnI/AAAAAAAA_3Q/XIN3XnD2Fx4Imd2tBgSv_KADA7m2-fGUwCLcBGAsYHQ/s1600/tipografias-videojuegos.jpg'/>
          <h1 className={styled.styledLetra}>Bienvenidos a mi proyecto individual</h1>
          <h2 className={styled.styledLetra}>Video Games</h2>
          <form onSubmit={handleSubmit}>
            <p>
            <label  className={styled.letraUser} htmlFor="username">Username:</label>
            <input value={userData.username}type="text" name="username" onChange={handleInputChange}/>
            {errors.username && <p className={styled.letraErr}>{errors.username}</p>}
            </p>
            <p>
            <label className={styled.letraUser} htmlFor="">Password:</label>
            <input value={userData.password} type="password" name="password" onChange={handleInputChange}/>
            {errors.password && <p className={styled.letraErr}>{errors.password}</p>}
            </p>
            <button className={styled.styledButton}>
           Login
            </button>
          </form>
        
        
        </div>
        </center>
      );
}

export default Landing