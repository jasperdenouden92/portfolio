import './App.css'

const projects = [
  {
    year: '2025',
    items: [
      {
        client: 'SPIE',
        title: 'Certifications app',
        description:
          'Redesigned the app for organization-wide use, making certificate status and expiry far more transparent. Result: better safety compliance across SPIE, supporting a key operational pillar.',
      },
      {
        client: 'SPIE',
        title: 'Time registration app',
        description:
          "Led a mobile-first redesign of SPIE's time, leave & expense tool. Replaced legacy system, improved speed and usability for ±7,000 users. Started with a design sprint and validated with real user testing.",
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        client: 'Heineken',
        title: 'Draught Competition app & dashboard',
        description:
          'Led a design sprint to improve training for Heineken beer judges. Designed a fast, intuitive app for rapid beer assessments, with data centralized in a dashboard to help optimize training and track key insights.',
      },
      {
        client: 'NHG',
        title: 'Administration & workflow applications',
        description:
          'Researched and restructured the navigation across four NHG internal applications through interviews, observations, card sorting, and tree testing. Delivered a validated, unified app structure, improved workflows and overview screens, enabling faster, more secure user operations.',
      },
    ],
  },
  {
    year: '2023',
    items: [
      { client: 'Rederij de Jong', title: 'Planning & matching application' },
      { client: 'Smart Event Manager', title: 'Venue management software' },
    ],
  },
  {
    year: '2022',
    items: [
      { client: 'Oaky', title: 'Hotel upselling software & guest experience app' },
      { client: 'Sitedish', title: 'Self order kiosk, point-of-sale, and web order experience' },
    ],
  },
  {
    year: '2021',
    items: [
      { client: 'Bol.com', title: 'Partner program design sprint' },
      { client: 'Leaseplan Energy', title: 'Energy contract & charging station ordering flow' },
    ],
  },
  {
    year: 'Earlier',
    items: [
      { client: 'City of Breda', title: 'Citymarketing web experience' },
      { client: 'Municipality of Rotterdam', title: 'Learning and activation platform for new environmental law' },
      { client: 'Van Dale', title: 'Online dictionary' },
      { client: 'Tempo Team', title: 'Employment agency website' },
      { client: 'Louwman / Auto.nl', title: 'The first dutch webshop for cars' },
    ],
  },
]

