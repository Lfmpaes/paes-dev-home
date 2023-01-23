import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import SocialButton from '../components/SocialButton';
import LinkSection from '../components/LinkSection';

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
                    href="https://pbs.twimg.com/profile_images/1616965763415392257/gkhYR9_8.jpg"
                    type="image/x-icon"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="flex flex-col items-center justify-items-center w-screen md:bg-gradient-to-t md:from-neutral-900 md:to-neutral-800 lg:h-screen">
                <Header />
                <LinkSection />
            </div>
        </>
    );
}
