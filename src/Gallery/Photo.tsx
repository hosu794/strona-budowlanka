import * as React from 'react'
import { PhotoProps } from '../types/Photo'

const Photo: React.FC<PhotoProps> = ({src, width, height}) => {

    return(
        <React.Fragment>
          <img src={src} alt="" height={height} width={width} />
        </React.Fragment>
    )

}

export default Photo