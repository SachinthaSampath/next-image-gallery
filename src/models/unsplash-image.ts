export interface UnsplashImage {
  id: string;
  description: string;

  user: {
    username: string;
  };

  urls: {
    raw: string;
    regular: string;
  };
  
  width: number;
  height: number;
}
