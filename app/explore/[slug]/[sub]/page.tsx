import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ExamplesView } from '@/components/examples-view'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { allSubcategoryParams, getSubcategory } from '@/lib/heritage'

export function generateStaticParams() {
  return allSubcategoryParams()
}

export async function generateMetadata({ params }: PageProps<'/explore/[slug]/[sub]'>): Promise<Metadata> {
  const { slug, sub } = await params
  const subcategory = getSubcategory(slug, sub)
  if (!subcategory) return {}
  return {
    title: `${subcategory.name.en} of Karnataka | Karunadu`,
    description: subcategory.description.en,
  }
}

export default async function SubcategoryPage({ params }: PageProps<'/explore/[slug]/[sub]'>) {
  const { slug, sub } = await params
  if (!getSubcategory(slug, sub)) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <ExamplesView category={slug} slug={sub} />
      </main>
      <SiteFooter />
    </>
  )
}
