export interface News {
  id: number;
  title: string;
  content: string;
  category: Category;
  publishDate: string;
}

export type Category = "大切なお知らせ" | "雑談" | "ニュース";
