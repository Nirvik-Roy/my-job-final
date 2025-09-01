/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                // Optional, but recommended:
                port: '',
                pathname: '/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
