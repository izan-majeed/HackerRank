function main() {
    const PI = Math.PI;
    var r = readLine();
    var area = PI * r * r;
    console.log(area);

    var perimeter = 2 * PI * r;
    console.log(perimeter);

    try {
     PI = 0;
     console.log(PI);
    }
    
    catch(error) {
     console.error("You correctly declared 'PI' as a constant.");
    }
}
