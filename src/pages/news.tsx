import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RevealWrapper from '../components/RevealWrapper'
import Section from '../components/Section'
import { blogArticles } from "../data"


const NewsPage: NextPage = () => {
  return (
    <div>
      <Header />

      <RevealWrapper id='news'>
          <main className='flex flex-col gap-10 mt-24' id='news'>
            <Section className='max-w-xl mx-auto'>
              <h2 className='text-left text-4xl font-bold'>Novidades</h2>
            </Section>
            <Section className='max-w-xl mx-auto' id="news">
                <div className='w-full flex flex-col gap-10'>
                    <div className='border-t border-gray-300 py-10 text-left'>
                        <div className='relative'>
                            <h3 className='text-3xl font-bold'>Novidades de Abril</h3>
                            <span className='block text-sm my-2 lg:my-0 lg:top-2 lg:absolute lg:-translate-x-[130%]'>10 de Outubro, 2022</span>
                        </div>
                        <div className='my-5'>
                            <p>April comes with a whole bunch of updates across our stack, the main focus for this month in regards to what was released is around: Further improving system, and allowing you to compare your results against wide averages for deflection rates Improvements to our tool to give you and your team more control And various other new features, updates, and bug fixes along the way.</p>
                        </div>
                        <div>
                            <span className='bg-blue-500 py-1 px-3 rounded-full text-white text-sm'>
                                Adicionado
                            </span>
                            <ul className='my-2 list-disc list-outside pl-10 leading-8'>
                                <li>Some scheduled changelogs, tweets, and slack messages queued up this weekend and were not published on time. We fixed the issue and all delayed publications should be out.</li>
                                <li>We now prioritize keywords over title and body so customers can more effectively influence search results .</li>
                            </ul>
                        </div>
                        <div>
                            <span className='bg-red-500 py-1 px-3 rounded-full text-white text-sm'>
                                Consertado
                            </span>
                            <ul className='my-2 list-disc list-outside pl-10 leading-8'>
                                <li>Fixed an issue with the sync autolinker only interlinking selectively.</li>
                                <li>Fixed up an issue with prematurely logging out users.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-gray-300 py-10 text-left'>
                        <div className='relative'>
                            <h3 className='text-3xl font-bold'>Novidades de Abril</h3>
                            <span className='block text-sm my-2 lg:my-0 lg:top-2 lg:absolute lg:-translate-x-[130%]'>10 de Outubro, 2022</span>
                        </div>
                        <div className='my-5'>
                            <p>April comes with a whole bunch of updates across our stack, the main focus for this month in regards to what was released is around: Further improving system, and allowing you to compare your results against wide averages for deflection rates Improvements to our tool to give you and your team more control And various other new features, updates, and bug fixes along the way.</p>
                        </div>
                        <div>
                            <span className='bg-blue-500 py-1 px-3 rounded-full text-white text-sm'>
                                Adicionado
                            </span>
                            <ul className='my-2 list-disc list-outside pl-10 leading-8'>
                                <li>Some scheduled changelogs, tweets, and slack messages queued up this weekend and were not published on time. We fixed the issue and all delayed publications should be out.</li>
                                <li>We now prioritize keywords over title and body so customers can more effectively influence search results .</li>
                            </ul>
                        </div>
                        <div>
                            <span className='bg-red-500 py-1 px-3 rounded-full text-white text-sm'>
                                Consertado
                            </span>
                            <ul className='my-2 list-disc list-outside pl-10 leading-8'>
                                <li>Fixed an issue with the sync autolinker only interlinking selectively.</li>
                                <li>Fixed up an issue with prematurely logging out users.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
          </main>
      </RevealWrapper>

      <Footer className='mt-32' />
    </div>
  )
}

export default NewsPage
