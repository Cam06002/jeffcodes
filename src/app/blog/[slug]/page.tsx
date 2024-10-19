import { wisp } from "@/lib/wisp";

export default async function BlogPost(
  {params}: {params:{ slug: string }},
) {
  const result = await wisp.getPost(params.slug);
  console.log(result);
  
  if (!result.post) return null;
  const { title, publishedAt, createdAt, content, tags } = result.post;
  return (
    <div className="m-8  flex flex-col w-full">
      <h1 className="text-2xl md:text-3xl font-bold align-middle justify-center flex mb-8 text-white px-8">{title}</h1>
      <div
        className="prose text-white max-w-none px-8 text-justify"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div className="mt-10 opacity-40 text-sm">
        {tags.map((tag, key) => (
          <span key={key}>#{tag.name}</span>
        ))}
      </div>
      <div className="text-sm opacity-40 mt-4">
        {Intl.DateTimeFormat("en-US").format(
          new Date(publishedAt || createdAt),
        )}
      </div>
    </div>
  );
}
