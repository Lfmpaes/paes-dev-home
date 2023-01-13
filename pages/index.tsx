import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Luiz Fernando M. Paes</title>
                <meta
                    name="description"
                    content="A link aggregator by Luiz Fernando M. Paes"
                />
                <link
                    rel="shortcut icon"
                    href="https://pbs.twimg.com/profile_images/1538886862575738881/miyAQ93c.jpg"
                    type="image/x-icon"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="flex flex-col items-center justify-items-center bg-gradient-to-t from-neutral-900 to-neutral-800 w-screen h-screen">
                <Header />

                <div className="links bg-indigo-7000 container items-center flex flex-col mx-auto p-2 pb-8">
                    {/*  */}
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
                            <p className="text-white text-xl font-bold">
                                Twitter
                            </p>
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
                            <p className="text-white text-xl font-bold">
                                Instagram
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={'https://github.com/Lfmpaes'}
                        className="rounded-md bg-black m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                        <div className="flex justify-center ">
                            <Image
                                src="/github-white.svg"
                                alt="GitHub logo"
                                width={20}
                                height={20}
                                className="mr-2 mt-"
                            />
                            <p className="text-white text-xl font-bold">
                                GitHub
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={'https://twitch.tv/Lfmpaes'}
                        className="rounded-md bg-[#9146ff] m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                        <div className="flex justify-center ">
                            <Image
                                src="/twitch-white.svg"
                                alt="Twitch logo"
                                width={20}
                                height={20}
                                className="mr-2 mt-1"
                            />
                            <p className="text-white text-xl font-bold">
                                Twitch
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={'https://youtube.com/Lfmpaes'}
                        className="rounded-md bg-black m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                        <div className="flex justify-center ">
                            <Image
                                src="/youtube-red.svg"
                                alt="YouTube logo"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            <p className="text-white text-xl font-bold">
                                YouTube
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={'https://linkedin.com/in/Lfmpaes'}
                        className="rounded-md bg-[#2867b2] m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                        <div className="flex justify-center ">
                            <Image
                                src="/linkedin-white.svg"
                                alt="LinkedIn logo"
                                width={20}
                                height={20}
                                className="mr-1"
                            />
                            <p className="text-white text-xl font-bold">
                                LinkedIn
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={'https://music.apple.com/profile/Lfmpaes'}
                        className="rounded-md bg-white m-2 p-1 pr-3 pl-3 w-80 h-12 flex justify-center">
                        <div className="flex justify-center ">
                            <Image
                                src="/applemusic-red.svg"
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
            </div>
        </>
    );
}
