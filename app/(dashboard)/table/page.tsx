'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from '@/node_modules/next/image'

import Card from '@/components/ui/card'
import { dummyBody, dummyBody2, dummyBodyProps, dummyHeader, dummyHeader2 } from '@/components/ui/table/dummy-data'
import Select from '@/components/ui/table/select'
import Table, { BodySelectTd, BodyTd, BodyTr, FootSelectTd, FootTd } from '@/components/ui/table/table'

interface TableBodyProps {
  data: dummyBodyProps[]
}

export default function TablePage() {
  const [rowOrder, setRowOrder] = useState('')
  const [clickRowName, setClickRowName] = useState('')
  const [openSelect, setOpenSelect] = useState(false)
  const [data2, setData2] = useState<dummyBodyProps[]>([...dummyBody2])
  const [tableBody2, setTableBody2] = useState()

  const [rowNumber, setRowNumber] = useState<string | number>()

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
    const arrayLength = data.length - 1
    // 테이블에서 마지막 열만 아래에 border가 없는 스타일
    return data.map((item, index) =>
      index < arrayLength ? (
        <BodyTr key={item.Invoice}>
          <BodyTd cursor={false}>{item.Invoice}</BodyTd>
          <BodyTd cursor={false}>{item.Status}</BodyTd>
          <BodyTd cursor={false}>{item.Method}</BodyTd>
          <BodyTd cursor={true}>{item.Amount}</BodyTd>
          <BodyTd cursor={false}>{item.Date}</BodyTd>
          <BodySelectTd listBoxPosition="bottom" cursor={true} />
        </BodyTr>
      ) : (
        <BodyTr key={item.Invoice}>
          <FootTd cursor={false}>{item.Invoice}</FootTd>
          <FootTd cursor={false}>{item.Status}</FootTd>
          <FootTd cursor={false}>{item.Method}</FootTd>
          <FootTd cursor={true}>{item.Amount}</FootTd>
          <FootTd cursor={false}>{item.Date}</FootTd>
          <FootSelectTd listBoxPosition="top" cursor={true} />
        </BodyTr>
      ),
    )
  }

  useEffect(() => {
    function setTableOrder() {
      const Amount = clickRowName === 'Amount'

      if (Amount && rowOrder === 'Asc') {
        const array = [...data2]
        const data = array.sort((a, b) => Number(a.Amount) - Number(b.Amount))
        setData2(data)
      }

      if (Amount && rowOrder === 'Desc') {
        const array = [...data2]
        const data = array.sort((a, b) => Number(b.Amount) - Number(a.Amount))
        setData2(data)
      }
    }
    setTableOrder()

    // array를 depth에 추가하면 무한으로 리렌더링 되서 error발생. 해당 depth만 무시하도록 한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickRowName, rowOrder])

  useEffect(() => {
    function setTableRow() {
      if (rowNumber) {
        const array: dummyBodyProps[] = [...dummyBody2]
        const newbody = array.filter((item, index) => index < Number(rowNumber))

        setData2(newbody)
      }
    }
    setTableRow()
  }, [rowNumber])

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-100">
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
      <div className="max-w-2xl pb-[16px] pl-[16px] pt-[16px]">
        <Card>
          <h2 className="pl-2.5 font-bold">클릭 헤더 테이블</h2>
          {rowNumber && (
            <Table headerContent={dummyHeader2} setTableOrder={setRowOrder} getClickedHeaderName={setClickRowName}>
              <TableBody2 data={data2} />
            </Table>
          )}
          <div className="flex justify-end">
            <Select
              defaultValue={10}
              contents={['10', '20', '30']}
              listBoxPosition="top"
              getClickValue={setRowNumber}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
