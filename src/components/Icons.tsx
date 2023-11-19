import Image from 'next/image'

interface Props {
    w: number
    h: number
}

export const IconCheck = ({ w, h }: Props) => {
    return (
        <Image src={'/images/check.png'} alt={'icon check'} width={w} height={h}/>
    )
}


export const IconTrash = ({ w, h }: Props) => {
    return (
        <Image src={'/images/basura.png'} alt={'icon trash'} width={w} height={h}/>
    )
}


export const IconClose = ({ w, h }: Props) => {
    return (
        <Image src={'/images/close.png'} alt={'icon close'} width={w} height={h}/>
    )
}
