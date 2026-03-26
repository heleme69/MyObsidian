```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG - TÙY CHỈNH THÔNG TIN TIỂU LUẬN
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // 1. Thông tin chung (Tự do thay đổi không lo vỡ form)
  truong:       "Đại học Quốc gia Thành phố Hồ Chí Minh\nTrường Đại học Khoa học Tự nhiên",
  khoa:         "Khoa Toán – Tin học",
  monHoc:       "Lý thuyết Độ đo và Tích phân",
  loaiBai:      "Bài tiểu luận giữa kì",
  tenDeTai:     "Sự đầy đủ hoá của không gian đo",
  nganh:        "Toán học",
  chuyenNganh:  "Giải tích",
  giangVien:    "PGS.TS. Bùi Lê Trọng Thanh",

  // 2. Thông tin sinh viên (Có thể thêm nhiều dòng {ten, mssv})
  sinhVien: [
    { ten: "Huy", mssv: "24110022" }
  ],

  // 3. Thời gian & Địa điểm (Để trống "" sẽ tự động lấy ngày hiện tại)
  diaDiem:   "Thành phố Hồ Chí Minh",
  ngayThang: "", 

  // 4. Đường dẫn Logo
  logoPath:  "A_template/logo.png",

  // 5. Cấu hình Title Page (Trang phụ bìa)
  titlePage: {
    titleLine: "Bài tiểu luận giữa kì Lý thuyết Độ đo và Tích phân",
    authors:   ["Huy - MSSV: 24110022"],
  },

  // 6. Cấu hình Mục lục (Bản thủ công khi in PDF)
  tocHeading: "Mục Lục",
  toc: [
    { level: 1, num: "0",   title: "Kiến thức chuẩn bị",                                                page: 1  },
    { level: 1, num: "1",   title: "Sự đầy đủ hoá của không gian đo",                                   page: 3  },
    { level: 2, num: "1.1", title: "Mở rộng toàn phần và tính đầy đủ của không gian đo",                page: 3  },
    { level: 2, num: "1.2", title: "Đầy đủ hoá không gian độ đo Borel thành không gian đo Lebesgue",    page: 8  },
  ],
};
// ╚══════════════════════════════════════════════════════════╝

// --- XỬ LÝ DỮ LIỆU ĐẦU VÀO ---

// 1. Load Logo an toàn
const logoFile = app.vault.getAbstractFileByPath(CONFIG.logoPath);
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";
const logoHtml = logoSrc ? `<img src="${logoSrc}" alt="Logo" />` : `<div style="height: 100px;">(Không tìm thấy Logo)</div>`;

// 2. Xử lý ngày tháng tự động
let dateStr = CONFIG.ngayThang;
if (!dateStr) {
  const dd = moment().format("DD");
  const mm = moment().format("MM");
  const yy = moment().format("YYYY");
  dateStr = `ngày ${dd} tháng ${mm} năm ${yy}`;
}

// 3. Khởi tạo danh sách Sinh viên (Dùng span thay cho &nbsp; để chống tràn chữ)
const svRows = CONFIG.sinhVien.map((sv, i) => `
  <tr>
    <td class="lbl">${i === 0 ? "Sinh viên:" : ""}</td>
    <td>${sv.ten} <span style="display:inline-block; width:1.5em;"></span> <b>MSSV:</b> ${sv.mssv}</td>
  </tr>
`).join("");

// 4. Khởi tạo Mục lục
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

// --- RENDER GIAO DIỆN (KẾT NỐI VỚI CSS) ---
this.container.innerHTML = `

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

<div class="page-blank"></div>

<div class="title-page">
  <div class="title-page-inner">
    <p class="tp-title">${CONFIG.titlePage.titleLine}</p>
    <p class="tp-authors">${CONFIG.titlePage.authors.join("<br>")}</p>
    <p class="tp-date">${CONFIG.diaDiem}, ${dateStr}</p>
  </div>
</div>

<div class="page-blank"></div>

<div class="toc-section">
  <p class="toc-heading">${CONFIG.tocHeading}</p>
  <table class="toc-table">
    ${buildTocRows(CONFIG.toc)}
  </table>
</div>

`;
```