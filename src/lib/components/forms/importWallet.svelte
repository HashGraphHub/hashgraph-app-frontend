<script lang="ts">
	import {
		ContentSwitcher,
		Switch,
		TextInput,
		Grid,
		Row,
		Column,
		Button,
		Form
	} from 'carbon-components-svelte';

	let selectedIndex = 0;
</script>

<h1>Import Hedera Wallet</h1>

<Form method="POST" action="/account/?">
	<ContentSwitcher style="margin: 1rem 0" bind:selectedIndex>
		<Switch text="Private Key" />
		<Switch text="Seed Phrase (12)" />
		<Switch text="Seed Phrase (24)" />
	</ContentSwitcher>

	{#if selectedIndex === 0}
		<TextInput labelText="Private Key" name="private_key" placeholder="Private Key" />
	{/if}

	{#if selectedIndex > 0}
		<Grid style="padding: 0 1rem !important">
			{#each { length: 4 * selectedIndex } as _}
				<Row style="gap: 1rem">
					{#each { length: 3 } as _}
						<TextInput placeholder="Word" />
					{/each}
				</Row>
			{/each}
		</Grid>
	{/if}

	<Button kind="primary" type="submit">Import</Button>
</Form>
