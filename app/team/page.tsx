"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { attorneys } from "@/data/attorneys";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".team-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
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
        {/* Background Word */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-8
            top-10
            select-none
            font-display
            text-[95px]
            leading-none
            text-[#d4af4c]/[0.055]
            sm:text-[145px]
            md:text-[190px]
            lg:text-[235px]
          "
        >
          PEOPLE
        </div>

        {/* Soft Highlight */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[35%]
            top-[-220px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#d4af4c]/[0.035]
            blur-[100px]
          "
        />

        <div className="page-container relative z-10">
          <div className="team-reveal max-w-[900px]">
            <h1 className="font-display text-[48px] font-normal leading-[1.04] tracking-[-0.03em] text-white sm:text-[58px] md:text-[70px] lg:text-[82px]">
              Our

              <span className="block text-[#d4af4c]">
                Lawyers.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-16 md:py-20 lg:py-24">
        <div className="page-container">
          <div className="team-reveal grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">

            <div>
              <h2 className="font-display text-[39px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[48px] lg:text-[58px]">
                Experience Across

                <span className="block text-[#9d352d]">
                  Legal Disciplines.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[650px] text-[14px] leading-[1.95] text-[#604b45]">
                Our lawyers work across a broad range of legal disciplines and
                bring together experience in advisory transactional regulatory
                and dispute-related matters.
              </p>

              <p className="mt-7 font-display text-[17px] leading-[1.55] text-[#32110f]">
                Professional experience. Client-focused legal counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LAWYERS
      ====================================================== */}

      <section className="bg-[#fffdf9] py-20 md:py-28 lg:py-32">
        <div className="page-container">

          {/* =================================================
              LAWYERS GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-x-7
              gap-y-14
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {attorneys.map((attorney) => (
              <article
                key={attorney.id}
                className="team-reveal group min-w-0"
              >
                <Link
                  href={`/team/${attorney.id}`}
                  className="block"
                >

                  {/* =========================================
                      LAWYER IMAGE
                  ========================================== */}

                  <div
                    className="
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      bg-[#eee8df]
                    "
                  >
                    {attorney.image ? (
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          object-top
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:scale-[1.025]
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
                          bg-gradient-to-br
                          from-[#eee8df]
                          to-[#ded4c8]
                        "
                      >
                        <span
                          className="
                            font-display
                            text-[72px]
                            font-normal
                            text-[#9d352d]/45
                          "
                        >
                          {attorney.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Normal Image Shadow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-[40%]
                        bg-gradient-to-t
                        from-[#32110f]/45
                        via-[#32110f]/10
                        to-transparent
                        transition-opacity
                        duration-500
                        group-hover:opacity-0
                      "
                    />

                    {/* =========================================
                        DESKTOP HOVER
                    ========================================== */}

                    <div
                      className="
                        absolute
                        inset-0
                        z-20
                        hidden
                        flex-col
                        justify-end
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        lg:flex
                      "
                    >
                      {/* Light transparent overlay */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[#32110f]/60
                        "
                      />

                      {/* Stronger bottom shadow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-0
                          bottom-0
                          h-[78%]
                          bg-gradient-to-t
                          from-[#32110f]/90
                          via-[#74241f]/58
                          to-transparent
                        "
                      />

                      {/* Subtle burgundy tint */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[#9d352d]/10
                        "
                      />

                      {/* =====================================
                          CONTENT
                      ====================================== */}

                      <div
                        className="
                          relative
                          z-10
                          p-5
                          xl:p-6
                        "
                      >
                        {/* Expertise Heading */}

                        <p
                          className="
                            mb-3
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#d4af4c]
                          "
                        >
                          Expertise
                        </p>

                        {/* Maximum 6 Expertise */}

                        {attorney.specialization.length > 0 ? (
                          <div className="space-y-2">
                            {attorney.specialization
                              .slice(0, 6)
                              .map((item, itemIndex) => (
                                <div
                                  key={`${attorney.id}-${itemIndex}`}
                                  className="min-w-0"
                                >
                                  <span
                                    title={item}
                                    className="
                                      line-clamp-1
                                      min-w-0
                                      text-[10px]
                                      font-medium
                                      leading-[1.4]
                                      text-white
                                      xl:text-[11px]
                                    "
                                  >
                                    {item}
                                  </span>
                                </div>
                              ))}
                          </div>
                        ) : (
                          <p className="text-[11px] leading-[1.6] text-white/80">
                            Professional profile available.
                          </p>
                        )}

                        {/* =====================================
                            READ MORE
                        ====================================== */}

                        <div className="mt-5">
                          <span
                            className="
                              block
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.16em]
                              text-[#d4af4c]
                            "
                          >
                            Read More
                          </span>

                          {attorney.specialization.length > 6 && (
                            <span
                              className="
                                mt-1
                                block
                                text-[8px]
                                font-medium
                                tracking-[0.05em]
                                text-white/70
                              "
                            >
                              Additional areas of expertise
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================
                      LAWYER INFORMATION
                  ========================================== */}

                  <div className="pb-7 pt-6">

                    {/* Name */}

                    <h3
                      className="
                        font-display
                        text-[23px]
                        leading-[1.18]
                        text-[#32110f]
                        transition-colors
                        duration-300
                        group-hover:text-[#9d352d]
                        xl:text-[24px]
                      "
                    >
                      {attorney.name}
                    </h3>

                    {/* Role */}

                    {attorney.role && (
                      <p
                        className="
                          mt-2
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#9d352d]
                        "
                      >
                        {attorney.role}
                      </p>
                    )}

                    {/* Admission + Languages */}

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {attorney.admissionYear && (
                        <span className="text-[10px] text-[#604b45]">
                          Bar {attorney.admissionYear}
                        </span>
                      )}

                      {attorney.languages &&
                        attorney.languages.length > 0 && (
                          <span className="text-[10px] text-[#604b45]">
                            {attorney.languages.slice(0, 2).join(", ")}
                          </span>
                        )}
                    </div>

                    {/* =========================================
                        MOBILE / TABLET EXPERTISE
                    ========================================== */}

                    {attorney.specialization.length > 0 && (
                      <div className="mt-5 lg:hidden">
                        <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9d352d]">
                          Expertise
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                          {attorney.specialization
                            .slice(0, 3)
                            .map((item, itemIndex) => (
                              <span
                                key={`${attorney.id}-mobile-${itemIndex}`}
                                className="
                                  text-[9px]
                                  leading-[1.4]
                                  text-[#604b45]
                                "
                              >
                                {item}
                              </span>
                            ))}
                        </div>

                        {attorney.specialization.length > 3 && (
                          <p className="mt-3 text-[8px] font-medium uppercase tracking-[0.12em] text-[#79665e]">
                            Additional areas of expertise
                          </p>
                        )}
                      </div>
                    )}

                    {/* View Profile */}

                    <span
                      className="
                        mt-6
                        inline-flex
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#9d352d]
                        transition-colors
                        duration-300
                        group-hover:text-[#32110f]
                      "
                    >
                      View Profile
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          <div
            className="
              team-reveal
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
                Need assistance with a legal matter?
              </h2>

              <p className="mt-5 max-w-[600px] text-[13px] leading-[1.85] text-white/75">
                Contact Irfan &amp; Irfan to discuss your legal requirements
                with our team.
              </p>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <Link
                href="/contact"
                className="
                  inline-flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-center
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}