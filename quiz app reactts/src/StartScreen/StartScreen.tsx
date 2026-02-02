import s from './StartScreen.module.css'

interface FunctionProps {
    onStart: () => void;
    onInfo: () => void;
}


function StartScreen ({ onStart, onInfo }: FunctionProps) {
    return (
        <div className="Wrapper">
            <button onClick={onStart} className={s.StartBtn}>Start</button>
            <button onClick={onInfo} className={s.InfoBtn}>Info</button>
        </div>
    )
}

export default StartScreen