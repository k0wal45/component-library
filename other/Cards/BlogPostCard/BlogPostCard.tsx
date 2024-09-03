import Image from "next/image";
import React from "react";

const BlogPostCard = () => {
  return (
    <div
      className="
      flex flex-col gap-2 w-[23rem] h-min rounded-xl shadow-none
      lg:hover:translate-y-[-4px] lg:hover:translate-x-2 lg:hover:shadow-xl bg-neutral-800 text-white
      duration-200 transition-all
      lg:group
    "
    >
      <Image
        src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Food photo"
        width={400}
        height={300}
        className="w-full h-48 rounded-xl object-cover group-hover:translate-y-[-4px] group-hover:translate-x-2
        duration-200 transition-all"
      />
      <div
        className="flex flex-col gap-2 p-4
        group-hover:translate-y-[-4px] group-hover:translate-x-2
        duration-200 transition-all
      "
      >
        <ul className="flex gap-4 ">
          <li className="px-2 py-1 rounded-xl text-sm font-bold bg-yellow-500">
            Food
          </li>
          <li className="px-2 py-1 rounded-xl text-sm font-bold bg-blue-500">
            Cooking
          </li>
        </ul>

        <h2 className=" text-lg font-bold">How to prepare soup</h2>
        <p className="text-neutral-300">
          Learn the basics of making delicious, homemade soup with this quick
          guide. From selecting the best ingredients to mastering simple
          techniques, this post will help you create flavorful soups with ease.
          Plus, enjoy a few go-to recipes to get you started!
        </p>
        <span className="text-sm text-neutral-400">
          {new Date().toDateString()}
        </span>
      </div>
    </div>
  );
};

export default BlogPostCard;
