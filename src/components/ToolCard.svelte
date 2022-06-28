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
	console.log(icon);
</script>

<div class="">
	<Icon {icon} class="h-12 w-12" />
	<span>{icon.title}</span>
</div>
