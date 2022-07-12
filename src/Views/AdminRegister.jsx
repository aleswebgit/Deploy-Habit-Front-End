import React, { useState, useRef, useEffect } from 'react'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'
import Arrow from '../media/icons/Arrow'


function AdminRegister(){
  
  const userRef = useRef()
  const errRef = useRef()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [errorMsg, setErrMsg] = useState('')  
  
  useEffect(()=>{
    userRef.current.focus()
  },[])
  
  useEffect(()=>{
    setErrMsg('')
  },[email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newRegisteredUser = {
      email,
      password
    }
    console.log(newRegisteredUser)


    try {
      const response = await axios.post('/api/auth/signup', 
        JSON.stringify({email, password}), 
        {
          headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*' 
          },
        }
      ).then(response => {
        console.log(response)
        // console.log(response.data.message)
        // console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
      })
      console.log(JSON.stringify(response?.data))
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error.response)
    }
  }

  return(
    <>
      <Navbar/>

      <section className = 'h-max mt-20 mb-20'>

        <p ref={errRef} className={errorMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errorMsg}</p>

        <div className='m-auto w-[313px] rounded-3xl bg-[#F8D1B4]'>
          <div className='p-6'>
            <h1 className='flex items-center justify-center p-14 px-2 text-center text-3xl font-bold text-[#BC4E2A]'>Registro nuevo usuarix</h1>
          
            <form onSubmit={handleSubmit}>
              <label htmlFor='email' className='block w-[269px]'>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} required ref={userRef} id='email' name='email' type='text' className=' w-full rounded-full p-2 text-center' placeholder='Email' />
              </label>
              <label htmlFor='password' className='w-[269px]'>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} required id='password' name='password' type='text' className='mt-3 w-full rounded-full p-2 text-center' placeholder='Contraseña' />
              </label>
              <div className='m-6 flex justify-center'>
                <button type='submit' className='h-10 rounded-full bg-[#BC4E2A] px-5 text-white'>Enviar</button>
              </div>
              <div></div>
            </form>

          </div>
        </div>
        <p className='flex items-center justify-center py-4 px-12 text-center text-[#BC4E2A]'> Asigna email y contraseña para registrar a una nueva persona </p>
        <a 
          href="mailto:yourwebsolutions3000@gmail.com?subject=Info nuevo usuario caritas"
          className="bg-white rounded-3xl text-sm sm:text-lg font-bold py-1 px-4 text-[#BC4E2A]">ENVIAR A USUARIX</a>
      </section>
      <div className='m-4'>
        <Arrow />
      </div>
    </>
  )
}

export default AdminRegister