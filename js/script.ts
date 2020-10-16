var locations = [];

//Used Loc since Location appears to be a reserved class name
class Loc {
    city;
    zipCode;
    address;
    constructor(city:string, zipCode:string, address:string) {
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        locations.push(this);
    }
    render() {
        return
    }
}

var restaurants = [];

class Restaurant extends Loc {
    telephone;
    cuisine;
    website;
    constructor (city:string, zipCode:string, address:string, telephone:string, cuisine:string, website:string) {
        super(city, zipCode, address);
        this.telephone = telephone;
        this.cuisine = cuisine;
        this.website = website;
        restaurants.push(this);
    }
    render () {
        return super.render()
    }
}

let lemonLeaf = new Restaurant("Vienna", "1050", "Kettenbrückengasse 19", "+43(1)5812308", "Thai", "http://www.lemonleaf.at/");

var events = [];

class Eve extends Loc {
    eventDate;
    eventTime;
    ticketPrice;
    constructor (city:string, zipCode:string, address:string, eventDate: string, eventTime:string, ticketPrice:number) {
        super(city, zipCode, address);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        events.push(this);
    }
    render () {
        return super.render()
    }
}