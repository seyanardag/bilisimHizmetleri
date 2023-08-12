const offcanvasKapat = document.querySelectorAll('.offcanvasKapat')

for (let i = 0; i < offcanvasKapat.length; i++) {

    offcanvasKapat[i].addEventListener('click', function () {
        // offcanvasKapat.forEach(element => element.classList.remove('active'))
        // offcanvasKapat[i].classList.add('active')
        setTimeout(() => {
            document.querySelector('[data-bs-dismiss="offcanvas"]').click()
        }, 350);
    })
}



document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.querySelectorAll('.nav-link')
    window.addEventListener('scroll', () => {                   
        allLinks.forEach(link => {
            section = document.querySelector(link.hash)
                link.classList.remove('active')
                if ((section.offsetTop <= window.scrollY + 95) && (section.offsetTop + section.clientHeight >= window.scrollY + 95)) {
                    link.classList.add('active')
                }            
        });
    })
})

const contactEl = document.querySelector('.contact')
contactEl.addEventListener('click', () => {
    contactEl.classList.add('active')
})



const nameEl = document.getElementById('name')
const nameErrText = document.getElementById('nameErrText')

const surnameEl = document.getElementById('surname')
const surnameErrText = document.getElementById('surnameErrText')


const emailEl = document.getElementById('email')
const emailErrText = document.getElementById('emailErrText')

const messageTextEl = document.getElementById('messageText')
const messageErrText = document.getElementById('messageErrText')
const countEl = document.getElementById('counter')
const submitBtnEl = document.getElementById('submitBtn')

let isMessageShort = false

function handleMessageChange() {

    messageLength = messageTextEl.value.length
    countEl.innerText = messageLength
    isMessageShort = messageLength < 10 ? true : false
    if (isMessageShort) {
        submitBtnEl.classList.add('disabled')
    } else {
        submitBtnEl.classList.remove('disabled')
    }
}

messageTextEl.onblur = () => {
    if (isMessageShort) {
        messageErrText.innerText = '*Mesajınız 10 karakterden az olamaz'
    } else {
        messageErrText.innerText = ''
    }

}



nameEl.onblur = () => {
    if (nameEl.value.length < 3) {
        nameErrText.innerText = '*Adınız 3 karakterden az olamaz'
    } else {
        nameErrText.innerText = ''
    }
}

surnameEl.onblur = () => {
    if (surnameEl.value.length < 3) {
        surnameErrText.innerText = '*Soyadınız 3 karakterden az olamaz'
    } else {
        surnameErrText.innerText = ''
    }
}

emailEl.onblur = () => {
    namePattern = /^([A-Za-z0-9_\-\.]{2,})\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gi
    let result = namePattern.test(emailEl.value)

    console.log(emailEl.value)
    console.log(result)


    if (emailEl.value.length < 3) {
        emailErrText.innerText = '*e-posta adresiniz 3 karakterden az olamaz'
    } else if (!emailEl.value.includes('@')) {
        emailErrText.innerText = "*e-postanız '@' karakteri içermelidir."
    } else if (!result) {
        emailErrText.innerText = "*Lütfen e-postanızı kontrol ediniz."
    } else {
        emailErrText.innerText = ''
    }

}


function handleSubmit() {
    nameEl.value = ''
    surnameEl.value = ''
    emailEl.value = ''
    messageTextEl.value = ''
    alert('Mesajınız başarıyla gönderildi')
}

