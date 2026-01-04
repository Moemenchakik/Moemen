function LoadAllCountires() {
    // alert('I will load all countries');
    let countries = [
        { name: 'lebanon', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/2560px-Flag_of_Lebanon.svg.png' },
        { name: 'qatar', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/2560px-Flag_of_Qatar.svg.png' },
        { name: 'germany', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Germany_%28state%29.svg/2560px-Flag_of_Germany_%28state%29.svg.png' }


    ];

    let ddl_countries = document.getElementById('ddl_countries');
    let list_country = document.getElementById('countries_list');
    let div_countries = document.getElementById('div_countries');
    countries.forEach(x => {
        let option = document.createElement('option');
        option.innerHTML = x.name;

        ddl_countries.appendChild(option);

        let li = document.createElement('li');
        li.innerHTML = x.name;
        list_country.appendChild(li);

        let image = document.createElement('img');
        image.src = x.flag;
        div_countries.appendChild(image);


    });
}