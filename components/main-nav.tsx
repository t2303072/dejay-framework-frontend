'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export function MainNav() {
  const router = useRouter()

  function handleClick() {
    router.push('/')
  }

  return (
    <div className="flex w-full items-center justify-between">
      <Image src="/dejay.png" width={120} height={30} alt="dejay logo" />
      <Button className="h-10 px-3 py-2" type="button" onClick={handleClick}>
        로그아웃
      </Button>
    </div>
  )
}
