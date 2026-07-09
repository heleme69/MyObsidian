
## 📑 PHẦN 1: ĐỐI CHIẾU LÝ THUYẾT VÀ HỆ THỐNG CÔNG THỨC CHUẨN

Họ cầu phương Newton-Cotes dựa trên nguyên lý: Thay thế hàm số dưới dấu tích phân $f(x)$ bằng một đa thức nội suy Lagrange $P_n(x)$ đi qua các mốc nút cách đều.

### 1. Phân biệt Bản chất Hình học & Cấu trúc Lưới

| Tiêu chí | Newton-Cotes ĐÓNG (Closed) | Newton-Cotes MỞ (Open) |
| :--- | :--- | :--- |
| **Vị trí nút mạng** | Chứa cả hai điểm đầu mút biên $a$ và $b$. | Hoàn toàn nằm nghiêm ngặt trong khoảng mở $(a, b)$. Né hai mút. |
| **Bước lưới $h$** | $h = \frac{b-a}{n}$ ($n$ là số khoảng chia) | $h = \frac{b-a}{n+2}$ ($n+2$ là số khoảng chia) |
| **Tọa độ nút $x_i$** | $x_i = a + ih \quad (i = 0, 1, \dots, n)$ | $x_i = a + ih \quad (i = 1, 2, \dots, n+1)$ |

---

### 2. Các Công thức Đơn (Single Rules) trên Miền Tiêu chuẩn $[-1, 1]$

Để tìm bộ trọng số chuẩn $c_i$, ta giải hệ phương trình hệ số bất định dạng **Ma trận Vandermonde** bằng cách ép công thức đúng tuyệt đối với các đơn thức cơ sở $t^k$:
$$\sum_{i} c_i t_i^k = \mu_k = \int_{-1}^{1} t^k dt = \begin{cases} 0 & \text{khi } k \text{ lẻ} \\ \frac{2}{k+1} & \text{khi } k \text{ chẵn} \end{cases}$$

#### A. Nhánh Newton-Cotes Đóng
* **Quy tắc Hình thang đơn (Trapezoidal - $n=1$ khoảng chia, 2 nút):**
    * Mốc nút: $t_0 = -1, \, t_1 = 1$
    * Công thức: $\int_{-1}^{1} f(t)dt \approx f(-1) + f(1)$
    * Sai số lý thuyết: $R = -\frac{1}{3}h^3 f''(\xi)$
* **Quy tắc Simpson 1/3 đơn ($n=2$ khoảng chia, 3 nút):**
    * Mốc nút: $t_0 = -1, \, t_1 = 0, \, t_2 = 1$
    * Công thức: $\int_{-1}^{1} f(t)dt \approx \frac{1}{3} \left[ f(-1) + 4f(0) + f(1) \right]$
    * Sai số lý thuyết: $R = -\frac{1}{90}h^5 f^{(4)}(\xi)$

#### B. Nhánh Newton-Cotes Mở
* **Quy tắc Điểm giữa đơn (Midpoint - $n=0$ mốc nội bộ, 2 khoảng chia ẩn):**
    * Mốc nút: Nút duy nhất nằm ở trung tâm $t_1 = 0$
    * Công thức: $\int_{-1}^{1} f(t)dt \approx 2 f(0)$
    * Sai số lý thuyết: $R = \frac{1}{3}h^3 f''(\xi)$ với $h = 1$.

---

## 🎯 PHẦN 2: DIỆN TÍCH TOÀN CẢNH BẪY ĐỀ THI & CHIẾN THUẬT PHÁ BẪY

### DẠNG 1: Bẫy lưới cách đều "giả" (Lưới cách đều từng khúc / Lưới lộn xộn)
* **Ý đồ:** Giảng viên cho bảng số liệu thực tế có bước lưới thay đổi liên tục, hoặc cách đều ở đoạn đầu nhưng lệch ở đoạn sau. Sinh viên ốp ngay công thức mở rộng tổng quát sẽ sai hệ số.
* **Chiến thuật:** Tách tích phân tổng thành các tích phân đơn trên từng phân đoạn nhỏ: $\int_a^b = \int_{x_0}^{x_1} + \int_{x_1}^{x_2} + \dots$ rồi tính riêng lẻ.

