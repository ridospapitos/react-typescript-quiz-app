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

  return (
    <div className={s.Wrapper}>
      {step === 'start' && <StartScreen onStart={() => {setStep('game')}} onInfo={() => {setStep('info')}} />}
      {step === 'game' && <GameScreen onGameEnd={() => {setStep('end')}} giveScore={(score: number) => {setScore(score)}} />}
      {step === 'end' && <EndScreen score={score} />}
      {step === 'info' && <InfoScreen />}
      <button className='ExitBtn' onClick={() => {setStep('start')}}>Exit</button>
    </div>
  )
}

export default App
