# Foto prima/dopo

I file vanno qui e i percorsi si scrivono in `content/site.ts` →
`transformations.cases[].before` / `.after`.

## In attesa

| Persona | Età | File attesi |
|---|---|---|
| Raffaele | 22 | `raffaele-prima.jpg` · `raffaele-dopo.jpg` |
| Ciro | 27 | `ciro-prima.jpg` · `ciro-dopo.jpg` |
| Edo | 25 | `edo-prima.jpg` · `edo-dopo.jpg` |

Per ciascuno servono anche: **settimane di percorso**, **obiettivo** e
**risultato** (kg, misure, carichi). Vanno nei campi `weeks`, `goal`, `result`.

## Requisiti delle immagini

- stessa inquadratura, stessa distanza, stessa luce nelle due foto: è quello che
  rende il confronto credibile
- verticale, formato 3:4 (es. 900x1200), lato lungo almeno 1200px
- volto oscurato se la persona non vuole essere riconoscibile
- **liberatoria scritta** della persona ritratta prima della pubblicazione

## Attenzione

Finché `before`/`after` restano stringhe vuote il componente mostra un segnaposto
grafico e tutto funziona. Non scrivere il percorso prima di aver messo il file:
Next risponde 400 sull'immagine mancante.
