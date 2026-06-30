"use client";

import { Button } from "@heroui/react";
import { FacebookIcon, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoLogoTiktok } from "react-icons/io5";

export default function Hero() {
  const iconesTable = [
    { id: 1, icone: <FacebookIcon />, url: "https://www.facebook.com/share/1Cqq9P2ktD/?mibextid=wwXIfr" },
    { id: 2, icone: <Instagram />, url: "https://www.instagram.com/lunionlab?igsh=MW4yM3FiN3BxenFlaw==" },
    { id: 3, icone: <Linkedin />, url: "https://www.linkedin.com/company/lunion-lab/?viewAsMember=true" },
    { id: 4, icone: <IoLogoTiktok />, url: "https://www.tiktok.com/@lunion.lab?_t=ZM-90Ey2DpQUxA&_r=1" },
    ];

  const cursorVariants = {
    float: {
      y: [0, -10, 0, 10, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-screen rounded-lg overflow-hidden">
        <Image
          src="/assets/images/all-img/fond.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Texte overlay */}
        <div className="absolute top-1/4 sm:top-1/3 left-4 sm:left-8 md:left-20 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl backdrop-blur-md bg-black/20 text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold font-figtree leading-snug">
            Une grande technologie <br />
            repose toujours sur des <br />
            relations parfaites
          </h1>
        </div>

        {/* Cursors animés */}
        <motion.div className="hidden lg:block absolute h-10 left-[65%] top-[44%] w-20" variants={cursorVariants} animate="float">
          <Image src="/assets/images/cursors/cursor1.png" alt="Hero" fill className="object-cover" priority />
        </motion.div>
        <motion.div className="hidden lg:block absolute h-12 left-[28%] top-[24%] w-24" variants={cursorVariants} animate="float">
          <Image src="/assets/images/cursors/cursor2.png" alt="Hero" fill className="object-cover" priority />
        </motion.div>
        <motion.div className="hidden lg:block absolute h-12 left-[39%] top-[54%] w-32" variants={cursorVariants} animate="float">
          <Image src="/assets/images/cursors/cursor3.png" alt="Hero" fill className="object-cover" priority />
        </motion.div>
        <motion.div className="hidden lg:block absolute z-20 h-10 right-[25%] bottom-[8%] w-72" variants={cursorVariants} animate="float">
       <div className="flex  items-center gap-2">
        <span className="text-white text-xl font-semibold font-figtree"> 
        Nous suivre
       </span>
       <div className="w-32 bg-white h-1">

       </div>
       </div>
        </motion.div>

        {/* Bloc violet desktop */}
        <div className="hidden lg:flex absolute right-0 bottom-4 w-[380px] h-[240px] bg-primary text-white rounded-bl-[160px] rounded-tl-[30%] flex-col justify-center items-center p-12">
          <p className="text-sm leading-relaxed text-center">
            Envie de démarrer un nouveau projet ? Une question ? <br />
            C&apos;est par ici que vous pouvez entamer la conversation.
          </p>
          <Button className="mt-6 bg-black text-white px-6 py-4 text-xl rounded-md hover:bg-gray-900 w-[70%]">
            Allons-y
          </Button>
          <div className="mt-4 flex justify-center gap-3 w-full">
            {iconesTable.map((item) => (
              <div key={item.id} className="border rounded-lg cursor-pointer bg-white/20 p-1.5">
                <Link href={item.url}>{item.icone}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc violet mobile - bas de l'écran */}
        <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-primary text-white rounded-xl flex flex-col justify-center items-center p-6">
          <p className="text-sm leading-relaxed text-center">
            Envie de démarrer un nouveau projet ? Une question ? <br />
            C&apos;est par ici que vous pouvez entamer la conversation.
          </p>
          <Button className="mt-4 bg-black text-white px-6 py-3 text-lg rounded-md hover:bg-gray-900 w-full">
            Allons-y
          </Button>
          <div className="mt-3 flex justify-center gap-3 w-full">
            {iconesTable.map((item) => (
              <div key={item.id} className="border rounded-lg cursor-pointer bg-white/20 p-1.5">
                <Link href={item.url}>{item.icone}</Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
