import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, ArrowUpRight, BookOpen, Clock3, Droplets, Instagram, LocateFixed, MapPin, Menu, Navigation, Phone, Scissors, Sparkles, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const address = 'SHOP NO.5,6,7, ISHWAR ICON, SHREENATHJI, Haveli Rd, nr. JIVAN TWIN BUNGALOWS, Nicol Gam, Nikol, Ahmedabad, Gujarat 380049';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const storefrontImage = `${import.meta.env.BASE_URL}smartlook-storefront.png`;
const logoImage = `${import.meta.env.BASE_URL}smartlook-logo.png`;

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand-logo-link ${light ? 'brand-logo-link-light' : ''}`} data-testid="link-brand-home">
      <img src={logoImage} alt="SmartLook Bridal Studio & Academy" className="brand-logo" />
    </a>
  );
}

function SoapObject() {
  return (
    <div className="product-stage" aria-label="A floating sculptural SMARTLOOK barber soap bar">
      <div className="stage-marker" />
      <div className="product-shadow" />
      <div className="soap-scene">
        <div className="soap-side" />
        <div className="soap-top" />
        <div className="soap-face">
          <div className="soap-label">
            <span className="brand">SMARTLOOK</span>
            <span className="soap-name">BARBER</span>
            <span className="sub">SOAP · GROOMING RITUAL</span>
          </div>
          <div className="soap-band" />
        </div>
      </div>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[0.58rem] tracking-[0.18em] text-[#575248]">TURN THE OBJECT / FIND YOUR FINISH</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: '#the-bar', label: 'The bar' },
    { href: '#ritual', label: 'The ritual' },
    { href: '#studio', label: 'Visit us' },
  ];
  return (
    <header className="absolute left-0 right-0 top-0 z-30 px-5 py-5 sm:px-8 lg:px-14" data-testid="site-header">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="mono-label text-[#575248] transition-colors hover:text-[#c55b3d]" data-testid={`link-nav-${link.label.replace(/\s/g, '-')}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="tel:07228875159" className="button-dark hidden min-h-0 px-5 py-3 text-[0.63rem] md:inline-flex" data-testid="link-header-call">
          Book now <Phone size={13} strokeWidth={2.5} />
        </a>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-[#222536]/20 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)} data-testid="button-toggle-menu">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mx-auto mt-4 max-w-[1320px] border border-[#222536]/15 bg-[#eee7d8]/95 p-5 backdrop-blur-md md:hidden" data-testid="mobile-navigation">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="mono-label flex items-center justify-between text-[#222536]" data-testid={`link-mobile-${link.label.replace(/\s/g, '-')}`}>
                {link.label} <ArrowUpRight size={15} />
              </a>
            ))}
            <a href="tel:07228875159" className="button-dark mt-2 w-full" data-testid="link-mobile-call">Book now · 072288 75159 <Phone size={14} /></a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-grid relative min-h-[780px] overflow-hidden bg-[#eee7d8] px-5 pb-20 pt-32 sm:px-8 lg:px-14 lg:pt-40" data-testid="section-hero">
      <div className="hero-orb" />
      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-6 lg:grid-cols-[1.03fr_.97fr]">
        <div className="max-w-2xl">
          <div className="reveal section-kicker mono-label mb-7"><span>SmartLook Bridal Studio &amp; Academy</span></div>
          <h1 className="reveal reveal-delay-1 display-face max-w-[720px] text-[clamp(4.3rem,11vw,9.8rem)] leading-[.78] tracking-[-0.055em] text-[#222536]">
            A better<br /><em className="text-[#c55b3d]">bar</em> to start with.
          </h1>
          <p className="reveal reveal-delay-2 mt-10 max-w-md text-[1.05rem] leading-7 text-[#575248]">
            Skin, hair, makeup, and a polished grooming ritual — SMARTLOOK Bridal Studio &amp; Academy brings the confidence of the chair into every finish.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <a href="tel:07228875159" className="button-gold" data-testid="link-hero-booking">Book now <Phone size={14} /></a>
            <a href="#ritual" className="button-outline" data-testid="link-hero-ritual">See the ritual <ArrowDownRight size={15} /></a>
          </div>
          <div className="reveal reveal-delay-4 mt-14 flex items-center gap-5 border-t border-[#222536]/15 pt-5">
            <span className="mono-label text-[#c55b3d]">01</span>
            <span className="text-sm text-[#575248]">Lather. Glide. Rinse. Walk out polished.</span>
          </div>
        </div>
        <div className="reveal reveal-delay-2 lg:pt-8">
          <SoapObject />
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden border-y border-[#222536]/10 py-3">
        <div className="marquee-track flex w-max gap-8 font-mono text-[0.6rem] tracking-[.2em] text-[#575248]">
          <span>BARBER SOAP</span><span className="text-[#c55b3d]">◆</span><span>MADE FOR THE FINISH</span><span className="text-[#c55b3d]">◆</span><span>SMARTLOOK AHMEDABAD</span><span className="text-[#c55b3d]">◆</span><span>BARBER SOAP</span><span className="text-[#c55b3d]">◆</span><span>MADE FOR THE FINISH</span><span className="text-[#c55b3d]">◆</span><span>SMARTLOOK AHMEDABAD</span><span className="text-[#c55b3d]">◆</span>
        </div>
      </div>
    </section>
  );
}

