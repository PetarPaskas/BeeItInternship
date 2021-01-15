/*---------------------------------
--------------DOM ELEMENTI----------
-------------------------------------*/
let elementi={
    number_of_aval_pict:2,
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
/*------FUNKCIJA RAZRESAVANJA HERO POZADINSKE SLIKE--------*/
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
/*------FUNKCIJA RAZRESAVANJA FORMA BUTTON SADRZAJA, brise se '>' na ispod 1220px--------*/
function windowState(){
    let batonObjekat = document.querySelector(elementi.input_form_btn);
    if(window.innerWidth < 1220){
        batonObjekat.value = batonObjekat.value.replace(' >','');
    }
    if(window.innerWidth > 1220){
        if(batonObjekat.value.indexOf('>') == -1)
        batonObjekat.value = batonObjekat.value+' >';
    }
}


/*---------------------------------
--------------LANGUAGE PACKS----------
-------------------------------------*/

let langPacks = {
    defaultCene:{
        Global: function(){
            let najmanji = this.London;
            console.log('Najmanji '+najmanji)
            for(let obj in this){
                console.log('Prvi red '+obj);
                if(this[obj] < najmanji){
                najmanji = this[obj];
                console.log('Drugi red '+this[obj]);
            }
            }
            return najmanji;
        },
        London:59,
        Hamburg:59,
        Alicante:59,
        Milano:59,
        
       
    },
    Srb:{
        numberFormatter: new Intl.NumberFormat('de-DE'),
        imageSrc:`url('Slike/lang/srb.png')`,
        valuta:'RSD',
        navTabList:['Info', 'O nama', 'Kontakt'],
        descriptionTitleBefore:'desc-title-srbLang',
        itemDescriptionTitles:['Podesavajuca sedista','Izobilje komfornosti','Besplatan prtljazni prostor', 'Prijateljska posada'],
        paymentTitleBefore:'payment-text-srbLang',
        usloviText:['Usluge & privatnost','Mapa sajta'],
        zasebniElementi:{
            heroTitle:`Uzivajte u vrelim <span class='breakHeroTitle'></span> letnjim ponudama`,
            heroTitleButton:'Rezervisi!',
            descriptionTitle:'Leti pametno, leti sa Green Earth!',
            offersTitle:'Pogledajte <span class="dest-title-presek"></span> nasu ponudu od',
            smtMainText:'Ne znas gde bi?',
            smtLinkText:'Dozvoli da te inspirisemo!',
            paymentTitle:'Putuj kako ti zelis',
            paymentInfoText:'Pregledajte sve usluge i nadogradnje',
            subscribeTitle:'Pretplati se na newsletter',
            socialMediaTitle:'Prati nas'
        },
        mailPlaceholder:'Unesi svoj mail',
        submitFormButton:'Posalji',
        fromDummyClass:'od',
        paymentItemLista:['Podesavajuca sedista','1 Rucni prtljag','Dodatni prostor za noge','Dodatni prtljag u kabini','Dodatni prtljag u skladistu','Pristup u lounge']
    },
    Eng:{
        numberFormatter: new Intl.NumberFormat('en'),
        imageSrc:`url('Slike/lang/eng.png')`,
        valuta:'£',
        navTabList:['Info','About us','Contact'],
        descriptionTitleBefore:'desc-title-engLang',
        itemDescriptionTitles: ['Reclinable seats', 'Plenty of legroom', 'Free cabin luggage', 'Friendly Crew'],
        paymentTitleBefore:'payment-text-engLang',
        usloviText:['Terms & privacy','Site map'],
        zasebniElementi:{
            heroTitle:`Enjoy our hot <span class='breakHeroTitle'></span> summer deals`,
            heroTitleButton:'Book now!',
            descriptionTitle:'Fly smart, fly with Green Earth!',
            paymentTitle:'Travel the way you want',
            paymentInfoText:'View all services & upgrades',
            offersTitle:`Showing <span class="dest-title-presek"></span> our offers from`,
            smtMainText:'Don\'t know where to go?',
            smtLinkText:'Let us inspire you!',
            subscribeTitle:'Subscribe to our newsletter',
            socialMediaTitle:'Follow us'
           
        },
        mailPlaceholder:'Enter your mail here',
        submitFormButton:'Send',
        fromDummyClass:'from',
        paymentItemLista:['Reclinable seats','1 Hand luggage','Extra leg room','Extra cabin luggage','Extra hold luggage','Lounge access']
        
    }
}
/*---------------------------------
--------------FUNKCIJA PROMENE JEZIKA----------
-------------------------------------*/
let changeLanguage = function(langPack,objCena){
    /*Promena slike*/
    document.querySelector('.nav-currency').style.backgroundImage = langPack.imageSrc;
    /*ucitavanje valute*/
    for(let obj of Array.from(document.querySelectorAll('.valuta'))){

        obj.innerHTML=langPack.valuta;
    }
    /*podesavanje cena*/
    for(let obj of Array.from(document.querySelectorAll('.currency'))){
        for(let cena in objCena){
            if(obj.id == 'Global'){
                if(langPack.valuta == 'RSD')
                obj.textContent = ' '+langPack.numberFormatter.format(objCena[cena]*132);
                else
                obj.textContent = ' '+langPack.numberFormatter.format(objCena[cena]);
            }
            if(cena == obj.id && obj.id != 'Global'){
                if(langPack.valuta == 'RSD')
                obj.textContent = ' '+langPack.numberFormatter.format(objCena[cena]*132);
                else
                obj.textContent = ' '+langPack.numberFormatter.format(objCena[cena]);

            }
        }
    }
    /*::before pseudoklasa tekstovi*/
    let descTitle = document.getElementById('descriptionTitle');
    for(let classListName of Array.from(descTitle.classList)){
        descTitle.classList.remove(classListName);
    }
    descTitle.classList.add('desc-title');
    descTitle.classList.add(langPack.descriptionTitleBefore);

    let paymentText = document.getElementById('paymentTextBefore');
    for(let classListName of Array.from(paymentText.classList)){
        paymentText.classList.remove(classListName);
    }
    paymentText.classList.add('payment-text');
    paymentText.classList.add(langPack.paymentTitleBefore)

     /*nizovi tekstovi item-description-title*/
     document.getElementById('itemDescriptionTitles-0').textContent = langPack.itemDescriptionTitles[0];
     document.getElementById('itemDescriptionTitles-1').textContent = langPack.itemDescriptionTitles[1];
     document.getElementById('itemDescriptionTitles-2').textContent = langPack.itemDescriptionTitles[2];
     document.getElementById('itemDescriptionTitles-3').textContent = langPack.itemDescriptionTitles[3];
    /*nizovi tekstovi navTabList*/
     document.getElementById('navTabList-0').textContent = langPack.navTabList[0];
     document.getElementById('navTabList-1').textContent = langPack.navTabList[1];
     document.getElementById('navTabList-2').textContent = langPack.navTabList[2];
    /*nizovi tekstovi usloviText*/
    document.getElementById('usloviText-0').textContent = langPack.usloviText[0];
    document.getElementById('usloviText-1').textContent = langPack.usloviText[1];    

    /*Sada svi zasebni elementi*/
    for(let idString in langPack.zasebniElementi){
        document.getElementById(idString).innerHTML = langPack.zasebniElementi[idString];
    }
    /*Sada value buttoni i tako te male stvari*/
    document.getElementById('submitFormButton').value = langPack.submitFormButton;
    document.getElementById('mailPlaceholder').placeholder = langPack.mailPlaceholder;
    
    /*Menjanje svih 'from'*/
    let fromovi = document.getElementsByClassName('fromDummyClass');
    for(let fromObj of Array.from(fromovi)){
        fromObj.textContent = langPack.fromDummyClass;
    }

    /*Menjanje svih destination butona*/
    let destButtonSvi = document.querySelectorAll('.dest-button button h1');
    for(let destBatoni of Array.from(destButtonSvi)){
        destBatoni.innerHTML = langPack.zasebniElementi.heroTitleButton.replace('!',' &#65310;');
    }

    /*Menjanje sadrzaja svih paketa regular/premium/plus*/
    for(let payLiItem of document.getElementsByClassName('paymentItem-0')){
        payLiItem.textContent = langPack.paymentItemLista[0];
        if(langPack.valuta == 'RSD'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb') <=0)
            payLiItem.classList.add('activeSrb');
        }
        if(langPack.valuta == '£'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb')>=0)
            payLiItem.classList.remove('activeSrb');
        }
        
    }
    for(let payLiItem of document.getElementsByClassName('paymentItem-1')){
        payLiItem.textContent = langPack.paymentItemLista[1];
        if(langPack.valuta == 'RSD'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb') <=0)
            payLiItem.classList.add('activeSrb');
        }
        if(langPack.valuta == '£'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb')>=0)
            payLiItem.classList.remove('activeSrb');
        }
    }
    for(let payLiItem of document.getElementsByClassName('paymentItem-2')){
        payLiItem.textContent = langPack.paymentItemLista[2];
        if(langPack.valuta == 'RSD'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb') <=0)
            payLiItem.classList.add('activeSrb');
        }
        if(langPack.valuta == '£'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb')>=0)
            payLiItem.classList.remove('activeSrb');
        }
    }
    for(let payLiItem of document.getElementsByClassName('paymentItem-3')){
        payLiItem.textContent = langPack.paymentItemLista[3];
        if(langPack.valuta == 'RSD'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb') <=0)
            payLiItem.classList.add('activeSrb');
        }
        if(langPack.valuta == '£'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb')>=0)
            payLiItem.classList.remove('activeSrb');
        }
    }
    for(let payLiItem of document.getElementsByClassName('paymentItem-4')){
        payLiItem.textContent = langPack.paymentItemLista[4];
        if(langPack.valuta == 'RSD'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb') <=0)
            payLiItem.classList.add('activeSrb');
        }
        if(langPack.valuta == '£'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb')>=0)
            payLiItem.classList.remove('activeSrb');
        }
    }
    for(let payLiItem of document.getElementsByClassName('paymentItem-5')){
        payLiItem.textContent = langPack.paymentItemLista[5];
        if(langPack.valuta == 'RSD'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb') <=0)
            payLiItem.classList.add('activeSrb');
        }
        if(langPack.valuta == '£'){
            if(Array.from(payLiItem.classList).findIndex(el=> el == 'activeSrb')>=0)
            payLiItem.classList.remove('activeSrb');
        }
    }

}
/*---------------------------------
--------------RAZRESAVANJE PAYMENT-TABS BUTTONA----------
-------------------------------------*/
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


/*------FUNKCIJA RAZRESAVANJA TAJMERA HERO POZADINSKE SLIKE ---------*/
let intervalBackground = setInterval(changeHeroImg,5000,'right');
document.querySelector('.hero-content-2').addEventListener('click',(event)=>{
    clearInterval(intervalBackground);
    changeHeroImg(event.target.parentNode.id);
    intervalBackground = setInterval(changeHeroImg,5000,'right');
});
/*---------IMPLEMENTACIJA FORM BUTTON VALUE RESENJA--------------*/

window.addEventListener('resize',windowState);


/*--------------POZIVANJE FUNKCIJE MENJANJA SADRZAJA TEKSTA------------------*/ 
window.addEventListener('load',()=>{
    changeLanguage(langPacks.Eng,langPacks.defaultCene);
    windowState();
});
document.getElementById('valutaOption').addEventListener('change',()=>{
    if(document.getElementById('valutaOption').value =='eng')
    changeLanguage(langPacks.Eng,langPacks.defaultCene);
    if(document.getElementById('valutaOption').value =='srb')
    changeLanguage(langPacks.Srb,langPacks.defaultCene);
});
