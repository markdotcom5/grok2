export default function Home() {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Existing Content */}
        <section className="flex flex-col items-center justify-center py-16">
          <h1 className="text-5xl font-bold mb-4">Your Existing Content</h1>
          <p className="text-gray-400">Keep all your current code here.</p>
        </section>
  
        {/* New Hero Banner Placeholder */}
        <section className="flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to StelTrek!</h1>
          <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
            <p>Hero Banner Placeholder</p>
          </div>
          <p className="mt-4">Explore the future of space travel and training.</p>
        </section>
      </div>
    );
  }
  