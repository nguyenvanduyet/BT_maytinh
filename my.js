function Addition(){
    let o1 =parseInt(document.getElementById('numberOne').value);
    let o2 =parseInt(document.getElementById('numberTwo').value);
    let tong = o1 + o2;
    document.getElementById('ketqua').innerHTML='ketqua'+ tong;
}
function Subtraction(){
    let o1=parseInt(document.getElementById('numberOne').value);
    let o2=parseInt(document.getElementById('numberTwo').value);
    let hieu = o1-o2;
    document.getElementById('ketqua').innerHTML='ketqua'+ hieu;

}
function Multiplication(){
    let o1=parseInt(document.getElementById('numberOne').value);
    let o2=parseInt(document.getElementById('numberTwo').value);
    let tich = o1*o2;
    document.getElementById('ketqua').innerHTML='ketqua'+ tich;
}
function Division(){
    let o1=parseInt(document.getElementById('numberOne').value);
    let o2=parseInt(document.getElementById('numberTwo').value);
    let thuong = o1/o2;
    document.getElementById('ketqua').innerHTML='ketqua'+ thuong;
}