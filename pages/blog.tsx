import React from "react";

// Default export for the page
export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the StelTrek Blog. Discover updates and insights about space travel!</p>
    </div>
  );
}

// Correctly structured blogPosts array
export const blogPosts = [
  {
    title: "Welcome to StelTrek!",
    date: "2023-12-17",
    description:
      "Discover how StelTrek is transforming space travel preparation and education with cutting-edge technology.",
  },
  {
    title: "Exploring New Horizons",
    date: "2023-12-10",
    description:
      "Learn about the latest updates in space exploration and StelTrek's mission to democratize space travel.",
  },
];
