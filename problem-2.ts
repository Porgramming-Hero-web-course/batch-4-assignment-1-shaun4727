{
    const removeDuplicates = (arr:number[]):number[] => {
        let newArr:number[] = [];
        arr.forEach(item => {
            if(!newArr.includes(item)){
                newArr.push(item);
            }
        })
        return newArr;
    }
    const result = removeDuplicates([1, 2, 2, 3, 4, 4,4, 5]);
    console.log(result);
}