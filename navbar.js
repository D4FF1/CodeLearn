// ==================== NAVBAR & MULTI-LANGUAGE SYSTEM ====================
// File ini WAJIB disertakan di SEMUA halaman HTML

const translations = {
  id: {
    // Common UI
    site_name: "CodeLearn",
    current_time: "Waktu Sekarang",
    nav_home: "Home",
    nav_frontend: "Frontend",
    nav_backend: "Backend",
    nav_devops: "DevOps",
    
    // Frontend Dropdown
    frontend_markup: "Markup & Style",
    frontend_html: "HTML",
    frontend_css: "CSS",
    frontend_responsive: "Responsive Design",
    frontend_programming: "Programming",
    frontend_js: "JavaScript",
    frontend_framework: "Framework Frontend",
    
    // Backend Dropdown
    backend_api: "API",
    backend_dev: "Backend Dev",
    backend_database: "Database",
    
    // DevOps Dropdown
    devops_git: "Git & GitHub",
    devops_deployment: "Deployment",
    
    // Mobile Menu
    mobile_frontend: "Frontend",
    mobile_html: "HTML",
    mobile_css: "CSS",
    mobile_responsive: "Responsive Design",
    mobile_js: "JavaScript",
    mobile_framework: "Framework Frontend",
    mobile_backend: "Backend",
    mobile_api: "API",
    mobile_backend_dev: "Backend Development",
    mobile_database: "Database",
    mobile_devops: "DevOps",
    mobile_git: "Git & GitHub",
    mobile_deployment: "Deployment",
    
    // Hero Section
    hero_badge_html: "25 Lessons + Penjelasan",
    hero_badge_css: "37 Lessons",
    hero_badge_js: "36 Lessons",
    hero_badge_framework: "18 Lessons",
    hero_badge_responsive: "15 Lessons + Penjelasan",
    hero_title_html: "Belajar HTML",
    hero_title_css: "Belajar CSS",
    hero_title_js: "Belajar JavaScript",
    hero_title_framework: "Belajar Framework Frontend",
    hero_title_responsive: "Belajar Responsive Design",
    hero_subtitle_html: "Pelajari fondasi web: sintaks HTML, semantic elements, forms, media, dan accessibility. Setiap materi dilengkapi penjelasan mendalam.",
    hero_subtitle_css: "Kuasai styling web: selectors, box model, flexbox, grid, animasi, dan responsive design.",
    hero_subtitle_js: "Kuasai bahasa pemrograman web: sintaks modern, DOM, event, async, dan ES6+ features.",
    hero_subtitle_framework: "Pahami konsep modern: Component, State, Virtual DOM, dan memilih framework yang tepat untuk project kamu.",
    hero_subtitle_responsive: "Kuasai teknik membuat website yang tampil sempurna di semua perangkat: dari mobile hingga desktop.",
    
    // Lesson Titles - HTML
    html_lesson1: "Pengenalan & Dasar Dokumen HTML",
    html_lesson2: "Headings (h1-h6), Paragraf, HR, BR",
    html_lesson3: "Struktur & Elemen Semantik HTML5",
    html_lesson4: "Komentar & Organisasi Kode",
    html_lesson5: "Links (a, href, target, rel)",
    html_lesson6: "Images (img, src, alt, figure/figcaption)",
    html_lesson7: "Lists (ul/ol/li, Description Lists dl/dt/dd)",
    html_lesson8: "Tables (table, thead/tbody/tfoot, colspan/rowspan)",
    html_lesson9: "Forms (form, label, input, textarea, select)",
    html_lesson10: "Input Types Lengkap",
    html_lesson11: "Atribut Universal (id, class, style, data-*)",
    html_lesson12: "Form Validation (required, pattern, minlength)",
    html_lesson13: "Buttons (button, submit, reset)",
    html_lesson14: "Media (audio, video, source, poster)",
    html_lesson15: "Iframe & Security (sandbox)",
    html_lesson16: "Special Elements (div/span, strong/em, code/pre, kbd)",
    html_lesson17: "Layout Dasar (semantic wrappers)",
    html_lesson18: "Accessibility (alt, label, heading order, landmarks)",
    html_lesson19: "Meta Tags (charset, description, og basic)",
    html_lesson20: "HTML Character Entities",
    html_lesson21: "Path Relative vs Absolute (href, src)",
    html_lesson22: "Custom Data Attribute (data-*)",
    html_lesson23: "Responsive Images Basics (srcset, sizes)",
    html_lesson24: "Progressive Enhancement (konsep)",
    html_lesson25: "Praktik: Bikin Landing Sederhana",
    
    // CSS Lesson Titles
    css_lesson1: "Pengenalan CSS & Spesifisitas",
    css_lesson2: "Sintaks CSS: Selector, Property, Value, Units",
    css_lesson3: "Inline, Internal, External CSS",
    css_lesson4: "Selector Element, Class, ID",
    css_lesson5: "Kombinasi Selector",
    css_lesson6: "Pseudo-class (:hover, :focus, :nth-child)",
    css_lesson7: "Attribute Selector [attr='value']",
    css_lesson8: "Box Model Lengkap + Border Radius",
    css_lesson9: "Margin Collapsing (konsep)",
    css_lesson10: "Shorthand Padding & Margin",
    css_lesson11: "Sizing: width, height, min/max",
    css_lesson12: "Typography (font, line-height, letter-spacing)",
    css_lesson13: "Text Styling (color, text-align, text-decoration)",
    css_lesson14: "Link Styling (a:link, a:visited, a:hover, a:active)",
    css_lesson15: "Backgrounds (color, image, size, position)",
    css_lesson16: "Gradients (linear, radial, repeating)",
    css_lesson17: "Flexbox: Container Properties",
    css_lesson18: "Flexbox Items (flex-grow, shrink, order)",
    css_lesson19: "Flexbox: align-self, flex-wrap",
    css_lesson20: "CSS Grid: grid-template-columns/rows",
    css_lesson21: "Grid Placement: grid-column, grid-row",
    css_lesson22: "Grid: auto-fit / auto-fill",
    css_lesson23: "Positioning (static, relative, absolute, fixed, sticky)",
    css_lesson24: "Z-index & Stacking Context",
    css_lesson25: "Overflow & Scroll",
    css_lesson26: "Transitions",
    css_lesson27: "Animations (@keyframes)",
    css_lesson28: "Transform (translate, scale, rotate)",
    css_lesson29: "Responsive: Media Queries",
    css_lesson30: "Fluid Typography: clamp()",
    css_lesson31: "Responsive Layout Switching",
    css_lesson32: "Utility Classes Concept",
    css_lesson33: "Practice: Card UI dengan Hover",
    css_lesson34: "Practice: Responsive Navbar (Flex + Media)",
    css_lesson35: "Practice: Gallery Grid (auto-fit + object-fit)",
    css_lesson36: "Practice: Modal dengan Checkbox Hack",
    css_lesson37: "CSS Review: Best Practices",
    
    // Responsive Lesson Titles
    responsive_lesson1: "Apa itu Responsive Web Design?",
    responsive_lesson2: "Viewport Meta Tag",
    responsive_lesson3: "Media Queries Dasar",
    responsive_lesson4: "Relative Units: rem, em, vw, vh, %",
    responsive_lesson5: "Flexbox untuk Layout Responsif",
    responsive_lesson6: "CSS Grid: Auto-fit & minmax()",
    responsive_lesson7: "Responsive Images",
    responsive_lesson8: "Responsive Typography",
    responsive_lesson9: "Pola Navigasi Mobile",
    responsive_lesson10: "Container Queries (Modern CSS)",
    responsive_lesson11: "Touch-friendly Design",
    responsive_lesson12: "Testing dengan DevTools",
    responsive_lesson13: "Performance untuk Mobile",
    responsive_lesson14: "Print Stylesheet",
    responsive_lesson15: "Praktik: Responsive Card Layout",
    
    // JS Lesson Titles
    js_lesson1: "Pengenalan JS & Runtime di Browser",
    js_lesson2: "Values & Data Types",
    js_lesson3: "let/const/var (Variable Declaration)",
    js_lesson4: "Operators: Aritmatika & Perbandingan",
    js_lesson5: "Truthy & Falsy",
    js_lesson6: "if/else Statement",
    js_lesson7: "switch Statement",
    js_lesson8: "Loop: for, while, do-while",
    js_lesson9: "for...of & for...in",
    js_lesson10: "Function Declaration vs Expression",
    js_lesson11: "Arrow Functions",
    js_lesson12: "Parameters, Default, Rest Parameter",
    js_lesson13: "Scope & Hoisting",
    js_lesson14: "Array: map, filter, reduce",
    js_lesson15: "Array: find, findIndex, some, every",
    js_lesson16: "Destructuring (Array & Object)",
    js_lesson17: "Spread & Rest Operator (...)",
    js_lesson18: "Objects (Properti & Method)",
    js_lesson19: "DOM: querySelector & querySelectorAll",
    js_lesson20: "DOM: createElement, appendChild, remove",
    js_lesson21: "DOM: Event Listeners",
    js_lesson22: "Event Types: click, input, change, submit",
    js_lesson23: "Form Handling (mengambil nilai)",
    js_lesson24: "Fetch API & Async/Await",
    js_lesson25: "Error Handling: try/catch/finally",
    js_lesson26: "localStorage & sessionStorage",
    js_lesson27: "JSON.stringify & JSON.parse",
    js_lesson28: "Modules: import / export",
    js_lesson29: "Practice: Todo List App",
    js_lesson30: "Practice: Quiz Sederhana",
    js_lesson31: "Practice: Calculator",
    js_lesson32: "Practice: Modal Popup dengan JS",
    js_lesson33: "Practice: Image Gallery Controller",
    js_lesson34: "Practice: Stopwatch",
    js_lesson35: "Mini Project: Weather App (Mock)",
    js_lesson36: "Best Practices & Code Organization",
    
    // Framework Lesson Titles
    framework_lesson1: "Mengapa Perlu Framework?",
    framework_lesson2: "Component-Based Architecture",
    framework_lesson3: "JSX: JavaScript + XML",
    framework_lesson4: "Props: Data dari Parent ke Child",
    framework_lesson5: "State: Data Internal Component",
    framework_lesson6: "Virtual DOM & Reconciliation",
    framework_lesson7: "Lifecycle & useEffect Hook",
    framework_lesson8: "Event Handling",
    framework_lesson9: "Conditional Rendering",
    framework_lesson10: "Rendering Lists & Keys",
    framework_lesson11: "Controlled vs Uncontrolled Forms",
    framework_lesson12: "State Management (Context, Redux, Zustand)",
    framework_lesson13: "Client-Side Routing",
    framework_lesson14: "Data Fetching Patterns",
    framework_lesson15: "Styling di Framework",
    framework_lesson16: "Performance Optimization",
    framework_lesson17: "Testing Components",
    framework_lesson18: "Memilih Framework",
    
    // Lesson Contents - HTML
    html_lesson1_text: "Setiap halaman web dimulai dari struktur HTML. DOCTYPE adalah deklarasi yang memberitahu browser bahwa dokumen ini menggunakan HTML versi terbaru (HTML5). Tag-tag seperti <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, dan <code>&lt;body&gt;</code> membentuk kerangka dasar yang harus dipahami dengan benar.",
    html_lesson1_explanation: "<strong>Penjelasan Detail:</strong> Dokumen HTML selalu diawali dengan <code>&lt;!DOCTYPE html&gt;</code> agar browser tidak masuk ke mode aneh (quirks mode). Elemen <code>&lt;html&gt;</code> adalah akar, sedangkan <code>&lt;head&gt;</code> berisi metadata (judul, charset, viewport) yang tidak terlihat. <code>&lt;body&gt;</code> adalah wadah semua konten yang tampil. Pastikan selalu menyertakan <code>meta charset=\"UTF-8\"</code> untuk mendukung huruf Indonesia.",
    html_lesson2_text: "Heading Tags <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code> menunjukkan tingkatan hierarki dokumen. H1 adalah yang paling penting, biasanya judul utama halaman.",
    html_lesson2_explanation: "<strong>Penjelasan:</strong> Heading bukan hanya untuk memperbesar teks, tetapi untuk memberikan struktur logis. Google dan pembaca layar menggunakan heading untuk memahami alur konten. Hanya boleh ada satu <code>&lt;h1&gt;</code> per halaman. Gunakan <code>&lt;h2&gt;</code> untuk sub-bab, <code>&lt;h3&gt;</code> untuk sub-sub, dst. Jangan melompat (misal dari H2 langsung ke H4).",
    html_lesson3_text: "Elemen semantik adalah tags yang menjelaskan MAKSUD dari konten, bukan hanya tampilannya.",
    html_lesson3_explanation: "<strong>Penjelasan:</strong> <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code> memberikan makna struktural. <code>&lt;main&gt;</code> hanya boleh satu per halaman. <code>&lt;article&gt;</code> untuk konten yang bisa berdiri sendiri. Ini meningkatkan SEO dan aksesibilitas.",
    html_lesson4_text: "Komentar dalam HTML adalah teks yang tidak ditampilkan browser, berguna untuk dokumentasi.",
    html_lesson4_explanation: "<strong>Penjelasan:</strong> Gunakan <code>&lt;!-- ... --&gt;</code> untuk memberi catatan pada kode. Komentar dapat digunakan untuk menonaktifkan sementara bagian kode. Pastikan tidak meninggalkan komentar yang berisi informasi sensitif.",
    html_lesson5_text: "Element <code>&lt;a&gt;</code> (anchor) menghubungkan halaman ke halaman lain.",
    html_lesson5_explanation: "<strong>Penjelasan:</strong> Atribut <code>href</code> adalah tujuan. Gunakan <code>target=\"_blank\"</code> untuk membuka di tab baru, selalu sertakan <code>rel=\"noopener noreferrer\"</code> untuk keamanan. <code>mailto:</code> dan <code>tel:</code> untuk email dan telepon.",
    html_lesson6_text: "Element <code>&lt;img&gt;</code> menampilkan gambar. Atribut <code>alt</code> WAJIB untuk aksesibilitas.",
    html_lesson6_explanation: "<strong>Penjelasan:</strong> <code>src</code> adalah sumber gambar. <code>alt</code> memberikan deskripsi untuk screen reader. Gunakan <code>loading=\"lazy\"</code> untuk performa. <code>&lt;figure&gt;</code> dan <code>&lt;figcaption&gt;</code> untuk mengelompokkan gambar dengan keterangan.",
    html_lesson7_text: "List adalah cara menampilkan kumpulan item. Ada unordered (bullet), ordered (nomor), dan description list.",
    html_lesson7_explanation: "<strong>Penjelasan:</strong> <code>&lt;ul&gt;</code> untuk daftar tanpa urutan, <code>&lt;ol&gt;</code> untuk daftar berurutan (bisa diubah type-nya: 1, A, a, I). <code>&lt;dl&gt;</code> digunakan untuk pasangan istilah-definisi.",
    html_lesson8_text: "Tabel untuk menampilkan data tabular secara terstruktur.",
    html_lesson8_explanation: "<strong>Penjelasan:</strong> Jangan gunakan tabel untuk layout halaman. Gunakan <code>&lt;th&gt;</code> untuk header, <code>colspan</code> dan <code>rowspan</code> untuk menggabungkan sel. Atribut <code>scope</code> pada th membantu aksesibilitas.",
    html_lesson9_text: "Form adalah mekanisme utama interaksi user dengan website.",
    html_lesson9_explanation: "<strong>Penjelasan:</strong> Setiap input harus memiliki <code>&lt;label&gt;</code> yang terhubung dengan atribut <code>for</code>. Atribut <code>name</code> penting karena menjadi nama data saat dikirim ke server. Gunakan <code>method=\"POST\"</code> untuk data sensitif.",
    html_lesson10_text: "Memilih tipe input yang tepat meningkatkan UX.",
    html_lesson10_explanation: "<strong>Penjelasan:</strong> Memilih tipe input yang tepat meningkatkan UX: <code>email</code> menampilkan keyboard dengan @, <code>tel</code> memunculkan numeric keypad di HP, <code>number</code> memiliki tombol naik/turun, <code>date</code> menampilkan kalender. <code>checkbox</code> untuk pilihan banyak, <code>radio</code> untuk pilihan tunggal.",
    html_lesson11_text: "Atribut global yang bisa digunakan di semua elemen HTML.",
    html_lesson11_explanation: "<strong>Penjelasan:</strong> <code>id</code> harus unik dalam satu halaman. <code>class</code> bisa digunakan banyak elemen. <code>data-*</code> untuk menyimpan data custom yang bisa diakses via JavaScript (element.dataset). <code>hidden</code> menyembunyikan elemen.",
    html_lesson12_text: "HTML5 menyediakan validasi form bawaan.",
    html_lesson12_explanation: "<strong>Penjelasan:</strong> HTML5 menyediakan validasi bawaan: <code>required</code> (tidak boleh kosong), <code>minlength</code>/<code>maxlength</code>, <code>pattern</code> (regex), <code>min</code>/<code>max</code> untuk number. Browser akan menampilkan pesan error dan mencegah submit.",
    html_lesson13_text: "Tombol interaksi dalam form.",
    html_lesson13_explanation: "<strong>Penjelasan:</strong> <code>&lt;button&gt;</code> lebih fleksibel daripada <code>&lt;input type=\"button\"&gt;</code> karena bisa berisi HTML. <code>type=\"submit\"</code> untuk mengirim form, <code>type=\"reset\"</code> untuk mereset, <code>type=\"button\"</code> untuk tombol biasa yang dikontrol JavaScript.",
    html_lesson14_text: "Menyematkan audio dan video.",
    html_lesson14_explanation: "<strong>Penjelasan:</strong> Gunakan <code>&lt;audio&gt;</code> dan <code>&lt;video&gt;</code> untuk menyematkan media. Atribut <code>controls</code> menampilkan panel play/pause. <code>poster</code> untuk thumbnail video. Sediakan multiple source untuk kompatibilitas browser.",
    html_lesson15_text: "Menyematkan halaman web lain ke dalam halaman.",
    html_lesson15_explanation: "<strong>Penjelasan:</strong> <code>&lt;iframe&gt;</code> menyematkan halaman lain. Atribut <code>sandbox</code> membatasi kemampuan iframe untuk keamanan. Selalu berikan <code>title</code> untuk aksesibilitas.",
    html_lesson16_text: "Elemen inline dan block untuk teks dan konten.",
    html_lesson16_explanation: "<strong>Penjelasan:</strong> <code>&lt;div&gt;</code> block-level untuk grouping, <code>&lt;span&gt;</code> inline untuk styling. <code>&lt;strong&gt;</code> untuk penting (bold), <code>&lt;em&gt;</code> untuk penekanan (miring). <code>&lt;code&gt;</code> untuk potongan kode, <code>&lt;pre&gt;</code> untuk teks praformat. <code>&lt;kbd&gt;</code> untuk input keyboard.",
    html_lesson17_text: "Menggunakan semantic elements untuk layout.",
    html_lesson17_explanation: "<strong>Penjelasan:</strong> Gunakan elemen semantik untuk membuat kerangka layout: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>. Ini membantu SEO dan aksesibilitas.",
    html_lesson18_text: "Membuat website dapat diakses oleh semua orang.",
    html_lesson18_explanation: "<strong>Penjelasan:</strong> Aksesibilitas membuat web dapat digunakan oleh semua orang. Pastikan: semua gambar punya <code>alt</code>, semua input punya <code>&lt;label&gt;</code>, heading berurutan (h1 ke h2 ke h3), dan gunakan landmark (main, nav, dll).",
    html_lesson19_text: "Meta tag untuk SEO dan social media.",
    html_lesson19_explanation: "<strong>Penjelasan:</strong> Meta tag memberikan informasi ke browser dan mesin pencari. <code>description</code> digunakan oleh Google untuk snippet hasil pencarian. Open Graph (og:) mengontrol tampilan saat link dibagikan di media sosial.",
    html_lesson20_text: "Menampilkan karakter khusus di HTML.",
    html_lesson20_explanation: "<strong>Penjelasan:</strong> Karakter seperti &lt;, &gt;, &amp;, &quot;, &copy; memiliki arti khusus di HTML. Gunakan entity: <code>&amp;lt;</code> untuk &lt;, <code>&amp;gt;</code> untuk &gt;, <code>&amp;amp;</code> untuk &amp;, <code>&amp;copy;</code> untuk &copy;. <code>&amp;nbsp;</code> adalah spasi non-breaking.",
    html_lesson21_text: "Memahami cara menulis path file.",
    html_lesson21_explanation: "<strong>Penjelasan:</strong> Absolute path mencakup domain lengkap (https://example.com/gambar.jpg). Relative path berdasarkan lokasi file saat ini: <code>gambar.jpg</code> (satu folder), <code>images/gambar.jpg</code> (subfolder), <code>../gambar.jpg</code> (folder parent). Root-relative dimulai dengan slash: <code>/assets/logo.png</code>.",
    html_lesson22_text: "Menyimpan data custom di elemen HTML.",
    html_lesson22_explanation: "<strong>Penjelasan:</strong> Atribut <code>data-*</code> menyimpan data kustom pada elemen HTML. Contoh: <code>data-product-id=\"123\"</code>. Di JavaScript dapat diakses via <code>element.dataset.productId</code>. Berguna untuk menyimpan data sementara.",
    html_lesson23_text: "Menyediakan gambar yang optimal untuk berbagai ukuran layar.",
    html_lesson23_explanation: "<strong>Penjelasan:</strong> <code>srcset</code> menyediakan beberapa versi gambar untuk lebar layar berbeda. <code>sizes</code> memberi tahu browser perkiraan lebar gambar pada berbagai breakpoint. Browser otomatis memilih gambar terbaik.",
    html_lesson24_text: "Strategi membangun website yang robust.",
    html_lesson24_explanation: "<strong>Penjelasan:</strong> Progressive enhancement adalah strategi membangun website dengan konten inti (HTML) terlebih dahulu yang dapat diakses di semua perangkat, kemudian menambahkan lapisan CSS untuk tampilan, dan JS untuk interaktivitas. Ini memastikan website tetap berfungsi meskipun CSS/JS gagal dimuat.",
    html_lesson25_text: "Menerapkan semua konsep HTML yang telah dipelajari.",
    html_lesson25_explanation: "<strong>Penjelasan:</strong> Gunakan semua elemen yang telah dipelajari: struktur semantik, heading, paragraf, gambar, list, form, dan link. Buatlah halaman landing sederhana dengan header, hero section, fitur, dan footer.",
    
    // Footer
    footer_text: "CodeLearn - Belajar Web Development dengan materi lengkap dan terstruktur.",
    
    // Buttons
    btn_try: "Coba Sendiri",
    btn_run: "Jalankan",
    btn_reset: "Reset",
    btn_copy: "Salin",
    btn_copied: "Tersalin!",
    
    // Loading
    loading_html: "Memuat materi HTML...",
    loading_css: "Memuat materi CSS...",
    loading_js: "Memuat materi JavaScript...",
    loading_framework: "Memuat materi Framework...",
    loading_responsive: "Memuat materi Responsive Design..."
  },
  
  en: {
    // Common UI
    site_name: "CodeLearn",
    current_time: "Current Time",
    nav_home: "Home",
    nav_frontend: "Frontend",
    nav_backend: "Backend",
    nav_devops: "DevOps",
    
    // Frontend Dropdown
    frontend_markup: "Markup & Style",
    frontend_html: "HTML",
    frontend_css: "CSS",
    frontend_responsive: "Responsive Design",
    frontend_programming: "Programming",
    frontend_js: "JavaScript",
    frontend_framework: "Frontend Framework",
    
    // Backend Dropdown
    backend_api: "API",
    backend_dev: "Backend Dev",
    backend_database: "Database",
    
    // DevOps Dropdown
    devops_git: "Git & GitHub",
    devops_deployment: "Deployment",
    
    // Mobile Menu
    mobile_frontend: "Frontend",
    mobile_html: "HTML",
    mobile_css: "CSS",
    mobile_responsive: "Responsive Design",
    mobile_js: "JavaScript",
    mobile_framework: "Frontend Framework",
    mobile_backend: "Backend",
    mobile_api: "API",
    mobile_backend_dev: "Backend Development",
    mobile_database: "Database",
    mobile_devops: "DevOps",
    mobile_git: "Git & GitHub",
    mobile_deployment: "Deployment",
    
    // Hero Section
    hero_badge_html: "25 Lessons + Explanation",
    hero_badge_css: "37 Lessons",
    hero_badge_js: "36 Lessons",
    hero_badge_framework: "18 Lessons",
    hero_badge_responsive: "15 Lessons + Explanation",
    hero_title_html: "Learn HTML",
    hero_title_css: "Learn CSS",
    hero_title_js: "Learn JavaScript",
    hero_title_framework: "Learn Frontend Framework",
    hero_title_responsive: "Learn Responsive Design",
    hero_subtitle_html: "Learn web fundamentals: HTML syntax, semantic elements, forms, media, and accessibility. Each material comes with in-depth explanations.",
    hero_subtitle_css: "Master web styling: selectors, box model, flexbox, grid, animations, and responsive design.",
    hero_subtitle_js: "Master web programming: modern syntax, DOM, events, async, and ES6+ features.",
    hero_subtitle_framework: "Understand modern concepts: Components, State, Virtual DOM, and choosing the right framework for your project.",
    hero_subtitle_responsive: "Master techniques to make websites look perfect on all devices: from mobile to desktop.",
    
    // Lesson Titles - HTML
    html_lesson1: "Introduction & HTML Document Basics",
    html_lesson2: "Headings (h1-h6), Paragraphs, HR, BR",
    html_lesson3: "Structure & HTML5 Semantic Elements",
    html_lesson4: "Comments & Code Organization",
    html_lesson5: "Links (a, href, target, rel)",
    html_lesson6: "Images (img, src, alt, figure/figcaption)",
    html_lesson7: "Lists (ul/ol/li, Description Lists dl/dt/dd)",
    html_lesson8: "Tables (table, thead/tbody/tfoot, colspan/rowspan)",
    html_lesson9: "Forms (form, label, input, textarea, select)",
    html_lesson10: "Complete Input Types",
    html_lesson11: "Universal Attributes (id, class, style, data-*)",
    html_lesson12: "Form Validation (required, pattern, minlength)",
    html_lesson13: "Buttons (button, submit, reset)",
    html_lesson14: "Media (audio, video, source, poster)",
    html_lesson15: "Iframe & Security (sandbox)",
    html_lesson16: "Special Elements (div/span, strong/em, code/pre, kbd)",
    html_lesson17: "Basic Layout (semantic wrappers)",
    html_lesson18: "Accessibility (alt, label, heading order, landmarks)",
    html_lesson19: "Meta Tags (charset, description, og basic)",
    html_lesson20: "HTML Character Entities",
    html_lesson21: "Relative vs Absolute Paths (href, src)",
    html_lesson22: "Custom Data Attribute (data-*)",
    html_lesson23: "Responsive Images Basics (srcset, sizes)",
    html_lesson24: "Progressive Enhancement (concept)",
    html_lesson25: "Practice: Build a Simple Landing Page",
    
    // CSS Lesson Titles
    css_lesson1: "CSS Introduction & Specificity",
    css_lesson2: "CSS Syntax: Selector, Property, Value, Units",
    css_lesson3: "Inline, Internal, External CSS",
    css_lesson4: "Element, Class, ID Selectors",
    css_lesson5: "Selector Combinations",
    css_lesson6: "Pseudo-class (:hover, :focus, :nth-child)",
    css_lesson7: "Attribute Selector [attr='value']",
    css_lesson8: "Complete Box Model + Border Radius",
    css_lesson9: "Margin Collapsing",
    css_lesson10: "Shorthand Padding & Margin",
    css_lesson11: "Sizing: width, height, min/max",
    css_lesson12: "Typography (font, line-height, letter-spacing)",
    css_lesson13: "Text Styling (color, text-align, text-decoration)",
    css_lesson14: "Link Styling (a:link, a:visited, a:hover, a:active)",
    css_lesson15: "Backgrounds (color, image, size, position)",
    css_lesson16: "Gradients (linear, radial, repeating)",
    css_lesson17: "Flexbox: Container Properties",
    css_lesson18: "Flexbox Items (flex-grow, shrink, order)",
    css_lesson19: "Flexbox: align-self, flex-wrap",
    css_lesson20: "CSS Grid: grid-template-columns/rows",
    css_lesson21: "Grid Placement: grid-column, grid-row",
    css_lesson22: "Grid: auto-fit / auto-fill",
    css_lesson23: "Positioning (static, relative, absolute, fixed, sticky)",
    css_lesson24: "Z-index & Stacking Context",
    css_lesson25: "Overflow & Scroll",
    css_lesson26: "Transitions",
    css_lesson27: "Animations (@keyframes)",
    css_lesson28: "Transform (translate, scale, rotate)",
    css_lesson29: "Responsive: Media Queries",
    css_lesson30: "Fluid Typography: clamp()",
    css_lesson31: "Responsive Layout Switching",
    css_lesson32: "Utility Classes Concept",
    css_lesson33: "Practice: Card UI with Hover",
    css_lesson34: "Practice: Responsive Navbar (Flex + Media)",
    css_lesson35: "Practice: Gallery Grid (auto-fit + object-fit)",
    css_lesson36: "Practice: Modal with Checkbox Hack",
    css_lesson37: "CSS Review: Best Practices",
    
    // Responsive Lesson Titles
    responsive_lesson1: "What is Responsive Web Design?",
    responsive_lesson2: "Viewport Meta Tag",
    responsive_lesson3: "Media Queries Basics",
    responsive_lesson4: "Relative Units: rem, em, vw, vh, %",
    responsive_lesson5: "Flexbox for Responsive Layout",
    responsive_lesson6: "CSS Grid: Auto-fit & minmax()",
    responsive_lesson7: "Responsive Images",
    responsive_lesson8: "Responsive Typography",
    responsive_lesson9: "Mobile Navigation Patterns",
    responsive_lesson10: "Container Queries (Modern CSS)",
    responsive_lesson11: "Touch-friendly Design",
    responsive_lesson12: "Testing with DevTools",
    responsive_lesson13: "Performance for Mobile",
    responsive_lesson14: "Print Stylesheet",
    responsive_lesson15: "Practice: Responsive Card Layout",
    
    // JS Lesson Titles
    js_lesson1: "JS Introduction & Browser Runtime",
    js_lesson2: "Values & Data Types",
    js_lesson3: "let/const/var (Variable Declaration)",
    js_lesson4: "Operators: Arithmetic & Comparison",
    js_lesson5: "Truthy & Falsy",
    js_lesson6: "if/else Statement",
    js_lesson7: "switch Statement",
    js_lesson8: "Loops: for, while, do-while",
    js_lesson9: "for...of & for...in",
    js_lesson10: "Function Declaration vs Expression",
    js_lesson11: "Arrow Functions",
    js_lesson12: "Parameters, Default, Rest Parameter",
    js_lesson13: "Scope & Hoisting",
    js_lesson14: "Array: map, filter, reduce",
    js_lesson15: "Array: find, findIndex, some, every",
    js_lesson16: "Destructuring (Array & Object)",
    js_lesson17: "Spread & Rest Operator (...)",
    js_lesson18: "Objects (Properties & Methods)",
    js_lesson19: "DOM: querySelector & querySelectorAll",
    js_lesson20: "DOM: createElement, appendChild, remove",
    js_lesson21: "DOM: Event Listeners",
    js_lesson22: "Event Types: click, input, change, submit",
    js_lesson23: "Form Handling",
    js_lesson24: "Fetch API & Async/Await",
    js_lesson25: "Error Handling: try/catch/finally",
    js_lesson26: "localStorage & sessionStorage",
    js_lesson27: "JSON.stringify & JSON.parse",
    js_lesson28: "Modules: import / export",
    js_lesson29: "Practice: Todo List App",
    js_lesson30: "Practice: Simple Quiz",
    js_lesson31: "Practice: Calculator",
    js_lesson32: "Practice: Modal Popup with JS",
    js_lesson33: "Practice: Image Gallery Controller",
    js_lesson34: "Practice: Stopwatch",
    js_lesson35: "Mini Project: Weather App (Mock)",
    js_lesson36: "Best Practices & Code Organization",
    
    // Framework Lesson Titles
    framework_lesson1: "Why Do We Need Frameworks?",
    framework_lesson2: "Component-Based Architecture",
    framework_lesson3: "JSX: JavaScript + XML",
    framework_lesson4: "Props: Parent to Child Data",
    framework_lesson5: "State: Internal Component Data",
    framework_lesson6: "Virtual DOM & Reconciliation",
    framework_lesson7: "Lifecycle & useEffect Hook",
    framework_lesson8: "Event Handling",
    framework_lesson9: "Conditional Rendering",
    framework_lesson10: "Rendering Lists & Keys",
    framework_lesson11: "Controlled vs Uncontrolled Forms",
    framework_lesson12: "State Management (Context, Redux, Zustand)",
    framework_lesson13: "Client-Side Routing",
    framework_lesson14: "Data Fetching Patterns",
    framework_lesson15: "Styling in Frameworks",
    framework_lesson16: "Performance Optimization",
    framework_lesson17: "Testing Components",
    framework_lesson18: "Choosing a Framework",
    
    // Lesson Contents - HTML
    html_lesson1_text: "Every web page starts with an HTML structure. The DOCTYPE declaration tells the browser that this document uses the latest HTML version (HTML5). Tags like <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> form the basic framework that must be understood correctly.",
    html_lesson1_explanation: "<strong>Detailed Explanation:</strong> HTML documents always begin with <code>&lt;!DOCTYPE html&gt;</code> to prevent browsers from entering quirks mode. The <code>&lt;html&gt;</code> element is the root, while <code>&lt;head&gt;</code> contains metadata (title, charset, viewport) that is not visible. <code>&lt;body&gt;</code> is the container for all visible content. Always include <code>meta charset=\"UTF-8\"</code> to support Indonesian characters.",
    html_lesson2_text: "Heading Tags <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> indicate the hierarchy level of your document. H1 is the most important, usually the main page title.",
    html_lesson2_explanation: "<strong>Explanation:</strong> Headings are not just for making text larger, but for providing logical structure. Google and screen readers use headings to understand content flow. There should only be one <code>&lt;h1&gt;</code> per page. Use <code>&lt;h2&gt;</code> for sub-sections, <code>&lt;h3&gt;</code> for sub-subsections, etc. Don't skip levels (e.g., from H2 directly to H4).",
    html_lesson3_text: "Semantic elements are tags that describe the MEANING of content, not just how it looks.",
    html_lesson3_explanation: "<strong>Explanation:</strong> <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code> provide structural meaning. <code>&lt;main&gt;</code> should only appear once per page. <code>&lt;article&gt;</code> is for content that can stand alone. This improves SEO and accessibility.",
    html_lesson4_text: "Comments in HTML are text that browsers don't display, useful for documentation.",
    html_lesson4_explanation: "<strong>Explanation:</strong> Use <code>&lt;!-- ... --&gt;</code> to leave notes in your code. Comments can also be used to temporarily disable parts of your code. Don't leave comments containing sensitive information.",
    html_lesson5_text: "The <code>&lt;a&gt;</code> (anchor) element links one page to another.",
    html_lesson5_explanation: "<strong>Explanation:</strong> The <code>href</code> attribute is the destination. Use <code>target=\"_blank\"</code> to open in a new tab, always include <code>rel=\"noopener noreferrer\"</code> for security. Use <code>mailto:</code> and <code>tel:</code> for email and phone links.",
    html_lesson6_text: "The <code>&lt;img&gt;</code> element displays images. The <code>alt</code> attribute is REQUIRED for accessibility.",
    html_lesson6_explanation: "<strong>Explanation:</strong> <code>src</code> is the image source. <code>alt</code> provides a description for screen readers. Use <code>loading=\"lazy\"</code> for performance. <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> group images with captions.",
    html_lesson7_text: "Lists display collections of items. There are unordered (bullets), ordered (numbered), and description lists.",
    html_lesson7_explanation: "<strong>Explanation:</strong> <code>&lt;ul&gt;</code> for unordered lists, <code>&lt;ol&gt;</code> for ordered lists (you can change the type: 1, A, a, I). <code>&lt;dl&gt;</code> is used for term-definition pairs.",
    html_lesson8_text: "Tables display structured tabular data.",
    html_lesson8_explanation: "<strong>Explanation:</strong> Don't use tables for page layout. Use <code>&lt;th&gt;</code> for headers, <code>colspan</code> and <code>rowspan</code> to merge cells. The <code>scope</code> attribute on th helps with accessibility.",
    html_lesson9_text: "Forms are the primary mechanism for user interaction with websites.",
    html_lesson9_explanation: "<strong>Explanation:</strong> Every input should have a <code>&lt;label&gt;</code> connected with the <code>for</code> attribute. The <code>name</code> attribute is important as it becomes the data key when sent to the server. Use <code>method=\"POST\"</code> for sensitive data.",
    html_lesson10_text: "Choosing the right input type improves UX.",
    html_lesson10_explanation: "<strong>Explanation:</strong> <code>email</code> shows a keyboard with @, <code>tel</code> brings up a numeric keypad on phones, <code>number</code> has up/down buttons, <code>date</code> shows a calendar picker. <code>checkbox</code> for multiple choices, <code>radio</code> for single choice.",
    html_lesson11_text: "Global attributes that can be used on all HTML elements.",
    html_lesson11_explanation: "<strong>Explanation:</strong> <code>id</code> must be unique within a page. <code>class</code> can be used on multiple elements. <code>data-*</code> stores custom data accessible via JavaScript (element.dataset). <code>hidden</code> hides elements.",
    html_lesson12_text: "HTML5 provides built-in form validation.",
    html_lesson12_explanation: "<strong>Explanation:</strong> HTML5 provides built-in validation: <code>required</code> (cannot be empty), <code>minlength</code>/<code>maxlength</code>, <code>pattern</code> (regex), <code>min</code>/<code>max</code> for numbers. The browser will display error messages and prevent submission.",
    html_lesson13_text: "Interactive buttons in forms.",
    html_lesson13_explanation: "<strong>Explanation:</strong> <code>&lt;button&gt;</code> is more flexible than <code>&lt;input type=\"button\"&gt;</code> because it can contain HTML. <code>type=\"submit\"</code> submits forms, <code>type=\"reset\"</code> resets, <code>type=\"button\"</code> for regular buttons controlled by JavaScript.",
    html_lesson14_text: "Embedding audio and video.",
    html_lesson14_explanation: "<strong>Explanation:</strong> Use <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> to embed media. The <code>controls</code> attribute displays play/pause controls. <code>poster</code> provides a video thumbnail. Provide multiple sources for browser compatibility.",
    html_lesson15_text: "Embedding other web pages.",
    html_lesson15_explanation: "<strong>Explanation:</strong> <code>&lt;iframe&gt;</code> embeds another page. The <code>sandbox</code> attribute restricts iframe capabilities for security. Always provide a <code>title</code> for accessibility.",
    html_lesson16_text: "Inline and block elements for text and content.",
    html_lesson16_explanation: "<strong>Explanation:</strong> <code>&lt;div&gt;</code> is block-level for grouping, <code>&lt;span&gt;</code> is inline for styling. <code>&lt;strong&gt;</code> for importance (bold), <code>&lt;em&gt;</code> for emphasis (italic). <code>&lt;code&gt;</code> for code snippets, <code>&lt;pre&gt;</code> for preformatted text. <code>&lt;kbd&gt;</code> for keyboard input.",
    html_lesson17_text: "Using semantic elements for layout.",
    html_lesson17_explanation: "<strong>Explanation:</strong> Use semantic elements to create a layout framework: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>. This helps SEO and accessibility.",
    html_lesson18_text: "Making websites accessible to everyone.",
    html_lesson18_explanation: "<strong>Explanation:</strong> Accessibility makes the web usable by everyone. Ensure: all images have <code>alt</code>, all inputs have <code>&lt;label&gt;</code>, headings are sequential (h1 to h2 to h3), and use landmarks (main, nav, etc).",
    html_lesson19_text: "Meta tags for SEO and social media.",
    html_lesson19_explanation: "<strong>Explanation:</strong> Meta tags provide information to browsers and search engines. <code>description</code> is used by Google for search result snippets. Open Graph (og:) controls how links appear when shared on social media.",
    html_lesson20_text: "Displaying special characters in HTML.",
    html_lesson20_explanation: "<strong>Explanation:</strong> Characters like &lt;, &gt;, &amp;, &quot;, &copy; have special meaning in HTML. Use entities: <code>&amp;lt;</code> for &lt;, <code>&amp;gt;</code> for &gt;, <code>&amp;amp;</code> for &amp;, <code>&amp;copy;</code> for &copy;. <code>&amp;nbsp;</code> is a non-breaking space.",
    html_lesson21_text: "Understanding how to write file paths.",
    html_lesson21_explanation: "<strong>Explanation:</strong> Absolute paths include the full domain (https://example.com/image.jpg). Relative paths are based on the current file's location: <code>image.jpg</code> (same folder), <code>images/image.jpg</code> (subfolder), <code>../image.jpg</code> (parent folder). Root-relative starts with a slash: <code>/assets/logo.png</code>.",
    html_lesson22_text: "Storing custom data in HTML elements.",
    html_lesson22_explanation: "<strong>Explanation:</strong> The <code>data-*</code> attribute stores custom data on HTML elements. Example: <code>data-product-id=\"123\"</code>. In JavaScript, access via <code>element.dataset.productId</code>. Useful for storing temporary data.",
    html_lesson23_text: "Providing optimal images for different screen sizes.",
    html_lesson23_explanation: "<strong>Explanation:</strong> <code>srcset</code> provides multiple image versions for different screen widths. <code>sizes</code> tells the browser the approximate image width at various breakpoints. The browser automatically chooses the best image.",
    html_lesson24_text: "A strategy for building robust websites.",
    html_lesson24_explanation: "<strong>Explanation:</strong> Progressive enhancement is a strategy of building websites with core content (HTML) first that works on all devices, then adding CSS layers for styling, and JS for interactivity. This ensures the website still works even if CSS/JS fails to load.",
    html_lesson25_text: "Applying all the HTML concepts learned.",
    html_lesson25_explanation: "<strong>Explanation:</strong> Use all the elements you've learned: semantic structure, headings, paragraphs, images, lists, forms, and links. Build a simple landing page with header, hero section, features, and footer.",
    
    // Footer
    footer_text: "CodeLearn - Learn Web Development with complete and structured materials.",
    
    // Buttons
    btn_try: "Try It",
    btn_run: "Run",
    btn_reset: "Reset",
    btn_copy: "Copy",
    btn_copied: "Copied!",
    
    // Loading
    loading_html: "Loading HTML content...",
    loading_css: "Loading CSS content...",
    loading_js: "Loading JavaScript content...",
    loading_framework: "Loading Framework content...",
    loading_responsive: "Loading Responsive Design content..."
  }
};

