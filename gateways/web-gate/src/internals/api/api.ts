class ApiAdapter {
  url!: string;
  instance!: this;

  constructor(url: string) {
    this.url = url;
  }
}

let api: ApiAdapter;
export default function get(url = process.env.API_URL as string) {
  if (!api || api.url !== url) api = new ApiAdapter(url);
  return api;
}
