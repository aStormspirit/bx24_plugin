export interface UserType {
  id?: string
  number: string
  name: string
  api_hash: string
  api_id: string
  selected?: boolean
}

export interface UsersListType {
  data: UserType[]
}
