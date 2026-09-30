"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Founder Image Animation */
      gsap.fromTo(
        imageRef.current,
        {
          x: -55,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      /* Founder Message Animation */
      gsap.fromTo(
        contentRef.current,
        {
          x: 55,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#9d352d]
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          -top-12
          select-none
          font-display
          text-[130px]
          leading-none
          text-white/[0.025]
          sm:text-[180px]
          lg:text-[260px]
        "
      >
        1985
      </div>

      <div className="page-container relative z-10">
        <div
          className="
            grid
            items-stretch
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT — FOUNDER IMAGE
          ================================================== */}

          <div
            ref={imageRef}
            className="
              relative
              py-16
              sm:py-20
              lg:py-24
              xl:py-28
            "
          >
            {/* Label - Mobile / Tablet */}

            <div
              className="
                mb-7
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#d4af4c]
                lg:hidden
              "
            >
              Founder&apos;s Message
            </div>

            {/* Founder Image */}

<div
  className="
    group
    relative
    mx-auto
    max-w-[650px]
    lg:mx-0
    lg:max-w-none
  "
>
  {/* Image */}
  <div
    className="
      relative
      aspect-[4/3]
      overflow-hidden
      bg-[#9d352d]
    "
  >
    <Image
      src="/images/founder-farrukh-irfan-khan.jpeg"
      alt="Justice (Retd.) Muhammad Farrukh Irfan Khan"
      fill
      priority={false}
      sizes="(max-width: 1024px) 100vw, 48vw"
      className="
        object-cover
        object-center
        transition-transform
        duration-700
        ease-out
        group-hover:scale-[1.025]
      "
    />

    {/* Subtle Image Overlay */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-t
        from-[#32110f]/20
        via-transparent
        to-transparent
      "
    />
  </div>

  {/* Founder Name Below Image */}
  <div className="pt-5">
    <h3
      className="
        font-display
        text-[18px]
        font-medium
        leading-[1.25]
        text-white
        sm:text-[20px]
        lg:text-[21px]
      "
    >
      Justice (Retd.) Muhammad Farrukh Irfan Khan
    </h3>

    <p
      className="
        mt-2
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.22em]
        text-[#d4af4c]
      "
    >
      Founder
    </p>
  </div>
</div>

            {/* =================================================
                ESTABLISHED DETAILS
            ================================================== */}

            <div
              className="
                mt-8
                flex
                items-start
                justify-between
                gap-8
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/40
                  "
                >
                  
                </p>

                <p
                  className="
                    mt-1
                    font-display
                    text-[22px]
                    text-white
                  "
                >
                  
                </p>
              </div>

              <div className="text-right">
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/40
                  "
                >
            
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    tracking-[0.08em]
                    text-white/70
                  "
                >
                  
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — FOUNDER MESSAGE
          ================================================== */}

          <div
            ref={contentRef}
            className="
              flex
              items-center
              pb-20
              pt-4
              lg:py-24
              xl:py-28
            "
          >
            <div className="w-full max-w-[700px]">
              {/* Label - Desktop */}

              <div
                className="
                  mb-7
                  hidden
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#d4af4c]
                  lg:block
                "
              >
                Founder&apos;s Message
              </div>

              {/* Heading */}

              <h2
                className="
                  max-w-[650px]
                  font-display
                  text-[40px]
                  font-normal
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[48px]
                  md:text-[56px]
                  lg:text-[58px]
                  xl:text-[64px]
                "
              >
                Legacy 

                <span className="block text-[#d4af4c]">
                  and Excellence.
                </span>
              </h2>

              {/* Quote Icon — No Divider Line */}

              {/* =================================================
                  FOUNDER MESSAGE
              ================================================== */}

              <blockquote>
                <p
                  className="
                    font-display
                    text-[20px]
                    font-normal
                    leading-[1.7]
                    text-white/95
                    sm:text-[22px]
                    md:text-[24px]
                  "
                >
                  At Irfan &amp; Irfan our journey has always been guided by
                  integrity and legal excellence with an unwavering commitment
                  to the pursuit of justice.
                </p>

                <p
                  className="
                    mt-5
                    text-[16px]
                    font-light
                    leading-[1.8]
                    text-white/75
                    md:text-[17px]
                  "
                >
                  We believe lasting professional relationships are built on
                  trust and understanding through consistently delivering sound
                  legal counsel. As we continue to evolve our focus remains on
                  maintaining the highest standards of professionalism while
                  creating meaningful value for our clients and the wider legal
                  community.
                </p>
              </blockquote>

              {/* =================================================
                  CTA
              ================================================== */}

              <Link
                href="/about"
                className="
                  group
                  mt-10
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-between
                  gap-10
                  border
                  border-[#d4af4c]
                  px-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#d4af4c]
                  transition-all
                  duration-300
                  hover:bg-[#d4af4c]
                  hover:text-[#32110f]
                "
              >
                <span>Discover Our Firm</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}