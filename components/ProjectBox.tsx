import { useModeToggle } from '@/context/ModeProvider'

const ProjectBox = () => {
  const { darkMode } = useModeToggle()
  return (
    <div className="flex flex-col flex-1 gap-6 lg:basis-5/12 project-box p-[10px]">
      <div className={`pill ${darkMode ? 'bg-[#7DB9B6]' : 'bg-[#A0C3D2]'}`}></div>
      <div className={`pill ${darkMode ? 'bg-[#F4E8CF]' : 'bg-[#F8F5EB]'}`}></div>
      <div className={`pill ${darkMode ? 'bg-[#E86479]' : 'bg-[#EAC7C7]'}`}></div>
    </div>
  )
}
export default ProjectBox
