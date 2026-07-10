# Ví dụ: Xấp xỉ ODE

### Phát biểu bài toán mới

**Bài toán Dirichlet và Neumann không thuần nhất:**
$$
\begin{cases}
-u''(x) + 2u'(x) + u(x) = x^3 + 6x^2 - 6x, \quad x \in [0,1] \\
u(0) - u'(0) = 0, \\
u'(1) = 3.
\end{cases}
$$

Biết bài toán có nghiệm chính xác:  
$$
u(x) = x^3.
$$

Chia đoạn [0,1] thành các điểm nút cách đều nhau:  
$x_0 = 0, \; x_1 = 1/3, \; x_2 = 2/3, \; x_3 = 1.$

* **Câu 1 (4 điểm):** Sử dụng phương pháp xấp xỉ đạo hàm (có bậc hội tụ bằng 2), tính giá trị xấp xỉ của nghiệm tại từng điểm $x_i$ với $i = 0,1,2,3.$

* **Câu 2 (3 điểm):** Dùng giá trị xấp xỉ trong Câu 1, và đa thức nội suy Lagrange bậc 3, trình bày chi tiết nghiệm xấp xỉ $u_h(x).$

* **Câu 3 (3 điểm):** Lần lượt sử dụng các công thức:
  - cầu phương Gauss (tự chọn số điểm cầu phương và trọng số cầu phương, có giải thích tại sao),  
  - cầu phương trapezoidal hợp (composite trapezoidal rule),  
  - cầu phương simpson hợp (composite simpson rule),  

  Tính sai số $L^2$ giữa nghiệm chính xác $u(x)$ và nghiệm xấp xỉ $u_h(x)$ cho bởi công thức:
  $$
  \frac{\left( \int_0^1 |u(x) - u_h(x)|^2 dx \right)^{1/2}}{\left( \int_0^1 |u(x)|^2 dx \right)^{1/2}}.
  $$

---

### Lời giải chi tiết

#### Câu 1: Phương pháp sai phân hữu hạn (4 điểm)

Gọi $h = 1/3$ là bước lưới. Ta cần xấp xỉ phương trình vi phân tại các nút $x_i$. Ký hiệu $u_i \approx u(x_i)$ và $f(x) = x^3 + 6x^2 - 6x$. Giá trị $f(x)$ tại các nút là:
* $f_0 = 0$
* $f_1 = (1/3)^3 + 6(1/9) - 6(1/3) = -35/27$
* $f_2 = (2/3)^3 + 6(4/9) - 6(2/3) = -28/27$
* $f_3 = 1^3 + 6(1^2) - 6(1) = 1$

Sử dụng xấp xỉ trung tâm (bậc 2) cho các đạo hàm:
$$
u''(x_i) \approx \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2}, \quad u'(x_i) \approx \frac{u_{i+1} - u_{i-1}}{2h}
$$

Thay vào phương trình ODE: $-u_i'' + 2u_i' + u_i = f_i$, ta được:
$$
-\frac{u_{i-1} - 2u_i + u_{i+1}}{h^2} + 2\frac{u_{i+1} - u_{i-1}}{2h} + u_i = f_i
$$
Với $h = 1/3$, phương trình rút gọn thành:
$$
-9(u_{i-1} - 2u_i + u_{i+1}) + 3(u_{i+1} - u_{i-1}) + u_i = f_i
$$
$$
-12u_{i-1} + 19u_i - 6u_{i+1} = f_i \quad (*)
$$

**Xử lý điều kiện biên (bằng phương pháp điểm ảo để giữ bậc hội tụ 2):**

1. **Tại $x_0 = 0$:**
   Biên hỗn hợp $u_0 - u'_0 = 0$. Dùng xấp xỉ trung tâm với điểm ảo $u_{-1}$:
   $$
   u_0 - \frac{u_1 - u_{-1}}{2h} = 0 \implies u_1 - u_{-1} = \frac{2}{3}u_0 \implies u_{-1} = u_1 - \frac{2}{3}u_0
   $$
   Áp dụng $(*)$ tại $i=0$ ($f_0 = 0$):
   $$
   -12\left(u_1 - \frac{2}{3}u_0\right) + 19u_0 - 6u_1 = 0 \implies 27u_0 - 18u_1 = 0 \implies u_1 = 1.5u_0
   $$

2. **Tại $x_3 = 1$:**
   Biên Neumann $u'_3 = 3$. Dùng xấp xỉ trung tâm với điểm ảo $u_4$:
   $$
   \frac{u_4 - u_2}{2h} = 3 \implies u_4 - u_2 = 6(1/3) = 2 \implies u_4 = u_2 + 2
   $$
   Áp dụng $(*)$ tại $i=3$ ($f_3 = 1$):
   $$
   -12u_2 + 19u_3 - 6(u_2 + 2) = 1 \implies -18u_2 + 19u_3 = 13
   $$

**Thiết lập hệ phương trình:**
Áp dụng $(*)$ cho các điểm trong $i=1$ và $i=2$:
* $i=1$: $-12u_0 + 19u_1 - 6u_2 = -35/27$
* $i=2$: $-12u_1 + 19u_2 - 6u_3 = -28/27$

Thay $u_1 = 1.5u_0$ vào hệ, ta thu được hệ 3 phương trình 3 ẩn:
$$
\begin{cases}
16.5u_0 - 6u_2 = -35/27 \\
-18u_0 + 19u_2 - 6u_3 = -28/27 \\
-18u_2 + 19u_3 = 13
\end{cases}
$$

Giải hệ phương trình này (làm tròn 4 chữ số thập phân), ta được nghiệm xấp xỉ:
* $u_0 \approx 0.0103$
* $u_1 \approx 0.0154$
* $u_2 \approx 0.2442$
* $u_3 \approx 0.9156$

*(Ghi chú: So với nghiệm đúng $u(0)=0, u(1/3) \approx 0.0370, u(2/3) \approx 0.2963, u(1)=1$, ta thấy có sai số sinh ra do xấp xỉ rời rạc FDM).*

---

#### Câu 2: Đa thức nội suy Lagrange (3 điểm)

Đa thức nội suy Lagrange bậc 3 đi qua 4 điểm $(x_i, u_i)$ có dạng:
$$
u_h(x) = u_0 L_0(x) + u_1 L_1(x) + u_2 L_2(x) + u_3 L_3(x)
$$

Các hàm cơ sở Lagrange $L_i(x)$ được tính chi tiết như sau:
* $L_0(x) = \frac{(x - 1/3)(x - 2/3)(x - 1)}{(0 - 1/3)(0 - 2/3)(0 - 1)} = -4.5(x - 1/3)(x - 2/3)(x - 1)$
* $L_1(x) = \frac{(x - 0)(x - 2/3)(x - 1)}{(1/3 - 0)(1/3 - 2/3)(1/3 - 1)} = 13.5 x(x - 2/3)(x - 1)$
* $L_2(x) = \frac{(x - 0)(x - 1/3)(x - 1)}{(2/3 - 0)(2/3 - 1/3)(2/3 - 1)} = -13.5 x(x - 1/3)(x - 1)$
* $L_3(x) = \frac{(x - 0)(x - 1/3)(x - 2/3)}{(1 - 0)(1 - 1/3)(1 - 2/3)} = 4.5 x(x - 1/3)(x - 2/3)$

