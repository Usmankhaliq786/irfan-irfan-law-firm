"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
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

      {/* Decorative Gold Vertical Line */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          hidden
          h-full
          w-[3px]
          bg-[#d4af4c]
          lg:block
        "
      />

      <div className="page-container relative z-10">
        <div
          className="
            grid
            items-stretch
            lg:grid-cols-[0.95fr_1.05fr]
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

              lg:border-r
              lg:border-white/10
              lg:py-24
              lg:pr-14

              xl:py-28
              xl:pr-20
            "
          >
            {/* Label - Mobile / Tablet */}

            <div
              className="
                mb-7
                flex
                items-center
                gap-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#d4af4c]

                lg:hidden
              "
            >
              <span className="h-px w-10 bg-[#d4af4c]" />

              <span>Founder&apos;s Message</span>
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
              {/* Gold Offset Border */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-3
                  -right-3
                  h-full
                  w-full
                  border
                  border-[#d4af4c]/40

                  sm:-bottom-4
                  sm:-right-4
                "
              />

              {/* Main Image Wrapper */}

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
                  alt="Farrukh Irfan Khan — Founder of Irfan & Irfan"
                  fill
                  priority={false}
                  sizes="
                    (max-width: 1024px) 100vw,
                    48vw
                  "
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
                    from-[#9d352d]/45
                    via-transparent
                    to-transparent
                  "
                />

                {/* Founder Name Overlay */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5

                    sm:p-7
                  "
                >
                  <div
                    className="
                      inline-block
                      bg-[#9d352d]/90
                      px-5
                      py-4
                      backdrop-blur-sm

                      sm:px-6
                    "
                  >
                    <h3
                      className="
                        font-display
                        text-[22px]
                        leading-none
                        text-white

                        sm:text-[25px]
                      "
                    >
                      Farrukh Irfan Khan
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.24em]
                        text-[#d4af4c]
                      "
                    >
                      Founder
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Gold Corner */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  -left-[1px]
                  -top-[1px]
                  h-14
                  w-[3px]
                  bg-[#d4af4c]
                "
              />

              <span
                aria-hidden="true"
                className="
                  absolute
                  -left-[1px]
                  -top-[1px]
                  h-[3px]
                  w-14
                  bg-[#d4af4c]
                "
              />
            </div>

            {/* =================================================
                ESTABLISHED DETAILS
            ================================================== */}

            <div
              className="
                mt-8
                flex
                items-center
                justify-between
                gap-6
                border-t
                border-white/10
                pt-6
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
                  Firm Established
                </p>

                <p
                  className="
                    mt-1
                    font-display
                    text-[22px]
                    text-white
                  "
                >
                  1985
                </p>
              </div>

              <div className="h-10 w-px bg-white/15" />

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
                  Attorneys at Law
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    tracking-[0.08em]
                    text-white/70
                  "
                >
                  Irfan &amp; Irfan
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
              lg:pl-14

              xl:py-28
              xl:pl-20
            "
          >
            <div className="w-full max-w-[700px]">
              {/* Label - Desktop */}

              <div
                className="
                  mb-7
                  hidden
                  items-center
                  gap-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#d4af4c]

                  lg:flex
                "
              >
                <span className="h-px w-10 bg-[#d4af4c]" />

                <span>Founder&apos;s Message</span>
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
                Legacy of

                <span className="block text-[#d4af4c]">
                  &amp; Excellence.
                </span>
              </h2>

              {/* Quote Divider */}

              <div
                className="
                  my-8
                  flex
                  items-center
                  gap-5
                "
              >
                <Quote
                  size={30}
                  strokeWidth={1.2}
                  className="text-[#d4af4c]"
                />

                <span className="h-px flex-1 bg-white/15" />
              </div>

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
                  At Irfan &amp; Irfan, our journey has always been guided by a
                  commitment to integrity, legal excellence, and the pursuit of
                  justice.
                </p>

                <p
                  className="
                    mt-6
                    text-[15px]
                    font-light
                    leading-[1.95]
                    text-white/70

                    md:text-[16px]
                  "
                >
                  We believe that lasting professional relationships are built
                  on trust, understanding, and consistently delivering sound
                  legal counsel. As we continue to evolve, our focus remains on
                  upholding the highest standards of professionalism while
                  creating meaningful value for our clients, colleagues, and
                  the wider legal community.
                </p>
              </blockquote>

              {/* =================================================
                  FOUNDER SIGNATURE
              ================================================== */}

              <div
                className="
                  mt-9
                  flex
                  items-center
                  gap-5
                  border-t
                  border-white/15
                  pt-7
                "
              >
                <div className="h-12 w-[3px] bg-[#d4af4c]" />

                <div>
                  <h3
                    className="
                      font-display
                      text-[23px]
                      text-white
                    "
                  >
                    Farrukh Irfan Khan
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#d4af4c]
                    "
                  >
                    Founder — Irfan &amp; Irfan
                  </p>
                </div>
              </div>

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