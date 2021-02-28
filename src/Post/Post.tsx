import * as React from 'react'
import useDateFormat from '../hooks/useDateFormat'

import ShowMoreText from 'react-show-more-text'

type PostProp = {
    title: string,
    content: string,
    date: string
}


const Post: React.FC<PostProp> = ({title, content, date}) => {


    return(
        <div className="p-5">
            <div className="flex flex-col pb-3">
                <h1 className="font-bold text-2xl">{title}</h1>
                <span className="font-semibold text-lg">({useDateFormat(date)})</span>
            </div>
            <ShowMoreText
              lines={5}
              more='Pokaż więcej'
              less='Pokaż mniej'
              className='content-css'
              anchorClass='my-anchor-css-class'
              expanded={false}
              width={1920}
            >
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </ShowMoreText>
        </div>
    )
}

export default Post