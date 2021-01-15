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

let langPacks = {
    defaultCene:{
        London:59,
        Hamburg:59,
        Alicante:59,
        Milano:59,
        Global: function(){
            let najmanji = this.London;
            for(let obj in this){
                if(this[obj] < najmanji)
                najmanji = this[obj];
            }
            return najmanji;
        }
    },
    Srb:{
        valuta:'RSD',
        navTabList:['Info', 'O nama', 'Kontakt'],
        heroTitle:`Uzivajte u vrelim <span class='breakHeroTitle'></span> letnjim ponudama`,
        heroTitleButton:'Rezervisi!',
        descriptionTitleBefore:'Niska cena ne znaci i jeftino',
        descriptionTitle:'Leti pametno, leti sa Green Earth!',
        itemDescriptionTitles:['Podesavajuca sedista','Izobilje komfornosti','Besplatan prtljazni prostor', 'Prijateljska posada'],
        offersTitle:'Pogledajte nasu ponudu od',
        smtMainText:'Ne znas gde bi?',
        smtLinkText:'Dozvoli da te inspirisemo!',
        paymentTitleBefore:'Kvalitet iznutra',
        paymentTitle:'Putuj kako ti zelis',
        paymentInfoText:'Pregledajte sve usluge i nadogradnje',
        subscribeTitle:'Pretplati se na newsletter',
        socialMediTitle:'Prati nas',
        usloviText:['Usluge & privatnost','Mapa sajta']
    },
    Eng:{
        valuta:'£',
        navTabList:['Info','About us','Contact'],
        heroTitle:`Enjoy our hot <span class='breakHeroTitle'></span> summer deals`,
        heroTitleButton:'Book now!',
        descriptionTitleBefore:'Cheap price doesn\'t mean cheap',
        descriptionTitle:'Fly smart, fly with Green Earth!',
        itemDescriptionTitles: ['Reclinable seats', 'Plenty of legroom', 'Free cabin luggage', 'Friendly Crew'],
        offersTitle:'Showing our offers from',
        smtMainText:'Don\'t know where to go?',
        smtLinkText:'Let us inspire you!',
        paymentTitleBefore:'Quality from the inside',
        paymentTitle:'Travel the way you want',
        paymentInfoText:'View all services & upgrades',
        subscribeTitle:'Subscribe to our newsletter',
        socialMediTitle:'Follow us',
        usloviText:['Terms & privacy','Site map']
    }
}

function changeLanguage(langPack,objCena){
    for(let obj of Array.from(document.querySelectorAll('.valuta'))){
        obj.textContent=langPack.valuta;
    }
    for(let obj of Array.from(document.querySelectorAll('.currency'))){
        for(let cena in objCena){
            if(cena == obj.id){
                obj.textContent = objCena[cena];
            }
        }
    }
    
}
changeLanguage(langPacks.Eng,langPacks.defaultCene);