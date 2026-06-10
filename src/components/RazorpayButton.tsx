"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface RazorpayButtonProps {
  amount: number;
  planName: string;
  description?: string;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open: () => void };
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  handler: (response: { razorpay_payment_id: string }) => void;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  modal: { ondismiss: () => void };
}

export default function RazorpayButton({
  amount,
  planName,
  description = "NOQ Launch Pricing — Queue-Free Slot Booking",
}: RazorpayButtonProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const loadScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const loaded = await loadScript();

    if (!loaded) {
      alert("Failed to load payment gateway. Please check your connection.");
      setLoading(false);
      return;
    }

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      amount: amount * 100,
      currency: "INR",
      name: "NOQ — FutureUnboxxed India",
      description: `${planName} — ${description}`,
      handler: (response) => {
        console.log("Payment successful:", response.razorpay_payment_id);
        setSuccess(true);
        setLoading(false);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#25D366",
      },
      modal: {
        ondismiss: () => setLoading(false),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (success) {
    return (
      <div className="text-center py-3">
        <p className="text-[#25D366] font-semibold font-dm-sans">
          ✓ Payment successful! We&apos;ll contact you on WhatsApp within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="whatsapp-btn w-full py-3 rounded-xl font-semibold font-dm-sans flex items-center justify-center gap-2 disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Processing...
        </>
      ) : (
        `Pay ₹${amount.toLocaleString("en-IN")} — Get Started`
      )}
    </button>
  );
}
