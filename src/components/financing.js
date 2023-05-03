import React, { useState } from "react";
import "./style.css";

const FinanceComponent = ({ data }) => {
  return (
    <>
      <div
        className="row p-5 text-center mt-5 my-5 text-white"
        style={{
          fontFamily: "Oxygen ,sans-serif!important",
          direction: "ltr",
          backgroundColor: "#40465a",
        }}
      >
        <div className="p-5 col-sm-7 mt-5 my-5">
          {" "}
          <h4 className="display-5 mt-5 my-5" style={{ fontWeight: "bold" }}>
            {data.financeSt}
          </h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-quote quates"
            viewBox="0 0 16 16"
          >
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
          </svg>{" "}
          <h6
            className=" mt-1"
            style={{ fontSize: "120%", fontWeight: "bold" }}
          >
            {data.financeDis}
          </h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-quote quates2"
            viewBox="0 0 16 16"
          >
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
          </svg>{" "}
        </div>
        <div className="p-4 col-sm-5">
          <img
            style={{ height: "auto", maxWidth: "100%" }}
            src="https://osoulmodern.com/wp-content/uploads/2022/07/faq-3d.png"
            alt="finance image"
          />
        </div>
      </div>
    </>
  );
};
export default FinanceComponent;
