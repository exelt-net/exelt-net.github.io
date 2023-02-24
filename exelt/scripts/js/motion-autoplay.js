function motion_autoplay_init() {
    // Video motion
    function slideShow(idx = 0) {
      const speed = 500;

      const slides = $("#motion-autoplay #slide-content li");
      const targetSlide = $(slides[idx]);

      slides.filter(".active").stop(true, false).fadeOut(speed, () => {
          $(this).removeClass("active");
      });
      targetSlide.stop(true, false).fadeIn(speed).addClass("active");
    }

    // click tab
    $("#motion-autoplay #slide-menu a").click((e) => {
      // $('.video').load();
      $('.video-start').each((k, el) => {
          $(el)[0].currentTime = 0
      })

      const slideMenus = $("#motion-autoplay #slide-menu li");
      slideMenus.filter(".selected").removeClass("selected")

      const a = $(e.currentTarget)
      a.parent().addClass("selected")

      const idx = parseInt(a.attr('data-key'))
      slideShow(idx);
    });
}