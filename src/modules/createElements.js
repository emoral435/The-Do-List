const newElement = (() => {
    function makeDiv(string = 'none', id = '', innerContent = '') {
        let array
        let div = document.createElement('div')
        if (string != '') {
            array = string.split(' ')
            for (let i= 0; i < array.length; i++) {
                div.classList.add(array[i])
            }
        };
        if ( id != undefined ) {
            div.id = id
        }
        if ( innerContent != undefined ) {
             div.textContent = innerContent

        }
        return div
    }

    function makeButton(string = '', id = '', innerContent = '') {
        let array = string.split(' ')
        let btn = document.createElement('button')
        if (string != '') {
            for (let i =0; i < array.length; i++) {
                btn.classList.add(array[i])
            }
        }
        btn.id = id
        btn.textContent = innerContent
        return btn
    }

    function makeEditImg(id) {
        let str = "h-6 w-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
        let array = str.split(' ')
        let img = document.createElement('img')
        img.src = 'src/modules/edit.svg'
        img.dataset.modalTarget = '#' + id + 'otherModal'
        for (let i = 0; i < array.length; i++) {
            img.classList.add(array[i])
        }
        return img
    }

    function makeTrashImg(id) {
        let img = document.createElement('img')
        img.src = 'src/modules/trash.svg'
        img.dataset.id = id
        let str = "h-6 w-6 cursor-pointer trash hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
        let array = str.split(' ')
        for (let i = 0; i < array.length; i++) {
            img.classList.add(array[i])
        }
        
        return img
    }

    function circleSpan(id, priority) {
        let str = "min-h-[20px] min-w-[20px] inline-block bg-white border-[3px] rounded-[50%] hover:bg-slate-300 mx-3"
        let array = str.split(' ')
        let span = document.createElement('span')
        for (let i = 0; i < array.length; i++) {
            span.classList.add(array[i])
        }
        if (priority == 0) {
            span.classList.add('border-black')
        } else if (priority == 1) {
            span.classList.add('border-blue-500')
        } else if (priority == 2) {
            span.classList.add('border-orange-500')
        } else if (priority == 3) {
            span.classList.add('border-red-500')
        }
        span.dataset.id = id
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
        let strId = id + 'form'
        let form = document.createElement('form')
        form.setAttribute('id', strId)
        form.setAttribute('action', '')
        return form
    }

    function makeLabel(id, selector) {
        let strId = id + selector
        let label = document.createElement('label')
        label.setAttribute('for', strId)
        label.textContent = selector[0].toUpperCase() + selector.slice(1, (selector.length)) + ':'
        return label
    }

    function makeInput(type, id, selector, string) {
        let array = string.split(' ')
        let input = document.createElement('input')
        for (let i =0; i < array.length; i++) {
            input.classList.add(array[i])
        }
        let strId = id + selector
        input.setAttribute('type', type)
        input.setAttribute('id', strId)
        if ( type === 'text') {
            input.setAttribute('required', '')
        }
        return input
    }

    function makeTextArea(id, string) {
        let array = string.split(' ')
        let textarea = document.createElement('textarea')
        textarea.setAttribute('required', '')
        let strId = id + 'description'
        for (let i = 0; i < array.length; i++) {
            textarea.classList.add(array[i])
        }
        textarea.setAttribute('id', strId)
        textarea.cols = '5'
        textarea.rows = '5'
        return textarea
    }

    function makeSelect(id, string) {
        let array = string.split(' ')
        let select = document.createElement('select')
        let priorityId = id + 'priority'
        select.setAttribute('id', priorityId)
        for (let i =0; i < array.length; i++) {
            select.classList.add(array[i])
        }
        let op1 = document.createElement('option')
        op1.value = '0'
        op1.textContent = 'None'
        let op2 = document.createElement('option')
        op2.value = '1'
        op2.textContent = 'Low'
        let op3 = document.createElement('option')
        op3.value = '2'
        op3.textContent = 'Medium'
        let op4 = document.createElement('option')
        op4.value = '3'
        op4.textContent = 'High'
        select.append(op1, op2, op3, op4)
        return select

    }

    return { makeDiv, makeButton, makeEditImg, circleSpan, otherSpan, makeTrashImg, makeForm, makeLabel, makeInput, makeTextArea, makeSelect}
})()

export default newElement