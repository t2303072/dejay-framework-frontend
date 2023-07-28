import { InsertBoardReq, InsertBoardRes, SelectBoardListRes } from '@/types'

import { GET, GET_LOCAL, POST } from '@/lib/api'

export const selectBoardList = async () => GET<SelectBoardListRes>('test/board-list')
export const insertBoard = async (data: InsertBoardReq) =>
  POST<InsertBoardRes, InsertBoardReq>('test/board-insert', data)

export const localSelectBoardList = async () => GET_LOCAL<SelectBoardListRes>('test/board-list')

export const getBoardList = async () => {
  try {
    const res = await selectBoardList()
    return res.data.boardList
  } catch (error) {
    console.log(error)
  }
}
