{
    interface Profile{
        name:string;
        age: number;
        email:string;
    }

    const myProfile:Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    }
    const updateProfile = (obj:Profile,pobj:Partial<Profile>) => {
        return {...obj,...pobj};
    }
    console.log(updateProfile(myProfile, { age: 26 }));
}