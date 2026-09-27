export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string; // format ISO: "2026-03-15"
  author: string;
  category: "Recettes" | "Conseils" | "Actualités" | "Interviews" | "Astuces";
  readTimeMinutes: number;
}