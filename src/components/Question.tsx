import { CaretRight } from "phosphor-react"

interface QuestionProps {
    question: string
    link: string
}

const Question:React.FC<QuestionProps> = ({ question, link }) => {
    return (
        <a href={ link } className='flex gap-2 w-full justify-between items-center border border-gray-300 rounded-xl text-baseColor py-6 px-4 hover:shadow-small transition'>
            { question }
            <CaretRight size={24} />
        </a>
    )
}

export default Question