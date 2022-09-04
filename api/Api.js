const names = document.getElementById('name');
const birthday = document.getElementById('birtdhay');
const image = document.getElementById('img');
const nameactor = document.getElementById('NameActor');
const occupation = document.getElementById('occupation');
const api = 'https://www.breakingbadapi.com/api/characters/';

async function getData()
{
    try {
        const response = await fetch(api);
        const data = await response.json();
        // data.map(item => 
        //     console.log(item.name)
        // )
        console.log(data);
        printCombo(data);
    } catch (error) {
        console.log(error.message);
    }
    
}

function printCombo(data)
{
    nameactor.innerHTML = `<select id="combo" onchange="getInfo(this.value);">
                                <option>-- Please select an actor --</option>
                                ${data.map(item=>`<option>${item.name}</option>`)}
                          </select>`;
}

async function getInfo(Name){
    if(Name !== '-- Please select an actor --')
    {
        const response = await fetch(`${api}?name=${Name}`);
        const data = await response.json();

        names.innerHTML = `Full Name : ${data[0].name}`;
        birthday.innerHTML = `Birthday : ${data[0].birthday}`;
        occupation.innerHTML = `Occupation : ${data[0].occupation}`;
        image.src = data[0].img;
    }
}

getData();