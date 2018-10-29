function http(url,callback,type){
    wx.request({
        url,
        header: {
            'Content-Type': 'json'
        },
        success: function(res) {
            callback(res,type);
        }
    });
}
function sliceTitle(title){
    if(title.length>6){
        title=title.slice(0,6)+"…";
    }
    return title;
}
function star(stars){
    var value = stars.slice(0,1);
    var arr = [];
    for(let i=0;i<5;i++){
        if(i<value){
            arr.push(1);
        }else{
            arr.push(0);
        }
    }
    return arr;
}
function handleCasts(casts){
    var arr = [];
    casts.forEach(ele=>{
        arr.push(ele.name);
    })
    var newArr = arr.join("/");
    return newArr;
}
function handleGenres(genres){
    var genres = genres.join("、");
    return genres;
}
function director(directors){
    if(directors){
        return directors.name
    } else {return "无"}
}

function handleData(res) {
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
export default{
    http,
    star,
    sliceTitle,
    handleCasts,
    handleGenres,
    handleData,
    director
}
