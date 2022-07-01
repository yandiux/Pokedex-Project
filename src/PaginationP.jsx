import React, { useState } from "react";
const Pagination = ({ page, setPage, max }) => {
  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  };
  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  };
  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      setPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(max) ||
        isNaN(e.target.value)
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <article className="pagination">
      <button
        disabled={page === 1}
        className="previousPage"
        onClick={previousPage}
      >
        <i class="fa-solid fa-angle-left fa-2x"></i>
      </button>
      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
        className="inputPage"
        type="text"
      />
      <p className="counterPage">de {Math.ceil(max)}</p>
      <button
        disabled={page === Math.ceil(max)}
        className="nextPage"
        onClick={nextPage}
      >
        <i class="fa-solid fa-angle-right fa-2x"></i>
      </button>
    </article>
  );
};
export default Pagination;
