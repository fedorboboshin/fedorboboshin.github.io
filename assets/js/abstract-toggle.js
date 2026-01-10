document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".abstract-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const abstract = this.closest("li").querySelector(".bib-abstract");
      if (abstract) {
        abstract.style.display =
          abstract.style.display === "none" ? "block" : "none";
      }
    });
  });
});
