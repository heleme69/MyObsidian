```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  monHoc:       "Lý thuyết Độ đo và Tích phân",
  loaiBai:      "Bài tiểu luận giữa kì",
  tenDeTai:     "Sự đầy đủ hoá của không gian đo",
  nganh:        "Toán học",
  chuyenNganh:  "Giải tích",
  giangVien:    "PGS.TS. Bùi Lê Trọng Thanh",
  sinhVien: [
    { ten: "Huy", mssv: "24110022" }
  ],
  titlePage: {
    titleLine: "Bài tiểu luận giữa kì Lý thuyết Độ đo và Tích phân",
    authors:   ["Huy - MSSV: 24110022"],
  },
  tocHeading: "Mục Lục",

  // BẢN MỤC LỤC CHẠY BẰNG CƠM (CHỈ DÙNG ĐỂ IN PDF LẤY SỐ TRANG)
  toc: [
    { level: 1, num: "0",   title: "Kiến thức chuẩn bị",                                                page: 1  },
    { level: 1, num: "1",   title: "Sự đầy đủ hoá của không gian đo",                                   page: 3  },
    { level: 2, num: "1.1", title: "Mở rộng toàn phần và tính đầy đủ của không gian đo",                page: 3  },
    { level: 2, num: "1.2", title: "Đầy đủ hoá không gian độ đo Borel thành không gian đo Lebesgue",    page: 8  },
  ],
};
// ══════════════════════════════════════════════════════════

const logoFile = app.vault.getAbstractFileByPath("A_template/logo.png");
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";

const svRows = CONFIG.sinhVien.map((sv, i) =>
  '<tr><td class="lbl">' + (i === 0 ? "Sinh viên:" : "") + '</td>' +
  '<td>' + sv.ten + '&nbsp;&nbsp;&nbsp;&nbsp;<b>MSSV:</b> ' + sv.mssv + '</td></tr>'
).join("");

function buildTocRows(entries) {
  return entries.map(e => {
    const cls = "toc-l" + e.level;
    return '<tr class="' + cls + '">' +
      '<td class="toc-num">'   + e.num + '</td>' +
      '<td class="toc-title">' + e.title + '</td>' +
      '<td class="toc-dots"></td>' +
      '<td class="toc-pgnum">' + e.page  + '</td>' +
    '</tr>';
  }).join("");
}

const dd = moment().format("DD");
const mm = moment().format("MM");
const yy = moment().format("YYYY");

this.container.innerHTML =

/* PAGE 1 : COVER */
'<div class="my-cover">' +
'<div class="my-cover-inner">' +
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
  '<div class="cover-date">Thành phố Hồ Chí Minh, ngày ' + dd + ' tháng ' + mm + ' năm ' + yy + '</div>' +
'</div></div>' +

/* PAGE 2 : BLANK */
'<div class="page-blank"></div>' +

/* PAGE 3 : TITLE PAGE */
'<div class="title-page"><div class="title-page-inner">' +
  '<p class="tp-title">'   + CONFIG.titlePage.titleLine            + '</p>' +
  '<p class="tp-authors">' + CONFIG.titlePage.authors.join("<br>") + '</p>' +
  '<p class="tp-date">Thành phố Hồ Chí Minh, ' + dd + ' tháng ' + mm + ' năm ' + yy   + '</p>' +
'</div></div>' +

/* PAGE 4 : BLANK */
'<div class="page-blank"></div>' +

/* PAGE 5 : MỤC LỤC KHI IN PDF (DÀNH CHO DATAVIEWJS) */
'<div class="toc-section">' +
  '<p class="toc-heading">' + CONFIG.tocHeading + '</p>' +
  '<table class="toc-table">' + buildTocRows(CONFIG.toc) + '</table>' +
'</div>' +

/* KẾT THÚC KỊCH BẢN DATAVIEWJS */
'';
```