### DẠNG 2: Bẫy cấu trúc phân đoạn lẻ đối với Quy tắc Simpson
* **Ý đồ:** Yêu cầu dùng quy tắc Simpson xấp xỉ bảng số liệu có số khoảng chia $m$ là số lẻ.
* **Chiến thuật:** Phối hợp linh hoạt: chia $m-3$ khoảng đầu/cuối làm Simpson 1/3 mở rộng, còn lại 3 khoảng thì dùng Simpson 3/8 đơn.

### DẠNG 3: Bẫy tích phân suy rộng có cực điểm bất thường tại biên (Singularities)
* **Ý đồ:** Hàm số tiến về vô cực tại biên ($x \to a$ hoặc $x \to b$). Khiến các phương pháp Đóng bị sập thuật toán vì xuất hiện phép chia cho 0.
* **Chiến thuật:** Bắt buộc chuyển sang dùng phương pháp **Newton-Cotes Mở** (như quy tắc Điểm giữa) để né mút biên.

### DẠNG 4: Bẫy ước lượng sai số ngược với Đạo hàm tăng vọt (Bùng nổ số khoảng chia)
* **Ý đồ:** Đề bài yêu cầu tìm số khoảng chia $m$ để sai số $< \epsilon$. Tuy nhiên, hàm số cho trước có đạo hàm cấp cao cực kỳ lớn tại một điểm biên, dẫn đến biểu thức chặn trên $M_2, M_4$ rất lớn, ép $m$ lên tới hàng nghìn. Sinh viên thường tưởng mình tính sai đạo hàm nên hoảng loạn bỏ bài.
* **Chiến thuật:** Giữ vững tâm lý, tính nghiêm ngặt cực đại của $|f^{(p)}(x)|$ tại biên, giải bất phương trình tìm $m$ chuẩn xác theo lý thuyết.

### DẠNG 5: Bẫy phá sản công thức sai số lý thuyết (Đạo hàm không liên tục)
* **Ý đồ:** Cho hàm số có số mũ phân số (ví dụ $x^{k/3}$) sao cho hàm vẫn liên tục nhưng đạo hàm cấp cao ($f''$ hoặc $f^{(4)}$) bị gián đoạn hoặc không tồn tại tại một điểm trong miền tích phân. Nếu sinh viên tính $M_2, M_4$ theo thói quen sẽ bị gài bẫy.
* **Chiến thuật:** Kết luận thẳng: Không thể áp dụng công thức chặn sai số chuẩn chứa $f^{(p)}(\xi)$ do hàm không thỏa mãn điều kiện trơn $f \in C^p[a, b]$.

### DẠNG 6: Bẫy bậc chính xác đại số cao (Vũ khí tối thượng trốn tính toán)
* **Ý đồ:** Cho một hàm đa thức bậc cao phức tạp và bắt tính bằng Hình thang hoặc Simpson mở rộng với $m$ rất lớn nhằm làm sinh viên kiệt sức khi thế số. Nhưng thực chất đa thức đó có bậc nằm trong tầm "chính xác tuyệt đối" của phương pháp.
* **Chiến thuật:** Áp dụng tính chất: Simpson chính xác tuyệt đối với đa thức bậc $\le 3$. Nếu đề bài bắt tính tích phân đa thức bậc $\le 3$ bằng Simpson, sai số bằng 0. Giá trị xấp xỉ bằng đúng giá trị tích phân giải tích thực tế, chỉ cần tính tích phân giải tích rồi ghi đáp số mà không cần chia mốc lặt vặt.

---

## ✍️ PHẦN 3: GIẢI CHI TIẾT CÁC VÍ DỤ MINH HỌA ĐIỂN HÌNH (ỨNG VỚI 6 DẠNG)

### 🛠️ Ví dụ 1 (Phá Bẫy Dạng 1 - Lưới không đều)
**Đề bài:** Tính diện tích mặt cắt của một con đê dựa trên các số đo khoảng cách $x$ (m) và độ sâu $y$ (m) không đều sau bằng quy tắc Hình thang:

| $x$ | 0 | 1 | 3 | 4 | 6 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $y$ | 0 | 1.5 | 2.2 | 1.8 | 0 |

