# Accessibility in TypeScript Modern Rich Text Editor

The Modern Rich Text Editor control is designed with accessibility in mind, adhering to WAI-ARIA specifications and implementing ARIA roles, states, and properties. This ensures full accessibility support, making it user-friendly for people who rely on assistive technologies (AT) or keyboard navigation.

The accessibility compliance for the Modern Rich Text Editor control is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| WCAG 2.2 Support | Yes |
| Section 508 Support | Yes |
| Screen Reader Support | Yes |
| Right-To-Left Support | Yes |
| Color Contrast | Intermediate |
| Mobile Device Support | Yes |
| Keyboard Navigation Support | Yes |
| Accessibility Checker Validation | Intermediate |
| Axe-core Accessibility Validation | Yes |

## ARIA attributes

The toolbar in the Modern Rich Text Editor is assigned the role of 'Toolbar' and includes the following attributes.

| **Property** | **Functionalities** |
| --- | --- |
| role="toolbar" | This attribute added to the ToolBar element describes the actual role of the element. |
| aria-orientation     | Indicates the ToolBar orientation. Default value is `horizontal`. |
| aria-disabled       | Indicates the disabled state of the toolbar. |

* The Modern Rich Text Editor element is assigned the role of `application`.

| **Property** | **Functionalities** |
| --- | --- |
| role="application" | This attribute added to the Modern Rich Text Editor element describes the actual role of the element. |
| aria-disabled       | Indicates the disabled state of the ToolBar. |

## Keyboard navigation

The Modern Rich Text Editor component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation.

## Implementing accessibility best practices

The Rich Text Editor component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.
