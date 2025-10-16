"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/sendInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("✅ Inquiry sent successfully!");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("❌ Failed to send inquiry.");
      }
    } catch {
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-md px-3 py-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-md px-3 py-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <select
        className="w-full border rounded-md px-3 py-2"
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        required
      >
        <option value="">Select Service</option>
        <option>Tours</option>
        <option>Flights</option>
        <option>Trains</option>
        <option>Visa</option>
      </select>
      <textarea
        placeholder="Message"
        className="w-full border rounded-md px-3 py-2"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Send Inquiry
      </button>
      {status && <p className="text-center text-sm">{status}</p>}
    </form>
  );
}
