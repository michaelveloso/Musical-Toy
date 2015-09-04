var $doc;

$doc = $(document);

$doc.bind('keypress', function(e) {
  add_to_queue(String.fromCharCode(e.keyCode));
});

choose_note_set(C_chord_note_set);
