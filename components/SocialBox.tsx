import Image from 'next/image'
import Lottie from 'react-lottie'
import kittyAnimate from '../assets/lottie/kitty.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: kittyAnimate,
}

const SocialBox = ({ tabletScreen }: any) => {
  return (
    <>
      {tabletScreen ? (
        <div className="h-full social-fan lg:basis-1/4">
          <div className="h-full w-full border border-[12px] box-border rounded-lg border-[#1e1e1e] hidden-pill social github bg-[#7DB9B6]">
            <a href="https://github.com/Jing1524" target="_blank">
              <Image src="./icons/doodle-github.svg" fill alt="Github Logo" />
            </a>
          </div>

          <div className=" h-full w-full border border-[12px] box-border rounded-lg border-[#1e1e1e] hidden-pill hidden social linkedIn bg-[#E86479]">
            <a href="https://www.linkedin.com/in/jing-li-a71436ba/" target="_blank">
              <Image src="./icons/doodle-linkedin.svg" fill alt="LinkedIn Logo" />
            </a>
          </div>
          <div className=" h-full w-full border border-[12px] box-border rounded-lg border-[#1e1e1e] hidden-pill social kitty bg-[#F4E8CF]">
            <a href="">
              <Lottie options={defaultOptions} height={158} width={80} />
            </a>
          </div>
        </div>
      ) : (
        <div className="h-full lg:basis-1/4 box">
          <div className="flex justify-between h-full">
            <div className="relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#E86479]">
              <a href="https://www.linkedin.com/in/jing-li-a71436ba/" target="_blank">
                <Image src="./icons/doodle-linkedin.svg" fill alt="LinkedIn Logo" />
              </a>
            </div>

            <div className="relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#F4E8CF]">
              <a href="">
                <Lottie options={defaultOptions} height={100} width={80} />
              </a>
            </div>

            <div className="relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#7DB9B6]">
              <a href="https://github.com/Jing1524" target="_blank">
                <Image src="./icons/doodle-github.svg" fill alt="Github Logo" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SocialBox
