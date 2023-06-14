import Image from 'next/image';

export default function Header() {
    return (
        <div className="header bg-green-7000 container items-center flex flex-col mx-auto p-4 lg:pt-16 pt-6">
            <Image
                className="rounded-full"
                src={'/profilepic.jpg'}
                width={128}
                height={128}
                alt={'Luiz Fernando M. Paes'}
            />
            <h1 className="text-3xl lg:text-4xl p-1 mt-4 text-neutral-50 font-bold">
                Luiz Fernando M. Paes
            </h1>
            <p className="text-lg font-normal mt-2 text-neutral-300">
                Desenvolvedor | Gamer | Entusiasta Tech
            </p>
        </div>
    );
}
