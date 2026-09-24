import { notFound } from "next/navigation";
import Link from "next/link";
import { attorneys } from "@/data/attorneys";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  GraduationCap,
  Languages,
  Scale,
  UserRound,
  Landmark,
} from "lucide-react";

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
          bg-[#32110f]
          pb-20
          pt-32
          md:pb-24
          md:pt-40
          lg:pb-28
        "
      >
        {/* Background Decoration */}
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
            text-white/[0.025]
            sm:text-[150px]
            md:text-[200px]
            lg:text-[240px]
          "
        >
          LAW
        </div>

        <div className="page-container relative z-10">

          {/* Back */}
          <Link
            href="/team"
            className="
              group
              mb-10
              inline-flex
              items-center
              gap-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#d4af4c]
              transition-colors
              hover:text-white
            "
          >
            <ArrowLeft
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
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
            <div className="relative max-w-[500px]">

              <div
                className="
                  absolute
                  -bottom-4
                  -right-4
                  h-full
                  w-full
                  border
                  border-[#d4af4c]/30
                "
              />

              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  bg-[#f0e9df]
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
                      from-[#eee8df]
                      to-[#d8cbbd]
                    "
                  >
                    <UserRound
                      size={120}
                      strokeWidth={0.7}
                      className="text-[#9d352d]/45"
                    />
                  </div>
                )}

                <div
                  className="
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
                  text-[#d4af4c]
                "
              >
                <span className="h-px w-9 bg-[#d4af4c]" />
                Attorney Profile
              </div>

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

              {/* Quick Information */}
              <div
                className="
                  mt-9
                  grid
                  border-l
                  border-t
                  border-white/15
                  sm:grid-cols-2
                "
              >
                {attorney.admissionYear && (
                  <div
                    className="
                      border-b
                      border-r
                      border-white/15
                      p-5
                    "
                  >
                    <CalendarDays
                      size={18}
                      strokeWidth={1.4}
                      className="mb-3 text-[#d4af4c]"
                    />

                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/40
                      "
                    >
                      Year of Admission
                    </p>

                    <p
                      className="
                        mt-2
                        font-display
                        text-[21px]
                        text-white
                      "
                    >
                      {attorney.admissionYear}
                    </p>
                  </div>
                )}

                {attorney.languages &&
                  attorney.languages.length > 0 && (
                    <div
                      className="
                        border-b
                        border-r
                        border-white/15
                        p-5
                      "
                    >
                      <Languages
                        size={18}
                        strokeWidth={1.4}
                        className="mb-3 text-[#d4af4c]"
                      />

                      <p
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white/40
                        "
                      >
                        Languages
                      </p>

                      <p
                        className="
                          mt-2
                          text-[12px]
                          leading-[1.6]
                          text-white/80
                        "
                      >
                        {attorney.languages.join(", ")}
                      </p>
                    </div>
                  )}
              </div>

              {/* Consultation Button */}
              <Link
                href="/contact"
                className="
                  group
                  mt-9
                  inline-flex
                  min-h-[56px]
                  items-center
                  justify-between
                  gap-8
                  bg-[#d4af4c]
                  px-7
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#32110f]
                  transition-colors
                  hover:bg-[#e2c66f]
                "
              >
                Contact Our Team

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                  className="
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
                  Professional Profile
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
                  Biography &
                  <span className="block text-[#9d352d]">
                    Experience.
                  </span>
                </h2>

                <div className="mt-7 h-px w-16 bg-[#d4af4c]" />
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
                              flex
                              items-start
                              gap-3
                              border-b
                              border-[#32110f]/10
                              pb-4
                            "
                          >
                            <div
                              className="
                                mt-[2px]
                                flex
                                h-[19px]
                                w-[19px]
                                flex-shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#d4af4c]
                              "
                            >
                              <Check
                                size={10}
                                strokeWidth={2}
                                className="text-[#9d352d]"
                              />
                            </div>

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
        attorney.admissionYear) && (
        <section className="bg-[#fffdf9] py-20 md:py-24 lg:py-28">
          <div className="page-container">

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


            <div
              className="
                grid
                border-l
                border-t
                border-[#32110f]/15
                md:grid-cols-2
                xl:grid-cols-3
              "
            >

              {/* Education */}
              {attorney.education &&
                attorney.education.length > 0 && (
                  <div
                    className="
                      border-b
                      border-r
                      border-[#32110f]/15
                      p-7
                      md:p-9
                    "
                  >
                    <GraduationCap
                      size={26}
                      strokeWidth={1.2}
                      className="mb-6 text-[#9d352d]"
                    />

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
                    border-b
                    border-r
                    border-[#32110f]/15
                    p-7
                    md:p-9
                  "
                >
                  <Scale
                    size={26}
                    strokeWidth={1.2}
                    className="mb-6 text-[#9d352d]"
                  />

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
                      border-b
                      border-r
                      border-[#32110f]/15
                      p-7
                      md:p-9
                    "
                  >
                    <Landmark
                      size={26}
                      strokeWidth={1.2}
                      className="mb-6 text-[#9d352d]"
                    />

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
                      border-b
                      border-r
                      border-[#32110f]/15
                      p-7
                      md:p-9
                    "
                  >
                    <Languages
                      size={26}
                      strokeWidth={1.2}
                      className="mb-6 text-[#9d352d]"
                    />

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
              bg-[#9d352d]
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
                  text-white/65
                "
              >
                Contact Irfan &amp; Irfan Attorneys at Law to discuss your
                matter and the legal assistance you require.
              </p>

            </div>


            <div
              className="
                border-t
                border-white/15
                p-8
                sm:p-10
                lg:border-l
                lg:border-t-0
                lg:p-12
              "
            >
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

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="
                    text-[#d4af4c]
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

    </div>
  );
}