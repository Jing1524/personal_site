import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '@/context/ThemeContext'

const ContactBox = ({ pillsRef }: any) => {
  const { theme } = useContext(ThemeContext)

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
  return (
    // bg-[#87CAB9]
    <div className="basis-4/5 contact px-[10px] lg:px-[5px]">
      <div
        ref={pillsRef}
        className={`pill h-full w-full border border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center ${
          darkMode ? 'bg-[#4D4C6E]' : 'bg-[#9EA1D0]'
        } p-6`}
        style={{ borderWidth: theme.strokeWidth }}
      >
        <div className="flex flex-col w-full h-full gap-16">
          <h3 className={`text-4xl font-black ${darkMode ? 'text-[#fff]' : 'text-[#1e1e1e]'}`}>Get in touch.</h3>
          {/* @ts-ignore */}
          <form ref={formRef} className="flex flex-col" onSubmit={HandleSubmit}>
            <label className="flex flex-col mb-8">
              <span className={`mb-2 font-medium ${darkMode ? 'text-[#fff]' : 'text-[#1e1e1e]'}`}>Your Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="what's your name?"
                className={classNames(
                  'px-4 py-4 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-secondary text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col mb-8">
              <span className={`mb-2 font-medium ${darkMode ? 'text-[#fff]' : 'text-[#1e1e1e]'}`}>Your email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="what's your email?"
                onChange={handleChange}
                className={classNames(
                  ' px-4 py-4 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] p placeholder:text-secondary text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col mb-8">
              <span className={`mb-2 font-medium ${darkMode ? 'text-[#fff]' : 'text-[#1e1e1e]'}`}>Your Message</span>

              <textarea
                rows={7}
                name="message"
                value={form.message}
                placeholder="what's your thoughts?"
                onChange={handleChange}
                className={classNames(
                  ' px-4 py-4 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-secondary text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <button
              type="submit"
              className={classNames(
                'mt-16 text-black self-center px-8 py-3 font-bold outline-none w-fit shadow-2xl rounded-xl hover:shadow-button hover:scale-[1.05] transition hover:duration-300 hover:ease-in-out',
                darkMode && 'bg-[#2A2F4F] text-white'
              )}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactBox
