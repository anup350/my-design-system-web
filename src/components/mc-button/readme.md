# mc-button



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                          | Type                                                             | Default     |
| ------------------ | -------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| `appearance`       | `appearance`         | The appearance of the button, according to the Themes defined.       | `"danger" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `disabled`         | `disabled`           | Whether the button is disabled.                                      | `boolean`                                                        | `false`     |
| `fullWidth`        | `full-width`         | Should the button grow full width.                                   | `boolean`                                                        | `false`     |
| `iconOnly`         | `icon-only`          | Should the button be an icon only.                                   | `boolean`                                                        | `false`     |
| `screenReaderText` | `screen-reader-text` | Text content for Aria label, mandatory when iconOnly is set to true. | `string`                                                         | `undefined` |
| `size`             | `size`               | Button size.                                                         | `"large" \| "medium" \| "small"`                                 | `'medium'`  |


## Events

| Event     | Description         | Type               |
| --------- | ------------------- | ------------------ |
| `clicked` | Button click event. | `CustomEvent<any>` |


## Slots

| Slot     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
|          | Content is placed between the named slots if provided without a slot.          |
| `"icon"` | Icon is placed to the left of the button text in LTR, and to the right in RTL. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
