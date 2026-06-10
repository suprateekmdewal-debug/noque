import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import {
  Clock,
  Smartphone,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Scissors,
  UtensilsCrossed,
  Stethoscope,
  Wrench,
} from "lucide-react";

const STATS = [
  { value: "0", label: "App Downloads Needed" },
  { value: "2 min", label: "To Book a Slot" },
  { value: "₹599", label: "Launch Price (Barbers)" },
  { value: "100%", label: "WhatsApp Based" },
];

const FEATURES = [
  {
    icon: Smartphone,
    title: "No App, Just WhatsApp",
    desc: "Your customers already have WhatsApp. No downloads, no signups — they just message you to book.",
  },
  {
    icon: Clock,
    title: "Real-Time Slot Management",
    desc: "See all bookings in one place. Customers get instant confirmation and reminders automatically.",
  },
  {
    icon: TrendingUp,
    title: "Grow Without Queues",
    desc: "Happy customers come back. Reduce walk-in chaos and serve more people in the same time.",
  },
];

const BUSINESS_TYPES = [
  { icon: Scissors, label: "Barbers & Salons", color: "text-purple-400" },
  { icon: UtensilsCrossed, label: "Restaurants & Cafes", color: "text-orange-400" },
  { icon: Stethoscope, label: "Clinics & Doctors", color: "text-blue-400" },
  { icon: Wrench, label: "Service Centers", color: "text-yellow-400" },
];

const TESTIMONIALS = [
  {
    name: "Ramesh Sharma",
    business: "Royal Cuts, Jaipur",
    text: "Pehle log 2 ghante wait karte the. Ab NOQ se seedha WhatsApp pe booking — koi jhanjhat nahi!",
    stars: 5,
  },
  {
    name: "Priya Agarwal",
    business: "Spice Garden Restaurant, Ajmer",
    text: "Our Saturday rush is now completely managed. Customers love booking on WhatsApp!",
    stars: 5,
  },
  {
    name: "Dr. Vijay Meena",
    business: "Meena Clinic, Kota",
    text: "Patient waiting time reduced by 60%. The system pays for itself in a week.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1a0f] to-[#0a0a0a]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Hero copy */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                <span className="text-[#25D366] text-sm font-dm-sans font-medium">
                  Launching in Tier 2 India
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Skip the{" "}
                  <span className="gradient-text">Queue.</span>
                </h1>
                <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Book Your{" "}
                  <span className="gradient-text">Slot.</span>
                </h1>
              </div>

              <p className="text-[#a3a3a3] text-lg sm:text-xl leading-relaxed font-dm-sans max-w-lg">
                WhatsApp-based slot booking for local businesses in Jaipur and
                beyond. No app needed. No long waits. Just book and show up.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  text="Book a Slot Now"
                  message="Hi NOQ! I want to book a slot"
                  size="lg"
                />
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 border border-[#333] text-[#a3a3a3] hover:text-white hover:border-[#555] px-8 py-4 rounded-full text-lg font-semibold font-dm-sans transition-all"
                >
                  How It Works
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-syne text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-[#666] text-xs mt-1 font-dm-sans">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Waitlist Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* Business types */}
        <section className="py-16 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#666] text-sm uppercase tracking-widest mb-8 font-dm-sans">
              Built for local businesses across India
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {BUSINESS_TYPES.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="card-dark p-5 flex flex-col items-center gap-3 hover:border-[#25D366]/30 transition-colors"
                >
                  <Icon className={`w-8 h-8 ${color}`} />
                  <span className="text-[#a3a3a3] text-sm text-center font-dm-sans">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white mb-4">
                Why businesses love{" "}
                <span className="gradient-text">NOQ</span>
              </h2>
              <p className="text-[#a3a3a3] text-lg font-dm-sans max-w-2xl mx-auto">
                Everything you need to go queue-free, built into the app your
                customers already use every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="card-dark p-8 hover:border-[#25D366]/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#25D366]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <h3 className="font-syne text-xl font-semibold text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-[#a3a3a3] leading-relaxed font-dm-sans text-sm">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works teaser */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white mb-3">
                Up and running in{" "}
                <span className="gradient-text">3 steps</span>
              </h2>
              <p className="text-[#a3a3a3] font-dm-sans">
                For your customers — no training needed
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Message on WhatsApp",
                  desc: "Customer sends a message to your business number asking for a slot.",
                },
                {
                  step: "02",
                  title: "Pick a Time",
                  desc: "NOQ shows available slots. Customer picks one in seconds.",
                },
                {
                  step: "03",
                  title: "Show Up & Get Served",
                  desc: "Confirmation sent. Reminder sent. Customer arrives on time. Done.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center relative">
                  <div className="w-16 h-16 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <span className="font-syne font-bold text-[#25D366] text-xl">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-syne text-lg font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-[#a3a3a3] text-sm font-dm-sans">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-[#25D366] font-semibold font-dm-sans hover:gap-3 transition-all"
              >
                See full walkthrough <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white mb-3">
                Early users <span className="gradient-text">love it</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ name, business, text, stars }) => (
                <div key={name} className="card-dark p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-[#d4d4d4] text-sm leading-relaxed mb-5 font-dm-sans italic">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div>
                    <p className="font-syne font-semibold text-white text-sm">
                      {name}
                    </p>
                    <p className="text-[#666] text-xs font-dm-sans mt-0.5">
                      {business}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white mb-4">
              Launch pricing starts at{" "}
              <span className="gradient-text">₹599/month</span>
            </h2>
            <p className="text-[#a3a3a3] font-dm-sans mb-8 text-lg">
              For barbers, salons, clinics, restaurants — affordable pricing
              designed for India&apos;s real businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 whatsapp-btn px-8 py-4 rounded-full text-lg font-semibold font-dm-sans"
              >
                See All Plans <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0f] via-[#0a0a0a] to-[#0d0a1a]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to go{" "}
              <span className="gradient-text">queue-free?</span>
            </h2>
            <p className="text-[#a3a3a3] text-xl font-dm-sans mb-10 max-w-2xl mx-auto">
              Join hundreds of local businesses already on the NOQ waitlist. Be
              first. Get the best launch price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <WhatsAppButton
                text="Get Early Access"
                message="Hi NOQ! I want early access for my business"
                size="lg"
              />
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-[#666] font-dm-sans flex-wrap">
              {[
                "No credit card required",
                "Free setup help",
                "Cancel anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#25D366]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
