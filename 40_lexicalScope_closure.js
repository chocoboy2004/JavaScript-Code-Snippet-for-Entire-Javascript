/* Lexical Function */

// Example - 1
// function OuterFunc() {
//     let name = 'Rahul'

//     function InnerFunc() {
//         console.log(name);
//     }
//     InnerFunc()
// }
// OuterFunc()


// Example - 2
// function out() {
//     let name = 'JavaScript'
//     let shortName = 'JS'

//     function printName() {
//         console.log(name);
//     }

//     function printShortName() {
//         console.log(shortName);
//     }

//     printName()
//     printShortName()
// }

// out()



// Example - 3
// function Parent() {
//     let propertyOne = 1000
//     let propertyTwo = 2000

//     function FirstChild() {
//         let privateProperty = 20000
//         console.log(`First Child: ${propertyOne}`);
//     }
//     // First and Second childs are the siblings of each other

//     function SecondChild() {
//         console.log(`Second Child: ${propertyTwo}`);
//         console.log(`First child's private property: ${privateProperty}`);  // Error will be encountered here
//         /*
//         First Child: 1000
//         Second Child: 2000
//         C:\Users\Rahul Ghosh\Desktop\JavaScript_Code_and_Snippet\40_lexicalScope_closure.js:49
//                 console.log(`First child's private property: ${privateProperty}`);
//                                                                ^
        
//         ReferenceError: privateProperty is not defined
//         */

//     }

//     FirstChild()
//     SecondChild()
// }

// Parent()



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



/* Closure */

// Example - 1

function outer() {
    let marks = 10

    function inner() {
        console.log(marks);
    }
    return inner
    /*
    It not only returns the current executional context but it also return the entire lexical scope
    */
}

const holdOuter = outer()
console.log(holdOuter());