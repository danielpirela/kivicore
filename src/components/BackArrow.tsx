import Image from 'next/image'

export const BackArrow = () => {
    return (
        <button className='flex justify-center items-center w-auto h-auto' onClick={()=>        {history.back()}}>
            <Image src={'/images/backArrow.png'} width={32} height={32} alt='back arrow icon'/>
        </button>
    )
}
