import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-96 flex-col items-center gap-2">
      <h1 className="text-2xl font-semibold tracking-tighter">DEJAY</h1>
      <LoginForm />
    </div>
  )
}
