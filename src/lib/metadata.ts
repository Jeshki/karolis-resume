import type { Metadata } from 'next';
import { SITE } from './site';

type CreateMetadataArgs = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is (no "| Karolis Čibiras" suffix). */
  absolute?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  absolute = false,
}: CreateMetadataArgs): Metadata {
  const url = new URL(path, SITE.url).toString();
  const displayTitle = absolute ? title : `${title} | ${SITE.name}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE.name,
      title: displayTitle,
      description,
      images: [
        {
          url: SITE.ogImage,
          width: 800,
          height: 800,
          alt: `${SITE.name} — profilio nuotrauka`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description,
      images: [SITE.ogImage],
    },
  };
}
