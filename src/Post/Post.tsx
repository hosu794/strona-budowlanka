import * as React from 'react'

type PostProp = {
    id: string, 
    title: string,
    content: string
}

const Post: React.FC<PostProp> = ({title, content, id}) => {
    return(
        <div className="p-5">
            <h1 className="font-bold text-2xl pb-3">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}

export default Post