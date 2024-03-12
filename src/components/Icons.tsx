import Image from 'next/image'

interface Props {
    w: number
    h: number
}

export const IconCheck = ({ w, h }: Props) => {
    return (
        <Image
            src={'/images/check.png'}
            alt={'icon check'}
            width={w}
            height={h}
        />
    )
}

export const IconTrash = ({ w, h }: Props) => {
    return (
        <Image
            src={'/images/basura.png'}
            alt={'icon trash'}
            width={w}
            height={h}
        />
    )
}

export const IconClose = ({ w, h }: Props) => {
    return (
        <Image
            src={'/images/close.png'}
            alt={'icon close'}
            width={w}
            height={h}
        />
    )
}

export const IconMedicH = ({ w, h }: Props) => {
    return (
        <div className='bg-indigo-700 rounded-full p-2 w-auto h-auto flex justify-center items-start'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={w}
                height={h}
                viewBox='0 0 64 64'
                fill='none'
                bis_size='{"x":786,"y":348,"w":64,"h":64,"abs_x":786,"abs_y":408}'
            >
                <path
                    d='M53.1805 12C50.7238 12 49.0495 13.2767 48.0038 14.5522C46.9734 13.2795 45.3247 12 42.8651 12C38.9566 12 36 15.1233 36 19.1324C36 21.7094 37.2646 23.7436 39.2468 25.7802C40.6667 27.2389 42.5528 28.7928 44.7572 30.6089C45.5817 31.2882 46.4508 32.0041 47.3566 32.7655L48 33.3063L48.6434 32.7655C49.5492 32.0041 50.4183 31.2882 51.2428 30.6089C53.4472 28.7928 55.3333 27.2389 56.7532 25.7802C58.7354 23.7436 60 21.7094 60 19.1324C60 15.1338 57.0991 12 53.1805 12Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":822,"y":360,"w":24,"h":21,"abs_x":822,"abs_y":420}'
                ></path>
                <rect
                    x='47'
                    y='27'
                    width='11'
                    height='11'
                    rx='5.5'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":833,"y":375,"w":11,"h":11,"abs_x":833,"abs_y":435}'
                ></rect>
                <path
                    d='M51 32.5C51 31.6716 51.6716 31 52.5 31C53.3284 31 54 31.6716 54 32.5C54 33.3284 53.3284 34 52.5 34C51.6716 34 51 33.3284 51 32.5Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":837,"y":379,"w":3,"h":3,"abs_x":837,"abs_y":439}'
                ></path>
                <path
                    d='M12 8.5C12 7.67157 12.6716 7 13.5 7C14.3284 7 15 7.67157 15 8.5C15 9.32843 14.3284 10 13.5 10C12.6716 10 12 9.32843 12 8.5Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":798,"y":355,"w":3,"h":3,"abs_x":798,"abs_y":415}'
                ></path>
                <path
                    d='M19.9996 44C19.6663 48.5 21.2412 57 30.0412 57C38.8412 57 40.7079 48 40.5413 43.5V26.5C40.5413 22.5 43 20 47 20C51 20 52.5 23.5 52.5 26.5'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":805,"y":368,"w":32,"h":37,"abs_x":805,"abs_y":428}'
                ></path>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6 25C6 32.732 12.268 39 20 39C27.732 39 34 32.732 34 25H32C32 31.6274 26.6274 37 20 37C13.3726 37 8 31.6274 8 25H6Z'
                    fill='white'
                    bis_size='{"x":792,"y":373,"w":28,"h":14,"abs_x":792,"abs_y":433}'
                ></path>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10 25C10 30.5228 14.4772 35 20 35C25.5228 35 30 30.5228 30 25H28C28 29.4183 24.4183 33 20 33C15.5817 33 12 29.4183 12 25H10Z'
                    fill='white'
                    bis_size='{"x":796,"y":373,"w":20,"h":10,"abs_x":796,"abs_y":433}'
                ></path>
                <path
                    d='M7 26H11.5'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":793,"y":374,"w":4,"h":0,"abs_x":793,"abs_y":434}'
                ></path>
                <path
                    d='M29 26H33.5'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":815,"y":374,"w":4,"h":0,"abs_x":815,"abs_y":434}'
                ></path>
                <path
                    d='M9 25.5V12.5C9 11.3333 9.6 9 12 9'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":795,"y":357,"w":3,"h":16,"abs_x":795,"abs_y":417}'
                ></path>
                <path
                    d='M26.5 7C27.3284 7 28 7.67157 28 8.5C28 9.32843 27.3284 10 26.5 10C25.6716 10 25 9.32843 25 8.5C25 7.67157 25.6716 7 26.5 7Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":811,"y":355,"w":3,"h":3,"abs_x":811,"abs_y":415}'
                ></path>
                <path
                    d='M31 25.5V12.5C31 11.3333 30.4 9 28 9'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":814,"y":357,"w":3,"h":16,"abs_x":814,"abs_y":417}'
                ></path>
                <path
                    d='M17 38H23V42C23 43.6569 21.6569 45 20 45C18.3431 45 17 43.6569 17 42V38Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":803,"y":386,"w":6,"h":7,"abs_x":803,"abs_y":446}'
                ></path>
            </svg>
        </div>
    )
}

