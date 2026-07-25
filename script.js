// بيانات الدخول الافتراضية للسيرفر (يقدر يغيرها العميل لاحقاً)
let currentAdminUser = "admin";
let currentAdminPass = "admin";

let isUploaded = false; 

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. النزول التلقائي لسيكشن الداونلود
    const navDownload = document.getElementById('nav-download');
    if (navDownload) {
        navDownload.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('download-sec').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. التحكم في فتح وقفل نافذة تسجيل الدخول المموهة
    const loginTriggerBtn = document.getElementById('login-trigger-btn');
    const loginModal = document.getElementById('loginModal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (loginTriggerBtn && loginModal) {
        loginTriggerBtn.addEventListener('click', () => loginModal.style.display = 'flex');
    }
    if (closeModalBtn && loginModal) {
        closeModalBtn.addEventListener('click', () => loginModal.style.display = 'none');
    }

    // 3. التحقق من بيانات الدخول
    const submitLogin = document.getElementById('submit-login');
    if (submitLogin) {
        submitLogin.addEventListener('click', function() {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            if (user === currentAdminUser && pass === currentAdminPass) {
                alert('تم تسجيل الدخول بنجاح! جاري فتح لوحة التحكم المتقدمة.');
                loginModal.style.display = 'none';
                
                const adminPanel = document.getElementById('adminPanel');
                adminPanel.style.display = 'block';
                adminPanel.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('خطأ في اسم المستخدم أو كلمة المرور.');
            }
        });
    }

    // 4. تغيير بيانات الأدمن واليوزر نيم والباسورد من داخل اللوحة
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            const newU = document.getElementById('new-username').value.trim();
            const newP = document.getElementById('new-password').value.trim();

            if (newU === "" || newP === "") {
                alert('برجاء كتابة اسم المستخدم الجديد وباسوردك الجديد بالكامل!');
                return;
            }

            currentAdminUser = newU;
            currentAdminPass = newP;

            alert(`بإمتياز! تم تحديث بيانات لوحة التحكم بنجاح.\nاليوزر الجديد: ${currentAdminUser}\nالباسورد الجديد محمي.`);
            
            document.getElementById('adminPanel').style.display = 'none';
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
        });
    }

    // 5. محاكاة رفع ملف اللعبة
    const uploadBtn = document.getElementById('upload-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            const fileInput = document.getElementById('gameFile');
            if (fileInput.files.length === 0) {
                alert('برجاء اختيار الملف المضغوط للعبة أولاً.');
            } else {
                isUploaded = true;
                alert(`تم رفع وتحديث ملف اللعبة الرئيسي بنجاح: (${fileInput.files[0].name})`);
            }
        });
    }

    // 6. تحميل اللعبة من قبل الزوار
    const clientDownloadBtn = document.getElementById('client-download-btn');
    if (clientDownloadBtn) {
        clientDownloadBtn.addEventListener('click', function() {
            if (isUploaded) {
                alert('جاري الاتصال بالسيرفر لبدء تحميل العميل الرسمي لـ Mars...');
            } else {
                alert('الملف غير متوفر حالياً، السيرفر تحت أعمال الصيانة الدورية.');
            }
        });
    }

    // 7. زرار تسجيل الخروج وقفل لوحة التحكم
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            document.getElementById('adminPanel').style.display = 'none';
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            alert('تم تسجيل الخروج وقفل لوحة التحكم بنجاح!');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});