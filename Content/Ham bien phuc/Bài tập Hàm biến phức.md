# CHUYÊN ĐỀ: ĐIỀU KIỆN CAUCHY-RIEMANN & HÀM KHẢ VI

## LÝ THUYẾT NỀN TẢNG 

Để khảo sát tính khả vi của một hàm biến phức $f(z) = u(x,y) + iv(x,y)$ tại một điểm $z_0$, ta dùng hệ phương trình Cauchy-Riemann (C-R). Đây là điều kiện cần và đủ (cùng với tính liên tục của các đạo hàm riêng) để đạo hàm $f'(z_0)$ tồn tại.

### 1. Dạng tọa độ Đề-các (Cartesian Form)
Hệ C-R và công thức đạo hàm:
$$\begin{cases} u_x = v_y \\ u_y = -v_x \end{cases} \implies f'(z) = u_x + iv_x = v_y - iu_y$$

### 2. Dạng tọa độ Cực (Polar Form)
Với $z = r e^{i\theta}$, hàm số viết lại thành $f(z) = u(r,\theta) + iv(r,\theta)$. 
Hệ C-R và công thức đạo hàm (với $r > 0$):
$$\begin{cases} u_r = \frac{1}{r}v_\theta \\ v_r = -\frac{1}{r}u_\theta \end{cases} \implies f'(z) = e^{-i\theta}(u_r + iv_r)$$



## LỜI GIẢI CHI TIẾT CÁC BÀI TẬP

> [!prob] Bài 1: 
> Sử dụng điều kiện C-R để chứng minh các hàm sau khả vi với mọi $z$, và tìm $f'(z)$.
> (a) $f(z) = iz + 4i \quad$ (b) $f(z) = z^3 \quad$ (c) $f(z) = -2(xy + x) + i(x^2 - 2y - y^2)$

> [!prf] Lời giải Bài 1
> **Câu (a): $f(z) = iz + 4i$**
> Thế $z = x + iy \implies f(z) = i(x+iy) + 4i = -y + i(x+4)$.
> $u = -y \implies u_x = 0, u_y = -1$.
> $v = x+4 \implies v_x = 1, v_y = 0$.
> Dễ thấy $u_x = 0 = v_y$ và $u_y = -1 = -v_x$. Hệ C-R thỏa mãn $\forall z \in \mathbb{C}$.
> $f'(z) = u_x + iv_x = 0 + i(1) = i$.
>
> **Câu (b): $f(z) = z^3$**
> $f(z) = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
> $u = x^3 - 3xy^2 \implies u_x = 3x^2 - 3y^2, u_y = -6xy$.
> $v = 3x^2y - y^3 \implies v_x = 6xy, v_y = 3x^2 - 3y^2$.
> Ta thấy $u_x = v_y$ và $u_y = -v_x$ đúng $\forall (x,y)$.
> $f'(z) = u_x + iv_x = (3x^2 - 3y^2) + i(6xy) = 3(x+iy)^2 = 3z^2$.
>
> **Câu (c): $f(z) = -2(xy + x) + i(x^2 - 2y - y^2)$**
> $u_x = -2y - 2, \quad u_y = -2x$
> $v_x = 2x, \quad v_y = -2 - 2y$
> C-R: $u_x = -2y-2 = v_y$ và $u_y = -2x = -(2x) = -v_x$ đúng $\forall z \in \mathbb{C}$.
> $f'(z) = u_x + iv_x = -2y - 2 + i(2x) = -2 + 2i(x+iy) = -2 + 2iz$.



> [!prob] Bài 2: 
> Cho $f(z) = e^x\cos y + ie^x\sin y$. Chứng minh $f(z)$ và $f'(z)$ khả vi với mọi $z$.

> [!prf] Lời giải Bài 2
> $u = e^x\cos y \implies u_x = e^x\cos y, u_y = -e^x\sin y$.
> $v = e^x\sin y \implies v_x = e^x\sin y, v_y = e^x\cos y$.
> Hệ C-R thỏa mãn do $u_x = v_y$ và $u_y = -v_x$.
> Đạo hàm: $f'(z) = u_x + iv_x = e^x\cos y + ie^x\sin y = f(z)$.
> Vì $f'(z)$ chính là $f(z)$, nên đạo hàm của nó hiển nhiên tồn tại và khả vi trên toàn $\mathbb{C}$.



> [!prob] Bài 3: 
> Tìm hằng số $a, b$ để $f(z) = (2x - y) + i(ax + by)$ khả vi với mọi $z$.

> [!prf] Lời giải Bài 3
> Ta có $u_x = 2, u_y = -1$ và $v_x = a, v_y = b$.
> Để khả vi $\forall z$, hệ C-R phải đúng:
> $\begin{cases} u_x = v_y \\ u_y = -v_x \end{cases} \implies \begin{cases} 2 = b \\ -1 = -a \end{cases} \implies a = 1, b = 2$.



> [!prob] Bài 4: 
> Chứng minh $f(z) = \frac{y + ix}{x^2 + y^2}$ khả vi với mọi $z \neq 0$.

