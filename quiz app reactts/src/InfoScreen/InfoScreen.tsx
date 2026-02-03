import s from './InfoScreen.module.css'

interface Props {
    languageInfo: 'Eng' | 'Rus'
}

const InfoScreen = ( { languageInfo }: Props ) => {

    return (
        <div className={s.Wrapper}>
            <h1 className={s.Rules}>{languageInfo === 'Eng' ? '📜 Game Rules' : '📜 Игровые Правила'}</h1>
            <ul>
                <li>{languageInfo === 'Eng' ? 'Goal: Answer questions by tapping the buttons on the cards.' : 'Цель: Отвечать на вопросы, нажимая на кнопки на карточках.'}</li>
                <li>{languageInfo === 'Eng' ? 'Scoring: Correct answer = +1 point. Wrong answer = 0.' : 'Оценка: Правильный ответ = +1 балл. Неправильный ответ = 0'}</li>
                <li>{languageInfo === 'Eng' ? 'Timer: You have 1 minute per question.' : 'Таймер: На каждый вопрос отводится 1 минута.'}</li>
                <li>{languageInfo === 'Eng' ? 'Results: See your final score and all answers at the end.' : 'Результаты: В конце вы увидите свой итоговый результат и все ответы.'}</li>
            </ul>
        </div>
    )
}

export default InfoScreen