
function RectangleArea(height, width) {
    return height * width;
}

function TriangleArea(base, height) {
    return (base * height) / 2;
}

function CircleArea(radius) {
    return Math.PI * radius * radius;
}

let rectangleArea = RectangleArea(5, 10);

console.log('Rectangle Area :', rectangleArea);

let triangleArea = TriangleArea(4, 6);

console.log('Triangle Area :', triangleArea);

let circleArea = CircleArea(3);

console.log('Circle Area :', circleArea);