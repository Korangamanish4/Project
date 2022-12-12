import React, { useState, useEffect } from "react";
import "./Page.css";

const userAPI = "https://jsonplaceholder.typicode.com/photos?albumId=1"

const Page1 = () => {

  const [pinnedData, setPinnedData] = useState(true);
  const [mostViewedData, setMostViewedData] = useState(false);
  const [data, setData] = useState([])
  const ele = document.getElementById("cont");
  
  useEffect(() => {
    getData(userAPI)
}, []) 

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
};

const mouseDownHandler = function (e) {
  pos = {
    // The current scroll
    left: ele.scrollLeft,
    top: ele.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
};

document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);
};

if(ele){
  ele.addEventListener('mousedown', mouseDownHandler)
}

// const slider = document.querySelector(".cardsContainer");
// let isDown = false;
// let startX;
// let scrollLeft;

// if(slider){
// slider.addEventListener("mousedown", e => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = x - startX;
//   slider.scrollLeft = scrollLeft - walk;
// });
// }

const getData = async (url) => {
    try {
        const res = await fetch(url)
        const value = await res.json()
        console.log("VALUE ", value)
        setData(value)
    } catch (error) {
        console.log("ERROR ", error)
    }
}

  return (
    <div className="containerPage1">
      {pinnedData ? (
        <section id="cont" className="cardsContainer">
        {data.map((item) => {
          return (
            <div className="cardsPage1">
             {item.title}
          </div>
          )
        })}
         </section>
      ) : (
        <>
          <section className="section1Page1">
            <h4>Pinned Analysis (0)</h4>
            <span>You Don't have anything pinned yet.</span>
            <span>Search to find cards you want to pin. Once</span>
            <span>you start pinning cards, they will appear here.</span>
          </section>
        </>
      )}
      {mostViewedData ? (
        ""
      ) : (
        <>
          <section className="section2Page1">
            <h4>Most Viewed Analysis</h4>
            <span>No data available</span>
          </section>
        </>
      )}
    </div>
  );
};

export default Page1;
