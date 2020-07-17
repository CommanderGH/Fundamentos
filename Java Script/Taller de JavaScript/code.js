// VARIABLES 

var balance = []
var inputTask = document.getElementById("inputTask")
var checkCapTask = document.getElementById("taskCapitalizeBtn")
var checkUpperTask = document.getElementById("taskUpperCaseBtn")
var inputBalance = document.getElementById("inputBalance")
var inputName = document.getElementById("inputName")
var inputEmail = document.getElementById("inputEmail")
var inputPass = document.getElementById("inputPass")
var allSpc = ["[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "]", "{", "}", ";", ":", "|", ",", ".", "<", ">", "?", "'", '"']
var user = {}

// FUNCIONES

function add() {
    if (inputTask.value.length > 0) {
        let text = inputTask.value
        let item = document.createElement("li")
        item.appendChild(document.createTextNode(text))
        document.getElementById("listTasks").appendChild(item)
        document.getElementById("inputTask").value = ""
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Vacío',
            text: 'No se permiten entradas vacías',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
}

inputTask.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("addTaskBtn").click()
    }
})

inputTask.addEventListener("keyup", function () {
    if (checkCapTask.checked && inputTask.value.length > 0) {
        //inputTask.value = inputTask.value[0].toUpperCase() + inputTask.value.slice(1)
        let task = inputTask.value.split(" ")
        let size = task.length
        let newTask = []
        for (let i = 0; i < size; i++) {
            newTask[i] = task[i][0].toUpperCase() + task[i].slice(1)
        }
        let result = newTask.join(" ")
        inputTask.value = result
    }
})

inputTask.addEventListener("keyup", function () {
    if (checkUpperTask.checked && inputTask.value.length > 0) {
        inputTask.value = inputTask.value.toUpperCase()
    }
})

function remove() {
    if (document.getElementById("listTasks").childElementCount != 0) {
        let item = document.getElementById("listTasks")
        let size = item.children.length - 1
        item.children[size].remove()
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Vacío',
            text: 'No hay elementos para borrar',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
}

function addBalance() {
    let amount = document.getElementById("inputBalance").value
    if (isNaN(amount) || isNaN(parseInt(amount))) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada Inválida',
            text: 'Solo se permiten números | No se permiten entradas vacías',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
        document.getElementById("inputBalance").value = ""
    }
    else {
        if (document.getElementById("deposit").checked) {
            balance.push(parseInt(amount))
            document.getElementById("inputBalance").value = ""
        }
        else {
            balance.push(parseInt(amount * -1))
            document.getElementById("inputBalance").value = ""
        }
    }
}

inputBalance.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("addBalanceBtn").click()
    }
})

function calculateBalance() {
    let suma = 0
    for (let i = 0; i < balance.length; i++) {
        suma = suma + balance[i]
    }
    document.getElementById("displayBalance").innerHTML = "Su balance es: " + suma
}

function printBalance() {
    if (balance.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Vacío',
            text: 'No se han realizado abonos ni préstamos',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else {
        while (document.getElementById("listBalance").childElementCount != 0) {
            document.getElementById("listBalance").children[0].remove()
        }
        let display = document.getElementById("listBalance")
        let item = document.createElement("li")
        item.appendChild(document.createTextNode(" | "))
        for (let i = 0; i < balance.length; i++) {
            item.appendChild(document.createTextNode(balance[i] + " | "))
            display.appendChild(item)
        }
    }
}

function cleanBalance() {
    while (document.getElementById("listBalance").childElementCount != 0) {
        document.getElementById("listBalance").children[0].remove()
    }
    while (balance.length != 0) {
        balance.pop()
    }
    document.getElementById("displayBalance").innerHTML = "Añada valores y calcule su balance..."
}

inputName.addEventListener("keyup", function () {
    let name = inputName.value.split(" ")
    let size = name.length
    let newName = []
    for (let i = 0; i < size; i++) {
        newName[i] = name[i][0].toUpperCase() + name[i].slice(1)
    }
    let result = newName.join(" ")
    inputName.value = result
})

inputName.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("verifyBtn").click()
    }
})

inputEmail.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("verifyBtn").click()
    }
})

inputPass.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("verifyBtn").click()
    }
})

function validateInput() {
    let name = inputName.value.trim()
    let email = inputEmail.value
    let pass = inputPass.value
    let may = true
    let min = true
    let num = true
    let spc = true
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] == pass[i].toUpperCase() && pass[i].match(/[a-z]/i)) {
            may = false
        }
    }
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] == pass[i].toLowerCase() && pass[i].match(/[a-z]/i)) {
            min = false
        }
    }
    for (let i = 0; i < pass.length; i++) {
        if (parseInt(pass[i])) {
            num = false
        }
    }
    for (let i = 0; i < pass.length; i++) {
        for (let j = 0; j < allSpc.length; j++) {
            if (pass[i] == allSpc[j]) {
                spc = false
            }
        }
    }
    if (name.split(" ").length < 2) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre Incompleto',
            text: 'Se requiere al menos un nombre y un apellido',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (email.indexOf("@") == -1) {
        Swal.fire({
            icon: 'error',
            title: 'Correo no Válido',
            text: 'El correo debe tener el caracter "@"',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (email.lastIndexOf(".") < email.indexOf("@")) {
        Swal.fire({
            icon: 'error',
            title: 'Correo no Válido',
            text: 'Debe haber al menos un "." después de "@"',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (email.indexOf("@") != email.lastIndexOf("@")) {
        Swal.fire({
            icon: 'error',
            title: 'Correo no Válido',
            text: 'El correo solo puede tener un "@"',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (pass.length < 10) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Débil',
            text: 'La contraseña debe contener al menos 10 caracteres',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (pass.length > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña No Válida',
            text: 'La contraseña excede el máximo de caracteres (20)',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (may) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña No Válida',
            text: 'La contraseña debe tener al menos un caracter en mayúscula',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (min) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña No Válida',
            text: 'La contraseña debe tener al menos un caracter en minúscula',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (num) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña No Válida',
            text: 'La contraseña debe tener al menos un número',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else if (spc) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña No Válida',
            text: 'La contraseña debe tener al menos un caracter especial',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
    else {
        Swal.fire({
            icon: 'success',
            title: 'Entradas Válidas',
            text: 'Las entradas cumplen todos los requisitos',
            timer: 20000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
        })
    }
}

function spcList() {

    Swal.fire({
        icon: 'info',
        title: 'Caracteres Especiales Permitidos',
        text: '[ ! @ # $ % ^ & * ( ) _ + - = [ ] { } ; \' : " | , . < > ?',
    })
}

function createUser() {
    let name = document.getElementById("inputName2").value
    let email = document.getElementById("inputEmail2").value
    let tel = document.getElementById("inputTel").value
    let address = document.getElementById("inputAddress").value
    let age = document.getElementById("inputAge").value
    let occupation = document.getElementById("inputOccupation").value
    user = {
        nombre: name,
        correo: email,
        telefono: tel,
        direccion: address,
        edad: age,
        profesion: occupation
    }
    console.log(user)
    document.getElementById("inputName2").value = ""
    document.getElementById("inputEmail2").value = ""
    document.getElementById("inputTel").value = ""
    document.getElementById("inputAddress").value = ""
    document.getElementById("inputAge").value = ""
    document.getElementById("inputOccupation").value = ""
    Swal.fire({
        icon: 'success',
        title: 'Registro Completado con Éxito',
        text: 'Puede revisar la consola y ver impresos los valores que acaba de ingresar',
        timer: 20000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
    })
}