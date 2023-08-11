'use client'

import React, { ReactDOM, useEffect, useState } from 'react'
import Image from 'next/image'
import { Close } from '@/public/svgs/svg'
import { TableHeaderProps } from '@/types'

import { Button } from '@/components/ui/button'
import Card from '@/components/ui/card'
import NormalInput from '@/components/ui/input/normal-input'
import Modal from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal-portal'
import Select from '@/components/ui/select'
import Table, { BodyTd, BodyTr, FootTd } from '@/components/ui/table/table'

export default function GroupcodePage() {
  const listArray = ['전체', '소속코드', '부서코드']
  const [selectGroup, setSelectGroup] = useState<string | number>('')
  const [openModal, setOpenModal] = useState(false)
  const [rowOrder, setRowOrder] = useState('')
  const [clickRowName, setClickRowName] = useState('')

  const tableHeader: TableHeaderProps[] = [
    {
      id: 0,
      name: '그룹 코드',
      selectOrder: false,
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

  useEffect(() => {
    if (openModal) {
      const app = document.getElementById('app')
      if (app) {
        app.style.filter = 'blur(10px)'
      }
    } else {
      const app = document.getElementById('app')
      if (app) {
        app.style.filter = 'blur(0)'
      }
    }
  }, [openModal])

  return (
    <div className="w-full h-screen">
      <Card className="w-100">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-row items-center">
            <label className="mr-2">그룹코드</label>
            <Select
              defaultValue="전체"
              listBoxPosition="bottom"
              contents={listArray}
              getClickValue={(text) => {
                setSelectGroup(text)
              }}
              width="w-[124.6px]"
              ariaLabel="그룹코드 선택"
            />
          </div>
          <div className="flex flex-row items-center">
            <Select
              defaultValue="전체"
              listBoxPosition="bottom"
              contents={listArray}
              getClickValue={(text) => {
                setSelectGroup(text)
              }}
              width="w-[124.6px]"
              ariaLabel="코드 검색시 카테고리 선택"
            />
            <NormalInput className="min-w-50 ml-2" />
            <Button className="mr-2 ml-2">검색</Button>
            <Button>검색초기화</Button>
          </div>
        </div>
      </Card>
      <div className="flex justify-end">
        <Button className="m-3" onClick={() => setOpenModal(true)}>
          등록
        </Button>
      </div>
      <Card>
        <Table headerContent={tableHeader} setTableOrder={setRowOrder} getClickedHeaderName={setClickRowName}>
          <BodyTr>
            <BodyTd cursor={false}>ffff</BodyTd>
            <BodyTd cursor={false}>ffff</BodyTd>
            <BodyTd cursor={false}>ffff</BodyTd>
          </BodyTr>
        </Table>
      </Card>
      {openModal && (
        <ModalPortal>
          <Modal className="w-[530px]">
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
                <NormalInput label="그룹코드" className="w-[200px] ml-2 mb-4" />
                <NormalInput label="코드명" className="w-[200px] ml-2 mb-4" />
                <NormalInput label="코드설명" className="min-w-[350px] mb-4 ml-2" />
              </div>
              <div className="relative left-[161px]">
                <Button className="mr-2" onClick={() => setOpenModal(false)}>
                  저장
                </Button>
                <Button onClick={() => setOpenModal(false)}>닫기</Button>
              </div>
            </div>
          </Modal>
        </ModalPortal>
      )}
    </div>
  )
}
