"use client"

import { useState } from "react"




const Imc: React.FC = () => {
    
    const [height, setHeight] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)


    return(
        <div className="h-screen w-screen flex justify-center items-center p-[10px]">
            <div className="bg-pallete02 h-[300px] gap-[20px] flex flex-col w-[500px] justify-around p-[10px] shadow-2xl">
                <div className="flex flex-wrap w-full justify-center gap-[20px]">
                    <input className="rounded-[10px] p-[5px] w-[200px] text-center" type="number" step="0.010" placeholder="Your height (meters)" onChange={(e) => setHeight(parseFloat(e.target.value))}/>
                    <input className="rounded-[10px] p-[5px] w-[200px] text-center" type="number" step="0.010" placeholder="your weight (kilograms)" onChange={(e) => setWeight(parseFloat(e.target.value))}/>
                </div>


                <div className="flex justify-center flex-col items-center gap-[20px]">
                    <p>Your IMC:</p>
                    <p className="text-[30px] bg-pallete04 p-[20px] rounded-[20px]">{ isNaN(weight/(height*height)) ? '' : (weight/(height*height)).toFixed(2) }</p>
                </div>
            </div>
        </div>
    )
}

export default Imc