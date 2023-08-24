import React from 'react'
import { CodeList } from '@/types'

export interface dummyHeaderProps {
  id: number
  name: string
  selectOrder: boolean
}

export interface dummyBodyProps {
  Invoice: string
  Status: string
  Method: string
  Amount: string
  Date?: string
}

export const dummyHeader = [
  { id: 0, name: 'Invoice', selectOrder: false },
  { id: 1, name: 'Status', selectOrder: false },
  { id: 2, name: 'Method', selectOrder: false },
  { id: 3, name: 'Amount', selectOrder: false },
]

export const dummyHeader2 = [
  { id: 0, name: 'Invoice', selectOrder: false },
  { id: 1, name: 'Status', selectOrder: false },
  { id: 2, name: 'Method', selectOrder: false },
  { id: 3, name: 'Amount', selectOrder: true },
  { id: 4, name: 'Date', selectOrder: false },
  { id: 5, name: '', selectOrder: false },
]

export const dummyBody: dummyBodyProps[] = [
  {
    Invoice: 'INV001',
    Status: 'Paid',
    Method: 'Credit Card',
    Amount: '$150.00',
  },
  {
    Invoice: 'INV002',
    Status: 'Pending',
    Method: 'PayPal',
    Amount: '$50.00',
  },
  {
    Invoice: 'INV003',
    Status: 'Unpaid',
    Method: 'Credit Card',
    Amount: '$250.00',
  },
  {
    Invoice: 'INV004',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '$350.00',
  },
]

export const dummyBody2: dummyBodyProps[] = [
  {
    Invoice: 'INV001',
    Status: 'Paid',
    Method: 'Credit Card',
    Amount: '150.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV002',
    Status: 'Pending',
    Method: 'PayPal',
    Amount: '50.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV003',
    Status: 'Unpaid',
    Method: 'Credit Card',
    Amount: '250.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV004',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV005',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV006',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV007',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV008',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV009',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV010',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV011',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV012',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV013',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV014',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV015',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV016',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV017',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV018',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV019',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV020',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV021',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV022',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV023',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV024',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV025',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV026',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV027',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV028',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV029',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
  {
    Invoice: 'INV030',
    Status: 'Paid',
    Method: 'Bank Transfer',
    Amount: '350.00',
    Date: '12.Jan.2023',
  },
]

export const dummyCodeData: CodeList[] = [
  {
    code: '00010001',
    codeName: '0001코드',
    remark1: '설명1',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 1,
    useYn: 'Y',
  },
  {
    code: '00010002',
    codeName: '0002코드',
    remark1: '설명2',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 2,
    useYn: 'Y',
  },
  {
    code: '00010003',
    codeName: '0003코드',
    remark1: '설명3',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 3,
    useYn: 'Y',
  },
  {
    code: '00010004',
    codeName: '0004코드',
    remark1: '설명4',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 4,
    useYn: 'Y',
  },
  {
    code: '00010005',
    codeName: '0005코드',
    remark1: '설명5',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 5,
    useYn: 'Y',
  },
  {
    code: '00010006',
    codeName: '0006코드',
    remark1: '설명6',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 6,
    useYn: 'Y',
  },
  {
    code: '00010007',
    codeName: '0007코드',
    remark1: '설명7',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 7,
    useYn: 'Y',
  },
  {
    code: '00010008',
    codeName: '0008코드',
    remark1: '설명8',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 8,
    useYn: 'Y',
  },
  {
    code: '00010009',
    codeName: '0009코드',
    remark1: '설명9',
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 9,
    useYn: 'Y',
  },
  {
    code: '00010010',
    codeName: '0010코드 수정',
    remark1: '설명1 수정',
    value1: 11,
    remark2: '명2 수정',
    value2: 2,
    codeOrd: 10,
    useYn: 'Y',
  },
  {
    code: '00010011',
    codeName: '0011코드',
    remark1: null,
    value1: null,
    remark2: null,
    value2: null,
    codeOrd: 11,
    useYn: 'Y',
  },
]

export default function Dummydata() {}
