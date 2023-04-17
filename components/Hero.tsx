import { styles } from '@/styles/style'
import Computer from './Computer'
import ComputersCanvas from './Computer'

export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 md:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I&apos;m <span className="text-[#915eff]">Jing Li</span>
          </h1>
          {/* lg:text-[30px] sm:text-[26px] xs:text-[20px]  */}
          <p className="text-[#dfd9ff] font-medium text-[16px] lg:leading-[40px] mt-2">
            a software engineer with experience in end to end product development, <br />
            My core competencies include front-end development, UX/UI design, and agile product development.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}
