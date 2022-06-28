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
		siHtml5,
		siCss3,
		siNodedotjs,
		siNetlify,
	} from "simple-icons/icons";
	import Icon from "./Icon.svelte";
</script>

<div class="hero min-h-[32rem] bg-base-100">
	<div class="hero-content flex-col gap-12 md:flex-row">
		<div class="max-w-7xl flex-1">
			<h1 class="text-4xl lg:text-6xl font-bold">
				Hi, mein Name ist <span
					class="bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400"
					>CarstenLebek.</span
				>
			</h1>
			<p class="py-6">
				Ich bin ein Fullstack Webdeveloper aus Wuppertal. Mithilfe von modernen
				Technolgien helfe ich Menschen ihre Ideen in die Realität umzusetzen.
			</p>
			<button class="btn btn-outline">Referenzen</button>
		</div>
		<div class="flex-1 relative aspect-square w-full p-4">
			<div class="w-full aspect-square relative">
				<div
					class="w-full h-full absolute animate-[spin_20s_linear_infinite] border border-primary rounded-full"
				>
					<Icon
						icon={siTypescript}
						class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
					/>
				</div>
				<div class="absolute rotate-180 w-full h-full">
					<div
						class="h-full w-full animate-[spin_20s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siJavascript}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div class="absolute rotate-90 w-full h-full">
					<div
						class="h-full w-full animate-[spin_20s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siHtml5}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div class="absolute -rotate-90 w-full h-full">
					<div
						class="h-full w-full animate-[spin_20s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siCss3}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-45 w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_24s_linear_infinite] border border-primary rounded-full"
					>
						<Icon
							icon={siReact}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-[225deg] w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_24s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siSvelte}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-90 w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_18s_linear_infinite] border border-primary rounded-full"
					>
						<Icon
							icon={siNextdotjs}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-[210deg] w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_18s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siAstro}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-[330deg] w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_18s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siGatsby}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-[120deg] w-[40%] h-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_18s_linear_infinite] border border-primary rounded-full"
					>
						<Icon
							icon={siTailwindcss}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-[300deg] w-[40%] h-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_18s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siChakraui}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-[120deg] w-[20%] h-[20%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_10s_linear_infinite] border border-primary rounded-full"
					>
						<Icon
							icon={siVercel}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div
					class="absolute rotate-[300deg] w-[20%] h-[20%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
				>
					<div
						class="h-full w-full animate-[spin_10s_linear_infinite] rounded-full"
					>
						<Icon
							icon={siNetlify}
							class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
						/>
					</div>
				</div>
				<div class="absolute h-full w-full flex items-center justify-center">
					<Icon icon={siNodedotjs} class="h-8" />
				</div>
			</div>
		</div>
	</div>
</div>
