
function scrollProductsIntoView() {
  const container = $(".js-pagination__anchor")[0];
  container &&
    container.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}

$(function () {
  /**
   * JS Pagination
   */
  const productsPerPage = liquid__productsPerPage;
  let initialized = false;

  $(".js-pagination__pagination").pagination({
    dataSource: productsList,
    pageSize: productsPerPage,
    classPrefix: "pagination",
    ulClassName: "js-pagination__list",
    showPrevious: false,
    showNext: false,
    callback: function (items, pagination) {
      const { pageNumber, pageSize, totalNumber } = pagination;

      $(productsList).hide();
      $(items).show();

      const isLast = pageNumber * pageSize >= totalNumber;
      const isFirst = pageNumber === 1;

      $("[data-pagination='previous']").toggleClass("disabled", isFirst);
      $("[data-pagination='next']").toggleClass("disabled", isLast);

      if (initialized) {
        ScrollTrigger.refresh();
        scrollProductsIntoView();
      } else {
        initialized = true;
      }

      /**
       * show pagination only if more than one pages
       */
      if (totalNumber / pageSize > 1) {
        $(".js-pagination").show();
      }

      // console.log({
      //   items,
      //   pagination
      // })
    },
  });

  $("[data-pagination]").on("click", function (e) {
    e.preventDefault();
    const $pagination = $(this)
      .closest(".js-pagination")
      .find(".js-pagination__pagination");
    const method = $(this).attr("data-pagination");

    $pagination.pagination(method);
  });
});
