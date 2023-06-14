import Image from 'next/image';

export default function Header() {
    return (
        <div className="header bg-green-7000 container items-center flex flex-col mx-auto p-4 lg:pt-16 pt-6">
            <Image
                className="rounded-full"
                src={
                    'https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/354052608_23871600895764131_1431833224345519933_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gjBgJOVXSesAX_0ytYf&_nc_ht=scontent.fcgh14-1.fna&oh=00_AfB31WYJPuPOYw3k0riKW-ksFnadoFZ_RUbN0FinMlWbdg&oe=648ED08F'
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
