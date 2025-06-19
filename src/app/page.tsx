"use client";
import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {IconBrandGithub, IconHome, IconHotelService} from "@tabler/icons-react";

import {Spotlight} from "@/components/ui/spotlight";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import {Modal, ModalBody, ModalContent, ModalTrigger,} from "@/components/ui/animated-modal";
import {TextHoverEffect} from "@/components/ui/text-hover-effect";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {LampContainer} from "@/components/ui/lamp";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import {ContainerScroll} from "@/components/ui/container-scroll-animation";
import {Timeline} from "@/components/ui/timeline";
import {FlipWords} from "@/components/ui/flip-words";
import {Card, Carousel} from "@/components/ui/apple-cards-carousel";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect";
import {WobbleCard} from "@/components/ui/wobble-card";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {BackgroundBeams} from "@/components/ui/background-beams";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import {BackgroundGradient} from "@/components/ui/background-gradient";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";


import ai from "@/app/assets/ai.jpg"
import accessories from "@/app/assets/accessories.jpg"
import server from "@/app/assets/server.jpg"
import sketch from "@/app/assets/sketch.jpg"
import deepmind1 from "@/app/assets/deepmind1.jpg"
import deepmind2 from "@/app/assets/deepmind2.jpg"
import deepmind3 from "@/app/assets/deepmind3.jpg"
import deepmind4 from "@/app/assets/deepmind4.jpg"
import desk1 from "@/app/assets/desk1.jpg"
import desk2 from "@/app/assets/desk2.jpg"
import desk3 from "@/app/assets/desk3.jpg"
import desk4 from "@/app/assets/desk4.jpg"
import storage1 from "@/app/assets/storage1.jpg"
import storage2 from "@/app/assets/storage2.jpg"
import storage3 from "@/app/assets/storage3.jpg"
import storage4 from "@/app/assets/storage4.jpg"
import vercel from "@/app/assets/vercel.jpeg"
import mongodb from "@/app/assets/mongodb.jpeg"
import tailwind from "@/app/assets/tailwind.jpeg"
import nextjs from "@/app/assets/nextjs.jpeg"
import springboot from "@/app/assets/springboot.jpeg"
import typescript from "@/app/assets/typescript.jpeg"
import nextjsbanner from "@/app/assets/nextjsbanner.jpeg"
import aceternity from "@/app/assets/aceternity.png"
import profile from "@/app/assets/profile.jpg"


