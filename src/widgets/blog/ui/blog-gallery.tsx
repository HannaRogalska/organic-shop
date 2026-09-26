'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { MouseEvent } from 'react';
import { useRef, useState } from 'react';

type BlogGalleryImage = {
  thumbnail: string;
  full: string;
};
type BlogGalleryProps = {
  images: readonly BlogGalleryImage[];
};

export function BlogGallery({ images }: BlogGalleryProps) {
  const t = useTranslations('BlogPage.sidebar');

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImageDescription = t(`galleryDescriptions.image${selectedIndex + 1}`);
  const selectedImagePosition = t('imagePosition', {
    current: selectedIndex + 1,
    total: images.length,
  });

  function openGallery(index: number) {
    setSelectedIndex(index);
    dialogRef.current?.showModal();
  }

  function closeGallery() {
    dialogRef.current?.close();
  }

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeGallery();
    }
  }

  return (
    <>
      <div className="mt-5 grid grid-cols-4 gap-2">
        {images.map((image, index) => {
          const description = t(`galleryDescriptions.image${index + 1}`);

          return (
            <button
              key={image.thumbnail}
              type="button"
              aria-label={t('galleryImage', { description })}
              onClick={() => openGallery(index)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Image
                src={image.thumbnail}
                alt=""
                fill
                sizes="100px"
                className="object-cover transition-transform duration-200 hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={t('galleryDialogLabel')}
        onClick={handleDialogClick}
        className="m-auto w-[min(92vw,560px)] overflow-visible rounded-lg bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-900">
          <Image
            src={images[selectedIndex].full}
            alt={t('fullImageAlt', {
              description: selectedImageDescription,
              position: selectedImagePosition,
            })}
            fill
            sizes="(min-width: 640px) 600px, 92vw"
            className="object-contain"
          />
        </div>

        <button
          type="button"
          aria-label={t('closeGallery')}
          onClick={closeGallery}
          className="absolute -top-12 right-0 grid size-10 cursor-pointer place-items-center rounded-full bg-background text-2xl text-gray-900"
        >
          <span aria-hidden="true">×</span>
        </button>
      </dialog>
    </>
  );
}
