import { FC, useState } from 'react'
import { initialBenefits } from '~/utils'
import Card from './Card'


const Benefits = ({ }) => {

    const [benefits, setBenefits] = useState(initialBenefits)

    return (
        <div className='flex flex-col gap-14 px-6'>
            {benefits.map((benefit) => <Card benefit={benefit} key={benefit.id} />)}
        </div>
    )
}

export default Benefits