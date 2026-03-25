```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG — chỉnh tại đây, áp dụng cho toàn bộ file
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- Thông tin bìa ---
  monHoc:       "Measure Theory and Integration",
  loaiBai:      "Midterm Essay",
  tenDeTai:     "Completion of Measure Spaces",
  nganh:        "Mathematics",
  chuyenNganh:  "Analysis",
  giangVien:    "Assoc. Prof. Bui Le Trong Thanh",
  sinhVien: [
    { ten: "Huy", mssv: "24110022" },
    // { ten: "Nguyen Van B", mssv: "24110023" },
  ],

  // --- Trang tiêu đề (Title Page) ---
  titlePage: {
    course:    "Measure Theory and Integration",
    type:      "Midterm Essay",
    title:     "Completion of Measure Spaces",
    subtitle:  "A self-contained exposition following Yeh (2014)",
    major:     "Mathematics",
    spec:      "Analysis",
    lecturer:  "Assoc. Prof. Bui Le Trong Thanh",
  },

  // --- Mục lục (Table of Contents) ---
  // tocMode "manual" → dùng mảng toc bên dưới
  // tocMode "auto"   → tự đọc heading cấp 1-3 từ file hiện tại (level tự động)
  tocMode: "manual",
  toc: [
    { level: 1, title: "Preliminaries",                          page: 1  },
    { level: 2, title: "σ-algebras and measure spaces",          page: 1  },
    { level: 2, title: "Null sets and completeness",             page: 4  },
    { level: 1, title: "Completion of Measure Spaces",           page: 6  },
    { level: 2, title: "The completion construction",            page: 6  },
    { level: 2, title: "Uniqueness of the completion",           page: 9  },
    { level: 2, title: "From Borel to Lebesgue measure",         page: 11 },
    { level: 1, title: "References",                             page: 14 },
  ],
};
// ══════════════════════════════════════════════════════════

// Logo
const logoFile = app.vault.getAbstractFileByPath("logo.png");
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";

// Sinh viên rows
const svRows = CONFIG.sinhVien.map((sv, i) =>
  '<tr><td class="lbl">' + (i === 0 ? "Student:" : "") + '</td>' +
  '<td>' + sv.ten + '&nbsp;&nbsp;&nbsp;&nbsp;<b>ID:</b> ' + sv.mssv + '</td></tr>'
).join("");

// TOC — auto mode: đọc heading từ file hiện tại
async function buildTocEntries() {
  if (CONFIG.tocMode === "manual") return CONFIG.toc;
  const file = dv.current().file;
  const content = await app.vault.read(app.vault.getAbstractFileByPath(file.path));
  const lines = content.split("\n");
  const entries = [];
  let counters = { 1: 0, 2: 0, 3: 0 };
  for (const line of lines) {
    const m = line.match(/^(#{1,3})\s+(.+)/);
    if (!m) continue;
    const lvl = m[1].length;
    counters[lvl]++;
    if (lvl < 3) Object.keys(counters).forEach(k => { if (k > lvl) counters[k] = 0; });
    const prefix = lvl === 1
      ? counters[1] + ". "
      : lvl === 2
      ? counters[1] + "." + counters[2] + " "
      : counters[1] + "." + counters[2] + "." + counters[3] + " ";
    entries.push({ level: lvl, title: prefix + m[2].trim(), page: "—" });
  }
  return entries;
}

function buildTocRows(entries) {
  return entries.map(e => {
    const cls  = e.level === 1 ? "toc-l1" : e.level === 2 ? "toc-l2" : "toc-l3";
    const txt  = e.level === 1 ? "<b>" + e.title + "</b>" : e.title;
    const pg   = e.level === 1 ? "<b>" + e.page  + "</b>" : e.page;
    return '<tr class="' + cls + '"><td class="toc-title">' + txt +
           '</td><td class="toc-dots"></td><td class="toc-page">' + pg + '</td></tr>';
  }).join("");
}

const tocEntries = await buildTocEntries();

this.container.innerHTML =

/* ═══ PAGE 1 : COVER ═══════════════════════════════════ */
'<div class="my-cover">' +
'<div class="my-cover-inner" style="display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;">' +
  '<div class="cover-header">' +
    '<div class="cover-university">Vietnam National University – Ho Chi Minh City<br>University of Science</div>' +
    '<div class="cover-faculty">Faculty of Mathematics and Computer Science</div>' +
  '</div>' +
  '<div class="cover-logo"><img src="' + logoSrc + '" alt="HCMUS" onerror="this.style.display=\'none\'" /></div>' +
  '<div class="cover-title-block">' +
    '<div class="cover-subtitle">' + CONFIG.loaiBai + ' · ' + CONFIG.monHoc + '</div>' +
    '<div class="cover-main-title">' + CONFIG.tenDeTai + '</div>' +
    '<div class="cover-major"><b>Major:</b> ' + CONFIG.nganh + '<br><b>Specialisation:</b> ' + CONFIG.chuyenNganh + '</div>' +
  '</div>' +
  '<div><table class="cover-info-table">' +
    '<tr><td class="lbl">Lecturer:</td><td>' + CONFIG.giangVien + '</td></tr>' +
    svRows +
  '</table></div>' +
  '<div class="cover-date">Ho Chi Minh City, ' + moment().format("MMMM D, YYYY") + '</div>' +
'</div></div>' +

/* ═══ PAGE 2 : BLANK ════════════════════════════════════ */
'<div class="page-blank"></div>' +

/* ═══ PAGE 3 : TITLE PAGE ══════════════════════════════ */
'<div class="title-page"><div class="title-page-inner">' +
  '<p class="tp-course">' + CONFIG.titlePage.course + '</p>' +
  '<p class="tp-type">'   + CONFIG.titlePage.type   + '</p>' +
  '<div class="tp-rule"></div>' +
  '<p class="tp-title">'    + CONFIG.titlePage.title    + '</p>' +
  '<p class="tp-subtitle">' + CONFIG.titlePage.subtitle + '</p>' +
  '<div class="tp-rule"></div>' +
  '<table class="tp-info-table">' +
    '<tr><td class="lbl">Major</td><td>'          + CONFIG.titlePage.major    + '</td></tr>' +
    '<tr><td class="lbl">Specialisation</td><td>' + CONFIG.titlePage.spec     + '</td></tr>' +
    '<tr><td class="lbl">Supervisor</td><td>'     + CONFIG.titlePage.lecturer + '</td></tr>' +
    CONFIG.sinhVien.map((sv, i) =>
      '<tr><td class="lbl">' + (i === 0 ? "Author" : "") + '</td>' +
      '<td>' + sv.ten + '&nbsp;&nbsp;<span class="tp-mssv">ID&thinsp;' + sv.mssv + '</span></td></tr>'
    ).join("") +
  '</table>' +
  '<p class="tp-date">Ho Chi Minh City &thinsp;·&thinsp; ' + moment().format("YYYY") + '</p>' +
'</div></div>' +

/* ═══ PAGE 4 : BLANK ════════════════════════════════════ */
'<div class="page-blank"></div>' +

/* ═══ PAGE 5 : TABLE OF CONTENTS ════════════════════════ */
'<div class="toc-page">' +
  '<p class="toc-heading">Contents</p>' +
  '<table class="toc-table">' + buildTocRows(tocEntries) + '</table>' +
'</div>' +

/* ═══ PAGE 6 : BLANK ════════════════════════════════════ */
'<div class="page-blank"></div>';
```
# [I] Construction of Measure by Means of Outer Measure

