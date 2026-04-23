```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG - TÙY CHỈNH THÔNG TIN TIỂU LUẬN
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- TÍNH NĂNG BẬT/TẮT (true: Hiện, false: Ẩn) ---
  showCover:          true,   // true = có trang bìa (trang 1)
  showTitlePage:      true,   // true = có trang tiêu đề phụ (trang 2)
  showTOC:            true,   // true = có mục lục
  showCalloutBorder:  true,   // false = ẩn viền tất cả math callout (math-framed)

  // 1. Thông tin chung
  truong:       "Đại học Quốc gia Thành phố Hồ Chí Minh\nTrường Đại học Khoa học Tự nhiên",
  khoa:         "Khoa Toán – Tin học",
  monHoc:       "Lý thuyết Độ đo và Tích phân",
  loaiBai:      "Bài tiểu luận giữa kì",
  tenDeTai:     "Sự đầy đủ hoá của không gian đo",
  nganh:        "Toán học",
  chuyenNganh:  "Giải tích",
  giangVien:    "PGS.TS. Bùi Lê Trọng Thanh",

  // 2. Thông tin sinh viên
  sinhVien: [
    { ten: "Huy", mssv: "24110022" }
  ],

  // 3. Thời gian & Địa điểm
  diaDiem:   "Thành phố Hồ Chí Minh",
  ngayThang: "",

  // 4. Đường dẫn Logo
  logoPath:  "A_template/logo.png",

  // 5. Cấu hình Title Page
  titlePage: {
    titleLine: "Bài tiểu luận giữa kì Lý thuyết Độ đo và Tích phân",
    authors:   ["Huy - MSSV: 24110022"],
  },

  // 6. Cấu hình Mục lục
  tocHeading: "Mục Lục",
  toc: [
    { level: 1, num: "0",   title: "Kiến thức chuẩn bị",                                                page: 1 },
    { level: 1, num: "1",   title: "Sự đầy đủ hoá của không gian đo",                                   page: 3 },
    { level: 2, num: "1.1", title: "Mở rộng toàn phần và tính đầy đủ của không gian đo",                page: 3 },
    { level: 2, num: "1.2", title: "Đầy đủ hoá không gian độ đo Borel thành không gian đo Lebesgue",    page: 8 },
  ],
};
// ╚══════════════════════════════════════════════════════════╝

// --- XỬ LÝ DỮ LIỆU ĐẦU VÀO ---
const logoFile = app.vault.getAbstractFileByPath(CONFIG.logoPath);
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";
const logoHtml = logoSrc
  ? `<img src="${logoSrc}" alt="Logo" />`
  : `<div style="height: 100px;">(Không tìm thấy Logo)</div>`;

let dateStr = CONFIG.ngayThang;
if (!dateStr) {
  const dd = moment().format("DD");
  const mm = moment().format("MM");
  const yy = moment().format("YYYY");
  dateStr = `ngày ${dd} tháng ${mm} năm ${yy}`;
}

const svRows = CONFIG.sinhVien.map((sv, i) => `
  <tr>
    <td class="lbl">${i === 0 ? "Sinh viên:" : ""}</td>
    <td>${sv.ten} <span style="display:inline-block; width:1.5em;"></span> <b>MSSV:</b> ${sv.mssv}</td>
  </tr>
`).join("");

function buildTocRows(entries) {
  return entries.map(e => `
    <tr class="toc-l${e.level}">
      <td class="toc-num">${e.num}</td>
      <td class="toc-title">${e.title}</td>
      <td class="toc-dots"></td>
      <td class="toc-pgnum">${e.page}</td>
    </tr>
  `).join("");
}

// --- RENDER GIAO DIỆN THEO ĐIỀU KIỆN BẬT/TẮT ---

// Override CSS: tắt viền callout nếu showCalloutBorder = false
// Hoạt động bằng cách inject <style> ghi đè --math-border-width về 0
// math-framed.css dùng biến này cho toàn bộ callout → tự động ẩn viền
// Khi tắt border, đồng thời reset padding về 0 để callout canh lề
// thẳng với body text, tránh hiện tượng thụt vào bất thường
const calloutBorderStyle = CONFIG.showCalloutBorder ? "" : `
<style>
  :root {
    --math-border-width: 0px;
    --math-border-radius: 0px;
    --math-padding: 0;
    --math-margin: var(--ac-space-sm) 0;
  }
</style>
`;

let finalHTML = calloutBorderStyle;

// 1. KHỐI TRANG BÌA CHÍNH
if (CONFIG.showCover) {
  finalHTML += `
    <div class="my-cover">
      <div class="my-cover-inner">
        <div class="cover-header">
          <div class="cover-university">${CONFIG.truong.replace(/\n/g, "<br>")}</div>
          <div class="cover-faculty">${CONFIG.khoa}</div>
        </div>
        <div class="cover-logo">${logoHtml}</div>
        <div class="cover-title-block">
          <div class="cover-subtitle">${CONFIG.loaiBai}<br>${CONFIG.monHoc}</div>
          <div class="cover-main-title">${CONFIG.tenDeTai}</div>
          <div class="cover-major"><b>Ngành:</b> ${CONFIG.nganh}<br><b>Chuyên ngành:</b> ${CONFIG.chuyenNganh}</div>
        </div>
        <div>
          <table class="cover-info-table">
            <tr><td class="lbl">Giảng viên:</td><td>${CONFIG.giangVien}</td></tr>
            ${svRows}
          </table>
        </div>
        <div class="cover-date">${CONFIG.diaDiem}, ${dateStr}</div>
      </div>
    </div>
  `;
}

// Chèn trang trắng phân cách nếu có Cover VÀ có ít nhất 1 trang phía sau
if (CONFIG.showCover && (CONFIG.showTitlePage || CONFIG.showTOC)) {
  finalHTML += `<div class="page-blank"></div>`;
}

// 2. KHỐI TRANG PHỤ BÌA (Title Page)
if (CONFIG.showTitlePage) {
  finalHTML += `
    <div class="title-page">
      <div class="title-page-inner">
        <p class="tp-title">${CONFIG.titlePage.titleLine}</p>
        <p class="tp-authors">${CONFIG.titlePage.authors.join("<br>")}</p>
        <p class="tp-date">${CONFIG.diaDiem}, ${dateStr}</p>
      </div>
    </div>
  `;
}

// Chèn trang trắng giữa Title Page và Mục lục (nếu cả 2 đều được bật)
if (CONFIG.showTitlePage && CONFIG.showTOC) {
  finalHTML += `<div class="page-blank"></div>`;
}

// 3. KHỐI MỤC LỤC
if (CONFIG.showTOC) {
  finalHTML += `
    <div class="toc-section">
      <p class="toc-heading">${CONFIG.tocHeading}</p>
      <table class="toc-table">
        ${buildTocRows(CONFIG.toc)}
      </table>
    </div>
  `;
}

// Đổ toàn bộ kết quả ra giao diện
this.container.innerHTML = finalHTML;
```