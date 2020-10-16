var locations = [];
//Used Loc since Location appears to be a reserved class name
class Loc {
    constructor(city, zipCode, address) {
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        locations.push(this);
    }
    render() {
        return;
    }
}
var restaurants = [];
class Restaurant extends Loc {
    constructor(city, zipCode, address, telephone, cuisine, website) {
        super(city, zipCode, address);
        this.telephone = telephone;
        this.cuisine = cuisine;
        this.website = website;
        restaurants.push(this);
    }
    render() {
        return super.render();
    }
}
let lemonLeaf = new Restaurant("Vienna", "1050", "Kettenbrückengasse 19", "+43(1)5812308", "Thai", "http://www.lemonleaf.at/");
var events = [];
class Eve extends Loc {
    constructor(city, zipCode, address, eventDate, eventTime, ticketPrice) {
        super(city, zipCode, address);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        events.push(this);
    }
    render() {
        return super.render();
    }
}