function ProductStory() {
  return (
    <section id="the-bar" className="bg-[#f4eee3] px-5 py-24 sm:px-8 lg:px-14 lg:py-36" data-testid="section-product-story">
      <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <div className="section-kicker mono-label mb-7">The object</div>
          <h2 className="display-face max-w-md text-6xl leading-[.9] tracking-[-.04em] text-[#222536] sm:text-8xl">Good grooming has a shape.</h2>
          <p className="mt-8 max-w-sm text-[1rem] leading-7 text-[#575248]">Hold it, work it between wet palms, and let the bar make the first move. This is grooming designed to be felt before it is used.</p>
        </div>
        <div className="grid gap-x-10 gap-y-12 self-end sm:grid-cols-2">
          {[
            { icon: <Droplets size={21} />, title: 'A generous lather', body: 'Build a rich, cushiony lather that gives your hands something to work with.' },
            { icon: <Scissors size={21} />, title: 'Made for razor glide', body: 'A smooth, even layer helps the blade move with control across the skin.' },
            { icon: <Sparkles size={21} />, title: 'A clean skin feel', body: 'Rinse away the day and leave the face feeling fresh, not overworked.' },
            { icon: <BookOpen size={21} />, title: 'A studio standard', body: 'The same attention to finish we bring to every SMARTLOOK appointment.' },
          ].map((feature, index) => (
            <article className="feature-tile" key={feature.title} data-testid={`feature-product-${index}`}>
              <div className="mb-5 flex items-center justify-between text-[#c55b3d]"><span>{feature.icon}</span><span className="feature-index">0{index + 1}</span></div>
              <h3 className="display-face text-3xl text-[#222536]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#575248]">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformancePanel() {
  return (
    <section className="dark-panel px-5 py-24 sm:px-8 lg:px-14 lg:py-32" data-testid="section-performance">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <div className="section-kicker mono-label mb-7 text-[#d89b27]">The finish</div>
            <h2 className="display-face max-w-lg text-6xl leading-[.87] tracking-[-.045em] sm:text-8xl">Not a promise.<br /><em className="text-[#d89b27]">A process.</em></h2>
          </div>
          <div className="lg:pl-16">
            <p className="muted max-w-xl text-lg leading-8">The bar earns its place by doing the small things beautifully: a lather that stays put, a razor that does not fight the skin, and a finish that feels ready for the room.</p>
            <div className="mt-9 flex items-center gap-4"><div className="gold-rule w-14" /><span className="mono-label muted">No shortcuts in the ritual</span></div>
          </div>
        </div>
        <div className="mt-20 grid gap-8 border-t border-[#f3ead9]/20 pt-7 sm:grid-cols-3">
          {[
            ['01', 'Wet the hands', 'Start with warm water and let the bar wake up.'],
            ['02', 'Work the lather', 'Use palms or a brush until the texture feels plush.'],
            ['03', 'Make the pass', 'Guide the razor with care, then rinse to reset.'],
          ].map(([number, title, body]) => (
            <div className="feature-tile" key={number} data-testid={`step-finish-${number}`}>
              <span className="feature-index">{number}</span>
              <h3 className="mt-10 display-face text-4xl">{title}</h3>
              <p className="muted mt-3 max-w-xs text-sm leading-6">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RitualSection() {
  const rituals = [
    { num: '01', title: 'Open the object', body: 'Keep the bar somewhere you will see it. The ritual starts with choosing a considered thing.' },
    { num: '02', title: 'Make it tactile', body: 'Warm water, wet palms, a few turns. Work slowly until a dense, even lather appears.' },
    { num: '03', title: 'Leave with presence', body: 'Rinse clean. Pat dry. The final feeling is simple: composed, fresh, ready.' },
  ];
  return (
    <section id="ritual" className="bg-[#eee7d8] px-5 py-24 sm:px-8 lg:px-14 lg:py-36" data-testid="section-ritual">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="section-kicker mono-label mb-7">Use it well</div>
            <h2 className="display-face max-w-2xl text-6xl leading-[.88] tracking-[-.05em] text-[#222536] sm:text-8xl">The three-minute<br /><em className="text-[#c55b3d]">reset.</em></h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#575248] md:pb-2">Before the first appointment, before the close shave, before you step out: let the hands set the tone.</p>
        </div>
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {rituals.map((ritual) => (
            <article className="ritual-card min-h-[17rem] p-7 sm:p-9" key={ritual.num} data-testid={`card-ritual-${ritual.num}`}>
              <div className="flex items-center justify-between"><span className="ritual-number">{ritual.num} / 03</span><ArrowUpRight size={17} className="text-[#c55b3d]" /></div>
              <h3 className="mt-20 display-face text-4xl leading-none text-[#222536]">{ritual.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-[#575248]">{ritual.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-[#222536]/15 pt-6">
          <span className="mono-label text-[#575248]">A small object / a sharper start</span>
          <a href="#studio" className="button-dark" data-testid="link-ritual-studio">Find SMARTLOOK <ArrowDownRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function StudioSection() {
  return (
    <section id="studio" className="dark-panel px-5 py-24 sm:px-8 lg:px-14 lg:py-32" data-testid="section-studio">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="section-kicker mono-label mb-7 text-[#d89b27]">Come by the studio</div>
            <h2 className="display-face max-w-xl text-6xl leading-[.86] tracking-[-.04em] sm:text-8xl">The ritual lives<br />at <em className="text-[#d89b27]">SMARTLOOK.</em></h2>
          </div>
          <div className="mt-16 grid gap-5 border-t border-[#f3ead9]/20 pt-6 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-[#d89b27]"><MapPin size={15} /><span className="mono-label">Address</span></div>
              <p className="muted mt-4 max-w-xs text-sm leading-6" data-testid="text-studio-address">{address}</p>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#f3ead9] underline decoration-[#d89b27] underline-offset-4 transition-colors hover:text-[#d89b27]" data-testid="link-open-map">Open in Maps <Navigation size={14} /></a>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#d89b27]"><Clock3 size={15} /><span className="mono-label">Make a connection</span></div>
              <a href="tel:07228875159" className="mt-4 block text-2xl text-[#f3ead9] transition-colors hover:text-[#d89b27]" data-testid="link-studio-phone">072288 75159</a>
              <p className="muted mt-2 text-sm leading-6">Call the studio for bridal appointments, grooming conversations, and the SMARTLOOK finish.</p>
              <a href="tel:07228875159" className="button-gold mt-6" data-testid="link-studio-booking">Book now <Phone size={14} /></a>
            </div>
          </div>
        </div>
        <div className="studio-visual-stack">
          <div className="studio-photo-frame" data-testid="image-studio-storefront">
            <img src={storefrontImage} alt="SmartLook Bridal Studio storefront in Ahmedabad" />
            <div className="studio-photo-caption">
              <span className="mono-label">SmartLook Bridal Studio &amp; Academy</span>
              <span className="text-sm">Skin / Hair / Makeup</span>
            </div>
          </div>
          <div className="contact-map min-h-[20rem] self-stretch border border-[#f3ead9]/15" data-testid="map-studio-location">
            <div className="absolute left-6 top-6 flex items-center gap-2 text-[#d89b27]"><LocateFixed size={15} /><span className="mono-label">Nikol / Ahmedabad</span></div>
            <div className="map-pin" />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4">
              <span className="max-w-[15rem] text-sm leading-5 text-[#f3ead9]">SHOP NO.5,6,7<br />ISHWAR ICON, Nikol</span>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#d89b27] text-[#222536] transition-transform hover:-translate-y-1" aria-label="Open SMARTLOOK location in maps" data-testid="button-map-directions"><ArrowUpRight size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#222536] px-5 pb-7 pt-16 text-[#f3ead9] sm:px-8 lg:px-14" data-testid="site-footer">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col justify-between gap-10 border-b border-[#f3ead9]/15 pb-12 md:flex-row md:items-end">
          <div>
            <BrandMark light />
            <p className="mt-7 max-w-sm text-sm leading-6 text-[#bdb5a6]">A local grooming and bridal studio in Ahmedabad. Come for the finish. Stay for the feeling.</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:07228875159" className="button-gold" data-testid="link-footer-call">Call the studio <Phone size={14} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-[#f3ead9]/25 transition-colors hover:border-[#d89b27] hover:text-[#d89b27]" aria-label="SMARTLOOK on Instagram" data-testid="link-footer-instagram"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 font-mono text-[0.58rem] tracking-[.12em] text-[#8e897f] sm:flex-row">
          <span>© SMARTLOOK BRIDAL STUDIO / AHMEDABAD</span>
          <a href="#top" className="footer-link" data-testid="link-back-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="site-shell min-h-[100dvh]">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <ProductStory />
        <PerformancePanel />
        <RitualSection />
        <StudioSection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;