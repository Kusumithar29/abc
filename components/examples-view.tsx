'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { PinwheelLink } from '@/components/providers/pinwheel-transition'
import { ui } from '@/lib/i18n'
import { gamesCategory, getSubcategories, getSubcategory } from '@/lib/heritage'
import { getTopic } from '@/lib/topics'

export function ExamplesView({ category, slug }: { category: string; slug: string }) {
  const { t } = useLanguage()
  const sub = getSubcategory(category, slug)
  if (!sub) return null
  const categoryTitle = category === 'games' ? gamesCategory.title : getTopic(category)?.title
  const siblings = getSubcategories(category)
  const index = siblings.findIndex((item) => item.slug === slug)
  const next = siblings.length > 1 ? siblings[(index + 1) % siblings.length] : null

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8 md:px-8 md:pt-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <PinwheelLink href="/#explore" className="hover:text-secondary">
                {t(ui.wheelCenterBottom)}
              </PinwheelLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <PinwheelLink href={`/explore/${category}`} className="hover:text-secondary">
                {categoryTitle ? t(categoryTitle) : category}
              </PinwheelLink>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-foreground">
              {t(sub.name)}
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{categoryTitle ? t(categoryTitle) : ''}</p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">{t(sub.name)}</h1>
          <p lang="kn" className="mt-2 font-serif text-xl text-secondary">{sub.name.kn}</p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">{t(sub.description)}</p>
        </div>
      </section>

      <section aria-labelledby="examples-heading" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <h2 id="examples-heading" className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {t(ui.examplesHeading)}
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sub.examples.map((example) => (
            <li key={example.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={example.image || '/placeholder.svg'}
                  alt={example.name.en}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">{t(example.name)}</h3>
                <p lang="kn" className="text-sm text-secondary">{example.name.kn}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {example.place}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(example.description)}</p>
              </div>
            </li>
          ))}
        </ul>

        <nav aria-label={t(ui.topicNavigation)} className="mt-14 grid gap-4 sm:grid-cols-2">
          <PinwheelLink
            href={`/explore/${category}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-secondary"
          >
            <ArrowLeft className="size-5 shrink-0 text-secondary transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t(ui.backToCategory)}</span>
              <span className="font-serif text-lg font-bold text-foreground">{categoryTitle ? t(categoryTitle) : ''}</span>
            </span>
          </PinwheelLink>
          {next && (
            <PinwheelLink
              href={`/explore/${category}/${next.slug}`}
              className="group flex items-center justify-end gap-4 rounded-2xl border border-border bg-card p-5 text-right transition-colors hover:border-secondary"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t(ui.next)}</span>
                <span className="font-serif text-lg font-bold text-foreground">{t(next.name)}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-secondary transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </PinwheelLink>
          )}
        </nav>
      </section>
    </>
  )
}
