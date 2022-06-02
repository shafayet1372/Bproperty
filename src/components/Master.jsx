import React, { useState, useReducer, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import {
  Purpose,
  Location,
  PropertyType,
  Price,
  Bath,
  Beds,
  Area,
  Keyword,
  FilterList,
  Status,
  DataView,
  Sorting,
  EmptyData,
} from "../components";
import {
  capitalizeAddress,
  getAllAddress,
  filterBySearching,
  filterBySorting,
  filterByStatus,
  filterByArea,
  filterByBaths,
  filterByPrice,
  filterByBeds,
  filterByPurPose,
  filterByPropertyType,
} from "../js/functionality";
import { v4 as uuidv4 } from "uuid";
import { initialState, reducer } from "../reducer";
import data from "../js/data";
import style from "../css/style.module.css";

export default function Master() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");
  let [selectMode, setSelectMode] = useState(false);
  const {
    datas,
    purposeType,
    beds,
    propertyType,
    baths,
    price,
    area,
    status,
    sortingType,
    filterLists,
  } = state;

  useEffect(() => {
    dispatch({ type: "ADD_DATA", payload: data });
  }, []);

  let searchHandler = (e) => {
    if (selectMode) {
      setSelectMode(false);
    }
    setSearch((p) => e.target.value);
  };

  let selectAddressHandler = (value) => {
    setSearch(value);
    setSelectMode(true);
  };

  let resetSpecificFilter = (type) => {
    if (type == "beds") {
      dispatch({ type: "RESET_BEDS", payload: [] });
    } else if (type == "baths") {
      dispatch({ type: "RESET_BATHS", payload: [] });
    } else if (type == "price") {
      dispatch({ type: "RESET_PRICE", payload: null });
    } else if (type == "area") {
      dispatch({ type: "RESET_AREA", payload: null });
    }
  };

  let resetAllFilters = () => {
    let filters = filterLists.slice();
    filters.forEach((x) => {
      resetSpecificFilter(x.type);
    });
    dispatch({ type: "UPDATE_FILTERS", payload: [] });
  };

  let removeFilterListHandler = (type) => {
    let newFilterList = filterLists.slice().filter((x) => x.type != type);
    dispatch({ type: "UPDATE_FILTERS", payload: newFilterList });
    resetSpecificFilter(type);
  };

  let addMinFilter = (type, value) => {
    let obj = {};
    obj.id = uuidv4();
    obj.type = type;
    obj.min = value;
    if (type == "price") {
      obj.max = price.max != 0 ? price.max : "Any";
    } else if (type == "area") {
      obj.max = area.max != 0 ? area.max : "Any";
    }

    dispatch({ type: "ADD_FILTERS", payload: obj });
  };

  let addBedsAndBathsFilter = (type, value) => {
    let obj = {};
    obj.id = uuidv4();
    obj.type = type;
    obj.lists = [];
    obj.lists.push(value);
    dispatch({ type: "ADD_FILTERS", payload: obj });
  };

  let updateBedsAndBathsFilter = (type, value) => {
    let filters = filterLists.slice();
    let findFilter = filters.find((x) => x.type == type);
    findFilter.lists.push(value);
    dispatch({ type: "UPDATE_FILTERS", payload: filters });
  };

  let addAndUpdateBedsAndBathsFilter = (type, value) => {
    if (!filterLists.find((x) => x.type == type)) {
      addBedsAndBathsFilter(type, value);
    } else {
      updateBedsAndBathsFilter(type, value);
    }
  };

  let deleteBedsAndBathsHandler = (type, value) => {
    let filters = filterLists.slice();
    let findLists = filters.find((x) => x.type == type);
    findLists.lists = findLists.lists.slice().filter((x) => x != value);
    if (findLists.lists.length < 1) {
      filters = filters.filter((x) => x.type != type);
    }
    dispatch({ type: "UPDATE_FILTERS", payload: filters });
  };

  let updateMinFilter = (type, value) => {
    let filters = filterLists.slice();
    let findFilter = filters.find((x) => x.type == type);
    findFilter.min = value;
    dispatch({ type: "UPDATE_FILTERS", payload: filters });
  };

  let updateMaxFilter = (type, value) => {
    let filters = filterLists.slice();
    let findFilter = filters.find((x) => x.type == type);
    findFilter.max = value;
    dispatch({ type: "UPDATE_FILTERS", payload: filters });
  };

  let addMaxFilter = (type, value) => {
    let obj = {};
    obj.id = uuidv4();
    obj.type = type;
    obj.max = value;
    if (type == "price") {
      obj.min = price.min != 0 ? price.min : 0;
    } else if (type == "area") {
      obj.min = area.min != 0 ? area.min : 0;
    }

    dispatch({ type: "ADD_FILTERS", payload: obj });
  };

  let changeMinPriceHandler = (value) => {
    dispatch({ type: "CHANGE_MIN_PRICE", payload: value });
    addAndUpdateMinFilter("price", value);
  };

  let changeMaxPriceHandler = (value) => {
    if (value == "any") {
      dispatch({ type: "CHANGE_MAX_PRICE", payload: 0 });
    } else {
      dispatch({ type: "CHANGE_MAX_PRICE", payload: value });
    }
    addAndUpdateMaxFilter("price", value);
  };

  let changePriceHandler = (e) => {
    dispatch({ type: "ADD_PRICE", payload: e });
  };

  let resetPriceHandler = () => {
    dispatch({ type: "RESET_PRICE", payload: null });
  };

  let changeMinAreaHandler = (value) => {
    dispatch({ type: "CHANGE_MIN_AREA", payload: value });
    addAndUpdateMinFilter("area", value);
  };

  let addAndUpdateMaxFilter = (type, value) => {
    if (!filterLists.find((x) => x.type == type)) {
      addMaxFilter(type, value);
    } else {
      updateMaxFilter(type, value);
    }
  };

  let addAndUpdateMinFilter = (type, value) => {
    if (!filterLists.find((x) => x.type == type)) {
      addMinFilter(type, value);
    } else {
      updateMinFilter(type, value);
    }
  };

  let changeMaxAreaHandler = (value) => {
    console.log(value);
    if (value == "any") {
      dispatch({ type: "CHANGE_MAX_AREA", payload: 0 });
    } else {
      dispatch({ type: "CHANGE_MAX_AREA", payload: value });
    }
    addAndUpdateMaxFilter("area", value);
  };

  let changeAreaHandler = (e) => {
    dispatch({ type: "ADD_AREA", payload: e });
  };

  let resetAreaHandler = () => {
    dispatch({ type: "RESET_AREA", payload: null });
  };

  let statusHandler = (value) => {
    dispatch({ type: "ADD_STATUS", payload: value });
  };

  let changeBathsHandler = (value) => {
    if (!baths.find((x) => x == value) && value != "All") {
      dispatch({ type: "ADD_BATHS", payload: value });
      addAndUpdateBedsAndBathsFilter("baths", value);
    } else {
      let newBaths = [];
      if (value != "All") {
        newBaths = baths.filter((x) => x != value);
      }
      deleteBedsAndBathsHandler("baths", value);
      dispatch({ type: "RESET_BATHS", payload: newBaths });
      dispatch({
        type: "UPDATE_FILTERS",
        payload: filterLists.filter((x) => x.type != "baths"),
      });
    }
  };

  let changePurposeHandler = (value) => {
    dispatch({ type: "CHANGE_PURPOSE_TYPE", payload: value });
    dispatch({ type: "ADD_STATUS", payload: "All" });
  };

  let changeBedsHandler = (value) => {
    if (!beds.find((x) => x == value) && value != "All") {
      dispatch({ type: "ADD_BEDS", payload: value });
      addAndUpdateBedsAndBathsFilter("beds", value);
    } else {
      let newBeds = [];
      if (value != "All") {
        newBeds = beds.filter((x) => x != value);
      }
      deleteBedsAndBathsHandler("beds", value);
      dispatch({ type: "RESET_BEDS", payload: newBeds });
      dispatch({
        type: "UPDATE_FILTERS",
        payload: filterLists.filter((x) => x.type != "beds"),
      });
    }
  };

  let resetPropertyHandler = () => {
    dispatch({ type: "RESET_PROPERTY_TYPE", payload: { type: "", name: "" } });
  };

  let sortingHandler = (value) => {
    dispatch({ type: "UPDATE_SORTING", payload: value });
  };

  let propertyTypeHandler = (value) => {
    dispatch({ type: "ADD_PROPERTY_TYPE", payload: value });
  };

  let getDataByFilter = (data) => {
    let getDataBypurpose = filterByPurPose(data, purposeType);
    let getDataByBeds = filterByBeds(getDataBypurpose, beds);
    let getDataByPropertyType = filterByPropertyType(
      getDataByBeds,
      propertyType
    );
    let getDataByBaths = filterByBaths(getDataByPropertyType, baths);
    let getDataByPrice = filterByPrice(getDataByBaths, price);
    let getDataByArea = filterByArea(getDataByPrice, area);
    let getDataByStatus = filterByStatus(getDataByArea, status, purposeType);
    let getDataBySorting = filterBySorting(getDataByStatus, sortingType);
    let getDataBySearching = filterBySearching(
      getDataBySorting,
      selectMode,
      search
    );
    return getDataBySearching;
  };

  let showData = () => {
    let { datas } = state;
    let data = getDataByFilter(datas);
    if (!data.length) {
      return (
        <EmptyData title="Sorry, there are no active properties matching your criteria." />
      );
    }

    return <DataView datas={data} />;
  };
  return (
    <div>
      <div className="bg-dark sticky-top w-100 m-auto">
        <Container className={`${style.container_fix} text-dark `}>
          <Row>
            <Purpose
              changePurposeHandler={changePurposeHandler}
              purposeType={purposeType}
            />
            <Location
              search={search}
              searchHandler={searchHandler}
              getAllAddress={getAllAddress(datas, search)}
              selectAddressHandler={selectAddressHandler}
              selectMode={selectMode}
            />
            <PropertyType
              propertyTypeHandler={propertyTypeHandler}
              subtile={propertyType.propertyName}
              propertyType={propertyType}
              resetPropertyHandler={resetPropertyHandler}
            />
            <Price
              min={price.min}
              max={price.max}
              changeMinPriceHandler={changeMinPriceHandler}
              changeMaxPriceHandler={changeMaxPriceHandler}
              changePriceHandler={changePriceHandler}
              resetPriceHandler={resetPriceHandler}
            />
          </Row>

          <Row>
            <Beds beds={beds} changeBedsHandler={changeBedsHandler} />
            <Area
              min={area.min}
              max={area.max}
              changeMinAreaHandler={changeMinAreaHandler}
              changeMaxAreaHandler={changeMaxAreaHandler}
              changeAreaHandler={changeAreaHandler}
              resetAreaHandler={resetAreaHandler}
            />
            <Bath bathsHandler={changeBathsHandler} baths={baths} />
            <Keyword />
          </Row>
        </Container>
      </div>
      <Container className={`${style.container_fix} my-4`}>
        <Row>
          <FilterList
            filterLists={filterLists}
            removeFilterListHandler={removeFilterListHandler}
            resetAllFilters={resetAllFilters}
          />
        </Row>
        <Row className="my-3 d-flex justify-content-between">
          <Status
            purpose={purposeType}
            status={status}
            statusHandler={statusHandler}
          />
          <Sorting sortingHandler={sortingHandler} sortingType={sortingType} />
        </Row>

        <Row>{showData()}</Row>
      </Container>
    </div>
  );
}
