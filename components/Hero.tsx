import { styles } from '@/styles/style'
import Computer from './Computer'
import ComputersCanvas from './Computer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 md:h-80 violet-gradient" />
        </div>
        <div>
          {/* TODO: add typewrite effect */}
          <h1 className=" font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            <TypewriterEffect text="Hi, I'm Jing" />
            {/* Hi, I&apos;m <span className="text-[#915eff]">Jing Li</span> */}
          </h1>

          <motion.p
            className="text-[#dfd9ff] font-medium text-[16px] lg:leading-[40px] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ durtion: 1, delay: 2 }}
          >
            a software engineer with experience in end to end product development, <br />
            My core competencies include front-end development, UX/UI design, and agile product development.
          </motion.p>
        </div>
      </div>
      <ComputersCanvas />
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
      }, 500)
    }
  }, [textIndex, typedText, text])

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearTimeout(timeout2)
  }, [blink])

  const charList = typedText.split('').map((char, index) => <p key={index}>{char}</p>)

  return (
    <div className="flex">
      <div className="flex">{charList}</div>
      <span>{blink ? '|' : ''}</span>
    </div>
  )
}
