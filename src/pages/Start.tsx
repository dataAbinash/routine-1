import Emoji from "emoji-store"
import { Link, useNavigate } from "react-router-dom"
import images from "../assets/images/images"
import TextEmoji from "../components/TextEmoji"
export default function Start() {
    const navigate = useNavigate()
    return (
        <div className="justify-between start-screen p-5 flex  flex-col gap-5 min-h-[100dvh]">
            <div className=""></div>
            <h1 className="text-dark text-[2.1rem] font-bold text-center">Organize your life <br /> with <span className="text-accent">Routine</span>! <br /><TextEmoji emoji="😉"/> </h1>
            <img src={images.undraw_reading_time_re_phf7} className="w-full" />
            <p className="text-center text-sm">Routine helps you to store and manage your routines.</p>
            <div className="btnWrapper">
                <button onClick={() => navigate('/applyRoutine', {replace : true})} className="no-highlight select-none rounded-2xl bg-dark text-white w-full mx-auto block p-[1.3em] duration-150 active:scale-[0.98] text-sm">
                    Continue
                </button>
                <p className="text-center text-xs pt-2 text-black/60">Read <Link to='' className="text-link">Terms and Conditions</Link> before continuing.</p>
            </div>
        </div>
    )
}