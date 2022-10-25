import { ReactNode } from "react";
import RevealWrapper from "./RevealWrapper";

interface SectionProps {
    children: ReactNode;
    isAnimated?: boolean;
}

const Section:React.FC<SectionProps & React.HTMLAttributes<HTMLDivElement>> = (
    { children, id, className, isAnimated }
    ) => {

    if (isAnimated && id) {
        return (
            <RevealWrapper id={id}>
                <section className={`text-center w-full ` + className} id={ id }>
                    { children }
                </section>
            </RevealWrapper>
        )
    }

    return (
        <section className={`text-center w-full ` + className} id={ id }>
            { children }
        </section>
    )
}

export default Section;