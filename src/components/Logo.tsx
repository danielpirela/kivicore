import Image from 'next/image'

export const Logo = () => {
    return (
        <div className='flex justify-start items-center p-2 gap-3 flex-1 '>
            <Image
                src={'/images/logo.png'}
                width={30}
                height={30}
                alt={'logo image for medic app'}
                priority
            />
            <h2 className='text-black font-bold text-3xl dark:text-white'>
                <span className='text-blue-700 dark:text-white'>k</span>evi Core
            </h2>
        </div>
    )
}

export const LogoAnimated = () => {
    return (
        <div className='flex justify-center items-center animated'>
            <Image
                src={'/images/logo.png'}
                width={150}
                height={150}
                alt='logo animated image for medic app'
            />
        </div>
    )
}

export default Logo
