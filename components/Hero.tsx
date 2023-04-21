import { styles } from '@/styles/style'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CharacterCanvas from './Character'

export default function Hero() {
  return (
    <section id="/" className="relative w-full h-screen mx-auto">
      <div className="px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#000]" />
          <div className="w-1 h-40 md:h-80 blkGradient" />
        </div>
        <div>
          {/* type effect with space issue */}
          <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            <TypewriterEffect text="Hi, I'm Jing" />
          </h1>

          <motion.p
            className="font-medium text-[16px] lg:leading-[40px] mt-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ durtion: 2, delay: 3, type: 'tween' }}
          >
            A software engineer with experience in end-to-end product development.
            <br /> Front-end is my core competency,
            <br />
            using development technologies such as React.js, TypeScript, and Node.js.
          </motion.p>
        </div>
      </div>
      <CharacterCanvas />

      <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

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
      <div className="flex">{charList}</div>
      <span className="text-gray-400">{blink ? '|' : ''}</span>
    </div>
  )
}
