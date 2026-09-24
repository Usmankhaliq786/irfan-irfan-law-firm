"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceAreas } from "@/data/practice-areas";

gsap.registerPlugin(ScrollTrigger);

export default function PracticeAreasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const eyebrowRuleRef = useRef<HTMLSpanElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            headingRef.current,
            eyebrowRuleRef.current,
            gridRef.current
              ? Array.from(gridRef.current.children)
              : [],
            ctaRef.current,
          ],
          {
            clearProps: "all",
            opacity: 1,
          }
        );

        return;
      }

      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      headingTimeline
        .fromTo(
          eyebrowRuleRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.inOut",
          }
        )
        .fromTo(
          headingRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.3"
        );

      if (gridRef.current) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      gsap.fromTo(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 92%",
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
      id="practice-areas"
      className="
        relative
        z-10
        overflow-hidden
        bg-[#f8f4ed]

        pt-[125px]
        pb-20

        sm:pt-[135px]

        md:pt-[150px]
        md:pb-24

        lg:pt-[160px]
        lg:pb-28
      "
    >
      {/* Decorative Background */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[170px]
          top-[20px]
          h-[450px]
          w-[450px]
          rounded-full
          border
          border-[#d4af4c]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[100px]
          bottom-[20px]
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-[#9d352d]/5
        "
      />

      <div className="page-container relative z-10">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          ref={headingRef}
          className="
            mb-12
            text-center
            md:mb-14
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#9d352d]
            "
          >
            <span
              ref={eyebrowRuleRef}
              className="
                h-px
                w-10
                origin-right
                bg-[#d4af4c]
              "
            />

            <span>Our Expertise</span>

            <span className="h-px w-10 bg-[#d4af4c]" />
          </div>

          <h2
            className="
              font-display
              text-[42px]
              font-normal
              leading-[1.05]
              tracking-[-0.025em]
              text-[#32110f]

              sm:text-[50px]
              md:text-[58px]
              lg:text-[66px]
            "
          >
            Practice{" "}
            <span className="text-[#9d352d]">
              Areas
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[750px]
              text-[14px]
              leading-[1.9]
              text-[#604b45]
              md:text-[15px]
            "
          >
            Irfan &amp; Irfan provides comprehensive legal counsel across
            diverse sectors, supporting businesses, institutions and
            individuals in complex legal and commercial matters.
          </p>
        </div>

        {/* =====================================================
            PRACTICE AREA CARDS
        ====================================================== */}

        <div
          ref={gridRef}
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            lg:grid-cols-3

            xl:grid-cols-4
            xl:gap-5
          "
        >
          {practiceAreas.map((area) => (
            <Link
              key={area.id}
              href={`/practice-areas#${area.id}`}
              className="
                group
                relative
                flex
                h-[50px]
                items-center
                justify-center
                overflow-hidden
                rounded-[12px]
                border
                border-[#9d352d]
                bg-[#9d352d]
                px-5
                text-center

                shadow-[0_5px_14px_rgba(50,17,15,0.08)]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-white
                hover:shadow-[0_10px_25px_rgba(50,17,15,0.15)]
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-[3px]
                  w-0
                  -translate-x-1/2
                  bg-[#d4af4c]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

              <span
                className="
                  relative
                  z-10
                  px-4
                  text-[14px]
                  font-semibold
                  leading-[1.2]
                  text-white
                  transition-colors
                  duration-300

                  group-hover:text-[#9d352d]

                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                {area.title}
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.7}
                className="
                  absolute
                  right-4
                  translate-x-2
                  text-[#9d352d]
                  opacity-0
                  transition-all
                  duration-300

                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          ref={ctaRef}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            text-center
            md:mt-14
          "
        >
          <p
            className="
              mb-6
              max-w-[570px]
              text-[13px]
              leading-[1.8]
              text-[#79665e]
            "
          >
            Explore our practice areas to learn more about the legal services
            and sector-focused counsel provided by Irfan &amp; Irfan.
          </p>

          <Link
            href="/practice-areas"
            className="
              group
              inline-flex
              min-h-[54px]
              min-w-[235px]
              items-center
              justify-between
              gap-8
              border
              border-[#9d352d]
              px-6

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#9d352d]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#9d352d]
              hover:text-white
              hover:shadow-[0_10px_25px_rgba(157,53,45,0.22)]
            "
          >
            <span>Explore All Expertise</span>

            <ArrowRight
              size={17}
              strokeWidth={1.6}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}