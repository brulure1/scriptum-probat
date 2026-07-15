---
title: Comment utiliser
description: Guide pour naviguer sur Scriptum Probat et ajouter des fiches via Cursor.
answerShort: Ce site se remplit via des fichiers Markdown versionnés dans Git — idéalement mis à jour par un LLM dans Cursor.
confidence: elevee
category: guide
tags: [meta, guide]
---

> **Réponse courte :** Chaque fiche est un fichier `.md` dans `src/content/docs/`. Envoie une question à Cursor en mode Agent pour créer ou mettre à jour une fiche sourcée.

## Navigation

- **Sidebar** : par thème (économie, société, santé…)
- **Recherche** (en haut) : par mot-clé, titre ou contenu
- **Date de mise à jour** : affichée en bas de chaque fiche

## Ajouter une fiche avec Cursor

Exemple de prompt :

```
Ajoute une fiche sur [QUESTION].
Catégorie : [economie|travail|societe|sante]
Sources à privilégier : [INSEE, études, etc. si tu as des liens]
Suis le template FICHE-TEMPLATE.md à la racine du projet.
```

Pour **mettre à jour** une fiche existante :

```
Mets à jour la fiche [slug ou titre] avec les données les plus récentes.
Cite les nouvelles sources. Note l'ancien chiffre dans Historique si changement.
```

## Structure d'une fiche

| Champ frontmatter | Rôle |
|-------------------|------|
| `title` | Question ou titre de la fiche |
| `description` | Résumé SEO (1 phrase) |
| `answerShort` | Réponse en une phrase (bloc citation en tête) |
| `confidence` | `elevee` · `moyenne` · `faible` · `controverse` |
| `category` | `economie` · `travail` · `societe` · `sante` |
| `tags` | Mots-clés libres |

Corps de la fiche : contexte, données, nuances, arguments en débat, pensée critique, sources.

## Déploiement (GitHub Pages)

1. Crée un repo GitHub public `scriptum-probat`
2. Remplace `YOUR_GITHUB_USERNAME` dans `astro.config.mjs`
3. Push → le workflow `.github/workflows/deploy.yml` publie le site
4. **Settings → Pages → Source : GitHub Actions**

## Règle d'or

Le LLM **structure et reformule** — il ne doit **pas inventer** de chiffres. Chaque statistique = source citée avec année et méthode.
