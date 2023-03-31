import Image from 'next/image';
import data from '../data.json';
import instaimg from '../image/insta.png';
import photo from '../image/domenyk.png'

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 border border-gray-300 mb-3 max-w-2xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={instaimg}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex font-semibold justify-center items-center w-full text-gray-800 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 max-sm:mt-6 px-8">
        <Image
          className="rounded-full"
          alt={data.name}
          src={photo}
          width={96}
          height={96}
        /> 
      <h1 
        className="font-bold mt-2 mb-1 text-xl text-black">
        {data.name}
      </h1>
      <p 
        className='text-sm max-w-2xl font-semibold text-gray-900 text-center mb-4'>
        {data.bio}
      </p>
      {data.socials.map((social) => (
        <LinkCard key={social.href} {...social} />
      ))}
      <div className="w-full h-full">
        <div className="justify-center items-center m-auto hover:scale-105 transition-all max-w-2xl">
          <form className="flex flex-col w-full mb-16">
            <input
              type="text"
              id='nome'
              className="w-full h-12 p-1 px-4 rounded-md outline-none rounded-b-none bg-gray-100 border border-gray-300"
              maxLength={62}
              placeholder="Insira seu Nome"
            />
            <textarea
              id='mensagem'
              className="h-48 p-1 max-w-2xl px-4 rounded-md outline-none rounded-t-none resize-none bg-gray-100 border border-gray-300"
              maxLength={372}
              placeholder="Deixe sua Mensagem aqui :)"
            />
            {/* adicionar um button */}
          </form>
        </div>
      </div>
    </div>
  );
}