Hàm nghiệm xấp xỉ là sự kết hợp tuyến tính của các đa thức trên:
$$
u_h(x) = 0.0103 L_0(x) + 0.0154 L_1(x) + 0.2442 L_2(x) + 0.9156 L_3(x)
$$

---

#### Câu 3: Tính sai số $L^2$ (3 điểm)

Ta cần tính:
$$
\text{Sai số } L^2 = \frac{\sqrt{I_{\text{num}}}}{\sqrt{I_{\text{den}}}}
$$
Trong đó:
* $I_{\text{den}} = \int_0^1 |x^3|^2 dx = \int_0^1 x^6 dx = \frac{1}{7} \approx 0.142857$. Do đó, mẫu số $\sqrt{I_{\text{den}}} \approx 0.37796$.
* $I_{\text{num}} = \int_0^1 |u(x) - u_h(x)|^2 dx$. Đặt $E(x) = (u(x) - u_h(x))^2$.

Ta xét $I_{\text{num}}$ qua 3 phương pháp cầu phương:

**1. Cầu phương Gauss**
* **Chọn số điểm:** Vì $u(x) = x^3$ và $u_h(x)$ là đa thức bậc 3, hàm dưới dấu tích phân $E(x)$ là đa thức bậc 6. Để tính tích phân chính xác cho đa thức bậc 6, ta cần số điểm Gauss $n$ sao cho $2n - 1 \ge 6 \implies n = 4$. Do đó, ta chọn **cầu phương Gauss 4 điểm**.
* **Công thức:** Đổi biến từ đoạn $[0,1]$ sang $[-1,1]$ bằng $x = \frac{t+1}{2}$, $dx = \frac{1}{2} dt$.
  $$
  I_{\text{num}} = \frac{1}{2} \sum_{k=1}^4 w_k E\left(\frac{t_k + 1}{2}\right)
  $$
  (Với $t_k, w_k$ là các điểm và trọng số Gauss-Legendre chuẩn bậc 4).

**2. Cầu phương Trapezoidal hợp (Composite Trapezoidal Rule)**
* Chia $[0,1]$ thành 3 đoạn bằng nhau với $h = 1/3$. Công thức hình thang hợp là:
  $$
  I_{\text{num}} \approx \frac{h}{2} \left[ E(x_0) + 2E(x_1) + 2E(x_2) + E(x_3) \right]
  $$
* Tại các điểm nút, $E(x_i) = (u(x_i) - u_i)^2$.
  Ta có các sai số tại nút: $e_0 \approx -0.0103$, $e_1 \approx 0.0216$, $e_2 \approx 0.0521$, $e_3 \approx 0.0844$.
  $$
  I_{\text{num}} \approx \frac{1}{6} \left[ (-0.0103)^2 + 2(0.0216)^2 + 2(0.0521)^2 + 0.0844^2 \right] \approx 0.00226
  $$
* Sai số $L^2$ xấp xỉ bằng: $\frac{\sqrt{0.00226}}{0.37796} \approx 0.1259$ (khoảng 12.59%).

**3. Cầu phương Simpson hợp (Composite Simpson Rule)**
* Vì lưới có 4 điểm (tức là $n=3$ khoảng, một số lẻ), ta **không thể áp dụng công thức Simpson 1/3 hợp chuẩn** cho toàn bộ miền.
* Thay vào đó, ta sử dụng công thức **Simpson 3/8** (dành riêng cho 3 khoảng bước $h$):
  $$
  I_{\text{num}} \approx \frac{3h}{8} \left[ E(x_0) + 3E(x_1) + 3E(x_2) + E(x_3) \right]
  $$
* Thay giá trị:
  $$
  I_{\text{num}} \approx \frac{3(1/3)}{8} \left[ 0.0103^2 + 3(0.0216)^2 + 3(0.0521)^2 + 0.0844^2 \right] \approx \frac{1}{8}[0.0001 + 0.0014 + 0.0081 + 0.0071] \approx 0.00209
  $$
* Sai số $L^2$ xấp xỉ bằng: $\frac{\sqrt{0.00209}}{0.37796} \approx 0.1209$ (khoảng 12.09%).

### Phát biểu bài toán

**Bài toán Dirichlet và Neumann không thuần nhất:**
$$
\begin{cases}
-u''(x) + x u'(x) + (1 - x^2)u(x) = -x^4 + 2x^2 - 1, \quad x \in [0,1] \\
u(0) - u'(0) = 1, \\
u'(1) = 2.
\end{cases}
$$

Biết bài toán có nghiệm chính xác:  
$$
u(x) = x^2 + 1.
$$

Chia đoạn [0,1] thành các điểm nút cách đều nhau:  
$x_0 = 0, \; x_1 = \tfrac{1}{3}, \; x_2 = \tfrac{2}{3}, \; x_3 = 1.$

* **Câu 1 (4 điểm):** Sử dụng phương pháp xấp xỉ đạo hàm (có bậc hội tụ bằng 2), tính giá trị xấp xỉ của nghiệm tại từng điểm $x_i$ với $i = 0,1,2,3.$

* **Câu 2 (3 điểm):** Dùng giá trị xấp xỉ trong Câu 1, và đa thức nội suy Lagrange bậc 3, trình bày chi tiết nghiệm xấp xỉ $u_h(x).$

* **Câu 3 (3 điểm):** Lần lượt sử dụng các công thức:
  - cầu phương Gauss (tự chọn số điểm cầu phương và trọng số cầu phương, có giải thích tại sao),  
  - cầu phương trapezoidal hợp (composite trapezoidal rule),  
  - cầu phương simpson hợp (composite simpson rule),  

  Tính sai số $L^2$ giữa nghiệm chính xác $u(x)$ và nghiệm xấp xỉ $u_h(x)$ cho bởi công thức:
  $$
  \frac{\left( \int_0^1 |u(x) - u_h(x)|^2 dx \right)^{1/2}}{\left( \int_0^1 |u(x)|^2 dx \right)^{1/2}}.
  $$

---

### Lời giải chi tiết

#### Câu 1: Phương pháp sai phân hữu hạn (4 điểm)

Gọi $h = 1/3$ là bước lưới. Hàm vế phải là $f(x) = -x^4 + 2x^2 - 1$.
Giá trị của $f(x)$ tại các nút:
* $f_0 = -1$
* $f_1 = -(1/3)^4 + 2(1/3)^2 - 1 = -64/81$
* $f_2 = -(2/3)^4 + 2(2/3)^2 - 1 = -25/81$
* $f_3 = -1^4 + 2(1)^2 - 1 = 0$

Công thức xấp xỉ đạo hàm trung tâm bậc 2:
$$
u''(x_i) \approx \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2} = 9(u_{i-1} - 2u_i + u_{i+1})
$$
$$
u'(x_i) \approx \frac{u_{i+1} - u_{i-1}}{2h} = 1.5(u_{i+1} - u_{i-1})
$$

Phương trình tổng quát tại điểm $x_i$:
$$
-9(u_{i-1} - 2u_i + u_{i+1}) + 1.5 x_i (u_{i+1} - u_{i-1}) + (1 - x_i^2)u_i = f_i \quad (*)
$$

