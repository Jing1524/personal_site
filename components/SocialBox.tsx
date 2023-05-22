import Image from 'next/image'
import Lottie from 'react-lottie'
import kittyAnimate from '../assets/lottie/kitty.json'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: kittyAnimate,
}

const SocialBox = ({ tabletScreen, pillsRef }: any) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="h-full lg:basis-1/4 p-[10px] box">
      {tabletScreen ? (
        <div className="h-full social-fan lg:basis-1/4">
          <div
            ref={pillsRef}
            className="pill h-full w-full border box-border border-[#1e1e1e] rounded-[100px] hidden-pill social github bg-[#7DB9B6]"
            style={{ borderWidth: theme.strokeWidth }}
          >
            <a href="https://github.com/Jing1524" target="_blank">
              <Image src="./icons/doodle-github.svg" fill alt="Github Logo" />
            </a>
          </div>

          <div
            ref={pillsRef}
            className="pill h-full w-full border box-border border-[#1e1e1e] rounded-[100px] hidden-pill hidden social linkedIn bg-[#E86479]"
            style={{ borderWidth: theme.strokeWidth }}
          >
            <a href="https://www.linkedin.com/in/jing-li-a71436ba/" target="_blank">
              <Image src="./icons/doodle-linkedin.svg" fill alt="LinkedIn Logo" />
            </a>
          </div>

          <div
            ref={pillsRef}
            className="pill h-full w-full border box-border border-[#1e1e1e] rounded-[100px] hidden-pill social kitty bg-[#F4E8CF]"
            style={{ borderWidth: theme.strokeWidth }}
          >
            <a href="">
              <Lottie options={defaultOptions} height={190} width={80} />
            </a>
          </div>
        </div>
      ) : (
        <div className="h-full lg:basis-1/4 box">
          <div className="flex justify-between h-full">
            <div
              ref={pillsRef}
              className="pill relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#E86479]"
            >
              <a href="https://www.linkedin.com/in/jing-li-a71436ba/" target="_blank">
                <Image src="./icons/doodle-linkedin.svg" fill alt="LinkedIn Logo" />
              </a>
            </div>

            <div
              ref={pillsRef}
              className="pill relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#F4E8CF]"
            >
              <a href="">
                <Lottie options={defaultOptions} height={100} width={80} />
              </a>
            </div>

            <div
              ref={pillsRef}
              className="pill relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#7DB9B6]"
            >
              <a href="https://github.com/Jing1524" target="_blank">
                <Image src="./icons/doodle-github.svg" fill alt="Github Logo" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SocialBox
