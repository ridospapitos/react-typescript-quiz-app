import './style/App.css'
import s from './style/App.module.css'
import StartScreen from './StartScreen/StartScreen'
import GameScreen from './GameScreen/GameScreen'
import EndScreen from './EndScreen/EndScreen'
import InfoScreen from './InfoScreen/InfoScreen'
import { useState } from 'react'

function App() {
  const [step, setStep] = useState<'start' | 'game' | 'end' | 'info'>('start')
  const [score, setScore] = useState<number>(0)
  const [language, setLanguage] = useState<'Eng' | 'Rus'>('Eng')

  return (
    <div className={s.Wrapper}>
      {step === 'start' && <StartScreen onStart={() => {setStep('game')}} onInfo={() => {setStep('info')}} onLanguage={(language: 'Eng' | 'Rus') => {setLanguage(language)}} languageInfo={language} />}
      {step === 'game' && <GameScreen onGameEnd={() => {setStep('end')}} giveScore={(score: number) => {setScore(score)}} languageInfo={language} />}
      {step === 'end' && <EndScreen score={score} languageInfo={language} onUserPrompt={() => {setStep('start')}} />}
      {step === 'info' && <InfoScreen languageInfo={language} />}
      <button className='ExitBtn' onClick={() => {setStep('start')}}>{language === 'Eng' ? 'Exit' : 'Выйти'}</button>
    </div>
  )
}

export default App
