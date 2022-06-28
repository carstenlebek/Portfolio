<script lang="ts">
	import Icon from "./Icon.svelte";

	export let icon: {
		title: string;
		slug: string;
		svg: string;
		path: string;
		source: string;
		hex: string;
	};
</script>

<div
	class="text-center self-stretch flex flex-col gap-4 items-center justify-start py-4 px-6 border border-base-content rounded-md"
>
	<Icon {icon} class="h-16 w-16" />
	<span
		>{icon.title === "Tailwind CSS"
			? icon.title.split(" ")[0]
			: icon.title}</span
	>
</div>
