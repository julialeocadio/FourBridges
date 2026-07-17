"use client"

import Link from "next/link";
//import { FaWhatsapp } from "react-icons/fa";
import WhatsAppIcon from "../icons/WhatsAppIcon";


export default function WhatsAppButton() {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;


    return (
        <Link
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="
                fixed
                bottom-6
                right-6
                z-50
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#25D366]
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-xl">
            <WhatsAppIcon />
        </Link>
    );
}

