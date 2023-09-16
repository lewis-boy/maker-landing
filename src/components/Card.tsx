import { FC } from 'react'

interface CardProps {
    icon: string,
    title: string,
    paragraph: string,
}

const Card: FC<CardProps> = ({ }) => {
    return (<div>Card</div>)
}

export default Card