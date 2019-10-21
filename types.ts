export interface ContentPage {
  name: string;
  path: string;
  ext?: 'vue' | 'md';
}

export interface PageMenu {
  name: string;
  dir: string;
  pages: ContentPage[];
}
