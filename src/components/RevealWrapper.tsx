import { ReactNode, useEffect } from "react"

interface RevealWrapperProps {
    id: string
    children: ReactNode
}

const RevealWrapper:React.FC<RevealWrapperProps> = ({ id, children }) => {
    useEffect(() => {
        async function animate() {
            const scrollReveal = (await import("scrollreveal")).default
            scrollReveal({
                origin: "top",
                distance: "30px",
                duration: 700,
                reset: true
            }).reveal(
                `#${id} h2, #${id} h3, #${id} p, #${id} li, #${id} span, #${id} a, #${id} img`,
                { interval: 60 }
            )
        }
        
        animate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            { children }
        </>
    )
}

export default RevealWrapper