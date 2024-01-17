function arrayToCsv(data) {
    
    data = data.map((arrayRow) => {
        arrayRow = arrayRow.map((columnElement) => {

            if (typeof columnElement !== 'string' && typeof columnElement !== 'number') {
                throw Error("Unexpected value")
            }

            if (typeof columnElement === "string"){
                columnElement = columnElement.replace(/["]/g, '""')

                if (/[,";\n]/g.test(columnElement)) {
                    columnElement = `"${columnElement}"` 
                }

            } 
            return columnElement
        }) 
        return arrayRow.join(',') 
    }) 
    return data = `${data.join('\n')}`
}


arrayToCsv([[1, 2], ['a,b', 'c,d']]) //?

arrayToCsv([[1, 2], ['a', 'b']]) //?

arrayToCsv([['"text"', 'other "long" text']]) //?
