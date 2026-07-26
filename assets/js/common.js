$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // clicking the email social icon copies the address instead of opening a mail client
  $(".social a[href^='mailto:']").on("click", function (e) {
    e.preventDefault();
    const $link = $(this);
    const email = $link.attr("href").replace(/^mailto:/, "");

    const originalTitle = $link.attr("title") || "Email";
    const showCopiedTooltip = function () {
      $link.tooltip("dispose");
      // Bootstrap 4's tooltip plugin copies the element's `title` attribute into
      // `data-original-title` on init and prefers that over the `title` config
      // option, so setting `data-original-title` directly is what actually sticks.
      $link.attr("data-original-title", "Copied!").attr("title", "");
      $link
        .tooltip({
          trigger: "manual",
          placement: "bottom",
        })
        .tooltip("show");
      setTimeout(function () {
        $link.tooltip("dispose");
        $link.attr("title", originalTitle).removeAttr("data-original-title");
      }, 1200);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(showCopiedTooltip);
    } else {
      // fallback for browsers without the Clipboard API
      const $tmp = $("<textarea>").val(email).appendTo("body").select();
      document.execCommand("copy");
      $tmp.remove();
      showCopiedTooltip();
    }
  });
});
