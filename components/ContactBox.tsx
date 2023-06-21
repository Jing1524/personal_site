import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const ContactBox = ({ sliderValue }: any) => {
  const { theme } = useContext(ThemeContext)
  const laptopView = useMediaQuery({ width: '1366px', height: '768px' })
  const anotherScreenView = useMediaQuery({ width: '1536px', height: '864px' })

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
    <div className="lg:h-[90%] contact p-[0.8vh] box xl:basis-4/5 xl:h-full">
      <div
        className={`pill h-full w-full border border-[#1e1e1e] rounded-[100px] box-border rounded-[20px] flex justify-center items-center p-[3vh]`}
        style={{ borderWidth: theme.strokeWidth }}
      >
        {/*  ${SmTabletHeight ? 'gap-[1vh]' : 'gap-[2vh]'} */}
        <div className={`flex flex-col w-full h-full`}>
          <h3 className="text-[3vh] font-bold text-[#1e1e1e]">Get in touch.</h3>
          {/* @ts-ignore */}
          <form ref={formRef} className="flex flex-col" onSubmit={HandleSubmit}>
            <label className="flex flex-col mb-[2vh]">
              <span className="mb-[1vh] text-[1.7vh] font-medium text-[#1e1e1e]">Your Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="what's your name?"
                className={classNames(
                  'px-4 py-[1vh] font-medium border-none rounded-lg outlined-none',
                  darkMode || sliderValue > 9
                    ? 'bg-[#1e1e1e] placeholder:text-secondary text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col mb-[2vh]">
              <span className="mb-[1vh] text-[1.7vh] font-medium text-[#1e1e1e]">Your email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="what's your email?"
                onChange={handleChange}
                className={classNames(
                  ' px-4 py-[1vh] font-medium border-none rounded-lg outlined-none',
                  darkMode || sliderValue > 9
                    ? 'bg-[#1e1e1e] p placeholder:text-secondary text-white'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black'
                )}
              />
            </label>
            <label className="flex flex-col mb-[2vh]">
              <span className="mb-[1vh] text-[1.7vh] font-medium text-[#1e1e1e]">Your Message</span>

              <textarea
                // rows={tabletHeight ? (SmTabletHeight ? 3 : 5) : 7}
                rows={anotherScreenView ? (laptopView ? 3 : 5) : 7}
                name="message"
                value={form.message}
                placeholder="&#128075;"
                onChange={handleChange}
                className={classNames(
                  'px-4 py-[1vh] font-medium border-none rounded-lg outlined-none',
                  darkMode || sliderValue > 9
                    ? 'bg-[#1e1e1e] placeholder:text-secondary text-white placeholder:text-[24px]'
                    : 'bg-[#f6f5f3] placeholder:text-secondary text-black placeholder:text-[24px]'
                )}
              />
            </label>
            <button
              type="submit"
              className={classNames(
                'mt-[1vh] text-black self-center px-8 py-[1vh] font-bold outline-none w-fit shadow-2xl rounded-xl hover:shadow-button hover:scale-[1.05] transition hover:duration-300 hover:ease-in-out',
                darkMode && 'bg-[#1e1e1e] text-white'
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
