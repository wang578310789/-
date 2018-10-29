import utils from "../../utils/utils";
const http = utils.http;
const director =utils.director;
Page({

  data: {

  },
  onConfirm(e) {
    var count = e.detail.value;
    var url = `https://douban.uieee.com/v2/movie/search?q=${count}`;
    http(url, this.handleData);
  },
  handleData(res) {
    console.log(res)
    var subjects = res.data.subjects;
    var movies = [];
    subjects.forEach(ele => {
      var imgUrl = ele.images.small;
      var title = ele.title;
      var id = ele.id;
      var year = ele.year;
      var average = ele.rating.average;
      var name = director(ele.directors[0]);
      var temp = {
        imgUrl,
        title,
        id,
        year,
        average,
        name
      }
      movies.push(temp);
    });
    this.setData({
      movies
    })
  },
  onSearch(res){
    var id = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie/movies/movie-item/movie-item?id='+id
    });
  }
})