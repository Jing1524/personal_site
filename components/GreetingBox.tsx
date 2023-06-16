import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'

const GreetingBox = ({ sliderValue }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  return (
    <div className="order-last w-full lg:order-none lg:basis-4/5 h-full long-box box p-[.8vh]">
      <div
        style={{ borderWidth: theme.strokeWidth }}
        className={`pill px-16 py-2 lg:py-0 flex flex-col lg:h-full w-full border box-border justify-center rounded-[100px]`}
      >
        <TypewriterEffect text="Hi, I'm Jing" sliderValue={sliderValue} darkMode={darkMode} />
        <motion.p
          className={`font-medium  text-sm md:text-lg leading-[25px] ${
            sliderValue === 1 && !darkMode && 'text-[#03fccd]'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ durtion: 2, delay: 5, type: 'tween' }}
        >
          a frontend software engineer with a design background.
        </motion.p>
      </div>
    </div>
  )
}

export default GreetingBox

function TypewriterEffect({ text, sliderValue, darkMode }: any) {
  const [typedText, setTypedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  useEffect(() => {
    if (textIndex < text.length) {
      setTimeout(() => {
        setTypedText(typedText + text[textIndex])
        setTextIndex(textIndex + 1)
      }, 350)
    }
  }, [textIndex, typedText, text])

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev)
    }, 400)
    return () => clearTimeout(timeout2)
  }, [blink])

  const charList = typedText.split('  ').map((char, index) => (
    <p key={index} className={`font-ubuntu ${sliderValue === 1 && !darkMode && 'text-[#03fccd]'}`}>
      {char}
    </p>
  ))

  return (
    <div className="flex mb-4">
      <div className="flex text-2xl lg:text-4xl text-bold">{charList}</div>
      <span className="text-2xl text-gray-400 lg:text-4xl">{blink ? '|' : ''}</span>
    </div>
  )
}
