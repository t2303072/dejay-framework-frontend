import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LeftArrow from '@/assets/arrow-left.svg'
import RightArrow from '@/assets/arrow-right.svg'

interface PaginationProps {
  totalPage?: number
}

interface PageButtonStyleProps {
  pageArray: number[]
  onClickPage: number
  getClickPage: (value: number) => void
}

export default function Pagination({ totalPage }: PaginationProps) {
  const [pageArray, setPageArray] = useState<number[]>()
  const [clickedPage, setClickedPage] = useState<number>(1)

  function PageButtonStyle({ pageArray, onClickPage, getClickPage }: PageButtonStyleProps) {
    const [clickedPage, setClickedPage] = useState<number>()

    return pageArray.map((item) =>
      item === onClickPage ? (
        <button key={item} className="pagination-number pagination-click">
          {item}
        </button>
      ) : (
        <button key={item} className="pagination-number" onClick={() => getClickPage(item)}>
          {item}
        </button>
      ),
    )
  }

  useEffect(() => {
    const pages = Array(totalPage)
    const arr = pages.fill(totalPage).map((item, index) => index + 1)
    setPageArray(arr)
  }, [totalPage])

  return (
    pageArray && (
      <div className="flex flex-row mt-1">
        <Image
          width={15}
          height={15}
          src={LeftArrow}
          alt="left icon"
          className="relative top-[1.1px] mr-1 text-center cursor-pointer"
          onClick={() => {
            setClickedPage(clickedPage - 1)
          }}
        />

        <PageButtonStyle pageArray={pageArray} onClickPage={clickedPage} getClickPage={setClickedPage} />

        <Image
          width={15}
          height={15}
          src={RightArrow}
          alt="Right icon"
          className="ml-1 text-center relative cursor-pointer"
          onClick={() => {
            setClickedPage(clickedPage + 1)
          }}
        />
      </div>
    )
  )
}
