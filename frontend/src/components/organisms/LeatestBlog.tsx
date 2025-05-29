import ContentWrapper from '../atoms/ContentWrapper.tsx';
import BlogCard, { BlogPost } from '../atoms/BlogCard.tsx';
import blogImg1 from '../../assets/images/blog-1.svg';
import blogImg2 from '../../assets/images/blog-2.svg';
import blogImg3 from '../../assets/images/blog-3.svg';
import SectionHeading from '../atoms/SectionHeading.tsx';

type BlogDataType = BlogPost[];

const BlogData: BlogDataType = [
  {
    image: blogImg1,
    name: 'Jon Doe',
    date: '21 August, 2023',
    title: 'Top essential Trends in 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.'
  },
  {
    image: blogImg2,
    name: 'Jon Doe',
    date: '21 August, 2023',
    title: 'Top esssential Trends in 2021',
    text: 'Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam.'
  },
  {
    image: blogImg3,
    name: 'Jon Doe',
    date: '21 August, 2023',
    title: 'Top essential Trends in 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.'
  }
];

export default function LeatestBlog() {
  return (
    <ContentWrapper>
      <SectionHeading heading="Leatest Blog" />
      <div className="flex flex-col lg:flex-row gap-x-10 w-full px-1 md:px-3 lg:px-5 py-2 md:py-4 lg:py-7 xl:py-14">
        {BlogData.map((post, index) => (
          <div key={index}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
}
