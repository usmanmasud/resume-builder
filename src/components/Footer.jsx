import React from 'react'
import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
    return (
        <section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    {new Date().getFullYear()}. All rights reserverd
                </p>

                <ul className="flex gap-5 flex-wrap">

                    <a
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FaFacebook width={16} height={16} /></a>
                    <a
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FaInstagram width={16} height={16} /></a>
                    <a
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FaTwitter width={16} height={16} /></a>
                    <a
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FaMailBulk width={16} height={16} /></a>

                </ul>
            </div>
        </section >
    )
}
