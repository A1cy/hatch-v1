(() => {
  function e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t &&
        (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, o);
    }
    return n;
  }
  function n(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var o = [],
    a = [];
  a = window.isAustralian
    ? [
        {
          name: "Worldwide",
          bounds: [
            [104.22641595838115, -44.67566230461983],
            [163.6547838008466, -6.951058688723094],
          ],
          type: "country",
        },
      ]
    : [
        {
          name: "Saudi Arabia",
          bounds: [
            [165.21611362034088, -49.69201259953691],
            [180.05274596705254, -31.35085307747616],
          ],
          type: "country",
        },
        {
          name: "Europe",
          bounds: [
            [174.56021106142418, -37.09472414962725],
            [174.9687651385729, -36.606260988828225],
          ],
          type: "city",
        },
      ];
  var r = [];
  window.isAustralian
    ? (csvURL =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZDoYeZgCq0kbE-GNPOZEh7WoCvoSs9rcqguntA18k1HHgoEe_ujG8Cgabg7xb-vtlbe2DOV8TJly4/pub?output=csv")
    : (csvURL =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRU6n6f7qf6-LiU03GxKb5s3XKM5Scc0Zv5lSpk4a6VrnaejeRL2b0ZexDNDLaCqS16dMQPE4Od3ZiS/pub?gid=0&single=true&output=csv"),
    google.maps.event.addDomListener(window, "load", function () {
      var e = document.getElementById("searchTextField"),
        t = new google.maps.places.Autocomplete(e, {
          componentRestrictions: { country: window.isAustralian ? "au" : "SA" },
        });
      t.addListener("place_changed", function () {
        var e = t.getPlace();
        if (e.geometry && e.geometry.location && e.geometry.viewport) {
          if ((console.log("place", e), e.geometry.location)) {
            var n = e.geometry.location.toJSON(),
              o = n.lat,
              a = n.lng,
              r = new mapboxgl.LngLat(a, o).toBounds(5e3);
            i.fitBounds(r, { padding: 0 });
          }
        } else window.alert("No details available for input: '" + e.name + "'");
      });
    }),
    (mapboxgl.accessToken =
      "pk.eyJ1Ijoic3R1ZGlvYWxtb25kIiwiYSI6ImNsMHFlbjE5azAwMWkzY3Fyd29ycDJ4N3IifQ.NcWeaExvFVKu5-_L6h1MEg");
  var i = new mapboxgl.Map({
    container: "map",
    accessToken: mapboxgl.accessToken,
    style: "mapbox://styles/hatchsanitary/cl3s98gcg000y15t57fd06bgg",
    center: { lng: 172.37334439463166, lat: -42.24026282612157 },
    zoom: 5,
  });
  (window.map = i),
    i.on("load", function () {
      new mapboxgl.Marker().setLngLat([0, 0]).addTo(i),
        d3
          .csv(csvURL + "&" + Math.floor(1e3 * Math.random()))
          .then(function (c) {
            var s, d;
            c.forEach(function (e) {
              "" != e["stockist Name"] &&
                +e.Latitude &&
                +e.Longitude &&
                o.push(
                  (function (e) {
                    for (var o = 1; o < arguments.length; o++) {
                      var a = null != arguments[o] ? arguments[o] : {};
                      o % 2
                        ? t(Object(a), !0).forEach(function (t) {
                            n(e, t, a[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(a)
                          )
                        : t(Object(a)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(a, t)
                            );
                          });
                    }
                    return e;
                  })(
                    {
                      lat: "" !== e.Latitude ? +e.Latitude : null,
                      lon: "" !== e.Longitude ? +e.Longitude : null,
                      name: "" + e["stockist Name"],
                      center: [+e.Longitude, +e.Latitude],
                      type: "item",
                    },
                    e
                  )
                );
            }),
              (s = new mapboxgl.LngLatBounds()),
              o
                .filter(function (e) {
                  return null !== e.lat && null !== e.lon;
                })
                .forEach(function (e) {
                  var t = e.lat,
                    n = e.lon;
                  s.extend([n, t]);
                  var o = u(e),
                    a = new mapboxgl.Popup({ offset: [0, -32] }).setHTML(o),
                    r = document.createElement("div");
                  (r.className = "marker"),
                    (r.style.backgroundImage = liquid__marker),
                    (r.style.width = "".concat(15, "px")),
                    (r.style.height = "".concat(15, "px")),
                    (r.style.backgroundSize = "100%"),
                    (r.style.cursor = "pointer"),
                    r.setAttribute("data-ref", l(e)),
                    (e.marker = r),
                    new mapboxgl.Marker(r, { color: "black", offset: [0, -16] })
                      .setLngLat({ lat: t, lon: n })
                      .setPopup(a)
                      .addTo(i);
                }),
              i.fitBounds(s, { padding: 100 }),
              (function (e) {
                if (e && 0 !== e.length) {
                  var t = document.getElementById("stockists");
                  e.forEach(function (e) {
                    var n = e.lat,
                      o = e.lon,
                      a = document.createElement("div");
                    a.setAttribute("id", l(e)),
                      (a.className = "stockist"),
                      (a.innerHTML = u(e)),
                      a.addEventListener("click", function () {
                        e.marker && e.marker.click(),
                          window.innerWidth > 992 &&
                            i.flyTo({ center: { lat: n, lng: o }, zoom: 13 });
                      }),
                      t.appendChild(a);
                  });
                }
              })(o),
              [].concat(
                (function (t) {
                  if (Array.isArray(t)) return e(t);
                })((d = a)) ||
                  (function (e) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e["@@iterator"]
                    )
                      return Array.from(e);
                  })(d) ||
                  (function (t, n) {
                    if (t) {
                      if ("string" == typeof t) return e(t, n);
                      var o = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === o &&
                          t.constructor &&
                          (o = t.constructor.name),
                        "Map" === o || "Set" === o
                          ? Array.from(t)
                          : "Arguments" === o ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                          ? e(t, n)
                          : void 0
                      );
                    }
                  })(d) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                r,
                o
              );
          });
    }),
    (function () {
      if (a && 0 !== a.length) {
        var e = document.getElementById("countries");
        a.forEach(function (t) {
          var n = document.createElement("div");
          (n.className = "country"),
            (n.innerText = t.name),
            n.addEventListener("click", function () {
              i.fitBounds(t.bounds);
            }),
            e.appendChild(n);
        });
      }
    })();
  var c = {},
    s = 1;
  function l(e) {
    var t = e["stockist Name"] + e.Region;
    return c[t] || ((c[t] = s), s++), "stockist-".concat(c[t]);
  }
  function u(e) {
    return '\n    <div class="stockist__desc" >\n      <h4>'
      .concat(e["stockist Name"], "</h4>\n      <p>\n        ")
      .concat(e.Address, ",\n        <br />\n        ")
      .concat(e.Region, ",\n        <br />\n        ")
      .concat(
        e.Country,
        '\n      </p>\n      \n      <div class="contacts">\n        <span>\n          '
      )
      .concat(
        e["Phone Number"],
        '\n        </span>\n        \n        <a href="'
      )
      .concat(
        e.Website,
        '" target="_blank">Website</a>\n      </div>\n    </div>\n  '
      );
  }
  $(".stockists-sidebar__tab-links a").on("click", function (e) {
    e.preventDefault();
    var t = $(this).closest("li").index();
    $(".stockists .tab-active").removeClass("tab-active"),
      $(this).addClass("tab-active"),
      $(".stockists-sidebar__tab").eq(t).addClass("tab-active"),
      $(".stockists__right > div").eq(t).addClass("tab-active");
  }),
    i.on("move", function (e) {
      var t = (function () {
        for (
          var e,
            t,
            n = i.getContainer(),
            o = n.getElementsByClassName("marker"),
            a = n.getBoundingClientRect(),
            r = [],
            c = 0;
          c < o.length;
          c++
        ) {
          var s = o.item(c);
          (e = a),
            !(
              (t = s.getBoundingClientRect()).left > e.right ||
              t.right < e.left ||
              t.top > e.bottom ||
              t.bottom < e.top
            ) && r.push("#" + s.getAttribute("data-ref"));
        }
        return r;
      })();
      $(".stockists-stockists > .stockist").hide(), $(t.join(",")).show();
    });
})();
