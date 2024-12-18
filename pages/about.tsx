import React from 'react';

const team = [
  {
    name: "Mark Sendo",
    role: "Co-Founder and Visionary Leader",
    image: "/images/mark.jpg",
    bio: "As the Co-Founder and Visionary Leader of StelTrek, Mark brings over 20 years of entrepreneurial expertise to the company’s mission of democratizing space travel...",
  },
  {
    name: "John Errington",
    role: "Co-Founder and CEO",
    image: "/images/john.jpg",
    bio: "As the CEO of StelTrek, John leads the effort to transform experiential education and training for space travel enthusiasts...",
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
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-gray-600 text-center mb-10">
        We are on a mission to democratize space travel and prepare humanity for the next frontier.
      </p>

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
