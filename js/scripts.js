var titleCase = function(raw){
  var sentence = raw.toLowerCase()
  var output = [];
  var exceptions = ["a", "an", "and", "the", "for", "but", "or", "of"];
  sentence.split(" ").forEach(function(word) {
    if ((exceptions.indexOf(word) === -1) || (sentence.split(" ")[0] === word)){
      var word_out = (word[0].toUpperCase()).concat(word.slice(1));
    }
    else {
      var word_out = word;
    };
    output.push(word_out);
  });
  return output.join(" ");

};

$(document).ready(function() {
  $("form#title-case").submit(function(event) {
    debugger;
    var title = $('input#title').val();
    var output = titleCase(title);


    $(".titleized_title").text(output);

    $('#results').show();

    event.preventDefault();
  });
});
