import { CodeListResponse, CodeListSearchType, InsertCodeRequest, ResultStatus } from '@/types'

import { POST } from '@/lib/api'

export const selectCodeList = async (data: CodeListSearchType) =>
  POST<CodeListResponse, CodeListSearchType>('code/list', data)

export const insertCodeList = async (data: InsertCodeRequest) =>
  POST<ResultStatus, InsertCodeRequest>('code/insert', data)

export const requestCodeList = async (data: CodeListSearchType) => {
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
