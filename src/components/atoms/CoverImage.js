import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ featuredImage, uri }) {
  if (!uri || !featuredImage?.sourceUrl) return null

  return (
    <div className="sm:mx-0 w-full aspect-w-16 aspect-h-9">
      <Link href={uri}>
        <a>
          <Image
            layout="fill"
            objectFit="cover"
            alt={featuredImage?.altText}
            src={featuredImage?.sourceUrl}
            className="shadow hover:shadow-lg transition-shadow duration-200"
          />
        </a>
      </Link>
    </div>
  )
}