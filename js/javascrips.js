// const gorev = document.querySelector("#task")
// const add = document.querySelector("#liveToastBtn")
// const list = document.querySelector("#list")

// add.onclick=function(){

//     let li = document.createElement("li")
//     li.textContent=gorev.value

//     list.appendChild(li)

//     gorev.value=""
// }
// const gorev = document.querySelector("#task");
// const add = document.querySelector("#liveToastBtn");
// const list = document.querySelector("#list");

// add.onclick = function() {
//   if (gorev.value.trim() !== "") { // Eğer değer boşluk karakterleri haricinde bir şey içeriyorsa
//     let li = document.createElement("li");
//     li.textContent = gorev.value;

//     list.appendChild(li);

//     gorev.value = "";
//   }
// };

// const gorev = document.querySelector("#task");
// const add = document.querySelector("#liveToastBtn");
// const list = document.querySelector("#list");
// let gorevler = []; // boş bir dizi oluşturulur

// // Daha önce kaydedilen veriler varsa, onları `gorevler` dizisine yükle
// if (localStorage.getItem("gorevler")) {
//   gorevler = JSON.parse(localStorage.getItem("gorevler"));
//   gorevler.forEach(function(gorev) {
//     let li = document.createElement("li");
//     li.textContent = gorev;
//     list.appendChild(li);
//   });
// }

// add.onclick = function() {
//   if (gorev.value.trim() !== "") {
//     let li = document.createElement("li");
//     li.textContent = gorev.value;
//     list.appendChild(li);
//     gorevler.push(gorev.value); // diziye veriyi ekle
//     localStorage.setItem("gorevler", JSON.stringify(gorevler)); // localStorage'a kaydet
//     gorev.value = "";
//   }
// };
// const gorev = document.querySelector("#task");
// const add = document.querySelector("#liveToastBtn");
// const list = document.querySelector("#list");
// let gorevler = []; // boş bir dizi oluşturulur

// // Daha önce kaydedilen veriler varsa, onları `gorevler` dizisine yükle
// if (localStorage.getItem("gorevler")) {
//   gorevler = JSON.parse(localStorage.getItem("gorevler"));
//   gorevler.forEach(function(gorev) {
//     let li = document.createElement("li");
//     li.textContent = gorev;
//     list.appendChild(li);
//   });
// }

// add.onclick = function() {
//   if (gorev.value.trim() !== "") {
//     let li = document.createElement("li");
//     li.textContent = gorev.value;
//     list.appendChild(li);
//     gorevler.push(gorev.value); // diziye veriyi ekle
//     localStorage.setItem("gorevler", JSON.stringify(gorevler)); // localStorage'a kaydet
//     gorev.value = "";

   
//   }
// }
const gorev = document.querySelector("#task");
const add = document.querySelector("#liveToastBtn");
const list = document.querySelector("#list");
let gorevler = [];

if (localStorage.getItem("gorevler")) {
  gorevler = JSON.parse(localStorage.getItem("gorevler"));
  gorevler.forEach(function(gorev) {
    let li = document.createElement("li");
    li.textContent = gorev;
    list.appendChild(li);
  });
}

add.onclick = function() {
  if (gorev.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = gorev.value;
    list.appendChild(li);
    gorevler.push(gorev.value);
    localStorage.setItem("gorevler", JSON.stringify(gorevler));
    gorev.value = "";

    let toast = createToast("Görev eklendi!", "bg-success");
    document.body.appendChild(toast);

    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 2000);
  } else {
    let toast = createToast("Lütfen bir görev girin!", "bg-danger");
    document.body.appendChild(toast);

    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 2000);
  }
};

list.onclick = function(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
    gorevler.splice(gorevler.indexOf(event.target.textContent), 1);
    localStorage.setItem("gorevler", JSON.stringify(gorevler));

    let toast = createToast("Görev silindi!", "bg-primary");
    document.body.appendChild(toast);

    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 2000);
  }
};

function createToast(message, color) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add("show");
  toast.classList.add("align-items-center");
  toast.classList.add("text-white");
  toast.classList.add(color);
  toast.classList.add("border-0");
  toast.classList.add("mt-3");
  toast.classList.add("me-3");
  toast.classList.add("position-fixed");
  toast.classList.add("top-0");
  toast.classList.add("end-0");

  let toastBody = document.createElement("div");
  toastBody.classList.add("toast-body");
  toastBody.textContent = message;

  toast.appendChild(toastBody);

  return toast;
}
