let elementi={
    number_of_aval_pict:0,
    batoni:'.buttons',
    sadrzaj_batona:'.button-tab-content',
    defaultFocus: 'defaultFocus',
    active_button:'active',
    left_hero_button:'left',
    right_hero_button:'right',
    hero_klasa:'.hero',
    input_form_btn:"input[type=submit]",
    ocisti : function(){
        let sadrzaji = Array.from(document.querySelectorAll(this.sadrzaj_batona));
    for(let ele of sadrzaji){
        if(ele.id == 'regular'){
        ele.style.display = 'flex';
        document.getElementById(this.defaultFocus).classList.toggle(this.active_button);
    }
        else
        ele.style.display = 'none';
    }
    },
    stanje_slike:0
};

elementi.ocisti();
document.querySelector(elementi.batoni).addEventListener('click',(event)=>{
    
    document.querySelector(`.${elementi.active_button}`).classList.toggle(elementi.active_button);
    event.target.classList.toggle(elementi.active_button);
    let sadrzaji = Array.from(document.querySelectorAll(elementi.sadrzaj_batona));
for(let ele of sadrzaji){
    if(ele.id == event.target.textContent)
    ele.style.display = 'flex';
    else
    ele.style.display = 'none';
}
});

function changeHeroImg(eventObjId){
    if(eventObjId == elementi.left_hero_button){
        (elementi.stanje_slike == 0) ? elementi.stanje_slike = elementi.number_of_aval_pict : elementi.stanje_slike--;

        document.querySelector(elementi.hero_klasa).style.backgroundImage = `url('Slike/Hero/${elementi.stanje_slike}.jpg')`;
    }
    if(eventObjId == elementi.right_hero_button){
        (elementi.stanje_slike == elementi.number_of_aval_pict) ? elementi.stanje_slike = 0 : elementi.stanje_slike++;
        document.querySelector(elementi.hero_klasa).style.backgroundImage = `url('Slike/Hero/${elementi.stanje_slike}.jpg')`;
    }
}

let intervalBackground = setInterval(changeHeroImg,5000,'right');
document.querySelector('.hero-content-2').addEventListener('click',(event)=>{
    clearInterval(intervalBackground);
    changeHeroImg(event.target.parentNode.id);
    intervalBackground = setInterval(changeHeroImg,5000,'right');
});
function windowState(){
    if(window.innerWidth < 1220){
        document.querySelector(elementi.input_form_btn).value = 'Send';
    }
    if(window.innerWidth > 1220){
        document.querySelector(elementi.input_form_btn).value = 'Send >';
    }
}
windowState();
window.addEventListener('resize',windowState);
/*Valuta je klasa u kojoj se menja tekstualni sadrzaj %value% u trenutno selektovanu valutu*/
for(let obj of Array.from(document.querySelectorAll('.valuta'))){
    obj.innerHTML = obj.innerHTML.replace('%value%','RSD');
}
/*currency je klasa za vrednosti valuta*/
/*Ubaciti span obj klase i njihov text content menjati u odnosu na selektovani option?*/