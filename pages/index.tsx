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
                    href="https://media.licdn.com/dms/image/D4D03AQH6OTDsmRAxYQ/profile-displayphoto-shrink_800_800/0/1686540512048?e=1692230400&v=beta&t=66S0Y4-Qpek5EIIQvGP8uuCqjboyvM6-Sgn56DqH04o"
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
