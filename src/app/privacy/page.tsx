import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16 border-b border-[#1a1a1a] bg-gradient-to-b from-[#0d1a0f] to-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-syne text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-[#a3a3a3] font-dm-sans">
              Last updated: December 2024
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert max-w-none space-y-10">

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  1. Who We Are
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  NOQ is a product of FutureUnboxxed India, a company registered in India. We build queue-free WhatsApp-based slot booking solutions for local businesses. Our registered address is Jaipur, Rajasthan, India. For privacy-related inquiries, contact us at{" "}
                  <a href="mailto:privacy@noq.in" className="text-[#25D366] hover:underline">
                    privacy@noq.in
                  </a>
                  .
                </p>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4 text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  <p>
                    <strong className="text-white">From Businesses (via waitlist or onboarding):</strong>{" "}
                    Name, phone number, business type, city, and business WhatsApp number. We use this to set up your NOQ account and contact you about onboarding.
                  </p>
                  <p>
                    <strong className="text-white">From End Customers (via WhatsApp booking):</strong>{" "}
                    WhatsApp display name and phone number, booking date and time, and messages exchanged during the booking flow. This data is used solely to manage appointments.
                  </p>
                  <p>
                    <strong className="text-white">Technical data:</strong>{" "}
                    IP address, browser type, and usage data when you visit our website. We use cookies and analytics tools (such as Vercel Analytics) for improving our product.
                  </p>
                </div>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="space-y-2 text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  {[
                    "To provide and manage the NOQ slot booking service",
                    "To send booking confirmations and reminders to end customers via WhatsApp",
                    "To contact businesses on the waitlist about launch updates",
                    "To process payments securely via Razorpay",
                    "To improve our product and understand usage patterns",
                    "To comply with applicable laws and regulations in India",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#25D366] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  4. WhatsApp and Meta
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  NOQ uses the WhatsApp Business API to enable slot booking. When customers interact with our booking bot, messages are processed through Meta&apos;s infrastructure. End-to-end encryption applies to WhatsApp messages as per Meta&apos;s policies. We do not sell or share WhatsApp message content with third parties. Please review Meta&apos;s Privacy Policy for information on how WhatsApp processes data.
                </p>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  5. Payments
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  Payments are processed by Razorpay. We do not store credit card or bank account details on our servers. Razorpay is a PCI-DSS compliant payment gateway. By making a payment, you agree to Razorpay&apos;s Terms of Service and Privacy Policy.
                </p>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  6. Data Sharing
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed mb-3">
                  We do not sell your personal data. We may share data with:
                </p>
                <ul className="space-y-2 text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  {[
                    "Supabase (database hosting) — securely stores your data with encryption at rest",
                    "Razorpay (payment processing) — for processing subscription payments",
                    "Meta / WhatsApp Business API — for delivering booking messages",
                    "Vercel (website hosting) — for serving this website",
                    "Law enforcement — if required by law or court order",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#25D366] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  7. Data Retention
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  We retain business account data for the duration of your subscription plus 90 days after cancellation. Booking records are retained for 12 months to enable reporting. Waitlist data is retained for 18 months. You may request deletion of your data at any time by contacting us.
                </p>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  8. Your Rights
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed mb-3">
                  Under applicable Indian law and global best practices, you have the right to:
                </p>
                <ul className="space-y-2 text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  {[
                    "Access the personal data we hold about you",
                    "Request correction of inaccurate data",
                    "Request deletion of your data",
                    "Opt out of marketing communications",
                    "Lodge a complaint with a data protection authority",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#25D366] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed mt-4">
                  To exercise these rights, email us at{" "}
                  <a href="mailto:privacy@noq.in" className="text-[#25D366] hover:underline">
                    privacy@noq.in
                  </a>
                  . We will respond within 30 days.
                </p>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  9. Cookies
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  Our website uses essential cookies for functionality and analytics cookies to understand usage. You can disable cookies in your browser settings, though some features may not function correctly.
                </p>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify registered business users of material changes via WhatsApp or email. The &ldquo;Last updated&rdquo; date at the top reflects when changes were last made.
                </p>
              </div>

              <div className="card-dark p-6 sm:p-8">
                <h2 className="font-syne text-xl font-bold text-white mb-4">
                  11. Contact
                </h2>
                <p className="text-[#a3a3a3] font-dm-sans text-sm leading-relaxed">
                  For any privacy-related questions, contact us at:{" "}
                  <a href="mailto:privacy@noq.in" className="text-[#25D366] hover:underline">
                    privacy@noq.in
                  </a>
                  <br />
                  FutureUnboxxed India, Jaipur, Rajasthan, India.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
