import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

const ProfileBox = ({ pillsRef }: any) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="order-first circle-box lg:order-last box p-[10px]">
      <div
        ref={pillsRef}
        style={{ borderWidth: theme.strokeWidth }}
        className="pill box-border flex items-center justify-center w-full h-full rounded-full circle bg-[url('/images/me.png')] bg-cover"
      />
    </div>
  )
}

export default ProfileBox
