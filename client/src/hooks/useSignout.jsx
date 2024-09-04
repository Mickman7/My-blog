import { useAuthContext } from './useAuthContext'

export const useSignout = () => {
  const { dispatch } = useAuthContext()

  const signOut = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
  }

  return { signOut }
}