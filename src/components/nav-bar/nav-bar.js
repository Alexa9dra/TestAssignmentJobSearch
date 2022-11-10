import './nav-bar.css';

import * as btnBack from "./../../icons/list-back-btn_icon.png";
import * as btnNext from "./../../icons/list-next-btn_icon.png";

const amountOfPages = (listSize, dataAmount) => {
    const res = parseInt(dataAmount / listSize);

    return dataAmount % listSize ? res + 1
        : res;
}

const createArray = (pages, currentListPage) => {
    if ((currentListPage - 1) < 4) return [1, 2, 3, 4, 5, '...', pages] 
    else if ((pages - currentListPage) < 4) return [1, '...', pages - 4, pages - 3, pages - 2, pages - 1, pages]
    else return [1, '...', currentListPage - 1, currentListPage, currentListPage + 1, '...', pages] 
}

const createBtn = (clazz, item, onListPageSelect) => {
    return (<button 
        className={`list-page-btn ${clazz}`}
        key={item}
        onClick={() => onListPageSelect(item)}>
            {item}
    </button>);
}

const NavBar = ({currentListPage, listSize, dataAmount, onListPageSelect}) => {
    const pages = amountOfPages(listSize, dataAmount),
          buttons = (pages < 8) ? (Array.apply(null, Array(pages))
            .map((item, index) => {
                const active = currentListPage === index + 1,
                    clazz = active ? 'active-navbar-btn' : '';
                
                return createBtn(clazz, index+1, onListPageSelect)}))
            : createArray(pages, currentListPage).map((item) => {
                const active = currentListPage === item,
                    clazz = active ? 'active-navbar-btn' : '';
                if(item === '...') return '...'
                else return createBtn(clazz, item, onListPageSelect)});

    return (
        <div className='btn-group'>
            <button 
                className='list-page-btn back-btn'
                onClick={() => onListPageSelect((currentListPage - 1) ? (currentListPage - 1 ) : currentListPage)}>
                    <img src={btnBack.default} alt="Back"/>
            </button>
            {buttons}
            <button 
                className='list-page-btn next-btn'
                onClick={() => onListPageSelect(((currentListPage + 1) <= pages) ? (currentListPage + 1 ) : currentListPage)}>
                    <img src={btnNext.default} alt="Next"/>
            </button>
        </div>
    );
}

export default NavBar;