#### Lời giải chi tiết:
Diện tích $S = \int_{0}^{6} y(x) dx$. Khoảng cách các bước lưới: $h_1=1, \, h_2=2, \, h_3=1, \, h_4=2$. Ta tính diện tích từng phân đoạn hình thang đơn:
* $S_1 = \frac{1}{2} [0 + 1.5] = 0.75$
* $S_2 = \frac{2}{2} [1.5 + 2.2] = 3.70$
* $S_3 = \frac{1}{2} [2.2 + 1.8] = 2.00$
* $S_4 = \frac{2}{2} [1.8 + 0] = 1.80$

Tổng diện tích mặt cắt:
$$S = 0.75 + 3.70 + 2.00 + 1.80 = \mathbf{8.25 \text{ (m}^2\mathbf{)}}$$

---

### 🛠️ Ví dụ 2 (Phá Bẫy Dạng 2 - Phân đoạn lẻ cho Simpson)
**Đề bài:** Tính xấp xỉ tích phân $I = \int_{0}^{1.25} x e^x dx$ bằng phương pháp Simpson với số khoảng chia là $m = 5$.

#### Lời giải chi tiết:
Bước lưới đều: $h = \frac{1.25 - 0}{5} = 0.25$. Các nút: $x_0=0; \, x_1=0.25; \, x_2=0.5; \, x_3=0.75; \, x_4=1.0; \, x_5=1.25$.
Vì $m=5$ lẻ, ta chia lưới làm 2 phân vùng:
* **Vùng 1 (Simpson 1/3 cho 2 khoảng đầu $[x_0, x_2]$):**
    $$I_1 = \frac{0.25}{3} [f(0) + 4f(0.25) + f(0.5)] = \frac{0.25}{3} [0 + 4(0.25e^{0.25}) + 0.5e^{0.5}] \approx 0.176001$$
* **Vùng 2 (Simpson 3/8 cho 3 khoảng sau $[x_2, x_5]$):**
    $$I_2 = \frac{3 \times 0.25}{8} [f(0.5) + 3f(0.75) + 3f(1.0) + f(1.25)]$$
    $$= \frac{0.75}{8} [0.5e^{0.5} + 3(0.75e^{0.75}) + 3(1.0e^{1.0}) + 1.25e^{1.25}] \approx 1.704207$$

Tổng giá trị tích phân:
$$I = I_1 + I_2 = 0.176001 + 1.704207 = \mathbf{1.880208}$$

---

### 🛠️ Ví dụ 3 (Phá Bẫy Dạng 3 - Tích phân suy rộng)
**Đề bài:** Tính xấp xỉ tích phân suy rộng sau bằng quy tắc Điểm giữa mở rộng với số khoảng chia nội bộ $n = 3$:
$$I = \int_{0}^{1} \frac{1}{\sqrt{x}} dx$$

#### Lời giải chi tiết:
Hàm số vô cùng tại $x=0$. Ta dùng quy tắc Newton-Cotes Mở. Số đoạn chia lưới tổng thể là $m = n + 2 = 5$. 
Bước lưới: $h = \frac{1 - 0}{5} = 0.2$. Tọa độ các nút nội bộ: $x_1 = 0.2; \, x_2 = 0.4; \, x_3 = 0.6; \, x_4 = 0.8$.
Công thức cầu phương mở rộng:
$$I \approx h \cdot \sum_{i=1}^{4} f(x_i) = 0.2 \times \left( \frac{1}{\sqrt{0.2}} + \frac{1}{\sqrt{0.4}} + \frac{1}{\sqrt{0.6}} + \frac{1}{\sqrt{0.8}} \right)$$
$$I \approx 0.2 \times \left( 2.236068 + 1.581139 + 1.290994 + 1.118034 \right) = \mathbf{1.245247}$$

---

### 🛠️ Ví dụ 4 (Phá Bẫy Dạng 4 - Bùng nổ số khoảng chia)
**Đề bài:** Xác định số khoảng chia $m$ tối thiểu để quy tắc Hình thang mở rộng xấp xỉ tích phân $I = \int_{0.01}^{1} \ln x \, dx$ đạt sai số nhỏ hơn $10^{-4}$.

