<script lang="ts">
	import {
		siReact,
		siSvelte,
		siTailwindcss,
		siNextdotjs,
		siAstro,
		siVercel,
		siPrisma,
		siTrpc,
		siPlanetscale,
		siTypescript,
		siJavascript,
		siGatsby,
		siChakraui,
		siNodedotjs,
		siNetlify,
		siExpress,
		siRedis,
		siMongodb,
		siFirebase,
		siGit,
		siShopify,
		siAdobephotoshop,
		siAdobeillustrator,
		siVisualstudiocode,
	} from "simple-icons/icons";
	import Icon from "./Icon.svelte";
	import Section from "./Section.svelte";
	import ToolCard from "./ToolCard.svelte";

	const favoriteStack = [
		siNextdotjs,
		siTrpc,
		siTailwindcss,
		siTypescript,
		siPrisma,
	];

	const frontEndTools = [
		siTypescript,
		siReact,
		siSvelte,
		siNextdotjs,
		siAstro,
		siTailwindcss,
	];

	const backEndTools = [
		siNodedotjs,
		siExpress,
		siTrpc,
		siPrisma,
		siRedis,
		siMongodb,
	];

	const generalTools = [
		siShopify,
		siGit,
		siVisualstudiocode,
		siAdobephotoshop,
		siAdobeillustrator,
	];
</script>

<Section
	id="tools"
	title={`Meine <span
	class="bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400"
	>Toolbox</span
>`}
>
	<div slot="content">
		<h2 class="text-4xl font-bold mb-6 max-w-5xl mx-auto px-4">
			Favorite Stack
		</h2>
		<div class="flex items-start justify-start gap-2 mb-6">
			{#each favoriteStack as icon}
				<div
					class="w-36 self-stretch flex flex-col gap-4 items-center justify-start py-4 px-6 border rounded-md"
				>
					<Icon {icon} class="h-16 w-16" />
					<span
						>{icon.title === "Tailwind CSS"
							? icon.title.split(" ")[0]
							: icon.title}</span
					>
				</div>
			{/each}
		</div>
		<h2 class="text-4xl font-bold mb-6 max-w-5xl mx-auto px-4">Frontend</h2>
		<div class="flex items-start justify-start gap-2 mb-6">
			{#each frontEndTools as icon}
				<div
					class="w-36 self-stretch flex flex-col gap-4 items-center justify-start py-4 px-6 border rounded-md"
				>
					<Icon {icon} class="h-16 w-16" />
					<span
						>{icon.title === "Tailwind CSS"
							? icon.title.split(" ")[0]
							: icon.title}</span
					>
				</div>
			{/each}
		</div>
		<h2 class="text-4xl font-bold mb-6 max-w-5xl mx-auto px-4">Backend</h2>
		<div class="flex items-start justify-start gap-2 mb-6">
			{#each backEndTools as icon}
				<div
					class="w-36 self-stretch flex flex-col gap-4 items-center justify-start py-4 px-6 border rounded-md"
				>
					<Icon {icon} class="h-16 w-16" />
					<span>{icon.title}</span>
				</div>
			{/each}
		</div>
		<h2 class="text-4xl font-bold mb-6 max-w-5xl mx-auto px-4">
			General Tools
		</h2>
		<div class="flex items-start justify-start gap-2 ">
			{#each generalTools as icon}
				<div
					class="w-36 self-stretch flex flex-col gap-4 items-center justify-start py-4 px-6 border rounded-md"
				>
					<Icon {icon} class="h-16 w-16" />
					<span>{icon.title}</span>
				</div>
			{/each}
		</div>
	</div>
</Section>
