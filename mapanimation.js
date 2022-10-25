mapboxgl.accessToken = 'pk.eyJ1IjoiY29keWNveWxlODgiLCJhIjoiY2w5MjQ3YzE0MDB2aDNvc2dwbHRwcGl2ZiJ9.ReEkVlsykx6NtY5bJBh_6w';

  const busStops = [
[-117.262911,47.653592],//[VTC9,4419,Valley Transit Center Bay 9,0 ,47.653592,-117.262911,,,,,,0],
[-117.262034,47.657162],//[SPRUNIWF,2964,Sprague @ University,E SPRAGUE AV & N UNIVERSITY RD,47.657107,-117.262034,,,,,,0],
[-117.26739,47.657162],//[SPRFELWF,2966,Sprague @ Felts,E SPRAGUE AV & N FELTS RD,47.657162,-117.26739,,,,,,0],
[-117.270589,47.657157],//[SPRWALWN,2967,Sprague @ Walnut,E SPRAGUE AV & N WALNUT RD,47.657157,-117.270589,,,,,,0],
[-117.275163,47.657144],//[PRFARWF,2968,Sprague @ Farr (Winco),E SPRAGUE AV & N FARR RD,47.657144,-117.275163,,,,,,0],
[-117.282256, 47.657064],//[SPRMULWF,2970,Sprague @ Mullan,E SPRAGUE AV & N MULLAN RD,47.657064,-117.282256,,,,,,0],
[-117.287497,47.657031],//[SP8722W,2972,Sprague @ 8722 E,E SPRAGUE AV & E 8722,47.657031,-117.287497,,,,,,0],
[-117.291476,47.657008],//[SPRBESWN,2973,Sprague @ Bessie,E SPRAGUE AV & N BESSIE RD,47.657008,-117.291476,,,,,,0],
[-117.295085,47.657048],//[SPRVISWF,2974,Sprague @ Vista,E SPRAGUE AV & N VISTA RD,47.657002,-117.295085,,,,,,0],
[-117.304788,47.657048],//[SPRPARWF,2976,Sprague @ Park,E SPRAGUE AV & N PARK RD,47.657048,-117.304788,,,,,,0],
[-117.309481,47.657052],//[SPRCOLWC,2978,Sprague @ Coleman,E SPRAGUE AV & S COLEMAN RD,47.657052,-117.309481,,,,,,0],
[-117.314672,47.657039],//[SPRTHEWN,2980,Sprague @ Thierman,E SPRAGUE AV & N THIERMAN RD,47.657039,-117.314672,,,,,,0],
[-117.326362,47.657193],//[SPRFANWF,2982,Sprague @ Fancher,E SPRAGUE AV & N FANCHER RD,47.657193,-117.326362,,,,,,0],
[-117.329786,47.657223],//[SPRHOWWF,2983,Sprague @ Howe,E SPRAGUE AV & S HOWE RD,47.657223,-117.329786,,,,,,0],
[-117.334875,47.657245],//[COSTCOW,2985,Sprague @ Light Entrance to Costco,E SPRAGUE AV & S MCKINNON RD,47.657245,-117.334875,,,,,,0],
[-117.341722,47.657288],//[SPRCUSWC,2987,Sprague @ Custer,E SPRAGUE AV & S CUSTER RD,47.657288,-117.341722,,,,,,0],
[-117.346601,47.657379],//[SPRHAVWN,2989,Sprague @ Havana,E SPRAGUE AV & N HAVANA ST,47.657379,-117.346601,,,,,,0],
[-117.352894,47.657383],//[SPRJULWN,2991,Sprague @ Julia,E SPRAGUE AV & N JULIA ST,47.657383,-117.352894,,,,,,0],
[-117.357124,47.657385],//[SPFREWN,2993,Sprague @ Freya,E SPRAGUE AV & N FREYA ST,47.657385,-117.357124,,,,,,0],
[-117.363628,47.657407],//[SPRGREWN,2995,Sprague @ Greene,E SPRAGUE AV & N GREENE ST,47.657407,-117.363628,,,,,,0],
[-117.366696,47.657386],//[SPRHAWN,4200,Sprague @ Haven,E SPRAGUE AV & N HAVEN ST,47.657386,-117.366696,,,,,,0],
[-117.370568,47.65741],//[SPRLACWN,2997,Sprague @ Lacey,E SPRAGUE AV & N LACEY ST,47.65741,-117.370568,,,,,,0],
[-117.375103,47.657367],//[SPRALTWN,2998,Sprague @ Altamont,E SPRAGUE AV & N ALTAMONT ST,47.657367,-117.375103,,,,,,0],
[-117.381619,47.657331],//[SPRNAPWF,3000,Sprague @ Napa,E SPRAGUE AV & N NAPA ST,47.657331,-117.381619,,,,,,0],
[-117.381619,47.657331],//[SPRNAPWF,3000,Sprague @ Napa,E SPRAGUE AV & N NAPA ST,47.657331,-117.381619,,,,,,0],
[-117.38761,47.657306],//[SPRHELWF,3002,Sprague @ Helena,E SPRAGUE AV & N HELENA ST,47.657306,-117.38761,,,,,,0],
[-117.393135,47.657265],//[SPRIVOWF,3003,Sprague @ Ivory,E SPRAGUE AV & N SPRAGUE WY,47.65729,-117.393135,,,,,,0],
[-117.397954,47.657265],//[SPRPRIWN,3004,Sprague @ Pride Prep,E SPRAGUE AV,47.657265,-117.397954,,,,,,0],
[-117.403591,47.657421],//[SPSHEWN,3007,Sprague @ Sherman,E SPRAGUE AV & S SHERMAN ST,47.657421,-117.403591,,,,,,0],
[-117.409908,47.65734],//[SPRPINWM,4458,Sprague @ Pine,E SPRAGUE AV & S PINE ST,47.65734,-117.409908,,,,,,0],
[-117.413572,47.657314],//[SPRBROWF,1952,Sprague @ Browne,W SPRAGUE AV & N BROWNE ST SB,47.657314,-117.413572,,,,,,0],
[-117.415859,47.657323],//[SPRBERWN,1953,Sprague @ Bernard,W SPRAGUE AV & N BERNARD ST,47.657323,-117.415859,,,,,,0],
[-117.419362,47.65726],//[SPRSTEWN,1954,Sprague @ Stevens,W SPRAGUE AV WB & N STEVENS ST SB,47.65726,-117.419362,,,,,,0],
[-117.423141,47.657279],//[PLZBAY13,4578,Plaza Bay 13,W SPRAGUE AV,47.657279,-117.423141,,,,,,0],
];
  
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-117.341722,47.657288],
      zoom: 12.5
  });

for(let i=0; i < busStops.length; i++){
    var stopsMarkers = new mapboxgl.Marker({
      color:"#77aaff"})
    .setLngLat(busStops[i]).addTo(map);
}  
var marker = new mapboxgl.Marker({
    color: "#000000"})
    .setLngLat(busStops[0]).addTo(map);

let counter = 0;

function move(){
  setTimeout(()=>{
    if (counter >= 2*busStops.length){return;}; 
    if(counter < busStops.length){
      marker.setLngLat(busStops[counter]);
      console.log(counter);
    }
    
    if (counter > (busStops.length)){
      marker.setLngLat(busStops[(busStops.length-Math.abs(busStops.length-counter))]);
      console.log(counter);
    }
    counter++;
    move();
  },1000); 
}
