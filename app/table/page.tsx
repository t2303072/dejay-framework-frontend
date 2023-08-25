'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from '@/node_modules/next/image'
import { getBoardList, localSelectBoardList, selectBoardList } from '@/services/board'
import { selectMemberList } from '@/services/member'
import { BoardList, TableHeaderProps } from '@/types'

import Card from '@/components/ui/card'
import Select from '@/components/ui/select'
import { Spin } from '@/components/ui/spin'
import { dummyBody, dummyBody2, dummyBodyProps, dummyHeader, dummyHeader2 } from '@/components/ui/table/dummy-data'
import Pagination from '@/components/ui/table/pagination'
import Table, { BodySelectTd, BodyTd, BodyTr, FootSelectTd, FootTd } from '@/components/ui/table/table'

interface TableBodyProps {
  data: BoardList[]
}

export default function TablePage() {
  const [rowOrder, setRowOrder] = useState('')
  const [clickRowName, setClickRowName] = useState('')
  const [openSelect, setOpenSelect] = useState(false)
  const [data2, setData2] = useState<BoardList[]>([])
  const [tableBody2, setTableBody2] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [totalPage, setTotalPage] = useState<number>()
  const [rowNumber, setRowNumber] = useState<string | number>('10')

  const TableHeader: TableHeaderProps[] = [
    {
      id: 0,
      name: 'No',
      selectOrder: false,
    },
    {
      id: 1,
      name: 'Title',
      selectOrder: false,
    },
    {
      id: 2,
      name: 'Content',
      selectOrder: false,
    },
    {
      id: 3,
      name: 'Created At',
      selectOrder: false,
    },

    {
      id: 4,
      name: 'Created By',
      selectOrder: false,
    },
    {
      id: 5,
      name: '',
      selectOrder: false,
    },
  ]

  const TableBody = dummyBody.map((item, index) =>
    index < dummyBody.length - 1 ? (
      <BodyTr key={item.Invoice}>
        <BodyTd cursor={false}>{item.Invoice}</BodyTd>
        <BodyTd cursor={false}>{item.Status}</BodyTd>
        <BodyTd cursor={false}>{item.Method}</BodyTd>
        <BodyTd cursor={false}>{item.Amount}</BodyTd>
      </BodyTr>
    ) : (
      <BodyTr key={item.Invoice}>
        <FootTd cursor={false}>{item.Invoice}</FootTd>
        <FootTd cursor={false}>{item.Status}</FootTd>
        <FootTd cursor={false}>{item.Method}</FootTd>
        <FootTd cursor={false}>{item.Amount}</FootTd>
      </BodyTr>
    ),
  )

  function TableBody2({ data }: TableBodyProps) {
    if (data) {
      const arrayLength = data.length - 1
      // 테이블에서 마지막 열만 아래에 border가 없는 스타일
      return data.map((item, index) =>
        index < arrayLength ? (
          <BodyTr key={item.seq}>
            <BodyTd cursor={false}>{item.boardNo}</BodyTd>
            <BodyTd cursor={false}>{item.title}</BodyTd>
            <BodyTd cursor={false}>{item.content}</BodyTd>
            <BodyTd cursor={true}>{item.createdAt}</BodyTd>
            <BodyTd cursor={false}>{item.createdBy}</BodyTd>
            <BodySelectTd getOpenModal={(open: boolean) => {}} listBoxPosition="bottom" cursor={true} />
          </BodyTr>
        ) : (
          <BodyTr key={item.boardNo}>
            <FootTd cursor={false}>{item.boardNo}</FootTd>
            <FootTd cursor={false}>{item.title}</FootTd>
            <FootTd cursor={false}>{item.content}</FootTd>
            <FootTd cursor={true}>{item.createdAt}</FootTd>
            <FootTd cursor={false}>{item.createdBy}</FootTd>
            <FootSelectTd getOpenModal={(open: boolean) => {}} listBoxPosition="top" cursor={true} />
          </BodyTr>
        ),
      )
    }
  }

  function setTableRow(dataArray: BoardList[], rowPerPage: number) {
    if (dataArray && rowPerPage) {
      const array = [...dataArray]
      const bodyArray = array.filter((item, index) => index < rowPerPage)
      setData2(bodyArray)
    }
  }

  function setTotalPageNumber(array: BoardList[], standard: number) {
    if (array) {
      const arrayLength = array.length

      if (standard < arrayLength) {
        const totalPages = Math.ceil(arrayLength / standard)
        setTotalPage(totalPages)
      }
    }
  }

  useEffect(() => {
    function setTableOrder() {
      const Amount = clickRowName === 'Amount'

      if (Amount && rowOrder === 'Asc' && data2) {
        const array = [...data2]
        const data = array.sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
        setData2(data)
      }

      if (Amount && rowOrder === 'Desc' && data2) {
        const array = [...data2]
        const data = array.sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
        setData2(data)
      }
    }
    setTableOrder()

    // array를 depth에 추가하면 무한으로 리렌더링 되서 error발생. 해당 depth만 무시하도록 한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickRowName, rowOrder])

  useEffect(() => {
    getBoardList().then((result) => {
      if (result) {
        setTableRow(result, 10)
        setTotalPageNumber(result, Number(rowNumber))
        setIsLoading(false)
      }
    })
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="max-w-2xl pl-[16px] pt-[16px]">
        <Card>
          <h2 className="pl-2.5 font-bold">테이블</h2>
          <Table
            getClickedHeaderName={setClickRowName}
            headerContent={dummyHeader}
            setTableOrder={(name: string) => setClickRowName(name)}
          >
            {TableBody}
          </Table>
        </Card>
      </div>

      <div className=" max-w-2xl pb-[16px] pl-[16px] pt-[16px]">
        <Card>
          <h2 className="pl-2.5 font-bold">클릭 헤더 테이블</h2>
          {isLoading ? (
            <div className="min-h-[536px] pt-[262px] flex justify-center">
              <Spin className="mr-2 h-5 w-5" />
              loading...
            </div>
          ) : (
            <Table headerContent={TableHeader} setTableOrder={setRowOrder} getClickedHeaderName={setClickRowName}>
              <TableBody2 data={data2} />
            </Table>
          )}
          <div className="flex justify-between">
            <Select
              defaultValue="10"
              contents={['10', '20', '30']}
              listBoxPosition="top"
              getClickValue={setRowNumber}
              width="w-20"
            />
            <Pagination totalPage={totalPage} />
          </div>
        </Card>
      </div>
    </div>
  )
}
