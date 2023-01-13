import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="flex flex-col items-center justify-items-center bg-gradient-to-t from-neutral-900 to-neutral-800 w-screen h-screen">
                {/* Header Start */}
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
                    <h1 className="text-3xl p-1 mt-4 text-neutral-50 font-bold">
                        Luiz Fernando M. Paes
                    </h1>
                    <p className="text-base font-normal mt-2 text-neutral-300">
                        Desenvolvedor | Gamer | Entusiasta Tech
                    </p>
                </div>
                {/* Header End */}

                <div className="links bg-indigo-7000 container items-center flex flex-col mx-auto p-2 pb-8">
                    <button className="rounded-lg bg-[#1da1f2] m-2 p-1 pr-3 pl-3 w-80 h-12">
                        <div className="flex justify-center ">
                            <Image
                                src="/twitter-48.png"
                                alt="Twitter logo"
                                width={32}
                                height={32}
                                className="mr-1"
                            />
                            <p className="text-white text-xl font-bold">
                                Twitter
                            </p>
                        </div>
                    </button>

                    <button className="rounded-md bg-[linear-gradient(-135deg,#1400c8,#b900b4,#f50000)] m-2 p-1 pr-3 pl-3 w-80 h-12">
                        <div className="flex justify-center ">
                            <p className="text-white text-xl font-bold">
                                Instagram
                            </p>
                        </div>
                    </button>

                    <button className="rounded-md bg-black m-2 p-1 pr-3 pl-3 w-80 h-12">
                        <div className="flex justify-center ">
                            <p className="text-white text-xl font-bold">
                                GitHub
                            </p>
                        </div>
                    </button>

                    <button className="rounded-md bg-[#9146ff] m-2 p-1 pr-3 pl-3 w-80 h-12">
                        <div className="flex justify-center ">
                            <p className="text-white text-xl font-bold">
                                Twitch
                            </p>
                        </div>
                    </button>

                    <button className="rounded-md bg-black m-2 p-1 pr-3 pl-3 w-80 h-12">
                        <div className="flex justify-center ">
                            <p className="text-white text-xl font-bold">
                                YouTube
                            </p>
                        </div>
                    </button>

                    <button className="rounded-md bg-[#2867b2] m-2 p-1 pr-3 pl-3 w-80 h-12">
                        <div className="flex justify-center ">
                            <p className="text-white text-xl font-bold">
                                LinkedIn
                            </p>
                        </div>
                    </button>

                    <button className="rounded-md bg-white m-2 p-1 pr-3 pl-3 w-80 h-12">
                        <div className="flex justify-center ">
                            <p className="text-[#fa425a] text-xl font-bold">
                                Apple Music
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
