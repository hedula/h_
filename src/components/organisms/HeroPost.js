import Link from '../../../node_modules/next/link'

import CoverImage from '../../components/atoms/CoverImage'
import Date from '../../components/atoms/Date'
export default function HeroPost({ title, featuredImage, date, excerpt, uri }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {featuredImage && <CoverImage title={title} featuredImage={featuredImage} uri={uri} />}
      </div>
      <div className="md:grid md:grid-cols-2 mb-20 md:mb-28 gap-4">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight line-clamp-3">
            <Link href={uri}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed line-clamp-6">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}