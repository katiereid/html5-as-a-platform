// 1. Hide fenced yard option
// $("#yardOption").hide();

// 2. When user selects "dog", fenced yard option appears
$("#type").on("focusout", function() {
  if ($("select option:selected").val() == "dog") {
    $("#yardOption").show();
  }
});


document.getElementById('type').addEventListener('focusout', function(){
  var select = document.getElementById('type');
  var yard = document.getElementById('yardOption');
  if(select.value == 'dog'){
    yard.classList.remove('hidden');
  }
  else if (select.value !== 'dog') {
    yard.classList.add('hidden');
  }
})


$("#adoptCat").hide();

// cat popup
$("#submit").submit(function() {
  $("#adoptCat").show();
  // $("#")
})




// (function() {
//    var dialog = document.getElementById('window');
//    document.getElementById('show').onclick = function() {
//        dialog.show();
//    };
//    document.getElementById('exit').onclick = function() {
//        dialog.close();
//    };
// })();
