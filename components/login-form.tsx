'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { requestLogin } from '@/services/login'
import { ResultStatus } from '@/types'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid'
import { signIn } from 'next-auth/react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui/button'
import { Spin } from '@/components/ui/spin'

const iconOutFocusColor = 'fill-slate-400'
const iconInFocusColor = 'fill-slate-950'

export function LoginForm() {
  const [idIconColor, setIdIconColor] = React.useState<string>(iconOutFocusColor)
  const [pwIconColor, setPwIconColor] = React.useState<string>(iconOutFocusColor)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [userId, setUserId] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const idRef = React.useRef<HTMLInputElement>(null)
  const pwRef = React.useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    if (e.target.id === 'id') {
      setIdIconColor(iconInFocusColor)
    } else {
      setPwIconColor(iconInFocusColor)
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (e.target.id === 'id') {
      setIdIconColor(iconOutFocusColor)
    } else {
      setPwIconColor(iconOutFocusColor)
    }
  }

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault()

  //   setIsLoading(true)

  //   const res = await signIn('credentials', {
  //     userName: idRef.current?.value,
  //     password: pwRef.current?.value,
  //     callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/dashboard`,
  //     redirect: false,
  //   })

  //   if (res?.url) {
  //     router.push('/dashboard')
  //   }

  //   setIsLoading(false)
  // }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsLoading(true)

    requestLogin({ userName: userId, password: password }).then((result) => {
      setIsLoading(false)
      if (result?.resultStatus.code === 200) {
        router.push('/dashboard')
      }
    })
  }

  return (
    <form className="flex w-full flex-col items-center gap-2" onSubmit={handleSubmit}>
      <div className="flex w-full items-center">
        <UserIcon className={twMerge('absolute ml-2 h-4', idIconColor)} />
        <input
          className="h-10 w-full rounded-md border py-2 pl-7 pr-3 text-sm outline-none focus:border-slate-700"
          id="id"
          type="text"
          placeholder="아이디"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={idRef}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center">
        <LockClosedIcon className={twMerge('absolute ml-2 h-4', pwIconColor)} />
        <input
          className="h-10 w-full rounded-md border py-2 pl-7 pr-3 text-sm outline-none focus:border-slate-700"
          id="pw"
          type="password"
          placeholder="비밀번호"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={pwRef}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="w-full">
        <Button className="h-10 w-full disabled:bg-slate-700" disabled={isLoading}>
          {isLoading ? (
            <div className="flex justify-center">
              <Spin className="mr-2 h-5 w-5" />
              로그인...
            </div>
          ) : (
            '로그인'
          )}
        </Button>
      </div>
    </form>
  )
}
