export default {
    mounted(el, binding) {
        console.log(el, binding)
        const observer = new IntersectionObserver((entries, observer) => {
          if (entries[0].isIntersecting) {
              binding.value();
          }
        }, {
          rootMargin: '0px',
          threshold: 1.0,
        })
        observer.observe(el);
    }
}