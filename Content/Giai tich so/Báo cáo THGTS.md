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
  monHoc:       "",
  loaiBai:      "",
  tenDeTai:     "Báo cáo môn Thực Hành Giải tích số",
  nganh:        "Toán học",
  chuyenNganh:  "Giải tích số",
  giangVien:    "Huỳnh Như",

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
    titleLine: "Báo cáo môn Thực Hành Giải tích số",
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

# Tuần 4

> [!exr]
> Sử dụng đa thức Taylor tại $\frac{\pi}{4}$ để xấp xỉ $\cos(42^{\circ})$ đến độ chính xác $10^{-6}$.

> [!sol] 
> - Xét hàm số $f(x) = \cos(x)$. Ta cần xấp xỉ giá trị của hàm tại điểm $x = 42^{\circ}$. Chuyển sang radian:
> 	- Điểm cần xấp xỉ: $x = 42^{\circ} = \frac{7\pi}{30}$.
> 	- Điểm khai triển: $a = \frac{\pi}{4}$.
> 	- Bước nhảy: ${} h = x - a = -\frac{\pi}{60}$.
> - Ta có phần dư lagrange: $$R_{n}(x) = \frac{f^{n+1}(c)}{(n+1)!}(x-1)^{n+1}$$, với $c$ nằm giữa ${} \frac{\pi}{4}$ và $\frac{7\pi}{30}$.
> - Ta có $\lvert f^{n+1}(c) \rvert \le 1$, nên để đạt độ chính xác $10^{-6}$, ta cần giải bất phương trình:
> $$|R_n(x)| \le \frac{1}{(n+1)!} \left| -\frac{\pi}{60} \right|^{n+1} \le 10^{-6}$$
> - Ta thấy $n = 3$ có $|R_3| \le \frac{1}{4!} \left(\frac{\pi}{60}\right)^4 \approx 3.13 \times 10^{-7} \le 10^{-6}$ (Thỏa mãn)
> - Đa thức Taylor bậc 3 theo biến $h$ tại $a = \frac{\pi}{4}$: 
>   $$
>  P_3(a+h) = f(a) + f'(a)h + \frac{f''(a)}{2}h^2 + \frac{f'''(a)}{6}h^3
>  $$
> - Tính các đạo hàm tại $a = \frac{\pi}{4}$:
> 	- $f(a) = f'''(a) = \frac{\sqrt{2}}{2}$ 
> 	- $f'(a) = f''(a) = -\frac{\sqrt{2}}{2}$. 
> Rút gọn biểu thức: $$ \begin{aligned} P_3(x) &= \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}h - \frac{\sqrt{2}}{4}h^2 + \frac{\sqrt{2}}{12}h^3 \\ &= \frac{\sqrt{2}}{2} \left( 1 - h - \frac{h^2}{2} + \frac{h^3}{6} \right) \end{aligned} $$
> Thay $h = - \frac{\pi}{60}$:
> Kết luận: $\cos(42^{\circ}) \approx 0.743145$

> [!exr] 
> Xét $f(x) = \cos(x)$, ${} \cos(0.01) ≈ P_{2}(0.01)$,  $\cos(0.01) ≈ P_{3}(0.01)$ lấy 8 chữ số thập phân trong phần tính toán.
> Tính sai số tuyệt đối, sai số tương đối, chặn trên nhỏ nhất của sai số chặt cụt, tìm $n$ sao cho $< 10 ^{-10}$.
> Vẽ hình $P_{n}(x)$ và ${} f(x)$ với $n$ tìm được, so sánh ${} f(x)$ bằng *Matlab*.

> [!sol]
> 1. Tính toán
> 	- Đa thức Taylor bậc 2 theo biến $x$: $$P_2(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2$$
> 	- Tính các đạo hàm tại x = 0, ta được: $$P_2(x) = 1 - \frac{x^2}{2}$$
> 	- Tương tự: $$P_3(x) = 1 - \frac{x^2}{2}$$
> 	- Thay $x = 0.01$, lấy 8 chữ số thập phân trong tính toán:
> 	$$P_2(0.01) = P_3(0.01) = 1 - \frac{0.0001}{2} = 1 - 0.00005000 = 0.99995000$$
> 	- Sai số tuyệt đối: $$\Delta p = |0.999950000416665 - 0.99995000| \approx 4.16665 \times 10^{-10}$$
> 	- Sai số tương đối: $$\delta p = \frac{4.16665 \times 10^{-10}}{0.999950000416665} \approx 4.16686 \times 10^{-10}$$
> 	  
> 2. Tìm chặn trên nhỏ nhất của sai số chặt cụt: 
> 	- Đối với $P_{2}(0.01)$: $$R_2(0.01) = \frac{f'''(c)}{3!}(0.01)^3 = \frac{\sin(c)}{6} \times 10^{-6}$$, với $c \in (0, 0.01)$.
> 	- Trên đoạn $[0, 0.01]$, hàm $\sin(x)$ đồng biến, giá trị lớn nhất đạt được tại $c = 0.01$:  $|R_2| \le \frac{\sin(0.01)}{6} \times 10^{-6} \approx \frac{0.00999983}{6} \times 10^{-6} \approx 1.666639 \times 10^{-9}$.
> 	- Đối với $P_{3}(0,01)$: $$R_3(0.01) = \frac{f^{(4)}(c)}{4!}(0.01)^4 = \frac{\cos(c)}{24} \times 10^{-8}$$
> 	Trên đoạn $[0, 0.01]$, hàm $\cos(x)$ nghịch biến, giá trị lớn nhất đạt được tại $c = 0$: $|R_3| \le \frac{\cos(0)}{24} \times 10^{-8} = \frac{1}{24} \times 10^{-8} \approx 4.16666667 \times 10^{-10}$.
> 	
> 3. Tìm $n$ sao cho sai số $< 10^{-10}$:
> 	- Ta có $|f^{(n+1)}(c)| \le 1$ (đạo hàm $\sin$, $\cos$ bị chặn):
> 	$$|R_n| \le \frac{1}{(n+1)!}(0.01)^{n+1} < 10^{-10}$$
> 	- Thử các giá trị của $n$:
> 		- Với $n=3$: $|R_3| \le \frac{1}{24} \times 10^{-8} \approx 4.16 \times 10^{-10}$ (Chưa nhỏ hơn $10^{-10}$)
> 		- Với $n=4$: $|R_4| \le \frac{1}{120} \times (0.01)^5 = \frac{1}{120} \times 10^{-10} \approx 0.00833 \times 10^{-10} < 10^{-10}$ (Thỏa mãn)
> 	- Vậy, để đảm bảo sai số chặt cụt nhỏ hơn $10^{-10}$, ta cần chọn **$n = 4$**.
> 
> 4. Code
> > [!code]- Matlab
> > ```matlab
> > % Du lieu khoang chia
> >  x = linspace(-pi/2, pi/2, 1000);
> >  % Co so da thuc Maclaurin bac 4
> >  f_x = cos(x);
> >  P4_x = 1 - x.^2/2 + x.^4/24;
> >  % Tinh sai so tuyet doi
> >  error = abs(f_x - P4_x);
> >  
> >  figure;
> >  % Ve do thi so sanh hai ham so
> >  subplot(2,1,1);
> >  plot(x, f_x, 'b-', 'LineWidth', 1.5); hold on;
> >  plot(x, P4_x, 'r--', 'LineWidth', 1.5);
> >  title('So sánh f(x) = cos(x) và P_4(x)');
> >  legend('cos(x)', 'P_4(x)', 'Location', 'best');
> >  xlabel('x'); ylabel('y');
> >  grid on;
> >  % Ve do thi sai so
> >  subplot(2,1,2);
> >  plot(x, error, 'k', 'LineWidth', 1.5);
> >  title('Sai số tuyệt đối |cos(x) - P_4(x)|');
> >  xlabel('x'); ylabel('Sai số');
> >  grid on;
> > ```
> 
> ![[THGTS_Tuần 4 - Bài 1.webp]]

