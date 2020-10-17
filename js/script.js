var locations = [];
//Creating a class for locations, used Loc since Location appears to be a reserved name
class Loc {
    constructor(image, name, city, zipCode, address) {
        this.image = image;
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        locations.push(this);
    }
    render() {
        return `
            <div class="card p-2">
                <img class="card-img" src="${this.image}">
                <div class="text-center card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p>${this.address}, ${this.zipCode} ${this.city}</p>
                </div>
            </div>`;
    }
}
let church = new Loc("img/church.jpg", "St. Charles Church", "Vienna", "1010", "Karlsplatz 1");
let zoo = new Loc("img/zoo.jpg", "Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b");
var restaurants = [];
//Creating a Restaurant class that inherits from Location
class Restaurant extends Loc {
    constructor(image, name, city, zipCode, address, telephone, cuisine, website) {
        super(image, name, city, zipCode, address);
        this.cuisine = cuisine;
        this.telephone = telephone;
        this.website = website;
        restaurants.push(this);
    }
    render() {
        return `
        <div class="card p-2">
            <img class="card-img" src="${this.image}">
            <div class="text-center card-body">
                <h5 class="card-title">${this.name}</h5>
                <p>${this.cuisine}</p>
                <p>${this.telephone}, ${this.website}</p>
                <p>${this.address}, ${this.zipCode} ${this.city}</p>
            </div>
        </div>`;
    }
}
let lemonLeaf = new Restaurant("img/lemonleaf.png", "Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "+43(1)5812308", "Thai", "http://www.lemonleaf.at/");
let sixta = new Restaurant("img/sixta.png", "SIXTA Restaurant", "Vienna", "1050", "Schönbrunner Straße 21", "+43 1 58 528 56 | +43 1 58 528 56", "Wienerisch", "http://www.sixta-restaurant.at/");
var events = [];
//Creating an Event class that inherits from Location, used Eve since Event appears to be a reserved name
class Eve extends Loc {
    constructor(image, name, city, zipCode, address, eventDate, eventTime, ticketPrice) {
        super(image, name, city, zipCode, address);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        events.push(this);
    }
    render() {
        return `
        <div class="card p-2">
            <img class="card-img" src="${this.image}">
            <div class="text-center card-body">
                <h5 class="card-title">${this.name}</h5>
                <p>${this.eventDate}, ${this.eventTime}</p>
                <p>Tickets starting at ${this.ticketPrice}</p>
                <p>${this.address}, ${this.zipCode} ${this.city}</p>
            </div>
        </div>`;
    }
}
let kristofferson = new Eve("img/kriskristofferson.jpg", "Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Fr., 15.11.2021", "20:00", "58,50 EUR");
let kravitz = new Eve("img/lennykravitz.jpg", "Lenny Kravitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Sat, 09.12.2029", "19:30", "47,80 EUR");
//Using jQuery which was installed via npm i @types/jquery
$(document).ready(function () {
    for (let i in locations) {
        let data = locations[i].render();
        $("#content").append(`
        <div class="col-lg-3 col-md-6 col-12 p-3" id="${i}"> 
            ${data}
        </div>`);
        // document.getElementById("content").innerHTML += `
        // <div class="col-lg-3 col-md-6 col-12 p-3" id="${i}"> 
        //     ${data}
        // </div>` 
    }
});
