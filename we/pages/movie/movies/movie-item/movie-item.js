// pages/movie/movie-item/movie-item.js
import utils from "../../../../utils/utils";
const http = utils.http;
const handleCasts = utils.handleCasts;
Page({
  data: {

  },
  onLoad(res) {
    var id = res.id;
    var url = `https://douban.uieee.com/v2/movie/subject/`+id;
    http(url,this.handleData)
  },
  handleData(res){
    var imgUrl = res.data.images.small;
    var title = res.data.title;
    var year = res.data.year;
    var average = res.data.rating.average;
    var name = res.data.directors[0].name;
    var castsName = handleCasts(res.data.casts);
    var summary = res.data.summary;
    this.setData({
      imgUrl,
      title,
      year,
      average,
      name,
      castsName,
      summary
    })
  }
})