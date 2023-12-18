import type { DateFormat } from "./date";

export interface Post {
    layout: string;
    title: string;
    description: string;
    slug: string;
    category: string;
    tags: Array<string>;
    created_at: DateFormat;
}
