import Image from 'next/image';
import Link from 'next/link';

export default function SocialButton(props: any) {
    const url: string = props.url;
    const bgColor: string = props.bgColor;
    const social: string = props.social;

    const linkClass: string =
        'rounded-lg m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center ' +
        'bg-' +
        bgColor;
    return (
        <Link href={url} className={linkClass}>
            <div className="flex items-center">
                <Image
                    src="/twitter-white.svg"
                    alt="Twitter logo"
                    width={20}
                    height={20}
                    className="mr-1"
                />
                <p className="text-white text-xl font-bold">Twitter</p>
            </div>
        </Link>
    );
}
