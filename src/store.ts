import { writable } from "svelte/store";

export const state = writable<{ title: string, src: string, image: string } | null>(null);