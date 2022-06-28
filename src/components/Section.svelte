<script lang="ts">
	export let title = "";
	export let subtitle = "";
	export let id = "";
</script>

<div {id} class="py-12">
	<div class="max-w-5xl mx-auto px-4">
		<h2 class="text-5xl font-bold mb-6">{@html title}</h2>
		<p class="opacity-60 max-w-lg">{subtitle}</p>
		<slot name="content" />
	</div>
</div>
