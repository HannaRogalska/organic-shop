'use client';
import { useState } from 'react';
import type { BlogTag } from '../model/blog-tags';
import { BlogSidebar } from './blog-sidebar';
import { BlogPosts } from './blog-posts';

export function BlogContent() {
  const [selectedTag, setSelectedTag] = useState<BlogTag | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  function handleTagChange(tag: BlogTag) {
    setSelectedTag((currentTag) => (currentTag === tag ? null : tag));
    setCurrentPage(1);
  }

  function clearTagFilter() {
    setSelectedTag(null);
    setCurrentPage(1);
  }

  return (
    <section className="mx-auto grid w-full max-w-330 gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[312px_minmax(0,1fr)] xl:px-0">
      <BlogSidebar selectedTag={selectedTag} onTagChange={handleTagChange} />
      <BlogPosts
        selectedTag={selectedTag}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onClearTag={clearTagFilter}
      />
    </section>
  );
}
