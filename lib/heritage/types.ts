import type { Localized } from '../languages'

export type Example = {
  slug: string
  name: Localized
  place: string
  description: Localized
  image: string
}

export type Subcategory = {
  slug: string
  name: Localized
  description: Localized
  examples: Example[]
}

export function bi(en: string, kn: string): Localized {
  return { en, kn, ta: en, te: en, hi: en, ml: en }
}

export function img(slug: string) {
  return `/images/examples/${slug}.png`
}

export function ex(slug: string, en: string, kn: string, place: string, description: string, image = slug): Example {
  return { slug, name: bi(en, kn), place, description: bi(description, description), image: img(image) }
}
