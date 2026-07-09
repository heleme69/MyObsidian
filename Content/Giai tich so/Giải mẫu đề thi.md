## Câu 1
### BÀI TOÁN TỔNG QUÁT: PHƯƠNG PHÁP SAI PHÂN HỮU HẠN CHO BVP BẬC 2

Xét phương trình vi phân tuyến tính bậc 2 tổng quát trên miền $x \in [a, b]$:
$$
P(x)u''(x) + Q(x)u'(x) + R(x)u(x) = F(x) \quad (1)
$$

Kèm theo 2 điều kiện biên hỗn hợp (Robin) ở hai đầu mút:
* **Biên trái ($x = a$):** $\alpha_0 u(a) + \beta_0 u'(a) = \gamma_0 \quad (2)$
* **Biên phải ($x = b$):** $\alpha_1 u(b) + \beta_1 u'(b) = \gamma_1 \quad (3)$

*(Lưu ý: Nếu là biên Dirichlet thì $\beta = 0$, nếu là biên Neumann thì $\alpha = 0$).*

Chia đoạn $[a, b]$ thành $n$ khoảng bằng nhau, bước lưới $h = \frac{b-a}{n}$. Ta có $n+1$ nút lưới $x_i = a + ih$ với $i = 0, 1, \dots, n$.
Ký hiệu: $P_i = P(x_i), Q_i = Q(x_i), R_i = R(x_i), F_i = F(x_i)$ và $u_i \approx u(x_i)$.

---

#### BƯỚC 1: Xấp xỉ tại các nút bên trong ($i = 1, 2, \dots, n-1$)

Sử dụng công thức xấp xỉ đạo hàm trung tâm (bậc hội tụ $O(h^2)$):
$$
u''(x_i) \approx \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2}, \quad u'(x_i) \approx \frac{u_{i+1} - u_{i-1}}{2h}
$$

Thay vào phương trình (1):
$$
P_i \left( \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2} \right) + Q_i \left( \frac{u_{i+1} - u_{i-1}}{2h} \right) + R_i u_i = F_i
$$

Nhân cả hai vế với $h^2$ để khử mẫu, sau đó gom nhóm theo $u_{i-1}, u_i, u_{i+1}$:
$$
P_i (u_{i-1} - 2u_i + u_{i+1}) + \frac{h}{2} Q_i (u_{i+1} - u_{i-1}) + h^2 R_i u_i = h^2 F_i
$$
$$
\left( P_i - \frac{h}{2}Q_i \right)u_{i-1} + \left( -2P_i + h^2 R_i \right)u_i + \left( P_i + \frac{h}{2}Q_i \right)u_{i+1} = h^2 F_i
$$

Để gọn gàng, ta đặt các hệ số:
* $A_i = P_i - \frac{h}{2}Q_i$
* $B_i = -2P_i + h^2 R_i$
* $C_i = P_i + \frac{h}{2}Q_i$
* $D_i = h^2 F_i$

**Phương trình nút tổng quát ($i = 1, \dots, n-1$):**
$$
A_i u_{i-1} + B_i u_i + C_i u_{i+1} = D_i \quad (*)
$$

---

#### BƯỚC 2: Xử lý biên trái tại $x_0 = a$ ($i = 0$)

Xét điều kiện biên (2): $\alpha_0 u_0 + \beta_0 u'_0 = \gamma_0$.
Giả sử $\beta_0 \neq 0$ (nếu $\beta_0 = 0$, bài toán trở thành Dirichlet, ta có ngay $u_0 = \frac{\gamma_0}{\alpha_0}$).

Dùng điểm ảo $u_{-1}$ và xấp xỉ đạo hàm trung tâm:
$$
\alpha_0 u_0 + \beta_0 \frac{u_1 - u_{-1}}{2h} = \gamma_0 \implies u_{-1} = u_1 + \frac{2h\alpha_0}{\beta_0}u_0 - \frac{2h\gamma_0}{\beta_0}
$$

Áp dụng phương trình tổng quát $(*)$ tại $i = 0$:
$$
A_0 u_{-1} + B_0 u_0 + C_0 u_1 = D_0
$$

