// 1. Hide fenced yard option
// $("#yardOption").hide();

// 2. When user selects "dog", fenced yard option appears
// $("#type").on("focusout", function() {
//   if ($("select option:selected").val() == "dog") {
//     $("#yardOption").show();
//   }
// });
var select = document.getElementById('type');

document.getElementById('type').addEventListener('focusout', function(){
  // var select = document.getElementById('type');
  var yard = document.getElementById('yardOption');
  if(select.value == 'dog'){
    yard.classList.remove('hidden');
  }
  else if (select.value !== 'dog') {
    yard.classList.add('hidden');
  }
})

// $("#adoptCat").hide();

// // cat popup
// $("#submit").submit(function() {
//   $("#adoptCat").show();
//   // $("#")
// })


document.getElementById('submit').addEventListener('click', function(e){
  var adoptCat = document.getElementById('adoptCat');
  e.preventDefault();
  if(select.value == "cat"){
    adoptCat.classList.remove("hidden");
  }
});





