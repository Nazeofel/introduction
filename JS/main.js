const discord = document.querySelector(".discord");

let style = window.getComputedStyle(discord, '::after')
let color = style.getPropertyValue('content');

discord.addEventListener("click", () => {
    navigator.clipboard.writeText(color);
});
