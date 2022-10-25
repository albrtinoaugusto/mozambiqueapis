import type { NextPage } from 'next'
import { ArrowRight } from "phosphor-react"
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RevealWrapper from '../../components/RevealWrapper'
import Section from '../../components/Section'
import { blogArticles } from "../../data"


const BlogPage: NextPage = () => {
  return (
    <div>
      <Header />

      <RevealWrapper id='blog'>
        <main className='flex flex-col gap-10 mt-24' id='blog'>
          <Section>
            <h2 className='text-4xl font-bold'>Blog</h2>
          </Section>
          <Section className='max-w-2xl mx-auto'>
              <div className='w-full flex flex-col gap-10'>
                  { blogArticles.map((blogArticle):any => {
                      return (
                          <Card key={blogArticles.indexOf(blogArticle)} link="#" className='!text-left gap-6 hover:shadow-big'>
                              <div className='w-full flex gap-6 items-center'>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={ blogArticle.owner } alt="" className='max-w-[70px] rounded-full' />
                                  <div>
                                      <h3 className='font-bold text-xl'>{ blogArticle.title }</h3>
                                      <span className='font-thin text-gray-500'>{ blogArticle.date }</span>
                                  </div>
                              </div>
                              <div>
                                  <p className='font-thin text-gray-500'>{ blogArticle.description }</p>
                              </div>
                              <div className='w-full flex items-center gap-2'>
                                  <span>Leia mais</span>
                                  <ArrowRight size={12} />
                              </div>
                          </Card>
                      )
                  }) }
              </div>
          </Section>
        </main>
      </RevealWrapper>

      <Footer className='mt-32' />
    </div>
  )
}

export default BlogPage
