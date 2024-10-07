import Image from 'next/image'

import next from '@/app/assets/next-logo.png'
import jquery from '@/app/assets/jquery-logo.png'
import react from '@/app/assets/react-logo.png'
import tailwind from '@/app/assets/tailwind-logo.png'



interface IData {
    tec: string;
    text: string;
    bool: boolean;
}

function Section({ tec, text, bool }: IData) {

    return (
        <>
            <div id={tec} className={`${bool ? 'bg-pallete02' : 'bg-pallete04'} flex flex-col items-center w-full justify-between p-[20px]`}>
                <div className='w-[150px]'>
                    <Image src={tec == 'React' ? react : tec == 'Tailwind' ? tailwind : tec == 'Next' ? next : jquery} alt={`${tec}.png`}/>
                </div>
                <strong className={`${bool ? 'text-white' : 'text-pallete02'}  text-[30px]`}>
                    {tec}
                </strong>
                <p className='text-[12px] text-center md:w-[500px] md:text-[18px]'>
                    {text}
                </p>
            </div>
        </>
    );
}


export default Section