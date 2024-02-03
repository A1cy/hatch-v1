(() => {
  var t = {
      746: () => {
        !(function (t) {
          t.fn.niceSelect = function (e) {
            if ("string" == typeof e)
              return (
                "update" == e
                  ? this.each(function () {
                      var e = t(this),
                        i = t(this).next(".nice-select"),
                        r = i.hasClass("open");
                      i.length &&
                        (i.remove(), n(e), r && e.next().trigger("click"));
                    })
                  : "destroy" == e
                  ? (this.each(function () {
                      var e = t(this),
                        n = t(this).next(".nice-select");
                      n.length && (n.remove(), e.css("display", ""));
                    }),
                    0 == t(".nice-select").length &&
                      t(document).off(".nice_select"))
                  : console.log('Method "' + e + '" does not exist.'),
                this
              );
            function n(e) {
              e.after(
                t("<div></div>")
                  .addClass("nice-select")
                  .addClass(e.attr("class") || "")
                  .addClass(e.attr("disabled") ? "disabled" : "")
                  .attr("tabindex", e.attr("disabled") ? null : "0")
                  .html('<span class="current"></span><ul class="list"></ul>')
              );
              var n = e.next(),
                i = e.find("option"),
                r = e.find("option:selected");
              n.find(".current").html(r.data("display") || r.text()),
                i.each(function (e) {
                  var i = t(this),
                    r = i.data("display");
                  n.find("ul").append(
                    t("<li></li>")
                      .attr("data-value", i.val())
                      .attr("data-href", i.attr("data-href") || null)
                      .attr("data-display", r || null)
                      .addClass(
                        "option" +
                          (i.is(":selected") ? " selected" : "") +
                          (i.is(":disabled") ? " disabled" : "")
                      )
                      .html(i.text())
                  );
                });
            }
            this.hide(),
              this.each(function () {
                var e = t(this);
                e.next().hasClass("nice-select") || n(e);
              }),
              t(document).off(".nice_select"),
              t(document).on("click.nice_select", ".nice-select", function (e) {
                var n = t(this);
                t(".nice-select").not(n).removeClass("open"),
                  n.toggleClass("open"),
                  n.hasClass("open")
                    ? (n.find(".option"),
                      n.find(".focus").removeClass("focus"),
                      n.find(".selected").addClass("focus"))
                    : n.focus();
              }),
              t(document).on("click.nice_select", function (e) {
                0 === t(e.target).closest(".nice-select").length &&
                  t(".nice-select").removeClass("open").find(".option");
              }),
              t(document).on(
                "click.nice_select",
                ".nice-select .option:not(.disabled)",
                function (e) {
                  var n = t(this),
                    i = n.closest(".nice-select");
                  if (n.attr("data-href"))
                    window.location = n.attr("data-href") + "";
                  else {
                    i.find(".selected").removeClass("selected"),
                      n.addClass("selected");
                    var r = n.data("display") || n.text();
                    i.find(".current").text(r),
                      i.prev("select").val(n.data("value")).trigger("change");
                  }
                }
              ),
              t(document).on(
                "keydown.nice_select",
                ".nice-select",
                function (e) {
                  var n = t(this),
                    i = t(n.find(".focus") || n.find(".list .option.selected"));
                  if (32 == e.keyCode || 13 == e.keyCode)
                    return (
                      n.hasClass("open")
                        ? i.trigger("click")
                        : n.trigger("click"),
                      !1
                    );
                  if (40 == e.keyCode) {
                    if (n.hasClass("open")) {
                      var r = i.nextAll(".option:not(.disabled)").first();
                      r.length > 0 &&
                        (n.find(".focus").removeClass("focus"),
                        r.addClass("focus"));
                    } else n.trigger("click");
                    return !1;
                  }
                  if (38 == e.keyCode) {
                    if (n.hasClass("open")) {
                      var o = i.prevAll(".option:not(.disabled)").first();
                      o.length > 0 &&
                        (n.find(".focus").removeClass("focus"),
                        o.addClass("focus"));
                    } else n.trigger("click");
                    return !1;
                  }
                  if (27 == e.keyCode) n.hasClass("open") && n.trigger("click");
                  else if (9 == e.keyCode && n.hasClass("open")) return !1;
                }
              );
            var i = document.createElement("a").style;
            return (
              (i.cssText = "pointer-events:auto"),
              "auto" !== i.pointerEvents &&
                t("html").addClass("no-csspointerevents"),
              this
            );
          };
        })(jQuery);
      },
      773: () => {
        $(".related-articles__carousel").owlCarousel({
          items: 3,
          dots: !1,
          responsive: {
            0: { items: 1.25, loop: !0 },
            768: { items: 2, loop: !1 },
            992: { items: 3 },
          },
        });
      },
      606: () => {
        $(function () {
          var t =
            '\n    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9 17L0.999999 9L9 1" stroke="#C5C5C5"/>\n    </svg>\n  ';
          $(".featured-post__carousel").owlCarousel({
            items: 1,
            autoHeight: !0,
            nav: !0,
            loop: !0,
            navText: [t, t],
            animateOut: "fadeOut",
            animateIn: "fadeIn",
          });
        });
      },
      480: () => {
        $(function () {
          $(window).on("load", function () {
            $(".follow-us__carousel").owlCarousel({
              items: 5,
              loop: !0,
              margin: 20,
              autoplay: !0,
              slideTransition: "linear",
              autoplaySpeed: 7e3,
              autoplayHoverPause: !1,
              mouseDrag: !0,
              touchDrag: !0,
              responsive: {
                0: { items: 2.3, margin: 6 },
                768: { items: 3.5, margin: 20 },
                992: { items: 5 },
              },
            });
            var t =
              '\n      <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M6.53393 0.26474L1.40845 5.39023L6.53393 10.5157" stroke="#3E3E3D" stroke-width="0.732212"/>\n      </svg>    \n    ';
            $(".home-community__carousel").owlCarousel({
              responsive: {
                0: {
                  items: 1,
                  nav: !0,
                  autoplay: !1,
                  loop: !0,
                  navText: [t, t],
                  margin: 20,
                },
                768: {
                  items: 3.5,
                  nav: !1,
                  mouseDrag: !1,
                  touchDrag: !1,
                  autoplay: !0,
                  slideTransition: "linear",
                  autoplaySpeed: 7e3,
                  autoplayHoverPause: !1,
                },
                992: { items: 2.5 },
              },
            });
          }),
            document.querySelector(".know-how-carousel") &&
              $(".know-how-carousel").owlCarousel({
                loop: !0,
                dots: !0,
                autoplay: !0,
                mouseDrag: !0,
                touchDrag: !1,
                autoplaySpeed: 1e3,
                autoplayTimeout: 4e3,
                responsive: { 0: { items: 1.35 }, 768: { items: 1.75 } },
              }),
            $(".home-benefits__links > li").on("mouseenter", function () {
              var t = $(this).index();
              $(".home-benefits__image").addClass("hide-default"),
                $(".home-benefits__hover-images > .active").removeClass(
                  "active"
                ),
                $(".home-benefits__hover-images > img")
                  .eq(t)
                  .addClass("active");
            }),
            $(".home-benefits__links > li").on("mouseleave", function () {
              $(".home-benefits__image").removeClass("hide-default"),
                $(".home-benefits__hover-images > .active").removeClass(
                  "active"
                );
            }),
            $(".top-sellers__tabs a").on("click", function (t) {
              t.preventDefault(),
                $(this)
                  .closest(".top-sellers")
                  .find(".active")
                  .removeClass("active"),
                $(this).addClass("active");
              var e = $($(this).attr("href"));
              e.find("[data-src]").length &&
                e.find("[data-src]").each(function () {
                  $(this).attr("src", $(this).attr("data-src")),
                    $(this).removeAttr("data-src");
                }),
                e.addClass("active");
            }),
            $(".top-sellers__tabs a.active").trigger("click");
        });
      },
      396: () => {
        function t() {
          $("body").removeClass("page-fade");
        }
        $("a[data-transition]").on("click", function (t) {}),
          $(function () {
            t();
          }),
          (window.onpageshow = function () {
            t();
          });
      },
      734: () => {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var e = (function () {
          function e() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var n, i;
          return (
            (n = e),
            (i = [
              {
                key: "init",
                value: function () {
                  var t = document.querySelector(".pdp-modal__wrapper");
                  t &&
                    ((this.modal = t),
                    $(document).on(
                      "click",
                      ".pdp-modal__trigger, .pdp-modal__tabs > li > a",
                      function (t) {
                        t.preventDefault();
                        var n = $(this).attr("href");
                        e.show(n);
                      }
                    ),
                    $(".pdp-modal__close").on("click", function (t) {
                      t.preventDefault(), e.close();
                    }));
                },
              },
              {
                key: "show",
                value: function (t) {
                  document.body.classList.add("pdp-modal--show"),
                    this.showTab(t);
                },
              },
              {
                key: "close",
                value: function () {
                  document.body.classList.remove("pdp-modal--show");
                },
              },
              {
                key: "showTab",
                value: function (t) {
                  var e = $(this.modal);
                  e
                    .find(".pdp-modal__tabs > li > a.active")
                    .removeClass("active"),
                    e.find(".pdp-modal__tab.active").removeClass("active"),
                    $(".pdp-modal__body").scrollTop(0),
                    e.find("[href='".concat(t, "']")).addClass("active"),
                    e.find(t).addClass("active");
                },
              },
            ]),
            null && t(n.prototype, null),
            i && t(n, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })();
        e.init(), (window.Modal = e);
      },
      683: () => {
        function t() {
          var t = $(".product-main__buy"),
            e = t.find('[name="quantity"]');
          if (0 != e.length) {
            var n = e.val(),
              i = t.find(".js-variant-price"),
              r = +i.attr("data-price");
            r *= n;
            var o = hatch.formatMoney(r / 4).replaceAll(".00", ""),
              a = hatch.formatMoney(r / 6).replaceAll(".00", "");
            (r = hatch.formatMoney(r).replaceAll(".00", "")),
              i.text(r),
              $(".js-afterpay-price").text(o),
              $(".js-laybuy-price").text(a);
          }
        }
        !(function () {
          function t() {
            $(".product-main, .quickview").addClass("product-main--subscribe"),
              $("body").addClass("product-subscription"),
              $('[name="selling_plan"]').prop("disabled", !1),
              $('[name="selling_plan"]')
                .parent()
                .find(".nice-select")
                .removeClass("disabled"),
              $(
                "select.variant-bar__purchase-type option[value='".concat(
                  $(".product-main select[name=selling_plan]").val(),
                  "']"
                )
              ).prop("selected", !0),
              $("select.variant-bar__purchase-type").niceSelect("update");
          }
          $(document).on(
            "change",
            ".product-main__purchase-type input",
            function () {
              $(this).is(":checked") && "subscribe" == $(this).val()
                ? t()
                : ($(".product-main, .quickview").removeClass(
                    "product-main--subscribe"
                  ),
                  $("body").removeClass("product-subscription"),
                  $('[name="selling_plan"]').prop("disabled", !0),
                  $(
                    "select.variant-bar__purchase-type option[value='".concat(
                      "one-time",
                      "']"
                    )
                  ).prop("selected", !0),
                  $("select.variant-bar__purchase-type").niceSelect("update"));
            }
          ),
            $(document).on(
              "change",
              "#purchase-type, select.purchase-type",
              function () {
                var t = $(this).val();
                $(".product-main__purchase-type input[value='".concat(t, "']"))
                  .prop("checked", !0)
                  .trigger("change");
              }
            ),
            $(document).on(
              "change",
              "select.variant-bar__purchase-type",
              function () {
                var e = $(this).val();
                if ("one-time" == e)
                  $(
                    ".product-main__purchase-type input[value='".concat(e, "']")
                  )
                    .prop("checked", !0)
                    .trigger("change");
                else {
                  $(
                    ".product-main select[name=selling_plan] option[value='".concat(
                      e,
                      "']"
                    )
                  ).prop("selected", !0),
                    $(".product-main select[name=selling_plan]").niceSelect(
                      "update"
                    );
                  var n = $(
                    ".product-main__purchase-type input[value='".concat(
                      "subscribe",
                      "']"
                    )
                  );
                  n.is(":checked") || (n.prop("checked", !0), t());
                }
              }
            ),
            $(document).on(
              "change",
              ".product-main select[name=selling_plan]",
              function () {
                $(
                  "select.variant-bar__purchase-type option[value='".concat(
                    $(this).val(),
                    "']"
                  )
                ).prop("selected", !0),
                  $("select.variant-bar__purchase-type").niceSelect("update");
              }
            );
        })(),
          (window.updateQuantityPrice = t),
          $(function () {
            $(".product-gallery").owlCarousel({
              items: 1,
              dots: !0,
              margin: 1,
              autoplay: !0,
              autoplayTimeout: 6e3,
              loop: !0,
            });
            var e =
              '\n    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M0.852295 1L11.8523 12L0.852295 23" stroke="#3E3E3D"/>\n    </svg>\n  ';
            $(".product-card__carousel").owlCarousel({
              dots: !1,
              nav: !0,
              navText: [e, e],
              responsive: {
                0: { items: 1.25, margin: 20, loop: !0 },
                768: { items: 2.25, margin: 25 },
                992: { items: 4, margin: 50, loop: !1 },
              },
            }),
              $(document).on(
                "click",
                ".product-main__buy .button--quantity",
                function (e) {
                  e.preventDefault();
                  var n = $(this).closest(".product-main__buy"),
                    i = n.find('[name="quantity"]'),
                    r = +i.val();
                  $(this).hasClass("button--minus") ? r-- : r++,
                    (r = r < 1 ? 1 : r),
                    i.val(r),
                    n.find(".button__quantity").text(r),
                    t();
                }
              );
          }),
          $(".product-main__buy form").on("submit", function (t) {
            var e = $('[name="selling_plan"]', this);
            if (!e.prop("disabled") && !e.val())
              return (
                t.preventDefault(),
                alert("Please select frequency"),
                $("body").removeClass("cart-drawer--show"),
                !1
              );
          }),
          $(function () {
            document
              .querySelectorAll(".product-mvp__ref")
              .forEach(function (t) {
                var e = $(t).attr("data-ref"),
                  n = $("#mvp-".concat(e));
                n.length
                  ? $(t).replaceWith(n.html())
                  : (console.log(
                      'MVP Reference for "'.concat(e, '" not found.')
                    ),
                    $(t).remove());
              });
          });
      },
      904: () => {
        function t(t) {
          var e = [null, null, null, null];
          t.each(function () {
            var t = +$(this).attr("data-position");
            t &&
              ($(this).is("input[type=radio]")
                ? $(this).is(":checked") && (e[t] = $(this).val())
                : (e[t] = $(this).val()));
          });
          var n = (e = e.filter(function (t) {
              return t;
            })).join(" / "),
            i = $(
              '.quickview-modal__content .variant-select option[data-title="'.concat(
                n,
                '"]'
              )
            ),
            r = i.attr("value");
          $('.quickview-modal__content input[name="id"]').val(r);
          var o = hatch.formatMoney(i.attr("data-price")).replaceAll(".00", ""),
            a = JSON.parse($(".quickview-modal__content #variant-json").text()),
            s = $('.quickview-modal__content [name="selling_plan"]').val(),
            u = a.find(function (t) {
              return t.id == r;
            }),
            l = "",
            c = JSON.parse(
              $(".quickview-modal__content #variant-meta-json").text()
            )[r].image;
          if ((c && $(".js-variant-image").attr("src", c), u)) {
            var d = u.selling_plan_allocations.find(function (t) {
              return t.selling_plan_id == s;
            });
            if (
              (d && (l = hatch.formatMoney(d.price).replaceAll(".00", "")),
              u.compare_at_price > u.price)
            ) {
              var h = hatch
                .formatMoney(u.compare_at_price)
                .replaceAll(".00", "");
              $(".quickview-modal__content .js-variant-sale").text(h).fadeIn();
            } else $(".quickview-modal__content .js-variant-sale").fadeOut();
            $("[data-qv-variant]").removeClass("variant-active"),
              $("[data-qv-variant='".concat(r, "']")).addClass(
                "variant-active"
              );
          }
          $(".quickview-modal__content .js-variant-price").text(o),
            $(".quickview-modal__content .js-subscription-price").text(l),
            $(".quickview-modal__content .js-variant-price").attr(
              "data-price",
              i.attr("data-price")
            ),
            updateQuantityPrice();
        }
        $(document).on("click", ".quickview__trigger", function () {
          var t = $(this).attr("data-product");
          (t += t.includes("?") ? "&" : "?"),
            $(".quickview-modal__content").html(""),
            $("body").addClass("quickview-modal--show"),
            $.get("".concat(t, "view=quickview"), function (t) {
              $(".quickview-modal__content").hide().html(t).fadeIn(),
                fadeCarousel($(".quickview-modal__content")[0]),
                $(".quickview-modal__content select").niceSelect(),
                $(".quickview-modal__content .product-main__buy form").on(
                  "submit",
                  function (t) {
                    var e = $('[name="selling_plan"]', this);
                    if (!e.prop("disabled") && !e.val())
                      return (
                        t.preventDefault(),
                        alert("Please select frequency"),
                        $("body").removeClass("cart-drawer--show"),
                        !1
                      );
                  }
                );
            });
        }),
          $(document).on(
            "click",
            ".quickview-modal__overlay, .quickview-modal__close",
            function (t) {
              t.preventDefault(),
                $("body").removeClass("quickview-modal--show");
            }
          ),
          $(document).on(
            "change",
            ".quickview-modal__content .variant-list .variant-option",
            function () {
              var e = $(this).closest(".variant-option__group");
              e.find(".variant-option--1").val(),
                e.find(".variant-option--2:checked").val(),
                t(e.find(".variant-option"));
            }
          ),
          $(document).on(
            "change",
            ".quickview-modal__content select.variant-option",
            function () {
              var e = $(this).closest(".variant-option__group");
              e.find(".variant-option--1").val(),
                e.find(".variant-option--2:checked").val(),
                t(e.find(".variant-option"));
            }
          );
      },
      20: () => {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        (function () {
          function e() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var n, i;
          return (
            (n = e),
            (i = [
              {
                key: "init",
                value: function () {
                  var t = document.querySelector(".sus-modal__wrapper");
                  t &&
                    ((this.modal = t),
                    $(".sus-modal__trigger, .sus-modal__tabs > li > a").on(
                      "click",
                      function (t) {
                        t.preventDefault();
                        var n = $(this).attr("href");
                        e.show(n);
                      }
                    ),
                    $(".sus-modal__close, .sus-modal__overlay").on(
                      "click",
                      function (t) {
                        t.preventDefault(),
                          $(this)
                            .closest(".sus-modal")
                            .removeClass("sus-modal--show"),
                          $("body").removeClass("overflow-hidden");
                      }
                    ));
                },
              },
              {
                key: "show",
                value: function (t) {
                  document.body.classList.add("sus-modal--show"),
                    this.showTab(t);
                },
              },
              {
                key: "showTab",
                value: function (t) {
                  var e = $(this.modal);
                  e
                    .find(".sus-modal__tabs > li > a.active")
                    .removeClass("active"),
                    e.find(".sus-modal__tab.active").removeClass("active"),
                    e.find("[href='".concat(t, "']")).addClass("active"),
                    e.find(t).addClass("active");
                },
              },
            ]),
            null && t(n.prototype, null),
            i && t(n, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })().init();
      },
      851: () => {
        $(document).on("click", ".main-link__trigger", function (t) {
          var e = this.querySelector(".main-link");
          e && e.click();
        }),
          Array.prototype.equals &&
            console.warn(
              "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
            ),
          (Array.prototype.equals = function (t) {
            if (!t) return !1;
            if (this.length != t.length) return !1;
            for (var e = 0, n = this.length; e < n; e++)
              if (this[e] instanceof Array && t[e] instanceof Array) {
                if (!this[e].equals(t[e])) return !1;
              } else if (this[e] != t[e]) return !1;
            return !0;
          }),
          Object.defineProperty(Array.prototype, "equals", { enumerable: !1 }),
          (Storage.prototype.setObject = function (t, e) {
            this.setItem(t, JSON.stringify(e));
          }),
          (Storage.prototype.getObject = function (t) {
            var e = this.getItem(t);
            return e && JSON.parse(e);
          });
      },
      197: (t) => {
        var e;
        (e = function (t) {
          "use strict";
          return (function () {
            for (
              var e = [
                  ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                  ["Albania (Shqipëri)", "al", "355"],
                  ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                  ["American Samoa", "as", "1", 5, ["684"]],
                  ["Andorra", "ad", "376"],
                  ["Angola", "ao", "244"],
                  ["Anguilla", "ai", "1", 6, ["264"]],
                  ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                  ["Argentina", "ar", "54"],
                  ["Armenia (Հայաստան)", "am", "374"],
                  ["Aruba", "aw", "297"],
                  ["Ascension Island", "ac", "247"],
                  ["Australia", "au", "61", 0],
                  ["Austria (Österreich)", "at", "43"],
                  ["Azerbaijan (Azərbaycan)", "az", "994"],
                  ["Bahamas", "bs", "1", 8, ["242"]],
                  ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                  ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                  ["Barbados", "bb", "1", 9, ["246"]],
                  ["Belarus (Беларусь)", "by", "375"],
                  ["Belgium (België)", "be", "32"],
                  ["Belize", "bz", "501"],
                  ["Benin (Bénin)", "bj", "229"],
                  ["Bermuda", "bm", "1", 10, ["441"]],
                  ["Bhutan (འབྲུག)", "bt", "975"],
                  ["Bolivia", "bo", "591"],
                  ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                  ["Botswana", "bw", "267"],
                  ["Brazil (Brasil)", "br", "55"],
                  ["British Indian Ocean Territory", "io", "246"],
                  ["British Virgin Islands", "vg", "1", 11, ["284"]],
                  ["Brunei", "bn", "673"],
                  ["Bulgaria (България)", "bg", "359"],
                  ["Burkina Faso", "bf", "226"],
                  ["Burundi (Uburundi)", "bi", "257"],
                  ["Cambodia (កម្ពុជា)", "kh", "855"],
                  ["Cameroon (Cameroun)", "cm", "237"],
                  [
                    "Canada",
                    "ca",
                    "1",
                    1,
                    [
                      "204",
                      "226",
                      "236",
                      "249",
                      "250",
                      "289",
                      "306",
                      "343",
                      "365",
                      "387",
                      "403",
                      "416",
                      "418",
                      "431",
                      "437",
                      "438",
                      "450",
                      "506",
                      "514",
                      "519",
                      "548",
                      "579",
                      "581",
                      "587",
                      "604",
                      "613",
                      "639",
                      "647",
                      "672",
                      "705",
                      "709",
                      "742",
                      "778",
                      "780",
                      "782",
                      "807",
                      "819",
                      "825",
                      "867",
                      "873",
                      "902",
                      "905",
                    ],
                  ],
                  ["Cape Verde (Kabu Verdi)", "cv", "238"],
                  ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                  ["Cayman Islands", "ky", "1", 12, ["345"]],
                  [
                    "Central African Republic (République centrafricaine)",
                    "cf",
                    "236",
                  ],
                  ["Chad (Tchad)", "td", "235"],
                  ["Chile", "cl", "56"],
                  ["China (中国)", "cn", "86"],
                  ["Christmas Island", "cx", "61", 2, ["89164"]],
                  ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
                  ["Colombia", "co", "57"],
                  ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                  [
                    "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
                    "cd",
                    "243",
                  ],
                  ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                  ["Cook Islands", "ck", "682"],
                  ["Costa Rica", "cr", "506"],
                  ["Côte d’Ivoire", "ci", "225"],
                  ["Croatia (Hrvatska)", "hr", "385"],
                  ["Cuba", "cu", "53"],
                  ["Curaçao", "cw", "599", 0],
                  ["Cyprus (Κύπρος)", "cy", "357"],
                  ["Czech Republic (Česká republika)", "cz", "420"],
                  ["Denmark (Danmark)", "dk", "45"],
                  ["Djibouti", "dj", "253"],
                  ["Dominica", "dm", "1", 13, ["767"]],
                  [
                    "Dominican Republic (República Dominicana)",
                    "do",
                    "1",
                    2,
                    ["809", "829", "849"],
                  ],
                  ["Ecuador", "ec", "593"],
                  ["Egypt (‫مصر‬‎)", "eg", "20"],
                  ["El Salvador", "sv", "503"],
                  ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                  ["Eritrea", "er", "291"],
                  ["Estonia (Eesti)", "ee", "372"],
                  ["Eswatini", "sz", "268"],
                  ["Ethiopia", "et", "251"],
                  ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                  ["Faroe Islands (Føroyar)", "fo", "298"],
                  ["Fiji", "fj", "679"],
                  ["Finland (Suomi)", "fi", "358", 0],
                  ["France", "fr", "33"],
                  ["French Guiana (Guyane française)", "gf", "594"],
                  ["French Polynesia (Polynésie française)", "pf", "689"],
                  ["Gabon", "ga", "241"],
                  ["Gambia", "gm", "220"],
                  ["Georgia (საქართველო)", "ge", "995"],
                  ["Germany (Deutschland)", "de", "49"],
                  ["Ghana (Gaana)", "gh", "233"],
                  ["Gibraltar", "gi", "350"],
                  ["Greece (Ελλάδα)", "gr", "30"],
                  ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                  ["Grenada", "gd", "1", 14, ["473"]],
                  ["Guadeloupe", "gp", "590", 0],
                  ["Guam", "gu", "1", 15, ["671"]],
                  ["Guatemala", "gt", "502"],
                  ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                  ["Guinea (Guinée)", "gn", "224"],
                  ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                  ["Guyana", "gy", "592"],
                  ["Haiti", "ht", "509"],
                  ["Honduras", "hn", "504"],
                  ["Hong Kong (香港)", "hk", "852"],
                  ["Hungary (Magyarország)", "hu", "36"],
                  ["Iceland (Ísland)", "is", "354"],
                  ["India (भारत)", "in", "91"],
                  ["Indonesia", "id", "62"],
                  ["Iran (‫ایران‬‎)", "ir", "98"],
                  ["Iraq (‫العراق‬‎)", "iq", "964"],
                  ["Ireland", "ie", "353"],
                  [
                    "Isle of Man",
                    "im",
                    "44",
                    2,
                    ["1624", "74576", "7524", "7924", "7624"],
                  ],
                  ["Israel (‫ישראל‬‎)", "il", "972"],
                  ["Italy (Italia)", "it", "39", 0],
                  ["Jamaica", "jm", "1", 4, ["876", "658"]],
                  ["Japan (日本)", "jp", "81"],
                  [
                    "Jersey",
                    "je",
                    "44",
                    3,
                    ["1534", "7509", "7700", "7797", "7829", "7937"],
                  ],
                  ["Jordan (‫الأردن‬‎)", "jo", "962"],
                  ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                  ["Kenya", "ke", "254"],
                  ["Kiribati", "ki", "686"],
                  ["Kosovo", "xk", "383"],
                  ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                  ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                  ["Laos (ລາວ)", "la", "856"],
                  ["Latvia (Latvija)", "lv", "371"],
                  ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                  ["Lesotho", "ls", "266"],
                  ["Liberia", "lr", "231"],
                  ["Libya (‫ليبيا‬‎)", "ly", "218"],
                  ["Liechtenstein", "li", "423"],
                  ["Lithuania (Lietuva)", "lt", "370"],
                  ["Luxembourg", "lu", "352"],
                  ["Macau (澳門)", "mo", "853"],
                  ["North Macedonia (Македонија)", "mk", "389"],
                  ["Madagascar (Madagasikara)", "mg", "261"],
                  ["Malawi", "mw", "265"],
                  ["Malaysia", "my", "60"],
                  ["Maldives", "mv", "960"],
                  ["Mali", "ml", "223"],
                  ["Malta", "mt", "356"],
                  ["Marshall Islands", "mh", "692"],
                  ["Martinique", "mq", "596"],
                  ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                  ["Mauritius (Moris)", "mu", "230"],
                  ["Mayotte", "yt", "262", 1, ["269", "639"]],
                  ["Mexico (México)", "mx", "52"],
                  ["Micronesia", "fm", "691"],
                  ["Moldova (Republica Moldova)", "md", "373"],
                  ["Monaco", "mc", "377"],
                  ["Mongolia (Монгол)", "mn", "976"],
                  ["Montenegro (Crna Gora)", "me", "382"],
                  ["Montserrat", "ms", "1", 16, ["664"]],
                  ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                  ["Mozambique (Moçambique)", "mz", "258"],
                  ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                  ["Namibia (Namibië)", "na", "264"],
                  ["Nauru", "nr", "674"],
                  ["Nepal (नेपाल)", "np", "977"],
                  ["Netherlands (Nederland)", "nl", "31"],
                  ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                  ["Saudi Arabia", "SA", "64"],
                  ["Nicaragua", "ni", "505"],
                  ["Niger (Nijar)", "ne", "227"],
                  ["Nigeria", "ng", "234"],
                  ["Niue", "nu", "683"],
                  ["Norfolk Island", "nf", "672"],
                  ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                  ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                  ["Norway (Norge)", "no", "47", 0],
                  ["Oman (‫عُمان‬‎)", "om", "968"],
                  ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                  ["Palau", "pw", "680"],
                  ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                  ["Panama (Panamá)", "pa", "507"],
                  ["Papua New Guinea", "pg", "675"],
                  ["Paraguay", "py", "595"],
                  ["Peru (Perú)", "pe", "51"],
                  ["Philippines", "ph", "63"],
                  ["Poland (Polska)", "pl", "48"],
                  ["Portugal", "pt", "351"],
                  ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                  ["Qatar (‫قطر‬‎)", "qa", "974"],
                  ["Réunion (La Réunion)", "re", "262", 0],
                  ["Romania (România)", "ro", "40"],
                  ["Russia (Россия)", "ru", "7", 0],
                  ["Rwanda", "rw", "250"],
                  ["Saint Barthélemy", "bl", "590", 1],
                  ["Saint Helena", "sh", "290"],
                  ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                  ["Saint Lucia", "lc", "1", 19, ["758"]],
                  [
                    "Saint Martin (Saint-Martin (partie française))",
                    "mf",
                    "590",
                    2,
                  ],
                  [
                    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                    "pm",
                    "508",
                  ],
                  ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                  ["Samoa", "ws", "685"],
                  ["San Marino", "sm", "378"],
                  ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                  ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                  ["Senegal (Sénégal)", "sn", "221"],
                  ["Serbia (Србија)", "rs", "381"],
                  ["Seychelles", "sc", "248"],
                  ["Sierra Leone", "sl", "232"],
                  ["Singapore", "sg", "65"],
                  ["Sint Maarten", "sx", "1", 21, ["721"]],
                  ["Slovakia (Slovensko)", "sk", "421"],
                  ["Slovenia (Slovenija)", "si", "386"],
                  ["Solomon Islands", "sb", "677"],
                  ["Somalia (Soomaaliya)", "so", "252"],
                  ["South Africa", "za", "27"],
                  ["South Korea (대한민국)", "kr", "82"],
                  ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                  ["Spain (España)", "es", "34"],
                  ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                  ["Sudan (‫السودان‬‎)", "sd", "249"],
                  ["Suriname", "sr", "597"],
                  ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                  ["Sweden (Sverige)", "se", "46"],
                  ["Switzerland (Schweiz)", "ch", "41"],
                  ["Syria (‫سوريا‬‎)", "sy", "963"],
                  ["Taiwan (台灣)", "tw", "886"],
                  ["Tajikistan", "tj", "992"],
                  ["Tanzania", "tz", "255"],
                  ["Thailand (ไทย)", "th", "66"],
                  ["Timor-Leste", "tl", "670"],
                  ["Togo", "tg", "228"],
                  ["Tokelau", "tk", "690"],
                  ["Tonga", "to", "676"],
                  ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                  ["Tunisia (‫تونس‬‎)", "tn", "216"],
                  ["Turkey (Türkiye)", "tr", "90"],
                  ["Turkmenistan", "tm", "993"],
                  ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                  ["Tuvalu", "tv", "688"],
                  ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                  ["Uganda", "ug", "256"],
                  ["Ukraine (Україна)", "ua", "380"],
                  [
                    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
                    "ae",
                    "971",
                  ],
                  ["United Kingdom", "gb", "44", 0],
                  ["United States", "us", "1", 0],
                  ["Uruguay", "uy", "598"],
                  ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                  ["Vanuatu", "vu", "678"],
                  [
                    "Vatican City (Città del Vaticano)",
                    "va",
                    "39",
                    1,
                    ["06698"],
                  ],
                  ["Venezuela", "ve", "58"],
                  ["Vietnam (Việt Nam)", "vn", "84"],
                  ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                  [
                    "Western Sahara (‫الصحراء الغربية‬‎)",
                    "eh",
                    "212",
                    1,
                    ["5288", "5289"],
                  ],
                  ["Yemen (‫اليمن‬‎)", "ye", "967"],
                  ["Zambia", "zm", "260"],
                  ["Zimbabwe", "zw", "263"],
                  ["Åland Islands", "ax", "358", 1, ["18"]],
                ],
                n = 0;
              n < e.length;
              n++
            ) {
              var i = e[n];
              e[n] = {
                name: i[0],
                iso2: i[1],
                dialCode: i[2],
                priority: i[3] || 0,
                areaCodes: i[4] || null,
              };
            }
            function r(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            }
            var o = {
              getInstance: function (t) {
                var e = t.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[e];
              },
              instances: {},
              documentReady: function () {
                return "complete" === document.readyState;
              },
            };
            "object" == typeof window && (window.intlTelInputGlobals = o);
            var a = 0,
              s = {
                allowDropdown: !0,
                autoHideDialCode: !0,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: !0,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: !0,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: !1,
                utilsScript: "",
              },
              u = [
                "800",
                "822",
                "833",
                "844",
                "855",
                "866",
                "877",
                "880",
                "881",
                "882",
                "883",
                "884",
                "885",
                "886",
                "887",
                "888",
                "889",
              ],
              l = function (t, e) {
                for (var n = Object.keys(t), i = 0; i < n.length; i++)
                  e(n[i], t[n[i]]);
              },
              c = function (t) {
                l(window.intlTelInputGlobals.instances, function (e) {
                  window.intlTelInputGlobals.instances[e][t]();
                });
              },
              d = (function () {
                function n(t, e) {
                  var i = this;
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, n),
                    (this.id = a++),
                    (this.telInput = t),
                    (this.activeItem = null),
                    (this.highlightedItem = null);
                  var r = e || {};
                  (this.options = {}),
                    l(s, function (t, e) {
                      i.options[t] = r.hasOwnProperty(t) ? r[t] : e;
                    }),
                    (this.hadInitialPlaceholder = Boolean(
                      t.getAttribute("placeholder")
                    ));
                }
                var i, o;
                return (
                  (i = n),
                  (o = [
                    {
                      key: "_init",
                      value: function () {
                        var t = this;
                        if (
                          (this.options.nationalMode &&
                            (this.options.autoHideDialCode = !1),
                          this.options.separateDialCode &&
                            (this.options.autoHideDialCode =
                              this.options.nationalMode =
                                !1),
                          (this.isMobile =
                            /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                              navigator.userAgent
                            )),
                          this.isMobile &&
                            (document.body.classList.add("iti-mobile"),
                            this.options.dropdownContainer ||
                              (this.options.dropdownContainer = document.body)),
                          "undefined" != typeof Promise)
                        ) {
                          var e = new Promise(function (e, n) {
                              (t.resolveAutoCountryPromise = e),
                                (t.rejectAutoCountryPromise = n);
                            }),
                            n = new Promise(function (e, n) {
                              (t.resolveUtilsScriptPromise = e),
                                (t.rejectUtilsScriptPromise = n);
                            });
                          this.promise = Promise.all([e, n]);
                        } else
                          (this.resolveAutoCountryPromise =
                            this.rejectAutoCountryPromise =
                              function () {}),
                            (this.resolveUtilsScriptPromise =
                              this.rejectUtilsScriptPromise =
                                function () {});
                        (this.selectedCountryData = {}),
                          this._processCountryData(),
                          this._generateMarkup(),
                          this._setInitialState(),
                          this._initListeners(),
                          this._initRequests();
                      },
                    },
                    {
                      key: "_processCountryData",
                      value: function () {
                        this._processAllCountries(),
                          this._processCountryCodes(),
                          this._processPreferredCountries(),
                          this.options.localizedCountries &&
                            this._translateCountriesByLocale(),
                          (this.options.onlyCountries.length ||
                            this.options.localizedCountries) &&
                            this.countries.sort(this._countryNameSort);
                      },
                    },
                    {
                      key: "_addCountryCode",
                      value: function (e, n, i) {
                        n.length > this.countryCodeMaxLen &&
                          (this.countryCodeMaxLen = n.length),
                          this.countryCodes.hasOwnProperty(n) ||
                            (this.countryCodes[n] = []);
                        for (var r = 0; r < this.countryCodes[n].length; r++)
                          if (this.countryCodes[n][r] === e) return;
                        var o = i !== t ? i : this.countryCodes[n].length;
                        this.countryCodes[n][o] = e;
                      },
                    },
                    {
                      key: "_processAllCountries",
                      value: function () {
                        if (this.options.onlyCountries.length) {
                          var t = this.options.onlyCountries.map(function (t) {
                            return t.toLowerCase();
                          });
                          this.countries = e.filter(function (e) {
                            return t.indexOf(e.iso2) > -1;
                          });
                        } else if (this.options.excludeCountries.length) {
                          var n = this.options.excludeCountries.map(function (
                            t
                          ) {
                            return t.toLowerCase();
                          });
                          this.countries = e.filter(function (t) {
                            return -1 === n.indexOf(t.iso2);
                          });
                        } else this.countries = e;
                      },
                    },
                    {
                      key: "_translateCountriesByLocale",
                      value: function () {
                        for (var t = 0; t < this.countries.length; t++) {
                          var e = this.countries[t].iso2.toLowerCase();
                          this.options.localizedCountries.hasOwnProperty(e) &&
                            (this.countries[t].name =
                              this.options.localizedCountries[e]);
                        }
                      },
                    },
                    {
                      key: "_countryNameSort",
                      value: function (t, e) {
                        return t.name.localeCompare(e.name);
                      },
                    },
                    {
                      key: "_processCountryCodes",
                      value: function () {
                        (this.countryCodeMaxLen = 0),
                          (this.dialCodes = {}),
                          (this.countryCodes = {});
                        for (var t = 0; t < this.countries.length; t++) {
                          var e = this.countries[t];
                          this.dialCodes[e.dialCode] ||
                            (this.dialCodes[e.dialCode] = !0),
                            this._addCountryCode(
                              e.iso2,
                              e.dialCode,
                              e.priority
                            );
                        }
                        for (var n = 0; n < this.countries.length; n++) {
                          var i = this.countries[n];
                          if (i.areaCodes)
                            for (
                              var r = this.countryCodes[i.dialCode][0], o = 0;
                              o < i.areaCodes.length;
                              o++
                            ) {
                              for (
                                var a = i.areaCodes[o], s = 1;
                                s < a.length;
                                s++
                              ) {
                                var u = i.dialCode + a.substr(0, s);
                                this._addCountryCode(r, u),
                                  this._addCountryCode(i.iso2, u);
                              }
                              this._addCountryCode(i.iso2, i.dialCode + a);
                            }
                        }
                      },
                    },
                    {
                      key: "_processPreferredCountries",
                      value: function () {
                        this.preferredCountries = [];
                        for (
                          var t = 0;
                          t < this.options.preferredCountries.length;
                          t++
                        ) {
                          var e =
                              this.options.preferredCountries[t].toLowerCase(),
                            n = this._getCountryData(e, !1, !0);
                          n && this.preferredCountries.push(n);
                        }
                      },
                    },
                    {
                      key: "_createEl",
                      value: function (t, e, n) {
                        var i = document.createElement(t);
                        return (
                          e &&
                            l(e, function (t, e) {
                              return i.setAttribute(t, e);
                            }),
                          n && n.appendChild(i),
                          i
                        );
                      },
                    },
                    {
                      key: "_generateMarkup",
                      value: function () {
                        this.telInput.hasAttribute("autocomplete") ||
                          (this.telInput.form &&
                            this.telInput.form.hasAttribute("autocomplete")) ||
                          this.telInput.setAttribute("autocomplete", "off");
                        var t = "iti";
                        this.options.allowDropdown &&
                          (t += " iti--allow-dropdown"),
                          this.options.separateDialCode &&
                            (t += " iti--separate-dial-code"),
                          this.options.customContainer &&
                            ((t += " "), (t += this.options.customContainer));
                        var e = this._createEl("div", { class: t });
                        if (
                          (this.telInput.parentNode.insertBefore(
                            e,
                            this.telInput
                          ),
                          (this.flagsContainer = this._createEl(
                            "div",
                            { class: "iti__flag-container" },
                            e
                          )),
                          e.appendChild(this.telInput),
                          (this.selectedFlag = this._createEl(
                            "div",
                            {
                              class: "iti__selected-flag",
                              role: "combobox",
                              "aria-controls": "iti-".concat(
                                this.id,
                                "__country-listbox"
                              ),
                              "aria-owns": "iti-".concat(
                                this.id,
                                "__country-listbox"
                              ),
                              "aria-expanded": "false",
                            },
                            this.flagsContainer
                          )),
                          (this.selectedFlagInner = this._createEl(
                            "div",
                            { class: "iti__flag" },
                            this.selectedFlag
                          )),
                          this.options.separateDialCode &&
                            (this.selectedDialCode = this._createEl(
                              "div",
                              { class: "iti__selected-dial-code" },
                              this.selectedFlag
                            )),
                          this.options.allowDropdown &&
                            (this.selectedFlag.setAttribute("tabindex", "0"),
                            (this.dropdownArrow = this._createEl(
                              "div",
                              { class: "iti__arrow" },
                              this.selectedFlag
                            )),
                            (this.countryList = this._createEl("ul", {
                              class: "iti__country-list iti__hide",
                              id: "iti-".concat(this.id, "__country-listbox"),
                              role: "listbox",
                              "aria-label": "List of countries",
                            })),
                            this.preferredCountries.length &&
                              (this._appendListItems(
                                this.preferredCountries,
                                "iti__preferred",
                                !0
                              ),
                              this._createEl(
                                "li",
                                {
                                  class: "iti__divider",
                                  role: "separator",
                                  "aria-disabled": "true",
                                },
                                this.countryList
                              )),
                            this._appendListItems(
                              this.countries,
                              "iti__standard"
                            ),
                            this.options.dropdownContainer
                              ? ((this.dropdown = this._createEl("div", {
                                  class: "iti iti--container",
                                })),
                                this.dropdown.appendChild(this.countryList))
                              : this.flagsContainer.appendChild(
                                  this.countryList
                                )),
                          this.options.hiddenInput)
                        ) {
                          var n = this.options.hiddenInput,
                            i = this.telInput.getAttribute("name");
                          if (i) {
                            var r = i.lastIndexOf("[");
                            -1 !== r &&
                              (n = ""
                                .concat(i.substr(0, r), "[")
                                .concat(n, "]"));
                          }
                          (this.hiddenInput = this._createEl("input", {
                            type: "hidden",
                            name: n,
                          })),
                            e.appendChild(this.hiddenInput);
                        }
                      },
                    },
                    {
                      key: "_appendListItems",
                      value: function (t, e, n) {
                        for (var i = "", r = 0; r < t.length; r++) {
                          var o = t[r],
                            a = n ? "-preferred" : "";
                          (i += "<li class='iti__country "
                            .concat(e, "' tabIndex='-1' id='iti-")
                            .concat(this.id, "__item-")
                            .concat(o.iso2)
                            .concat(a, "' role='option' data-dial-code='")
                            .concat(o.dialCode, "' data-country-code='")
                            .concat(o.iso2, "' aria-selected='false'>")),
                            (i +=
                              "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
                                o.iso2,
                                "'></div></div>"
                              )),
                            (i += "<span class='iti__country-name'>".concat(
                              o.name,
                              "</span>"
                            )),
                            (i += "<span class='iti__dial-code'>+".concat(
                              o.dialCode,
                              "</span>"
                            )),
                            (i += "</li>");
                        }
                        this.countryList.insertAdjacentHTML("beforeend", i);
                      },
                    },
                    {
                      key: "_setInitialState",
                      value: function () {
                        var t = this.telInput.getAttribute("value"),
                          e = this.telInput.value,
                          n =
                            !t ||
                            "+" !== t.charAt(0) ||
                            (e && "+" === e.charAt(0))
                              ? e
                              : t,
                          i = this._getDialCode(n),
                          r = this._isRegionlessNanp(n),
                          o = this.options,
                          a = o.initialCountry,
                          s = o.nationalMode,
                          u = o.autoHideDialCode,
                          l = o.separateDialCode;
                        i && !r
                          ? this._updateFlagFromNumber(n)
                          : "auto" !== a &&
                            (a
                              ? this._setFlag(a.toLowerCase())
                              : i && r
                              ? this._setFlag("us")
                              : ((this.defaultCountry = this.preferredCountries
                                  .length
                                  ? this.preferredCountries[0].iso2
                                  : this.countries[0].iso2),
                                n || this._setFlag(this.defaultCountry)),
                            n ||
                              s ||
                              u ||
                              l ||
                              (this.telInput.value = "+".concat(
                                this.selectedCountryData.dialCode
                              ))),
                          n && this._updateValFromNumber(n);
                      },
                    },
                    {
                      key: "_initListeners",
                      value: function () {
                        this._initKeyListeners(),
                          this.options.autoHideDialCode &&
                            this._initBlurListeners(),
                          this.options.allowDropdown &&
                            this._initDropdownListeners(),
                          this.hiddenInput && this._initHiddenInputListener();
                      },
                    },
                    {
                      key: "_initHiddenInputListener",
                      value: function () {
                        var t = this;
                        (this._handleHiddenInputSubmit = function () {
                          t.hiddenInput.value = t.getNumber();
                        }),
                          this.telInput.form &&
                            this.telInput.form.addEventListener(
                              "submit",
                              this._handleHiddenInputSubmit
                            );
                      },
                    },
                    {
                      key: "_getClosestLabel",
                      value: function () {
                        for (
                          var t = this.telInput;
                          t && "LABEL" !== t.tagName;

                        )
                          t = t.parentNode;
                        return t;
                      },
                    },
                    {
                      key: "_initDropdownListeners",
                      value: function () {
                        var t = this;
                        this._handleLabelClick = function (e) {
                          t.countryList.classList.contains("iti__hide")
                            ? t.telInput.focus()
                            : e.preventDefault();
                        };
                        var e = this._getClosestLabel();
                        e &&
                          e.addEventListener("click", this._handleLabelClick),
                          (this._handleClickSelectedFlag = function () {
                            !t.countryList.classList.contains("iti__hide") ||
                              t.telInput.disabled ||
                              t.telInput.readOnly ||
                              t._showDropdown();
                          }),
                          this.selectedFlag.addEventListener(
                            "click",
                            this._handleClickSelectedFlag
                          ),
                          (this._handleFlagsContainerKeydown = function (e) {
                            t.countryList.classList.contains("iti__hide") &&
                              -1 !==
                                [
                                  "ArrowUp",
                                  "Up",
                                  "ArrowDown",
                                  "Down",
                                  " ",
                                  "Enter",
                                ].indexOf(e.key) &&
                              (e.preventDefault(),
                              e.stopPropagation(),
                              t._showDropdown()),
                              "Tab" === e.key && t._closeDropdown();
                          }),
                          this.flagsContainer.addEventListener(
                            "keydown",
                            this._handleFlagsContainerKeydown
                          );
                      },
                    },
                    {
                      key: "_initRequests",
                      value: function () {
                        var t = this;
                        this.options.utilsScript && !window.intlTelInputUtils
                          ? window.intlTelInputGlobals.documentReady()
                            ? window.intlTelInputGlobals.loadUtils(
                                this.options.utilsScript
                              )
                            : window.addEventListener("load", function () {
                                window.intlTelInputGlobals.loadUtils(
                                  t.options.utilsScript
                                );
                              })
                          : this.resolveUtilsScriptPromise(),
                          "auto" === this.options.initialCountry
                            ? this._loadAutoCountry()
                            : this.resolveAutoCountryPromise();
                      },
                    },
                    {
                      key: "_loadAutoCountry",
                      value: function () {
                        window.intlTelInputGlobals.autoCountry
                          ? this.handleAutoCountry()
                          : window.intlTelInputGlobals
                              .startedLoadingAutoCountry ||
                            ((window.intlTelInputGlobals.startedLoadingAutoCountry =
                              !0),
                            "function" == typeof this.options.geoIpLookup &&
                              this.options.geoIpLookup(
                                function (t) {
                                  (window.intlTelInputGlobals.autoCountry =
                                    t.toLowerCase()),
                                    setTimeout(function () {
                                      return c("handleAutoCountry");
                                    });
                                },
                                function () {
                                  return c("rejectAutoCountryPromise");
                                }
                              ));
                      },
                    },
                    {
                      key: "_initKeyListeners",
                      value: function () {
                        var t = this;
                        (this._handleKeyupEvent = function () {
                          t._updateFlagFromNumber(t.telInput.value) &&
                            t._triggerCountryChange();
                        }),
                          this.telInput.addEventListener(
                            "keyup",
                            this._handleKeyupEvent
                          ),
                          (this._handleClipboardEvent = function () {
                            setTimeout(t._handleKeyupEvent);
                          }),
                          this.telInput.addEventListener(
                            "cut",
                            this._handleClipboardEvent
                          ),
                          this.telInput.addEventListener(
                            "paste",
                            this._handleClipboardEvent
                          );
                      },
                    },
                    {
                      key: "_cap",
                      value: function (t) {
                        var e = this.telInput.getAttribute("maxlength");
                        return e && t.length > e ? t.substr(0, e) : t;
                      },
                    },
                    {
                      key: "_initBlurListeners",
                      value: function () {
                        var t = this;
                        (this._handleSubmitOrBlurEvent = function () {
                          t._removeEmptyDialCode();
                        }),
                          this.telInput.form &&
                            this.telInput.form.addEventListener(
                              "submit",
                              this._handleSubmitOrBlurEvent
                            ),
                          this.telInput.addEventListener(
                            "blur",
                            this._handleSubmitOrBlurEvent
                          );
                      },
                    },
                    {
                      key: "_removeEmptyDialCode",
                      value: function () {
                        if ("+" === this.telInput.value.charAt(0)) {
                          var t = this._getNumeric(this.telInput.value);
                          (t && this.selectedCountryData.dialCode !== t) ||
                            (this.telInput.value = "");
                        }
                      },
                    },
                    {
                      key: "_getNumeric",
                      value: function (t) {
                        return t.replace(/\D/g, "");
                      },
                    },
                    {
                      key: "_trigger",
                      value: function (t) {
                        var e = document.createEvent("Event");
                        e.initEvent(t, !0, !0), this.telInput.dispatchEvent(e);
                      },
                    },
                    {
                      key: "_showDropdown",
                      value: function () {
                        this.countryList.classList.remove("iti__hide"),
                          this.selectedFlag.setAttribute(
                            "aria-expanded",
                            "true"
                          ),
                          this._setDropdownPosition(),
                          this.activeItem &&
                            (this._highlightListItem(this.activeItem, !1),
                            this._scrollTo(this.activeItem, !0)),
                          this._bindDropdownListeners(),
                          this.dropdownArrow.classList.add("iti__arrow--up"),
                          this._trigger("open:countrydropdown");
                      },
                    },
                    {
                      key: "_toggleClass",
                      value: function (t, e, n) {
                        n && !t.classList.contains(e)
                          ? t.classList.add(e)
                          : !n &&
                            t.classList.contains(e) &&
                            t.classList.remove(e);
                      },
                    },
                    {
                      key: "_setDropdownPosition",
                      value: function () {
                        var t = this;
                        if (
                          (this.options.dropdownContainer &&
                            this.options.dropdownContainer.appendChild(
                              this.dropdown
                            ),
                          !this.isMobile)
                        ) {
                          var e = this.telInput.getBoundingClientRect(),
                            n =
                              window.pageYOffset ||
                              document.documentElement.scrollTop,
                            i = e.top + n,
                            r = this.countryList.offsetHeight,
                            o =
                              i + this.telInput.offsetHeight + r <
                              n + window.innerHeight,
                            a = i - r > n;
                          if (
                            (this._toggleClass(
                              this.countryList,
                              "iti__country-list--dropup",
                              !o && a
                            ),
                            this.options.dropdownContainer)
                          ) {
                            var s = !o && a ? 0 : this.telInput.offsetHeight;
                            (this.dropdown.style.top = "".concat(i + s, "px")),
                              (this.dropdown.style.left = "".concat(
                                e.left + document.body.scrollLeft,
                                "px"
                              )),
                              (this._handleWindowScroll = function () {
                                return t._closeDropdown();
                              }),
                              window.addEventListener(
                                "scroll",
                                this._handleWindowScroll
                              );
                          }
                        }
                      },
                    },
                    {
                      key: "_getClosestListItem",
                      value: function (t) {
                        for (
                          var e = t;
                          e &&
                          e !== this.countryList &&
                          !e.classList.contains("iti__country");

                        )
                          e = e.parentNode;
                        return e === this.countryList ? null : e;
                      },
                    },
                    {
                      key: "_bindDropdownListeners",
                      value: function () {
                        var t = this;
                        (this._handleMouseoverCountryList = function (e) {
                          var n = t._getClosestListItem(e.target);
                          n && t._highlightListItem(n, !1);
                        }),
                          this.countryList.addEventListener(
                            "mouseover",
                            this._handleMouseoverCountryList
                          ),
                          (this._handleClickCountryList = function (e) {
                            var n = t._getClosestListItem(e.target);
                            n && t._selectListItem(n);
                          }),
                          this.countryList.addEventListener(
                            "click",
                            this._handleClickCountryList
                          );
                        var e = !0;
                        (this._handleClickOffToClose = function () {
                          e || t._closeDropdown(), (e = !1);
                        }),
                          document.documentElement.addEventListener(
                            "click",
                            this._handleClickOffToClose
                          );
                        var n = "",
                          i = null;
                        (this._handleKeydownOnDropdown = function (e) {
                          e.preventDefault(),
                            "ArrowUp" === e.key ||
                            "Up" === e.key ||
                            "ArrowDown" === e.key ||
                            "Down" === e.key
                              ? t._handleUpDownKey(e.key)
                              : "Enter" === e.key
                              ? t._handleEnterKey()
                              : "Escape" === e.key
                              ? t._closeDropdown()
                              : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key) &&
                                (i && clearTimeout(i),
                                (n += e.key.toLowerCase()),
                                t._searchForCountry(n),
                                (i = setTimeout(function () {
                                  n = "";
                                }, 1e3)));
                        }),
                          document.addEventListener(
                            "keydown",
                            this._handleKeydownOnDropdown
                          );
                      },
                    },
                    {
                      key: "_handleUpDownKey",
                      value: function (t) {
                        var e =
                          "ArrowUp" === t || "Up" === t
                            ? this.highlightedItem.previousElementSibling
                            : this.highlightedItem.nextElementSibling;
                        e &&
                          (e.classList.contains("iti__divider") &&
                            (e =
                              "ArrowUp" === t || "Up" === t
                                ? e.previousElementSibling
                                : e.nextElementSibling),
                          this._highlightListItem(e, !0));
                      },
                    },
                    {
                      key: "_handleEnterKey",
                      value: function () {
                        this.highlightedItem &&
                          this._selectListItem(this.highlightedItem);
                      },
                    },
                    {
                      key: "_searchForCountry",
                      value: function (t) {
                        for (var e = 0; e < this.countries.length; e++)
                          if (this._startsWith(this.countries[e].name, t)) {
                            var n = this.countryList.querySelector(
                              "#iti-"
                                .concat(this.id, "__item-")
                                .concat(this.countries[e].iso2)
                            );
                            this._highlightListItem(n, !1),
                              this._scrollTo(n, !0);
                            break;
                          }
                      },
                    },
                    {
                      key: "_startsWith",
                      value: function (t, e) {
                        return t.substr(0, e.length).toLowerCase() === e;
                      },
                    },
                    {
                      key: "_updateValFromNumber",
                      value: function (t) {
                        var e = t;
                        if (
                          this.options.formatOnDisplay &&
                          window.intlTelInputUtils &&
                          this.selectedCountryData
                        ) {
                          var n =
                              !this.options.separateDialCode &&
                              (this.options.nationalMode ||
                                "+" !== e.charAt(0)),
                            i = intlTelInputUtils.numberFormat,
                            r = i.NATIONAL,
                            o = i.INTERNATIONAL,
                            a = n ? r : o;
                          e = intlTelInputUtils.formatNumber(
                            e,
                            this.selectedCountryData.iso2,
                            a
                          );
                        }
                        (e = this._beforeSetNumber(e)),
                          (this.telInput.value = e);
                      },
                    },
                    {
                      key: "_updateFlagFromNumber",
                      value: function (t) {
                        var e = t,
                          n = this.selectedCountryData.dialCode,
                          i = "1" === n;
                        e &&
                          this.options.nationalMode &&
                          i &&
                          "+" !== e.charAt(0) &&
                          ("1" !== e.charAt(0) && (e = "1".concat(e)),
                          (e = "+".concat(e))),
                          this.options.separateDialCode &&
                            n &&
                            "+" !== e.charAt(0) &&
                            (e = "+".concat(n).concat(e));
                        var r = this._getDialCode(e, !0),
                          o = this._getNumeric(e),
                          a = null;
                        if (r) {
                          var s = this.countryCodes[this._getNumeric(r)],
                            u =
                              -1 !== s.indexOf(this.selectedCountryData.iso2) &&
                              o.length <= r.length - 1;
                          if (!(("1" === n && this._isRegionlessNanp(o)) || u))
                            for (var l = 0; l < s.length; l++)
                              if (s[l]) {
                                a = s[l];
                                break;
                              }
                        } else
                          "+" === e.charAt(0) && o.length
                            ? (a = "")
                            : (e && "+" !== e) || (a = this.defaultCountry);
                        return null !== a && this._setFlag(a);
                      },
                    },
                    {
                      key: "_isRegionlessNanp",
                      value: function (t) {
                        var e = this._getNumeric(t);
                        if ("1" === e.charAt(0)) {
                          var n = e.substr(1, 3);
                          return -1 !== u.indexOf(n);
                        }
                        return !1;
                      },
                    },
                    {
                      key: "_highlightListItem",
                      value: function (t, e) {
                        var n = this.highlightedItem;
                        n && n.classList.remove("iti__highlight"),
                          (this.highlightedItem = t),
                          this.highlightedItem.classList.add("iti__highlight"),
                          e && this.highlightedItem.focus();
                      },
                    },
                    {
                      key: "_getCountryData",
                      value: function (t, n, i) {
                        for (
                          var r = n ? e : this.countries, o = 0;
                          o < r.length;
                          o++
                        )
                          if (r[o].iso2 === t) return r[o];
                        if (i) return null;
                        throw new Error("No country data for '".concat(t, "'"));
                      },
                    },
                    {
                      key: "_setFlag",
                      value: function (t) {
                        var e = this.selectedCountryData.iso2
                          ? this.selectedCountryData
                          : {};
                        (this.selectedCountryData = t
                          ? this._getCountryData(t, !1, !1)
                          : {}),
                          this.selectedCountryData.iso2 &&
                            (this.defaultCountry =
                              this.selectedCountryData.iso2),
                          this.selectedFlagInner.setAttribute(
                            "class",
                            "iti__flag iti__".concat(t)
                          );
                        var n = t
                          ? ""
                              .concat(this.selectedCountryData.name, ": +")
                              .concat(this.selectedCountryData.dialCode)
                          : "Unknown";
                        if (
                          (this.selectedFlag.setAttribute("title", n),
                          this.options.separateDialCode)
                        ) {
                          var i = this.selectedCountryData.dialCode
                            ? "+".concat(this.selectedCountryData.dialCode)
                            : "";
                          this.selectedDialCode.innerHTML = i;
                          var r =
                            this.selectedFlag.offsetWidth ||
                            this._getHiddenSelectedFlagWidth();
                          this.telInput.style.paddingLeft = "".concat(
                            r + 6,
                            "px"
                          );
                        }
                        if (
                          (this._updatePlaceholder(),
                          this.options.allowDropdown)
                        ) {
                          var o = this.activeItem;
                          if (
                            (o &&
                              (o.classList.remove("iti__active"),
                              o.setAttribute("aria-selected", "false")),
                            t)
                          ) {
                            var a =
                              this.countryList.querySelector(
                                "#iti-"
                                  .concat(this.id, "__item-")
                                  .concat(t, "-preferred")
                              ) ||
                              this.countryList.querySelector(
                                "#iti-".concat(this.id, "__item-").concat(t)
                              );
                            a.setAttribute("aria-selected", "true"),
                              a.classList.add("iti__active"),
                              (this.activeItem = a),
                              this.selectedFlag.setAttribute(
                                "aria-activedescendant",
                                a.getAttribute("id")
                              );
                          }
                        }
                        return e.iso2 !== t;
                      },
                    },
                    {
                      key: "_getHiddenSelectedFlagWidth",
                      value: function () {
                        var t = this.telInput.parentNode.cloneNode();
                        (t.style.visibility = "hidden"),
                          document.body.appendChild(t);
                        var e = this.flagsContainer.cloneNode();
                        t.appendChild(e);
                        var n = this.selectedFlag.cloneNode(!0);
                        e.appendChild(n);
                        var i = n.offsetWidth;
                        return t.parentNode.removeChild(t), i;
                      },
                    },
                    {
                      key: "_updatePlaceholder",
                      value: function () {
                        var t =
                          "aggressive" === this.options.autoPlaceholder ||
                          (!this.hadInitialPlaceholder &&
                            "polite" === this.options.autoPlaceholder);
                        if (window.intlTelInputUtils && t) {
                          var e =
                              intlTelInputUtils.numberType[
                                this.options.placeholderNumberType
                              ],
                            n = this.selectedCountryData.iso2
                              ? intlTelInputUtils.getExampleNumber(
                                  this.selectedCountryData.iso2,
                                  this.options.nationalMode,
                                  e
                                )
                              : "";
                          (n = this._beforeSetNumber(n)),
                            "function" ==
                              typeof this.options.customPlaceholder &&
                              (n = this.options.customPlaceholder(
                                n,
                                this.selectedCountryData
                              )),
                            this.telInput.setAttribute("placeholder", n);
                        }
                      },
                    },
                    {
                      key: "_selectListItem",
                      value: function (t) {
                        var e = this._setFlag(
                          t.getAttribute("data-country-code")
                        );
                        this._closeDropdown(),
                          this._updateDialCode(
                            t.getAttribute("data-dial-code"),
                            !0
                          ),
                          this.telInput.focus();
                        var n = this.telInput.value.length;
                        this.telInput.setSelectionRange(n, n),
                          e && this._triggerCountryChange();
                      },
                    },
                    {
                      key: "_closeDropdown",
                      value: function () {
                        this.countryList.classList.add("iti__hide"),
                          this.selectedFlag.setAttribute(
                            "aria-expanded",
                            "false"
                          ),
                          this.dropdownArrow.classList.remove("iti__arrow--up"),
                          document.removeEventListener(
                            "keydown",
                            this._handleKeydownOnDropdown
                          ),
                          document.documentElement.removeEventListener(
                            "click",
                            this._handleClickOffToClose
                          ),
                          this.countryList.removeEventListener(
                            "mouseover",
                            this._handleMouseoverCountryList
                          ),
                          this.countryList.removeEventListener(
                            "click",
                            this._handleClickCountryList
                          ),
                          this.options.dropdownContainer &&
                            (this.isMobile ||
                              window.removeEventListener(
                                "scroll",
                                this._handleWindowScroll
                              ),
                            this.dropdown.parentNode &&
                              this.dropdown.parentNode.removeChild(
                                this.dropdown
                              )),
                          this._trigger("close:countrydropdown");
                      },
                    },
                    {
                      key: "_scrollTo",
                      value: function (t, e) {
                        var n = this.countryList,
                          i =
                            window.pageYOffset ||
                            document.documentElement.scrollTop,
                          r = n.offsetHeight,
                          o = n.getBoundingClientRect().top + i,
                          a = o + r,
                          s = t.offsetHeight,
                          u = t.getBoundingClientRect().top + i,
                          l = u + s,
                          c = u - o + n.scrollTop,
                          d = r / 2 - s / 2;
                        if (u < o) e && (c -= d), (n.scrollTop = c);
                        else if (l > a) {
                          e && (c += d);
                          var h = r - s;
                          n.scrollTop = c - h;
                        }
                      },
                    },
                    {
                      key: "_updateDialCode",
                      value: function (t, e) {
                        var n,
                          i = this.telInput.value,
                          r = "+".concat(t);
                        if ("+" === i.charAt(0)) {
                          var o = this._getDialCode(i);
                          n = o ? i.replace(o, r) : r;
                        } else {
                          if (
                            this.options.nationalMode ||
                            this.options.separateDialCode
                          )
                            return;
                          if (i) n = r + i;
                          else {
                            if (!e && this.options.autoHideDialCode) return;
                            n = r;
                          }
                        }
                        this.telInput.value = n;
                      },
                    },
                    {
                      key: "_getDialCode",
                      value: function (t, e) {
                        var n = "";
                        if ("+" === t.charAt(0))
                          for (var i = "", r = 0; r < t.length; r++) {
                            var o = t.charAt(r);
                            if (!isNaN(parseInt(o, 10))) {
                              if (((i += o), e))
                                this.countryCodes[i] &&
                                  (n = t.substr(0, r + 1));
                              else if (this.dialCodes[i]) {
                                n = t.substr(0, r + 1);
                                break;
                              }
                              if (i.length === this.countryCodeMaxLen) break;
                            }
                          }
                        return n;
                      },
                    },
                    {
                      key: "_getFullNumber",
                      value: function () {
                        var t = this.telInput.value.trim(),
                          e = this.selectedCountryData.dialCode,
                          n = this._getNumeric(t);
                        return (
                          (this.options.separateDialCode &&
                          "+" !== t.charAt(0) &&
                          e &&
                          n
                            ? "+".concat(e)
                            : "") + t
                        );
                      },
                    },
                    {
                      key: "_beforeSetNumber",
                      value: function (t) {
                        var e = t;
                        if (this.options.separateDialCode) {
                          var n = this._getDialCode(e);
                          if (n) {
                            var i =
                              " " ===
                                e[
                                  (n = "+".concat(
                                    this.selectedCountryData.dialCode
                                  )).length
                                ] || "-" === e[n.length]
                                ? n.length + 1
                                : n.length;
                            e = e.substr(i);
                          }
                        }
                        return this._cap(e);
                      },
                    },
                    {
                      key: "_triggerCountryChange",
                      value: function () {
                        this._trigger("countrychange");
                      },
                    },
                    {
                      key: "handleAutoCountry",
                      value: function () {
                        "auto" === this.options.initialCountry &&
                          ((this.defaultCountry =
                            window.intlTelInputGlobals.autoCountry),
                          this.telInput.value ||
                            this.setCountry(this.defaultCountry),
                          this.resolveAutoCountryPromise());
                      },
                    },
                    {
                      key: "handleUtils",
                      value: function () {
                        window.intlTelInputUtils &&
                          (this.telInput.value &&
                            this._updateValFromNumber(this.telInput.value),
                          this._updatePlaceholder()),
                          this.resolveUtilsScriptPromise();
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        var t = this.telInput.form;
                        if (this.options.allowDropdown) {
                          this._closeDropdown(),
                            this.selectedFlag.removeEventListener(
                              "click",
                              this._handleClickSelectedFlag
                            ),
                            this.flagsContainer.removeEventListener(
                              "keydown",
                              this._handleFlagsContainerKeydown
                            );
                          var e = this._getClosestLabel();
                          e &&
                            e.removeEventListener(
                              "click",
                              this._handleLabelClick
                            );
                        }
                        this.hiddenInput &&
                          t &&
                          t.removeEventListener(
                            "submit",
                            this._handleHiddenInputSubmit
                          ),
                          this.options.autoHideDialCode &&
                            (t &&
                              t.removeEventListener(
                                "submit",
                                this._handleSubmitOrBlurEvent
                              ),
                            this.telInput.removeEventListener(
                              "blur",
                              this._handleSubmitOrBlurEvent
                            )),
                          this.telInput.removeEventListener(
                            "keyup",
                            this._handleKeyupEvent
                          ),
                          this.telInput.removeEventListener(
                            "cut",
                            this._handleClipboardEvent
                          ),
                          this.telInput.removeEventListener(
                            "paste",
                            this._handleClipboardEvent
                          ),
                          this.telInput.removeAttribute(
                            "data-intl-tel-input-id"
                          );
                        var n = this.telInput.parentNode;
                        n.parentNode.insertBefore(this.telInput, n),
                          n.parentNode.removeChild(n),
                          delete window.intlTelInputGlobals.instances[this.id];
                      },
                    },
                    {
                      key: "getExtension",
                      value: function () {
                        return window.intlTelInputUtils
                          ? intlTelInputUtils.getExtension(
                              this._getFullNumber(),
                              this.selectedCountryData.iso2
                            )
                          : "";
                      },
                    },
                    {
                      key: "getNumber",
                      value: function (t) {
                        if (window.intlTelInputUtils) {
                          var e = this.selectedCountryData.iso2;
                          return intlTelInputUtils.formatNumber(
                            this._getFullNumber(),
                            e,
                            t
                          );
                        }
                        return "";
                      },
                    },
                    {
                      key: "getNumberType",
                      value: function () {
                        return window.intlTelInputUtils
                          ? intlTelInputUtils.getNumberType(
                              this._getFullNumber(),
                              this.selectedCountryData.iso2
                            )
                          : -99;
                      },
                    },
                    {
                      key: "getSelectedCountryData",
                      value: function () {
                        return this.selectedCountryData;
                      },
                    },
                    {
                      key: "getValidationError",
                      value: function () {
                        if (window.intlTelInputUtils) {
                          var t = this.selectedCountryData.iso2;
                          return intlTelInputUtils.getValidationError(
                            this._getFullNumber(),
                            t
                          );
                        }
                        return -99;
                      },
                    },
                    {
                      key: "isValidNumber",
                      value: function () {
                        var t = this._getFullNumber().trim(),
                          e = this.options.nationalMode
                            ? this.selectedCountryData.iso2
                            : "";
                        return window.intlTelInputUtils
                          ? intlTelInputUtils.isValidNumber(t, e)
                          : null;
                      },
                    },
                    {
                      key: "setCountry",
                      value: function (t) {
                        var e = t.toLowerCase();
                        this.selectedFlagInner.classList.contains(
                          "iti__".concat(e)
                        ) ||
                          (this._setFlag(e),
                          this._updateDialCode(
                            this.selectedCountryData.dialCode,
                            !1
                          ),
                          this._triggerCountryChange());
                      },
                    },
                    {
                      key: "setNumber",
                      value: function (t) {
                        var e = this._updateFlagFromNumber(t);
                        this._updateValFromNumber(t),
                          e && this._triggerCountryChange();
                      },
                    },
                    {
                      key: "setPlaceholderNumberType",
                      value: function (t) {
                        (this.options.placeholderNumberType = t),
                          this._updatePlaceholder();
                      },
                    },
                  ]),
                  o && r(i.prototype, o),
                  n
                );
              })();
            o.getCountryData = function () {
              return e;
            };
            var h = function (t, e, n) {
              var i = document.createElement("script");
              (i.onload = function () {
                c("handleUtils"), e && e();
              }),
                (i.onerror = function () {
                  c("rejectUtilsScriptPromise"), n && n();
                }),
                (i.className = "iti-load-utils"),
                (i.async = !0),
                (i.src = t),
                document.body.appendChild(i);
            };
            return (
              (o.loadUtils = function (t) {
                if (
                  !window.intlTelInputUtils &&
                  !window.intlTelInputGlobals.startedLoadingUtilsScript
                ) {
                  if (
                    ((window.intlTelInputGlobals.startedLoadingUtilsScript =
                      !0),
                    "undefined" != typeof Promise)
                  )
                    return new Promise(function (e, n) {
                      return h(t, e, n);
                    });
                  h(t);
                }
                return null;
              }),
              (o.defaults = s),
              (o.version = "17.0.18"),
              function (t, e) {
                var n = new d(t, e);
                return (
                  n._init(),
                  t.setAttribute("data-intl-tel-input-id", n.id),
                  (window.intlTelInputGlobals.instances[n.id] = n),
                  n
                );
              }
            );
          })();
        }),
          t.exports ? (t.exports = e()) : (window.intlTelInput = e());
      },
      699: (t, e, n) => {
        t.exports = n(197);
      },
      296: (t, e, n) => {
        var i = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          s = parseInt,
          u = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = u || l || Function("return this")(),
          d = Object.prototype.toString,
          h = Math.max,
          p = Math.min,
          f = function () {
            return c.Date.now();
          };
        function g(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function D(t) {
          if ("number" == typeof t) return t;
          if (
            (function (t) {
              return (
                "symbol" == typeof t ||
                ((function (t) {
                  return !!t && "object" == typeof t;
                })(t) &&
                  "[object Symbol]" == d.call(t))
              );
            })(t)
          )
            return NaN;
          if (g(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = g(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(i, "");
          var n = o.test(t);
          return n || a.test(t)
            ? s(t.slice(2), n ? 2 : 8)
            : r.test(t)
            ? NaN
            : +t;
        }
        t.exports = function (t, e, n) {
          var i,
            r,
            o,
            a,
            s,
            u,
            l = 0,
            c = !1,
            d = !1,
            m = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function v(e) {
            var n = i,
              o = r;
            return (i = r = void 0), (l = e), (a = t.apply(o, n));
          }
          function _(t) {
            return (l = t), (s = setTimeout(C, e)), c ? v(t) : a;
          }
          function y(t) {
            var n = t - u;
            return void 0 === u || n >= e || n < 0 || (d && t - l >= o);
          }
          function C() {
            var t = f();
            if (y(t)) return b(t);
            s = setTimeout(
              C,
              (function (t) {
                var n = e - (t - u);
                return d ? p(n, o - (t - l)) : n;
              })(t)
            );
          }
          function b(t) {
            return (s = void 0), m && i ? v(t) : ((i = r = void 0), a);
          }
          function w() {
            var t = f(),
              n = y(t);
            if (((i = arguments), (r = this), (u = t), n)) {
              if (void 0 === s) return _(u);
              if (d) return (s = setTimeout(C, e)), v(u);
            }
            return void 0 === s && (s = setTimeout(C, e)), a;
          }
          return (
            (e = D(e) || 0),
            g(n) &&
              ((c = !!n.leading),
              (o = (d = "maxWait" in n) ? h(D(n.maxWait) || 0, e) : o),
              (m = "trailing" in n ? !!n.trailing : m)),
            (w.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (l = 0),
                (i = u = r = s = void 0);
            }),
            (w.flush = function () {
              return void 0 === s ? a : b(f());
            }),
            w
          );
        };
      },
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var o = (e[i] = { exports: {} });
    return t[i](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      function t(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function e(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var i,
        r,
        o,
        a,
        s,
        u,
        l,
        c,
        d,
        h,
        p,
        f,
        g,
        D = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        m = { duration: 0.5, overwrite: !1, delay: 0 },
        v = 1e8,
        _ = 1e-8,
        y = 2 * Math.PI,
        C = y / 4,
        b = 0,
        w = Math.sqrt,
        E = Math.cos,
        x = Math.sin,
        F = function (t) {
          return "string" == typeof t;
        },
        T = function (t) {
          return "function" == typeof t;
        },
        k = function (t) {
          return "number" == typeof t;
        },
        A = function (t) {
          return void 0 === t;
        },
        S = function (t) {
          return "object" == typeof t;
        },
        M = function (t) {
          return !1 !== t;
        },
        I = function () {
          return "undefined" != typeof window;
        },
        L = function (t) {
          return T(t) || F(t);
        },
        O =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        B = Array.isArray,
        P = /(?:-?\.?\d|\.)+/gi,
        N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        R = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        z = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        q = /[+-]=-?[.\d]+/,
        j = /[^,'"\[\]\s]+/gi,
        U = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        H = {},
        Y = {},
        V = function (t) {
          return (Y = vt(t, H)) && un;
        },
        W = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        G = function (t, e) {
          return !e && console.warn(t);
        },
        X = function (t, e) {
          return (t && (H[t] = e) && Y && (Y[t] = e)) || H;
        },
        K = function () {
          return 0;
        },
        J = {},
        Q = [],
        Z = {},
        tt = {},
        et = {},
        nt = 30,
        it = [],
        rt = "",
        ot = function (t) {
          var e,
            n,
            i = t[0];
          if ((S(i) || T(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (n = it.length; n-- && !it[n].targetTest(i); );
            e = it[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new Se(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        at = function (t) {
          return t._gsap || ot(Xt(t))[0]._gsap;
        },
        st = function (t, e, n) {
          return (n = t[e]) && T(n)
            ? t[e]()
            : (A(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        ut = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        lt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        ct = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        dt = function (t, e) {
          var n = e.charAt(0),
            i = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === n ? t + i : "-" === n ? t - i : "*" === n ? t * i : t / i
          );
        },
        ht = function (t, e) {
          for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
          return i < n;
        },
        pt = function () {
          var t,
            e,
            n = Q.length,
            i = Q.slice(0);
          for (Z = {}, Q.length = 0, t = 0; t < n; t++)
            (e = i[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        ft = function (t, e, n, i) {
          Q.length && pt(), t.render(e, n, i), Q.length && pt();
        },
        gt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(j).length < 2
            ? e
            : F(t)
            ? t.trim()
            : t;
        },
        Dt = function (t) {
          return t;
        },
        mt = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        vt = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        _t = function t(e, n) {
          for (var i in n)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (e[i] = S(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
          return e;
        },
        yt = function (t, e) {
          var n,
            i = {};
          for (n in t) n in e || (i[n] = t[n]);
          return i;
        },
        Ct = function (t) {
          var e,
            n = t.parent || r,
            i = t.keyframes
              ? ((e = B(t.keyframes)),
                function (t, n) {
                  for (var i in n)
                    i in t ||
                      ("duration" === i && e) ||
                      "ease" === i ||
                      (t[i] = n[i]);
                })
              : mt;
          if (M(t.inherit))
            for (; n; ) i(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        bt = function (t, e, n, i, r) {
          void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
          var o,
            a = t[i];
          if (r) for (o = e[r]; a && a[r] > o; ) a = a._prev;
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[i] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          );
        },
        wt = function (t, e, n, i) {
          void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
          var r = e._prev,
            o = e._next;
          r ? (r._next = o) : t[n] === e && (t[n] = o),
            o ? (o._prev = r) : t[i] === e && (t[i] = r),
            (e._next = e._prev = e.parent = null);
        },
        Et = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        xt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        Ft = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        Tt = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        kt = function (t) {
          return t._repeat
            ? At(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        At = function (t, e) {
          var n = Math.floor((t /= e));
          return t && n === t ? n - 1 : n;
        },
        St = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Mt = function (t) {
          return (t._end = ct(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || _) || 0)
          ));
        },
        It = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = ct(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Mt(t),
              n._dirty || xt(n, t)),
            t
          );
        },
        Lt = function (t, e) {
          var n;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((n = St(t.rawTime(), e)),
              (!e._dur || Yt(0, e.totalDuration(), n) - e._tTime > _) &&
                e.render(n, !0)),
            xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        Ot = function (t, e, n, i) {
          return (
            e.parent && Et(e),
            (e._start = ct(
              (k(n) ? n : n || t !== r ? jt(t, n, e) : t._time) + e._delay
            )),
            (e._end = ct(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            bt(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Nt(e) || (t._recent = e),
            i || Lt(t, e),
            t
          );
        },
        Bt = function (t, e) {
          return (
            (H.ScrollTrigger || W("scrollTrigger", e)) &&
            H.ScrollTrigger.create(e, t)
          );
        },
        Pt = function (t, e, n, i) {
          return (
            Ne(t, e),
            t._initted
              ? !n &&
                t._pt &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                l !== me.frame
                ? (Q.push(t), (t._lazy = [e, i]), 1)
                : void 0
              : 1
          );
        },
        $t = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        Nt = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        Rt = function (t, e, n, i) {
          var r = t._repeat,
            o = ct(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !i && (t._time *= o / t._dur),
            (t._dur = o),
            (t._tDur = r
              ? r < 0
                ? 1e10
                : ct(o * (r + 1) + t._rDelay * r)
              : o),
            a > 0 && !i ? It(t, (t._tTime = t._tDur * a)) : t.parent && Mt(t),
            n || xt(t.parent, t),
            t
          );
        },
        zt = function (t) {
          return t instanceof Ie ? xt(t) : Rt(t, t._dur);
        },
        qt = { _start: 0, endTime: K, totalDuration: K },
        jt = function t(e, n, i) {
          var r,
            o,
            a,
            s = e.labels,
            u = e._recent || qt,
            l = e.duration() >= v ? u.endTime(!1) : e._dur;
          return F(n) && (isNaN(n) || n in s)
            ? ((o = n.charAt(0)),
              (a = "%" === n.substr(-1)),
              (r = n.indexOf("=")),
              "<" === o || ">" === o
                ? (r >= 0 && (n = n.replace(/=/, "")),
                  ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (a ? (r < 0 ? u : i).totalDuration() / 100 : 1))
                : r < 0
                ? (n in s || (s[n] = l), s[n])
                : ((o = parseFloat(n.charAt(r - 1) + n.substr(r + 1))),
                  a && i && (o = (o / 100) * (B(i) ? i[0] : i).totalDuration()),
                  r > 1 ? t(e, n.substr(0, r - 1), i) + o : l + o))
            : null == n
            ? l
            : +n;
        },
        Ut = function (t, e, n) {
          var i,
            r,
            o = k(e[1]),
            a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[a];
          if ((o && (s.duration = e[1]), (s.parent = n), t)) {
            for (i = s, r = n; r && !("immediateRender" in i); )
              (i = r.vars.defaults || {}), (r = M(r.vars.inherit) && r.parent);
            (s.immediateRender = M(i.immediateRender)),
              t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
          }
          return new Ue(e[0], s, e[a + 1]);
        },
        Ht = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        Yt = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        Vt = function (t, e) {
          return F(t) && (e = U.exec(t)) ? e[1] : "";
        },
        Wt = [].slice,
        Gt = function (t, e) {
          return (
            t &&
            S(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && S(t[0]))) &&
            !t.nodeType &&
            t !== o
          );
        },
        Xt = function (t, e, n) {
          return !F(t) || n || (!a && ve())
            ? B(t)
              ? (function (t, e, n) {
                  return (
                    void 0 === n && (n = []),
                    t.forEach(function (t) {
                      var i;
                      return (F(t) && !e) || Gt(t, 1)
                        ? (i = n).push.apply(i, Xt(t))
                        : n.push(t);
                    }) || n
                  );
                })(t, n)
              : Gt(t)
              ? Wt.call(t, 0)
              : t
              ? [t]
              : []
            : Wt.call((e || s).querySelectorAll(t), 0);
        },
        Kt = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Jt = function (t) {
          if (T(t)) return t;
          var e = S(t) ? t : { each: t },
            n = xe(e.ease),
            i = e.from || 0,
            r = parseFloat(e.base) || 0,
            o = {},
            a = i > 0 && i < 1,
            s = isNaN(i) || a,
            u = e.axis,
            l = i,
            c = i;
          return (
            F(i)
              ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !a && s && ((l = i[0]), (c = i[1])),
            function (t, a, d) {
              var h,
                p,
                f,
                g,
                D,
                m,
                _,
                y,
                C,
                b = (d || e).length,
                E = o[b];
              if (!E) {
                if (!(C = "auto" === e.grid ? 0 : (e.grid || [1, v])[1])) {
                  for (
                    _ = -v;
                    _ < (_ = d[C++].getBoundingClientRect().left) && C < b;

                  );
                  C--;
                }
                for (
                  E = o[b] = [],
                    h = s ? Math.min(C, b) * l - 0.5 : i % C,
                    p = C === v ? 0 : s ? (b * c) / C - 0.5 : (i / C) | 0,
                    _ = 0,
                    y = v,
                    m = 0;
                  m < b;
                  m++
                )
                  (f = (m % C) - h),
                    (g = p - ((m / C) | 0)),
                    (E[m] = D =
                      u ? Math.abs("y" === u ? g : f) : w(f * f + g * g)),
                    D > _ && (_ = D),
                    D < y && (y = D);
                "random" === i && Kt(E),
                  (E.max = _ - y),
                  (E.min = y),
                  (E.v = b =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (C > b
                          ? b - 1
                          : u
                          ? "y" === u
                            ? b / C
                            : C
                          : Math.max(C, b / C)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (E.b = b < 0 ? r - b : r),
                  (E.u = Vt(e.amount || e.each) || 0),
                  (n = n && b < 0 ? we(n) : n);
              }
              return (
                (b = (E[t] - E.min) / E.max || 0),
                ct(E.b + (n ? n(b) : b) * E.v) + E.u
              );
            }
          );
        },
        Qt = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (n) {
            var i = Math.round(parseFloat(n) / t) * t * e;
            return (i - (i % 1)) / e + (k(n) ? 0 : Vt(n));
          };
        },
        Zt = function (t, e) {
          var n,
            i,
            r = B(t);
          return (
            !r &&
              S(t) &&
              ((n = r = t.radius || v),
              t.values
                ? ((t = Xt(t.values)), (i = !k(t[0])) && (n *= n))
                : (t = Qt(t.increment))),
            Ht(
              e,
              r
                ? T(t)
                  ? function (e) {
                      return (i = t(e)), Math.abs(i - e) <= n ? i : e;
                    }
                  : function (e) {
                      for (
                        var r,
                          o,
                          a = parseFloat(i ? e.x : e),
                          s = parseFloat(i ? e.y : 0),
                          u = v,
                          l = 0,
                          c = t.length;
                        c--;

                      )
                        (r = i
                          ? (r = t[c].x - a) * r + (o = t[c].y - s) * o
                          : Math.abs(t[c] - a)) < u && ((u = r), (l = c));
                      return (
                        (l = !n || u <= n ? t[l] : e),
                        i || l === e || k(e) ? l : l + Vt(e)
                      );
                    }
                : Qt(t)
            )
          );
        },
        te = function (t, e, n, i) {
          return Ht(B(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
            return B(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                    ) *
                      n *
                      i
                  ) / i;
          });
        },
        ee = function (t, e, n) {
          return Ht(n, function (n) {
            return t[~~e(n)];
          });
        },
        ne = function (t) {
          for (var e, n, i, r, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
            (i = t.indexOf(")", e)),
              (r = "[" === t.charAt(e + 7)),
              (n = t.substr(e + 7, i - e - 7).match(r ? j : P)),
              (a +=
                t.substr(o, e - o) +
                te(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
              (o = i + 1);
          return a + t.substr(o, t.length - o);
        },
        ie = function (t, e, n, i, r) {
          var o = e - t,
            a = i - n;
          return Ht(r, function (e) {
            return n + (((e - t) / o) * a || 0);
          });
        },
        re = function (t, e, n) {
          var i,
            r,
            o,
            a = t.labels,
            s = v;
          for (i in a)
            (r = a[i] - e) < 0 == !!n &&
              r &&
              s > (r = Math.abs(r)) &&
              ((o = i), (s = r));
          return o;
        },
        oe = function (t, e, n) {
          var i,
            r,
            o = t.vars,
            a = o[e];
          if (a)
            return (
              (i = o[e + "Params"]),
              (r = o.callbackScope || t),
              n && Q.length && pt(),
              i ? a.apply(r, i) : a.call(r)
            );
        },
        ae = function (t) {
          return (
            Et(t),
            t.scrollTrigger && t.scrollTrigger.kill(!1),
            t.progress() < 1 && oe(t, "onInterrupt"),
            t
          );
        },
        se = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            n = T(t),
            i =
              e && !n && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            r = {
              init: K,
              render: Qe,
              add: Pe,
              kill: tn,
              modifier: Ze,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: Ge,
              aliases: {},
              register: 0,
            };
          if ((ve(), t !== i)) {
            if (tt[e]) return;
            mt(i, mt(yt(t, r), o)),
              vt(i.prototype, vt(r, yt(t, o))),
              (tt[(i.prop = e)] = i),
              t.targetTest && (it.push(i), (J[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          X(e, i), t.register && t.register(un, i, rn);
        },
        ue = 255,
        le = {
          aqua: [0, ue, ue],
          lime: [0, ue, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ue],
          navy: [0, 0, 128],
          white: [ue, ue, ue],
          olive: [128, 128, 0],
          yellow: [ue, ue, 0],
          orange: [ue, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ue, 0, 0],
          pink: [ue, 192, 203],
          cyan: [0, ue, ue],
          transparent: [ue, ue, ue, 0],
        },
        ce = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) *
              ue +
              0.5) |
            0
          );
        },
        de = function (t, e, n) {
          var i,
            r,
            o,
            a,
            s,
            u,
            l,
            c,
            d,
            h,
            p = t ? (k(t) ? [t >> 16, (t >> 8) & ue, t & ue] : 0) : le.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), le[t])
            )
              p = le[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((i = t.charAt(1)),
                  (r = t.charAt(2)),
                  (o = t.charAt(3)),
                  (t =
                    "#" +
                    i +
                    i +
                    r +
                    r +
                    o +
                    o +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & ue,
                  p & ue,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & ue,
                t & ue,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((p = h = t.match(P)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(N)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (i =
                    2 * (u = +p[2] / 100) -
                    (r = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = ce(a + 1 / 3, i, r)),
                  (p[1] = ce(a, i, r)),
                  (p[2] = ce(a - 1 / 3, i, r));
            else p = t.match(P) || le.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !h &&
              ((i = p[0] / ue),
              (r = p[1] / ue),
              (o = p[2] / ue),
              (u = ((l = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2),
              l === c
                ? (a = s = 0)
                : ((d = l - c),
                  (s = u > 0.5 ? d / (2 - l - c) : d / (l + c)),
                  (a =
                    l === i
                      ? (r - o) / d + (r < o ? 6 : 0)
                      : l === r
                      ? (o - i) / d + 2
                      : (i - r) / d + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        he = function (t) {
          var e = [],
            n = [],
            i = -1;
          return (
            t.split(fe).forEach(function (t) {
              var r = t.match(R) || [];
              e.push.apply(e, r), n.push((i += r.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        pe = function (t, e, n) {
          var i,
            r,
            o,
            a,
            s = "",
            u = (t + s).match(fe),
            l = e ? "hsla(" : "rgba(",
            c = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = de(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            n && ((o = he(t)), (i = n.c).join(s) !== o.c.join(s)))
          )
            for (a = (r = t.replace(fe, "1").split(R)).length - 1; c < a; c++)
              s +=
                r[c] +
                (~i.indexOf(c)
                  ? u.shift() || l + "0,0,0,0)"
                  : (o.length ? o : u.length ? u : n).shift());
          if (!r)
            for (a = (r = t.split(fe)).length - 1; c < a; c++) s += r[c] + u[c];
          return s + r[a];
        },
        fe = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in le) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        ge = /hsl[a]?\(/,
        De = function (t) {
          var e,
            n = t.join(" ");
          if (((fe.lastIndex = 0), fe.test(n)))
            return (
              (e = ge.test(n)),
              (t[1] = pe(t[1], e)),
              (t[0] = pe(t[0], e, he(t[1]))),
              !0
            );
        },
        me = (function () {
          var t,
            e,
            n,
            i,
            r,
            l,
            c = Date.now,
            h = 500,
            p = 33,
            f = c(),
            g = f,
            D = 1e3 / 240,
            m = D,
            v = [],
            _ = function n(o) {
              var a,
                s,
                u,
                d,
                _ = c() - g,
                y = !0 === o;
              if (
                (_ > h && (f += _ - p),
                ((a = (u = (g += _) - f) - m) > 0 || y) &&
                  ((d = ++i.frame),
                  (r = u - 1e3 * i.time),
                  (i.time = u /= 1e3),
                  (m += a + (a >= D ? 4 : D - a)),
                  (s = 1)),
                y || (t = e(n)),
                s)
              )
                for (l = 0; l < v.length; l++) v[l](u, r, d, o);
            };
          return (i = {
            time: 0,
            frame: 0,
            tick: function () {
              _(!0);
            },
            deltaRatio: function (t) {
              return r / (1e3 / (t || 60));
            },
            wake: function () {
              u &&
                (!a &&
                  I() &&
                  ((o = a = window),
                  (s = o.document || {}),
                  (H.gsap = un),
                  (o.gsapVersions || (o.gsapVersions = [])).push(un.version),
                  V(Y || o.GreenSockGlobals || (!o.gsap && o) || {}),
                  (n = o.requestAnimationFrame)),
                t && i.sleep(),
                (e =
                  n ||
                  function (t) {
                    return setTimeout(t, (m - 1e3 * i.time + 1) | 0);
                  }),
                (d = 1),
                _(2));
            },
            sleep: function () {
              (n ? o.cancelAnimationFrame : clearTimeout)(t), (d = 0), (e = K);
            },
            lagSmoothing: function (t, e) {
              (h = t || 1e8), (p = Math.min(e, h, 0));
            },
            fps: function (t) {
              (D = 1e3 / (t || 240)), (m = 1e3 * i.time + D);
            },
            add: function (t, e, n) {
              var r = e
                ? function (e, n, o, a) {
                    t(e, n, o, a), i.remove(r);
                  }
                : t;
              return i.remove(t), v[n ? "unshift" : "push"](r), ve(), r;
            },
            remove: function (t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && l >= e && l--;
            },
            _listeners: v,
          });
        })(),
        ve = function () {
          return !d && me.wake();
        },
        _e = {},
        ye = /^[\d.\-M][\d.\-,\s]/,
        Ce = /["']/g,
        be = function (t) {
          for (
            var e,
              n,
              i,
              r = {},
              o = t.substr(1, t.length - 3).split(":"),
              a = o[0],
              s = 1,
              u = o.length;
            s < u;
            s++
          )
            (n = o[s]),
              (e = s !== u - 1 ? n.lastIndexOf(",") : n.length),
              (i = n.substr(0, e)),
              (r[a] = isNaN(i) ? i.replace(Ce, "").trim() : +i),
              (a = n.substr(e + 1).trim());
          return r;
        },
        we = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Ee = function t(e, n) {
          for (var i, r = e._first; r; )
            r instanceof Ie
              ? t(r, n)
              : !r.vars.yoyoEase ||
                (r._yoyo && r._repeat) ||
                r._yoyo === n ||
                (r.timeline
                  ? t(r.timeline, n)
                  : ((i = r._ease),
                    (r._ease = r._yEase),
                    (r._yEase = i),
                    (r._yoyo = n))),
              (r = r._next);
        },
        xe = function (t, e) {
          return (
            (t &&
              (T(t)
                ? t
                : _e[t] ||
                  (function (t) {
                    var e,
                      n,
                      i,
                      r,
                      o = (t + "").split("("),
                      a = _e[o[0]];
                    return a && o.length > 1 && a.config
                      ? a.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [be(o[1])]
                            : ((e = t),
                              (n = e.indexOf("(") + 1),
                              (i = e.indexOf(")")),
                              (r = e.indexOf("(", n)),
                              e.substring(
                                n,
                                ~r && r < i ? e.indexOf(")", i + 1) : i
                              ))
                                .split(",")
                                .map(gt)
                        )
                      : _e._CE && ye.test(t)
                      ? _e._CE("", t)
                      : a;
                  })(t))) ||
            e
          );
        },
        Fe = function (t, e, n, i) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === i &&
              (i = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var r,
            o = { easeIn: e, easeOut: n, easeInOut: i };
          return (
            ut(t, function (t) {
              for (var e in ((_e[t] = H[t] = o),
              (_e[(r = t.toLowerCase())] = n),
              o))
                _e[
                  r +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = _e[t + "." + e] = o[e];
            }),
            o
          );
        },
        Te = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        ke = function t(e, n, i) {
          var r = n >= 1 ? n : 1,
            o = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            a = (o / y) * (Math.asin(1 / r) || 0),
            s = function (t) {
              return 1 === t
                ? 1
                : r * Math.pow(2, -10 * t) * x((t - a) * o) + 1;
            },
            u =
              "out" === e
                ? s
                : "in" === e
                ? function (t) {
                    return 1 - s(1 - t);
                  }
                : Te(s);
          return (
            (o = y / o),
            (u.config = function (n, i) {
              return t(e, n, i);
            }),
            u
          );
        },
        Ae = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            r =
              "out" === e
                ? i
                : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : Te(i);
          return (
            (r.config = function (n) {
              return t(e, n);
            }),
            r
          );
        };
      ut("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        Fe(
          t + ",Power" + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          }
        );
      }),
        (_e.Linear.easeNone = _e.none = _e.Linear.easeIn),
        Fe("Elastic", ke("in"), ke("out"), ke()),
        (h = 7.5625),
        (f = 1 / (p = 2.75)),
        Fe(
          "Bounce",
          function (t) {
            return 1 - g(1 - t);
          },
          (g = function (t) {
            return t < f
              ? h * t * t
              : t < 0.7272727272727273
              ? h * Math.pow(t - 1.5 / p, 2) + 0.75
              : t < 0.9090909090909092
              ? h * (t -= 2.25 / p) * t + 0.9375
              : h * Math.pow(t - 2.625 / p, 2) + 0.984375;
          })
        ),
        Fe("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        Fe("Circ", function (t) {
          return -(w(1 - t * t) - 1);
        }),
        Fe("Sine", function (t) {
          return 1 === t ? 1 : 1 - E(t * C);
        }),
        Fe("Back", Ae("in"), Ae("out"), Ae()),
        (_e.SteppedEase =
          _e.steps =
          H.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  i = t + (e ? 0 : 1),
                  r = e ? 1 : 0;
                return function (t) {
                  return (((i * Yt(0, 0.99999999, t)) | 0) + r) * n;
                };
              },
            }),
        (m.ease = _e["quad.out"]),
        ut(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (rt += t + "," + t + "Params,");
          }
        );
      var Se = function (t, e) {
          (this.id = b++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : st),
            (this.set = e ? e.getSetter : Ge);
        },
        Me = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Rt(this, +t.duration, 1, 1),
              (this.data = t.data),
              d || me.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Rt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((ve(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  It(this, t), !n._dp || n.parent || Lt(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Ot(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === _) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), ft(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + kt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      kt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                ? At(this._tTime, n) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? St(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(Yt(-this._delay, this._tDur, e), !0),
                Mt(this),
                Ft(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (ve(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== _ &&
                            (this._tTime -= _)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Ot(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (M(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? St(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (e._ts || 1)), (e = e._dp);
              return n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), zt(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), zt(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(jt(this, t), M(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, M(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - _
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      n && (i[t + "Params"] = n),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var i = T(t) ? t : Dt,
                  r = function () {
                    var t = e.then;
                    (e.then = null),
                      T(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      n(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? r()
                  : (e._prom = r);
              });
            }),
            (e.kill = function () {
              ae(this);
            }),
            t
          );
        })();
      mt(Me.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Ie = (function (n) {
        function i(e, i) {
          var o;
          return (
            void 0 === e && (e = {}),
            ((o = n.call(this, e) || this).labels = {}),
            (o.smoothChildTiming = !!e.smoothChildTiming),
            (o.autoRemoveChildren = !!e.autoRemoveChildren),
            (o._sort = M(e.sortChildren)),
            r && Ot(e.parent || r, t(o), i),
            e.reversed && o.reverse(),
            e.paused && o.paused(!0),
            e.scrollTrigger && Bt(t(o), e.scrollTrigger),
            o
          );
        }
        e(i, n);
        var o = i.prototype;
        return (
          (o.to = function (t, e, n) {
            return Ut(0, arguments, this), this;
          }),
          (o.from = function (t, e, n) {
            return Ut(1, arguments, this), this;
          }),
          (o.fromTo = function (t, e, n, i) {
            return Ut(2, arguments, this), this;
          }),
          (o.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Ct(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ue(t, e, jt(this, n), 1),
              this
            );
          }),
          (o.call = function (t, e, n) {
            return Ot(this, Ue.delayedCall(0, t, e), n);
          }),
          (o.staggerTo = function (t, e, n, i, r, o, a) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || i),
              (n.onComplete = o),
              (n.onCompleteParams = a),
              (n.parent = this),
              new Ue(t, n, jt(this, r)),
              this
            );
          }),
          (o.staggerFrom = function (t, e, n, i, r, o, a) {
            return (
              (n.runBackwards = 1),
              (Ct(n).immediateRender = M(n.immediateRender)),
              this.staggerTo(t, e, n, i, r, o, a)
            );
          }),
          (o.staggerFromTo = function (t, e, n, i, r, o, a, s) {
            return (
              (i.startAt = n),
              (Ct(i).immediateRender = M(i.immediateRender)),
              this.staggerTo(t, e, i, r, o, a, s)
            );
          }),
          (o.render = function (t, e, n) {
            var i,
              o,
              a,
              s,
              u,
              l,
              c,
              d,
              h,
              p,
              f,
              g,
              D = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = t <= 0 ? 0 : ct(t),
              C = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (
              (this !== r && y > m && t >= 0 && (y = m),
              y !== this._tTime || n || C)
            ) {
              if (
                (D !== this._time &&
                  v &&
                  ((y += this._time - D), (t += this._time - D)),
                (i = y),
                (h = this._start),
                (l = !(d = this._ts)),
                C && (v || (D = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((f = this._yoyo),
                  (u = v + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * u + t, e, n);
                if (
                  ((i = ct(y % u)),
                  y === m
                    ? ((s = this._repeat), (i = v))
                    : ((s = ~~(y / u)) && s === y / u && ((i = v), s--),
                      i > v && (i = v)),
                  (p = At(this._tTime, u)),
                  !D && this._tTime && p !== s && (p = s),
                  f && 1 & s && ((i = v - i), (g = 1)),
                  s !== p && !this._lock)
                ) {
                  var b = f && 1 & p,
                    w = b === (f && 1 & s);
                  if (
                    (s < p && (b = !b),
                    (D = b ? 0 : v),
                    (this._lock = 1),
                    (this.render(D || (g ? 0 : ct(s * u)), e, !v)._lock = 0),
                    (this._tTime = y),
                    !e && this.parent && oe(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !g &&
                      (this.invalidate()._lock = 1),
                    (D && D !== this._time) ||
                      l !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (m = this._tDur),
                    w &&
                      ((this._lock = 2),
                      (D = b ? v : -1e-4),
                      this.render(D, !0),
                      this.vars.repeatRefresh && !g && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l)
                  )
                    return this;
                  Ee(this, g);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((c = (function (t, e, n) {
                    var i;
                    if (n > e)
                      for (i = t._first; i && i._start <= n; ) {
                        if ("isPause" === i.data && i._start > e) return i;
                        i = i._next;
                      }
                    else
                      for (i = t._last; i && i._start >= n; ) {
                        if ("isPause" === i.data && i._start < e) return i;
                        i = i._prev;
                      }
                  })(this, ct(D), ct(i))),
                  c && (y -= i - (i = c._start))),
                (this._tTime = y),
                (this._time = i),
                (this._act = !d),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (D = 0)),
                !D && i && !e && (oe(this, "onStart"), this._tTime !== y))
              )
                return this;
              if (i >= D && t >= 0)
                for (o = this._first; o; ) {
                  if (
                    ((a = o._next),
                    (o._act || i >= o._start) && o._ts && c !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (i - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (i - o._start) * o._ts,
                        e,
                        n
                      ),
                      i !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), a && (y += this._zTime = -1e-8);
                      break;
                    }
                  }
                  o = a;
                }
              else {
                o = this._last;
                for (var E = t < 0 ? t : i; o; ) {
                  if (
                    ((a = o._prev), (o._act || E <= o._end) && o._ts && c !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (E - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (E - o._start) * o._ts,
                        e,
                        n
                      ),
                      i !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), a && (y += this._zTime = E ? -1e-8 : _);
                      break;
                    }
                  }
                  o = a;
                }
              }
              if (
                c &&
                !e &&
                (this.pause(),
                (c.render(i >= D ? 0 : -1e-8)._zTime = i >= D ? 1 : -1),
                this._ts)
              )
                return (this._start = h), Mt(this), this.render(t, e, n);
              this._onUpdate && !e && oe(this, "onUpdate", !0),
                ((y === m && this._tTime >= this.totalDuration()) ||
                  (!y && D)) &&
                  ((h !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                      Et(this, 1),
                    e ||
                      (t < 0 && !D) ||
                      (!y && !D && m) ||
                      (oe(
                        this,
                        y === m && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(y < m && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (o.add = function (t, e) {
            var n = this;
            if ((k(e) || (e = jt(this, e, t)), !(t instanceof Me))) {
              if (B(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (F(t)) return this.addLabel(t, e);
              if (!T(t)) return this;
              t = Ue.delayedCall(0, t);
            }
            return this !== t ? Ot(this, t, e) : this;
          }),
          (o.getChildren = function (t, e, n, i) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === i && (i = -v);
            for (var r = [], o = this._first; o; )
              o._start >= i &&
                (o instanceof Ue
                  ? e && r.push(o)
                  : (n && r.push(o),
                    t && r.push.apply(r, o.getChildren(!0, e, n)))),
                (o = o._next);
            return r;
          }),
          (o.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (o.remove = function (t) {
            return F(t)
              ? this.removeLabel(t)
              : T(t)
              ? this.killTweensOf(t)
              : (wt(this, t),
                t === this._recent && (this._recent = this._last),
                xt(this));
          }),
          (o.totalTime = function (t, e) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = ct(
                    me.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                n.prototype.totalTime.call(this, t, e),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (o.addLabel = function (t, e) {
            return (this.labels[t] = jt(this, e)), this;
          }),
          (o.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (o.addPause = function (t, e, n) {
            var i = Ue.delayedCall(0, e || K, n);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              Ot(this, i, jt(this, t))
            );
          }),
          (o.removePause = function (t) {
            var e = this._first;
            for (t = jt(this, t); e; )
              e._start === t && "isPause" === e.data && Et(e), (e = e._next);
          }),
          (o.killTweensOf = function (t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--; )
              Le !== i[r] && i[r].kill(t, e);
            return this;
          }),
          (o.getTweensOf = function (t, e) {
            for (var n, i = [], r = Xt(t), o = this._first, a = k(e); o; )
              o instanceof Ue
                ? ht(o._targets, r) &&
                  (a
                    ? (!Le || (o._initted && o._ts)) &&
                      o.globalTime(0) <= e &&
                      o.globalTime(o.totalDuration()) > e
                    : !e || o.isActive()) &&
                  i.push(o)
                : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n),
                (o = o._next);
            return i;
          }),
          (o.tweenTo = function (t, e) {
            e = e || {};
            var n,
              i = this,
              r = jt(i, t),
              o = e,
              a = o.startAt,
              s = o.onStart,
              u = o.onStartParams,
              l = o.immediateRender,
              c = Ue.to(
                i,
                mt(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (r - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      ) ||
                      _,
                    onStart: function () {
                      if ((i.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (r - (a && "time" in a ? a.time : i._time)) /
                              i.timeScale()
                          );
                        c._dur !== t && Rt(c, t, 0, 1).render(c._time, !0, !0),
                          (n = 1);
                      }
                      s && s.apply(c, u || []);
                    },
                  },
                  e
                )
              );
            return l ? c.render(0) : c;
          }),
          (o.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, mt({ startAt: { time: jt(this, t) } }, n));
          }),
          (o.recent = function () {
            return this._recent;
          }),
          (o.nextLabel = function (t) {
            return void 0 === t && (t = this._time), re(this, jt(this, t));
          }),
          (o.previousLabel = function (t) {
            return void 0 === t && (t = this._time), re(this, jt(this, t), 1);
          }),
          (o.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + _);
          }),
          (o.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r; )
              r._start >= n && ((r._start += t), (r._end += t)), (r = r._next);
            if (e) for (i in o) o[i] >= n && (o[i] += t);
            return xt(this);
          }),
          (o.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
            return n.prototype.invalidate.call(this);
          }),
          (o.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              xt(this)
            );
          }),
          (o.totalDuration = function (t) {
            var e,
              n,
              i,
              o = 0,
              a = this,
              s = a._last,
              u = v;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                  (a.reversed() ? -t : t)
              );
            if (a._dirty) {
              for (i = a.parent; s; )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  (n = s._start) > u && a._sort && s._ts && !a._lock
                    ? ((a._lock = 1), (Ot(a, s, n - s._delay, 1)._lock = 0))
                    : (u = n),
                  n < 0 &&
                    s._ts &&
                    ((o -= n),
                    ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                      ((a._start += n / a._ts),
                      (a._time -= n),
                      (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -Infinity),
                    (u = 0)),
                  s._end > o && s._ts && (o = s._end),
                  (s = e);
              Rt(a, a === r && a._time > o ? a._time : o, 1, 1), (a._dirty = 0);
            }
            return a._tDur;
          }),
          (i.updateRoot = function (t) {
            if ((r._ts && (ft(r, St(t, r)), (l = me.frame)), me.frame >= nt)) {
              nt += D.autoSleep || 120;
              var e = r._first;
              if ((!e || !e._ts) && D.autoSleep && me._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || me.sleep();
              }
            }
          }),
          i
        );
      })(Me);
      mt(Ie.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Le,
        Oe,
        Be = function (t, e, n, i, r, o, a) {
          var s,
            u,
            l,
            c,
            d,
            h,
            p,
            f,
            g = new rn(this._pt, t, e, 0, 1, Je, null, r),
            D = 0,
            m = 0;
          for (
            g.b = n,
              g.e = i,
              n += "",
              (p = ~(i += "").indexOf("random(")) && (i = ne(i)),
              o && (o((f = [n, i]), t, e), (n = f[0]), (i = f[1])),
              u = n.match(z) || [];
            (s = z.exec(i));

          )
            (c = s[0]),
              (d = i.substring(D, s.index)),
              l ? (l = (l + 1) % 5) : "rgba(" === d.substr(-5) && (l = 1),
              c !== u[m++] &&
                ((h = parseFloat(u[m - 1]) || 0),
                (g._pt = {
                  _next: g._pt,
                  p: d || 1 === m ? d : ",",
                  s: h,
                  c: "=" === c.charAt(1) ? dt(h, c) - h : parseFloat(c) - h,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (D = z.lastIndex));
          return (
            (g.c = D < i.length ? i.substring(D, i.length) : ""),
            (g.fp = a),
            (q.test(i) || p) && (g.e = 0),
            (this._pt = g),
            g
          );
        },
        Pe = function (t, e, n, i, r, o, a, s, u) {
          T(i) && (i = i(r || 0, t, o));
          var l,
            c = t[e],
            d =
              "get" !== n
                ? n
                : T(c)
                ? u
                  ? t[
                      e.indexOf("set") || !T(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : c,
            h = T(c) ? (u ? Ve : Ye) : He;
          if (
            (F(i) &&
              (~i.indexOf("random(") && (i = ne(i)),
              "=" === i.charAt(1) &&
                ((l = dt(d, i) + (Vt(d) || 0)) || 0 === l) &&
                (i = l)),
            d !== i || Oe)
          )
            return isNaN(d * i) || "" === i
              ? (!c && !(e in t) && W(e, i),
                Be.call(this, t, e, d, i, h, s || D.stringFilter, u))
              : ((l = new rn(
                  this._pt,
                  t,
                  e,
                  +d || 0,
                  i - (d || 0),
                  "boolean" == typeof c ? Ke : Xe,
                  0,
                  h
                )),
                u && (l.fp = u),
                a && l.modifier(a, this, t),
                (this._pt = l));
        },
        $e = function (t, e, n, i, r, o) {
          var a, s, u, l;
          if (
            tt[t] &&
            !1 !==
              (a = new tt[t]()).init(
                r,
                a.rawVars
                  ? e[t]
                  : (function (t, e, n, i, r) {
                      if (
                        (T(t) && (t = ze(t, r, e, n, i)),
                        !S(t) || (t.style && t.nodeType) || B(t) || O(t))
                      )
                        return F(t) ? ze(t, r, e, n, i) : t;
                      var o,
                        a = {};
                      for (o in t) a[o] = ze(t[o], r, e, n, i);
                      return a;
                    })(e[t], i, r, o, n),
                n,
                i,
                o
              ) &&
            ((n._pt = s =
              new rn(n._pt, r, t, 0, 1, a.render, a, 0, a.priority)),
            n !== c)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(r)], l = a._props.length;
              l--;

            )
              u[a._props[l]] = s;
          return a;
        },
        Ne = function t(e, n) {
          var o,
            a,
            s,
            u,
            l,
            c,
            d,
            h,
            p,
            f,
            g,
            D,
            y,
            C = e.vars,
            b = C.ease,
            w = C.startAt,
            E = C.immediateRender,
            x = C.lazy,
            F = C.onUpdate,
            T = C.onUpdateParams,
            k = C.callbackScope,
            A = C.runBackwards,
            S = C.yoyoEase,
            I = C.keyframes,
            L = C.autoRevert,
            O = e._dur,
            B = e._startAt,
            P = e._targets,
            $ = e.parent,
            N = $ && "nested" === $.data ? $.parent._targets : P,
            R = "auto" === e._overwrite && !i,
            z = e.timeline;
          if (
            (z && (!I || !b) && (b = "none"),
            (e._ease = xe(b, m.ease)),
            (e._yEase = S ? we(xe(!0 === S ? b : S, m.ease)) : 0),
            S &&
              e._yoyo &&
              !e._repeat &&
              ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
            (e._from = !z && !!C.runBackwards),
            !z || (I && !C.stagger))
          ) {
            if (
              ((D = (h = P[0] ? at(P[0]).harness : 0) && C[h.prop]),
              (o = yt(C, J)),
              B && (Et(B.render(-1, !0)), (B._lazy = 0)),
              w)
            )
              if (
                (Et(
                  (e._startAt = Ue.set(
                    P,
                    mt(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: $,
                        immediateRender: !0,
                        lazy: M(x),
                        startAt: null,
                        delay: 0,
                        onUpdate: F,
                        onUpdateParams: T,
                        callbackScope: k,
                        stagger: 0,
                      },
                      w
                    )
                  ))
                ),
                n < 0 && !E && !L && e._startAt.render(-1, !0),
                E)
              ) {
                if ((n > 0 && !L && (e._startAt = 0), O && n <= 0))
                  return void (n && (e._zTime = n));
              } else !1 === L && (e._startAt = 0);
            else if (A && O)
              if (B) !L && (e._startAt = 0);
              else if (
                (n && (E = !1),
                (s = mt(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: E && M(x),
                    immediateRender: E,
                    stagger: 0,
                    parent: $,
                  },
                  o
                )),
                D && (s[h.prop] = D),
                Et((e._startAt = Ue.set(P, s))),
                n < 0 && e._startAt.render(-1, !0),
                (e._zTime = n),
                E)
              ) {
                if (!n) return;
              } else t(e._startAt, _);
            for (
              e._pt = e._ptCache = 0, x = (O && M(x)) || (x && !O), a = 0;
              a < P.length;
              a++
            ) {
              if (
                ((d = (l = P[a])._gsap || ot(P)[a]._gsap),
                (e._ptLookup[a] = f = {}),
                Z[d.id] && Q.length && pt(),
                (g = N === P ? a : N.indexOf(l)),
                h &&
                  !1 !== (p = new h()).init(l, D || o, e, g, N) &&
                  ((e._pt = u =
                    new rn(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority)),
                  p._props.forEach(function (t) {
                    f[t] = u;
                  }),
                  p.priority && (c = 1)),
                !h || D)
              )
                for (s in o)
                  tt[s] && (p = $e(s, o, e, g, l, N))
                    ? p.priority && (c = 1)
                    : (f[s] = u =
                        Pe.call(e, l, s, "get", o[s], g, N, 0, C.stringFilter));
              e._op && e._op[a] && e.kill(l, e._op[a]),
                R &&
                  e._pt &&
                  ((Le = e),
                  r.killTweensOf(l, f, e.globalTime(n)),
                  (y = !e.parent),
                  (Le = 0)),
                e._pt && x && (Z[d.id] = 1);
            }
            c && nn(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = F),
            (e._initted = (!e._op || e._pt) && !y),
            I && n <= 0 && z.render(v, !0, !0);
        },
        Re = function (t, e, n, i) {
          var r,
            o,
            a = e.ease || i || "power1.inOut";
          if (B(e))
            (o = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (r in e)
              (o = n[r] || (n[r] = [])),
                "ease" === r || o.push({ t: parseFloat(t), v: e[r], e: a });
        },
        ze = function (t, e, n, i, r) {
          return T(t)
            ? t.call(e, n, i, r)
            : F(t) && ~t.indexOf("random(")
            ? ne(t)
            : t;
        },
        qe = rt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        je = {};
      ut(qe + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (je[t] = 1);
      });
      var Ue = (function (n) {
        function o(e, o, a, s) {
          var u;
          "number" == typeof o && ((a.duration = o), (o = a), (a = null));
          var l,
            c,
            d,
            h,
            p,
            f,
            g,
            m,
            v = (u = n.call(this, s ? o : Ct(o)) || this).vars,
            _ = v.duration,
            y = v.delay,
            C = v.immediateRender,
            b = v.stagger,
            w = v.overwrite,
            E = v.keyframes,
            x = v.defaults,
            F = v.scrollTrigger,
            T = v.yoyoEase,
            A = o.parent || r,
            I = (B(e) || O(e) ? k(e[0]) : "length" in o) ? [e] : Xt(e);
          if (
            ((u._targets = I.length
              ? ot(I)
              : G(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !D.nullTargetWarn
                ) || []),
            (u._ptLookup = []),
            (u._overwrite = w),
            E || b || L(_) || L(y))
          ) {
            if (
              ((o = u.vars),
              (l = u.timeline =
                new Ie({ data: "nested", defaults: x || {} })).kill(),
              (l.parent = l._dp = t(u)),
              (l._start = 0),
              b || L(_) || L(y))
            ) {
              if (((h = I.length), (g = b && Jt(b)), S(b)))
                for (p in b) ~qe.indexOf(p) && (m || (m = {}), (m[p] = b[p]));
              for (c = 0; c < h; c++)
                ((d = yt(o, je)).stagger = 0),
                  T && (d.yoyoEase = T),
                  m && vt(d, m),
                  (f = I[c]),
                  (d.duration = +ze(_, t(u), c, f, I)),
                  (d.delay = (+ze(y, t(u), c, f, I) || 0) - u._delay),
                  !b &&
                    1 === h &&
                    d.delay &&
                    ((u._delay = y = d.delay), (u._start += y), (d.delay = 0)),
                  l.to(f, d, g ? g(c, f, I) : 0),
                  (l._ease = _e.none);
              l.duration() ? (_ = y = 0) : (u.timeline = 0);
            } else if (E) {
              Ct(mt(l.vars.defaults, { ease: "none" })),
                (l._ease = xe(E.ease || o.ease || "none"));
              var P,
                $,
                N,
                R = 0;
              if (B(E))
                E.forEach(function (t) {
                  return l.to(I, t, ">");
                });
              else {
                for (p in ((d = {}), E))
                  "ease" === p ||
                    "easeEach" === p ||
                    Re(p, E[p], d, E.easeEach);
                for (p in d)
                  for (
                    P = d[p].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      R = 0,
                      c = 0;
                    c < P.length;
                    c++
                  )
                    ((N = {
                      ease: ($ = P[c]).e,
                      duration: (($.t - (c ? P[c - 1].t : 0)) / 100) * _,
                    })[p] = $.v),
                      l.to(I, N, R),
                      (R += N.duration);
                l.duration() < _ && l.to({}, { duration: _ - l.duration() });
              }
            }
            _ || u.duration((_ = l.duration()));
          } else u.timeline = 0;
          return (
            !0 !== w || i || ((Le = t(u)), r.killTweensOf(I), (Le = 0)),
            Ot(A, t(u), a),
            o.reversed && u.reverse(),
            o.paused && u.paused(!0),
            (C ||
              (!_ &&
                !E &&
                u._start === ct(A._time) &&
                M(C) &&
                Tt(t(u)) &&
                "nested" !== A.data)) &&
              ((u._tTime = -1e-8), u.render(Math.max(0, -y))),
            F && Bt(t(u), F),
            u
          );
        }
        e(o, n);
        var a = o.prototype;
        return (
          (a.render = function (t, e, n) {
            var i,
              r,
              o,
              a,
              s,
              u,
              l,
              c,
              d,
              h = this._time,
              p = this._tDur,
              f = this._dur,
              g = t > p - _ && t >= 0 ? p : t < _ ? 0 : t;
            if (f) {
              if (
                g !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((i = g), (c = this.timeline), this._repeat)) {
                  if (((a = f + this._rDelay), this._repeat < -1 && t < 0))
                    return this.totalTime(100 * a + t, e, n);
                  if (
                    ((i = ct(g % a)),
                    g === p
                      ? ((o = this._repeat), (i = f))
                      : ((o = ~~(g / a)) && o === g / a && ((i = f), o--),
                        i > f && (i = f)),
                    (u = this._yoyo && 1 & o) &&
                      ((d = this._yEase), (i = f - i)),
                    (s = At(this._tTime, a)),
                    i === h && !n && this._initted)
                  )
                    return (this._tTime = g), this;
                  o !== s &&
                    (c && this._yEase && Ee(c, u),
                    !this.vars.repeatRefresh ||
                      u ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(ct(a * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Pt(this, t < 0 ? t : i, n, e))
                    return (this._tTime = 0), this;
                  if (h !== this._time) return this;
                  if (f !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = g),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (d || this._ease)(i / f)),
                  this._from && (this.ratio = l = 1 - l),
                  i && !h && !e && (oe(this, "onStart"), this._tTime !== g))
                )
                  return this;
                for (r = this._pt; r; ) r.r(l, r.d), (r = r._next);
                (c &&
                  c.render(
                    t < 0
                      ? t
                      : !i && u
                      ? -1e-8
                      : c._dur * c._ease(i / this._dur),
                    e,
                    n
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    oe(this, "onUpdate")),
                  this._repeat &&
                    o !== s &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    oe(this, "onRepeat"),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !f) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      Et(this, 1),
                    e ||
                      (t < 0 && !h) ||
                      (!g && !h) ||
                      (oe(
                        this,
                        g === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, i) {
                var r,
                  o,
                  a,
                  s = t.ratio,
                  u =
                    e < 0 ||
                    (!e &&
                      ((!t._start && $t(t) && (t._initted || !Nt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Nt(t))))
                      ? 0
                      : 1,
                  l = t._rDelay,
                  c = 0;
                if (
                  (l &&
                    t._repeat &&
                    ((c = Yt(0, t._tDur, e)),
                    (o = At(c, l)),
                    t._yoyo && 1 & o && (u = 1 - u),
                    o !== At(t._tTime, l) &&
                      ((s = 1 - u),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  u !== s || i || t._zTime === _ || (!e && t._zTime))
                ) {
                  if (!t._initted && Pt(t, e, i, n)) return;
                  for (
                    a = t._zTime,
                      t._zTime = e || (n ? _ : 0),
                      n || (n = e && !a),
                      t.ratio = u,
                      t._from && (u = 1 - u),
                      t._time = 0,
                      t._tTime = c,
                      r = t._pt;
                    r;

                  )
                    r.r(u, r.d), (r = r._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !n && oe(t, "onUpdate"),
                    c && t._repeat && !n && t.parent && oe(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === u &&
                      (u && Et(t, 1),
                      n ||
                        (oe(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (a.targets = function () {
            return this._targets;
          }),
          (a.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              n.prototype.invalidate.call(this)
            );
          }),
          (a.resetTo = function (t, e, n, i) {
            d || me.wake(), this._ts || this.play();
            var r = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || Ne(this, r),
              (function (t, e, n, i, r, o, a) {
                var s,
                  u,
                  l,
                  c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!c)
                  for (
                    c = t._ptCache[e] = [],
                      u = t._ptLookup,
                      l = t._targets.length;
                    l--;

                  ) {
                    if ((s = u[l][e]) && s.d && s.d._pt)
                      for (s = s.d._pt; s && s.p !== e; ) s = s._next;
                    if (!s)
                      return (
                        (Oe = 1), (t.vars[e] = "+=0"), Ne(t, a), (Oe = 0), 1
                      );
                    c.push(s);
                  }
                for (l = c.length; l--; )
                  ((s = c[l]).s =
                    (!i && 0 !== i) || r ? s.s + (i || 0) + o * s.c : i),
                    (s.c = n - s.s),
                    s.e && (s.e = lt(n) + Vt(s.e)),
                    s.b && (s.b = s.s + Vt(s.b));
              })(this, t, e, n, i, this._ease(r / this._dur), r)
                ? this.resetTo(t, e, n, i)
                : (It(this, 0),
                  this.parent ||
                    bt(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (a.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? ae(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Le && !0 !== Le.vars.overwrite)
                  ._first || ae(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Rt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var i,
              r,
              o,
              a,
              s,
              u,
              l,
              c = this._targets,
              d = t ? Xt(t) : c,
              h = this._ptLookup,
              p = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, i = n === e.length;
                  i && n-- && t[n] === e[n];

                );
                return n < 0;
              })(c, d)
            )
              return "all" === e && (this._pt = 0), ae(this);
            for (
              i = this._op = this._op || [],
                "all" !== e &&
                  (F(e) &&
                    ((s = {}),
                    ut(e, function (t) {
                      return (s[t] = 1);
                    }),
                    (e = s)),
                  (e = (function (t, e) {
                    var n,
                      i,
                      r,
                      o,
                      a = t[0] ? at(t[0]).harness : 0,
                      s = a && a.aliases;
                    if (!s) return e;
                    for (i in ((n = vt({}, e)), s))
                      if ((i in n))
                        for (r = (o = s[i].split(",")).length; r--; )
                          n[o[r]] = n[i];
                    return n;
                  })(c, e))),
                l = c.length;
              l--;

            )
              if (~d.indexOf(c[l]))
                for (s in ((r = h[l]),
                "all" === e
                  ? ((i[l] = e), (a = r), (o = {}))
                  : ((o = i[l] = i[l] || {}), (a = e)),
                a))
                  (u = r && r[s]) &&
                    (("kill" in u.d && !0 !== u.d.kill(s)) ||
                      wt(this, u, "_pt"),
                    delete r[s]),
                    "all" !== o && (o[s] = 1);
            return this._initted && !this._pt && p && ae(this), this;
          }),
          (o.to = function (t, e) {
            return new o(t, e, arguments[2]);
          }),
          (o.from = function (t, e) {
            return Ut(1, arguments);
          }),
          (o.delayedCall = function (t, e, n, i) {
            return new o(e, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (o.fromTo = function (t, e, n) {
            return Ut(2, arguments);
          }),
          (o.set = function (t, e) {
            return (
              (e.duration = 0), e.repeatDelay || (e.repeat = 0), new o(t, e)
            );
          }),
          (o.killTweensOf = function (t, e, n) {
            return r.killTweensOf(t, e, n);
          }),
          o
        );
      })(Me);
      mt(Ue.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        ut("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Ue[t] = function () {
            var e = new Ie(),
              n = Wt.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var He = function (t, e, n) {
          return (t[e] = n);
        },
        Ye = function (t, e, n) {
          return t[e](n);
        },
        Ve = function (t, e, n, i) {
          return t[e](i.fp, n);
        },
        We = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        Ge = function (t, e) {
          return T(t[e]) ? Ye : A(t[e]) && t.setAttribute ? We : He;
        },
        Xe = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        Ke = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Je = function (t, e) {
          var n = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; n; )
              (i =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                i),
                (n = n._next);
            i += e.c;
          }
          e.set(e.t, e.p, i, e);
        },
        Qe = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        Ze = function (t, e, n, i) {
          for (var r, o = this._pt; o; )
            (r = o._next), o.p === i && o.modifier(t, e, n), (o = r);
        },
        tn = function (t) {
          for (var e, n, i = this._pt; i; )
            (n = i._next),
              (i.p === t && !i.op) || i.op === t
                ? wt(this, i, "_pt")
                : i.dep || (e = 1),
              (i = n);
          return !e;
        },
        en = function (t, e, n, i) {
          i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
        },
        nn = function (t) {
          for (var e, n, i, r, o = t._pt; o; ) {
            for (e = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
            (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o),
              (o._next = n) ? (n._prev = o) : (r = o),
              (o = e);
          }
          t._pt = i;
        },
        rn = (function () {
          function t(t, e, n, i, r, o, a, s, u) {
            (this.t = e),
              (this.s = i),
              (this.c = r),
              (this.p = n),
              (this.r = o || Xe),
              (this.d = a || this),
              (this.set = s || He),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = en),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      ut(
        rt +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (J[t] = 1);
        }
      ),
        (H.TweenMax = H.TweenLite = Ue),
        (H.TimelineLite = H.TimelineMax = Ie),
        (r = new Ie({
          sortChildren: !1,
          defaults: m,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (D.stringFilter = De);
      var on = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          e.forEach(function (t) {
            return se(t);
          });
        },
        timeline: function (t) {
          return new Ie(t);
        },
        getTweensOf: function (t, e) {
          return r.getTweensOf(t, e);
        },
        getProperty: function (t, e, n, i) {
          F(t) && (t = Xt(t)[0]);
          var r = at(t || {}).get,
            o = n ? Dt : gt;
          return (
            "native" === n && (n = ""),
            t
              ? e
                ? o(((tt[e] && tt[e].get) || r)(t, e, n, i))
                : function (e, n, i) {
                    return o(((tt[e] && tt[e].get) || r)(t, e, n, i));
                  }
              : t
          );
        },
        quickSetter: function (t, e, n) {
          if ((t = Xt(t)).length > 1) {
            var i = t.map(function (t) {
                return un.quickSetter(t, e, n);
              }),
              r = i.length;
            return function (t) {
              for (var e = r; e--; ) i[e](t);
            };
          }
          t = t[0] || {};
          var o = tt[e],
            a = at(t),
            s = (a.harness && (a.harness.aliases || {})[e]) || e,
            u = o
              ? function (e) {
                  var i = new o();
                  (c._pt = 0),
                    i.init(t, n ? e + n : e, c, 0, [t]),
                    i.render(1, i),
                    c._pt && Qe(1, c);
                }
              : a.set(t, s);
          return o
            ? u
            : function (e) {
                return u(t, s, n ? e + n : e, a, 1);
              };
        },
        quickTo: function (t, e, n) {
          var i,
            r = un.to(
              t,
              vt((((i = {})[e] = "+=0.1"), (i.paused = !0), i), n || {})
            ),
            o = function (t, n, i) {
              return r.resetTo(e, t, n, i);
            };
          return (o.tween = r), o;
        },
        isTweening: function (t) {
          return r.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = xe(t.ease, m.ease)), _t(m, t || {});
        },
        config: function (t) {
          return _t(D, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            n = t.effect,
            i = t.plugins,
            r = t.defaults,
            o = t.extendTimeline;
          (i || "").split(",").forEach(function (t) {
            return (
              t &&
              !tt[t] &&
              !H[t] &&
              G(e + " effect requires " + t + " plugin.")
            );
          }),
            (et[e] = function (t, e, i) {
              return n(Xt(t), mt(e || {}, r), i);
            }),
            o &&
              (Ie.prototype[e] = function (t, n, i) {
                return this.add(et[e](t, S(n) ? n : (i = n) && {}, this), i);
              });
        },
        registerEase: function (t, e) {
          _e[t] = xe(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? xe(t, e) : _e;
        },
        getById: function (t) {
          return r.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var n,
            i,
            o = new Ie(t);
          for (
            o.smoothChildTiming = M(t.smoothChildTiming),
              r.remove(o),
              o._dp = 0,
              o._time = o._tTime = r._time,
              n = r._first;
            n;

          )
            (i = n._next),
              (!e &&
                !n._dur &&
                n instanceof Ue &&
                n.vars.onComplete === n._targets[0]) ||
                Ot(o, n, n._start - n._delay),
              (n = i);
          return Ot(r, o, 0), o;
        },
        utils: {
          wrap: function t(e, n, i) {
            var r = n - e;
            return B(e)
              ? ee(e, t(0, e.length), n)
              : Ht(i, function (t) {
                  return ((r + ((t - e) % r)) % r) + e;
                });
          },
          wrapYoyo: function t(e, n, i) {
            var r = n - e,
              o = 2 * r;
            return B(e)
              ? ee(e, t(0, e.length - 1), n)
              : Ht(i, function (t) {
                  return (
                    e + ((t = (o + ((t - e) % o)) % o || 0) > r ? o - t : t)
                  );
                });
          },
          distribute: Jt,
          random: te,
          snap: Zt,
          normalize: function (t, e, n) {
            return ie(t, e, 0, 1, n);
          },
          getUnit: Vt,
          clamp: function (t, e, n) {
            return Ht(n, function (n) {
              return Yt(t, e, n);
            });
          },
          splitColor: de,
          toArray: Xt,
          selector: function (t) {
            return (
              (t = Xt(t)[0] || G("Invalid scope") || {}),
              function (e) {
                var n = t.current || t.nativeElement || t;
                return Xt(
                  e,
                  n.querySelectorAll
                    ? n
                    : n === t
                    ? G("Invalid scope") || s.createElement("div")
                    : t
                );
              }
            );
          },
          mapRange: ie,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (n) {
              return t(parseFloat(n)) + (e || Vt(n));
            };
          },
          interpolate: function t(e, n, i, r) {
            var o = isNaN(e + n)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * n;
                };
            if (!o) {
              var a,
                s,
                u,
                l,
                c,
                d = F(e),
                h = {};
              if ((!0 === i && (r = 1) && (i = null), d))
                (e = { p: e }), (n = { p: n });
              else if (B(e) && !B(n)) {
                for (u = [], l = e.length, c = l - 2, s = 1; s < l; s++)
                  u.push(t(e[s - 1], e[s]));
                l--,
                  (o = function (t) {
                    t *= l;
                    var e = Math.min(c, ~~t);
                    return u[e](t - e);
                  }),
                  (i = n);
              } else r || (e = vt(B(e) ? [] : {}, e));
              if (!u) {
                for (a in n) Pe.call(h, e, a, "get", n[a]);
                o = function (t) {
                  return Qe(t, h) || (d ? e.p : e);
                };
              }
            }
            return Ht(i, o);
          },
          shuffle: Kt,
        },
        install: V,
        effects: et,
        ticker: me,
        updateRoot: Ie.updateRoot,
        plugins: tt,
        globalTimeline: r,
        core: {
          PropTween: rn,
          globals: X,
          Tween: Ue,
          Timeline: Ie,
          Animation: Me,
          getCache: at,
          _removeLinkedListItem: wt,
          suppressOverwrites: function (t) {
            return (i = t);
          },
        },
      };
      ut("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (on[t] = Ue[t]);
      }),
        me.add(Ie.updateRoot),
        (c = on.to({}, { duration: 0 }));
      var an = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        sn = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, i) {
              i._onInit = function (t) {
                var i, r;
                if (
                  (F(n) &&
                    ((i = {}),
                    ut(n, function (t) {
                      return (i[t] = 1);
                    }),
                    (n = i)),
                  e)
                ) {
                  for (r in ((i = {}), n)) i[r] = e(n[r]);
                  n = i;
                }
                !(function (t, e) {
                  var n,
                    i,
                    r,
                    o = t._targets;
                  for (n in e)
                    for (i = o.length; i--; )
                      (r = t._ptLookup[i][n]) &&
                        (r = r.d) &&
                        (r._pt && (r = an(r, n)),
                        r && r.modifier && r.modifier(e[n], t, o[i], n));
                })(t, n);
              };
            },
          };
        },
        un =
          on.registerPlugin(
            {
              name: "attr",
              init: function (t, e, n, i, r) {
                var o, a;
                for (o in e)
                  (a = this.add(
                    t,
                    "setAttribute",
                    (t.getAttribute(o) || 0) + "",
                    e[o],
                    i,
                    r,
                    0,
                    0,
                    o
                  )) && (a.op = o),
                    this._props.push(o);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
              },
            },
            sn("roundProps", Qt),
            sn("modifiers"),
            sn("snap", Zt)
          ) || on;
      (Ue.version = Ie.version = un.version = "3.10.4"),
        (u = 1),
        I() && ve(),
        _e.Power0,
        _e.Power1,
        _e.Power2,
        _e.Power3,
        _e.Power4,
        _e.Linear,
        _e.Quad,
        _e.Cubic,
        _e.Quart,
        _e.Quint,
        _e.Strong,
        _e.Elastic,
        _e.Back,
        _e.SteppedEase,
        _e.Bounce,
        _e.Sine,
        _e.Expo,
        _e.Circ;
      var ln,
        cn,
        dn,
        hn,
        pn,
        fn,
        gn,
        Dn = {},
        mn = 180 / Math.PI,
        vn = Math.PI / 180,
        _n = Math.atan2,
        yn = /([A-Z])/g,
        Cn = /(left|right|width|margin|padding|x)/i,
        bn = /[\s,\(]\S/,
        wn = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        En = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        xn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Fn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Tn = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        kn = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        An = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Sn = function (t, e, n) {
          return (t.style[e] = n);
        },
        Mn = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        In = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        Ln = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        On = function (t, e, n, i, r) {
          var o = t._gsap;
          (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
        },
        Bn = function (t, e, n, i, r) {
          var o = t._gsap;
          (o[e] = n), o.renderTransform(r, o);
        },
        Pn = "transform",
        $n = Pn + "Origin",
        Nn = function (t, e) {
          var n = cn.createElementNS
            ? cn.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : cn.createElement(t);
          return n.style ? n : cn.createElement(t);
        },
        Rn = function t(e, n, i) {
          var r = getComputedStyle(e);
          return (
            r[n] ||
            r.getPropertyValue(n.replace(yn, "-$1").toLowerCase()) ||
            r.getPropertyValue(n) ||
            (!i && t(e, qn(n) || n, 1)) ||
            ""
          );
        },
        zn = "O,Moz,ms,Ms,Webkit".split(","),
        qn = function (t, e, n) {
          var i = (e || pn).style,
            r = 5;
          if (t in i && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            r-- && !(zn[r] + t in i);

          );
          return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? zn[r] : "") + t;
        },
        jn = function () {
          "undefined" != typeof window &&
            window.document &&
            ((ln = window),
            (cn = ln.document),
            (dn = cn.documentElement),
            (pn = Nn("div") || { style: {} }),
            Nn("div"),
            (Pn = qn(Pn)),
            ($n = Pn + "Origin"),
            (pn.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (gn = !!qn("perspective")),
            (hn = 1));
        },
        Un = function t(e) {
          var n,
            i = Nn(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            r = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (
            (dn.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
            dn.removeChild(i),
            (this.style.cssText = a),
            n
          );
        },
        Hn = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        Yn = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (n) {
            e = Un.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === Un ||
              (e = Un.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Hn(t, ["x", "cx", "x1"]) || 0,
                  y: +Hn(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Vn = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Yn(t));
        },
        Wn = function (t, e) {
          if (e) {
            var n = t.style;
            e in Dn && e !== $n && (e = Pn),
              n.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  n.removeProperty(e.replace(yn, "-$1").toLowerCase()))
                : n.removeAttribute(e);
          }
        },
        Gn = function (t, e, n, i, r, o) {
          var a = new rn(t._pt, e, n, 0, 1, o ? An : kn);
          return (t._pt = a), (a.b = i), (a.e = r), t._props.push(n), a;
        },
        Xn = { deg: 1, rad: 1, turn: 1 },
        Kn = function t(e, n, i, r) {
          var o,
            a,
            s,
            u,
            l = parseFloat(i) || 0,
            c = (i + "").trim().substr((l + "").length) || "px",
            d = pn.style,
            h = Cn.test(n),
            p = "svg" === e.tagName.toLowerCase(),
            f = (p ? "client" : "offset") + (h ? "Width" : "Height"),
            g = 100,
            D = "px" === r,
            m = "%" === r;
          return r === c || !l || Xn[r] || Xn[c]
            ? l
            : ("px" !== c && !D && (l = t(e, n, i, "px")),
              (u = e.getCTM && Vn(e)),
              (!m && "%" !== c) || (!Dn[n] && !~n.indexOf("adius"))
                ? ((d[h ? "width" : "height"] = g + (D ? c : r)),
                  (a =
                    ~n.indexOf("adius") || ("em" === r && e.appendChild && !p)
                      ? e
                      : e.parentNode),
                  u && (a = (e.ownerSVGElement || {}).parentNode),
                  (a && a !== cn && a.appendChild) || (a = cn.body),
                  (s = a._gsap) && m && s.width && h && s.time === me.time
                    ? lt((l / s.width) * g)
                    : ((m || "%" === c) && (d.position = Rn(e, "position")),
                      a === e && (d.position = "static"),
                      a.appendChild(pn),
                      (o = pn[f]),
                      a.removeChild(pn),
                      (d.position = "absolute"),
                      h &&
                        m &&
                        (((s = at(a)).time = me.time), (s.width = a[f])),
                      lt(D ? (o * l) / g : o && l ? (g / o) * l : 0)))
                : ((o = u ? e.getBBox()[h ? "width" : "height"] : e[f]),
                  lt(m ? (l / o) * g : (l / 100) * o)));
        },
        Jn = function (t, e, n, i) {
          var r;
          return (
            hn || jn(),
            e in wn &&
              "transform" !== e &&
              ~(e = wn[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            Dn[e] && "transform" !== e
              ? ((r = ui(t, i)),
                (r =
                  "transformOrigin" !== e
                    ? r[e]
                    : r.svg
                    ? r.origin
                    : li(Rn(t, $n)) + " " + r.zOrigin + "px"))
              : (!(r = t.style[e]) ||
                  "auto" === r ||
                  i ||
                  ~(r + "").indexOf("calc(")) &&
                (r =
                  (ei[e] && ei[e](t, e, n)) ||
                  Rn(t, e) ||
                  st(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            n && !~(r + "").trim().indexOf(" ") ? Kn(t, e, r, n) + n : r
          );
        },
        Qn = function (t, e, n, i) {
          if (!n || "none" === n) {
            var r = qn(e, t, 1),
              o = r && Rn(t, r, 1);
            o && o !== n
              ? ((e = r), (n = o))
              : "borderColor" === e && (n = Rn(t, "borderTopColor"));
          }
          var a,
            s,
            u,
            l,
            c,
            d,
            h,
            p,
            f,
            g,
            m,
            v = new rn(this._pt, t.style, e, 0, 1, Je),
            _ = 0,
            y = 0;
          if (
            ((v.b = n),
            (v.e = i),
            (n += ""),
            "auto" == (i += "") &&
              ((t.style[e] = i), (i = Rn(t, e) || i), (t.style[e] = n)),
            De((a = [n, i])),
            (i = a[1]),
            (u = (n = a[0]).match(R) || []),
            (i.match(R) || []).length)
          ) {
            for (; (s = R.exec(i)); )
              (h = s[0]),
                (f = i.substring(_, s.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                    (c = 1),
                h !== (d = u[y++] || "") &&
                  ((l = parseFloat(d) || 0),
                  (m = d.substr((l + "").length)),
                  "=" === h.charAt(1) && (h = dt(l, h) + m),
                  (p = parseFloat(h)),
                  (g = h.substr((p + "").length)),
                  (_ = R.lastIndex - g.length),
                  g ||
                    ((g = g || D.units[e] || m),
                    _ === i.length && ((i += g), (v.e += g))),
                  m !== g && (l = Kn(t, e, d, g) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: f || 1 === y ? f : ",",
                    s: l,
                    c: p - l,
                    m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            v.c = _ < i.length ? i.substring(_, i.length) : "";
          } else v.r = "display" === e && "none" === i ? An : kn;
          return q.test(i) && (v.e = 0), (this._pt = v), v;
        },
        Zn = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        ti = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              i,
              r,
              o = e.t,
              a = o.style,
              s = e.u,
              u = o._gsap;
            if ("all" === s || !0 === s) (a.cssText = ""), (i = 1);
            else
              for (r = (s = s.split(",")).length; --r > -1; )
                (n = s[r]),
                  Dn[n] && ((i = 1), (n = "transformOrigin" === n ? $n : Pn)),
                  Wn(o, n);
            i &&
              (Wn(o, Pn),
              u &&
                (u.svg && o.removeAttribute("transform"),
                ui(o, 1),
                (u.uncache = 1)));
          }
        },
        ei = {
          clearProps: function (t, e, n, i, r) {
            if ("isFromStart" !== r.data) {
              var o = (t._pt = new rn(t._pt, e, n, 0, 0, ti));
              return (
                (o.u = i), (o.pr = -10), (o.tween = r), t._props.push(n), 1
              );
            }
          },
        },
        ni = [1, 0, 0, 1, 0, 0],
        ii = {},
        ri = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        oi = function (t) {
          var e = Rn(t, Pn);
          return ri(e) ? ni : e.substr(7).match(N).map(lt);
        },
        ai = function (t, e) {
          var n,
            i,
            r,
            o,
            a = t._gsap || at(t),
            s = t.style,
            u = oi(t);
          return a.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (r = t.transform.baseVal.consolidate().matrix).a,
                r.b,
                r.c,
                r.d,
                r.e,
                r.f,
              ]).join(",")
              ? ni
              : u
            : (u !== ni ||
                t.offsetParent ||
                t === dn ||
                a.svg ||
                ((r = s.display),
                (s.display = "block"),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (i = t.nextSibling), dn.appendChild(t)),
                (u = oi(t)),
                r ? (s.display = r) : Wn(t, "display"),
                o &&
                  (i
                    ? n.insertBefore(t, i)
                    : n
                    ? n.appendChild(t)
                    : dn.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        si = function (t, e, n, i, r, o) {
          var a,
            s,
            u,
            l = t._gsap,
            c = r || ai(t, !0),
            d = l.xOrigin || 0,
            h = l.yOrigin || 0,
            p = l.xOffset || 0,
            f = l.yOffset || 0,
            g = c[0],
            D = c[1],
            m = c[2],
            v = c[3],
            _ = c[4],
            y = c[5],
            C = e.split(" "),
            b = parseFloat(C[0]) || 0,
            w = parseFloat(C[1]) || 0;
          n
            ? c !== ni &&
              (s = g * v - D * m) &&
              ((u = b * (-D / s) + w * (g / s) - (g * y - D * _) / s),
              (b = b * (v / s) + w * (-m / s) + (m * y - v * _) / s),
              (w = u))
            : ((b =
                (a = Yn(t)).x + (~C[0].indexOf("%") ? (b / 100) * a.width : b)),
              (w =
                a.y +
                (~(C[1] || C[0]).indexOf("%") ? (w / 100) * a.height : w))),
            i || (!1 !== i && l.smooth)
              ? ((_ = b - d),
                (y = w - h),
                (l.xOffset = p + (_ * g + y * m) - _),
                (l.yOffset = f + (_ * D + y * v) - y))
              : (l.xOffset = l.yOffset = 0),
            (l.xOrigin = b),
            (l.yOrigin = w),
            (l.smooth = !!i),
            (l.origin = e),
            (l.originIsAbsolute = !!n),
            (t.style[$n] = "0px 0px"),
            o &&
              (Gn(o, l, "xOrigin", d, b),
              Gn(o, l, "yOrigin", h, w),
              Gn(o, l, "xOffset", p, l.xOffset),
              Gn(o, l, "yOffset", f, l.yOffset)),
            t.setAttribute("data-svg-origin", b + " " + w);
        },
        ui = function (t, e) {
          var n = t._gsap || new Se(t);
          if ("x" in n && !e && !n.uncache) return n;
          var i,
            r,
            o,
            a,
            s,
            u,
            l,
            c,
            d,
            h,
            p,
            f,
            g,
            m,
            v,
            _,
            y,
            C,
            b,
            w,
            E,
            x,
            F,
            T,
            k,
            A,
            S,
            M,
            I,
            L,
            O,
            B,
            P = t.style,
            $ = n.scaleX < 0,
            N = "px",
            R = "deg",
            z = Rn(t, $n) || "0";
          return (
            (i = r = o = u = l = c = d = h = p = 0),
            (a = s = 1),
            (n.svg = !(!t.getCTM || !Vn(t))),
            (m = ai(t, n.svg)),
            n.svg &&
              ((T =
                (!n.uncache || "0px 0px" === z) &&
                !e &&
                t.getAttribute("data-svg-origin")),
              si(t, T || z, !!T || n.originIsAbsolute, !1 !== n.smooth, m)),
            (f = n.xOrigin || 0),
            (g = n.yOrigin || 0),
            m !== ni &&
              ((C = m[0]),
              (b = m[1]),
              (w = m[2]),
              (E = m[3]),
              (i = x = m[4]),
              (r = F = m[5]),
              6 === m.length
                ? ((a = Math.sqrt(C * C + b * b)),
                  (s = Math.sqrt(E * E + w * w)),
                  (u = C || b ? _n(b, C) * mn : 0),
                  (d = w || E ? _n(w, E) * mn + u : 0) &&
                    (s *= Math.abs(Math.cos(d * vn))),
                  n.svg &&
                    ((i -= f - (f * C + g * w)), (r -= g - (f * b + g * E))))
                : ((B = m[6]),
                  (L = m[7]),
                  (S = m[8]),
                  (M = m[9]),
                  (I = m[10]),
                  (O = m[11]),
                  (i = m[12]),
                  (r = m[13]),
                  (o = m[14]),
                  (l = (v = _n(B, I)) * mn),
                  v &&
                    ((T = x * (_ = Math.cos(-v)) + S * (y = Math.sin(-v))),
                    (k = F * _ + M * y),
                    (A = B * _ + I * y),
                    (S = x * -y + S * _),
                    (M = F * -y + M * _),
                    (I = B * -y + I * _),
                    (O = L * -y + O * _),
                    (x = T),
                    (F = k),
                    (B = A)),
                  (c = (v = _n(-w, I)) * mn),
                  v &&
                    ((_ = Math.cos(-v)),
                    (O = E * (y = Math.sin(-v)) + O * _),
                    (C = T = C * _ - S * y),
                    (b = k = b * _ - M * y),
                    (w = A = w * _ - I * y)),
                  (u = (v = _n(b, C)) * mn),
                  v &&
                    ((T = C * (_ = Math.cos(v)) + b * (y = Math.sin(v))),
                    (k = x * _ + F * y),
                    (b = b * _ - C * y),
                    (F = F * _ - x * y),
                    (C = T),
                    (x = k)),
                  l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (c = 180 - c)),
                  (a = lt(Math.sqrt(C * C + b * b + w * w))),
                  (s = lt(Math.sqrt(F * F + B * B))),
                  (v = _n(x, F)),
                  (d = Math.abs(v) > 2e-4 ? v * mn : 0),
                  (p = O ? 1 / (O < 0 ? -O : O) : 0)),
              n.svg &&
                ((T = t.getAttribute("transform")),
                (n.forceCSS =
                  t.setAttribute("transform", "") || !ri(Rn(t, Pn))),
                T && t.setAttribute("transform", T))),
            Math.abs(d) > 90 &&
              Math.abs(d) < 270 &&
              ($
                ? ((a *= -1),
                  (d += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((s *= -1), (d += d <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              i -
              ((n.xPercent =
                i &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              N),
            (n.y =
              r -
              ((n.yPercent =
                r &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-r)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              N),
            (n.z = o + N),
            (n.scaleX = lt(a)),
            (n.scaleY = lt(s)),
            (n.rotation = lt(u) + R),
            (n.rotationX = lt(l) + R),
            (n.rotationY = lt(c) + R),
            (n.skewX = d + R),
            (n.skewY = h + R),
            (n.transformPerspective = p + N),
            (n.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (P[$n] = li(z)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = D.force3D),
            (n.renderTransform = n.svg ? Di : gn ? gi : di),
            (n.uncache = 0),
            n
          );
        },
        li = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        ci = function (t, e, n) {
          var i = Vt(e);
          return lt(parseFloat(e) + parseFloat(Kn(t, "x", n + "px", i))) + i;
        },
        di = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            gi(t, e);
        },
        hi = "0deg",
        pi = "0px",
        fi = ") ",
        gi = function (t, e) {
          var n = e || this,
            i = n.xPercent,
            r = n.yPercent,
            o = n.x,
            a = n.y,
            s = n.z,
            u = n.rotation,
            l = n.rotationY,
            c = n.rotationX,
            d = n.skewX,
            h = n.skewY,
            p = n.scaleX,
            f = n.scaleY,
            g = n.transformPerspective,
            D = n.force3D,
            m = n.target,
            v = n.zOrigin,
            _ = "",
            y = ("auto" === D && t && 1 !== t) || !0 === D;
          if (v && (c !== hi || l !== hi)) {
            var C,
              b = parseFloat(l) * vn,
              w = Math.sin(b),
              E = Math.cos(b);
            (b = parseFloat(c) * vn),
              (C = Math.cos(b)),
              (o = ci(m, o, w * C * -v)),
              (a = ci(m, a, -Math.sin(b) * -v)),
              (s = ci(m, s, E * C * -v + v));
          }
          g !== pi && (_ += "perspective(" + g + fi),
            (i || r) && (_ += "translate(" + i + "%, " + r + "%) "),
            (y || o !== pi || a !== pi || s !== pi) &&
              (_ +=
                s !== pi || y
                  ? "translate3d(" + o + ", " + a + ", " + s + ") "
                  : "translate(" + o + ", " + a + fi),
            u !== hi && (_ += "rotate(" + u + fi),
            l !== hi && (_ += "rotateY(" + l + fi),
            c !== hi && (_ += "rotateX(" + c + fi),
            (d === hi && h === hi) || (_ += "skew(" + d + ", " + h + fi),
            (1 === p && 1 === f) || (_ += "scale(" + p + ", " + f + fi),
            (m.style[Pn] = _ || "translate(0, 0)");
        },
        Di = function (t, e) {
          var n,
            i,
            r,
            o,
            a,
            s = e || this,
            u = s.xPercent,
            l = s.yPercent,
            c = s.x,
            d = s.y,
            h = s.rotation,
            p = s.skewX,
            f = s.skewY,
            g = s.scaleX,
            D = s.scaleY,
            m = s.target,
            v = s.xOrigin,
            _ = s.yOrigin,
            y = s.xOffset,
            C = s.yOffset,
            b = s.forceCSS,
            w = parseFloat(c),
            E = parseFloat(d);
          (h = parseFloat(h)),
            (p = parseFloat(p)),
            (f = parseFloat(f)) && ((p += f = parseFloat(f)), (h += f)),
            h || p
              ? ((h *= vn),
                (p *= vn),
                (n = Math.cos(h) * g),
                (i = Math.sin(h) * g),
                (r = Math.sin(h - p) * -D),
                (o = Math.cos(h - p) * D),
                p &&
                  ((f *= vn),
                  (a = Math.tan(p - f)),
                  (r *= a = Math.sqrt(1 + a * a)),
                  (o *= a),
                  f &&
                    ((a = Math.tan(f)),
                    (n *= a = Math.sqrt(1 + a * a)),
                    (i *= a))),
                (n = lt(n)),
                (i = lt(i)),
                (r = lt(r)),
                (o = lt(o)))
              : ((n = g), (o = D), (i = r = 0)),
            ((w && !~(c + "").indexOf("px")) ||
              (E && !~(d + "").indexOf("px"))) &&
              ((w = Kn(m, "x", c, "px")), (E = Kn(m, "y", d, "px"))),
            (v || _ || y || C) &&
              ((w = lt(w + v - (v * n + _ * r) + y)),
              (E = lt(E + _ - (v * i + _ * o) + C))),
            (u || l) &&
              ((a = m.getBBox()),
              (w = lt(w + (u / 100) * a.width)),
              (E = lt(E + (l / 100) * a.height))),
            (a =
              "matrix(" +
              n +
              "," +
              i +
              "," +
              r +
              "," +
              o +
              "," +
              w +
              "," +
              E +
              ")"),
            m.setAttribute("transform", a),
            b && (m.style[Pn] = a);
        },
        mi = function (t, e, n, i, r) {
          var o,
            a,
            s = 360,
            u = F(r),
            l = parseFloat(r) * (u && ~r.indexOf("rad") ? mn : 1) - i,
            c = i + l + "deg";
          return (
            u &&
              ("short" === (o = r.split("_")[1]) &&
                (l %= s) != l % 180 &&
                (l += l < 0 ? s : -360),
              "cw" === o && l < 0
                ? (l = ((l + 36e9) % s) - ~~(l / s) * s)
                : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % s) - ~~(l / s) * s)),
            (t._pt = a = new rn(t._pt, e, n, i, l, xn)),
            (a.e = c),
            (a.u = "deg"),
            t._props.push(n),
            a
          );
        },
        vi = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        _i = function (t, e, n) {
          var i,
            r,
            o,
            a,
            s,
            u,
            l,
            c = vi({}, n._gsap),
            d = n.style;
          for (r in (c.svg
            ? ((o = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (d[Pn] = e),
              (i = ui(n, 1)),
              Wn(n, Pn),
              n.setAttribute("transform", o))
            : ((o = getComputedStyle(n)[Pn]),
              (d[Pn] = e),
              (i = ui(n, 1)),
              (d[Pn] = o)),
          Dn))
            (o = c[r]) !== (a = i[r]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
              ((s = Vt(o) !== (l = Vt(a)) ? Kn(n, r, o, l) : parseFloat(o)),
              (u = parseFloat(a)),
              (t._pt = new rn(t._pt, i, r, s, u - s, En)),
              (t._pt.u = l || 0),
              t._props.push(r));
          vi(i, c);
        };
      ut("padding,margin,Width,Radius", function (t, e) {
        var n = "Top",
          i = "Right",
          r = "Bottom",
          o = "Left",
          a = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(
            function (n) {
              return e < 2 ? t + n : "border" + n + t;
            }
          );
        ei[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
          var o, s;
          if (arguments.length < 4)
            return (
              (o = a.map(function (e) {
                return Jn(t, e, n);
              })),
              5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
            );
          (o = (i + "").split(" ")),
            (s = {}),
            a.forEach(function (t, e) {
              return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            t.init(e, s, r);
        };
      });
      var yi,
        Ci,
        bi = {
          name: "css",
          register: jn,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, i, r) {
            var o,
              a,
              s,
              u,
              l,
              c,
              d,
              h,
              p,
              f,
              g,
              m,
              v,
              _,
              y,
              C,
              b,
              w,
              E,
              x = this._props,
              T = t.style,
              k = n.vars.startAt;
            for (d in (hn || jn(), e))
              if (
                "autoRound" !== d &&
                ((a = e[d]), !tt[d] || !$e(d, e, n, i, t, r))
              )
                if (
                  ((l = typeof a),
                  (c = ei[d]),
                  "function" === l && (l = typeof (a = a.call(n, i, t, r))),
                  "string" === l && ~a.indexOf("random(") && (a = ne(a)),
                  c)
                )
                  c(this, t, d, a, n) && (y = 1);
                else if ("--" === d.substr(0, 2))
                  (o = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                    (a += ""),
                    (fe.lastIndex = 0),
                    fe.test(o) || ((h = Vt(o)), (p = Vt(a))),
                    p ? h !== p && (o = Kn(t, d, o, p) + p) : h && (a += h),
                    this.add(T, "setProperty", o, a, i, r, 0, 0, d),
                    x.push(d);
                else if ("undefined" !== l) {
                  if (
                    (k && d in k
                      ? ((o =
                          "function" == typeof k[d]
                            ? k[d].call(n, i, t, r)
                            : k[d]),
                        F(o) && ~o.indexOf("random(") && (o = ne(o)),
                        Vt(o + "") || (o += D.units[d] || Vt(Jn(t, d)) || ""),
                        "=" === (o + "").charAt(1) && (o = Jn(t, d)))
                      : (o = Jn(t, d)),
                    (u = parseFloat(o)),
                    (f =
                      "string" === l &&
                      "=" === a.charAt(1) &&
                      a.substr(0, 2)) && (a = a.substr(2)),
                    (s = parseFloat(a)),
                    d in wn &&
                      ("autoAlpha" === d &&
                        (1 === u &&
                          "hidden" === Jn(t, "visibility") &&
                          s &&
                          (u = 0),
                        Gn(
                          this,
                          T,
                          "visibility",
                          u ? "inherit" : "hidden",
                          s ? "inherit" : "hidden",
                          !s
                        )),
                      "scale" !== d &&
                        "transform" !== d &&
                        ~(d = wn[d]).indexOf(",") &&
                        (d = d.split(",")[0])),
                    (g = d in Dn))
                  )
                    if (
                      (m ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          ui(t, e.parseTransform),
                        (_ = !1 !== e.smoothOrigin && v.smooth),
                        ((m = this._pt =
                          new rn(
                            this._pt,
                            T,
                            Pn,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === d)
                    )
                      (this._pt = new rn(
                        this._pt,
                        v,
                        "scaleY",
                        v.scaleY,
                        (f ? dt(v.scaleY, f + s) : s) - v.scaleY || 0
                      )),
                        x.push("scaleY", d),
                        (d += "X");
                    else {
                      if ("transformOrigin" === d) {
                        (b = void 0),
                          (w = void 0),
                          (E = void 0),
                          (w = (b = (C = a).split(" "))[0]),
                          (E = b[1] || "50%"),
                          ("top" !== w &&
                            "bottom" !== w &&
                            "left" !== E &&
                            "right" !== E) ||
                            ((C = w), (w = E), (E = C)),
                          (b[0] = Zn[w] || w),
                          (b[1] = Zn[E] || E),
                          (a = b.join(" ")),
                          v.svg
                            ? si(t, a, 0, _, 0, this)
                            : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                Gn(this, v, "zOrigin", v.zOrigin, p),
                              Gn(this, T, d, li(o), li(a)));
                        continue;
                      }
                      if ("svgOrigin" === d) {
                        si(t, a, 1, _, 0, this);
                        continue;
                      }
                      if (d in ii) {
                        mi(this, v, d, u, f ? dt(u, f + a) : a);
                        continue;
                      }
                      if ("smoothOrigin" === d) {
                        Gn(this, v, "smooth", v.smooth, a);
                        continue;
                      }
                      if ("force3D" === d) {
                        v[d] = a;
                        continue;
                      }
                      if ("transform" === d) {
                        _i(this, a, t);
                        continue;
                      }
                    }
                  else d in T || (d = qn(d) || d);
                  if (
                    g ||
                    ((s || 0 === s) && (u || 0 === u) && !bn.test(a) && d in T)
                  )
                    s || (s = 0),
                      (h = (o + "").substr((u + "").length)) !==
                        (p = Vt(a) || (d in D.units ? D.units[d] : h)) &&
                        (u = Kn(t, d, o, p)),
                      (this._pt = new rn(
                        this._pt,
                        g ? v : T,
                        d,
                        u,
                        (f ? dt(u, f + s) : s) - u,
                        g ||
                        ("px" !== p && "zIndex" !== d) ||
                        !1 === e.autoRound
                          ? En
                          : Tn
                      )),
                      (this._pt.u = p || 0),
                      h !== p &&
                        "%" !== p &&
                        ((this._pt.b = o), (this._pt.r = Fn));
                  else if (d in T) Qn.call(this, t, d, o, f ? f + a : a);
                  else {
                    if (!(d in t)) {
                      W(d, a);
                      continue;
                    }
                    this.add(t, d, o || t[d], f ? f + a : a, i, r);
                  }
                  x.push(d);
                }
            y && nn(this);
          },
          get: Jn,
          aliases: wn,
          getSetter: function (t, e, n) {
            var i = wn[e];
            return (
              i && i.indexOf(",") < 0 && (e = i),
              e in Dn && e !== $n && (t._gsap.x || Jn(t, "x"))
                ? n && fn === n
                  ? "scale" === e
                    ? Ln
                    : In
                  : (fn = n || {}) && ("scale" === e ? On : Bn)
                : t.style && !A(t.style[e])
                ? Sn
                : ~e.indexOf("-")
                ? Mn
                : Ge(t, e)
            );
          },
          core: { _removeProperty: Wn, _getMatrix: ai },
        };
      (un.utils.checkPrefix = qn),
        (Ci = ut(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (yi = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            Dn[t] = 1;
          }
        )),
        ut(yi, function (t) {
          (D.units[t] = "deg"), (ii[t] = 1);
        }),
        (wn[Ci[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + yi),
        ut(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            wn[e[1]] = Ci[e[0]];
          }
        ),
        ut(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            D.units[t] = "px";
          }
        ),
        un.registerPlugin(bi);
      var wi = un.registerPlugin(bi) || un;
      wi.core.Tween,
        wi.config({ nullTargetWarn: !1 }),
        n(851),
        n(746),
        $(function () {
          $("select").not(".stamped-sort-select").niceSelect();
        }),
        n(683),
        0 != $(".collection-filters").length &&
          $(".collection-filters__trigger, .collection-filters__close").on(
            "click",
            function (t) {
              t.preventDefault(),
                $("body").toggleClass("collection-filters--show");
            }
          ),
        n(734),
        n(20);
      var Ei = n(296),
        xi = n.n(Ei);
      function Fi(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      $(window).on(
        "scroll",
        xi()(
          function () {
            $("body").toggleClass(
              "navbar--scrolled",
              $(window).scrollTop() > 500
            );
          },
          300,
          { maxWait: 300 }
        )
      ),
        $(".mobile-menu__nested-trigger").on("click", function (t) {
          t.preventDefault(), $(this).closest("li").toggleClass("show-nested");
        }),
        $(".mobile-menu__megamenu-trigger").on("click", function (t) {
          t.preventDefault(),
            $(".mobile-menu").toggleClass("mobile-menu--show-megamenu");
        }),
        $(".mobile-menu__trigger").on("click", function (t) {
          t.preventDefault(), $("body").toggleClass("mobile-menu--show");
        }),
        $(".megamenu__column li > a").on("mouseenter", function (t) {
          $(this)
            .closest(".megamenu__column")
            .find(".active")
            .removeClass("active"),
            $(this).closest("li").addClass("active");
        }),
        $(function () {
          var t =
            '\n  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M9.05859 17.0476L1.05859 9.04761L9.05859 1.04761" stroke="black"/>\n  </svg>  \n  ';
          $(".megamenu-products__carousel.owl-carousel").owlCarousel({
            margin: 34,
            nav: !0,
            navText: [t, t],
            responsive: { 0: { items: 1 }, 1400: { items: 2 } },
          }),
            $(".megamenu__column [data-collection]").on(
              "mouseenter",
              function () {
                var t = $($(this).attr("data-collection"));
                t.find("[data-src]").length &&
                  t.find("[data-src]").each(function () {
                    $(this).attr("src", $(this).attr("data-src")),
                      $(this).removeAttr("data-src");
                  }),
                  $(".megamenu-products.active").removeClass("active"),
                  t.addClass("active");
              }
            );
        });
      var Ti,
        ki,
        Ai,
        Si,
        Mi,
        Ii,
        Li,
        Oi,
        Bi,
        Pi,
        $i,
        Ni,
        Ri = function () {
          return (
            Ti ||
            ("undefined" != typeof window &&
              (Ti = window.gsap) &&
              Ti.registerPlugin &&
              Ti)
          );
        },
        zi = 1,
        qi = [],
        ji = [],
        Ui = [],
        Hi = Date.now,
        Yi = function (t, e) {
          return e;
        },
        Vi = function (t, e) {
          return ~Ui.indexOf(t) && Ui[Ui.indexOf(t) + 1][e];
        },
        Wi = function (t) {
          return !!~Pi.indexOf(t);
        },
        Gi = function (t, e, n, i, r) {
          return t.addEventListener(e, n, { passive: !i, capture: !!r });
        },
        Xi = function (t, e, n, i) {
          return t.removeEventListener(e, n, !!i);
        },
        Ki = function () {
          return ($i && $i.isPressed) || ji.cache++;
        },
        Ji = function (t, e) {
          var n = function n(i) {
            if (i || 0 === i) {
              zi && (Ai.history.scrollRestoration = "manual");
              var r = $i && $i.isPressed;
              (i = n.v = Math.round(i) || ($i && $i.iOS ? 1 : 0)),
                t(i),
                (n.cacheID = ji.cache),
                r && Yi("ss", i);
            } else
              (e || ji.cache !== n.cacheID || Yi("ref")) &&
                ((n.cacheID = ji.cache), (n.v = t()));
            return n.v + n.offset;
          };
          return (n.offset = 0), t && n;
        },
        Qi = {
          s: "scrollLeft",
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: Ji(function (t) {
            return arguments.length
              ? Ai.scrollTo(t, Zi.sc())
              : Ai.pageXOffset ||
                  Si.scrollLeft ||
                  Mi.scrollLeft ||
                  Ii.scrollLeft ||
                  0;
          }),
        },
        Zi = {
          s: "scrollTop",
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Qi,
          sc: Ji(function (t) {
            return arguments.length
              ? Ai.scrollTo(Qi.sc(), t)
              : Ai.pageYOffset ||
                  Si.scrollTop ||
                  Mi.scrollTop ||
                  Ii.scrollTop ||
                  0;
          }),
        },
        tr = function (t) {
          return (
            Ti.utils.toArray(t)[0] ||
            ("string" == typeof t && !1 !== Ti.config().nullTargetWarn
              ? console.warn("Element not found:", t)
              : null)
          );
        },
        er = function (t, e) {
          var n = e.s,
            i = e.sc,
            r = ji.indexOf(t),
            o = i === Zi.sc ? 1 : 2;
          return (
            !~r && (r = ji.push(t) - 1),
            ji[r + o] ||
              (ji[r + o] =
                Ji(Vi(t, n), !0) ||
                (Wi(t)
                  ? i
                  : Ji(function (e) {
                      return arguments.length ? (t[n] = e) : t[n];
                    })))
          );
        },
        nr = function (t, e, n) {
          var i = t,
            r = t,
            o = Hi(),
            a = o,
            s = e || 50,
            u = Math.max(500, 3 * s),
            l = function (t, e) {
              var u = Hi();
              e || u - o > s
                ? ((r = i), (i = t), (a = o), (o = u))
                : n
                ? (i += t)
                : (i = r + ((t - r) / (u - a)) * (o - a));
            };
          return {
            update: l,
            reset: function () {
              (r = i = n ? 0 : i), (a = o = 0);
            },
            getVelocity: function (t) {
              var e = a,
                s = r,
                c = Hi();
              return (
                (t || 0 === t) && t !== i && l(t),
                o === a || c - a > u
                  ? 0
                  : ((i + (n ? s : -s)) / ((n ? c : o) - e)) * 1e3
              );
            },
          };
        },
        ir = function (t, e) {
          return (
            e && !t._gsapAllow && t.preventDefault(),
            t.changedTouches ? t.changedTouches[0] : t
          );
        },
        rr = function (t) {
          var e = Math.max.apply(Math, t),
            n = Math.min.apply(Math, t);
          return Math.abs(e) >= Math.abs(n) ? e : n;
        },
        or = function () {
          var t, e, n, i;
          (Bi = Ti.core.globals().ScrollTrigger) &&
            Bi.core &&
            ((t = Bi.core),
            (e = t.bridge || {}),
            (n = t._scrollers),
            (i = t._proxies),
            n.push.apply(n, ji),
            i.push.apply(i, Ui),
            (ji = n),
            (Ui = i),
            (Yi = function (t, n) {
              return e[t](n);
            }));
        },
        ar = function (t) {
          return (
            (Ti = t || Ri()) &&
              "undefined" != typeof document &&
              document.body &&
              ((Ai = window),
              (Si = document),
              (Mi = Si.documentElement),
              (Ii = Si.body),
              (Pi = [Ai, Si, Mi, Ii]),
              Ti.utils.clamp,
              (Oi = "onpointerenter" in Ii ? "pointer" : "mouse"),
              (Li = sr.isTouch =
                Ai.matchMedia &&
                Ai.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in Ai ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (Ni = sr.eventTypes =
                (
                  "ontouchstart" in Mi
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in Mi
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (zi = 0);
              }, 500),
              or(),
              (ki = 1)),
            ki
          );
        };
      (Qi.op = Zi), (ji.cache = 0);
      var sr = (function () {
        function t(t) {
          this.init(t);
        }
        var e, n;
        return (
          (t.prototype.init = function (t) {
            ki ||
              ar(Ti) ||
              console.warn("Please gsap.registerPlugin(Observer)"),
              Bi || or();
            var e = t.tolerance,
              n = t.dragMinimum,
              i = t.type,
              r = t.target,
              o = t.lineHeight,
              a = t.debounce,
              s = t.preventDefault,
              u = t.onStop,
              l = t.onStopDelay,
              c = t.ignore,
              d = t.wheelSpeed,
              h = t.event,
              p = t.onDragStart,
              f = t.onDragEnd,
              g = t.onDrag,
              D = t.onPress,
              m = t.onRelease,
              v = t.onRight,
              _ = t.onLeft,
              y = t.onUp,
              C = t.onDown,
              b = t.onChangeX,
              w = t.onChangeY,
              E = t.onChange,
              x = t.onToggleX,
              F = t.onToggleY,
              T = t.onHover,
              k = t.onHoverEnd,
              A = t.onMove,
              S = t.ignoreCheck,
              M = t.isNormalizer,
              I = t.onGestureStart,
              L = t.onGestureEnd,
              O = t.onWheel,
              B = t.onEnable,
              P = t.onDisable,
              $ = t.onClick,
              N = t.scrollSpeed,
              R = t.capture,
              z = t.allowClicks,
              q = t.lockAxis,
              j = t.onLockAxis;
            (this.target = r = tr(r) || Mi),
              (this.vars = t),
              c && (c = Ti.utils.toArray(c)),
              (e = e || 0),
              (n = n || 0),
              (d = d || 1),
              (N = N || 1),
              (i = i || "wheel,touch,pointer"),
              (a = !1 !== a),
              o || (o = parseFloat(Ai.getComputedStyle(Ii).lineHeight) || 22);
            var U,
              H,
              Y,
              V,
              W,
              G,
              X,
              K = this,
              J = 0,
              Q = 0,
              Z = er(r, Qi),
              tt = er(r, Zi),
              et = Z(),
              nt = tt(),
              it =
                ~i.indexOf("touch") &&
                !~i.indexOf("pointer") &&
                "pointerdown" === Ni[0],
              rt = Wi(r),
              ot = r.ownerDocument || Si,
              at = [0, 0, 0],
              st = [0, 0, 0],
              ut = 0,
              lt = function () {
                return (ut = Hi());
              },
              ct = function (t, e) {
                return (
                  ((K.event = t) && c && ~c.indexOf(t.target)) ||
                  (e && it && "touch" !== t.pointerType) ||
                  (S && S(t, e))
                );
              },
              dt = function () {
                var t = (K.deltaX = rr(at)),
                  n = (K.deltaY = rr(st)),
                  i = Math.abs(t) >= e,
                  r = Math.abs(n) >= e;
                E && (i || r) && E(K, t, n, at, st),
                  i &&
                    (v && K.deltaX > 0 && v(K),
                    _ && K.deltaX < 0 && _(K),
                    b && b(K),
                    x && K.deltaX < 0 != J < 0 && x(K),
                    (J = K.deltaX),
                    (at[0] = at[1] = at[2] = 0)),
                  r &&
                    (C && K.deltaY > 0 && C(K),
                    y && K.deltaY < 0 && y(K),
                    w && w(K),
                    F && K.deltaY < 0 != Q < 0 && F(K),
                    (Q = K.deltaY),
                    (st[0] = st[1] = st[2] = 0)),
                  (V || Y) &&
                    (A && A(K),
                    j && G && j(K),
                    Y && (g(K), (Y = !1)),
                    (V = G = !1)),
                  W && (O(K), (W = !1)),
                  (U = 0);
              },
              ht = function (t, e, n) {
                (at[n] += t),
                  (st[n] += e),
                  K._vx.update(t),
                  K._vy.update(e),
                  a ? U || (U = requestAnimationFrame(dt)) : dt();
              },
              pt = function (t, e) {
                "y" !== X && ((at[2] += t), K._vx.update(t, !0)),
                  "x" !== X && ((st[2] += e), K._vy.update(e, !0)),
                  q &&
                    !X &&
                    ((K.axis = X = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                    (G = !0)),
                  a ? U || (U = requestAnimationFrame(dt)) : dt();
              },
              ft = function (t) {
                if (!ct(t, 1)) {
                  var e = (t = ir(t, s)).clientX,
                    i = t.clientY,
                    r = e - K.x,
                    o = i - K.y,
                    a = K.isDragging;
                  (K.x = e),
                    (K.y = i),
                    (a ||
                      Math.abs(K.startX - e) >= n ||
                      Math.abs(K.startY - i) >= n) &&
                      (g && (Y = !0),
                      a || (K.isDragging = !0),
                      pt(r, o),
                      a || (p && p(K)));
                }
              },
              gt = (K.onPress = function (t) {
                ct(t, 1) ||
                  ((K.axis = X = null),
                  H.pause(),
                  (K.isPressed = !0),
                  (t = ir(t)),
                  (J = Q = 0),
                  (K.startX = K.x = t.clientX),
                  (K.startY = K.y = t.clientY),
                  K._vx.reset(),
                  K._vy.reset(),
                  Gi(M ? r : ot, Ni[1], ft, s, !0),
                  (K.deltaX = K.deltaY = 0),
                  D && D(K));
              }),
              Dt = function (t) {
                if (!ct(t, 1)) {
                  Xi(M ? r : ot, Ni[1], ft, !0);
                  var e =
                      K.isDragging &&
                      (Math.abs(K.x - K.startX) > 3 ||
                        Math.abs(K.y - K.startY) > 3),
                    n = ir(t);
                  e ||
                    (K._vx.reset(),
                    K._vy.reset(),
                    s &&
                      z &&
                      Ti.delayedCall(0.08, function () {
                        if (Hi() - ut > 300 && !t.defaultPrevented)
                          if (t.target.click) t.target.click();
                          else if (ot.createEvent) {
                            var e = ot.createEvent("MouseEvents");
                            e.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              Ai,
                              1,
                              n.screenX,
                              n.screenY,
                              n.clientX,
                              n.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              t.target.dispatchEvent(e);
                          }
                      })),
                    (K.isDragging = K.isGesturing = K.isPressed = !1),
                    u && !M && H.restart(!0),
                    f && e && f(K),
                    m && m(K, e);
                }
              },
              mt = function (t) {
                return (
                  t.touches &&
                  t.touches.length > 1 &&
                  (K.isGesturing = !0) &&
                  I(t, K.isDragging)
                );
              },
              vt = function () {
                return (K.isGesturing = !1) || L(K);
              },
              _t = function (t) {
                if (!ct(t)) {
                  var e = Z(),
                    n = tt();
                  ht((e - et) * N, (n - nt) * N, 1),
                    (et = e),
                    (nt = n),
                    u && H.restart(!0);
                }
              },
              yt = function (t) {
                if (!ct(t)) {
                  (t = ir(t, s)), O && (W = !0);
                  var e =
                    (1 === t.deltaMode
                      ? o
                      : 2 === t.deltaMode
                      ? Ai.innerHeight
                      : 1) * d;
                  ht(t.deltaX * e, t.deltaY * e, 0), u && !M && H.restart(!0);
                }
              },
              Ct = function (t) {
                if (!ct(t)) {
                  var e = t.clientX,
                    n = t.clientY,
                    i = e - K.x,
                    r = n - K.y;
                  (K.x = e), (K.y = n), (V = !0), (i || r) && pt(i, r);
                }
              },
              bt = function (t) {
                (K.event = t), T(K);
              },
              wt = function (t) {
                (K.event = t), k(K);
              },
              Et = function (t) {
                return ct(t) || (ir(t, s) && $(K));
              };
            (H = K._dc =
              Ti.delayedCall(l || 0.25, function () {
                K._vx.reset(), K._vy.reset(), H.pause(), u && u(K);
              }).pause()),
              (K.deltaX = K.deltaY = 0),
              (K._vx = nr(0, 50, !0)),
              (K._vy = nr(0, 50, !0)),
              (K.scrollX = Z),
              (K.scrollY = tt),
              (K.isDragging = K.isGesturing = K.isPressed = !1),
              (K.enable = function (t) {
                return (
                  K.isEnabled ||
                    (Gi(rt ? ot : r, "scroll", Ki),
                    i.indexOf("scroll") >= 0 &&
                      Gi(rt ? ot : r, "scroll", _t, s, R),
                    i.indexOf("wheel") >= 0 && Gi(r, "wheel", yt, s, R),
                    ((i.indexOf("touch") >= 0 && Li) ||
                      i.indexOf("pointer") >= 0) &&
                      (Gi(r, Ni[0], gt, s, R),
                      Gi(ot, Ni[2], Dt),
                      Gi(ot, Ni[3], Dt),
                      z && Gi(r, "click", lt, !1, !0),
                      $ && Gi(r, "click", Et),
                      I && Gi(ot, "gesturestart", mt),
                      L && Gi(ot, "gestureend", vt),
                      T && Gi(r, Oi + "enter", bt),
                      k && Gi(r, Oi + "leave", wt),
                      A && Gi(r, Oi + "move", Ct)),
                    (K.isEnabled = !0),
                    t && t.type && gt(t),
                    B && B(K)),
                  K
                );
              }),
              (K.disable = function () {
                K.isEnabled &&
                  (qi.filter(function (t) {
                    return t !== K && Wi(t.target);
                  }).length || Xi(rt ? ot : r, "scroll", Ki),
                  K.isPressed &&
                    (K._vx.reset(),
                    K._vy.reset(),
                    Xi(M ? r : ot, Ni[1], ft, !0)),
                  Xi(rt ? ot : r, "scroll", _t, R),
                  Xi(r, "wheel", yt, R),
                  Xi(r, Ni[0], gt, R),
                  Xi(ot, Ni[2], Dt),
                  Xi(ot, Ni[3], Dt),
                  Xi(r, "click", lt, !0),
                  Xi(r, "click", Et),
                  Xi(ot, "gesturestart", mt),
                  Xi(ot, "gestureend", vt),
                  Xi(r, Oi + "enter", bt),
                  Xi(r, Oi + "leave", wt),
                  Xi(r, Oi + "move", Ct),
                  (K.isEnabled = K.isPressed = K.isDragging = !1),
                  P && P(K));
              }),
              (K.kill = function () {
                K.disable();
                var t = qi.indexOf(K);
                t >= 0 && qi.splice(t, 1), $i === K && ($i = 0);
              }),
              qi.push(K),
              M && Wi(r) && ($i = K),
              K.enable(h);
          }),
          (e = t),
          (n = [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]) && Fi(e.prototype, n),
          t
        );
      })();
      (sr.version = "3.10.4"),
        (sr.create = function (t) {
          return new sr(t);
        }),
        (sr.register = ar),
        (sr.getAll = function () {
          return qi.slice();
        }),
        (sr.getById = function (t) {
          return qi.filter(function (e) {
            return e.vars.id === t;
          })[0];
        }),
        Ri() && Ti.registerPlugin(sr);
      var ur,
        lr,
        cr,
        dr,
        hr,
        pr,
        fr,
        gr,
        Dr,
        mr,
        vr,
        _r,
        yr,
        Cr,
        br,
        wr,
        Er,
        xr,
        Fr,
        Tr,
        kr,
        Ar,
        Sr,
        Mr,
        Ir,
        Lr,
        Or,
        Br,
        Pr,
        $r,
        Nr,
        Rr,
        zr,
        qr = 1,
        jr = Date.now,
        Ur = jr(),
        Hr = 0,
        Yr = 0,
        Vr = function () {
          return (Cr = 1);
        },
        Wr = function () {
          return (Cr = 0);
        },
        Gr = function (t) {
          return t;
        },
        Xr = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        Kr = function () {
          return "undefined" != typeof window;
        },
        Jr = function () {
          return ur || (Kr() && (ur = window.gsap) && ur.registerPlugin && ur);
        },
        Qr = function (t) {
          return !!~fr.indexOf(t);
        },
        Zr = function (t) {
          return (
            Vi(t, "getBoundingClientRect") ||
            (Qr(t)
              ? function () {
                  return (
                    (la.width = cr.innerWidth), (la.height = cr.innerHeight), la
                  );
                }
              : function () {
                  return bo(t);
                })
          );
        },
        to = function (t, e) {
          var n = e.s,
            i = e.d2,
            r = e.d,
            o = e.a;
          return (n = "scroll" + i) && (o = Vi(t, n))
            ? o() - Zr(t)()[r]
            : Qr(t)
            ? (hr[n] || pr[n]) -
              (cr["inner" + i] || hr["client" + i] || pr["client" + i])
            : t[n] - t["offset" + i];
        },
        eo = function (t, e) {
          for (var n = 0; n < Fr.length; n += 3)
            (!e || ~e.indexOf(Fr[n + 1])) && t(Fr[n], Fr[n + 1], Fr[n + 2]);
        },
        no = function (t) {
          return "string" == typeof t;
        },
        io = function (t) {
          return "function" == typeof t;
        },
        ro = function (t) {
          return "number" == typeof t;
        },
        oo = function (t) {
          return "object" == typeof t;
        },
        ao = function (t) {
          return io(t) && t();
        },
        so = function (t, e) {
          return function () {
            var n = ao(t),
              i = ao(e);
            return function () {
              ao(n), ao(i);
            };
          };
        },
        uo = function (t, e, n) {
          return t && t.progress(e ? 0 : 1) && n && t.pause();
        },
        lo = function (t, e) {
          if (t.enabled) {
            var n = e(t);
            n && n.totalTime && (t.callbackAnimation = n);
          }
        },
        co = Math.abs,
        ho = "right",
        po = "bottom",
        fo = "width",
        go = "height",
        Do = "padding",
        mo = "margin",
        vo = "Width",
        _o = "px",
        yo = function (t) {
          return cr.getComputedStyle(t);
        },
        Co = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        bo = function (t, e) {
          var n =
              e &&
              "matrix(1, 0, 0, 1, 0, 0)" !== yo(t)[br] &&
              ur
                .to(t, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                })
                .progress(1),
            i = t.getBoundingClientRect();
          return n && n.progress(0).kill(), i;
        },
        wo = function (t, e) {
          var n = e.d2;
          return t["offset" + n] || t["client" + n] || 0;
        },
        Eo = function (t) {
          var e,
            n = [],
            i = t.labels,
            r = t.duration();
          for (e in i) n.push(i[e] / r);
          return n;
        },
        xo = function (t) {
          var e = ur.utils.snap(t),
            n =
              Array.isArray(t) &&
              t.slice(0).sort(function (t, e) {
                return t - e;
              });
          return n
            ? function (t, i, r) {
                var o;
                if ((void 0 === r && (r = 0.001), !i)) return e(t);
                if (i > 0) {
                  for (t -= r, o = 0; o < n.length; o++)
                    if (n[o] >= t) return n[o];
                  return n[o - 1];
                }
                for (o = n.length, t += r; o--; ) if (n[o] <= t) return n[o];
                return n[0];
              }
            : function (n, i, r) {
                void 0 === r && (r = 0.001);
                var o = e(n);
                return !i || Math.abs(o - n) < r || o - n < 0 == i < 0
                  ? o
                  : e(i < 0 ? n - t : n + t);
              };
        },
        Fo = function (t, e, n, i) {
          return n.split(",").forEach(function (n) {
            return t(e, n, i);
          });
        },
        To = function (t, e, n, i, r) {
          return t.addEventListener(e, n, { passive: !i, capture: !!r });
        },
        ko = function (t, e, n, i) {
          return t.removeEventListener(e, n, !!i);
        },
        Ao = function (t, e, n) {
          return n && n.wheelHandler && t(e, "wheel", n);
        },
        So = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        Mo = { toggleActions: "play", anticipatePin: 0 },
        Io = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        Lo = function (t, e) {
          if (no(t)) {
            var n = t.indexOf("="),
              i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
            ~n &&
              (t.indexOf("%") > n && (i *= e / 100), (t = t.substr(0, n - 1))),
              (t =
                i +
                (t in Io
                  ? Io[t] * e
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0));
          }
          return t;
        },
        Oo = function (t, e, n, i, r, o, a, s) {
          var u = r.startColor,
            l = r.endColor,
            c = r.fontSize,
            d = r.indent,
            h = r.fontWeight,
            p = dr.createElement("div"),
            f = Qr(n) || "fixed" === Vi(n, "pinType"),
            g = -1 !== t.indexOf("scroller"),
            D = f ? pr : n,
            m = -1 !== t.indexOf("start"),
            v = m ? u : l,
            _ =
              "border-color:" +
              v +
              ";font-size:" +
              c +
              ";color:" +
              v +
              ";font-weight:" +
              h +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (_ += "position:" + ((g || s) && f ? "fixed;" : "absolute;")),
            (g || s || !f) &&
              (_ += (i === Zi ? ho : po) + ":" + (o + parseFloat(d)) + "px;"),
            a &&
              (_ +=
                "box-sizing:border-box;text-align:left;width:" +
                a.offsetWidth +
                "px;"),
            (p._isStart = m),
            p.setAttribute(
              "class",
              "gsap-marker-" + t + (e ? " marker-" + e : "")
            ),
            (p.style.cssText = _),
            (p.innerText = e || 0 === e ? t + "-" + e : t),
            D.children[0] ? D.insertBefore(p, D.children[0]) : D.appendChild(p),
            (p._offset = p["offset" + i.op.d2]),
            Bo(p, 0, i, m),
            p
          );
        },
        Bo = function (t, e, n, i) {
          var r = { display: "block" },
            o = n[i ? "os2" : "p2"],
            a = n[i ? "p2" : "os2"];
          (t._isFlipped = i),
            (r[n.a + "Percent"] = i ? -100 : 0),
            (r[n.a] = i ? "1px" : 0),
            (r["border" + o + vo] = 1),
            (r["border" + a + vo] = 0),
            (r[n.p] = e + "px"),
            ur.set(t, r);
        },
        Po = [],
        $o = {},
        No = function () {
          return jr() - Hr > 34 && na();
        },
        Ro = function () {
          (!Sr || !Sr.isPressed || Sr.startX > pr.clientWidth) &&
            (ji.cache++,
            Pr || (Pr = requestAnimationFrame(na)),
            Hr || Wo("scrollStart"),
            (Hr = jr()));
        },
        zo = function () {
          (Lr = cr.innerWidth), (Ir = cr.innerHeight);
        },
        qo = function () {
          ji.cache++,
            !yr &&
              !Ar &&
              !dr.fullscreenElement &&
              !dr.webkitFullscreenElement &&
              (!Mr ||
                Lr !== cr.innerWidth ||
                Math.abs(cr.innerHeight - Ir) > 0.25 * cr.innerHeight) &&
              gr.restart(!0);
        },
        jo = {},
        Uo = [],
        Ho = [],
        Yo = function (t) {
          var e,
            n = ur.ticker.frame,
            i = [],
            r = 0;
          if (Nr !== n || qr) {
            for (Ko(); r < Ho.length; r += 4)
              (e = cr.matchMedia(Ho[r]).matches) !== Ho[r + 3] &&
                ((Ho[r + 3] = e),
                e ? i.push(r) : Ko(1, Ho[r]) || (io(Ho[r + 2]) && Ho[r + 2]()));
            for (Xo(), r = 0; r < i.length; r++)
              (e = i[r]), ($r = Ho[e]), (Ho[e + 2] = Ho[e + 1](t));
            ($r = 0), lr && Zo(0, 1), (Nr = n), Wo("matchMedia");
          }
        },
        Vo = function t() {
          return ko(fa, "scrollEnd", t) || Zo(!0);
        },
        Wo = function (t) {
          return (
            (jo[t] &&
              jo[t].map(function (t) {
                return t();
              })) ||
            Uo
          );
        },
        Go = [],
        Xo = function (t) {
          for (var e = 0; e < Go.length; e += 5)
            (t && Go[e + 4] !== t) ||
              ((Go[e].style.cssText = Go[e + 1]),
              Go[e].getBBox && Go[e].setAttribute("transform", Go[e + 2] || ""),
              (Go[e + 3].uncache = 1));
        },
        Ko = function (t, e) {
          var n;
          for (wr = 0; wr < Po.length; wr++)
            (n = Po[wr]), (e && n.media !== e) || (t ? n.kill(1) : n.revert());
          e && Xo(e), e || Wo("revert");
        },
        Jo = function () {
          return (
            ji.cache++ &&
            ji.forEach(function (t) {
              return "function" == typeof t && (t.rec = 0);
            })
          );
        },
        Qo = 0,
        Zo = function (t, e) {
          if (!Hr || t) {
            Rr = !0;
            var n = Wo("refreshInit");
            Tr && fa.sort(),
              e || Ko(),
              Po.slice(0).forEach(function (t) {
                return t.refresh();
              }),
              Po.forEach(function (t) {
                return (
                  "max" === t.vars.end &&
                  t.setPositions(t.start, to(t.scroller, t._dir))
                );
              }),
              n.forEach(function (t) {
                return t && t.render && t.render(-1);
              }),
              Jo(),
              gr.pause(),
              Qo++,
              (Rr = !1),
              Wo("refresh");
          } else To(fa, "scrollEnd", Vo);
        },
        ta = 0,
        ea = 1,
        na = function () {
          if (!Rr) {
            (fa.isUpdating = !0), zr && zr.update(0);
            var t = Po.length,
              e = jr(),
              n = e - Ur >= 50,
              i = t && Po[0].scroll();
            if (
              ((ea = ta > i ? -1 : 1),
              (ta = i),
              n &&
                (Hr && !Cr && e - Hr > 200 && ((Hr = 0), Wo("scrollEnd")),
                (vr = Ur),
                (Ur = e)),
              ea < 0)
            ) {
              for (wr = t; wr-- > 0; ) Po[wr] && Po[wr].update(0, n);
              ea = 1;
            } else for (wr = 0; wr < t; wr++) Po[wr] && Po[wr].update(0, n);
            fa.isUpdating = !1;
          }
          Pr = 0;
        },
        ia = [
          "left",
          "top",
          po,
          ho,
          "marginBottom",
          "marginRight",
          "marginTop",
          "marginLeft",
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        ra = ia.concat([
          fo,
          go,
          "boxSizing",
          "maxWidth",
          "maxHeight",
          "position",
          mo,
          Do,
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ]),
        oa = function (t, e, n, i) {
          if (t.parentNode !== e) {
            for (var r, o = ia.length, a = e.style, s = t.style; o--; )
              a[(r = ia[o])] = n[r];
            (a.position = "absolute" === n.position ? "absolute" : "relative"),
              "inline" === n.display && (a.display = "inline-block"),
              (s.bottom = s.right = a.flexBasis = "auto"),
              (a.overflow = "visible"),
              (a.boxSizing = "border-box"),
              (a.width = wo(t, Qi) + _o),
              (a.height = wo(t, Zi) + _o),
              (a.padding = s.margin = s.top = s.left = "0"),
              sa(i),
              (s.width = s.maxWidth = n.width),
              (s.height = s.maxHeight = n.height),
              (s.padding = n.padding),
              t.parentNode.insertBefore(e, t),
              e.appendChild(t);
          }
        },
        aa = /([A-Z])/g,
        sa = function (t) {
          if (t) {
            var e,
              n,
              i = t.t.style,
              r = t.length,
              o = 0;
            for (
              (t.t._gsap || ur.core.getCache(t.t)).uncache = 1;
              o < r;
              o += 2
            )
              (n = t[o + 1]),
                (e = t[o]),
                n
                  ? (i[e] = n)
                  : i[e] &&
                    i.removeProperty(e.replace(aa, "-$1").toLowerCase());
          }
        },
        ua = function (t) {
          for (var e = ra.length, n = t.style, i = [], r = 0; r < e; r++)
            i.push(ra[r], n[ra[r]]);
          return (i.t = t), i;
        },
        la = { left: 0, top: 0 },
        ca = function (t, e, n, i, r, o, a, s, u, l, c, d, h) {
          io(t) && (t = t(s)),
            no(t) &&
              "max" === t.substr(0, 3) &&
              (t = d + ("=" === t.charAt(4) ? Lo("0" + t.substr(3), n) : 0));
          var p,
            f,
            g,
            D = h ? h.time() : 0;
          if ((h && h.seek(0), ro(t))) a && Bo(a, n, i, !0);
          else {
            io(e) && (e = e(s));
            var m,
              v,
              _,
              y,
              C = t.split(" ");
            (g = tr(e) || pr),
              ((m = bo(g) || {}) && (m.left || m.top)) ||
                "none" !== yo(g).display ||
                ((y = g.style.display),
                (g.style.display = "block"),
                (m = bo(g)),
                y ? (g.style.display = y) : g.style.removeProperty("display")),
              (v = Lo(C[0], m[i.d])),
              (_ = Lo(C[1] || "0", n)),
              (t = m[i.p] - u[i.p] - l + v + r - _),
              a && Bo(a, _, i, n - _ < 20 || (a._isStart && _ > 20)),
              (n -= n - _);
          }
          if (o) {
            var b = t + n,
              w = o._isStart;
            (p = "scroll" + i.d2),
              Bo(
                o,
                b,
                i,
                (w && b > 20) ||
                  (!w &&
                    (c ? Math.max(pr[p], hr[p]) : o.parentNode[p]) <= b + 1)
              ),
              c &&
                ((u = bo(a)),
                c && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + _o));
          }
          return (
            h &&
              g &&
              ((p = bo(g)),
              h.seek(d),
              (f = bo(g)),
              (h._caScrollDist = p[i.p] - f[i.p]),
              (t = (t / h._caScrollDist) * d)),
            h && h.seek(D),
            h ? t : Math.round(t)
          );
        },
        da = /(webkit|moz|length|cssText|inset)/i,
        ha = function (t, e, n, i) {
          if (t.parentNode !== e) {
            var r,
              o,
              a = t.style;
            if (e === pr) {
              for (r in ((t._stOrig = a.cssText), (o = yo(t))))
                +r ||
                  da.test(r) ||
                  !o[r] ||
                  "string" != typeof a[r] ||
                  "0" === r ||
                  (a[r] = o[r]);
              (a.top = n), (a.left = i);
            } else a.cssText = t._stOrig;
            (ur.core.getCache(t).uncache = 1), e.appendChild(t);
          }
        },
        pa = function (t, e) {
          var n,
            i,
            r = er(t, e),
            o = "_scroll" + e.p2,
            a = function e(a, s, u, l, c) {
              var d = e.tween,
                h = s.onComplete,
                p = {};
              return (
                (u = u || r()),
                (c = (l && c) || 0),
                (l = l || a - u),
                d && d.kill(),
                (n = Math.round(u)),
                (s[o] = a),
                (s.modifiers = p),
                (p[o] = function (t) {
                  return (
                    (t = Xr(r())) !== n &&
                    t !== i &&
                    Math.abs(t - n) > 2 &&
                    Math.abs(t - i) > 2
                      ? (d.kill(), (e.tween = 0))
                      : (t = u + l * d.ratio + c * d.ratio * d.ratio),
                    (i = n),
                    (n = Xr(t))
                  );
                }),
                (s.onComplete = function () {
                  (e.tween = 0), h && h.call(d);
                }),
                (d = e.tween = ur.to(t, s))
              );
            };
          return (
            (t[o] = r),
            (r.wheelHandler = function () {
              return a.tween && a.tween.kill() && (a.tween = 0);
            }),
            To(t, "wheel", r.wheelHandler),
            a
          );
        },
        fa = (function () {
          function t(e, n) {
            lr ||
              t.register(ur) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              this.init(e, n);
          }
          return (
            (t.prototype.init = function (e, n) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                Yr)
              ) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  d,
                  h,
                  p,
                  f,
                  g,
                  D,
                  m,
                  v,
                  _,
                  y,
                  C,
                  b,
                  w,
                  E,
                  x,
                  F,
                  T,
                  k,
                  A,
                  S,
                  M,
                  I,
                  L,
                  O,
                  B,
                  P,
                  $,
                  N,
                  R,
                  z,
                  q,
                  j,
                  U,
                  H = (e = Co(
                    no(e) || ro(e) || e.nodeType ? { trigger: e } : e,
                    Mo
                  )),
                  Y = H.onUpdate,
                  V = H.toggleClass,
                  W = H.id,
                  G = H.onToggle,
                  X = H.onRefresh,
                  K = H.scrub,
                  J = H.trigger,
                  Q = H.pin,
                  Z = H.pinSpacing,
                  tt = H.invalidateOnRefresh,
                  et = H.anticipatePin,
                  nt = H.onScrubComplete,
                  it = H.onSnapComplete,
                  rt = H.once,
                  ot = H.snap,
                  at = H.pinReparent,
                  st = H.pinSpacer,
                  ut = H.containerAnimation,
                  lt = H.fastScrollEnd,
                  ct = H.preventOverlaps,
                  dt =
                    e.horizontal ||
                    (e.containerAnimation && !1 !== e.horizontal)
                      ? Qi
                      : Zi,
                  ht = !K && 0 !== K,
                  pt = tr(e.scroller || cr),
                  ft = ur.core.getCache(pt),
                  gt = Qr(pt),
                  Dt =
                    "fixed" ===
                    ("pinType" in e
                      ? e.pinType
                      : Vi(pt, "pinType") || (gt && "fixed")),
                  mt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                  vt = ht && e.toggleActions.split(" "),
                  _t = "markers" in e ? e.markers : Mo.markers,
                  yt = gt ? 0 : parseFloat(yo(pt)["border" + dt.p2 + vo]) || 0,
                  Ct = this,
                  bt =
                    e.onRefreshInit &&
                    function () {
                      return e.onRefreshInit(Ct);
                    },
                  wt = (function (t, e, n) {
                    var i = n.d,
                      r = n.d2,
                      o = n.a;
                    return (o = Vi(t, "getBoundingClientRect"))
                      ? function () {
                          return o()[i];
                        }
                      : function () {
                          return (e ? cr["inner" + r] : t["client" + r]) || 0;
                        };
                  })(pt, gt, dt),
                  Et = (function (t, e) {
                    return !e || ~Ui.indexOf(t)
                      ? Zr(t)
                      : function () {
                          return la;
                        };
                  })(pt, gt),
                  xt = 0,
                  Ft = 0,
                  Tt = er(pt, dt);
                if (
                  ((Ct.media = $r),
                  (Ct._dir = dt),
                  (et *= 45),
                  (Ct.scroller = pt),
                  (Ct.scroll = ut ? ut.time.bind(ut) : Tt),
                  (a = Tt()),
                  (Ct.vars = e),
                  (n = n || e.animation),
                  "refreshPriority" in e &&
                    ((Tr = 1), -9999 === e.refreshPriority && (zr = Ct)),
                  (ft.tweenScroll = ft.tweenScroll || {
                    top: pa(pt, Zi),
                    left: pa(pt, Qi),
                  }),
                  (Ct.tweenTo = i = ft.tweenScroll[dt.p]),
                  (Ct.scrubDuration = function (t) {
                    (L = ro(t) && t)
                      ? I
                        ? I.duration(t)
                        : (I = ur.to(n, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: L,
                            paused: !0,
                            onComplete: function () {
                              return nt && nt(Ct);
                            },
                          }))
                      : (I && I.progress(1).kill(), (I = 0));
                  }),
                  n &&
                    ((n.vars.lazy = !1),
                    n._initted ||
                      (!1 !== n.vars.immediateRender &&
                        !1 !== e.immediateRender &&
                        n.render(0, !0, !0)),
                    (Ct.animation = n.pause()),
                    (n.scrollTrigger = Ct),
                    Ct.scrubDuration(K),
                    (S = 0),
                    W || (W = n.vars.id)),
                  Po.push(Ct),
                  ot &&
                    ((oo(ot) && !ot.push) || (ot = { snapTo: ot }),
                    "scrollBehavior" in pr.style &&
                      ur.set(gt ? [pr, hr] : pt, { scrollBehavior: "auto" }),
                    (o = io(ot.snapTo)
                      ? ot.snapTo
                      : "labels" === ot.snapTo
                      ? (function (t) {
                          return function (e) {
                            return ur.utils.snap(Eo(t), e);
                          };
                        })(n)
                      : "labelsDirectional" === ot.snapTo
                      ? ((q = n),
                        function (t, e) {
                          return xo(Eo(q))(t, e.direction);
                        })
                      : !1 !== ot.directional
                      ? function (t, e) {
                          return xo(ot.snapTo)(
                            t,
                            jr() - Ft < 500 ? 0 : e.direction
                          );
                        }
                      : ur.utils.snap(ot.snapTo)),
                    (O = ot.duration || { min: 0.1, max: 2 }),
                    (O = oo(O) ? mr(O.min, O.max) : mr(O, O)),
                    (B = ur
                      .delayedCall(ot.delay || L / 2 || 0.1, function () {
                        var t = Tt(),
                          e = jr() - Ft < 500,
                          r = i.tween;
                        if (
                          !(e || Math.abs(Ct.getVelocity()) < 10) ||
                          r ||
                          Cr ||
                          xt === t
                        )
                          Ct.isActive && xt !== t && B.restart(!0);
                        else {
                          var a = (t - u) / g,
                            s = n && !ht ? n.totalProgress() : a,
                            c = e ? 0 : ((s - M) / (jr() - vr)) * 1e3 || 0,
                            d = ur.utils.clamp(
                              -a,
                              1 - a,
                              (co(c / 2) * c) / 0.185
                            ),
                            h = a + (!1 === ot.inertia ? 0 : d),
                            p = mr(0, 1, o(h, Ct)),
                            f = Math.round(u + p * g),
                            D = ot,
                            m = D.onStart,
                            v = D.onInterrupt,
                            _ = D.onComplete;
                          if (t <= l && t >= u && f !== t) {
                            if (r && !r._initted && r.data <= co(f - t)) return;
                            !1 === ot.inertia && (d = p - a),
                              i(
                                f,
                                {
                                  duration: O(
                                    co(
                                      (0.185 * Math.max(co(h - s), co(p - s))) /
                                        c /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: ot.ease || "power3",
                                  data: co(f - t),
                                  onInterrupt: function () {
                                    return B.restart(!0) && v && v(Ct);
                                  },
                                  onComplete: function () {
                                    Ct.update(),
                                      (xt = Tt()),
                                      (S = M =
                                        n && !ht
                                          ? n.totalProgress()
                                          : Ct.progress),
                                      it && it(Ct),
                                      _ && _(Ct);
                                  },
                                },
                                t,
                                d * g,
                                f - t - d * g
                              ),
                              m && m(Ct, i.tween);
                          }
                        }
                      })
                      .pause())),
                  W && ($o[W] = Ct),
                  (z =
                    (J = Ct.trigger = tr(J || Q)) &&
                    J._gsap &&
                    J._gsap.stRevert) && (z = z(Ct)),
                  (Q = !0 === Q ? J : tr(Q)),
                  no(V) && (V = { targets: J, className: V }),
                  Q &&
                    (!1 === Z ||
                      Z === mo ||
                      (Z = !(!Z && "flex" === yo(Q.parentNode).display) && Do),
                    (Ct.pin = Q),
                    !1 !== e.force3D && ur.set(Q, { force3D: !0 }),
                    (r = ur.core.getCache(Q)).spacer
                      ? (D = r.pinState)
                      : (st &&
                          ((st = tr(st)) &&
                            !st.nodeType &&
                            (st = st.current || st.nativeElement),
                          (r.spacerIsNative = !!st),
                          st && (r.spacerState = ua(st))),
                        (r.spacer = _ = st || dr.createElement("div")),
                        _.classList.add("pin-spacer"),
                        W && _.classList.add("pin-spacer-" + W),
                        (r.pinState = D = ua(Q))),
                    (Ct.spacer = _ = r.spacer),
                    (A = yo(Q)),
                    (x = A[Z + dt.os2]),
                    (C = ur.getProperty(Q)),
                    (b = ur.quickSetter(Q, dt.a, _o)),
                    oa(Q, _, A),
                    (v = ua(Q))),
                  _t)
                ) {
                  (f = oo(_t) ? Co(_t, So) : So),
                    (h = Oo("scroller-start", W, pt, dt, f, 0)),
                    (p = Oo("scroller-end", W, pt, dt, f, 0, h)),
                    (y = h["offset" + dt.op.d2]);
                  var kt = tr(Vi(pt, "content") || pt);
                  (c = this.markerStart = Oo("start", W, kt, dt, f, y, 0, ut)),
                    (d = this.markerEnd = Oo("end", W, kt, dt, f, y, 0, ut)),
                    ut && (R = ur.quickSetter([c, d], dt.a, _o)),
                    Dt ||
                      (Ui.length && !0 === Vi(pt, "fixedMarkers")) ||
                      ((U = yo((j = gt ? pr : pt)).position),
                      (j.style.position =
                        "absolute" === U || "fixed" === U ? U : "relative"),
                      ur.set([h, p], { force3D: !0 }),
                      (T = ur.quickSetter(h, dt.a, _o)),
                      (k = ur.quickSetter(p, dt.a, _o)));
                }
                if (ut) {
                  var At = ut.vars.onUpdate,
                    St = ut.vars.onUpdateParams;
                  ut.eventCallback("onUpdate", function () {
                    Ct.update(0, 0, 1), At && At.apply(St || []);
                  });
                }
                (Ct.previous = function () {
                  return Po[Po.indexOf(Ct) - 1];
                }),
                  (Ct.next = function () {
                    return Po[Po.indexOf(Ct) + 1];
                  }),
                  (Ct.revert = function (t) {
                    var e = !1 !== t || !Ct.enabled,
                      i = yr;
                    e !== Ct.isReverted &&
                      (e &&
                        (Ct.scroll.rec || !yr || !Rr || (Ct.scroll.rec = Tt()),
                        ($ = Math.max(Tt(), Ct.scroll.rec || 0)),
                        (P = Ct.progress),
                        (N = n && n.progress())),
                      c &&
                        [c, d, h, p].forEach(function (t) {
                          return (t.style.display = e ? "none" : "block");
                        }),
                      e && (yr = 1),
                      Ct.update(e),
                      (yr = i),
                      Q &&
                        (e
                          ? (function (t, e, n) {
                              sa(n);
                              var i = t._gsap;
                              if (i.spacerIsNative) sa(i.spacerState);
                              else if (t.parentNode === e) {
                                var r = e.parentNode;
                                r && (r.insertBefore(t, e), r.removeChild(e));
                              }
                            })(Q, _, D)
                          : (!at || !Ct.isActive) && oa(Q, _, yo(Q), F)),
                      (Ct.isReverted = e));
                  }),
                  (Ct.refresh = function (r, o) {
                    if ((!yr && Ct.enabled) || o)
                      if (Q && r && Hr) To(t, "scrollEnd", Vo);
                      else {
                        !Rr && bt && bt(Ct),
                          (yr = 1),
                          (Ft = jr()),
                          i.tween && (i.tween.kill(), (i.tween = 0)),
                          I && I.pause(),
                          tt && n && n.time(-0.01, !0).invalidate(),
                          Ct.isReverted || Ct.revert();
                        for (
                          var f,
                            y,
                            b,
                            x,
                            T,
                            k,
                            A,
                            S,
                            M,
                            L,
                            O = wt(),
                            R = Et(),
                            z = ut ? ut.duration() : to(pt, dt),
                            q = 0,
                            j = 0,
                            U = e.end,
                            H = e.endTrigger || J,
                            Y =
                              e.start ||
                              (0 !== e.start && J ? (Q ? "0 0" : "0 100%") : 0),
                            V = (Ct.pinnedContainer =
                              e.pinnedContainer && tr(e.pinnedContainer)),
                            W = (J && Math.max(0, Po.indexOf(Ct))) || 0,
                            G = W;
                          G--;

                        )
                          (k = Po[G]).end || k.refresh(0, 1) || (yr = 1),
                            !(A = k.pin) ||
                              (A !== J && A !== Q) ||
                              k.isReverted ||
                              (L || (L = []), L.unshift(k), k.revert()),
                            k !== Po[G] && (W--, G--);
                        for (
                          io(Y) && (Y = Y(Ct)),
                            u =
                              ca(
                                Y,
                                J,
                                O,
                                dt,
                                Tt(),
                                c,
                                h,
                                Ct,
                                R,
                                yt,
                                Dt,
                                z,
                                ut
                              ) || (Q ? -0.001 : 0),
                            io(U) && (U = U(Ct)),
                            no(U) &&
                              !U.indexOf("+=") &&
                              (~U.indexOf(" ")
                                ? (U = (no(Y) ? Y.split(" ")[0] : "") + U)
                                : ((q = Lo(U.substr(2), O)),
                                  (U = no(Y) ? Y : u + q),
                                  (H = J))),
                            l =
                              Math.max(
                                u,
                                ca(
                                  U || (H ? "100% 0" : z),
                                  H,
                                  O,
                                  dt,
                                  Tt() + q,
                                  d,
                                  p,
                                  Ct,
                                  R,
                                  yt,
                                  Dt,
                                  z,
                                  ut
                                )
                              ) || -0.001,
                            g = l - u || ((u -= 0.01) && 0.001),
                            q = 0,
                            G = W;
                          G--;

                        )
                          (A = (k = Po[G]).pin) &&
                            k.start - k._pinPush < u &&
                            !ut &&
                            k.end > 0 &&
                            ((f = k.end - k.start),
                            (A !== J && A !== V) ||
                              ro(Y) ||
                              (q += f * (1 - k.progress)),
                            A === Q && (j += f));
                        if (
                          ((u += q),
                          (l += q),
                          (Ct._pinPush = j),
                          c &&
                            q &&
                            (((f = {})[dt.a] = "+=" + q),
                            V && (f[dt.p] = "-=" + Tt()),
                            ur.set([c, d], f)),
                          Q)
                        )
                          (f = yo(Q)),
                            (x = dt === Zi),
                            (b = Tt()),
                            (w = parseFloat(C(dt.a)) + j),
                            !z &&
                              l > 1 &&
                              ((gt ? pr : pt).style["overflow-" + dt.a] =
                                "scroll"),
                            oa(Q, _, f),
                            (v = ua(Q)),
                            (y = bo(Q, !0)),
                            (S = Dt && er(pt, x ? Qi : Zi)()),
                            Z &&
                              (((F = [Z + dt.os2, g + j + _o]).t = _),
                              (G = Z === Do ? wo(Q, dt) + g + j : 0) &&
                                F.push(dt.d, G + _o),
                              sa(F),
                              Dt && Tt($)),
                            Dt &&
                              (((T = {
                                top: y.top + (x ? b - u : S) + _o,
                                left: y.left + (x ? S : b - u) + _o,
                                boxSizing: "border-box",
                                position: "fixed",
                              }).width = T.maxWidth =
                                Math.ceil(y.width) + _o),
                              (T.height = T.maxHeight =
                                Math.ceil(y.height) + _o),
                              (T.margin =
                                T.marginTop =
                                T.marginRight =
                                T.marginBottom =
                                T.marginLeft =
                                  "0"),
                              (T.padding = f.padding),
                              (T.paddingTop = f.paddingTop),
                              (T.paddingRight = f.paddingRight),
                              (T.paddingBottom = f.paddingBottom),
                              (T.paddingLeft = f.paddingLeft),
                              (m = (function (t, e, n) {
                                for (
                                  var i, r = [], o = t.length, a = n ? 8 : 0;
                                  a < o;
                                  a += 2
                                )
                                  (i = t[a]),
                                    r.push(i, i in e ? e[i] : t[a + 1]);
                                return (r.t = t.t), r;
                              })(D, T, at))),
                            n
                              ? ((M = n._initted),
                                kr(1),
                                n.render(n.duration(), !0, !0),
                                (E = C(dt.a) - w + g + j),
                                g !== E && Dt && m.splice(m.length - 2, 2),
                                n.render(0, !0, !0),
                                M || n.invalidate(),
                                kr(0))
                              : (E = g);
                        else if (J && Tt() && !ut)
                          for (y = J.parentNode; y && y !== pr; )
                            y._pinOffset &&
                              ((u -= y._pinOffset), (l -= y._pinOffset)),
                              (y = y.parentNode);
                        L &&
                          L.forEach(function (t) {
                            return t.revert(!1);
                          }),
                          (Ct.start = u),
                          (Ct.end = l),
                          (a = s = Tt()),
                          ut || (a < $ && Tt($), (Ct.scroll.rec = 0)),
                          Ct.revert(!1),
                          B &&
                            ((xt = -1),
                            Ct.isActive && Tt(u + g * P),
                            B.restart(!0)),
                          (yr = 0),
                          n &&
                            ht &&
                            (n._initted || N) &&
                            n.progress() !== N &&
                            n.progress(N, !0).render(n.time(), !0, !0),
                          (P !== Ct.progress || ut) &&
                            (n && !ht && n.totalProgress(P, !0),
                            (Ct.progress = P),
                            Ct.update(0, 0, 1)),
                          Q &&
                            Z &&
                            (_._pinOffset = Math.round(Ct.progress * E)),
                          X && X(Ct);
                      }
                  }),
                  (Ct.getVelocity = function () {
                    return ((Tt() - s) / (jr() - vr)) * 1e3 || 0;
                  }),
                  (Ct.endAnimation = function () {
                    uo(Ct.callbackAnimation),
                      n &&
                        (I
                          ? I.progress(1)
                          : n.paused()
                          ? ht || uo(n, Ct.direction < 0, 1)
                          : uo(n, n.reversed()));
                  }),
                  (Ct.labelToScroll = function (t) {
                    return (
                      (n &&
                        n.labels &&
                        (u || Ct.refresh() || u) +
                          (n.labels[t] / n.duration()) * g) ||
                      0
                    );
                  }),
                  (Ct.getTrailing = function (t) {
                    var e = Po.indexOf(Ct),
                      n =
                        Ct.direction > 0
                          ? Po.slice(0, e).reverse()
                          : Po.slice(e + 1);
                    return (
                      no(t)
                        ? n.filter(function (e) {
                            return e.vars.preventOverlaps === t;
                          })
                        : n
                    ).filter(function (t) {
                      return Ct.direction > 0 ? t.end <= u : t.start >= l;
                    });
                  }),
                  (Ct.update = function (t, e, r) {
                    if (!ut || r || t) {
                      var o,
                        c,
                        d,
                        p,
                        f,
                        D,
                        y,
                        C = Ct.scroll(),
                        F = t ? 0 : (C - u) / g,
                        A = F < 0 ? 0 : F > 1 ? 1 : F || 0,
                        L = Ct.progress;
                      if (
                        (e &&
                          ((s = a),
                          (a = ut ? Tt() : C),
                          ot &&
                            ((M = S), (S = n && !ht ? n.totalProgress() : A))),
                        et &&
                          !A &&
                          Q &&
                          !yr &&
                          !qr &&
                          Hr &&
                          u < C + ((C - s) / (jr() - vr)) * et &&
                          (A = 1e-4),
                        A !== L && Ct.enabled)
                      ) {
                        if (
                          ((p =
                            (f =
                              (o = Ct.isActive = !!A && A < 1) !=
                              (!!L && L < 1)) || !!A != !!L),
                          (Ct.direction = A > L ? 1 : -1),
                          (Ct.progress = A),
                          p &&
                            !yr &&
                            ((c = A && !L ? 0 : 1 === A ? 1 : 1 === L ? 2 : 3),
                            ht &&
                              ((d =
                                (!f && "none" !== vt[c + 1] && vt[c + 1]) ||
                                vt[c]),
                              (y =
                                n &&
                                ("complete" === d ||
                                  "reset" === d ||
                                  d in n)))),
                          ct &&
                            (f || y) &&
                            (y || K || !n) &&
                            (io(ct)
                              ? ct(Ct)
                              : Ct.getTrailing(ct).forEach(function (t) {
                                  return t.endAnimation();
                                })),
                          ht ||
                            (!I || yr || qr
                              ? n && n.totalProgress(A, !!yr)
                              : ((ut || (zr && zr !== Ct)) &&
                                  I.render(I._dp._time - I._start),
                                I.resetTo
                                  ? I.resetTo(
                                      "totalProgress",
                                      A,
                                      n._tTime / n._tDur
                                    )
                                  : ((I.vars.totalProgress = A),
                                    I.invalidate().restart()))),
                          Q)
                        )
                          if ((t && Z && (_.style[Z + dt.os2] = x), Dt)) {
                            if (p) {
                              if (
                                ((D =
                                  !t &&
                                  A > L &&
                                  l + 1 > C &&
                                  C + 1 >= to(pt, dt)),
                                at)
                              )
                                if (t || (!o && !D)) ha(Q, _);
                                else {
                                  var O = bo(Q, !0),
                                    P = C - u;
                                  ha(
                                    Q,
                                    pr,
                                    O.top + (dt === Zi ? P : 0) + _o,
                                    O.left + (dt === Zi ? 0 : P) + _o
                                  );
                                }
                              sa(o || D ? m : v),
                                (E !== g && A < 1 && o) ||
                                  b(w + (1 !== A || D ? 0 : E));
                            }
                          } else b(Xr(w + E * A));
                        ot && !i.tween && !yr && !qr && B.restart(!0),
                          V &&
                            (f || (rt && A && (A < 1 || !Br))) &&
                            Dr(V.targets).forEach(function (t) {
                              return t.classList[o || rt ? "add" : "remove"](
                                V.className
                              );
                            }),
                          Y && !ht && !t && Y(Ct),
                          p && !yr
                            ? (ht &&
                                (y &&
                                  ("complete" === d
                                    ? n.pause().totalProgress(1)
                                    : "reset" === d
                                    ? n.restart(!0).pause()
                                    : "restart" === d
                                    ? n.restart(!0)
                                    : n[d]()),
                                Y && Y(Ct)),
                              (!f && Br) ||
                                (G && f && lo(Ct, G),
                                mt[c] && lo(Ct, mt[c]),
                                rt && (1 === A ? Ct.kill(!1, 1) : (mt[c] = 0)),
                                f ||
                                  (mt[(c = 1 === A ? 1 : 3)] && lo(Ct, mt[c]))),
                              lt &&
                                !o &&
                                Math.abs(Ct.getVelocity()) >
                                  (ro(lt) ? lt : 2500) &&
                                (uo(Ct.callbackAnimation),
                                I ? I.progress(1) : uo(n, !A, 1)))
                            : ht && Y && !yr && Y(Ct);
                      }
                      if (k) {
                        var $ = ut
                          ? (C / ut.duration()) * (ut._caScrollDist || 0)
                          : C;
                        T($ + (h._isFlipped ? 1 : 0)), k($);
                      }
                      R && R((-C / ut.duration()) * (ut._caScrollDist || 0));
                    }
                  }),
                  (Ct.enable = function (e, n) {
                    Ct.enabled ||
                      ((Ct.enabled = !0),
                      To(pt, "resize", qo),
                      To(gt ? dr : pt, "scroll", Ro),
                      bt && To(t, "refreshInit", bt),
                      !1 !== e && ((Ct.progress = P = 0), (a = s = xt = Tt())),
                      !1 !== n && Ct.refresh());
                  }),
                  (Ct.getTween = function (t) {
                    return t && i ? i.tween : I;
                  }),
                  (Ct.setPositions = function (t, e) {
                    Q && ((w += t - u), (E += e - t - g)),
                      (Ct.start = u = t),
                      (Ct.end = l = e),
                      (g = e - t),
                      Ct.update();
                  }),
                  (Ct.disable = function (e, n) {
                    if (
                      Ct.enabled &&
                      (!1 !== e && Ct.revert(),
                      (Ct.enabled = Ct.isActive = !1),
                      n || (I && I.pause()),
                      ($ = 0),
                      r && (r.uncache = 1),
                      bt && ko(t, "refreshInit", bt),
                      B &&
                        (B.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                      !gt)
                    ) {
                      for (var o = Po.length; o--; )
                        if (Po[o].scroller === pt && Po[o] !== Ct) return;
                      ko(pt, "resize", qo), ko(pt, "scroll", Ro);
                    }
                  }),
                  (Ct.kill = function (t, i) {
                    Ct.disable(t, i), I && !i && I.kill(), W && delete $o[W];
                    var o = Po.indexOf(Ct);
                    o >= 0 && Po.splice(o, 1),
                      o === wr && ea > 0 && wr--,
                      (o = 0),
                      Po.forEach(function (t) {
                        return t.scroller === Ct.scroller && (o = 1);
                      }),
                      o || (Ct.scroll.rec = 0),
                      n &&
                        ((n.scrollTrigger = null),
                        t && n.render(-1),
                        i || n.kill()),
                      c &&
                        [c, d, h, p].forEach(function (t) {
                          return t.parentNode && t.parentNode.removeChild(t);
                        }),
                      zr === Ct && (zr = 0),
                      Q &&
                        (r && (r.uncache = 1),
                        (o = 0),
                        Po.forEach(function (t) {
                          return t.pin === Q && o++;
                        }),
                        o || (r.spacer = 0)),
                      e.onKill && e.onKill(Ct);
                  }),
                  Ct.enable(!1, !1),
                  z && z(Ct),
                  n && n.add && !g
                    ? ur.delayedCall(0.01, function () {
                        return u || l || Ct.refresh();
                      }) &&
                      (g = 0.01) &&
                      (u = l = 0)
                    : Ct.refresh();
              } else this.update = this.refresh = this.kill = Gr;
            }),
            (t.register = function (e) {
              return (
                lr ||
                  ((ur = e || Jr()),
                  Kr() && window.document && t.enable(),
                  (lr = Yr)),
                lr
              );
            }),
            (t.defaults = function (t) {
              if (t) for (var e in t) Mo[e] = t[e];
              return Mo;
            }),
            (t.disable = function (t, e) {
              (Yr = 0),
                Po.forEach(function (n) {
                  return n[e ? "kill" : "disable"](t);
                }),
                ko(cr, "wheel", Ro),
                ko(dr, "scroll", Ro),
                clearInterval(_r),
                ko(dr, "touchcancel", Gr),
                ko(pr, "touchstart", Gr),
                Fo(ko, dr, "pointerdown,touchstart,mousedown", Vr),
                Fo(ko, dr, "pointerup,touchend,mouseup", Wr),
                gr.kill(),
                eo(ko);
              for (var n = 0; n < ji.length; n += 3)
                Ao(ko, ji[n], ji[n + 1]), Ao(ko, ji[n], ji[n + 2]);
            }),
            (t.enable = function () {
              if (
                ((cr = window),
                (dr = document),
                (hr = dr.documentElement),
                (pr = dr.body),
                ur &&
                  ((Dr = ur.utils.toArray),
                  (mr = ur.utils.clamp),
                  (kr = ur.core.suppressOverwrites || Gr),
                  ur.core.globals("ScrollTrigger", t),
                  pr))
              ) {
                (Yr = 1),
                  sr.register(ur),
                  (t.isTouch = sr.isTouch),
                  (Or =
                    sr.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  To(cr, "wheel", Ro),
                  (fr = [cr, dr, hr, pr]),
                  t.matchMedia({
                    "(orientation: portrait)": function () {
                      return zo(), zo;
                    },
                  }),
                  To(dr, "scroll", Ro);
                var e,
                  n,
                  i = pr.style,
                  r = i.borderTopStyle;
                for (
                  i.borderTopStyle = "solid",
                    e = bo(pr),
                    Zi.m = Math.round(e.top + Zi.sc()) || 0,
                    Qi.m = Math.round(e.left + Qi.sc()) || 0,
                    r
                      ? (i.borderTopStyle = r)
                      : i.removeProperty("border-top-style"),
                    _r = setInterval(No, 250),
                    ur.delayedCall(0.5, function () {
                      return (qr = 0);
                    }),
                    To(dr, "touchcancel", Gr),
                    To(pr, "touchstart", Gr),
                    Fo(To, dr, "pointerdown,touchstart,mousedown", Vr),
                    Fo(To, dr, "pointerup,touchend,mouseup", Wr),
                    br = ur.utils.checkPrefix("transform"),
                    ra.push(br),
                    lr = jr(),
                    gr = ur.delayedCall(0.2, Zo).pause(),
                    Fr = [
                      dr,
                      "visibilitychange",
                      function () {
                        var t = cr.innerWidth,
                          e = cr.innerHeight;
                        dr.hidden
                          ? ((Er = t), (xr = e))
                          : (Er === t && xr === e) || qo();
                      },
                      dr,
                      "DOMContentLoaded",
                      Zo,
                      cr,
                      "load",
                      Zo,
                      cr,
                      "resize",
                      qo,
                    ],
                    eo(To),
                    Po.forEach(function (t) {
                      return t.enable(0, 1);
                    }),
                    n = 0;
                  n < ji.length;
                  n += 3
                )
                  Ao(ko, ji[n], ji[n + 1]), Ao(ko, ji[n], ji[n + 2]);
              }
            }),
            (t.config = function (e) {
              "limitCallbacks" in e && (Br = !!e.limitCallbacks);
              var n = e.syncInterval;
              (n && clearInterval(_r)) || ((_r = n) && setInterval(No, n)),
                "ignoreMobileResize" in e &&
                  (Mr = 1 === t.isTouch && e.ignoreMobileResize),
                "autoRefreshEvents" in e &&
                  (eo(ko) || eo(To, e.autoRefreshEvents || "none"),
                  (Ar = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
            }),
            (t.scrollerProxy = function (t, e) {
              var n = tr(t),
                i = ji.indexOf(n),
                r = Qr(n);
              ~i && ji.splice(i, r ? 6 : 2),
                e && (r ? Ui.unshift(cr, e, pr, e, hr, e) : Ui.unshift(n, e));
            }),
            (t.matchMedia = function (t) {
              var e, n, i, r, o;
              for (n in t)
                (i = Ho.indexOf(n)),
                  (r = t[n]),
                  ($r = n),
                  "all" === n
                    ? r()
                    : (e = cr.matchMedia(n)) &&
                      (e.matches && (o = r()),
                      ~i
                        ? ((Ho[i + 1] = so(Ho[i + 1], r)),
                          (Ho[i + 2] = so(Ho[i + 2], o)))
                        : ((i = Ho.length),
                          Ho.push(n, r, o),
                          e.addListener
                            ? e.addListener(Yo)
                            : e.addEventListener("change", Yo)),
                      (Ho[i + 3] = e.matches)),
                  ($r = 0);
              return Ho;
            }),
            (t.clearMatchMedia = function (t) {
              t || (Ho.length = 0), (t = Ho.indexOf(t)) >= 0 && Ho.splice(t, 4);
            }),
            (t.isInViewport = function (t, e, n) {
              var i = (no(t) ? tr(t) : t).getBoundingClientRect(),
                r = i[n ? fo : go] * e || 0;
              return n
                ? i.right - r > 0 && i.left + r < cr.innerWidth
                : i.bottom - r > 0 && i.top + r < cr.innerHeight;
            }),
            (t.positionInViewport = function (t, e, n) {
              no(t) && (t = tr(t));
              var i = t.getBoundingClientRect(),
                r = i[n ? fo : go],
                o =
                  null == e
                    ? r / 2
                    : e in Io
                    ? Io[e] * r
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * r) / 100
                    : parseFloat(e) || 0;
              return n
                ? (i.left + o) / cr.innerWidth
                : (i.top + o) / cr.innerHeight;
            }),
            t
          );
        })();
      (fa.version = "3.10.4"),
        (fa.saveStyles = function (t) {
          return t
            ? Dr(t).forEach(function (t) {
                if (t && t.style) {
                  var e = Go.indexOf(t);
                  e >= 0 && Go.splice(e, 5),
                    Go.push(
                      t,
                      t.style.cssText,
                      t.getBBox && t.getAttribute("transform"),
                      ur.core.getCache(t),
                      $r
                    );
                }
              })
            : Go;
        }),
        (fa.revert = function (t, e) {
          return Ko(!t, e);
        }),
        (fa.create = function (t, e) {
          return new fa(t, e);
        }),
        (fa.refresh = function (t) {
          return t ? qo() : (lr || fa.register()) && Zo(!0);
        }),
        (fa.update = na),
        (fa.clearScrollMemory = Jo),
        (fa.maxScroll = function (t, e) {
          return to(t, e ? Qi : Zi);
        }),
        (fa.getScrollFunc = function (t, e) {
          return er(tr(t), e ? Qi : Zi);
        }),
        (fa.getById = function (t) {
          return $o[t];
        }),
        (fa.getAll = function () {
          return Po.filter(function (t) {
            return "ScrollSmoother" !== t.vars.id;
          });
        }),
        (fa.isScrolling = function () {
          return !!Hr;
        }),
        (fa.snapDirectional = xo),
        (fa.addEventListener = function (t, e) {
          var n = jo[t] || (jo[t] = []);
          ~n.indexOf(e) || n.push(e);
        }),
        (fa.removeEventListener = function (t, e) {
          var n = jo[t],
            i = n && n.indexOf(e);
          i >= 0 && n.splice(i, 1);
        }),
        (fa.batch = function (t, e) {
          var n,
            i = [],
            r = {},
            o = e.interval || 0.016,
            a = e.batchMax || 1e9,
            s = function (t, e) {
              var n = [],
                i = [],
                r = ur
                  .delayedCall(o, function () {
                    e(n, i), (n = []), (i = []);
                  })
                  .pause();
              return function (t) {
                n.length || r.restart(!0),
                  n.push(t.trigger),
                  i.push(t),
                  a <= n.length && r.progress(1);
              };
            };
          for (n in e)
            r[n] =
              "on" === n.substr(0, 2) && io(e[n]) && "onRefreshInit" !== n
                ? s(0, e[n])
                : e[n];
          return (
            io(a) &&
              ((a = a()),
              To(fa, "refresh", function () {
                return (a = e.batchMax());
              })),
            Dr(t).forEach(function (t) {
              var e = {};
              for (n in r) e[n] = r[n];
              (e.trigger = t), i.push(fa.create(e));
            }),
            i
          );
        });
      var ga,
        Da = function (t, e, n, i) {
          return (
            e > i ? t(i) : e < 0 && t(0),
            n > i ? (i - e) / (n - e) : n < 0 ? e / (e - n) : 1
          );
        },
        ma = function t(e, n) {
          !0 === n
            ? e.style.removeProperty("touch-action")
            : (e.style.touchAction =
                !0 === n
                  ? "auto"
                  : n
                  ? "pan-" + n + (sr.isTouch ? " pinch-zoom" : "")
                  : "none"),
            e === hr && t(pr, n);
        },
        va = { auto: 1, scroll: 1 },
        _a = function (t) {
          var e,
            n = t.event,
            i = t.target,
            r = t.axis,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            a = o._gsap || ur.core.getCache(o),
            s = jr();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; o && o.scrollHeight <= o.clientHeight; ) o = o.parentNode;
            (a._isScroll =
              o &&
              !Qr(o) &&
              o !== i &&
              (va[(e = yo(o)).overflowY] || va[e.overflowX])),
              (a._isScrollT = s);
          }
          (a._isScroll || "x" === r) && (n._gsapAllow = !0);
        },
        ya = function (t, e, n, i) {
          return sr.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: (i = i && _a),
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function () {
              return n && To(dr, sr.eventTypes[0], ba, !1, !0);
            },
            onDisable: function () {
              return ko(dr, sr.eventTypes[0], ba, !0);
            },
          });
        },
        Ca = /(input|label|select|textarea)/i,
        ba = function (t) {
          var e = Ca.test(t.target.tagName);
          (e || ga) && ((t._gsapAllow = !0), (ga = e));
        };
      function wa(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      (fa.sort = function (t) {
        return Po.sort(
          t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                t.start -
                (e.start + -1e6 * (e.vars.refreshPriority || 0))
              );
            }
        );
      }),
        (fa.observe = function (t) {
          return new sr(t);
        }),
        (fa.normalizeScroll = function (t) {
          if (void 0 === t) return Sr;
          if (!0 === t && Sr) return Sr.enable();
          if (!1 === t) return Sr && Sr.kill();
          var e =
            t instanceof sr
              ? t
              : (function (t) {
                  oo(t) || (t = {}),
                    (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
                    t.type || (t.type = "wheel,touch"),
                    (t.debounce = !!t.debounce),
                    (t.id = t.id || "normalizer");
                  var e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    u,
                    l = t,
                    c = l.normalizeScrollX,
                    d = l.momentum,
                    h = l.allowNestedScroll,
                    p = tr(t.target) || hr,
                    f = ur.core.globals().ScrollSmoother,
                    g =
                      Or &&
                      ((t.content && tr(t.content)) ||
                        (f && f.get() && f.get().content())),
                    D = er(p, Zi),
                    m = er(p, Qi),
                    v = 1,
                    _ =
                      (sr.isTouch && cr.visualViewport
                        ? cr.visualViewport.scale * cr.visualViewport.width
                        : cr.outerWidth) / cr.innerWidth,
                    y = 0,
                    C = io(d)
                      ? function () {
                          return d(e);
                        }
                      : function () {
                          return d || 2.8;
                        },
                    b = ya(p, t.type, !0, h),
                    w = function () {
                      return (i = !1);
                    },
                    E = Gr,
                    x = Gr,
                    F = function () {
                      (n = to(p, Zi)),
                        (x = mr(Or ? 1 : 0, n)),
                        c && (E = mr(0, to(p, Qi))),
                        (r = Qo);
                    },
                    T = function () {
                      F(),
                        o.isActive() &&
                          o.vars.scrollY > n &&
                          (D() > n
                            ? o.progress(1) && D(n)
                            : o.resetTo("scrollY", n));
                    };
                  return (
                    (t.ignoreCheck = function (t) {
                      return (
                        (Or &&
                          "touchmove" === t.type &&
                          (function () {
                            if (i) {
                              requestAnimationFrame(w);
                              var t = Xr(e.deltaY / 2),
                                n = x(D.v - t);
                              return (
                                g &&
                                  n !== D.v + D.offset &&
                                  ((D.offset = n - D.v),
                                  (g.style.transform =
                                    "translateY(" + -D.offset + "px)"),
                                  g._gsap && (g._gsap.y = -D.offset + "px"),
                                  (D.cacheID = ji.cache),
                                  na()),
                                !0
                              );
                            }
                            g &&
                              ((g.style.transform = "translateY(0px)"),
                              (D.offset = D.cacheID = 0),
                              g._gsap && (g._gsap.y = "0px")),
                              (i = !0);
                          })()) ||
                        (v > 1.05 && "touchstart" !== t.type) ||
                        e.isGesturing ||
                        (t.touches && t.touches.length > 1)
                      );
                    }),
                    (t.onPress = function () {
                      var t = v;
                      (v = Xr(
                        ((cr.visualViewport && cr.visualViewport.scale) || 1) /
                          _
                      )),
                        o.pause(),
                        t !== v && ma(p, v > 1.01 || (!c && "x")),
                        (i = !1),
                        (a = m()),
                        (s = D()),
                        F(),
                        (r = Qo);
                    }),
                    (t.onRelease = t.onGestureStart =
                      function (t, e) {
                        if (
                          (g &&
                            ((g.style.transform = "translateY(0px)"),
                            (D.offset = D.cacheID = 0),
                            g._gsap && (g._gsap.y = "0px")),
                          e)
                        ) {
                          ji.cache++;
                          var i,
                            r,
                            a = C();
                          c &&
                            ((r =
                              (i = m()) + (0.05 * a * -t.velocityX) / 0.227),
                            (a *= Da(m, i, r, to(p, Qi))),
                            (o.vars.scrollX = E(r))),
                            (r = (i = D()) + (0.05 * a * -t.velocityY) / 0.227),
                            (a *= Da(D, i, r, to(p, Zi))),
                            (o.vars.scrollY = x(r)),
                            o.invalidate().duration(a).play(0.01),
                            ((Or && o.vars.scrollY >= n) || i >= n - 1) &&
                              ur.to({}, { onUpdate: T, duration: a });
                        } else u.restart(!0);
                      }),
                    (t.onWheel = function () {
                      o._ts && o.pause(),
                        jr() - y > 1e3 && ((r = 0), (y = jr()));
                    }),
                    (t.onChange = function (t, e, n, i, o) {
                      Qo !== r && F(),
                        e &&
                          c &&
                          m(
                            E(
                              i[2] === e ? a + (t.startX - t.x) : m() + e - i[1]
                            )
                          ),
                        n &&
                          D(
                            x(
                              o[2] === n ? s + (t.startY - t.y) : D() + n - o[1]
                            )
                          ),
                        na();
                    }),
                    (t.onEnable = function () {
                      ma(p, !c && "x"), To(cr, "resize", T), b.enable();
                    }),
                    (t.onDisable = function () {
                      ma(p, !0), ko(cr, "resize", T), b.kill();
                    }),
                    ((e = new sr(t)).iOS = Or),
                    Or && !D() && D(1),
                    (u = e._dc),
                    (o = ur.to(e, {
                      ease: "power4",
                      paused: !0,
                      scrollX: c ? "+=0.1" : "+=0",
                      scrollY: "+=0.1",
                      onComplete: u.vars.onComplete,
                    })),
                    e
                  );
                })(t);
          return (
            Sr && Sr.target === e.target && Sr.kill(),
            Qr(e.target) && (Sr = e),
            e
          );
        }),
        (fa.core = {
          _getVelocityProp: nr,
          _inputObserver: ya,
          _scrollers: ji,
          _proxies: Ui,
          bridge: {
            ss: function () {
              Hr || Wo("scrollStart"), (Hr = jr());
            },
            ref: function () {
              return yr;
            },
          },
        }),
        Jr() && ur.registerPlugin(fa),
        wi.registerPlugin(fa),
        document
          .querySelectorAll(".faq-category__anchor")
          .forEach(function (t) {
            var e = t.getAttribute("id"),
              n = t.getAttribute("data-title"),
              i = document.createElement("li"),
              r = document.createElement("a"),
              o = document.createElement("span");
            (r.href = "#".concat(e)),
              (o.innerText = n),
              r.appendChild(o),
              i.appendChild(r),
              document.querySelector(".faq-main__tab-links").appendChild(i);
          }),
        $(".faq-category__toggle").on("click", function () {
          var t = $(this).closest(".faq-main");
          $(".faq-main.active").not(t).removeClass("active"),
            t.toggleClass("active");
        }),
        fa.matchMedia({
          "(min-width: 992px)": function () {
            var t = $(".navbar").height() + 70;
            fa.create({
              trigger: ".faq-main__left--sticky",
              endTrigger: ".faq-contact",
              start: "".concat(-t, " top"),
              end: "top bottom",
              pin: !0,
              pinSpacing: !1,
            });
          },
        }),
        n(773),
        n(480),
        n(606);
      var Ea,
        xa,
        Fa,
        Ta,
        ka,
        Aa,
        Sa,
        Ma,
        Ia,
        La,
        Oa,
        Ba,
        Pa,
        $a = function () {
          return "undefined" != typeof window;
        },
        Na = function () {
          return Ea || ($a() && (Ea = window.gsap) && Ea.registerPlugin && Ea);
        },
        Ra =
          (Date.now,
          function (t) {
            var e = Ta.querySelector(".ScrollSmoother-wrapper");
            return (
              e ||
                ((e = Ta.createElement("div")).classList.add(
                  "ScrollSmoother-wrapper"
                ),
                t.parentNode.insertBefore(e, t),
                e.appendChild(t)),
              e
            );
          }),
        za = (function () {
          function t(e) {
            var n = this;
            xa ||
              t.register(Ea) ||
              console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
              (e = this.vars = e || {}),
              La && La.kill(),
              (La = this);
            var i,
              r,
              o,
              a,
              s,
              u,
              l,
              c,
              d,
              h,
              p,
              f,
              g,
              D,
              m = e,
              v = m.smoothTouch,
              _ = m.onUpdate,
              y = m.onStop,
              C = m.smooth,
              b = m.onFocusIn,
              w = m.normalizeScroll,
              E = Ia.getScrollFunc(Fa),
              x =
                1 === Ia.isTouch
                  ? !0 === v
                    ? 0.8
                    : parseFloat(v) || 0
                  : 0 === C || !1 === C
                  ? 0
                  : parseFloat(C) || 0.8,
              F = 0,
              T = 0,
              k = 1,
              A = Ba(0),
              S = function () {
                return A.update(-F);
              },
              M = { y: 0 },
              I = function () {
                return (i.style.overflow = "visible");
              },
              L = function (t) {
                t.update();
                var e = t.getTween();
                e && (e.pause(), (e._time = e._dur), (e._tTime = e._tDur)),
                  (g = !1),
                  t.animation.progress(t.progress, !0);
              },
              O = function (t, e) {
                ((t !== F && !h) || e) &&
                  (x &&
                    (i.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      t +
                      ", 0, 1)"),
                  (T = t - F),
                  (F = t),
                  Ia.isUpdating || Ia.update());
              },
              B = function (t) {
                return arguments.length
                  ? (h ? (F = -t) : O(-t), (M.y = -t), (g = !0), E(t), this)
                  : -F - E.offset;
              },
              P = function (t) {
                (r.scrollTop = 0),
                  (b && !1 === b(n, t)) ||
                    (Ia.isInViewport(t.target) ||
                      t.target === D ||
                      n.scrollTo(t.target, !1, "center center"),
                    (D = t.target));
              },
              $ = function (t, e) {
                var n, i, r, o;
                s.forEach(function (e) {
                  (n = e.pins),
                    (o = e.markers),
                    t.forEach(function (t) {
                      (t.trigger !== e.trigger &&
                        t.pinnedContainer !== e.trigger) ||
                        e === t ||
                        ((i = t.start),
                        (r =
                          (i - e.start - e.offset) / e.ratio - (i - e.start)),
                        n.forEach(function (t) {
                          return (r -= t.distance / e.ratio - t.distance);
                        }),
                        t.setPositions(i + r, t.end + r),
                        t.markerStart &&
                          o.push(
                            Ea.quickSetter(
                              [t.markerStart, t.markerEnd],
                              "y",
                              "px"
                            )
                          ),
                        t.pin &&
                          t.end > 0 &&
                          ((r = t.end - t.start),
                          n.push({
                            start: t.start,
                            end: t.end,
                            distance: r,
                            trig: t,
                          }),
                          e.setPositions(e.start, e.end + r),
                          e.vars.onRefresh(e)));
                    });
                });
              },
              N = function () {
                I(),
                  requestAnimationFrame(I),
                  s &&
                    (s.forEach(function (t) {
                      var e = t.start,
                        n = t.auto
                          ? Math.min(Ia.maxScroll(t.scroller), t.end)
                          : e + (t.end - e) / t.ratio,
                        i = (n - t.end) / 2;
                      (e -= i),
                        (n -= i),
                        (t.offset = i || 1e-4),
                        (t.pins.length = 0),
                        t.setPositions(Math.min(e, n), Math.max(e, n)),
                        t.vars.onRefresh(t);
                    }),
                    $(Ia.sort())),
                  A.reset();
              },
              R = function () {
                return (
                  s &&
                  s.forEach(function (t) {
                    return t.vars.onRefresh(t);
                  })
                );
              },
              z = function () {
                return (
                  s &&
                    s.forEach(function (t) {
                      return t.vars.onRefreshInit(t);
                    }),
                  R
                );
              },
              q = function (t, e, n, i) {
                return function () {
                  var r = "function" == typeof e ? e(n, i) : e;
                  return (
                    r ||
                      0 === r ||
                      (r =
                        i.getAttribute("data-" + t) || ("speed" === t ? 1 : 0)),
                    i.setAttribute("data-" + t, r),
                    "auto" === r ? r : parseFloat(r)
                  );
                };
              },
              j = function (t, e, n, i) {
                var o,
                  a,
                  u,
                  l,
                  c,
                  d,
                  h = q("speed", e, i, t),
                  p = q("lag", n, i, t),
                  f = Ea.getProperty(t, "y"),
                  g = t._gsap,
                  D = function () {
                    (e = h()),
                      (n = p()),
                      (o = parseFloat(e) || 1),
                      (c = (u = "auto" === e) ? 0 : 0.5),
                      l && l.kill(),
                      (l =
                        n &&
                        Ea.to(t, {
                          ease: Oa,
                          overwrite: !1,
                          y: "+=0",
                          duration: n,
                        })),
                      a && ((a.ratio = o), (a.autoSpeed = u));
                  },
                  m = function () {
                    (g.y = f + "px"), g.renderTransform(1), D();
                  },
                  v = [],
                  _ = [],
                  y = 0,
                  C = function (e) {
                    if (u) {
                      m();
                      var n = (function (t, e) {
                        var n,
                          i,
                          r = t.parentNode || ka,
                          o = t.getBoundingClientRect(),
                          a = r.getBoundingClientRect(),
                          s = a.top - o.top,
                          u = a.bottom - o.bottom,
                          l = (Math.abs(s) > Math.abs(u) ? s : u) / (1 - e),
                          c = -l * e;
                        return (
                          l > 0 &&
                            ((c +=
                              -(i =
                                0.5 ==
                                (n = a.height / (Fa.innerHeight + a.height))
                                  ? 2 * a.height
                                  : 2 *
                                    Math.min(
                                      a.height,
                                      (-l * n) / (2 * n - 1)
                                    )) / 2),
                            (l += i)),
                          { change: l, offset: c }
                        );
                      })(t, Ma(0, 1, -e.start / (e.end - e.start)));
                      (y = n.change), (d = n.offset);
                    } else (y = (e.end - e.start) * (1 - o)), (d = 0);
                    v.forEach(function (t) {
                      return (y -= t.distance * (1 - o));
                    }),
                      e.vars.onUpdate(e),
                      l && l.progress(1);
                  };
                return (
                  D(),
                  (1 !== o || u || l) &&
                    (C(
                      (a = Ia.create({
                        trigger: u ? t.parentNode : t,
                        scroller: r,
                        scrub: !0,
                        refreshPriority: -999,
                        onRefreshInit: m,
                        onRefresh: C,
                        onKill: function (t) {
                          var e = s.indexOf(t);
                          e >= 0 && s.splice(e, 1), m();
                        },
                        onUpdate: function (t) {
                          var e,
                            n,
                            i,
                            r,
                            o = f + y * (t.progress - c),
                            a = v.length,
                            s = 0;
                          if (t.offset) {
                            if (a) {
                              for (n = -F, i = t.end; a--; ) {
                                if (
                                  (e = v[a]).trig.isActive ||
                                  (n >= e.start && n <= e.end)
                                )
                                  return void (
                                    l &&
                                    ((e.trig.progress +=
                                      e.trig.direction < 0 ? 0.001 : -0.001),
                                    e.trig.update(0, 0, 1),
                                    l.resetTo("y", parseFloat(g.y), -T, !0),
                                    k && l.progress(1))
                                  );
                                n > e.end && (s += e.distance),
                                  (i -= e.distance);
                              }
                              o =
                                f +
                                s +
                                y *
                                  ((Ea.utils.clamp(t.start, t.end, n) -
                                    t.start -
                                    s) /
                                    (i - t.start) -
                                    c);
                            }
                            (r = o + d),
                              (o = Math.round(1e5 * r) / 1e5 || 0),
                              _.length &&
                                !u &&
                                _.forEach(function (t) {
                                  return t(o - s);
                                }),
                              l
                                ? (l.resetTo("y", o, -T, !0),
                                  k && l.progress(1))
                                : ((g.y = o + "px"), g.renderTransform(1));
                          }
                        },
                      }))
                    ),
                    (Ea.core.getCache(a.trigger).stRevert = z),
                    (a.startY = f),
                    (a.pins = v),
                    (a.markers = _),
                    (a.ratio = o),
                    (a.autoSpeed = u),
                    (t.style.willChange = "transform")),
                  a
                );
              };
            function U() {
              return (
                (o = i.clientHeight),
                (i.style.overflow = "visible"),
                (Aa.style.height = o + "px"),
                o - Fa.innerHeight
              );
            }
            Ia.addEventListener("refresh", N),
              Ea.delayedCall(0.5, function () {
                return (k = 0);
              }),
              (this.scrollTop = B),
              (this.scrollTo = function (t, e, i) {
                var r = Ea.utils.clamp(
                  0,
                  Ia.maxScroll(Fa),
                  isNaN(t) ? n.offset(t, i) : +t
                );
                e
                  ? h
                    ? Ea.to(n, {
                        duration: x,
                        scrollTop: r,
                        overwrite: "auto",
                        ease: Oa,
                      })
                    : E(r)
                  : B(r);
              }),
              (this.offset = function (t, e) {
                var n,
                  i = (t = Sa(t)[0]).style.cssText,
                  r = Ia.create({ trigger: t, start: e || "top top" });
                return (
                  s && $([r]),
                  (n = r.start),
                  r.kill(!1),
                  (t.style.cssText = i),
                  (Ea.core.getCache(t).uncache = 1),
                  n
                );
              }),
              (this.content = function (t) {
                if (arguments.length) {
                  var e = Sa(t || "#smooth-content")[0] || Aa.children[0];
                  return (
                    e !== i &&
                      ((d = (i = e).getAttribute("style") || ""),
                      Ea.set(i, {
                        overflow: "visible",
                        width: "100%",
                        boxSizing: "border-box",
                      })),
                    this
                  );
                }
                return i;
              }),
              (this.wrapper = function (t) {
                return arguments.length
                  ? ((r = Sa(t || "#smooth-wrapper")[0] || Ra(i)),
                    (c = r.getAttribute("style") || ""),
                    U(),
                    Ea.set(
                      r,
                      x
                        ? {
                            overflow: "hidden",
                            position: "fixed",
                            height: "100%",
                            width: "100%",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }
                        : {
                            overflow: "visible",
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            top: "auto",
                            bottom: "auto",
                            left: "auto",
                            right: "auto",
                          }
                    ),
                    this)
                  : r;
              }),
              (this.effects = function (t, e) {
                var n;
                if ((s || (s = []), !t)) return s.slice(0);
                (t = Sa(t)).forEach(function (t) {
                  for (var e = s.length; e--; )
                    s[e].trigger === t && (s[e].kill(), s.splice(e, 1));
                });
                var i,
                  r,
                  o = (e = e || {}),
                  a = o.speed,
                  u = o.lag,
                  l = [];
                for (i = 0; i < t.length; i++)
                  (r = j(t[i], a, u, i)) && l.push(r);
                return (n = s).push.apply(n, l), l;
              }),
              (this.sections = function (t, e) {
                var n;
                if ((u || (u = []), !t)) return u.slice(0);
                var i = Sa(t).map(function (t) {
                  return Ia.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function (e) {
                      (t.style.opacity = e.isActive ? "1" : "0"),
                        (t.style.pointerEvents = e.isActive ? "all" : "none");
                    },
                  });
                });
                return (
                  e && e.add ? (n = u).push.apply(n, i) : (u = i.slice(0)), i
                );
              }),
              this.content(e.content),
              this.wrapper(e.wrapper),
              (this.render = function (t) {
                return O(t || 0 === t ? t : F);
              }),
              (this.getVelocity = function () {
                return A.getVelocity(-F);
              }),
              Ia.scrollerProxy(r, {
                scrollTop: B,
                scrollHeight: function () {
                  return U() && Aa.scrollHeight;
                },
                fixedMarkers: !1 !== e.fixedMarkers && !!x,
                content: i,
                getBoundingClientRect: function () {
                  return {
                    top: 0,
                    left: 0,
                    width: Fa.innerWidth,
                    height: Fa.innerHeight,
                  };
                },
              }),
              Ia.defaults({ scroller: r });
            var H = Ia.getAll().filter(function (t) {
              return t.scroller === Fa || t.scroller === r;
            });
            H.forEach(function (t) {
              return t.revert(!0);
            }),
              (a = Ia.create({
                animation: Ea.to(M, {
                  y: function () {
                    return -U();
                  },
                  ease: "none",
                  data: "ScrollSmoother",
                  duration: 100,
                  onUpdate: function () {
                    var t = g;
                    t && ((M.y = F), L(a)), O(M.y, t), S(), _ && !h && _(n);
                  },
                }),
                onRefreshInit: function () {
                  (f = F), (M.y = r.scrollTop = 0);
                },
                id: "ScrollSmoother",
                scroller: Fa,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: U,
                onScrubComplete: function () {
                  A.reset(), y && y(n);
                },
                scrub: x || !0,
                onRefresh: function (t) {
                  L(t),
                    (M.y = -E()),
                    O(M.y),
                    k || t.animation.progress(Ea.utils.clamp(0, 1, f / -t.end));
                },
              })),
              (this.smooth = function (t) {
                return (
                  (x = t),
                  arguments.length
                    ? a.scrubDuration(t)
                    : a.getTween()
                    ? a.getTween().duration()
                    : 0
                );
              }),
              a.getTween() && (a.getTween().vars.ease = e.ease || Oa),
              (this.scrollTrigger = a),
              e.effects &&
                this.effects(
                  !0 === e.effects ? "[data-speed], [data-lag]" : e.effects,
                  {}
                ),
              e.sections &&
                this.sections(
                  !0 === e.sections ? "[data-section]" : e.sections
                ),
              H.forEach(function (t) {
                (t.vars.scroller = r), t.init(t.vars, t.animation);
              }),
              (this.paused = function (t, e) {
                return arguments.length
                  ? (!!h !== t &&
                      (t
                        ? (a.getTween() && a.getTween().pause(),
                          E(-F),
                          A.reset(),
                          (p = Ia.normalizeScroll()) && p.disable(),
                          ((h = Ia.observe({
                            preventDefault: !0,
                            type: "wheel,touch,scroll",
                            debounce: !1,
                            allowClicks: !0,
                            onChangeY: function () {
                              return B(-F);
                            },
                          })).nested = Pa(
                            ka,
                            "wheel,touch,scroll",
                            !0,
                            !1 !== e
                          )))
                        : (h.nested.kill(),
                          h.kill(),
                          (h = 0),
                          p && p.enable(),
                          (a.progress = (-F - a.start) / (a.end - a.start)),
                          L(a))),
                    this)
                  : !!h;
              }),
              (this.kill = function () {
                n.paused(!1), L(a), a.kill();
                for (var t = (s || []).concat(u || []), e = t.length; e--; )
                  t[e].kill();
                Ia.scrollerProxy(r),
                  Ia.removeEventListener("refresh", N),
                  Aa.style.removeProperty("height"),
                  (r.style.cssText = c),
                  (i.style.cssText = d);
                var o = Ia.defaults({});
                o && o.scroller === r && Ia.defaults({ scroller: Fa }),
                  n.normalizer && Ia.normalizeScroll(!1),
                  clearInterval(l),
                  (La = null),
                  Fa.removeEventListener("focusin", P);
              }),
              (this.refresh = function (t, e) {
                return a.refresh(t, e);
              }),
              w &&
                (this.normalizer = Ia.normalizeScroll(
                  !0 === w ? { debounce: !0, content: i } : w
                )),
              Ia.config(e),
              "overscrollBehavior" in Fa.getComputedStyle(Aa) &&
                Ea.set([Aa, ka], { overscrollBehavior: "none" }),
              "scrollBehavior" in Fa.getComputedStyle(Aa) &&
                Ea.set([Aa, ka], { scrollBehavior: "auto" }),
              Fa.addEventListener("focusin", P),
              (l = setInterval(S, 250)),
              "loading" === Ta.readyState ||
                requestAnimationFrame(function () {
                  return Ia.refresh();
                });
          }
          var e, n;
          return (
            (t.register = function (e) {
              return (
                xa ||
                  ((Ea = e || Na()),
                  $a() &&
                    window.document &&
                    ((Fa = window),
                    (Ta = document),
                    (ka = Ta.documentElement),
                    (Aa = Ta.body)),
                  Ea &&
                    ((Sa = Ea.utils.toArray),
                    (Ma = Ea.utils.clamp),
                    (Oa = Ea.parseEase("expo")),
                    (Ia = Ea.core.globals().ScrollTrigger),
                    Ea.core.globals("ScrollSmoother", t),
                    Aa &&
                      Ia &&
                      ((Ba = Ia.core._getVelocityProp),
                      (Pa = Ia.core._inputObserver),
                      (t.refresh = Ia.refresh),
                      (xa = 1)))),
                xa
              );
            }),
            (e = t),
            (n = [
              {
                key: "progress",
                get: function () {
                  return this.scrollTrigger.animation._time / 100;
                },
              },
            ]) && wa(e.prototype, n),
            t
          );
        })();
      function qa() {
        window.dispatchEvent(new Event("resize")),
          "undefined" != typeof smoother && smoother.refresh();
      }
      function ja(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      (za.version = "3.10.4"),
        (za.create = function (t) {
          return La && t && La.content() === Sa(t.content)[0] ? La : new za(t);
        }),
        (za.get = function () {
          return La;
        }),
        Na() && Ea.registerPlugin(za),
        wi.registerPlugin(za, fa),
        (window.ScrollTrigger = fa),
        (window.smootherRefresh = qa),
        $(window).on("load", function () {
          setTimeout(qa, 1e3);
        }),
        document.querySelectorAll("img[loading=lazy]").forEach(function (t) {
          t.addEventListener("load", function () {
            setTimeout(qa, 1e3);
          });
        }),
        $(function () {
          $(".position-fixed").appendTo("body"),
            fa.create({
              trigger: ".footer",
              start: "top bottom+=50px",
              toggleClass: { targets: "body", className: "footer--in-view" },
            }),
            fa.matchMedia({
              "(min-width: 992px)": function () {
                var t = $(".navbar").height();
                document
                  .querySelectorAll("[data-sticky]")
                  .forEach(function (e) {
                    var n = e.getAttribute("data-sticky"),
                      i = e.getAttribute("data-offset"),
                      r = e.getAttribute("data-offset-bottom");
                    (r = r || "bottom"),
                      fa.create({
                        trigger: n,
                        start: function () {
                          return "".concat(
                            (function (e) {
                              return e ? -1 * e : -t;
                            })(i),
                            " top"
                          );
                        },
                        end: function () {
                          return "bottom ".concat(r);
                        },
                        pin: e,
                        pinSpacing: !1,
                      });
                  }),
                  $(".collection-main__sticky").length &&
                    fa.create({
                      trigger: "#collection-grid",
                      endTrigger: ".subscribe-cta__grid",
                      start: function () {
                        return "".concat(-t, " top");
                      },
                      end: "bottom bottom-=55px",
                      pin: ".collection-main__sticky",
                      pinSpacing: !1,
                    }),
                  fa.create({
                    trigger: ".contact-main",
                    endTrigger: ".footer",
                    start: function () {
                      return "".concat(-t, " top");
                    },
                    end: "top bottom",
                    pin: "#contact-sticky",
                    pinSpacing: !1,
                  }),
                  fa.create({
                    trigger: "#product-main",
                    endTrigger: ".footer",
                    start: "bottom 50%",
                    end: "top bottom",
                    toggleClass: {
                      targets: ".variant-bar",
                      className: "active",
                    },
                  }),
                  $(window).on("resize", function () {
                    t = $(".navbar").height();
                  }),
                  document
                    .querySelectorAll(".pdp-anchor")
                    .forEach(function (t) {
                      var e = t.getAttribute("data-id"),
                        n = $('a[href="#'.concat(e, '"]'));
                      $(t).prepend(
                        '<div class="pdp-anchor__anchor" id="'.concat(
                          e,
                          '"></div>'
                        )
                      );
                      var i = $(t).find(".pdp-anchor__anchor");
                      fa.create({
                        trigger: i,
                        start: "top 10px",
                        end: "+=".concat($(t).height(), "px"),
                        toggleClass: { targets: n, className: "active" },
                      });
                    });
              },
              "(max-width: 992px)": function () {
                $(".bundle-sticky").length &&
                  fa.create({
                    trigger: ".product-main__buy",
                    endTrigger: ".footer",
                    start: "bottom 20%",
                    end: "top bottom",
                    pinSpacing: !1,
                    toggleClass: {
                      targets: ".bundle-sticky",
                      className: "show",
                    },
                  });
              },
            }),
            $(".read-toggle__checkbox").on("change", function () {
              fa.refresh();
            });
        }),
        (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "init",
                value: function () {
                  document
                    .querySelectorAll(".custom-cursor__trigger")
                    .forEach(function (t) {
                      var e = document.querySelector(
                        t.getAttribute("data-cursor")
                      );
                      t.addEventListener("mousemove", function (t) {
                        wi.to(e, { x: t.clientX, y: t.clientY });
                      }),
                        t.addEventListener("mouseenter", function (t) {
                          wi.to(e, { autoAlpha: 1 });
                        }),
                        t.addEventListener("mouseleave", function (t) {
                          wi.to(e, { autoAlpha: 0 });
                        }),
                        t.addEventListener("mousedown", function (t) {
                          e.classList.add("custom-cursor--mouse-down");
                        }),
                        t.addEventListener("mouseup", function (t) {
                          e.classList.remove("custom-cursor--mouse-down");
                        });
                    });
                },
              },
            ]),
            null && ja(e.prototype, null),
            n && ja(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })().init(),
        n(904);
      var Ua = n(699),
        Ha = n.n(Ua);
      document.querySelectorAll(".js-phone-validation").forEach(function (t) {
        var e = [
            "Invalid number",
            "Invalid country code",
            "Too short",
            "Too long",
            "Invalid number",
          ],
          n = Ha()(t, {
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/utils.min.js",
            initialCountry: "auto",
            geoIpLookup: function (t, e) {
              $.get("https://ipinfo.io", function () {}, "jsonp").always(
                function (e) {
                  var n = e && e.country ? e.country : "SA";
                  t(n);
                }
              );
            },
          }),
          i = function () {
            $(t).removeAttr("data-invalid"),
              $(t).removeClass("error-highlight"),
              $(t).closest(".form-row").attr("data-error", "");
          },
          r = function () {
            if (
              ($(t)
                .closest(".form-row")
                .find(".js-phone-value")
                .val(n.getNumber()),
              t.value.trim())
            )
              if (n.isValidNumber()) i();
              else {
                $(t).attr("data-invalid", "invalid");
                var r = n.getValidationError();
                $(t).closest(".form-row").attr("data-error", e[r]);
              }
            else t.hasAttribute("required") || i();
          };
        t.addEventListener("blur", function () {
          r(),
            this.hasAttribute("data-invalid") &&
              this.classList.add("error-highlight");
        }),
          t.addEventListener("change", r),
          t.addEventListener("keyup", r);
      }),
        wi.fromTo(
          ".gradients__wrapper",
          { y: 0 },
          {
            y: function () {
              return window.innerHeight - $(".gradients__wrapper").height();
            },
            scrollTrigger: {
              trigger: ".about-hero",
              endTrigger: ".footer",
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: !0,
            },
          }
        ),
        document.querySelectorAll(".gradients__gradient").forEach(function (t) {
          wi.timeline({
            scrollTrigger: { trigger: t, start: "center center" },
          }).from(t, {
            background:
              "radial-gradient(50% 50% at 50% 50%, transparent 21.87%, transparent 100%) !important",
            duration: 2,
          });
        });
      var Ya =
        /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
      function Va(t) {
        var e = t.nodeType,
          n = "";
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) n += Va(t);
        } else if (3 === e || 4 === e) return t.nodeValue;
        return n;
      }
      var Wa,
        Ga,
        Xa,
        Ka = /(?:\r|\n|\t\t)/g,
        Ja = /(?:\s\s+)/g,
        Qa = function (t) {
          return Ga.getComputedStyle(t);
        },
        Za = Array.isArray,
        ts = [].slice,
        es = function (t, e) {
          var n;
          return Za(t)
            ? t
            : "string" == (n = typeof t) && !e && t
            ? ts.call(Wa.querySelectorAll(t), 0)
            : t && "object" === n && "length" in t
            ? ts.call(t, 0)
            : t
            ? [t]
            : [];
        },
        ns = function (t) {
          return "absolute" === t.position || !0 === t.absolute;
        },
        is = function (t, e) {
          for (var n, i = e.length; --i > -1; )
            if (((n = e[i]), t.substr(0, n.length) === n)) return n.length;
        },
        rs = function (t, e) {
          void 0 === t && (t = "");
          var n = ~t.indexOf("++"),
            i = 1;
          return (
            n && (t = t.split("++").join("")),
            function () {
              return (
                "<" +
                e +
                " style='position:relative;display:inline-block;'" +
                (t ? " class='" + t + (n ? i++ : "") + "'>" : ">")
              );
            }
          );
        },
        os = function t(e, n, i) {
          var r = e.nodeType;
          if (1 === r || 9 === r || 11 === r)
            for (e = e.firstChild; e; e = e.nextSibling) t(e, n, i);
          else
            (3 !== r && 4 !== r) ||
              (e.nodeValue = e.nodeValue.split(n).join(i));
        },
        as = function (t, e) {
          for (var n = e.length; --n > -1; ) t.push(e[n]);
        },
        ss = function (t, e, n) {
          for (var i; t && t !== e; ) {
            if ((i = t._next || t.nextSibling))
              return i.textContent.charAt(0) === n;
            t = t.parentNode || t._parent;
          }
        },
        us = function t(e) {
          var n,
            i,
            r = es(e.childNodes),
            o = r.length;
          for (n = 0; n < o; n++)
            (i = r[n])._isSplit
              ? t(i)
              : n && i.previousSibling && 3 === i.previousSibling.nodeType
              ? ((i.previousSibling.nodeValue +=
                  3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue),
                e.removeChild(i))
              : 3 !== i.nodeType &&
                (e.insertBefore(i.firstChild, i), e.removeChild(i));
        },
        ls = function (t, e) {
          return parseFloat(e[t]) || 0;
        },
        cs = function (t, e, n, i, r, o, a) {
          var s,
            u,
            l,
            c,
            d,
            h,
            p,
            f,
            g,
            D,
            m,
            v,
            _ = Qa(t),
            y = ls("paddingLeft", _),
            C = -999,
            b = ls("borderBottomWidth", _) + ls("borderTopWidth", _),
            w = ls("borderLeftWidth", _) + ls("borderRightWidth", _),
            E = ls("paddingTop", _) + ls("paddingBottom", _),
            x = ls("paddingLeft", _) + ls("paddingRight", _),
            F = ls("fontSize", _) * (e.lineThreshold || 0.2),
            T = _.textAlign,
            k = [],
            A = [],
            S = [],
            M = e.wordDelimiter || " ",
            I = e.tag ? e.tag : e.span ? "span" : "div",
            L = e.type || e.split || "chars,words,lines",
            O = r && ~L.indexOf("lines") ? [] : null,
            B = ~L.indexOf("words"),
            P = ~L.indexOf("chars"),
            $ = ns(e),
            N = e.linesClass,
            R = ~(N || "").indexOf("++"),
            z = [],
            q = "flex" === _.display,
            j = t.style.display;
          for (
            R && (N = N.split("++").join("")),
              q && (t.style.display = "block"),
              l = (u = t.getElementsByTagName("*")).length,
              d = [],
              s = 0;
            s < l;
            s++
          )
            d[s] = u[s];
          if (O || $)
            for (s = 0; s < l; s++)
              ((h = (c = d[s]).parentNode === t) || $ || (P && !B)) &&
                ((v = c.offsetTop),
                O &&
                  h &&
                  Math.abs(v - C) > F &&
                  ("BR" !== c.nodeName || 0 === s) &&
                  ((p = []), O.push(p), (C = v)),
                $ &&
                  ((c._x = c.offsetLeft),
                  (c._y = v),
                  (c._w = c.offsetWidth),
                  (c._h = c.offsetHeight)),
                O &&
                  (((c._isSplit && h) ||
                    (!P && h) ||
                    (B && h) ||
                    (!B &&
                      c.parentNode.parentNode === t &&
                      !c.parentNode._isSplit)) &&
                    (p.push(c), (c._x -= y), ss(c, t, M) && (c._wordEnd = !0)),
                  "BR" === c.nodeName &&
                    ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                      0 === s) &&
                    O.push([])));
          for (s = 0; s < l; s++)
            if (((h = (c = d[s]).parentNode === t), "BR" !== c.nodeName))
              if (
                ($ &&
                  ((g = c.style),
                  B ||
                    h ||
                    ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                  (g.left = c._x + "px"),
                  (g.top = c._y + "px"),
                  (g.position = "absolute"),
                  (g.display = "block"),
                  (g.width = c._w + 1 + "px"),
                  (g.height = c._h + "px")),
                !B && P)
              )
                if (c._isSplit)
                  for (
                    c._next = u = c.nextSibling, c.parentNode.appendChild(c);
                    u && 3 === u.nodeType && " " === u.textContent;

                  )
                    (c._next = u.nextSibling),
                      c.parentNode.appendChild(u),
                      (u = u.nextSibling);
                else
                  c.parentNode._isSplit
                    ? ((c._parent = c.parentNode),
                      !c.previousSibling &&
                        c.firstChild &&
                        (c.firstChild._isFirst = !0),
                      c.nextSibling &&
                        " " === c.nextSibling.textContent &&
                        !c.nextSibling.nextSibling &&
                        z.push(c.nextSibling),
                      (c._next =
                        c.nextSibling && c.nextSibling._isFirst
                          ? null
                          : c.nextSibling),
                      c.parentNode.removeChild(c),
                      d.splice(s--, 1),
                      l--)
                    : h ||
                      ((v = !c.nextSibling && ss(c.parentNode, t, M)),
                      c.parentNode._parent &&
                        c.parentNode._parent.appendChild(c),
                      v && c.parentNode.appendChild(Wa.createTextNode(" ")),
                      "span" === I && (c.style.display = "inline"),
                      k.push(c));
              else
                c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                  ? A.push(c)
                  : P &&
                    !c._isSplit &&
                    ("span" === I && (c.style.display = "inline"), k.push(c));
            else
              O || $
                ? (c.parentNode && c.parentNode.removeChild(c),
                  d.splice(s--, 1),
                  l--)
                : B || t.appendChild(c);
          for (s = z.length; --s > -1; ) z[s].parentNode.removeChild(z[s]);
          if (O) {
            for (
              $ &&
                ((D = Wa.createElement(I)),
                t.appendChild(D),
                (m = D.offsetWidth + "px"),
                (v = D.offsetParent === t ? 0 : t.offsetLeft),
                t.removeChild(D)),
                g = t.style.cssText,
                t.style.cssText = "display:none;";
              t.firstChild;

            )
              t.removeChild(t.firstChild);
            for (
              f = " " === M && (!$ || (!B && !P)), s = 0;
              s < O.length;
              s++
            ) {
              for (
                p = O[s],
                  (D = Wa.createElement(I)).style.cssText =
                    "display:block;text-align:" +
                    T +
                    ";position:" +
                    ($ ? "absolute;" : "relative;"),
                  N && (D.className = N + (R ? s + 1 : "")),
                  S.push(D),
                  l = p.length,
                  u = 0;
                u < l;
                u++
              )
                "BR" !== p[u].nodeName &&
                  ((c = p[u]),
                  D.appendChild(c),
                  f && c._wordEnd && D.appendChild(Wa.createTextNode(" ")),
                  $ &&
                    (0 === u &&
                      ((D.style.top = c._y + "px"),
                      (D.style.left = y + v + "px")),
                    (c.style.top = "0px"),
                    v && (c.style.left = c._x - v + "px")));
              0 === l
                ? (D.innerHTML = "&nbsp;")
                : B || P || (us(D), os(D, String.fromCharCode(160), " ")),
                $ && ((D.style.width = m), (D.style.height = c._h + "px")),
                t.appendChild(D);
            }
            t.style.cssText = g;
          }
          $ &&
            (a > t.clientHeight &&
              ((t.style.height = a - E + "px"),
              t.clientHeight < a && (t.style.height = a + b + "px")),
            o > t.clientWidth &&
              ((t.style.width = o - x + "px"),
              t.clientWidth < o && (t.style.width = o + w + "px"))),
            q &&
              (j ? (t.style.display = j) : t.style.removeProperty("display")),
            as(n, k),
            B && as(i, A),
            as(r, S);
        },
        ds = function (t, e, n, i) {
          var r,
            o,
            a,
            s,
            u,
            l,
            c,
            d,
            h = e.tag ? e.tag : e.span ? "span" : "div",
            p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
            f = ns(e),
            g = e.wordDelimiter || " ",
            D = " " !== g ? "" : f ? "&#173; " : " ",
            m = "</" + h + ">",
            v = 1,
            _ = e.specialChars
              ? "function" == typeof e.specialChars
                ? e.specialChars
                : is
              : null,
            y = Wa.createElement("div"),
            C = t.parentNode;
          for (
            C.insertBefore(y, t),
              y.textContent = t.nodeValue,
              C.removeChild(t),
              c = -1 !== (r = Va((t = y))).indexOf("<"),
              !1 !== e.reduceWhiteSpace &&
                (r = r.replace(Ja, " ").replace(Ka, "")),
              c && (r = r.split("<").join("{{LT}}")),
              u = r.length,
              o = (" " === r.charAt(0) ? D : "") + n(),
              a = 0;
            a < u;
            a++
          )
            if (((l = r.charAt(a)), _ && (d = _(r.substr(a), e.specialChars))))
              (l = r.substr(a, d || 1)),
                (o += p && " " !== l ? i() + l + "</" + h + ">" : l),
                (a += d - 1);
            else if (l === g && r.charAt(a - 1) !== g && a) {
              for (o += v ? m : "", v = 0; r.charAt(a + 1) === g; )
                (o += D), a++;
              a === u - 1
                ? (o += D)
                : ")" !== r.charAt(a + 1) && ((o += D + n()), (v = 1));
            } else
              "{" === l && "{{LT}}" === r.substr(a, 6)
                ? ((o += p ? i() + "{{LT}}</" + h + ">" : "{{LT}}"), (a += 5))
                : (l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319) ||
                  (r.charCodeAt(a + 1) >= 65024 && r.charCodeAt(a + 1) <= 65039)
                ? ((s =
                    ((r.substr(a, 12).split(Ya) || [])[1] || "").length || 2),
                  (o +=
                    p && " " !== l
                      ? i() + r.substr(a, s) + "</" + h + ">"
                      : r.substr(a, s)),
                  (a += s - 1))
                : (o += p && " " !== l ? i() + l + "</" + h + ">" : l);
          (t.outerHTML = o + (v ? m : "")), c && os(C, "{{LT}}", "<");
        },
        hs = function t(e, n, i, r) {
          var o,
            a,
            s = es(e.childNodes),
            u = s.length,
            l = ns(n);
          if (3 !== e.nodeType || u > 1) {
            for (n.absolute = !1, o = 0; o < u; o++)
              ((a = s[o])._next = a._isFirst = a._parent = a._wordEnd = null),
                (3 !== a.nodeType || /\S+/.test(a.nodeValue)) &&
                  (l &&
                    3 !== a.nodeType &&
                    "inline" === Qa(a).display &&
                    ((a.style.display = "inline-block"),
                    (a.style.position = "relative")),
                  (a._isSplit = !0),
                  t(a, n, i, r));
            return (n.absolute = l), void (e._isSplit = !0);
          }
          ds(e, n, i, r);
        },
        ps = (function () {
          function t(t, e) {
            Xa || ((Wa = document), (Ga = window), (Xa = 1)),
              (this.elements = es(t)),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this._originals = []),
              (this.vars = e || {}),
              this.split(e);
          }
          var e = t.prototype;
          return (
            (e.split = function (t) {
              this.isSplit && this.revert(),
                (this.vars = t = t || this.vars),
                (this._originals.length =
                  this.chars.length =
                  this.words.length =
                  this.lines.length =
                    0);
              for (
                var e,
                  n,
                  i,
                  r = this.elements.length,
                  o = t.tag ? t.tag : t.span ? "span" : "div",
                  a = rs(t.wordsClass, o),
                  s = rs(t.charsClass, o);
                --r > -1;

              )
                (i = this.elements[r]),
                  (this._originals[r] = i.innerHTML),
                  (e = i.clientHeight),
                  (n = i.clientWidth),
                  hs(i, t, a, s),
                  cs(i, t, this.chars, this.words, this.lines, n, e);
              return (
                this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                (this.isSplit = !0),
                this
              );
            }),
            (e.revert = function () {
              var t = this._originals;
              if (!t) throw "revert() call wasn't scoped properly.";
              return (
                this.elements.forEach(function (e, n) {
                  return (e.innerHTML = t[n]);
                }),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.isSplit = !1),
                this
              );
            }),
            (t.create = function (e, n) {
              return new t(e, n);
            }),
            t
          );
        })();
      function fs(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function gs(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function Ds(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? gs(Object(n), !0).forEach(function (e) {
                ms(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : gs(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function ms(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      (ps.version = "3.10.4"),
        document.querySelectorAll(".anim-ht").forEach(function (t) {
          if (!(window.innerWidth <= 768)) {
            var e = $(t).closest(".anim-trigger");
            0 == e.length && (e = $(t).closest("section"));
            var n = t.getAttribute("data-delay")
                ? t.getAttribute("data-delay")
                : 0.2,
              i = wi.timeline({}),
              r = new ps(t, {
                type: "words, lines",
                linesClass: "anim-line__inner",
              }),
              o = new ps(t, { type: "lines", linesClass: "anim-line" });
            i.fromTo(
              r.lines,
              { yPercent: 150 },
              {
                yPercent: 0,
                stagger: 0.1,
                duration: 1.8,
                delay: n,
                ease: "expo.out",
                onComplete: function () {
                  o.revert(), r.revert();
                },
              }
            );
          }
        });
      var vs,
        _s = {
          onStart: function () {
            wi.set(this._targets, { transition: "none" });
          },
          onComplete: function () {
            wi.set(this._targets, { clearProps: "transition" });
          },
        };
      function ys(t) {
        0 != $(".fade-carousel").length &&
          t.querySelectorAll(".fade-carousel").forEach(function (t) {
            var e = wi.timeline({ repeat: -1, paused: !0 }),
              n = t.querySelectorAll("li"),
              i = wi.utils.wrap(Array.from(n));
            n.forEach(function (t, n) {
              e.fromTo(
                i(n),
                { autoAlpha: 1 },
                { autoAlpha: 0 },
                "+=".concat(3)
              ).fromTo(i(n + 1), { autoAlpha: 0 }, { autoAlpha: 1 }, "<+=0.5");
            }),
              e.progress(1).play();
          });
      }
      function Cs() {
        $(".owl-prev").attr("aria-label", "Previous"),
          $(".owl-next").attr("aria-label", "Next"),
          $(".owl-dot").attr("aria-label", "Carousel Page");
      }
      $(function () {
        var t = document.createElement("div");
        t.classList.add("anim-img__overlay"),
          $(".anim-img").append(t),
          document.querySelectorAll(".anim-img").forEach(function (t) {
            var e = wi.timeline({}),
              n = t.getAttribute("data-delay")
                ? t.getAttribute("data-delay")
                : 0.2;
            e.fromTo(
              t,
              { scale: 1.05, autoAlpha: 0 },
              {
                scale: 1,
                duration: 1.8,
                autoAlpha: 1,
                delay: n,
                ease: "expo.out",
              }
            ).fromTo(
              t.querySelector(".anim-img__overlay"),
              { scaleY: 1 },
              { scaleY: 0, duration: 1.8, ease: "expo.out" },
              "<"
            );
          });
      }),
        (function () {
          var t = ["page-index", "page-about-2", "page-blog"];
          window.innerWidth > 768 &&
            (t.push("page-collection"), t.push("page-product"));
          var e = !1;
          if (
            (t.forEach(function (t) {
              document.body.classList.contains(t) && (e = !0);
            }),
            window.innerWidth < 992 && (e = !1),
            e)
          ) {
            var n = wi.timeline(),
              i = $("body").hasClass("page-index") ? 0.2 : 0;
            if (
              (n
                .from(
                  ".navbar__logo, .navbar__links > li",
                  Ds(
                    {
                      autoAlpha: 0,
                      stagger: i,
                      duration: 1.8,
                      ease: "expo.out",
                      delay: 0.8,
                      y: 0 == i ? 0 : 5,
                    },
                    _s
                  )
                )
                .to(
                  ".navbar__main-border",
                  Ds({ scaleX: 1, duration: 2, ease: "expo.in" }, _s),
                  0
                )
                .to(
                  ".navbar__left-border",
                  Ds({ scaleY: 1, duration: 1, ease: "expo.in" }, _s),
                  1.2
                ),
              $(".navbar__announcement").is(":visible"))
            ) {
              var r = $(".navbar__announcement").height();
              n.from(
                ".navbar__announcement",
                Ds({ duration: 1.8, yPercent: -100, ease: "expo.out" }, _s),
                1.5
              ).from(
                ".navbar__main",
                {
                  y: -r,
                  duration: 1.8,
                  ease: "expo.out",
                  onComplete: function () {
                    wi.set(this._targets, { transition: "all .5s ease" });
                  },
                },
                "<"
              );
            }
            n.to(
              {},
              {
                onComplete: function () {
                  wi.set(".navbar__main", { transition: "all .5s ease" });
                },
              },
              "<"
            );
          } else
            wi.set(".navbar__main-border, .navbar__left-border", {
              scaleX: 1,
              scaleY: 1,
            });
        })(),
        wi
          .timeline()
          .from(
            ".gradients",
            { autoAlpha: 0, duration: 3, ease: "expo.out" },
            1.8
          ),
        wi
          .timeline()
          .from(
            " \n  .home-hero__content > p,\n  .home-hero__content > .dot-button\n",
            {
              autoAlpha: 0,
              duration: 1.4,
              stagger: 0.1,
              y: 15,
              ease: "expo.out",
            },
            0.8
          )
          .from(
            ".home-hero__content .dot-button__text",
            { x: -30, duration: 1.8, ease: "expo.out" },
            "<+=.6"
          )
          .from(
            ".home-hero__content .dot-button__dot",
            { scale: 0, duration: 1.4, ease: "expo.out" },
            "<"
          ),
        wi.timeline().from(".about-intro__desc", {
          autoAlpha: 0,
          duration: 2,
          y: 10,
          delay: 1,
          ease: "expo.out",
        }),
        wi.from(".main__accordion .accordion__item", {
          opacity: 0,
          y: -10,
          ease: "expo.out",
          duration: 1.8,
          stagger: -0.3,
          delay: 0.8,
        }),
        wi
          .timeline()
          .from(
            ".featured-post__heading .dot-button",
            { autoAlpha: 0, duration: 1.4, y: 15, ease: "expo.out" },
            0.8
          )
          .from(
            ".featured-post__heading .dot-button__text",
            { x: -20, duration: 1.8, ease: "expo.out" },
            "<+=.6"
          )
          .from(
            ".featured-post__heading .dot-button__dot",
            { scale: 0, duration: 1.4, ease: "expo.out" },
            "<"
          ),
        wi.from(
          ".collection-filters__trigger",
          Ds(
            { y: -10, opacity: 0, duration: 1.8, ease: "expo.out", delay: 1 },
            _s
          )
        ),
        window.innerWidth > 768 &&
          wi.from(
            ((vs = document.querySelectorAll(
              ".page-collection .product-grid--collection > .product-item"
            )),
            (function (t) {
              if (Array.isArray(t)) return fs(t);
            })(vs) ||
              (function (t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              })(vs) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return fs(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? fs(t, e)
                      : void 0
                  );
                }
              })(vs) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()).slice(0, 4),
            {
              autoAlpha: 0,
              y: 50,
              duration: 1.8,
              stagger: 0.2,
              delay: 0.8,
              ease: "expo.out",
            }
          ),
        window.innerWidth > 768 &&
          wi
            .timeline()
            .from(".product-main__content > *:not(.space-50)", {
              autoAlpha: 0,
              y: 20,
              duration: 1.8,
              stagger: 0.2,
              delay: 0.8,
              ease: "expo.out",
            })
            .from(
              ".product-main__gallery",
              { scale: 1.1, duration: 1.8, ease: "expo.out" },
              "<"
            )
            .fromTo(
              ".product-gallery__overlay",
              { scaleY: 1 },
              { scaleY: 0, duration: 1.8, ease: "expo.out" },
              "<"
            )
            .from(
              ".product-main__tag",
              {
                scale: 0,
                duration: 1.8,
                ease: "expo.out",
                color: "transparent",
              },
              "<+=1"
            ),
        n(396),
        0 != $(".product-mvps").length &&
          ($(".product-mvps__tab-links a").on("click", function (t) {
            t.preventDefault();
            var e = $(this).closest("li").index();
            $(".product-mvps__tab-links a.active").removeClass("active"),
              $(this).addClass("active"),
              $(".product-mvps__tab.active").removeClass("active"),
              $(".product-mvps__tab--".concat(e)).addClass("active");
          }),
          $(".product-mvps__label").on("click", function (t) {
            $(this).closest(".product-mvps__tab").toggleClass("active");
          })),
        0 != $(".related-products").length &&
          $(".related-products__tabs h2").on("click", function () {
            var t = $(this).index();
            $(".related-products__tabs h2.active").removeClass("active"),
              $(this).addClass("active"),
              $(".related-products__wrapper.active").removeClass("active"),
              $(".related-products__wrapper").eq(t).addClass("active");
          }),
        (window.fadeCarousel = ys),
        ys(document),
        $(document).on("click", ".accordion__label", function (t) {
          var e = $(this).closest(".accordion__item"),
            n = e.find(".accordion__content"),
            i = e.hasClass("active");
          $(this)
            .closest(".faq-main__accordion")
            .find(".accordion__item.active")
            .removeClass("active")
            .find(".accordion__content")
            .not(n)
            .slideUp(),
            ((1 == e.closest(".modal-block").length &&
              window.innerWidth > 768) ||
              0 == e.closest(".modal-block").length) &&
              $(this)
                .closest(".accordion")
                .find(".accordion__item.active")
                .removeClass("active")
                .find(".accordion__content")
                .not(n)
                .slideUp(),
            i
              ? (n.slideUp(function () {
                  smootherRefresh();
                }),
                e.removeClass("active"))
              : (n.slideDown(function () {
                  smootherRefresh();
                }),
                e.addClass("active"));
        }),
        $(Cs),
        $(window).on("load", Cs);
    })();
})();
