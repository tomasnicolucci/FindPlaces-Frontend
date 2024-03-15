import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated, redirectPath = '/'}) => {
  if(!isAuthenticated){
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />  
}

export default ProtectedRoute;