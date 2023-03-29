import Image from 'next/image'
import data from '../data.json'

function LinkCard({ 
  href, 
  title, 
  image
}: { 
  href: string;
   title: string;
    image?: string 
  }) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md
      hover:scale-105 transition-all bg-gray-100 border
    border-gray-300 mb-3 max-w-2xl"
    >
      <div className="flex text-center w-full">
        <div className='w-10 h-10'>
        {image && (
            <Image 
            className='rounded-sm'
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
        </div>
        <h2 className="flex font-semibold justify-center items-center
        w-full text-gray-800 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return(
    <div className="flex items-center flex-col mx-auto w-full 
    justify-center mt-16 px-8">
      <Image 
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.socials.map((social) => (
        <LinkCard key={social.href} {...social} />
      ))}
      <div className='w-full h-full'>
        <div className='justify-center items-center m-auto hover:scale-105 transition-all max-w-2xl'>
          <form className='flex flex-col w-full'>
              <input type="text" id="first" className='w-full h-12 p-1  px-4 rounded-md outline-none rounded-b-none bg-gray-100' maxLength={62} placeholder='Insira seu Nome' />
              <textarea id="last" className='h-48 p-1 max-w-2xl px-4 rounded-md outline-none rounded-t-none resize-none bg-gray-100' maxLength={372} placeholder='Deixe sua Mensagem aqui :)' />
          </form>
          <button type="submit" className='bg-black text-white p-1 rounded-md absolute'>Submit</button>
        </div>
        
      </div>
    </div>
  );
}

