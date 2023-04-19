import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import EarthCanvas from './canvas/EarthCanvas'

export default function Contact() {
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
    <motion.section className="relative z-0 px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl">
      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.5, duration: 1 }}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

          <form ref={formRef} className="flex flex-col gap-8 mt-12" onSubmit={HandleSubmit}>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your Name</span>
              {/*  onChange={handleChange} */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="what's your name?"
                className="px-6 py-4 font-medium border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your email</span>
              {/*  onChange={handleChange} */}
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="what's your email?"
                onChange={handleChange}
                className="px-6 py-4 font-medium border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your Message</span>
              {/*  onChange={handleChange} */}
              <textarea
                rows="7"
                name="message"
                value={form.message}
                placeholder="what's your thoughts?"
                onChange={handleChange}
                className="px-6 py-4 font-medium border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
              />
            </label>
            <button
              type="submit"
              className="px-8 py-3 font-bold shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl"
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
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  )
}
