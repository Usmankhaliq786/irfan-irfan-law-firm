"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const distinctions = [
  {
    title: "Established in 1985",
    description:
      "A long-standing legal practice built on professional integrity, experience, and a commitment to high standards of legal service.",
  },
  {
    title: "Presence Across Pakistan",
    description:
      "Serving clients through offices in Lahore, Karachi, and Islamabad across a broad range of legal and commercial matters.",
  },
  {
    title: "Broad Legal Expertise",
    description:
      "Providing counsel across corporate, finance, arbitration, litigation, intellectual property, energy, technology, and regulatory matters.",
  },
  {
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
      {/* Decorative Background 1985 */}
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
        {/* Top Firm Area */}
        <div
          ref={headingRef}
          className="
            mb-12
            grid
            gap-10
            pb-8
            md:mb-14
            md:pb-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-start
            lg:gap-16
            xl:gap-20
          "
        >
          {/* Left Side */}
          <div
            className="
              self-start
              lg:sticky
              lg:top-28
            "
          >
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
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Paragraph 1 */}
            <div className="pb-3">
              <p
                className="
                  text-[17px]
                  leading-[1.7]
                  text-[#604b45]
                  md:text-[16px]
                "
              >
                <span className="font-medium text-[#32110f]">
                  Established in 1985, Irfan and Irfan
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

            {/* Paragraph 2 */}
            <div className="py-3">
              <p
                className="
                  text-[17px]
                  leading-[1.7]
                  text-[#604b45]
                  md:text-[16px]
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

            {/* Paragraph 3 */}
            <div className="py-3">
              <p
                className="
                  text-[17px]
                  leading-[1.7]
                  text-[#604b45]
                  md:text-[16px]
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

            {/* Paragraph 4 */}
            <div className="pt-3">
              <p
                className="
                  text-[17px]
                  leading-[1.7]
                  text-[#604b45]
                  md:text-[16px]
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

       {/* Cards */}
<div
  ref={cardsRef}
  className="
    grid
    grid-cols-1
    gap-5
    md:grid-cols-2
    xl:grid-cols-4
  "
>
  {distinctions.map((item) => (
    <div
      key={item.title}
      className="
        group
        relative
        flex
        min-h-[280px]
        flex-col
        justify-center
        overflow-hidden
        border
        border-[#32110f]/20
        bg-[#fffdf9]
        p-7
        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#9d352d]
        hover:bg-[#9d352d]
        hover:shadow-[0_18px_45px_rgba(50,17,15,0.12)]

        lg:min-h-[310px]
        lg:p-8
        xl:p-9
      "
    >
      <h3
        className="
          font-display
          text-[30px]
          font-medium
          leading-[1.12]
          tracking-[-0.02em]
          text-[#32110f]
          transition-colors
          duration-300

          group-hover:text-white

          md:text-[32px]
          lg:text-[34px]
        "
      >
        {item.title}
      </h3>

      <p
  className="
    mt-5
    text-[14px]
    leading-[1.7]
    text-[#604b45]
    transition-colors
    duration-300

    group-hover:text-white/85

    md:text-[15px]
    lg:text-[15px]
  "
>
  {item.description}
</p>
    </div>
  ))}
</div>

        {/* Bottom */}
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