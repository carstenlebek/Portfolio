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
		<div class={`grid grid-cols-2 sm:grid-cols-3  md:grid-cols-${backEndTools.length} gap-4 mb-6`}>
			{#each favoriteStack as icon}
				<ToolCard {icon} />
			{/each}
		</div>
		<h2 class="text-4xl font-bold mb-6 max-w-5xl mx-auto px-4">Frontend</h2>
		<div class={`grid grid-cols-2 sm:grid-cols-3  md:grid-cols-${backEndTools.length} gap-4 mb-6`}>
			{#each frontEndTools as icon}
				<ToolCard {icon} />
			{/each}
		</div>
		<h2 class="text-4xl font-bold mb-6 max-w-5xl mx-auto px-4">Backend</h2>
		<div class={`grid grid-cols-2 sm:grid-cols-3  md:grid-cols-${backEndTools.length} gap-4 mb-6`}>
			{#each backEndTools as icon}
				<ToolCard {icon} />
			{/each}
		</div>
		<h2 class="text-4xl font-bold mb-6 max-w-5xl mx-auto px-4">
			General Tools
		</h2>
		<div class={`grid grid-cols-2 sm:grid-cols-${generalTools.length} gap-4 mb-6`}>
			{#each generalTools as icon}
				<ToolCard {icon} />
			{/each}
		</div>
	</div>
</Section>
