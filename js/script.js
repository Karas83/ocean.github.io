document.addEventListener('DOMContentLoaded', function () {
    const btn1 = document.querySelector('#btn1');
    const modal1 = new bootstrap.Modal(document.querySelector('#myModal1'));
    btn1.addEventListener('click', function () {
        modal1.show();
    });
    const btn2 = document.querySelector('#btn2');
    const modal2 = new bootstrap.Modal(document.querySelector('#myModal2'));
    btn2.addEventListener('click', function () {
        modal2.show();
    });
    const btn3 = document.querySelector('#btn3');
    const modal3 = new bootstrap.Modal(document.querySelector('#myModal3'));
    btn3.addEventListener('click', function () {
        modal3.show();
    });
    $("#myModal1, #myModal2, #myModal3").on('hidden.bs.modal', function (e) {
        alert("Спасибо, ожидайте звонок оператора!!!");
    });

});

