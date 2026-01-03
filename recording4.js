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
    //la kel country (x hon btrmoz la kel county)
    countries.forEach(x => {
        //hon 3melna options li hene l x y3ni kel country
        let option = document.createElement('option');
        // hon 3m nktub kl x b esmu ( l value taba3u )
        option.innerHTML = x.name;
        // haydi command btkhallina 
        ddl_countries.appendChild(option);

        let li = document.createElement('li');
        li.innerHTML = x.name;
        list_country.appendChild(li);

        let image = document.createElement('img');
        image.src = x.flag;
        div_countries.appendChild(image);


    });
}