"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    city: "Lahore",
    label: "",
    address: "48A, Zafar Ali Road, Lahore, Pakistan",
    phone: "+92 (42) 36285571-4",
    phoneLink: "+924236285571",
    email: "email@irfanandirfan.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=48A+Zafar+Ali+Road+Lahore+Pakistan",
  },
  {
    city: "Karachi",
    label: "",
    address:
      "Office # 1, Sasi Arcade, Main Clifton Road, Clifton, Karachi, Pakistan",
    phone: "+92 (21) 35871779",
    phoneLink: "+922135871779",
    email: "khimail@irfanandirfan.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Sasi+Arcade+Main+Clifton+Road+Karachi+Pakistan",
  },
  {
    city: "Islamabad",
    label: "",
    address: "House No. 6, Street No. 54, F-8/4, Islamabad, Pakistan",
    phone: "+92 (51) 2825684",
    phoneLink: "+92512825684",
    email: "Isbmail@irfanandirfan.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=House+6+Street+54+F-8%2F4+Islamabad+Pakistan",
  },
];

const inquiryOptions = [
  "Arbitration",
  "Aviation",
  "Banking & Finance",
  "Competition Law",
  "Corporate & Business Law",
  "Cyber Law & E-Commerce",
  "Election Laws",
  "Energy (Oil, Gas & Electricity)",
  "Mining Laws",
  "Patent & Design Law",
  "Privatization",
  "Real Estate",
  "Environmental & Regulatory Law",
  "International Trade & Cross Border Operations",
  "Litigation & Enforcement",
  "Mergers, Acquisitions & Joint Ventures",
  "Tax Law",
  "Telecommunication",
  "Trademark & Copyright",
  "Other Legal Matter",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    message: "",
  });

  const [notice, setNotice] = useState(false);

  const heroContentRef = useRef<HTMLDivElement>(null);
  const officesHeadingRef = useRef<HTMLDivElement>(null);
  const officesGridRef = useRef<HTMLDivElement>(null);
  const formLeftRef = useRef<HTMLDivElement>(null);
  const formPanelRef = useRef<HTMLDivElement>(null);
  const mapHeadingRef = useRef<HTMLDivElement>(null);
  const mapGridRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email/backend integration will be connected separately.
    setNotice(true);

    setTimeout(() => {
      setNotice(false);
    }, 5000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            heroContentRef.current,
            officesHeadingRef.current,
            officesGridRef.current
              ? Array.from(officesGridRef.current.children)
              : [],
            formLeftRef.current,
            formPanelRef.current,
            mapHeadingRef.current,
            mapGridRef.current
              ? Array.from(mapGridRef.current.children)
              : [],
          ],
          {
            clearProps: "all",
            opacity: 1,
          }
        );

        return;
      }

      /* =====================================================
         HERO
      ====================================================== */

      gsap.fromTo(
        heroContentRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        }
      );

      /* =====================================================
         OFFICES HEADING
      ====================================================== */

      gsap.fromTo(
        officesHeadingRef.current,
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
            trigger: officesHeadingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      /* =====================================================
         OFFICE CARDS
      ====================================================== */

      if (officesGridRef.current) {
        gsap.fromTo(
          Array.from(officesGridRef.current.children),
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: officesGridRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      /* =====================================================
         CONTACT FORM
      ====================================================== */

      gsap.fromTo(
        formLeftRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formLeftRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        formPanelRef.current,
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
            trigger: formPanelRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      /* =====================================================
         MAP HEADING
      ====================================================== */

      gsap.fromTo(
        mapHeadingRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapHeadingRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      /* =====================================================
         MAP GRID
      ====================================================== */

      if (mapGridRef.current) {
        gsap.fromTo(
          Array.from(mapGridRef.current.children),
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mapGridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-transition">

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
        {/* Background Text */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-8
            top-14
            select-none
            font-display
            text-[90px]
            leading-none
            text-[#d4af4c]/[0.055]
            sm:text-[145px]
            md:text-[200px]
            lg:text-[245px]
          "
        >
          CONTACT
        </div>

        {/* Gold Glow */}

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
          <div ref={heroContentRef} className="max-w-[900px]">

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
              Connect

              <span className="block text-[#d4af4c]">
                With Us.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-20
              xl:gap-24
            "
          >

            {/* LEFT */}

            <div ref={formLeftRef}>

              <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[47px] lg:text-[56px]">
                How Can We

                <span className="block text-[#9d352d]">
                  Assist You?
                </span>
              </h2>

              {/* Direct Contact */}

              <div className="mt-10 space-y-4">

                <div
                  className="
                    bg-[#f8f4ed]
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-[#f3ece3]
                  "
                >
                  <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#79665e]">
                    General Email
                  </p>

                  <a
                    href="mailto:email@irfanandirfan.com"
                    className="
                      text-[13px]
                      font-medium
                      text-[#32110f]
                      transition-colors
                      hover:text-[#9d352d]
                    "
                  >
                    email@irfanandirfan.com
                  </a>
                </div>

                <div
                  className="
                    bg-[#f8f4ed]
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-[#f3ece3]
                  "
                >
                  <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#79665e]">
                    Office Network
                  </p>

                  <p className="text-[13px] font-medium text-[#32110f]">
                    Lahore • Karachi • Islamabad
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FORM PANEL
            ================================================== */}

            <div
              ref={formPanelRef}
              className="
                bg-[#f8f4ed]
                p-6
                shadow-[0_18px_50px_rgba(50,17,15,0.05)]
                sm:p-8
                md:p-10
                lg:p-12
              "
            >
              <div className="mb-9">
                

                <h3 className="font-display text-[32px] leading-tight text-[#32110f] md:text-[38px]">
                  Send Us a Message
                </h3>
              </div>

              {/* Success Notice */}

              <div
                ref={noticeRef}
                aria-hidden={!notice}
                className={`overflow-hidden bg-[#fffdf9] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  notice
                    ? "mb-7 max-h-[160px] translate-y-0 p-5 opacity-100"
                    : "mb-0 max-h-0 -translate-y-2 p-0 opacity-0"
                }`}
              >
                <p className="text-[12px] font-semibold text-[#32110f]">
                  Form completed successfully.
                </p>

                <p className="mt-1 text-[11px] leading-[1.7] text-[#79665e]">
                  Email delivery will become active once the website
                  mailbox/backend integration is connected.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                {/* Name + Email */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#604b45]"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="
                        w-full
                        border
                        border-[#32110f]/15
                        bg-[#fffdf9]
                        px-4
                        py-4
                        text-[12px]
                        text-[#32110f]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#79665e]/55
                        focus:border-[#9d352d]
                        focus:shadow-[0_0_0_3px_rgba(157,53,45,0.08)]
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#604b45]"
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="
                        w-full
                        border
                        border-[#32110f]/15
                        bg-[#fffdf9]
                        px-4
                        py-4
                        text-[12px]
                        text-[#32110f]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#79665e]/55
                        focus:border-[#9d352d]
                        focus:shadow-[0_0_0_3px_rgba(157,53,45,0.08)]
                      "
                    />
                  </div>
                </div>

                {/* Phone + Company */}

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#604b45]"
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92"
                      className="
                        w-full
                        border
                        border-[#32110f]/15
                        bg-[#fffdf9]
                        px-4
                        py-4
                        text-[12px]
                        text-[#32110f]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#79665e]/55
                        focus:border-[#9d352d]
                        focus:shadow-[0_0_0_3px_rgba(157,53,45,0.08)]
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#604b45]"
                    >
                      Company / Organization
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="
                        w-full
                        border
                        border-[#32110f]/15
                        bg-[#fffdf9]
                        px-4
                        py-4
                        text-[12px]
                        text-[#32110f]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#79665e]/55
                        focus:border-[#9d352d]
                        focus:shadow-[0_0_0_3px_rgba(157,53,45,0.08)]
                      "
                    />
                  </div>
                </div>

                {/* Reason */}

                <div className="mt-6">
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#604b45]"
                  >
                    Area of Inquiry *
                  </label>

                  <select
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    className="
                      w-full
                      border
                      border-[#32110f]/15
                      bg-[#fffdf9]
                      px-4
                      py-4
                      text-[12px]
                      text-[#604b45]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#9d352d]
                      focus:shadow-[0_0_0_3px_rgba(157,53,45,0.08)]
                    "
                  >
                    <option value="">
                      Select a practice area
                    </option>

                    {inquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#604b45]"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your enquiry..."
                    className="
                      w-full
                      resize-none
                      border
                      border-[#32110f]/15
                      bg-[#fffdf9]
                      px-4
                      py-4
                      text-[12px]
                      leading-[1.7]
                      text-[#32110f]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#79665e]/55
                      focus:border-[#9d352d]
                      focus:shadow-[0_0_0_3px_rgba(157,53,45,0.08)]
                    "
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    mt-7
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    bg-[#9d352d]
                    px-6
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#d4af4c]
                    hover:text-[#32110f]
                    hover:shadow-[0_12px_30px_rgba(157,53,45,0.20)]
                    sm:w-auto
                    sm:min-w-[230px]
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP / LOCATIONS
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_50%,#74241f_100%)]
          py-20
          md:py-24
        "
      >
        {/* Background PAKISTAN */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-10
            top-0
            select-none
            font-display
            text-[100px]
            leading-none
            text-[#d4af4c]/[0.045]
            sm:text-[150px]
            md:text-[185px]
            lg:text-[220px]
          "
        >
          PAKISTAN
        </div>

        {/* Glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[20%]
            top-[-250px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#d4af4c]/[0.03]
            blur-[100px]
          "
        />

        <div className="page-container relative z-10">

          {/* Heading */}

          <div ref={mapHeadingRef} className="mb-10 md:mb-12">

            <h2 className="font-display text-[38px] leading-[1.1] text-white sm:text-[45px] lg:text-[52px]">
              Offices Across

              <span className="text-[#d4af4c]">
                {" "}
                Pakistan.
              </span>
            </h2>
          </div>

          {/* Location Cards */}

          <div
            ref={mapGridRef}
            className="
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {offices.map((office) => (
              <a
                key={office.city}
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  bg-[#541915]/20
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#541915]/40
                  md:p-8
                "
              >
                <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#d4af4c]">
                  {office.label}
                </p>

                <h3 className="font-display text-[27px] text-white">
                  {office.city}
                </h3>

                <p className="mt-3 min-h-[60px] max-w-[300px] text-[11px] leading-[1.8] text-white/65">
                  {office.address}
                </p>

                <div
                  className="
                    mt-6
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#d4af4c]
                  "
                >
                  Open in Google Maps
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}