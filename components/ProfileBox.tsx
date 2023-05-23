import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

const ProfileBox = ({ pillsRef }: any) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="order-first h-full basis-1/6 lg:order-last box p-[0.8vh] flex items-center justify-center">
      <div
        ref={pillsRef}
        style={{ borderWidth: theme.strokeWidth }}
        className="pill box-border flex items-center justify-center w-full h-[80%] rounded-full circle bg-[url('/images/me.png')] bg-cover"
      />
    </div>
  )
}

export default ProfileBox