export default function Home() {

    const gemini_ref = React.useRef(null);
    const {scrollYProgress} = useScroll({
        target: gemini_ref,
        offset: ["start start", "end start"],
    });
    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <>
            <div className="relative  w-full">
                <FloatingNav navItems={navItems}/>
            </div>

            <div
                className="h-screen w-full flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
            >
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-20 flex-grow">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Scrapbook <br/> Innovation System
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                        Scrapbook is leading the way in innovation, transforming industries and setting new standards for
                        growth. Discover how this vibrant system is shaping the future with groundbreaking ideas and
                        initiatives
                    </p>
                </div>
                <div className="flex items-center justify-center h-[10rem] w-full mb-20">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black backdrop-blur text-black dark:text-white text-white flex items-center space-x-2"
                    >
                        <span>Documentation</span>
                    </HoverBorderGradient>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        Get Started
                    </button>
                </div>
                <div className="flex items-center justify-end">
                    <Modal>
                        <ModalTrigger
                            className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 underline">
            Legals
          </span>
                            <div
                                className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                →
                            </div>
                        </ModalTrigger>
                        <ModalBody>
                            <ModalContent>
                                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                                    Please read the legals before accessing this website
                                </h4>
                                <span
                                    className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Information We Collect

                          Personal Data: Information you voluntarily provide to us, such as your name, email address,
                          and phone number when you register on our site or subscribe to our newsletter.
                          Usage Data: Information automatically collected when you visit our website, including your IP
                          address, browser type, and the pages you visit.
                          Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track
                  the activity on our service and store certain information.
              </span>
                            </ModalContent>
                        </ModalBody>
                    </Modal>
                </div>
            </div>

            <div
                className="h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <TextHoverEffect text="Services"/>
            </div>

            <div
                className="h-full w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="max-w-5xl mx-auto px-8 bg-black">
                    <div className="bg-black dark:bg-white w-fit text-white dark:text-black py-20">
                        <TextGenerateEffect words={words}/>
                    </div>
                    <HoverEffect items={projects}/>
                </div>
            </div>

            <div
                className="h-screen w-full dark:bg-black bg-[rgb(2,7,23)]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <LampContainer>
                    <motion.h1
                        initial={{opacity: 0.5, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                    >
                        Premium features<br/> on the way
                    </motion.h1>
                </LampContainer>
            </div>

            <div
                className="h-[5rem] w-full dark:bg-black bg-[rgb(2,7,23)] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"
            >
                <div className="flex space-x-6">

                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-black dark:text-white"
                            >
                                AI Features
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Streamlines tasks, enhances productivity, and offers intelligent solutions across
                                various
                                domains
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={ai}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Buy Pro
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>

                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-black dark:text-white"
                            >
                                Collaborative Room
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Fosters teamwork, creativity, and communication, enhancing productivity and idea sharing
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={accessories}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="galaxy"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://example.com"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Buy Pro
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>

                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-black dark:text-white"
                            >
                                Unlimited Storage
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Offers boundless data capacity, ensuring seamless file access without worrying about
                                limitations
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={server}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="adventure"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://example.com"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Buy Pro
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>

            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                We provide endless <br/>
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                AI Features
              </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={sketch}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>

            <div className="w-full">
                <Timeline data={scroll}/>
            </div>

            <div className="w-full h-full py-20">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Blogs on
                    <FlipWords words={flip}/>
                </h2>
                <Carousel items={cards}/>
            </div>

            <div
                className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] relative pt-40 overflow-clip"
                ref={gemini_ref}
            >
                <GoogleGeminiEffect
                    pathLengths={[
                        pathLengthFirst,
                        pathLengthSecond,
                        pathLengthThird,
                        pathLengthFourth,
                        pathLengthFifth,
                    ]}
                />
            </div>

            <BackgroundBeamsWithCollision>

                <div className="container mx-auto p-4">

                    <section className="mb-8">
                        <div className="py-10"></div>
                        <h2 className="text-2xl text-white font-bold mb-4 text-center">
                              <span className="inline-block border-2 border-white rounded-full px-20 py-2">
                                Frontend
                              </span>
                        </h2>
                        <div className="py-5"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                            {frontendCards.map((card) => (
                                <CCard
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    tag={card.tag}
                                    image={card.image}
                                />
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="py-10"></div>
                        <h2 className="text-2xl text-white font-bold mb-4 text-center">
                      <span className="inline-block border-2 border-white rounded-full px-20 py-2">
                        Backend
                      </span>
                        </h2>
                        <div className="py-5"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                            {backendCards.map((card) => (
                                <CCard
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    tag={card.tag}
                                    image={card.image}
                                />
                            ))}
                        </div>
                    </section>
                </div>

            </BackgroundBeamsWithCollision>

            <div
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full bg-black items-center justify-center gap-15 py-10 pl-10 pr-10">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Learn Next JS
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Powerful React framework enabling server-side rendering, static site generation, and
                            seamless routing.
                        </p>
                    </div>
                    <Image
                        src={nextjsbanner}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        No design, no colours, no animations.
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        If someone yells “design”, goes for animation, or colours, Tell them about Tailwind CSS.
                    </p>
                </WobbleCard>
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px] lg:min-h-[300px] xl:min-h-[300px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Dive into blazing-fast cutting-edge state of the javascript, Learn <span
                            className="text-blue-300">TypeScript</span> today!
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            With over 100,000 mothly active projects, TypeScript is most
                            popular among developers.
                        </p>
                    </div>
                    <Image
                        src={typescript}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>

            <div
                className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                    <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Join the waitlist
                    </h1>
                    <p></p>
                    <br/>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                        Welcome,
                        We provide reliable, scalable, and solutions for
                        your Educational Work. Whether you&apos;re uploading papers or using AI
                        to create contents, SIS has got you
                        covered.
                    </p>
                </div>
                <BackgroundBeams/>
            </div>


        </>
    );
}

const navItems = [
    {
        name: "Home",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white"/>,
    },
    {
        name: "Services",
        link: "",
        icon: (
            <IconHotelService className="h-4 w-4 text-neutral-500 dark:text-white"/>
        ),
    },
    {
        name: "Github",
        link: "https://github.com/rounakdey2003/SIH",
        icon: <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white"/>,
    },
];

const projects = [
    {
        title: "STARTUPS",
        description:
            "Startups are innovative, often tech-driven companies focused on rapid growth, disrupting industries, and solving problems with unique solutions.",
        link: "",
    },
    {
        title: "RESEARCHES",
        description:
            "Researches involve systematic investigations to discover new information, test hypotheses, and advance knowledge across various fields, driving innovation and progress.",
        link: "",
    },
    {
        title: "INNOVATIONS",
        description:
            "Innovations drive progress by introducing novel ideas, technologies, or methods, transforming industries, enhancing efficiency, and improving quality of life globally.",
        link: "",
    },
    {
        title: "PATENTS",
        description:
            "An innovative system and method for real-time, adaptive user interfaces that dynamically customize experiences based on user behavior and preferences.",
        link: "",
    },
    {
        title: "INVENTORY",
        description:
            "Effective inventory management involves tracking levels, optimizing storage, and ensuring timely replenishment to meet demand.",
        link: "",
    },
    {
        title: "Your Ideas +",
        description:
            "Expanding your ideas can be achieved by brainstorming, considering different perspectives, asking questions, and exploring related topics for deeper insights.",
        link: "",
    },
];

const words = `STARTUPS RESEARCHES INNOVATIONS PATENTS INVENTORY SECURITY AI`;

const scroll = [
    {
        title: "AI Auto Text",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Built in auto patent format
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src={deepmind1}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={deepmind2}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={deepmind3}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={deepmind4}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "AI Storage",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Limitless access to all the features and storage as well
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src={storage1}
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={storage2}
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={storage3}
                        alt="bento template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={storage4}
                        alt="cards template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "AI Room",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Collaborative room for private work and research
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src={desk1}
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={desk2}
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={desk3}
                        alt="bento template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src={desk4}
                        alt="cards template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
];

const flip = ["STARTUPS", "RESEARCHES", "INNOVATIONS", "PATENTS"];

const DummyContent1 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Dolby Atmos
              </span>{" "}
                            is an advanced sound technology that creates an immersive, 3D audio experience by placing
                            sounds in a three-dimensional space. Unlike traditional surround sound, Atmos allows sound
                            to move around the listener in all directions, including overhead, delivering a more dynamic
                            and lifelike auditory experience.
                        </p>
                        <br/>
                        <Image
                            src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-full"
                        />
                    </div>
                );
            })}
        </>
    );
};
const DummyContent2 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Productivity
              </span>{" "}
                            is the measure of how efficiently tasks are completed, balancing time and effort to achieve
                            maximum output. It involves focus, organization, and effective time management. By setting
                            clear goals, minimizing distractions, and prioritizing tasks, individuals can increase
                            productivity, leading to greater personal and professional success.
                        </p>
                        <br/>
                        <Image
                            src='https://nextui.org/images/card-example-3.jpeg'
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-full"
                        />
                    </div>
                );
            })}
        </>
    );
};
const DummyContent3 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Artificial Intelligence
              </span>{" "}
                            is the simulation of human intelligence in machines, enabling them to perform tasks like
                            problem-solving, decision-making, and learning. It powers technologies like virtual
                            assistants, autonomous vehicles, and advanced robotics, revolutionizing industries through
                            automation, efficiency, and data-driven insights. AI continuously evolves, reshaping our
                            future.
                        </p>
                        <br/>
                        <Image
                            src='https://nextui.org/images/card-example-4.jpeg'
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-full"
                        />
                    </div>
                );
            })}
        </>
    );
};
const DummyContent4 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Apple's Mac
              </span>{" "}
                            are renowned for their sleek design, powerful performance, and seamless integration with
                            other Apple products. Running macOS, the Mac offers a user-friendly experience with high-end
                            features for creative professionals, students, and casual users alike. Macs are known for
                            their reliability, security, and innovation.
                        </p>
                        <br/>
                        <Image
                            src='https://nextui.org/images/card-example-2.jpeg'
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-full"
                        />
                    </div>
                );
            })}
        </>
    );
};
const DummyContent5 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                RED
              </span>{" "}
                            cameras are high-performance digital cinema cameras known for their superior image quality,
                            dynamic range, and versatility in film production. Designed for professionals, they capture
                            high-resolution footage, often in 6K or 8K. RED cameras are widely used in Hollywood,
                            documentaries, and commercials, delivering stunning, cinematic visuals.
                        </p>
                        <br/>
                        <Image
                            src='https://nextui.org/images/card-example-6.jpeg'
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-full"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Dolby Atmos",
        title: "Experience sound in every dimension",
        src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        content: <DummyContent1/>,
    },
    {
        category: "Productivity",
        title: "Maximize efficiency, achieve more daily",
        src: "https://nextui.org/images/card-example-3.jpeg",
        content: <DummyContent2/>,
    },
    {
        category: "AI",
        title: "Shaping Tomorrow, Today",
        src: "https://nextui.org/images/card-example-4.jpeg",
        content: <DummyContent3/>,
    },
    {
        category: "Apple",
        title: "Coolest piece of tech",
        src: "https://nextui.org/images/card-example-2.jpeg",
        content: <DummyContent4/>,
    },
    {
        category: "Red",
        title: "Next level photography",
        src: "https://nextui.org/images/card-example-6.jpeg",
        content: <DummyContent5/>,
    },
];

