var play_note, get_random_note, add_to_queue, choose_note_set;

var C_chord_notes, current_note_set, note_queue, piano_phase;

C_chord_note_set = [piano_c3, piano_d3, piano_e3, piano_g3, piano_a3, piano_c4, piano_d4, piano_e4,
  piano_g4, piano_a4, piano_b4, piano_c5];

piano_phase = [piano_d3, piano_e3, piano_a3, piano_b3, piano_c4, piano_e3, piano_d3, piano_b3,
  piano_a3, piano_e3, piano_c4, piano_b3]

note_queue = []

// add_to_queue = function(key_pressed) {
//   note_queue.push(key_pressed);
// }

add_to_queue = function(key_pressed) {
  switch(key_pressed) {
    case 'q':
      note_queue.push(0);
      break;
    case 'w':
      note_queue.push(1);
      break;
    case 'e':
      note_queue.push(2);
      break;
    case 'r':
      note_queue.push(3);
      break;
    case 't':
      note_queue.push(4);
      break;
    case 'y':
      note_queue.push(5);
      break;
    case 'u':
      note_queue.push(6);
      break;
    case 'i':
      note_queue.push(7);
      break;
    case 'o':
      note_queue.push(8);
      break;
    case 'p':
      note_queue.push(9);
      break;
    case '[':
      note_queue.push(10);
      break;
    case ']':
      note_queue.push(10);
      break;
    case ' ':
      get_random_note(current_note_set).trigger();
      break;
    default:
      random_index = Math.floor(Math.random() * current_note_set.length);
      note_queue.push(random_index);
      // alert(key_pressed);
  }
}

note_queue.play_from_queue = function() {
  scale_degree = note_queue.shift();
  if (scale_degree != undefined){
    current_note_set[scale_degree].trigger();
  };
}

get_random_note = function(note_set) {
  random_index = Math.floor(Math.random() * note_set.length);
  note_picked = note_set[random_index];
  return note_picked;
}

choose_note_set = function(note_set){
  current_note_set = note_set;
};