Thay $u_{-1}$ vào phương trình trên:
$$
A_0 \left( u_1 + \frac{2h\alpha_0}{\beta_0}u_0 - \frac{2h\gamma_0}{\beta_0} \right) + B_0 u_0 + C_0 u_1 = D_0
$$

Gom nhóm theo $u_0, u_1$ và chuyển hằng số sang vế phải:
$$
\left( B_0 + A_0 \frac{2h\alpha_0}{\beta_0} \right)u_0 + (A_0 + C_0)u_1 = D_0 + A_0 \frac{2h\gamma_0}{\beta_0}
$$

Ta đặt các hệ số biên trái mới:
* $B'_0 = B_0 + A_0 \frac{2h\alpha_0}{\beta_0}$
* $C'_0 = A_0 + C_0$
* $D'_0 = D_0 + A_0 \frac{2h\gamma_0}{\beta_0}$

**Phương trình hàng đầu tiên của ma trận:**
$$
B'_0 u_0 + C'_0 u_1 = D'_0 \quad (**)
$$

---

#### BƯỚC 3: Xử lý biên phải tại $x_n = b$ ($i = n$)

Xét điều kiện biên (3): $\alpha_1 u_n + \beta_1 u'_n = \gamma_1$.
Giả sử $\beta_1 \neq 0$. Dùng điểm ảo $u_{n+1}$ và xấp xỉ đạo hàm trung tâm:
$$
\alpha_1 u_n + \beta_1 \frac{u_{n+1} - u_{n-1}}{2h} = \gamma_1 \implies u_{n+1} = u_{n-1} - \frac{2h\alpha_1}{\beta_1}u_n + \frac{2h\gamma_1}{\beta_1}
$$

Áp dụng phương trình tổng quát $(*)$ tại $i = n$:
$$
A_n u_{n-1} + B_n u_n + C_n u_{n+1} = D_n
$$

Thay $u_{n+1}$ vào phương trình trên:
$$
A_n u_{n-1} + B_n u_n + C_n \left( u_{n-1} - \frac{2h\alpha_1}{\beta_1}u_n + \frac{2h\gamma_1}{\beta_1} \right) = D_n
$$

Gom nhóm theo $u_{n-1}, u_n$ và chuyển hằng số sang vế phải:
$$
(A_n + C_n)u_{n-1} + \left( B_n - C_n \frac{2h\alpha_1}{\beta_1} \right)u_n = D_n - C_n \frac{2h\gamma_1}{\beta_1}
$$

Ta đặt các hệ số biên phải mới:
* $A'_n = A_n + C_n$
* $B'_n = B_n - C_n \frac{2h\alpha_1}{\beta_1}$
* $D'_n = D_n - C_n \frac{2h\gamma_1}{\beta_1}$

**Phương trình hàng cuối cùng của ma trận:**
$$
A'_n u_{n-1} + B'_n u_n = D'_n \quad (***)
$$

---

#### BƯỚC 4: Lập hệ phương trình ma trận $A \cdot U = F$

Từ $(*)$, $(**)$, và $(***)$, ta thiết lập được hệ phương trình tuyến tính gồm $n+1$ phương trình với $n+1$ ẩn $(u_0, u_1, \dots, u_n)$. 

Hệ này có dạng **ma trận tam băng (Tridiagonal Matrix)** cực kỳ đẹp mắt và dễ giải:

$$
\begin{bmatrix}
B'_0 & C'_0 & 0 & 0 & \dots & 0 \\
A_1 & B_1 & C_1 & 0 & \dots & 0 \\
0 & A_2 & B_2 & C_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \ddots & \ddots & \vdots \\
0 & 0 & \dots & A_{n-1} & B_{n-1} & C_{n-1} \\
0 & 0 & \dots & 0 & A'_n & B'_n
\end{bmatrix}
\begin{bmatrix}
u_0 \\
u_1 \\
u_2 \\
\vdots \\
u_{n-1} \\
u_n
\end{bmatrix}
=
\begin{bmatrix}
D'_0 \\
D_1 \\
D_2 \\
\vdots \\
D_{n-1} \\
D'_n
\end{bmatrix}
$$

