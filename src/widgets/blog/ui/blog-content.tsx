import { BlogSidebar } from './blog-sidebar';
import { BlogPosts } from './blog-posts';

export function BlogContent() {
  return (
    <section className="mx-auto grid w-full max-w-330 gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[312px_minmax(0,1fr)] xl:px-0">
      <BlogSidebar />
      <BlogPosts />
    </section>
  );
}
