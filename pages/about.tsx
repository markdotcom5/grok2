const team = [
  {
    name: "Mark Sendo",
    role: "Co-Founder and Visionary Leader",
    image: "/images/mark.jpg",
    bio: "As the Co-Founder and Visionary Leader of StelTrek, Mark brings over 20 years of entrepreneurial expertise to the company’s mission of democratizing space travel. Renowned for turning innovative concepts into billion-dollar enterprises, Mark’s career highlights include launching the world’s first online mortgage company, acquired by Microsoft, and co-creating BillMeLater, later sold to eBay for $565 million. His pioneering vision and ability to disrupt traditional industries are integral to StelTrek’s efforts to redefine how individuals prepare for the final frontier. Mark holds an Executive MBA from the University of Michigan’s Ross School of Business and a Master’s in Applied Economics from Rackham Graduate School.",
  },
  {
    name: "John Errington",
    role: "Co-Founder and CEO",
    image: "/images/john.jpg",
    bio: "As the CEO of StelTrek, John leads the effort to transform experiential education and training for space travel enthusiasts. With extensive experience managing creative agencies and delivering innovative digital solutions, John specializes in developing high-quality, user-focused experiences. John holds a Bachelor's and Master's degree from Harvard and an Executive MBA from the Quantic School of Business and Technology.",
  },
];

const advisors = [
  {
    name: "Board of Advisors",
    role: "Content Placeholder",
    image: "/images/advisors-placeholder.jpg",
    bio: "Add advisor bios and pictures here as they become available.",
  },
];

export default function About() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* About Section */}
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-gray-600 text-center mb-10">
        We are on a mission to democratize space travel and prepare humanity for the next frontier.
      </p>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Advisors Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">Board of Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold">{advisor.name}</h3>
              <p className="text-gray-500 mb-2">{advisor.role}</p>
              <p className="text-gray-700 text-sm">{advisor.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
