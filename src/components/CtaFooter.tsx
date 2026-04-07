import HlsVideo from './HlsVideo'

const HLS_URL =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export default function CtaFooter() {
  return (
    <section className="relative overflow-hidden">
      {/* HLS video bg */}
      <HlsVideo
        src={HLS_URL}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 200,
          background: 'linear-gradient(to top, transparent, black)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 200,
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-32 px-6">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight mb-6">
          Your next website
          <br />
          starts here.
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-lg mb-8">
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium cursor-pointer hover:bg-white/5 transition-colors">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 font-body text-sm font-medium cursor-pointer hover:bg-white/90 transition-colors">
            View Pricing
          </button>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-xs font-body">
            © 2026 Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
