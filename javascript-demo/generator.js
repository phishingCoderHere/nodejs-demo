async function* countAppleSales() {
    var saleList = [3, 7, 5]
    for (var i = 0; i < saleList.length; i++) {
        await loading()
        yield saleList[i]
    }
}
function loading() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
}
var appleStore = countAppleSales();
const logYield = async () => {
    const next = await appleStore.next()
    if (!next.done) {
        console.log(next);
    }
}
logYield()
logYield()
logYield()