<script lang="ts">
	import Section from "./Section.svelte";

	const projects: {
		type: string;
		title: string;
		stack: string[];
		description: string;
		url?: string;
		image: string;
		slug: string;
	}[] = [
		{
			image: "allkokos",
			type: "Onlineshop",
			title: "Allkokos.de",
			description:
				"Das wohl beliebteste Kleintiereinstreu Deutschlands gibt es bei Allkokos. Das Projekt umfasste ein komplettes Redesign des Onlineshops.",
			slug: "allkokos",
			url: "https://allkokos.de",
			stack: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS"],
		},
		{
			image: "sport-park",
			type: "Website",
			title: "Sport-Park Onlineanmeldung",
			description:
				"Um die Nutzererfahrung zu verbessern, wurde die API von Centercom reverse-engineered und die Onlineanmeldung mit Next.js neu aufgesetzt. Das Ergebnis sind deutlich schnellere Ladezeiten und ein kontinuierliches UI Design.",
			slug: "sport-park-online-anmeldung",
			url: "https://anmeldung.sport-park.de",
			stack: ["Next.js", "Tailwind CSS", "Express"],
		},
		{
			image: "rscards",
			type: "Onlineshop",
			title: "RSCards.de",
			description:
				"RSCards ist ein Onlineshop für personalisierte Autoquartettkarten im XXL Format. Als headless CMS wird hier Shopify genutzt und die Storefront wurde mit Gatsby.js erstellt.",
			slug: "rscards",
			url: "https://rscards.de",
			stack: [
				"Shopify",
				"React.js",
				"Gatsby.js",
				"Chakra UI",
				"Konva.js",
				"AWS Lambda",
				"AWS S3",
			],
		},
		{
			image: "creatorhub",
			type: "Shopify App",
			title: "CreatorHub",
			description:
				"CreatorHub gibt Shopbetreibern eine einfache Möglichkeit Influencer zu verwalten. Außerdem bringt die App Influencer Marketing in das Frontend und verbessert so die Customer Experience.",
			slug: "creatorhub",
			url: "https://apps.shopify.com/creator-code",
			stack: [
				"React.js",
				"Next.js",
				"Node.js",
				"Koa",
				"Shopify AppBridge",
				"Polaris",
				"Recharts",
				"Firebase",
				"GraphQL",
				"Liquid",
			],
		},
		{
			image: "deepi18n",
			type: "Web App",
			title: "deepi18n",
			description:
				"Deepi18n ermöglicht es Webseiten oder Apps in einem Schritt in bis zu 25 Sprachen zu übersetzen. Zur Übersetzung wird die DeepL API genutzt.",
			slug: "deepi18n",
			url: "https://deep-i18n.vercel.app/",
			stack: ["React.js", "Next.js", "Chakra Ui", "AWS S3"],
		},
		{
			image: "krasserstecher",
			type: "Onlineshop",
			title: "Krasserstecher.de",
			description:
				"Bei Krasser Stecher gibt es personalisierte 3D gedruckte Keksausstechformen. Der Shop wurde mit Shopify erstellt. Die Storefront basiert auf dem Dawn Theme mit eigenen Secions.",
			slug: "krasserstecher",
			url: "https://www.krasserstecher.de",
			stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
		},
		{
			image: "aposto",
			type: "Onlineshop",
			title: "Aposto Wuppertal",
			description:
				"Leckere Pizza und Pasta kann man im auf Shopify basierenden Shop vom Aposto Wuppertal bestellen. \r\nDer Shop wurde als Alternative zu Lieferando erstellt.",
			slug: "aposto-wuppertal",
			url: "https://apostowuppertal.de",
			stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
		},
	];
</script>

<Section id="referenzen" title="Referenzen">
	<div slot="content" class="flex flex-col gap-8 relative">
		<div class="absolute -translate-x-[16rem] -translate-y-[16rem] h-[60rem] aspect-square">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xmlns:svgjs="http://svgjs.dev/svgjs"
				viewBox="0 0 800 800"
				opacity="0.5"
				><defs
					><filter
						id="bbblurry-filter"
						x="-100%"
						y="-100%"
						width="400%"
						height="400%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feGaussianBlur
							stdDeviation="55"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="SourceGraphic"
							edgeMode="none"
							result="blur"
						/></filter
					></defs
				><g filter="url(#bbblurry-filter)"
					><ellipse
						rx="247.5"
						ry="247"
						cx="386.8102933074791"
						cy="385.021466000542"
						fill="#4ade80"
					/></g
				></svg
			>
		</div>
		<div class="absolute translate-x-[40%] translate-y-[90%] h-[60rem] aspect-square">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xmlns:svgjs="http://svgjs.dev/svgjs"
				viewBox="0 0 800 800"
				opacity="0.5"
				><defs
					><filter
						id="bbblurry-filter"
						x="-100%"
						y="-100%"
						width="400%"
						height="400%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feGaussianBlur
							stdDeviation="55"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="SourceGraphic"
							edgeMode="none"
							result="blur"
						/></filter
					></defs
				><g filter="url(#bbblurry-filter)"
					><ellipse
						rx="247.5"
						ry="247"
						cx="386.8102933074791"
						cy="385.021466000542"
						fill="#93c5fd"
					/></g
				></svg
			>
		</div>
		{#each projects as project}
			{@const { image, type, title, description, slug, url, stack } = project}
			<div class="card card-compact glasss lg:card-side bg-base-100 shadow-xl">
				<figure class="w-full flex-1">
					<img
						style="max-width: 100%;"
						src={`/assets/images/${image}.webp`}
						alt="Album"
					/>
				</figure>
				<div class="card-body flex-1">
					<p class="text-sm text-primary flex-grow-0 leading-none">{type}</p>
					<h2 class="card-title">{title}</h2>
					<div class="flex flex-wrap gap-1">
						{#each stack as item}
							<div class="text-xs uppercase font-bold badge rounded-sm">
								{item}
							</div>
						{/each}
					</div>
					<p>{description}</p>
					<div class="card-actions justify-end">
						<a href={url} target="__empty" class="btn btn-primary btn-sm"
							>Zum Projekt <svg
								class="ml-2"
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 512 512"
								aria-hidden="true"
								focusable="false"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
								/></svg
							></a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

<style>
	.glasss {
		border: none;
		-webkit-backdrop-filter: blur(var(--glass-blur, 40px));
		backdrop-filter: blur(var(--glass-blur, 40px));
		background-color: transparent;
		background-image: linear-gradient(
				135deg,
				rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
				rgb(0 0 0 / 0%) 100%
			),
			linear-gradient(
				var(--glass-reflex-degree, 100deg),
				rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
				rgb(0 0 0 / 0%) 25%
			);
		box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%))
				inset,
			0 0 0 2px rgb(0 0 0 / 5%);
		text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
	}
</style>
