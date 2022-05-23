$(document).ready(function() {
  // video icon
  $(".player").each((k, val) => {
    const player = new Plyr(val);
  });
});