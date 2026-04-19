```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG - TÙY CHỈNH THÔNG TIN TIỂU LUẬN
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- TÍNH NĂNG BẬT/TẮT (true: Hiện, false: Ẩn) ---
  showCover:     true,   // true = có trang bìa (trang 1)
  showTitlePage: true,   // true = có trang tiêu đề phụ (trang 2)
  showTOC:       true,   // true = có mục lục

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
    titleLine: "Bài tiểu luận giữa kì <br> Lý thuyết Độ đo và Tích phân",
    authors:   ["Huy - MSSV: 24110022"],
  },

  // 6. Cấu hình Mục lục
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
const logoFile = app.vault.getAbstractFileByPath(CONFIG.logoPath);
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";
const logoHtml = logoSrc ? `<img src="${logoSrc}" alt="Logo" />` : `<div style="height: 100px;">(Không tìm thấy Logo)</div>`;

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
let finalHTML = "";

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

### 1. Mở đầu

- **Dẫn nhập:** Trực giác toán học thường đánh đồng "kích thước" (độ đo) với "số lượng" (lực lượng). Tuy nhiên, Giải tích hiện đại chứng minh điều ngược lại.
- **Mục tiêu Tiểu luận:** Sử dụng tập Cantor và hàm Cantor-Lebesgue làm công cụ giải phẫu để phơi bày "lỗ hổng" của $\sigma$-đại số Borel $\mathcal{B}(\mathbb{R})$. Từ điểm đứt gãy đó, bài viết sẽ trình bày quá trình kiến tạo cấu trúc chặt chẽ hơn: Sự đầy đủ hóa không gian đo (Completion of Measure Space).

## 2. Khảo sát tập Cantor $\mathcal{C}$ (The Cantor Ternary Set)

### 2.1 Ý tưởng cốt lõi

Tập Cantor (hay còn gọi là tập Cantor tam phân - Cantor Ternary Set) được xây dựng dựa trên một quá trình lặp đi lặp lại (quy nạp). Bắt đầu từ một đoạn thẳng ban đầu, ta liên tục chia các đoạn thẳng hiện có thành ba phần bằng nhau và vứt bỏ đi "khoảng mở" ở chính giữa.

Quá trình này tạo ra một dãy các tập hợp lồng nhau và ngày càng "thưa thớt", phần còn lại cuối cùng chính là tập Cantor.

### 2.2 Xây dựng theo phương pháp hình học (Tập hợp lồng nhau)

Quá trình xây dựng được tiến hành qua từng bước $n$ như sau:

**Bước 0 ($n=0$):**

Ta bắt đầu với một đoạn đóng cơ sở trên trục số thực. Đặt tập hợp ban đầu là $E_0$:

$$E_0 = [0, 1]$$

Lúc này, ta có $2^0 = 1$ đoạn thẳng, với chiều dài là $1/3^0 = 1$.

**Bước 1 ($n=1$):** Ta chia đoạn $E_0$ thành 3 phần bằng nhau: $[0, 1/3]$, $(1/3, 2/3)$, và $[2/3, 1]$. Sau đó, ta loại bỏ khoảng mở ở chính giữa là $(1/3, 2/3)$. Tập hợp còn lại là hợp của hai đoạn đóng:

$$E_1 = \left[0, \frac{1}{3}\right] \cup \left[\frac{2}{3}, 1\right]$$

Lúc này, ta có $2^1 = 2$ đoạn thẳng, mỗi đoạn có chiều dài là $1/3^1 = 1/3$.

**Bước 2 ($n=2$):** Tiếp tục lặp lại thao tác trên cho từng đoạn của $E_1$. Với đoạn $[0, 1/3]$, ta bỏ đi khoảng giữa $(1/9, 2/9)$. Với đoạn $[2/3, 1]$, ta bỏ đi khoảng giữa $(7/9, 8/9)$. Tập hợp thu được là hợp của 4 đoạn đóng:

$$E_2 = \left[0, \frac{1}{9}\right] \cup \left[\frac{2}{9}, \frac{1}{3}\right] \cup \left[\frac{2}{3}, \frac{7}{9}\right] \cup \left[\frac{8}{9}, 1\right]$$

Ta có $2^2 = 4$ đoạn thẳng, mỗi đoạn có chiều dài là $1/3^2 = 1/9$.

**Bước $n$ (Tổng quát):** Giả sử ta đã xây dựng được tập $E_{n-1}$ gồm $2^{n-1}$ đoạn đóng rời nhau, mỗi đoạn có độ dài $1/3^{n-1}$. Để tạo ra $E_n$, ta lấy mỗi đoạn trong $E_{n-1}$, chia làm ba và bỏ đi phần mở ở giữa. Về mặt giải tích, ta có thể biểu diễn công thức truy hồi của $E_n$ dựa trên $E_{n-1}$ bằng các phép biến đổi tịnh tiến và co giãn tập hợp như sau:

$$E_n = \frac{E_{n-1}}{3} \cup \left( \frac{2}{3} + \frac{E_{n-1}}{3} \right)$$

Tập $E_n$ sẽ bao gồm $2^n$ đoạn đóng rời nhau, và độ dài của mỗi đoạn là $1/3^n$.

**Định nghĩa tập Cantor:** Dãy các tập hợp $\{E_n\}_{n=0}^{\infty}$ tạo thành một dãy lồng nhau giảm dần: $E_0 \supset E_1 \supset E_2 \supset \dots \supset E_n \supset \dots$. Tập Cantor $\mathcal{C}$ được định nghĩa là phần giao của tất cả các tập hợp $E_n$ trong quá trình lặp vô hạn này:

$$\mathcal{C} = \bigcap_{n=0}^{\infty} E_n = \lim_{n \to \infty} E_n$$

### 2.3 Giải nghĩa quá trình xây dựng qua biểu diễn Giải tích (Hệ tam phân)

Cách xây dựng hình học ở trên có một mối liên hệ với đại số thông qua hệ đếm cơ số 3 (ternary expansion). Mọi số thực $x \in [0, 1]$ đều có thể được biểu diễn dưới dạng chuỗi tam phân:

$$x = \sum_{k=1}^{\infty} \frac{a_k}{3^k} \quad \text{với } a_k \in \{0, 1, 2\}$$

- Khi ta chia đoạn $[0,1]$ làm ba phần, đoạn đầu tiên $[0, 1/3]$ tương ứng với các số có chữ số thập phân đầu tiên $a_1 = 0$.
    
- Đoạn ở giữa $(1/3, 2/3)$ tương ứng với các số có chữ số đầu tiên $a_1 = 1$.
    
- Đoạn cuối $[2/3, 1]$ tương ứng với các số có chữ số đầu tiên $a_1 = 2$.
    

Việc ta **vứt bỏ khoảng mở ở giữa $(1/3, 2/3)$** ở Bước 1 chính là hành động vứt bỏ tất cả các số thực mà khai triển tam phân của nó có $a_1 = 1$. Tiếp tục ở Bước 2, việc vứt bỏ khoảng giữa của các đoạn con chính là việc loại bỏ các số có $a_2 = 1$.

Do đó, quá trình xây dựng hình học cắt bỏ các phần $1/3$ ở giữa thực chất là việc **thanh lọc các con số**. Tập Cantor $\mathcal{C}$ thu được ở cuối quá trình chính là tập hợp của tất cả các số thực trong đoạn $[0,1]$ mà biểu diễn tam phân của nó **tuyệt đối không chứa chữ số 1**:

$$\mathcal{C} = \left\{ x \in [0,1] \mathrel{\Big|} x = \sum_{k=1}^{\infty} \frac{a_k}{3^k}, \text{ với } a_k \in \{0, 2\} \, \forall k \in \mathbb{N} \right\}$$

_(Lưu ý: Đối với các điểm mút như $1/3$, mặc dù nó có biểu diễn là $0.1_3$, nhưng ta vẫn có thể viết nó dưới dạng chuỗi vô hạn $0.02222..._3$. Vì nó có một biểu diễn không chứa số 1, nên $1/3$ vẫn thuộc tập Cantor)_