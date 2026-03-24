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

# [I] Construction of Measure by Means of Outer Measure

> [!def] Lấy X là tập bất kì: $\mu^{*}:2^{X} \to [0,+\infty]$ được gọi là độ đo ngoài nếu: 
> 1. $\mu^{*}(\emptyset) = 0$
> 2.  đơn điệu: $E_{1},E_{2} \in \mathfrak{B}(X)$, $E_{1} \subset E_{2}\implies \mu^{*}(E_{1})\le\mu^{*}(E_{2})$
> 3. $\sigma$ - dưới cộng tính: $(E_{n}:n \in N)\subset \mathfrak{B}(X)\implies \mu^{*}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right)\le \sum_{n \in \mathbb{N}} \mu^{*}(E_{n})$

Mục tiêu: Xây dựng $\sigma$ - đại số liên quan $\mu^{*}$:  $\mu^{*}|_{\sigma \text{- đại số}}$ là độ đo 

> [!def] Cho $\mu^{*}$ là độ đo ngoài, tập $E$ được gọi là đo được theo nghĩa $\mu^{*}$ nếu:
> $$
> \forall T \subset X : \mu^*(T) = \mu^*(T \cap E) + \mu^*(T \cap E^c) \tag{1}
> $$
> Trong đó $T$ là tập thử bất kì trên $X$
> ký hiệu: $\mathfrak{M}(\mu^{*}) = \{ E: E \text{ - đo được } \mu^{*} \}$
> 

> [!lem] $\mathfrak{M}(\mu^{*})$ là đại số trên $X$

> [!obs] $\sigma$ - dưới cộng tính
> Vì $\sigma$ - dưới cộng tính suy ra tính hữu hạn cộng tính, ta có với $A = (A \cap E) \cup(A \cap E^{c})$ $\implies$ $\mu^{*}(A)\le \mu^{*}(A \cap E) + \mu^{*}(A \cap E^{c})$

> [!prf] 
> 1. Lấy $E = \emptyset$, với $T \in X$ bất kì, ta có:
>     - $T \cap \emptyset = \emptyset$ $\implies$ $\mu^{*}(\emptyset) = \emptyset$
>     - $T \cap \emptyset^{c} = T \cap X = T$ $\implies$ $\mu^{*}(T)$
>     - $0 + \mu^{*}(T) = \mu^{*}(T)$
>     Vậy $\emptyset \in \mathfrak{M}(\mu^{*})$ 
> 2. Lấy $E \in \mathfrak{M}(\mu^{*})$, ta có $E^{c} \in \mathfrak{M(\mu^{*})}$ do tính đối xứng của $(1)$
> 3. Lấy $A, B \in \mathfrak{M}$, ta cần chứng minh: $\mu^{*}(T) = \mu^{*}(T \cap (A \cup B)) + \mu^{*}(T \cap (A \cup B)^{c}$
>     - Sử dụng:
>    $$
>       \begin{align*}
>    T &= (T \cap A) \cup (T \cap A^{c}) \\
>    &= (T \cap A) \cup (T \cap A^{c}\cap B) \cup (T \cap A^{c} \cap B^{c}) \\
>    &= (T \cap A) \cup (T \cap A^{c}\cap B) \cup (T \cap(A \cup B)^{c}) \\
>    &= ((T \cap A) \cup (T \cap A^{c}\cap B)) \cup (T \cap(A \cup B)^{c}) \\
>    &= (T \cap(A \cup B)) \cup (T \cap (A \cup B)^{c})
>    \end{align*} 
>    $$
>     - Ta có:
>    $$
>    \begin{align*} & \text{Vì } \mu^* \Big( (T \cap A) \cup (T \cap A^c \cap B) \Big) \ge \mu^* \Big( T \cap (A \cup B) \Big) \\ \implies & \mu^* \Big( (T \cap A) \cup (T \cap A^c \cap B) \cup (T \cap(A \cup B)^c) \Big) \\ &\quad = \mu^*(T) \\ &\quad \ge \mu^* \Big( (T \cap(A \cup B)) \cup (T \cap (A \cup B)^c) \Big) \end{align*}
>    $$
>     - Kết hợp $\text{Observation 1.}$ ta kết luận $A \cup B \in \mathfrak{M}$

 







$$
\forall T \subset X : \mu^*(T) = \mu^*(T \cap E) + \mu^*(T \cap E^c) \tag{1}
$$
$\pi^{}$