export const IconMedicT = ({ w, h }: Props) => {
    return (
        <div className='bg-indigo-700 rounded-full p-2 w-auto h-auto flex justify-center items-start'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={w}
                height={h}
                viewBox='0 0 64 64'
                fill='none'
                bis_size='{"x":1073,"y":348,"w":64,"h":64,"abs_x":1073,"abs_y":408}'
            >
                <path
                    d='M11 49.1702L16.1702 44L20 47.8298L14.8298 53L11 49.1702Z'
                    fill='white'
                    bis_size='{"x":1084,"y":392,"w":9,"h":9,"abs_x":1084,"abs_y":452}'
                ></path>
                <path
                    d='M22.1213 32.7369C21.7308 32.3463 21.7308 31.7132 22.1213 31.3226L42.2577 11.1862C45.1727 8.27126 49.8988 8.27126 52.8138 11.1862C55.7287 14.1012 55.7287 18.8273 52.8138 21.7423L32.6774 41.8787L33.3845 42.5858L32.6774 41.8787C32.2868 42.2692 31.6537 42.2692 31.2631 41.8787L30.556 42.5858L31.2631 41.8787L22.1213 32.7369Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":1095,"y":357,"w":33,"h":33,"abs_x":1095,"abs_y":417}'
                ></path>
                <path
                    d='M41 11L52 22'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":1114,"y":359,"w":11,"h":11,"abs_x":1114,"abs_y":419}'
                ></path>
                <path
                    d='M30.5937 32.3058C29.8021 31.5141 29.8021 30.2307 30.5937 29.4391L40.4391 19.5937C41.2307 18.8021 42.5141 18.8021 43.3058 19.5937L44.4063 20.6942C45.1979 21.4859 45.1979 22.7693 44.4063 23.5609L34.5609 33.4063C33.7693 34.1979 32.4859 34.1979 31.6942 33.4063L30.5937 32.3058Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":1103,"y":367,"w":15,"h":15,"abs_x":1103,"abs_y":427}'
                ></path>
                <path
                    d='M37 22L41 26M33 26L37 30'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":1106,"y":370,"w":8,"h":8,"abs_x":1106,"abs_y":430}'
                ></path>
                <path
                    d='M22.8241 45.9601C22.5537 46.0641 22.309 46.2257 22.1071 46.4336L14.4362 54.3325C13.5719 55.2225 12.1831 55.2225 11.3189 54.3325L9.66016 52.6245C8.77995 51.7181 8.77995 50.2368 9.66016 49.3304L18.7086 40.013C18.9216 39.7936 19.0815 39.5283 19.176 39.2375L18.2249 38.9286L19.176 39.2375L21.5748 31.8516L32.196 42.3569L22.8241 45.9601Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":1082,"y":380,"w":23,"h":23,"abs_x":1082,"abs_y":440}'
                ></path>
            </svg>
        </div>
    )
}

