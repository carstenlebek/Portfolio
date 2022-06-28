<script lang="ts">
	import { siGithub, siLinkedin } from "simple-icons/icons";
	import Icon from "./Icon.svelte";
	const navItems = [
		{
			content: "Über mich",
			href: "#ueber-mich",
		},
		{
			content: "Tools",
			href: "#tools",
		},
		{
			content: "Zertifikate",
			href: "#zertifikate",
		},
		{
			content: "Referenzen",
			href: "#referenzen",
		},
	];
	let y;
</script>

<svelte:window bind:scrollY={y} />
<div
	class="navbar bg-transparent sticky top-0 z-50 transition-all"
	class:glass={y > 100}
	class:shadow-md={y > 100}
>
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each navItems as item}
					<li><a href={item.href}>{item.content}</a></li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl" href="/">Carsten Lebek</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			{#each navItems as item}
				<li><a href={item.href}>{item.content}</a></li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<div class="flex gap-4">
			<a href="https://github.com/carstenlebek" target="__blank"
				><Icon icon={siGithub} /></a
			>
			<a
				href="https://www.linkedin.com/in/carsten-lebek-634899229/?original_referer=https%3A%2F%2Fclebek.dev%2F"
				target="__blank"
			>
				<Icon icon={siLinkedin} />
			</a>
		</div>
		<div
			class="fixed bottom-6 left-0 w-full z-50 px-4 md:relative md:bottom-0 md:w-auto"
		>
			<a
				class="btn btn-primary btn-md w-full"
				href="mailto:carsten.lebek@gmail.com">Lass uns zusammenarbeiten!</a
			>
		</div>
	</div>
</div>

<style>
	.glass {
		backdrop-filter: saturate(180%) blur(10px);
		box-shadow: rgba(2, 1, 1, 0.1) 0px 5px 20px -5px;
	}
</style>
