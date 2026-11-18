"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ShieldCheck, CheckCircle2, Send, ArrowRight, Lock } from "lucide-react";

const genres = [
  "Literary Fiction",
  "Romance",
  "Mystery & Thriller",
  "Non-Fiction & Memoir",
  "Business & Leadership",
  "Science Fiction & Fantasy",
  "Self-Help & Personal Growth",
  "Historical Fiction",
  "Children's & Middle Grade",
  "Poetry Collection",
];

const manuscriptStatuses = [
  "Idea / Outline in Concept Stage",
  "Partial Draft (Under 50% Complete)",
  "Completed First Draft",
  "Polished Draft Ready for Professional Editing",
  "Fully Edited Manuscript Ready for Typesetting & Publishing",
  "Previously Published Book (Seeking Re-release / Relaunch)",
];

const availableServices = [
  "Ghostwriting",
  "Professional Editing",
  "Proofreading",
  "Book Cover Design",
  "Formatting & Typesetting",
  "Publishing & Distribution",
  "Audiobook Production",
  "Book Marketing & ARC",
  "Author Website",
];

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    genre: "",
    manuscriptStatus: "",
    services: [] as string[],
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError("Please complete all required author contact fields.");
      return;
    }
    setError(null);
    setLoading(true);

    // Simulate realistic frontend processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="inquiry" className="bg-paper-warm py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-xl border-2 border-line-strong bg-white p-8 sm:p-12 shadow-card"
        >
          {/* Header Plaque */}
          <div className="text-center max-w-xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#B8860B]/15 text-[#B8860B] font-sans text-xs font-semibold tracking-wider uppercase border border-[#B8860B]/30">
              <ShieldCheck size={14} />
              <span>Direct Editorial Inquiry &bull; Zero Pressure</span>
            </span>

            <h2 className="mt-4 font-serif text-[2rem] sm:text-[2.6rem] font-bold text-ink leading-tight text-balance">
              Your Story&rsquo;s Next Chapter{" "}
              <span className="text-[#B8860B]">Starts Here</span>
            </h2>

            <p className="mt-3 font-sans text-[0.98rem] leading-relaxed text-ink-soft">
              Submit your manuscript concept or publication requirements. A senior publishing
              consultant will review your project and provide an honest appraisal within 1–2 business days.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 p-8 rounded-lg bg-paper-warm border border-line text-center flex flex-col items-center gap-3.5"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">
                Publishing Inquiry Received
              </h3>
              <p className="text-sm font-sans text-ink-soft max-w-md leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your project outline has been
                cataloged and assigned to our Senior Acquisitions Director. Expect our confidential
                editorial evaluation and telephone invitation within 24–48 hours.
              </p>
              <div className="mt-4 pt-4 border-t border-line/60 flex items-center gap-2 text-xs text-ink-muted">
                <Lock size={13} className="text-[#B8860B]" />
                <span>Your intellectual property and manuscript remain 100% confidential.</span>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    genre: "",
                    manuscriptStatus: "",
                    services: [],
                    description: "",
                  });
                }}
                className="mt-3 text-xs font-sans text-[#B8860B] underline hover:brightness-90 font-medium"
              >
                Submit another publishing inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              {error && (
                <div className="p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xs">
                  {error}
                </div>
              )}

              {/* Author Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold text-ink">
                    Author Full Name <span className="text-[#B8860B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Katherine Vance"
                    className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:bg-white focus:border-[#B8860B] transition-colors outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold text-ink">
                    Email Address <span className="text-[#B8860B]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="author@example.com"
                    className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:bg-white focus:border-[#B8860B] transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold text-ink">
                    Phone Number <span className="text-[#B8860B]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:bg-white focus:border-[#B8860B] transition-colors outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold text-ink">
                    Book Genre
                  </label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink focus:bg-white focus:border-[#B8860B] transition-colors outline-none cursor-pointer"
                  >
                    <option value="">Select Primary Genre</option>
                    {genres.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Manuscript Status */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-semibold text-ink">
                  Manuscript Status
                </label>
                <select
                  value={formData.manuscriptStatus}
                  onChange={(e) => setFormData({ ...formData, manuscriptStatus: e.target.value })}
                  className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink focus:bg-white focus:border-[#B8860B] transition-colors outline-none cursor-pointer"
                >
                  <option value="">Select Current Manuscript Phase</option>
                  {manuscriptStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services Required Checkboxes */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs font-semibold text-ink">
                  Services Required <span className="text-ink-muted font-normal">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {availableServices.map((service) => {
                    const isChecked = formData.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-3 py-2 rounded-xs border text-xs font-sans text-left transition-all duration-200 flex items-center justify-between ${isChecked
                          ? "bg-[#0B1426] text-white border-[#0B1426]"
                          : "bg-paper text-ink-soft border-line hover:border-[#B8860B]/50"
                          }`}
                      >
                        <span className="truncate">{service}</span>
                        {isChecked && <span className="text-[#B8860B] font-bold text-xs">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Description */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-semibold text-ink">
                  Project Description &amp; Goals <span className="text-[#B8860B]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your book: plot summary, intended audience, target publication timeline, or specific questions..."
                  className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:bg-white focus:border-[#B8860B] transition-colors outline-none resize-y"
                />
              </div>

              {/* Security & Confidentiality Reassurance */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-sans text-ink-muted">
                  <Lock size={14} className="text-[#B8860B] shrink-0" />
                  <span>NDAs respected &bull; Zero spam &bull; 100% Rights Guaranteed</span>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto shadow-goldGlow min-w-[240px]"
                >
                  {loading ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <span>Send My Publishing Inquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
