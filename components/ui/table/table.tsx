'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import moreSelect from '@/assets/more-select.svg'
import Image from '@/node_modules/next/image'
import { ListBoxPositionType, TableHeaderProps } from '@/types'
import { useDrag, useDrop } from 'react-dnd'

import TableBodySelect from '@/components/ui/table/table-body-select'
import TableHeaderSelect from '@/components/ui/table/table-header-select'

export const ItemTypes = {
  ROW: 'row', // 행 아이템 타입
  CARD: 'card', // 카드 아이템 타입
  // ... 추가적인 아이템 타입들 ...
}
interface TableHeadProps {
  headerContent: TableHeaderProps[]
  getClickedHeaderName: (text: string) => void
  setTableOrder: (text: string) => void
}

interface TableProps extends TableHeadProps {
  children: React.ReactNode
}

interface DragBodyTrProps {
  children: React.ReactNode
  onDragStart: (e: React.DragEvent<HTMLTableRowElement>) => void
  onDragEnter: (e: React.DragEvent<HTMLTableRowElement>) => void
  onDragOver: (e: React.DragEvent<HTMLTableRowElement>) => void
  onDragEnd: (e: React.DragEvent<HTMLTableRowElement>) => void
}

interface BodyTrProps {
  children: React.ReactNode
}

interface TdProps extends BodyTrProps {
  cursor: boolean
}

interface TdSelectProps {
  cursor: boolean
  listBoxPosition: ListBoxPositionType
  getOpenModal: (open: boolean) => void
}

function TableHead({ setTableOrder, headerContent, getClickedHeaderName }: TableHeadProps) {
  // openSelect : 헤더 클릭 여부
  // clickedHeaderName : 테이블에서 클릭한 헤더 row의 name 값
  const [openSelect, setOpenSelect] = useState<boolean>(false)
  const [clickedHeaderName, setClickedHeaderName] = useState<string>()

  // 클릭한 헤더와 셀렉트박스에 할당된 name 두값이 같아야 open

  return (
    <>
      <tr className="relative hover:bg-neutral-50">
        {headerContent.map((item) =>
          item.selectOrder ? (
            <td key={item.name} className="pb-3 pt-3">
              {clickedHeaderName === item.name && (
                <TableHeaderSelect
                  openSelect={openSelect}
                  getClickedHeaderName={getClickedHeaderName}
                  headerName={item.name}
                  setTableOrder={(order: string) => {
                    setTableOrder(order)
                    setOpenSelect(!openSelect)
                  }}
                />
              )}
              <span
                onClick={(e) => {
                  setOpenSelect(!openSelect)
                  setClickedHeaderName(e.currentTarget.innerText)
                }}
                className="max-w-fit cursor-pointer whitespace-nowrap rounded-lg pb-2 pl-2.5 pr-2.5 pt-2 hover:bg-neutral-200"
              >
                {item.name}
              </span>
            </td>
          ) : (
            <td key={item.name} className="cursor-default pb-2 pl-2.5 pr-2.5 pt-2">
              {item.name}
            </td>
          ),
        )}
      </tr>
    </>
  )
}

//테이블 tr
export function BodyTr({ children }: BodyTrProps) {
  return <tr className="hover:bg-neutral-50">{children}</tr>
}

export function DragBodyTr({ children, onDragStart, onDragEnter, onDragOver, onDragEnd }: DragBodyTrProps) {
  return (
    <tr
      draggable
      className="hover:bg-neutral-50"
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {children}
    </tr>
  )
}

// 테이블 td 커서 유무에따라 포인터 커서 설정
export function BodyTd({ cursor, children }: TdProps) {
  return cursor ? (
    <td className="border-b-slate cursor-pointer border-b pb-3 pl-2.5 pt-3 ">{children}</td>
  ) : (
    <td className="border-b-slate border-b pb-3 pl-2.5 pt-3 ">{children}</td>
  )
}

// 클릭시 edit/delete select바 노출
export function BodySelectTd({ listBoxPosition, cursor, getOpenModal }: TdSelectProps) {
  const [openSelect, setOpenSelect] = useState<boolean>(false)
  return (
    <td
      onClick={(e) => setOpenSelect(!openSelect)}
      className="border-b-slate cursor-pointer border-b pb-3 pl-2.5 pt-3 "
    >
      <TableBodySelect
        getOpenModal={(open: boolean) => getOpenModal(open)}
        listBoxPosition={listBoxPosition}
        openSelect={openSelect}
      />
    </td>
  )
}

export function FootSelectTd({ listBoxPosition, cursor, getOpenModal }: TdSelectProps) {
  const [openSelect, setOpenSelect] = useState(false)
  return (
    <td onClick={(e) => setOpenSelect(!openSelect)} className="cursor-pointer pb-3 pl-2.5 pt-3 ">
      <TableBodySelect
        getOpenModal={(open: boolean) => getOpenModal(open)}
        openSelect={openSelect}
        listBoxPosition={listBoxPosition}
      />
    </td>
  )
}

// 테이블 foot, td 마지막행
export function FootTd({ cursor, children }: TdProps) {
  return cursor ? (
    <td className="cursor-pointer pb-2 pl-2.5 pt-2">{children}</td>
  ) : (
    <td className="pb-2 pl-2.5 pt-2">{children}</td>
  )
}

export default function Table({ setTableOrder, children, headerContent, getClickedHeaderName }: TableProps) {
  return (
    <table className="mt-3 text-sm">
      <thead className="border-b-slate max-h-[40px] border-b font-medium text-slate-500  hover:bg-neutral-50">
        <TableHead
          setTableOrder={setTableOrder}
          headerContent={headerContent}
          getClickedHeaderName={getClickedHeaderName}
        />
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