> [!def] Lấy X là tập bất kì: $\mu^{*}:2^{X} \to [0,+\infty]$ được gọi là độ đo ngoài nếu: 
> 1. $\mu^{*}(\emptyset) = 0$
> 2.  đơn điệu: $E_{1},E_{2} \in \mathfrak{B}(X)$, $E_{1} \subset E_{2}\implies \mu^{*}(E_{1})\le\mu^{*}(E_{2})$
> 3. $\sigma$ - dưới cộng tính: $(E_{n}:n \in N)\subset \mathfrak{B}(X)\implies \mu^{*}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right)\le \sum_{n \in \mathbb{N}} \mu^{*}(E_{n})$

Mục tiêu: Xây dựng $\sigma$ - đại số liên quan $\mu^{*}$:  $\mu^{*}|_{\sigma \text{- đại số}}$ là độ đo 
$$
\sigma \text{ - cộng tính} \iff \begin{cases}
\sigma \text{ - dưới cộng tính} \\
\text{cộng tính hữu hạn}
\end{cases}
$$
> [!def] Cho $\mu^{*}$ là độ đo ngoài, tập $E$ được gọi là đo được theo nghĩa $\mu^{*}$ nếu:
> $$
> \forall T \subset X : \mu^*(T) = \mu^*(T \cap E) + \mu^*(T \cap E^c) \tag{1}
> $$
> Trong đó $T$ là tập thử bất kì trên $X$
> ký hiệu: $\mathfrak{M}(\mu^{*}) = \{ E: E \text{ - đo được } \mu^{*} \}$
> 

> [!lem] $\mathfrak{M}(\mu^{*})$ là đại số trên $X$

```




