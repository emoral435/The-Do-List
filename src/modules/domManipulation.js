const domMan = (() => {
    const buttonChange = () => {
        let domBtn = document.querySelectorAll('.directory')
        domBtn.forEach( btn => {
            btn.addEventListener('click', () => {
                domBtn.forEach ( btn => {
                    if (btn.classList.contains('toggled')) {
                        btn.classList.remove('toggled');
                        console.log('true')
                    }
                    console.log('working')
                })
                btn.classList.add('toggled')
            })
        })
    }

    const navToggle = () => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLink = document.getElementById('nav')
        toggleButton.addEventListener('click', () => {
            navbarLink.classList.toggle('active')
            console.log('navbarLink clicked')
        })
    }
    return {
        buttonChange,
        navToggle,
    }
})();

export default domMan;