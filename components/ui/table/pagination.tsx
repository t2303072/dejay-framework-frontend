import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from '@/public/svgs/svg'

interface PaginationProps {
  totalPage?: number
}

interface PageButtonStyleProps {
  pageArray: number[]
  onClickPage: number
  getClickPage: (value: number) => void
}

export default function Pagination({ totalPage }: PaginationProps) {
  const initialPage = 1
  const arrowIconWidth = 15
  const [pageArray, setPageArray] = useState<number[]>()
  const [clickedPage, setClickedPage] = useState<number>(initialPage)

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

  function onClickPageArrowMinus(page: number) {
    if (initialPage < page) {
      setClickedPage(clickedPage - 1)
    }
  }

  function onClickPageArrowPlus(page: number, total: number) {
    if (page < total) {
      setClickedPage(clickedPage + 1)
    }
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
          width={arrowIconWidth}
          height={arrowIconWidth}
          src={ArrowLeft}
          alt="left icon"
          className="relative top-[1.1px] mr-1 text-center cursor-pointer"
          onClick={() => {
            onClickPageArrowMinus(clickedPage)
          }}
        />

        <PageButtonStyle pageArray={pageArray} onClickPage={clickedPage} getClickPage={setClickedPage} />

        <Image
          width={arrowIconWidth}
          height={arrowIconWidth}
          src={ArrowRight}
          alt="Right icon"
          className="ml-1 text-center relative cursor-pointer"
          onClick={() => {
            if (totalPage) {
              onClickPageArrowPlus(clickedPage, totalPage)
            }
          }}
        />
      </div>
    )
  )
}
