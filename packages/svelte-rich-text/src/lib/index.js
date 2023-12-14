// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { get } from 'svelte/store';
import { data } from './utils/stores';
export { default as ValiantRichText } from './components/core/main.svelte';

export function getData() {
	return get(data);
}

export function setData(newData) {
	data.set(newData);
}
