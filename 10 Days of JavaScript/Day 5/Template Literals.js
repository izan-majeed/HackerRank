function sides(literals, ...expressions) {
    var a = expressions[0];
    var p = expressions[1];

    const root = Math.sqrt((p*p)-(16*a))
    const s1 = (p + root)/4;
    const s2 = (p - root)/4;

    return ([s2, s1].sort());
}
