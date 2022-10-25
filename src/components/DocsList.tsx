import { Docs } from "../data"
import ActiveLink from "./ActiveLink"

const DocsList:React.FC = () => {
    return (
        <div className='w-full h-full hidden xl:flex'>
            <div className='max-w-[280px] w-full max-h-96 overflow-y-scroll fixed text-gray-500 flex flex-col gap-4'>
                {
                    Docs.map((doc, index) => {
                        return (
                            <div key={index}>
                                <h3 className='text-lg text-text font-bold'>{ doc.title }</h3>
                                <ol className='list-decimal list-inside pl-2 flex flex-col gap-2'>
                                    {
                                        doc.docs.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <ActiveLink 
                                                    href={`/docs/` + item.slug} 
                                                    className='hover:text-black transition-colors'
                                                    activeClass="text-black">
                                                        { item.title }
                                                    </ActiveLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DocsList