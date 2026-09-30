"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type NewsItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
};

const newsItems: NewsItem[] = [
  {
    id: "aml-compliance-framework",
    title: "New AML & Compliance Framework for Financial Institutions",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Recent developments in anti-money laundering and compliance requirements continue to affect financial institutions and regulated businesses.",
  },
  {
    id: "corporate-sector-rulings",
    title: "Supreme Court & High Court Rulings Impacting Corporate Sector",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Recent judicial developments highlight important considerations for businesses operating within Pakistan's corporate and commercial landscape.",
  },
  {
    id: "ipo-pakistan-ip-regime",
    title: "IPO Pakistan’s Strengthened Intellectual Property Regime",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Pakistan's evolving intellectual property framework continues to shape trademark, copyright, patent and commercial protection strategies.",
  },
  {
    id: "fbr-taxation-corporate-filing",
    title: "New Taxation and Corporate Filing Requirements under FBR",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Recent FBR directives introduce important digital reporting, POS integration and corporate filing requirements for businesses operating in Pakistan.",
  },
  {
    id: "secp-digital-transformation",
    title: "SECP’s Digital Transformation and Company Incorporation Reforms",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Digital transformation within corporate regulation continues to reshape company incorporation and regulatory processes in Pakistan.",
  },
];

export default function NewsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  /* =====================================================
     GSAP
  ====================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".news-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     MODAL SCROLL LOCK + ESC
  ====================================================== */

  useEffect(() => {
    if (!selectedNews) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedNews(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedNews]);

  const openNews = (item: NewsItem) => {
    setSelectedNews(item);
  };

  const closeNews = () => {
    setSelectedNews(null);
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
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_48%,#74241f_100%)]
          pb-20
          pt-32
          md:pb-28
          md:pt-40
          lg:pb-32
        "
      >
        {/* Background NEWS */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-5
            top-14
            select-none
            font-display
            text-[100px]
            leading-none
            text-[#d4af4c]/[0.055]
            sm:text-[150px]
            md:text-[210px]
            lg:text-[260px]
          "
        >
          NEWS
        </div>

        {/* Glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[30%]
            top-[-250px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#d4af4c]/[0.035]
            blur-[110px]
          "
        />

        <div className="page-container relative z-10">
          <div className="max-w-[900px]">

            {/* <div className="mb-6 flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af4c]">
                Irfan &amp; Irfan
              </span>
            </div> */}

            <h1
              className="
                font-display
                text-[48px]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-white
                sm:text-[60px]
                md:text-[72px]
                lg:text-[84px]
              "
            >
              News and

              <span className="block text-[#d4af4c]">
                Legal Updates.
              </span>
            </h1>

            {/* <p
              className="
                mt-8
                max-w-[700px]
                text-[14px]
                leading-[1.9]
                text-white/80
                md:text-[15px]
              "
            >
              Stay informed with legal developments, regulatory updates and
              insights relevant to businesses, institutions and individuals.
            </p> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      {/* =====================================================
          NEWS CARDS
      ====================================================== */}

      <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
        <div className="page-container">

          {/* Cards Grid */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="
                  news-reveal
                  group
                  relative
                  flex
                  min-h-[390px]
                  flex-col
                  overflow-hidden
                  bg-[#f8f4ed]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_22px_60px_rgba(50,17,15,0.10)]
                  sm:p-8
                "
              >
                {/* Meta */}

                <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                    {item.category}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.1em] text-[#79665e]">
                    {item.date}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    font-display
                    text-[25px]
                    leading-[1.25]
                    text-[#32110f]
                    transition-colors
                    duration-300
                    group-hover:text-[#9d352d]
                    sm:text-[27px]
                  "
                >
                  {item.title}
                </h3>

                {/* Short Text */}

                <p className="mt-5 line-clamp-3 text-[12px] leading-[1.8] text-[#79665e]">
                  {item.excerpt}
                </p>

                {/* Read More */}

                <button
                  type="button"
                  onClick={() => openNews(item)}
                  className="
                    mt-auto
                    w-fit
                    pt-6
                    text-left
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#9d352d]
                    transition-colors
                    duration-300
                    hover:text-[#32110f]
                  "
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INSIGHT STRIP
      ====================================================== */}

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-20 md:py-24 lg:py-28">
        <div className="page-container">

          <div
            className="
              news-reveal
              grid
              overflow-hidden
              bg-[#9d352d]
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div className="p-8 sm:p-10 md:p-12 lg:p-14">

              <h2 className="max-w-[720px] font-display text-[35px] leading-[1.12] text-white sm:text-[42px] lg:text-[49px]">
                Discuss your legal requirements with our team.
              </h2>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <Link
                href="/contact"
                className="
                  inline-flex
                  min-h-[58px]
                  min-w-[220px]
                  items-center
                  justify-center
                  bg-[#d4af4c]
                  px-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#32110f]
                  transition-colors
                  duration-300
                  hover:bg-[#e2c56f]
                "
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWS POPUP
      ====================================================== */}

      {selectedNews && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#32110f]/75
            p-4
            backdrop-blur-[4px]
            sm:p-6
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeNews();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="news-modal-title"
            className="
              relative
              max-h-[88vh]
              w-full
              max-w-[850px]
              overflow-y-auto
              bg-[#fffdf9]
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            "
          >
            {/* Popup Top */}

            <div
              className="
                sticky
                top-0
                z-20
                flex
                items-center
                justify-between
                bg-[#9d352d]
                px-5
                py-4
                sm:px-7
              "
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                Legal Update
              </span>

              <button
                type="button"
                onClick={closeNews}
                aria-label="Close news"
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-colors
                  duration-300
                  hover:text-[#d4af4c]
                "
              >
                Close
              </button>
            </div>

            {/* Popup Content */}

            <div className="p-6 sm:p-9 md:p-11">

              {/* Meta */}

              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                  {selectedNews.category}
                </span>

                <span className="text-[9px] uppercase tracking-[0.1em] text-[#79665e]">
                  {selectedNews.date}
                </span>
              </div>

              {/* Title */}

              <h2
                id="news-modal-title"
                className="
                  max-w-[720px]
                  font-display
                  text-[31px]
                  leading-[1.15]
                  text-[#32110f]
                  sm:text-[38px]
                  md:text-[44px]
                "
              >
                {selectedNews.title}
              </h2>

              {/* =============================================
                  FBR FULL ARTICLE
              ============================================== */}

              {selectedNews.id === "fbr-taxation-corporate-filing" ? (
                <div className="mt-8 space-y-6 text-[14px] leading-[1.95] text-[#604b45] sm:text-[15px]">

                  <p>
                    In recent months, the Federal Board of Revenue (FBR) has
                    issued multiple directives impacting corporate entities.
                    One significant update relates to the{" "}
                    <strong className="font-semibold text-[#32110f]">
                      mandatory integration of point-of-sale (POS) systems
                      with FBR&apos;s digital framework
                    </strong>
                    , which affects retailers, corporate chains, and service
                    providers. Non-compliance now carries heavy penalties,
                    pushing businesses toward transparency in reporting
                    real-time sales data.
                  </p>

                  <p>
                    Additionally, FBR has introduced{" "}
                    <strong className="font-semibold text-[#32110f]">
                      enhanced reporting requirements for multinational
                      corporations
                    </strong>{" "}
                    operating in Pakistan, particularly in terms of transfer
                    pricing documentation. This move ensures that
                    international companies pay fair taxes on profits
                    generated locally, reducing tax evasion and aligning with
                    OECD guidelines.
                  </p>

                  <p>
                    Another key development is the{" "}
                    <strong className="font-semibold text-[#32110f]">
                      mandatory filing of annual income tax returns for
                      companies by September
                    </strong>
                    , with stricter enforcement against late submissions. The
                    corporate sector has responded with mixed views — some
                    welcome the digitization of tax processes, while others
                    find the system challenging due to frequent technical
                    glitches.
                  </p>
                </div>
              ) : (
                /* Other news — until full articles are added */

                <div className="mt-8">
                  <p className="text-[14px] leading-[1.95] text-[#604b45] sm:text-[15px]">
                    {selectedNews.excerpt}
                  </p>

                  <div
                    className="
                      mt-8
                      bg-[#f8f4ed]
                      px-5
                      py-4
                    "
                  >
                    <p className="text-[12px] leading-[1.7] text-[#79665e]">
                      The complete legal update will be added here as further
                      article content becomes available.
                    </p>
                  </div>
                </div>
              )}

              {/* Popup Footer */}

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-5
                  pt-7
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#79665e]">
                  Irfan &amp; Irfan Attorneys at Law
                </p>

                <button
                  type="button"
                  onClick={closeNews}
                  className="
                    inline-flex
                    items-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#9d352d]
                    transition-colors
                    duration-300
                    hover:text-[#32110f]
                  "
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}