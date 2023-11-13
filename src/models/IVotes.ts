export type IVotes = IVote[]

export interface IVote {
  id: number
  image_id: string
  sub_id: string
  created_at: string
  value: number
  country_code: string
  image: Image
}

export interface Image {
  id: string
  url: string
}


export interface IVotePost {
  message?: string
  id?: number
  image_id: string
  sub_id: string
  value: number
  country_code?: string
}

