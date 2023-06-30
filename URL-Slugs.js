function urlSlug(title) {
  let arr = title.toLowerCase().split(" ").filter(function (word){
    return word !== "";
}).join("-");
  console.log(arr);
  return arr;
} 
