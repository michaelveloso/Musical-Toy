var play_note, get_random_note, add_to_queue, choose_note_set;

var C_chord_notes, current_note_set, note_queue, piano_phase;

C_chord_note_set = [piano_c3, piano_d3, piano_e3, piano_g3, piano_a3, piano_c4, piano_d4, piano_e4,
  piano_g4, piano_a4, piano_b4, piano_c5];

piano_phase = [piano_d3, piano_e3, piano_a3, piano_b3, piano_c4, piano_e3, piano_d3, piano_b3,
  piano_a3, piano_e3, piano_c4, piano_b3]

note_queue = []

add_to_queue = function(key_pressed) {
  note_queue.push(key_pressed);
}

play_from_queue = function() {
  note_to_play = note_queue.shift();
  if (note_to_play != undefined){
    play_note(note_to_play);
  };
}

play_note = function(key_pressed) {
  // alert(key_pressed);
  // _.sample(C_chord_notes)
  switch(key_pressed) {
    case 'q':
      current_note_set[0].play();
      break;
    case 'w':
      current_note_set[1].play();
      break;
    case 'e':
      current_note_set[2].play();
      break;
    case 'r':
      current_note_set[3].play();
      break;
    case 't':
      current_note_set[4].play();
      break;
    case 'y':
      current_note_set[5].play();
      break;
    case 'u':
      current_note_set[6].play();
      break;
    case 'i':
      current_note_set[7].play();
      break;
    case 'o':
      current_note_set[8].play();
      break;
    case 'p':
      current_note_set[9].play();
      break;
    case '[':
      current_note_set[10].play();
      break;
    case ']':
      current_note_set[11].play();
      break;
    case ' ':
      get_random_note(current_note_set).play();
      // alert(key_pressed);
  }
}

get_random_note = function(note_set) {
  random_index = Math.floor(Math.random() * note_set.length);
  note_picked = note_set[random_index];
  return note_picked;
}

choose_note_set = function(note_set){
  current_note_set = note_set;
};

get_next_note = function(queue) {

}
