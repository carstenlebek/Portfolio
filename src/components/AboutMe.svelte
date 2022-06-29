<script lang="ts">
	import Section from "./Section.svelte";
</script>

<Section
	title={`Über <span
	class="bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400"
	>mich</span
>`}
	id="ueber-mich"
>
	<div slot="content" class="flex flex-col gap-12 md:flex-row">
		<div class="prose flex-1">
			<p>
				Hey! Mein Name ist Carsten und ich baue gerne Dinge, die im Internet
				leben. Mein Interesse für Web Development hat im Jahr 2016 angefangen,
				als ich meinen ersten eigenen Onlineshop eröffnet habe. Aus ein paar
				kleinen HTML und CSS Anpassungen hat sich über die Zeit ein echtes
				Interesse immer mehr zu lernen entwickelt.
			</p>
			<p>
				In meiner Selbsständigkeit habe ich viele Projekte gestartet. Von Print
				on Demand T-Shirts, über Energydrinks für Gamer bis hin zu 3D gedruckten
				Keksausstechformen war alles dabei.
			</p>
			<p>
				Bei jedem dieser Projekte habe ich immer viel dazugelernt. Egal ob
				Warenbeschaffung, Online Marketing oder Unternehmensgründungen - Auf
				meinem Weg war alles dabei.
			</p>
			<p>
				Am Ende hat alles zu dem geführt, was ich eigentlich schon die ganze
				Zeit machen wollte: <span class="text-primary"
					>Digitale Erfahrungen und Produkte erschaffen.</span
				>
			</p>
		</div>
		<div class="flex-1">
			<div class="img-bg">
				<img
					class="rounded-lg shadow-lg"
					src="/assets/images/portrait.webp"
					alt="Carsten Lebek"
				/>
			</div>
		</div>
	</div>
</Section>

<style lang="postcss">
	.img-bg {
		@apply relative z-10;
		width: calc(100% - 20px);
	}
	.img-bg::after {
		@apply content-[""] absolute top-0 left-0 w-full h-full bg-primary rounded-lg  bg-left-top;
		background-size: 10px 10px;
		transform: translate(20px,20px);
		z-index: -1;
	}
</style>
