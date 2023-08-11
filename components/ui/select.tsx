'use client'

import React, { ForwardedRef, forwardRef, ReactElement, useEffect, useRef, useState } from 'react'
import Image from '@/node_modules/next/image'
import { ArrowDownUp } from '@/public/svgs/svg'
import { ListBoxPositionType } from '@/types'
import { Transition } from '@windmill/react-ui'
import { twMerge } from 'tailwind-merge'

interface ListProps {
  value: string
  getClickValue: (value: string | number) => void
}

interface SelectProps {
  defaultValue: string | number
  listBoxPosition: ListBoxPositionType
  contents: string[]
  getClickValue: (value: string | number) => void
  width?: string
  ariaLabel?: string
}

// eslint-disable-next-line react/display-name
export const List = React.forwardRef<HTMLLIElement, React.PropsWithChildren<ListProps>>(
  ({ value, getClickValue }, ref) => {
    return (
      <li
        ref={ref}
        onClick={() => {
          getClickValue(value)
        }}
        className="m-1 cursor-pointer rounded-lg p-1 hover:bg-neutral-50"
      >
        {value}
      </li>
    )
  },
)

export default function Select({
  defaultValue,
  listBoxPosition,
  contents,
  getClickValue,
  width,
  ariaLabel,
}: SelectProps) {
  const eventEl = useRef<HTMLDivElement>(null)
  const [clickValue, setClickValue] = useState<string | number>()
  const [show, setShow] = useState(false)

  // defaultValue: 기본 셀렉트박스 값, default value가 노출
  // contents : 셀렉트 박스 리스트 항목들 []
  // listBoxPosition : "top" of "bottom" 값 입력, 리스트 노출되는 위치가 상단/하단
  const handleClickOutside = (e: MouseEvent) => {
    if (eventEl.current && !eventEl.current.contains(e.target as Node)) {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    if (defaultValue && !clickValue) {
      setClickValue(defaultValue)
      getClickValue(defaultValue)
    }
  }, [clickValue, defaultValue, getClickValue])

  return (
    <div
      ref={eventEl}
      className={twMerge('relative cursor-pointer rounded border border-slate-300 p-1 pl-2 max-h-9', width)}
    >
      <button aria-label={ariaLabel} className="flex flex-row justify-between w-[95%]" onClick={(e) => setShow(!show)}>
        <span>{clickValue ?? defaultValue}</span>

        <Image className="mt-1" src={ArrowDownUp} width={15} height={15} alt="up arrow" />
      </button>
      <Transition
        show={show}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-75 transform"
      >
        <ul
          className={`${
            listBoxPosition === 'bottom'
              ? twMerge('absolute left-[-2px] mt-2 mr-2', width)
              : twMerge('relative bottom-[150px] right-[8px]', width)
          } &&  z-20 rounded-lg border border-slate-300 bg-white font-medium text-slate-500`}
        >
          {contents.map((item) => (
            <List
              key={item}
              value={item}
              getClickValue={(value: string | number) => {
                setClickValue(value)
                setShow(false)
                getClickValue(value)
              }}
            ></List>
          ))}
        </ul>
      </Transition>
    </div>
  )
}
