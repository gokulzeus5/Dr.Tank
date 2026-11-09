"use client";

import React, { useState } from "react";
import { KERALA_DISTRICTS, SERVICE_OPTIONS, BRAND } from "@/lib/constants";
import { formatBookingMessage, createWhatsAppUrl, BookingFormData } from "@/lib/whatsapp";
import { Calendar, User, Phone, MapPin, Wrench, FileText, Send, AlertCircle, CheckCircle2, Info } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    mobileNumber: "",
    preferredDate: "",
    serviceType: SERVICE_OPTIONS[0],
    district: KERALA_DISTRICTS[8], // Palakkad default (primary location)
    additionalRequirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    // Validate Indian Mobile Number: 10 digits, optionally with +91 or leading 0, starting with 6-9
    const cleanPhone = formData.mobileNumber.replace(/[\s-]/g, "").replace(/^\+91/, "").replace(/^0/, "");
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your mobile number.";
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    // Validate Preferred Date
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select your preferred date.";
    }

    // Validate District
    if (!formData.district) {
      newErrors.district = "Please select your district.";
    }

    // Validate Service Type
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format message
    const formattedMessage = formatBookingMessage(formData);
    const whatsappUrl = createWhatsAppUrl(formattedMessage);

    // Set submitted state for friendly feedback
    setSubmitted(true);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FAFE] border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              Quick &amp; Direct WhatsApp Booking
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Ready for a <span className="text-[#22C4F2]">Cleaner Water Tank?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto">
            Book your water tank cleaning service with Dr. Tank. Share your details and our team will receive your enquiry directly on WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-12 bg-white rounded-3xl border border-[#E5E7EB] shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle top brand bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#22C4F2]"></div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs sm:text-sm font-bold text-[#171717] mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555555]">
                    <User className="w-5 h-5 text-[#22C4F2]" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm text-[#171717] placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? "border-red-400 focus:ring-red-200 bg-red-50/20"
                        : "border-[#E5E7EB] focus:border-[#22C4F2] focus:ring-[#22C4F2]/20"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-xs sm:text-sm font-bold text-[#171717] mb-2"
                >
                  Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555555]">
                    <Phone className="w-5 h-5 text-[#22C4F2]" />
                  </div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, mobileNumber: e.target.value });
                      if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: "" });
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm text-[#171717] placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? "border-red-400 focus:ring-red-200 bg-red-50/20"
                        : "border-[#E5E7EB] focus:border-[#22C4F2] focus:ring-[#22C4F2]/20"
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-xs sm:text-sm font-bold text-[#171717] mb-2"
                >
                  Preferred Service Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555555]">
                    <Calendar className="w-5 h-5 text-[#22C4F2]" />
                  </div>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={today}
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: "" });
                    }}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm text-[#171717] focus:outline-none focus:ring-2 transition-all ${
                      errors.preferredDate
                        ? "border-red-400 focus:ring-red-200 bg-red-50/20"
                        : "border-[#E5E7EB] focus:border-[#22C4F2] focus:ring-[#22C4F2]/20"
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-xs sm:text-sm font-bold text-[#171717] mb-2"
                >
                  Service Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555555]">
                    <Wrench className="w-5 h-5 text-[#22C4F2]" />
                  </div>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => {
                      setFormData({ ...formData, serviceType: e.target.value });
                      if (errors.serviceType) setErrors({ ...errors, serviceType: "" });
                    }}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E5E7EB] text-sm text-[#171717] bg-white focus:outline-none focus:ring-2 focus:border-[#22C4F2] focus:ring-[#22C4F2]/20 transition-all appearance-none cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.serviceType && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.serviceType}</span>
                  </p>
                )}
              </div>

              {/* District / Location */}
              <div className="md:col-span-2">
                <label
                  htmlFor="district"
                  className="block text-xs sm:text-sm font-bold text-[#171717] mb-2"
                >
                  Location / District in Kerala <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555555]">
                    <MapPin className="w-5 h-5 text-[#22C4F2]" />
                  </div>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={(e) => {
                      setFormData({ ...formData, district: e.target.value });
                      if (errors.district) setErrors({ ...errors, district: "" });
                    }}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E5E7EB] text-sm text-[#171717] bg-white focus:outline-none focus:ring-2 focus:border-[#22C4F2] focus:ring-[#22C4F2]/20 transition-all appearance-none cursor-pointer"
                  >
                    {KERALA_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist} District
                      </option>
                    ))}
                  </select>
                </div>
                {errors.district && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.district}</span>
                  </p>
                )}
              </div>

              {/* Additional Requirements (Optional) */}
              <div className="md:col-span-2">
                <label
                  htmlFor="additionalRequirements"
                  className="block text-xs sm:text-sm font-bold text-[#171717] mb-2"
                >
                  Additional Requirements / Tank Details{" "}
                  <span className="text-xs font-normal text-[#555555]">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#555555]">
                    <FileText className="w-5 h-5 text-[#22C4F2]" />
                  </div>
                  <textarea
                    id="additionalRequirements"
                    name="additionalRequirements"
                    rows={3}
                    value={formData.additionalRequirements}
                    onChange={(e) =>
                      setFormData({ ...formData, additionalRequirements: e.target.value })
                    }
                    placeholder="e.g. 1000L Sintex overhead tank + 3000L concrete sump in Palakkad..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E5E7EB] text-sm text-[#171717] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-[#22C4F2] focus:ring-[#22C4F2]/20 transition-all"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Disclaimer requirement per Section 10 */}
            <div className="p-4 rounded-xl bg-[#F0FAFE] border border-[#22C4F2]/30 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#22C4F2] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                <span className="font-bold text-[#171717]">Booking Notice: </span>
                Submitting this form does not mean your booking is instantly confirmed. It automatically sends your enquiry details to Dr. Tank via WhatsApp. Our team will review the slot and confirm availability.
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#22C4F2] hover:bg-[#0FAAD8] text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-5 h-5" />
              <span>Book Through WhatsApp</span>
            </button>

            {/* Quick response message after click */}
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  WhatsApp is opening in a new tab! If it didn&apos;t open automatically,{" "}
                  <a
                    href={createWhatsAppUrl(formatBookingMessage(formData))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-emerald-900"
                  >
                    click here to open WhatsApp directly
                  </a>.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

