"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CORE VALUES
========================================================= */

const values = [
  {
    title: "Integrity",
    description:
      "Upholding the highest ethical standards in every action and decision.",
  },
  {
    title: "Client-Centricity",
    description:
      "Placing our clients' needs at the heart of everything we strive to achieve.",
  },
  {
    title: "Excellence",
    description:
      "Striving for accuracy, quality, and impactful legal outcomes.",
  },
  {
    title: "Innovation",
    description:
      "Anticipating change and providing forward-thinking legal solutions.",
  },
  {
    title: "Responsibility",
    description:
      "Acting as responsible leaders and contributing positively to the legal profession and society.",
  },
  {
    title: "Collaboration",
    description:
      "Working closely with clients and colleagues to achieve shared success.",
  },
];

/* =========================================================
   MISSION
========================================================= */

const missionPoints = [
  "To apply our legal skills in helping our clients achieve their business and personal goals.",
  "To be a truly client-centered firm geared towards timely reactions and precise recommendations.",
  "To provide our clients with the highest levels of legal care by understanding, anticipating and responding to their full range of legal needs.",
  "To discharge our responsibility as leaders in our profession by acting with dedication and integrity and contributing to the public good.",
];

/* =========================================================
   VISION
========================================================= */

const visionPoints = [
  "To be recognized as a leading law firm in Pakistan and beyond, known for excellence, innovation and unwavering commitment to professional ethics and justice.",
  "To shape the future of legal practice by combining carefully cultivated expertise with forward-thinking strategies that create lasting impact for clients.",
  "To set benchmarks of professional integrity, ethical responsibility and transparency in every aspect of legal services.",
  "To contribute to strengthening the rule of law and fostering trust in legal institutions through advocacy, reform and thought leadership.",
];

/* =========================================================
   TIMELINE
========================================================= */

