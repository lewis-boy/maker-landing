import { FC } from 'react'
import { iCard } from '~/models'

interface CardProps {
    benefit: iCard,
    key: number
}

const Card = ({ benefit, key }: CardProps) => {
    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='flex items-center justify-center w-[120px] h-[120px] bg-dark-blue rounded-[45px]'>
                <img src={benefit.icon} alt="icon" className='w-[68px] h-[80px] object-contain' />
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-h-xs text-white text-center font-extrabold'>{benefit.title}</h3>
                <h4 className='text-p text-grey text-center'>{benefit.paragraph}</h4>
            </div>
        </div>
    )
}

export default Card