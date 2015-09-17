//main program

var $doc;

$doc = $(document);

$doc.bind('keypress', function(e) {
  add_to_queue(String.fromCharCode(e.keyCode));
});

//set note set
set_key(key_of_c);
