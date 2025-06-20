import type { ImageMetadata } from "astro";
import tagsData from "@/assets/gallery/tags.json";

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/gallery/*.{jpeg,jpg,png,webp}",
);

export interface GalleryImage {
  id: string; // Filename without extension
  module: () => Promise<{ default: ImageMetadata }>;
  date: Date;
  tags: string[];
}

// Type assertion for tags.json
const tags: Record<string, string[]> = tagsData;

let _images: GalleryImage[];

export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (_images) return _images;

  const images: GalleryImage[] = await Promise.all(
    Object.entries(imageModules).map(async ([path, module]) => {
      const filename = path.split("/").pop()!;
      const id = filename.replace(/\.(jpeg|jpg|png|webp)$/, "");

      // Parse date from filename: YYYY-MM-DD-HHMMSS
      const date = new Date(
        id.replace(
          /(\d{4})-(\d{2})-(\d{2})-(\d{2})(\d{2})(\d{2})/,
          "$1-$2-$3T$4:$5:$6Z",
        ),
      );

      return {
        id,
        module,
        date,
        tags: tags[filename] || [],
      };
    }),
  );

  // Sort images by date, newest first
  images.sort((a, b) => b.date.getTime() - a.date.getTime());

  _images = images;
  return _images;
}

export async function getImagesByTag(tag: string): Promise<GalleryImage[]> {
  const allImages = await getGalleryImages();
  return allImages.filter((image) => image.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
  const allImages = await getGalleryImages();
  const tagSet = new Set<string>();
  for (const image of allImages) {
    for (const tag of image.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}