**Xử lý điều kiện biên:**
1. **Tại $x_0 = 0$:** Điều kiện $u_0 - u'_0 = 1$. Dùng điểm ảo $u_{-1}$:
   $$
   u_0 - \frac{u_1 - u_{-1}}{2h} = 1 \implies u_{-1} = u_1 - \frac{2}{3}u_0 + \frac{2}{3}
   $$
   Áp dụng $(*)$ tại $i=0$:
   $$
   -9\left(u_1 - \frac{2}{3}u_0 + \frac{2}{3} - 2u_0 + u_1\right) + u_0 = -1 \implies 25u_0 - 18u_1 = 5 \quad (1)
   $$

2. **Tại $x_3 = 1$:** Điều kiện $u'_3 = 2$. Dùng điểm ảo $u_4$:
   $$
   \frac{u_4 - u_2}{2h} = 2 \implies u_4 = u_2 + \frac{4}{3}
   $$
   Áp dụng $(*)$ tại $i=3$:
   $$
   -9\left(u_2 - 2u_3 + u_2 + \frac{4}{3}\right) + 1.5(1)\left(\frac{4}{3}\right) = 0 \implies -9u_2 + 9u_3 = 5 \quad (2)
   $$

**Các nút bên trong:**
* Tại $i=1$ ($x_1 = 1/3$):
  $$
  -9(u_0 - 2u_1 + u_2) + 0.5(u_2 - u_0) + \frac{8}{9}u_1 = -\frac{64}{81} \implies -9.5u_0 + \frac{170}{9}u_1 - 8.5u_2 = -\frac{64}{81} \quad (3)
  $$
* Tại $i=2$ ($x_2 = 2/3$):
  $$
  -9(u_1 - 2u_2 + u_3) + 1(u_3 - u_1) + \frac{5}{9}u_2 = -\frac{25}{81} \implies -10u_1 + \frac{167}{9}u_2 - 8u_3 = -\frac{25}{81} \quad (4)
  $$

Giải hệ 4 phương trình (1), (2), (3), (4) ta thu được:
* $u_0 = 1$
* $u_1 = 10/9$
* $u_2 = 13/9$
* $u_3 = 2$

*(Nhận xét: Vì nghiệm đúng $u(x) = x^2 + 1$ là đa thức bậc 2, nên phương pháp sai phân xấp xỉ đạo hàm bậc 2 cho kết quả chính xác tuyệt đối tại các điểm nút).*

---

#### Câu 2: Đa thức nội suy Lagrange (3 điểm)

Đa thức nội suy Lagrange bậc 3 đi qua 4 điểm $(x_i, u_i)$ là:
$$
u_h(x) = u_0 L_0(x) + u_1 L_1(x) + u_2 L_2(x) + u_3 L_3(x)
$$

Các hàm cơ sở Lagrange:
* $L_0(x) = -4.5(x - 1/3)(x - 2/3)(x - 1)$
* $L_1(x) = 13.5 x(x - 2/3)(x - 1)$
* $L_2(x) = -13.5 x(x - 1/3)(x - 1)$
* $L_3(x) = 4.5 x(x - 1/3)(x - 2/3)$

Vì các điểm $(x_i, u_i)$ được lấy chính xác từ parabol $y = x^2 + 1$, đa thức nội suy bậc 3 duy nhất đi qua 4 điểm này sẽ triệt tiêu hệ số bậc 3. Do đó, khi thay số và rút gọn, ta được:
$$
u_h(x) = 1 L_0(x) + \frac{10}{9} L_1(x) + \frac{13}{9} L_2(x) + 2 L_3(x) = x^2 + 1
$$

---

#### Câu 3: Tính sai số $L^2$ (3 điểm)

Ta cần tính:
$$
\text{Sai số } L^2 = \frac{\sqrt{I_{\text{num}}}}{\sqrt{I_{\text{den}}}}
$$
Trong đó:
* $I_{\text{den}} = \int_0^1 |x^2 + 1|^2 dx = \int_0^1 (x^4 + 2x^2 + 1) dx = \frac{1}{5} + \frac{2}{3} + 1 = \frac{28}{15} \approx 1.8667$
* Tử số: $I_{\text{num}} = \int_0^1 |u(x) - u_h(x)|^2 dx$. Đặt $E(x) = (u(x) - u_h(x))^2$.

Tuy nhiên, từ kết quả Câu 2, nghiệm xấp xỉ $u_h(x)$ trùng hoàn toàn với nghiệm đúng $u(x) = x^2 + 1$. Do vậy, $E(x) = 0$ với mọi $x \in [0,1]$.
Bất kể ta dùng phương pháp cầu phương nào (Gauss, Hình thang hợp, hay Simpson hợp), tích phân của hàm 0 luôn cho kết quả bằng 0.

Dưới đây là việc thiết lập công thức (theo yêu cầu đề) để thấy kết quả tích phân bằng 0:

**1. Cầu phương Gauss**
* **Chọn số điểm:** Nếu coi $u_h(x)$ là đa thức bậc 3 chung, $E(x)$ là đa thức bậc 6, ta cần $n=4$ điểm (để chính xác tới bậc $2n-1 = 7$).
* **Công thức:** (với $t_k, w_k$ là điểm và trọng số Gauss-Legendre chuẩn 4 điểm trên đoạn $[-1,1]$):
  $$
  I_{\text{num}} = \frac{1}{2} \sum_{k=1}^4 w_k E\left(\frac{t_k + 1}{2}\right) = 0
  $$

**2. Cầu phương Trapezoidal hợp (Composite Trapezoidal Rule)**
* Với $h = 1/3$:
  $$
  I_{\text{num}} \approx \frac{h}{2} \left[ E(x_0) + 2E(x_1) + 2E(x_2) + E(x_3) \right]
  $$
* Tại các nút $x_i$, ta có $e_i = u(x_i) - u_i = 0$. Suy ra $I_{\text{num}} = 0$.

**3. Cầu phương Simpson hợp (Composite Simpson Rule)**
* Lưới có 3 khoảng con ($n=3$). Ta sử dụng công thức Simpson 3/8:
  $$
  I_{\text{num}} \approx \frac{3h}{8} \left[ E(x_0) + 3E(x_1) + 3E(x_2) + E(x_3) \right] = 0
  $$

**Kết luận:**
Vì $I_{\text{num}} = 0$, sai số $L^2 = \frac{0}{\sqrt{28/15}} = 0$ (Sai số bằng 0%).

# Ví dụ tổng quát: Xây dựng và Áp dụng Cầu phương Gauss-Legendre với $n = 3$

## Phần 1: Xây dựng lý thuyết trên miền chuẩn $[-1, 1]$

### Bước 1: Tìm họ đa thức trực giao Legendre đơn khởi bằng hệ thức truy hồi
[cite_start]Xét không gian hàm thực liên tục trên $[-1, 1]$ với hàm trọng số $w(x) = 1$[cite: 135, 141]. Do miền tích phân và hàm trọng số đối xứng qua gốc tọa độ, tất cả các hệ số $a_k$ trong hệ thức truy hồi 3 số hạng đều bằng $0$. Công thức tính đơn khởi (monic) trở thành:
$$\pi_k(x) = x \pi_{k-1}(x) - b_k \pi_{k-2}(x) \quad \text{với } b_k = \frac{\|\pi_{k-1}\|^2}{\|\pi_{k-2}\|^2}$$

Xuất phát từ $\pi_0(x) = 1 \implies \|\pi_0\|^2 = \int_{-1}^1 1^2 \, dx = 2$.

