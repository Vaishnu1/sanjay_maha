import { MapPin, Calendar, Clock } from 'lucide-react';

const EventDetails = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-serif text-primary mb-12">Wedding Events</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {/* Ceremony Card */}
        <div className="bg-background/80 p-8 rounded-xl shadow-lg w-full md:w-1/3">
          <h3 className="text-3xl font-serif text-accent mb-4">The Ceremony</h3>
          <p className="flex items-center justify-center mb-2 font-sans">
            <Calendar className="w-5 h-5 mr-2 text-secondary" />
            Friday, 29th Aug 2025
          </p>
          <p className="flex items-center justify-center mb-2 font-sans">
            <Clock className="w-5 h-5 mr-2 text-secondary" />
            4:30 AM
          </p>
          <p className="flex items-center justify-center font-sans">
            <MapPin className="w-5 h-5 mr-2 text-secondary" />
            Karattumedu Temple / Rathinagiri Maruthachalakadavul Temple ,Karatumedu, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035
          </p>
           <a href="https://maps.app.goo.gl/6856w4cSDosfTSJXA" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-accent transition-colors duration-300">
            View Map
          </a>
        </div>

        {/* Reception Card */}
        <div className="bg-background/80 p-8 rounded-xl shadow-lg w-full md:w-1/3">
          <h3 className="text-3xl font-serif text-accent mb-4">The Reception</h3>
          <p className="flex items-center justify-center mb-2 font-sans">
            <Calendar className="w-5 h-5 mr-2 text-secondary" />
            Thursday, 28th Aug 2025
          </p>
          <p className="flex items-center justify-center mb-2 font-sans">
            <Clock className="w-5 h-5 mr-2 text-secondary" />
            6:00 PM onwards
          </p>
          <p className="flex items-center justify-center font-sans">
            <MapPin className="w-5 h-5 mr-2 text-secondary" />
            Ponmani kalayana Mandapam, Koundampalayam, Coimbatore, Tamil Nadu 641006
          </p>
           <a href="https://maps.app.goo.gl/6hAELYy8ZgkxBo178" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-accent transition-colors duration-300">
            View Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;