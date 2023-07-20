import React, { ForwardedRef, forwardRef, ReactElement, useEffect, useRef, useState } from 'react'
import DownUparrow from '@/assets/arrow-down-up.svg'
import Image from '@/node_modules/next/image'
import { Transition } from '@windmill/react-ui'

interface ListProps {
  value: string
  getClickValue: (value: string | number) => void
}

interface SelectProps {
  defaultValue: string | number
  listBoxPosition: ListBoxPositionType
  contents: string[]
  getClickValue: (value: string | number) => void
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

export default function Select({ defaultValue, listBoxPosition, contents, getClickValue }: SelectProps) {
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
    <div ref={eventEl} className="w-20 cursor-pointer rounded border border-slate-200 p-1 pl-2">
      <Transition
        show={show}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
      >
        <ul
          className={`${
            listBoxPosition === 'top' ? 'absolute bottom-[56px] right-[19px]' : 'absolute'
          } && z-50 w-20 rounded-lg border border-slate-200 bg-white font-medium text-slate-500`}
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
      <div className="flex flex-row" onClick={(e) => setShow(!show)}>
        {clickValue ?? defaultValue}

        <div className="ml-8 mt-1">
          <Image src={DownUparrow} width={15} height={15} alt="up arrow" />
        </div>
      </div>
    </div>
  )
}
