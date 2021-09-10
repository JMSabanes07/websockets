import React, { useState, useContext } from "react";
import { useRouter } from 'next/router'
import { Context } from '/context/appContext';

const Login = () => {
   const router = useRouter()
   const appContext = useContext(Context)
   const [inputValues, setImputValues] = useState({
      username: '',
      password: ''
   })

   const handleSubmit = async (e) => {
      e.preventDefault()

      const results = await fetch('/api/auth', {
         method: 'POST',
         body: JSON.stringify(inputValues),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      const status = results.status
      const body = await results.json()

      if(status === 200){
         appContext.handleAppUser(body)
         router.push('/')
      }
   }
   const handleChange = (e) => {
      setImputValues({
         ...inputValues,
         [e.target.id]: e.target.value,
      })
   }
   
   

   return (
      <main className="login-page">
         <section className="login">
            <form onSubmit={handleSubmit}>
               <label htmlFor="username">Usuario</label>
               <input id='username' type="text" className='input' value={inputValues.username} placeholder='Ingrese su usuario' onChange={handleChange}/>
               <label htmlFor="password">Contraseña</label>
               <input id='password' type="password" className='input' value={inputValues.password} placeholder='Ingrese su contraseña' onChange={handleChange}/>
               <button>Iniciar Sesión</button>
            </form>
         </section>
         <section className="background">

         </section>
      </main>
   )
}

export default Login;