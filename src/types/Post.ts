export interface IPost {
    id: string, 
    title: string, 
    content: string
}

export interface IPosts {
    getPosts: IPost[]
}