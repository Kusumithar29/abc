import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GamesCategoryView } from '@/components/games-category-view'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TopicView } from '@/components/topic-view'
import { gamesCategory } from '@/lib/heritage'
import { getTopic, topics } from '@/lib/topics'

export function generateStaticParams() {
  return [...topics.map((topic) => ({ slug: topic.slug })), { slug: gamesCategory.slug }]
}

export async function generateMetadata({ params }: PageProps<'/explore/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  if (slug === gamesCategory.slug) {
    return { title: 'Traditional Games of Karnataka | Karunadu', description: gamesCategory.intro.en }
  }
  const topic = getTopic(slug)
  if (!topic) return {}
  return {
    title: `${topic.title.en} of Karnataka | Karunadu`,
    description: topic.intro.en,
  }
}

export default async function TopicPage({ params }: PageProps<'/explore/[slug]'>) {
  const { slug } = await params
  const isGames = slug === gamesCategory.slug
  if (!isGames && !getTopic(slug)) notFound()

  return (
    <>
      <SiteHeader />
      <main>{isGames ? <GamesCategoryView /> : <TopicView slug={slug} />}</main>
      <SiteFooter />
    </>
  )
}
