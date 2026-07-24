import Link from 'next/link';
import { Brand } from '@/shared/ui/brand/brand';
import { footerColumns } from '../model/constants';
import { DownloadApps } from './download-apps';

export function FooterGrid() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto grid w-full max-w-330 grid-cols-3 gap-8 px-5 py-10 lg:grid-cols-[3fr_repeat(3,1fr)_3fr] lg:px-15 lg:py-15">
        <div className="col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-1">
          <div className="mx-auto sm:mx-0">
            <Brand />
          </div>
          <p className="mt-4 w-full text-center text-base text-gray-500 lg:text-left">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum
            magna congue nec.
          </p>
          <address className="mt-4 flex flex-row not-italic items-center justify-center gap-3 text-sm lg:justify-start">
            <a
              href="tel:+12195550114"
              className="border-b-2 border-primary pb-1 font-medium text-gray-900"
            >
              (219) 555-0114
            </a>
            <span className="text-base text-gray-500">or</span>
            <a
              href="mailto:proxy@gmail.com"
              className="border-b-2 border-primary pb-1 font-medium text-gray-900"
            >
              Proxy@gmail.com
            </a>
          </address>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="col-span-1">
            <div className="w-full text-center lg:text-left">
              <h3 className="text-base font-medium text-gray-900">{column.title}</h3>
              <ul className="mt-4 flex flex-col items-center space-y-3 text-sm text-gray-600 lg:items-start">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="col-span-3 lg:col-span-1">
          <DownloadApps />
        </div>
      </div>
    </section>
  );
}
