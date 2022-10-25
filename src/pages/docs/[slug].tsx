import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Docs } from "../../data"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DocsList from '../../components/DocsList'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: "start" } }, 
    { params: { slug: "teste-para-ver-se-funciona" } }, 
    { params: { slug: "sintonia" } }, 
  ]
  
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {  
  const data = Docs.map((doc) => {
    const docContent = doc.docs.filter(item => {
      if (context.params?.slug == item.slug) {
        return item
      } 
    })

    return docContent[0]
  })

  return {
    props: {
      docs: data[0],
    },
    revalidate: 60 * 60 * 1
  }
}

interface DocsPageProps {
  docs: {
    title: string
    slug: string
    date: string
    writer: {
      author: string
      image: string
    },
    content: string
  }
}

const DocsPage:NextPage<DocsPageProps> = ({ docs }) => {
  return (
    <div>
      <Header />

      <div className='flex gap-8 mt-24 relatove'>
        <DocsList />
        <div className='relative max-w-4xl mx-auto'>
          <main className='flex flex-col gap-5'>
            <h2 className='text-left text-4xl font-bold'>{ docs.title }</h2>
            <div className='text-sm w-full flex gap-6 items-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ docs.writer.image } alt={ docs.writer.author } className='max-w-[50px] rounded-full' />
              <div>
                <h3 className='font-bold'>Escrito por { docs.writer.author }</h3>
                <span className='font-thin text-gray-500'>{ docs.date }</span>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              { docs.content }
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default DocsPage
