import useAuthStore from '@/pages/Login/store';
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'


interface AuthRouteProps {
  component : React.ReactNode
}

const AuthRoute = ({component} : AuthRouteProps) => {

  const {isLoggedIn} = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다');
    }
  }, []); 

  return (
    isLoggedIn ? component : <Navigate to={'/login'}/>
  )
}

export default AuthRoute