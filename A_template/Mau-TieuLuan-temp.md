```dataviewjs

// ============================================================

//  CẤU HÌNH BÌA — Chỉnh sửa tại đây

// ============================================================

const CONFIG = {

&#x20; monHoc:      "Lý thuyết Độ đo và Tích phân",

&#x20; loaiBai:     "Bài tiểu luận giữa kì",

&#x20; tenDeTai:    "Sự đầy đủ hoá của không gian đo",

&#x20; nganh:       "Toán học",

&#x20; chuyenNganh: "Giải tích",

&#x20; giangVien:   "PGS.TS. Bùi Lê Trọng Thanh",

&#x20; hocVien: \[

&#x20;   { ten: "Huy", mssv: "24110022" },

&#x20;   // { ten: "Nguyễn Văn B", mssv: "24110023" },

&#x20; ],

};

// ============================================================



// Fix logo: tìm TFile trong vault rồi lấy URL đúng

const logoFile = app.vault.getAbstractFileByPath("logo.png");

const logoSrc  = logoFile

&#x20; ? app.vault.getResourcePath(logoFile)

&#x20; : "";



const hocVienRows = CONFIG.hocVien.map((hv, i) => `

&#x20; <tr>

&#x20;   <td class="lbl">${i === 0 ? "Học viên:" : ""}</td>

&#x20;   <td>${hv.ten} \&nbsp;\&nbsp;\&nbsp;\&nbsp; <b>MSSV:</b> ${hv.mssv}</td>

&#x20; </tr>`

).join("");



const cover = `

<div class="my-cover">

&#x20; <div class="my-cover-inner">



&#x20;   <div class="cover-header">

&#x20;     <div class="cover-university">

&#x20;       Đại học Quốc gia Thành phố Hồ Chí Minh<br>

&#x20;       Trường Đại học Khoa học Tự nhiên

&#x20;     </div>

&#x20;     <div class="cover-faculty">Khoa Toán – Tin học</div>

&#x20;   </div>



&#x20;   <div class="cover-logo">

&#x20;     <img src="${logoSrc}" alt="Logo HCMUS" onerror="this.style.display='none'" />

&#x20;   </div>



&#x20;   <div class="cover-title-block">

&#x20;     <div class="cover-subtitle">${CONFIG.loaiBai} ${CONFIG.monHoc}</div>

&#x20;     <div class="cover-main-title">${CONFIG.tenDeTai}</div>

&#x20;     <div class="cover-major">

&#x20;       <b>Ngành:</b> ${CONFIG.nganh}<br>

&#x20;       <b>Chuyên ngành:</b> ${CONFIG.chuyenNganh}

&#x20;     </div>

&#x20;   </div>



&#x20;   <div>

&#x20;     <table class="cover-info-table">

&#x20;       <tr>

&#x20;         <td class="lbl">Giảng viên:</td>

&#x20;         <td>${CONFIG.giangVien}</td>

&#x20;       </tr>

&#x20;       ${hocVienRows}

&#x20;     </table>

&#x20;   </div>



&#x20;   <div class="cover-date">

&#x20;     Thành phố Hồ Chí Minh, ngày ${moment().format("DD")} tháng ${moment().format("MM")} năm ${moment().format("YYYY")}

&#x20;   </div>



&#x20; </div>

</div>

`;

this.container.innerHTML = cover;

```

