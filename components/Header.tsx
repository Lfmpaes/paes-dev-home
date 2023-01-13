import Image from 'next/image';

export default function Header() {
    return (
        <div className="header bg-green-7000 container items-center flex flex-col mx-auto p-4 pt-16">
            <Image
                className="rounded-full"
                src={
                    'https://pbs.twimg.com/profile_images/1538886862575738881/miyAQ93c.jpg'
                }
                width={128}
                height={128}
                alt={'Luiz Fernando M. Paes'}
            />
            <h1 className="text-5xl p-1 mt-4 text-neutral-50 font-bold">
                Luiz Fernando M. Paes
            </h1>
            <p className="text-lg font-normal mt-2 text-neutral-300">
                Desenvolvedor | Gamer | Entusiasta Tech
            </p>
        </div>
    );
}
