# rec.group — Playbook Outreach Diretto (Chiamate + Visite)
## Ristoranti, Psicologi & Professionisti Locali · Catania

---

## 0. Obiettivo del canale

A differenza della sequenza email (`workflow_strategy.md`), qui il contatto è **caldo e personale**: chiamata telefonica o visita diretta in negozio/studio. Il target sono attività di Catania con **bassa o nulla presenza digitale** (nessun sito, sito vecchio, scheda Google Business incompleta).

**Unico obiettivo della chiamata: fissare una visita.** Non si vende, non si quota, non si spiega il prodotto nel dettaglio al telefono — si crea curiosità e si prende un appuntamento.

**Obiettivo della visita: mostrare un esempio concreto (template) e raccogliere il contatto per l'invio del preventivo.**

---

## 1. Offerta per verticale

Il prodotto è sempre lo stesso concetto — **un template pronto, personalizzato in poche ore** — ma l'angolo cambia per settore:

| Verticale | Prodotto da mostrare | Angolo principale |
|---|---|---|
| **Ristoranti, bar, trattorie** | Sito vetrina + Menù digitale QR | "I clienti ti cercano su Google prima di venire — se non ti trovano, vanno dal concorrente" |
| **Psicologi / studi sanitari** | Sito vetrina "credibilità professionale" (bio, orari, form contatto/prenotazione, mappa) | "Chi cerca uno psicologo guarda prima il sito per fidarsi — senza, perdi pazienti prima ancora di parlarci" |
| **Altri professionisti** (avvocati, commercialisti, estetisti, parrucchieri, artigiani) | Sito vetrina "trovami online" | "Chi ti cerca su Google non ti trova, e si fida di più di chi ha un sito" |

**Come si costruisce il template**: un solo layout per settore (stessa logica a componenti già usata in questo repo, vedi `components/Portfolio.tsx` come esempio di showcase riutilizzabile), personalizzato di volta in volta con nome attività, foto, testi e — per i ristoranti — il menu. Prepara **un esempio già pronto per ciascun verticale** prima di iniziare le chiamate: ti serve da mostrare durante la visita ("guarda, è già pronto, ci metto il tuo nome e le tue foto").

---

## 2. Costruzione delle liste (lead sourcing)

### Fonti
- **Google Maps**: cerca per categoria + quartiere di Catania (es. "ristoranti Catania centro", "psicologi Catania Borgo-Sanzio", "avvocati Catania Ognina"). Scorri quartiere per quartiere per non saltare attività senza presenza online (quelle senza sito spesso non escono nelle prime ricerche generiche).
- **Google Search diretta**: cerca il nome dell'attività (se lo hai da altre fonti, es. insegna vista di persona) per verificare se ha un sito.
- **PagineGialle / PagineBianche**: buona fonte per professionisti (avvocati, commercialisti, psicologi) spesso non aggiornati su Maps.
- **Instagram/Facebook**: molte attività locali hanno solo social, nessun sito — è un segnale forte di lead qualificato.
- **Osservazione diretta in zona**: camminando per le vie commerciali di Catania, segna le attività che non hai trovato online la sera prima.

### Criterio di qualifica (chi entra in lista)
- Nessun sito web, **oppure**
- Sito palesemente vecchio/non responsive (si vede male da telefono), **oppure**
- Scheda Google Business assente o incompleta (niente foto, niente orari, niente recensioni gestite)

### Formato lista — foglio di tracking condiviso
Crea un Google Sheet unico (o Airtable) con queste colonne:

| Nome attività | Settore | Zona/Quartiere | Telefono | Indirizzo | Sito attuale (no/scarso) | Note | Stato | Data ultimo contatto | Esito | Prossima azione | Assegnato a |
|---|---|---|---|---|---|---|---|---|---|---|---|

Valori consigliati per **Stato**: `Da contattare` → `Chiamato - da richiamare` → `Visita fissata` → `Visitato - preventivo inviato` → `Follow-up email/whatsapp` → `Chiuso vinto` / `Chiuso perso`.

---

## 3. Segmentazione e cadenza operativa

### Segmento A — Ristoranti, Bar, Trattorie
- **Pain point**: nessuna prenotazione online, menu solo cartaceo, assenti su Google Maps
- **Miglior orario di contatto**: 10:00–12:00 o 15:30–17:30 (fuori dai picchi pasto — mai chiamare/visitare 12:30–14:30 o 20:00–22:00)
- **Tono**: diretto, concreto, riferimenti locali

