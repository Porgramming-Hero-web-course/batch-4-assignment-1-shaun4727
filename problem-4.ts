{
    type circle = {
        shape: "circle";
        radius: number;
    }
    type rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }
    type shapes = circle | rectangle;

    const calculateShapeArea = (obj:shapes):Number => {
        let area = 0;
        if(obj.shape === 'circle'){
            area = Math.PI*obj.radius*obj.radius;
        }else{
            area = obj.width * obj.height;
        }
        return Number(area.toFixed(2));
    }
    const result = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(result);
}