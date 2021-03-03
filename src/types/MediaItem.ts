export interface INodeMediaItem {
    node: IMediaItem
}

export interface IMediaItem {
    id: string,
    date: Date, 
    title: string, 
    sourceUrl: string, 
    author: IMediaItemAuthor, 
    mediaDetails: IMediaItemDetails
}

export interface IMediaItemAuthor {
    email?: string, 
    nickname?: string, 
}

export interface IMediaItemDetails {
    height: number, 
    width: number
}