/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            // Allow any image URL
            protocol: 'https',
            hostname: '**',
            pathname: '/**',
        },
        ],
    },
};

export default nextConfig;
