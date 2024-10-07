"use client"

import { useEffect, useState } from "react"


const Average: React.FC = () => {

    const [grade01, setGrade01] = useState<number>(0)
    const [grade02, setGrade02] = useState<number>(0)
    const [grade03, setGrade03] = useState<number>(0)
    const [grade04, setGrade04] = useState<number>(0)
    const [grade05, setGrade05] = useState<number>(0)
    const [result, setResult] = useState<number>()
    

    useEffect(() => {
        setResult((grade01+grade02+grade03+grade04+grade05)/5)
        console.log("TO AQUI MLK")
    }, [grade01, grade02, grade03, grade04, grade05])
    



    return(
        <div className="w-screen h-screen flex justify-center items-center p-[10px]">
            
            <div className="shadow-2xl p-[40px] bg-pallete02 relative flex flex-col gap-[40px]">
                <div className="flex flex-wrap justify-evenly gap-[10px]">
                    <input className="text-center rounded-[10px]" placeholder="1th grade" type="number" step="0.01" onChange={(e) => setGrade01(parseFloat(e.target.value))}/>
                    <input className="text-center rounded-[10px]" placeholder="2th grade" type="number" step="0.01" onChange={(e) => setGrade02(parseFloat(e.target.value))}/>
                    <input className="text-center rounded-[10px]" placeholder="3th grade" type="number" step="0.01" onChange={(e) => setGrade03(parseFloat(e.target.value))}/>
                    <input className="text-center rounded-[10px]" placeholder="4th grade" type="number" step="0.01" onChange={(e) => setGrade04(parseFloat(e.target.value))}/>
                    <input className="text-center rounded-[10px]" placeholder="5th grade" type="number" step="0.01" onChange={(e) => setGrade05(parseFloat(e.target.value))}/>
                </div>


                { result && 

                    <>
                        <div className="flex flex-col items-center">
                            
                            <div className="bg-pallete01  flex flex-col justify-center items-center p-[15px] rounded-t-[15px]">
                                <strong className="text-white text-[25px]">Result:</strong>
                                {/* <p className="bg-white rounded-[35px] p-[8px]">
                                    {result.toFixed(2)}
                                </p> */}
                            </div>
                            
                        </div>
                        <div className={`${result >= 7 ? 'bg-green-600' : 'bg-red-500'} w-full absolute right-0 bottom-0 p-[10px] flex justify-center`}>
                        
                            <strong className="text-white">{result >= 7 ? 'PASSOU' : 'NÃO PASSOU'}</strong>

                        </div>
                    </>
                }
                
            </div>
        </div>


    )
}

export default Average