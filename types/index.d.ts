type ResultCodeMsg =
  | {
      code: 200
      message: 'success'
    }
  | {
      code: 400
      message: 'fail'
    }
  | {
      code: 1
      message: '조회된 데이터가 없습니다.'
    }
  | {
      code: 2
      message: '로그인 정보가 없습니다.'
    }

type ResultStatus = ResultCodeMsg & {
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

export type SelectBoardListRes = {
  resultStatus: ResultStatus
  data: BoardData
}

export type InsertBoardReq = {
  title: string
  content: string
}

export type InsertBoardRes = {
  resultStatus: ResultStatus
  data: {
    board: number
  }
}

export type ListBoxPositionType = 'top' | 'bottom'
