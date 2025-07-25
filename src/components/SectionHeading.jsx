import React from 'react'

const SectionHeading = ({ heading, secondHeading }) => {
    return (
        <div className="text-gray-900 dark:text-white">
            <h2 className='text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-4'>
                {heading}
            </h2>
            {secondHeading && (
                <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
                    {secondHeading}
                </p>
            )}
        </div>
    )
}

export default SectionHeading;
