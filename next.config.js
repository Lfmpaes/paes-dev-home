/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ljvmxaefwsmlyjdlfmpx.supabase.co',
            },
        ],
        domains: [
            'localhost',
            'res.cloudinary.com',
            'images.unsplash.com',
            'source.unsplash.com',
            'ljvmxaefwsmlyjdlfmpx.supabase.co',
        ],
    },
};

module.exports = nextConfig;
