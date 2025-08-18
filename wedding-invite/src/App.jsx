import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, MapPin, Phone, Clock, Heart } from "lucide-react";

// helper: generate calendar .ics
function useIcsUrl({ title, description, location, start, end }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const dt = (d) => d.replace(/[-:]/g, "").replace(" ", "T") + "Z";
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${dt(start)}`,
      `DTEND:${dt(end)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [title, description, location, start, end]);
  return url;
}

export default function App() {
  const couple = { bride: "Mahalakshmi", groom: "Sanjay Kumar" };

  const receptionVenue =
    "Ponmani Kalyana Mandapam, Koundampalayam, Coimbatore, Tamil Nadu 641006";
  const weddingVenue =
    "Karattumedu Temple / Rathinagiri Maruthachalakadavul Temple, Karatumedu, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035";

  const [copied, setCopied] = useState(false);

  const receptionIcs = useIcsUrl({
    title: `Reception — ${couple.bride} & ${couple.groom}`,
    description: "An evening of love & laughter",
    location: receptionVenue,
    start: "2025-08-28 18:00",
    end: "2025-08-28 22:00",
  });

  const weddingIcs = useIcsUrl({
    title: `Wedding — ${couple.bride} & ${couple.groom}`,
    description: "Bless the couple",
    location: weddingVenue,
    start: "2025-08-29 04:30",
    end: "2025-08-29 06:30",
  });

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center text-slate-800"
      style={{ backgroundImage: "url('/1000156958.jpg')" }}>
      
      {/* Header */}
      <header className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 border">
            <Heart className="w-4 h-4" /> You're Invited
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold">
            {couple.bride} <span className="text-rose-500">&</span> {couple.groom}
          </h1>
          <p className="mt-4 text-slate-600">
            Join us as we celebrate love, laughter, and happily-ever-after.
          </p>
        </motion.div>
      </header>

      {/* Right-side container */}
      <main className="w-full md:w-[30%] ml-auto mr-6 h-screen overflow-y-auto px-6 pb-24 space-y-8 bg-white/80 rounded-2xl shadow-lg">
        
        {/* Events */}
        <section className="grid gap-6">
          {/* Reception */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl flex items-center justify-between">
              Reception <Clock className="w-5 h-5" />
            </h2>
            <p className="text-slate-600 mt-2">An evening of love & laughter</p>
            <p className="mt-2">28 Aug 2025, 6:00 PM IST</p>
            <a
              href={receptionIcs}
              download="reception.ics"
              className="inline-block mt-4 px-4 py-2 bg-rose-500 text-white rounded-xl"
            >
              Add to Calendar
            </a>
          </div>

          {/* Wedding */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl flex items-center justify-between">
              Wedding <CalendarIcon className="w-5 h-5" />
            </h2>
            <p className="text-slate-600 mt-2">Blessings & Ceremony</p>
            <p className="mt-2">29 Aug 2025, 4:30 AM IST</p>
            <a
              href={weddingIcs}
              download="wedding.ics"
              className="inline-block mt-4 px-4 py-2 bg-rose-500 text-white rounded-xl"
            >
              Add to Calendar
            </a>
          </div>
        </section>

        {/* Reception Venue */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="flex items-center gap-2 text-2xl">
            <MapPin className="w-5 h-5" /> Reception Venue
          </h2>
          <p className="mt-2">{receptionVenue}</p>
          <div className="mt-4 flex gap-3 flex-wrap">
            <a
              href="https://maps.app.goo.gl/ugXdVTb3uscdv5R39"
              target="_blank"
              className="px-4 py-2 bg-rose-100 rounded-xl"
            >
              Open in Maps
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(receptionVenue);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="px-4 py-2 border rounded-xl"
            >
              {copied ? "Copied!" : "Copy Address"}
            </button>
          </div>
          <iframe
            className="w-full h-64 mt-4 rounded-xl border"
            src="https://www.google.com/maps?q=Ponmani+Kalyana+Mandapam,+Coimbatore,+Tamil+Nadu&output=embed"
          />
        </section>

        {/* Wedding Venue */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="flex items-center gap-2 text-2xl">
            <MapPin className="w-5 h-5" /> Wedding Venue
          </h2>
          <p className="mt-2">{weddingVenue}</p>
          <div className="mt-4 flex gap-3 flex-wrap">
            <a
              href="https://maps.app.goo.gl/RLTUC8QaVwZtrqSS8"
              target="_blank"
              className="px-4 py-2 bg-rose-100 rounded-xl"
            >
              Open in Maps
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(weddingVenue);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="px-4 py-2 border rounded-xl"
            >
              {copied ? "Copied!" : "Copy Address"}
            </button>
          </div>
          <iframe
            className="w-full h-64 mt-4 rounded-xl border"
            src="https://www.google.com/maps?q=Karattumedu+Temple,+Coimbatore,+Tamil+Nadu&output=embed"
          />
        </section>
      </main>
    </div>
  );
}
