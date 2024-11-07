{
    const validateKeys = <X>(obj:X,keys: (keyof X)[]) => {
        let flag:boolean = true;
        keys.forEach((item)=> {
            if(!obj[item]){
                flag = false;
                return flag;
            }
        })
        return flag;
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person,["name","age"]));
}