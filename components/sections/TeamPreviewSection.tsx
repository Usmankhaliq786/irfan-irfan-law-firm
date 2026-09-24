"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    number: "01",
    name: "Hasan Irfan Khan",
    role: "Partner — Advocate Supreme Court",
    image: "/lawyers/hassan-irfan.png",
    profile: "/team/hasan-irfan-khan",
    message:
      "Our approach to law is rooted in experience, precision, and a deep understanding of our clients’ objectives. At Irfan & Irfan, we strive to provide practical, strategic, and effective legal solutions across complex matters. Every case presents its own challenges, and our responsibility is to navigate them with diligence, discretion, and professional integrity. We remain committed to delivering counsel that protects our clients’ interests and supports their long-term goals.",
  },
  {
    number: "02",
    name: "Barrister Maria Farrukh Khan",
    role: "Partner — Advocate Supreme Court",
    image: "/lawyers/maria-farrukh-khan.webp",
    profile: "/team/maria-farrukh-khan",
    message:
      "The practice of law demands more than technical expertise; it requires listening, understanding, and responding with clarity and purpose. At Irfan & Irfan, we place strong emphasis on client confidence, professional ethics, and meticulous attention to every matter entrusted to us. Our goal is to combine contemporary legal thinking with established principles of advocacy, providing clients with thoughtful representation and dependable guidance in an increasingly complex legal environment.",
  },
];

export default function TeamPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading Animation */
      gsap.fromTo(
        headingRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      /* Partner Cards Animation */
      if (partnersRef.current) {
        gsap.fromTo(
          Array.from(partnersRef.current.children),
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: partnersRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#fffdf9]
        py-20
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND TEXT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          top-2
          select-none
          font-display
          text-[100px]
          leading-none
          text-[#9d352d]/[0.035]

          sm:text-[145px]
          lg:text-[215px]
        "
      >
        PARTNERS
      </div>

      <div className="page-container relative z-10">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          ref={headingRef}
          className="
            mb-14
            grid
            gap-8
            border-b
            border-[#32110f]/15
            pb-10

            md:mb-16

            lg:grid-cols-[1fr_0.8fr]
            lg:items-end
          "
        >
          {/* Left */}

          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#9d352d]
              "
            >
              <span className="h-px w-10 bg-[#d4af4c]" />

              <span>Our Partners</span>
            </div>

            <h2
              className="
                max-w-[760px]
                font-display
                text-[42px]
                font-normal
                leading-[1.07]
                tracking-[-0.025em]
                text-[#32110f]

                sm:text-[50px]
                md:text-[58px]
                lg:text-[68px]
              "
            >
              Leadership Through

              <span className="block text-[#9d352d]">
                Experience &amp; Integrity.
              </span>
            </h2>
          </div>

          {/* Right */}

          <p
            className="
              max-w-[520px]
              text-[14px]
              leading-[1.9]
              text-[#604b45]

              lg:ml-auto
              lg:pb-1
            "
          >
            Our partners bring extensive legal experience, strategic insight
            and a shared commitment to providing thoughtful, dependable and
            client-focused legal counsel.
          </p>
        </div>

        {/* =====================================================
            PARTNERS
        ====================================================== */}

        <div
          ref={partnersRef}
          className="
            grid
            grid-cols-1
            gap-14

            lg:grid-cols-2
            lg:gap-10

            xl:gap-14
          "
        >
          {partners.map((partner) => (
            <article
              key={partner.number}
              className="
                group
                relative
              "
            >
              {/* =============================================
                  IMAGE
              ============================================== */}

              <div
                className="
                  relative
                  aspect-[4/4.45]
                  overflow-hidden
                  bg-[#f3ece5]

                  sm:aspect-[4/4]
                  lg:aspect-[4/4.35]
                  xl:aspect-[4/4]
                "
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="
                    (max-width: 1024px) 100vw,
                    50vw
                  "
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-[1.025]
                  "
                />

                {/* Image Gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#32110f]/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-white/20
                    bg-[#32110f]/70
                    text-[10px]
                    font-semibold
                    tracking-[0.16em]
                    text-white
                    backdrop-blur-sm

                    sm:left-6
                    sm:top-6
                  "
                >
                  {partner.number}
                </div>

                {/* Partner Badge */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5

                    sm:bottom-6
                    sm:left-6
                  "
                >
                  <span
                    className="
                      inline-flex
                      bg-[#32110f]/90
                      px-4
                      py-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#d4af4c]
                      backdrop-blur-sm
                    "
                  >
                    Partner
                  </span>
                </div>

                {/* Hover Gold Line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[4px]
                    w-0
                    bg-[#d4af4c]
                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </div>

              {/* =============================================
                  NAME / ROLE
              ============================================== */}

              <div
                className="
                  border-b
                  border-[#32110f]/15
                  py-7
                "
              >
                <p
                  className="
                    mb-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#9d352d]

                    sm:text-[10px]
                  "
                >
                  {partner.role}
                </p>

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >
                  <h3
  className="
    flex-1
    whitespace-nowrap
    font-display
    text-[24px]
    leading-[1.1]
    text-[#32110f]

    sm:text-[28px]
    lg:text-[29px]
    xl:text-[31px]
  "
>
  {partner.name}
</h3>

                  <Link
                    href={partner.profile}
                    aria-label={`View ${partner.name} profile`}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#9d352d]/25
                      text-[#9d352d]
                      transition-all
                      duration-300

                      hover:border-[#9d352d]
                      hover:bg-[#9d352d]
                      hover:text-white
                    "
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>

              {/* =============================================
                  PARTNER MESSAGE
              ============================================== */}

              <div className="relative pt-7">
                {/* Quote Icon */}

                <Quote
                  size={25}
                  strokeWidth={1.2}
                  className="
                    mb-5
                    text-[#d4af4c]
                  "
                />

                <p
                  className="
                    text-[14px]
                    font-light
                    leading-[1.95]
                    text-[#604b45]

                    sm:text-[15px]
                  "
                >
                  {partner.message}
                </p>

                {/* Message Footer */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span className="h-px w-10 bg-[#d4af4c]" />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#79665e]
                    "
                  >
                    Message from Partner
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-[#32110f]/15
            pt-8

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.16em]
              text-[#79665e]
            "
          >
            Leadership • Experience • Professional Integrity
          </p>

          <Link
            href="/team"
            className="
              group
              inline-flex
              items-center
              gap-4
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#9d352d]
            "
          >
            <span>Meet Our Legal Team</span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-[#9d352d]/30
                transition-all
                duration-300

                group-hover:border-[#9d352d]
                group-hover:bg-[#9d352d]
              "
            >
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="
                  transition-all
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-white
                "
              />
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GOLD DETAIL
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-[18%]
          bg-[#d4af4c]
        "
      />
    </section>
  );
}