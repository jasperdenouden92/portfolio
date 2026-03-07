import { useState, useEffect, useRef, type ReactNode } from 'react'
import './App.css'

type Fact = { title: string; body: string; emoji: string; link?: string; linkLabel?: string }
const facts: Fact[] = [
  { title: "I'm a board game addict.", body: "Over 100 board games in the house. And yes, I take it very seriously: I track ratings, stats, scores, and more.", emoji: "🎲", link: "https://boardgamegeek.com/collection/user/jasperdenouden?subtype=boardgame&own=1&ff=1", linkLabel: "Check my collection →" },
  { title: "I try to ace the padel court twice a week.", body: "The ambition is consistent. The aces, slightly less so.", emoji: "🎾" },
  { title: "This site? Designed by me. Coded by me.", body: "I designed it myself. The coding part went with a little help from AI. Okay, maybe more than a little.", emoji: "🤖" },
  { title: "A trip without a castle is an incomplete trip.", body: "I love travelling, like everyone does. But a journey only feels truly done when there's a castle on the itinerary.", emoji: "🏰" },
  { title: "I dream of writing a Fantasy novel.", body: "The dream is alive. The first sentence is not yet written. For now, it's merely a fantasy.", emoji: "📖" },
  { title: "My favourite part of the design process? Workshops.", body: "Facilitating creative sessions is where I truly come alive. With the design sprint as the absolute highlight.", emoji: "⚡" },
  { title: "My favourite Pokémon? Gengar.", body: "Though only because my cats aren't eligible.", emoji: "👻" },
  { title: "A house full of women.", body: "I'm a girl dad of two. Outnumbered, and perfectly okay with it.", emoji: "👧" },
  { title: "I'd love to get a dog again.", body: "Just waiting until my kids are old enough to actually take it for a walk.", emoji: "🐕" },
  { title: "In the car: De Grote Podcastlas.", body: "A Dutch podcast that makes every commute genuinely enjoyable.", emoji: "🎙️", link: "https://www.grotepodcastlas.nl/" },
]