### Segmento B — Psicologi / Studi Sanitari
- **Pain point**: mancanza di credibilità online, difficoltà a farsi trovare da nuovi pazienti
- **Miglior orario di contatto**: 9:00–10:30 (prima delle sedute) o 13:00–14:00 (pausa pranzo tra un appuntamento e l'altro)
- **Tono**: rispettoso, professionale, mai invadente — questo target è sensibile a chiamate percepite come "spam"

### Segmento C — Altri Professionisti (avvocati, commercialisti, estetisti, artigiani)
- **Pain point**: dipendenza dal passaparola, invisibili a chi cerca online
- **Miglior orario di contatto**: 9:30–11:00
- **Tono**: peer-to-peer, pratico, orientato al risultato ("più clienti", non "più tecnologia")

### Cadenza settimanale (per 2 persone)
- **Target giornaliero**: 15–20 chiamate a persona, 3–5 visite fissate/effettuate a persona
- **Divisione ruoli consigliata**: una persona fa le chiamate di qualifica al mattino (fissa le visite), l'altra fa le visite già prenotate nel pomeriggio. Alternate ogni settimana per non far stancare nessuno delle due attività.
- **In alternativa** (se preferite dividere per zona/settore): una persona copre ristoranti + un quartiere, l'altra copre psicologi/professionisti + un altro quartiere — più semplice da tracciare ma richiede più disciplina nel foglio condiviso.
- **Giorni migliori**: martedì–giovedì (lunedì troppo operativo per i local business, venerdì già proiettati al weekend)

---

## 4. Script chiamata a freddo (obiettivo: fissare la visita)

### Principio guida
Apri come **cliente curioso**, non come venditore. Solo dopo aver ottenuto un minimo di attenzione/risposta, ti riveli come fornitore e proponi la visita. Non vendere nulla al telefono: se chiedono il prezzo, rispondi che lo vedete insieme durante la visita, con un esempio pronto sotto mano.

### Script — Segmento A (Ristoranti/Bar)

> **Tu**: "Buongiorno, sono Raffaele. Stavo cercando il vostro locale online per vedere il menu prima di passare, ma non sono riuscito a trovarvi. Siete su Google o avete un sito?"
>
> **[Se rispondono "no" / "solo Instagram" / "no, perché?"]**
>
> **Tu**: "Ah ecco, mi sa che è per quello che non vi ho trovato. Guardi, le dico la verità: lavoro con rec.group, ci occupiamo proprio di questo — creare siti e menu digitali per ristoranti qui a Catania. Ho già un esempio pronto, praticamente identico a quello che farei per voi, ci vogliono letteralmente due minuti per personalizzarlo con il vostro menu e le vostre foto. Posso passare 10 minuti in negozio in un momento tranquillo per farvelo vedere? Non è una chiamata di vendita, voglio solo mostrarvelo — poi decidete voi."
>
> **[Se accettano]** → fissa **giorno + fascia oraria specifica**, mai "quando vuole": "Perfetto, martedì pomeriggio verso le 16:00 va bene, o preferite mercoledì mattina?"

### Script — Segmento B (Psicologi/Studi Sanitari)

> **Tu**: "Buongiorno, mi scusi il disturbo. Sono Raffaele — stavo cercando informazioni sul suo studio online, magari per orari o modalità di contatto, ma non sono riuscito a trovare un sito. È corretto che non ne avete uno?"
>
> **[Se rispondono]**
>
> **Tu**: "Capisco. Le spiego perché ho chiesto: mi occupo di creare siti professionali per studi come il suo — spesso chi cerca uno psicologo guarda prima il sito per farsi un'idea prima ancora di chiamare. Ho già pronto un modello adatto a uno studio professionale, basterebbe personalizzarlo. Avrebbe 10 minuti, magari tra un appuntamento e l'altro, per farglielo vedere di persona? Nessun impegno, solo per farle vedere come verrebbe."
>
> **[Chiusura identica: fissa giorno + fascia oraria]**

### Script — Segmento C (Altri professionisti)

> **Tu**: "Buongiorno, sono Raffaele. Ho provato a cercarvi online per [contattarvi/vedere i servizi] ma non ho trovato né un sito né una scheda Google aggiornata. Volevo capire, è una scelta o semplicemente non ci avete ancora pensato?"
>
> **[Reveal e proposta visita, stesso schema di sopra]**

### Gestione obiezioni comuni

| Obiezione | Risposta |
|---|---|
| "Non mi serve un sito, lavoro col passaparola" | "Capisco perfettamente, e infatti il passaparola resta la base. Il sito serve solo a far sì che chi *ha già sentito parlare di voi* vi trovi e si fidi di più — non sostituisce il passaparola, lo rafforza. Le faccio vedere l'esempio, due minuti, poi decide lei." |
| "Ho già Instagram/Facebook" | "Ottimo, vuol dire che siete già avanti su questo. Il sito è complementare: chi vi cerca su Google — non su Instagram — spesso non vi trova, e sono clienti diversi da quelli social. Glielo mostro con un esempio concreto?" |
| "Quanto costa?" | "Dipende da cosa serve esattamente, per questo preferisco farglielo vedere di persona con un preventivo su misura invece di darle un numero a caso al telefono. Ci vogliono 10 minuti, quando le fa comodo?" |
| "Non ho tempo ora" | "Certo, infatti non le chiedo tempo ora — solo di fissare un momento tranquillo, anche 10 minuti, quando può. Martedì o mercoledì?" |
| "Mandatemi tutto per email" | "Posso farlo, ma onestamente rende meglio vederlo dal vivo con un esempio pronto — ci vogliono davvero 10 minuti. Se preferisce può comunque darmi la sua email così le mando qualcosa nel frattempo, ma le consiglio la visita." (→ segna in lista per follow-up email, sequenza `workflow_strategy.md`) |

**Regola d'oro della chiamata**: se la persona è scortese o chiude subito, ringrazia e chiudi educatamente — non insistere, segna "Chiuso perso" e passa al prossimo nominativo.

---

## 5. Script visita diretta (walk-in / porta a porta)

Usalo quando ti presenti senza chiamata preventiva (es. cammini per una via commerciale) o quando la visita è già stata fissata via telefono.

### Apertura (senza chiamata preventiva)

> "Buongiorno, mi scusi il disturbo, due minuti soltanto. Sono Raffaele di rec.group, lavoriamo con attività qui a Catania per creare siti e menu digitali. Stavo passando e ho notato che non avete un sito — posso mostrarvi un esempio già pronto, sul telefono, di come potrebbe venire il vostro?"

### Apertura (visita già fissata da chiamata)

> "Buongiorno, sono Raffaele — ci siamo sentiti al telefono per l'appuntamento di oggi. Le faccio vedere subito l'esempio che le avevo anticipato."

### Il momento chiave: mostrare il template
- Apri l'esempio già pronto per il verticale corrispondente (sul telefono o tablet, mai da laptop — troppo formale/lento).
- Personalizza al volo, davanti a loro, il nome dell'attività o una foto se possibile: l'effetto "wow, è già quasi il mio sito" è la parte più persuasiva dell'intero incontro.
- Non entrare in dettagli tecnici. Resta su benefici concreti: "i clienti vi trovano su Google", "il menu si aggiorna in un minuto quando cambiate un piatto", "sembrate più professionali di chi non ce l'ha".

### Chiusura visita
- Obiettivo minimo: **raccogliere nome, telefono/email, e il permesso di inviare un preventivo**.
- Non chiudere la vendita sul posto se non sono pronti — è normale. Frase di chiusura:

> "Perfetto, le preparo un preventivo su misura e glielo mando su WhatsApp/email entro [oggi/domani]. Mi conferma il numero migliore per contattarla?"

- Segna subito nel foglio di tracking: stato `Visitato - preventivo inviato`, data, prossima azione (invio preventivo entro 24h).

---

## 6. Follow-up post-contatto

- **Chi ha visto la visita ma non ha chiuso**: invia preventivo entro 24h via WhatsApp o email, poi segui la sequenza già definita in `workflow_strategy.md` (giorno 0/4/8) usando i template esistenti in `marketing/templates/`, adattando l'apertura per fare riferimento alla visita già avvenuta invece che a un primo contatto a freddo.
- **Chi ha rifiutato la visita ma non ha chiuso la porta** ("mandatemi email"): entra nella sequenza email standard come nuovo lead freddo.
- **Chi ha chiuso**: passa a onboarding (raccolta materiali — foto, testi, menu — per personalizzare il template).

---

## 7. Tracking e KPI

Usa il foglio descritto alla sezione 2 come CRM minimo. Aggiornalo **subito dopo ogni contatto**, non a fine giornata (si perdono dettagli).

### KPI settimanali per persona (obiettivo realistico outreach diretto Catania)

| Metrica | Minimo | Buono |
|---|---|---|
| Chiamate effettuate | 60/settimana | 90+/settimana |
| Visite fissate da chiamata | 8/settimana (~10-13% delle chiamate) | 15+/settimana |
| Visite dirette (walk-in) effettuate | 10/settimana | 15+/settimana |
| Preventivi inviati | 12/settimana | 20+/settimana |
| Chiusure | 1–2/settimana | 3+/settimana |

Rivedi questi numeri dopo le prime 2 settimane reali: servono come punto di partenza, non come target rigidi — l'outreach di persona ha più varianza di quello email.

---

*Documento interno rec.group · Playbook Outreach Diretto (chiamate + visite) · Catania 2026*
*Contatto: recgroup.business@gmail.com*
