 // Initialize AOS with global settings
 AOS.init({
     duration: 800,
     once: true,
     offset: 100,
     easing: 'ease-out-quad',
 });

 // Mobile menu toggle
 const mobileBtn = document.getElementById('mobileMenuBtn');
 const mobileMenu = document.getElementById('mobileMenu');
 if (mobileBtn && mobileMenu) {
     mobileBtn.addEventListener('click', () => {
         mobileMenu.classList.toggle('hidden');
         // Optional icon change
         const icon = mobileBtn.querySelector('i');
         if (mobileMenu.classList.contains('hidden')) {
             icon.classList.remove('fa-times');
             icon.classList.add('fa-bars');
         } else {
             icon.classList.remove('fa-bars');
             icon.classList.add('fa-times');
         }
     });
 }

 // smooth scroll for anchor links (improve native behavior)
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         const href = this.getAttribute('href');
         if (href === "#" || href === "") return;
         const target = document.querySelector(href);
         if (target) {
             e.preventDefault();
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
             // Close mobile menu after click on mobile
             if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
                 const icon = mobileBtn.querySelector('i');
                 if (icon) icon.classList.remove('fa-times');
                 if (icon) icon.classList.add('fa-bars');
             }
         }
     });
 });


 function playSound(elid) {
     const el = document.getElementById(elid);
     const text = el.textContent;

     const sentences = text.split(/(?<=\.)\s+/); // pisah berdasarkan titik

     window.speechSynthesis.cancel();

     let index = 0;

     function speakNext() {
         if (index < sentences.length) {
             const speech = new SpeechSynthesisUtterance(sentences[index]);
             speech.lang = "id-ID";
             speech.rate = 1;
             speech.pitch = 1;
             speech.volume = 1;

             speech.onend = () => {
                 index++;
                 speakNext();
             };

             window.speechSynthesis.speak(speech);
         }
     }

     speakNext();
 }



 var _Hasync = _Hasync || [];
 _Hasync.push(['Histats.start', '1,7332223,4,0,0,0,00010000']);
 _Hasync.push(['Histats.fasi', '1']);
 _Hasync.push(['Histats.track_hits', '']);
 (function () {
     var hs = document.createElement('script');
     hs.type = 'text/javascript';
     hs.async = true;
     hs.src = ('//s10.histats.com/js15_as.js');
     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
 })();
 setTimeout(function () {
     // Mencari elemen yang berisi angka counter dari HiStats
     const histatsElements = document.querySelectorAll('.histats_counter, [id*="histats"]');
     if (histatsElements.length > 0) {
         histatsElements.forEach(el => {
             el.classList.add('text-2xl', 'font-bold', 'text-white');
         });
     }
 }, 1000);