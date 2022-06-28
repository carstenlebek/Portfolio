<script lang="ts">
	import Section from "./Section.svelte";
</script>

<Section
	title="Zertifikate"
	id="zertifikate"
>
	<div slot="content">
		<div class="flex items-center justify-evenly mb-6 flex-wrap">
			<img
				src="/assets/images/fcc_js_aads_badge.webp"
				alt="FreeCodeCamp Zertifikat"
			/>
			<img src="/assets/images/fcc_fedl.webp" alt="FreeCodeCamp Zertifikat" />
			<img src="/assets/images/fcc_bedaa.webp" alt="FreeCodeCamp Zertifikat" />
		</div>
		<div class="flex items-center justify-evenly mb-6 flex-wrap">
			<img src="/assets/images/sh_ad.webp" alt="Shopify Zertifikat" />
			<img src="/assets/images/sh_bf.webp" alt="Shopify Zertifikat" />
			<img src="/assets/images/sh_pf.webp" alt="Shopify Zertifikat" />
		</div>
		<div class="flex items-center justify-evenly">
			<img
				src="/assets/images/certificate_webdesign_21142.webp"
				alt="OfG Zertifikat"
			/>
		</div>
	</div>
</Section>
