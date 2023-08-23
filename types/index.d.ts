

// type ResultStatus<T> = ResultCodeMsg & {
//   specificMsg: string | null
//   fieldErrors: string | null
// }

interface ResultStatus {
  code: number
  message: string
  specificMsg: string | null
  fieldErrors: string | null
}

interface CommonResponse {
  resultStatus: ResultStatus
}

type BoardList = {
  seq: number
  boardNo: number
  title: string
  content: string
  createdAt: string
  createdBy: string
  modifiedAt: string
  modifiedBy: string
}

export interface TableHeaderProps {
  id: number
  name: string
  selectOrder: boolean
}

type BoardData = {
  boardList: BoardList
}

export interface SelectBoardListRes extends CommonResponse {
  data: BoardData
}

export type InsertBoardReq = {
  title: string
  content: string
}

export type InsertBoardRes = {
  resultStatus: CommonResponse
  data: {
    board: number
  }
}

export type ListBoxPositionType = 'top' | 'bottom'

export interface Paging {
  currentPage: number
  displayRow: number
}

export type OrderByCodeType = 'co' | 'cn' | 'r1' | 'r2'

export interface CodeListSearchType {
  search: {
    codeSearch: {
      type1: string
      searchWord1: string
      orderBy: OrderByCodeType
      descAsc: string
      parentCode: string
      paging: Paging
    }
  }
}
export interface CodeList {
  code: string
  codeName: string
  remark1: string
  value1: number
  remark2: string
  value2: number
  codeOrd: number
  useYn: string
}

export interface InsertCodeType {
  code: string
  codeName: string
  remark1: string
  value1: number
  remark2: string
  value2: number
  useYn: string
  codeOrd: number
}

export interface InsertCodeRequest {
  data: {
    code: InsertCodeType
  }
}

export interface CodeListResponse {
  resultStatus: CommonResponse
  data: {
    codeList: CodeList[]
  }
}
