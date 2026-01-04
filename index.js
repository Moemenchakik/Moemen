// let name = 'Moemen';
// let age = 20;
// let university = 'BAU';

// let name1 = 'Rony';
// let age1 = 25;
// let uni = 'LU';

//Recording3;

let student = {
                 name:'Moemen',
                 age:20,
                 Uni:'BAU',
                 address:
                {
                    name:'Tripoli',
                    country:'Lebanon',
                    street:'somewhere',
                },

                study: function(){
                    console.log('I am studying');
                },
            };
            
let Coach = {
                 name:'Rony',
                 age:25,
                 Uni:'LU'
              };

let _stringified_student = JSON.stringify(student);
console.log(_stringified_student);
console.log(student.name);
student.study();

let family = ['Moemen' , 'Ihab' , 'Khaldoun' , 'Fouad'];


let test = () =>{
    console.log('Moemen Chakik')
}

test();


family.forEach(f => {console.log(f)});

