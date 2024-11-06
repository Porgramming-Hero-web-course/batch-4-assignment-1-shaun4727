{
    class Car{
        public make:string;
        public model:string;
        public year:number;

        constructor(make:string,model:string,year:number){
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(){
            const curYear = new Date().getFullYear();
            return curYear - this.year;
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    const result = car.getCarAge();
    console.log(result);
}