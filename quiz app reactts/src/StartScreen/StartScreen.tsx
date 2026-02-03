import s from './StartScreen.module.css'

interface FunctionProps {
    onStart: () => void;
    onInfo: () => void;
    onLanguage: (language: 'Eng' | 'Рус') => void;
    languageInfo: 'Eng' | 'Рус'
    onTop: () => void;
}


function StartScreen ({ onStart, onInfo, onLanguage, languageInfo, onTop }: FunctionProps) {

    const getText = () => {
        if(languageInfo === 'Eng') return 'Рус'
        return 'Eng'
    }

    return (
        <div className="Wrapper">
            <button onClick={onTop} className={s.TopBtn}>{languageInfo === 'Eng' ? 'Top' : 'Топ'}</button>
            <button onClick={onStart} className={s.StartBtn}>{languageInfo === 'Eng' ? 'Start' : 'Старт'}</button>
            <button onClick={() => {onLanguage(getText())}} className={s.LanguageBtn}>{getText()}</button>
            <button onClick={onInfo} className={s.InfoBtn}>{languageInfo === 'Eng' ? 'Info' : 'Инфо'}</button>
        </div>
    )
}

export default StartScreen