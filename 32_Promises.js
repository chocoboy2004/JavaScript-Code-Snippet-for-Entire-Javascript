// It is a way to create a promise
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task is completed');
        resolve();
    }, 1000);
});
promiseOne.then(function () {
    // console.log('Promise is consumed');
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// another way to create an another promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task-2 is completed');
        resolve();
    }, 1000);
}).then(function () {
    // console.log('Promise 2 is consumed');
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const userDetails = {
            userID: 'iamRahul',
            password: 'rahul123'
        }
        resolve(userDetails)
    }, 1000)
});
promiseFour.then(function (user) {
    // console.log(user)
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ userid: 'iamRahul', password: 'rahul123' })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFive
    .then(function (user) {
        const userInfo = user;
        return userInfo
    })
    .then(function (userInfo) {
        const userID = userInfo.userid
        // console.log(`User Id: ${userID}`)
        return userInfo
    })
    .then(function (userInfo) {
        const userPassword = userInfo.password
        // console.log(`Password: ${userPassword}`);
    })
    .catch(function (error) {
        // console.log(error);
    })
    .finally(function () {
        // console.log('Promise either resolved or rejected')
    })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// promise handling using async wait
const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ user: 'JavaScript', pass: '123' })
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseSix() {
    try {
        const promise = await promiseSix
        // console.log(promise);
    } catch (error) {
        // console.log(error);
    }
};

consumePromiseSix()

// +++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://api.github.com/users/chocoboy2004')
.then((resolve) => {
    // return resolve.json();
})
.then((data) => {
    // console.log(data);
})
.catch((error) => {
    // console.log(error);
})


////////////////////////////////////////////////////////////////////

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({userid: 'hhbcbd9782', pass: 787373})
        } else {
            reject('ERROR: Js is not working')
        }
    })
})

promise1
.then((user) => {
    const details = user
    return details
})
.then((details) => {
    const userID = details.userid
    console.log(`User id: ${userID}`)
})
.catch((error) => {
    console.log(error);
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const promise2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({ user: 'JavaScript', pass: '123' })
        } else {
            reject('ERROR: Js is not working')
        }
    }, 1000)
});

async function resolvePromise2() {
    try {
        const fullfill = await promise2;
        console.log(fullfill);
    } catch (error) {
        console.log(error);
    }
}
resolvePromise2();

// +++++++++++++++++++++++++++++++++++++++++++++++++++


fetch('https://api.github.com/users/chocoboy2004')
.then(function(resolve) {
    const data = resolve.json()
    return data
})
.then(function(data) {
    const id = data.login
    const url = data.avatar_url
    console.log(id);
    console.log(url);
})
.catch(function() {
    console.log('Error occured');
})