export const IconMedicP = ({ w, h }: Props) => {
    return (
        <div className='bg-indigo-700 rounded-full p-2 w-auto h-auto'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={w}
                height={h}
                viewBox='0 0 64 64'
                fill='none'
                bis_size='{"x":211,"y":348,"w":64,"h":64,"abs_x":211,"abs_y":408}'
            >
                <path
                    d='M21.3806 42.6204L21.3805 42.6204C18.687 39.9268 17.4944 38.0267 16.0896 35.356L20.7475 30.6981L20.7478 30.6978C21.6725 29.7724 21.6725 28.2724 20.7478 27.347L20.7475 27.3468L13.0949 19.6941C12.1694 18.7686 10.669 18.7686 9.74359 19.6941L7.68675 21.7509C4.40198 25.0357 3.36264 29.8094 4.36898 34.9276C5.37448 40.0415 8.42404 45.5688 13.4281 50.5729L13.4281 50.5729C18.4319 55.5765 23.9589 58.6258 29.0727 59.6311C34.1908 60.6373 38.9643 59.5979 42.2491 56.3134L42.2492 56.3133L44.3057 54.2564C44.3057 54.2564 44.3057 54.2563 44.3057 54.2563C44.3058 54.2562 44.3059 54.2561 44.306 54.2561C45.2316 53.3308 45.2311 51.8304 44.3059 50.9053C44.3059 50.9052 44.3059 50.9052 44.3059 50.9052L36.6541 43.253L36.6538 43.2527C35.7284 42.328 34.2284 42.328 33.303 43.2527L33.3028 43.253L28.6455 47.9106C25.9734 46.5054 24.0737 45.314 21.3806 42.6204Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":215,"y":367,"w":40,"h":40,"abs_x":215,"abs_y":427}'
                ></path>
                <path
                    d='M59.4534 40.637V39.637H60.4534H61.763C62.4057 39.637 63 39.0802 63 38.3002V27.3368C63 26.5568 62.4057 26 61.763 26H39.2373C38.5945 26 38 26.557 38 27.3368V38.3002C38 39.08 38.5945 39.637 39.2373 39.637H55.3184H55.7454L56.0407 39.9454L59.4534 43.5096V40.637Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":249,"y":374,"w":25,"h":17,"abs_x":249,"abs_y":434}'
                ></path>
                <path
                    d='M29.5975 31.1047V30.1047H28.5975H26.8998C25.8834 30.1047 25 29.2412 25 28.1003V14.0045C25 12.8636 25.8834 12 26.8998 12H56.0998C57.1163 12 58 12.8638 58 14.0045V28.1003C58 29.2409 57.1163 30.1047 56.0998 30.1047H35.2539H34.8293L34.5344 30.4102L29.5975 35.5243V31.1047Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":236,"y":360,"w":33,"h":23,"abs_x":236,"abs_y":420}'
                ></path>
                <circle
                    cx='33.5'
                    cy='21.5'
                    r='2.5'
                    fill='white'
                    bis_size='{"x":242,"y":367,"w":5,"h":5,"abs_x":242,"abs_y":427}'
                ></circle>
                <circle
                    cx='41.5'
                    cy='21.5'
                    r='2.5'
                    fill='white'
                    bis_size='{"x":250,"y":367,"w":5,"h":5,"abs_x":250,"abs_y":427}'
                ></circle>
                <circle
                    cx='49.5'
                    cy='21.5'
                    r='2.5'
                    fill='white'
                    bis_size='{"x":258,"y":367,"w":5,"h":5,"abs_x":258,"abs_y":427}'
                ></circle>
            </svg>
        </div>
    )
}

