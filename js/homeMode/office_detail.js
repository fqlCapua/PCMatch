  //打开新页面
  $(".sub_info_btn").click(function() {
  var oid=String(parent.window.location).split("=")[1];
  console.log(oid);
  var url="index.html#/checkIn?oid="+oid;
  window.open(url);
});