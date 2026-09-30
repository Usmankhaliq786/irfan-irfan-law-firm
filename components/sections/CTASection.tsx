"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Scale,
  MapPin,
  Mail,
  Quote,
} from "lucide-react";

const legal500Quotes = [
  {
    text: "Recognised for his extensive experience in intellectual property and litigation",
    source: "Legal 500",
  },
  {
    text: "Hasan Irfan Khan brings over 30 years of experience including acting before the Superior Courts in Pakistan.",
    source: "Legal 500",
  },
];

export default function CTASection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      const timeout = setTimeout(() => {
        setActiveQuote(
          (current) => (current + 1) % legal500Quotes.length
        );

        setVisible(true);
      }, 500);

      return () => clearTimeout(timeout);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8f4ed]">
      <div className="page-container">
        <div
          className="
            relative
            overflow-hidden
            bg-[#9d352d]
            px-6
            py-16

            sm:px-10

            md:px-14
            md:py-20

            lg:px-20
            lg:py-24
          "
        >
          {/* =====================================================
              DECORATIVE LEGAL 500 BACKGROUND TEXT
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-3
              -top-5
              select-none
              text-right
              font-display
              font-normal
              leading-[0.72]
              tracking-[-0.04em]
              text-white/[0.04]

              sm:-right-5
              sm:-top-7

              md:-right-6
              md:-top-8

              lg:-right-8
              lg:-top-10
            "
          >
            <span
              className="
                block
                text-[90px]
                sm:text-[120px]
                md:text-[150px]
                lg:text-[185px]
                xl:text-[210px]
              "
            >
              LEGAL
            </span>

            <span
              className="
                mt-5
                block
                text-[105px]

                sm:mt-7
                sm:text-[140px]

                md:mt-9
                md:text-[175px]

                lg:mt-12
                lg:text-[215px]

                xl:mt-14
                xl:text-[245px]
              "
            >
              500
            </span>
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative z-10">
            {/* Top Label */}

            <div
              className="
                mb-8
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#e4c76d]
              "
            >
            </div>

            {/* =================================================
                MAIN CONTENT
            ================================================== */}

            <div
              className="
                grid
                gap-10

                lg:grid-cols-[1.15fr_0.65fr]
                lg:items-end
              "
            >
              {/* Left Content */}

              <div>
                <h2
                  className="
                    max-w-[820px]
                    font-display
                    text-[42px]
                    font-normal
                    leading-[1.05]
                    tracking-[-0.025em]
                    text-white

                    sm:text-[30px]
                    md:text-[40px]
                    lg:text-[50px]
                  "
                >
                  Your Case. Your Rights.

                    <span className="block text-[#e4c76d]">
                    Your Strongest Legal Position.
                  </span>
                </h2>

                <p
                  className="
                    mt-7
                    max-w-[650px]
                    text-[16px]
                    leading-[1.85]
                    text-white/75

                    sm:text-[17px]
                    md:text-[18px]
                  "
                >
                  Navigate complex legal challenges with confidence through strategic counsel, meticulous legal guidance and dedicated representation. Our team is committed to understanding your circumstances, protecting your interests and pursuing practical, well-informed solutions with professionalism and integrity
                </p>
              </div>

              {/* CTA Button */}

              <div className="lg:flex lg:justify-end">
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-between
                    gap-8
                    bg-[#d4af4c]
                    px-7
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#32110f]
                    transition-all
                    duration-300

                    hover:bg-white

                    sm:min-w-[260px]
                  "
                >
                  Contact Our Team

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
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

            {/* =================================================
                LEGAL 500 RECOGNITION
            ================================================== */}

            <div
              className="
                mt-12
                py-8

                md:mt-14
                md:py-9
              "
            >
              <div
                className="
                  grid
                  gap-6

                  md:grid-cols-[auto_1fr]
                  md:items-center
                  md:gap-8
                "
              >
                {/* Quote Icon - No Border */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  {/* <Quote
                    size={29}
                    strokeWidth={1.2}
                    className="text-[#d4af4c]"
                  /> */}
                </div>

                {/* Changing Quote */}

                <div
                  className="
                    flex
                    min-h-[100px]
                    items-center

                    sm:min-h-[90px]
                    md:min-h-[80px]
                  "
                >
                  <div
                    className={`
                      transition-all
                      duration-500
                      ease-out

                      ${
                        visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }
                    `}
                  >
                    <p
                      className="
                        max-w-[760px]
                        font-display
                        text-[20px]
                        font-normal
                        italic
                        leading-[1.55]
                        text-white

                        sm:text-[22px]
                        md:text-[24px]
                      "
                    >
                      “{legal500Quotes[activeQuote].text}”
                    </p>

                    <p
                      className="
                        mt-3
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.24em]
                        text-[#e4c76d]
                      "
                    >
                      {legal500Quotes[activeQuote].source}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM INFORMATION
            ================================================== */}

          </div>
        </div>
      </div>

      {/* SPACE BELOW CTA */}

      <div className="h-16 bg-[#f8f4ed] md:h-24" />
    </section>
  );
}