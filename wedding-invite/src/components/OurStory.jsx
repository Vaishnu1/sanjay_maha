const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-serif text-primary mb-6">Our Story</h2>
        <p className="font-sans text-text mb-4">
          Our journey began unexpectedly, a serendipitous meeting that blossomed into a friendship built on laughter, late-night talks, and shared dreams. We found in each other a companion for life's adventures and a partner to lean on.
        </p>
        <p className="font-sans text-text">
          Through every chapter, our love has grown deeper and stronger. We are so excited to start our next chapter together as husband and wife, and we feel incredibly blessed to share this moment with you, our dearest family and friends.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src="/couple-story.jpg" alt="Our Story" className="rounded-xl shadow-2xl w-full h-auto" />
      </div>
    </div>
  );
};

export default OurStory;