export default function updateButtons(button) {
    button.forEach( btn => {
        let newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn)
    })
}