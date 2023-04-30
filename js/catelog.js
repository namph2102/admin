import "./style.module.js";
// search film
const btnSearch = document.getElementById("btn_search");
const inputSearch = document.getElementById("search");
const inputKeyword = document.getElementById("input_keyword");
const resultContainer = document.getElementById("result_container");
inputSearch.addEventListener("input", function (e) {
  if (e.target.value) {
    inputKeyword.innerHTML = e.target.value;
    resultContainer.classList.remove("hidden");
  } else {
    resultContainer.classList.add("hidden");
  }
});
btnSearch.onclick = () => {
  if (inputSearch.value) {
    resultContainer.classList.remove("hidden");
  } else {
    resultContainer.classList.add("hidden");
  }
};
// end search film

// modal select
const modalView = document.getElementById("modal_views");
const modalStatus = document.getElementById("modal_status");
modalView.addEventListener("click", closeModalPro);
modalStatus.addEventListener("click", closeModalPro);

function closeModalPro(e) {
  if (
    e.target.closest(".modal-content") &&
    !e.target.closest(".btn_close-modal")
  ) {
    return;
  }
  this.classList.toggle("hideElement");
}
//close modal
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalView.classList.add("hideElement");
    modalStatus.classList.add("hideElement");
  }
});
const tableContainer = document.getElementById("table_container");
tableContainer.addEventListener("click", function (e) {
  if (e.target.closest("button")) {
    const buttonelement = e.target.closest("button");
    if (buttonelement.classList.contains("btn_view")) {
      modalView.classList.remove("hideElement");
    } else {
      modalStatus.classList.remove("hideElement");
    }
  }
});
const btnFilterSort = document.getElementById("btn_filter");
const sortCntainer = document.getElementById("sort_container");

btnFilterSort.addEventListener("click", function () {
  this.classList.toggle("btn_close");
  sortCntainer.classList.toggle("hideElement");
});

const date1 = new Date("23/01/2022");
const date2 = new Date("23/02/2022");
console.log(date1 > date2);
