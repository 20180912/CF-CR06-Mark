var locations = [];
var locations_visited_asc = [];
var locations_visited_desc = [];

//Creating a class for locations, used Loc since Location appears to be a reserved name. Date/time created are optional
class Loc {
    image;
    name;
    city;
    zipCode;
    address;
    dateCreated;
    timeCreated;
    constructor(image:string, name:string, city:string, zipCode:string, address:string, dateCreated:string ="", timeCreated:string ="") {
        this.image = image;
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.dateCreated = dateCreated;
        this.timeCreated = timeCreated;
        locations.push(this);
    }
    render() {
        return `
            <div class="card">
                <img class="card-img" src="${this.image}">
                <div class="text-center card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p>${this.address}, ${this.zipCode} ${this.city}</p>
                </div>
            </div>`
    }
}

//Creating locations
let church = new Loc("img/church.jpg", "St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "2019-03-24", "12:45");
let zoo = new Loc("img/zoo.jpg", "Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b");

//Creating a Restaurant class that inherits from Location
class Restaurant extends Loc {
    telephone;
    cuisine;
    website;
    constructor (image:string, name:string, city:string, zipCode:string, address:string, telephone:string, cuisine:string, website:string, dateCreated:string ="", timeCreated:string ="") {
        super(image, name, city, zipCode, address, dateCreated, timeCreated);
        this.cuisine = cuisine;
        this.telephone = telephone;
        this.website = website;
    }
    render () {
        return `
        <div class="card">
            <img class="card-img" src="${this.image}">
            <div class="text-center card-body">
                <h5 class="card-title">${this.name}</h5>
                <p>${this.cuisine}</p>
                <p>${this.telephone}, ${this.website}</p>
                <p>${this.address}, ${this.zipCode} ${this.city}</p>
            </div>
        </div>`
    }
}

//Creating Restaurants
let lemonLeaf = new Restaurant("img/lemonleaf.png", "Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "+43(1)5812308", "Thai", "http://www.lemonleaf.at/", "2020-01-15", "12:00");
let sixta = new Restaurant("img/sixta.png", "SIXTA Restaurant", "Vienna", "1050", "Schönbrunner Straße 21", "+43 1 58 528 56 | +43 1 58 528 56", "Wienerisch", "http://www.sixta-restaurant.at/", "2019-10-12", "18:30");

//Creating an Event class that inherits from Location, used Eve since Event appears to be a reserved name
class Eve extends Loc {
    eventDate;
    eventTime;
    ticketPrice;
    constructor (image:string, name:string, city:string, zipCode:string, address:string, eventDate: string, eventTime:string, ticketPrice:string, dateCreated:string ="", timeCreated:string ="", ) {
        super(image, name, city, zipCode, address, dateCreated, timeCreated);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }
    render () {
        return `
        <div class="card">
            <img class="card-img" src="${this.image}">
            <div class="text-center card-body">
                <h5 class="card-title">${this.name}</h5>
                <p>${this.eventDate}, ${this.eventTime}</p>
                <p>Tickets starting at ${this.ticketPrice}</p>
                <p>${this.address}, ${this.zipCode} ${this.city}</p>
            </div>
        </div>`
    }
}

//Creating events
let kristofferson = new Eve("img/kriskristofferson.jpg", "Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Fr., 15.11.2021", "20:00", "58,50 EUR");
let kravitz = new Eve("img/lennykravitz.jpg", "Lenny Kravitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Sat, 09.12.2029", "19:30", "47,80 EUR");

//Using jQuery which was installed via npm i @types/jquery

$(document).ready(function () {

    //Constructing a function to print content
    function printContent(arr) {
        for (let i in arr) {
            let data = arr[i].render();
            $("#content").append(`
            <div class="col-lg-3 col-md-6 col-12 p-3" id="${i}"> 
                ${data}
            </div>`)
    
            //checking whether a location has been visited and if so, adding date and time
            if (arr[i].dateCreated != "") {
                $(`#${i} > div`).append(`<div class="card-footer"><p class="h6 text-success text-center">visited on ${arr[i].dateCreated} at ${arr[i].timeCreated}</p></div>`)
            }
        }
    }

    //Checking the current hmtl page, filtering and sorting the array if needed and calling the print function
    if (document.title == "Index") {

        printContent(locations);

    } else if (document.title == "Visited-asc") {

        locations_visited_asc = locations.filter(e => e.dateCreated != "").sort((a, b) => a.dateCreated.localeCompare(b.dateCreated) || a.timeCreated.localeCompare(b.timeCreated));
        printContent(locations_visited_asc);

    } else if (document.title == "Visited-desc") {
        
        locations_visited_desc = locations.filter(e => e.dateCreated != "").sort((a, b) => b.dateCreated.localeCompare(a.dateCreated) || b.timeCreated.localeCompare(a.timeCreated));
        printContent(locations_visited_desc);

    }

});