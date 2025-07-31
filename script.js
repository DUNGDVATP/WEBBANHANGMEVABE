document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử của modal
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.modal-close-btn');

    // Lấy tất cả các nút "Xem chi tiết"
    const viewButtons = document.querySelectorAll('.view-details-btn');

    // Gắn sự kiện click cho mỗi nút
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy thẻ product-card cha gần nhất
            const card = this.closest('.product-card');

            // Lấy dữ liệu từ các thuộc tính data-*
            const name = card.dataset.name;
            const price = card.dataset.price;
            const img = card.dataset.img;
            const desc = card.dataset.desc;

            // Điền dữ liệu vào modal
            modalName.textContent = name;
            modalPrice.textContent = price;
            modalImg.src = img;
            modalDesc.textContent = desc;

            // Hiển thị modal
            modal.classList.remove('modal-hidden');
        });
    });

    // Hàm để đóng modal
    function closeModal() {
        modal.classList.add('modal-hidden');
    }

    // Gắn sự kiện click cho nút đóng
    closeBtn.addEventListener('click', closeModal);

    // Gắn sự kiện click cho lớp phủ nền (để đóng khi nhấn ra ngoài)
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
