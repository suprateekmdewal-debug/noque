import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight, MessageSquare, Calendar, Bell, Settings, BarChart3, Users } from "lucide-react";

const CUSTOMER_STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Send a WhatsApp Message",
    desc: "Customer sends 'Book' or any message to the business WhatsApp number. No app to download, no account to create — just tap and send.",
    detail: "Works on any smartphone, even basic Android phones common in Tier 2 cities.",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    border: "border-[#25D366]/20",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Pick an Available Slot",
    desc: "NOQ automatically replies with available time slots for today and tomorrow. Customer simply replies with their preferred time.",
    detail: "The entire flow works via chat — no forms, no tapping through menus.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    step: "03",
    icon: Bell,
    title: "Get Confirmation & Reminder",
    desc: "Instant booking confirmation sent via WhatsApp. A reminder is sent 30 minutes before the appointment. Customer just shows up on time.",
    detail: "Reduces no-shows by up to 70% with automatic reminders.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
];

const BUSINESS_STEPS = [
  {
    step: "01",
    icon: Settings,
    title: "Set Up Your Profile",
    desc: "Tell us your business hours, services, slot duration, and how many customers you can serve per slot. We set everything up for you in under 30 minutes.",
    detail: "Our team assists you over WhatsApp — no technical knowledge needed.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    step: "02",
    icon: Users,
    title: "Share Your WhatsApp Link",
    desc: "You get a shareable link and QR code. Put it on your board, share it in your WhatsApp groups, paste it on Google Maps — customers start booking immediately.",
    detail: "Works with your existing business WhatsApp number.",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    border: "border-[#25D366]/20",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Manage from Your Phone",
    desc: "See all bookings, reschedule, block slots for breaks, and track your busiest hours — all from a simple dashboard on your phone.",
    detail: "Know your peak times and plan your team's schedule accordingly.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
];

const FAQ = [
  {
    q: "Do my customers need to download any app?",
    a: "No. Customers only need WhatsApp, which almost everyone in India already has. No downloads, no signups — just message and book.",
  },
  {
    q: "What if a customer doesn't show up?",
    a: "NOQ sends automatic reminders 30 minutes before each slot. If a customer cancels, the slot opens up immediately for others to book.",
  },
  {
    q: "Can I use my existing WhatsApp number?",
    a: "Yes! NOQ works with your existing business WhatsApp or WhatsApp Business number. No need to change anything.",
  },
  {
    q: "How long does setup take?",
    a: "Our team helps you set up everything over WhatsApp in under 30 minutes. We configure your slots, services, and test the booking flow with you.",
  },
  {
    q: "What cities does NOQ work in?",
    a: "We're launching in Jaipur, Ajmer, Kota, Jodhpur, and Udaipur first, then expanding to all Tier 2 cities across India in 2025.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-[#0d1a0f] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#25D366] text-sm font-dm-sans font-medium">
                Simple by design
              </span>
            </div>
            <h1 className="font-syne text-4xl sm:text-6xl font-bold text-white mb-5">
              How <span className="gradient-text">NOQ</span> Works
            </h1>
            <p className="text-[#a3a3a3] text-lg font-dm-sans leading-relaxed">
              Queue-free booking in 3 steps — for customers and businesses alike.
              No complicated tech. Just WhatsApp.
            </p>
          </div>
        </section>

        {/* For Customers */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-[#25D366] text-sm uppercase tracking-widest font-dm-sans mb-2">
                For Customers
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white">
                Book a slot in under 2 minutes
              </h2>
            </div>

            <div className="space-y-6">
              {CUSTOMER_STEPS.map(({ step, icon: Icon, title, desc, detail, color, bg, border }, i) => (
                <div
                  key={step}
                  className={`card-dark p-6 sm:p-8 flex gap-6 items-start border ${border} hover:bg-[#1a1a1a] transition-colors`}
                >
                  <div className={`w-14 h-14 ${bg} border ${border} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-syne font-bold ${color} text-sm`}>
                        STEP {step}
                      </span>
                      {i < CUSTOMER_STEPS.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#444]" />
                      )}
                    </div>
                    <h3 className="font-syne text-xl font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed mb-3">
                      {desc}
                    </p>
                    <p className={`text-xs font-dm-sans ${color} opacity-80`}>
                      ✓ {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Businesses */}
        <section className="py-24 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-[#25D366] text-sm uppercase tracking-widest font-dm-sans mb-2">
                For Businesses
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white">
                Go live in under 30 minutes
              </h2>
            </div>

            <div className="space-y-6">
              {BUSINESS_STEPS.map(({ step, icon: Icon, title, desc, detail, color, bg, border }, i) => (
                <div
                  key={step}
                  className={`card-dark p-6 sm:p-8 flex gap-6 items-start border ${border} hover:bg-[#1a1a1a] transition-colors`}
                >
                  <div className={`w-14 h-14 ${bg} border ${border} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-syne font-bold ${color} text-sm`}>
                        STEP {step}
                      </span>
                      {i < BUSINESS_STEPS.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#444]" />
                      )}
                    </div>
                    <h3 className="font-syne text-xl font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed mb-3">
                      {desc}
                    </p>
                    <p className={`text-xs font-dm-sans ${color} opacity-80`}>
                      ✓ {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>

            <div className="space-y-4">
              {FAQ.map(({ q, a }) => (
                <div key={q} className="card-dark p-6">
                  <h3 className="font-syne font-semibold text-white mb-2">{q}</h3>
                  <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-syne text-3xl font-bold text-white mb-4">
              Ready to try it?
            </h2>
            <p className="text-[#a3a3a3] font-dm-sans mb-8">
              Join the waitlist and be among the first businesses to go
              queue-free in your city.
            </p>
            <WhatsAppButton
              text="Join the Waitlist"
              message="Hi NOQ! I want to go queue-free with my business"
              size="lg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
