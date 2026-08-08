'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const VIDEO_URL = 'https://www.youtube-nocookie.com/embed/MCxQs05BMls?autoplay=1&rel=0';

export function OrganicFarmVideoDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeVideo = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className="relative mt-6 size-20 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label="Play organic farm video"
        onClick={openVideo}
      >
        <Image src="/images/product/organic-farm-play.svg" alt="" fill sizes="80px" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Organic farm video"
        className="m-auto w-[min(90vw,960px)] overflow-visible rounded-lg bg-black p-0 backdrop:bg-black/75"
        onClose={() => setIsOpen(false)}
        onClick={closeVideo}
      >
        {isOpen ? (
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
            <iframe
              className="absolute inset-0 size-full border-0"
              src={VIDEO_URL}
              title="Shopery organic farm video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : null}

        <button
          type="button"
          aria-label="Close video"
          onClick={closeVideo}
          className="absolute -top-11 right-0 grid size-10 cursor-pointer place-items-center rounded-full bg-white text-2xl leading-none text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span aria-hidden="true">×</span>
        </button>
      </dialog>
    </>
  );
}
