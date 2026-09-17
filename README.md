# Your Tribe for Life Squad Page
In sprint 13 hebben we de opdracht gekregen een Squad Page te maken met SvelteKit, HTML, CSS en JS. Daarnaast gebruiken we data uit de [FDND Directus database](https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&sort=name). Ons team bestaat uit [Tom](https://github.com/tzgaming), [Sieuwke](https://github.com/sieuwkesheta) en [Kayleigh](https://github.com/Kayleighhhhh).

## Inhoudsopgave
- [Beschrijving](#beschrijving)
- [Gebruik](#gebruik)
- [Kenmerken](#kenmerken)
- [Installatie](#installatie)
- [Bronnen](#bronnen)
- [Licentie](#licentie)

## Beschrijving
Het idee was om een Windows XP desktop na te maken, maar in plaats van programma's staan er foto's van de studenten. Daar kun je dan op klikken en er verschijnt vervolgens een pop-up met de data van die student. Op mobiel blijft de layout deels hetzelfde, alleen is de layout dan 3x3 en moet je naar beneden kunnen scrollen. De detail pagina is responsive gemaakt door de informatie van de studenten onder elkaar te zetten op mobiel en naar de zijkant op grotere schermen. Wij hebben in [Figma](https://www.figma.com/design/puKqOfkmavILDmepGOJVJI/Team-Canvas---Frank?node-id=0-1&p=f&t=ASzHyffGUL9cjhmM-0) verschillende ontwerpen gemaakt.


<img width="800" alt="all-devices-black" src="https://github.com/user-attachments/assets/fafb387e-a6c5-42d9-a042-074605f9f7f4" />

>_Mockup van overzichtspagina_

<img width="800" alt="all-devices-black(4)" src="https://github.com/user-attachments/assets/b6dfdaa1-afd0-4e21-9ec3-a3eb123f59dc" />

>_Mockup van detailpagina_


Live link: https://squadpage-frank.netlify.app/

## Gebruik
De website kan gebruikt worden om meer informatie van studenten en docenten uit Squad 2G te kunnen bekijken. Elke detailpagina heeft onderandere de geboortedatum, de woonplaats en de GitHub handle naar de desbetreffende repositories. 

## Kenmerken
De website is gebouwd met SvelteKit, HTML, CSS en JS volgens het principe van progressive enhancement. Daarna is de site live gezet met [Netlify](https://www.netlify.com/). 

### HTML
Voor de HTML zijn er semantische tags gebruikt zoals `<ul>`, `<main>`, `<article>` en `<footer>`, zodat de pagina ook zonder CSS en JS nog steeds logisch in elkaar zit.

### CSS
Voor de layouts zijn vooral CSS Grid en Flexbos gebruikt. Daarnaast zijn er [custom properties](https://github.com/Kayleighhhhh/your-tribe-for-life-squad-page/blob/c25ca5390287189a8482ea4b7b60297e7f711752/src/lib/style.css#L21-L40) toegepast voor de styling van kleuren, typografie en spacing. Vanwege SvelteKit is er op de detailpagina zelf CSS toegevoegd.

### SvelteKit
We hebben gebruik gemaakt van het framework SvelteKit voor het opzetten van de website. Er zijn [`{#each}`-blocks](https://github.com/Kayleighhhhh/your-tribe-for-life-squad-page/blob/c25ca5390287189a8482ea4b7b60297e7f711752/src/routes/%2Bpage.svelte#L12-L41) gebruikt voor het ophalen van de lijst met data en [`{#if}`-statements](https://github.com/Kayleighhhhh/your-tribe-for-life-squad-page/blob/c25ca5390287189a8482ea4b7b60297e7f711752/src/routes/%2Bpage.svelte#L17-L36) gebruikt om verschillende opties voor foto's in te laden.

## Installatie
Volg deze stappen om de development omgeving in te richten om aan deze repository te kunnen werken:

Stap 1) installeer de [NodeJS ontwikkelomgeving](https://nodejs.org/en/download).

Stap 2) Fork deze repository, clone deze op jouw computer en open het in VSCodium/ een code editor.

Stap 3) Open de Terminal in VSCodium, Voer in de terminal het commando `npm install` en `npm install -D @sveltejs/adapter-netlify` uit door het in te typen en op enter te drukken.

tap 5) Na de installatie is de map node_modules aangemaakt, en gevuld met allerlei packages. Start de website door in de terminal het commando `npm run dev`. Als het goed is, komt hier een melding te staan over het opstarten van de server. Open deze URL in je browser.

We hebben richtlijnen opgezet voor werken aan dit project in de [CONTRIBUTING.MD](https://github.com/Kayleighhhhh/your-tribe-for-life-squad-page/blob/main/CONTRIBUTING.md).

## Bronnen
- [Sveltekit Docs @ Svelte.dev](https://svelte.dev/docs/kit/introduction)
- [Live website rendering @Netlify](https://www.netlify.com/)
- [FDND Directus database](https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&sort=name)
- [Figma ontwerpen](https://www.figma.com/design/puKqOfkmavILDmepGOJVJI/Team-Canvas---Frank?node-id=0-1&p=f&t=ASzHyffGUL9cjhmM-0)
- [Windows XP styling - @XP.CSS](https://botoxparty.github.io/XP.css/)
- [Voorbeeld website - @Mitchlvin XP](https://mitchivin.com/?ref=uiuxshowcase.com)

## Licentie
This project is licensed under the terms of the [MIT license](https://github.com/Kayleighhhhh/your-tribe-for-life-squad-page/blob/main/LICENSE).
