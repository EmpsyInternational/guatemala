"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7992],{7992:(Z,g,a)=>{a.r(g),a.d(g,{HomePageModule:()=>f});var d=a(6814),m=a(95),i=a(451),u=a(1837),t=a(9212);function p(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"span",32),t.NdJ("click",function(){const s=t.CHM(r).index,l=t.oxw();return t.KtG(l.goToSlide(s))}),t.qZA()}if(2&e){const r=n.index,o=t.oxw();t.ekj("active",r===o.currentIndex)}}const h=[{path:"",component:(()=>{var e;class n{constructor(){this.currentIndex=0,this.slides=[1,2,3,4,5,6,7]}ngOnInit(){this.startAutoSlide()}ngOnDestroy(){this.stopAutoSlide()}startAutoSlide(){this.autoSlideInterval=setInterval(()=>{this.nextSlide()},2e3)}stopAutoSlide(){this.autoSlideInterval&&clearInterval(this.autoSlideInterval)}prevSlide(){const o=document.querySelectorAll(".carousel-item");this.currentIndex=this.currentIndex>0?this.currentIndex-1:o.length-1,this.updateCarousel()}nextSlide(){const o=document.querySelectorAll(".carousel-item");this.currentIndex=this.currentIndex<o.length-1?this.currentIndex+1:0,this.updateCarousel()}goToSlide(o){this.currentIndex=o,this.updateCarousel()}updateCarousel(){document.querySelectorAll(".carousel-item").forEach((s,l)=>{s.classList.remove("active"),l===this.currentIndex&&s.classList.add("active")}),document.querySelector(".carousel-inner").style.transform=`translateX(-${100*this.currentIndex}%)`}}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:53,vars:1,consts:[[1,"toolbar-content"],["src","../../../assets/icon/logo-interplaza-Photoroom.png","alt","Logo Interplaza",1,"image-headers"],[1,"carousel"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","../../../assets/carrusel/slider1.jpg","alt","Slide 1"],[1,"carousel-item"],["src","../../../assets/carrusel/slider2.jpg","alt","Slide 2"],["src","../../../assets/carrusel/slider3.jpg","alt","Slide 3"],["src","../../../assets/carrusel/slider4.jpg","alt","Slide 3"],["src","../../../assets/carrusel/slider5.jpg","alt","Slide 3"],["src","../../../assets/carrusel/slider6.jpg","alt","Slide 3"],["src","../../../assets/carrusel/slider7.jpg","alt","Slide 3"],[1,"carousel-control-prev",3,"click"],[1,"carousel-control-next",3,"click"],[1,"carousel-indicators"],[3,"active","click",4,"ngFor","ngForOf"],[1,"container"],[1,"cards"],[1,"card-content"],["src","../../../assets/content-home/imagen-04082303083267C.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-26072306392403A.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-27072309364135F.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-2707230937261FF.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-270723093823D67.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-270723101004341.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-27072310110044F.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-270723101325A87.jpg","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-300323061157D9D.png","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-300323061236C9F.png","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-300323061249C51.png","alt","Logo Interplaza Photoroom"],["src","../../../assets/content-home/imagen-300323061444735.png","alt","Logo Interplaza Photoroom"],[3,"click"]],template:function(o,c){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",0),t._UZ(3,"img",1),t.qZA()()(),t.TgZ(4,"ion-content")(5,"div",2)(6,"div",3)(7,"div",4),t._UZ(8,"img",5),t.qZA(),t.TgZ(9,"div",6),t._UZ(10,"img",7),t.qZA(),t.TgZ(11,"div",6),t._UZ(12,"img",8),t.qZA(),t.TgZ(13,"div",6),t._UZ(14,"img",9),t.qZA(),t.TgZ(15,"div",6),t._UZ(16,"img",10),t.qZA(),t.TgZ(17,"div",6),t._UZ(18,"img",11),t.qZA(),t.TgZ(19,"div",6),t._UZ(20,"img",12),t.qZA()(),t.TgZ(21,"button",13),t.NdJ("click",function(){return c.prevSlide()}),t._uU(22,"\u276e"),t.qZA(),t.TgZ(23,"button",14),t.NdJ("click",function(){return c.nextSlide()}),t._uU(24,"\u276f"),t.qZA(),t.TgZ(25,"div",15),t.YNc(26,p,1,2,"span",16),t.qZA()(),t.TgZ(27,"div",17)(28,"div",18)(29,"ion-card",19),t._UZ(30,"img",20),t.qZA(),t.TgZ(31,"ion-card",19),t._UZ(32,"img",21),t.qZA(),t.TgZ(33,"ion-card",19),t._UZ(34,"img",22),t.qZA(),t.TgZ(35,"ion-card",19),t._UZ(36,"img",23),t.qZA(),t.TgZ(37,"ion-card",19),t._UZ(38,"img",24),t.qZA(),t.TgZ(39,"ion-card",19),t._UZ(40,"img",25),t.qZA(),t.TgZ(41,"ion-card",19),t._UZ(42,"img",26),t.qZA(),t.TgZ(43,"ion-card",19),t._UZ(44,"img",27),t.qZA(),t.TgZ(45,"ion-card",19),t._UZ(46,"img",28),t.qZA(),t.TgZ(47,"ion-card",19),t._UZ(48,"img",29),t.qZA(),t.TgZ(49,"ion-card",19),t._UZ(50,"img",30),t.qZA(),t.TgZ(51,"ion-card",19),t._UZ(52,"img",31),t.qZA()()()()),2&o&&(t.xp6(26),t.Q6J("ngForOf",c.slides))},dependencies:[d.sg,i.PM,i.W2,i.Gu,i.sr],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background:#f3f3f3}ion-content[_ngcontent-%COMP%]{--background: #f3f3f3}ion-button[_ngcontent-%COMP%]{--background: transparent}ion-icon[_ngcontent-%COMP%]{color:#f3f3f3}ion-menu-button[_ngcontent-%COMP%]{color:#f3f3f3}ion-toolbar[_ngcontent-%COMP%]{--background: #d8d4d4}ion-item[_ngcontent-%COMP%]{--background: #f3f3f3;--border: none}ion-title[_ngcontent-%COMP%]{font-family:Chau Philomene One}.toolbar-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.image-headers[_ngcontent-%COMP%]{margin-left:20px;height:40px;width:auto;object-fit:contain}.carousel[_ngcontent-%COMP%]{position:relative;max-width:100%;overflow:hidden;border-radius:15px;box-shadow:0 10px 20px #00000026;margin-top:30px}.carousel-inner[_ngcontent-%COMP%]{display:flex;transition:transform .6s ease-in-out}.carousel-item[_ngcontent-%COMP%]{min-width:100%}.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:15px}.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);background-color:#00000080;color:#fff;border:none;padding:15px;cursor:pointer;z-index:1000;border-radius:50%;transition:background-color .3s ease}.carousel-control-prev[_ngcontent-%COMP%]:hover, .carousel-control-next[_ngcontent-%COMP%]:hover{background-color:#000c}.carousel-control-prev[_ngcontent-%COMP%]{left:10px}.carousel-control-next[_ngcontent-%COMP%]{right:10px}.carousel-indicators[_ngcontent-%COMP%]{position:absolute;bottom:15px;left:50%;transform:translate(-50%);display:flex;gap:8px}.carousel-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:12px;height:12px;background-color:#fff9;border-radius:50%;cursor:pointer;transition:background-color .3s ease}.carousel-indicators[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{background-color:#fff}@media (max-width: 768px){.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{padding:10px}}@media (min-width: 769px){.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{padding:15px}}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;justify-content:center;max-width:800px}.card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:15px;box-shadow:0 4px 8px #0003}@media (max-width: 768px){.cards[_ngcontent-%COMP%]{grid-template-columns:1fr;max-width:100%}}']}),n})()}];let P=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(h),u.Bz]}),n})(),f=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,m.u5,i.Pc,P]}),n})()}}]);