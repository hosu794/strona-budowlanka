export interface IPost {
   node: {
    id: string, 
    title: string, 
    content: string
   }
}

export interface IPosts {
    getPosts: IPost[]
}