import Image from 'next/image';

export function DownloadApps() {
  return (
    <div className="text-center sm:text-left">
      <h3 className="text-base font-medium text-gray-900">Download Mobile App</h3>
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-2 lg:justify-start">
        <a href="#app-store" className="flex items-center gap-2 bg-background p-3">
          <Image src="/images/footer/apple-store.svg" alt="" width={28} height={28} />
          <span className="flex flex-col text-left">
            <span className="text-xs text-gray-700">Download on the</span>
            <span className="text-base font-medium text-gray-900">App Store</span>
          </span>
        </a>
        <a href="#google-play" className="flex items-center gap-2 bg-background p-3">
          <Image src="/images/footer/google-play.svg" alt="" width={28} height={28} />
          <span className="flex flex-col text-left">
            <span className="text-xs text-gray-700">Download on the</span>
            <span className="text-base font-medium text-gray-900">Google Play</span>
          </span>
        </a>
      </div>
    </div>
  );
}
