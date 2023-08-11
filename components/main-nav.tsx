'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Dejay } from '@/public/images/image'
import { requestLogout } from '@/services/login'

import { Button } from '@/components/ui/button'

export function MainNav() {
  const router = useRouter()
  // function handleClick() {
  //   signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}` })
  // }

  function logoutClick() {
    requestLogout()
    router.push('/')
  }

  return (
    <div className="pl-5 pr-5 flex w-full items-center justify-between h-16 border-b border-b-slate-300 bg-white">
      <Image src={Dejay} width={120} height={30} alt="dejay logo" />
      <div className="flex flex-row">
        <div className="mr-3 mt-2">user님</div>
        <Button className="h-10 px-3 py-2" type="button" onClick={() => logoutClick()}>
          로그아웃
        </Button>
      </div>
    </div>
  )
}