1. **Bậc 1 ($k=1$):**
   $$\pi_1(x) = x \cdot 1 = x \implies \|\pi_1\|^2 = \int_{-1}^1 x^2 \, dx = \frac{2}{3}$$

2. **Bậc 2 ($k=2$):**
   $$b_2 = \frac{\|\pi_1\|^2}{\|\pi_0\|^2} = \frac{2/3}{2} = \frac{1}{3} \implies \pi_2(x) = x(x) - \frac{1}{3}(1) = x^2 - \frac{1}{3}$$
   $$\|\pi_2\|^2 = \int_{-1}^1 \left(x^2 - \frac{1}{3}\right)^2 dx = \int_{-1}^1 \left(x^4 - \frac{2}{3}x^2 + \frac{1}{9}\right) dx = \frac{2}{5} - \frac{4}{9} + \frac{2}{9} = \frac{8}{45}$$

3. **Bậc 3 ($k=3$):**
   $$b_3 = \frac{\|\pi_2\|^2}{\|\pi_1\|^2} = \frac{8/45}{2/3} = \frac{4}{15}$$
   $$\pi_3(x) = x\left(x^2 - \frac{1}{3}\right) - \frac{4}{15}x = x^3 - \frac{1}{3}x - \frac{4}{15}x = x^3 - \frac{3}{5}x$$

### Bước 2: Xác định các nút mốc nội suy $x_i$
Các nút mốc chuẩn $x_i$ là nghiệm của đa thức trực giao bậc 3: $\pi_3(x) = 0 \iff x\left(x^2 - \frac{3}{5}\right) = 0$.
[cite_start]Giải phương trình này, ta thu được $3$ mốc phân biệt đối xứng nằm hoàn toàn trong khoảng $(-1, 1)$[cite: 92, 95]:
- $x_1 = -\sqrt{\frac{3}{5}} \approx -0.774597$
- $x_2 = 0$
- $x_3 = \sqrt{\frac{3}{5}} \approx 0.774597$

### Bước 3: Tìm hệ số trọng lượng $c_i$ qua cấu trúc ma trận Vandermonde
[cite_start]Để xác định các hệ số $c_i$, ta thiết lập hệ phương trình ép công thức cầu phương chính xác tuyệt đối với các đơn thức cơ sở $x^0, x^1, x^2$ thông qua ma trận cấu trúc Vandermonde:
$$\begin{pmatrix} 
1 & 1 & 1 \\ 
x_1 & x_2 & x_3 \\ 
x_1^2 & x_2^2 & x_3^2 
\end{pmatrix} 
\begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} 
= 
\begin{pmatrix} \int_{-1}^1 1 \, dx \\ \int_{-1}^1 x \, dx \\ \int_{-1}^1 x^2 \, dx \end{pmatrix} 
= 
\begin{pmatrix} 2 \\ 0 \\ \frac{2}{3} \\ \end{pmatrix}$$

Thay giá trị cụ thể các mốc số $x_i$ vào hệ ma trận:
$$\begin{pmatrix} 
1 & 1 & 1 \\ 
-\sqrt{3/5} & 0 & \sqrt{3/5} \\ 
3/5 & 0 & 3/5 
\end{pmatrix} 
\begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} 
= 
\begin{pmatrix} 2 \\ 0 \\ \frac{2}{3} \end{pmatrix}$$

- Từ hàng thứ 2: $-\sqrt{\frac{3}{5}}c_1 + \sqrt{\frac{3}{5}}c_3 = 0 \implies c_1 = c_3$.
- Từ hàng thứ 3: $\frac{3}{5}c_1 + \frac{3}{5}c_3 = \frac{2}{3} \implies \frac{6}{5}c_1 = \frac{2}{3} \implies c_1 = c_3 = \frac{5}{9} \approx 0.555556$.
- Từ hàng thứ 1: $c_1 + c_2 + c_3 = 2 \implies \frac{5}{9} + c_2 + \frac{5}{9} = 2 \implies c_2 = 2 - \frac{10}{9} = \frac{8}{9} \approx 0.888889$.

Bộ thông số cấu phương chuẩn trên miền $[-1, 1]$ với $n=3$ được xác lập hoàn tất.

---

## Phần 2: Ví dụ xấp xỉ tích phân trên miền thực tế $[a, b]$

### Bài toán minh họa
Xấp xỉ tích phân sau bằng phương pháp cầu phương Gauss-Legendre với $n = 3$:
$$I = \int_{1}^{2} \frac{1}{x} \, dx$$

### Bước 1: Thực hiện phép biến đổi tuyến tính (Ánh xạ Affine) về miền chuẩn
[cite_start]Để chuyển bài toán từ miền gốc $[a, b] = [1, 2]$ về miền chuẩn $[-1, 1]$, ta áp dụng phép đổi biến tọa độ Affine:
$$x = \frac{2 - 1}{2}t + \frac{2 + 1}{2} = 0.5t + 1.5 \implies dx = 0.5 \, dt$$

[cite_start]Tích phân chuyển đổi thành cấu trúc tích phân trên miền đối xứng $[-1, 1]$:
$$I = \int_{-1}^{1} \frac{1}{0.5t + 1.5} \cdot 0.5 \, dt = \int_{-1}^{1} \frac{0.5}{0.5t + 1.5} \, dt = \int_{-1}^{1} \frac{1}{t + 3} \, dt$$
Hàm số cần tính trên lưới tọa độ chuẩn là: $g(t) = \frac{1}{t + 3}$.

### Bước 2: Ánh xạ tọa độ các mốc thực tế và tính giá trị hàm số
Thế các mốc chuẩn $t_i$ tìm được ở Phần 1 vào hàm số $g(t)$:

1. **Tại $t_1 = -0.774597$:**
   - $g(t_1) = \frac{1}{-0.774597 + 3} = \frac{1}{2.225403} \approx 0.449357$

2. **Tại $t_2 = 0$:**
   - $g(t_2) = \frac{1}{0 + 3} = \frac{1}{3} \approx 0.333333$

3. **Tại $t_3 = 0.774597$:**
   - $g(t_3) = \frac{1}{0.774597 + 3} = \frac{1}{3.774597} \approx 0.264929$

### Bước 3: Tính tổng cầu phương Gauss
[cite_start]Áp dụng bộ trọng số $c_i$ đã giải từ ma trận Vandermonde để tính tổng đại số cấu phương:
$$I \approx c_1 g(t_1) + c_2 g(t_2) + c_3 g(t_3)$$
$$I \approx \frac{5}{9}(0.449357) + \frac{8}{9}(0.333333) + \frac{5}{9}(0.264929)$$
$$I \approx 0.249643 + 0.296296 + 0.147183 = 0.693122$$

### Đánh giá kết quả
Giá trị chính xác tuyệt đối của tích phân tính bằng phương pháp giải tích cơ bản là:
$$I_{\text{Exact}} = \ln|x| \Big|_{1}^{2} = \ln(2) - \ln(1) \approx 0.693147$$

Sai số tuyệt đối của phương pháp xấp xỉ Gauss $n=3$:
$$\Delta = |I_{\text{Exact}} - I| = |0.693147 - 0.693122| = 2.5 \times 10^{-5}$$

Mặc dù hàm số $f(x) = \frac{1}{x}$ là hàm phân thức chứ không phải là đa thức, nhưng do nó rất trơn trên đoạn $[1, 2]$, việc ghim thông tin tối ưu tại đúng $3$ điểm mốc Gauss-Legendre đã đem lại kết quả xấp xỉ chính xác tới tận chữ số thập phân thứ $4$ (sai số chỉ cỡ $10^{-5}$).

