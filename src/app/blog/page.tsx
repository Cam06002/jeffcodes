import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const result = await wisp.getPosts({ limit: 6 });
  console.log(result);

  return (
    <div className="flex flex-col m-8 w-full align-middle font-Orbitron">
      <div className="mb-6 bg-gradient-to-r from-sky-300 to-red-300 w-full h-fit px-8 py-8 md:px-12 flex flex-col align-middle justify-center text-gray-900/50">
        <h1 className="text-3xl font-bold align-middle justify-center flex">Jeff Writes</h1>
        <h4 className="justify-center flex">-Welcome To My Blog-</h4>
      </div>

      {result.posts.map((post) => (
        <div className="flex flex-row align-middle justify-between mb-2 border-sky-300 border-2 rounded p-2 hover:bg-slate-900" key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <div className="flex flex-row">
              <div className="flex flex-col w-1/4 mr-2">
                {post.image ? (
                  <Image
                    alt={post.title}
                    src={post.image}
                    width={150}
                    height={150}
                  />
                ) : null}
              </div>
              <div className="flex flex-col w-3/4">
                <h2 className="font-semibold text-white text-xl md:text-2xl">{post.title}</h2>
                <p className="italic text-white mb-4 text-sm">{(post.publishedAt || post.updatedAt).toLocaleString()}</p>
                <p className="md:text-lg text-white">{post.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
