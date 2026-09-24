"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CalendarDays,
  Newspaper,
  Scale,
  X,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type NewsItem = {
  id: string;
  number: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
};

const newsItems: NewsItem[] = [
  {
    id: "aml-compliance-framework",
    number: "01",
    title: "New AML & Compliance Framework for Financial Institutions",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Recent developments in anti-money laundering and compliance requirements continue to affect financial institutions and regulated businesses.",
  },
  {
    id: "corporate-sector-rulings",
    number: "02",
    title: "Supreme Court & High Court Rulings Impacting Corporate Sector",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Recent judicial developments highlight important considerations for businesses operating within Pakistan's corporate and commercial landscape.",
  },
  {
    id: "ipo-pakistan-ip-regime",
    number: "03",
    title: "IPO Pakistan’s Strengthened Intellectual Property Regime",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Pakistan's evolving intellectual property framework continues to shape trademark, copyright, patent and commercial protection strategies.",
  },
  {
    id: "fbr-taxation-corporate-filing",
    number: "04",
    title: "New Taxation and Corporate Filing Requirements under FBR",
    category: "News",
    date: "September 2, 2025",
    excerpt:
      "Recent FBR directives introduce important digital reporting, POS integration and corporate filing requirements for businesses operating in Pakistan.",
  },
  {
    id: "secp-digital-transformation",
    number: "05",
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

        {/* Decorative Circle */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[220px]
            -left-[180px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#d4af4c]/15
          "
        />

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
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d4af4c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af4c]">
                Irfan &amp; Irfan
              </span>
            </div>

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
              News &amp;
              <span className="block text-[#d4af4c]">
                Legal Updates.
              </span>
            </h1>

            <p
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
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bg-[#f8f4ed] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          <div
            className="
              news-reveal
              grid
              gap-10
              lg:grid-cols-[0.75fr_1.25fr]
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
                  tracking-[0.22em]
                  text-[#9d352d]
                "
              >
                <Scale
                  size={17}
                  strokeWidth={1.4}
                  className="text-[#d4af4c]"
                />

                Legal Knowledge
              </div>

              <h2
                className="
                  font-display
                  text-[39px]
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-[#32110f]
                  sm:text-[46px]
                  lg:text-[55px]
                "
              >
                Legal Insight.
                <span className="block text-[#9d352d]">
                  Global Perspective.
                </span>
              </h2>

              <div className="mt-7 h-px w-16 bg-[#d4af4c]" />
            </div>

            {/* Right */}
            <div className="lg:pt-8">
              <p
                className="
                  max-w-[720px]
                  text-[15px]
                  leading-[2]
                  text-[#604b45]
                  md:text-[16px]
                "
              >
                Our lawyers offer clients a range of integrated global
                capabilities, including some of the world&apos;s most active
                M&amp;A, real estate, financial services, litigation and
                corporate risk practices.
              </p>

              <div
                className="
                  mt-9
                  grid
                  grid-cols-2
                  border-l
                  border-t
                  border-[#32110f]/15
                  sm:max-w-[460px]
                "
              >
                <div className="border-b border-r border-[#32110f]/15 p-5">
                  <span className="block font-display text-[30px] text-[#9d352d]">
                    05
                  </span>

                  <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.18em] text-[#79665e]">
                    Latest Updates
                  </span>
                </div>

                <div className="border-b border-r border-[#32110f]/15 p-5">
                  <Newspaper
                    size={27}
                    strokeWidth={1.2}
                    className="mb-2 text-[#9d352d]"
                  />

                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-[#79665e]">
                    Legal News
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWS CARDS
      ====================================================== */}
      <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          {/* Heading */}
          <div
            className="
              news-reveal
              mb-12
              flex
              flex-col
              justify-between
              gap-6
              border-b
              border-[#32110f]/15
              pb-8
              md:mb-16
              md:flex-row
              md:items-end
            "
          >
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9d352d]">
                News &amp; Insights
              </p>

              <h2 className="font-display text-[40px] leading-[1.08] text-[#32110f] sm:text-[48px] lg:text-[58px]">
                Latest{" "}
                <span className="text-[#9d352d]">
                  Updates.
                </span>
              </h2>
            </div>

            <p className="max-w-[420px] text-[12px] leading-[1.8] text-[#79665e]">
              Legal and regulatory developments covering corporate,
              financial, intellectual property and compliance matters.
            </p>
          </div>

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
                  border
                  border-[#32110f]/12
                  bg-[#f8f4ed]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#9d352d]/30
                  hover:bg-white
                  hover:shadow-[0_22px_60px_rgba(50,17,15,0.10)]
                  sm:p-8
                "
              >
                {/* Hover Top Line */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-0
                    bg-[#9d352d]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Number + icon */}
                <div className="mb-10 flex items-start justify-between">
                  <span className="font-display text-[36px] leading-none text-[#d4af4c]">
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[#9d352d]/15
                      bg-[#fffdf9]
                      transition-colors
                      duration-300
                      group-hover:bg-[#9d352d]
                    "
                  >
                    <Newspaper
                      size={18}
                      strokeWidth={1.4}
                      className="
                        text-[#9d352d]
                        transition-colors
                        duration-300
                        group-hover:text-[#d4af4c]
                      "
                    />
                  </div>
                </div>

                {/* Meta */}
                <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                    {item.category}
                  </span>

                  <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.1em] text-[#79665e]">
                    <CalendarDays size={12} strokeWidth={1.4} />
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

                {/* Short text */}
                <p className="mt-5 line-clamp-3 text-[12px] leading-[1.8] text-[#79665e]">
                  {item.excerpt}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  onClick={() => openNews(item)}
                  className="
                    mt-auto
                    flex
                    w-full
                    items-center
                    justify-between
                    border-t
                    border-[#32110f]/12
                    pt-6
                    text-left
                  "
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9d352d]">
                    Read More
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      bg-[#9d352d]
                      transition-all
                      duration-300
                      group-hover:bg-[#d4af4c]
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      className="
                        text-white
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#32110f]
                      "
                    />
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INSIGHT STRIP
      ====================================================== */}
      <section
        className="
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_50%,#74241f_100%)]
          py-16
          md:py-20
        "
      >
        <div className="page-container">
          <div
            className="
              news-reveal
              grid
              gap-8
              md:grid-cols-[auto_1fr]
              md:items-center
              md:gap-12
            "
          >
            <div
              className="
                flex
                h-[70px]
                w-[70px]
                items-center
                justify-center
                border
                border-[#d4af4c]/40
              "
            >
              <Newspaper
                size={28}
                strokeWidth={1.2}
                className="text-[#d4af4c]"
              />
            </div>

            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d4af4c]">
                Irfan &amp; Irfan Attorneys at Law
              </p>

              <p className="max-w-[900px] font-display text-[25px] leading-[1.45] text-white sm:text-[29px] md:text-[32px]">
                Providing legal insight across evolving regulatory,
                commercial and corporate landscapes.
              </p>
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
              news-reveal
              grid
              overflow-hidden
              bg-[#9d352d]
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div className="p-8 sm:p-10 md:p-12 lg:p-14">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4af4c]">
                Need Legal Assistance?
              </p>

              <h2 className="max-w-[720px] font-display text-[35px] leading-[1.12] text-white sm:text-[42px] lg:text-[49px]">
                Discuss your legal requirements with our team.
              </h2>

              <p className="mt-5 max-w-[620px] text-[13px] leading-[1.85] text-white/75">
                Our lawyers advise clients across a broad range of legal,
                commercial and regulatory matters.
              </p>
            </div>

            <div className="border-t border-white/15 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
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
                border-b
                border-white/15
                bg-[#9d352d]
                px-5
                py-4
                sm:px-7
              "
            >
              <div className="flex items-center gap-3">
                <Newspaper
                  size={17}
                  strokeWidth={1.4}
                  className="text-[#d4af4c]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                  Legal Update
                </span>
              </div>

              <button
                type="button"
                onClick={closeNews}
                aria-label="Close news"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-white/20
                  text-white
                  transition-colors
                  hover:border-[#d4af4c]
                  hover:bg-[#d4af4c]
                  hover:text-[#32110f]
                "
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Popup Content */}
            <div className="p-6 sm:p-9 md:p-11">
              {/* Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                  {selectedNews.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d4af4c]" />

                <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.1em] text-[#79665e]">
                  <CalendarDays size={13} />
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

              <div className="my-7 h-px w-16 bg-[#d4af4c]" />

              {/* =============================================
                  FBR FULL ARTICLE
              ============================================== */}
              {selectedNews.id === "fbr-taxation-corporate-filing" ? (
                <div className="space-y-6 text-[14px] leading-[1.95] text-[#604b45] sm:text-[15px]">
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
                <div>
                  <p className="text-[14px] leading-[1.95] text-[#604b45] sm:text-[15px]">
                    {selectedNews.excerpt}
                  </p>

                  <div
                    className="
                      mt-8
                      border-l-2
                      border-[#d4af4c]
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
                  border-t
                  border-[#32110f]/12
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
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#9d352d]
                  "
                >
                  Close Article

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}