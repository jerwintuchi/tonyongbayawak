
import Image from 'next/image';

interface DiagramProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className: string;
    title: string;
}

export default function Diagram({ src, alt, width, height, className, title }: DiagramProps) {


    return (
        <>
            <div className='flex flex-row md:flex-row justify-center mt-4 gap-4'>
                <Image src={`/diagrams/${src}`} alt={`${alt}`} width={`${width ? width : 500}`} height={`${height ? height : 300}`} className={`${className ? className : `w-full h-auto md:w-[500px]`} rounded-lg shadow-md bg-white`} />
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center mb-4">{`${title}`}</p>
        </>
    )
}
