import React ,{useState,useEffect}from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
const News =(props)=> {
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalarticle, setTotalarticle] = useState(0)
  
  
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const UpdateNews=async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=3d3d3c5f702449e784a1d1459d17318b&page=${page}&pageSize=20`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parsedata = await data.json();
    props.setProgress(70);
    setArticles(parsedata.articles)
    setTotalarticle( parsedata.totalResults)
    setLoading(false)
    // setPage(page+1)
    props.setProgress(100);
  }
  useEffect(() => {
    document.title = `DailyDose-${capitalizeFirstLetter(props.category)}`;
    UpdateNews();
  }, [])
  


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=3d3d3c5f702449e784a1d1459d17318b&page=${page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setPage(page+1)
    setArticles(articles.concat(parsedata.articles))
    setTotalarticle( parsedata.totalResults)
  };

 return (
      <>
        <h2 className="text-center">DailyDose - HeadLines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalarticle}
          loader={<Spinner />}
          >
          <div className="container">
            <div className="row">
              {articles.map((Element) => {
                return (
                  <div className="col-md-3 mx-4" key={Element.url}>
                    <NewsItem
                      tittle={Element.title ? Element.title : " "}
                      description={
                        Element.description ? Element.description : " "
                      }
                      imgurl={Element.urlToImage}
                      url={Element.url}
                      name={Element.source.name}
                      author={Element.author}
                      timeD={Element.publishedAt}
                      />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
 );
}
export default News;

News.defaultProps = {
  category: "general",
};

News.propTypes = {
  category: PropTypes.string,
};