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
    text: "Hasan Irfan Khan brings over 30 years of experience, including acting before the Superior Courts in Pakistan.",
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
              DECORATIVE LEGAL 500
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
              DECORATIVE CIRCLES
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-28
              -left-28
              h-72
              w-72
              rounded-full
              border
              border-[#d4af4c]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-16
              -left-16
              h-52
              w-52
              rounded-full
              border
              border-[#d4af4c]/10
            "
          />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative z-10">
            {/* Top Label */}

            <div
              className="
                mb-8
                flex
                items-center
                gap-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#e4c76d]
              "
            >
              <span className="h-px w-10 bg-[#d4af4c]" />

              Legal Consultation
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

                    sm:text-[50px]
                    md:text-[60px]
                    lg:text-[70px]
                  "
                >
                  Need Experienced

                  <span className="block text-[#e4c76d]">
                    Legal Counsel?
                  </span>
                </h2>

                <p
                  className="
                    mt-7
                    max-w-[650px]
                    text-[14px]
                    leading-[1.9]
                    text-white/70

                    md:text-[15px]
                  "
                >
                  Speak with Irfan &amp; Irfan Attorneys at Law about your legal
                  requirements. Our team provides practical, strategic and
                  client-focused legal counsel across a broad range of matters.
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
                border-y
                border-white/15
                py-8

                md:mt-14
                md:py-9
              "
            >
              <div
                className="
                  grid
                  gap-6

                  md:grid-cols-[auto_1fr_auto]
                  md:items-center
                  md:gap-8
                "
              >
                {/* Quote Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-[#d4af4c]/35
                  "
                >
                  <Quote
                    size={25}
                    strokeWidth={1.2}
                    className="text-[#d4af4c]"
                  />
                </div>

                {/* Changing Quote */}

                <div
                  className="
                    min-h-[100px]
                    flex
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

                {/* Quote Counter */}

                <div
                  className="
                    hidden
                    items-center
                    gap-2

                    md:flex
                  "
                >
                  {legal500Quotes.map((_, index) => (
                    <span
                      key={index}
                      className={`
                        block
                        h-[2px]
                        transition-all
                        duration-500

                        ${
                          activeQuote === index
                            ? "w-8 bg-[#d4af4c]"
                            : "w-4 bg-white/20"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM INFORMATION
            ================================================== */}

            <div
              className="
                mt-10
                grid
                pt-2

                sm:grid-cols-2

                lg:mt-12
                lg:grid-cols-3
              "
            >
              {/* ESTABLISHED */}

              <div
                className="
                  flex
                  gap-4
                  border-b
                  border-white/10
                  py-6

                  sm:border-r
                  sm:pr-6

                  lg:border-b-0
                  lg:py-2
                "
              >
                <Scale
                  size={21}
                  strokeWidth={1.4}
                  className="
                    mt-1
                    flex-shrink-0
                    text-[#d4af4c]
                  "
                />

                <div>
                  <p
                    className="
                      mb-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-white/45
                    "
                  >
                    Established
                  </p>

                  <p className="font-display text-[21px] text-white">
                    Since 1985
                  </p>
                </div>
              </div>

              {/* OFFICES */}

              <div
                className="
                  flex
                  gap-4
                  border-b
                  border-white/10
                  py-6

                  sm:pl-7

                  lg:border-b-0
                  lg:border-r
                  lg:px-7
                  lg:py-2
                "
              >
                <MapPin
                  size={21}
                  strokeWidth={1.4}
                  className="
                    mt-1
                    flex-shrink-0
                    text-[#d4af4c]
                  "
                />

                <div>
                  <p
                    className="
                      mb-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-white/45
                    "
                  >
                    Offices
                  </p>

                  <p
                    className="
                      font-display
                      text-[18px]
                      leading-relaxed
                      text-white
                    "
                  >
                    Lahore · Karachi · Islamabad
                  </p>
                </div>
              </div>

              {/* CONTACT */}

              <div
                className="
                  flex
                  gap-4
                  py-6

                  sm:col-span-2

                  lg:col-span-1
                  lg:pl-7
                  lg:py-2
                "
              >
                <Mail
                  size={21}
                  strokeWidth={1.4}
                  className="
                    mt-1
                    flex-shrink-0
                    text-[#d4af4c]
                  "
                />

                <div>
                  <p
                    className="
                      mb-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-white/45
                    "
                  >
                    Get In Touch
                  </p>

                  <Link
                    href="/contact"
                    className="
                      font-display
                      text-[20px]
                      text-white
                      transition-colors
                      duration-300

                      hover:text-[#d4af4c]
                    "
                  >
                    Contact Our Lawyers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPACE BELOW CTA */}

      <div className="h-16 bg-[#f8f4ed] md:h-24" />
    </section>
  );
}