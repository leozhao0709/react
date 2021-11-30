declare namespace Pexels {
  interface Photo {
    id: string;
    photographer: string;
    src: {
      original: string;
      large: string;
    };
  }

  interface CuratedPhotos {
    page: number;
    per_page: number;
    photos: Photo[];
    next_page: string;
  }
}
