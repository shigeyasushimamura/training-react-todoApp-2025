export interface News {
  id: number;
  publishDate: string;
  title: string;
  category: Category;
  content: string;
  path: string;
}

export type Category = "ニュース" | "雑談" | "大切なお知らせ";
