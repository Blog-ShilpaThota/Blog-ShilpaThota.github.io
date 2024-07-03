// export type TwMainColor = 'red' | 'blue' | 'green' | 'white' |'pink' |'gray' | 'purple' | 'indigo' | 'yellow';

// export type Route<T> = string;

// export interface PostDataType {
//   id?: string;
//   href: string;
//   date: string;
//   datetime?: string;
//   category?: string;
//   imageUrl?: string;
//   description?: string;
//     title: string;
//     postType?: "standard" | "video" | "audio" | "gallery" |"image"; // Assuming these are the possible types
//     videoUrl?: string; // Present only if postType is "video"
//     audioUrl?: string; // Present only if postType is "audio"
//     galleryImgs?: string[]; // Array of image URLs, present only if postType is "gallery"
//     categories: CategoryType[]; // Assuming categories is an array of CategoryType
//     featuredImage?: string; // Add the featuredImage property
//     authorId: number;
//     author: PostAuthorType;
//     displayName?:string;
//     readingTime?:number;
//   }

//   export interface CategoryType {
//     id:number;
//     name: string;
//     href: Route<string>;
//     color?: string; // Assuming color is an optional property
//   }

//   export interface PostAuthorType {
//     desc?: string;
//     displayName?: string;
//     id: number;
//     name: string;
//     avatar: string;
//     href: Route<string>;
//     jobName?:string;
//     count?:number;
//     bgImage?:string;
//     // Add other properties if needed
//   }

// export interface TaxonomyType {
//   id: number;
//   name: string;
//   taxonomy: "category" | "tag"; // Assuming taxonomy can only be "category" or "tag"
//   href: Route<string>;
//   color?:string;
//   thumbnail?: string;
//   count?: number;
//   // Add other properties if needed
// }
// export interface CustomLink {
//   href: string;
//   label: string;
//   targetBlank?: boolean;
//   // Add other properties if needed
// }