# YouWizMe — Fichier Contexte
*Dernière mise à jour : 3 juin 2026*

---

## 🌐 Le Site

**Nom** : YouWizMe
**URL** : https://youwizme.com
**Concept** : Analyse de compatibilité entre deux personnes à partir de leurs prénoms et personnalités
**Technologie** : HTML/CSS/JS · Netlify Functions · API Anthropic (Claude claude-sonnet-4-5)

---

## 💡 Concept Fondateur

**Intelligence Émotionnelle Artificielle (IEA™)**
- Concept inédit inventé le 30 mai 2026
- Version anglaise : Artificial Emotional Intelligence (AEI)
- Positionnement : au-delà de l'IA traditionnelle, l'IEA analyse les résonances émotionnelles entre personnes
- 3 piliers : **PERCEVOIR · RELIER · RÉVÉLER**
- À déposer à l'INPI (marque verbale "IEA" + "Intelligence Émotionnelle Artificielle")
- Classes Nice : 42 (tech) · 35 (commercial) · 41 (divertissement)
- Enveloppe Soleau à 15€ comme protection temporaire

---

## 🏗️ Architecture Technique

**Hébergement** : Netlify (plan Personal)
**Domaine** : Ionos → nameservers Netlify (dns1-4.p07.nsone.net)
**Repository GitHub** : github.com/odussarrat/youwizme
**Structure fichiers** :
```
index.html                        ← site principal
legal.html                        ← mentions légales & politique de confidentialité
sitemap.xml                       ← sitemap Google
robots.txt                        ← directives robots + lien sitemap
ads.txt                           ← fichier anti-fraude AdSense
favicon.svg                       ← favicon vectoriel
favicon.ico                       ← favicon legacy (navigateurs anciens)
apple-touch-icon.png              ← icône iOS
og-image.jpg                      ← image Open Graph 1200×630px
og-image.html                     ← source HTML de l'image OG
netlify.toml                      ← config Netlify (Content-Type HTML corrigé)
netlify/functions/analyze.js      ← proxy API Anthropic
```

**Variable d'environnement Netlify** : `ANTHROPIC_API_KEY`
**Modèle IA** : claude-sonnet-4-5
**Score compatibilité** : 0 à 100 (totalement libre)

**Note DNS** : les nameservers pointent vers Netlify (pas Ionos) — les DNS Ionos sont inactifs pour youwizme.com. La vérification Search Console se fait via balise HTML, pas DNS TXT.

---

## 🎨 Charte Graphique

**Palette** :
- `--gold: #C9A96E` — or principal
- `--gold-light: #E8D5A3` — or clair
- `--rose: #C97B8A` — rose (YouWiz)
- `--cream: #F5EFE6` — crème texte
- `--dark: #1A1614` — fond principal

**Polices** :
- **Cormorant Garamond** — texte principal, serif élégant
- **Cinzel** — titres, labels techniques
- **Jost Light** — boutons sélectionnables, texte fonctionnel

**Style** : Dark/Gold luxueux · Poétique · Techno subtil
**Visuel hero** : Deux nœuds orbitaux animés (âmes) · Diamant central IEA · Scan lines

---

## 🌍 Langues

8 langues avec **détection automatique du navigateur** :
- 🇫🇷 Français (FR) — langue par défaut
- 🇬🇧 Anglais (EN)
- 🇪🇸 Espagnol (ES)
- 🇧🇷 Portugais (PT)
- 🇸🇦 Arabe (AR) — RTL
- 🇮🇹 Italien (IT)
- 🇩🇪 Allemand (DE)
- 🇨🇳 Chinois (ZH)

Langue mémorisée dans localStorage. Les **résultats de l'IA** sont générés dans la langue choisie (system prompts traduits dans les 8 langues). Tous les éléments sont traduits : questionnaire, défauts, bandeau Vocalmia, mentions légales, boutons de partage.

---

## 📋 Questionnaire (3 étapes)

**Étape 1 & 2 — Profil de chaque personne :**
- Prénom
- Origine du prénom
- Tranche d'âge
- Traits de caractère (8 choix)
- Valeur principale (6 choix)
- Gestion des conflits (4 choix)
- Description libre (optionnel)
- **Défauts / zones d'ombre** (8 cases à cocher + champ libre)

**Étape 3 — Le lien :**
- Nature de la relation (5 choix)
- Durée de la relation (5 choix)
- Défis communs (6 choix)
- Ce qui vous unit (texte libre)

---

## ✨ Fonctionnalités

- ✅ Analyse IA via Netlify Function (proxy sécurisé)
- ✅ Score de compatibilité 0-100 (totalement libre)
- ✅ 5 dimensions : Émotionnel · Intellectuel · Valeurs · Communication · Complicité
- ✅ Profils individuels avec traits personnalisés
- ✅ Zones d'ombre / défauts par profil (⚠ affichés en rose tamisé dans les résultats)
- ✅ Forces & points de vigilance
- ✅ Apports mutuels & valeurs partagées
- ✅ Citation poétique finale
- ✅ Mémorisation des derniers choix (localStorage)
- ✅ Bannière de restauration des réponses
- ✅ Système de partage avancé : modale avec 2 boutons distincts
  - "Partager ce résultat" → lien unique `youwizme.com/#data=...` (résultat encodé base64)
  - "Partager le site" → lien simple youwizme.com
  - 6 canaux : WhatsApp · Facebook · X/Twitter · SMS · Email · Copier le lien
  - Messages pré-remplis traduits dans les 8 langues
