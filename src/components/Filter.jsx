import { useState, useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filter() {
  const { filters, setFilters } = useFilters();
  const minPriceFileId = useId();
  const categoryFileId = useId();

  const handleCahngeMinprice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minprice: event.target.value,
    }));
  };

  const handleChangeCaterogy = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFileId}></label>
        <input
          type="range"
          id={minPriceFileId}
          max={1000}
          min={0}
          onChange={handleCahngeMinprice}
          value={filters.minprice}
        ></input>
        <span> {filters.minprice} </span>
      </div>
      <div>
        <label htmlFor={categoryFileId}>Category</label>
        <select name="" id={categoryFileId} onChange={handleChangeCaterogy}>
          <option value="all">Todas</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
    </section>
  );
}
