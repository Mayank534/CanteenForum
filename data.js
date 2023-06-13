let btnAdd = document.querySelector('button');
let table = document.querySelector('table');



let amountInput = document.querySelector('#amount');
let descriptionInput = document.querySelector('#description');


btnAdd.addEventListener('click', () => {
    
    let age = amountInput.value;
    let country = descriptionInput.value;

    let template = `
                <tr>
                    
                    <td>${age}</td>
                    <td>${country}</td>
                </tr>`;

    table.innerHTML += template;
});