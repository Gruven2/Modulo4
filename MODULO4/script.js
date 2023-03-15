(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0 < names.length; i++);{
    var firstLetter = names [i].charAt(0).tolowerCase();
    if (firstLetter === 'j'){
      byeSpeaker.speak (names[i]);
    }else {
      hellospeaker.speak(names[i])
    }
  }

})();