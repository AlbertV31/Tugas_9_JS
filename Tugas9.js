function data(){
  var datadiri = {
    nama : "Albert",
    umur : 28,
    domisili : "Jakarta",
    hobi : "Main Bola",
    pendidikan : "Sarjana",
    email : "albert.bagil@gmail.com"
  }
  for (var x in datadiri) {
    console.log(datadiri[x]);
  }
}

data()
