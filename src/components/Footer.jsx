import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const links = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://github.com", icon: <FaGithub /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://facebook.com", icon: <FaFacebook /> },
]

const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col itens-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">&copy;Nova 2025. All rights reserved</p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((item, index) => (
                        <a key={index} href={item.href} target="_blank" rel="noopener noreferer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                            {item.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer