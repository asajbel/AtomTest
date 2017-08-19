var i = 0;
for (i; i < 10; i++){}

function print (text, where = "output"){
  document.getElementById(where).innerHTML += "<p>" + text + "</p>";
}

// value is from the input tag
function read(event, value, id){
  if (event.keyCode === 13){
    event.preventDefault();
    print(value)
    document.getElementById(id).value = '';
  }
}
