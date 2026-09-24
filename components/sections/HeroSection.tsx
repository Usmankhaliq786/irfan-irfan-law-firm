"use client";

import { useEffect, useState } from "react";

const recognitionItems = [
  {
    text: "Hasan Irfan Khan brings over 30 years of experience, including acting before the Superior Courts in Pakistan.",
    source: "Legal 500",
  },
  {
    text: "Recognised for his extensive experience in intellectual property and litigation",
    source: "Legal 500",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setVisible(false);

      timeout = setTimeout(() => {
        setActiveIndex(
          (current) => (current + 1) % recognitionItems.length
        );

        setVisible(true);
      }, 600);
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const activeItem = recognitionItems[activeIndex];

  return (
    <section
      id="home"
      className="
        relative
        z-20
        w-full
        bg-black
      "
    >
      {/* =====================================================
          HERO VIDEO
      ====================================================== */}

      <div
        className="
          relative
          h-[360px]
          w-full
          overflow-hidden
          bg-black

          sm:h-[430px]
          md:h-[520px]
          lg:h-[620px]
          xl:h-[700px]
        "
      >
        <video
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-law.jpg"
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      </div>

      {/* =====================================================
          LEGAL 500 RECOGNITION BOX

          50% ON VIDEO
          50% ON PRACTICE AREAS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-40
          w-full
          translate-y-1/2
          px-4

          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[115px]
            max-w-[1050px]
            items-center
            justify-center
            overflow-hidden

            bg-[#9d352d]

            px-5
            py-5
            text-center

            shadow-[0_14px_35px_rgba(30,10,9,0.25)]

            sm:min-h-[125px]
            sm:px-8
            sm:py-6

            md:min-h-[135px]
            md:px-12

            lg:min-h-[145px]
            lg:px-16
          "
        >
          {/* =================================================
              QUOTE CONTENT
          ================================================== */}

          <div
            className={`
              relative
              z-10
              max-w-[900px]

              transition-all
              duration-[600ms]
              ease-in-out

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }
            `}
          >
            {/* Quote Mark */}

            <div
              className="
                mb-0
                font-display
                text-[26px]
                leading-none
                text-[#d4af4c]

                sm:text-[30px]
                md:text-[34px]
              "
            >
              “
            </div>

            {/* Quote Text */}

            <p
              className="
                font-display
                text-[13px]
                font-normal
                italic
                leading-[1.5]
                text-white

                sm:text-[15px]
                md:text-[17px]
                lg:text-[19px]
              "
            >
              {activeItem.text}
            </p>

            {/* =================================================
                LEGAL 500 SOURCE
            ================================================== */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-3
              "
            >
              {/* Left Gold Line */}

              <span
                className="
                  h-px
                  w-5
                  bg-[#d4af4c]
                "
              />

              {/* Legal 500 */}

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#d4af4c]

                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                {activeItem.source}
              </span>

              {/* Right Gold Line */}

              <span
                className="
                  h-px
                  w-5
                  bg-[#d4af4c]
                "
              />
            </div>
          </div>

          {/* =================================================
              SLIDE INDICATORS
          ================================================== */}

          <div
            className="
              absolute
              bottom-2
              left-1/2
              z-20

              flex
              -translate-x-1/2
              items-center
              gap-2
            "
          >
            {recognitionItems.map((_, index) => (
              <span
                key={index}
                className={`
                  block
                  h-[2px]

                  transition-all
                  duration-500

                  ${
                    index === activeIndex
                      ? "w-6 bg-[#d4af4c]"
                      : "w-2 bg-white/25"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}