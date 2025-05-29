import TextIcon from './TextIcon.tsx';

export interface BlogPost {
  image: string;
  name: string;
  date: string;
  title: string;
  text: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div
      className="group flex flex-col relative size-full rounded-lg shadow-xl
      transition-transform duration-300 ease-in-out hover:-translate-y-5 hover:z-10 py-10 lg:py-0"
    >
      <div className="relative h-1/2 2xl:h-3/5 rounded-sm overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full object-cover" loading="lazy" />
      </div>

      <div className="p-4 flex flex-col gap-y-6">
        <div className="flex items-center gap-x-16 font-normal font-sans text-sm text-grey-3">
          <TextIcon
            text={post.name}
            icon="pen"
            position="before"
            className="bg-grey-3"
          />
          <TextIcon
            text={post.date}
            icon="calendar"
            position="before"
            className="bg-grey-3"
          />
        </div>
        <div className="font-sans font-semibold text-base text-black group-hover:text-primary">
          {post.title}
        </div>
        <p className="font-lato font-normal text-base text-grey-3">{post.text}</p>
        <button className="font-sans font-bold text-base text-primary">Read more</button>
      </div>
    </div>
  );
}
