export interface IPost {
  node: {
    id: string,
    title: string,
    content: string, 
    date: string
  };
}

export interface IPostsResult {
    posts: IEdgesPageInfo
}

export interface IEdgesPageInfo {
    edges: IEdgesPostResult[],
    pageInfo: IPageInfo
}


export interface IEdgesPostResult {
    node: INodePostResult
}

export interface INodePostResult {
    author: any,
    categories: any, 
    content: string,
    date: string, 
    title: string 
}

export interface IPageInfo {
    endCursor: string, 
    hasNextPage: boolean
}

