$(function () {
  const syncFilters = () => {
    const groups = [];
    let filterCount = 0;

    const $filterItems = $(
      ".product-grid > .product-item, .know-how__grid > .know-how__card"
    );

    document.querySelectorAll(".filter-group").forEach((group) => {
      let filters = [];

      group.querySelectorAll("input:checked").forEach((el) => {
        filters.push("." + el.value);
      });

      groups.push(filters);
    });

    $filterItems.hide();
    groups.forEach((group) => {
      if (group.length > 0) {
        const classes = group.join(",");
        const items = $filterItems;
        $(items).filter(classes).show();
      }
      filterCount += group.length;
    });

    ScrollTrigger.refresh();

    scrollProductsIntoView();

    if (filterCount == 0) {
      $(".js-pagination").show();
      $(".js-pagination__pagination").pagination("go", 1);
      $(".filter-count").html("");
    } else {
      $(".js-pagination").hide();
      $(".filter-count").html(`(${filterCount})`);
    }
  };

  $(".filter-group__list input").on("change", syncFilters);

  $(".collection-filters__clear").on("click", (event) => {
    event.preventDefault();
    $(".filter-group__list input:checked").prop("checked", false);
    syncFilters();
  });
});