> [!exr] 
> Xây dựng đa thức taylor tại $x_{0} = 0$ để xấp xỉ $f(x) = \frac{1}{x+1}$ đến độ chính xác $10^{-3}$, với $x \in \left[ -\frac{1}{2}, \frac{1}{2} \right]$.

> [!sol]
> 1. Khai triển Taylor (Maclaurin):
> 	- Ta tính các đạo hàm:
> 		- $f'(x) = -1(x+1)^{-2}$
> 		- $f''(x) = 2(x+1)^{-3}$
> 		- $f'''(x) = -6(x+1)^{-4}$
> 		$\implies f^{(k)}(x) = (-1)^k \cdot k! \cdot (x+1)^{-(k+1)}$
> 	- Tại $x_0 = 0$: $f^{(k)}(0) = (-1)^k \cdot k!$.
> 	- Hệ số của đa thức Taylor: $c_k = \frac{f^{(k)}(0)}{k!} = (-1)^k$.
> 	- Vậy đa thức Taylor bậc $n$:
> 	$$P_n(x) = \sum_{k=0}^n (-1)^k x^k = 1 - x + x^2 - x^3 + \dots + (-1)^n x^n$$
> 	- Nhận xét: đây là tổng của $n+1$ số hạng đầu tiên trong một cấp số nhân với công bội $q = -x$).
> 
> 2. Đánh giá sai số (Phần dư)
> 	- Ta dùng trực tiếp tổng cấp số nhân để tìm phần dư chính xác $R_n(x)$:
> 		$$P_n(x) = \frac{1 - (-x)^{n+1}}{1 - (-x)} = \frac{1 - (-x)^{n+1}}{1 + x}$$
> 	- Sai số khi xấp xỉ:
> 	  $$R_n(x) = f(x) - P_n(x) = \frac{1}{x+1} - \frac{1 - (-x)^{n+1}}{x+1} = \frac{(-x)^{n+1}}{x+1}$$
> 	- Để có độ chính xác $10^{-3}$ trên đoạn $x \in [-1/2, 1/2]$, ta cần tìm $n$ sao cho:
> 	  $$|R_n(x)| = \frac{|x|^{n+1}}{|x+1|} \le 10^{-3} \quad \forall x \in \left[-\frac{1}{2}, \frac{1}{2}\right]$$
> 
> 3. Tìm giá trị lớn nhất của sai số
> 	- Ta cần tìm giá trị lớn nhất của $g(x) = \frac{|x|^{n+1}}{|x+1|}$ trên đoạn $\left[-\frac{1}{2}, \frac{1}{2}\right]$.
> 	- Để $g(x)$ đạt giá trị lớn nhất, ta cần tử số lớn nhất và mẫu số nhỏ nhất:
> 		- Tử số: Trên đoạn $\left[-\frac{1}{2}, \frac{1}{2}\right]$, ta luôn có $|x| \le \frac{1}{2} \implies |x|^{n+1} \le \left(\frac{1}{2}\right)^{n+1}$
> 		- Mẫu số: Vì $x \ge -\frac{1}{2} \implies x + 1 \ge \frac{1}{2} \implies \frac{1}{|x+1|} \le \frac{1}{1/2} = 2$
> 	- Nhân hai bất đẳng thức trên (do các vế đều dương):
> 	  $$g(x) \le \left(\frac{1}{2}\right)^{n+1} \cdot 2 = \frac{1}{2^n}$$
> 	- Dấu "=" xảy ra khi tử đạt max và mẫu đạt min cùng lúc: $x = -1/2$.
> 	  Vậy sai số tuyệt đối lớn nhất trên toàn miền là $\frac{1}{2^n}$.
>
> 4. Xác định bậc $n$
> 	- Để thỏa mãn yêu cầu đề bài:
> 	$$\max |R_n(x)| = \frac{1}{2^n} \le 10^{-3}$$
> 	$$\implies 2^n \ge 1000$$
> 	- Ta biết $2^9 = 512$ và $2^{10} = 1024$. Do đó, số nguyên $n$ nhỏ nhất thỏa mãn: $n = 10$.
> 	 - Vậy đa thức Taylor cần tìm là đa thức bậc 10:
> 	 $$P_{10}(x) = 1 - x + x^2 - x^3 + x^4 - x^5 + x^6 - x^7 + x^8 - x^9 + x^{10}$$

> [!exr] 
> Giả sử $p ^{*}$ xấp xỉ $p$ với sai số tương đối nhiều nhất $\alpha = 10 ^{-4}$. Tìm khoảng lớn nhất mà $p ^{*}$ nằm trong với mỗi giá trị của $p$. Với $p = \pi$ và $p = e$. 

> [!sol]
> - Theo định nghĩa sai số tương đối: 
> $$
> \delta_{p} = \frac{\lvert p - p ^{*}\rvert}{\lvert p \rvert } \le 10 ^{-4}  
> $$
> - Vì $p = \pi$ và $p = e$ đều dương: $\lvert p ^{*} - p \rvert \le 10 ^{-4}.p$,
>   tương đương: $p(1-10^{-4}) \le p ^{*} \le p(1 + 10^{-4})$.
> 	- Thay $p = \pi$: $$3.141278 \le p^* \le 3.141907$$
> 	- Thay $p = e$: $$2.718010 \le p^* \le 2.718554$$

# Tuần 5

> [!exr]
> Xác định một đa thức có bậc ≤ 3 để nội suy dữ liệu:
> 
> $$
> \def\arraystretch{1.5}
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 1.2 & 2.1 & 3.0 & 3.6 \\
> \hline
> y & 0.7 & 8.1 & 27.7 & 45.1 \\
> \hline
> \end{array}
> $$

> [!sol] 
> 1. Tính cơ sở đa thức Newton:
> 
> $$
> \def\arraystretch{1.8}
> \begin{array}{|c|c|c|c|c|}
> \hline
> x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> \hline
> 1.2 & 0.7 & & & \\
> & & \frac{8.1-0.7}{2.1-1.2} = \mathbf{\frac{74}{9}} & & \\
> 2.1 & 8.1 & & \frac{196/9-74/9}{3.0-1.2} = \mathbf{\frac{610}{81}} & \\
> & & \frac{27.7-8.1}{3.0-2.1} = \frac{196}{9} & & \frac{130/27-610/81}{3.6-1.2} = \mathbf{-\frac{275}{243}} \\
> 3.0 & 27.7 & & \frac{29-196/9}{3.6-2.1} = \frac{130}{27} & \\
> & & \frac{45.1-27.7}{3.6-3.0} = 29 & & \\
> 3.6 & 45.1 & & & \\
> \hline
> \end{array}
> $$
>
>
> 2. Đa thức nội suy Newton: $$ P_3(x) = 0.7 + \frac{74}{9}(x - 1.2) + \frac{610}{81}(x - 1.2)(x - 2.1) - \frac{275}{243}(x - 1.2)(x - 2.1)(x - 3.0) $$

> [!exr] 
> Cho $\ln(x) = 0.6932, \ln(3) = 1.0986$ và $\ln(6) = 1.7981$,  sử dụng đa thức Lagrange để nội suy và xấp xỉ giá trị hàm logarit tự nhiên tại các số nguyên từ 1 đến 10. Viết code MATLAB và ập bảng kết quả bao gồm giá trị xấp xỉ, sai số tuyệt đối và sai số tương đối.

> [!sol]
> 1. Tính cơ sở đa thức Lagrange: 
> - Ta có cơ sở đa thức Lagrange: 
> $$
> L_j(x) = \prod_{k \neq j} \frac{x - x_k}{x_j - x_k}
> $$
> - Chi tiết:
> 	- $L_0(x) = \frac{(x-3)(x-6)}{(2-3)(2-6)} = \frac{1}{4}(x-3)(x-6)$
> 	- $L_1(x) = \frac{(x-2)(x-6)}{(3-2)(3-6)} = -\frac{1}{3}(x-2)(x-6)$
> 	- $L_2(x) = \frac{(x-2)(x-3)}{(6-2)(6-3)} = \frac{1}{12}(x-2)(x-3)$
> 2. Đa thức nội suy Lagrange: $$P_2(x) = 0.6932 \cdot L_0(x) + 1.0986 \cdot L_1(x) + 1.7918 \cdot L_2(x)$$
> 3. Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > xNodes = [2, 3, 6];
> > yNodes = [0.6932, 1.0986, 1.7918];
> > n = length(xNodes) - 1;
> > xvals = 1:10;
> > 
> > disp('x     | Gia tri xap xi P(x)')
> > disp('-------------------------')
> > 
> > for j = 1:length(xvals)
> >     xval = xvals(j);
> >     Papprox = 0;
> >     
> >     for k = 1:n+1
> >         phi_k = lagrange_basis(xval, xNodes, k, n);
> >         Papprox = Papprox + yNodes(k) * phi_k;
> >     end
> >     
> >     fprintf('%-5d | %-15.4f\n', xval, Papprox);
> > end
> > 
> > function phi_k = lagrange_basis(xval, xnodes, k, n)
> >     xk = xnodes(k);
> >     phi_k = 1;
> >     for i = 1:n+1
> >         if i ~= k
> >             phi_k = phi_k .* (xval - xnodes(i)) / (xk - xnodes(i));
> >         end
> >     end
> > end
> > ```

> [!exr]
> Trình bày cách xây dựng hàm Lagrange bậc 1,2,3 trên đoạn $[-1,1]$. Vẽ hình các hàm Lagrange trên, chú thích đầy đủ.

> [!sol]
> 4. Tính cơ sở đa thức Lagrange: 
>  - Đổi biến cơ sở đa thức Lagrange:
> 	- Đặt $s = \frac{x- x_{0}}{h}$, khi  đó $x(s) = x_{0} + s \cdot h$.
> 	- Thay $x = x_{0} + s \cdot h$, $x_{j}  = x_{0} + \alpha_{j} h$ và $x_{k} = x_{0} + \alpha_{k} h$: 
> 	$$
> 	\begin{align}
> 	L_j(x(s)) &=  \prod_{k \neq j} \frac{(x_0 + s \cdot h) - (x_0 + \alpha_k h)}{(x_0 + \alpha_j h) - (x_0 + \alpha_k h)} \\
> 	&= \prod_{k \neq j} \frac{h(s - \alpha_k)}{h(\alpha_j - \alpha_k)}
> 	\end{align}
> 	$$
> 	- Ta thu được cơ sở địa phương mới, ký hiệu $l_{j}(s)$, đôc lập với $h$:
> 	$$
> 	l_j(s) = \prod_{k \neq j} \frac{s - \alpha_k}{\alpha_j - \alpha_k}
> 	$$
> 	- Vì các khoảng là cách đều, ta có $\alpha_{k} = k$:
> 	$$
> 	l_j(s) = \prod_{k \neq j} \frac{s - k}{j - k}
> 	$$
> - Chi tiết: 
> 	- Trên đoạn $[-1,1]$, ta chọn $x_{0} = -1$. Với mỗi bậc $n$, bước lưới $h = \frac{2}{n}$, $s = \frac{x+1}{h}$
> 	- Bậc $n = 1$, bước lưới $h = \frac{x_{n} - x_{0}}{n}= \frac{2}{1}$, $s_{k} \in \{ 0, 1 \}$:
> 		- $l_{0}(s) = \frac{s - 1}{0-1} = 1 - s$
> 		- $l_{1}(s) = \frac{s - 0}{1 - 0} = s$
> 	- Bậc $n = 2$, bước lưới $h = \frac{2}{2}$, $s_{k} \in \{  0, 1, 2 \}$:
> 		- $l_0(s) = \frac{(s - 1)(s - 2)}{(0 - 1)(0 - 2)} = \frac{1}{2}(s^2 - 3s + 2)$
> 		- $l_1(s) = \frac{s(s - 2)}{(1 - 0)(1 - 2)} = 2s - s^2$
> 		- $l_2(s) = \frac{s(s - 1)}{(2 - 0)(2 - 1)} = \frac{1}{2}(s^2 - s)$
> 	- Bậc $n = 3$, bước lưới $h = \frac{2}{3}$, $s_{k} \in \{ 0, 1 ,2, 3 \}$:
> 		- $l_0(s) = -\frac{1}{6}(s^3 - 6s^2 + 11s - 6)$
> 		- $l_1(s) = \frac{1}{2}(s^3 - 5s^2 + 6s)$
> 		- $l_2(s) = -\frac{1}{2}(s^3 - 4s^2 + 3s)$
> 		- $l_3(s) = \frac{1}{6}(s^3 - 3s^2 + 2s)$
> 	- Bậc $n = 4$, bước lưới $h = 0.5$, $s_{k} = \{ 0, 1, 2,3,4 \}$:
> 		- $l_0(s) = \frac{s^4 - 10s^3 + 35s^2 - 50s + 24}{24}$
> 		- $l_1(s) = \frac{s^4 - 9s^3 + 26s^2 - 24s}{-6}$
> 		- $l_2(s) = \frac{s^4 - 8s^3 + 19s^2 - 12s}{4}$
> 		- $l_3(s) = \frac{s(s - 1)(s - 2)(s - 4)}{-6}$
> 		- $l_4(s) = \frac{s(s - 1)(s - 2)(s - 3)}{24}$
> 2. Code:
> > [!code]- Matlab
> > ```matlab
> > clear; clc; clf;
> > x = linspace(-1, 1, 100); 
> > 
> > for n = 1:4
> >     h = 2/n;
> >     s = (x + 1)/h; % Doi bien
> >     s_node = 0:n;  % 
> >     x_node = -1 + s_node*h;
> >     
> >     subplot(2, 2, n); hold on; grid on;
> >     leg_str = cell(1, n+1); 
> >     
> >     for i = 1:n+1
> >         L = ones(size(s));
> >         for j = 1:n+1
> >             if i ~= j, L = L .* (s - s_node(j)) / (s_node(i) - s_node(j)); end
> >         end
> >         plot(x, L, 'LineWidth', 1.2);
> >         leg_str{i} = sprintf('l_{%d}', i-1);
> >     end
> >     
> >     % Ve do thi
> >     plot(x_node, zeros(1, n+1), 'ko'); 
> >     plot(x_node, ones(1, n+1), 'ro');
> >     
> >     title(sprintf('Bậc n = %d', n));
> >     legend(leg_str, 'Location', 'eastoutside');
> > end
> > ```
> 
> ![[THGTS_Tuần 5 - Bài 3.webp]]

> [!exr] 
> Cho $f(x) = 2x^{2}e^{x} + 1$. Xây dựng đa thức Lagrange bậc hai hoặc thấp hơn sử dụng $x_{0} = 0$, $x_{1} = 0.5$, $x_{2} = 1$. Viết code MATLAB xấp xỉ $f(0.8)$.

> [!sol]
> 3. Tính cơ sở đa thức Lagrange:
> 	- $y_{i}= f(x_{i})$:
> 	- $y_0 = f(0) = 2(0)^2e^0 + 1 = 1$
> 	- $y_1 = f(0.5) = 2(0.5)^2e^{0.5} + 1 = 0.5e^{0.5} + 1$
> 	- $y_2 = f(1) = 2(1)^2e^1 + 1 = 2e + 1$
> 	- $L_0(x) = \frac{(x - 0.5)(x - 1)}{(0 - 0.5)(0 - 1)} = 2(x^2 - 1.5x + 0.5) = 2x^2 - 3x + 1$
> 	- $L_1(x) = \frac{(x - 0)(x - 1)}{(0.5 - 0)(0.5 - 1)} = \frac{x^2 - x}{-0.25} = -4x^2 + 4x$
> 	- $L_2(x) = \frac{(x - 0)(x - 0.5)}{(1 - 0)(1 - 0.5)} = \frac{x^2 - 0.5x}{0.5} = 2x^2 - x$
> 4. Đa thức nội suy Lagrange:
> $$
> P_2(x) = 1(2x^2 - 3x + 1) + (0.5e^{0.5} + 1)(-4x^2 + 4x) + (2e + 1)(2x^2 - x)
> $$
> 5. Kết quả xấp xỉ: 
> $$
> f(0.8) \approx 1(-0.12) + (0.5e^{0.5} + 1)(0.64) + (2e + 1)(0.48) \approx 4.1371
> $$
> 6. Code:
>    
> > [!code]- Matlab
> > ```Matlab
> > clc; clear; close all;
> > 
> > f = @(x) 2 * x.^2 .* exp(x) + 1;
> > X = [0, 0.5, 1];
> > Y = f(X);
> > 
> > % Du lieu diem xap xi
> > x_target = 0.8;
> > n = length(X);
> > P2_val = 0;
> > 
> > % Tinh co so da thuc 
> > for i = 1:n
> >     L_i = 1;
> >     for j = 1:n
> >         if i ~= j
> >             L_i = L_i * (x_target - X(j)) / (X(i) - X(j));
> >         end
> >     end
> >     P2_val = P2_val + Y(i) * L_i;
> > end
> > 
> > % Hien thi ket qua
> > fprintf('Gia tri xap xi P_2(0.8) = %.4f\n', P2_val);
> > fprintf('Gia tri thuc te f(0.8) = %.4f\n', f(x_target));
> > fprintf('Sai so tuyet doi = %.4f\n', abs(f(x_target) - P2_val));
> > ```

> [!exr]
> Viết code MATLAB tính giá trị xấp xỉ hàm nội suy Lagrange bậc 1, trên đoạn $[-1,1]$

> [!sol]
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu ham 
> > f = @(x) sin(x); 
> > 
> > % Du lieu moc noi suy
> > X = [-1, 1]; 
> > Y = f(X);
> > 
> > % Du lieu diem can xap xi
> > x_target = 0.5;
> > 
> > % Tinh noi suy Lagrange bac 1
> > P1_val = 0;
> > n = length(X);
> > 
> > for i = 1:n
> >     L_i = 1; 
> >     for j = 1:n
> >         if i ~= j
> >             L_i = L_i * (x_target - X(j)) / (X(i) - X(j));
> >         end
> >     end
> >     P1_val = P1_val + Y(i) * L_i;
> > end
> > 
> > % Hien thi ket qua
> > fprintf('--- Noi suy Lagrange bac 1 tren [-1, 1] ---\n');
> > fprintf('Diem can xap xi: x = %.2f\n', x_target);
> > fprintf('Gia tri xap xi P_1(%.2f) = %.4f\n', x_target, P1_val);
> > fprintf('Gia tri thuc te f(%.2f) = %.4f\n', x_target, f(x_target));
> > fprintf('Sai so tuyet doi = %.4f\n', abs(f(x_target) - P1_val));
> > ```

# Tuần 6

> [!exr]
> Xây dựng các đa thức nội suy bậc một hai ba cho các dữ liệu sau:
> a)
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 8.1 & 8.3 & 8.6 & 8.7 \\
> \hline
> f(x) & 16.94410 & 17.56492 & 18.50515 & 18.82091 \\
> \hline
> \end{array}
> $$
> 
> b)
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 0.6 & 0.7 & 0.8 & 1.0 \\
> \hline
> f(x) & -0.17694460 & 0.01375227 & 0.22363362 & 0.65809197 \\
> \hline
> \end{array}
> $$

> [!sol]
> a)
> 1. Tính cơ sở đa thức Newton:
> - Bảng tỷ hiệu:
> 	$$
> 	\begin{array}{|c|c|c|c|c|}
> 	\hline
> 	x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> 	\hline
> 	8.1 & 16.94410 & & & \\
> 	& & 3.1041 & & \\
> 	8.3 & 17.56492 & & 0.06 & \\
> 	& & 3.1341 & & -\frac{1}{480} \\
> 	8.6 & 18.50515 & & 0.05875 & \\
> 	& & 3.1576 & & \\
> 	8.7 & 18.82091 & & & \\
> 	\hline
> 	\end{array}
> 	$$
>
> - Chi tiết:
> 	- Tỷ hiệu cấp 1:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1] &= \frac{17.56492 - 16.94410}{8.3 - 8.1} = 3.1041 \\
> 	f[x_1, x_2] &= \frac{18.50515 - 17.56492}{8.6 - 8.3} = 3.1341 \\
> 	f[x_2, x_3] &= \frac{18.82091 - 18.50515}{8.7 - 8.6} = 3.1576
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 2:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1, x_2] &= \frac{3.1341 - 3.1041}{8.6 - 8.1} = 0.06 \\
> 	f[x_1, x_2, x_3] &= \frac{3.1576 - 3.1341}{8.7 - 8.3} = 0.05875
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 3:
> 	$$
> 	f[x_0, x_1, x_2, x_3] = \frac{0.05875 - 0.06}{8.7 - 8.1} = -\frac{1}{480}
> 	$$
> 
> 2. Đa thức nội suy Newton: 
> $$P_3(x) = 16.94410 + 3.1041(x - 8.1) + 0.06(x - 8.1)(x - 8.3) - \frac{1}{480}(x - 8.1)(x - 8.3)(x - 8.6)$$
> 
> 3. Kết quả: 
> $$f(8.4) \approx 17.8771425$$
> 
> 
> b)
> 1. Tính cơ sở đa thức Newton:
> - Bảng tỷ hiệu:
> 	$$
> 	\begin{array}{|c|c|c|c|c|}
> 	\hline
> 	x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> 	\hline
> 	0.6 & -0.17694460 & & & \\
> 	& & 1.9069687 & & \\
> 	0.7 & 0.01375227 & & 0.959224 & \\
> 	& & 2.0988135 & & -1.78574125 \\
> 	0.8 & 0.22363362 & & 0.2449275 & \\
> 	& & 2.17229175 & & \\
> 	1.0 & 0.65809197 & & & \\
> 	\hline
> 	\end{array}
> 	$$
> 
> - Chi tiết:
> 	- Tỷ hiệu cấp 1:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1] &= \frac{0.01375227 - (-0.17694460)}{0.7 - 0.6} = 1.9069687 \\
> 	f[x_1, x_2] &= \frac{0.22363362 - 0.01375227}{0.8 - 0.7} = 2.0988135 \\
> 	f[x_2, x_3] &= \frac{0.65809197 - 0.22363362}{1.0 - 0.8} = 2.17229175
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 2:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1, x_2] &= \frac{2.0988135 - 1.9069687}{0.8 - 0.6} = 0.959224 \\
> 	f[x_1, x_2, x_3] &= \frac{2.17229175 - 2.0988135}{1.0 - 0.7} = 0.2449275
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 3:
> 	$$
> 	f[x_0, x_1, x_2, x_3] = \frac{0.2449275 - 0.959224}{1.0 - 0.6} = -1.78574125
> 	$$
> 
> 2. Đa thức nội suy Newton: 
> $$
> P_3(x) = -0.17694460 + 1.9069687(x - 0.6) + 0.959224(x - 0.6)(x - 0.7) - 1.78574125(x - 0.6)(x - 0.7)(x - 0.8)
> $$
> 
> 3. Kết quả: 
> $$
> f(0.9) \approx 0.4419850025
> $$
> 
> 4. Code:
> - newton_interpolate.m
> > [!code]- Matlab
> > ```matlab
> > function [y_eval, F_coeff] = newton_interpolate(x_node, y_node, x_eval)
> >     % Thuat toan tinh he so va xap xi noi suy Newton
> >     n = length(x_node);
> >     F = zeros(n, n);
> >     F(:, 1) = y_node(:);
> >     
> >     % Tinh bang ty hieu 
> >     for j = 2:n
> >         for i = j:n
> >             F(i, j) = (F(i, j-1) - F(i-1, j-1)) / (x_node(i) - x_node(i-j+1));
> >         end
> >     end
> >     
> >     % Lay cac ty hieu tren duong cheo lam he so
> >     F_coeff = diag(F); 
> > 
> >     % Tinh gia tri P(x) tai cac diem x_eval
> >     y_eval = zeros(size(x_eval));
> >     for k = 1:length(x_eval)
> >         val = F_coeff(1);
> >         p = 1;
> >         for i = 2:n
> >             p = p * (x_eval(k) - x_node(i-1));
> >             val = val + F_coeff(i) * p;
> >         end
> >         y_eval(k) = val;
> >     end
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > a)
> > xa = [8.1, 8.3, 8.6, 8.7];
> > ya = [16.94410, 17.56492, 18.50515, 18.82091];
> > x_eval_a = 8.4;
> > 
> > b)
> > xb = [0.6, 0.7, 0.8, 1.0];
> > yb = [-0.17694460, 0.01375227, 0.22363362, 0.65809197];
> > x_eval_b = 0.9;
> > 
> > % Tinh co so da thuc
> > [res_a, coeff_a] = newton_interpolate(xa, ya, x_eval_a);
> > [res_b, coeff_b] = newton_interpolate(xb, yb, x_eval_b);
> > 
> > %% Hien thi ket qua
> > disp('--- He so da thuc ---');
> > fprintf('He so cau a: '); disp(coeff_a');
> > fprintf('He so cau b: '); disp(coeff_b');
> > 
> > disp('--- Ket qua xap xi ---');
> > fprintf('Cau a: f(8.4) = %.7f\n', res_a);
> > fprintf('Cau b: f(0.9) = %.10f\n', res_b);
> > ```

> [!exr]
> Cho hàm số $f(x) = x^{5} −5x^{3} +x^{2} +4x−2$ tại các điểm nội suy $x_{0} = -2, x_{1} = -1, x_{2} = 0, x_{3} = 1, x_{4} = 2$
> a) Dùng Matlab tính hệ số, lập bảng sai phân. Nội suy gần đúng các giá trị của $f(x)$ tại $x = -1.5, -0,5, 0.5, 1.5$
> b) Vẽ hàm $f$ cùng với đa thức Newton $P(x)$ 

> [!sol]
> 1. Tính cơ sở đa thức Newton:
> - Bảng tỷ hiệu:
> 	$$
> 	\begin{array}{|c|c|c|c|c|c|}
> 	\hline
> 	x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} & \text{Tỷ hiệu cấp 4} \\
> 	\hline
> 	-2 & 2 & & & & \\
> 	& & -3 & & & \\
> 	-1 & -1 & & 1 & & \\
> 	& & -1 & & 0 & \\
> 	0 & -2 & & 1 & & 0 \\
> 	& & 1 & & 0 & \\
> 	1 & -1 & & 1 & & \\
> 	& & 3 & & & \\
> 	2 & 2 & & & & \\
> 	\hline
> 	\end{array}
> 	$$
> 
> - Chi tiết:
> 	- Tỷ hiệu cấp 1: 
> 	$$
> 	\begin{align}
> 	f[x_0, x_1] &= \frac{-1 - 2}{-1 - (-2)} = -3 \\ 
> 	f[x_1, x_2] &= \frac{-2 - (-1)}{0 - (-1)} = -1 \\
> 	f[x_2, x_3] &= \frac{-1 - (-2)}{1 - 0} = 1 \\ 
> 	f[x_3, x_4] &= \frac{2 - (-1)}{2 - 1} = 3 
> 	\end{align}
> 	$$  
>	
> 	- Tỷ hiệu cấp 2: 
> 	$$
> 	\begin{align} 
> 	f[x_0, x_1, x_2] &= \frac{-1 - (-3)}{0 - (-2)} = 1 \\ 
> 	f[x_1, x_2, x_3] &= \frac{1 - (-1)}{1 - (-1)} = 1 \\ 
> 	f[x_2, x_3, x_4] &= \frac{3 - 1}{2 - 0} = 1 
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 3:
> 	$$
> 	\begin{align} 
> 	f[x_0, x_1, x_2, x_3] &= \frac{1 - 1}{1 - (-2)} = 0 \\ 
> 	f[x_1, x_2, x_3, x_4] &= \frac{1 - 1}{2 - (-1)} = 0 
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 4:
> 	$$
> 	f[x_0, x_1, x_2, x_3, x_4] = \frac{0 - 0}{2 - (-2)} = 0
> 	$$
> 
> 2. Đa thức nội suy Newton:
>  $$
>  P_4(x) = 2 - 3(x + 2) + 1(x + 2)(x + 1) + 0(x + 2)(x + 1)x + 0(x + 2)(x + 1)x(x - 1)
>  $$
>  
>  3. Kết quả xấp xỉ:
>  $$
>  \begin{align} 
>  f(-1.5) &\approx P_4(-1.5) = (-1.5)^2 - 2 = 0.25 \\ 
>  f(-0.5) &\approx P_4(-0.5) = (-0.5)^2 - 2 = -1.75 \\ 
>  f(0.5) &\approx P_4(0.5) = (0.5)^2 - 2 = -1.75 \\ 
>  f(1.5) &\approx P_4(1.5) = (1.5)^2 - 2 = 0.25 
>  \end{align}$$
>  
>  4. Code:
> - newton_interpolate.m
> (Sử dụng lại hàm đã định nghĩa ở câu 1)
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > f = @(x) x.^5 - 5*x.^3 + x.^2 + 4*x - 2;
> > x_node = [-2, -1, 0, 1, 2];
> > y_node = f(x_node);
> > x_eval = [-1.5, -0.5, 0.5, 1.5];
> > 
> > % Su dung ham newton_interpolate.m
> > [y_eval, ~, F] = newton_interpolate(x_node, y_node, x_eval);
> > 
> > % Danh gia sai so
> > y_exact = f(x_eval);
> > err_abs = abs(y_exact - y_eval);
> > err_rel = err_abs ./ abs(y_exact);
> > 
> > % Hien thi ket qua
> > disp('% Bang ty hieu (Copy paste vao bmatrix):');
> > disp(F);
> > 
> > disp('% Ket qua xap xi (Cot: x | P(x) | Sai so tuyet doi | Sai so tuong doi):');
> > disp([x_eval', y_eval', err_abs', err_rel']);
> > 
> > % Ve do thi
> > x_plot = linspace(min(x_node)-0.5, max(x_node)+0.5, 200);
> > y_plot_approx = newton_interpolate(x_node, y_node, x_plot); 
> > 
> > figure;
> > plot(x_plot, f(x_plot), 'b-', 'LineWidth', 1.5); hold on;
> > plot(x_plot, y_plot_approx, 'r--', 'LineWidth', 1.5);
> > plot(x_node, y_node, 'ko', 'MarkerFaceColor', 'g', 'MarkerSize', 8);
> > plot(x_eval, y_eval, 'md', 'MarkerFaceColor', 'm', 'MarkerSize', 8);
> > 
> > legend('Hàm f(x)', 'Nội suy P(x)', 'Điểm nội suy', 'Điểm xấp xỉ', 'Location', 'Best');
> > title('So sánh hàm f(x) và nội suy Newton P(x)');
> > xlabel('x'); ylabel('y');
> > grid on; hold off;
> > ```
> 
> ![[THGTS_Tuần 6 - Bài 2.webp]]

# Tuần 7






