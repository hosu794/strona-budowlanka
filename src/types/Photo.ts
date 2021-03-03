
export type PhotoProps = {
    src: string, 
    width: number, 
    height: number
}


export interface IPhoto {
    src: string,
    width: number, 
    height: number,
    alt?: string, 
    key?: string,
    srcSet?: string | string[]
}
