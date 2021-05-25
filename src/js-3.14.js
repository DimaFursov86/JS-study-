function countProps(object) {
    let propCount = 0;

    const count = Object.keys(object);
    // Change code below this line
    for (const key of count) {
       
            propCount = count.length;
        
    }
    return propCount;
}
console.log(countProps({}))