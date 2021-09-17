$('document').ready(function(){
function romanize (num) {
    if (!+num)
        return false;
    var	digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


$('.tx-tfm').click((e)=>{
   var integer=$('#integer').val();
    $('#answer-text').html("The roman value of "+integer+" is "+"<strong>"+romanize(integer)+"</strong>")
})
});