// type ResultStatus<T> = ResultCodeMsg & {
//   specificMsg: string | null
//   fieldErrors: string | null
// }

type Data<T> = {
  data: T
}

type CommonResponse = {
  resultStatus: ResultStatus
}

type CommonDataResponse<T> = {
  resultStatus: ResultStatus
  data: T
}

type Search<T> = {
  search: T
}

type ResultStatus = {
  code: number
  message: string
  specificMsg: string | null
  fieldErrors: string | null
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

export type Board = {
  board: number
}

export interface InsertBoardRes extends Data<Board> {}

export type ListBoxPositionType = 'top' | 'bottom'

export interface Paging {
  currentPage: number
  displayRow: number
}

export type OrderByCodeType = 'co' | 'cn' | 'r1' | 'r2'

type CodeListSearchType = {
  codeSearch: {
    type1: string
    searchWord1: string
    orderBy: OrderByCodeType
    descAsc: string
    parentCode: string
    paging: Paging
  }
}

export interface CodeListSearchData extends Search<CodeListSearchType> {}

export type CodeList = {
  code: string
  codeName: string
  remark1: string | null
  value1: number | null
  remark2: string | null
  value2: number | null
  codeOrd: number
  useYn: string
}

export type InsertCodeType = {
  code: string
  codeName: string
  remark1: string
  value1: number
  remark2: string
  value2: number
  useYn: string
  codeOrd: number
}

export interface InsertCodeData {
  code: InsertCodeType
}

interface UpdateCodeOrderData {
  codeList: CodeOrderUpdateType[]
}

type CodeOrderUpdateType = {
  code: string
  codeOrd: number
}

type CodeListResponseType = {
  codeList: CodeList[]
}

export interface InsertCodeRequest extends Data<InsertCodeData> {}

export interface UpdateCodeOrderRequest extends Data<UpdateCodeOrderData> {}

export interface CodeListResponse extends CommonDataResponse<CodeListResponseType> {}
