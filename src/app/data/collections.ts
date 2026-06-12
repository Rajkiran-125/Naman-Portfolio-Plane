import { PORTFOLIO_ITEMS, PortfolioCategory, PortfolioItem } from './portfolio';

/**
 * A themed group of photographs. Collections are the primary way the gallery is
 * browsed: the landing pages show a card per collection, and `/gallery/:slug`
 * opens the masonry grid of every image inside one.
 */
export interface Collection {
  /** Stable numeric id. */
  id: number;
  /** URL-friendly identifier used in the route `/gallery/:slug`. */
  slug: string;
  /** Display name shown on the card and detail page. */
  name: string;
  /** Short tagline shown under the name on the card. */
  description: string;
  /** Cover/thumbnail image URL. */
  coverImage: string;
  /** Every image that belongs to this collection. */
  images: PortfolioItem[];
}

const B = 'https://mir-s3-cdn-cf.behance.net/project_modules/';

/**
 * Seed metadata for each collection. Images are resolved from `PORTFOLIO_ITEMS`
 * by category at module load, so the photo list stays a single source of truth —
 * add an image (with its category) in portfolio.ts and it appears here automatically.
 */
interface CollectionSeed {
  id: number;
  slug: string;
  name: string;
  description: string;
  /** Portfolio category whose items make up this collection. */
  category: PortfolioCategory;
  coverImage: string;
}

const COLLECTION_SEEDS: CollectionSeed[] = [
  {
    id: 1,
    slug: 'naturescapes',
    name: 'Naturescapes',
    description: 'Coastlines, landscapes & the great outdoors',
    category: 'nature',
    coverImage: `${B}disp/b2e896200602291.666586566b430.jpg`,
  },
  {
    id: 2,
    slug: 'travel',
    name: 'Travel',
    description: 'Stories from the road, near & far',
    category: 'country',
    coverImage: `${B}disp/783ff9200602291.666586566c757.jpg`,
  },
  {
    id: 3,
    slug: 'portraits',
    name: 'Portraits',
    description: 'People, models & candid moments',
    category: 'human',
    coverImage: `${B}disp/c036a9200602291.666586566ccdb.jpeg`,
  },
  {
    id: 4,
    slug: 'reels',
    name: 'Reels',
    description: 'Motion, events & behind the scenes',
    category: 'video',
    coverImage: `${B}1400/d42b66201952933.667d6969b6c06.jpg`,
  },
];

/** Items tagged with the given category, in portfolio order. */
function itemsFor(category: PortfolioCategory): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.categories.includes(category));
}

/** All collections, ready for display. Empty collections are dropped. */
export const COLLECTIONS: Collection[] = COLLECTION_SEEDS.map((seed) => ({
  id: seed.id,
  slug: seed.slug,
  name: seed.name,
  description: seed.description,
  coverImage: seed.coverImage,
  images: itemsFor(seed.category),
})).filter((collection) => collection.images.length > 0);

/** Look up a single collection by its route slug. Returns `undefined` if unknown. */
export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((collection) => collection.slug === slug);
}
