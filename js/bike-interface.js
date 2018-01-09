$(document).ready(function() {

  $("#frame-color").submit(function(event) {
    event.preventDefault();

    const color = $("#color").val();

    let request = new XMLHttpRequest();
    let url = `https://bikeindex.org:443/api/v3/search?per_page=25&location=IP&distance=10&stolenness=stolen&frame_colors=${color}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      console.log(response);
      response.bikes.forEach(function(bike) {
        $("#result").prepend("<li>" + bike.date_stolen + "</li>");
      });
    };
  });
});
