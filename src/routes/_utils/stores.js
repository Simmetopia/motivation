import { readable } from 'svelte/store';

const motivationalQuotes = [
    "Du er så sej!",
    "Endnu en dag hvor du bare er den bedste!",
    "Får satan hvor er du lækker!",
    "Du er en true champion",
    "Der findes ingen der er lige så sej som dig!",
    "Du er igang med at ændre verden!",
    "I'm the best, fuck the rest!"
]


export const quotes = readable(motivationalQuotes);
