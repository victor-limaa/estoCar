import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../api'
import './styles.css'

function Login (){

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const history = useHistory()

   const handleEmail = (e) => {
      const email = e.target.value
      setEmail(email)
   }
   const handlePassword = (e) => {
      const password = e.target.value
      setPassword(password)
   }

   const login = async (e) => {
      e.preventDefault()
      if(email && password){

         try{
           const res = await api.post('login',
            {email, password})

            localStorage.setItem("authorization-token", res.data)
            
            return history.push("/home")

         } catch(err){
            console.log(err)
         }
      }
   }

   return (
      <>
      <div className='myBg'>
      <div className="container">
         <div className="row align-items-center justify-content-center centralize">
            <div className='loginContainer'>
               <h1>EstoCar</h1>

               <form className='form-group'>
                  <h4>Email:</h4>
                  <input className='form-control shadow mb-3' type='text' name='email' onChange={handleEmail} />
                  <h4>Senha:</h4>
                  <input className='form-control shadow' type='password' name='senha' onChange={handlePassword} />
                  <br/>
                  <button onClick={login} className='btn myBtn'>Entrar</button>
               </form>
         </div>
         </div>
      </div>
      </div>
      </>
   )
}

export default Login