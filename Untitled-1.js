const binds = [...document.querySelectorAll('.bind')];
const listekeycode = binds.map(touche=> touche.dataset.key)
const screen = document.querySelector('.screen');
const 𝝿 = 3.14;


document.addEventListener('keydown', (e) => {
    const val = e.keyCode.toString();
    calculer(val);

})
document.addEventListener('click', (e) => {
    const val = e.target.dataset.key;
    calculer(val);
})


const calculer = (val) => {
    if(listekeycode.includes(val)){
        switch(val){
            case '8': 
                screen.textContent = "";break;
            case '13': 
                const calc = eval(screen.textContent);
                screen.textContent = calc;break; 
                           
            case  '68':    
            var a= prompt("enter a = ");
            var b= prompt("enter b = ");
            var c= prompt("enter c = ");
        
            d=((b*b)-(4*a*c));
            if(d==0){
                    var result= -b/2*a;
                    screen.textContent = "x = " + result;
                }
            else if (d>0){
                var r1=(-b-Math.sqrt(d)/2*a);
                var r2=(-b+Math.sqrt(d)/2*a);
                screen.textContent= "x1 = "+r1 + "  ||  x2 = "+r2;
            }
            else{
                screen.textContent="no value cause delta = " +d+ " <0";
            } break;  
            default:
                const i = listekeycode.indexOf(val); 
                const touche = binds[i]; 
                screen.textContent += touche.innerHTML;        
        }
    }
}
window.addEventListener('error', (e) => {
    screen.textContent="error!";   
})