import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const GreetingBox = () => {
  const { darkMode } = useModeToggle()
  return (
    <div className="flex-1 long-box box">
      <div
        className={`p-4 ${
          darkMode ? 'bg-[#408E91]' : 'bg-[#87CAB9]'
        } flex flex-col h-full w-full border border-[12px] border-[#1E1E1E] box-border justify-center rounded-lg`}
      >
        <TypewriterEffect text="Hi, I'm Jing" />
        <motion.p
          className="font-medium text-sm md:text-lg leading-[25px]"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ durtion: 2, delay: 5, type: 'tween' }}
        >
          My code doesn&apos;t always work, but when it does, I call it magic.
        </motion.p>
      </div>
    </div>
  )
}

export default GreetingBox

function TypewriterEffect({ text }: any) {
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
    <p key={index} className="font-ubuntu">
      {char}
    </p>
  ))

  return (
    <div className="flex">
      <div className="flex text-2xl">{charList}</div>
      <span className="text-2xl text-gray-400">{blink ? '|' : ''}</span>
    </div>
  )
}