# Ví dụ tổng quát: Xây dựng và Áp dụng Công thức Newton-Cotes trên miền bất kỳ $[a, b]$

Triết lý của phương pháp Newton-Cotes là cố định trước các nút tích phân cách đều nhau trên đoạn xét $[a, b]$. Với yêu cầu sử dụng 3 điểm mốc (nội suy bậc 2), ta chia đoạn $[a, b]$ thành $n = 2$ khoảng bằng nhau.

---

## Phần 1: Xây dựng lý thuyết trên miền bất kỳ $[a, b]$

### Bước 1: Xác định các nút mốc cách đều thực tế
Theo cấu trúc lưới cách đều trên đoạn $[a, b]$ với số khoảng chia $n = 2$, bước nhảy được tính bằng:
$$h = \frac{b - a}{2}$$

Từ đó, ta xác định tọa độ trực tiếp của 3 điểm mốc:
- $x_0 = a$
- $x_1 = a + h = \frac{a + b}{2}$ (Trung điểm của đoạn)
- $x_2 = a + 2h = b$

### Bước 2: Tính các hệ số trọng lượng $c_i$ qua cấu trúc ma trận Vandermonde
Để tìm các hệ số trọng lượng $c_0, c_1, c_2$ trực tiếp trên miền $[a, b]$, ta ép công thức cầu phương phải đúng tuyệt đối với tập đơn thức cơ sở chính tắc $\{1, x, x^2\}$:
$$\sum_{i=0}^2 c_i x_i^k = \int_a^b x^k \, dx \quad \text{với } k = 0, 1, 2$$

Hệ phương trình đại số tuyến tính dạng ma trận Vandermonde được thiết lập:
$$\begin{pmatrix} 
1 & 1 & 1 \\ 
x_0 & x_1 & x_2 \\ 
x_0^2 & x_1^2 & x_2^2 
\end{pmatrix} 
\begin{pmatrix} c_0 \\ c_1 \\ c_2 \end{pmatrix} 
= 
\begin{pmatrix} \int_a^b 1 \, dx \\ \int_a^b x \, dx \\ \int_a^b x^2 \, dx \end{pmatrix} 
= 
\begin{pmatrix} 
b - a \\ 
\frac{b^2 - a^2}{2} \\ 
\frac{b^3 - a^3}{3} 
\end{pmatrix}$$

Thay các giá trị mốc biểu diễn theo biến $a$ và $h$ ($x_0 = a, x_1 = a+h, x_2 = a+2h$) và giải hệ phương trình trên, ta thu được bộ trọng số tổng quát tính theo bước nhảy $h$:
- $c_0 = \frac{h}{3}$
- $c_1 = \frac{4h}{3}$
- $c_2 = \frac{h}{3}$

**Kết luận công thức tổng quát (Quy tắc Simpson 1/3):**
$$\int_a^b f(x) \, dx \approx \frac{h}{3} \big[ f(x_0) + 4f(x_1) + f(x_2) \big] = \frac{b - a}{6} \left[ f(a) + 4f\left(\frac{a+b}{2}\right) + f(b) \right]$$

---

## Phần 2: Ví dụ áp dụng trực tiếp trên miền thực tế

### Bài toán minh họa
Xấp xỉ tích phân sau bằng công thức Newton-Cotes vừa xây dựng với $3$ điểm mốc:
$$I = \int_{0}^{1} \frac{1}{1 + x^2} \, dx$$

### Bước 1: Xác định các mốc đo đạc thực tế
Bài toán yêu cầu tính trên miền $[a, b] = [0, 1]$. Ta tính các thông số trực tiếp:
- Bước nhảy: $h = \frac{1 - 0}{2} = 0.5$
- Mốc thứ nhất: $x_0 = a = 0$
- Mốc thứ hai: $x_1 = a + h = 0.5$
- Mốc thứ ba: $x_2 = b = 1$

### Bước 2: Tính giá trị hàm số tại các điểm mốc
Thế các tọa độ thực tế này vào hàm số mục tiêu $f(x) = \frac{1}{1 + x^2}$:
1. Tại $x_0 = 0$: 
   $$f(0) = \frac{1}{1 + 0^2} = 1$$
2. Tại $x_1 = 0.5$: 
   $$f(0.5) = \frac{1}{1 + 0.5^2} = \frac{1}{1.25} = 0.8$$
3. Tại $x_2 = 1$: 
   $$f(1) = \frac{1}{1 + 1^2} = 0.5$$

### Bước 3: Tính tổng đại số cầu phương
Áp dụng hệ thức Simpson 1/3 trực tiếp với bước nhảy $h = 0.5$:
$$I \approx \frac{h}{3} \big[ f(x_0) + 4f(x_1) + f(x_2) \big]$$
$$I \approx \frac{0.5}{3} \big[ 1 + 4(0.8) + 0.5 \big]$$
$$I \approx \frac{1}{6} \big[ 1 + 3.2 + 0.5 \big] = \frac{1}{6} (4.7) = \frac{4.7}{6} \approx 0.783333$$

---

## Phần 3: Đánh giá sai số số học

Giá trị giải tích chính xác của tích phân được tính bằng hàm lượng giác ngược:
$$I_{\text{Exact}} = \arctan(x) \Big|_{0}^{1} = \frac{\pi}{4} \approx 0.785398$$

Sai số tuyệt đối của phương pháp Newton-Cotes 3 điểm tính trực tiếp trên miền thực tế:
$$\Delta = |I_{\text{Exact}} - I_{\text{Xấp xỉ}}| = |0.785398 - 0.783333| = 2.065 \times 10^{-3}$$

Kết quả hoàn toàn đồng nhất với phương pháp đổi biến trung gian, nhưng việc tính toán trực tiếp trên miền thực tế giúp quy trình lập trình tường minh và giảm thiểu các bước biến đổi hàm trung gian $g(t)$.

# Ví dụ tổng quát: Xây dựng và Áp dụng Công thức Sai phân Trung tâm bậc 4 cho Đạo Hàm Bậc 1

Bài toán đặt ra là tìm công thức xấp xỉ đạo hàm bậc một $f'(x_0)$ tại điểm $x_0$ với bước nhảy $h$, sử dụng lưới mốc đối xứng xung quanh $x_0$ sao cho công thức đạt bậc chính xác đại số tối đa (bậc 4, tức là sai số dạng $\mathcal{O}(h^4)$).

---

## Phần 1: Xây dựng lý thuyết bằng Phương pháp Hệ số bất định

Để đạt sai số $\mathcal{O}(h^4)$ cho sai phân trung tâm, ta cần chọn $5$ điểm mốc đối xứng quanh $x_0$:
- $x_{-2} = x_0 - 2h$
- $x_{-1} = x_0 - h$
- $x_0$
- $x_1 = x_0 + h$
- $x_2 = x_0 + 2h$

### Bước 1: Thiết lập hệ phương trình ma trận Vandermonde
Ta cần tìm các hệ số $c_{-2}, c_{-1}, c_0, c_1, c_2$ sao cho công thức tổng quát sau đây chính xác tuyệt đối với các đơn thức $f(x) = (x-x_0)^k$ từ bậc $0$ đến bậc $4$:
$$f'(x_0) \approx \frac{1}{h} \sum_{i=-2}^{2} c_i f(x_i)$$

