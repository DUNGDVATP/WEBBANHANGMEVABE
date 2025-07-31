// Mã JavaScript sẽ được thêm ở đây trong tương lai
// Ví dụ: Hiển thị thông báo khi người dùng nhấn nút "Thêm vào giỏ"

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product-card button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Sản phẩm đã được thêm vào giỏ hàng! (Chức năng đang phát triển)');
        });
    });
});