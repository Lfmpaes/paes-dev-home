import Image from 'next/image';
import Link from 'next/link';

export default function LinkSection() {
    return (
        <div className="links bg-indigo-7000 container items-center flex flex-col mx-auto p-2 pb-8">
            {/*  */}
            {/* <SocialButton
        url="https://twitter.com/Lfmpaes"
        bgColor="[#1da1f2]"
    /> */}
            <Link
                href={'https://twitter.com/Lfmpaes'}
                className="rounded-lg bg-[#1da1f2] m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
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

            <Link
                href={'https://instagram.com/Lfmpaes'}
                className="ig-btn rounded-md bg-[linear-gradient(-135deg,#1400c8,#b900b4,#f50000)] m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                <div className="flex items-center">
                    <Image
                        src="/instagram-white.svg"
                        alt="Instagram logo"
                        width={24}
                        height={24}
                        className="mr-2 mt-1"
                    />
                    <p className="text-white text-xl font-bold">Instagram</p>
                </div>
            </Link>

            <Link
                href={'https://github.com/Lfmpaes'}
                className="rounded-md bg-black m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                <div className="flex items-center">
                    <Image
                        src="/github-white.svg"
                        alt="GitHub logo"
                        width={20}
                        height={20}
                        className="mr-2 mt-"
                    />
                    <p className="text-white text-xl font-bold">GitHub</p>
                </div>
            </Link>

            <Link
                href={'https://twitch.tv/Lfmpaes'}
                className="rounded-md bg-[#9146ff] m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                <div className="flex items-center">
                    <Image
                        src="/twitch-white.svg"
                        alt="Twitch logo"
                        width={20}
                        height={20}
                        className="mr-2 mt-1"
                    />
                    <p className="text-white text-xl font-bold">Twitch</p>
                </div>
            </Link>

            <Link
                href={'https://youtube.com/Lfmpaes'}
                className="rounded-md bg-black m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                <div className="flex items-center">
                    <Image
                        src="/youtube.svg"
                        alt="YouTube logo"
                        width={24}
                        height={24}
                        className="mr-2"
                    />
                    <p className="text-white text-xl font-bold">YouTube</p>
                </div>
            </Link>

            <Link
                href={'https://linkedin.com/in/Lfmpaes'}
                className="rounded-md bg-[#2867b2] m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                <div className="flex items-center">
                    <Image
                        src="/linkedin-white.svg"
                        alt="LinkedIn logo"
                        width={20}
                        height={20}
                        className="mr-1"
                    />
                    <p className="text-white text-xl font-bold">LinkedIn</p>
                </div>
            </Link>

            <Link
                href={'https://music.apple.com/profile/Lfmpaes'}
                className="rounded-md bg-white m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                <div className="flex items-center">
                    <Image
                        src="/apple-music.svg"
                        alt="Apple Music logo"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    <p className="text-[#fa425a] text-xl font-bold">
                        Apple Music
                    </p>
                </div>
            </Link>
        </div>
    );
}
