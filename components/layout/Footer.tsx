"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Lawyers", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const practiceLinks = [
  { name: "Arbitration", href: "/practice-areas#arbitration" },
  { name: "Banking & Finance", href: "/practice-areas#banking-finance" },
  {
    name: "Corporate & Business Law",
    href: "/practice-areas#corporate-business-law",
  },
  {
    name: "Litigation & Enforcement",
    href: "/practice-areas#litigation-enforcement",
  },
  {
    name: "Mergers & Acquisitions",
    href: "/practice-areas#mergers-acquisitions-joint-ventures",
  },
  { name: "Tax Law", href: "/practice-areas#tax-law" },
];

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.969h-1.513c-1.49 0-1.956.931-1.956 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#24100e] text-white">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          -top-12
          select-none
          font-display
          text-[140px]
          leading-none
          text-white/[0.018]

          sm:text-[200px]
          lg:text-[300px]
        "
      >
        1985
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          page-container
          relative
          z-10
          py-14

          md:py-16
          lg:py-20
        "
      >
        {/* ===================================================
            TOP FOOTER
        ==================================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-white/10
            pb-12

            md:grid-cols-2

            lg:grid-cols-[1.25fr_0.7fr_0.9fr]
            lg:gap-16
            lg:pb-14
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Irfan & Irfan Attorneys at Law"
                width={300}
                height={100}
                className="
                  h-auto
                  w-[220px]
                  object-contain

                  sm:w-[260px]
                "
              />
            </Link>

            <p
              className="
                mt-7
                max-w-[450px]
                text-[14px]
                leading-[1.9]
                text-white/55
              "
            >
              Established in 1985, Irfan &amp; Irfan Attorneys at Law provides
              legal counsel across a broad range of corporate, commercial,
              regulatory and dispute-related matters in Pakistan.
            </p>

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#d4af4c]
              "
            >
              <span className="h-px w-8 bg-[#d4af4c]" />

              Attorneys at Law
            </div>

            {/* Social Icons */}

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-white/15
                  text-white/60
                  transition-all
                  duration-300

                  hover:border-[#d4af4c]
                  hover:bg-[#d4af4c]
                  hover:text-[#32110f]
                "
              >
                <FacebookIcon className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-white/15
                  text-white/60
                  transition-all
                  duration-300

                  hover:border-[#d4af4c]
                  hover:bg-[#d4af4c]
                  hover:text-[#32110f]
                "
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <p
              className="
                mb-7
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#d4af4c]
              "
            >
              Quick Links
            </p>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      font-display
                      text-[18px]
                      text-white/75
                      transition-colors
                      duration-300

                      hover:text-[#d4af4c]
                    "
                  >
                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-0
                        transition-all
                        duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              PRACTICE AREAS
          ================================================== */}

          <div>
            <p
              className="
                mb-7
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#d4af4c]
              "
            >
              Practice Areas
            </p>

            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-[13px]
                      leading-relaxed
                      text-white/55
                      transition-colors
                      duration-300

                      hover:text-[#d4af4c]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/practice-areas"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#d4af4c]
              "
            >
              View All Practice Areas

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* ===================================================
            BOTTOM FOOTER
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            pt-8

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-[11px] leading-relaxed text-white/35">
            © {new Date().getFullYear()} Irfan &amp; Irfan Attorneys at Law. All
            rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              text-[11px]
              text-white/40
            "
          >
            <Link
              href="/contact"
              className="
                transition-colors
                hover:text-[#d4af4c]
              "
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="
                transition-colors
                hover:text-[#d4af4c]
              "
            >
              About Us
            </Link>

            <Link
              href="/team"
              className="
                transition-colors
                hover:text-[#d4af4c]
              "
            >
              Our Lawyers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}