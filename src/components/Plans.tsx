import { FC } from 'react'



const Plans = ({ }) => {
    return (
        <div className='flex flex-col gap-14 px-6'>
            <div className='flex flex-col gap-7 mb-14'>
                <h3 className='text-white text-h-xs text-center font-extrabold'>Our pricing plans</h3>
                <p className='text-grey text-p text-center '>We only make money when our creators make money. Our plans are always affordable, and its completely free to get started.</p>
            </div>
            <div className='flex flex-col bg-dark-blue px-7 pb-8 pt-[72px] rounded-[8px] text-left relative'>
                <h3 className='text-white text-h-xs  font-extrabold mb-4'>Dip your toe</h3>
                <p className='text-grey text-p mb-6'>Just getting started? No problem at all! Our free plan will take you a long way.</p>
                <h1 className='text-white text-h-md font-extrabold capitalize mb-5'>free</h1>
                <ul>
                    <li className='relative check'>Unlimited products</li>
                    <li className='relative check'>Basic analytics</li>
                    <li className='relative check'>Limited marketplace exposure</li>
                    <li className='relative check'>10% fee per transaction</li>
                </ul>
                <img src="./icon-free.svg" alt="none" className='absolute -top-6 left-6 w-11 h-11' />
            </div>
            <div className='flex flex-col bg-light-blue px-7 pb-8 pt-[72px] rounded-[8px] text-left relative'>
                <h3 className='text-abyss text-h-xs  font-extrabold mb-4'>Dive right in</h3>
                <p className='text-[#080c20] text-p mb-6'>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
                <h1 className='text-abyss text-h-md font-extrabold capitalize mb-5'>Paid</h1>
                <ul>
                    <li className='relative check-b text-abyss font-medium'>Custom domain</li>
                    <li className='relative check-b text-abyss font-medium'>Advanced analytics and reports</li>
                    <li className='relative check-b text-abyss font-medium'>High marketplace visibility</li>
                    <li className='relative check-b text-abyss font-medium'>5% fee per transaction</li>
                </ul>
                <img src="./icon-paid.svg" alt="none" className='absolute -top-6 left-6 w-11 h-11' />            </div>
        </div>
    )
}

export default Plans