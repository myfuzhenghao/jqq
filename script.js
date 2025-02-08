// 这里可以添加轮播自动播放和手动切换的功能
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'left', 'right');
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                slide.classList.add('left');
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add('right');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    setInterval(nextSlide, 2500); // 每3秒切换一次
    updateSlides();

    // AI聊天对话框功能
    const chatboxInput = document.querySelector('.chatbox-input');
    const chatboxMessages = document.querySelector('.chatbox-messages');
    const chatboxSendBtn = document.querySelector('.chatbox-send-btn');
    const chatIcon = document.getElementById('chatIcon');
    const chatbox = document.getElementById('chatbox');

    chatIcon.addEventListener('click', function() {
        if (chatbox.style.display === 'none') {
            chatbox.style.display = 'flex';
        } else {
            chatbox.style.display = 'none';
        }
    });

    function sendMessage() {
        if (chatboxInput.value.trim() !== '') {
            const userMessage = document.createElement('div');
            userMessage.textContent = chatboxInput.value;
            userMessage.className = 'user-message';
            chatboxMessages.appendChild(userMessage);

            // 调用智能体API
            // fetch('https://api.example.com/agent/7462997359527002150', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer pat_AB6kAQJjCms0L1Qpk1A6ts9vLcNhltARPLmM6JIiz8T7o0BOPKQ74DguAZtHX21Q'
            //     },
            //     body: JSON.stringify({ message: chatboxInput.value })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     const aiMessage = document.createElement('div');
            //     aiMessage.textContent = '青青仙女: 我还没有找到合适的AI接口，开发人员正在努力中，请稍后再试';
            //     aiMessage.className = 'ai-message';
            //     chatboxMessages.appendChild(aiMessage);
            //     chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            // });
            const aiMessage = document.createElement('div');
                aiMessage.textContent = '青青仙女: 我还没有找到合适的AI接口，开发人员正在努力中，请稍后再试';
                aiMessage.className = 'ai-message';
                chatboxMessages.appendChild(aiMessage);
                chatboxMessages.scrollTop = chatboxMessages.scrollHeight;

            chatboxInput.value = '';
        }
    }

    chatboxInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    chatboxSendBtn.addEventListener('click', sendMessage);

    // 模态框功能
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // 动态加载作品集图片
    const folders = ['one', 'two', 'three'];
    folders.forEach((folder, index) => {
        const modalGallery = document.querySelector(`#modal${index + 1} .modal-gallery`);
        for (let i = 1; i <= 9; i++) { // 假张设每个文件夹有9图片
            console.log(`imgs/${folder}`);
            const img = document.createElement('img');
            img.src = `imgs/${folder}/${i}.jpg`;
            img.alt = `作品${index + 1}图片${i}`;
            modalGallery.appendChild(img);
        }
    });
}); 