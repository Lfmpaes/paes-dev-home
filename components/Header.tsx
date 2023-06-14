import Image from 'next/image';

export default function Header() {
    return (
        <div className="header bg-green-7000 container items-center flex flex-col mx-auto p-4 lg:pt-16 pt-6">
            <Image
                className="rounded-full"
                src={
                    'https://media.licdn.com/dms/image/D4D03AQH6OTDsmRAxYQ/profile-displayphoto-shrink_800_800/0/1686540512048?e=1692230400&v=beta&t=66S0Y4-Qpek5EIIQvGP8uuCqjboyvM6-Sgn56DqH04o'
                }
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
