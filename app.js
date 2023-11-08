let reviews = document.querySelectorAll(".review");
let currentReview = 0;
// console.log(reviews)

function hideAllReviews() {
  reviews.forEach((review) => {
    review.style.display = "none";
  });
}
function showReview(index) {
  hideAllReviews();
  reviews[index].style.display = "flex";
}

function prev() {
  if (currentReview == 0) {
    currentReview = reviews.length - 1;
    showReview(currentReview);
  } else {
    currentReview -= 1;
    showReview(currentReview);
  }
}

function next() {
  if (currentReview == reviews.length - 1) {
    currentReview = 0;
    showReview(currentReview);
  } else {
    currentReview += 1;
    showReview(currentReview);
  }
}


function random(){
  let randomElement = Math.floor(Math.random() * reviews.length);
  showReview(randomElement);
};

document.querySelectorAll(".btn-random").forEach((btn) => {
    btn.addEventListener("click", random);
  });
document.querySelectorAll(".prev").forEach((btn) => {
  btn.addEventListener("click", prev);
});
document.querySelectorAll(".next").forEach((btn) => {
  btn.addEventListener("click", next);
});

showReview(currentReview);
