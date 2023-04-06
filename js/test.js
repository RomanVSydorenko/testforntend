/*function photosTravelers(photos_Travelers){
 var travelers = document.getElementsByClassName('photos_Travelers')[0];
 for (var i = 0; photos_Travelers.length > i; i++) {
    travelers.insertAdjacentHTML('beforeend',`<img src="img/`+photos_Travelers[i].imgTravelers+`" alt="">`);
}}*/

photosTravelers = photos_Travelers=>{ var travelers = document.getElementsByClassName('photos_Travelers')[0];
for (var i = 0; photos_Travelers.length > i; i++) {
travelers.insertAdjacentHTML('beforeend',`<img src="img/`+photos_Travelers[i].imgTravelers+`" alt="">`);}
};
photosTravelers(photos_Travelers);