**Ghi chú quan trọng khi làm bài thi (Trường hợp Dirichlet):**
Nếu đề cho biên Dirichlet ($u$ tại biên bằng một hằng số, tức là $\beta_0 = 0$ hoặc $\beta_1 = 0$), bạn không cần tính các hệ số "phẩy" ($B'_0, C'_0...$) cồng kềnh. 
* Ví dụ biên trái là $u_0 = \gamma_0/\alpha_0$: Hàng đầu tiên của ma trận chỉ đơn giản là `[1, 0, 0, ..., 0]`, và phần tử đầu tiên của vế phải $F$ là $\gamma_0/\alpha_0$.
* Tương tự cho biên phải: Hàng cuối cùng là `[0, ..., 0, 1]` và vế phải là $\gamma_1/\alpha_1$.

---

### BÀI TOÁN TỔNG QUÁT: NỘI SUY ĐA THỨC

**Phát biểu bài toán:**
Cho tập hợp gồm $n+1$ điểm dữ liệu phân biệt $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$. 
Cần tìm một đa thức $P_n(x)$ có bậc không vượt quá $n$ sao cho đa thức này đi qua tất cả các điểm dữ liệu đã cho. Tức là:
$$
P_n(x_i) = y_i, \quad \forall i = 0, 1, \dots, n
$$

Dưới đây là 3 phương pháp tiếp cận kinh điển để tìm $P_n(x)$.

---

### PHƯƠNG PHÁP 1: MA TRẬN VANDERMONDE (HỆ PHƯƠNG TRÌNH ĐẠI SỐ)

Ý tưởng của phương pháp này là giả sử đa thức nội suy có dạng tổng quát:
$$
P_n(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n
$$
Nhiệm vụ của ta là tìm $n+1$ hệ số $a_0, a_1, \dots, a_n$.

#### Bước 1: Thiết lập hệ phương trình
Thay lần lượt tọa độ của $n+1$ điểm vào đa thức, ta có hệ phương trình tuyến tính:
$$
\begin{cases}
a_0 + a_1 x_0 + a_2 x_0^2 + \dots + a_n x_0^n = y_0 \\
a_0 + a_1 x_1 + a_2 x_1^2 + \dots + a_n x_1^n = y_1 \\
\vdots \\
a_0 + a_1 x_n + a_2 x_n^2 + \dots + a_n x_n^n = y_n
\end{cases}
$$

#### Bước 2: Biểu diễn dưới dạng ma trận $V \cdot A = Y$
$$
\begin{bmatrix}
1 & x_0 & x_0^2 & \dots & x_0^n \\
1 & x_1 & x_1^2 & \dots & x_1^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_n & x_n^2 & \dots & x_n^n
\end{bmatrix}
\begin{bmatrix}
a_0 \\
a_1 \\
\vdots \\
a_n
\end{bmatrix}
=
\begin{bmatrix}
y_0 \\
y_1 \\
\vdots \\
y_n
\end{bmatrix}
$$
Ma trận hệ số ở trên được gọi là **Ma trận Vandermonde**.

#### Bước 3: Giải hệ phương trình
Giải hệ phương trình (bằng máy tính hoặc các phương pháp Gauss, Cramer), ta tìm được vector hệ số $A$.
Thế $a_i$ ngược lại phương trình ban đầu ta được đa thức $P_n(x)$.

---

### PHƯƠNG PHÁP 2: ĐA THỨC NỘI SUY LAGRANGE

Ý tưởng của Lagrange là xây dựng trực tiếp đa thức $P_n(x)$ thông qua sự kết hợp tuyến tính của các "hàm cơ sở" mà không cần giải bất kỳ hệ phương trình nào.

#### Bước 1: Công thức tổng quát của đa thức Lagrange
Đa thức nội suy Lagrange bậc $n$ được cho bởi:
$$
P_n(x) = \sum_{i=0}^n y_i L_i(x) = y_0 L_0(x) + y_1 L_1(x) + \dots + y_n L_n(x)
$$

#### Bước 2: Thiết lập các hàm cơ sở Lagrange $L_i(x)$
Hàm cơ sở $L_i(x)$ là một đa thức bậc $n$ thỏa mãn tính chất: $L_i(x_i) = 1$ và $L_i(x_j) = 0$ với mọi $j \neq i$.
Công thức của $L_i(x)$ là tích của $n$ phân thức:
$$
L_i(x) = \prod_{j=0, j \neq i}^n \frac{x - x_j}{x_i - x_j} = \frac{(x - x_0)(x - x_1) \dots (x - x_{i-1})(x - x_{i+1}) \dots (x - x_n)}{(x_i - x_0)(x_i - x_1) \dots (x_i - x_{i-1})(x_i - x_{i+1}) \dots (x_i - x_n)}
$$

#### Bước 3: Trình bày kết quả
Khi đi thi, bạn cần viết rõ từng hàm $L_i(x)$, sau đó nhân với $y_i$ tương ứng và cộng lại.
*Ví dụ với $n=2$ (3 điểm):*
$$
P_2(x) = y_0 \frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)} + y_1 \frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)} + y_2 \frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}
$$

