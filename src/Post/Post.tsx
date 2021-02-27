import * as React from 'react'

type PostProp = {
    id: string, 
    title: string,
    content: string
}

const Post: React.FC<PostProp> = ({title, content, id}) => {
    return(
        <div>
            <h1>{title}</h1>
            <div contentEditable='true' dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}

export default Post