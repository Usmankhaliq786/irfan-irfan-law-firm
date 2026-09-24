"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { memberOrganizations } from "@/data/members";

gsap.registerPlugin(ScrollTrigger);

export default function MembersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  /* =====================================================
     RESPONSIVE ITEMS
  ====================================================== */
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  /* =====================================================
     SCROLL ANIMATION
  ====================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".members-reveal",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     MAX INDEX
  ====================================================== */
  const maxIndex = Math.max(
    0,
    memberOrganizations.length - itemsPerView
  );

  /* =====================================================
     NEXT SLIDE
  ====================================================== */
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* =====================================================
     PREVIOUS SLIDE
  ====================================================== */
  const previousSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  /* =====================================================
     AUTO PLAY
  ====================================================== */
  useEffect(() => {
    if (memberOrganizations.length <= itemsPerView) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [itemsPerView, maxIndex]);

  /* =====================================================
     KEEP INDEX VALID AFTER RESIZE
  ====================================================== */
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fffdf9] py-20 md:py-24 lg:py-28"
    >
      {/* Decorative Background Text */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          top-6
          select-none
          font-display
          text-[100px]
          leading-none
          text-[#32110f]/[0.025]
          md:text-[150px]
          lg:text-[190px]
        "
      >
        MEMBERS
      </div>

      <div className="page-container relative z-10">

        {/* =================================================
            SECTION HEADER
        ================================================== */}
        <div
          className="
            members-reveal
            mb-12
            grid
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
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
              Professional Associations
            </div>

            <h2
              className="
                font-display
                text-[40px]
                leading-[1.06]
                tracking-[-0.02em]
                text-[#32110f]
                sm:text-[48px]
                lg:text-[58px]
              "
            >
              Members
              <span className="text-[#9d352d]"> Of.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 lg:items-end">
            <p
              className="
                max-w-[570px]
                text-[13px]
                leading-[1.9]
                text-[#604b45]
                md:text-[14px]
              "
            >
              Professional memberships and associations connected with
              the legal and commercial practice of Irfan &amp; Irfan
              Attorneys at Law.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous membership"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  border-[#9d352d]/25
                  bg-transparent
                  text-[#9d352d]
                  transition-all
                  duration-300
                  hover:border-[#9d352d]
                  hover:bg-[#9d352d]
                  hover:text-white
                "
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-0.5
                  "
                />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next membership"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  bg-[#9d352d]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#32110f]
                "
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================== */}
        <div className="members-reveal relative">
          <div className="overflow-hidden">
            <div
              className="
                flex
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {memberOrganizations.map((member) => (
                <div
                  key={member.id}
                  className="flex-none px-2 sm:px-3 lg:px-3"
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                >
                  {/* =========================================
                      MEMBER CARD
                  ========================================== */}
                  <article
                    className="
                      group
                      relative
                      flex
                      min-h-[270px]
                      h-full
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      border
                      border-[#32110f]/10
                      bg-white
                      px-6
                      py-8
                      text-center
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-[#d4af4c]
                      hover:shadow-[0_20px_55px_rgba(50,17,15,0.09)]
                    "
                  >
                    {/* Gold Hover Line */}
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        h-[3px]
                        w-0
                        bg-[#d4af4c]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                    {/* =========================================
                        LOGO
                    ========================================== */}
                    <div
                      className="
                        flex
                        h-[145px]
                        w-full
                        items-center
                        justify-center
                      "
                    >
                      <div
                        className="
                          relative
                          flex
                          h-full
                          w-full
                          items-center
                          justify-center
                        "
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="
                            max-h-[120px]
                            max-w-[190px]
                            object-contain
                            transition-transform
                            duration-500
                            group-hover:scale-[1.06]
                          "
                          onError={(event) => {
                            event.currentTarget.style.display = "none";

                            const fallback =
                              event.currentTarget
                                .nextElementSibling as HTMLElement | null;

                            if (fallback) {
                              fallback.style.display = "flex";
                            }
                          }}
                        />

                        {/* Logo fallback */}
                        <div
                          className="
                            hidden
                            h-[100px]
                            w-[100px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[#f8f4ed]
                            px-3
                            text-center
                            font-display
                            text-[18px]
                            font-medium
                            text-[#9d352d]
                          "
                        >
                          {member.shortName}
                        </div>
                      </div>
                    </div>

                    {/* =========================================
                        FULL ORGANIZATION NAME
                    ========================================== */}
                    <h3
                      className="
                        mt-5
                        max-w-[260px]
                        font-display
                        text-[19px]
                        font-medium
                        leading-[1.3]
                        text-[#32110f]
                        transition-colors
                        duration-300
                        group-hover:text-[#9d352d]
                        md:text-[20px]
                      "
                    >
                      {member.name}
                    </h3>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            PROGRESS INDICATORS
        ================================================== */}
        {maxIndex > 0 && (
          <div
            className="
              members-reveal
              mt-9
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to membership slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`
                  h-[3px]
                  transition-all
                  duration-300
                  ${
                    currentIndex === index
                      ? "w-8 bg-[#9d352d]"
                      : "w-3 bg-[#32110f]/15 hover:bg-[#d4af4c]"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}