- ✅ Bandeau publicitaire Vocalmia (en attente validation AdSense)
  - Pendant le loading (utilisateur captif)
  - Dans les résultats entre le score et les cards (`<div id="ad-slot">`)
  - Charte Vocalmia : fond #0a0a0a · vert lime #e8ff47 · waveform SVG
  - Messages rotatifs traduits dans les 8 langues
- ✅ Section IEA™ explicative avant le footer
- ✅ Mentions légales & politique de confidentialité (legal.html)

---

## 📣 Communication

**Phrase d'accroche FR** : *"Oserez-vous essayer ?"*
**Phrase d'accroche EN** : *"Dare you try?"*

**Description courte FR** :
> Vos prénoms en disent plus long que vous ne le pensez. YouWizMe révèle la résonance émotionnelle entre deux âmes grâce à l'IEA — l'Intelligence Émotionnelle Artificielle. Gratuit · 8 langues · Résultat en 30 secondes.

**Visuels créés** :
- Visuel FB carré FR + EN
- Story Instagram 9:16 FR (PNG 1080x1920)
- Image OG 1200×630px (`og-image.jpg`)

**Publié sur** : Facebook · Instagram · LinkedIn

---

## 📊 Stats (au 3 juin 2026)

**Top pages :**
- `/` — 828 vues
- `/legal` — 31 vues

**Top pays :**
- États-Unis : 401
- France : 129
- Inde : 58
- Allemagne : 43
- Singapour : 35
- Chine : 28
- Canada : 17

**Note** : pic au lancement (28-30 mai), puis courbe qui s'aplatit — trafic organique SEO à venir dans 2-3 mois. Les bots WordPress (wp-admin, xmlrpc.php) sondent le site — normal et sans danger.

---

## ⚖️ Mentions Légales

**Éditeur** : Olivier Dussarrat
**Adresse** : 7 Avenue Mozart, 75016 Paris
**Email** : contact@youwizme.com (à créer sur Ionos)
**Hébergeur** : Netlify Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA
**Page légale** : https://youwizme.com/legal.html ✅ en ligne

---

## 💰 Monétisation

**Bandeau Vocalmia** (provisoire) :
- Affiché pendant le loading et dans les résultats (`<div id="ad-slot">`)
- Lien : https://vocalmia.com
- Sera remplacé par Google AdSense dès validation

**Google AdSense** ✅ soumis le 1er juin 2026 :
- Publisher ID : `pub-9722521927056719`
- Statut : **En cours d'examen** (délai 1-14 jours)
- Snippet dans `<head>` : `ca-pub-9722521927056719`
- Emplacement réservé : `<div id="ad-slot">` dans les résultats
- CMP Google (bandeau consentement cookies RGPD) activée
- ads.txt déployé à la racine ✅
- **Quand approuvé** : remplacer le contenu de `<div id="ad-slot">` par le code AdSense

---

## 🔍 Référencement (SEO)

**Google Analytics GA4** ✅ : `G-2JD80PNF5Q`

**Google Search Console** ✅ :
- Propriété : `https://youwizme.com/` (type "Préfixe d'URL")
- Vérification : balise HTML
- Sitemap soumis : `https://youwizme.com/sitemap.xml`

**Meta tags** ✅ :
- Open Graph · Twitter/X Card · Meta description · Canonical
- Image OG : `https://youwizme.com/og-image.jpg` ✅ déployée

**Fichiers SEO/robots** ✅ :
- `robots.txt` — Allow all + lien sitemap
- `sitemap.xml` — index + legal.html
- `ads.txt` — `google.com, pub-9722521927056719, DIRECT, f08c47fec0942fa0`

---

## 📅 À Faire

- [ ] Créer `contact@youwizme.com` sur Ionos
- [ ] Attendre validation AdSense (email Google) puis remplacer Vocalmia par AdSense dans `<div id="ad-slot">`
- [ ] Dépôt marque INPI — "IEA" + "Intelligence Émotionnelle Artificielle"
- [ ] Republier régulièrement sur les réseaux (captures résultats anonymisés) pour maintenir le trafic

---

## 🔗 Liens Utiles

- Site : https://youwizme.com
- Page légale : https://youwizme.com/legal.html
- Sitemap : https://youwizme.com/sitemap.xml
- Netlify : app.netlify.com/projects/youwizme
- GitHub : github.com/odussarrat/youwizme
- Console Anthropic : console.anthropic.com
- Ionos : my.ionos.fr
- INPI : marques.inpi.fr
- AdSense : adsense.google.com (pub-9722521927056719)
- GA4 : analytics.google.com (G-2JD80PNF5Q)
- Search Console : search.google.com/search-console

---

*YouWizMe · Intelligence Émotionnelle Artificielle · IEA™ · 2026*
