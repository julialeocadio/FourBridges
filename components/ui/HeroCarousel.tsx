"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/hero/achill island-1.png",
    "/images/hero/Brighton-1.png",
    "/images/hero/Brighton-2.png",
    "/images/hero/Brighton-3.png",
    "/images/hero/Brighton-4.png",
    "/images/hero/Cadiz-a.png",
    "/images/hero/Dublin-1.png",
    "/images/hero/Dublin-2.png",
    "/images/hero/Dublin-3.png",
    "/images/hero/Dublin-4.png",
    "/images/hero/eastbourne-1.png",
    "/images/hero/eastbourne-2.png",
    "/images/hero/Edimburgo-1.png",
    "/images/hero/Edimburgo-2.png",
    "/images/hero/Lisboa-1.png",
    "/images/hero/Lisboa-2.png",
    "/images/hero/Lisboa-3.png",
    "/images/hero/newport-1.png",
    "/images/hero/Sevilla-1.png",
    "/images/hero/Sevilla-2.png",
    "/images/hero/Sevilla-3.png",
    "/images/hero/Sevilla-4.png"
];

export default function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
        },
        [
            Autoplay({
                delay: 4000,
            }),
        ]
    );

    return (
        <div className="relative">
            {/*Carousel*/}
        
            <div
                ref={emblaRef}
                className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]">
                <div className="flex">
                    {images.map((image) => (
                        <div key={image} className="relative h-[520px] min-w-full">
                            <Image 
                                src={image}
                                alt=""
                                fill
                                className="object-cover"
                                priority />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}
                </div>
            </div>

            {/*Previous*/}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
                    <ChevronLeft size={20} />
            </button>

            {/*Next*/}
            <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
                    <ChevronRight size={20} />
            </button>
        </div>
    );
}