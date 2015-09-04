var piano_c3_audiofile, piano_d3_audiofile, piano_e3_audiofile, piano_f3_audiofile, piano_g3_audiofile,
  piano_a3_audiofile, piano_b3_audiofile, piano_c4_audiofile, piano_d4_audiofile, piano_e4_audiofile, piano_f4_audiofile, piano_g4_audiofile, piano_a4_audiofile,
  piano_b4_audiofile, piano_c5_audiofile;

var piano_c3, piano_d3, piano_e3, piano_f3, piano_g3,
    piano_a3, piano_b3, piano_c4, piano_d4, piano_e4, piano_f4, piano_g4, piano_a4,
    piano_b4, piano_c5;

piano_c3_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_c3.mp3');
piano_d3_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_d3.mp3');
piano_e3_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_e3.mp3');
piano_f3_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_f3.mp3');
piano_g3_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_g3.mp3');
piano_a3_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_a3.mp3');
piano_b3_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_b3.mp3');
piano_c4_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_c4.mp3');
piano_d4_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_d4.mp3');
piano_e4_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_e4.mp3');
piano_f4_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_f4.mp3');
piano_g4_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_g4.mp3');
piano_a4_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_a4.mp3');
piano_b4_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_b4.mp3');
piano_c5_audiofile = new Audio('../audio_files/piano_samples_mp3/piano_c5.mp3');

var construct_note = function(audiofile) {
  note = {
    file: audiofile,
    trigger: function(){
            this.file.play();
          }
  }
  return note;
}

piano_c3 = construct_note(piano_c3_audiofile);
piano_d3 = construct_note(piano_d3_audiofile);
piano_e3 = construct_note(piano_e3_audiofile);
piano_g3 = construct_note(piano_g3_audiofile);
piano_a3 = construct_note(piano_a3_audiofile);
piano_c4 = construct_note(piano_c4_audiofile);
piano_d4 = construct_note(piano_d4_audiofile);
piano_e4 = construct_note(piano_e4_audiofile);
piano_g4 = construct_note(piano_g4_audiofile);
piano_a4 = construct_note(piano_a4_audiofile);
piano_b4 = construct_note(piano_b4_audiofile);
piano_c5 = construct_note(piano_c5_audiofile);
