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
            Eduardo Valencia
          </span>
          <div className="flex items-center gap-4 text-xs sm:text-sm text-[color:var(--olive-700)]">
            <a
              className="transition hover:text-[color:var(--olive-900)]"
              href="mailto:evalencia97wfc@gmail.com"
            >
              evalencia97wfc@gmail.com
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
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Eduardo Valencia
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
                href="mailto:evalencia97wfc@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--olive-900)] px-4 py-2 text-sm font-medium text-[color:var(--olive-50)] transition duration-200 hover:bg-[color:var(--olive-800)]"
              >
                Contact
              </a>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/evalencialaso/"
                  className="btn-chip"
                >
                  LinkedIn
                </a>
              </div>
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
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article key={c.title} className="card group">
                <a href={c.projectLink}>
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
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="rounded-2xl border border-[#d9dec1] bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--olive-900)]">
              Research Projects
            </h2>
            <p className="mt-2 text-sm text-[color:var(--olive-700)]">
              Long-form collaborations and applied research initiatives.
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-[color:var(--olive-800)]">
              {otherWorks.map((t) => (
                <li key={t.title} className="w-full">
                  <a
                    href={t.projectLink}
                    className="block w-full rounded-xl border border-[#d9dec1] bg-white/90 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3 text-[color:var(--olive-700)]">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                        {t.date}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-[color:var(--olive-900)]">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--olive-700)]">
                      {t.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#d9dec1] bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--olive-900)]">
              Media Contributions
            </h2>
            <p className="mt-2 text-sm text-[color:var(--olive-700)]">
              Selected appearances and commentary translating data work for
              broader audiences.
            </p>
            <div className="mt-5 flex flex-col gap-4">
              {mediaContributions.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block w-full rounded-xl border border-[#d9dec1] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-[color:var(--olive-900)]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--olive-700)]">
                      {item.outlet}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--olive-700)]">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--olive-600)]">
                    {item.date}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#d9dec1] bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--olive-900)]">
              Lectures
            </h2>
            <p className="mt-2 text-sm text-[color:var(--olive-700)]">
              Talks and workshops delivered for universities and professional
              communities.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {lectures.map((lecture) => (
                <a
                  key={`${lecture.title}-${lecture.host}`}
                  href={lecture.link}
                  className="block h-full rounded-xl border border-[#d9dec1] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-[color:var(--olive-900)]">
                      {lecture.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--olive-700)]">
                      {lecture.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--olive-700)]">
                    {lecture.host}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--olive-700)]">
                    {lecture.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const cards = [
  {
    title:
      "Climate Indices and Food Insecurity in the RSSC: ND-GAIN Country-level Scores",
    subtitle:
      "Compare ND-GAIN Climate Vulnerability and Readiness scores across RSSC countries. This index draws on international statistics on agriculture, water, health, infrastructure, and governance. Additionally, a simple food insecurity measure is included. Read this as a baseline comparison.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/climate-indices-food-insecurity-rssc-nd-gain-country-level-scores",
  },
  {
    title: "Democracy Levels by Type in the RSSC: Plotting V-Dem Data",
    subtitle:
      "Is the RSSC sliding into autocracy? See it yourself. Compare democracy levels across the Red Sea Security Complex with Varieties of Democracy data. Pick a democracy index type—Electoral, Liberal, Participatory, Deliberative, or Egalitarian—and select countries to view side-by-side.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/democracy-levels-by-type-in-the-rssc-plotting-v-dem-data",
  },
  {
    title:
      "External Military Presence in the Red Sea Security Complex: Bases and Naval Operations",
    subtitle:
      "A geospatial look at military presence in the RSSC: fixed bases vs. recorded naval operations plotted on the same map. The layers make it easy to spot activity clusters and proximity to key maritime passages such as Suez and Bab el-Mandeb",
    projectLink:
      "http://giga-hamburg.de/en/publications/contributions/external-military-presence-red-sea-security-complex-bases-naval-operations",
  },
  {
    title:
      "Fatalities from Organized Violence in the RSSC: Types of Violence and Spatial Clusters",
    subtitle:
      "A hotspot map of organized-violence fatalities across the RSSC, based on UCDP geocoded events. The focus is spatial: which areas show concentrated fatality records. Use it for quick orientation and comparative reading of where violence clusters—not why it happens.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/fatalities-organized-violence-rssc-types-violence-spatial-clusters",
  },
  {
    title:
      "Foreign Trade Ties of RSSC States: Imports, Exports, and Destination Shares Overtime",
    subtitle:
      "A view of who trades with whom in the RSSC. Track each country’s exposure to external partners—Gulf states, the EU, China, among others—on both exports and imports. Compare partner shares, shifts over time, and asymmetries between countries in and outside the Greater Horn of Africa.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/foreign-trade-ties-rssc-states-imports-exports-destination-shares-overtime",
  },
  {
    title:
      "Migrant Stocks in Red Sea Security Complex (RSSC) Countries: Interactive bubble map of refugees, asylum seekers, and IDPs",
    subtitle:
      "An interactive bubble map of migrant stocks across RSSC countries. Pick a category—refugees, asylum seekers, or IDPs—and the bubbles resize to show country totals. A quick, comparative view designed for fast scanning and cross-country context.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/migrant-stocks-red-sea-security-complex-rssc-countries-interactive-bubble-map-refugees-asylum-seekers-id-ps",
  },
  {
    title:
      "State Fragility in the RSSC: Authority, Capacity, Legitimacy: Subtitle of the Contribution in Original Language Indexes from IDOS",
    subtitle:
      "View state fragility in the RSSC as three IDOS components: authority, capacity, and legitimacy. The page shows how these dimensions differ by country. Scores are compiled by IDOS from multiple underlying sources to create comparable indicators.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/fragility-rssc-authority-capacity-legitimacy-subtitle-contribution-original-language-indexes-idos",
  },
  {
    title:
      "Official Development Finance to Red Sea Security Complex Countries: Comparing OECD Donors, Chinese Development Finance, and Gulf sources",
    subtitle:
      "See how Red Sea Security Complex countries finance their development needs from outside: compare Western donors, China development finance, and Gulf sources relative to the recipient country's economy.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/official-development-finance-red-sea-security-complex-countries-comparing-traditional-donors-chinese-development-finance-gulf-sources",
  },
  {
    title:
      "International Organization Memberships of RSSC States: Dynamic tables by topic: Diplomacy, Security, and Economics",
    subtitle:
      "Browse International Organization (IO) memberships for RSSC countries with dynamic tables. See IO classified by topics: Diplomacy, Security, or Economics. A clean directory of affiliations to support quick checks and cross-country comparison.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/international-organization-memberships-rssc-states-dynamic-tables-topic-diplomacy-security-economics",
  },
  {
    title:
      "GDP per Capita and Remittance Inflows in the RSSC: A View of Each Country Over Time",
    subtitle:
      "How wealthy are RSSC countries, and how much depends on remittances? See GDP per capita next to remittance inflows and remittances as percent of GDP for each state. A snapshot to compare living standards and the economic weight of external household income across the RSSC over time.",
    projectLink:
      "https://www.giga-hamburg.de/en/publications/contributions/gdp-capita-remittance-inflows-rssc-view-country-time",
  },
];

const otherWorks = [
  {
    title:
      "Transfer for Transformation – Knowledge Exchange with Global Reach (T4T)",
    description:
      "Transfer for Transformation (T4T) is an application lab. T4T will innovate in the practice of knowledge transfer through consequent target-group-integration and novel access strategies. It will also advance the scholarship on the subject by analysing the effectiveness and impact of different types of knowledge transfer.",
    date: " 01/07/2022 - 30/06/2025",
    projectLink:
      "https://www.giga-hamburg.de/en/research-and-transfer/projects/transfer-for-transformation-knowledge-exchange-with-global-reach",
  },
];

const mediaContributions = [
  {
    title: "Warum sollte ich grundlos meine Heimat verlassen?“",
    outlet: "Fränkischen Tag | Mention |",
    description:
      'For the article "Why should I leave my home for no reason?", map by Eduardo Valencia was displayed under the title "Übersicht der Akteure und ihrer territorialen Kontrolle in Syrien" (Overview of the actors and their territorial controls in Syria).',
    date: "11/09/2024",
    link: "https://www.bbc.co.uk/",
  },
];

const lectures = [
  {
    title:
      "Experts Workshop Port Cities Fighting Transatlantic Drug Trafficking",
    host: "Prof. Dr. Sabine Kurtenbach, Julia Kramer, Dr. Jonas von Hoffmann, Janaina Maldonado Guerra da Cunha, PD Dr. Dr. Ariel Macaspac Hernandez, Eduardo Valencia",
    description:
      "Workshop on integrating exploratory data analysis with narrative framing for policy briefings.",
    year: "07/04/2025 - 08/04/2025",
    link: "https://www.giga-hamburg.de/en/events/conferences-and-workshops/experts-workshop-port-cities-fighting-transatlantic-drug-trafficking-closed",
  },
  {
    title:
      "Preserving and Transferring Indigenous Knowledge in a Digital World",
    host: "PD Dr. Dr. Ariel Macaspac Hernandez,Julia Kramer, Eduardo Valencia,Prof. Dr. Eckart Woertz,Dr. Daniela Osorio Michel,Arukapé Suruí Aikewara,Dr. Sangeeta Mahapatra, Ana Rosa de Lima Tovstiga",
    description:
      "Guest lecture covering rapid prototyping workflows and accessibility considerations for newsroom visuals.",
    year: " 10/03/2025 - 12/03/2025",
    link: "",
  },
];
