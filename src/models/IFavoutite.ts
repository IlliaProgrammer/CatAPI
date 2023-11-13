export type IFavRoot = Ifav[]

export interface Ifav {
  id: number
  user_id: string
  image_id: string
  sub_id: any
  created_at: string
  image: Image
}

export interface Image {
  id: string
  url: string
}


export interface IFavRes {
  message: string
  id: number
}
