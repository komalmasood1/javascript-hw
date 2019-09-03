// Assign the data to ufos
var ufos = data

// Generate the initial grid when the page loads
var tbody = d3.select("tbody");
ufos.forEach(function(alien) {
    console.log(alien);
    var row = tbody.append("tr");
    Object.entries(alien).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
   });

var button = d3.select("#filter-btn");

button.on("click", function() {

// d3.event.PreventDefault();
d3.select("tbody")
.selectAll("tr").remove()
.selectAll("td").remove();
// Select the input element and get the raw HTML node
var date_selected = d3.select("#datetime").property("value");

var filteredufos = ufos.filter(ufo => ufo.datetime === date_selected);

console.log(filteredufos);

// Extract date
var ufo_date = filteredufos.map(function(ufo_set){
    return ufo_set.datetime;
})
console.log(ufo_date);

// Extract city
var ufo_city = filteredufos.map(function(ufo_set){
    return ufo_set.city;
})
console.log(ufo_city);

var ufo_state = filteredufos.map(function(ufo_set){
    return ufo_set.state;
})
console.log(ufo_state);

var ufo_country = filteredufos.map(function(ufo_set){
    return ufo_set.country;
})
console.log(ufo_country);

var ufo_shape = filteredufos.map(function(ufo_set){
    return ufo_set.shape;
})
console.log(ufo_shape);

var ufo_duration = filteredufos.map(function(ufo_set){
    return ufo_set.durationMinutes;
})
console.log(ufo_duration);

var ufo_comments = filteredufos.map(function(ufo_set){
    return ufo_set.comments;
})
console.log(ufo_comments);


// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");


for (var i = 0; i < filteredufos.length; i++) {
    // Append one table row `tr` to the table body
    var row = tbody.append("tr");    

    row.append("td").text(ufo_date[i]);
    row.append("td").text(ufo_city[i]);
    row.append("td").text(ufo_state[i]);
    row.append("td").text(ufo_country[i]);
    row.append("td").text(ufo_shape[i]);
    row.append("td").text(ufo_duration[i]);
    row.append("td").text(ufo_comments[i]);
}
console.log(length.filteredufos);

})