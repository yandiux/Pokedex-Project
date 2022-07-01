import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const PokeType = ({ pokemons, setfilterPokemon }) => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  const navigate = useNavigate();
  const clickCard = (e) => {
    const typeSelected = e.target.textContent;
    navigate(`/pokedex/type/${typeSelected}/`);
  };
  const [search, setSearch] = useState("");
  const handleChange = (h) => {
    h.preventDefault();
    setSearch(h.target.value);
    setfilterPokemon(filter(h.target.value));
  };
  const filter = (searchTerm) => {
    return pokemons?.filter((element) => {
      
       return (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
       
    });
    console.log(searchResult);
    setfilterPokemon(searchResult);
  };

  return (
    <article>
      <form>
        <input className="margin5"
          type="text"
          placeholder="Find your pokemon!"
          value={search}
          onChange={handleChange}
        />

        <Dropdown
          className="filterPos"
          isOpen={dropdown}
          toggle={openCloseDropdown}
        >
          <DropdownToggle className="filter">Pokemon Type</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={clickCard}>grass</DropdownItem>
            <DropdownItem onClick={clickCard}>fire</DropdownItem>
            <DropdownItem onClick={clickCard}>water</DropdownItem>
            <DropdownItem onClick={clickCard}>bug</DropdownItem>
            <DropdownItem onClick={clickCard}>normal</DropdownItem>
            <DropdownItem onClick={clickCard}>poison</DropdownItem>
            <DropdownItem onClick={clickCard}>fairy</DropdownItem>
            <DropdownItem onClick={clickCard}>rock</DropdownItem>
            <DropdownItem onClick={clickCard}>dark</DropdownItem>
            <DropdownItem onClick={clickCard}>ice</DropdownItem>
            <DropdownItem onClick={clickCard}>steel</DropdownItem>
            <DropdownItem onClick={clickCard}>dragon</DropdownItem>
            <DropdownItem onClick={clickCard}>ground</DropdownItem>
            <DropdownItem onClick={clickCard}>fighting</DropdownItem>
            <DropdownItem onClick={clickCard}>ghost</DropdownItem>
            <DropdownItem onClick={clickCard}>psychic</DropdownItem>
            <DropdownItem onClick={clickCard}>electric</DropdownItem>
            <DropdownItem onClick={clickCard}>flying</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </form>
    </article>
  );
};

export default PokeType;
