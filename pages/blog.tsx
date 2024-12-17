const blogPosts = [
    {
      title: "Welcome to StelTrek!",
      date: "2023-12-17",
      description:
        "Discover how StelTrek is transforming space travel preparation and education with cutting-edge technology.",
    },
    {
      title: "The Future of AR/VR in Space Exploration",
      date: "2023-12-10",
      description:
        "Explore how AR/VR technologies will revolutionize training, simulations, and experiences for space explorers.",
    },
  ];
  
  export default function Blog() {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8">Blog & News</h1>
        <div className="space-y-6 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  