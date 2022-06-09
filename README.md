# Static Html Websites for Kobfa & Exelt

## Used Frameworks

- https://materializecss.com/

## Plugin

- js-cookie (https://github.com/js-cookie/js-cookie)

- Video
  - [plyr](https://plyr.io/)
- Icon
  - [Material](https://material.io/resources/icons/?style=baseline)
- Animation
  - [Greensock](https://greensock.com/)
    - Button animation
    - Scroll animation
    - Mouse move effect
    - Curved cut
- Slide image
  - [flickity](https://flickity.metafizzy.co/)
- AOS (Animate On Scroll Library)
  - https://www.aos.plus/index.html

## Preview

- [Kobfa](http://exelt-net.github.io/kobfa/index.html)
- [Exelt](http://exelt-net.github.io/exelt/index.html)

## Materialize

- Text Align

  - .left-align
  - .right-align
  - .center-align

- Quick Floats

  - .left: 맨 왼쪽으로
  - .right: 맨 오른쪽으로

- Hide Content

  - .hide: Hidden for all Devices
  - .hide-on-small-only: Hidden for Mobile Only
  - .hide-on-med-only: Hidden for Tablet Only
  - .hide-on-med-and-down: Hidden for Tablet and Below
  - .hide-on-med-and-up: Hidden for Tablet and Above
  - .hide-on-large-only: Hidden for Desktop Only
  - .show-on-extra-large
  - .show-on-large
  - .show-on-medium
  - .show-on-small

- .primary-text: var(--kobfa-primary-color) !important;
- .truncate: width 만큼 글씨가 나오고 width에 꽉차면 ... 으로 화면에 나온다.

- .sidenav-close: 강제로 사이드 메뉴 숨긴다.

- .container

  - @media only screen and (min-width: 993px) .container { width:70%; }
  - @media only screen and (min-width: 601px) .container { width:85%; }
  - .container { max-width:1280px; width:90%; }

- row, col
  - row: 행
  - col: 열
    - s1, s2, ... s12

## AOS

- Site: https://michalsnik.github.io/aos/

- .aos-animate: 이 클래스가 있으면 화면에 보이고 이 클래스가 없으면 화면에 사라진다.
- Fade

  - data-aos="fade-up": 위로 fade 하면서 화면에 나온다.
  - data-aos="fade-up": 아래로 fade 하면서 화면에 나온다.
  - data-aos="fade-right": 오른쪽으로 fade 하면서 화면에 나온다.
  - data-aos="fade-left": 왼쪽으로 fade 하면서 화면에 나온다.
  - data-aos="fade-up-right": 위로, 오른쪽으로 fade 하면서 화면에 나온다.
  - data-aos="fade-up-left": 위로, 완쪽으로 fade 하면서 화면에 나온다.
  - data-aos="fade-down-right": 아래로, 오른쪽으로 fade 하면서 화면에 나온다.
  - data-aos="fade-down-left": 아래로, 완쪽으로 fade 하면서 화면에 나온다.

- Flip

  - data-aos="flip-left": 완쪽으로 돌면서 화면에 나온다.
  - data-aos="flip-right": 오른쪽으로 돌면서 화면에 나온다.
  - data-aos="flip-up": 위쪽으로 돌면서 화면에 나온다.
  - data-aos="flip-down": 아래쪽으로 돌면서 화면에 나온다.

- Zoom

  - data-aos="zoom-in": 커지면서 화면에 나온다.
  - data-aos="zoom-in-up": 커지면서 위로 화면에 나온다.
  - data-aos="zoom-in-down": 커지면서 아래로 화면에 나온다.
  - data-aos="zoom-in-left": 커지면서 완쪽으로 화면에 나온다.
  - data-aos="zoom-in-right": 커지면서 오른쪽으로 화면에 나온다.

  - data-aos="zoom-out": 작아지면서 화면에 나온다.
  - data-aos="zoom-out-up": 작아지면서 위로 화면에 나온다.
  - data-aos="zoom-out-down": 작아지면서 아래로 화면에 나온다.
  - data-aos="zoom-out-right": 작아지면서 오른쪽으로 화면에 나온다.
  - data-aos="zoom-out-left": 작아지면서 완쪽으로 화면에 나온다.

- DIFFERENT SETTINGS EXAMPLES
  - data-aos-duration="3000"
  - data-aos-easing="linear"
  - data-aos-offset="300"
  - 기타등등
