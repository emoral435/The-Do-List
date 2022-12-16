const newElement = (() => {
    function makeDiv(string, id ='', innerContent = '') {
        let array = string.split(' ')
        let div = document.createElement('div')
        for (let i= 0; i < array.length; i++) {
            div.classList.add(array[i])
        }
        div.id = toString(id)
        div.textContent = innerContent
        return div
    }

    function makeButton(string, id = '', innerContent) {
        let array = string.split(' ')
        let btn = document.createElement('button')
        for ( i =0; i < array.length; i++) {
            btn.classList.add(array[i])
        }
        btn.id = toString(id)
        btn.textContent = innerContent
        return btn
    }

    function makeEditImg(id) {
        let str = "h-6 w-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
        let array = str.split(' ')
        let img = document.createElement('img')
        img.src = '/src/modules/edit.svg'
        img.dataset.modalTarget = '#' + toString(id) + 'task'
        for (let i = 0; i < array.length; i++) {
            img.classList.add(array[i])
        }
        return img
    }

    function makeTrashImg(id) {
        let img = document.createElement('img')
        img.src = '/src/modules/trash.svg'
        img.dataset.id = toString(id)
        let str = "h-6 w-6 cursor-pointer trash hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
        let array = str.split(' ')
        for (let i = 0; i < array.length; i++) {
            img.classList.add(array[i])
        }
        return img
    }

    function circleSpan(id) {
        let str = "min-h-[20px] min-w-[20px] inline-block bg-white border-red-500 border-[3px] rounded-[50%] hover:bg-slate-300 mx-3"
        let array = str.split(' ')
        let span = document.createElement('span')
        for (let i = 0; i < array.length; i++) {
            parseInt.classList.add(array[i])
        }
        span.dataset.id = toString(id)
        return span
    }

    function otherSpan(first) {
        let str = "h-[2px] bg-slate-700 w-[12px] block"
        let array = str.split(' ')
        let span = document.createElement('span')
        for (let i = 0; i < array.length; i++) {
            span.classList.add(array[i])
        }
        if (first) span.classList.add('translate-y-[2px]');
        else span.classList.add('rotate-[90deg]');
        return span
    }

    function makeForm(id) {
        let strId = toString(id) + 'form'
        let form = document.createElement('form')
        form.setAttribute('id', strId)
        form.setAttribute('action', '')
        return form
    }

    function makeLabel(id, selector) {
        let strId = toString(id) + selector
        let label = document.createElement('label')
        label.setAttribute('for', strId)
        return label
    }

    function makeInput(type, id, selector, string) {
        let array = string.split(' ')
        let input = document.createElement('input')
        for (let i =0; i < array.length; i++) {
            input.classList.add(array[i])
        }
        let strId = toString(id) + selector
        input.setAttribute('type', type)
        input.setAttribute('id', strId)
        if ( selector === 'text') {
            input.setAttribute('required', '')
        }
        return input
    }

    function makeTextArea(id, string) {
        let array = string.split(' ')
        let textarea = document.createElement('textarea')
        textarea.setAttribute('required', '')
        let strId = toString(id) + 'description'
        for (let i = 0; i < array.length; i++) {
            textarea.classList.add(array[i])
        }
        textarea.cols = '5'
        textarea.rows = '5'
        return textarea
    }

    return { makeDiv, makeButton, makeEditImg, circleSpan, otherSpan, makeTrashImg, makeForm, makeLabel, makeInput, makeTextArea, }
})()

export default newElement