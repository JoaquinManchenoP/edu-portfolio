import Image from "next/image";

const stats = [
  { label: "Years in data", value: "10+" },
  { label: "Visuals shipped", value: "120+" },
  { label: "Toolset", value: "D3 · React · Mapbox" },
];

export default function Home() {
  return (
    <div className="min-h-svh bg-[color:var(--olive-50)] text-[color:var(--olive-900)] antialiased">
      <header className="border-b border-[#c8cfb3] bg-[color:var(--olive-50)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--olive-700)]">
            Edwin Reyes
          </span>
          <div className="flex items-center gap-4 text-xs sm:text-sm text-[color:var(--olive-700)]">
            <a
              className="transition hover:text-[color:var(--olive-900)]"
              href="mailto:kenneth.reyes@gmail.com"
            >
              kenneth.reyes@gmail.com
            </a>
            <a href="#" className="btn-chip">
              Download CV
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
        <section
          className="grid gap-12 lg:grid-cols-[var(--media-col)_var(--content-col)]"
          style={{ "--media-col": "45%", "--content-col": "55%" }}
        >
          <div className="flex justify-center lg:justify-start">
            <div className="profile-frame relative overflow-hidden rounded-2xl border border-[#c8cfb3] bg-white shadow-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[color:var(--olive-100)]"
              />
              <Image
                src="/images/profile.png"
                alt="Portrait of Edwin Reyes"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 85vw"
                className="object-cover"
              />
            </div>
          </div>

          <section className="max-w-2xl justify-self-center space-y-6 text-balance lg:justify-self-start">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#c8cfb3] bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--olive-700)]">
              Data Visualization & Storytelling
            </span>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Edgar valencia
            </h1>
            <p className="text-sm leading-relaxed text-[color:var(--olive-800)] sm:text-base flex flex-col space-y-4 ">
              <span>
                - Since 09/2023: Outreach administrator in the Knowledge
                Exchange Project Transfer 4 Transformation led by Prof. Amrita
                Narlikar (until 05/2024)
              </span>
              <span>
                - Prof. Eckart Woertz (since 05/2024) Education: M.A. in
                International Affairs, Finance & Trade, Hertie School of
                Governance in Berlin; B.A. in Business Administration, History,
                Briar Cliff University, USA
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--olive-900)]/10 bg-white px-4 py-2 text-sm font-medium text-[color:var(--olive-900)] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                View projects
              </a>
              <a
                href="mailto:kenneth.reyes@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--olive-900)] px-4 py-2 text-sm font-medium text-[color:var(--olive-50)] transition duration-200 hover:bg-[color:var(--olive-800)]"
              >
                Contact
              </a>
              <div className="flex gap-2">
                <a href="#" className="btn-chip">
                  LinkedIn
                </a>
                <a href="#" className="btn-chip">
                  GitHub
                </a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#d9dec1] bg-white/80 p-4 shadow-sm"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--olive-700)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[color:var(--olive-900)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[color:var(--olive-700)]">
              Currently based in Berlin.
            </p>
          </section>
        </section>

        <section id="projects" className="mt-16 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--olive-700)]">
                Featured Work
              </p>
              <h2 className="text-2xl font-semibold">Publications</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-[color:var(--olive-700)]">
              <span className="btn-chip">Dataviz</span>
              <span className="btn-chip">Interaction</span>
              <span className="btn-chip">Narrative</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article key={c.title} className="card group">
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold leading-tight text-[color:var(--olive-900)]">
                      {c.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[color:var(--olive-700)]">
                      {c.subtitle}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--olive-700)]">
                    View case study
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-2xl border border-[#d9dec1] bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--olive-900)]">
              Research Projects
            </h2>
            <h2 className="text-md font-semibold text-[color:var(--olive-900)] mt-2">
              Transfer for Transformation – Knowledge Exchange with Global Reach
              (T4T)
            </h2>
            <p className="mt-2 text-sm text-[color:var(--olive-700)]">
              Research Project | 01/07/2022 - 30/06/2025
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--olive-800)]">
              {otherWorks.map((t, i) => (
                <li
                  key={i}
                  className="border-l border-[#d9dec1] ps-4"
                  dangerouslySetInnerHTML={{ __html: t }}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] text-[color:var(--olive-700)] sm:text-xs">
          © 2025 Edwin Reyes. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const cards = [
  {
    title:
      "Climate Indices and Food Insecurity in the RSSC: ND-GAIN Country-level Scores",
    subtitle:
      "Compare ND-GAIN Climate Vulnerability and Readiness scores across RSSC countries. This index draws on international statistics on agriculture, water, health, infrastructure, and governance. Additionally, a simple food insecurity measure is included. Read this as a baseline comparison.",
  },
  {
    title: "Democracy Levels by Type in the RSSC: Plotting V-Dem Data",
    subtitle:
      "Is the RSSC sliding into autocracy? See it yourself. Compare democracy levels across the Red Sea Security Complex with Varieties of Democracy data. Pick a democracy index type—Electoral, Liberal, Participatory, Deliberative, or Egalitarian—and select countries to view side-by-side.",
  },
  {
    title:
      "Fatalities from Organized Violence in the RSSC: Types of Violence and Spatial Clusters",
    subtitle:
      "A hotspot map of organized-violence fatalities across the RSSC, based on UCDP geocoded events. The focus is spatial: which areas show concentrated fatality records. Use it for quick orientation and comparative reading of where violence clusters—not why it happens.",
    icon: "/window.svg",
  },
  {
    title:
      "Foreign Trade Ties of RSSC States: Imports, Exports, and Destination Shares Overtime",
    subtitle:
      "A view of who trades with whom in the RSSC. Track each country’s exposure to external partners—Gulf states, the EU, China, among others—on both exports and imports. Compare partner shares, shifts over time, and asymmetries between countries in and outside the Greater Horn of Africa.",
  },
];

const otherWorks = [
  "Transfer for Transformation (T4T) is an application lab. T4T will innovate in the practice of knowledge transfer through consequent target-group-integration and novel access strategies. It will also advance the scholarship on the subject by analysing the effectiveness and impact of different types of knowledge transfer Leibniz Association, 2022-2025",
];
