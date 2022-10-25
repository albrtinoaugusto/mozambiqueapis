import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode
    link: string
}

const Card:React.FC<CardProps & React.HTMLAttributes<HTMLAnchorElement>> = ({ children, link, className }) => {
    return (
        <Link href={link}>
            <a className={`shadow-small text-center flex flex-col gap-4 items-center py-8 px-4 rounded-2xl transition cursor-pointer w-full ` + className}>
                { children }
            </a>
        </Link>
    )
}

export default Card