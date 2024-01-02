// ScrollComponent.js

import React, { useEffect, useRef } from "react";
import $ from "jquery";

export function ScrollComponent() {
  const bodyRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const $window = $(window);
      const $body = $(bodyRef.current);
      const $panels = panelRefs.current.map((ref) => $(ref.current));

      const scroll = $window.scrollTop() + $window.height() / 3;

      $panels.forEach(($this, index) => {
        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          $body.removeClass(function (idx, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          $body.addClass("color-" + $this.data("color"));
        }
      });
    };

    // Attach scroll event listener
    $(window).on("scroll", handleScroll);

    // Trigger initial scroll to set the initial state
    handleScroll();

    // Cleanup: Remove scroll event listener when the component is unmounted
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return <div ref={bodyRef}>{/* Body element to apply classes */}</div>;
}
