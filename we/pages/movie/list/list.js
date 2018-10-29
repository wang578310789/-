Page({
  data: {

  },
  onLoad:function(options){
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/us_box',
      header: {
        'Content-Type': 'json'
      },
      success:res=>{
        var subjects = res.data.subjects;
        var Title = res.data.title;
        var movies = [];
        subjects.forEach(ele => {
          var imgUrl = ele.subject.images.small;
          var title = ele.subject.title;
          var id = ele.subject.id;
          var year = ele.subject.year;
          var name = ele.subject.directors[0].name;
          var average = ele.subject.rating.average;
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
  onListed(res){
    var id = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../list/list-item/list-item?id='+id
    })
  }
})