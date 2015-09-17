var key_of_c = {
  note_set: c_chord_all_inst,
  chord_queue: c_chord_queue
};

var key_of_f = {
  note_set: f_chord_all_inst,
  chord_queue: f_chord_queue
};

set_key = function(key) {
  current_chord = key.chord_queue;
  current_note_set = key.note_set;
};

var chord_timer = {
    running: false,
    iv: 5000,
    timeout: false,
    cb : function(){},
    start : function(cb,iv){
        var elm = this;
        clearInterval(this.timeout);
        this.running = true;
        if(cb) this.cb = cb;
        if(iv) this.iv = iv;
        this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
    },
    execute : function(e){
        if(!e.running) return false;
        e.cb();
        e.start();
    },
    stop : function(){
        this.running = false;
    },
    set_interval : function(iv){
        clearInterval(this.timeout);
        this.start(false, iv);
    }
};

$(document).ready(function() {
  // tempo_form = $('#tempo')
  // tempo_input = $('#new_tempo')
  // tempo_form.submit(function(event){
  //   event.preventDefault();
  //   setTempo(tempo_input.val())
  // });

  setTempo(150);

  c_chord_button = $("#c-chord");
  f_chord_button = $("#f-chord");

  c_chord_button.on ('click', function(){
    set_key(key_of_c);
  });

  f_chord_button.on ('click', function(){
    set_key(key_of_f);
  });

  chord_index = 0;
  chord_ms = 5000;
  chord_timer.start(function() {
    current_chord[chord_index].trigger();
    if (chord_index === 0) {
      chord_index = 1;
    } else {
      chord_index = 0;
    }
  }, chord_ms)
});
