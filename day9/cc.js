var url = "https://api.exchangeratesapi.io/latest?base="

async function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    let response = await fetch(`${url}${base}`,{method:'GET'})
    let data = await response.json()
    final = data.rates;
    final= (final[out])*Number(amount)
    var result =`Converted value of ${amount} ${base} is ${final} ${out}`;
    document.getElementById('converted').innerText=result;
}



//es5
/*
function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) =>  response.json())
    .then((data) => {
        final = data.rates;
        final= (final[out])*Number(amount)
        var result =`Converted value of ${amount} ${base} is ${final} ${out}`;
        document.getElementById('converted').innerText=result;
    })
    .catch((err) => {
        console.log(err)
    })
}*/