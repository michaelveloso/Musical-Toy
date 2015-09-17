var construct_note = function(audiofile) {
  audiofile.volume = .7;
  note = {
    file: audiofile,
    trigger: function(){
            this.file.play();
          }
  }
  return note;
}

var construct_chord = function(audiofile) {
  audiofile.volume = .5;
  chord = {
    file: audiofile,
    trigger: function(){
            this.file.play();
          }
  }
  return chord;
}

var piano_f2_audiofile, piano_g2_audiofile, piano_a2_audiofile, piano_b2_audiofile, piano_c3_audiofile, piano_d3_audiofile, piano_e3_audiofile, piano_f3_audiofile, piano_g3_audiofile,
  piano_a3_audiofile, piano_b3_audiofile, piano_c4_audiofile, piano_d4_audiofile, piano_e4_audiofile, piano_f4_audiofile, piano_g4_audiofile, piano_a4_audiofile,
  piano_b4_audiofile, piano_c5_audiofile;

var piano_f2, piano_g2, piano_a2, piano_b2, piano_c3, piano_d3, piano_e3, piano_f3, piano_g3,
    piano_a3, piano_b3, piano_c4, piano_d4, piano_e4, piano_f4, piano_g4, piano_a4, piano_b4,
    piano_c5, piano_d5;

piano_f2_audiofile = new Audio('../audio_files/piano_samples/piano_f2.mp3');
piano_g2_audiofile = new Audio('../audio_files/piano_samples/piano_g2.mp3');
piano_a2_audiofile = new Audio('../audio_files/piano_samples/piano_a2.mp3');
piano_b2_audiofile = new Audio('../audio_files/piano_samples/piano_b2.mp3');
piano_c3_audiofile = new Audio('../audio_files/piano_samples/piano_c3.mp3');
piano_d3_audiofile = new Audio('../audio_files/piano_samples/piano_d3.mp3');
piano_e3_audiofile = new Audio('../audio_files/piano_samples/piano_e3.mp3');
piano_f3_audiofile = new Audio('../audio_files/piano_samples/piano_f3.mp3');
piano_g3_audiofile = new Audio('../audio_files/piano_samples/piano_g3.mp3');
piano_a3_audiofile = new Audio('../audio_files/piano_samples/piano_a3.mp3');
piano_b3_audiofile = new Audio('../audio_files/piano_samples/piano_b3.mp3');
piano_c4_audiofile = new Audio('../audio_files/piano_samples/piano_c4.mp3');
piano_d4_audiofile = new Audio('../audio_files/piano_samples/piano_d4.mp3');
piano_e4_audiofile = new Audio('../audio_files/piano_samples/piano_e4.mp3');
piano_f4_audiofile = new Audio('../audio_files/piano_samples/piano_f4.mp3');
piano_g4_audiofile = new Audio('../audio_files/piano_samples/piano_g4.mp3');
piano_a4_audiofile = new Audio('../audio_files/piano_samples/piano_a4.mp3');
piano_b4_audiofile = new Audio('../audio_files/piano_samples/piano_b4.mp3');
piano_c5_audiofile = new Audio('../audio_files/piano_samples/piano_c5.mp3');
piano_d5_audiofile = new Audio('../audio_files/piano_samples/piano_d5.mp3');

piano_f2 = construct_note(piano_f2_audiofile);
piano_g2 = construct_note(piano_g2_audiofile);
piano_a2 = construct_note(piano_a2_audiofile);
piano_b2 = construct_note(piano_b2_audiofile);
piano_c3 = construct_note(piano_c3_audiofile);
piano_d3 = construct_note(piano_d3_audiofile);
piano_e3 = construct_note(piano_e3_audiofile);
piano_f3 = construct_note(piano_f3_audiofile);
piano_g3 = construct_note(piano_g3_audiofile);
piano_a3 = construct_note(piano_a3_audiofile);
piano_b3 = construct_note(piano_b3_audiofile);
piano_c4 = construct_note(piano_c4_audiofile);
piano_d4 = construct_note(piano_d4_audiofile);
piano_e4 = construct_note(piano_e4_audiofile);
piano_f4 = construct_note(piano_f4_audiofile);
piano_g4 = construct_note(piano_g4_audiofile);
piano_a4 = construct_note(piano_a4_audiofile);
piano_b4 = construct_note(piano_b4_audiofile);
piano_c5 = construct_note(piano_c5_audiofile);
piano_d5 = construct_note(piano_d5_audiofile);

