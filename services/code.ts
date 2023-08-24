import { CodeListResponse, CodeListSearchData, InsertCodeRequest, ResultStatus, UpdateCodeOrderRequest } from '@/types'

import { POST } from '@/lib/api'

export const selectCodeList = async (data: CodeListSearchData) =>
  POST<CodeListResponse, CodeListSearchData>('code/list', data)

export const insertCodeList = async (data: InsertCodeRequest) =>
  POST<ResultStatus, InsertCodeRequest>('code/insert', data)

export const updateOrderCodeList = async (data: UpdateCodeOrderRequest) =>
  POST<ResultStatus, UpdateCodeOrderRequest>('code/updateCodeOrder', data)

export const requestCodeList = async (data: CodeListSearchData) => {
  try {
    const res = await selectCodeList(data)

    return res
  } catch (e) {
    console.log(e)
  }
}

export const requestInsertCodeList = async (data: InsertCodeRequest) => {
  try {
    const res = await insertCodeList(data)

    return res
  } catch (e) {
    console.log(e)
  }
}

export const requestUpdateListOrder = async (data: UpdateCodeOrderRequest) => {
  try {
    const res = await updateOrderCodeList(data)

    return res
  } catch (e) {
    console.log(e)
  }
}
