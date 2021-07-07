// $(function () {

//   //ページ内スクロール
//   var navHeight = $(".gnav").outerHeight();

//   $('a[href^="#"]').on("click", function () {
//     let href = $(this).attr("href");
//     let target = $(href == "#" || href == "" ? "html" : href);
//     let position = target.offset().top - navHeight;
//     $("html, body").animate({ scrollTop: position, }, 300, "swing");
//     return false;
//   });

  

// });

//ページスクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

//フェードインアニメーション
// let fadeInTarget = document.querySelectorAll('fade-in');
// window.addEventListener('scroll',() => {
//   for (let i = 0; i < fadeInTarget.length; i++){
//     const rect = fadeInTarget[i].getBoundingClientRect().top;
//     const scroll = window.pageYOffset || document.documentElement.scrollTop;
//     const offset = rect + scroll;
//     const windowHeight = window.innerHeight;
//     if (scroll > offset - windowHeight + 150) {
//       fadeInTarget[i].classList.add('scroll-in');
//     }
//   }
// });

//ページトップへ戻る
const pageTopBtn = document.getElementById('js-scroll-top');
pageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})