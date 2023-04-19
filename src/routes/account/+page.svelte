<script lang="ts">
	import ImportWallet from '$lib/components/forms/importWallet.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<ImportWallet />

<style lang="scss">
	// :global(.bx--grid) {
	// 	padding-left: 1rem !important;
	// 	padding-right: 1rem !important;
	// }
</style>
