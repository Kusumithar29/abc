import { artSubcategories, painting, traditionalToys } from './art'
import { attireSubcategories } from './attire'
import { danceSubcategories } from './dance'
import { festivalSubcategories } from './festivals'
import { foodSubcategories } from './food'
import { gameSubcategories, gamesCategory } from './games'
import { monumentSubcategories } from './monuments'
import { musicSubcategories } from './music'
import type { Subcategory } from './types'

export type { Example, Subcategory } from './types'
export { gamesCategory }

export const subcategoriesByCategory: Record<string, Subcategory[]> = {
  art: artSubcategories,
  paintings: [painting],
  toys: [traditionalToys],
  dance: danceSubcategories,
  monuments: monumentSubcategories,
  music: musicSubcategories,
  festivals: festivalSubcategories,
  food: foodSubcategories,
  attire: attireSubcategories,
  games: gameSubcategories,
}

export function getSubcategories(category: string) {
  return subcategoriesByCategory[category] ?? []
}

export function getSubcategory(category: string, slug: string) {
  return getSubcategories(category).find((sub) => sub.slug === slug)
}

export function allSubcategoryParams() {
  return Object.entries(subcategoriesByCategory).flatMap(([slug, subs]) =>
    subs.map((sub) => ({ slug, sub: sub.slug })),
  )
}
