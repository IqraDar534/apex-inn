// FAQ content shown on /faq and mirrored in its FAQPage structured data. Answers must stay
// plain text and only state facts published elsewhere on the site.
import { featuredRooms } from "../components/rooms/roomData";
import { call, checkInTime, checkOutTime, whatsapp } from "./contact";

const roomSummaries = featuredRooms.map(
  (room) => `the ${room.name} (${room.guests.toLowerCase()}, ${room.bed.toLowerCase()})`,
);

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Where is Apex Inn located?",
    answer:
      "Apex Inn is a guest house in Neelum Valley, Azad Kashmir. You can find directions on our Contact page, which links to our location on Google Maps.",
  },
  {
    question: "How do I book a room at Apex Inn?",
    answer: `The quickest way to book is to call us on ${call.display} or message us on WhatsApp at ${whatsapp.display}. We will check availability for your dates and confirm your reservation.`,
  },
  {
    question: "Does submitting the booking form guarantee a reservation?",
    answer:
      "No. The booking form sends a booking request only. Availability must be confirmed by Apex Inn, so please call or WhatsApp us to finalize your reservation.",
  },
  {
    question: "What types of rooms are available?",
    answer: `Apex Inn offers ${roomSummaries.slice(0, -1).join(", ")} and ${roomSummaries.at(-1)}.`,
  },
  {
    question: "Is Apex Inn suitable for families visiting Neelum Valley?",
    answer:
      "Yes. Our Family Room is a spacious room designed for families and small groups of up to 4 guests.",
  },
  {
    question: "What time is check-in and check-out?",
    answer: `Our standard check-in time is ${checkInTime.display} and check-out time is ${checkOutTime.display}.`,
  },
  {
    question: "Does Apex Inn provide free Wi-Fi?",
    answer: "Yes. Free Wi-Fi is available for guests.",
  },
  {
    question: "Is parking available at the guest house?",
    answer: "Yes. Free parking is available for guests.",
  },
  {
    question: "Is reception available 24/7?",
    answer: "Yes. Our reception is available 24/7.",
  },
  {
    question: "Does Apex Inn offer room service and housekeeping?",
    answer:
      "Yes. Room service and housekeeping are available to help keep your stay clean and comfortable.",
  },
  {
    question: "Should I contact Apex Inn before traveling to Neelum Valley?",
    answer: `Yes. We recommend calling ${call.display} or messaging us on WhatsApp before you travel so we can confirm your booking and expected arrival time.`,
  },
];
