// choose a random fruit.
const choice = (items) => {
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}

// return array without first appearance of chosen fruit.
const remove = (items, item) => {
    try {
        let spot = items.indexOf(item);
        items.splice(spot, 1)
        console.log(`removed ${item}`)
        return items
    } catch {
        console.log('not found')
    }    
}

export { choice, remove };