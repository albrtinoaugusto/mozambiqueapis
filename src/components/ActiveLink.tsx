import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface ActiveLink {
    href: string;
    children: ReactNode;
    className?: string;
    activeClass: string
};

const ActiveLink: React.FC<ActiveLink> = ({ href, children, activeClass, ...props }) => {
    const { pathname } = useRouter();
    const isActive = pathname === href

    if (isActive) {
        props.className += ` ${activeClass}`;
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}

export default ActiveLink;