import './Login.style.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginScreen() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const errorMessage = 'Email ou senha inválidos'

  function handleChange(event) {
    const { name, value } = event.target
    setUserInfo({ ...userInfo, [name]: value })
    console.log(userInfo)
  }

  function handleSubmit() {
    if(userInfo.email === 'carlos@unisinos.com.br' && userInfo.password === '123456') {
      navigate('/home')
    } else {
        alert(errorMessage)
    }
  }

  return (
    <>
      <section className='login'>
        <div className='container-direita'>
            <h1 className='titulo-login'>Webflix</h1>
        </div>
        <div className='container-direita'>
          <div className='login-screen'>
            <h1>Login</h1>
            <div className='login-form'>
              <form action='' className='form-login'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  onChange={handleChange}
                  value={userInfo.email}
                />
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={handleChange}
                  value={userInfo.password}
                />
              </form>
              <button className='button' onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
