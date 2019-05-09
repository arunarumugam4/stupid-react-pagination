import React from 'react';
import { Pagination } from "react-bootstrap";


const CommonPagination = ({activePage, size, totalItems,handlePagination}) => {
    const paginationItems = getPaginationItems(activePage, size, totalItems, handlePagination)
    return (
        <div>
            {paginationItems}
        </div>
    );
}

export default CommonPagination;

function getPaginationItems(activePage, size, totalItems, handlePagination){
    
    let maxPage = Math.ceil(totalItems/size);
    let pages = [];

    if(totalItems <= size){
        return null;
    }

  
    for(let page = 0; page < maxPage; page++){
      let number = page +1;
      pages.push(
        <Pagination.Item
          key={number}
          onClick={() => handlePagination(number)}
          active={number === activePage}
        >
          {number}
        </Pagination.Item>
      );
    }

    let offset = 0;
    offset = Math.floor(activePage/5) * 5
    if(offset){
      offset -=2;
    }

    pages = pages.splice(offset, 7)
    

    if(activePage > 1){
      pages.unshift(
        <Pagination.Item
        key={'<'}
        onClick={() => handlePagination(activePage - 1)}
      >
        {'<'}
      </Pagination.Item>
       )
       pages.unshift(
        <Pagination.Item
        key={'<<'}
        onClick={() => handlePagination(1)}
      >
        {'<<'}
      </Pagination.Item>
       )
    }

    if(activePage < maxPage){
      pages.push(
        <Pagination.Item
        key={'>'}
        onClick={() => handlePagination(activePage + 1)}
      >
        {'>'}
      </Pagination.Item>
       )
       pages.push(
        <Pagination.Item
        key={'>>'}
        onClick={() => handlePagination(maxPage)}
      >
        {'>>'}
      </Pagination.Item>
       )
    }

    const paginationBasic = (
      <div>
        <Pagination style={{ margin: 0 }}> {pages}</Pagination>
        <br />
      </div>
    );

    return paginationBasic;

  };