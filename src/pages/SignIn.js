import React,{useState} from 'react'
import "./signup.css"
import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const SignIn = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {user,login} = UserAuth()
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            await login(email,password)
            navigate('/')
        }catch(err){
            setError(err.message)
            console.log(err)
        }

    }

  return (
    <div className='signup'>
        <div className='inner-div d-flex justify-content-center align-items-center'>
            <div style={{height:'400px',width:'340px'}} className='mx-auto signUp-box px-5 py-4'>
            <h3 style={{fontWeight:'bold'}}>Sign In</h3>
                {error?<p style={{opacity:'86%'}}>{error}</p>:null}
                <form onSubmit={handleSubmit} >
                    
                    <input onChange={(e)=>setEmail(e.target.value)} autoComplete='email' className='px-2 py-2 w-100 mt-4 ' placeholder='Email' type='text'/>
                    <input onChange={(e)=>setPassword(e.target.value)} autoComplete='current-password' className='px-2 py-2 w-100 mt-3' placeholder='Password'  type='password' />
                    <button className='w-100 py-2 mt-4 text-white'>Sign In</button>
                </form>
                <div className='d-flex justify-content-between mt-2 text-sm text-secondary'>
                    <p style={{fontSize:'14px'}}><input className=''  type='checkbox' /> Remember Me</p>
                    <p style={{fontSize:'14px'}}>Need help?</p>
                </div>
                <p  style={{fontSize:'13px'}} className='text-secondary mt-3'>New to Netflix? <Link to='/signup' style={{textDecoration:'none'}} className='text-white'> Sing Up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn