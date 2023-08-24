'use client'

import React, { ReactDOM, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Close } from '@/public/svgs/svg'
import { requestCodeList, requestInsertCodeList } from '@/services/code'
import {
  CodeList,
  CodeListSearchData,
  InsertCodeRequest,
  InsertCodeType,
  OrderByCodeType,
  TableHeaderProps,
} from '@/types'
import { Button } from '@material-tailwind/react'
import { TableBody } from '@windmill/react-ui'

import Card from '@/components/ui/card'
import NormalInput from '@/components/ui/input/normal-input'
import Modal from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal-portal'
import Select, { ContentsObject } from '@/components/ui/select'
import { Spin } from '@/components/ui/spin'
import Table, { BodyTd, BodyTr, FootTd } from '@/components/ui/table/table'

interface TableBodyProps {
  data: CodeList[]
}

export default function GroupcodePage() {
  const router = useRouter()
  const searchOrders = [
    { title: '코드명', value: 'cn' },
    { title: '코드 설명', value: 'r1' },
  ]
  const defaultSearchParam: CodeListSearchData = {
    search: {
      codeSearch: {
        type1: 'cn',
        searchWord1: '코드',
        orderBy: 'co',
        descAsc: 'asc',

        parentCode: '0000',

        paging: {
          currentPage: 1,
          displayRow: 10,
        },
      },
    },
  }
  const [orderValue, setOrderValue] = useState<string>('')
  const [searchWord, setSearchWord] = useState<string>('')
  const [selectList, setSelectList] = useState<string[]>([])
  const [codeSearchClickValue, setCodeSearchClickValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectGroup, setSelectGroup] = useState<string>('')
  const [openModal, setOpenModal] = useState(false)
  const [rowOrder, setRowOrder] = useState('')
  const [clickRowName, setClickRowName] = useState('')
  const [data, setData] = useState<CodeList[]>([])
  const [inputGroup, setInputGroup] = useState<string>('')
  const [inputCodeName, setInputCodeName] = useState<string>('')
  const [inputDesc, setInputDesc] = useState<string>('')
  const [searchParams, setSearchParams] = useState<CodeListSearchData>(defaultSearchParam)

  const tableHeader: TableHeaderProps[] = [
    {
      id: 0,
      name: '그룹 코드',
      selectOrder: true,
    },
    {
      id: 1,
      name: '코드명',
      selectOrder: false,
    },
    {
      id: 2,
      name: '코드 설명',
      selectOrder: false,
    },
  ]

  function setCodeSelectList(list: CodeList[]) {
    const array = list.map((item) => `${item.codeName}(${item.code.substring(0, 4)})`)
    setSelectList(array)
  }

  function TableBody({ data }: TableBodyProps) {
    if (data) {
      const arrayLength = data.length - 1
      // 테이블에서 마지막 열만 아래에 border가 없는 스타일
      return data.map((item, index) =>
        index < arrayLength ? (
          <BodyTr key={item.code}>
            <BodyTd cursor={false}>{item.code}</BodyTd>
            <BodyTd cursor={false}>{item.codeName}</BodyTd>
            <BodyTd cursor={false}>{item.remark1}</BodyTd>
          </BodyTr>
        ) : (
          <BodyTr key={item.code}>
            <FootTd cursor={false}>{item.code}</FootTd>
            <FootTd cursor={false}>{item.codeName}</FootTd>
            <FootTd cursor={false}>{item.remark1}</FootTd>
          </BodyTr>
        ),
      )
    }
  }

  function onSubmit() {
    const request: InsertCodeType = {
      code: `${inputGroup}0000`,
      codeName: inputCodeName,
      remark1: inputDesc,
      value1: 11,
      remark2: inputDesc,
      value2: 22,
      useYn: 'Y',
      codeOrd: 0,
    }

    requestInsertCodeList({ data: { code: request } })
  }

  function searchList(searchParams: CodeListSearchData) {
    if (searchParams) {
      requestCodeList(searchParams).then((result) => {
        if (result && result.data) {
          setData(result.data.codeList)
          setIsLoading(false)
          setCodeSelectList(result.data.codeList)
        }
      })
    }
  }

  function onCheckValueSearch() {
    // ordervalue = 검색 인풋 옆의 셀렉트 박스 선택값
    if (!orderValue) {
      alert('검색할 조건을 선택해주세요!')
    } else if (!searchWord) {
      alert('검색할 값을 입력해주세요!')
    } else {
      searchList(searchParams)
    }
  }

  useEffect(() => {
    searchList(searchParams)
  }, [])

  useEffect(() => {
    if (selectGroup && selectGroup !== '전체') {
      const regex = /[^0-9]/g
      const subCode = selectGroup.replace(regex, '')
      router.replace(`/system/code/sub/${subCode}`)
    }
  }, [selectGroup])

  useEffect(() => {
    if (orderValue) {
      const param = searchParams
      param.search.codeSearch.type1 = orderValue
      setSearchParams(param)
      setCodeSearchClickValue('')
    }
  }, [orderValue])

  useEffect(() => {
    const param = searchParams
    param.search.codeSearch.searchWord1 = searchWord
    setSearchParams(param)
  }, [searchWord])

  return (
    <div className="w-full h-screen">
      <Card className="w-100">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-row items-center">
            <label className="mr-2 text-sm">그룹코드</label>
            <Select
              defaultValue="전체"
              listBoxPosition="bottom"
              contents={selectList}
              getClickValue={(text) => {
                setSelectGroup(text)
              }}
              width="min-w-[155px]"
              ariaLabel="그룹코드 선택"
            />
          </div>
          <div className="flex flex-row items-center">
            <Select
              defaultValue="선택"
              clickValueChange={codeSearchClickValue}
              listBoxPosition="bottom"
              contentsArray={searchOrders}
              getClickValue={(text) => {
                // 기본값으로 설정된 값이 아닐때만 검색할 조건으로 설정함
                if ('선택' !== text) {
                  setOrderValue(text)
                }
              }}
              width="min-w-[155px]"
              ariaLabel="코드 검색시 카테고리 선택"
            />
            <NormalInput
              disabled={false}
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="min-w-50 ml-2"
            />
            <Button className="mr-2 ml-2" onClick={() => onCheckValueSearch()}>
              검색
            </Button>
            <Button
              onClick={() => {
                searchList(defaultSearchParam)
                setOrderValue('')
                setSearchWord('')
                setCodeSearchClickValue('선택')
              }}
            >
              검색초기화
            </Button>
          </div>
        </div>
      </Card>
      <div className="flex justify-end">
        <Button className="m-3" onClick={() => setOpenModal(true)}>
          등록
        </Button>
      </div>
      {isLoading && (
        <div className="pt-[262px] flex justify-center">
          <Spin className="mr-2 h-5 w-5" />
          loading...
        </div>
      )}
      {!isLoading && (
        <Card>
          <Table headerContent={tableHeader} setTableOrder={setRowOrder} getClickedHeaderName={setClickRowName}>
            <TableBody data={data} />
          </Table>
        </Card>
      )}
      <ModalPortal>
        <Modal open={openModal} className="w-[530px]">
          <div>
            <Image
              onClick={() => setOpenModal(false)}
              src={Close}
              alt="close icon"
              width={23}
              height={23}
              className="cursor-poi
              nter relative bottom-[5px] left-[96%]"
            />
            <div className="flex flex-col">
              <NormalInput
                disabled={false}
                maxLength={4}
                onChange={(e) => setInputGroup(e.target.value)}
                label="그룹코드"
                className="w-[200px] ml-2 mb-4"
              />
              <NormalInput
                disabled={false}
                onChange={(e) => setInputCodeName(e.target.value)}
                label="코드명"
                className="w-[200px] ml-2 mb-4"
              />
              <NormalInput
                disabled={false}
                onChange={(e) => setInputDesc(e.target.value)}
                label="코드 설명"
                className="min-w-[350px] mb-4 ml-2"
              />
            </div>
            <div className="relative left-[161px]">
              <Button
                className="mr-2"
                onClick={() => {
                  onSubmit()
                  setOpenModal(false)
                }}
              >
                저장
              </Button>
              <Button onClick={() => setOpenModal(false)}>닫기</Button>
            </div>
          </div>
        </Modal>
      </ModalPortal>
    </div>
  )
}
