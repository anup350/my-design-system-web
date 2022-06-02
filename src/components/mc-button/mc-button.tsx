import type { EventEmitter } from '@stencil/core';
import { Component, Event, h, Host, Prop } from '@stencil/core';

import { ButtonAppearance, ButtonSize, TagTypes } from '../types';

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot icon - Icon is placed to the left of the button text in LTR, and to the right in RTL.
 */
@Component({
	tag: 'mc-button',
	styleUrl: 'mc-button.scss',
	shadow: true,
})
export class Button {
	/**
	 * The appearance of the button, according to the Themes defined.
	 */
	@Prop() appearance: ButtonAppearance = 'primary';

	/**
	 * Whether the button is disabled.
	 */
	@Prop() disabled: boolean = false;

	/**
	 * Should the button grow full width.
	 */
	@Prop() fullWidth: boolean = false;

	/**
	 * Should the button be an icon only.
	 */
	@Prop() iconOnly: boolean = false;

	/**
	 * Text content for Aria label, mandatory when iconOnly is set to true.
	 */
	@Prop() screenReaderText?: string;

	/**
	 * Button size.
	 */
	@Prop() size: ButtonSize = 'medium';

	/**
	 * Button click event.
	 */
	@Event() clicked: EventEmitter;

	componentWillRender() {
		this.validateScreenReaderText();
	}

	private canRender = true;
	private renderError = '';

	private handleClick(ev: UIEvent) {
		this.clicked.emit(ev);
	}

	private validateScreenReaderText() {
		if (this.iconOnly && this.screenReaderText === '') {
			this.canRender = false;
			this.renderError = 'mc-button: screenReaderText is mandatory when iconOnly is set to true';
			throw new Error(this.renderError);
		}
	}

	render(): any {
		if (!this.canRender) return <div>{this.renderError}</div>;

		const { disabled, iconOnly, screenReaderText } = this;
		const iconOnlyClass = iconOnly ? 'icon-only' : '';

		return (
			<Host
				aria-disabled={disabled ? 'true' : null}
				onClick={this.handleClick}
			>
				<button
					aria-label={iconOnly && screenReaderText}
					type={TagTypes.button}
					class={`${this.appearance} ${iconOnlyClass}`}
					disabled={disabled}
				>
					<span class="btn__inner">
						<slot
							name="icon"
							aria-disabled="true"
						></slot>
						{!iconOnly && <slot />}
					</span>
				</button>
			</Host>
		);
	}
}
