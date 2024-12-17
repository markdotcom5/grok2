{/* Board of Advisors Section */}
<section>
  <h2 className="text-3xl font-semibold text-center mb-6">Board of Advisors</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
