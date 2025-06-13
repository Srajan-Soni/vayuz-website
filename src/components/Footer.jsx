import React, { useState } from 'react'

const Footer = () => {
    const [links, setlinks] = useState([
        {
            name: "About",
            url: "https://vayuz.com/about"
        },
        {
            name: "Insights",
            url: "https://vayuz.com/insights"
        },
        {
            name: "Community",
            url: "https://vayuz.com/community"
        },
        {
            name: "Privacy & Policy",
            url: "https://vayuz.com/privacy-policy"
        }
    ])
  return (
    <div className="mt-10 w-1/2 h-16 p-5 mb-5 text-white flex justify-center items-center gap-5">
        {
            links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className="text-gray-300 hover:font-bold hover:text-white transition"
                >
                    {link.name}
                </a>
            ))
        }
       
    </div>
  )
}

export default Footer