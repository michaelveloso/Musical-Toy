var play_note, get_random_note, choose_chord;

var C_chord_notes, current_chord, note_queue;

C_chord_notes = [piano_c3, piano_d3, piano_e3, piano_g3, piano_a3, piano_c4, piano_d4, piano_e4,
  piano_g4, piano_a4, piano_b4, piano_c5];

note_queue = []


play_note = function(key_pressed) {
  // alert(key_pressed);
  // _.sample(C_chord_notes)
  switch(key_pressed) {
    case 113:
      current_chord[0].play();
      break;
    case 119:
      current_chord[1].play();
      break;
    case 101:
      current_chord[2].play();
      break;
    case 114:
      current_chord[3].play();
      break;
    case 116:
      current_chord[4].play();
      break;
    case 121:
      current_chord[5].play();
      break;
    case 117:
      current_chord[6].play();
      break;
    case 105:
      current_chord[7].play();
      break;
    case 111:
      current_chord[8].play();
      break;
    case 112:
      current_chord[9].play();
      break;
    case 91:
      current_chord[10].play();
      break;
    case 93:
      current_chord[11].play();
      break;
    default:
      get_random_note(current_chord).play();
      // alert(key_pressed);
  }
}

get_random_note = function(note_set) {
  random_index = Math.floor(Math.random() * note_set.length);
  note_picked = note_set[random_index];
  return note_picked;
}

choose_chord = function(){
  current_chord = C_chord_notes;
};

get_next_note = function(queue) {

}

choose_chord();
