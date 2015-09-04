var $doc;

$doc = $(document);

$doc.bind('keypress', function(e) {
  play_note(e.which);
});

choose_chord();
