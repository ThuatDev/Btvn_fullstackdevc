// Tạo một biến text có giá trị là họ tên đầy đủ của bạn , hãy cắt ra họ và tên của bạn và nối 2 giá trị đó lại với nhau và alert ra nó
// bt:1
// var text = "Phan Trung Thuat";
// alert(text.slice(0, 5) + text.slice(11, 17));

// bt: 2;
// Làm thế nào để làm tròn 6,35 đúng cách?

// var a = 6.35;
// alert(a.toFixed(1));

// alert(Math.floor(a * 10) / 10);

// bt: 3 Hãy dùng hàm prompt để yêu cầu người dùng  nhập vào một chuỗi  , kiểm tra xem nếu độ dài của chuỗi đó lớn hơn 10 thì yêu cầu nhập lại còn nếu mà nhỏ hơn 10 thì alert ra chuỗi đó ( nếu người dùng không nhập gì thì phải yêu cầu người dùng đến khi nào nhập mới thôi )
// var text = prompt("nhap chuoi");
// while (text.length > 10) {
//   text = prompt("nhap lai chuoi");
// }
// alert(text);

// bt4
// Hãy dùng hàm prompt để yêu cầu người dùng nhập vào một chuỗi  , kiểm tra xem chuỗi đó có tồn tại kí tự là số hay không , nếu có số thì hãy tính tổng các số đó và hiện lên bằng hàm alert còn nếu không có số thì hãy alert ra chữ "chuỗi không có số" ( nếu người dùng không nhập gì thì phải yêu cầu người dùng đến khi nào nhập mới thôi )

// var text = prompt("nhap chuoi");
// var sum = 0;

// while (text.length == 0) {
//   text = prompt("nhap lai chuoi");
// }
// for (var i = 0; i < text.length; i++) {
//   if (text[i] >= 0 && text[i] <= 9) {
//     if (typeof text[i] == "string") {
//       sum += Number(text[i]);
//     }
//   }
// }
// if (sum == 0) {
//   alert("chuỗi không có số");
// } else {
//   alert(`tổng các số trong chuỗi là ${sum}`);
// }

// bt: 5
//  Hãy dùng hàm prompt để yêu cầu người dùng nhập vào  một chuỗi , kiểm tra xem chuỗi đó có chứa tất cả là số hay không , nếu tất là số thì mới tính tổng các số đấy và alert ra , nếu tồn tại kí tự thì alert ra "tồn tại kí tự trong chuỗi " ( nếu người dùng không nhập gì thì phải yêu cầu người dùng đến khi nào nhập mới thôi )

var text = prompt("nhap chuoi");
var sum = 0;

//  nếu người dùng không nhập gì thì phải yêu cầu người dùng đến khi nào nhập mới thôi
while (text.length == 0) {
  text = prompt("nhap lai chuoi");
}

for (var i = 0; i < text.length; i++) {
  if (text[i] >= 0 && text[i] <= 9) {
    if (typeof text[i] == "string") {
      sum += Number(text[i]);
    }
  } else {
    alert("tồn tại kí tự trong chuỗi");
    break;
  }
}
if (sum != 0) {
  alert(`tổng các số trong chuỗi là : ${sum}`);
}
