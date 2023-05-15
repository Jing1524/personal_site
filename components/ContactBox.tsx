import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactBox = () => {
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
    <div className="basis-4/5 box contact">
      <div className={`pill ${darkMode ? 'bg-[#4D4C6E]' : 'bg-[#9EA1D0]'} p-6`}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.5, duration: 1 }}
          className="flex flex-col w-full h-full gap-6"
        >
          <h3 className="text-2xl font-black">Get in touch.</h3>
          {/* @ts-ignore */}
          <form ref={formRef} className="flex flex-col" onSubmit={HandleSubmit}>
            <label className="flex flex-col mb-4">
              <span className="mb-2 font-medium">Your Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="what's your name?"
                className={classNames(
                  'px-4 py-2 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-white text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col mb-4">
              <span className="mb-2 font-medium">Your email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="what's your email?"
                onChange={handleChange}
                className={classNames(
                  ' px-4 py-2 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-white text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col mb-4">
              <span className="mb-2 font-medium">Your Message</span>

              <textarea
                rows={7}
                name="message"
                value={form.message}
                placeholder="what's your thoughts?"
                onChange={handleChange}
                className={classNames(
                  ' px-4 py-2 font-medium border-none rounded-lg outlined-none',
                  darkMode
                    ? 'bg-[#2A2F4F] placeholder:text-white text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
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
      </div>
    </div>
  )
}

export default ContactBox
