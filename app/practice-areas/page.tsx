"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Scale,
  ChevronDown,
  Users,
  BriefcaseBusiness,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { practiceAreas } from "@/data/practice-areas";
import { attorneys } from "@/data/attorneys";
import { getPracticeAreaIcon } from "@/lib/practice-area-icons";

gsap.registerPlugin(ScrollTrigger);

export default function PracticeAreasPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const [selectedPracticeId, setSelectedPracticeId] = useState<string>(
    practiceAreas[0]?.id ?? ""
  );

  /* =========================================================
     SELECTED PRACTICE
  ========================================================= */

  const selectedPractice = useMemo(() => {
    return (
      practiceAreas.find((area) => area.id === selectedPracticeId) ??
      practiceAreas[0]
    );
  }, [selectedPracticeId]);

  /* =========================================================
     RELEVANT LAWYERS
  ========================================================= */

  const relevantLawyers = useMemo(() => {
    if (!selectedPractice) return [];

    return selectedPractice.lawyers
      .map((lawyerId) =>
        attorneys.find((attorney) => attorney.id === lawyerId)
      )
      .filter(
        (attorney): attorney is (typeof attorneys)[number] =>
          Boolean(attorney)
      );
  }, [selectedPractice]);

  /* =========================================================
     PAGE ANIMATIONS
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealElements =
        gsap.utils.toArray<HTMLElement>(".practice-reveal");

      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
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
        gsap.utils.toArray<HTMLElement>(".practice-select-card");

      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     DETAILS CHANGE ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!detailsRef.current) return;

    gsap.fromTo(
      detailsRef.current,
      {
        y: 18,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, [selectedPracticeId]);

  /* =========================================================
     CARD CLICK
  ========================================================= */

  const handlePracticeClick = (practiceId: string) => {
    setSelectedPracticeId(practiceId);

    window.setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

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
        {/* Decorative Text */}

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

        {/* Decorative Circle */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-44
            -left-44
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#d4af4c]/15
          "
        />

        <div className="page-container relative z-10">
          <div className="practice-reveal max-w-[930px]">
            <div
              className="
                mb-6
                flex
                items-center
                gap-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#d4af4c]
              "
            >
              <span className="h-px w-10 bg-[#d4af4c]" />

              Our Legal Expertise
            </div>

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

            <p
              className="
                mt-8
                max-w-[690px]
                text-[14px]
                leading-[1.9]
                text-white/60

                md:text-[16px]
              "
            >
              Irfan &amp; Irfan Attorneys at Law provides legal counsel
              across a broad range of practice areas, combining decades of
              experience with practical and forward-thinking legal solutions.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-16 md:py-20 lg:py-24">
        <div className="page-container">
          <div
            className="
              practice-reveal
              grid
              gap-10

              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-end
              lg:gap-20
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
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#9d352d]
                "
              >
                <span className="h-px w-9 bg-[#d4af4c]" />

                What We Do
              </div>

              <h2
                className="
                  font-display
                  text-[39px]
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-[#32110f]

                  sm:text-[48px]
                  lg:text-[58px]
                "
              >
                Comprehensive

                <span className="block text-[#9d352d]">
                  Legal Counsel.
                </span>
              </h2>
            </div>

            {/* Right */}

            <div>
              <p
                className="
                  max-w-[650px]
                  text-[14px]
                  leading-[1.95]
                  text-[#604b45]
                "
              >
                Our lawyers advise corporations, businesses, entrepreneurs
                and individuals across complex legal and regulatory matters.
                We work closely with our clients to understand their objectives
                and provide focused legal strategies suited to their
                requirements.
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-4
                  border-l-2
                  border-[#d4af4c]
                  pl-5
                "
              >
                <Scale
                  size={22}
                  strokeWidth={1.3}
                  className="flex-shrink-0 text-[#9d352d]"
                />

                <p
                  className="
                    font-display
                    text-[17px]
                    leading-[1.55]
                    text-[#32110f]
                  "
                >
                  Experience. Integrity. Strategic legal solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRACTICE AREA CARDS
      ====================================================== */}

      <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          {/* Heading */}

          <div
            className="
              practice-reveal
              mb-12
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
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
                Areas of Practice
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
                Select an Area of

                <span className="block text-[#9d352d]">
                  Legal Practice.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[430px]
                text-[13px]
                leading-[1.9]
                text-[#79665e]
              "
            >
              Select a practice area to view our capabilities and the lawyers
              whose profiles identify experience relevant to that field.
            </p>
          </div>

          {/* =================================================
              PRACTICE SELECTOR CARDS
          ================================================== */}

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
            {practiceAreas.map((area, index) => {
              const active = selectedPracticeId === area.id;
              const AreaIcon = getPracticeAreaIcon(area.icon);

              return (
                <button
                  key={area.id}
                  id={`card-${area.id}`}
                  type="button"
                  onClick={() => handlePracticeClick(area.id)}
                  aria-pressed={active}
                  className={`
                    practice-select-card
                    group
                    relative
                    flex
                    min-h-[168px]
                    w-full
                    flex-col
                    justify-between
                    overflow-hidden
                    border
                    p-6
                    text-left
                    transition-all
                    duration-300

                    hover:-translate-y-1

                    ${
                      active
                        ? "border-[#9d352d] bg-white shadow-[0_20px_45px_rgba(50,17,15,0.14)]"
                        : "border-[#32110f]/12 bg-[#fffdf9] hover:border-[#9d352d] hover:bg-[#9d352d] hover:shadow-[0_20px_45px_rgba(50,17,15,0.20)]"
                    }
                  `}
                >
                  {/* Gold left accent — solid when selected, sweeps in on hover otherwise */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[3px]
                      bg-[#d4af4c]
                      transition-transform
                      duration-300
                      ${
                        active
                          ? "scale-y-100"
                          : "origin-top scale-y-0 group-hover:scale-y-100"
                      }
                    `}
                  />

                  {/* Icon row */}

                  <div className="flex items-start justify-between">
                    <span
                      className={`
                        flex
                        h-11
                        w-11
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-colors
                        duration-300

                        ${
                          active
                            ? "border-[#9d352d] text-[#9d352d]"
                            : "border-[#32110f]/15 text-[#9d352d]/70 group-hover:border-white/50 group-hover:text-white"
                        }
                      `}
                    >
                      <AreaIcon size={19} strokeWidth={1.4} />
                    </span>

                    <span
                      className={`
                        text-[10px]
                        font-semibold
                        tracking-[0.18em]
                        transition-colors
                        duration-300

                        ${
                          active
                            ? "text-[#d4af4c]"
                            : "text-[#32110f]/25 group-hover:text-[#d4af4c]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + short description */}

                  <div className="mt-8">
                    <h3
                      className={`
                        font-display
                        text-[19px]
                        leading-[1.2]
                        transition-colors
                        duration-300

                        ${
                          active
                            ? "text-[#9d352d]"
                            : "text-[#32110f] group-hover:text-white"
                        }
                      `}
                    >
                      {area.title}
                    </h3>

                    <p
                      className={`
                        mt-2
                        line-clamp-2
                        text-[11.5px]
                        leading-[1.6]
                        transition-colors
                        duration-300

                        ${
                          active
                            ? "text-[#604b45]"
                            : "text-[#79665e] group-hover:text-white/75"
                        }
                      `}
                    >
                      {area.shortDescription}
                    </p>
                  </div>

                  {/* Footer row */}

                  <div
                    className={`
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      pt-4
                      transition-colors
                      duration-300

                      ${
                        active
                          ? "border-[#32110f]/10"
                          : "border-[#32110f]/10 group-hover:border-white/20"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        transition-colors
                        duration-300

                        ${
                          active
                            ? "text-[#9d352d]"
                            : "text-[#79665e] group-hover:text-white"
                        }
                      `}
                    >
                      {active ? "Currently Viewing" : "View Details"}
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className={`
                        flex-shrink-0
                        transition-all
                        duration-300

                        ${
                          active
                            ? "translate-x-0 text-[#d4af4c]"
                            : "-translate-x-1 text-[#79665e] group-hover:translate-x-0 group-hover:text-[#d4af4c]"
                        }
                      `}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED PRACTICE DETAILS
      ====================================================== */}

      {selectedPractice && (
        <section
          ref={detailsRef}
          id={selectedPractice.id}
          className="
            scroll-mt-24
            bg-[#f8f4ed]
            py-20

            md:py-24
            lg:py-28
          "
        >
          <div className="page-container">
            {/* =================================================
                PRACTICE INFORMATION
            ================================================== */}

            <div
              className="
                grid
                gap-10

                lg:grid-cols-[0.75fr_1.25fr]
                lg:gap-16

                xl:gap-24
              "
            >
              {/* LEFT */}

              <div>
                <div
                  className="
                    sticky
                    top-28
                  "
                >
                  <div
                    className="
                      mb-6
                      flex
                      items-center
                      gap-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#9d352d]
                    "
                  >
                    <span className="h-px w-10 bg-[#d4af4c]" />

                    Selected Practice
                  </div>

                  <div
                    className="
                      mb-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d4af4c]
                      text-[#9d352d]
                    "
                  >
                    <BriefcaseBusiness
                      size={23}
                      strokeWidth={1.25}
                    />
                  </div>

                  <h2
                    className="
                      max-w-[500px]
                      font-display
                      text-[39px]
                      leading-[1.08]
                      tracking-[-0.02em]
                      text-[#32110f]

                      sm:text-[46px]
                      lg:text-[52px]
                    "
                  >
                    {selectedPractice.title}
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-[430px]
                      text-[14px]
                      leading-[1.85]
                      text-[#9d352d]
                    "
                  >
                    {selectedPractice.shortDescription}
                  </p>

                  <Link
                    href="/contact"
                    className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#9d352d]
                    "
                  >
                    Discuss This Practice

                    <span
                      className="
                        flex
                        h-9
                        w-9
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
                        size={15}
                        strokeWidth={1.5}
                        className="
                          text-[#d4af4c]
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </span>
                  </Link>
                </div>
              </div>

              {/* RIGHT */}

              <div>
                {/* Full Description */}

                <div
                  className="
                    border-l-2
                    border-[#d4af4c]
                    pl-6

                    md:pl-8
                  "
                >
                  <p
                    className="
                      text-[15px]
                      leading-[2]
                      text-[#604b45]

                      md:text-[16px]
                    "
                  >
                    {selectedPractice.fullDescription}
                  </p>
                </div>

                {/* Expertise */}

                <div className="mt-12">
                  <div
                    className="
                      mb-7
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#9d352d]
                      "
                    >
                      Our Expertise Includes
                    </p>

                    <span className="h-px flex-1 bg-[#32110f]/15" />
                  </div>

                  <div
                    className="
                      grid
                      border-l
                      border-t
                      border-[#32110f]/15

                      sm:grid-cols-2
                    "
                  >
                    {selectedPractice.expertise.map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          min-h-[65px]
                          items-center
                          gap-3
                          border-b
                          border-r
                          border-[#32110f]/15
                          bg-[#fffdf9]
                          px-5
                          py-4
                        "
                      >
                        <span
                          className="
                            flex
                            h-[20px]
                            w-[20px]
                            flex-shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#d4af4c]
                          "
                        >
                          <Check
                            size={11}
                            strokeWidth={2}
                            className="text-[#9d352d]"
                          />
                        </span>

                        <span
                          className="
                            text-[12px]
                            leading-[1.6]
                            text-[#604b45]
                          "
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                LAWYERS
            ================================================== */}

            <div
              className="
                mt-20
                border-t
                border-[#32110f]/15
                pt-14

                md:mt-24
                md:pt-16
              "
            >
              {/* Heading */}

              <div
                className="
                  mb-10
                  flex
                  flex-col
                  gap-5

                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >
                <div>
                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      gap-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#9d352d]
                    "
                  >
                    <Users
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#d4af4c]"
                    />

                    Relevant Lawyers
                  </div>

                  <h3
                    className="
                      font-display
                      text-[34px]
                      leading-[1.1]
                      text-[#32110f]

                      sm:text-[42px]
                      lg:text-[48px]
                    "
                  >
                    Lawyers for

                    <span className="block text-[#9d352d]">
                      {selectedPractice.title}
                    </span>
                  </h3>
                </div>

                {relevantLawyers.length > 0 && (
                  <p
                    className="
                      max-w-[420px]
                      text-[12px]
                      leading-[1.8]
                      text-[#79665e]
                    "
                  >
                    Select a lawyer to view their professional profile,
                    experience and areas of practice.
                  </p>
                )}
              </div>

              {/* ===============================================
                  LAWYER CARDS
              ================================================ */}

              {relevantLawyers.length > 0 ? (
                <div
                  className="
                    grid
                    gap-5

                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                  "
                >
                  {relevantLawyers.map((lawyer) => (
                    <Link
                      key={lawyer.id}
                      href={`/team/${lawyer.id}`}
                      className="
                        group
                        relative
                        overflow-hidden
                        border
                        border-[#32110f]/15
                        bg-[#fffdf9]
                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-[#d4af4c]
                        hover:shadow-[0_18px_45px_rgba(50,17,15,0.09)]
                      "
                    >
                      {/* =======================================
                          LAWYER IMAGE
                      ======================================== */}

                      <div
                        className="
                          relative
                          aspect-[4/4.7]
                          overflow-hidden
                          bg-[#eee7df]
                        "
                      >
                        {lawyer.image ? (
                          <img
                            src={lawyer.image}
                            alt={lawyer.name}
                            className="
                              h-full
                              w-full
                              object-cover
                              object-top
                              transition-transform
                              duration-700

                              group-hover:scale-[1.035]
                            "
                          />
                        ) : (
                          <div
                            className="
                              flex
                              h-full
                              w-full
                              items-center
                              justify-center
                              bg-[#32110f]
                            "
                          >
                            <Scale
                              size={42}
                              strokeWidth={1}
                              className="text-[#d4af4c]"
                            />
                          </div>
                        )}

                        {/* Image Gradient */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#32110f]/60
                            via-transparent
                            to-transparent
                          "
                        />

                        {/* View Profile Icon */}

                        <div
                          className="
                            absolute
                            bottom-4
                            right-4
                            flex
                            h-10
                            w-10
                            translate-y-2
                            items-center
                            justify-center
                            bg-[#d4af4c]
                            text-[#32110f]
                            opacity-0
                            transition-all
                            duration-300

                            group-hover:translate-y-0
                            group-hover:opacity-100
                          "
                        >
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.6}
                          />
                        </div>
                      </div>

                      {/* =======================================
                          LAWYER DETAILS
                      ======================================== */}

                      <div className="p-5 sm:p-6">
                        <p
                          className="
                            mb-2
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.17em]
                            text-[#9d352d]
                          "
                        >
                          {lawyer.role}
                        </p>

                        <h4
                          className="
                            font-display
                            text-[23px]
                            leading-[1.12]
                            text-[#32110f]
                            transition-colors
                            duration-300

                            group-hover:text-[#9d352d]
                          "
                        >
                          {lawyer.name}
                        </h4>

                        <div
                          className="
                            mt-5
                            flex
                            items-center
                            gap-3
                            border-t
                            border-[#32110f]/10
                            pt-4
                          "
                        >
                          <span
                            className="
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.16em]
                              text-[#79665e]
                            "
                          >
                            View Profile
                          </span>

                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.6}
                            className="
                              text-[#d4af4c]
                              transition-transform
                              duration-300

                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                            "
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                /* =============================================
                    NO SPECIFIC LAWYER MAPPING
                ============================================== */

                <div
                  className="
                    grid
                    gap-7
                    border
                    border-[#32110f]/15
                    bg-[#fffdf9]
                    p-7

                    sm:p-9

                    md:grid-cols-[auto_1fr_auto]
                    md:items-center
                    md:p-10
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      border
                      border-[#d4af4c]
                    "
                  >
                    <Scale
                      size={24}
                      strokeWidth={1.3}
                      className="text-[#9d352d]"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        font-display
                        text-[24px]
                        leading-[1.2]
                        text-[#32110f]
                      "
                    >
                      Speak with our legal team
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-[650px]
                        text-[13px]
                        leading-[1.8]
                        text-[#79665e]
                      "
                    >
                      This is an established practice of Irfan &amp; Irfan.
                      The supplied lawyer profiles do not identify a specific
                      individual specialization for this area. Contact the firm
                      and our team can direct your matter appropriately.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="
                      group
                      inline-flex
                      min-h-[50px]
                      items-center
                      justify-between
                      gap-5
                      bg-[#9d352d]
                      px-6
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white
                      transition-colors
                      duration-300

                      hover:bg-[#32110f]
                    "
                  >
                    Contact Us

                    <ArrowUpRight
                      size={15}
                      className="text-[#d4af4c]"
                    />
                  </Link>
                </div>
              )}
            </div>

            {/* =================================================
                BACK TO PRACTICES
            ================================================== */}

            <div
              className="
                mt-14
                flex
                justify-center
                border-t
                border-[#32110f]/15
                pt-8
              "
            >
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById(`card-${selectedPractice.id}`)
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#9d352d]
                "
              >
                <ChevronDown
                  size={15}
                  strokeWidth={1.5}
                  className="
                    rotate-180
                    text-[#d4af4c]
                    transition-transform
                    duration-300

                    group-hover:-translate-y-1
                  "
                />

                Select Another Practice Area
              </button>
            </div>
          </div>
        </section>
      )}

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
        {/* Background 1985 */}

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
            {/* Left */}

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
                Our Approach
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

            {/* Right */}

            <div>
              <p
                className="
                  text-[14px]
                  leading-[1.95]
                  text-white/60
                "
              >
                Every legal matter presents its own challenges. Our approach
                begins with understanding the client&apos;s objectives,
                identifying the legal and commercial issues involved, and
                developing a focused strategy for the matter at hand.
              </p>

              <div
                className="
                  mt-8
                  grid
                  border-l
                  border-t
                  border-white/15

                  sm:grid-cols-3
                "
              >
                {[
                  "Strategic Counsel",
                  "Client Focus",
                  "Professional Integrity",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      border-b
                      border-r
                      border-white/15
                      px-5
                      py-5
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-white/70
                      "
                    >
                      {item}
                    </span>
                  </div>
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
              overflow-hidden
              bg-[#9d352d]

              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            {/* Content */}

            <div className="p-8 sm:p-10 md:p-12 lg:p-14">
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#d4af4c]
                "
              >
                Legal Assistance
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

              <p
                className="
                  mt-5
                  max-w-[600px]
                  text-[13px]
                  leading-[1.85]
                  text-white/65
                "
              >
                Contact our team to discuss your legal requirements and
                determine how Irfan &amp; Irfan can assist you.
              </p>
            </div>

            {/* Button */}

            <div
              className="
                border-t
                border-white/15
                p-8

                sm:p-10

                lg:border-l
                lg:border-t-0
                lg:p-12
              "
            >
              <Link
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
                Contact Our Team

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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}