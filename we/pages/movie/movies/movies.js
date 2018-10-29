
Page({
  data: {

  },
  onLoad(res) {
    var type = res.type
    wx.request({
      url: `https://douban.uieee.com/v2/movie/${type}`,
      header: {
        'Content-Type': 'json'
      },
      success:res=>{
        var subjects = res.data.subjects;
        var Title = res.data.title;
        var movies = [];
        subjects.forEach(ele => {
          var imgUrl = ele.images.small;
          var title = ele.title;
          var id = ele.id;
          var year = ele.year;
          var name = ele.directors[0].name;
          var average = ele.rating.average;
          var temp = {
            imgUrl,
            title,
            id,
            year,
            name,
            average
          }
          movies.push(temp);
        });
        this.setData({
          movies,
          Title
        })
      }
    })
  },
  onClicked(res){
    var id = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movies/movie-item/movie-item?id='+id
    });
  }
})