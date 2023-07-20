import React from 'react'

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

export default function Dummaydata() {}
