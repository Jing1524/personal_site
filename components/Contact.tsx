import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import kittyAnimate from '../assets/lottie/kitty.json'

import KittyCanvas from './canvas/KittyCanvas'
import Lottie from 'react-lottie'
import classNames from 'classnames'
import { useModeToggle } from '@/context/ModeProvider'

export default function Contact() {
  const { darkMode } = useModeToggle()
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const HandleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        'service_fr3hkcq',
        'template_m7ahagn',
        {
          from_name: form.name,
          to_name: 'Jing',
          from_email: form.email,
          to_email: 'jingli1524@gmail.com',
          message: form.message,
        },
        '4iy24e4MVucMi9YjQ'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you, I will get back to you as soon as possible!')
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('Oops! something went wrong!')
        }
      )
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: kittyAnimate,
  }

  return (
    <motion.section className="relative z-0 px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl">
      <div className="flex flex-col-reverse gap-10 xl:mt-12 xl:flex-row">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.5, duration: 1 }}
          className={classNames('flex-[0.75] p-8 rounded-2xl', darkMode ? 'contactFormGlass' : 'bgGlass-light')}
        >
          <div className="w-[100px] h-[10px] float-right rotate-180 mt-[56px]">
            <Lottie options={defaultOptions} height={100} width={100} />
          </div>

          <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">Get in touch</p>
          <h3 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

          <form ref={formRef} className="flex flex-col gap-8 mt-12" onSubmit={HandleSubmit}>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="what's your name?"
                className={classNames(
                  ' px-6 py-4 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-white text-white'
                    : 'bg-[#ECF2FF] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="what's your email?"
                onChange={handleChange}
                className={classNames(
                  ' px-6 py-4 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-white text-white'
                    : 'bg-[#ECF2FF] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your Message</span>

              <textarea
                rows={7}
                name="message"
                value={form.message}
                placeholder="what's your thoughts?"
                onChange={handleChange}
                className={classNames(
                  ' px-6 py-4 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-white text-white'
                    : 'bg-[#ECF2FF] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <button
              type="submit"
              className={classNames(
                'text-black self-center px-8 py-3 font-bold outline-none w-fit shadow-2xl rounded-xl hover:shadow-button hover:scale-[1.05] transition hover:duration-300 hover:ease-in-out',
                darkMode && 'bg-[#2A2F4F] text-white'
              )}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.5, duration: 1 }}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <KittyCanvas />
        </motion.div>
      </div>
    </motion.section>
  )
}
