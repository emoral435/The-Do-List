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
    };

    const navToggle = () => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLink = document.getElementById('nav')
        const main = document.getElementById('main')
        toggleButton.addEventListener('click', () => {
            navbarLink.classList.toggle('active')
            main.classList.toggle('active')
        })
    };

    const activateModals = () => {
        const openModalButtons = document.querySelectorAll('[data-modal-target')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')

        openModalButtons.forEach( btn => {
            btn.addEventListener('click', () => {
                const modal = document.querySelector(btn.dataset.modalTarget)
                openModal(modal)
            })
        })

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal-active')
            modals.foreEach( modal => {
                closeModal(modal)
            })
        })

        closeModalButtons.forEach( btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal')
                closeModal(modal)
            })
        })

        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }
    };

    const addProject = () => {
        document.getElementById('addProject').onclick = additionalProject()

        function additionalProject() {
            const projectName = document.getElementById('name').value
        }
    }

    return {
        buttonChange,
        navToggle,
        activateModals,
        addProject,
    }
})();

export default domMan;