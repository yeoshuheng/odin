let btnns = document.querySelectorAll('.btn');
let screen = document.querySelector('#screen');

btnns.forEach(b => {
    b.addEventListener('click', (e) =>
    {
        switch(e.target.innerText) {
            case 'c':
                screen.innerText = '';
                break;
            case 'del':
                screen.innerText = screen.innerText.slice(0, -1);
                break;
            case 'x':
                screen.innerText += '*';
                break;
            case '=':

                try {
                    screen.innerText = eval(screen.innerText);
                }
                
                catch {
                    screen.innerText = 'That is not a valid calculation';
                }
                break;
                
            default:
                screen.innerText += e.target.innerText;
        }

    })
})

