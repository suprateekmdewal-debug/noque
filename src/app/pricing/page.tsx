import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RazorpayButton from "@/components/RazorpayButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Scissors, UtensilsCrossed, Stethoscope, Wrench, Star } from "lucide-react";

const PLANS = [
  {
    id: "barber",
    icon: Scissors,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/10",
    name: "Barbers & Salons",
    tagline: "Perfect for the neighbourhood cutting shop",
    originalPrice: 1199,
    launchPrice: 599,
    period: "/ month",
    badge: "Best for Barbers",
    badgeColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    highlight: false,
    features: [
      "Up to 50 bookings/month",
      "WhatsApp slot booking",
      "Automatic reminders",
      "Booking confirmation",
      "Block slots for breaks",
      "Monthly booking report",
      "WhatsApp support",
    ],
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    iconColor: "text-[#25D366]",
    iconBg: "bg-[#25D366]/10",
    name: "Restaurants & Cafes",
    tagline: "Table reservations via WhatsApp",
    originalPrice: 1999,
    launchPrice: 999,
    period: "/ month",
    badge: "Most Popular",
    badgeColor: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20",
    highlight: true,
    features: [
      "Up to 200 bookings/month",
      "WhatsApp table booking",
      "Party size selection",
      "Automatic reminders",
      "Waitlist management",
      "Peak hour analytics",
      "Priority WhatsApp support",
      "Custom booking link",
    ],
  },
  {
    id: "clinic",
    icon: Stethoscope,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    name: "Clinics & Doctors",
    tagline: "Appointment management for medical practices",
    originalPrice: 2499,
    launchPrice: 1199,
    period: "/ month",
    badge: "For Healthcare",
    badgeColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    highlight: false,
    features: [
      "Unlimited appointments",
      "WhatsApp appointment booking",
      "Patient reminders",
      "Prescription follow-up slots",
      "Multi-doctor support",
      "Daily schedule summary",
      "Priority WhatsApp support",
      "Custom booking link",
    ],
  },
  {
    id: "service",
    icon: Wrench,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10",
    name: "Service Centers",
    tagline: "Drop-off and pickup slot management",
    originalPrice: 2499,
    launchPrice: 1299,
    period: "/ month",
    badge: "For Services",
    badgeColor: "bg-orange-400/10 text-orange-400 border-orange-400/20",
    highlight: false,
    features: [
      "Unlimited bookings/month",
      "WhatsApp slot booking",
      "Service type selection",
      "Status update messages",
      "Pickup reminders",
      "Staff assignment",
      "Priority WhatsApp support",
      "Custom booking link",
    ],
  },
];

const INCLUSIONS = [
  "One-time setup assistance via WhatsApp",
  "No contract — cancel anytime",
  "Works with existing WhatsApp number",
  "Regular feature updates",
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-[#0d1a0f] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span className="text-[#25D366] text-sm font-dm-sans font-medium">
                Launch pricing — limited time
              </span>
            </div>
            <h1 className="font-syne text-4xl sm:text-6xl font-bold text-white mb-5">
              Simple, affordable{" "}
              <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-[#a3a3a3] text-lg font-dm-sans leading-relaxed">
              Built for real businesses in Tier 2 India. No hidden fees, no
              per-booking charges, no surprises.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {PLANS.map(
                ({
                  id,
                  icon: Icon,
                  iconColor,
                  iconBg,
                  name,
                  tagline,
                  originalPrice,
                  launchPrice,
                  period,
                  badge,
                  badgeColor,
                  highlight,
                  features,
                }) => (
                  <div
                    key={id}
                    className={`card-dark p-6 flex flex-col relative ${
                      highlight
                        ? "border-[#25D366]/40 glow-green"
                        : "hover:border-[#333]"
                    } transition-all`}
                  >
                    {/* Badge */}
                    <div className={`inline-flex self-start items-center gap-1 px-3 py-1 rounded-full text-xs font-dm-sans font-semibold border mb-4 ${badgeColor}`}>
                      {badge}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>

                    {/* Name */}
                    <h3 className="font-syne text-lg font-bold text-white mb-1">
                      {name}
                    </h3>
                    <p className="text-[#666] text-xs font-dm-sans mb-5 leading-relaxed">
                      {tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-syne text-4xl font-bold gradient-text">
                          ₹{launchPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[#666] text-sm font-dm-sans">
                          {period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#555] text-sm line-through font-dm-sans">
                          ₹{originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[#25D366] text-xs font-dm-sans font-semibold">
                          {Math.round((1 - launchPrice / originalPrice) * 100)}% off launch
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                          <span className="text-[#a3a3a3] font-dm-sans">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <RazorpayButton
                      amount={launchPrice}
                      planName={name}
                      description={`NOQ ${name} Plan — Queue-Free Slot Booking`}
                    />
                  </div>
                )
              )}
            </div>

            {/* Inclusions */}
            <div className="mt-12 card-dark p-6 sm:p-8">
              <p className="text-center text-[#a3a3a3] font-dm-sans text-sm mb-5">
                All plans include:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                    <span className="text-[#a3a3a3] text-sm font-dm-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ pricing */}
        <section className="py-16 bg-[#111111]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-syne text-2xl font-bold text-white text-center mb-10">
              Pricing questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is there a free trial?",
                  a: "We offer a 7-day free trial on all plans. No credit card required to start.",
                },
                {
                  q: "Are there any per-booking charges?",
                  a: "No. Your monthly fee covers unlimited or plan-specified bookings. No per-booking charges, ever.",
                },
                {
                  q: "Can I upgrade or downgrade?",
                  a: "Yes, anytime. Changes take effect at the next billing cycle.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept UPI, debit/credit cards, net banking, and wallets via Razorpay.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="card-dark p-5">
                  <h3 className="font-syne font-semibold text-white mb-1.5 text-sm">{q}</h3>
                  <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-syne text-3xl font-bold text-white mb-4">
              Not sure which plan fits?
            </h2>
            <p className="text-[#a3a3a3] font-dm-sans mb-8">
              Chat with us on WhatsApp and we&apos;ll help you pick the right one
              for your business.
            </p>
            <WhatsAppButton
              text="Talk to Us on WhatsApp"
              message="Hi NOQ! I need help choosing the right plan for my business"
              size="lg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
