export interface Article {
  id: number;
  title: string;
  publishDate: string;
  category: "ニュース" | "雑談" | "大切なお知らせ";
  content: string;
}

export type Category = "ニュース" | "雑談" | "大切なお知らせ";
