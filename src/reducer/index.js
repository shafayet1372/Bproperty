const initialState = {
    purposeType: "Buy",
    propertyType: {
        type: "",
        propertyName: "",
    },
    beds: [],
    baths: [],
    price: {
        min: 0,
        max: 0,
    },
    area: {
        min: 0,
        max: 0,
    },
    status: "All",
    sortingType: "Highest Price",
    datas: [],
    filterLists: [],
};


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return { ...state, datas: action.payload };
        case "CHANGE_PURPOSE_TYPE":
            return { ...state, purposeType: action.payload };
        case "ADD_BEDS":
            return { ...state, beds: [...state.beds, action.payload] };
        case "RESET_BEDS":
            return { ...state, beds: action.payload };
        case "ADD_PROPERTY_TYPE":
        case "RESET_PROPERTY_TYPE":
            return {
                ...state,
                propertyType: {
                    type: action.payload.type,
                    propertyName: action.payload.name,
                },
            };
        case "ADD_BATHS":
            return { ...state, baths: [...state.baths, action.payload] };
        case "RESET_BATHS":
            return { ...state, baths: action.payload };
        case "ADD_PRICE":
            return {
                ...state,
                price: {
                    ...state.price,
                    [action.payload.target.name]: !action.payload.target.value
                        ? 0
                        : parseInt(action.payload.target.value),
                },
            };
        case "CHANGE_MIN_PRICE":
            return { ...state, price: { ...state.price, min: action.payload } };
        case "CHANGE_MAX_PRICE":
            return { ...state, price: { ...state.price, max: action.payload } };
        case "RESET_PRICE":
            return { ...state, price: { max: 0, min: 0 } };
        case "ADD_AREA":
            return {
                ...state,
                area: {
                    ...state.area,
                    [action.payload.target.name]: !action.payload.target.value
                        ? 0
                        : parseInt(action.payload.target.value),
                },
            };
        case "CHANGE_MIN_AREA":
            return { ...state, area: { ...state.area, min: action.payload } };
        case "CHANGE_MAX_AREA":
            return { ...state, area: { ...state.area, max: action.payload } };
        case "RESET_AREA":
            return { ...state, area: { max: 0, min: 0 } };
        case "ADD_STATUS":
            return { ...state, status: action.payload };
        case "UPDATE_SORTING":
            return { ...state, sortingType: action.payload };
        case "ADD_FILTERS":
            return { ...state, filterLists: [...state.filterLists, action.payload] };
        case "UPDATE_FILTERS":
            return { ...state, filterLists: action.payload };
        default:
            return state;
    }
};


export { initialState, reducer }