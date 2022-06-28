<script lang="ts">
	import { siGithub, siLinkedin } from "simple-icons/icons";
	import Icon from "./Icon.svelte";
	import { onMount } from "svelte";
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
	let theme = "darkModeee";
	onMount(() => {
		theme = document.documentElement.getAttribute("data-theme");
		console.log(theme);
	});
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
		<div class="hidden xs:block">
			<a class="btn btn-ghost normal-case text-xl" href="/">CarstenLebek</a>
		</div>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			{#each navItems as item}
				<li><a href={item.href}>{item.content}</a></li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<div class="flex">
			<button
				class="btn btn-square btn-ghost"
				data-toggle-theme="darkModeee,lofi"
				data-act-class="ACTIVECLASS"
				on:click={() =>
					theme === "lofi" ? (theme = "darkModeee") : (theme = "lofi")}
			>
				{#if theme === "lofi"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				{:else if theme === "darkModeee"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				{/if}
			</button>
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
		<div class="hidden md:relative md:bottom-0 md:w-auto">
			<a
				class="btn btn-primary btn-md w-full"
				href="mailto:carsten.lebek@gmail.com">Lass uns zusammenarbeiten!</a
			>
		</div>
	</div>
</div>

<div class="fixed bottom-6 left-0 w-full z-50 px-4 md:hidden">
	<a class="btn btn-primary btn-md w-full" href="mailto:carsten.lebek@gmail.com"
		>Lass uns zusammenarbeiten!</a
	>
</div>

<style>
	.glass {
		backdrop-filter: saturate(180%) blur(10px);
		box-shadow: rgba(2, 1, 1, 0.1) 0px 5px 20px -5px;
	}
</style>