const projects = [
  {
    year: '2025',
    items: [
      {
        client: 'SPIE',
        title: 'Certifications app',
        description: 'Redesigned the app for organization-wide use, making certificate status and expiry far more transparent. Result: better safety compliance across SPIE, supporting a key operational pillar.',
      },
      {
        client: 'SPIE',
        title: 'Time registration app',
        description: "Led a mobile-first redesign of SPIE's time, leave & expense tool. Replaced legacy system, improved speed and usability for ±7,000 users. Started with a design sprint and validated with real user testing.",
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        client: 'Heineken',
        title: 'Draught Competition app & dashboard',
        description: 'Led a design sprint to improve training for Heineken beer judges. Designed a fast, intuitive app for rapid beer assessments, with data centralized in a dashboard to help optimize training and track key insights.',
      },
      {
        client: 'NHG',
        title: 'Administration & workflow applications',
        description: 'Researched and restructured the navigation across four NHG internal applications through interviews, observations, card sorting, and tree testing. Delivered a validated, unified app structure, improved workflows and overview screens, enabling faster, more secure user operations.',
      },
    ],
  },
  { year: '2023', items: [{ client: 'Rederij de Jong', title: 'Planning & matching application' }, { client: 'Smart Event Manager', title: 'Venue management software' }] },
  { year: '2022', items: [{ client: 'Oaky', title: 'Hotel upselling software & guest experience app' }, { client: 'Sitedish', title: 'Self order kiosk, point-of-sale, and web order experience' }] },
  { year: '2021', items: [{ client: 'Bol.com', title: 'Partner program design sprint' }, { client: 'Leaseplan Energy', title: 'Energy contract & charging station ordering flow' }] },
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
  { label: 'UX Design', tip: 'Designing intuitive experiences by mapping user needs, flows, and interactions.' },
  { label: 'UI Design', tip: 'Crafting polished, pixel-perfect interfaces that feel great to use.' },
  { label: 'Product Strategy', tip: 'Connecting user insight to business goals: deciding what to build and why.' },
  { label: 'Design Sprints', tip: 'A 4-day framework to rapidly prototype and validate ideas before committing to them.' },
  { label: 'UX Research', tip: 'Uncovering real user behaviour through interviews, observations, and testing.' },
  { label: 'Creative Workshops', tip: 'Facilitating collaborative sessions that unlock ideas and align teams.' },
  { label: 'Product Validation', tip: 'Testing assumptions early, so the right product gets built, not just a product.' },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const StatsCard = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white flex flex-col xl2:flex-row gap-5 items-start justify-center xl2:items-center xl2:justify-start p-6 rounded-[32px] w-full ${className}`}>
    <div className="flex flex-1 flex-col gap-1 items-start min-w-0">
      <p className="font-[Inter] font-bold text-[#816c61] text-base whitespace-nowrap">Experience</p>
      <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight">12+ years</p>
    </div>
    <div className="flex flex-1 flex-col gap-1 items-start min-w-0">
      <p className="font-[Inter] font-bold text-[#816c61] text-base whitespace-nowrap">Clients</p>
      <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight">100+</p>
    </div>
  </div>
)

function SkillTag({ label, tip }: { label: string; tip: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="font-[Inter] font-bold text-white text-base leading-tight whitespace-nowrap cursor-default select-none">
        {label}
      </span>
      <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 bg-[#1a1b15] text-white text-xs font-[Inter] leading-4 px-3 py-2.5 rounded-2xl pointer-events-none transition-all duration-200 z-50 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
        {tip}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1a1b15]" />
      </span>
    </span>
  )
}

function FadeIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useInView(0.1)
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}>
      {children}
    </div>
  )
}

function ProjectRow({ section }: { section: typeof projects[0] }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={`relative z-10 flex gap-12 items-start w-full transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex items-center justify-center w-[76px] shrink-0 bg-[#2a2c24]">
        <div className="bg-white flex items-start px-3 py-2 rounded-full">
          <p className="font-[Inter] font-bold text-[#2a2c24] text-sm leading-tight whitespace-nowrap">{section.year}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-8 items-start min-w-0">
        {section.items.map((item, i) => (
          <div key={i} className="flex flex-col gap-2 items-start w-full">
            <p className="font-[Inter] font-bold text-[#d3c6a5] text-lg leading-tight">{item.client}</p>
            <p className="font-[Bricolage_Grotesque] font-bold text-white text-2xl leading-tight">{item.title}</p>
            {'description' in item && item.description && (
              <p className="font-[Inter] font-normal text-white text-lg leading-7 w-full">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [showAbout, setShowAbout] = useState(false)
  const [aboutMounted, setAboutMounted] = useState(false)
  const [factIndex, setFactIndex] = useState(0)

  const openAbout = () => { setAboutMounted(true); setTimeout(() => setShowAbout(true), 200) }
  const closeAbout = () => { setShowAbout(false); setTimeout(() => setAboutMounted(false), 400) }

  useEffect(() => {
    document.body.style.overflow = aboutMounted ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [aboutMounted])

  const regenerateFact = () => setFactIndex(i => (i + 1) % facts.length)

  return (
    <div className="min-h-screen bg-[#f4efe3] p-3">
      <div className="flex flex-col lg:flex-row gap-3 items-start w-full">

        {/* Sidebar Card */}
        <div className="animate-fade-up lg:sticky lg:top-3 lg:self-start bg-white flex flex-col gap-6 items-center justify-center p-8 rounded-[32px] w-full lg:w-[360px] lg:h-[calc(100vh-24px)] shrink-0">
          <div className="flex items-start justify-center w-full">
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-[#2a2c24]">
              <img
                src="/assets/avatar.png"
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
              <a href="https://strakzat.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#554f4d] hover:text-[#2a2c24] transition-colors duration-200">Strakzat</a>
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex gap-4 items-center py-1.5">
            <a href="https://www.linkedin.com/in/jasperdenouden/" target="_blank" rel="noopener noreferrer" className="shrink-0 hover:opacity-80 transition-opacity">
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/jasperdenouden" target="_blank" rel="noopener noreferrer" className="bg-[#f4efe3] flex items-center justify-center rounded-full w-10 h-10 shrink-0 hover:opacity-80 transition-opacity">
              <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="mailto:hello@jasperdenouden.com" className="bg-[#f4efe3] flex items-center justify-center rounded-full w-10 h-10 shrink-0 hover:opacity-80 transition-opacity">
              <img src="/assets/email.svg" alt="Email" className="w-5 h-5" />
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start pt-2">
            <button onClick={() => aboutMounted ? closeAbout() : openAbout()} className="bg-[#2a2c24] flex gap-2.5 items-center px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer border-none">
              <span className="font-[Bricolage_Grotesque] font-bold text-white text-base leading-tight whitespace-nowrap">
                {aboutMounted ? 'Less about me' : 'More about me'}
              </span>
              {aboutMounted ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* About me overlay */}
        {aboutMounted && (
          <div className="fixed inset-3 z-50 flex items-stretch pointer-events-none">
            <div className="hidden lg:block w-[360px] shrink-0" />
            <div className={`flex-1 bg-white rounded-[32px] pointer-events-auto overflow-y-auto lg:ml-3 transition-all duration-400 ease-out ${showAbout ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <div className="flex min-h-full">
                <div className="w-px bg-[#f4efe3] shrink-0 my-8 hidden lg:block" />
                <div className="flex flex-col gap-10 px-12 pb-12 pr-6 pt-8 flex-1">
                  <button
                    onClick={closeAbout}
                    className="sticky top-6 self-end bg-[#f4efe3] flex items-center justify-center w-12 h-12 rounded-full border-none cursor-pointer hover:opacity-70 transition-opacity z-10 shrink-0"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="flex flex-col gap-10 pr-16 -mt-[72px] pt-[72px]">
                  <div className="flex flex-col gap-3">
                    <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight">About me</p>
                    <p className="font-[Inter] text-[#2a2c24] text-lg leading-7">
                      I'm a digital product designer based near Rotterdam and co-founder of Strakzat, a digital product studio. My heart beats a little faster when I get to sink my teeth into a complex problem and turn it into something that actually works as a digital product.
                    </p>
                    <p className="font-[Inter] text-[#2a2c24] text-lg leading-7">
                      When I'm not designing, you'll find me gaming, building Lego, playing board games, or hanging out with my family and friends.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight">My approach</p>
                    <p className="font-[Inter] text-[#2a2c24] text-lg leading-7">
                      I can work across the full digital product design spectrum, but where I'm at my strongest is bringing stakeholders together around a single product vision and translating that into UX solutions that have real impact, for users and for the business.
                    </p>
                    <p className="font-[Inter] text-[#2a2c24] text-lg leading-7">
                      Working human-centered is something I take seriously. That means really digging into the needs and desires of both users and the business, and building a digital product around those insights. I validate early, often, and with purpose, to make sure what gets built actually lands. Efficient, pragmatic, and effective.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-2xl leading-tight">Random facts about me</p>
                    <div className="bg-[#2a2c24] rounded-[24px] p-8 flex flex-col gap-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <p className="font-[Bricolage_Grotesque] font-bold text-white text-xl leading-tight">{facts[factIndex].title}</p>
                          <p className="font-[Inter] text-[#d3c6a5] text-base leading-6">
                            {facts[factIndex].body}
                            {facts[factIndex].link && (
                              <a href={facts[factIndex].link} target="_blank" rel="noopener noreferrer" className="ml-1 text-[#f4efe3] font-semibold hover:opacity-70 transition-opacity">{facts[factIndex].linkLabel ?? 'grotepodcastlas.nl →'}</a>
                            )}
                          </p>
                        </div>
                        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shrink-0 text-2xl">
                          {facts[factIndex].emoji}
                        </div>
                      </div>
                      <button onClick={regenerateFact} className="bg-[#f4efe3] flex gap-2 items-center px-4 py-2.5 rounded-full self-start cursor-pointer border-none hover:opacity-80 transition-opacity">
                        <span className="font-[Bricolage_Grotesque] font-bold text-[#2a2c24] text-base leading-tight">Regenerate</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M1 4v6h6M23 20v-6h-6" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" stroke="#2a2c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className={`flex flex-1 flex-col gap-3 min-w-0 transition-opacity duration-200 ${aboutMounted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

          {/* Hero + skills */}
          <div className="animate-fade-up-1 flex flex-col w-full">
            {/* Desktop: title */}
            <div className="hidden lg:block bg-[#2a2c24] p-10 pb-6 rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px] w-full">
              <p className="font-[Bricolage_Grotesque] font-bold text-[#d3c6a5] text-5xl leading-tight w-full">
                I guide{' '}
                <span className="text-white">products</span>
                {' '}from first spark to final polish, where research, strategy, and design meet to create{' '}
                <span className="text-white">meaningful</span>
                {' '}outcomes.
              </p>
            </div>

            {/* Desktop: skills + stats corner */}
            <div className="hidden lg:flex items-stretch w-full">
              <div className="bg-[#2a2c24] flex flex-col items-start py-8 px-10 rounded-bl-[32px] rounded-br-[32px] shrink-0">
                <div className="flex flex-wrap gap-4 items-center w-[360px] xl2:w-[500px]">
                  {skills.flatMap((skill, i) => {
                    const items = [
                      <SkillTag key={skill.label} label={skill.label} tip={skill.tip} />
                    ]
                    if (i < skills.length - 1) {
                      items.push(<span key={`sep-${i}`} className="font-[Inter] font-normal text-[#d3c6a5] text-base leading-tight">/</span>)
                    }
                    return items
                  })}
                </div>
              </div>
              <div className="bg-[#2a2c24] flex flex-1 min-w-0">
                <div className="bg-[#f4efe3] flex flex-1 h-full min-w-0 rounded-tl-[24px]">
                  <div className="flex flex-1 flex-col min-w-0 pl-3 pt-3 w-full h-full">
                    <StatsCard className="h-full rounded-tl-[16px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: title */}
            <div className="lg:hidden bg-[#2a2c24] flex flex-col gap-6 items-start p-8 rounded-[32px] w-full">
              <p className="font-[Bricolage_Grotesque] font-bold text-[#d3c6a5] text-4xl leading-tight w-full">
                I guide{' '}
                <span className="text-white">products</span>
                {' '}from first spark to final polish, where research, strategy, and design meet to create{' '}
                <span className="text-white">meaningful</span>
                {' '}outcomes.
              </p>
            </div>

            {/* Mobile: stats */}
            <div className="lg:hidden pt-3">
              <StatsCard />
            </div>

            {/* Mobile: skills */}
            <div className="lg:hidden bg-[#2a2c24] flex flex-col items-start p-6 rounded-[32px] mt-3 w-full">
              <div className="flex flex-wrap gap-4 items-center">
                {skills.flatMap((skill, i) => {
                  const items = [
                    <SkillTag key={skill.label} label={skill.label} tip={skill.tip} />
                  ]
                  if (i < skills.length - 1) {
                    items.push(<span key={`sep-${i}`} className="font-[Inter] font-normal text-[#d3c6a5] text-base leading-tight">/</span>)
                  }
                  return items
                })}
              </div>
            </div>
          </div>

          {/* Images row */}
          <div className="animate-fade-up-2 flex flex-col md:flex-row gap-3 w-full">
            <div className="relative rounded-[32px] overflow-hidden h-[280px] md:h-[380px] md:flex-1">
              <img src="/assets/photo1.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative rounded-[32px] overflow-hidden h-[280px] md:h-[380px] md:flex-1">
              <img src="/assets/photo2.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Projects */}
          <FadeIn className="bg-[#2a2c24] flex flex-col gap-8 items-start p-10 rounded-[32px] w-full">
            <div className="lg:px-[124px] w-full">
              <p className="font-[Bricolage_Grotesque] font-bold text-white text-[32px] leading-tight">
                My experience
              </p>
            </div>

            <div className="flex flex-col gap-12 w-full relative">
              <div className="absolute left-[37px] top-0 -bottom-10 w-px bg-[#816c61]" />

              {projects.map((section) => (
                <ProjectRow key={section.year} section={section} />
              ))}
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn className="flex flex-col gap-4 items-start p-10 lg:p-16 w-full">
            <div className="flex flex-col gap-2 items-start text-[#2a2c24] w-full">
              <p className="font-[Bricolage_Grotesque] font-bold text-2xl lg:text-[30px] leading-tight">
                Got any product questions or enquiries?
              </p>
              <p className="font-[Inter] font-medium text-xl lg:text-2xl leading-8 w-full">
                I'm just a message away. And while you're at it, swing by my design studio,{' '}
                <a href="https://strakzat.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-70 transition-opacity duration-200">Strakzat</a>. We make cool stuff.
              </p>
            </div>
            <a href="mailto:hello@jasperdenouden.com" className="flex gap-4 items-center hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#816c61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#816c61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-[Inter] font-semibold text-[#816c61] text-xl lg:text-2xl leading-snug">
                hello@jasperdenouden.com
              </p>
            </a>
          </FadeIn>

        </div>
      </div>
    </div>
  )
}
