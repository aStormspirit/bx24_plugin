import { UiButton } from '../shared/ui/button'
import UiInput from '../shared/ui/Input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { instance } from '../shared/api/api-instance'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm<{
    login: string
    password: string
  }>()

  const onSubmit: SubmitHandler<any> = (data: any) => {
    instance
      .post('/login', data, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      })
      .then((res) => {
        sessionStorage.setItem('token', res.data.access_token)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
    reset()
  }

  return (
    <div className="flex items-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6 space-y-6">
        <div className="bg-gray-400 mx-auto max-w-sm space-y-2 rounded-md p-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Добро пожаловать!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Don't have an account?
              {/* <Link className="underline" href="#">
              Sign up
            </Link> */}
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-2">
              <label className="pl-4 text-red" htmlFor="email">
                Email
              </label>
              <UiInput
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                inputProps={{
                  placeholder: 'm@example.com',
                  type: 'email',
                  ...register('login'),
                }}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <label className="pl-4" htmlFor="password">
                  Пароль
                </label>
                {/* <Link className="ml-auto inline-block" href="#">
                Forgot password?
              </Link> */}
              </div>
              <UiInput
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                inputProps={{
                  placeholder: 'password',
                  type: 'password',
                  ...register('password'),
                }}
              />
            </div>
            <UiButton variant="primary" className="w-full">
              Войти
            </UiButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
