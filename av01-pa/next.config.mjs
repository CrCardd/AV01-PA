/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return[
            {
                source: "/",
                destination: "/home"
                
            },
            {
                source: "/mediaPage",
                destination: "/media"

            },
            {
                source: "/imcPage",         //url
                destination: "/imc"         //pasta
            }
        ]
    }
};

export default nextConfig;
