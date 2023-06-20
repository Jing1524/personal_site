import Image from 'next/image'
import { useEffect, useRef } from 'react'

const HiddenProjectBox = ({ projectSliderValue, setProjectSliderValue }: any) => {
  const testBoxRef = useRef<any>()
  console.log({ projectSliderValue })
  useEffect(() => {
    console.log(testBoxRef.current)
    if (testBoxRef.current) {
      const test = testBoxRef.current
      if (projectSliderValue === 2) {
        test.style.width = '100px'
        test.style.height = '100px'
        test.style.background = '#1e1e'
      }
      if (projectSliderValue === 3) {
        test.style.width = '110px'
        test.style.height = '100px'
        test.style.background = '#1e1e'
      }
    }
  }, [projectSliderValue])
  return <div ref={testBoxRef} className={`${projectSliderValue >= 2 ? 'block' : 'hidden'}`}></div>
}

export default HiddenProjectBox

{
  /* <div className={`w-full box p-[0.8vh]}>
        <div
          className={`overflow-hidden pill w-full h-full border rounded-[100px] border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center basis-1/3`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="relative flex flex-col items-center h-full group">
            <p className="absolute font-bold font-lg text-[#1e1e1e] z-[50] mt-4">Pineapple workshop</p>

            <a href="https://pineappleworkshop.com" target="_blank">
             
              <img
                src="/images/pineapple-site.png"
                alt="pineapple project"
                className={`object-fit ${darkMode ? 'opacity-70' : 'opacity-80'} `}
              />
            </a>

            <div className="absolute bg-[#fff]/90 w-full bottom-0 h-[20%] p-2 lg:p-4">
              <div className="flex justify-center w-full gap-2">
                <p className="text-[1.5vw] lg:text-[0.8vw] font-bold">Teck Stack:</p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] divide-x-2 min-h-[36px] flex justify-center">
                  Next.js
                </p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">
                  Contentful
                </p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">Tailwind</p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">
                  Framer Motion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