#### Lời giải chi tiết:
Hàm số $f(x) = \ln x \implies f'(x) = \frac{1}{x} \implies f''(x) = -\frac{1}{x^2}$.
Trên đoạn $[0.01, 1]$, giá trị trị tuyệt đối của đạo hàm cấp 2 đạt cực đại tại biên trái $x = 0.01$:
$$M_2 = \max_{x \in [0.01, 1]} |f''(x)| = \frac{1}{0.01^2} = 10000$$

Áp dụng công thức sai số mở rộng Hình thang viết theo dạng khoảng chia $m$ (với $b-a = 1 - 0.01 = 0.99$):
$$|E_T| \le \frac{(b-a)^3}{12m^2} M_2 = \frac{0.99^3}{12m^2} \times 10000 = \frac{810.2475}{m^2}$$
Để sai số nhỏ hơn $10^{-4}$, ta ép bất phương trình:
$$\frac{810.2475}{m^2} < 10^{-4} \implies m^2 > \frac{810.2475}{10^{-4}} = 8102475 \implies m > 2846.48$$
Vậy số khoảng chia tối thiểu phải là $\mathbf{m = 2847}$ khoảng. (Sinh viên vững tâm lý mới dám kết luận con số lớn này).

---

### 🛠️ Ví dụ 5 (Phá Bẫy Dạng 5 - Đạo hàm không liên tục)
**Đề bài:** Cho tích phân $I = \int_{-1}^{1} x^{5/3} dx$. Giảng viên yêu cầu dùng công thức sai số lý thuyết của quy tắc Simpson mở rộng để tìm chặn trên sai số. Hãy phân tích tính khả thi.

#### Lời giải chi tiết:
Hàm số $f(x) = x^{5/3}$ liên tục trên $[-1, 1]$. Hãy tính các đạo hàm:
* $f'(x) = \frac{5}{3}x^{2/3}$
* $f''(x) = \frac{10}{9}x^{-1/3} = \frac{10}{9\sqrt[3]{x}}$

Tại điểm $x = 0$ thuộc miền tích phân $[-1, 1]$, đạo hàm cấp 2 tiến về vô cùng ($\lim_{x \to 0} f''(x) = \infty$), dẫn đến đạo hàm cấp 4 $f^{(4)}(x)$ hoàn toàn không xác định và không liên tục trên miền xét.

**Kết luận:** Do điều kiện trơn lý thuyết của quy tắc Simpson ($f \in C^4[-1, 1]$) bị vi phạm nghiêm trọng tại điểm $x=0$, **không thể sử dụng công thức chặn sai số lý thuyết dựa trên hằng số $M_4$ cho bài toán này**.

---

### 🛠️ Ví dụ 6 (Phá Bẫy Dạng 6 - Bậc chính xác đại số cao)
**Đề bài:** Sử dụng quy tắc Simpson mở rộng với $m = 100$ khoảng chia để tính xấp xỉ tích phân cực kỳ phức tạp sau:
$$I = \int_{0}^{2} \left( 3x^3 - 5x^2 + 2x - 7 \right) dx$$

#### Lời giải chi tiết:
Bản chất của quy tắc Simpson (dù đơn hay mở rộng) là có bậc chính xác đại số bằng 3. Nghĩa là phương pháp này sẽ cho kết quả **chính xác tuyệt đối 100% (sai số bằng 0)** đối với mọi đa thức có bậc từ bậc 3 trở xuống.

Hàm số dưới dấu tích phân là một đa thức bậc 3: $P(x) = 3x^3 - 5x^2 + 2x - 7$. Do đó, thay vì ngồi chia lưới và tính 101 mốc giá trị hàm lạt vặt, ta chỉ cần giải trực tiếp bằng tích phân giải tích:
$$I = \int_{0}^{2} \left( 3x^3 - 5x^2 + 2x - 7 \right) dx = \left[ \frac{3}{4}x^4 - \frac{5}{3}x^3 + x^2 - 7x \right]_0^2$$
$$I = \left( \frac{3}{4}(16) - \frac{5}{3}(8) + 4 - 14 \right) - 0 = 12 - \frac{40}{3} - 10 = 2 - \frac{40}{3} = \mathbf{-\frac{34}{3} \approx -11.333333}$$

**Kết luận:** Giá trị xấp xỉ số học bằng quy tắc Simpson mở rộng với mọi $m$ bất kỳ cũng sẽ bằng chính xác **$-11.333333$** do sai số phần dư của phương pháp đối với hàm này bằng 0.
