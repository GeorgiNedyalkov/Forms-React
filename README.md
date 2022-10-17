# How to use Forms in React?

How to manage state? The difference between controlled and uncontrolled forms
(state vs. reference), how to submit a form? (e.g. callback handler), and how to
reset a form (e.g. after submit).

Advanced topics: dirty fields and validation.

## React Form with onSubmit

## Uncontrolled React Form

We want to read the values from the form.

In React we can access HTML elements by attaching refences to them using the useRef hook.

We create two references for both inputs. When user clicks the button the onSubmit event starts and excutes the handleSubmit function.

## Controlled React Form

Use React state for each field and controll the onChange handler.

Controlled forms are more performance intensive. Each change in state comes with a re-render of the form.
For an uncontrolled form there are no re-renders.

## Submit a React Form

## React Form Dirty

A form field is dirty if it has been changed by a user.

For example: the submit button should only be enabled if a form field has changed:

## Validation
