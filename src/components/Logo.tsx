import Image from 'next/image'

export const Logo = () => {
    return (
        <div className='flex justify-center items-center p-2 gap-3'>
            <Image src={'/images/logo.png'} width={50} height={50} alt={'logo image for medic app'} priority/>
            <h2 className='text-black font-bold text-5xl'><span className='text-indigo-700'>k</span>evi Core</h2>
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
