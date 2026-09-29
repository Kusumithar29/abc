'use client'

import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { PinwheelLink } from '@/components/providers/pinwheel-transition'
import { SubcategoryGrid } from '@/components/subcategory-grid'
import { ui } from '@/lib/i18n'
import { gamesCategory } from '@/lib/heritage'

export function GamesCategoryView() {
  const { t } = useLanguage()

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8 md:px-8 md:pt-12">
        <PinwheelLink
          href="/#explore"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-secondary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t(ui.backToWheel)}
        </PinwheelLink>
        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{t(gamesCategory.tagline)}</p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-bold text-foreground md:text-6xl">{t(gamesCategory.title)}</h1>
          <p lang="kn" className="mt-2 font-serif text-xl text-secondary md:text-2xl">{gamesCategory.title.kn}</p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">{t(gamesCategory.intro)}</p>
          <a
            href="/games"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
          >
            {t(ui.playGames)}
          </a>
        </div>
      </section>
      <div className="pb-16 md:pb-24">
        <SubcategoryGrid category="games" />
      </div>
    </>
  )
}