const skills = [
  'UX Design', 'UI Design', 'Product Strategy', 'Design Sprints',
  'UX Research', 'Product Strategy', 'Creative Workshops', 'Product Validation',
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4efe3] p-4">
      <div className="flex gap-3 items-start w-full">

        {/* Sidebar Card — sticky */}
        <div className="sticky top-4 bg-white flex flex-col gap-6 items-center justify-center overflow-hidden p-8 rounded-[32px] shrink-0 w-[360px] min-h-[992px]">
          <div className="flex items-start justify-center w-full">
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-[#2a2c24]">
              <img
                src="https://www.figma.com/api/mcp/asset/40237395-54f8-4c3c-89ec-09e732e4f5cd"
                alt="Jasper den Ouden"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight whitespace-nowrap">
              Jasper den Ouden
            </p>
            <p className="font-[Inter] font-medium text-[#816c61] text-xl text-center w-64 leading-7">
              Digital Product Designer &{' '}
              <br />
              Co-founder of{' '}
              <span className="font-semibold text-[#554f4d]">Strakzat</span>
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex gap-4 items-center py-1.5">
            <a
              href="https://linkedin.com/in/jasperdenouden"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f4efe3] flex items-center justify-center rounded-full w-10 h-10 shrink-0 hover:opacity-80 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/jasperdenouden"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f4efe3] flex items-center justify-center rounded-full w-10 h-10 shrink-0 hover:opacity-80 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="4" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#2a2c24"/>
              </svg>
            </a>
            <a
              href="mailto:hello@jasperdenouden.com"
              className="bg-[#f4efe3] flex items-center justify-center rounded-full w-10 h-10 shrink-0 hover:opacity-80 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start pt-2">
            <button className="bg-[#2a2c24] flex gap-2.5 items-center px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer border-none">
              <span className="font-[Bricolage_Grotesque] font-bold text-white text-base leading-tight whitespace-nowrap">
                More about me
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-3 min-w-0">

          {/* Hero + skills */}
          <div className="flex flex-col w-full">
            <div className="bg-[#2a2c24] flex flex-col gap-6 items-start p-10 pb-6 rounded-tl-[32px] rounded-tr-[32px] w-full">
              <p className="font-[Bricolage_Grotesque] font-bold text-[#d3c6a5] text-5xl leading-tight w-full">
                I guide{' '}
                <span className="text-white">products</span>
                {' '}from first spark to final polish, where research, strategy, and design meet to create{' '}
                <span className="text-white">meaningful</span>
                {' '}outcomes.
              </p>
            </div>

            <div className="flex h-[129px] items-start w-full">
              <div className="bg-[#2a2c24] flex flex-col items-start pb-10 px-10 rounded-bl-[32px] shrink-0">
                <div className="flex flex-wrap gap-4 items-center w-[500px]">
                  {skills.flatMap((skill, i) => {
                    const items = [
                      <span key={skill} className="font-[Inter] font-bold text-white text-base leading-tight whitespace-nowrap">{skill}</span>
                    ]
                    if (i < skills.length - 1) {
                      items.push(
                        <span key={`sep-${i}`} className="font-[Inter] font-normal text-[#d3c6a5] text-base leading-tight">/</span>
                      )
                    }
                    return items
                  })}
                </div>
              </div>

              <div className="bg-[#2a2c24] flex flex-1 items-start self-stretch min-w-0">
                <div className="bg-[#f4efe3] flex flex-1 h-full min-w-0 rounded-tl-[24px]">
                  <div className="flex flex-1 flex-col min-w-0 pl-3 pt-3 w-full">
                    <div className="bg-white flex flex-1 gap-5 items-center p-6 rounded-bl-[24px] rounded-br-[32px] rounded-tl-[24px] rounded-tr-[24px] w-full">
                      <div className="flex flex-1 flex-col gap-1 items-start min-w-0">
                        <p className="font-[Inter] font-bold text-[#816c61] text-base whitespace-nowrap">Experience</p>
                        <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight">10+ years</p>
                      </div>
                      <div className="flex flex-1 flex-col gap-1 items-start min-w-0">
                        <p className="font-[Inter] font-bold text-[#816c61] text-base whitespace-nowrap">Clients</p>
                        <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight">100+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Images row */}
          <div className="flex gap-3 h-[380px] w-full">
            <div className="flex-1 relative rounded-[32px] overflow-hidden">
              <img
                src="https://www.figma.com/api/mcp/asset/4be6c8ac-de5a-459a-82fe-091dae3a2105"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 relative rounded-[32px] overflow-hidden">
              <img
                src="https://www.figma.com/api/mcp/asset/fbdae112-351d-41b4-b465-dfd07cfb2130"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Projects */}
          <div className="bg-[#2a2c24] flex flex-col gap-8 items-start p-10 rounded-[32px] w-full">
            <div className="px-[124px] w-full">
              <p className="font-[Bricolage_Grotesque] font-bold text-white text-[32px] leading-tight whitespace-nowrap">
                Notable projects
              </p>
            </div>

            <div className="flex flex-col gap-12 w-full relative">
              {/* Timeline line */}
              <div className="absolute left-[37px] top-0 bottom-0 w-px bg-[#816c61]" />

              {projects.map((section) => (
                <div key={section.year} className="relative z-10 flex gap-12 items-start w-full">
                  {/* Year badge — bg masks the line */}
                  <div className="flex items-center justify-center w-[76px] shrink-0 bg-[#2a2c24]">
                    <div className="bg-white flex items-start px-3 py-2 rounded-full">
                      <p className="font-[Inter] font-bold text-[#2a2c24] text-sm leading-tight whitespace-nowrap">
                        {section.year}
                      </p>
                    </div>
                  </div>

                  {/* Project items */}
                  <div className="flex flex-1 flex-col gap-8 items-start min-w-0">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex flex-col gap-2 items-start w-full">
                        <p className="font-[Inter] font-bold text-[#d3c6a5] text-lg leading-tight whitespace-nowrap">
                          {item.client}
                        </p>
                        <p className="font-[Bricolage_Grotesque] font-bold text-white text-2xl leading-tight">
                          {item.title}
                        </p>
                        {'description' in item && item.description && (
                          <p className="font-[Inter] font-normal text-white text-lg leading-7 w-full">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 items-start p-12 w-full">
            <div className="flex flex-col gap-2 items-start text-[#2a2c24] w-full">
              <p className="font-[Bricolage_Grotesque] font-bold text-[30px] leading-tight">
                Got any product questions or enquiries?
              </p>
              <p className="font-[Inter] font-medium text-2xl leading-8 w-full">
                I'm just a message away. And while you're at it, swing by my design studio,{' '}
                <span className="font-semibold">Strakzat</span>. We make cool stuff.
              </p>
            </div>
            <a
              href="mailto:hello@jasperdenouden.com"
              className="flex gap-4 items-center hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#816c61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#816c61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-[Inter] font-semibold text-[#816c61] text-2xl leading-snug">
                hello@jasperdenouden.com
              </p>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