// Apply language to all elements with data-i18n attribute
function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else if (element.tagName === 'IMG') {
        element.alt = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update course meta numbers if they have data-i18n
  document.querySelectorAll('.course-meta [data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      const svg = el.querySelector('svg');
      if (svg) {
        el.innerHTML = '';
        el.appendChild(svg);
        el.appendChild(document.createTextNode(' ' + translations[lang][key]));
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  localStorage.setItem('preferred_language', lang);
}

// ==================== THEME SYSTEM ====================
function initTheme() {
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'light') {
    htmlEl.setAttribute('data-theme', 'light');
  } else {
    htmlEl.removeAttribute('data-theme');
  }
}

function toggleTheme() {
  const htmlEl = document.documentElement;
  if (htmlEl.getAttribute('data-theme') === 'light') {
    htmlEl.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlEl.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  }
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==================== LIVE TIME ====================
function initLiveTime() {
  const liveTimeEl = document.getElementById('liveTime');
  if (liveTimeEl) {
    const pad2 = (n) => String(n).padStart(2, '0');
    const formatTime = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
    
    liveTimeEl.textContent = formatTime(new Date());
    setInterval(() => {
      liveTimeEl.textContent = formatTime(new Date());
    }, 1000);
  }
}

// ==================== SET ACTIVE NAV LINK ====================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-dropdown a, .mobile-menu a, .nav-links > li > a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ==================== INITIALIZE EVERYTHING ====================
function initNavbarSystem() {
  initTheme();
  initMobileMenu();
  initNavbarScroll();
  initLiveTime();
  setActiveNavLink();
  
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    const savedLang = localStorage.getItem('preferred_language') || 'id';
    langSelect.value = savedLang;
    applyLanguage(savedLang);
    
    langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbarSystem);
} else {
  initNavbarSystem();
}

// Export for use in other files if needed
window.applyLanguage = applyLanguage;
window.translations = translations;