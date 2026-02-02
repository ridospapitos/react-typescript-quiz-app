import s from './InfoScreen.module.css'

const InfoScreen = () => {
    return (
        <div className={s.Wrapper}>
            <h1 className={s.Rules}>📜 Game Rules</h1>
            <ul>
                <li>Goal: Answer questions by tapping the buttons on the cards.</li>
                <li>Scoring: Correct answer = +1 point. Wrong answer = 0.</li>
                <li>Timer: You have 1 minute per question.</li>
                <li>Results: See your final score and all answers at the end.</li>
            </ul>
        </div>
    )
}

export default InfoScreen