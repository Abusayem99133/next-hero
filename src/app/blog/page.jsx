import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div className="space-y-4">
      {blogs?.map((blog) => (
        <div key={blog?.slug} className="border-2 p-8">
          <h3>{blog?.title}</h3>
          <h3>{blog?.description}</h3>
          <button className="border py-2 px-4 cursor-pointer hover:bg-cyan-600 hover:text-white ">
            <Link href={`/blog/${blog?.slug}`}> View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};
const blogs = [
  {
    slug: "how-to-build-a-responsive-website",
    title: "How to Build a Responsive Website",
    description:
      "Learn step-by-step how to create a mobile-friendly website using modern tools like Flexbox, CSS Grid, and media queries.",
  },
  {
    slug: "javascript-es6-features",
    title: "Top 10 JavaScript ES6 Features You Should Know",
    description:
      "Explore the most important ES6 features such as arrow functions, let/const, template literals, and more to improve your JS skills.",
  },
  {
    slug: "react-hooks-guide",
    title: "A Beginner’s Guide to React Hooks",
    description:
      "Understand the basics of React Hooks like useState and useEffect with real-world examples to simplify your React components.",
  },
  {
    slug: "node-vs-express",
    title: "Node.js vs Express.js: What’s the Difference?",
    description:
      "Get a clear comparison between Node.js and Express.js, and learn when and why to use each in your web development projects.",
  },
  {
    slug: "mongodb-crud-basics",
    title: "MongoDB CRUD Operations: A Simple Guide",
    description:
      "Master the basics of MongoDB CRUD operations (Create, Read, Update, Delete) with examples using the native driver or Mongoose.",
  },
];

export default BlogPage;
