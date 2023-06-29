import ProfileCard from './components/ProfileCard';

// const getInstagramMediaId = () => {
//     const url =
//         'https://www.instagram.com/p/Ct_PBfgtLWV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
//     const regex = /\/p\/(.*)\//gm;
//     const match = regex.exec(url);
//     if (match) {
//         return match[1];
//     }
//     return null;
// };

export default function Home() {
    return (
        <main className="flex bg-lfm-black min-h-screen flex-col items-center justify-between md:pt-12 sm:pt-8">
            <ProfileCard />
            {/* {getInstagramMediaId()} */}
        </main>
    );
}
