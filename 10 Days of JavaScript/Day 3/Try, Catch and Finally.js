function reverseString(s) {
    try {
        var x = s.split("");
        var y = x.reverse();
        var z = y.join("");
        console.log(z);
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}
