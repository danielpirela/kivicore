import Image from 'next/image'

export const Logo = () => {
    return (
        <div className='flex justify-start items-center p-2 gap-3 flex-1'>
            <img src={'/images/logo.png'} className='size-8 lg:size-12'  alt={'logo image for medic app'}/>
            <h2 className='text-white dark:text-black font-bold text-3xl lg:text-5xl'><span className='text-white dark:text-indigo-700'>k</span>evi Core</h2>
        </div>
    )
}


export const LogoAnimated = () => {
    return (
        <div className='flex justify-center items-center animated'>
            <Image src={'/images/logo.png'} width={150} height={150} alt='logo animated image for medic app'/>
        </div>
    )
}




export default Logo
