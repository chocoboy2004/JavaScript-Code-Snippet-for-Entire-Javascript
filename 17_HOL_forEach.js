// forEach loop in array (Advance loop)

const heros = ['ironman', 'spiderman', 'thor', 'dr. strange', 'flash', 'superman'];
// heros.forEach((hero) => {
//     console.log(hero);
// });

// heros.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// });
/*
ironman 0 [ 'ironman', 'spiderman', 'thor', 'dr. strange', 'flash', 'superman' ]
spiderman 1 [ 'ironman', 'spiderman', 'thor', 'dr. strange', 'flash', 'superman' ]
thor 2 [ 'ironman', 'spiderman', 'thor', 'dr. strange', 'flash', 'superman' ]
dr. strange 3 [ 'ironman', 'spiderman', 'thor', 'dr. strange', 'flash', 'superman' ]
flash 4 [ 'ironman', 'spiderman', 'thor', 'dr. strange', 'flash', 'superman' ]
superman 5 [ 'ironman', 'spiderman', 'thor', 'dr. strange', 'flash', 'superman' ]
*/



const course = [
    {languageName: 'JavaScript', shortForm: 'js'},
    {languageName: 'C++', shortForm: 'cpp'},
    {languageName: 'Python', shortForm: 'py'}
];

course.forEach((item) => {
    console.log(`${item.languageName} --> ${item.shortForm}`);
});
/*
JavaScript --> js
C++ --> cpp
Python --> py
*/