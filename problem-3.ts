{
    const countWordOccurrences = (line:string,word:string):number => {
        let trimmedLine = line.trim().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
        let arr = trimmedLine.split(' ');
        let count = 0;
        arr.forEach(item => {
            if(item.toLowerCase() == word.toLowerCase()){
                count = count+1;
            }
        })
        return count;
    }
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(result);
}