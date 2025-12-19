// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function page() {
  // Handle case when devUsername is not set or no blogs exist
  if (!personalData.devUsername) {
    return (
      <div className="py-8">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
              All Blog
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="text-center text-white py-12">
          <p className="text-lg">No blog posts available yet.</p>
          <p className="text-sm text-gray-400 mt-2">Check back soon for new articles!</p>
        </div>
      </div>
    );
  }

  let blogs = [];
  try {
    blogs = await getBlogs();
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center text-white py-12">
          <p className="text-lg">No blog posts available yet.</p>
          <p className="text-sm text-gray-400 mt-2">Check back soon for new articles!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {
            blogs.map((blog, i) => (
              blog?.cover_image &&
              <BlogCard blog={blog} key={i} />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default page;