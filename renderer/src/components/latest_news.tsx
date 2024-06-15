import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestNews = () => {
  const news = [
    {
      id: 1,
      image: "/news/news1.png",
      url: "/",
    },
    { id: 2, image: "/news/news2.png", url: "/" },
    { id: 3, image: "/news/news1.png", url: "/" },
  ];
  return (
    <div className="overflow-auto p-4 h-3/4">
      <h2 className="text-xl mb-4">Lastest News</h2>
      <div className="grid gap-4">
        {news.map((item) => (
          <Link href={item.url} className="hover:opacity-90" key={item.id}>
            <Image
              src={item.image}
              width={400}
              height={300}
              alt={`News ${item.id}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