> [!prf] Lời giải Bài 4
> Viết lại: $f(z) = \frac{y}{x^2+y^2} + i\frac{x}{x^2+y^2}$.
> Đạo hàm riêng (dùng quy tắc thương):
> $$u_x = \frac{-y(2x)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2} \quad ; \quad v_y = \frac{-x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$$
> $$u_y = \frac{1(x^2+y^2) - y(2y)}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2} \quad ; \quad v_x = \frac{1(x^2+y^2) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$$
> Rõ ràng $u_x = v_y$ và $u_y = -v_x$. Hàm khả vi mọi nơi trừ gốc tọa độ $(0,0)$. 
> *(Mẹo: $f(z) = \frac{i(x-iy)}{x^2+y^2} = \frac{i\bar{z}}{|z|^2} = \frac{i}{z}$, hiển nhiên giải tích khi $z \neq 0$).*



> [!prob] Bài 5: 
> Chứng minh $f(z) = e^{2xy}[\cos(y^2 - x^2) + i\sin(y^2 - x^2)]$ khả vi với mọi $z$.

> [!prf] Lời giải Bài 5
> Ta tính các đạo hàm riêng bằng quy tắc nhân (Product Rule):
> $u_x = e^{2xy}\cdot 2y\cos(y^2-x^2) + e^{2xy}\sin(y^2-x^2)\cdot 2x = 2e^{2xy}[y\cos(y^2-x^2) + x\sin(y^2-x^2)]$
> $v_y = e^{2xy}\cdot 2x\sin(y^2-x^2) + e^{2xy}\cos(y^2-x^2)\cdot 2y = 2e^{2xy}[x\sin(y^2-x^2) + y\cos(y^2-x^2)]$
> $\implies u_x = v_y$.
>
> $u_y = e^{2xy}\cdot 2x\cos(y^2-x^2) - e^{2xy}\sin(y^2-x^2)\cdot 2y = 2e^{2xy}[x\cos(y^2-x^2) - y\sin(y^2-x^2)]$
> $v_x = e^{2xy}\cdot 2y\sin(y^2-x^2) - e^{2xy}\cos(y^2-x^2)\cdot 2x = 2e^{2xy}[y\sin(y^2-x^2) - x\cos(y^2-x^2)]$
> $\implies u_y = -v_x$. C-R thỏa mãn $\forall z \in \mathbb{C}$.



> [!prob] Bài 6: 
> Dùng C-R để chứng minh các hàm sau không khả vi tại bất cứ đâu.
> (a) $f(z) = \bar{z} \quad$ (b) $g(z) = z + \bar{z} \quad$ (c) $h(z) = e^x\cos x + ie^x\sin x$

> [!prf] Lời giải Bài 6
> **(a) $f(z) = x - iy$** $\implies u_x = 1, v_y = -1 \implies 1 \neq -1$. Vi phạm C-R.
> **(b) $g(z) = 2x + i0$** $\implies u_x = 2, v_y = 0 \implies 2 \neq 0$. Vi phạm C-R.
> **(c) $h(z) = e^x\cos x + ie^x\sin x$**
> $u = e^x\cos x, v = e^x\sin x$. 
> $u_x = e^x(\cos x - \sin x)$ và $v_y = 0$ (vì $v$ không phụ thuộc $y$). 
> C-R yêu cầu: $e^x(\cos x - \sin x) = 0 \implies \cos x = \sin x$.
> Đồng thời $u_y = -v_x \implies 0 = -e^x(\sin x + \cos x) \implies \cos x = -\sin x$.
> Hai hệ thức này mâu thuẫn (chỉ xảy ra khi $\sin x = 0$ và $\cos x = 0$, điều này vô lý). Vậy vi phạm C-R ở mọi nơi.



> [!prob] Bài 7 & 8:
> **Bài 7:** $f(z) = |z|^2$. Chứng minh chỉ khả vi tại $z_0 = 0$.
> **Bài 8:** $f(z) = x^2 + y^2 + i2xy$. Chứng minh chỉ có đạo hàm trên trục $Ox$.

> [!prf] Lời giải Bài 7 & 8
> **Bài 7:** $f(z) = x^2 + y^2$.
> $u_x = 2x, u_y = 2y$ và $v_x = 0, v_y = 0$.
> Hệ C-R: $2x = 0$ và $2y = 0 \implies (x,y) = (0,0)$. Chỉ thỏa mãn tại gốc tọa độ.
> 
> **Bài 8:** $u = x^2+y^2, v = 2xy$.
> $u_x = 2x, u_y = 2y$ và $v_x = 2y, v_y = 2x$.
> Hệ C-R: $2x = 2x$ (luôn đúng) và $2y = -2y \implies 4y = 0 \implies y = 0$. 
> Do đó đạo hàm chỉ tồn tại khi $y=0$ (nằm trên trục thực $Ox$).



> [!prob] Bài 9: 
> Cho $f$ là hàm khả vi. Chứng minh $|f'(z)|^2 = u_x^2 + v_x^2 = u_x^2 + u_y^2$.

> [!prf] Lời giải Bài 9
> Do $f$ khả vi, ta có đạo hàm theo phương $x$: $f'(z) = u_x + iv_x$.
> Lấy bình phương mô-đun: $|f'(z)|^2 = u_x^2 + v_x^2 \quad (1)$.
> Theo hệ C-R, ta có $v_x = -u_y$. Bình phương 2 vế ta được $v_x^2 = u_y^2$.
> Thế vào $(1)$, ta có ngay: $|f'(z)|^2 = u_x^2 + u_y^2$.



> [!prob] Bài 10: 
> Cho $f(z) = (\ln r)^2 - \theta^2 + i2\theta\ln r$. C/m khả vi với $r > 0, -\pi < \theta < \pi$ và tìm $f'(z)$.

> [!prf] Lời giải Bài 10
> Dùng hệ C-R dạng cực. $u = (\ln r)^2 - \theta^2$ và $v = 2\theta\ln r$.
> Tính đạo hàm:
> $u_r = \frac{2\ln r}{r} \quad ; \quad v_\theta = 2\ln r \implies u_r = \frac{1}{r}v_\theta$
> $u_\theta = -2\theta \quad ; \quad v_r = \frac{2\theta}{r} \implies v_r = -\frac{1}{r}u_\theta$
> Hệ C-R dạng cực được thỏa mãn. Tính đạo hàm:
> $f'(z) = e^{-i\theta}(u_r + iv_r) = e^{-i\theta}\left(\frac{2\ln r}{r} + i\frac{2\theta}{r}\right) = \frac{2}{re^{i\theta}}(\ln r + i\theta) = \frac{2}{z}\log z$.



> [!prob] Bài 11: 
> Cho $f$ khả vi tại $z_0 = r_0e^{i\theta_0}$. Cho $z \to z_0$ dọc theo tia $\theta = \theta_0$. Dùng định nghĩa đạo hàm để CM: $f'(z_0) = e^{-i\theta_0}(u_r + iv_r)$.

> [!prf] Lời giải Bài 11
> Theo định nghĩa: $f'(z_0) = \lim_{\Delta z \to 0} \frac{\Delta w}{\Delta z}$.
> Vì $z$ tiến về $z_0$ dọc theo tia có góc cố định $\theta_0$, biến thiên chỉ xảy ra ở bán kính: $\Delta z = (r_0 + \Delta r)e^{i\theta_0} - r_0e^{i\theta_0} = \Delta r \cdot e^{i\theta_0}$.
> $\implies f'(z_0) = \lim_{\Delta r \to 0} \frac{u(r_0+\Delta r, \theta_0) - u(r_0, \theta_0) + i[v(r_0+\Delta r, \theta_0) - v(r_0, \theta_0)]}{\Delta r \cdot e^{i\theta_0}}$
> Tách mẫu số, giới hạn biến thành đạo hàm riêng theo $r$:
> $f'(z_0) = \frac{1}{e^{i\theta_0}} \left( \frac{\partial u}{\partial r} + i\frac{\partial v}{\partial r} \right) = e^{-i\theta_0}(u_r + iv_r)$.



> [!prob] Bài 12: 
> Trường vector $F(z) = U(x,y) + iV(x,y)$ gọi là không xoáy (irrotational) nếu $U_y = V_x$ và không ống (solenoidal) nếu $U_x = -V_y$. Nếu $f(z)$ là hàm giải tích, CM rằng $F(z) = \overline{f(z)}$ thỏa mãn cả hai tính chất này.

> [!prf] Lời giải Bài 12
> Vì $f(z) = u + iv$ giải tích, nó thỏa mãn C-R: $u_x = v_y$ và $u_y = -v_x$.
> Ta có $F(z) = \overline{f(z)} = u - iv$. Suy ra các thành phần của vector trường $F$ là: $U = u$ và $V = -v$.
> Tính đạo hàm trường vector:
> $U_y = u_y$ và $V_x = -v_x$. Vì $u_y = -v_x$ (theo C-R) $\implies U_y = V_x$ (Trường không xoáy).
> $U_x = u_x$ và $V_y = -v_y$. Vì $u_x = v_y$ (theo C-R) $\implies U_x = -V_y$ (Trường không ống).



> [!prob] Bài 13: 
> Phương trình C-R dạng cực
> (a) Dùng quy tắc chuỗi CM: $u_r = u_x\cos\theta + u_y\sin\theta$ và $u_\theta = -u_xr\sin\theta + u_yr\cos\theta$.
> (b) Dùng kết quả phần (a) để CM: $ru_r = v_\theta$ và $rv_r = -u_\theta$.

> [!prf] Lời giải Bài 13
> **(a) Quy tắc đạo hàm hàm hợp (Chain Rule):**
> Có $x = r\cos\theta, y = r\sin\theta$.
> $\frac{\partial x}{\partial r} = \cos\theta, \frac{\partial y}{\partial r} = \sin\theta \implies u_r = u_x \frac{\partial x}{\partial r} + u_y \frac{\partial y}{\partial r} = u_x\cos\theta + u_y\sin\theta \quad (1)$
> $\frac{\partial x}{\partial \theta} = -r\sin\theta, \frac{\partial y}{\partial \theta} = r\cos\theta \implies u_\theta = u_x \frac{\partial x}{\partial \theta} + u_y \frac{\partial y}{\partial \theta} = -u_xr\sin\theta + u_yr\cos\theta \quad (2)$
> Tương tự cho $v$: 
> $v_r = v_x\cos\theta + v_y\sin\theta \quad (3)$ 
> $v_\theta = -v_xr\sin\theta + v_yr\cos\theta \quad (4)$
> 
> **(b) Thiết lập hệ C-R:**
> Thay C-R hệ Đề-các ($u_x = v_y, u_y = -v_x$) vào các phương trình để kiểm chứng.
> Nhân $(1)$ với $r$:
> $ru_r = r(u_x\cos\theta + u_y\sin\theta) = r(v_y\cos\theta - v_x\sin\theta) = -v_xr\sin\theta + v_yr\cos\theta$. 
> Đối chiếu với $(4) \implies ru_r = v_\theta$.
> 
> Nhân $(3)$ với $r$:
> $rv_r = r(v_x\cos\theta + v_y\sin\theta) = r(-u_y\cos\theta + u_x\sin\theta) = -(-u_xr\sin\theta + u_yr\cos\theta)$.
> Đối chiếu biểu thức trong ngoặc với $(2) \implies rv_r = -u_\theta$.

# CHUYÊN ĐỀ: TÍNH KHẢ VI, HÀM GIẢI TÍCH VÀ HÀM ĐIỀU HÒA

##  LÝ THUYẾT NỀN TẢNG 

> [!def] Hàm Giải tích (Analytic Function) & Hàm Nguyên (Entire Function)
> *   **Hàm giải tích:** Hàm số $f(z)$ được gọi là giải tích tại $z_0$ nếu nó có đạo hàm tại $z_0$ và tại mọi điểm trong một lân cận mở của $z_0$. Nếu $f(z)$ giải tích trên miền $D$, ta nói $f \in \mathcal{A}(D)$.
> *   **Hàm nguyên:** Nếu $f(z)$ giải tích trên toàn bộ mặt phẳng phức $\mathbb{C}$, nó được gọi là một hàm nguyên.

> [!def] Hàm Điều hòa (Harmonic Function) & Phương trình Laplace
> Cho hàm thực hai biến $u(x,y)$ có các đạo hàm riêng cấp hai liên tục trên miền $D$. Hàm $u$ được gọi là **điều hòa** trên $D$ nếu nó thỏa mãn phương trình Laplace:
> $$\Delta u = u_{xx} + u_{yy} = 0$$

> [!prp] Mối liên hệ giữa Hàm giải tích và Hàm điều hòa
> Nếu $f(z) = u(x,y) + iv(x,y)$ là một hàm giải tích trên miền $D$, thì cả hai thành phần $u$ và $v$ đều là các hàm điều hòa trên $D$. 
> Khi đó, $v$ được gọi là **liên hợp điều hòa** (harmonic conjugate) của $u$. Hai hàm này liên kết chặt chẽ với nhau qua hệ phương trình Cauchy-Riemann:
> $$\begin{cases} u_x = v_y \\ u_y = -v_x \end{cases}$$



##  LỜI GIẢI CHI TIẾT TỪNG BÀI TẬP 

### PHẦN 1: TÍNH GIẢI TÍCH & HÀM NGUYÊN (Bài 2 - 5)

> [!prob] Bài 2: 
> Giải thích tại sao hàm hợp của hai hàm nguyên lại là một hàm nguyên.

> [!prf] Lời giải Bài 2
> Giả sử $f(z)$ và $g(z)$ là hai hàm nguyên (có đạo hàm tại mọi $z \in \mathbb{C}$).
> Xét hàm hợp $h(z) = f(g(z))$. Theo quy tắc đạo hàm hàm hợp (Chain Rule) của giải tích phức, đạo hàm của $h(z)$ được tính bằng:
> $$h'(z) = f'(g(z)) \cdot g'(z)$$
> Vì $g$ là hàm nguyên nên $g(z)$ xác định và $g'(z)$ tồn tại với mọi $z \in \mathbb{C}$. Tương tự, vì $f$ là hàm nguyên nên $f'$ tồn tại tại mọi điểm, kể cả điểm $g(z)$. Do đó, tích $f'(g(z)) \cdot g'(z)$ tồn tại và hữu hạn với mọi $z \in \mathbb{C}$.
> Suy ra $h(z)$ khả vi trên toàn mặt phẳng phức, tức là $h(z)$ là hàm nguyên.

> [!prob] Bài 3: 
> Xác định nơi hàm $f(z) = x^3 + 3xy^2 + i(y^3 + 3x^2y)$ khả vi. Hàm này có giải tích không? Tại sao?

> [!prf] Lời giải Bài 3
> Các thành phần thực và ảo: $u = x^3 + 3xy^2$ và $v = y^3 + 3x^2y$.
> Đạo hàm riêng:
> $u_x = 3x^2 + 3y^2 \quad ; \quad u_y = 6xy$
> $v_x = 6xy \quad ; \quad v_y = 3y^2 + 3x^2$
> Xét hệ phương trình Cauchy-Riemann (C-R):
> 1. $u_x = v_y \implies 3x^2 + 3y^2 = 3y^2 + 3x^2$ (Luôn đúng $\forall x, y$)
> 2. $u_y = -v_x \implies 6xy = -6xy \implies 12xy = 0 \implies x = 0 \text{ hoặc } y = 0$
> **Nơi khả vi:** Hàm số chỉ khả vi tại các điểm nằm trên hai trục tọa độ ($x=0$ hoặc $y=0$).
> **Tính giải tích:** Hàm số **không giải tích** ở bất kỳ đâu. Vì tập hợp các điểm khả vi (hai đường thẳng chữ thập) không chứa bất kỳ một đĩa mở (lân cận) nào.

> [!prob] Bài 4: 
> Xác định nơi hàm $f(z) = 8x - x^3 - xy^2 + i(x^2y + y^3 - 8y)$ khả vi. Hàm này có giải tích không? Tại sao?

> [!prf] Lời giải Bài 4
> $u = 8x - x^3 - xy^2 \implies u_x = 8 - 3x^2 - y^2 \quad ; \quad u_y = -2xy$
> $v = x^2y + y^3 - 8y \implies v_x = 2xy \quad ; \quad v_y = x^2 + 3y^2 - 8$
> Xét hệ C-R:
> 1. $u_y = -v_x \implies -2xy = -2xy$ (Luôn đúng)
> 2. $u_x = v_y \implies 8 - 3x^2 - y^2 = x^2 + 3y^2 - 8 \implies 4x^2 + 4y^2 = 16 \implies x^2 + y^2 = 4$
> **Nơi khả vi:** Hàm số chỉ có đạo hàm trên đường tròn tâm gốc tọa độ bán kính $R=2$ ($x^2+y^2=4$).
> **Tính giải tích:** Hàm số **không giải tích**. Một đường cong (đường tròn) không thể chứa bất kỳ lân cận mở nào.

> [!prob] Bài 5: 
> Cho $f(z) = x^2 - y^2 + i2|xy|$. (a) Nơi nào hàm có đạo hàm? (b) Nơi nào hàm giải tích?

> [!prf] Lời giải Bài 5
> Ta có $u = x^2 - y^2$. Thành phần ảo $v = 2|xy|$ là một hàm rẽ nhánh.
> *   **Góc phần tư I và III ($xy > 0$):** $v = 2xy$.
>     $u_x = 2x, u_y = -2y$ và $v_x = 2y, v_y = 2x$.
>     C-R: $2x = 2x$ và $-2y = -2y$ (Luôn đúng). Khả vi tại mọi điểm trong góc phần tư I và III.
> *   **Góc phần tư II và IV ($xy < 0$):** $v = -2xy$.
>     $v_x = -2y, v_y = -2x$.
>     C-R: $u_x = v_y \implies 2x = -2x \implies x=0$. Trái với giả thiết $xy < 0$. Do đó, không khả vi bên trong góc phần tư II và IV.
> *   **Tại trục tọa độ (với $z=0$):** Ta tính giới hạn dễ thấy các đạo hàm riêng bằng 0 và thỏa C-R. Tuy nhiên, nó không đóng vai trò tạo nên tính giải tích.
> 
> **Kết luận:**
> (a) Khả vi tại mọi điểm trong miền $xy > 0$ (Góc I, III) và gốc $z=0$.
> (b) Giải tích trên tập mở là các góc phần tư I và III (loại trừ các trục tọa độ).



### PHẦN 2: HÀM ĐIỀU HÒA & PHƯƠNG TRÌNH LAPLACE (Bài 6 - 12)

> [!prob] Bài 6, 7, 8: 
> Chứng minh các hàm sau thỏa mãn phương trình Laplace (Hàm điều hòa).
> 6. $u = e^x\cos y$ và $v = e^x\sin y$
> 7. $u = \ln(x^2 + y^2)$ với $(x,y) \neq (0,0)$
> 8. $\phi(x,y) = ax^2 + bxy + cy^2$ (Tìm điều kiện của $a, b, c$)

> [!prf] Lời giải Bài 6, 7, 8
> **Bài 6:** 
> $u_x = e^x\cos y \implies u_{xx} = e^x\cos y$. $u_y = -e^x\sin y \implies u_{yy} = -e^x\cos y$.
> $\Delta u = e^x\cos y - e^x\cos y = 0$ (Điều hòa).
> Làm tương tự cho $v$: $v_{xx} = e^x\sin y, v_{yy} = -e^x\sin y \implies \Delta v = 0$ (Điều hòa).
> 
> **Bài 7:**
> $u_x = \frac{2x}{x^2+y^2} \implies u_{xx} = \frac{2(x^2+y^2) - 2x(2x)}{(x^2+y^2)^2} = \frac{2y^2 - 2x^2}{(x^2+y^2)^2}$.
> $u_y = \frac{2y}{x^2+y^2} \implies u_{yy} = \frac{2(x^2+y^2) - 2y(2y)}{(x^2+y^2)^2} = \frac{2x^2 - 2y^2}{(x^2+y^2)^2}$.
> Cộng lại: $\Delta u = u_{xx} + u_{yy} = 0$. Hàm $u$ là điều hòa.
> 
> **Bài 8:**
> $\phi_x = 2ax + by \implies \phi_{xx} = 2a$.
> $\phi_y = bx + 2cy \implies \phi_{yy} = 2c$.
> Để $\phi$ điều hòa: $\Delta \phi = 2a + 2c = 0 \implies a = -c$. Hệ số $b$ tùy ý.

> [!prob] Bài 9: 
> Có tồn tại hàm giải tích $f(z) = u + iv$ nào mà $v(x,y) = x^3 + y^3$ không? Tại sao?

> [!prf] Lời giải Bài 9
> Nếu $f(z)$ giải tích, thì thành phần ảo $v(x,y)$ bắt buộc phải là một hàm điều hòa.
> Kiểm tra $v = x^3 + y^3$:
> $v_x = 3x^2 \implies v_{xx} = 6x$.
> $v_y = 3y^2 \implies v_{yy} = 6y$.
> Tính $\Delta v = v_{xx} + v_{yy} = 6x + 6y = 6(x+y)$. 
> Rõ ràng $\Delta v \neq 0$ (trừ trên đường thẳng $y=-x$). Do đó $v(x,y)$ không phải là hàm điều hòa.
> **Kết luận:** Không tồn tại hàm giải tích nào có thành phần ảo như vậy.

> [!prob] Bài 10: 
> Tìm hàm giải tích $f(z) = u + iv$ biết một thành phần của nó.
> (a) $u = y^3 - 3x^2y$ 
> (b) $u = \sin y \sinh x$
> (c) $v = e^y\sin x$
> (d) $v = \sin x \cosh y$

> [!prf] Lời giải Bài 10 (Sử dụng phương pháp tích phân trực tiếp C-R)
> **(a) Cho $u = y^3 - 3x^2y$**
> Tính $u_x = -6xy$ và $u_y = 3y^2 - 3x^2$.
> Theo C-R, $v_y = u_x = -6xy$. Tích phân theo $y$:
> $v = \int -6xy dy = -3xy^2 + h(x)$.
> Đạo hàm $v$ theo $x$: $v_x = -3y^2 + h'(x)$.
> C-R yêu cầu $v_x = -u_y \implies -3y^2 + h'(x) = -(3y^2 - 3x^2) = 3x^2 - 3y^2$.
> Suy ra $h'(x) = 3x^2 \implies h(x) = x^3 + C$.
> Vậy $f(z) = (y^3 - 3x^2y) + i(x^3 - 3xy^2 + C) = i(x^3 + 3ix^2y - 3xy^2 - iy^3) + iC = iz^3 + iC$.
> 
> **(b) Cho $u = \sin y \sinh x$**
> $u_x = \sin y \cosh x \quad ; \quad u_y = \cos y \sinh x$
> $v_y = u_x = \sin y \cosh x \implies v = -\cos y \cosh x + h(x)$.
> $v_x = -\cos y \sinh x + h'(x) = -u_y = -\cos y \sinh x \implies h'(x) = 0 \implies h(x) = C$.
> $f(z) = \sinh x \sin y + i(-\cos y \cosh x + C) = -i(\cosh x \cos y + i\sinh x \sin y) + iC = -i\cosh z + iC$.
> 
> **(c) Cho $v = e^y\sin x$**
> $v_x = e^y\cos x \quad ; \quad v_y = e^y\sin x$.
> $u_x = v_y = e^y\sin x \implies u = -e^y\cos x + h(y)$.
> $u_y = -e^y\cos x + h'(y) = -v_x = -e^y\cos x \implies h'(y) = 0 \implies h(y) = C$.
> $f(z) = -e^y\cos x + C + ie^y\sin x = -e^y(\cos x - i\sin x) + C = -e^y e^{-ix} + C = -e^{-i(x+iy)} + C = -e^{-iz} + C$.
> 
> **(d) Cho $v = \sin x \cosh y$**
> $v_x = \cos x \cosh y \quad ; \quad v_y = \sin x \sinh y$.
> $u_x = v_y = \sin x \sinh y \implies u = -\cos x \sinh y + h(y)$.
> $u_y = -\cos x \cosh y + h'(y) = -v_x = -\cos x \cosh y \implies h'(y) = 0 \implies h(y) = C$.
> $f(z) = -\cos x \sinh y + C + i\sin x \cosh y = i(\sin x \cosh y + i\cos x \sinh y) + C = i\sin z + C$.

> [!prob] Bài 11 & 12: Tính chất của hàm điều hòa
> **Bài 11:** Kiểm tra $v = \arctan(y/x)$ thỏa Laplace.
> **Bài 12:** Cho $u(x,y)$ điều hòa. C/m $U(x,y) = u(x, -y)$ cũng điều hòa.

> [!prf] Lời giải Bài 11 & 12
> **Bài 11:** 
> Dùng công thức đạo hàm $\arctan(u)$:
> $v_x = \frac{-y/x^2}{1+(y/x)^2} = \frac{-y}{x^2+y^2} \implies v_{xx} = \frac{-0 - (-y)(2x)}{(x^2+y^2)^2} = \frac{2xy}{(x^2+y^2)^2}$
> $v_y = \frac{1/x}{1+(y/x)^2} = \frac{x}{x^2+y^2} \implies v_{yy} = \frac{-x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$
> $\Delta v = v_{xx} + v_{yy} = 0$. (Điều hòa).
> 
> **Bài 12:**
> Dùng quy tắc chuỗi cho hàm hợp:
> $U_x(x,y) = u_x(x,-y) \implies U_{xx}(x,y) = u_{xx}(x,-y)$
> $U_y(x,y) = u_y(x,-y) \cdot (-1) \implies U_{yy}(x,y) = -u_{yy}(x,-y) \cdot (-1) = u_{yy}(x,-y)$
> $\Delta U = U_{xx} + U_{yy} = u_{xx}(x,-y) + u_{yy}(x,-y)$.
> Vì bản thân $u$ là hàm điều hòa nên $u_{xx} + u_{yy} = 0$ tại mọi điểm. Vậy $\Delta U = 0$, $U$ cũng là hàm điều hòa.



### PHẦN 3: TÍNH CHẤT LIÊN HỢP VÀ HỆ QUẢ ĐẠO HÀM (Bài 13 - 20)

> [!prob] Bài 13: 
> Cho $u_1 = x^2 - y^2$ và $u_2 = x^3 - 3xy^2$. Chứng minh chúng điều hòa nhưng tích của chúng không điều hòa.

> [!prf] Lời giải Bài 13
> Dễ dàng kiểm tra $u_1$ và $u_2$ điều hòa do $\Delta u_1 = 2 - 2 = 0$ và $\Delta u_2 = 6x - 6x = 0$.
> Xét tích $P = u_1 u_2 = (x^2 - y^2)(x^3 - 3xy^2) = x^5 - 4x^3y^2 + 3xy^4$.
> $P_x = 5x^4 - 12x^2y^2 + 3y^4 \implies P_{xx} = 20x^3 - 24xy^2$.
> $P_y = -8x^3y + 12xy^3 \implies P_{yy} = -8x^3 + 36xy^2$.
> $\Delta P = 12x^3 + 12xy^2 = 12x(x^2+y^2) \neq 0$. Suy ra tích của hai hàm điều hòa nói chung không phải là hàm điều hòa.

> [!prob] Bài 14, 15, 16: Lý thuyết liên hợp điều hòa
> **14.** $v$ liên hợp của $u \implies -u$ là liên hợp của $v$.
> **15.** $v$ liên hợp của $u \implies h = u^2 - v^2$ điều hòa.
> **16.** $v$ liên hợp của $u$ VÀ $u$ liên hợp của $v \implies u, v$ là hằng số.

> [!prf] Lời giải Bài 14, 15, 16
> **Bài 14:** Giả thiết $u_x = v_y$ và $u_y = -v_x$.
> Để $-u$ là liên hợp của $v$, ta cần chứng minh hàm $g(z) = v + i(-u)$ thỏa C-R.
> Xét đạo hàm của thành phần thực $v$ và ảo $-u$:
> $v_x = (-u)_y \implies v_x = -u_y$ (Đúng với giả thiết)
> $v_y = -(-u)_x \implies v_y = u_x$ (Đúng với giả thiết). Chứng minh xong.
> 
> **Bài 15:** Vì $v$ là liên hợp của $u$ nên $f(z) = u + iv$ là hàm giải tích.
> Suy ra $f(z)^2$ cũng là hàm giải tích. 
> Khai triển: $f(z)^2 = (u+iv)^2 = (u^2 - v^2) + i(2uv)$.
> Vì $f^2$ giải tích, phần thực của nó là $h = u^2 - v^2$ bắt buộc phải là một hàm điều hòa.
> 
> **Bài 16:**
> $v$ liên hợp $u \implies u_x = v_y$ (1) và $u_y = -v_x$ (2).
> $u$ liên hợp $v \implies v_x = u_y$ (3) và $v_y = -u_x$ (4).
> Thế (4) vào (1): $u_x = -u_x \implies 2u_x = 0 \implies u_x = 0$.
> Thế (3) vào (2): $u_y = -u_y \implies 2u_y = 0 \implies u_y = 0$.
> Vì $u_x = u_y = 0$ trên một miền, $u$ là hằng số. Kéo theo $v$ cũng là hằng số.

> [!prob] Bài 17 & 18: Đạo hàm bằng 0
> **17.** $f$ giải tích và $f'(z) = 0 \implies f$ là hằng số.
> **18.** $f'(z) = g'(z) \implies f(z) = g(z) + C$.

> [!prf] Lời giải Bài 17 & 18
> **Bài 17:** Ta có $f'(z) = u_x + iv_x = 0 \implies u_x = 0$ và $v_x = 0$.
> Theo C-R, $u_y = -v_x = 0$ và $v_y = u_x = 0$.
> Vì mọi đạo hàm riêng đều bằng 0 trên miền $D$, cả $u$ và $v$ đều là hằng số, suy ra $f$ là hằng số.
> 
> **Bài 18:** Đặt $H(z) = f(z) - g(z)$. 
> Vì $f, g$ giải tích nên $H(z)$ giải tích. Đạo hàm: $H'(z) = f'(z) - g'(z) = 0$.
> Áp dụng kết quả bài 17, $H(z) = C$ (hằng số phức). Vậy $f(z) = g(z) + C$.

> [!prob] Bài 19: 
> $f$ giải tích và khác hằng số trên $D$. C/m $g(z) = \overline{f(z)}$ không giải tích.

> [!prf] Lời giải Bài 19
> Cho $f = u + iv$ giải tích $\implies u_x = v_y$ và $u_y = -v_x$.
> Hàm liên hợp $g(z) = u - iv$. Thành phần thực là $u$, ảo là $V = -v$.
> Giả sử phản chứng $g(z)$ giải tích, nó phải thỏa mãn C-R:
> $u_x = V_y = (-v)_y = -v_y$. Kết hợp với giả thiết $u_x = v_y$, ta có $u_x = -u_x \implies u_x = v_y = 0$.
> $u_y = -V_x = -(-v)_x = v_x$. Kết hợp với giả thiết $u_y = -v_x$, ta có $u_y = -u_y \implies u_y = v_x = 0$.
> Vì tất cả các đạo hàm riêng bằng 0, $f(z)$ phải là một hàm hằng. Điều này trái với giả thiết đề bài (nonconstant).
> Vậy $g(z)$ không thể giải tích.

> [!prob] Bài 20: 
> Cho $f(z) = \ln r + i\theta$ ($r > 0, -\pi < \theta < \pi$). C/m $f$ giải tích và $f'(z) = 1/z$.

> [!prf] Lời giải Bài 20
> Sử dụng hệ C-R tọa độ cực. Ở đây $u = \ln r$ và $v = \theta$.
> Đạo hàm riêng:
> $u_r = \frac{1}{r} \quad ; \quad v_\theta = 1$
> $u_\theta = 0 \quad ; \quad v_r = 0$
> Kiểm tra hệ C-R:
> $u_r = \frac{1}{r} v_\theta \implies \frac{1}{r} = \frac{1}{r} (1)$ (Đúng)
> $v_r = -\frac{1}{r} u_\theta \implies 0 = 0$ (Đúng)
> Vì các đạo hàm riêng liên tục và thỏa C-R trên toàn miền, hàm số giải tích.
> Công thức đạo hàm cực: $f'(z) = e^{-i\theta}(u_r + iv_r) = e^{-i\theta}\left(\frac{1}{r} + i0\right) = \frac{1}{re^{i\theta}} = \frac{1}{z}$.

## LÝ THUYẾT NỀN TẢNG

>[!def] Hàm Logarit
> **1. Hàm Logarit đa trị $\log(z)$**
> Với số phức $z \neq 0$, hàm logarit phức được định nghĩa là hàm ngược của hàm mũ, là một hàm đa trị (có vô số giá trị):
> $$ \log(z) = \ln|z| + i\arg(z) = \ln|z| + i(\text{Arg}(z) + 2k\pi) \quad (k \in \mathbb{Z}) $$
> Trong đó, $\ln|z|$ là logarit tự nhiên của mô-đun $z$, và $\arg(z)$ là argument của $z$.
> 
> **2. Giá trị chính của Logarit $\text{Log}(z)$**
> Để biến logarit phức thành một hàm đơn trị, ta giới hạn argument trong nhánh chính (principal branch) $-\pi < \text{Arg}(z) \le \pi$. Khi đó:
> $$ \text{Log}(z) = \ln|z| + i\text{Arg}(z) $$
> 
> **3. Tính giải tích của nhánh Logarit**
> Hàm $\text{Log}(z)$ là một hàm giải tích (analytic) trên toàn bộ mặt phẳng phức, ngoại trừ gốc tọa độ $z=0$ và tia thực âm (branch cut). Tức là miền giải tích của nó là $\mathbb{C} \setminus \{z = x + iy \mid x \le 0, y = 0\}$.
> Đạo hàm của nó trong miền giải tích là: $\frac{d}{dz}\text{Log}(z) = \frac{1}{z}$.

## LỜI GIẢI CHI TIẾT TỪNG BÀI TẬP

### Dạng 1: Tính giá trị Logarit phức (Bài 1, Bài 2)

> [!prob] Bài 1
> Tìm giá trị chính $\text{Log}(z) = u + iv$ cho các số phức sau:
> (a) $\text{Log}(ie^2)$ \quad (b) $\text{Log}(\sqrt{3} - i)$ \quad (c) $\text{Log}(i\sqrt{2} - \sqrt{2})$ \quad (d) $\text{Log}[(1 + i)^4]$

> [!prf] Lời giải Bài 1
> Áp dụng công thức $\text{Log}(z) = \ln|z| + i\text{Arg}(z)$ với $-\pi < \text{Arg}(z) \le \pi$:
> 
> **(a)** $z = ie^2$. 
> Ta có $|z| = e^2$ và $\text{Arg}(z) = \frac{\pi}{2}$ (do $z$ nằm trên phần dương của trục ảo).
> $$ \text{Log}(ie^2) = \ln(e^2) + i\frac{\pi}{2} = 2 + i\frac{\pi}{2} $$
> 
> **(b)** $z = \sqrt{3} - i$.
> Ta có $|z| = \sqrt{(\sqrt{3})^2 + (-1)^2} = 2$.
> $\text{Arg}(z) = \arctan\left(\frac{-1}{\sqrt{3}}\right) = -\frac{\pi}{6}$ (điểm nằm ở góc phần tư thứ IV).
> $$ \text{Log}(\sqrt{3} - i) = \ln 2 - i\frac{\pi}{6} $$
> 
> **(c)** $z = -\sqrt{2} + i\sqrt{2}$.
> Ta có $|z| = \sqrt{(-\sqrt{2})^2 + (\sqrt{2})^2} = \sqrt{4} = 2$.
> Điểm nằm ở góc phần tư thứ II, nên $\text{Arg}(z) = \pi - \arctan\left(\frac{\sqrt{2}}{\sqrt{2}}\right) = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$.
> $$ \text{Log}(-\sqrt{2} + i\sqrt{2}) = \ln 2 + i\frac{3\pi}{4} $$
> 
> **(d)** $z = (1 + i)^4$.
> Ta chuyển $1+i$ sang dạng lượng giác: $1+i = \sqrt{2}e^{i\pi/4}$.
> Do đó, $(1+i)^4 = (\sqrt{2})^4 e^{i4\pi/4} = 4e^{i\pi} = -4$.
> Với $z = -4$, ta có $|z| = 4$ và $\text{Arg}(z) = \pi$ (nằm trên phần âm của trục thực).
> $$ \text{Log}[(1 + i)^4] = \text{Log}(-4) = \ln 4 + i\pi $$

> [!prob] Bài 2
> Tìm tất cả các giá trị của $\log(z)$ cho các số phức sau:
> (a) $\log(-3)$ \quad (b) $\log(4i)$ \quad (c) $\log 8$ \quad (d) $\log(-\sqrt{3} - i)$

> [!prf] Lời giải Bài 2
> Áp dụng công thức tổng quát $\log(z) = \ln|z| + i(\text{Arg}(z) + 2k\pi)$ với $k \in \mathbb{Z}$:
> 
> **(a)** $z = -3$. 
> $|z| = 3$, $\text{Arg}(z) = \pi$.
> $$ \log(-3) = \ln 3 + i(\pi + 2k\pi) $$
> 
> **(b)** $z = 4i$.
> $|z| = 4$, $\text{Arg}(z) = \frac{\pi}{2}$.
> $$ \log(4i) = \ln 4 + i\left(\frac{\pi}{2} + 2k\pi\right) $$
> 
> **(c)** $z = 8$.
> $|z| = 8$, $\text{Arg}(z) = 0$.
> $$ \log 8 = \ln 8 + i(0 + 2k\pi) = 3\ln 2 + i2k\pi $$
> 
> **(d)** $z = -\sqrt{3} - i$.
> $|z| = \sqrt{(-\sqrt{3})^2 + (-1)^2} = 2$.
> Điểm này nằm ở góc phần tư thứ III, nên $\text{Arg}(z) = -\pi + \arctan\left(\frac{1}{\sqrt{3}}\right) = -\pi + \frac{\pi}{6} = -\frac{5\pi}{6}$.
> $$ \log(-\sqrt{3} - i) = \ln 2 + i\left(-\frac{5\pi}{6} + 2k\pi\right) $$

### Dạng 2: Giải phương trình phức (Bài 3)

> [!prob] Bài 3
> Tìm tất cả các giá trị của $z$ thỏa mãn các phương trình sau:
> (a) $\text{Log}(z) = 1 - \frac{i\pi}{4}$ \quad (b) $\text{Log}(z - 1) = \frac{i\pi}{2}$
> (c) $\exp(z) = -ie$ \quad (d) $\exp(z + 1) = i$

> [!prf] Lời giải Bài 3
> 
> **(a)** $\text{Log}(z) = 1 - \frac{i\pi}{4}$
> Áp dụng hàm mũ hai vế:
> $$ z = \exp\left(1 - i\frac{\pi}{4}\right) = e^1 \cdot e^{-i\pi/4} = e\left(\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right) = e\left(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right) $$
> 
> **(b)** $\text{Log}(z - 1) = \frac{i\pi}{2}$
> $$ z - 1 = \exp\left(i\frac{\pi}{2}\right) = i \implies z = 1 + i $$
> 
> **(c)** $\exp(z) = -ie$
> Lấy logarit đa trị hai vế: $z = \log(-ie)$.
> Ta có $|-ie| = e$, $\text{Arg}(-ie) = -\frac{\pi}{2}$ (vì nằm trên tia ảo âm).
> $$ z = \ln(e) + i\left(-\frac{\pi}{2} + 2k\pi\right) = 1 + i\left(2k\pi - \frac{\pi}{2}\right) \quad (k \in \mathbb{Z}) $$
> 
> **(d)** $\exp(z + 1) = i$
> Lấy logarit đa trị hai vế: $z + 1 = \log(i)$.
> Ta có $|i| = 1$, $\text{Arg}(i) = \frac{\pi}{2}$.
> $$ z + 1 = \ln(1) + i\left(\frac{\pi}{2} + 2k\pi\right) = 0 + i\left(\frac{\pi}{2} + 2k\pi\right) $$
> $$ \implies z = -1 + i\left(\frac{\pi}{2} + 2k\pi\right) \quad (k \in \mathbb{Z}) $$

### Dạng 3: Chứng minh tính chất (Bài 4, 5, 6)

*(Lưu ý: Đề bài không hiển thị trực tiếp danh tính (11) và (12). Dựa vào mạch kiến thức giải tích phức chuẩn tại Section 1.4, hai hằng đẳng thức này lần lượt là $\log(z_1z_2) = \log(z_1) + \log(z_2)$ và $\log(z_1/z_2) = \log(z_1) - \log(z_2)$.)*

> [!prob] Bài 4 & 5
> Sử dụng các tính chất của $\arg(z)$ để thiết lập các hằng đẳng thức về phép nhân và phép chia của $\log(z)$.

> [!prf] Lời giải Bài 4 & 5
> Theo định nghĩa, $\log(z) = \ln|z| + i\arg(z)$.
> 
> **Thiết lập cho phép nhân:**
> Tính chất của argument (tập hợp): $\arg(z_1z_2) = \arg(z_1) + \arg(z_2)$.
> Tính chất của logarit thực: $\ln|z_1z_2| = \ln|z_1| + \ln|z_2|$.
> Khi đó:
> $$ \log(z_1z_2) = \ln|z_1z_2| + i\arg(z_1z_2) = (\ln|z_1| + \ln|z_2|) + i(\arg(z_1) + \arg(z_2)) $$
> $$ = (\ln|z_1| + i\arg(z_1)) + (\ln|z_2| + i\arg(z_2)) = \log(z_1) + \log(z_2) $$
> 
> **Thiết lập cho phép chia:**
> Tính chất của argument: $\arg\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2)$.
> Tính chất của logarit thực: $\ln\left|\frac{z_1}{z_2}\right| = \ln|z_1| - \ln|z_2|$.
> Khi đó:
> $$ \log\left(\frac{z_1}{z_2}\right) = \ln\left|\frac{z_1}{z_2}\right| + i\arg\left(\frac{z_1}{z_2}\right) = (\ln|z_1| - \ln|z_2|) + i(\arg(z_1) - \arg(z_2)) = \log(z_1) - \log(z_2) $$

> [!prob] Bài 6
> Chứng minh rằng $\log(z) = \text{Log}(z) + i2\pi n$ với $n$ là một số nguyên.

> [!prf] Lời giải Bài 6
> Khởi đi từ định nghĩa hàm logarit đa trị:
> $$ \log(z) = \ln|z| + i\arg(z) $$
> Bất kỳ một argument nào của $z$ cũng có thể được biểu diễn thông qua giá trị chính của nó (Principal argument) cộng với một bội số nguyên của $2\pi$:
> $$ \arg(z) = \text{Arg}(z) + 2n\pi \quad (n \in \mathbb{Z}) $$
> Thay biểu thức này vào định nghĩa ban đầu:
> $$ \log(z) = \ln|z| + i(\text{Arg}(z) + 2n\pi) = (\ln|z| + i\text{Arg}(z)) + i2\pi n $$
> Dựa theo định nghĩa của giá trị chính $\text{Log}(z) = \ln|z| + i\text{Arg}(z)$, ta suy ra điều phải chứng minh:
> $$ \log(z) = \text{Log}(z) + i2\pi n $$

### Dạng 4: Đạo hàm hàm ẩn (Bài 7, Bài 8)

> [!prob] Bài 7
> Đặt $w = \log(f(z))$. Sử dụng đạo hàm hàm ẩn (implicit differentiation) để tìm $\frac{dw}{dz}$ tại các điểm mà $f(z)$ giải tích và khác $0$.

> [!prf] Lời giải Bài 7
> Từ phương trình $w = \log(f(z))$, ta lũy thừa cơ số $e$ hai vế để khử logarit:
> $$ e^w = f(z) $$
> Lấy đạo hàm hai vế theo biến $z$, áp dụng quy tắc chuỗi cho vế trái:
> $$ e^w \cdot \frac{dw}{dz} = f'(z) $$
> Cô lập $\frac{dw}{dz}$:
> $$ \frac{dw}{dz} = \frac{f'(z)}{e^w} $$
> Vì $e^w = f(z)$, ta thế ngược trở lại để thu được công thức tổng quát:
> $$ \frac{dw}{dz} = \frac{f'(z)}{f(z)} $$

> [!prob] Bài 8
> Sử dụng đạo hàm hàm ẩn để tìm $\frac{dw}{dz}$ cho:
> (a) $w = \log(z^2 - z + 2)$ \quad (b) $w = z\log(z)$

> [!prf] Lời giải Bài 8
> **(a)** $w = \log(z^2 - z + 2)$
> Lũy thừa cơ số $e$ hai vế:
> $$ e^w = z^2 - z + 2 $$
> Đạo hàm hàm ẩn theo biến $z$:
> $$ e^w \cdot \frac{dw}{dz} = 2z - 1 \implies \frac{dw}{dz} = \frac{2z - 1}{e^w} = \frac{2z - 1}{z^2 - z + 2} $$
> 
> **(b)** $w = z\log(z)$
> Biến đổi đại số để tách nhánh logarit:
> $$ \frac{w}{z} = \log(z) \implies e^{w/z} = z $$
> Đạo hàm hàm ẩn hai vế theo $z$ (sử dụng quy tắc đạo hàm phân thức cho mũ):
> $$ e^{w/z} \cdot \frac{\frac{dw}{dz} \cdot z - w \cdot 1}{z^2} = 1 $$
> Vì $e^{w/z} = z$, ta thay vào phương trình:
> $$ z \cdot \frac{z\frac{dw}{dz} - w}{z^2} = 1 \implies \frac{z\frac{dw}{dz} - w}{z} = 1 $$
> $$ z\frac{dw}{dz} - w = z \implies z\frac{dw}{dz} = z + w \implies \frac{dw}{dz} = \frac{z+w}{z} = 1 + \frac{w}{z} $$
> Thay $\frac{w}{z} = \log(z)$ trở lại, ta được kết quả cuối cùng:
> $$ \frac{dw}{dz} = 1 + \log(z) $$

### Dạng 5: Miền giải tích của nhánh Logarit (Bài 9, 10, 11)

> [!prob] Bài 9
> Chứng minh rằng $f(z) = \text{Log}(iz)$ giải tích ở mọi nơi ngoại trừ các điểm trên tia được cho bởi $y \ge 0, x = 0$. Tìm $f'(z)$.

> [!prf] Lời giải Bài 9
> Hàm nhánh chính $\text{Log}(W)$ giải tích ở mọi nơi ngoại trừ trên lát cắt nhánh (branch cut), nơi mà $W$ là một số thực âm hoặc bằng $0$. Tức là tập hợp các điểm bị loại bỏ là $S = \{ W \mid \text{Re}(W) \le 0, \text{Im}(W) = 0 \}$.
> 
> Trong bài toán này, $W = iz$. Đặt $z = x + iy$, ta có:
> $$ W = i(x + iy) = -y + ix $$
> Hàm $f(z)$ không giải tích khi và chỉ khi:
> 1. $\text{Im}(W) = 0 \implies x = 0$
> 2. $\text{Re}(W) \le 0 \implies -y \le 0 \implies y \ge 0$
> 
> Vậy, điểm kì dị tạo thành một tia $x = 0$ (trên trục ảo) với $y \ge 0$. Hàm giải tích ở mọi nơi nằm ngoài tia này.
> Đạo hàm $f'(z)$ (sử dụng quy tắc chuỗi):
> $$ f'(z) = \frac{1}{iz} \cdot \frac{d}{dz}(iz) = \frac{1}{iz} \cdot i = \frac{1}{z} $$

> [!prob] Bài 10
> Chứng minh rằng $f(z) = [\text{Log}(z + 5)] / (z^2 + 3z + 2)$ giải tích ở mọi nơi ngoại trừ tại các điểm $-1, -2$ và trên tia $x \le -5, y = 0$.

> [!prf] Lời giải Bài 10
> Hàm số bị vi phạm tính giải tích bởi hai nguyên nhân:
> 
> **1. Mẫu số bằng $0$ (Kỳ dị cực điểm):**
> $$ z^2 + 3z + 2 = 0 \implies (z+1)(z+2) = 0 \implies z = -1 \text{ hoặc } z = -2 $$
> 
> **2. Lát cắt nhánh của Logarit ở tử số:**
> Biểu thức bên trong Logarit là $W = z + 5 = (x + 5) + iy$.
> Hàm $\text{Log}(W)$ không giải tích khi $W$ nằm trên tia thực âm (bao gồm $0$):
> $\text{Im}(W) = 0 \implies y = 0$.
> $\text{Re}(W) \le 0 \implies x + 5 \le 0 \implies x \le -5$.
> 
> Kết hợp cả hai điều kiện, hàm $f(z)$ giải tích ở toàn bộ mặt phẳng phức ngoại trừ hai điểm cô lập $z=-1, z=-2$ và tia nửa đường thẳng $(-\infty, -5]$ trên trục thực. Điều này hoàn toàn khớp với phát biểu của đề bài.

> [!prob] Bài 11
> Chứng minh rằng nếu $\text{Re}(z) > 0$, thì $\text{Log}(z) = \frac{1}{2}\ln(x^2 + y^2) + i\arctan(y/x)$, trong đó nhánh chính của hàm thực $\arctan t$ được sử dụng; nghĩa là, $-\pi/2 < \arctan t < \pi/2$.

> [!prf] Lời giải Bài 11
> Theo định nghĩa của giá trị chính của Logarit:
> $$ \text{Log}(z) = \ln|z| + i\text{Arg}(z) $$
> 
> Đặt $z = x + iy$. Ta có mô-đun:
> $$ |z| = \sqrt{x^2 + y^2} \implies \ln|z| = \ln\left((x^2 + y^2)^{1/2}\right) = \frac{1}{2}\ln(x^2 + y^2) $$
> 
> Ta xét $\text{Arg}(z)$ dựa trên điều kiện $\text{Re}(z) > 0 \implies x > 0$.
> Điều kiện $x > 0$ có nghĩa là số phức $z$ nằm ở nửa mặt phẳng bên phải (góc phần tư thứ I và thứ IV). Trong vùng không gian này, góc $\text{Arg}(z)$ luôn bị giới hạn ngặt nghèo trong khoảng $(-\pi/2, \pi/2)$.
> 
> Trong khoảng này, hàm tan được xác định bởi tỷ số:
> $$ \tan(\text{Arg}(z)) = \frac{y}{x} $$
> Vì $\text{Arg}(z) \in (-\pi/2, \pi/2)$, khoảng này trùng khớp hoàn toàn với miền giá trị của nhánh chính hàm $\arctan$. Do đó, ta có thể đảo ngược trực tiếp mà không cần cộng thêm hằng số chu kỳ:
> $$ \text{Arg}(z) = \arctan\left(\frac{y}{x}\right) $$
> 
> Thay thế hai thành phần đã chứng minh vào cấu trúc gốc, ta có hằng đẳng thức:
> $$ \text{Log}(z) = \frac{1}{2}\ln(x^2 + y^2) + i\arctan\left(\frac{y}{x}\right) $$
