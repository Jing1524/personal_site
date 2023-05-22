import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'

const GreetingBox = ({ pillsRef, sliderValue }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  return (
    <div className="flex-1 h-full long-box box p-[10px]">
      <div
        ref={pillsRef}
        style={{ borderWidth: theme.strokeWidth }}
        className={`pill px-16 py-4 flex flex-col h-full w-full border box-border justify-center `}
      >
        <TypewriterEffect text="Hi, I'm Jing" sliderValue={sliderValue} />
        <motion.p
          className={`font-medium text-sm md:text-lg leading-[25px] ${sliderValue === 1 && 'text-[#fff]'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ durtion: 2, delay: 5, type: 'tween' }}
        >
          My code doesn&apos;t always work, but when it does, I call it magic.
        </motion.p>
      </div>
    </div>
  )
}

export default GreetingBox

function TypewriterEffect({ text, sliderValue }: any) {
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
    <p key={index} className={`font-ubuntu ${sliderValue === 1 && 'text-[#fff]'}`}>
      {char}
    </p>
  ))

  return (
    <div className="flex">
      <div className="flex text-2xl lg:text-4xl text-bold">{charList}</div>
      <span className="text-2xl text-gray-400 lg:text-4xl">{blink ? '|' : ''}</span>
    </div>
  )
}
