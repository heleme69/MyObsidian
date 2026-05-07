
```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG - TÙY CHỈNH THÔNG TIN TIỂU LUẬN
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- TÍNH NĂNG BẬT/TẮT (true: Hiện, false: Ẩn) ---
  showCover:          false,   // true = có trang bìa (trang 1)
  showTitlePage:      true,   // true = có trang tiêu đề phụ (trang 2)
  showTOC:            false,   // true = có mục lục
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
    titleLine: "Bài luận giữa kỳ Hàm biến phức",
    authors:   ["Lê Huy - MSSV: 24110022"],
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
const calloutBorderStyle = CONFIG.showCalloutBorder ? "" : `
<style>
  :root {
    --math-border-width: 0px;
    --math-border-radius: 0px;
    --math-padding: 0;
    --math-margin: var(--ac-space-lg) 0;
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
        </div>
        <div class="cover-info-block">
          <div class="cover-major"><b>Ngành:</b> ${CONFIG.nganh}<br><b>Chuyên ngành:</b> ${CONFIG.chuyenNganh}</div>
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

> [!prob]
> Tìm ảnh của tam giác vuông có ba đỉnh là 0,2,2+2i qua phép biến đổi hình học $w = f(z) = z^{2} + 1 + i$.

> [!ans]
> Gọi $D$ là miền tam giác vuôn có 3 đỉnh $O(0,0), A(2,0), B(2,2)$, biên $D$ gồm 3 đoạn: 
> - Đoạn $OA$: y = 0, với x $\in [0,2]$.
> - Đoạn $AB$: x = 2, với y $\in [0,2]$.
> - Đoạn $BO$: y = x, với x $\in [0,2]$.
> Ta phân tích $w = f(z) = z^{2} + 1 + i$ thành hai phép biến đổi:
> i. Phép lũy thừa: $w_{1} = z^{2}$         (biến $D$ thành $D_{1}$)
> ii. Phép tịnh tiến: $w = w_{1} + 1 + i$ (biến $D_{1}$ thành $D'$ )
> 1. Ánh xạ qua $w_{1} = z^{2}$
> 	Đặt $w_{1} = u_{1} + iv_{1}$. Ta có $w_{1} = (x + iy)^{2} = (x-y)^{2} + i(2xy)$, suy ra: 
> 	$$
> 	\begin{cases}
> 	u_{1} = x^{2} - y^{2}\\
> 	v_{1} = 2xy 
> 	\end{cases}
> 	$$
> 	- Ảnh đoạn $OA$ ($y = 0, 0 \leq x \leq 2$):
> 		Thế $y = 0$ vào hệ, ta được $u_{1} = x^{2}$ và $v_{1} = 0$.
> 		Vì $x \in [0,2]$ nên $u_{1} \in [0,4]$.
> 		Vậy ta được ảnh là đoạn thẳng nằm trên trục thực, nối từ điểm ${} (0) {}$ tới điểm ${} (4) {}$.
> 	- Ảnh đoạn $AB$ ($x = 2, 0 \le y \le 2$):
> 		Thế $x = 2$ vào hệ, ta được $u_1 = 4 - y^2$ và $v_1 = 4y \implies y = \frac{v_1}{4}$.
> 		Thế $y$ vào phương trình $u_1$, ta được: $u_1 = 4 - \frac{v_1^2}{16}$.
> 		Vì $y \in [0, 2]$ nên $v_1 \in [0, 8]$.
> 		Vậy ảnh là một cung parabol $u_1 = 4 - \frac{v_1^2}{16}$, nối từ điểm $(4)$ tới điểm ${} (8i) {}$.
> 	- Ảnh đoạn $BO$ ($y = x, 0 \le x \le 2$):
> 		Thế $y=x$ vào hệ, ta được $u_1 = 0$ và $v_1 = 2x^2$.
> 		Vì $x \in [0,2]$ nên $v_{1} \in [0,8]$.
> 		Vậy ảnh là đoạn thẳng nằm trên trục ảo, nối từ điểm ${} (8i)$ về điểm ${} (0) {}$.
> 		
> Kết luận bước 1: Miền $D$ được ánh xạ thành $D_{1}$ giới hạn bởi hai đoạn thẳng vuông góc $(0 \to 4)$ và $(0 \to 8i)$ và cung parabol $u_{1} = 4 - \frac{v_{1}^{2}}{16}$.
> 
> 2. Ánh xạ qua $w = w_{1} + 1 + i$
> 	Đặt $w = u + iv$. Đây là phép tịnh tiến theo vector tọa độ $(1,1)$. Ta có:
> 	$$
> 	\begin{cases}
> 	u = u_{1}+1 \\
> 	v = v_{1} +1 
> 	\end{cases}
> 	$$
> 	- Ảnh đoạn thẳng $OA$ ($v_{1} = 0, 0 \le u_{1} \le 4$):
> 		Thế $(v_{1} = 0)$, ta được $v = 1$.
> 		Vì $u_{1} \in [0,4]$ nên $u \in [0,5]$.
> 		Vậy ảnh là đoạn thẳng nối từ $(1 + i)$ tới ${} (5 + i) {}$.
> 	- Ảnh đoạn thẳng $BO$:
> 		Thế $u_{1} = 0$, ta được $v = 1$.
> 		Vì $v_{1} \in [0,8]$ nên $v \in [1, 9]$.
> 		Vậy ảnh à đoạn thẳng đứng nối điểm $(1+i)$ tới điểm $(1+9i)$.
> 	- Ảnh đoạn thẳng $AB$:
> 		Thế $u_{1} = 4 - \frac{(v - 1)^2}{16}$, ta được $u = 5 - \frac{(v - 1)^2}{16}$
> 		Vì $v_{1} \in [0,8]$ nên $v \in [1,9]$.
> 		Vậy ảnh là một cung parabol $u = 5 - \frac{(v-1)^{2}}{16}$, nối từ điểm ${} (5 + i)$ tới điểm $(1+9i)$.
> 		
> Kết luận sau cùng: Miền $D_{1}$ được ánh xạ thành $D'$ giới hạn bởi hai đoạn thẳng vuông góc ${} (1 + i)$ tới $(5 + i)$, đoạn $(1+i)$ tới $(1+9i)$ và cung parabol $u = 5 - \frac{(v - 1)^2}{16}$.

> [!prob] 
> Tìm hàm phức $f(z)$ thỏa mãn $\lim_{ z \to 2+i } \mathrm{Re}(f(z)) = 4$ và $\lim_{ z \to 2+i } \mathrm{Im}(f(z)) = -1$.

> [!ans]
> Ta đặt $f(z) = w_{0} + g(z) = (4-4i)+ g(z)$, trong đó $g(z)$ là hàm phần dư bất kì thỏa điều kiện: $\lim_{ z \to 2+i } g(z) = 0$.
> Không vì lý do gì, ta chọn ${} g(z) {}$
