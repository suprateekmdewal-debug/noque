import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Clock, Mail } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Jaipur, Rajasthan, India",
    sub: "Serving Tier 2 cities across India",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Mon–Sat, 9am–7pm IST",
    sub: "WhatsApp support available",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@noq.in",
    sub: "We reply within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-[#0d1a0f] to-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            <h1 className="font-syne text-4xl sm:text-6xl font-bold text-white mb-5">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="text-[#a3a3a3] text-lg font-dm-sans leading-relaxed">
              We&apos;re a small team and we genuinely love talking to business
              owners. Reach us on WhatsApp — it&apos;s what we do best.
            </p>
          </div>
        </section>

        {/* Main contact */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* WhatsApp CTA */}
              <div className="card-dark p-8 flex flex-col items-center text-center border-[#25D366]/20 glow-green">
                <div className="w-20 h-20 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-syne text-2xl font-bold text-white mb-3">
                  WhatsApp Us
                </h3>
                <p className="text-[#a3a3a3] font-dm-sans text-sm mb-6 leading-relaxed">
                  The fastest way to reach us. We typically reply within a few
                  minutes during business hours. Perfect for demos, pricing
                  questions, or just saying hi.
                </p>
                <WhatsAppButton
                  text="Open WhatsApp Chat"
                  message="Hi NOQ team! I have a question"
                  phone="917300950101"
                  size="md"
                />
                <p className="text-[#666] text-xs font-dm-sans mt-4">
                  Available Mon–Sat, 9am–7pm IST
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="card-dark p-5 flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-[#666] text-xs font-dm-sans uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      <p className="font-syne font-semibold text-white text-sm">
                        {value}
                      </p>
                      <p className="text-[#666] text-xs font-dm-sans mt-0.5">
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Book a demo */}
                <div className="card-dark p-5 border-[#333]">
                  <h4 className="font-syne font-semibold text-white mb-2">
                    Want a demo?
                  </h4>
                  <p className="text-[#a3a3a3] text-sm font-dm-sans mb-4">
                    We&apos;ll walk you through NOQ live on a WhatsApp call. See
                    exactly how it works for your business type.
                  </p>
                  <WhatsAppButton
                    text="Book a Free Demo"
                    message="Hi NOQ! I'd like to book a free demo for my business"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-[#111111]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-syne text-2xl font-bold text-white mb-3">
              Cities we&apos;re launching in
            </h2>
            <p className="text-[#666] font-dm-sans text-sm mb-8">
              And expanding fast across Rajasthan
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Jaipur",
                "Ajmer",
                "Kota",
                "Jodhpur",
                "Udaipur",
                "Bikaner",
                "Alwar",
                "Bharatpur",
              ].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 card-dark text-sm text-[#a3a3a3] font-dm-sans"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-[#666] text-xs font-dm-sans mt-6">
              Not in the list? Join the waitlist — we&apos;ll come to you.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
