// Bài Tập 1: Tính Tiền Lương Nhân Viên
// B1: Khai báo biến
// Các biến khai báo gồm:
//  - Lương 1 ngày = 100.000 ( cố định lương theo đề bài)
//  - soNgayLam: là tổng số ngày làm ( nhập dữ liệu)
// - resuilt1: là kết quả tính bài tập 1\
// B2: Hướng Xử Lí
function tinhLuong() {
    const luongMotNgay = 100000;
    var soNgayLam = +document.getElementById('soNgayLam').value;
    // console.log('soNgayLam: ', soNgayLam);
    var resuilt1 = luongMotNgay * soNgayLam;
    // console.log('resuilt1: ', resuilt1);

    // B3: Xuất dữ liệu kết quả
    var resuilt1HTML = document.getElementById('resuilt1');
    resuilt1HTML.innerHTML = `
    <p>Tổng Lương nhận được: ${resuilt1} Đồng</p>
    `;
}
// Bài Tập 2: Tính Giá Trị Trung Bình
// B1: Khai báo biến
// Các biến khai báo gồm:
//  -number1, number2, number3, number4, number5: Tương ứng lần lượt là 5 số thực khách hàng nhập
//  - resuilt2: là kết quả bài tập 2
// B2: Hướng xử lí
function tinhTrungBinh() {
    var number1 = +document.getElementById('number1').value;
    // console.log('number1: ', number1);
    var number2 = +document.getElementById('number2').value;
    // console.log('number2: ', number2);
    var number3 = +document.getElementById('number3').value;
    // console.log('number3: ', number3);
    var number4 = +document.getElementById('number4').value;
    // console.log('number4: ', number4);
    var number5 = +document.getElementById('number5').value;
    // console.log('number5: ', number5);
    var resuilt2 = (number1 + number2 + number3 + number4 + number5) / 5;
    // console.log('resuilt2: ', resuilt2);
    // B3: Xuất dữ liệu kết quả
    var resuilt2HTML = document.getElementById('resuilt2');
    resuilt2HTML.innerHTML = `
    <p> Tổng Trung Bình 5 Số thực là: ${resuilt2}</p>
    `;

}
// Bài Tập 3: Quy Đổi Tiền Tệ
// B1: Khai báo biến
// Các biến khai báo gồm:
//  - Giá 1 USD = 23.500 VND ( cố định lương theo đề bài)
//  - moneyUSD: là số tiền USD có ( nhập dữ liệu)
// - resuilt3: là kết quả tính bài tập 3\
// B2: Hướng Xử Lí
function quyDoi() {
    const giaUSD = 23500;
    var moneyUSD = +document.getElementById('moneyUSD').value;
    // console.log('moneyUSD: ', moneyUSD);
    var resuilt3 = giaUSD * moneyUSD;
    // console.log('resuilt3: ', resuilt3);
    // B3: Xuất dữ liệu kết quả
    var resuilt3HTML = document.getElementById('resuilt3');
    resuilt3HTML.innerHTML = `
       <p>Đổi Ra Được: ${resuilt3} VND</p>
       `;
}
// Bài Tập 4: Tính Diện Tích, Chu Vi Hình Chữ Nhật
// B1: Khai báo biến
// Các biến khai báo gồm: 
// - Chiều Dài(cD) chiều rộng(cR), chu vi(cV), diện tích(dT)
// B2: Hướng Xử Lí
function tinhToan() {
    var cD = +document.getElementById('cD').value;
    // console.log('cD: ', cD);
    var cR = +document.getElementById('cR').value;
    // console.log('cR: ', cR);
    var cV = (cD + cR) * 2;
    // console.log('cV: ', cV);
    var dT = cD * cR;
    // console.log('dT: ', dT);
    // B3: Xuất dữ liệu kết quả
    var resuiltcVHTML = document.getElementById('resuiltcV');
    resuiltcVHTML.innerHTML = `
       <p>Chu vi hình Chữ Nhật là: ${cV} cm</p>
       `;
    var resuiltdTHTML = document.getElementById('resuiltdT');
    resuiltdTHTML.innerHTML = `
       <p>Diện Tích hình Chữ Nhật là: ${dT} cm<sup>2</sup></p>
       `;
}
// Bài Tập 5: Tính tổng 2 ký số
// B1: Khai báo biến
// // Các biến khai báo gồm: 
//  - Số tự nhiên 2 ký số (numberBai5)
//  - unit: hàng đơn vị
//  -ten: hàng chục
//  -sum: công thức tổng 2 ký số
// B2: Hướng xử lí
function sum() {
    var numberBai5 = +document.getElementById('numberBai5').value;
    // console.log('numberBai5: ', numberBai5);
    var unit = numberBai5 % 10;
    // console.log('unit: ', unit);
    var ten = Math.floor(numberBai5 % 100 / 10);
    // console.log('ten: ', ten);
    var sum = unit + ten;
    // console.log('sum: ', sum);
    // B3: Xuất dữ liệu kết quả
    var resuilt5HTML = document.getElementById('resuilt5');
    resuilt5HTML.innerHTML = `
       <p>Tổng 2 ký số là: ${sum}</p>
       `;
}