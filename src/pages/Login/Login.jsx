import React from 'react'
import Footer from '../../components/Footer/Footer'
import IntroBanner from '../../components/IntroBanner/IntroBanner'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
  return (
    <div>
        <IntroBanner/>
        <LoginForm/>
        <Footer/>
    </div>
  )
}

export default Login