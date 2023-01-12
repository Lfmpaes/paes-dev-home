import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
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

            <div className="links bg-indigo-7000 container items-center flex flex-col mx-auto p-2">
                <button className="rounded-lg bg-[#1da1f2] text-white m-2 p-1 pr-3 pl-3 w-80 h-12 text-xl font-bold">
                    Twitter
                </button>
                <button className="rounded-md bg-[linear-gradient(-135deg,#1400c8,#b900b4,#f50000)] text-white m-2 p-1 pr-3 pl-3 w-80 h-12 text-xl font-bold">
                    Instagram
                    {/* linear-gradient(-135deg,#1400c8,#b900b4,#f50000) */}
                </button>
                <button className="rounded-md bg-black text-white m-2 p-1 pr-3 pl-3 w-80 h-12 text-xl font-bold">
                    GitHub
                </button>
                <button className="rounded-md bg-[#9146ff] text-white m-2 p-1 pr-3 pl-3 w-80 h-12 text-xl font-bold">
                    Twitch
                </button>
                <button className="rounded-md bg-black text-white m-2 p-1 pr-3 pl-3 w-80 h-12 text-xl font-bold">
                    YouTube
                </button>
                <button className="rounded-md bg-[#2867b2] text-white m-2 p-1 pr-3 pl-3 w-80 h-12 text-xl font-bold">
                    LinkedIn
                </button>
                <button className="rounded-md bg-white text-[#fa425a] m-2 p-1 pr-3 pl-3 w-80 h-12 text-xl font-bold">
                    Apple Music
                </button>
            </div>
        </div>
    );
}
