import s from './EndScreen.module.css'

interface Props{
    score: number
    languageInfo: 'Eng' | 'Rus'
    onUserPrompt: () => void
}


const EndScreen = ( { score, languageInfo, onUserPrompt }: Props ) => {

const percent20 = (score: number) => {
        return (
            <div>
                <h2 className={s.Title}>{languageInfo === 'Eng' ? 'Oops! Something went wrong... 🙈' : 'Упс! Что-то пошло не так... 🙈'}</h2>
                <h1 className={s.Score20}>{score}/10</h1>
                <h3 className={s.StatusText}>
                    {languageInfo === 'Eng' ? 'Your status: ' : 'Ваш статус: '}
                    <span className={s.Status20}>{languageInfo === 'Eng' ? '«Happy Contemplator»' : '«Счастливый созерцатель»'}</span>
                </h3>
                <p className={s.Text}>
                    {languageInfo === 'Eng' 
                        ? 'It looks like today you decided to save your memory for more important things. No worries! Erudition is a gained skill, and now you know a couple of new curious facts. Study a bit, and next time you will surprise everyone!' 
                        : 'Похоже, сегодня вы решили поберечь свою память для более важных дел. Ничего страшного! Эрудиция — штука наживная, зато теперь вы знаете пару новых любопытных фактов. Стоит немного подучиться, и в следующий раз вы всех удивите!'}
                </p>
            </div>
        )
    }

    const percent50 = (score: number) => {
        return (
            <div>
                <h2 className={s.Title}>{languageInfo === 'Eng' ? 'Good start! 🐾' : 'Хорошее начало! 🐾'}</h2>
                <h1 className={s.Score50}>{score}/10</h1>
                <h3 className={s.StatusText}>
                    {languageInfo === 'Eng' ? 'Your status: ' : 'Ваш статус: '}
                    <span className={s.Status50}>{languageInfo === 'Eng' ? '«Truth Seeker»' : '«Искатель истин»'}</span>
                </h3>
                <p className={s.Text}>
                    {languageInfo === 'Eng' 
                        ? 'You are already on your way to becoming a sage! You are doing well navigating different topics, although luck turned away in some questions. The result is already good, but we know you are capable of more. Shall we try again?' 
                        : 'Вы уже на пути к званию мудреца! У вас неплохо получается ориентироваться в разных темах, хотя в некоторых вопросах удача отвернулась. Результат уже неплохой, но мы-то знаем, что вы способны на большее. Попробуем еще раз?'}
                </p>
            </div>
        )
    }

    const percent80 = (score: number) => {
        return (
            <div>
                <h2 className={s.Title}>{languageInfo === 'Eng' ? 'That is power! 🧠✨' : 'Вот это мощь! 🧠✨'}</h2>
                <h1 className={s.Score80}>{score}/10</h1>
                <h3 className={s.StatusText}>
                    {languageInfo === 'Eng' ? 'Your status: ' : 'Ваш статус: '}
                    <span className={s.Status80}>{languageInfo === 'Eng' ? '«Master of Erudition»' : '«Мастер эрудиции»'}</span>
                </h3>
                <p className={s.Text}>
                    {languageInfo === 'Eng' 
                        ? 'Excellent result! You feel like a fish in water across various topics. With such an outlook, you can safely go to any intellectual show. Just a little more focus and you will take the gold cup!' 
                        : 'Отличный результат! Вы чувствуете себя как рыба в воде в самых разных вопросах. С таким кругозором можно смело идти на любое интеллектуальное шоу. Еще совсем чуть-чуть внимательности — и вы заберете золотой кубок!'}
                </p>
            </div>
        )
    }

    const percent100 = (score: number) => {
        return (
            <div>
                <h2 className={s.Title}>{languageInfo === 'Eng' ? 'Simply cosmic! 🚀👑' : 'Просто космос! 🚀👑'}</h2>
                <h1 className={s.Score100}>{score}/10</h1>
                <h3 className={s.StatusText}>
                    {languageInfo === 'Eng' ? 'Your status: ' : 'Ваш статус: '}
                    <span className={s.Status100}>{languageInfo === 'Eng' ? '«Human-Google»' : '«Человек-Гугл»'}</span>
                </h3>
                <p className={s.Text}>
                    {languageInfo === 'Eng' 
                        ? 'Amazing! You gave an excellent result and crushed this test. Your horizon is to be envied — it seems there are no closed topics for you. You are a true expert in everything at once!' 
                        : 'Потрясающе! Вы выдали отличный результат и разнесли этот тест в пух и прах. Вашему кругозору можно только позавидовать — кажется, для вас нет закрытых тем. Вы настоящий эксперт во всем и сразу!'}
                </p>
            </div>
        )
    }

    const toReturn = (score: number) => {
        if(score <= 2) {
            return percent20(score)
        } else if (score <= 5) {
            return percent50(score)
        } else if (score <= 8) {
            return percent80(score)
        } else {
            return percent100(score)
        }
    }

    const ResultPost = () => {
        const UserName = prompt('Введите имя пользователя')
        if (UserName !== '') {
            try {
                fetch('http://localhost:3000/TopList', {
                    method: 'POST',
                    body: JSON.stringify({
                        UserName: UserName,
                        Score: score
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            } catch(err) {
                console.log(err)
            }
            onUserPrompt()
        }
    }

    return (
        <div className={s.Wrapper}>
            {toReturn(score)}
            <button className={s.ResultBtn} onClick={ResultPost}>Выложить результат</button>
        </div>
    )
}

export default EndScreen