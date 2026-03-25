```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- Bìa ---
  monHoc:       "Lý thuyết Độ đo và Tích phân",
  loaiBai:      "Bài tiểu luận giữa kì",
  tenDeTai:     "Sự đầy đủ hoá của không gian đo",
  nganh:        "Toán học",
  chuyenNganh:  "Giải tích",
  giangVien:    "PGS.TS. Bùi Lê Trọng Thanh",
  sinhVien: [
    { ten: "Huy", mssv: "24110022" },
    // { ten: "Nguyen Van B", mssv: "24110023" },
  ],

  // --- Title page ---
  titlePage: {
    titleLine: "Bài tiểu luận giữa kì Lý thuyết Độ đo và Tích phân",
    authors:   ["Huy - MSSV: 24110022"],
  },

  // --- TOC heading ---
  tocHeading: "Mục lục",

  // --- PDF fallback TOC (dùng khi export PDF, plugin không in được) ---
  // Cập nhật số trang sau khi viết xong bài
  toc: [
    { level: 1, num: "0",   title: "Kiến thức chuẩn bị",                                                    page: 1  },
    { level: 1, num: "1",   title: "Sự đầy đủ hoá của không gian đo",                                       page: 3  },
    { level: 2, num: "1.1", title: "Mở rộng toàn phần và tính đầy đủ của không gian đo",                    page: 3  },
    { level: 2, num: "1.2", title: "Đầy đủ hoá không gian độ đo Borel thành không gian độ đo Lebesgue",     page: 8  },
  ],
};
// ══════════════════════════════════════════════════════════

// Logo
const logoFile = app.vault.getAbstractFileByPath("logo.png");
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";

// Sinh viên rows
const svRows = CONFIG.sinhVien.map((sv, i) =>
  '<tr><td class="lbl">' + (i === 0 ? "Học viên:" : "") + '</td>' +
  '<td>' + sv.ten + '&nbsp;&nbsp;&nbsp;&nbsp;<b>MSSV:</b> ' + sv.mssv + '</td></tr>'
).join("");

// PDF fallback TOC rows
function buildTocRows(entries) {
  return entries.map(e => {
    const cls  = "toc-l" + e.level;
    const bold = e.level === 1;
    const txt  = bold ? "<b>" + e.title + "</b>" : e.title;
    const pg   = bold ? "<b>" + e.page  + "</b>" : e.page;
    const num  = bold ? "<b>" + e.num   + "</b>" : e.num;
    return '<tr class="' + cls + '">' +
      '<td class="toc-num">'   + num + '</td>' +
      '<td class="toc-title">' + txt + '</td>' +
      '<td class="toc-dots"></td>' +
      '<td class="toc-pgnum">' + pg  + '</td>' +
    '</tr>';
  }).join("");
}

this.container.innerHTML =

/* PAGE 1 : COVER */
'<div class="my-cover">' +
'<div class="my-cover-inner" style="display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;">' +
  '<div class="cover-header">' +
    '<div class="cover-university">Đại học Quốc gia Thành phố Hồ Chí Minh<br>Trường Đại học Khoa học Tự nhiên</div>' +
    '<div class="cover-faculty">Khoa Toán – Tin học</div>' +
  '</div>' +
  '<div class="cover-logo"><img src="' + logoSrc + '" alt="Logo HCMUS" onerror="this.style.display=\'none\'" /></div>' +
  '<div class="cover-title-block">' +
    '<div class="cover-subtitle">' + CONFIG.loaiBai + ' ' + CONFIG.monHoc + '</div>' +
    '<div class="cover-main-title">' + CONFIG.tenDeTai + '</div>' +
    '<div class="cover-major"><b>Ngành:</b> ' + CONFIG.nganh + '<br><b>Chuyên ngành:</b> ' + CONFIG.chuyenNganh + '</div>' +
  '</div>' +
  '<div><table class="cover-info-table">' +
    '<tr><td class="lbl">Giảng viên:</td><td>' + CONFIG.giangVien + '</td></tr>' +
    svRows +
  '</table></div>' +
  '<div class="cover-date">Thành phố Hồ Chí Minh, ngày ' + moment().format("DD") + ' tháng ' + moment().format("MM") + ' năm ' + moment().format("YYYY") + '</div>' +
'</div></div>' +

/* PAGE 2 : BLANK */
'<div class="page-blank"></div>' +

/* PAGE 3 : TITLE PAGE */
'<div class="title-page"><div class="title-page-inner">' +
  '<p class="tp-title">' + CONFIG.titlePage.titleLine + '</p>' +
  '<p class="tp-authors">' + CONFIG.titlePage.authors.join("<br>") + '</p>' +
  '<p class="tp-date">' + moment().format("DD") + ' tháng ' + moment().format("MM") + ' năm ' + moment().format("YYYY") + '</p>' +
'</div></div>' +

/* PAGE 4 : BLANK */
'<div class="page-blank"></div>' +

/* PAGE 5 : TOC — plugin wrapper (screen only, auto-updates) */
/* NOTE: codeblock ```table-of-contents``` đặt bên dưới dataviewjs block này */
/* CSS sẽ ẩn .toc-section trên screen nếu .toc-plugin-wrapper hiện diện      */
'<div class="toc-plugin-wrapper">' +
  '<p class="toc-plugin-heading">' + CONFIG.tocHeading + '</p>' +
'</div>' +

/* PAGE 5b : TOC — dataviewjs fallback (ẩn trên screen, hiện khi in PDF) */
'<div class="toc-section">' +
  '<p class="toc-heading">' + CONFIG.tocHeading + '</p>' +
  '<table class="toc-table">' + buildTocRows(CONFIG.toc) + '</table>' +
'</div>' +

/* PAGE 6 : BLANK */
'<div class="page-blank"></div>';
```