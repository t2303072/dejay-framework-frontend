import React, { MouseEventHandler, ReactNode, useEffect, useRef, useState } from 'react'
import Image from '@/node_modules/next/image'
import { MoreSelect } from '@/public/svgs/svg'
import { ListBoxPositionType } from '@/types'
import { Transition } from '@windmill/react-ui'

import { List } from '@/components/ui/select'

interface TableBodySelectProps {
  openSelect: boolean
  listBoxPosition: ListBoxPositionType
  getOpenModal: (open: boolean) => void
}

export default function TableBodySelect({ openSelect, listBoxPosition, getOpenModal }: TableBodySelectProps) {
  const eventEl = useRef<HTMLDivElement>(null)
  const [clickValue, setClickValue] = useState<string | number>()
  const [show, setShow] = useState<boolean>(false)

  const getClickValue = (value: string | number) => {
    setClickValue(value)
  }

  useEffect(() => {
    setShow(openSelect)
  }, [openSelect])

  // getClickValue : 클릭한 order값 (Delete, Edit)

  const handleClickOutside = (e: MouseEvent) => {
    if (eventEl.current && !eventEl.current.contains(e.target as Node)) {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
  }, [])

  return (
    <div ref={eventEl}>
      <Image alt="more menu icon" width={20} height={20} src={MoreSelect} />
      <Transition
        show={show}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-75 transform"
      >
        <ul
          className={`${
            listBoxPosition === 'top' ? 'absolute bottom-[56px] right-[19px]' : 'absolute'
          } &&  z-50 w-20 rounded-lg border border-slate-200 bg-white font-medium text-slate-500`}
        >
          <List
            value="Edit"
            getOpenModal={(open) => getOpenModal(open)}
            getClickValue={(text: string | number) => getClickValue}
          ></List>
          <List
            value="Delete"
            getOpenModal={(open) => {}}
            getClickValue={(text: string | number) => getClickValue}
          ></List>
        </ul>
      </Transition>
    </div>
  )
}
