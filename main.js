
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
//minsara kanavu
$(document).ready(function() {
  SC.stream('/tracks/345483871',function(sound){

       $("#start").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});
//ngk

$(document).ready(function() {
 SC.stream('/tracks/615375408',function(sound){
           $("#start1").click(function(e) {
             e.preventDefault();
             sound.start();
            });
             $("#stop1").click(function(e) {
                e.preventDefault();
                sound.stop();
              });
});
});


//devid
$(document).ready(function() {
 SC.stream('/tracks/112010796',function(sound){
           $("#start2").click(function(e) {
             e.preventDefault();
             sound.start();
            });
             $("#stop2").click(function(e) {
                e.preventDefault();
                sound.stop();
              });
});
});
//
$(document).ready(function() {
 SC.stream('/tracks/246940098',function(sound){
           $("#start3").click(function(e) {
             e.preventDefault();
             sound.start();
            });
             $("#stop3").click(function(e) {
                e.preventDefault();
                sound.stop();
              });
});
});