Ép công thức đúng lần lượt với $f(x) = 1, (x-x_0), (x-x_0)^2, (x-x_0)^3, (x-x_0)^4$, ta thu được hệ phương trình tuyến tính dạng ma trận Vandermonde với biến khoảng cách nút theo đơn vị $h$:

$$\begin{pmatrix} 
1 & 1 & 1 & 1 & 1 \\ 
-2 & -1 & 0 & 1 & 2 \\ 
(-2)^2 & (-1)^2 & 0^2 & 1^2 & 2^2 \\ 
(-2)^3 & (-1)^3 & 0^3 & 1^3 & 2^3 \\ 
(-2)^4 & (-1)^4 & 0^4 & 1^4 & 2^4 
\end{pmatrix} 
\begin{pmatrix} c_{-2} \\ c_{-1} \\ c_0 \\ c_1 \\ c_2 \end{pmatrix} 
= 
\begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}$$

*(Vế phải chính là giá trị đạo hàm bậc 1 của các đơn thức $(x-x_0)^k$ tại điểm $x_0$: Đạo hàm của $(x-x_0)^1$ bằng 1, các đơn thức còn lại đều bằng 0 tại $x=x_0$).*

### Bước 2: Giải hệ phương trình tìm bộ hệ số số học
Khai triển hệ phương trình ma trận trên:
$$\begin{cases}
c_{-2} + c_{-1} + c_0 + c_1 + c_2 = 0 \\
-2c_{-2} - c_{-1} + c_1 + 2c_2 = 1 \\
4c_{-2} + c_{-1} + c_1 + 4c_2 = 0 \\
-8c_{-2} - c_{-1} + c_1 + 8c_2 = 0 \\
16c_{-2} + c_{-1} + c_1 + 16c_2 = 0
\end{cases}$$

Tận dụng tính đối xứng đảo dấu của bài toán đạo hàm bậc lẻ ($c_{-2} = -c_2$ và $c_{-1} = -c_1 \implies c_0 = 0$), hệ phương trình rút gọn còn 2 ẩn:
$$\begin{cases}
2c_1 + 4c_2 = 1 \\
c_1 + 8c_2 = 0
\end{cases} \iff \begin{cases} c_1 = \frac{2}{3} \\ c_2 = -\frac{1}{12} \end{cases}$$

Từ tính đối xứng, ta suy ra đầy đủ bộ hệ số:
- $c_{-2} = \frac{1}{12}$
- $c_{-1} = -\frac{2}{3}$
- $c_0 = 0$
- $c_1 = \frac{2}{3}$
- $c_2 = -\frac{1}{12}$

**Kết luận công thức sai phân trung tâm bậc 4 hoàn chỉnh:**
$$f'(x_0) \approx \frac{-f(x_0 + 2h) + 8f(x_0 + h) - 8f(x_0 - h) + f(x_0 - 2h)}{12h} + \mathcal{O}(h^4)$$

---

## Phần 2: Ví dụ áp dụng tính toán thực tế

### Bài toán minh họa
Tính xấp xỉ đạo hàm bậc một của hàm số $f(x) = \ln(x)$ tại điểm $x_0 = 2$ với bước nhảy $h = 0.1$ bằng công thức sai phân trung tâm bậc 4.

### Bước 1: Xác định giá trị hàm số tại các điểm nút mốc
Với $x_0 = 2$ và $h = 0.1$, ta xác định 5 tọa độ mốc thực tế:
- $x_{-2} = 2 - 2(0.1) = 1.8 \implies f(1.8) = \ln(1.8) \approx 0.587787$
- $x_{-1} = 2 - 0.1 = 1.9 \implies f(1.9) = \ln(1.9) \approx 0.641854$
- $x_1 = 2 + 0.1 = 2.1 \implies f(2.1) = \ln(2.1) \approx 0.741937$
- $x_2 = 2 + 2(0.1) = 2.2 \implies f(2.2) = \ln(2.2) \approx 0.788457$

### Bước 2: Thế số vào công thức sai phân
Thay các giá trị hàm số vừa tính vào công thức lý thuyết đã xây dựng với $12h = 12(0.1) = 1.2$:
$$f'(2) \approx \frac{-f(2.2) + 8f(2.1) - 8f(1.9) + f(1.8)}{1.2}$$
$$f'(2) \approx \frac{-0.788457 + 8(0.741937) - 8(0.641854) + 0.587787}{1.2}$$
$$f'(2) \approx \frac{-0.788457 + 5.935496 - 5.134832 + 0.587787}{1.2}$$
$$f'(2) \approx \frac{0.599994}{1.2} \approx 0.499995$$

---

## Phần 3: Đánh giá sai số số học

Giá trị đạo hàm giải tích chính xác của hàm số $f(x) = \ln(x)$ là $f'(x) = \frac{1}{x}$.
Tại điểm $x_0 = 2$:
$$f'_{\text{Exact}}(2) = \frac{1}{2} = 0.5$$

Sai số tuyệt đối của phương pháp sai phân trung tâm bậc 4:
$$\Delta = |f'_{\text{Exact}}(2) - f'_{\text{Xấp xỉ}}(2)| = |0.5 - 0.499995| = 5.0 \times 10^{-6}$$

### Nhận xét kỹ thuật:
Mặc dù bước nhảy $h = 0.1$ là một khoảng tương đối rộng trong giải tích số, nhưng nhờ cấu trúc triệt tiêu sai số bậc cao của sai phân trung tâm bậc 4, kết quả thu được đã đạt độ chính xác cực kỳ ấn tượng lên đến 5 chữ số thập phân (sai số chỉ ở mức $10^{-6}$). Điều này minh chứng cho tính ưu việt của việc tăng bậc chính xác bằng phương pháp hệ số bất định Vandermonde.

# Lời giải: Tìm các đa thức trực giao monic bằng Hệ thức truy hồi 3 số hạng

## Lý thuyết cốt lõi áp dụng nhanh
Mọi họ đa thức trực giao đơn khởi (monic) $\{\pi_n(x)\}$ đều thỏa mãn hệ thức truy hồi:
$$\pi_n(x) = (x - a_n)\pi_{n-1}(x) - b_n \pi_{n-2}(x)$$

Với các hệ số được xác định bởi phép chiếu tích trong:
$$a_n = \frac{\langle x \pi_{n-1}, \pi_{n-1} \rangle}{\|\pi_{n-1}\|^2}, \quad b_n = \frac{\|\pi_{n-1}\|^2}{\|\pi_{n-2}\|^2}$$

 **Mẹo phòng thi:** 
 - Đối với các trường hợp miền tích phân đối xứng qua $0$ và hàm trọng số chẵn (Trường hợp a, b, d), tất cả các hệ số $a_n = 0$. Hệ thức rút gọn thành: $\pi_n(x) = x \pi_{n-1}(x) - b_n \pi_{n-2}(x)$.
- Ta ký hiệu các đa thức đơn khởi tìm được lần lượt là $\pi_n(x)$. Nếu cần chuyển về dạng đa thức chuẩn (Legendre $P_n$, Chebyshev $T_n$, Laguerre $L_n$, Hermite $H_n$), ta chỉ cần nhân với hằng số chuẩn hóa tương ứng.

---

### LỜI GIẢI CHI TIẾT BÀI TOÁN BIÊN DIRICHLET