export const IconMedicD = ({ w, h }: Props) => {
    return (
        <div className='bg-indigo-700 rounded-full p-2 w-auto h-auto flex justify-center items-start'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={w}
                height={h}
                viewBox='0 0 64 64'
                fill='none'
                bis_size='{"x":499,"y":348,"w":64,"h":64,"abs_x":499,"abs_y":408}'
            >
                <path
                    d='M53 10.471V10.4705C52.9996 9.62614 52.301 9 51.5123 9H12.4877C11.6992 9 11 9.62599 11 10.471V59.529C11 60.374 11.6992 61 12.4877 61H51.5123C52.3008 61 53 60.374 53 59.529V10.471Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":510,"y":357,"w":42,"h":52,"abs_x":510,"abs_y":417}'
                ></path>
                <path
                    d='M38 23.1202H33.8797V19H30.1203V23.1202H26V26.8797H30.1203V31H33.8797V26.8797H38V23.1202Z'
                    fill='white'
                    bis_size='{"x":525,"y":367,"w":12,"h":12,"abs_x":525,"abs_y":427}'
                ></path>
                <path
                    d='M35.0322 7.12336V8.12336H36.0322H43V14H21V8.12336H27.9678H28.9678V7.12336V6.03697C28.9678 5.41546 29.4341 5 29.9032 5H34.0967C34.5659 5 35.0322 5.4155 35.0322 6.03697V7.12336Z'
                    stroke='white'
                    strokeWidth='2'
                    bis_size='{"x":520,"y":353,"w":22,"h":9,"abs_x":520,"abs_y":413}'
                ></path>
                <path
                    d='M43 37H21'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    bis_size='{"x":520,"y":385,"w":22,"h":0,"abs_x":520,"abs_y":445}'
                ></path>
                <path
                    d='M43 45H21'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    bis_size='{"x":520,"y":393,"w":22,"h":0,"abs_x":520,"abs_y":453}'
                ></path>
                <path
                    d='M43 41H21'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    bis_size='{"x":520,"y":389,"w":22,"h":0,"abs_x":520,"abs_y":449}'
                ></path>
                <path
                    d='M43 49H32'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    bis_size='{"x":531,"y":397,"w":11,"h":0,"abs_x":531,"abs_y":457}'
                ></path>
            </svg>
        </div>
    )
}
export const IconEdit = ({ w, h }: Props) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width={w}
            height={h}
            viewBox='0,0,256,256'
        >
            <g
                fill='#ffffff'
                fillRule='nonzero'
                stroke='none'
                strokeWidth='1'
                strokeLinecap='butt'
                strokeLinejoin='miter'
                strokeMiterlimit='10'
                strokeDasharray=''
                strokeDashoffset='0'
                fontFamily='none'
                fontWeight='none'
                fontSize='none'
                textAnchor='none'
            >
                <g transform='scale(5.12,5.12)'>
                    <path d='M43.125,2c-1.24609,0 -2.48828,0.48828 -3.4375,1.4375l-0.8125,0.8125l6.875,6.875c-0.00391,0.00391 0.8125,-0.8125 0.8125,-0.8125c1.90234,-1.90234 1.89844,-4.97656 0,-6.875c-0.95312,-0.94922 -2.19141,-1.4375 -3.4375,-1.4375zM37.34375,6.03125c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-32.4375,32.46875c-0.12891,0.11719 -0.22656,0.26953 -0.28125,0.4375l-2,7.5c-0.08984,0.34375 0.01172,0.70703 0.26172,0.95703c0.25,0.25 0.61328,0.35156 0.95703,0.26172l7.5,-2c0.16797,-0.05469 0.32031,-0.15234 0.4375,-0.28125l32.46875,-32.4375c0.39844,-0.38672 0.40234,-1.02344 0.01563,-1.42187c-0.38672,-0.39844 -1.02344,-0.40234 -1.42187,-0.01562l-32.28125,32.28125l-4.0625,-4.0625l32.28125,-32.28125c0.30078,-0.28906 0.39063,-0.73828 0.22266,-1.12109c-0.16797,-0.38281 -0.55469,-0.62109 -0.97266,-0.59766c-0.03125,0 -0.0625,0 -0.09375,0z'></path>
                </g>
            </g>
        </svg>
    )
}
