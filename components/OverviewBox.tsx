import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

const OverViewBox = ({ pillsRef, setExpand, expand }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  const fontColor = darkMode ? 'text-[#fff]' : 'text-[#1e1e1e]'
  return (
    <div className="p-[10px] box" id="takeover">
      <div
        ref={pillsRef}
        className={`pill h-full w-full border border-[#1e1e1e] box-border flex justify-center items-center ${
          darkMode ? 'bg-[#4F6F81]' : 'bg-[#A6D0DC]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
      >
        <div className={`flex flex-col items-center gap-14 p-6 text-box group `}>
          <h1 className={`self-start text-4xl font-bold ${fontColor}`}>Overview.</h1>
          <div className="flex flex-col gap-4">
            <p className={`text-lg ${fontColor}`}>
              As a frontend software engineer with a background in design and music, I approach engineering challenges
              with a unique viewpoint on creativity, self-discipline, and teamwork. With two years of experience
              building and delivering web applications, I have honed my skills in modern development technologies such
              as React.js, TypeScript, and Node.js.
            </p>
            <p className={`${expand ? 'block' : 'hidden'} text-lg  ${fontColor}`}>
              Working at Pineapple Workshop, I developed my expertise in writing, testing, and documenting scalable,
              reusable code. I thrive in collaborative environments and am equally comfortable taking ownership of
              projects and driving them to completion. I led the project to develop a responsive, user-friendly website,
              coordinating directly with the founder/CEO and collaborating with the design team to successfully meet the
              needs and goals of Pineapple Workshop.
            </p>
            <p className={`${expand ? 'block' : 'hidden'} text-lg  ${fontColor}`}>
              In addition to my software engineering skills, I have experience working in the fashion industry as a
              designer. My background in multiple disciplines and diverse interests allow me to approach problem-solving
              from a unique perspective. I&apos;m excited to continue building my software engineering career and to
              collaborate with others to create innovative digital products.
            </p>
          </div>
          {!expand && (
            <button className="flex flex-col items-center mt-auto lg:flex-row intro">
              <p className={` ${fontColor}`}>Hover To See More</p>

              <div className="mt-4 -rotate-90 lg:mt-0 lg:ml-4 lg:rotate-180 arrow right-expand-arrow ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={`${darkMode ? '#fff' : '#1e1e1e'}`}
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
