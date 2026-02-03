import s from './StartScreen.module.css'

interface FunctionProps {
    onStart: () => void;
    onInfo: () => void;
    onLanguage: (language: 'Eng' | 'Rus') => void;
    languageInfo: 'Eng' | 'Rus'
}


function StartScreen ({ onStart, onInfo, onLanguage, languageInfo}: FunctionProps) {

    const getText = () => {
        if(languageInfo === 'Eng') return 'Rus'
        return 'Eng'
    }

    return (
        <div className="Wrapper">
            <button onClick={onStart} className={s.StartBtn}>{languageInfo === 'Eng' ? 'Start' : 'Старт'}</button>
            <button onClick={() => {onLanguage(getText())}} className={s.LanguageBtn}>{getText()}</button>
            <button onClick={onInfo} className={s.InfoBtn}>{languageInfo === 'Eng' ? 'Info' : 'Инфо'}</button>
        </div>
    )
}

export default StartScreen