const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true}/>
));

const frontendCards = [
    {
        id: 1,
        title: 'Next JS',
        description:
            'Powerful React framework enabling server-side rendering, static site generation, and seamless routing.',
        tag: 'https://nextjs.org/',
        image: nextjs,
    },
    {
        id: 2,
        title: 'Tailwind',
        description:
            'Empowers developers with utility-first classes, enabling rapid, customizable, and responsive web design efficiently.',
        tag: 'https://tailwindcss.com/',
        image: tailwind,
    },
    {
        id: 3,
        title: 'Aceternity UI',
        description:
            'Web development studio specializing in high-performance websites with a focus on design, speed, and user experience.',
        tag: 'https://aceternity.com/',
        image: aceternity,
    },
];

const backendCards = [
    {
        id: 4,
        title: 'Vercel',
        description:
            'Provides developers with fast, scalable hosting and seamless deployments for modern, high-performance web applications.',
        tag: 'https://vercel.com/',
        image: vercel,
    },
    {
        id: 5,
        title: 'MongoDb',
        description:
            'Leading NoSQL database, offering flexible document storage, scalability, and high-performance data management solutions.',
        tag: 'https://www.mongodb.com/',
        image: mongodb,
    },
    {
        id: 6,
        title: 'Spring Boot',
        description:
            'Streamlines Java application development by providing auto-configuration, embedded servers, and production-ready features efficiently.',
        tag: 'https://spring.io/',
        image: springboot,
    },
];

