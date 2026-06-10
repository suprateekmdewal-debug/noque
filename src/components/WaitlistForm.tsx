"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle, Loader2 } from "lucide-react";

const BUSINESS_TYPES = [
  "Barber / Salon",
  "Restaurant / Cafe",
  "Clinic / Doctor",
  "Service Center",
  "Other",
];

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business_type: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.phone || !form.business_type || !form.city) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    setLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from("waitlist")
        .insert([form]);

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          setError("This phone number is already on the waitlist!");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="card-dark p-8 text-center glow-green">
        <CheckCircle className="w-14 h-14 text-[#25D366] mx-auto mb-4" />
        <h3 className="font-syne text-2xl font-bold text-white mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-[#a3a3a3] font-dm-sans">
          We&apos;ll reach out on WhatsApp as soon as NOQ launches in your city.
        </p>
        <p className="text-[#25D366] font-semibold text-sm mt-4 font-dm-sans">
          🎉 Early access = best pricing
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-dark p-6 sm:p-8 space-y-4"
      id="waitlist"
    >
      <div>
        <h3 className="font-syne text-xl font-bold text-white mb-1">
          Join the Waitlist
        </h3>
        <p className="text-[#a3a3a3] text-sm font-dm-sans">
          Be the first to go queue-free in your city
        </p>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-[#222] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#25D366] transition-colors font-dm-sans text-sm"
        />

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] text-sm font-dm-sans">
            +91
          </span>
          <input
            type="tel"
            placeholder="WhatsApp number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
            }
            className="w-full bg-[#222] border border-[#333] rounded-xl px-4 py-3 pl-12 text-white placeholder-[#555] focus:outline-none focus:border-[#25D366] transition-colors font-dm-sans text-sm"
          />
        </div>

        <select
          value={form.business_type}
          onChange={(e) => setForm({ ...form, business_type: e.target.value })}
          className="w-full bg-[#222] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#25D366] transition-colors font-dm-sans text-sm appearance-none"
        >
          <option value="" disabled className="text-[#555]">
            Business type
          </option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Your city (e.g. Jaipur)"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className="w-full bg-[#222] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#25D366] transition-colors font-dm-sans text-sm"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm font-dm-sans">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="whatsapp-btn w-full py-3 rounded-xl font-semibold font-dm-sans flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Joining...
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get Early Access
          </>
        )}
      </button>
    </form>
  );
}
