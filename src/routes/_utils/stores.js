import { readable } from 'svelte/store';

const motivationalQuotes = [
    "Du er så sej!",
    "Endnu en dag hvor du bare er den bedste!",
    "Får satan hvor er du lækker!",
    "Du er en true champion",
    "Der findes ingen der er lige så sej som dig!",
    "Du er igang med at ændre verden!",
    "I'm the best, fuck the rest!",
    "Du er en sand gud blandt mennesker",
    "Hvis du var en karamel sundae, så var det en med dobbelt karamel",
    "Du er bedre en Eskild's burger torsdag",
    "Hvis en tomat var en frugt, så er du stadig mega nice!",
    "Salat til frokost?",
    "Hvis det er tirsdag, så er der måske kage!??!!?!",
]


export const quotes = readable(motivationalQuotes);
