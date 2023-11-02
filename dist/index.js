import { greeting } from "./test";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        greeting(input.value);
    });
}
