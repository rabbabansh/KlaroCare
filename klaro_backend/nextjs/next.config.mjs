/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/:lng/carebanner.svg',
                destination: '/carebanner.svg',
            },
            {
                source: '/:lng/checklist.svg',
                destination: '/checklist.svg',
            },
            {
                source: '/:lng/stethoscope.svg',
                destination: '/stethoscope.svg',
            },
            {
                source: '/:lng/medication.svg',
                destination: '/medication.svg',
            },
            {
                source: '/:lng/chat.svg',
                destination: '/chat.svg',
            },
            {
                source: '/:lng/balance.svg',
                destination: '/balance.svg',
            },
            {
                source: '/:lng/organized.svg',
                destination: '/organized.svg',
            },
            {
                source: '/:lng/confident.svg',
                destination: '/confident.svg',
            },
            {
                source: '/:lng/knowledge.svg',
                destination: '/knowledge.svg',
            },
            {
                source: '/:lng/favicon-32x32.png',
                destination: '/favicon-32x32.png',
            },
        ];
    },
};

export default nextConfig;
