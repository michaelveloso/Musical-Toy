var setTempo = function(bpm) {
  ms_per_whole = (60/bpm) * 4 * 1000.0
  ms_per_half = ms_per_whole / 2.0
  ms_per_quarter = ms_per_whole / 4.0
  ms_per_eighth = ms_per_whole / 8.0
  ms_per_sixteenth = ms_per_whole / 16.0
}

//grabbed from Stack Overflow
var timer = {
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
  tempo_form = $('#tempo')
  tempo_input = $('#new_tempo')
  tempo_form.submit(function(event){
    event.preventDefault();
    setTempo(tempo_input.val())
  });

  setTempo(150);

  whole_button = $("#whole_button");
  half_button = $("#half_button");
  quarter_button = $("#quarter_button");
  eighth_button = $("#eighth_button");
  sixteenth_button = $("#sixteenth_button");

  whole_button.on ('click', function(){
    timer.set_interval(ms_per_whole);
  });

  half_button.on ('click', function(){
    timer.set_interval(ms_per_half);
  });

  quarter_button.on ('click', function(){
    timer.set_interval(ms_per_quarter);
  });

  eighth_button.on ('click', function(){
    timer.set_interval(ms_per_eighth);
  });

  sixteenth_button.on ('click', function(){
    timer.set_interval(ms_per_sixteenth);
  });

  timer.start(function() {
    note_queue.play_from_queue();
  }, ms_per_eighth)
});
