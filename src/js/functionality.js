let capitalizeAddress = (address) => {
    return address.replace(/^[a-z]|(?<=\s)[a-z]/g, (s) => s.toUpperCase());
};

let getAllAddress = (datas, search) => {
    let newData = datas
        .map((x) => x.location.toLowerCase())
        .filter((x) => new RegExp(`${search}`, "i").test(x));
    let uniqueValueOfAddress = [...new Set(newData)].map((x) =>
        capitalizeAddress(x)
    );

    return uniqueValueOfAddress;
};


let filterByPurPose = (data, purposeType) => {
    return data.filter((x) =>
        purposeType.toLowerCase() == "buy"
            ? x.purpose.toLowerCase() == "sell"
            : x.purpose.toLowerCase() == "rent"
    );
};
let filterByPropertyType = (data, propertyType) => {
    const { propertyName, type } = propertyType;
    return data.filter((x) =>
        propertyName
            ? x.propertyType.propertyName == propertyName &&
            type == x.propertyType.type
            : x
    );
};
let filterByBeds = (data, beds) => {
    return data.filter((x) => {
        if (!beds.length) {
            return true;
        }

        return beds.find((y) => (y != "8" ? y == x.beds : parseInt(x.beds) >= 8));
    });
};

let filterByBaths = (data, baths) => {
    return data.filter((x) => {
        if (!baths.length) {
            return true;
        }
        return baths.find((y) =>
            y != "6" ? y == x.baths : parseInt(x.baths) >= 6
        );
    });
};
let filterByPrice = (data, price) => {
    let { min, max } = price;

    if (min == 0 && max == 0) {
        return data;
    }
    return data.filter((x) => {
        if (!max) {
            return x.price >= min;
        } else if (!min) {
            return x.price >= 0 && x.price <= max;
        }
        return x.price >= min && x.price <= max;
    });
};

let filterByArea = (data, area) => {
    let { min, max } = area;

    if (min == 0 && max == 0) {
        return data;
    }
    return data.filter((x) => {
        if (!max) {
            return x.area >= min;
        } else if (!min) {
            return x.area >= 0 && x.area <= max;
        }
        return x.area >= min && x.area <= max;
    });
};

let filterByStatus = (data, status, purposeType) => {
    if (status == "All") {
        if (purposeType == "Buy") {
            return data.filter((x) => x.statusType.type == "Completion");
        }
        return data.filter((x) => x.statusType.type == "Occupancy");
    }
    return data.filter((x) => x.statusType.status == status);
};

let filterBySorting = (data, sortingType) => {
    if (sortingType == "Highest Price") {
        return data.sort((a, b) => b.price - a.price);
    }
    if (sortingType == "Lowest Price") {
        return data.sort((a, b) => a.price - b.price);
    }
};
let filterBySearching = (data, selectMode, search) => {
    if (selectMode) {
        return data.filter((x) => new RegExp(`${search}`, "i").test(x.location));
    }
    return data;
};

export { capitalizeAddress, getAllAddress, filterBySearching, filterBySorting, filterByStatus, filterByArea, filterByBaths, filterByPrice, filterByBeds, filterByPurPose, filterByPropertyType }