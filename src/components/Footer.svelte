<script lang="ts">
	import { siGithub, siLinkedin } from "simple-icons/icons";
	import Icon from "./Icon.svelte";
</script>

<footer class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="grid-flow-col flex flex-col items-start">
		<p>Copyright © 2022 | Carsten Lebek</p>
		<a class="text-primary underline" href="/impressum">Impressum</a>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a
			href="https://github.com/carstenlebek"
			target="__blank"
			class="btn btn-square btn-ghost"
			><Icon icon={siGithub} class="h-6" />
		</a>
		<a
			href="https://www.linkedin.com/in/carsten-lebek-634899229/?original_referer=https%3A%2F%2Fclebek.dev%2F"
			target="__blank"
			class="btn btn-square btn-ghost"
		>
			<Icon icon={siLinkedin} class="h-6" />
		</a>
	</div>
</footer>
