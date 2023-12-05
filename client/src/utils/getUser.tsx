import { useState, useEffect } from 'react';
import { BX24 } from 'bx24';

function useCustomHook() {
  const [auth, setAuth] = useState<any>()
  const [user, setUser] = useState<any>()

  const urlParams = new URLSearchParams(window.location.search)

  const baseUrl = `${
      urlParams.get('PROTOCOL') === '0' ? 'https' : 'http'
    }://${urlParams.get('DOMAIN')}`

  const bx24 = new BX24(window)

  useEffect(() => {
    
    bx24.getAuth().then((auth) => {
      setAuth(auth)
    })

  }, []);

  return auth;
}

export default useCustomHook;

// const [auth, setAuth] = useState<any>()
// const [user, setUser] = useState<any>()

// const urlParams = new URLSearchParams(window.location.search)
// const baseUrl = `${
//   urlParams.get('PROTOCOL') === '0' ? 'https' : 'http'
// }://${urlParams.get('DOMAIN')}`
// const bx24 = new BX24(window)

// const { isLoading, isError, data } = useQuery('currentUser', async () => {
//   try {
//     const auth = await bx24.getAuth()
//     const res = await axios.get(
//       `https://mpkubatura.bitrix24.ru/rest/user.current?auth=${auth?.ACCESS_TOKEN}`
//     )
//     const userData = res.data.result
//     setUser(userData?.NAME)
//   } catch (err) {
//     console.log(err)
//   }
// })