import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    return {
        redirect: {
            destination: '/docs/start',
            permanent: false
        }
    }
}

const DocsPage:NextPage = () => {
    return (
        <div></div>
    )
}

export default DocsPage