const timeline = [
  {
    year: "1985",
    label: "The Beginning",
    title: "Established",
    text: "Irfan & Irfan was established with a vision of providing high-quality legal services that combine expertise with personalized attention.",
  },
  {
    year: "2011",
    label: "Growing Presence",
    title: "Expansion",
    text: "With a growing client base, the firm expanded its presence to better serve clients across the country.",
  },
  {
    year: "2014",
    label: "Professional Recognition",
    title: "Recognized Leadership",
    text: "The firm's innovative approach and professional results contributed to recognition as one of Pakistan's established law firms.",
  },
  {
    year: "2019",
    label: "International Connections",
    title: "Global Reach",
    text: "The firm strengthened its global partnerships to offer clients seamless cross-border legal support.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements =
        gsap.utils.toArray<HTMLElement>(".about-reveal");

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".value-card",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 82%",
            once: true,
          },
        }
      );
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
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_48%,#74241f_100%)]
          pb-20
          pt-32
          md:pb-28
          md:pt-40
          lg:pb-32
        "
      >
        {/* Decorative 1985 */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-10
            top-10
            select-none
            font-display
            text-[140px]
            leading-none
            text-[#d4af4c]/[0.06]
            sm:text-[200px]
            lg:text-[290px]
          "
        >
          1985
        </div>

        {/* Soft glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[32%]
            top-[-250px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#d4af4c]/[0.035]
            blur-[110px]
          "
        />

        <div className="page-container relative z-10">
          <div className="about-reveal max-w-[900px]">

            <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#d4af4c]">
              
            </div>

            <h1 className="font-display text-[48px] font-normal leading-[1.04] tracking-[-0.03em] text-white sm:text-[58px] md:text-[70px] lg:text-[82px]">
              A Tradition of

              <span className="block text-[#d4af4c]">
                Legal Excellence.
              </span>
            </h1>

            {/* <p className="mt-8 max-w-[680px] text-[15px] leading-[1.9] text-white/80 md:text-[16px]">
              Established in 1985 Irfan &amp; Irfan Attorneys at Law has
              been a cornerstone of legal excellence in Pakistan and beyond.
            </p> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-20 md:py-28 lg:py-32">
        <div className="page-container">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* Left */}

            <div className="about-reveal">

              {/* <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9d352d]">
                Who We Are
              </div> */}

              <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[48px] lg:text-[58px]">
                Trusted by Clients

                <span className="block text-[#9d352d]">
                  Since 1985.
                </span>
              </h2>

              {/* <div className="mt-9">
                <p className="font-display text-[21px] leading-[1.5] text-[#32110f]">
                  Legal counsel built on integrity experience and dedicated
                  client care.
                </p>
              </div> */}
            </div>

            {/* Right */}

            <div className="about-reveal space-y-6 text-[18px] leading-[1.95] text-[#604b45]">

              <p>
                Established in 1985, Irfan & Irfan is legal advisor to many successful companies, corporations, authorities, entrepreneurs, business families and individuals. Our diverse practice areas cover and cater for our clients’ every legal need, be it personal or business related. Our client oriented approach and an effort to go beyond the obvious has over the years helped us cement relationships with clients besides adding illustrious names to our client base.
              </p>

              <p>
                We go the extra mile to ensure our presence and accessibility. Be it a multimedia presentation on a business or financial model, an across the table negotiation, a case in court or a personal family settlement, we are there when our clients need us. Our lawyers successfully represent clients in all major areas of law practice including corporate and business, e-commerce, taxation, securities, oil and gas, telecommunications, real estate, trademark and copyright, patent and technology, banking and civil litigation, constitutional petitions and issues unique to family-owned businesses.
              </p>

              <p>
                Many of the firm’s lawyers are recognized leaders in their respective fields and regularly share their expertise, insight and advice by serving as guest lecturers and keynote speakers for leading business and professional organizations. Our lawyers stay abreast of new developments in their respective areas of practice giving clients the confidence that their lawyers are prepared to advise and respond to new developments in the law that will affect their legal, business and personal matters.
              </p>

              <p>
                Our most important measure is our integrity and the manner in which we recognize and respond to our clients’ concerns. Our lawyers understand that solutions we offer to our clients must be practical and cost effective, hence, legal advice or litigation strategy is always client centered. The finest result of this work ethic and character has been our clients’ unconditional trust and unflinching loyalty. We at Irfan & Irfan are proud of our tradition of setting high professional standards for our clients’ benefit and our competitors’ emulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}

      <section className="bg-[#fffdf9] py-20 md:py-28">
        <div className="page-container">

          <div className="about-reveal mb-14 max-w-[750px]">

            <h2 className="font-display text-[42px] leading-[1.08] text-[#32110f] sm:text-[50px] lg:text-[60px]">
              Guided by Purpose.

              <span className="block text-[#9d352d]">
                Defined by Principles.
              </span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Mission */}

            <div className="about-reveal bg-[#f8f4ed] p-7 md:p-10 lg:p-12">

              

              <h3 className="mb-8 font-display text-[32px] text-[#32110f]">
                Mission
              </h3>

              <div className="space-y-5">
                {missionPoints.map((item, index) => (
                  <p
                    key={index}
                    className="text-[13px] leading-[1.85] text-[#604b45]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Vision */}

            <div className="about-reveal bg-[#f8f4ed] p-7 md:p-10 lg:p-12">

              <h3 className="mb-8 font-display text-[32px] text-[#32110f]">
                Vision
              </h3>

              <div className="space-y-5">
                {visionPoints.map((item, index) => (
                  <p
                    key={index}
                    className="text-[13px] leading-[1.85] text-[#604b45]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_50%,#74241f_100%)]
          py-20
          md:py-28
          lg:py-32
        "
      >
        <div className="page-container relative z-10">

          <div className="about-reveal mb-14 grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>

              

              <h2 className="font-display text-[42px] leading-[1.07] text-white sm:text-[50px] lg:text-[62px]">
               Core Values
              </h2>
            </div>

            {/* <p className="max-w-[500px] text-[14px] leading-[1.9] text-white/75 lg:ml-auto">
              We uphold high standards of ethical conduct ensuring our
              decisions reflect our commitment to professional responsibility
              and client service.
            </p> */}
          </div>

          <div className="values-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.title}
                className="
                  value-card
                  group
                  relative
                  min-h-[250px]
                  bg-[#74241f]/45
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#541915]/60
                  md:p-8
                "
              >
                <div className="flex h-full flex-col justify-center">

                  <h3 className="font-display text-[28px] text-white">
                    {value.title}
                  </h3>

                  <p className="mt-5 text-[13px] leading-[1.8] text-white/65 transition-colors group-hover:text-white/90">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDER
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-20 md:py-28 lg:py-32">
        <div className="page-container">

          {/* Section Heading */}

          <div className="about-reveal mb-12 md:mb-16">

            <h2 className="max-w-[800px] font-display text-[42px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[50px] lg:text-[60px]">
              The Legacy Behind

              <span className="block text-[#9d352d]">
                Irfan and Irfan.
              </span>
            </h2>
          </div>

          {/* Founder Card */}

          <div
            className="
              about-reveal
              grid
              overflow-hidden
              bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_48%,#74241f_100%)]
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >

            {/* Founder Image */}

            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[620px]">

              <img
                src="/images/farukh-irfan-khan.webp"
                alt="Justice (Retd.) Muhammad Farrukh Irfan Khan"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#74241f]/65
                  via-transparent
                  to-transparent
                  lg:bg-gradient-to-r
                  lg:from-transparent
                  lg:via-transparent
                  lg:to-[#74241f]/25
                "
              />

              {/* Established Badge */}

              
            </div>

            {/* Founder Information */}

            <div className="relative flex flex-col justify-center overflow-hidden p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16">

              {/* Decorative 1985 */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  top-5
                  select-none
                  font-display
                  text-[110px]
                  leading-none
                  text-[#d4af4c]/[0.06]
                  lg:text-[150px]
                "
              >
                1985
              </div>

              <div className="relative z-10">

                

                <h3 className="font-display text-[34px] leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[47px]">
                  Justice (Retd.)

                  <span className="mt-1 block text-[#d4af4c]">
                    Muhammad Farrukh Irfan Khan
                  </span>
                </h3>

                <div className="mt-8 space-y-5 text-[13px] leading-[1.9] text-white/75 md:text-[14px]">

                  <p>
                    Mr. Justice Farrukh Irfan Khan is currently one of our
                    partners and the most significant person of the firm who
                    has played an important role in building Irfan &amp; Irfan
                    to where it stands today.
                  </p>

                  <p>
                    He is an embodiment of integrity resilience and humility.
                    Mr. Khan has also served as a Justice of Lahore High Court
                    Punjab for a period of 10 years.
                  </p>

                  <p>
                    His decisions unveil his passion for upholding justice and
                    advocating for the rights of the neglected and the
                    persecuted not only from the national but also from the
                    international community.
                  </p>

                  <p>
                    His judgments are an epitome of perfection which
                    intellectually connects the reader to meet him through
                    words.
                  </p>
                </div>

                {/* Founder Statement */}

                <div className="mt-9">
                  <p className="font-display text-[18px] italic leading-[1.6] text-white/90">
                    A legacy founded on integrity justice and professional
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY TIMELINE
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_50%,#74241f_100%)]
          py-20
          md:py-28
          lg:py-32
        "
      >

        {/* Background 1985 */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-10
            top-10
            select-none
            font-display
            text-[140px]
            leading-none
            text-[#d4af4c]/[0.055]
            sm:text-[190px]
            lg:text-[260px]
          "
        >
          1985
        </div>

        <div className="page-container relative z-10">

          {/* Timeline Heading */}

          <div className="about-reveal mx-auto mb-16 max-w-[760px] text-center md:mb-20">

            

            <h2 className="font-display text-[42px] leading-[1.08] tracking-[-0.02em] text-white sm:text-[50px] lg:text-[60px]">
              Four Decades of

              <span className="block text-[#d4af4c]">
                Legal Excellence.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[14px] leading-[1.9] text-white/75">
              From its establishment in 1985 Irfan &amp; Irfan has continued
              to develop its practice while serving clients across a broad
              range of legal matters.
            </p>
          </div>

          {/* Timeline — Original Layout Without Lines / Dots / Icons */}

          <div className="relative mx-auto max-w-[1000px]">

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`
                  about-reveal
                  relative
                  grid
                  gap-6
                  md:grid-cols-2
                  ${index < timeline.length - 1 ? "pb-14 md:pb-16" : ""}
                `}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Year Left */}

                    <div className="md:pr-14 md:text-right">

                      <span className="font-display text-[44px] leading-none text-[#d4af4c] md:text-[52px]">
                        {item.year}
                      </span>
                    </div>

                    {/* Content Right */}

                    <div className="md:pl-14">

                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d4af4c]">
                        {item.label}
                      </p>

                      <h3 className="font-display text-[28px] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[380px] text-[13px] leading-[1.8] text-white/70">
                        {item.text}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content Left */}

                    <div className="md:pr-14 md:text-right">

                      <div className="md:ml-auto md:max-w-[380px]">

                        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d4af4c]">
                          {item.label}
                        </p>

                        <h3 className="font-display text-[28px] text-white">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[13px] leading-[1.8] text-white/70">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    {/* Year Right */}

                    <div className="md:pl-14">

                      <span className="font-display text-[44px] leading-none text-[#d4af4c] md:text-[52px]">
                        {item.year}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
        <div className="page-container">

          <div
            className="
              about-reveal
              grid
              overflow-hidden
              bg-[#9d352d]
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >

            <div className="p-8 sm:p-10 md:p-12 lg:p-14">

              

              <h2 className="max-w-[700px] font-display text-[36px] leading-[1.12] text-white sm:text-[43px] lg:text-[50px]">
                Experience. Integrity. Trusted Legal Counsel
              </h2>

            </div>

            <div className="p-8 sm:p-10 lg:p-12">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-between
                  gap-8
                  bg-[#d4af4c]
                  px-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#32110f]
                  transition-all
                  duration-300
                  hover:bg-[#e2c56f]
                  sm:w-auto
                  sm:min-w-[220px]
                "
              >
                Contact Our Team

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="
                    text-[#32110f]
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
      </section>
    </div>
  );
}