function readDataFromFile(): string{
    return '_file_data_'
}
function readDataFromKb(): string{
    return '_keyboard_data_'
}

function readDataFromNetwork(): string{
    return '_network_data_'
}

function printData(message: string): void {
    console.log(`Сообщение: ${message}`)
}

function sendData(data: string): void {
    if (data) {
        console.log(`Данные ${data} были отправлены`)
        return
    }
    console.log(`Данных нет`)
}


function writeData(data: string): void {
    if (data) {
        console.log(`Данные ${data} были успешно записаны в файл`)
        return
    }
    console.log('Данных нет')
}

function exe1(from: string, to: string): void {
    let message = ''

    switch (from){
        case 'Keyboard':
            message = readDataFromKb()
            break
        case 'File':
            message = readDataFromFile()
            break
        case 'Network':
            message = readDataFromNetwork()
            break
    }

    switch (to){
        case 'Terminal':
            printData(message)
            break
        case 'Send':
            sendData(message)
            break
        case 'Write':
            writeData(message)
    }
}

exe1('Keyboard', 'Terminal')
exe1('File', 'Terminal')
exe1('Keyboard', 'Send')
exe1('File', 'Send')
exe1('Keyboard', 'Write')
exe1('Network', 'Terminal')
exe1('Network', 'Write')
