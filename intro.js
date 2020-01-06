var springColors = ["AF7575", "EFD8A1", "BCD693"];

window.onload = init;

function init() {
    // console.log(springColors);
    var tilla = new pet("dog", "Tilla", 25, ["sleeping", "eating", "walking"]);
    console.log(tilla);
    var tillaJson = JSON.stringify(tilla);
    console.log(tillaJson);
}

function pet(type, name, weight, likes) {
    this.type = type;
    this.name = name;
    this.weight = weight;
    this.likes = likes;
}