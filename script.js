function insert (num) {
    document.getElementById('result').innerHTML += num;
}

const clean = () => document.getElementById('result').innerHTML = '';

const back = () => {
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

const calcular = () => {
    let res = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = eval(res);
}