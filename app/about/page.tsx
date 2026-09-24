"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Scale,
  Eye,
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
  Award,
  MapPin,
  Globe2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Upholding the highest ethical standards in every action and decision.",
  },
  {
    number: "02",
    icon: Users,
    title: "Client-Centricity",
    description:
      "Placing our clients' needs at the heart of everything we strive to achieve.",
  },
  {
    number: "03",
    icon: Award,
    title: "Excellence",
    description:
      "Striving for accuracy, quality, and impactful legal outcomes.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Anticipating change and providing forward-thinking legal solutions.",
  },
  {
    number: "05",
    icon: Scale,
    title: "Responsibility",
    description:
      "Acting as responsible leaders and contributing positively to the legal profession and society.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Collaboration",
    description:
      "Working closely with clients and colleagues to achieve shared success.",
  },
];

const missionPoints = [
  "To apply our legal skills in helping our clients achieve their business and personal goals.",
  "To be a truly client-centered firm geared towards timely reactions and precise recommendations.",
  "To provide our clients with the highest levels of legal care by understanding, anticipating and responding to their full range of legal needs.",
  "To discharge our responsibility as leaders in our profession by acting with dedication and integrity and contributing to the public good.",
];

const visionPoints = [
  "To be recognized as a leading law firm in Pakistan and beyond, known for excellence, innovation and unwavering commitment to professional ethics and justice.",
  "To shape the future of legal practice by combining carefully cultivated expertise with forward-thinking strategies that create lasting impact for clients.",
  "To set benchmarks of professional integrity, ethical responsibility and transparency in every aspect of legal services.",
  "To contribute to strengthening the rule of law and fostering trust in legal institutions through advocacy, reform and thought leadership.",
];

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

        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[210px]
            -left-[180px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#d4af4c]/15
          "
        />

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
            <div className="mb-6 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#d4af4c]">
              <span className="h-px w-10 bg-[#d4af4c]" />
              About Our Firm
            </div>

            <h1 className="font-display text-[48px] font-normal leading-[1.04] tracking-[-0.03em] text-white sm:text-[58px] md:text-[70px] lg:text-[82px]">
              A Tradition of
              <span className="block text-[#d4af4c]">
                Legal Excellence.
              </span>
            </h1>

            <p className="mt-8 max-w-[680px] text-[15px] leading-[1.9] text-white/80 md:text-[16px]">
              Established in 1985, Irfan &amp; Irfan Attorneys at Law has
              been a cornerstone of legal excellence in Pakistan and beyond.
            </p>
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
              <div className="mb-5 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9d352d]">
                <span className="h-px w-9 bg-[#d4af4c]" />
                Who We Are
              </div>

              <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[48px] lg:text-[58px]">
                Serving Clients
                <span className="block text-[#9d352d]">
                  Since 1985.
                </span>
              </h2>

              <div className="mt-9 border-l-2 border-[#d4af4c] pl-6">
                <p className="font-display text-[21px] leading-[1.5] text-[#32110f]">
                  Legal counsel built on integrity, experience and dedicated
                  client care.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="about-reveal space-y-6 text-[14px] leading-[1.95] text-[#604b45]">
              <p>
                Established in 1985, Irfan &amp; Irfan Attorneys at Law has
                been a cornerstone of legal excellence in Pakistan and beyond.
                With offices in Lahore, Karachi, and Islamabad, we offer a
                comprehensive range of legal services tailored to meet the
                diverse needs of our clients.
              </p>

              <p>
                Our reputation for delivering innovative solutions and
                unparalleled client care has made us a trusted legal partner
                for corporations, entrepreneurs, and individuals alike.
              </p>

              <p>
                We go the extra mile to ensure our presence and accessibility.
                Whether the matter involves business negotiations, commercial
                transactions, court proceedings, regulatory issues or personal
                legal matters, our lawyers work to remain available when our
                clients need us.
              </p>

              <p>
                Our lawyers provide counsel across major areas of legal
                practice including corporate and business law, banking and
                finance, taxation, energy, telecommunications, real estate,
                intellectual property, technology, litigation and other
                commercial and regulatory matters.
              </p>

              <p>
                At the heart of our practice is integrity and the manner in
                which we recognize and respond to our clients&apos; concerns.
                We focus on practical and cost-effective legal solutions while
                maintaining high professional standards.
              </p>

              {/* Presence */}
              <div className="mt-10 grid grid-cols-1 border-l border-t border-[#32110f]/15 sm:grid-cols-3">
                {["Lahore", "Karachi", "Islamabad"].map((city) => (
                  <div
                    key={city}
                    className="
                      flex
                      items-center
                      gap-3
                      border-b
                      border-r
                      border-[#32110f]/15
                      px-5
                      py-5
                      transition-colors
                      duration-300
                      hover:bg-[#fffdf9]
                    "
                  >
                    <MapPin
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#9d352d]"
                    />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#32110f]">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
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
            <div className="mb-5 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9d352d]">
              <span className="h-px w-9 bg-[#d4af4c]" />
              Our Purpose
            </div>

            <h2 className="font-display text-[42px] leading-[1.08] text-[#32110f] sm:text-[50px] lg:text-[60px]">
              Guided by Purpose.
              <span className="block text-[#9d352d]">
                Defined by Principles.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-[#32110f]/15 lg:grid-cols-2">
            {/* Mission */}
            <div className="about-reveal border-b border-r border-[#32110f]/15 p-7 md:p-10 lg:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-[#9d352d]">
                <Scale
                  size={25}
                  strokeWidth={1.4}
                  className="text-[#d4af4c]"
                />
              </div>

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                Our Mission
              </p>

              <h3 className="mb-8 font-display text-[32px] text-[#32110f]">
                Delivering Legal Care with Purpose
              </h3>

              <div className="space-y-5">
                {missionPoints.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="mt-[9px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#d4af4c]" />

                    <p className="text-[13px] leading-[1.85] text-[#604b45]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="about-reveal border-b border-r border-[#32110f]/15 p-7 md:p-10 lg:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-[#74241f]">
                <Eye
                  size={25}
                  strokeWidth={1.4}
                  className="text-[#d4af4c]"
                />
              </div>

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                Our Vision
              </p>

              <h3 className="mb-8 font-display text-[32px] text-[#32110f]">
                Shaping the Future of Legal Practice
              </h3>

              <div className="space-y-5">
                {visionPoints.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="mt-[9px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#d4af4c]" />

                    <p className="text-[13px] leading-[1.85] text-[#604b45]">
                      {item}
                    </p>
                  </div>
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
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-[200px]
            -top-[200px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#d4af4c]/10
          "
        />

        <div className="page-container relative z-10">
          <div className="about-reveal mb-14 grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4af4c]">
                <span className="h-px w-9 bg-[#d4af4c]" />
                Company Core Values
              </div>

              <h2 className="font-display text-[42px] leading-[1.07] text-white sm:text-[50px] lg:text-[62px]">
                Principles That
                <span className="block text-[#d4af4c]">
                  Guide Our Practice.
                </span>
              </h2>
            </div>

            <p className="max-w-[500px] text-[14px] leading-[1.9] text-white/75 lg:ml-auto">
              We uphold high standards of ethical conduct, ensuring our
              decisions reflect our commitment to professional responsibility
              and client service.
            </p>
          </div>

          <div className="values-grid grid grid-cols-1 border-l border-t border-white/15 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="
                    value-card
                    group
                    relative
                    min-h-[285px]
                    border-b
                    border-r
                    border-white/15
                    p-7
                    transition-all
                    duration-500
                    hover:bg-[#541915]/45
                    md:p-8
                  "
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/45">
                      {value.number}
                    </span>

                    <Icon
                      size={24}
                      strokeWidth={1.3}
                      className="text-[#d4af4c]"
                    />
                  </div>

                  <div className="mt-14">
                    <h3 className="font-display text-[28px] text-white">
                      {value.title}
                    </h3>

                    <div className="my-5 h-px w-9 bg-[#d4af4c] transition-all duration-500 group-hover:w-16" />

                    <p className="text-[13px] leading-[1.8] text-white/65 transition-colors group-hover:text-white/90">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
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
            <div className="mb-5 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9d352d]">
              <span className="h-px w-9 bg-[#d4af4c]" />
              The Founder
            </div>

            <h2 className="max-w-[800px] font-display text-[42px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[50px] lg:text-[60px]">
              The Legacy Behind
              <span className="block text-[#9d352d]">
                Irfan &amp; Irfan.
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
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  border
                  border-[#d4af4c]/35
                  bg-[#74241f]/85
                  px-5
                  py-4
                  backdrop-blur-md
                  sm:bottom-8
                  sm:left-8
                "
              >
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d4af4c]">
                  Firm Established
                </span>

                <span className="mt-1 block font-display text-[30px] leading-none text-white">
                  1985
                </span>
              </div>
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
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af4c]">
                  Founder · Irfan &amp; Irfan Attorneys at Law
                </p>

                <h3 className="font-display text-[34px] leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[47px]">
                  Justice (Retd.)
                  <span className="mt-1 block text-[#d4af4c]">
                    Muhammad Farrukh Irfan Khan
                  </span>
                </h3>

                <div className="my-8 h-px w-16 bg-[#d4af4c]" />

                <div className="space-y-5 text-[13px] leading-[1.9] text-white/75 md:text-[14px]">
                  <p>
                    Mr. Justice Farrukh Irfan Khan is currently one of our
                    partners and the most significant person of the firm who
                    has played an important role in building Irfan &amp; Irfan
                    to where it stands today.
                  </p>

                  <p>
                    He is an embodiment of integrity, resilience and humility.
                    Mr. Khan has also served as a Justice of Lahore High Court,
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

                {/* Quote */}
                <div className="mt-9 border-l-2 border-[#d4af4c] pl-5">
                  <p className="font-display text-[18px] italic leading-[1.6] text-white/90">
                    A legacy founded on integrity, justice and professional
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
          <div className="about-reveal mx-auto mb-16 max-w-[760px] text-center md:mb-20">
            <div className="mb-5 flex items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4af4c]">
              <span className="h-px w-9 bg-[#d4af4c]" />
              Company Timeline
              <span className="h-px w-9 bg-[#d4af4c]" />
            </div>

            <h2 className="font-display text-[42px] leading-[1.08] tracking-[-0.02em] text-white sm:text-[50px] lg:text-[60px]">
              Four Decades of
              <span className="block text-[#d4af4c]">
                Legal Excellence.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[14px] leading-[1.9] text-white/75">
              From its establishment in 1985, Irfan &amp; Irfan has continued
              to develop its practice while serving clients across a broad
              range of legal matters.
            </p>
          </div>

          <div className="relative mx-auto max-w-[1000px]">
            {/* Desktop vertical line */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#d4af4c]/25 md:block" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`
                  about-reveal
                  relative
                  grid
                  gap-6
                  border-l
                  border-[#d4af4c]/25
                  pl-8
                  md:grid-cols-2
                  md:border-l-0
                  md:pl-0
                  ${index < timeline.length - 1 ? "pb-14 md:pb-16" : ""}
                `}
              >
                {/* Timeline dot */}
                <div
                  className="
                    absolute
                    -left-[7px]
                    top-2
                    h-[13px]
                    w-[13px]
                    rounded-full
                    border-[3px]
                    border-[#8b2d27]
                    bg-[#d4af4c]
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                />

                {index % 2 === 0 ? (
                  <>
                    <div className="md:pr-14 md:text-right">
                      <span className="font-display text-[44px] leading-none text-[#d4af4c] md:text-[52px]">
                        {item.year}
                      </span>
                    </div>

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
                    <div className="md:pr-14 md:text-right">
                      <div className="md:ml-auto md:max-w-[380px]">
                        {item.year === "2019" && (
                          <div className="mb-4 flex md:justify-end">
                            <Globe2
                              size={23}
                              strokeWidth={1.3}
                              className="text-[#d4af4c]"
                            />
                          </div>
                        )}

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
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4af4c]">
                Speak With Our Team
              </p>

              <h2 className="max-w-[700px] font-display text-[36px] leading-[1.12] text-white sm:text-[43px] lg:text-[50px]">
                Looking for experienced legal counsel?
              </h2>

              <p className="mt-5 max-w-[590px] text-[13px] leading-[1.85] text-white/75">
                Contact Irfan &amp; Irfan to discuss your legal requirements
                with our team.
              </p>
            </div>

            <div className="border-t border-white/15 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
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