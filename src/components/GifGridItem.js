import React from 'react'
import propTypes from 'prop-types';

const GifGridItem = ({title, url}) => {
    // console.log({id, title, url})


    return (
        <div className='card animate__bounce'>
            <img src={ url } alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: propTypes.element.isRequired,
    url: propTypes.element.isRequired
}

export default GifGridItem;