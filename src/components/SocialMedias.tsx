import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react"

const SocialMedias:React.FC = () => {
    return (
        <ul className='flex justify-center gap-2'>
            <li>
                <a href=""><FacebookLogo size={28}/></a>
            </li>

            <li>
                <a href=""><InstagramLogo size={28}/></a>
            </li>

            <li>
                <a href=""><TwitterLogo size={28}/></a>
            </li>

            <li>
                <a href=""><YoutubeLogo size={28}/></a>
            </li>
        </ul>
    )
}

export default SocialMedias