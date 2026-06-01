import React from 'react'
import Card from './Card'
import CardCover from './CardCover'

const Skill = ({ skill: { style, name, icon } }) => {
    return (
        <Card style={style}>
            <div className="rounded-lg w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                 group relative flex flex-col justify-between duration-300 py-3 h-28
                 border border-pink-100 dark:border-gray-700 hover:border-pink-400 dark:hover:border-cyan-500 shadow-md hover:shadow-pink-500/20 dark:hover:shadow-cyan-500/20
                 transform hover:-translate-y-1 transition-all"
                 aria-label={`${name} skill`}>
                <CardCover style={{ display: "hidden group-hover:block", ...style }} />
                <div className="flex justify-center w-fit mx-auto z-20 transform group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div className='text-center text-gray-800 dark:text-white z-20 mt-2'>
                    <p className="font-medium text-sm tracking-wide">{name}</p>
                </div>
            </div>
        </Card>
    )
}

export default Skill;
