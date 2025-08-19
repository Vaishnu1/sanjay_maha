import { motion } from 'framer-motion';

const galleryImages = [
  'gallery1.JPG',
  'gallery2.JPG',
  'gallery3.JPG',
  'gallery4.JPG',
  'gallery5.JPG',
  'gallery6.JPG',
];

const Gallery = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-serif text-primary mb-12">Our Moments</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover"/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;