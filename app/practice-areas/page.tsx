"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { practiceAreas } from "@/data/practice-areas";

gsap.registerPlugin(ScrollTrigger);

export default function PracticeAreasPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealElements =
        gsap.utils.toArray<HTMLElement>(".practice-reveal");

      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      const cards =
        gsap.utils.toArray<HTMLElement>(".practice-card");

      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="page-transition">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_45%,#74241f_100%)]
          pb-20
          pt-32
          md:pb-28
          md:pt-40
          lg:pb-32
        "
      >
        {/* Background Text */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-10
            top-12
            select-none
            font-display
            text-[100px]
            leading-none
            text-[#d4af4c]/[0.055]
            sm:text-[150px]
            md:text-[190px]
            lg:text-[240px]
          "
        >
          LAW
        </div>

        <div className="page-container relative z-10">
          <div className="practice-reveal max-w-[930px]">

            <p
              className="
                mb-6
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#d4af4c]
              "
            >
              
            </p>

            <h1
              className="
                max-w-[850px]
                font-display
                text-[48px]
                font-normal
                leading-[1.04]
                tracking-[-0.03em]
                text-white
                sm:text-[58px]
                md:text-[70px]
                lg:text-[82px]
              "
            >
              Practice

              <span className="block text-[#d4af4c]">
                Areas.
              </span>
            </h1>

            {/* <p
              className="
                mt-8
                max-w-[690px]
                text-[16px]
                leading-[1.9]
                text-white/70
                md:text-[17px]
              "
            >
              Irfan &amp; Irfan Attorneys at Law provides legal counsel
              across a broad range of practice areas combining decades of
              experience with practical and forward-thinking legal solutions.
            </p> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRACTICE AREAS
      ====================================================== */}

      <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
        <div className="page-container">

          <div
            className="
              practice-reveal
              mb-12
              grid
              gap-6
              lg:grid-cols-[1fr_0.55fr]
              lg:items-end
            "
          >
            {/* <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#9d352d]
                "
              >
              
              </p>

              <h2
                className="
                  max-w-[720px]
                  font-display
                  text-[40px]
                  leading-[1.08]
                  text-[#32110f]
                  sm:text-[48px]
                  lg:text-[58px]
                "
              >
                Explore Our

                <span className="block text-[#9d352d]">
                  Legal Practice.
                </span>
              </h2>
            </div> */}

            {/* <p
              className="
                max-w-[470px]
                text-[14px]
                leading-[1.9]
                text-[#79665e]
                lg:ml-auto
              "
            >
              Select a practice area to explore our capabilities and meet
              lawyers whose experience is relevant to that field.
            </p> */}
          </div>

          {/* Cards */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {practiceAreas.map((area) => (
              <Link
                key={area.id}
                href={`/practice-areas/${area.id}`}
                className="
                  practice-card
                  group
                  relative
                  flex
                  min-h-[220px]
                  flex-col
                  justify-between
                  bg-[#f8f4ed]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#9d352d]
                  hover:shadow-[0_20px_45px_rgba(50,17,15,0.14)]
                "
              >
                <div>
                  <h3
                    className="
                      font-display
                      text-[24px]
                      leading-[1.15]
                      text-[#32110f]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {area.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[13px]
                      leading-[1.75]
                      text-[#79665e]
                      transition-colors
                      duration-300
                      group-hover:text-white/75
                    "
                  >
                    {area.shortDescription}
                  </p>
                </div>

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#9d352d]
                      transition-colors
                      duration-300
                      group-hover:text-[#d4af4c]
                    "
                  >
                    View Practice
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      text-[#9d352d]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#d4af4c]
                    "
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_50%,#74241f_100%)]
          py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-8
            top-0
            select-none
            font-display
            text-[140px]
            leading-none
            text-white/[0.025]
            md:text-[220px]
          "
        >
          1985
        </div>

        <div className="page-container relative z-10">
          <div
            className="
              practice-reveal
              grid
              gap-10
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-center
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  mb-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#d4af4c]
                "
              >
                
              </p>

              <h2
                className="
                  font-display
                  text-[40px]
                  leading-[1.08]
                  text-white
                  sm:text-[48px]
                  lg:text-[58px]
                "
              >
                Legal Advice Built

                <span className="block text-[#d4af4c]">
                  Around Our Clients.
                </span>
              </h2>
            </div>

            <div>
              <p
                className="
                  max-w-[700px]
                  text-[16px]
                  leading-[1.95]
                  text-white/70
                  md:text-[17px]
                "
              >
                Every legal matter presents its own challenges. Our approach
                begins with understanding the client&apos;s objectives
                identifying the legal and commercial issues involved and
                developing a focused strategy for the matter at hand.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-x-8
                  gap-y-4
                "
              >
                {[
                  
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white/75
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          <div
            className="
              practice-reveal
              grid
              gap-8
              bg-[#9d352d]
              p-8
              sm:p-10
              md:p-12
              lg:grid-cols-[1fr_auto]
              lg:items-center
              lg:p-14
            "
          >
            <div>
              <p
                className="
                  mb-4
                  text-[20px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#d4af4c]
                "
              >
                Legal 500
              </p>

              <h2
                className="
                  max-w-[700px]
                  font-display
                  text-[36px]
                  leading-[1.12]
                  text-white
                  sm:text-[43px]
                  lg:text-[50px]
                "
              >
                Need advice regarding a legal matter?
              </h2>

              
            </div>

            {/* <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-[58px]
                min-w-[220px]
                items-center
                justify-between
                gap-8
                bg-[#32110f]
                px-7
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-colors
                duration-300
                hover:bg-[#24100e]
              "
            >
            

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="
                  text-[#d4af4c]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}