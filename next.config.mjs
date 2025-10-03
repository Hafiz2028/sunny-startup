import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // images: {
    //     remotePatterns: [
    //         { protocol: 'https', hostname: 'images.unsplash.com' },
    //         { protocol: 'https', hostname: 'i.pravatar.cc' },
    //         { protocol: 'https', hostname: 'img.freepik.com' },
    //     ],
    // },
};

export default withNextIntl(nextConfig);