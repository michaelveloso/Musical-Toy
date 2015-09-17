var play_note, get_random_note, add_to_queue, choose_note_set;

var c_chord_notes, f_chord_notes, current_note_set, note_queue;

var extendArray = function(array_1, array_2){
  for (i = 0; i < array_2.length; i++) {
      array_1.push(array_2[i]);
  }
  return array_1;
}

//make c_note_set
c_chord_all_inst = [piano_c3, piano_d3, piano_e3, piano_g3, piano_a3, piano_c4, piano_d4, piano_e4,
  piano_g4, piano_a4, piano_b4, piano_c5, piano_d5];

c_chord_piano = [piano_c3, piano_d3, piano_e3, piano_g3, piano_a3, piano_c4, piano_d4, piano_e4,
  piano_g4, piano_a4, piano_b4, piano_c5, piano_d5];

c_chord_harp = [harp_c3, harp_d3, harp_e3, harp_g3, harp_a3, harp_c4, harp_e4,
    harp_g4, harp_a4, harp_b4, harp_c5];

c_chord_cello = [cello_c2, cello_e2, cello_g2, cello_a2, cello_c3, cello_d3, cello_e3,
  cello_g3, cello_a3, cello_c4];

extendArray(extendArray(c_chord_all_inst, c_chord_harp), c_chord_cello);

//make f_note_set
f_chord_all_inst = [piano_f2, piano_a2, piano_c3, piano_d3, piano_e3, piano_f3, piano_g3, piano_a3,
  piano_b3, piano_c4, piano_d4, piano_e4, piano_f4];

f_chord_piano = [piano_f2, piano_a2, piano_c3, piano_d3, piano_e3, piano_f3, piano_g3, piano_a3,
  piano_b3, piano_c4, piano_d4, piano_e4, piano_g4];

f_chord_harp = [harp_f2, harp_a2, harp_c3, harp_d3, harp_e3, harp_g3, harp_a3,
    harp_b3, harp_c4, harp_e4, harp_g4];

f_chord_cello = [cello_f1, cello_c2, cello_f2, cello_a2, cello_c3, cello_d3,
  cello_e3, cello_f3, cello_g3, cello_b3];

extendArray(extendArray(f_chord_all_inst, f_chord_harp), f_chord_cello);

note_queue = [];

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
      note_queue.push(11);
      break;
    case '\\':
      note_queue.push(12);
      break;
    case 'a':
      note_queue.push(13);
      break;
    case 's':
      note_queue.push(14);
      break;
    case 'd':
      note_queue.push(15);
      break;
    case 'f':
      note_queue.push(16);
      break;
    case 'g':
      note_queue.push(17);
      break;
    case 'h':
      note_queue.push(18);
      break;
    case 'j':
      note_queue.push(19);
      break;
    case 'k':
      note_queue.push(20);
      break;
    case 'l':
      note_queue.push(21);
      break;
    case '\;':
      note_queue.push(22);
      break;
    case '\'':
      note_queue.push(23);
      break;
    case 'z':
      note_queue.push(24);
      break;
    case 'x':
      note_queue.push(25);
      break;
    case 'c':
      note_queue.push(26);
      break;
    case 'v':
      note_queue.push(27);
      break;
    case 'b':
      note_queue.push(28);
      break;
    case 'n':
      note_queue.push(29);
      break;
    case 'm':
      note_queue.push(30);
      break;
    case ',':
      note_queue.push(31);
      break;
    case '.':
      note_queue.push(32);
      break;
    case '/':
      note_queue.push(33);
      break;
    case ' ':
      get_random_note(current_note_set).trigger();
      break;
    default:
      // random_index = Math.floor(Math.random() * current_note_set.length);
      // note_queue.push(random_index);
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
