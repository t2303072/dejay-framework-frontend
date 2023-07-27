import type { InsertBoardReq, InsertBoardRes, SelectBoardListRes } from '@/types'

async function GET<T>(path: string): Promise<T> {
  const res = await fetch(`backend/${path}`)

  return res.json()
}

async function POST<T, U>(path: string, data: U): Promise<T> {
  const res = await fetch(`backend/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return res.json()
}

async function GET_LOCAL<T>(path: string) {
  const res = await fetch(`local/${path}`)

  return res.json()
}

export const selectBoardList = async () => GET<SelectBoardListRes>('test/board-list')
export const insertBoard = async (data: InsertBoardReq) =>
  POST<InsertBoardRes, InsertBoardReq>('test/board-insert', data)

export const localSelectBoardList = async () => GET_LOCAL<SelectBoardListRes>('test/board-list')

export const getBoardList = async () => {
  try {
    const res = await localSelectBoardList()
    return res.data.boardList
  } catch (error) {
    console.log(error)
  }
}
