import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion";
import { List, X } from "phosphor-react"
import SocialMedias from "./SocialMedias"
import ActiveLink from "./ActiveLink"

const Header:React.FC = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const [ scrollY, setScrollY ] = useState(0)
    

    useEffect(() => {
        document.querySelector("body")?.classList.remove("overflow-y-hidden")
        window.addEventListener("scroll", () => {
            setScrollY(window.scrollY)
        })
    }, [])

    return (
        <header className={`fixed z-50 right-0 left-0 top-0 bg-white ${ scrollY > 200 ? "border-b border-gray-100" : "" }`}>
            <div className={`w-full bg-black opacity-70 right-0 top-0 h-screen ${ isMenuOpen ? "absolute z-20 w-screen" : "hidden w-0" }`}></div>
            <div className="max-w-7xl mx-auto p-5">
                <div className="hidden items-center justify-between lg:flex">
                    <div className="flex items-center gap-8">
                        <span className="text-2xl font-bold block">
                            <Link href="/">Mozambique APIs</Link>
                        </span>
                        <nav>
                            <ul className="flex items-center gap-5 font-thin text-sm">
                                <li>
                                    <ActiveLink 
                                    href="/" 
                                    activeClass="text-baseColor" 
                                    className="hover:text-baseColor transition-colors">
                                        Home
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink 
                                    href="/blog" 
                                    activeClass="text-baseColor"
                                    className="hover:text-baseColor transition-colors">
                                        Blog
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink 
                                    href="/news" 
                                    activeClass="text-baseColor"
                                    className="hover:text-baseColor transition-colors">
                                        Novidades
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink 
                                    href="/docs" 
                                    exact={false}
                                    activeClass="text-baseColor"
                                    className="hover:text-baseColor transition-colors">
                                        Docs
                                    </ActiveLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-5 text-sm">
                        <Link href="#">
                            <a className="border border-baseColor py-2 px-5 rounded-full text-baseColor hover:bg-baseColor hover:text-white transition-colors">Registrar-se</a>
                        </Link>
                        <Link href="#">
                            <a className="text-white bg-text py-2 px-5 rounded-full hover:brightness-110">Submeter API</a>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between lg:hidden">
                    <span className="text-2xl font-bold block">Mozambique APIs</span>
                    <List size={32} className="cursor-pointer" onClick={() => {
                        setIsMenuOpen(true)
                        document.querySelector("body")?.classList.add("overflow-y-hidden")
                    }} />

                    <motion.div 
                    className={`absolute z-30 flex text-xl right-0 top-0`}
                    animate={{
                        x: isMenuOpen ? 0 : "100%"
                    }}
                    initial={{
                        x: 0
                    }}
                    transition={{
                        type: "spring",
                        damping: 50,
                        stiffness: 300
                    }}
                    >
                        <div className="bg-white h-screen w-full max-w-xs p-4">
                            <div className="flex gap-3 justify-between items-center">
                                <span className="text-2xl font-bold block">Mozambique APIs</span>
                                <X size={24} className="cursor-pointer" onClick={() => {
                                    setIsMenuOpen(false)
                                    document.querySelector("body")?.classList.remove("overflow-y-hidden")
                                }} />
                            </div>
                            <nav className="block my-10">
                                <ul className="flex flex-col gap-5 font-thin">
                                    <li>
                                        <ActiveLink 
                                        href="/" 
                                        activeClass="font-bold">
                                            Home
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink 
                                        href="/blog" 
                                        activeClass="font-bold">
                                            Blog
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink 
                                        href="/news" 
                                        activeClass="font-bold">
                                            Novidades
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink 
                                        href="/docs"
                                        exact={false} 
                                        activeClass="font-bold">
                                            Docs
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex gap-5 text-center mb-10 text-sm">
                                <Link href="#">
                                    <a className="border border-baseColor py-2 px-5 rounded-full text-baseColor">Registrar-se</a>
                                </Link>
                                <Link href="#">
                                    <a className="text-white bg-text py-2 px-5 rounded-full">Submeter API</a>
                                </Link>
                            </div>
                            <SocialMedias />
                        </div>
                    </motion.div>
                </div>
            </div>
	    </header>
    )
}

export default Header