---

### PHƯƠNG PHÁP 3: ĐA THỨC NỘI SUY NEWTON (SAI PHÂN CHIA)

Phương pháp Newton khắc phục được nhược điểm của Lagrange: đa thức được xây dựng theo kiểu "cộng dồn". Khi thêm điểm mới, ta chỉ cần tính thêm 1 số hạng mà không làm hỏng các số hạng trước đó.

#### Bước 1: Thiết lập Bảng sai phân chia (Divided Differences Table)
Ký hiệu sai phân chia:
* Cấp 0: $f[x_i] = y_i$
* Cấp 1: $f[x_i, x_{i+1}] = \frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i}$
* Cấp $k$: $f[x_i, \dots, x_{i+k}] = \frac{f[x_{i+1}, \dots, x_{i+k}] - f[x_i, \dots, x_{i+k-1}]}{x_{i+k} - x_i}$

**Mẫu trình bày bảng sai phân chia (Ví dụ $n=3$):**

| $x_i$ | Cấp 0 ($y_i$) | Sai phân cấp 1 | Sai phân cấp 2 | Sai phân cấp 3 |
| :---: | :---: | :---: | :---: | :---: |
| $x_0$ | **$f[x_0]$** | | | |
| | | **$f[x_0, x_1]$** | | |
| $x_1$ | $f[x_1]$ | | **$f[x_0, x_1, x_2]$** | |
| | | $f[x_1, x_2]$ | | **$f[x_0, x_1, x_2, x_3]$** |
| $x_2$ | $f[x_2]$ | | $f[x_1, x_2, x_3]$ | |
| | | $f[x_2, x_3]$ | | |
| $x_3$ | $f[x_3]$ | | | |

Các hệ số của đa thức Newton chính là **đường chéo trên cùng** của bảng (in đậm). Gọi các hệ số này là $c_0, c_1, c_2, \dots, c_n$.

#### Bước 2: Công thức tổng quát đa thức Newton
$$
P_n(x) = c_0 + c_1(x - x_0) + c_2(x - x_0)(x - x_1) + \dots + c_n(x - x_0)(x - x_1)\dots(x - x_{n-1})
$$

Biểu diễn gọn bằng ký hiệu tổng:
$$
P_n(x) = f[x_0] + \sum_{k=1}^n \left( f[x_0, \dots, x_k] \prod_{i=0}^{k-1} (x - x_i) \right)
$$

#### Bước 3: Rút gọn (Tùy chọn)
Thay các giá trị $c_k$ từ bảng vào công thức, bạn sẽ có đa thức hoàn chỉnh. Có thể nhân phân phối để đưa về dạng $a_0 + a_1 x + \dots + a_n x^n$ nếu đề bài yêu cầu.

 *Lưu ý:* Nếu các điểm $x_i$ **cách đều nhau** (bước $h = const$), ta không cần dùng sai phân chia mà dùng **Sai phân tiến (Forward Difference)** hoặc **Sai phân lùi (Backward Difference)** để việc tính toán trên giấy nhẹ nhàng hơn rất nhiều.
