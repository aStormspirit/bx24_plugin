import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }: any) => {
  const accessToken = sessionStorage.getItem('token')

  if (!accessToken || accessToken === 'undefined' || accessToken === null) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default ProtectedRoutes
