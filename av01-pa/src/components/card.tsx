

interface IData {
    tec: string;
    text: string;
}

function Card({ tec, text }: IData) {

    return (
        <>
            <div className="bg-pallete03 h-[35vh] w-[320px] m-[20px] shadow-2xl border-pallete06 rounded-b-[12px]">
                <div className="bg-gradient-to-r from-pallete01 to-pallete05 h-[15vh] flex justify-center items-center text-pallete04 rounded-t-[12px]">
                    <strong>{tec}</strong>
                </div>

                <div className="p-[10px] text-center flex flex-col items-center justify-between h-[20vh]">
                    <p className="text-[15px]">{text}</p>
                    <a href={`#${tec}`} className="bg-gradient-to-r from-pallete01 to-pallete05 h-[6vh] w-[80%] text-pallete04 flex items-center justify-center">
                        <p>Read More</p>
                    </a>
                </div>
            </div>
        </>
    );
}


export default Card