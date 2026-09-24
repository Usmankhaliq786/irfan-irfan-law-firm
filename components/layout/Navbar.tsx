"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Home,
  Info,
  Scale,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* =========================================================
   DESKTOP + FULL MOBILE MENU
========================================================= */
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Lawyers", href: "/team" },
  { name: "News", href: "/cases" },
  { name: "Contacts", href: "/contact" },
];

/* =========================================================
   MOBILE BOTTOM NAV
========================================================= */
const mobileBottomNavigation = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About Us",
    href: "/about",
    icon: Info,
  },
  {
    name: "Practice Areas",
    href: "/practice-areas",
    icon: Scale,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  /* =========================================================
     HEADER SCROLL
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     INITIAL ANIMATION
  ========================================================= */
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setHasMounted(true);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  /* =========================================================
     CLOSE FULL MENU AFTER ROUTE CHANGE
  ========================================================= */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  /* =========================================================
     LOCK PAGE WHILE FULL MENU OPEN
  ========================================================= */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* =========================================================
     ACTIVE LINK
  ========================================================= */
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =====================================================
          TOP HEADER
      ====================================================== */}
      <header
        className={cn(
          `
            fixed
            left-0
            right-0
            top-0
            z-[100]
            w-full
            transition-all
            duration-500
          `,
          isScrolled
            ? "bg-[#8f3029]/95 shadow-[0_8px_30px_rgba(0,0,0,0.14)] backdrop-blur-md"
            : "bg-[#96352d]"
        )}
      >
        {/* Gold bottom border */}
        <div
          className={cn(
            `
              absolute
              bottom-0
              left-0
              right-0
              h-px
              origin-left
              bg-[#d9b35c]/30
              transition-transform
              duration-1000
            `,
            hasMounted ? "scale-x-100" : "scale-x-0"
          )}
        />

        <div
          className="
            mx-auto
            w-full
            max-w-[1800px]
            px-4
            sm:px-6
            lg:px-10
            xl:px-14
          "
        >
          <div
            className={cn(
              `
                flex
                w-full
                items-center
                justify-between
                gap-3
                transition-all
                duration-500
              `,
              isScrolled
                ? "h-[68px] sm:h-[74px] lg:h-[82px]"
                : "h-[74px] sm:h-[82px] lg:h-[112px]"
            )}
          >
            {/* =================================================
                LOGO
            ================================================== */}
            <Link
              href="/"
              aria-label="Irfan & Irfan Attorneys at Law"
              className={cn(
                `
                  relative
                  z-[102]
                  block
                  min-w-0
                  flex-1
                  transition-all
                  duration-700
                  lg:flex-none
                `,
                hasMounted
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              )}
            >
              <div
                className={cn(
                  `
                    relative
                    max-w-full
                    transition-all
                    duration-500
                  `,
                  isScrolled
                    ? "h-[54px] w-[185px] min-[360px]:w-[205px] sm:h-[62px] sm:w-[235px]"
                    : "h-[60px] w-[190px] min-[360px]:w-[215px] sm:h-[72px] sm:w-[275px] lg:h-[78px] lg:w-[280px] xl:w-[300px]"
                )}
              >
                <Image
                  src="/images/logo.png"
                  alt="Irfan & Irfan Attorneys at Law"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="
                    (max-width: 359px) 190px,
                    (max-width: 639px) 215px,
                    (max-width: 1023px) 275px,
                    300px
                  "
                />
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav
              aria-label="Main navigation"
              className="
                hidden
                min-w-0
                flex-1
                items-center
                justify-end
                lg:flex
              "
            >
              <div className="flex items-center gap-1 xl:gap-3 2xl:gap-5">
                {navigation.map((item, index) => {
                  const active = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{
                        transitionDelay: hasMounted
                          ? `${index * 60}ms`
                          : "0ms",
                      }}
                      className={cn(
                        `
                          group
                          relative
                          whitespace-nowrap
                          px-3
                          py-4
                          text-[14px]
                          font-medium
                          tracking-[0.01em]
                          transition-all
                          duration-500
                          xl:px-4
                          xl:text-[15px]
                          2xl:text-[16px]
                        `,
                        hasMounted
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-2 opacity-0",
                        active
                          ? "text-[#d9b35c]"
                          : "text-white hover:text-[#d9b35c]"
                      )}
                    >
                      {item.name}

                      <span
                        className={cn(
                          `
                            absolute
                            bottom-[8px]
                            left-3
                            right-3
                            h-px
                            origin-left
                            bg-[#d9b35c]
                            transition-transform
                            duration-300
                            xl:left-4
                            xl:right-4
                          `,
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              <div
                className="
                  mx-5
                  h-8
                  w-px
                  shrink-0
                  bg-white/25
                  xl:mx-7
                "
              />

              {/* Appointment */}
              <Link
                href="/contact"
                className="
                  group
                  relative
                  flex
                  h-[52px]
                  shrink-0
                  items-center
                  justify-center
                  gap-4
                  overflow-hidden
                  whitespace-nowrap
                  border
                  border-[#d9b35c]
                  px-6
                  text-[14px]
                  font-semibold
                  text-white
                  xl:px-7
                  xl:text-[15px]
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-[#d9b35c]
                    transition-transform
                    duration-300
                    group-hover:translate-x-0
                  "
                />

                <span
                  className="
                    relative
                    transition-colors
                    duration-300
                    group-hover:text-[#6f211d]
                  "
                >
                  Appointment
                </span>

                <ArrowRight
                  size={19}
                  strokeWidth={1.8}
                  className="
                    relative
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#6f211d]
                  "
                />
              </Link>
            </nav>

            {/* =================================================
                MOBILE HAMBURGER
            ================================================== */}
            <button
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={isMobileMenuOpen}
              onClick={() =>
                setIsMobileMenuOpen((previous) => !previous)
              }
              className="
                relative
                z-[102]
                flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center
                border
                border-[#d9b35c]/70
                text-[#d9b35c]
                transition-colors
                duration-300
                hover:bg-[#d9b35c]
                hover:text-[#7e2924]
                sm:h-[44px]
                sm:w-[44px]
                lg:hidden
              "
            >
              <Menu
                size={24}
                strokeWidth={1.6}
                className={cn(
                  `
                    absolute
                    transition-all
                    duration-300
                  `,
                  isMobileMenuOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                )}
              />

              <X
                size={24}
                strokeWidth={1.6}
                className={cn(
                  `
                    absolute
                    transition-all
                    duration-300
                  `,
                  isMobileMenuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          FULL-SCREEN MOBILE MENU
      ====================================================== */}
      <div
        className={cn(
          `
            fixed
            inset-0
            z-[90]
            bg-[#79251f]
            transition-all
            duration-500
            lg:hidden
          `,
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <div
          className="
            flex
            h-[100dvh]
            w-full
            flex-col
            overflow-y-auto
            px-5
            pb-[calc(82px+env(safe-area-inset-bottom))]
            pt-[92px]
            sm:px-8
            sm:pt-[105px]
          "
        >
          <div className="h-px w-full shrink-0 bg-[#d9b35c]/35" />

          <nav
            aria-label="Mobile menu"
            className="
              flex
              flex-1
              flex-col
              justify-center
              py-4
            "
          >
            {navigation.map((item, index) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    `
                      group
                      flex
                      min-h-[50px]
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      py-3
                      text-[19px]
                      font-light
                      transition-colors
                      duration-300
                      min-[375px]:text-[21px]
                      sm:min-h-[58px]
                      sm:text-[26px]
                    `,
                    active
                      ? "text-[#d9b35c]"
                      : "text-white hover:text-[#d9b35c]"
                  )}
                >
                  <span className="flex min-w-0 items-center">
                    <span
                      className="
                        mr-3
                        shrink-0
                        text-[9px]
                        tracking-[0.18em]
                        text-[#d9b35c]/70
                        sm:mr-4
                        sm:text-[11px]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.name}</span>
                  </span>

                  <ArrowRight
                    size={18}
                    strokeWidth={1.4}
                    className="
                      ml-3
                      shrink-0
                      text-[#d9b35c]
                    "
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="
              flex
              min-h-[50px]
              w-full
              shrink-0
              items-center
              justify-between
              border
              border-[#d9b35c]
              px-5
              text-[13px]
              font-semibold
              text-white
              sm:min-h-[56px]
              sm:text-[15px]
            "
          >
            <span>Book an Appointment</span>

            <ArrowRight
              size={19}
              strokeWidth={1.7}
            />
          </Link>

          <p
            className="
              shrink-0
              pt-4
              text-center
              text-[9px]
              tracking-[0.12em]
              text-white/45
              sm:text-[10px]
            "
          >
            IRFAN &amp; IRFAN · ATTORNEYS AT LAW
          </p>
        </div>
      </div>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION

          Fixed independently to viewport.
          Always visible below lg.
      ====================================================== */}
      <nav
        aria-label="Mobile quick navigation"
        className="
          fixed
          inset-x-0
          bottom-0
          z-[110]
          block
          w-full
          border-t
          border-[#d9b35c]/30
          bg-[#8f3029]
          shadow-[0_-6px_24px_rgba(0,0,0,0.22)]
          lg:hidden
        "
      >
        <div
          className="
            flex
            h-[64px]
            w-full
            items-stretch
          "
        >
          {mobileBottomNavigation.map((item) => {
            const active = isActiveLink(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className={cn(
                  `
                    relative
                    flex
                    h-full
                    w-1/4
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    gap-[3px]
                    overflow-hidden
                    border-r
                    border-white/10
                    px-[2px]
                    text-center
                    transition-colors
                    duration-300
                    last:border-r-0
                  `,
                  active
                    ? "bg-[#7d2822] text-[#e5bd60]"
                    : "text-white/90 hover:bg-[#852c26]"
                )}
              >
                {/* Active top border */}
                <span
                  className={cn(
                    `
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[2px]
                      bg-[#d9b35c]
                      transition-opacity
                      duration-300
                    `,
                    active ? "opacity-100" : "opacity-0"
                  )}
                />

                <Icon
                  size={16}
                  strokeWidth={active ? 2 : 1.6}
                  className="shrink-0"
                />

                <span
                  className="
                    block
                    w-full
                    max-w-full
                    text-center
                    text-[8px]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.02em]
                    min-[360px]:text-[9px]
                    min-[390px]:text-[10px]
                    min-[430px]:text-[10.5px]
                    sm:text-[11px]
                  "
                >
                  {item.name === "Practice Areas" ? (
                    <>
                      <span className="block">Practice</span>
                      <span className="block">Areas</span>
                    </>
                  ) : item.name === "Contact Us" ? (
                    <>
                      <span className="block">Contact</span>
                      <span className="block">Us</span>
                    </>
                  ) : item.name === "About Us" ? (
                    <>
                      <span className="block">About</span>
                      <span className="block">Us</span>
                    </>
                  ) : (
                    <span className="block">Home</span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* iPhone / Safari safe area */}
        <div
          aria-hidden="true"
          className="w-full bg-[#8f3029]"
          style={{
            height: "env(safe-area-inset-bottom)",
          }}
        />
      </nav>
    </>
  );
}