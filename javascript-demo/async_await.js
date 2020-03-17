// 同步方法
async function getUsers() {
    let stuData
    await getStudents().then(resp => {
        stuData = resp
    })
    console.log(stuData);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "msg": "ok",
                "users": [
                    { "name": "wangwu", "age": 20 },
                    { "name": "zhangsan", "age": 23 }
                ]
            })
        }, 500);
    })
}

// 非同步方法
function getUsersNoAsync() {
    let stuData
    getStudents().then(resp => {
        stuData = resp
    })
    console.log(stuData);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "msg": "ok",
                "users": [
                    { "name": "wangwu", "age": 20 },
                    { "name": "zhangsan", "age": 23 }
                ]
            })
        }, 500);
    })
}


function getStudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "msg": "ok",
                "users": [
                    { "name": "zhaosi", "age": 2 },
                    { "name": "laoli", "age": 33 }
                ]
            })
        }, 1000);
    })
}

function noSync() {
    getUsersNoAsync().then(resp => {
        console.log('getUser--', resp);
    })
}
function sync() {
    getUsers().then(resp => {
        console.log('getUser--', resp);
    })
}
noSync()