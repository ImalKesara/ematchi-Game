import { crossfade } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

const [send, receive] = crossfade({ duration: 400, easing: cubicOut });
