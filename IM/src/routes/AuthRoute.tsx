import React from 'react'
import { Navigate } from 'react-router-dom'


interface AuthRouteProps {
  auth : boolean,
  component : React.ReactNode
}

const AuthRoute = ({auth, component} : AuthRouteProps) => {

  if (!auth) {
    alert('로그인이 필요합니다');
  }
  return (
    auth ? component : <Navigate to={'/login'}/>
  )
}

export default AuthRoute