Xét bài toán biên:
$$
\begin{cases}
y''(t) - y(t) = \frac{2}{3}e^t, \quad t \in [0, 1] \\
y(0) = 0 \\
y(1) = \frac{e}{3}
\end{cases}
$$
Chia đoạn $[0, 1]$ với bước lưới $h = \frac{1}{3}$. Các điểm nút lưới:
$$t_0 = 0, \quad t_1 = \frac{1}{3}, \quad t_2 = \frac{2}{3}, \quad t_3 = 1$$

---

#### a) Kiểm tra nghiệm chính xác của bài toán
Ta cần kiểm tra xem hàm số $y(t) = \frac{t e^t}{3}$ có thỏa mãn phương trình vi phân và các điều kiện biên hay không.

1. **Kiểm tra điều kiện biên:**
   * Tại $t = 0$: $y(0) = \frac{0 \cdot e^0}{3} = 0$ (Thỏa mãn)
   * Tại $t = 1$: $y(1) = \frac{1 \cdot e^1}{3} = \frac{e}{3}$ (Thỏa mãn)

2. **Kiểm tra phương trình vi phân:**
   Tính các đạo hàm của $y(t)$:
   * Đạo hàm bậc 1: $y'(t) = \left( \frac{t e^t}{3} \right)' = \frac{1}{3} e^t + \frac{t}{3} e^t = \frac{1+t}{3}e^t$
   * Đạo hàm bậc 2: $y''(t) = \left( \frac{1+t}{3}e^t \right)' = \frac{1}{3} e^t + \frac{1+t}{3} e^t = \frac{2+t}{3}e^t = \frac{2}{3}e^t + \frac{t e^t}{3}$

   Thay $y''(t)$ và $y(t)$ vào vế trái (VT) của phương trình vi phân:
   $$\text{VT} = y''(t) - y(t) = \left( \frac{2}{3}e^t + \frac{t e^t}{3} \right) - \frac{t e^t}{3} = \frac{2}{3}e^t = \text{VP}$$

*Kết luận:* Hàm số $y(t) = \frac{t e^t}{3}$ chính là nghiệm chính xác của bài toán.

---

#### b) Rời rạc hóa và thiết lập hệ phương trình tuyến tính $A U = F$

Đối chiếu phương trình vi phân gốc $y'' - y = \frac{2}{3}e^t$ với dạng tổng quát $P(t)y'' + Q(t)y' + R(t)y = F(t)$, ta có:
* $P(t) = 1$
* $Q(t) = 0$
* $R(t) = -1$
* $F(t) = \frac{2}{3}e^t$

Với $h = 1/3 \implies h^2 = 1/9$. Áp dụng công thức sai phân trung tâm bậc hai cho $y''(t_i)$, ta có phương trình nút:
$$\frac{y_{i-1} - 2y_i + y_{i+1}}{h^2} - y_i = F_i$$
Nhân cả hai vế với $h^2 = 1/9$:
$$(y_{i-1} - 2y_i + y_{i+1}) - \frac{1}{9}y_i = \frac{1}{9}F_i$$
$$y_{i-1} - \frac{19}{9}y_i + y_{i+1} = \frac{2}{27}e^{t_i}$$

Vì điều kiện biên cho sẵn giá trị (Dirichlet): $y_0 = 0$ và $y_3 = \frac{e}{3}$, hệ phương trình chỉ còn lại **2 ẩn số thực sự** cần giải là $U = (y_1, y_2)^T$. Ta thiết lập phương trình tại các nút bên trong:

* **Tại nút $i = 1$ ($t_1 = 1/3$):**
  $$y_0 - \frac{19}{9}y_1 + y_2 = \frac{2}{27}e^{1/3}$$
  Thế $y_0 = 0$ vào, ta được phương trình thứ nhất:
  $$-\frac{19}{9}y_1 + y_2 = \frac{2}{27}e^{1/3}$$

* **Tại nút $i = 2$ ($t_2 = 2/3$):**
  $$y_1 - \frac{19}{9}y_2 + y_3 = \frac{2}{27}e^{2/3}$$
  Thế $y_3 = \frac{e}{3}$ vào và chuyển hằng số sang vế phải, ta được phương trình thứ hai:
  $$y_1 - \frac{19}{9}y_2 = \frac{2}{27}e^{2/3} - \frac{e}{3}$$

**Biểu diễn dưới dạng hệ ma trận $A U = F$ với $U = (y_1, y_2)^T$:**

$$
\begin{bmatrix}
-\frac{19}{9} & 1 \\
1 & -\frac{19}{9}
\end{bmatrix}
\begin{bmatrix}
y_1 \\
y_2
\end{bmatrix}
=
\begin{bmatrix}
\frac{2}{27}e^{1/3} \\
\frac{2}{27}e^{2/3} - \frac{e}{3}
\end{bmatrix}
$$

*(Mẹo: Bạn có thể nhân cả 2 vế của hệ phương trình với 27 để đưa ma trận và vế phải về dạng số nguyên cho đẹp mắt tùy theo yêu cầu cụ thể của giảng viên).*

---

Cho hàm số $f(x) = x^2 \ln x$ trên đoạn $[5, 10]$. 
Các mốc nội suy cách đều: $x_0 = 6, \; x_1 = 7, \; x_2 = 8$ với bước lưới $h = 1$.
Yêu cầu xấp xỉ tại $x = 7.75$.


#### a) Lập đa thức Lagrange bậc 2 và xấp xỉ $f(7.75)$

##### Bước 1: Tính giá trị hàm tại các mốc nội suy
* $y_0 = f(6) = 6^2 \ln(6) \approx 64.50330842$
* $y_1 = f(7) = 7^2 \ln(7) \approx 95.35246181$
* $y_2 = f(8) = 8^2 \ln(8) \approx 133.08425865$

##### Bước 2: Tính các hàm cơ sở Lagrange tại $x = 7.75$
* $L_0(7.75) = \frac{(7.75 - 7)(7.75 - 8)}{(6 - 7)(6 - 8)} = \frac{(0.75)(-0.25)}{(-1)(-2)} = \frac{-0.1875}{2} = -0.09375000$
* $L_1(7.75) = \frac{(7.75 - 6)(7.75 - 8)}{(7 - 6)(7 - 8)} = \frac{(1.75)(-0.25)}{(1)(-1)} = \frac{-0.4375}{-1} = 0.43750000$
* $L_2(7.75) = \frac{(7.75 - 6)(7.75 - 7)}{(8 - 6)(8 - 7)} = \frac{(1.75)(0.75)}{(2)(1)} = \frac{1.3125}{2} = 0.65625000$

##### Bước 3: Tính giá trị xấp xỉ $P_2(7.75)$
$$P_2(7.75) = y_0 L_0(7.75) + y_1 L_1(7.75) + y_2 L_2(7.75)$$
$$P_2(7.75) = 64.50330842 \times (-0.09375) + 95.35246181 \times 0.4375 + 133.08425865 \times 0.65625$$
$$P_2(7.75) \approx -6.04718516 + 41.71670204 + 87.33654475 = 123.00606163$$

---

#### b) Sử dụng Định lý đánh giá sai số để tìm khoảng bị chặn của sai số

