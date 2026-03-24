---
cssclasses: [latex-doc]
---

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
  hocVien: [
    { ten: "Huy", mssv: "24110022" },
    // { ten: "Nguyễn Văn B", mssv: "24110023" },
  ],
};
// ============================================================

let logoSrc = "";
const logoFile = app.vault.getAbstractFileByPath("logo.png");
if (logoFile) {
  logoSrc = app.vault.getResourcePath(logoFile);
} else {
  const base = app.vault.adapter.basePath.replace(/\\/g, "/");
  logoSrc = `app://local/${base}/logo.png`;
}

const hocVienRows = CONFIG.hocVien.map((hv, i) => `
  <tr>
    <td class="lbl">${i === 0 ? "Học viên:" : ""}</td>
    <td>${hv.ten}&nbsp;&nbsp;&nbsp;&nbsp;<b>MSSV:</b> ${hv.mssv}</td>
  </tr>`
).join("");

this.container.innerHTML = `
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
      <img src="${logoSrc}" alt="Logo HCMUS" />
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
        ${hocVienRows}
      </table>
    </div>
    <div class="cover-date">
      Thành phố Hồ Chí Minh, ngày ${moment().format("DD")} tháng ${moment().format("MM")} năm ${moment().format("YYYY")}
    </div>
  </div>
</div>`;
```

<div class="page-break"></div>

# Mục lục

<div class="toc">

| | |
|:--|--:|
| **0 &ensp; Kiến thức chuẩn bị** | **1** |
| **1 &ensp; Sự đầy đủ hoá của không gian đo** | **3** |
| &emsp; 1.1 &ensp; Mở rộng toàn phần và tính đầy đủ của không gian đo | 3 |
| &emsp; 1.2 &ensp; Đầy đủ hoá không gian độ đo Borel thành không gian độ đo Lebesgue | 8 |

</div>

<div class="page-break"></div>

# 0 &ensp; Kiến thức chuẩn bị

Phần này nhắc lại một số khái niệm cơ bản sẽ được sử dụng xuyên suốt bài luận.

> [!def]
> Cho $X$ là một tập hợp khác rỗng. Một **họ** $\mathcal{M} \subseteq \mathcal{P}(X)$ được gọi là một **$\sigma$-đại số** trên $X$ nếu thoả mãn ba điều kiện sau:
>
> 1. $X \in \mathcal{M}$.
> 2. Nếu $A \in \mathcal{M}$ thì $A^c = X \setminus A \in \mathcal{M}$.
> 3. Nếu $(A_n)_{n \geq 1} \subseteq \mathcal{M}$ thì $\displaystyle\bigcup_{n=1}^{\infty} A_n \in \mathcal{M}$.
>
> Khi đó cặp $(X, \mathcal{M})$ được gọi là một **không gian đo được**.