const CCard = ({title, description, tag, image}) => (
    <div className="max-w-[160px] sm:max-w-[200px]">
        <BackgroundGradient
            className="rounded-[20px] p-1 sm:p-2 bg-black dark:bg-zinc-900 aspect-square flex flex-col items-center justify-between"
        >
            <div className="w-full flex justify-center">
                <Image
                    src={image}
                    alt={title}
                    className="object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32"
                />
            </div>

            <div className="flex flex-col items-center text-center mt-1 flex-grow">
                <p className="text-xs sm:text-sm text-white dark:text-neutral-200 mb-1">
                    {title}
                </p>
                <p className="text-[0.65rem] sm:text-xs text-neutral-600 dark:text-neutral-400">
                    {description}
                </p>
            </div>
            <a href={tag}>
                <button
                    className="rounded-full px-2 py-0.5 text-white flex items-center space-x-1 bg-neutral-800 mt-1 text-[0.65rem] font-bold dark:bg-zinc-800"
                >
                    <span>{tag}</span>
                </button>
            </a>
        </BackgroundGradient>
    </div>
);

const testimonials = [
    {
        quote:
            "Switching to this AI-powered storage solution has transformed how we manage data. It automatically classifies, optimizes, and secures our assets — saving us countless hours every week.",
        name: "Emily Chen",
        title: "CTO, Horizon Biotech",
    },
    {
        quote:
            "We were drowning in unstructured data. This AI storage software not only helped us organize it, but gave us insights we never thought possible. It's like having a data scientist built into our file system.",
        name: "James Patel",
        title: "Head of Data, Nova Retail",
    },
    {
        quote:
            "Fast, smart, and scalable — this solution is a game changer for AI workflows. It anticipates storage needs and optimizes performance better than any human team could.",
        name: "Linda Gomez",
        title: "AI Research Lead, QuantumNet Labs",
    },
    {
        quote:
            "Security and compliance were our top concerns. This software's AI-driven audit trails and anomaly detection gave us peace of mind and passed every external review with flying colors.",
        name: "Rahul Iyer",
        title: "Chief Information Security Officer, MedixCorp",
    },
    {
        quote:
            "From onboarding to scaling, everything was seamless. The AI automatically tags and archives data based on usage — we've reduced our storage costs by over 30%.",
        name: "Samantha Lee",
        title: "Operations Manager, Vertex Solutions",
    },
];
