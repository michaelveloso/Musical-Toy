//main program

var $doc;

$doc = $(document);

$doc.bind('keypress', function(e) {
  add_to_queue(String.fromCharCode(e.keyCode));
});

//set note set
choose_note_set(C_chord_note_set);

//default - set timer to play every eighth note
timer.start(function() {
  note_queue.play_from_queue();
}, ms_per_eighth)
