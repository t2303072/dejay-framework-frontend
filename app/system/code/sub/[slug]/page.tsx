'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Bars, Close } from '@/public/svgs/svg'
import { requestCodeList, requestInsertCodeList, requestUpdateListOrder } from '@/services/code'
import { CodeList, CodeListSearchData, InsertCodeType, TableHeaderProps } from '@/types'
import { Button, IconButton, Radio } from '@material-tailwind/react'

import ImageMemo from '@/components/Image'
import Card from '@/components/ui/card'
import NormalInput from '@/components/ui/input/normal-input'
import Modal from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal-portal'
import Select from '@/components/ui/select'
import { Spin } from '@/components/ui/spin'
import { dummyCodeData } from '@/components/ui/table/dummy-data'
import Table, { BodyTd, BodyTr, DragBodyTr, FootTd } from '@/components/ui/table/table'

interface Props {
  params: {
    slug: string
  }
}

interface TableBodyProps {
  data: CodeList[]
}

export default function SubCodePage({ params }: Props) {
  const router = useRouter()
  const searchOrders = [
    { title: '코드명', value: 'cn' },
    { title: '코드 설명', value: 'r1' },
  ]

  const selectBoxSearchParam: CodeListSearchData = {
    search: {
      codeSearch: {
        type1: 'cn',
        searchWord1: '',
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

  const defaultSearchParam: CodeListSearchData = {
    search: {
      codeSearch: {
        type1: 'cn',
        searchWord1: '',
        orderBy: 'co',
        descAsc: 'asc',
        parentCode: params.slug,
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
  const [clickedRow, setClickedRow] = useState<number>()
  const [inputCode, setInputCode] = useState<string>('')
  const [inputCodeName, setInputCodeName] = useState<string>('')
  const [inputCodeValue, setInputCodeValue] = useState<string>('')
  const [inputCodeValueNum, setInputCodeValueNum] = useState<number>(0)
  const [inputUseYn, setInputUseYn] = useState<string>('')
  const [searchParams, setSearchParams] = useState<CodeListSearchData>(defaultSearchParam)
  const [selectedRadio, setSelectedRadio] = useState<string>('Y')

  const tableHeader: TableHeaderProps[] = [
    { id: 0, name: '', selectOrder: false },
    {
      id: 1,
      name: '코드',
      selectOrder: true,
    },
    {
      id: 2,
      name: '순서',
      selectOrder: false,
    },
    {
      id: 3,
      name: '코드명',
      selectOrder: false,
    },
    {
      id: 4,
      name: '코드값1 명',
      selectOrder: false,
    },
    {
      id: 5,
      name: '코드값1 (숫자)',
      selectOrder: false,
    },
    {
      id: 5,
      name: '사용여부',
      selectOrder: false,
    },
  ]

  function setCodeSelectList(list: CodeList[]) {
    const array = list.map((item) => `${item.codeName}(${item.code.substring(0, 4)})`)
    const defaultValue = array.find((item) => item.includes(params.slug))
    if (defaultValue) {
      setSelectGroup(defaultValue)
    }
    setSelectList(array)
  }

  function TableBody({ data }: TableBodyProps) {
    const [dragItem, setDragItem] = useState<CodeList | null>()
    const [dragItemIndex, setDragItemIndex] = useState<number | null>()
    // 드래그할 아이템 인덱스
    const [dropOverItem, setDropOverItem] = useState<CodeList>()
    const [dropOverItemIndex, setDropOverItemIndex] = useState<number | null>()
    // 드랍할 아이템

    const handleDragStart = (index: number) => {
      setDragItemIndex(index)
    }

    const handleDragOver = (e: React.DragEvent<HTMLTableRowElement>, index: number) => {
      e.preventDefault()
      setDropOverItemIndex(index)
    }

    const handleDragEnd = (e: React.DragEvent<HTMLTableRowElement>, index: number) => {
      e.preventDefault()
      if (dragItemIndex !== null && dropOverItemIndex !== null && dragItemIndex !== dropOverItemIndex) {
        const newData = [...data]

        // 드래그 아이템을 삭제한 후 드롭 위치에 삽입
        if (dragItemIndex !== undefined && dropOverItemIndex !== undefined) {
          const [draggedItem] = newData.splice(dragItemIndex, 1)
          newData.splice(dropOverItemIndex, 0, draggedItem)
        }

        // newData를 사용하여 상태 업데이트
        setData(newData)

        // 드래그 아이템과 드롭 위치의 인덱스 초기화
        setDragItemIndex(null)
        setDropOverItemIndex(null)
      }
    }

    if (data) {
      const arrayLength = data.length - 1
      // 테이블에서 마지막 열만 아래에 border가 없는 스타일
      return data.map((item, index) =>
        index < arrayLength ? (
          <DragBodyTr
            onDragStart={(e) => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnter={(e) => {}}
            onDragEnd={(e) => {
              handleDragEnd(e, index)
            }}
            key={item.code}
          >
            <BodyTd cursor={true}>
              <ImageMemo src={Bars} alt="bars icon" width={20} height={20} />
            </BodyTd>
            <BodyTd cursor={false}>{item.code}</BodyTd>
            <BodyTd cursor={false}>{item.codeOrd}</BodyTd>
            <BodyTd cursor={false}>{item.codeName}</BodyTd>
            <BodyTd cursor={false}>{item.remark1}</BodyTd>
            <BodyTd cursor={false}>{item.value1}</BodyTd>
            <BodyTd cursor={false}>{item.useYn}</BodyTd>
          </DragBodyTr>
        ) : (
          <DragBodyTr
            onDragStart={(e) => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnter={(e) => {}}
            onDragEnd={(e) => {
              handleDragEnd(e, index)
            }}
            key={item.code}
          >
            <FootTd cursor={true}>
              <ImageMemo src={Bars} alt="bars icon" width={20} height={20} />
            </FootTd>
            <FootTd cursor={false}>{item.code}</FootTd>
            <FootTd cursor={false}>{item.codeOrd}</FootTd>
            <FootTd cursor={false}>{item.codeName}</FootTd>
            <FootTd cursor={false}>{item.remark1}</FootTd>
            <FootTd cursor={false}>{item.value1}</FootTd>
            <FootTd cursor={false}>{item.useYn}</FootTd>
          </DragBodyTr>
        ),
      )
    }
  }

  function onOrderSubmit() {
    const orderArray = data.map((item, index) => ({ code: item.code, codeOrd: index + 1 }))
    requestUpdateListOrder({ data: { codeList: orderArray } }).then(() => searchList(searchParams, false))
  }

  function onSubmit() {
    const request: InsertCodeType = {
      code: `${params.slug}${inputCode}`,
      codeName: inputCodeName,
      remark1: inputCodeValue,
      value1: inputCodeValueNum,
      remark2: '',
      value2: 22,
      useYn: selectedRadio,
      codeOrd: data.length,
    }

    requestInsertCodeList({ data: { code: request } }).then(() => window.location.reload())
  }

  // 셀렉트박스 내 selectList 변경할지 여부에 대해 boolean으로 파라미터를 받음
  function searchList(searchParams: CodeListSearchData, selectList: boolean) {
    requestCodeList(searchParams).then((result) => {
      if (result && result.data) {
        if (!selectList) {
          setData(result.data.codeList)
          setIsLoading(false)
        }
        if (selectList) {
          setCodeSelectList(result.data.codeList)
        }
      }
    })
  }

  function onCheckValueSearch() {
    // ordervalue = 검색 인풋 옆의 셀렉트 박스 선택값
    if (!orderValue) {
      alert('검색할 조건을 선택해주세요!')
    } else if (!searchWord) {
      alert('검색할 값을 입력해주세요!')
    } else {
      searchList(searchParams, false)
    }
  }

  function radioHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadio(event.target.value)
  }

  useEffect(() => {
    searchList(searchParams, false)
    searchList(selectBoxSearchParam, true)
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
              defaultValue={selectGroup}
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
            <NormalInput getValue={setSearchWord} disabled={false} className="min-w-50 ml-2" />
            <Button className="mr-2 ml-2" onClick={() => onCheckValueSearch()}>
              검색
            </Button>
            <Button
              onClick={() => {
                searchList(defaultSearchParam, false)
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
      <div className="flex w-full justify-between">
        <Button className="m-3" onClick={() => onOrderSubmit()}>
          순서변경
        </Button>
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
              className="cursor-pointer relative bottom-[5px] left-[96%]"
            />
            <div className="flex flex-col">
              <NormalInput
                getValue={(text: string) => {
                  const inputValue = text
                  const numericValue = inputValue.replace(/\D/g, '')

                  setInputCode(numericValue)
                }}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '') // 숫자 이외의 문자 제거
                }}
                disabled={false}
                maxLength={4}
                label="코드"
                className="w-[200px] ml-2 mb-4"
              />
              <NormalInput
                disabled={false}
                getValue={setInputCodeName}
                label="코드명"
                className="w-[200px] ml-2 mb-4"
              />
              <NormalInput
                disabled={false}
                getValue={setInputCodeValue}
                label="코드값1 명"
                className="min-w-[350px] mb-4 ml-2"
              />
              <NormalInput
                disabled={false}
                getValue={(text: string) => setInputCodeValueNum(Number(text))}
                label="코드값1 (숫자)"
                className="w-[200px] ml-2 mb-4"
              />
              <div>
                <div className="flex">
                  <label htmlFor="useYn" className="font-bold text-sm mt-2 w-[100px]">
                    사용여부
                  </label>
                  <Radio
                    onChange={(e) => radioHandleChange(e)}
                    checked={selectedRadio === 'Y'}
                    value="Y"
                    name="useYn"
                    label="사용"
                    defaultChecked
                  />
                  <Radio
                    onChange={(e) => radioHandleChange(e)}
                    checked={selectedRadio === 'N'}
                    value="N"
                    name="useYn"
                    label="미사용"
                  />
                </div>
              </div>
            </div>
            <div className="relative left-[161px]">
              <Button
                className="mr-2 mt-2"
                onClick={() => {
                  onSubmit()
                  setOpenModal(false)
                }}
              >
                저장
              </Button>
              <Button className="mt-2" onClick={() => setOpenModal(false)}>
                닫기
              </Button>
            </div>
          </div>
        </Modal>
      </ModalPortal>
    </div>
  )
}
