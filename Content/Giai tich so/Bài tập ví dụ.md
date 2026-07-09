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
