import Image from 'next/image'

const Logo = () => {
    return (
        <div className='flex justify-center items-center animated'>
            <Image src={'images/logo.png'} width={300} height={300} alt={'logo image for medic app'} priority/>
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
