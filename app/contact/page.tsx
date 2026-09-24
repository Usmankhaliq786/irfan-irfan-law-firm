"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Scale,
  Send,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    city: "Lahore",
    label: "Lahore Office",
    address: "48A, Zafar Ali Road, Lahore, Pakistan",
    phone: "+92 (42) 36285571-4",
    phoneLink: "+924236285571",
    email: "email@irfanandirfan.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=48A+Zafar+Ali+Road+Lahore+Pakistan",
  },
  {
    city: "Karachi",
    label: "Karachi Office",
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
    label: "Islamabad Office",
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

  const heroEyebrowRuleRef = useRef<HTMLSpanElement>(null);
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
            heroEyebrowRuleRef.current,
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

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .fromTo(
          heroEyebrowRuleRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.inOut",
          }
        )
        .fromTo(
          heroContentRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.25"
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
            <div className="mb-6 flex items-center gap-4">
              <span
                ref={heroEyebrowRuleRef}
                className="h-px w-10 origin-left bg-[#d4af4c]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af4c]">
                Irfan &amp; Irfan Attorneys at Law
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
              Get in
              <span className="block text-[#d4af4c]">
                Touch.
              </span>
            </h1>

            <p className="mt-8 max-w-[700px] text-[14px] leading-[1.9] text-white/80 md:text-[15px]">
              Contact our legal team to discuss your requirements. With offices
              in Lahore, Karachi and Islamabad, we advise clients across a broad
              range of legal and commercial matters.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICE LOCATIONS
      ====================================================== */}
      <section className="bg-[#f8f4ed] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          {/* Heading */}
          <div
            ref={officesHeadingRef}
            className="
              mb-12
              grid
              gap-8
              md:mb-16
              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-end
              lg:gap-20
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9d352d]">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#d4af4c]"
                />
                Our Offices
              </div>

              <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[47px] lg:text-[56px]">
                Where to
                <span className="block text-[#9d352d]">
                  Find Us.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] text-[14px] leading-[1.95] text-[#604b45]">
              Irfan &amp; Irfan maintains offices in three major cities of
              Pakistan, providing clients access to experienced legal
              professionals and a broad range of legal services.
            </p>
          </div>

          {/* Office Cards */}
          <div
            ref={officesGridRef}
            className="
              grid
              border-l
              border-t
              border-[#32110f]/15
              lg:grid-cols-3
            "
          >
            {offices.map((office, index) => (
              <div
                key={office.city}
                className="
                  group
                  relative
                  border-b
                  border-r
                  border-[#32110f]/15
                  bg-[#fffdf9]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_20px_45px_rgba(50,17,15,0.12)]
                  sm:p-8
                  lg:p-9
                "
              >
                {/* Top Burgundy Accent */}
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

                {/* Number + Icon */}
                <div className="mb-9 flex items-start justify-between">
                  <span className="font-display text-[28px] text-[#d4af4c]">
                    {String(index + 1).padStart(2, "0")}
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
                      bg-[#f8f4ed]
                      transition-colors
                      duration-300
                      group-hover:bg-[#9d352d]
                    "
                  >
                    <MapPin
                      size={20}
                      strokeWidth={1.3}
                      className="
                        text-[#9d352d]
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:text-[#d4af4c]
                      "
                    />
                  </div>
                </div>

                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                  {office.label}
                </p>

                <h3 className="font-display text-[31px] text-[#32110f]">
                  {office.city}
                </h3>

                <p className="mt-5 min-h-[72px] text-[12px] leading-[1.8] text-[#604b45]">
                  {office.address}
                </p>

                {/* Contact */}
                <div className="mt-7 border-t border-[#32110f]/10 pt-6">
                  <a
                    href={`tel:${office.phoneLink}`}
                    className="
                      mb-4
                      flex
                      items-start
                      gap-3
                      text-[11px]
                      text-[#604b45]
                      transition-colors
                      hover:text-[#9d352d]
                    "
                  >
                    <Phone
                      size={15}
                      strokeWidth={1.4}
                      className="mt-[1px] flex-shrink-0 text-[#9d352d]"
                    />

                    {office.phone}
                  </a>

                  <a
                    href={`mailto:${office.email}`}
                    className="
                      flex
                      items-start
                      gap-3
                      break-all
                      text-[11px]
                      text-[#604b45]
                      transition-colors
                      hover:text-[#9d352d]
                    "
                  >
                    <Mail
                      size={15}
                      strokeWidth={1.4}
                      className="mt-[1px] flex-shrink-0 text-[#9d352d]"
                    />

                    {office.email}
                  </a>
                </div>

                {/* Location */}
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/link
                    mt-8
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
                  View Location

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:-translate-y-1
                      group-hover/link:translate-x-1
                    "
                  />
                </a>
              </div>
            ))}
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
              <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9d352d]">
                <Scale
                  size={17}
                  strokeWidth={1.4}
                  className="text-[#d4af4c]"
                />
                Legal Enquiries
              </div>

              <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.02em] text-[#32110f] sm:text-[47px] lg:text-[56px]">
                How Can We
                <span className="block text-[#9d352d]">
                  Assist You?
                </span>
              </h2>

              <div className="mt-7 h-px w-16 bg-[#d4af4c]" />

              <p className="mt-8 max-w-[500px] text-[14px] leading-[1.95] text-[#604b45]">
                Send us details of your enquiry using the form. Our team can
                then direct your message to the appropriate practice area.
              </p>

              {/* Direct Contact */}
              <div className="mt-10 border-l border-t border-[#32110f]/15">
                <div
                  className="
                    group
                    border-b
                    border-r
                    border-[#32110f]/15
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-[#f8f4ed]/60
                  "
                >
                  <Mail
                    size={20}
                    strokeWidth={1.3}
                    className="
                      mb-4
                      text-[#9d352d]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                    "
                  />

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
                    group
                    border-b
                    border-r
                    border-[#32110f]/15
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-[#f8f4ed]/60
                  "
                >
                  <Building2
                    size={20}
                    strokeWidth={1.3}
                    className="
                      mb-4
                      text-[#9d352d]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                    "
                  />

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
                border
                border-[#32110f]/10
                bg-[#f8f4ed]
                p-6
                shadow-[0_18px_50px_rgba(50,17,15,0.05)]
                sm:p-8
                md:p-10
                lg:p-12
              "
            >
              <div className="mb-9">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9d352d]">
                  Contact Form
                </p>

                <h3 className="font-display text-[32px] leading-tight text-[#32110f] md:text-[38px]">
                  Send Us a Message
                </h3>

                <div className="mt-5 h-px w-12 bg-[#d4af4c]" />
              </div>

              {/* Success Notice */}
              <div
                ref={noticeRef}
                aria-hidden={!notice}
                className={`overflow-hidden border border-[#d4af4c]/50 bg-[#fffdf9] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  notice
                    ? "mb-7 max-h-[160px] translate-y-0 p-5 opacity-100"
                    : "mb-0 max-h-0 -translate-y-2 p-0 opacity-0"
                }`}
              >
                <div className="flex items-start gap-3">
                  <Send
                    size={18}
                    strokeWidth={1.4}
                    className="mt-[2px] flex-shrink-0 text-[#9d352d]"
                  />

                  <div>
                    <p className="text-[12px] font-semibold text-[#32110f]">
                      Form completed successfully.
                    </p>

                    <p className="mt-1 text-[11px] leading-[1.7] text-[#79665e]">
                      Email delivery will become active once the website
                      mailbox/backend integration is connected.
                    </p>
                  </div>
                </div>
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
                    group
                    mt-7
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-between
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

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      text-[#d4af4c]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#32110f]
                    "
                  />
                </button>

                <p className="mt-5 max-w-[650px] text-[9px] leading-[1.7] text-[#79665e]">
                  Please do not send confidential or time-sensitive information
                  through this form. Submitting an enquiry does not by itself
                  create an attorney-client relationship.
                </p>
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

        {/* Decorative Circle */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[220px]
            -left-[180px]
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#d4af4c]/10
          "
        />

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
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d4af4c]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4af4c]">
                Locations
              </p>
            </div>

            <h2 className="font-display text-[38px] leading-[1.1] text-white sm:text-[45px] lg:text-[52px]">
              Offices Across
              <span className="text-[#d4af4c]">
                {" "}
                Pakistan.
              </span>
            </h2>

            <p className="mt-5 max-w-[600px] text-[13px] leading-[1.85] text-white/75">
              Visit one of our offices in Lahore, Karachi or Islamabad to
              connect with our legal team.
            </p>
          </div>

          {/* Location Cards */}
          <div
            ref={mapGridRef}
            className="
              grid
              border-l
              border-t
              border-white/20
              md:grid-cols-3
            "
          >
            {offices.map((office, index) => (
              <a
                key={office.city}
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-r
                  border-white/20
                  p-7
                  transition-all
                  duration-500
                  hover:bg-[#541915]/35
                  md:p-8
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-5
                    top-4
                    font-display
                    text-[50px]
                    leading-none
                    text-[#d4af4c]/10
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <MapPin
                  size={22}
                  strokeWidth={1.3}
                  className="
                    mb-6
                    text-[#d4af4c]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:scale-110
                  "
                />

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
                    flex
                    items-center
                    gap-3
                    border-t
                    border-white/15
                    pt-5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#d4af4c]
                  "
                >
                  Open in Google Maps

                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}