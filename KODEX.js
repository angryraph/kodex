

var Cripted = 'NTMuNjQ0Mzg0NjA4Mw=='
const EN1 = Number(window.atob( Cripted ));
EN2 = EN1 /2;
SPW = (EN1 * EN2 /2).toFixed(2);

function getSum(total,num) {return total + num};
function val(yazı,harf,değer){ rgxp = new RegExp(değer,'gim'); text = yazı.toLowerCase();
if (text.indexOf(harf) > -1){ sonuc = text.split(harf).join(değer).match(rgxp).map(Number).reduce(getSum) }else{ sonuc=0 };
return sonuc;}

String.prototype.abjad = function() {
a = val(this,'a','2'); b = val(this,'b','1'); c = val(this,'c','3'); ç = val(this,'ç','4'); d = val(this,'d','5'); etoile = val(this,'*','30'); cinq = val(this,'5','37'); hash = val(this,'#','21');
e = val(this,'e','6'); f = val(this,'f','12'); g = val(this,'g','8'); ğ = val(this,'ğ','7'); h = val(this,'h','10'); up = val(this,'^','31'); six = val(this,'6','49'); at = val(this,'@','73');
ı = val(this,'ı','11'); i = val(this,'i','9'); j = val(this,'j','13'); k = val(this,'k','29'); l = val(this,'l','15'); un = val(this,'1','9'); sept = val(this,'7','23'); pur = val(this,'%','79');
m = val(this,'m','16'); n = val(this,'n','27'); o = val(this,'o','19'); ö = val(this,'ö','14'); p = val(this,'p','20'); deux = val(this,'2','8'); huite = val(this,'8','51'); excl = val(this,'!','4');
r = val(this,'r','26'); s = val(this,'s','22'); ş = val(this,'ş','63'); t = val(this,'t','24'); u = val(this,'u','25'); trois = val(this,'3','6'); neuf = val(this,'9','44'); inter = val(this,'?','25');
ü = val(this,'ü','21'); v = val(this,'v','18'); y = val(this,'y','28'); z = val(this,'z','17'); dollars = val(this,'$','29'); quatre = val(this,'4','5'); zero = val(this,'0','62'); 
return (((a+b+c+ç+d+e+f+g+ğ+h+ı+i+j+k+l+m+n+o+ö+p+r+s+ş+t+u+ü+v+y+z+dollars+etoile+up+un+deux+trois+quatre+cinq+six+sept+huite+neuf+zero+hash+at+pur+excl+inter+(text.length*0.5281)*100)*0.689999)-26).toFixed(2);
};

function Send(){
    if (text != null) {
        if (text.length > 3) {
    

    if ( document.getElementById("Code").innerHTML == SPW) {
       // window.open(Pagelink, "_self");

   
        window.open(window.atob("aHR0cDovLzQwNC5teXN0ZXJ5cWMuY2x1Yi9zZWNyZXR3b3Jk"), "_self")
        
}else{1
    console.log("404 Error")
    window.open("http://404.mysteryqc.club", "_self");
    
}
}}}

Ask();

function Ask() {	
    
    text = document.getElementById("entry").value;
    
    if (text != null) {
        if (text.length > 3) {
    document.getElementById("Code").innerHTML = text.abjad();
}else{
    document.getElementById("Code").innerHTML = "KODEX";
}
}else{
    document.getElementById("Code").innerHTML = "KODEX";
}

    
setTimeout(Ask, 100);
}







