import { CommonResponse, ResultStatus } from '@/types'

import { GET } from '@/lib/api'

export const selectMemberList = async () => GET<ResultStatus>('member')
