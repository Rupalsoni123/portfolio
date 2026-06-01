import React from 'react'

const CardCover = ({ text, style }) => {
    return (
        <div className={`${style.display} flex-col justify-center z-10 absolute inset-0 bg-gradient-to-b ${style.cover} ${style?.opacity} rounded-md duration-500`}>
            {text && <p className='text-sm p-3 text-center text-gray-900 dark:text-white'>
                {text}
            </p>}
        </div>
    )
}

export default CardCover
