import { useNavigate } from "react-router-dom";
import images from "../assets/images/images";
import TextEmoji from "../components/TextEmoji";
import { Link } from "react-router-dom";
export default function ApplyRoutine() {
    const navigate = useNavigate()
    return (
        <div className="screen applyRoutine-screen justify-between start-screen p-5 flex  flex-col gap-5 min-h-[100dvh]">
            {/* <div className="blank"></div> */}
            <h1 className="text-dark text-[2rem] font-bold text-center mt-[3vh]">
                Apply BUIE Second Sem <span className="-accent">Routine</span>? <br />
                <TextEmoji emoji="🏫" /> <TextEmoji emoji="📚" /> <TextEmoji emoji="🎒" />
            </h1>
            <div className="blank"></div>
            <img src={images.undraw_city_girl_ccpd} className="w-[90%] block mx-auto" />
            <div className="blank"></div>
            {/* <p className="text-center text-2xl font-bold text-accent">BUIE Second Semester </p> */}
            <p className="text-center text-sm mx-4 text-black/70">Click on 'Apply Routine' to apply <span className="text font-semibold">BUIE Second Semester</span> Routine. You can skip and apply the routine from settings also.</p>
            <div className="btnWrapper flex justify-between items-center w-full gap-3">
                <button onClick={() => navigate('', { replace: true })} className="flex-[1.5] no-highlight select-none rounded-2xl bg-dark text-white  mx-auto block p-[1.3em] duration-150 active:scale-[0.98] text-sm">
                    Skip
                </button>
                <button onClick={() => navigate('/home', { replace: true })} className="flex-[2.5] no-highlight select-none rounded-2xl bg-accent text-white  mx-auto block p-[1.3em] duration-150 active:scale-[0.98] text-sm">
                    Apply Routine
                </button>
                {/* <p className="text-center text-xs pt-2 text-black/60">See <Link to='' className="text-link">Terms and Conditions</Link> before continuing.</p> */}
            </div>
        </div>
    )
}