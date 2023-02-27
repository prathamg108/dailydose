import React from "react";
const NewsItem = (props) => {
  let { tittle, description, imgurl, url, name, author, timeD } = props;
  return (
    <>
      <div className="card my-5">
        <div className="card-body">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger "
            style={{ left: "85%" }}
          >
            {name}
          </span>
          <img
            src={
              imgurl
                ? imgurl
                : "https://www.switchingtomac.com/wp-content/uploads/2021/04/Featured-How-to-Fix-An-Error-Occurred-While-Loading-a-Higher-Quality-Version-of-This-Photo-on-iPhone.jpg"
            }
            className="card-img-top"
            alt={imgurl}
          />

          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{description}</p>
          <p>
            Published by {author ? author : "Unknown"} on{" "}
            {new Date(timeD).toGMTString()}
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
