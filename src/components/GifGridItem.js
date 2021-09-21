import React from 'react'

const GifGridItem = ({title, url}) => {
    // console.log({id, title, url})
    return (
        <div className='card animate__bounce'>
            <img src={ url } alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;