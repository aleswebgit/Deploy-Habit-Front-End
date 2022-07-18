import { useRef, useState, useEffect } from 'react'
import axios from '../api/axios'

function LoginForm (){

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

    try {
      const response = await axios.post('/api/auth/signin', 
        JSON.stringify({email, password}), 
        {
          headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*' 
          },
        }
      ).then(response => {
        console.log(response)
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
    <section className='flex md:min-h-screen items-stretch'>
      
      <p ref={errRef} className={errorMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errorMsg}</p>

      <div className='relative hidden w-1/2 items-center bg-cover bg-no-repeat lg:flex bg-[url("https://static.vecteezy.com/system/resources/previews/005/611/051/non_2x/hands-of-different-people-and-hearts-on-a-white-background-tolerance-illustration-free-vector.jpg")] ' >
        <div className='absolute inset-0 z-0 bg-orange-400 opacity-70'>
        </div>
        <div className='z-10 w-full px-24'>
          <h1 className='text-left text-8xl font-extrabold tracking-wide text-white'>Somos lo que donamos.</h1>
          <p className='my-4 text-3xl text-white'>Somos amor.</p>
        </div>
      </div>
      <div className='z-0 flex w-full items-center justify-center px-0 text-center md:px-16 lg:w-1/2' >
        <div className='absolute inset-0 z-10 items-center bg-[#FDF6EC] bg-cover bg-no-repeat lg:hidden h-full  sm:background-image:none'>
          <div className='absolute inset-0 z-0 bg-black opacity-10'></div>
        </div>
        <div className='z-20 w-full py-6'>
          <h1 className='inline-fle my-10 mb-40 h-7 w-auto text-5xl text-[#BC4E2A] sm:h-8'>¡Te damos la bienvenida!</h1>
      

          <form onSubmit={handleSubmit} className='mx-auto w-full px-4 sm:w-2/3 lg:px-0'>
            <div className='pb-2 pt-4'>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} ref={userRef} type='email' name='email' id='email' placeholder='Email' className='w-full rounded-full bg-orange-300 p-4 text-center text-lg placeholder:text-black' />
            </div>
            <div className='pb-2 pt-4'>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full rounded-full bg-orange-300 p-4 text-center text-lg placeholder:text-black' type='password' name='password' id='password' placeholder='Constraseña' />
            </div>
            <div className='px-4 pb-2 pt-4'>
              <button type="submit" className='text-white m-auto block w-40 justify-center rounded-full bg-orange-500 p-2 text-lg uppercase hover:bg-orange-600 focus:outline-none'>Acceder</button>
            </div>
          </form>

          <div className='mt-10 text-center font-extralight text-orange-900 hover:text-black hover:underline'>
            <a href='/#'>Problemas con la contraseña?</a>
          </div>
        </div>
      </div>
    </section>
    
  )
    
}

export default LoginForm

