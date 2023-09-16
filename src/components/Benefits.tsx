import { FC } from 'react'
import { benefits } from '~/utils'
import Card from './Card'


const Benefits = ({ }) => {
    return (
        <div>
            {benefits.map((card, index) => <p key={index}>hi</p>)}
        </div>
    )
}

export default Benefits