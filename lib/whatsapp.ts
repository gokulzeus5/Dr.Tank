import { BRAND } from "./constants";

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  preferredDate: string;
  serviceType: string;
  district: string;
  additionalRequirements?: string;
}

/**
 * Builds the official WhatsApp click-to-chat URL with encoded message
 */
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BRAND.phoneRaw}?text=${encoded}`;
}

/**
 * Formats the structured booking enquiry message as specified in Section 10
 */
export function formatBookingMessage(data: BookingFormData): string {
  const lines = [
    "Hello Dr. Tank,",
    "I would like to book a water tank cleaning service.",
    "",
    `Name: ${data.fullName.trim()}`,
    `Phone: ${data.mobileNumber.trim()}`,
    `Preferred Date: ${data.preferredDate}`,
    `Service: ${data.serviceType}`,
    `Location: ${data.district}`,
  ];

  if (data.additionalRequirements && data.additionalRequirements.trim().length > 0) {
    lines.push(`Additional Requirements: ${data.additionalRequirements.trim()}`);
  }

  lines.push("", "Please contact me regarding the booking.", "Thank you.");

  return lines.join("\n");
}

/**
 * Quick action WhatsApp URLs
 */
export const QUICK_WHATSAPP_URLS = {
  general: createWhatsAppUrl(
    "Hello Dr. Tank, I would like to enquire about your water tank cleaning services in Kerala."
  ),
  locationCheck: createWhatsAppUrl(
    "Hi Dr. Tank, I would like to know whether your water tank cleaning service is available in my location."
  ),
  talkToTeam: createWhatsAppUrl(
    "Hello Dr. Tank, I would like to talk to your team regarding water tank cleaning solutions."
  ),
};
