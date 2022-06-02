import readme from './readme.md';

export default {
	title: 'Mayo Clinic DS/Button',
	parameters: {
		notes: readme, // Use default Stencil read.me as documentation for the component.
	},
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
};

const Template = args => `
	<mc-button
		appearance="primary"
		disabled="${args.disabled}"
		full-width="${args.fullWidth}"
		size="${args.size}"
	>
		${args.label}
	</mc-button>
`;
export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary Button',
	disabled: false,
	fullWidth: false,
	size: 'medium',
};

const TemplateIcon = args => `
	<mc-button
		appearance="primary"
		disabled="${args.disabled}"
		full-width="${args.fullWidth}"
		icon-only="${args.iconOnly}"
		screen-reader-text="${args.screenReaderText}"
	>
		<svg
			slot="icon"
			icon="ico-calendar"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M24.5556 28H7.44444C6.09441 28 5 26.9255 5 25.6V8.8C5 7.47452 6.09441 6.4 7.44444 6.4H9.88889V4H12.3333V6.4H19.6667V4H22.1111V6.4H24.5556C25.9056 6.4 27 7.47452 27 8.8V25.6C27 26.9255 25.9056 28 24.5556 28ZM7.44444 13.6V25.6H24.5556V13.6H7.44444ZM7.44444 8.8V11.2H24.5556V8.8H7.44444ZM22.1111 23.2H19.6667V20.8H22.1111V23.2ZM17.2222 23.2H14.7778V20.8H17.2222V23.2ZM12.3333 23.2H9.88889V20.8H12.3333V23.2ZM22.1111 18.4H19.6667V16H22.1111V18.4ZM17.2222 18.4H14.7778V16H17.2222V18.4ZM12.3333 18.4H9.88889V16H12.3333V18.4Z" />
		</svg>
		${args.label}
	</mc-button>
`;
export const Icon = TemplateIcon.bind({});
Icon.args = {
	...Primary.args,
	iconOnly: false,
	screenReaderText: '',
};

export const IconOnly = TemplateIcon.bind({});
IconOnly.args = {
	...Icon.args,
	iconOnly: true,
	screenReaderText: 'This is the text for screen readers',
};

const TemplateRTLIcon = args => `
	<div
		dir="rtl"
		lang="ar"
	>
		<mc-button
			appearance="primary"
			disabled="${args.disabled}"
			full-width="${args.fullWidth}"
			icon-only="${args.iconOnly}"
			screen-reader-text="${args.screenReaderText}"
			>
			<svg
				slot="icon"
				icon="ico-calendar"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M24.5556 28H7.44444C6.09441 28 5 26.9255 5 25.6V8.8C5 7.47452 6.09441 6.4 7.44444 6.4H9.88889V4H12.3333V6.4H19.6667V4H22.1111V6.4H24.5556C25.9056 6.4 27 7.47452 27 8.8V25.6C27 26.9255 25.9056 28 24.5556 28ZM7.44444 13.6V25.6H24.5556V13.6H7.44444ZM7.44444 8.8V11.2H24.5556V8.8H7.44444ZM22.1111 23.2H19.6667V20.8H22.1111V23.2ZM17.2222 23.2H14.7778V20.8H17.2222V23.2ZM12.3333 23.2H9.88889V20.8H12.3333V23.2ZM22.1111 18.4H19.6667V16H22.1111V18.4ZM17.2222 18.4H14.7778V16H17.2222V18.4ZM12.3333 18.4H9.88889V16H12.3333V18.4Z" />
			</svg>
			${args.label}
		</mc-button>
	</div>
`;
export const RightToLeftIcon = TemplateRTLIcon.bind({});
RightToLeftIcon.args = {
	...Primary.args,
	label: 'تقويم',
	iconOnly: false,
	screenReaderText: '',
};

export const RightToLeftIconOnly = TemplateRTLIcon.bind({});
RightToLeftIconOnly.args = {
	...RightToLeftIcon.args,
	iconOnly: true,
	screenReaderText: 'منتقي بيانات التقويم',
};

export const Chinese_Simplified = TemplateIcon.bind({});
Chinese_Simplified.args = {
	...Primary.args,
	label: '日历',
	iconOnly: false,
	screenReaderText: '日历日期选择器',
};
