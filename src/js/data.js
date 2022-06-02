import { v4 as uuidv4 } from 'uuid'
const data = [
    {
        id: uuidv4(),
        location: 'Ashulia',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Apartment'
        },
        price: 500000,
        purpose: 'sell',
        beds: "1",
        area: 800,
        baths: "1",
        statusType: {
            type: "Completion",
            status: 'Ready'
        }
    },
    {
        id: uuidv4(),
        location: 'Banasree',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Room'
        },
        price: 1000000,
        purpose: 'sell',
        beds: "2",
        area: 1000,
        baths: "2",
        statusType: {
            type: "Completion",
            status: 'Under Construction'
        }

    },
    {
        id: uuidv4(),
        location: 'Chandrima Model Town',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Duplex'
        },
        price: 1500000,
        purpose: 'sell',
        beds: "3",
        area: 1200,
        baths: "3",
        statusType: {
            type: "Completion",
            status: 'Ready'
        }

    },
    {
        id: uuidv4(),
        location: 'Diabari',
        city: 'Dhaka',
        propertyType: {
            type: "Commercial",
            propertyName: 'Duplex'
        },
        price: 2000000,
        purpose: 'sell',
        beds: "4",
        area: 1400,
        baths: "4",
        statusType: {
            type: "Completion",
            status: 'Under Construction'
        }

    },
    {
        id: uuidv4(),
        location: 'Uttara',
        city: 'Dhaka',
        propertyType: {
            type: "Commercial",
            propertyName: 'Plaza'
        },
        price: 2500000,
        purpose: 'rent',
        beds: "5",
        area: 1600,
        baths: "5",
        statusType: {
            type: "Occupancy",
            status: 'Occupied'
        }

    },
    {
        id: uuidv4(),
        location: 'Mohammadpur',
        city: 'Dhaka',
        propertyType: {
            type: "Commercial",
            propertyName: 'Apartment'
        },
        price: 3000000,
        purpose: 'rent',
        beds: 'Studio',
        area: 1800,
        baths: "6",
        statusType: {
            type: "Occupancy",
            status: 'Vacant'
        }


    },
    {
        id: uuidv4(),
        location: 'Curmitola',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Apartment'
        },
        price: 3500000,
        purpose: 'sell',
        beds: "7",
        area: 2000,
        baths: "7",
        statusType: {
            type: "Completion",
            status: 'Ready'
        }

    },
    {
        id: uuidv4(),
        location: 'kamarpara',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Penthouse'
        },
        price: 4000000,
        purpose: 'sell',
        beds: "8",
        area: 2200,
        baths: "8",
        statusType: {
            type: "Completion",
            status: 'Under Construction'
        }

    },
    {
        id: uuidv4(),
        location: 'Uttara Sector-9',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Plot'
        },
        price: 4500000,
        purpose: 'sell',
        beds: "9",
        area: 2400,
        baths: "9",
        statusType: {
            type: "Completion",
            status: 'Ready'
        }

    },
    {
        id: uuidv4(),
        location: 'Mohammadpur',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Apartment'
        },
        price: 4500000,
        purpose: 'sell',
        beds: '8',
        area: 2400,
        baths: "2",
        statusType: {
            type: "Completion",
            status: 'Ready'
        },


    }
    , {
        id: uuidv4(),
        location: 'kamarpara',
        city: 'Dhaka',
        propertyType: {
            type: "Residential",
            propertyName: 'Plot'
        },
        price: 4200000,
        purpose: 'sell',
        beds: "8",
        area: 2200,
        baths: "8",
        statusType: {
            type: "Completion",
            status: 'Under Construction'
        }

    }
]

export default data