import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render h2', async () => {
		render(Page);
		const heading = screen.getByRole('heading', { level: 2 }).innerText;
		expect(heading).toBe('Ready to Get Your Product Verified?');
	});
});
