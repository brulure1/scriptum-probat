// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Repo GitHub : https://github.com/brulure1/scriptum-probat
// Pour un repo username.github.io, mets base: '/' et site: 'https://brulure1.github.io'
const SITE_URL = 'https://brulure1.github.io';
const BASE_PATH = '/scriptum-probat/';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: BASE_PATH,
	integrations: [
		starlight({
			title: 'Scriptum Probat',
			description:
				'Référentiel francophone de chiffres sourcés — économie, société, santé. Verba volant, scriptum probat.',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			components: {
				// Page d'accueil sans sidebar
			},
			sidebar: [
				{
					label: 'Guide',
					items: [{ label: 'Comment utiliser', slug: 'comment-utiliser' }],
				},
				{
					label: 'Économie & fiscalité',
					items: [{ autogenerate: { directory: 'economie' } }],
				},
				{
					label: 'Travail & inégalités',
					items: [{ autogenerate: { directory: 'travail' } }],
				},
				{
					label: 'Société & justice',
					items: [{ autogenerate: { directory: 'societe' } }],
				},
				{
					label: 'Santé & nutrition',
					items: [{ autogenerate: { directory: 'sante' } }],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'Scriptum Probat',
					},
				},
			],
		}),
	],
});
