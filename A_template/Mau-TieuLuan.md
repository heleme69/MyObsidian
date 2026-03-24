```dataviewjs
// ============================================================
//  CẤU HÌNH BÌA — Chỉnh sửa tại đây
// ============================================================
const CONFIG = {
  monHoc:      "Lý thuyết Độ đo và Tích phân",
  loaiBai:     "Bài tiểu luận giữa kì",
  tenDeTai:    "Sự đầy đủ hoá của không gian đo",
  nganh:       "Toán học",
  chuyenNganh: "Giải tích",
  giangVien:   "PGS.TS. Bùi Lê Trọng Thanh",
  sinhVien: [
    { ten: "Huy", mssv: "24110022" },
    // { ten: "Nguyễn Văn B", mssv: "24110023" },
  ],
};
// ============================================================

// Fix logo: tìm TFile trong vault rồi lấy URL đúng
const logoFile = app.vault.getAbstractFileByPath("logo.png");
const logoSrc  = logoFile
  ? app.vault.getResourcePath(logoFile)
  : "";

const sinhVienRows = CONFIG.sinhVien.map((sv, i) => `
  <tr>
    <td class="lbl">${i === 0 ? "Sinh viên:" : ""}</td>
    <td>${sv.ten} &nbsp;&nbsp;&nbsp;&nbsp; <b>MSSV:</b> ${sv.mssv}</td>
  </tr>`
).join("");

const cover = `
<div class="my-cover">
  <div class="my-cover-inner">

    <div class="cover-header">
      <div class="cover-university">
        Đại học Quốc gia Thành phố Hồ Chí Minh<br>
        Trường Đại học Khoa học Tự nhiên
      </div>
      <div class="cover-faculty">Khoa Toán – Tin học</div>
    </div>

    <div class="cover-logo">
      <img src="${logoSrc}" alt="Logo HCMUS" onerror="this.style.display='none'" />
    </div>

    <div class="cover-title-block">
      <div class="cover-subtitle">${CONFIG.loaiBai} ${CONFIG.monHoc}</div>
      <div class="cover-main-title">${CONFIG.tenDeTai}</div>
      <div class="cover-major">
        <b>Ngành:</b> ${CONFIG.nganh}<br>
        <b>Chuyên ngành:</b> ${CONFIG.chuyenNganh}
      </div>
    </div>

    <div>
      <table class="cover-info-table">
        <tr>
          <td class="lbl">Giảng viên:</td>
          <td>${CONFIG.giangVien}</td>
        </tr>
        ${sinhVienRows}
      </table>
    </div>

    <div class="cover-date">
      Thành phố Hồ Chí Minh, ngày ${moment().format("DD")} tháng ${moment().format("MM")} năm ${moment().format("YYYY")}
    </div>

  </div>
</div>
`;
this.container.innerHTML = cover;
```