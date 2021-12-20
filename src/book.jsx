import HTMLFlipBook from "react-pageflip";
import Head from "./head";
import React, { useEffect, useState } from "react";
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image">
          <img src="" alt="" />
        </div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});
const Book = () => {
  const [page, setpage] = useState(0)
  const [totalPage, settotalPage] = useState(0)

  return (
    <div>
      
      <HTMLFlipBook
        width={300}
        height={500}
        showCover={true}
        maxShadowOpacity={0.5}
        drawShadow={true}
      >
        <PageCover>BOOK TITLE</PageCover>
        <Page number={1}><Head/></Page>
        <Page number={2}>Lorem ipsum...</Page>
        <Page number={3}>Lorem ipsum...</Page>
        <Page number={4}>Lorem ipsum...</Page>
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
     
    </div>
  );
};

export default Book;
