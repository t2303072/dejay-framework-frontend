'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Transition } from '@windmill/react-ui'

type ListOrder = 'Asc' | 'Desc'

interface ListProps {
  getClickedHeaderName: (value: string) => void
  getClickValue: (value: string) => void
  value: string
  headerName: string
}

interface TableHeaderSelectProps {
  headerName: string
  openSelect: boolean
  setTableOrder: (value: string) => void
  getClickedHeaderName: (value: string) => void
}

function List({ headerName, getClickedHeaderName, getClickValue, value }: ListProps) {
  return (
    <li
      onClick={() => {
        getClickValue(value)
        getClickedHeaderName(headerName)
      }}
      className="m-1 cursor-pointer rounded-lg p-1 hover:bg-neutral-50"
    >
      {value}
    </li>
  )
}

export default function TableHeaderSelect({
  headerName,
  openSelect,
  setTableOrder,
  getClickedHeaderName,
}: TableHeaderSelectProps) {
  const eventEl = useRef<HTMLUListElement>(null)
  const [clickValue, setClickValue] = useState<string>()
  const [show, setShow] = useState<boolean>(false)

  const getClickValue = (order: string) => {
    setClickValue(order)
    setTableOrder(order)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (eventEl.current && !eventEl.current.contains(e.target as Node)) {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
  }, [])

  // getClickValue : 클릭한 order값 (asc, desc)
  // getClickedHeaderName : 클릭한 헤더 row의 name 값

  useEffect(() => {
    setShow(openSelect)
  }, [openSelect])

  return (
    <Transition
      show={show}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
    >
      <ul
        ref={eventEl}
        className="absolute top-12 z-50 ml-[2px] mt-[2px] w-20  rounded-lg border border-slate-200 bg-white"
      >
        <List
          headerName={headerName}
          value="Asc"
          getClickValue={getClickValue}
          getClickedHeaderName={getClickedHeaderName}
        ></List>
        <List
          headerName={headerName}
          value="Desc"
          getClickValue={getClickValue}
          getClickedHeaderName={getClickedHeaderName}
        ></List>
      </ul>
    </Transition>
  )
}
