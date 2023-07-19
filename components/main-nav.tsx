'use client'

import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export function MainNav() {
  const { data: session } = useSession()

  function handleClick() {
    signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}` })
  }

  return (
    <div className="flex w-full items-center justify-between">
      <Image src="/dejay.png" width={120} height={30} alt="dejay logo" />
      <div>{session?.user.id}님</div>
      <Button className="h-10 px-3 py-2" type="button" onClick={handleClick}>
        로그아웃
      </Button>
    </div>
  )
}
