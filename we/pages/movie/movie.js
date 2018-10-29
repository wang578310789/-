// pages/movie/movie.js
const app = getApp();
const douban = app.globalData.doubanUrl;
import utils from "../../utils/utils";
const http = utils.http;

Page({
  data: {
    in_theaters:"in_theaters",
    coming_soon:"coming_soon",
    top250:"top250",
    us_box:"us_box"
  },
  onLoad(res){
  },
  onHot(res){
    var type = res.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../movie/movies/movies?type='+type
    })
  },
  onList(){
    wx.navigateTo({
      url: '../movie/list/list'
    })
  }
})