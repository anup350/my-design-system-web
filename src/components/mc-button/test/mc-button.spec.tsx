import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../mc-button';

describe('mc-button', () => {
	it('Renders primary button as default', async () => {
		const page = await newSpecPage({
			components: [Button],
			html: '<mc-button>Primary Button</mc-button>',
		});
		expect(page.root).toEqualHtml(`
			<mc-button>
				<mock:shadow-root>
				<button class="primary" type="button">
					<span class="btn__inner">
						<slot aria-disabled="true" name="icon"></slot>
						<slot/>
					</span>
				</button>
				</mock:shadow-root>
				Primary Button
			</mc-button>
		`);
	});

	it('Renders disabled button when disabled attribute set to true', async () => {
		const page = await newSpecPage({
			components: [Button],
			html: '<mc-button disabled="true">Primary Button</mc-button>',
		});
		expect(page.root).toEqualHtml(`
			<mc-button aria-disabled="true" disabled="true">
				<mock:shadow-root>
				<button class="primary" disabled type="button">
					<span class="btn__inner">
						<slot aria-disabled="true" name="icon"></slot>
						<slot/>
					</span>
				</button>
				</mock:shadow-root>
				Primary Button
			</mc-button>
		`);
	});

	it('Renders primary button with an icon and label', async () => {
		const page = await newSpecPage({
			components: [Button],
			// eslint-disable-next-line quotes
			html: `
				<mc-button>
					<svg slot="icon"></svg>
					Primary Button
				</mc-button>`,
		});
		expect(page.root).toEqualHtml(`
			<mc-button>
				<mock:shadow-root>
				<button class="primary" type="button">
					<span class="btn__inner">
						<slot aria-disabled="true" name="icon"></slot>
						<slot/>
					</span>
				</button>
				</mock:shadow-root>
				<svg slot="icon"></svg>
				Primary Button
			</mc-button>
		`);
	});

	it('Renders primary button with icon only', async () => {
		const page = await newSpecPage({
			components: [Button],
			// eslint-disable-next-line quotes
			html: `
				<mc-button icon-only="true" screen-reader-text="Calendar Datepicker">
					<svg slot="icon"></svg>
				</mc-button>`,
		});
		expect(page.root).toEqualHtml(`
			<mc-button icon-only="true" screen-reader-text="Calendar Datepicker">
				<mock:shadow-root>
				<button aria-label="Calendar Datepicker" class="icon-only primary" type="button">
					<span class="btn__inner">
						<slot aria-disabled="true" name="icon"></slot>
					</span>
				</button>
				</mock:shadow-root>
				<svg slot="icon"></svg>
			</mc-button>
		`);
	});
});
