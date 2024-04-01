export interface UserType {
  id?: string
  number: string
  name: string
  api_hash: string
  api_id: string
  selected?: boolean
}

export interface DialogType {
  chat_id: string
  chat_name: string
}

export type Profile = {
  user_id: number
  user_name: string
  user_username: string
}
