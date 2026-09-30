import Link from "next/link";
import { notFound } from "next/navigation";

import { practiceAreas } from "@/data/practice-areas";
import { attorneys } from "@/data/attorneys";

/* =========================================================
   STATIC ROUTES
========================================================= */

export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.id,
  }));
}

/* =========================================================
   PAGE
========================================================= */

export default function PracticeAreaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  /* =======================================================
     FIND SELECTED PRACTICE
  ======================================================== */

  const practice = practiceAreas.find(
    (area) => area.id === params.slug
  );

  if (!practice) {
    notFound();
  }

  /* =======================================================
     RELEVANT LAWYERS
  ======================================================== */

  const relevantLawyers = practice.lawyers
    .map((lawyerId) =>
      attorneys.find((attorney) => attorney.id === lawyerId)
    )
    .filter(
      (attorney): attorney is (typeof attorneys)[number] =>
        Boolean(attorney)
    );

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
          md:pb-24
          md:pt-40
          lg:pb-28
        "
      >
        {/* Background Word */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-10
            top-10
            select-none
            font-display
            text-[100px]
            leading-none
            text-white/[0.035]
            sm:text-[145px]
            md:text-[190px]
            lg:text-[235px]
          "
        >
          SERVICES
        </div>

        <div className="page-container relative z-10">

          {/* Back Link */}

          {/* <Link
            href="/practice-areas"
            className="
              mb-8
              inline-block
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d4af4c]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Back to Practice Areas
          </Link> */}

          <div className="max-w-[1000px]">

            {/* <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#d4af4c]
              "
            >
              Practice Area
            </p> */}

            <h1
              className="
                max-w-[950px]
                font-display
                text-[44px]
                font-normal
                leading-[1.04]
                tracking-[-0.03em]
                text-white
                sm:text-[55px]
                md:text-[66px]
                lg:text-[78px]
              "
            >
              {practice.title}
            </h1>

            <p
              className="
                mt-7
                max-w-[760px]
                text-[16px]
                leading-[1.85]
                text-white/70
                md:text-[18px]
              "
            >
              {practice.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE + EXPERTISE
      ====================================================== */}

      <section
        className="
          bg-[#f8f4ed]
          py-20
          md:py-24
          lg:py-28
        "
      >
        <div className="page-container">

          <div
            className="
              grid
              grid-cols-1
              gap-16
              lg:grid-cols-2
              lg:gap-20
              xl:gap-24
            "
          >
            {/* =================================================
                LEFT — EXPERIENCE
            ================================================== */}

            <div>
              

              <h2
                className="
                  max-w-[560px]
                  font-display
                  text-[38px]
                  font-normal
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-[#32110f]
                  sm:text-[44px]
                  md:text-[48px]
                  lg:text-[52px]
                "
              >
                {practice.title}
              </h2>

              <p
                className="
                  mt-7
                  max-w-[650px]
                  text-[16px]
                  leading-[1.95]
                  text-[#604b45]
                  md:text-[17px]
                "
              >
                {practice.fullDescription}
              </p>

              <Link
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  bg-[#9d352d]
                  px-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#32110f]
                "
              >
                Discuss Your Matter
              </Link>
            </div>

            {/* =================================================
                RIGHT — EXPERTISE
            ================================================== */}

            <div>

              <h2
                className="
                  max-w-[560px]
                  font-display
                  text-[38px]
                  font-normal
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-[#32110f]
                  sm:text-[44px]
                  md:text-[48px]
                  lg:text-[52px]
                "
              >
                Our Expertise

                <span className="block text-[#9d352d]">
                  Includes.
                </span>
              </h2>

              {/* Expertise Items */}

              <div
                className="
                  mt-9
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {practice.expertise.map((item) => (
                  <div
                    key={item}
                    className="
                      group
                      flex
                      min-h-[88px]
                      items-center
                      bg-[#fffdf9]
                      px-5
                      py-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#9d352d]
                      hover:shadow-[0_12px_30px_rgba(50,17,15,0.08)]
                    "
                  >
                    <p
                      className="
                        font-display
                        text-[18px]
                        leading-[1.3]
                        text-[#32110f]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELEVANT LAWYERS
      ====================================================== */}

      <section
        className="
          bg-[#fffdf9]
          py-20
          md:py-24
          lg:py-28
        "
      >
        <div className="page-container">

          {/* Heading */}

          <div
            className="
              mb-12
              grid
              gap-6
              lg:grid-cols-[1fr_0.7fr]
              lg:items-end
            "
          >
            <div>
              

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
                Lawyers for

                <span className="block text-[#9d352d]">
                  {practice.title}.
                </span>
              </h2>
            </div>

            {relevantLawyers.length > 0 && (
              <p
                className="
                  max-w-[480px]
                  text-[14px]
                  leading-[1.9]
                  text-[#79665e]
                  lg:ml-auto
                "
              >
              </p>
            )}
          </div>

          {/* =================================================
              LAWYERS FOUND
          ================================================== */}

          {relevantLawyers.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1
                gap-6
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
                    overflow-hidden
                    bg-[#f8f4ed]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_45px_rgba(50,17,15,0.10)]
                  "
                >
                  {/* Image */}

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
                        <span
                          className="
                            font-display
                            text-[52px]
                            text-[#d4af4c]
                          "
                        >
                          {lawyer.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Image Overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#32110f]/55
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Hover Label */}

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        translate-y-2
                        bg-[#d4af4c]
                        px-4
                        py-2
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[#32110f]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      View Profile
                    </div>
                  </div>

                  {/* Details */}

                  <div className="p-6">

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

                    <h3
                      className="
                        font-display
                        text-[24px]
                        leading-[1.15]
                        text-[#32110f]
                        transition-colors
                        duration-300
                        group-hover:text-[#9d352d]
                      "
                    >
                      {lawyer.name}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#79665e]
                        transition-colors
                        duration-300
                        group-hover:text-[#9d352d]
                      "
                    >
                      View Professional Profile
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* =================================================
                NO SPECIFIC LAWYER MAPPED
            ================================================== */

            <div
              className="
                bg-[#f8f4ed]
                px-7
                py-10
                sm:px-10
                sm:py-12
                lg:px-12
                lg:py-14
              "
            >
              <div
                className="
                  grid
                  gap-8
                  md:grid-cols-[1fr_auto]
                  md:items-center
                "
              >
                {/* <div>
                  <p
                    className="
                      font-display
                      text-[28px]
                      leading-[1.2]
                      text-[#32110f]
                      sm:text-[32px]
                    "
                  >
                    Speak with our legal team
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-[720px]
                      text-[15px]
                      leading-[1.85]
                      text-[#79665e]
                    "
                  >
                    This is an established practice of Irfan &amp; Irfan.
                    Contact the firm and our team can direct your matter to
                    the appropriate legal professional.
                  </p>
                </div> */}

                {/* <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    bg-[#9d352d]
                    px-7
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-[#32110f]
                  "
                >
                  Contact Our Team
                </Link> */}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section
        className="
          bg-[#f8f4ed]
          py-20
          md:py-24
          lg:py-28
        "
      >
        <div className="page-container">
          <div
            className="
              grid
              gap-8
              bg-[#9d352d]
              p-8
              sm:p-10
              md:p-12
              lg:grid-cols-[1fr_auto]
              lg:items-center
              lg:p-14
            "
          >
            <div>
              {/* <p
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
              </p> */}

              <h2
                className="
                  max-w-[720px]
                  font-display
                  text-[36px]
                  leading-[1.12]
                  text-white
                  sm:text-[43px]
                  lg:text-[50px]
                "
              >
                Need advice regarding {practice.title}?
              </h2>

              {/* <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[15px]
                  leading-[1.85]
                  text-white/70
                "
              >
                Contact our team to discuss your requirements and determine
                how Irfan &amp; Irfan can assist you.
              </p> */}
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                min-h-[58px]
                min-w-[220px]
                items-center
                justify-center
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}