var harp_f2_audiofile, harp_g2_audiofile, harp_a2_audiofile, harp_b2_audiofile, harp_c3_audiofile, harp_d3_audiofile, harp_e3_audiofile, harp_f3_audiofile, harp_g3_audiofile,
  harp_a3_audiofile, harp_b3_audiofile, harp_c4_audiofile, harp_d4_audiofile, harp_e4_audiofile, harp_f4_audiofile, harp_g4_audiofile, harp_a4_audiofile,
  harp_b4_audiofile, harp_c5_audiofile;

var harp_f2, harp_g2, harp_a2, harp_b2, harp_c3, harp_d3, harp_e3, harp_f3, harp_g3,
    harp_a3, harp_b3, harp_c4, harp_d4, harp_e4, harp_f4, harp_g4, harp_a4, harp_b4,
    harp_c5, harp_d5;

harp_f2_audiofile = new Audio('../audio_files/harp_samples/harp_f2.mp3');
harp_g2_audiofile = new Audio('../audio_files/harp_samples/harp_g2.mp3');
harp_a2_audiofile = new Audio('../audio_files/harp_samples/harp_a2.mp3');
harp_b2_audiofile = new Audio('../audio_files/harp_samples/harp_b2.mp3');
harp_c3_audiofile = new Audio('../audio_files/harp_samples/harp_c3.mp3');
harp_d3_audiofile = new Audio('../audio_files/harp_samples/harp_d3.mp3');
harp_e3_audiofile = new Audio('../audio_files/harp_samples/harp_e3.mp3');
harp_f3_audiofile = new Audio('../audio_files/harp_samples/harp_f3.mp3');
harp_g3_audiofile = new Audio('../audio_files/harp_samples/harp_g3.mp3');
harp_a3_audiofile = new Audio('../audio_files/harp_samples/harp_a3.mp3');
harp_b3_audiofile = new Audio('../audio_files/harp_samples/harp_b3.mp3');
harp_c4_audiofile = new Audio('../audio_files/harp_samples/harp_c4.mp3');
harp_d4_audiofile = new Audio('../audio_files/harp_samples/harp_d4.mp3');
harp_e4_audiofile = new Audio('../audio_files/harp_samples/harp_e4.mp3');
harp_f4_audiofile = new Audio('../audio_files/harp_samples/harp_f4.mp3');
harp_g4_audiofile = new Audio('../audio_files/harp_samples/harp_g4.mp3');
harp_a4_audiofile = new Audio('../audio_files/harp_samples/harp_a4.mp3');
harp_b4_audiofile = new Audio('../audio_files/harp_samples/harp_b4.mp3');
harp_c5_audiofile = new Audio('../audio_files/harp_samples/harp_c5.mp3');
harp_d5_audiofile = new Audio('../audio_files/harp_samples/harp_d5.mp3');

harp_f2 = construct_note(harp_f2_audiofile);
harp_g2 = construct_note(harp_g2_audiofile);
harp_a2 = construct_note(harp_a2_audiofile);
harp_b2 = construct_note(harp_b2_audiofile);
harp_c3 = construct_note(harp_c3_audiofile);
harp_d3 = construct_note(harp_d3_audiofile);
harp_e3 = construct_note(harp_e3_audiofile);
harp_f3 = construct_note(harp_f3_audiofile);
harp_g3 = construct_note(harp_g3_audiofile);
harp_a3 = construct_note(harp_a3_audiofile);
harp_b3 = construct_note(harp_b3_audiofile);
harp_c4 = construct_note(harp_c4_audiofile);
harp_d4 = construct_note(harp_d4_audiofile);
harp_e4 = construct_note(harp_e4_audiofile);
harp_f4 = construct_note(harp_f4_audiofile);
harp_g4 = construct_note(harp_g4_audiofile);
harp_a4 = construct_note(harp_a4_audiofile);
harp_b4 = construct_note(harp_b4_audiofile);
harp_c5 = construct_note(harp_c5_audiofile);
harp_d5 = construct_note(harp_d5_audiofile);

var cello_f1_audiofile, cello_g1_audiofile, cello_a1_audiofile, cello_b1_audiofile, cello_c2_audiofile,
  cello_d2_audiofile, cello_e2_audiofile, cello_f2_audiofile, cello_g2_audiofile, cello_a2_audiofile,
  cello_b2_audiofile, cello_c3_audiofile, cello_d3_audiofile, cello_e3_audiofile, cello_f3_audiofile,
  cello_g3_audiofile, cello_a3_audiofile, cello_b3_audiofile, cello_c4_audiofile;

