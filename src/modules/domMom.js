const domMan = (() => {
    const buttonChange = () => {
        let domBtn = document.querySelector('directory')
        domBtn.forEach( btn => {
            btn.addEventListener('click', () =>{
                btn.classList.toggle('toggled')
            })
        })
    }
    return {
        buttonChange,
    }
})

export default { domMan };