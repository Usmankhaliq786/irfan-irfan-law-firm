"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scale,
  MapPin,
  BriefcaseBusiness,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const distinctions = [
  {
    number: "01",
    icon: Scale,
    title: "Established in 1985",
    description:
      "A long-standing legal practice built on professional integrity, experience, and a commitment to high standards of legal service.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Presence Across Pakistan",
    description:
      "Serving clients through offices in Lahore, Karachi, and Islamabad across a broad range of legal and commercial matters.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Broad Legal Expertise",
    description:
      "Providing counsel across corporate, finance, arbitration, litigation, intellectual property, energy, technology, and regulatory matters.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Client-Centered Counsel",
    description:
      "Focused on practical and cost-effective legal solutions tailored to the business, legal, and personal needs of our clients.",
  },
];

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading Animation */
      gsap.fromTo(
        headingRef.current,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      /* Cards Animation */
      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
        overflow-visible
        bg-[#fffdf9]
        py-20
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND 1985
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          -top-16
          select-none
          overflow-hidden
          font-display
          text-[180px]
          leading-none
          text-[#9d352d]/[0.025]

          md:text-[260px]
          lg:text-[330px]
        "
      >
        1985
      </div>

      <div className="page-container relative z-10">
        {/* =====================================================
            TOP FIRM AREA
        ====================================================== */}

        <div
          ref={headingRef}
          className="
            mb-14
            grid
            gap-10
            pb-10

            md:mb-16
            md:pb-12

            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-start
            lg:gap-16

            xl:gap-20
          "
        >
          {/* =================================================
              LEFT SIDE — STICKY
          ================================================== */}

          <div
            className="
              self-start

              lg:sticky
              lg:top-28
            "
          >
            {/* Label */}

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

              <span>Our Distinction</span>
            </div>

            {/* Main Heading */}

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
                lg:text-[62px]
                xl:text-[68px]
              "
            >
              Expertise. Experience.

              <span className="block text-[#9d352d]">
                Capabilities.
              </span>
            </h2>

            {/* Small Detail */}

            <div
              className="
                mt-8
                hidden
                items-center
                gap-3
                lg:flex
              "
            >
              <span className="h-px w-14 bg-[#d4af4c]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#79665e]
                "
              >
                Irfan &amp; Irfan
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — OUR FIRM CONTENT
          ================================================== */}

          <div className="relative">
            {/* Our Firm Label */}

            <div className="mb-6 flex items-center gap-3">
              <span
                className="
                  shrink-0
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#9d352d]
                "
              >
                Our Firm
              </span>

              <span className="h-px flex-1 bg-[#32110f]/10" />
            </div>

            {/* =================================================
                PARAGRAPH 1
            ================================================== */}

            <div className="border-b border-[#32110f]/10 pb-7">
              <p
                className="
                  text-[15px]
                  leading-[1.95]
                  text-[#604b45]

                  md:text-[15.5px]
                "
              >
                <span className="font-medium text-[#32110f]">
                  Established in 1985, Irfan &amp; Irfan
                </span>{" "}
                is legal advisor to many successful companies, corporations,
                authorities, entrepreneurs, business families and individuals.
                Our diverse practice areas cover and cater for our
                clients&apos; every legal need, be it personal or business
                related. Our client oriented approach and an effort to go
                beyond the obvious has over the years helped us cement
                relationships with clients besides adding illustrious names to
                our client base.
              </p>
            </div>

            {/* =================================================
                PARAGRAPH 2
            ================================================== */}

            <div className="border-b border-[#32110f]/10 py-7">
              <p
                className="
                  text-[15px]
                  leading-[1.95]
                  text-[#604b45]

                  md:text-[15.5px]
                "
              >
                We go the extra mile to ensure our presence and accessibility.
                Be it a multimedia presentation on a business or financial
                model, an across the table negotiation, a case in court or a
                personal family settlement, we are there when our clients need
                us. Our lawyers successfully represent clients in all major
                areas of law practice including corporate and business,
                e-commerce, taxation, securities, oil and gas,
                telecommunications, real estate, trademark and copyright,
                patent and technology, banking and civil litigation,
                constitutional petitions and issues unique to family-owned
                businesses.
              </p>
            </div>

            {/* =================================================
                PARAGRAPH 3
            ================================================== */}

            <div className="border-b border-[#32110f]/10 py-7">
              <p
                className="
                  text-[15px]
                  leading-[1.95]
                  text-[#604b45]

                  md:text-[15.5px]
                "
              >
                Many of the firm&apos;s lawyers are recognized leaders in their
                respective fields and regularly share their expertise, insight
                and advice by serving as guest lecturers and keynote speakers
                for leading business and professional organizations. Our
                lawyers stay abreast of new developments in their respective
                areas of practice giving clients the confidence that their
                lawyers are prepared to advise and respond to new developments
                in the law that will affect their legal, business and personal
                matters.
              </p>
            </div>

            {/* =================================================
                PARAGRAPH 4
            ================================================== */}

            <div className="pt-7">
              <p
                className="
                  text-[15px]
                  leading-[1.95]
                  text-[#604b45]

                  md:text-[15.5px]
                "
              >
                Our most important measure is our integrity and the manner in
                which we recognize and respond to our clients&apos; concerns.
                Our lawyers understand that solutions we offer to our clients
                must be practical and cost effective, hence, legal advice or
                litigation strategy is always client centered. The finest
                result of this work ethic and character has been our
                clients&apos; unconditional trust and unflinching loyalty. We
                at Irfan &amp; Irfan are proud of our tradition of setting high
                professional standards for our clients&apos; benefit and our
                competitors&apos; emulation.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            SINGLE DIVIDER
        ====================================================== */}

        <div className="h-px w-full bg-[#32110f]/15" />

        {/* =====================================================
            CARDS — SAME DESIGN
        ====================================================== */}

        <div
          ref={cardsRef}
          className="
            grid
            grid-cols-1
            border-l
            border-[#32110f]/15

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {distinctions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="
                  group
                  relative
                  min-h-[330px]
                  overflow-hidden
                  border-b
                  border-r
                  border-[#32110f]/15
                  p-7
                  transition-all
                  duration-500
                  hover:bg-[#9d352d]

                  lg:p-8
                "
              >
                {/* Card Top */}

                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.22em]
                      text-[#9d352d]/60
                      transition-colors
                      duration-300
                      group-hover:text-[#e2c56f]
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      border
                      border-[#d4af4c]/45
                      transition-all
                      duration-500
                      group-hover:bg-[#d4af4c]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.4}
                      className="
                        text-[#9d352d]
                        transition-colors
                        duration-300
                        group-hover:text-[#32110f]
                      "
                    />
                  </div>
                </div>

                {/* Card Content */}

                <div className="mt-16">
                  <h3
                    className="
                      font-display
                      text-[27px]
                      font-medium
                      leading-[1.15]
                      text-[#32110f]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      my-5
                      h-px
                      w-10
                      bg-[#d4af4c]
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  <p
                    className="
                      text-[13px]
                      leading-[1.8]
                      text-[#79665e]
                      transition-colors
                      duration-300
                      group-hover:text-white/70
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card Hover Bottom Line */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-[#d4af4c]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-9
            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[12px]
              uppercase
              tracking-[0.16em]
              text-[#79665e]
            "
          >
            Professional legal counsel since 1985
          </p>

          <Link
            href="/about"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#9d352d]
            "
          >
            <span>Learn More About Our Firm</span>

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
    </section>
  );
}