var cello_f1, cello_g1, cello_a1, cello_b1, cello_c2,
  cello_d2, cello_e2, cello_f2, cello_g2, cello_a2,
  cello_b2, cello_c3, cello_d3, cello_e3, cello_f3,
  cello_g3, cello_a3, cello_b3, cello_c4;

cello_f1_audiofile = new Audio('../audio_files/cello_samples/cello_f1.mp3');
cello_g1_audiofile = new Audio('../audio_files/cello_samples/cello_g1.mp3');
cello_a1_audiofile = new Audio('../audio_files/cello_samples/cello_a1.mp3');
cello_b1_audiofile = new Audio('../audio_files/cello_samples/cello_b1.mp3');
cello_c2_audiofile = new Audio('../audio_files/cello_samples/cello_c2.mp3');
cello_d2_audiofile = new Audio('../audio_files/cello_samples/cello_d2.mp3');
cello_e2_audiofile = new Audio('../audio_files/cello_samples/cello_e2.mp3');
cello_f2_audiofile = new Audio('../audio_files/cello_samples/cello_f2.mp3');
cello_g2_audiofile = new Audio('../audio_files/cello_samples/cello_g2.mp3');
cello_a2_audiofile = new Audio('../audio_files/cello_samples/cello_a2.mp3');
cello_b2_audiofile = new Audio('../audio_files/cello_samples/cello_b2.mp3');
cello_c3_audiofile = new Audio('../audio_files/cello_samples/cello_c3.mp3');
cello_d3_audiofile = new Audio('../audio_files/cello_samples/cello_d3.mp3');
cello_e3_audiofile = new Audio('../audio_files/cello_samples/cello_e3.mp3');
cello_f3_audiofile = new Audio('../audio_files/cello_samples/cello_f3.mp3');
cello_g3_audiofile = new Audio('../audio_files/cello_samples/cello_g3.mp3');
cello_a3_audiofile = new Audio('../audio_files/cello_samples/cello_a3.mp3');
cello_b3_audiofile = new Audio('../audio_files/cello_samples/cello_b3.mp3');
cello_c4_audiofile = new Audio('../audio_files/cello_samples/cello_c4.mp3');

cello_f1 = construct_note(cello_f1_audiofile);
cello_g1 = construct_note(cello_g1_audiofile);
cello_a1 = construct_note(cello_a1_audiofile);
cello_b1 = construct_note(cello_b1_audiofile);
cello_c2 = construct_note(cello_c2_audiofile);
cello_d2 = construct_note(cello_d2_audiofile);
cello_e2 = construct_note(cello_e2_audiofile);
cello_f2 = construct_note(cello_f2_audiofile);
cello_g2 = construct_note(cello_g2_audiofile);
cello_a2 = construct_note(cello_a2_audiofile);
cello_b2 = construct_note(cello_b2_audiofile);
cello_c3 = construct_note(cello_c3_audiofile);
cello_d3 = construct_note(cello_d3_audiofile);
cello_e3 = construct_note(cello_e3_audiofile);
cello_f3 = construct_note(cello_f3_audiofile);
cello_g3 = construct_note(cello_g3_audiofile);
cello_a3 = construct_note(cello_a3_audiofile);
cello_b3 = construct_note(cello_b3_audiofile);
cello_c4 = construct_note(cello_c4_audiofile);

var c_chord_1_audiofile, c_chord_2_audiofile, f_chord_1_audiofile, f_chord_2_audiofile;

var c_chord_1, c_chord_2, f_chord_1, f_chord_2;

c_chord_1_audiofile = new Audio('../audio_files/chords/c_chord_1.mp3');
c_chord_2_audiofile = new Audio('../audio_files/chords/c_chord_2.mp3');
f_chord_1_audiofile = new Audio('../audio_files/chords/f_chord_1.mp3');
f_chord_2_audiofile = new Audio('../audio_files/chords/f_chord_2.mp3');

c_chord_1 = construct_chord(c_chord_1_audiofile);
c_chord_2 = construct_chord(c_chord_2_audiofile);
f_chord_1 = construct_chord(f_chord_1_audiofile);
f_chord_2 = construct_chord(f_chord_2_audiofile);

c_chord_queue = [c_chord_1, c_chord_2];
f_chord_queue = [f_chord_1, f_chord_2];
