<script lang="ts">
	export let title = "";
	export let subtitle = "";
	export let id = "";
	export let glass = false;
	let className = "";
	export { className as class };
</script>

<div {id} class={`py-12 ${className}`} class:glasss={glass}>
	<div class="max-w-5xl mx-auto px-4">
		<h2 class="text-5xl font-bold mb-8">{@html title}</h2>
		<p class="opacity-60 max-w-lg">{subtitle}</p>
		<slot name="content" />
	</div>
</div>

<style>
	.glasss {
		backdrop-filter: saturate(180%) blur(10px);
		box-shadow: rgba(2, 1, 1, 0.1) 0px 5px 20px -5px;
	}
</style>
