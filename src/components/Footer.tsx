import { ReactNode } from "react"
import RevealWrapper from "./RevealWrapper"
import SocialMedias from "./SocialMedias"

interface FooterProps {
  children?: ReactNode
}

const Footer:React.FC<FooterProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, id }) => {
  console.log(id)
  return (
    <RevealWrapper id={id + "" }>
      <footer className={`text-center font-thin text-sm ` + className} id={id}>
        { children ? children : "" }
        <div className='mt-10 mb-4 text-gray-500'>
          <nav className='mb-10'>
            <ul className='flex items-center justify-center gap-5'>
              <li><a href="#" className='hover:text-black transition-colors'>Home</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Blog</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Novidades</a></li>
            </ul>
          </nav>
          <div className='my-10'>
            <SocialMedias />
          </div>
          <span>© 2022 Mozambique APIs</span>
        </div>
      </footer>
    </RevealWrapper>
  )
}

export default Footer