declare global {
  interface Window {
    API_URL?: string;
  }
}

export const HTTP_HOST = window.API_URL
  ? window.API_URL
  : import.meta.env.VITE_API_URL;
