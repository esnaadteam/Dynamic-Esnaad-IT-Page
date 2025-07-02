 // إدارة الوضع الليلي
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        let darkMode = false;

        if (localStorage.getItem('darkMode')) {
            darkMode = localStorage.getItem('darkMode') === 'enabled';
            updateTheme();
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            darkMode = true;
            updateTheme();
        }

        themeToggle.addEventListener('click', () => {
            darkMode = !darkMode;
            localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
            updateTheme();
        });

        function updateTheme() {
            if (darkMode) {
                body.classList.add('dark-mode');
                document.documentElement.style.setProperty('--background', 'var(--dark-bg)');
                document.documentElement.style.setProperty('--text', 'var(--dark-text)');
                document.documentElement.style.setProperty('--card', 'var(--dark-card)');
                document.documentElement.style.setProperty('--nav', 'var(--dark-nav)');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                body.classList.remove('dark-mode');
                document.documentElement.style.setProperty('--background', 'var(--light-bg)');
                document.documentElement.style.setProperty('--text', 'var(--light-text)');
                document.documentElement.style.setProperty('--card', 'var(--light-card)');
                document.documentElement.style.setProperty('--nav', 'var(--light-nav)');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }

        // القائمة المتنقلة
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');

        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // تصفية المشاريع
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                });
            });
        });

        // تبديل تبويبات الأهداف
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // تأثيرات التمرير
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function checkScroll() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

        // التمرير السلس
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });
        // تأثيرات إضافية
        function initAnimations() {
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach(el => {
                el.style.animationDelay = `${Math.random() * 2}s`;
            });
            
            const pulseElements = document.querySelectorAll('.pulse');
            pulseElements.forEach(el => {
                el.style.animationDelay = `${Math.random() * 2}s`;
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            initAnimations();
        });
//الاحصائيات
let volunters = 23;
let visitor;

document.getElementById("visitors").textContent = volunters;