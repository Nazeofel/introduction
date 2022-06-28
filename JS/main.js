const discord = document.querySelector(".discord");

const txtcpd = document.querySelector(".textcopied");
const txtcpdp = document.querySelector(".textcopied > p");

let style = window.getComputedStyle(discord, '::after')
let content = style.getPropertyValue('content');

discord.addEventListener("click", () => {
    navigator.clipboard.writeText(content);
    txtcpd.classList.add("txtcpdAnimation");
    txtcpdp.innerHTML = "Text has been copied to the clipboard !";
});
