import type { NextPage } from 'next'
import { MagnifyingGlass, PlayCircle } from "phosphor-react"
import { articles, apis, videos, faqs, organizers } from "../data"
import Header from '../components/Header'
import Card from '../components/Card'
import Question from '../components/Question'
import Footer from '../components/Footer'
import Link from 'next/link'
import Section from '../components/Section'

const logo = "/images/logo.png"

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      <main className='flex flex-col mt-6 gap-32'>
        <Section className='max-w-4xl mx-auto' id='start' isAnimated={true}>
          { /* eslint-disable-next-line @next/next/no-img-element */ }
          <img src={logo} alt="Logo" className='mx-auto max-w-xs hover:scale-105 transition-transform cursor-pointer'></img>
          <h2 className='text-6xl font-bold'>Queres começar?</h2>
          <p className='my-4 text-lg'>Pesquise APIs ou artigos sobre uma determinada api para uso básico ou avançado dependendo da sua necessidade comece por aqui.</p>

          <div className='my-10 w-full shadow-big flex py-5 px-6 rounded-full'>
            <input type="text" placeholder='Procurar APIs' className='text-xl outline-none w-full placeholder:text-gray-500 font-thin' />
            <MagnifyingGlass size={32} className="text-gray-500" />
          </div>
        </Section>

        <Section id='mostacessed' isAnimated={true}>
          { /* eslint-disable-next-line @next/next/no-img-element */ }
          <h2 className='text-3xl font-bold'>Mais acessadas</h2>
          <p className='my-4 text-lg'>Provavelmente a implementação da API que você procura está aqui.</p>

          <div className='flex justify-center flex-wrap gap-6 my-10'>
            { 
              apis.map((api):any => {
                return (
                  <Card link={api.link} key={apis.indexOf(api)} className="max-w-sm hover:scale-105">
                    <api.icon size={100} className="text-baseColor" />
                    <h3 className='text-xl font-bold'>{ api.name }</h3>
                    <p>{ api.description }</p>
                  </Card>
                )
              })
            }
          </div>
        </Section>

        <Section id='populararticles' isAnimated={true}>
          { /* eslint-disable-next-line @next/next/no-img-element */ }
          <h2 className='text-3xl font-bold'>Artigos Populares</h2>
          <p className='my-4 text-lg'>Separamos alguns artigos que te podem ajudar a começar rápido.</p>

          <div className='max-w-4xl mx-auto my-10 flex flex-col gap-6'>
            { 
              articles.map((article):any => {
                return (
                  <Question 
                  key={articles.indexOf(article)} 
                  link={article.link} 
                  question={article.title} />
                )
              })
            }
          </div>
        </Section>

        <Section id='tutorials' isAnimated={true}>
          { /* eslint-disable-next-line @next/next/no-img-element */ }
          <h2 className='text-3xl font-bold'>Video Tutoriais</h2>
          <p className='my-4 text-lg'>Abaixo estão alguns tutorias feitos pelos mebros da comunidade para te ajudar.</p>

          <div className='flex flex-wrap justify-center gap-6 my-10'>
            { 
              videos.map((video):any => {
                return (
                  <Card key={videos.indexOf(video)} link={video.link} className="max-w-md hover:scale-105">
                    <PlayCircle size={100} className="text-baseColor" />
                    <h3 className='text-xl font-bold'>{ video.title }</h3>
                    <p>{ video.caption }</p>
                  </Card>
                )
              })
            }
          </div>
        </Section>

        <Section id='faq' isAnimated={true}>
          { /* eslint-disable-next-line @next/next/no-img-element */ }
          <h2 className='text-3xl font-bold'>FAQs</h2>
          <p className='my-4 text-lg'> Encontre respostas rápidas para perguntas feitas frequentemente.</p>

          <div className='max-w-4xl mx-auto my-10 flex flex-col gap-6'>
            { 
              faqs.map((question):any => {
                return (
                  <Question 
                  key={faqs.indexOf(question)} 
                  link={question.link} 
                  question={question.title} />
                )
              })
            }
          </div>
        </Section>

        <Section id='organizers' isAnimated={true}>
          <h2 className='text-3xl font-bold'>Organizadores</h2>
          <p className='my-4 text-lg'>Nossa equipe de organizadores, os tornaram este movimento possivel.</p>

          <div className='max-w-4xl mx-auto my-10 flex flex-wrap justify-center gap-6'>
            {
              organizers.map((organizer):any => {
                return (
                  <div 
                  key={organizers.indexOf(organizer)} 
                  className='flex items-center flex-col gap-4 max-w-xs'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ organizer.image } alt={ organizer.name } 
                    className='max-w-[100px] rounded-full' />
                    <div>
                      <p>{ organizer.name }</p>
                      <span className='text-sm text-gray-600'>{ organizer.job }</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </Section>
      </main>
      <Footer className='mt-32' id='footer'>
        <div className='mb-40'>
          <h2 className='text-4xl font-bold'>Não encontrou o que procurava?</h2>
          <p className='my-4 text-lg mb-20'>Entre em contacto conosco para mais informações.</p>
          <Link href="#">
            <a className='bg-baseColor px-6 py-4 rounded-full text-white'>Contacte-nos</a>
          </Link>
        </div>
      </Footer>
    </div>
  )
}

export default Home
