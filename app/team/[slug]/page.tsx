import { notFound } from "next/navigation";
import Link from "next/link";
import { attorneys } from "@/data/attorneys";

export async function generateStaticParams() {
  return attorneys.map((attorney) => ({
    slug: attorney.id,
  }));
}

export default async function AttorneyProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const attorney = attorneys.find((item) => item.id === slug);

  if (!attorney) {
    notFound();
  }

  return (
    <div className="page-transition">

      {/* =====================================================
          HERO / PROFILE INTRO
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
      -right-8
      top-14
      select-none
      font-display
      text-[100px]
      leading-none
      text-[#d4af4c]/[0.055]
      sm:text-[150px]
      md:text-[200px]
      lg:text-[240px]
    "
  >
    LAW
  </div>

  {/* Soft Gold Glow */}

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

    {/* Back */}

    <Link
      href="/team"
      className="
        mb-10
        inline-flex
        text-[9px]
        font-semibold
        uppercase
        tracking-[0.18em]
        text-[#d4af4c]
        transition-colors
        duration-300
        hover:text-white
      "
    >
      Back to Our Lawyers
    </Link>

    <div
      className="
        grid
        gap-10
        lg:grid-cols-[0.7fr_1.3fr]
        lg:items-center
        lg:gap-16
        xl:gap-20
      "
    >

      {/* =============================================
          IMAGE
      ============================================== */}

      <div className="relative mx-auto w-full max-w-[500px] lg:mx-0">
        <div
          className="
            relative
            aspect-[4/5]
            overflow-hidden
            bg-[#f0e9df]
            shadow-[0_24px_65px_rgba(50,17,15,0.22)]
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
                from-[#f8f4ed]
                to-[#ded4c8]
              "
            >
              <span
                className="
                  font-display
                  text-[100px]
                  font-normal
                  text-[#9d352d]/45
                "
              >
                {attorney.name.charAt(0)}
              </span>
            </div>
          )}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[28%]
              bg-gradient-to-t
              from-[#32110f]/60
              to-transparent
            "
          />
        </div>
      </div>

      {/* =============================================
          PROFILE INTRO
      ============================================== */}

      <div>

        {/* Lawyer Name */}

        <h1
          className="
            max-w-[780px]
            font-display
            text-[43px]
            font-normal
            leading-[1.05]
            tracking-[-0.025em]
            text-white
            sm:text-[52px]
            md:text-[62px]
            lg:text-[68px]
          "
        >
          {attorney.name}
        </h1>

        {/* Lawyer Role */}

        {attorney.role && (
          <p
            className="
              mt-5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#d4af4c]
            "
          >
            {attorney.role}
          </p>
        )}

        {/* =====================================================
            LEGAL 500 — HASAN IRFAN KHAN ONLY
        ====================================================== */}

        {attorney.id === "hasan-irfan-khan" && (
          <div
            className="
              mt-9
              max-w-[750px]
              space-y-7
            "
          >
            {/* Quote 01 */}

            <div>
              <p
                className="
                  font-display
                  text-[18px]
                  italic
                  leading-[1.65]
                  text-white/90
                  sm:text-[20px]
                  md:text-[21px]
                "
              >
                “Recognised for his extensive experience in intellectual
                property and litigation”
              </p>

              <p
                className="
                  mt-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#d4af4c]
                "
              >
                Legal 500
              </p>
            </div>

            {/* Quote 02 */}
          </div>
        )}
      </div>
    </div>
  </div>
</section>
      {/* =====================================================
          BIOGRAPHY
      ====================================================== */}

      {(attorney.bio || attorney.specialization.length > 0) && (
        <section className="bg-[#f8f4ed] py-20 md:py-24 lg:py-28">
          <div className="page-container">
            <div
              className="
                grid
                gap-12
                lg:grid-cols-[0.7fr_1.3fr]
                lg:gap-20
              "
            >

              {/* Heading */}

              <div>

                <h2
                  className="
                    font-display
                    text-[39px]
                    leading-[1.08]
                    text-[#32110f]
                    sm:text-[46px]
                    lg:text-[54px]
                  "
                >
                  Professional Legacy

                  <span className="block text-[#9d352d]">
                    and Expertise
                  </span>
                </h2>
              </div>

              {/* Content */}

              <div>
                {attorney.bio && (
                  <p
                    className="
                      text-[14px]
                      leading-[2]
                      text-[#604b45]
                      md:text-[15px]
                    "
                  >
                    {attorney.bio}
                  </p>
                )}

                {attorney.specialization.length > 0 && (
                  <div className={attorney.bio ? "mt-12" : ""}>
                    <p
                      className="
                        mb-6
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#9d352d]
                      "
                    >
                      Areas of Practice
                    </p>

                    <div
                      className="
                        grid
                        gap-x-8
                        gap-y-4
                        sm:grid-cols-2
                      "
                    >
                      {attorney.specialization.map(
                        (specialization, index) => (
                          <div
                            key={index}
                            className="
                              bg-[#fffdf9]
                              px-5
                              py-4
                              transition-all
                              duration-300
                              hover:-translate-y-0.5
                              hover:bg-white
                              hover:shadow-[0_10px_25px_rgba(50,17,15,0.06)]
                            "
                          >
                            <span
                              className="
                                text-[12px]
                                leading-[1.65]
                                text-[#604b45]
                              "
                            >
                              {specialization}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          PROFESSIONAL DETAILS
      ====================================================== */}

      {(attorney.education?.length ||
        attorney.memberships?.length ||
        attorney.barAdmissions.length > 0 ||
        attorney.admissionYear ||
        (attorney.languages && attorney.languages.length > 0)) && (
        <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
          <div className="page-container">

            {/* Heading */}

            <div className="mb-12 md:mb-16">
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#9d352d]
                "
              >
                Credentials
              </p>

              <h2
                className="
                  font-display
                  text-[39px]
                  leading-[1.08]
                  text-[#32110f]
                  sm:text-[46px]
                  lg:text-[54px]
                "
              >
                Professional

                <span className="text-[#9d352d]">
                  {" "}
                  Details.
                </span>
              </h2>
            </div>

            {/* Details Grid */}

            <div
              className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
              "
            >

              {/* Education */}

              {attorney.education &&
                attorney.education.length > 0 && (
                  <div
                    className="
                      bg-[#f8f4ed]
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white
                      hover:shadow-[0_16px_40px_rgba(50,17,15,0.08)]
                      md:p-9
                    "
                  >
                    <p
                      className="
                        mb-5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#9d352d]
                      "
                    >
                      Education
                    </p>

                    <div className="space-y-4">
                      {attorney.education.map(
                        (education, index) => (
                          <p
                            key={index}
                            className="
                              text-[12px]
                              leading-[1.7]
                              text-[#604b45]
                            "
                          >
                            {education}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Bar Admission */}

              {(attorney.admissionYear ||
                attorney.barAdmissions.length > 0) && (
                <div
                  className="
                    bg-[#f8f4ed]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:shadow-[0_16px_40px_rgba(50,17,15,0.08)]
                    md:p-9
                  "
                >
                  <p
                    className="
                      mb-5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#9d352d]
                    "
                  >
                    Bar Admission
                  </p>

                  {attorney.admissionYear && (
                    <p
                      className="
                        font-display
                        text-[28px]
                        text-[#32110f]
                      "
                    >
                      {attorney.admissionYear}
                    </p>
                  )}

                  {attorney.barAdmissions.length > 0 && (
                    <p
                      className="
                        mt-3
                        text-[12px]
                        leading-[1.7]
                        text-[#604b45]
                      "
                    >
                      {attorney.barAdmissions.join(", ")}
                    </p>
                  )}
                </div>
              )}

              {/* Memberships */}

              {attorney.memberships &&
                attorney.memberships.length > 0 && (
                  <div
                    className="
                      bg-[#f8f4ed]
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white
                      hover:shadow-[0_16px_40px_rgba(50,17,15,0.08)]
                      md:p-9
                    "
                  >
                    <p
                      className="
                        mb-5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#9d352d]
                      "
                    >
                      Membership
                    </p>

                    <div className="space-y-4">
                      {attorney.memberships.map(
                        (membership, index) => (
                          <p
                            key={index}
                            className="
                              text-[12px]
                              leading-[1.7]
                              text-[#604b45]
                            "
                          >
                            {membership}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Languages */}

              {attorney.languages &&
                attorney.languages.length > 0 && (
                  <div
                    className="
                      bg-[#f8f4ed]
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white
                      hover:shadow-[0_16px_40px_rgba(50,17,15,0.08)]
                      md:p-9
                    "
                  >
                    <p
                      className="
                        mb-5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#9d352d]
                      "
                    >
                      Languages
                    </p>

                    <p
                      className="
                        text-[12px]
                        leading-[1.7]
                        text-[#604b45]
                      "
                    >
                      {attorney.languages.join(", ")}
                    </p>
                  </div>
                )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#f8f4ed] py-20 md:py-24 lg:py-28">
        <div className="page-container">
          <div
            className="
              grid
              overflow-hidden
              bg-[linear-gradient(135deg,#9d352d_0%,#8b2d27_50%,#74241f_100%)]
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div className="p-8 sm:p-10 md:p-12 lg:p-14">
              <p
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
              </p>

              <h2
                className="
                  max-w-[720px]
                  font-display
                  text-[35px]
                  leading-[1.12]
                  text-white
                  sm:text-[42px]
                  lg:text-[49px]
                "
              >
                Discuss your legal requirements with our team.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[13px]
                  leading-[1.85]
                  text-white/75
                "
              >
                Contact Irfan &amp; Irfan Attorneys at Law to discuss your
                matter and the legal assistance you require.
              </p>
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
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e2c56f]
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