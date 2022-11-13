import "./nav-bar.css";

import * as btnBack from "./../../icons/list-back-btn_icon.png";
import * as btnNext from "./../../icons/list-next-btn_icon.png";

//Calculates the number of list pages
const numberOfPages = (listSize, dataAmount) => {
    const res = parseInt(dataAmount / listSize);

    //If the result has a decimal fraction, the function returns result + 1 
    return dataAmount % listSize ? res + 1
        : res;
};

//Forms array of buttons for navigation bar
const createArray = (pages, currentListPage) => {
    //If current page number is in left part of navbar
    if (currentListPage < 5) return [1, 2, 3, 4, 5, "...", pages]  
    //If current page number is in right part of navbar 
    else if ((pages - currentListPage) < 4) return [1, "...", pages - 4, pages - 3, pages - 2, pages - 1, pages]
    //If current page number is in center part of navbar
    else return [1, "...", currentListPage - 1, currentListPage, currentListPage + 1, "...", pages] 
};

//Creates button for navigation bar
const createBtn = (clazz, item, onListPageSelect) => {
    return (
        <button 
            className={`list-page-btn ${clazz}`}
            key={item}
            onClick={() => onListPageSelect(item)}>
                {item}
        </button>
    );
};

//Describes and forms a navigation bar for list
const NavBar = ({currentListPage, listSize, dataAmount, onListPageSelect}) => {
    const pages = numberOfPages(listSize, dataAmount),
          buttons = (pages < 8) ? 
            //If buttons fit in the navbar (max number of pages is 7)
            (Array.apply(null, Array(pages)).map((item, index) => {
                const active = currentListPage === index + 1,
                    clazz = active ? "active-navbar-btn" : "";
                
                return createBtn(clazz, index+1, onListPageSelect)}))
            //If buttons do not fit in the navbar and it needs "..."
            : createArray(pages, currentListPage).map((item) => {
                const active = currentListPage === item,
                    clazz = active ? "active-navbar-btn" : "";
                    
                if(item === "...") return "..."
                else return createBtn(clazz, item, onListPageSelect)});

    return (
        <div className="navbar">
            <button 
                className="list-page-btn back-btn"
                onClick={() => onListPageSelect((currentListPage - 1) ? (currentListPage - 1 ) : currentListPage)}>
                    <img src={btnBack.default} alt="Back"/>
            </button>
            {buttons}
            <button 
                className="list-page-btn next-btn"
                onClick={() => onListPageSelect(((currentListPage + 1) <= pages) ? (currentListPage + 1 ) : currentListPage)}>
                    <img src={btnNext.default} alt="Next"/>
            </button>
        </div>
    );
};

export default NavBar;