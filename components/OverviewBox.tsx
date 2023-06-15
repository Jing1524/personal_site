import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useContext } from 'react'

const OverViewBox = ({ pillsRef, setExpand, expand }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const tabletHeight = useMediaQuery('(max-height:1115px)')
  const SmTabletHeight = useMediaQuery('(max-height:877px)')
  return (
    <div className="p-[0.8vh] box" id="takeover">
      <div
        className={`pill h-full w-full border border-[#1e1e1e] rounded-[100px] box-border flex justify-center items-center ${
          darkMode ? 'bg-[#eae0d7]' : 'bg-[#add4bd]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
      >
        <div className={`flex flex-col items-center gap-[2vh] px-6 py-[1vh]text-box group `}>
          <h1 className={`self-start text-[3vh] font-bold text-[#1e1e1e]`}>Overview.</h1>
          <div className="flex flex-col gap-[1.5vh]">
            <p className={`${SmTabletHeight ? 'text-[2vh]' : 'text-lg'} text-[#1e1e1e] font-bold`}>
              As a software engineer with a background in design and music, I approach engineering challenges with a
              unique viewpoint on creativity, self-discipline, and teamwork. With two years of experience building and
              delivering web applications, I have honed my skills in modern development technologies such as React.js,
              TypeScript, and Node.js.
            </p>
            <p
              className={`${expand ? 'block' : 'hidden'} ${
                SmTabletHeight ? 'text-[2vh]' : 'text-lg'
              }  text-[#1e1e1e] font-bold`}
            >
              Working at Pineapple Workshop, I developed my expertise in writing, testing, and documenting scalable,
              reusable code. I thrive in collaborative environments and am equally comfortable taking ownership of
              projects and driving them to completion. I led the project to develop a responsive, user-friendly website,
              coordinating directly with the founder/CEO and collaborating with the design team to successfully meet the
              needs and goals of Pineapple Workshop.
            </p>
            <p
              className={`${expand ? 'block' : 'hidden'} ${
                SmTabletHeight ? 'text-[2vh]' : 'text-lg'
              } text-[#1e1e1e] font-bold`}
            >
              In addition to my software engineering skills, I have experience working in the fashion industry as a
              designer. My background in multiple disciplines and diverse interests allow me to approach problem-solving
              from a unique perspective. I&apos;m excited to continue building my software engineering career and to
              collaborate with others to create innovative digital products.
            </p>
          </div>
          {!expand && (
            <button className="flex flex-col items-center mt-auto lg:flex-row intro">
              <p className="text-[#1e1e1e] font-bold">Hover To See More</p>

              <div className="mt-4 -rotate-90 lg:mt-0 lg:ml-4 lg:rotate-180 arrow right-expand-arrow ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1e1e1e"
                  className="w-6 h-6 animate-move-arrow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default OverViewBox
