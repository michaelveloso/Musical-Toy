//main program

var $doc;

$doc = $(document);

$doc.bind('keypress', function(e) {
  add_to_queue(String.fromCharCode(e.keyCode));
});

//set note set
choose_note_set(C_chord_note_set);