Theo định lý, sai số phần dư của đa thức nội suy bậc 2 tại $x = 7.75$ là:
$$R_2(7.75) = \frac{f'''(\xi)}{3!} \omega_3(7.75)$$
Trong đó $\xi \in (6, 8)$ và $\omega_3(x) = (x-6)(x-7)(x-8)$.

##### Bước 1: Tìm chặn của đạo hàm bậc 3 trên đoạn $[6, 8]$
Ta tính các đạo hàm liên tiếp của $f(x) = x^2 \ln x$:
* $f'(x) = 2x \ln x + x^2 \cdot \frac{1}{x} = 2x \ln x + x$
* $f''(x) = 2 \ln x + 2x \cdot \frac{1}{x} + 1 = 2 \ln x + 3$
* $f'''(x) = \frac{2}{x}$

Hàm $f'''(x) = \frac{2}{x}$ là hàm nghịch biến đơn điệu trên đoạn $[6, 8]$, do đó:
* Cực đại (Max) tại mút trái: $M_3 = f'''(6) = \frac{2}{6} = \frac{1}{3} \approx 0.33333333$
* Cực tiểu (Min) tại mút phải: $m_3 = f'''(8) = \frac{2}{8} = \frac{1}{4} = 0.25000000$

##### Bước 2: Tính giá trị đa thức nút tại $x = 7.75$
$$\omega_3(7.75) = (7.75 - 6)(7.75 - 7)(7.75 - 8) = (1.75)(0.75)(-0.25) = -0.32812500$$

##### Bước 3: Xác định khoảng bị chặn của sai số lý thuyết
Vì đa thức nút $\omega_3(7.75)$ mang dấu **âm** ($-0.32812500$) và đạo hàm $f'''(\xi)$ luôn **dương** trên đoạn $[6, 8]$, khi nhân lại thì sai số $R_2(7.75)$ chắc chắn phải mang dấu âm. 

Áp dụng tính chất đảo chiều bất đẳng thức khi nhân với số âm:
$$\frac{M_3}{3!} \omega_3(7.75) \le f(7.75) - P_2(7.75) \le \frac{m_3}{3!} \omega_3(7.75)$$

Thay các hằng số vào hệ thức:
* Biên dưới: $\frac{0.33333333}{6} \times (-0.328125) \approx -0.01822917$
* Biên trên: $\frac{0.25000000}{6} \times (-0.328125) \approx -0.01367188$

**Kết luận:** Khoảng bị chặn của sai số lý thuyết tại $x = 7.75$ là:
$$-0.01822917 \le R_2(7.75) \le -0.01367188$$

*(Kiểm tra chéo: Giá trị chính xác $f(7.75) = 7.75^2 \ln(7.75) \approx 122.98939768$. Sai số thực tế là $122.98939768 - 123.00606163 = -0.01666395$, hoàn toàn nằm lọt vào khoảng chặn $[-0.01822917, \; -0.01367188]$ vừa tìm được).*

### LỜI GIẢI CHI TIẾT BÀI TOÁN TÌM MỐC NỘI SUY THEO ĐIỀU KIỆN SAI SỐ

Cho hàm số $f(x) = \sqrt{x - x^2}$ xác định trên $[0, 1]$.
Các mốc nội suy: $x_0 = 0, \; x_1 \in (0, 1), \; x_2 = 1$.
Yêu cầu điều kiện: $f(0.5) - P_2(0.5) = -0.25$.

---

#### Bước 1: Tính giá trị của hàm số tại các mốc nội suy và tại điểm $x = 0.5$

* Tại $x_0 = 0$: $y_0 = f(0) = \sqrt{0 - 0^2} = 0$
* Tại $x_2 = 1$: $y_2 = f(1) = \sqrt{1 - 1^2} = 0$
* Tại mốc ẩn $x_1$: $y_1 = f(x_1) = \sqrt{x_1 - x_1^2}$
* Tại điểm xét $x = 0.5$: $f(0.5) = \sqrt{0.5 - 0.5^2} = \sqrt{0.25} = 0.5$

---

#### Bước 2: Thiết lập biểu thức đa thức nội suy Lagrange $P_2(0.5)$

Theo công thức Lagrange bậc 2, đa thức nội suy tổng quát là:
$$P_2(x) = y_0 L_0(x) + y_1 L_1(x) + y_2 L_2(x)$$

Do $y_0 = 0$ và $y_2 = 0$, hai số hạng đầu và cuối triệt tiêu hoàn toàn, đa thức chỉ còn lại thành phần ở mốc giữa:
$$P_2(x) = y_1 L_1(x) = \sqrt{x_1 - x_1^2} \cdot \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}$$

Thay các giá trị $x_0 = 0, \; x_2 = 1$ vào hàm cơ sở $L_1(x)$:
$$P_2(x) = \sqrt{x_1 - x_1^2} \cdot \frac{(x - 0)(x - 1)}{(x_1 - 0)(x_1 - 1)} = \sqrt{x_1 - x_1^2} \cdot \frac{x(x - 1)}{x_1(x_1 - 1)}$$

Bây giờ, ta tính giá trị của đa thức tại điểm $x = 0.5$:
$$P_2(0.5) = \sqrt{x_1 - x_1^2} \cdot \frac{0.5(0.5 - 1)}{x_1(x_1 - 1)} = \sqrt{x_1 - x_1^2} \cdot \frac{-0.25}{- (x_1 - x_1^2)}$$
Rút gọn dấu âm ở cả tử và mẫu:
$$P_2(0.5) = \sqrt{x_1 - x_1^2} \cdot \frac{0.25}{x_1 - x_1^2} = \frac{0.25}{\sqrt{x_1 - x_1^2}}$$

---

#### Bước 3: Giải phương trình tìm mốc $x_1$

Thay $f(0.5) = 0.5$ và biểu thức $P_2(0.5)$ vừa tìm được vào điều kiện đề bài:
$$f(0.5) - P_2(0.5) = -0.25$$
$$0.5 - \frac{0.25}{\sqrt{x_1 - x_1^2}} = -0.25$$

Chuyển vế hằng số để cô lập căn thức:
$$\frac{0.25}{\sqrt{x_1 - x_1^2}} = 0.5 + 0.25 = 0.75$$
$$\sqrt{x_1 - x_1^2} = \frac{0.25}{0.75} = \frac{1}{3}$$

Bình phương hai vế phương trình (do cả hai vế đều dương):
$$x_1 - x_1^2 = \frac{1}{9}$$
$$x_1^2 - x_1 + \frac{1}{9} = 0$$

Giải phương trình bậc hai đối với $x_1$:
Biệt thức $\Delta = (-1)^2 - 4(1)\left(\frac{1}{9}\right) = 1 - \frac{4}{9} = \frac{5}{9} > 0$.
Phương trình có hai nghiệm phân biệt:
$$x_1 = \frac{1 - \sqrt{5}/3}{2} = \frac{3 - \sqrt{5}}{6} \approx 0.12732200$$
$$x_1 = \frac{1 + \sqrt{5}/3}{2} = \frac{3 + \sqrt{5}}{6} \approx 0.87267800$$

Cả hai nghiệm này đều thỏa mãn điều kiện nằm trong khoảng chỉnh biên $x_1 \in (0, 1)$.

---

#### Kết luận

Đề bài yêu cầu tìm giá trị **lớn nhất** của $x_1$, do đó ta chọn nghiệm lớn hơn:
$$x_{1, \text{max}} = \frac{3 + \sqrt{5}}{6} \approx 0.87267800$$
