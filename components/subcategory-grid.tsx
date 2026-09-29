'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { PinwheelLink } from '@/components/providers/pinwheel-transition'
import { ui } from '@/lib/i18n'
import { getSubcategories } from '@/lib/heritage'

export function SubcategoryGrid({ category }: { category: string }) {
  const { t } = useLanguage()
  const subcategories = getSubcategories(category)
  if (subcategories.length === 0) return null

  return (
    <section aria-labelledby="subcategories-heading" className="mx-auto max-w-7xl px-4 pt-16 md:px-8 md:pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{t(ui.subcategoriesEyebrow)}</p>
      <h2 id="subcategories-heading" className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
        {t(ui.subcategoriesHeading)}
      </h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subcategories.map((sub) => {
          const preview = sub.examples.slice(0, 3)
          return (
            <li key={sub.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid h-40 grid-cols-3 gap-0.5 bg-border" aria-hidden="true">
                {preview.map((example) => (
                  <div key={example.slug} className="relative">
                    <Image src={example.image || '/placeholder.svg'} alt="" fill sizes="(min-width: 1024px) 140px, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">{t(sub.name)}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-secondary">
                  {sub.examples.length} {t(ui.examplesCount)}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t(sub.description)}</p>
                <PinwheelLink
                  href={`/explore/${category}/${sub.slug}`}
                  className="group mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
                >
                  {t(ui.exploreButton)}
                  <span className="sr-only">{t(sub.name)}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </PinwheelLink>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
