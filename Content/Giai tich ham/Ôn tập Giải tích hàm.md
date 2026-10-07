
## Phần lý thuyết nền tảng

> [!thm] Bất đẳng thức Cauchy–Schwarz
> Cho $H$ là không gian tiền Hilbert (có tích vô hướng $\langle \cdot,\cdot\rangle$), với mọi $x, y \in H$ ta có
> $$|\langle x, y\rangle| \le \|x\| \|y\|,$$
> và đẳng thức xảy ra khi và chỉ khi $x, y$ tỉ lệ tuyến tính với nhau.

> [!prf]
> Nếu $y = 0$, bất đẳng thức hiển nhiên đúng vì hai vế bằng $0$.
>
> Giả sử $y \ne 0$. Với mọi vô hướng $\lambda \in \mathbb{K}$ ($\mathbb{R}$ hoặc $\mathbb{C}$), ta có:
> $$0 \le \|x - \lambda y\|^2 = \langle x - \lambda y, x - \lambda y \rangle = \|x\|^2 - \overline{\lambda}\langle x, y\rangle - \lambda\langle y, x\rangle + |\lambda|^2\|y\|^2.$$
> Chọn $\lambda = \dfrac{\langle x, y \rangle}{\|y\|^2}$. Khi đó:
> $$0 \le \|x\|^2 - \frac{\overline{\langle x, y \rangle}\langle x, y \rangle}{\|y\|^2} - \frac{\langle x, y \rangle \overline{\langle x, y \rangle}}{\|y\|^2} + \frac{|\langle x, y \rangle|^2}{\|y\|^4}\|y\|^2 = \|x\|^2 - \frac{|\langle x, y \rangle|^2}{\|y\|^2}.$$
> Suy ra $|\langle x, y \rangle|^2 \le \|x\|^2 \|y\|^2$. Lấy căn bậc hai hai vế ta được $|\langle x, y\rangle| \le \|x\| \|y\|$.
>
> Đẳng thức xảy ra khi và chỉ khi $\|x - \lambda y\|^2 = 0 \iff x = \lambda y$, tức $x$ và $y$ phụ thuộc tuyến tính.

> [!thm] Bổ đề Hình chiếu trên tập lồi đóng (Projection Lemma)
> Cho $H$ là không gian Hilbert và $K \subseteq H$ là một tập con lồi, đóng, khác rỗng. Khi đó với mọi $x \in H$, tồn tại duy nhất một phần tử $y \in K$ sao cho
> $$\|x - y\| = \operatorname{dist}(x, K) = \inf_{z \in K} \|x - z\|.$$
> Phần tử $y$ được đặc trưng bởi điều kiện: $\operatorname{Re}\langle x - y, z - y \rangle \le 0$ với mọi $z \in K$.

> [!prf]
> Đặt $d = \inf_{z \in K} \|x - z\|$. Chọn dãy $(y_n) \subset K$ sao cho $\|x - y_n\| \to d$.
>
> Áp dụng đẳng thức hình bình hành cho hai vectơ $x - y_n$ và $x - y_m$:
> $$\|(x - y_n) + (x - y_m)\|^2 + \|(x - y_n) - (x - y_m)\|^2 = 2\|x - y_n\|^2 + 2\|x - y_m\|^2,$$
> hay tương đương
> $$4 \left\| x - \frac{y_n + y_m}{2} \right\|^2 + \|y_n - y_m\|^2 = 2\|x - y_n\|^2 + 2\|x - y_m\|^2.$$
> Vì $K$ lồi nên $\dfrac{y_n + y_m}{2} \in K$, dẫn tới $\left\| x - \dfrac{y_n + y_m}{2} \right\| \ge d$. Từ đó:
> $$\|y_n - y_m\|^2 \le 2\|x - y_n\|^2 + 2\|x - y_m\|^2 - 4d^2 \xrightarrow{n, m \to \infty} 2d^2 + 2d^2 - 4d^2 = 0.$$
> Vậy $(y_n)$ là dãy Cauchy trong $H$. Do $H$ đầy đủ và $K$ đóng, tồn tại $y \in K$ sao cho $y_n \to y$. Tính liên tục của chuẩn cho ta $\|x - y\| = d$.
>
> Tính duy nhất: Nếu có $y, y' \in K$ cùng thỏa $\|x - y\| = \|x - y'\| = d$, áp dụng đẳng thức trên ta có $\|y - y'\|^2 \le 2d^2 + 2d^2 - 4d^2 = 0 \implies y = y'$.
>
> Điều kiện đặc trưng: Với mọi $z \in K$ và $t \in (0, 1]$, vì $K$ lồi nên $(1-t)y + tz = y + t(z - y) \in K$. Do đó:
> $$\|x - y\|^2 \le \|x - (y + t(z - y))\|^2 = \|x - y\|^2 - 2t\operatorname{Re}\langle x - y, z - y \rangle + t^2\|z - y\|^2.$$
> Triệt tiêu $\|x - y\|^2$, chia cho $t > 0$ và cho $t \to 0^+$, ta được $\operatorname{Re}\langle x - y, z - y \rangle \le 0$.

> [!thm] Bổ đề Phân tích trực giao (Orthogonal Decomposition)
> Cho $M$ là một không gian con đóng của không gian Hilbert $H$. Khi đó $H = M \oplus M^\perp$, tức là mọi $x \in H$ đều được phân tích duy nhất dưới dạng $x = y + z$ với $y \in M$ và $z \in M^\perp$. Hơn nữa, $y = P_M(x)$ chính là hình chiếu trực giao của $x$ lên $M$.

> [!prf]
> Vì $M$ là không gian con đóng nên $M$ là tập lồi đóng khác rỗng trong $H$.
>
> Theo Bổ đề Hình chiếu, với mọi $x \in H$, tồn tại duy nhất $y \in M$ sao cho $\|x - y\| = \inf_{m \in M} \|x - m\|$. Đặt $z = x - y$. Ta chứng minh $z \in M^\perp$.
>
> Với mọi $m \in M$ và $t \in \mathbb{R}$, ta có $y + tm \in M$, do đó $\|x - y\|^2 \le \|x - (y + tm)\|^2 = \|z - tm\|^2 = \|z\|^2 - 2t\operatorname{Re}\langle z, m\rangle + t^2\|m\|^2$. Điều này tương đương với $t^2\|m\|^2 - 2t\operatorname{Re}\langle z, m\rangle \ge 0$ với mọi $t \in \mathbb{R}$, suy ra $\operatorname{Re}\langle z, m\rangle = 0$. Thay $m$ bởi $im$ (trong trường phức), ta cũng được $\operatorname{Im}\langle z, m\rangle = 0$. Vậy $\langle z, m\rangle = 0$ với mọi $m \in M$, tức là $z \in M^\perp$.
>
> Về tính duy nhất: Giả sử $x = y_1 + z_1 = y_2 + z_2$ với $y_1, y_2 \in M$ và $z_1, z_2 \in M^\perp$. Khi đó $y_1 - y_2 = z_2 - z_1 \in M \cap M^\perp = \{0\}$, suy ra $y_1 = y_2$ và $z_1 = z_2$.

> [!thm] Định lý Biểu diễn Riesz (Riesz Representation Theorem)
> Cho $H$ là không gian Hilbert và $f \in H^*$. Khi đó tồn tại duy nhất một véctơ $y \in H$ sao cho
> $$f(x) = \langle x, y \rangle \quad \forall x \in H.$$
> Hơn nữa, $\|f\|_{H^*} = \|y\|_H$.

> [!prf]
> Nếu $f = 0$, ta chỉ cần chọn $y = 0$. Giả sử $f \ne 0$.
>
> Khi đó hạt nhân $M = \ker(f)$ là một không gian con đóng thực sự của $H$. Do đó $M^\perp \ne \{0\}$. Chọn một phần tử $z_0 \in M^\perp$ sao cho $\|z_0\| = 1$.
>
> Với mọi $x \in H$, xét phần tử $u = f(x)z_0 - f(z_0)x$. Ta có:
> $$f(u) = f(x)f(z_0) - f(z_0)f(x) = 0 \implies u \in \ker(f) = M.$$
> Vì $z_0 \in M^\perp$, ta có $\langle u, z_0 \rangle = 0$, nghĩa là:
> $$\langle f(x)z_0 - f(z_0)x, z_0 \rangle = 0 \iff f(x)\|z_0\|^2 - f(z_0)\langle x, z_0 \rangle = 0.$$
> Do $\|z_0\| = 1$, ta suy ra $f(x) = \langle x, \overline{f(z_0)}z_0 \rangle$. Đặt $y = \overline{f(z_0)}z_0 \in H$, ta thu được $f(x) = \langle x, y \rangle$ với mọi $x \in H$.
>
> Về tính duy nhất: Nếu tồn tại $y, y' \in H$ sao cho $\langle x, y \rangle = \langle x, y' \rangle$ với mọi $x$, thì $\langle x, y - y' \rangle = 0$ với mọi $x \in H$. Chọn $x = y - y'$, ta có $\|y - y'\|^2 = 0 \implies y = y'$.
>
> Về bảo toàn chuẩn: Theo Cauchy–Schwarz, $|f(x)| = |\langle x, y\rangle| \le \|x\|\|y\| \implies \|f\| \le \|y\|$. Mặt khác, nếu $y \ne 0$, chọn $x = y$ thì $f(y) = \langle y, y \rangle = \|y\|^2$, suy ra $\|f\| \ge \frac{|f(y)|}{\|y\|} = \|y\|$. Vậy $\|f\| = \|y\|$.

> [!thm] Định lý Hahn–Banach (Dạng giải tích, trường thực)
> Cho $X$ là không gian véctơ thực, $p: X \to \mathbb{R}$ là một phiếm hàm dưới tuyến tính (sublinear), tức thỏa mãn:
> 1. $p(x+y) \le p(x) + p(y)$ với mọi $x, y \in X$.
> 2. $p(tx) = tp(x)$ với mọi $x \in X$ và $t \ge 0$.
>
> Cho $M \subseteq X$ là không gian con và $f: M \to \mathbb{R}$ là một phiếm hàm tuyến tính thỏa mãn $f(x) \le p(x)$ với mọi $x \in M$. Khi đó tồn tại phiếm hàm tuyến tính $F: X \to \mathbb{R}$ sao cho:
> $$F|_M = f \quad \text{và} \quad F(x) \le p(x) \quad \forall x \in X.$$

> [!cor] Hệ quả 1 — Mở rộng bảo toàn chuẩn
> Cho $X$ là không gian định chuẩn, $M \subseteq X$ là không gian con tuyến tính, và $f \in M^*$. Khi đó tồn tại $F \in X^*$ sao cho $F|_M = f$ và $\|F\|_{X^*} = \|f\|_{M^*}$.

> [!prf]
> Đặt $p(x) = \|f\|_{M^*} \|x\|$ với mọi $x \in X$.
>
> Ta kiểm tra $p$ là phiếm hàm dưới tuyến tính:
> 1. $p(x + y) = \|f\|_{M^*} \|x + y\| \le \|f\|_{M^*} (\|x\| + \|y\|) = p(x) + p(y)$.
> 2. $p(tx) = \|f\|_{M^*} \|tx\| = t \|f\|_{M^*} \|x\| = tp(x)$ với mọi $t \ge 0$.
>
> Với mọi $x \in M$, theo định nghĩa chuẩn của phiếm hàm liên tục, ta có $f(x) \le |f(x)| \le \|f\|_{M^*} \|x\| = p(x)$.
>
> Áp dụng Định lý Hahn–Banach, tồn tại phiếm hàm tuyến tính $F: X \to \mathbb{R}$ thỏa $F|_M = f$ và $F(x) \le p(x) = \|f\|_{M^*} \|x\|$ với mọi $x \in X$.
> Thay $x$ bằng $-x$, ta có $-F(x) = F(-x) \le \|f\|_{M^*} \|-x\| = \|f\|_{M^*} \|x\|$, suy ra $|F(x)| \le \|f\|_{M^*} \|x\|$ với mọi $x \in X$. Do đó $F$ liên tục và $\|F\|_{X^*} \le \|f\|_{M^*}$.
> Mặt khác, vì $F$ là thác triển của $f$, ta có:
> $$\|F\|_{X^*} = \sup_{x \in X, \|x\| \le 1} |F(x)| \ge \sup_{x \in M, \|x\| \le 1} |F(x)| = \sup_{x \in M, \|x\| \le 1} |f(x)| = \|f\|_{M^*}.$$
> Vậy $\|F\|_{X^*} = \|f\|_{M^*}$.

> [!cor] Hệ quả 2 — Phiếm hàm chuẩn hóa (Norming Functional)
> Cho $X$ là không gian định chuẩn và $x_0 \in X$ với $x_0 \ne 0$. Khi đó tồn tại $f \in X^*$ sao cho:
> $$\|f\|_{X^*} = 1 \quad \text{và} \quad f(x_0) = \|x_0\|.$$

> [!prf]
> Xét không gian con 1 chiều sinh bởi $x_0$: $M = \langle x_0 \rangle = \{ t x_0 \mid t \in \mathbb{R} \}$.
>
> Định nghĩa phiếm hàm $g: M \to \mathbb{R}$ bởi $g(t x_0) = t \|x_0\|$. Rõ ràng $g$ tuyến tính và $g(x_0) = \|x_0\|$.
>
> Chuẩn của $g$ trên $M$:
> $$|g(t x_0)| = |t| \|x_0\| = \|t x_0\| \implies \|g\|_{M^*} = \sup_{t \ne 0} \frac{|g(t x_0)|}{\|t x_0\|} = 1.$$
> Áp dụng Hệ quả 1, tồn tại mở rộng $f \in X^*$ của $g$ lên toàn bộ $X$ thỏa mãn:
> $$f(x_0) = g(x_0) = \|x_0\| \quad \text{và} \quad \|f\|_{X^*} = \|g\|_{M^*} = 1.$$

> [!cor] Hệ quả 3 — Triệt tiêu trên không gian con
> Cho $M$ là không gian vectơ con của không gian định chuẩn $X$ và $x_0 \in X$ thỏa mãn $d = \operatorname{dist}(x_0, M) > 0$. Khi đó tồn tại $f \in X^*$ sao cho:
> $$\|f\|_{X^*} = 1, \quad f|_M \equiv 0, \quad \text{và} \quad f(x_0) = d.$$

> [!prf]
> Xét không gian con $M_1 = M \oplus \langle x_0 \rangle$.
>
> Định nghĩa phiếm hàm $g: M_1 \to \mathbb{R}$ bởi $g(m + t x_0) = td$. Dễ thấy $g$ tuyến tính, $g|_M = 0$ và $g(x_0) = d$.
>
> Với mọi $t \ne 0$, ta có $\|m + tx_0\| = |t| \left\| x_0 - \left(-\dfrac{m}{t}\right) \right\| \ge |t|d = |g(m + tx_0)|$. Do đó $\|g\|_{M_1^*} \le 1$.
>
> Mặt khác, theo định nghĩa của infimum, tồn tại dãy $(m_n) \subset M$ sao cho $\|x_0 - m_n\| \to d$ khi $n \to \infty$. Ta có:
> $$g(x_0 - m_n) = g(x_0) - g(m_n) = d - 0 = d.$$
> Suy ra:
> $$\|g\|_{M_1^*} \ge \lim_{n \to \infty} \frac{|g(x_0 - m_n)|}{\|x_0 - m_n\|} = \lim_{n \to \infty} \frac{d}{\|x_0 - m_n\|} = \frac{d}{d} = 1.$$
> Do đó $\|g\|_{M_1^*} = 1$. Áp dụng Hệ quả 1, mở rộng $g$ thành $f \in X^*$ thỏa mãn $\|f\|_{X^*} = 1$, $f|_M \equiv 0$, và $f(x_0) = d$.

> [!thm] Bất đẳng thức Bessel và Đẳng thức Parseval
> Cho $(e_n)_{n \in \mathbb{Z}^+}$ là một hệ trực chuẩn trong không gian Hilbert $H$. Khi đó:
> 1. Với mọi $x \in H$, ta có bất đẳng thức Bessel:
>    $$\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 \le \|x\|^2.$$
> 2. Nếu $(e_n)$ là một cơ sở trực chuẩn (hệ trực chuẩn đầy đủ), ta có đẳng thức Parseval:
>    $$\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 = \|x\|^2,$$
>    và biểu diễn chuỗi Fourier hội tụ theo chuẩn: $x = \sum_{n=1}^\infty \langle x, e_n \rangle e_n$.

> [!prf]
> Đặt $S_N = \sum_{n=1}^N \langle x, e_n \rangle e_n$ là tổng riêng phần thứ $N$. Do tính trực chuẩn $\langle e_j, e_k \rangle = \delta_{jk}$, ta có:
> $$\|S_N\|^2 = \left\langle \sum_{j=1}^N \langle x, e_j \rangle e_j, \sum_{k=1}^N \langle x, e_k \rangle e_k \right\rangle = \sum_{j=1}^N \sum_{k=1}^N \langle x, e_j \rangle \overline{\langle x, e_k \rangle} \langle e_j, e_k \rangle = \sum_{n=1}^N |\langle x, e_n \rangle|^2.$$
> Mặt khác, với mỗi $k \in \{1, \dots, N\}$:
> $$\langle x - S_N, e_k \rangle = \langle x, e_k \rangle - \left\langle \sum_{n=1}^N \langle x, e_n \rangle e_n, e_k \right\rangle = \langle x, e_k \rangle - \langle x, e_k \rangle = 0.$$
> Suy ra $x - S_N \perp S_N$. Áp dụng định lý Pythagoras:
> $$\|x\|^2 = \|(x - S_N) + S_N\|^2 = \|x - S_N\|^2 + \|S_N\|^2 = \|x - S_N\|^2 + \sum_{n=1}^N |\langle x, e_n \rangle|^2.$$
> Vì $\|x - S_N\|^2 \ge 0$, ta thu được $\sum_{n=1}^N |\langle x, e_n \rangle|^2 \le \|x\|^2$.
> Cho $N \to \infty$, vì chuỗi các số hạng không âm có tổng riêng bị chặn trên nên chuỗi hội tụ và thỏa mãn:
> $$\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 \le \|x\|^2 \quad \text{(Bessel)}.$$
>
> Khi $(e_n)$ là cơ sở trực chuẩn đầy đủ, không gian con $M = \overline{\operatorname{span}\{e_n\}}$ trùng với $H$. Vì $S_N$ là hình chiếu trực giao của $x$ lên $\operatorname{span}\{e_1, \dots, e_N\}$, theo tính trù mật ta có $\|x - S_N\| \to 0$ khi $N \to \infty$, tức là $x = \sum_{n=1}^\infty \langle x, e_n \rangle e_n$.
> Từ hệ thức Pythagoras $\|x\|^2 = \|x - S_N\|^2 + \sum_{n=1}^N |\langle x, e_n \rangle|^2$, cho $N \to \infty$ ta được:
> $$\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 = \|x\|^2 \quad \text{(Parseval)}.$$

---

## Phần bài tập tổng hợp

> [!prob] Câu 1
> Đặt $X$ là không gian các hàm liên tục trên $[0,1]$ với chuẩn sup, và cho ánh xạ $T: X \to X$ xác định bởi $(Tf)(x) = \int_0^x f(t)\, dt$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T$ tuyến tính liên tục. (c) Tìm $\|T\|$. (d) Tìm $\|T^n\|$ với mỗi $n \in \mathbb{Z}^+$.

> [!prf]
> **(a) Định nghĩa tốt.** Với $f \in X$ liên tục trên $[0,1]$ compact, $f$ bị chặn: đặt $M = \|f\|_\infty$. Với $x, y \in [0,1]$, giả sử $x > y$,
> $$|(Tf)(x) - (Tf)(y)| = \left|\int_y^x f(t)\,dt\right| \le M|x-y|.$$
> Vậy $Tf$ Lipschitz trên $[0,1]$, do đó liên tục, nghĩa là $Tf \in X$. $T$ được định nghĩa tốt.
>
> **(b) Tuyến tính liên tục.** Tính tuyến tính của $T$ suy trực tiếp từ tính tuyến tính của tích phân. Về tính liên tục (bị chặn), với mọi $f \in X$ và $x \in [0,1]$:
> $$|(Tf)(x)| = \left|\int_0^x f(t)\,dt\right| \le \int_0^x |f(t)|\,dt \le x \|f\|_\infty \le \|f\|_\infty.$$
> Lấy sup theo $x$, ta được $\|Tf\|_\infty \le \|f\|_\infty$, nên $T$ bị chặn, do đó liên tục.
>
> **(c) Tìm $\|T\|$.** Từ bất đẳng thức trên, $\|T\| \le 1$. Xét $f \equiv 1 \in X$, $\|f\|_\infty = 1$. Khi đó $(Tf)(x) = x$, nên $\|Tf\|_\infty = \sup_{x \in [0,1]} x = 1$. Vậy tỉ số $\|Tf\|/\|f\| = 1$ đạt được, suy ra $\|T\| = 1$.
>
> **(d) Tìm $\|T^n\|$.** Ta chứng minh bằng quy nạp công thức
> $$(T^n f)(x) = \int_0^x \frac{(x-t)^{n-1}}{(n-1)!} f(t)\, dt.$$
> Với $n=1$ đây chính là định nghĩa của $T$. Giả sử đúng với $n$, khi đó
> $$(T^{n+1}f)(x) = \int_0^x (T^nf)(s)\,ds = \int_0^x \int_0^s \frac{(s-t)^{n-1}}{(n-1)!}f(t)\,dt\,ds.$$
> Đổi thứ tự lấy tích phân (miền $0 \le t \le s \le x$):
> $$= \int_0^x f(t) \left(\int_t^x \frac{(s-t)^{n-1}}{(n-1)!}\,ds\right) dt = \int_0^x f(t) \frac{(x-t)^n}{n!}\,dt,$$
> đúng như công thức với $n+1$. Vậy công thức được chứng minh.
>
> Từ đó, với $\|f\|_\infty \le 1$:
> $$|(T^nf)(x)| \le \int_0^x \frac{(x-t)^{n-1}}{(n-1)!}\,dt = \frac{x^n}{n!} \le \frac{1}{n!},$$
> nên $\|T^n\| \le \dfrac{1}{n!}$.
>
> Ngược lại, lấy $f \equiv 1$: theo công thức, $(T^n f)(x) = \dfrac{x^n}{n!}$ và $\sup_x (T^n f)(x) = \dfrac{1}{n!}$ tại $x=1$. Vậy cận trên đạt được, và
> $$\|T^n\| = \frac{1}{n!}.$$

> [!prob] Câu 2
> Đặt $X$ là không gian các hàm liên tục trên $[0,1]$ với chuẩn $\|f\|_1 = \int_0^1 |f(x)|\,dx$, và cho ánh xạ $T: X \to X$ xác định bởi $(Tf)(x) = \int_0^x f(t)\, dt$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T$ tuyến tính liên tục. (c) Tìm $\|T\|$.

> [!prf]
> **(a) Định nghĩa tốt.** Lập luận tương tự Câu 1: với $f$ liên tục, $Tf$ Lipschitz nên liên tục, do đó $Tf \in X$.
>
> **(b) Tuyến tính liên tục.** Tính tuyến tính hiển nhiên. Về tính bị chặn theo chuẩn $\|\cdot\|_1$: với mọi $x \in [0,1]$,
> $$\left|\int_0^x f(t)\,dt\right| \le \int_0^x |f(t)|\,dt \le \int_0^1 |f(t)|\,dt = \|f\|_1.$$
> Do đó
> $$\|Tf\|_1 = \int_0^1 |(Tf)(x)|\,dx \le \int_0^1 \|f\|_1\,dx = \|f\|_1,$$
> nên $T$ bị chặn với $\|T\| \le 1$.
>
> **(c) Tìm $\|T\|$.** Ta chứng minh $\|T\| = 1$ nhưng cận này không đạt được.
> Với mỗi $\varepsilon \in (0,1)$, xét hàm tam giác
> $$f_\varepsilon(t) = \begin{cases} \dfrac{2(\varepsilon - t)}{\varepsilon^2}, & t \in [0, \varepsilon], \\ 0, & t \in (\varepsilon, 1], \end{cases}$$
> đây là hàm liên tục, không âm, với $\|f_\varepsilon\|_1 = \int_0^1 f_\varepsilon(t)\,dt = 1$.
> Với $x \ge \varepsilon$: $(Tf_\varepsilon)(x) = \int_0^\varepsilon f_\varepsilon(t)\,dt = 1$. Do đó
> $$\|Tf_\varepsilon\|_1 = \int_0^\varepsilon (Tf_\varepsilon)(x)\,dx + \int_\varepsilon^1 1\,dx \ge 1 - \varepsilon.$$
> Cho $\varepsilon \to 0^+$, ta được $\|Tf_\varepsilon\|_1 \to 1$, trong khi $\|f_\varepsilon\|_1 = 1$. Vậy $\|T\| = 1$.

> [!prob] Câu 3
> Đặt $X = L^2(0,1)$ với chuẩn $\|\cdot\|_2$. Cho phiếm hàm $T: X \to \mathbb{R}$ xác định bởi $T(f) = \int_0^1 xf(x)\,dx$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T \in L^2(0,1)^*$. (c) Tìm $\|T\|$.

> [!prf]
> **(a) Định nghĩa tốt.** Hàm $g(x) = x$ thuộc $L^2(0,1)$ vì $\int_0^1 x^2\,dx = 1/3 < \infty$. Theo Cauchy–Schwarz trong $L^2(0,1)$:
> $$|T(f)| = |\langle f, g\rangle| \le \|f\|_2 \|g\|_2 = \frac{1}{\sqrt3}\|f\|_2 < \infty$$
> với mọi $f \in L^2(0,1)$. Vậy $T(f)$ luôn hữu hạn, $T$ được định nghĩa tốt.
>
> **(b) $T \in L^2(0,1)^*$.** Tính tuyến tính suy từ tính chất của tích phân. Từ (a), $|T(f)| \le \dfrac{1}{\sqrt3}\|f\|_2$, nên $T$ bị chặn, liên tục, tức $T \in L^2(0,1)^*$.
>
> **(c) Tìm $\|T\|$.** Đẳng thức trong Cauchy–Schwarz xảy ra khi $f$ tỉ lệ với $g(x) = x$. Chọn $f(x) = x \in L^2(0,1)$: ta có $\|f\|_2 = 1/\sqrt3$ và $T(f) = \int_0^1 x^2\,dx = 1/3$.
> Khi đó $\dfrac{T(f)}{\|f\|_2} = \dfrac{1/3}{1/\sqrt3} = \dfrac{1}{\sqrt3}$. Cận trên đạt được, vậy $\|T\| = \dfrac{1}{\sqrt3}$.

> [!prob] Câu 4
> Đặt $X = C([0,1])$ với chuẩn sup và $M = \{f \in X \mid f(0) = 0\}$. Cho $S: M \to \mathbb{R}$ xác định bởi $f \mapsto S(f) = \int_0^1 x^2 f(x)\,dx$.
> (a) Chứng tỏ $S$ tuyến tính liên tục. (b) Tìm $\|S\|$. (c) Chứng tỏ tồn tại $T \in X^*$ sao cho $T|_M = S$ và $\|T\| = \|S\|$. (d) Tìm tất cả $T \in X^*$ sao cho $T|_M = S$ và $\|T\| = \|S\|$.

> [!prf]
> **(a) Tuyến tính liên tục.** $S$ tuyến tính. Về tính bị chặn:
> $$|S(f)| \le \int_0^1 x^2|f(x)|\,dx \le \|f\|_\infty \int_0^1 x^2\,dx = \frac13\|f\|_\infty,$$
> vậy $S$ liên tục và $\|S\| \le 1/3$.
>
> **(b) Tìm $\|S\|$.** Xét $f_n(x) = \min(nx, 1) \in M$ với $\|f_n\|_\infty = 1$. Ta có $f_n(x) \to 1$ trên $(0, 1]$. Theo định lý hội tụ bị chặn:
> $$S(f_n) = \int_0^1 x^2 f_n(x)\,dx \longrightarrow \int_0^1 x^2\,dx = \frac13.$$
> Vậy $\|S\| = \dfrac{1}{3}$.
>
> **(c) Tồn tại mở rộng.** Áp dụng Hệ quả 1 của Định lý Hahn–Banach, tồn tại $T \in X^*$ thỏa mãn $T|_M = S$ và $\|T\| = \|S\| = 1/3$.
>
> **(d) Tìm tất cả mở rộng bảo toàn chuẩn.** Ta có phân tích $X = M \oplus \langle \mathbf{1} \rangle$, với $f = (f - f(0)\mathbf{1}) + f(0)\mathbf{1}$.
> Mọi mở rộng tuyến tính $T$ của $S$ lên $X$ đều có dạng:
> $$T(f) = S(f - f(0)\mathbf{1}) + f(0)T(\mathbf{1}) = \int_0^1 x^2 f(x)\,dx + \beta f(0),$$
> với $\beta = T(\mathbf{1}) - 1/3$.
> Xét dãy $f_n(x) = t + (1-t)\min(nx, 1)$ với $t \in [-1, 1]$. Rõ ràng $\|f_n\|_\infty \le 1$, $f_n(0) = t$, và $f_n(x) \to 1$ trên $(0, 1]$. Khi đó $T(f_n) \to 1/3 + \beta t$. Lấy sup theo $t = \operatorname{sign}(\beta)$, ta được $\|T\| = 1/3 + |\beta|$.
> Để $\|T\| = \|S\| = 1/3$, điều kiện cần và đủ là $\beta = 0$.
> Vậy mở rộng bảo toàn chuẩn là **duy nhất**: $T(f) = \int_0^1 x^2 f(x)\,dx$ với mọi $f \in C([0,1])$.

> [!prob] Câu 5
> Đặt $Y = \{f \in C([0,1]) \mid f(0) = 0\}$ với chuẩn sup và cho ánh xạ $T: Y \to \mathbb{R}$ xác định bởi $f \mapsto T(f) = f(1)$.
> (a) Chứng tỏ $T$ tuyến tính liên tục. (b) Tìm $\|T\|$. (c) Dùng Hahn–Banach chứng tỏ tồn tại mở rộng bảo toàn chuẩn lên $C([0,1])$. (d) Cho ví dụ cụ thể; hỏi có duy nhất không?

> [!prf]
> **(a) Tuyến tính liên tục.** $T$ tuyến tính và $|T(f)| = |f(1)| \le \|f\|_\infty$, do đó $\|T\| \le 1$.
>
> **(b) Tìm $\|T\|$.** Lấy $f(x) = x \in Y$, có $\|f\|_\infty = 1$ và $T(f) = 1$. Suy ra $\|T\| = 1$.
>
> **(c) Mở rộng.** Theo Hệ quả 1 của Hahn–Banach, tồn tại $\tilde T \in X^*$ sao cho $\tilde T|_Y = T$ và $\|\tilde T\| = \|T\| = 1$.
>
> **(d) Ví dụ và tính duy nhất.** Phiếm hàm định giá tại $1$ trên toàn không gian: $\tilde T(f) = f(1)$ là một mở rộng bảo toàn chuẩn.
> Mọi mở rộng tuyến tính của $T$ có dạng $\tilde T_c(f) = f(1) + (c-1)f(0)$ với $c = \tilde T_c(\mathbf{1})$. Với mỗi $s, t \in [-1, 1]$, hàm liên tục nối tuyến tính từ $(0, s)$ đến $(1, t)$ có chuẩn sup bằng $\max(|s|, |t|) \le 1$. Do đó:
> $$\|\tilde T_c\| = \sup_{s, t \in [-1, 1]} |t + (c-1)s| = 1 + |c-1|.$$
> Để $\|\tilde T_c\| = 1$ thì bắt buộc $c = 1$. Vậy $\tilde T(f) = f(1)$ là mở rộng bảo toàn chuẩn **duy nhất**.

> [!prob] Câu 6
> Cho $E, F$ là các không gian định chuẩn và $T \in L(E,F)$. Chứng tỏ
> $$\|T\| = \sup\{\|f \circ T\| \mid f \in F^*, \|f\| = 1\}.$$

> [!prf]
> Đặt $M = \sup\{\|f \circ T\| : f \in F^*, \|f\|=1\}$.
>
> Với mọi $f \in F^*, \|f\| = 1$:
> $$\|f \circ T\| = \sup_{\|x\| \le 1} |f(Tx)| \le \sup_{\|x\| \le 1} \|f\| \|Tx\| = \sup_{\|x\| \le 1} \|Tx\| = \|T\|.$$
> Lấy sup theo $f$ có $\|f\|=1$, ta được $M \le \|T\|$.
>
> Ngược lại, cố định $x \in E$ với $\|x\| \le 1$. Nếu $Tx = 0$ thì $\|Tx\| = 0 \le M$. Nếu $Tx \ne 0$, theo Hệ quả 2 (phiếm hàm chuẩn hóa), tồn tại $f \in F^*, \|f\| = 1$ sao cho $f(Tx) = \|Tx\|$. Khi đó:
> $$\|Tx\| = f(Tx) = (f \circ T)(x) \le \|f \circ T\| \|x\| \le \|f \circ T\| \le M.$$
> Lấy sup theo mọi $\|x\| \le 1$, ta được $\|T\| \le M$. Kết hợp hai chiều suy ra $\|T\| = M$.

> [!prob] Câu 7
> Cho $E$ là không gian định chuẩn. Chứng tỏ
> $$\bigcap_{f \in E^*} \ker(f) = \{0\}.$$

> [!prf]
> Vì mọi $f \in E^*$ tuyến tính nên $f(0) = 0$, suy ra $0 \in \ker(f)$ với mọi $f$, tức $\{0\} \subseteq \bigcap_{f \in E^*} \ker(f)$.
>
> Ngược lại, giả sử tồn tại $x \ne 0$. Theo Hệ quả 2 của Hahn–Banach, tồn tại $f \in E^*$ sao cho $\|f\| = 1$ và $f(x) = \|x\| > 0$. Điều này dẫn tới $f(x) \ne 0$, tức là $x \notin \ker(f)$, kéo theo $x \notin \bigcap_{f \in E^*} \ker(f)$.
>
> Vậy giao của các hạt nhân chỉ chứa duy nhất phần tử $0$.

> [!prob] Câu 8
> Cho $X$ là không gian định chuẩn trên $\mathbb{R}$ và $M \subsetneq X$ là không gian con đóng. Cho $a \in X\setminus M$ cố định, $d = \inf\{\|a-m\| : m \in M\}$.
> (a) Chứng tỏ $d > 0$. (b) Cho $T: M + \langle a\rangle \to \mathbb{R}$ bởi $T(m+ta) = td$; chứng tỏ $T$ tuyến tính liên tục. (c) Chứng tỏ tồn tại $f \in X^*$ sao cho $f(a)=1$, $f|_M = 0$, $\|f\| \le 1/d$.

> [!prf]
> **(a) Chứng tỏ $d > 0$.**
> Giả sử ngược lại $d = 0$. Theo định nghĩa của infimum, tồn tại dãy $(m_n) \subset M$ sao cho $\|a - m_n\| \to 0$, tức là $m_n \to a$ khi $n \to \infty$.
> Do $M$ là tập đóng, giới hạn này phải thuộc $M$, nghĩa là $a \in M$. Điều này mâu thuẫn với giả thiết $a \in X \setminus M$.
> Vậy $d > 0$.
>
> **(b) Chứng tỏ $T$ tuyến tính liên tục.**
> Phân tích tổng trực tiếp: Nếu $m + ta = 0$ với $t \ne 0$ thì $a = -\frac{m}{t} \in M$, mâu thuẫn. Do đó $M \cap \langle a \rangle = \{0\}$, biểu diễn $m + ta$ là duy nhất và $T$ định nghĩa tốt, tuyến tính.
> Với mọi $m \in M$ và $t \ne 0$:
> $$\|m + ta\| = |t| \left\| a - \left(-\frac{m}{t}\right) \right\| \ge |t| d = |T(m+ta)| \quad \left(\text{vì } -\frac{m}{t} \in M\right) \text{}.$$
> Bất đẳng thức $|T(m+ta)| \le \|m+ta\|$ cũng hiển nhiên đúng khi $t=0$. Vậy $T$ bị chặn với $\|T\| \le 1$, suy ra $T$ liên tục.
>
> **(c) Chứng tỏ tồn tại $f \in X^*$.**
> Vì $M$ là không gian con của $X$ và $d = \operatorname{dist}(a, M) > 0$ theo câu (a), áp dụng trực tiếp **Hệ quả 3**, tồn tại phiếm hàm tuyến tính liên tục $g \in X^*$ thỏa mãn:
> $$\|g\| = 1, \quad g|_M \equiv 0, \quad \text{và} \quad g(a) = d \text{}.$$
> Đặt $f = \dfrac{1}{d} g \in X^*$. Khi đó:
> 1. $f(a) = \dfrac{1}{d} g(a) = \dfrac{1}{d} \cdot d = 1$.
> 2. Với mọi $m \in M$: $f(m) = \dfrac{1}{d} g(m) = 0$, tức là $f|_M \equiv 0$.
> 3. Chuẩn của $f$: $\|f\| = \left\| \dfrac{1}{d} g \right\| = \dfrac{1}{d} \|g\| = \dfrac{1}{d} \le \dfrac{1}{d}$.
> 
> Vậy phiếm hàm $f \in X^*$ thỏa mãn toàn bộ các yêu cầu của bài toán.

> [!prob] Câu 9
> Với $u, v \in \mathbb{C}^n$ cố định, đặt ánh xạ $T: \mathbb{C}^n \to \mathbb{C}^n$ xác định bởi $Tx = \langle x, v\rangle u$. Chứng tỏ $T$ tuyến tính liên tục và tìm $\|T\|$.

> [!prf]
> $T$ hiển nhiên tuyến tính do tính tuyến tính của tích vô hướng.
> Theo bất đẳng thức Cauchy–Schwarz:
> $$\|Tx\| = |\langle x, v\rangle| \|u\| \le \|x\| \|v\| \|u\| \implies \|T\| \le \|u\| \|v\|.$$
> Đẳng thức đạt được khi chọn $x = v$: $Tv = \langle v, v\rangle u = \|v\|^2 u$, do đó $\|Tv\| = \|v\|^2 \|u\| = (\|u\|\|v\|) \|v\|$.
> Vậy $\|T\| = \|u\| \|v\|$.

> [!prob] Câu 10
> Cho $H$ là không gian Hilbert với cơ sở trực chuẩn $(e_n)_{n\in\mathbb{Z}^+}$ và cho dãy số $(a_n)_{n\in\mathbb{Z}^+} \subset \ell^2$. Chứng tỏ tồn tại duy nhất $x \in H$ sao cho $\langle x, e_n\rangle = a_n$ với mọi $n \in \mathbb{Z}^+$.

> [!prf]
> **Tồn tại:** Đặt $s_N = \sum_{n=1}^N a_n e_n$. Với $M > N$:
> $$\|s_M - s_N\|^2 = \left\| \sum_{n=N+1}^M a_n e_n \right\|^2 = \sum_{n=N+1}^M |a_n|^2.$$
> Vì $(a_n) \in \ell^2$, tổng $\sum |a_n|^2 < \infty$ nên $\|s_M - s_N\| \to 0$ khi $M, N \to \infty$. Dãy $(s_N)$ là dãy Cauchy trong không gian Hilbert $H$, nên tồn tại giới hạn $x = \lim_{N \to \infty} s_N = \sum_{n=1}^\infty a_n e_n \in H$.
> Do tích vô hướng liên tục: $\langle x, e_k \rangle = \lim_{N \to \infty} \langle s_N, e_k \rangle = a_k$ với mọi $k$.
>
> **Duy nhất:** Nếu tồn tại $x'$ cũng thỏa mãn, thì $\langle x - x', e_n \rangle = 0$ với mọi $n$. Do $(e_n)$ là cơ sở trực chuẩn (đầy đủ), suy ra $x - x' = 0 \implies x = x'$.

> [!prob] Câu 11
> Cho $H$ là không gian Hilbert với cơ sở trực chuẩn $(e_n)_{n\in\mathbb{Z}^+}$. Cho ánh xạ $T: H \to \ell^2$ xác định bởi $x \mapsto Tx = (\langle x, e_n\rangle)_{n\in\mathbb{Z}^+}$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T$ là song ánh tuyến tính bảo toàn chuẩn (đẳng cự).

> [!prf]
> **(a) Định nghĩa tốt.** Bất đẳng thức Bessel khẳng định $\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 \le \|x\|^2 < \infty$. Do đó $Tx \in \ell^2$.
>
> **(b) Song ánh, tuyến tính, đẳng cự.** Tuyến tính suy từ tính tuyến tính của tích vô hướng.
> Theo đẳng thức Parseval: $\|Tx\|_{\ell^2}^2 = \sum_{n=1}^\infty |\langle x, e_n \rangle|^2 = \|x\|_H^2$, nên $T$ đẳng cự (bảo toàn chuẩn).
> Đẳng cự kéo theo $T$ đơn ánh. Toàn ánh suy trực tiếp từ kết quả Câu 10. Vậy $T$ là một đẳng cự tuyến tính toàn ánh.

> [!prob] Câu 12
> Cho $(e_n)_{n\in\mathbb{Z}^+}$ là cơ sở trực chuẩn trong $\ell^2$ và đặt $x = \sum_{n=1}^\infty a_n e_n$ với $a_n = \dfrac{1}{\sqrt n \, \ln(n+1)}$.
> (a) Chứng tỏ $x \in \ell^2$. (b) Hỏi $x$ có thuộc $\ell^1$ không?

> [!prf]
> **(a) $x \in \ell^2$.** Xét chuỗi $\sum_{n=1}^\infty a_n^2 = \sum_{n=1}^\infty \dfrac{1}{n \ln^2(n+1)}$. Áp dụng tiêu chuẩn tích phân Cauchy:
> $$\int_2^\infty \frac{dt}{t \ln^2 t} = \left. -\frac{1}{\ln t} \right|_2^\infty = \frac{1}{\ln 2} < \infty.$$
> Do đó chuỗi hội tụ, tức $(a_n) \in \ell^2$, suy ra $x \in \ell^2$.
>
> **(b) $x$ không thuộc $\ell^1$.** Ta có $\lim_{n \to \infty} \dfrac{\ln(n+1)}{n^{1/4}} = 0$, nên với $n$ đủ lớn, $\ln(n+1) \le n^{1/4}$.
> Khi đó $a_n \ge \dfrac{1}{\sqrt{n} \cdot n^{1/4}} = \dfrac{1}{n^{3/4}}$.
> Vì chuỗi $\sum \dfrac{1}{n^{3/4}}$ phân kỳ ($p = 3/4 < 1$), theo tiêu chuẩn so sánh, chuỗi $\sum |a_n|$ phân kỳ. Vậy $x \notin \ell^1$.

> [!prob] Câu 13
> Trong không gian $\ell^{2}$, cho ánh xạ $T: \ell^{2} \rightarrow \ell^{2}$ xác định bởi $Tx = \left(\dfrac{2n}{2n+1}x_{n}\right)_{n \in \mathbb{Z}^+}$ với $x = (x_n) \in \ell^2$.
> (a) Chứng tỏ $T$ định nghĩa tốt. (b) Chứng tỏ $T$ tuyến tính liên tục. (c) Với $e_k = (0, \dots, 1, \dots)$, tính $\|Te_k\|_2$ và $\|T\|$. (d) Có tồn tại $a \in \ell^2 \setminus \{0\}$ để $\|Ta\| = \|T\| \|a\|$ không?

> [!prf]
> **(a) Định nghĩa tốt.** Vì $0 < \dfrac{2n}{2n+1} < 1$, ta có $\sum_{n=1}^\infty \left(\dfrac{2n}{2n+1}\right)^2 x_n^2 \le \sum_{n=1}^\infty x_n^2 = \|x\|_2^2 < \infty$. Vậy $Tx \in \ell^2$.
>
> **(b) Tuyến tính liên tục.** Tuyến tính hiển nhiên. Đánh giá ở câu (a) cho $\|Tx\|_2 \le \|x\|_2$, suy ra $T$ bị chặn với $\|T\| \le 1$.
>
> **(c) Chuẩn.** Ta có $Te_k = \dfrac{2k}{2k+1}e_k$, nên $\|Te_k\|_2 = \dfrac{2k}{2k+1}$.
> Do đó $\|T\| \ge \sup_k \|Te_k\|_2 = \sup_k \dfrac{2k}{2k+1} = 1$. Kết hợp $\|T\| \le 1$ suy ra $\|T\| = 1$.
>
> **(d) Tính đạt được chuẩn.** Giả sử tồn tại $a \ne 0$ sao cho $\|Ta\|_2^2 = \|a\|_2^2$. Khi đó:
> $$\sum_{n=1}^\infty \left[ 1 - \left(\frac{2n}{2n+1}\right)^2 \right] a_n^2 = 0.$$
> Vì $1 - \left(\dfrac{2n}{2n+1}\right)^2 > 0$ với mọi $n$, đẳng thức chỉ xảy ra khi $a_n = 0$ với mọi $n$, tức $a = 0$ (mâu thuẫn). Vậy không tồn tại vectơ $a \ne 0$ thỏa mãn.

> [!prob] Câu 14
> Trong không gian $\ell^{1}$, cho $T: \ell^{1} \rightarrow \ell^{1}$ xác định bởi $Tx = \left(\sum_{k=0}^{\infty} \dfrac{a^{k}}{k!} x_{n+k}\right)_{n}$ với hằng số $a > 0$ cố định.
> (a) Chứng tỏ $T$ định nghĩa tốt. (b) Chứng tỏ $T$ tuyến tính liên tục. (c) Với $y_N = (1, \dots, 1, 0, \dots)$ ($N$ số 1), tính $\|y_N\|_1$ và $\|Ty_N\|_1$. (d) Dùng $\lim_{N \to \infty} \sum_{k=0}^{N-1} \left(1 - \frac{k}{N}\right) \frac{a^k}{k!} = e^a$, tính $\|T\|$.

> [!prf]
> **(a) Định nghĩa tốt.**
> $$\|Tx\|_1 = \sum_{n=1}^\infty \left| \sum_{k=0}^\infty \frac{a^k}{k!} x_{n+k} \right| \le \sum_{n=1}^\infty \sum_{k=0}^\infty \frac{a^k}{k!} |x_{n+k}|.$$
> Đổi biến $m = n+k \ge 1$: Với mỗi $m \ge 1$, $k$ chạy từ $0$ đến $m-1$. Hoán vị tổng:
> $$\|Tx\|_1 \le \sum_{m=1}^\infty |x_m| \left( \sum_{k=0}^{m-1} \frac{a^k}{k!} \right) \le \sum_{m=1}^\infty |x_m| e^a = e^a \|x\|_1 < \infty.$$
> Vậy $Tx \in \ell^1$.
>
> **(b) Tuyến tính liên tục.** Từ (a), $\|Tx\|_1 \le e^a \|x\|_1$, do đó $T$ bị chặn và $\|T\| \le e^a$.
>
> **(c) Tính toán.** Ta có $\|y_N\|_1 = N$.
> Với $n+k \le N \iff k \le N-n$, $(y_N)_{n+k} = 1$; ngược lại bằng $0$. Do đó $(Ty_N)_n = \sum_{k=0}^{N-n} \dfrac{a^k}{k!}$ khi $n \le N$ và bằng $0$ khi $n > N$.
> Tổng chuẩn:
> $$\|Ty_N\|_1 = \sum_{n=1}^N \sum_{k=0}^{N-n} \frac{a^k}{k!} = \sum_{k=0}^{N-1} \sum_{n=1}^{N-k} \frac{a^k}{k!} = \sum_{k=0}^{N-1} (N-k)\frac{a^k}{k!} = N \sum_{k=0}^{N-1} \left(1 - \frac{k}{N}\right)\frac{a^k}{k!}.$$
>
> **(d) Tính $\|T\|$.** Ta có $\|T\| \ge \dfrac{\|Ty_N\|_1}{\|y_N\|_1} = \sum_{k=0}^{N-1} \left(1 - \dfrac{k}{N}\right)\dfrac{a^k}{k!}$.
> Cho $N \to \infty$, vế phải tiến tới $e^a$. Kết hợp với $\|T\| \le e^a$, ta kết luận $\|T\| = e^a$.

> [!prob] Câu 15
> (a) Trong $\mathbb{R}^7$, xét $M = \{(0, x_2, 0, x_4, 0, x_6, 0)\}$. Chứng minh $M$ đóng và tìm $M^\perp$.
> (b) Trong $L^2([-\pi, \pi])$, chứng minh $F = \{1, \sin(nt), \cos(nt) \mid 1 \le n \le N\}$ trực giao và chuẩn hóa $F$.
> (c) Tìm hình chiếu của $f(t) = t+1$ lên $Y = \operatorname{span}(F)$ với $N=1$ và khoảng cách từ $f$ đến $Y$.

> [!prf]
> **(a)** $M = \bigcap_{i \in \{1, 3, 5, 7\}} \ker(\pi_i)$ với $\pi_i(x) = x_i$ là các phép chiếu tọa độ liên tục, nên $M$ là tập đóng. Bù trực giao chuẩn tắc: $M^\perp = \{(x_1, 0, x_3, 0, x_5, 0, x_7) \mid x_i \in \mathbb{R}\}$.
>
> **(b)** Tích phân các hàm lượng giác trên $[-\pi, \pi]$:
> $\int_{-\pi}^\pi 1 \cdot \cos(nt)\,dt = \int_{-\pi}^\pi 1 \cdot \sin(nt)\,dt = \int_{-\pi}^\pi \cos(nt)\sin(mt)\,dt = 0$.
> $\int_{-\pi}^\pi \cos(nt)\cos(mt)\,dt = \int_{-\pi}^\pi \sin(nt)\sin(mt)\,dt = \pi \delta_{nm}$.
> Chuẩn hóa: $\|1\|^2 = 2\pi$, $\|\cos(nt)\|^2 = \|\sin(nt)\|^2 = \pi$.
> Hệ trực chuẩn: $\left\{ \dfrac{1}{\sqrt{2\pi}}, \dfrac{\cos(nt)}{\sqrt\pi}, \dfrac{\sin(nt)}{\sqrt\pi} \right\}_{n=1}^N$.
>
> **(c)** Với $N=1$, hệ cơ sở trực chuẩn của $Y$ là $\{e_0 = \frac{1}{\sqrt{2\pi}}, e_1 = \frac{\cos t}{\sqrt\pi}, e_2 = \frac{\sin t}{\sqrt\pi}\}$.
> Tính các hệ số hình chiếu của $f(t) = t+1$:
> $\langle f, e_0 \rangle = \frac{1}{\sqrt{2\pi}} \int_{-\pi}^\pi (t+1)\,dt = \sqrt{2\pi}$.
> $\langle f, e_1 \rangle = \frac{1}{\sqrt\pi} \int_{-\pi}^\pi (t+1)\cos t\,dt = 0$ (do đối xứng).
> $\langle f, e_2 \rangle = \frac{1}{\sqrt\pi} \int_{-\pi}^\pi (t+1)\sin t\,dt = \frac{1}{\sqrt\pi} \int_{-\pi}^\pi t\sin t\,dt = 2\sqrt\pi$.
> Hình chiếu: $P_Y(f) = \sqrt{2\pi} e_0 + 2\sqrt\pi e_2 = 1 + 2\sin t$.
> Khoảng cách: $\|f\|^2 = \int_{-\pi}^\pi (t+1)^2\,dt = \dfrac{2\pi^3}{3} + 2\pi$.
> $\|P_Y(f)\|^2 = |\langle f, e_0 \rangle|^2 + |\langle f, e_2 \rangle|^2 = 2\pi + 4\pi = 6\pi$.
> Khoảng cách $d = \sqrt{\|f\|^2 - \|P_Y(f)\|^2} = \sqrt{\dfrac{2\pi^3}{3} - 4\pi}$.

> [!prob] Câu 16
> Cho $H = L^2([-2,2])$ với tích vô hướng $\langle u, v \rangle = \int_{-2}^2 u(x)v(x)\,dx$. Xét $E = \{1, x, x^2\}$.
> (a) Chứng tỏ $E$ độc lập tuyến tính. (b) Trực chuẩn hóa Gram–Schmidt $E$. (c) Tính $\min_{a,b,c \in \mathbb{R}} \int_{-2}^2 |x^3 - a - bx - cx^2|^2\,dx$.

> [!prf]
> **(a)** Nếu $c_0 + c_1 x + c_2 x^2 = 0$ hầu khắp nơi trên $[-2,2]$, do tính liên tục, đa thức bậc 2 này triệt tiêu trên toàn $[-2,2]$, suy ra $c_0 = c_1 = c_2 = 0$.
>
> **(b) Trực chuẩn hóa:**
> $v_1 = 1 \implies \|v_1\|^2 = \int_{-2}^2 1\,dx = 4 \implies e_1 = \dfrac{1}{2}$.
> $v_2 = x - \langle x, e_1 \rangle e_1 = x - 0 = x \implies \|v_2\|^2 = \int_{-2}^2 x^2\,dx = \dfrac{16}{3} \implies e_2 = \dfrac{\sqrt3}{4}x$.
> $v_3 = x^2 - \langle x^2, e_1 \rangle e_1 - \langle x^2, e_2 \rangle e_2$. Ta có $\langle x^2, e_1 \rangle = \int_{-2}^2 \frac{x^2}{2}\,dx = \frac{8}{3}$, và $\langle x^2, e_2 \rangle = 0$ (hàm lẻ).
> Do đó $v_3 = x^2 - \dfrac{4}{3}$. Chuẩn: $\|v_3\|^2 = \int_{-2}^2 (x^2 - 4/3)^2\,dx = \dfrac{256}{45} \implies e_3 = \dfrac{3\sqrt5}{16}\left(x^2 - \dfrac{4}{3}\right)$.
>
> **(c) Cực tiểu:** Giá trị cực tiểu chính là $\|x^3 - P_{\operatorname{span}(E)}(x^3)\|^2 = \|x^3\|^2 - \sum_{i=1}^3 |\langle x^3, e_i \rangle|^2$.
> Ta có $\|x^3\|^2 = \int_{-2}^2 x^6\,dx = \dfrac{256}{7}$.
> Do tính chẵn lẻ: $\langle x^3, e_1 \rangle = \langle x^3, e_3 \rangle = 0$.
> $\langle x^3, e_2 \rangle = \int_{-2}^2 x^3 \left(\dfrac{\sqrt3}{4}x\right) dx = \dfrac{\sqrt3}{4} \cdot \dfrac{64}{5} = \dfrac{16\sqrt3}{5}$.
> Vậy giá trị cực tiểu là: $\dfrac{256}{7} - \left(\dfrac{16\sqrt3}{5}\right)^2 = \dfrac{256}{7} - \dfrac{768}{25} = \dfrac{1024}{175}$.

> [!prob] Câu 17
> Cho $\{e_n\}_{n \ge 1}$ là một dãy trực chuẩn trong không gian Hilbert vô hạn chiều $H$.
> (a) Viết bất đẳng thức Bessel. (b) Dãy cực đại thì bất đẳng thức thay đổi ra sao? (c) Nêu ít nhất 2 cách chứng minh họ trực chuẩn cực đại.

> [!prf]
> **(a)** Bất đẳng thức Bessel: $\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 \le \|x\|^2$ với mọi $x \in H$.
>
> **(b)** Nếu $\{e_n\}$ cực đại (cơ sở trực chuẩn đầy đủ), bất đẳng thức trở thành **Đẳng thức Parseval**:
> $$\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 = \|x\|^2 \quad \forall x \in H.$$
>
> **(c) Hai cách chứng minh:**
> 4. *Tính đầy đủ trực giao:* Chứng minh điều kiện nếu $x \in H$ thỏa $\langle x, e_n \rangle = 0$ với mọi $n \ge 1$ thì bắt buộc $x = 0$ (tức $(\operatorname{span}\{e_n\})^\perp = \{0\}$).
> 5. *Tính trù mật:* Chứng minh bao đóng của không gian con sinh bởi họ trực chuẩn phủ kín toàn bộ không gian, tức $\overline{\operatorname{span}\{e_n\}} = H$.

> [!prob] Câu 18
> (a) Chứng tỏ $\|x\| = \sup\{|Tx| \mid T \in X^*, \|T\|=1\}$.
> (b) Chứng minh nếu $x \ne y$ thì tồn tại $f \in X^*$ sao cho $f(x) \ne f(y)$.
> (c) Cho $A = \{x \in \ell^1 \mid 2x_1 - x_2 = 0\}$, $f: A \to \mathbb{R}$ với $f(x) = \frac{3}{4}x_1$. Chứng tỏ $g(x) = \frac{1}{4}(x_1 + x_2)$ là mở rộng Hahn–Banach duy nhất của $f$ lên $\ell^1$.
> (d) Cho $M$ là không gian con đóng của không gian Hilbert $H$ và $f \in M^*$. Chứng minh mọi mở rộng Hahn–Banach của $f$ lên $H$ là duy nhất.

> [!prf]
> **(a)** Với mọi $T \in X^*, \|T\| = 1$, ta có $|Tx| \le \|T\| \|x\| = \|x\|$, suy ra $\sup \le \|x\|$.
> Ngược lại, nếu $x \ne 0$, theo Hệ quả 2 của Hahn–Banach, tồn tại $T_0 \in X^*$ với $\|T_0\| = 1$ và $T_0(x) = \|x\|$. Nếu $x = 0$ thì hai vế đều bằng $0$. Vậy đẳng thức luôn đúng.
>
> **(b)** Đặt $z = x - y \ne 0$. Theo (a), tồn tại $f \in X^*$ sao cho $f(z) = \|z\| > 0$. Do tính tuyến tính, $f(x) - f(y) = f(x - y) = f(z) \ne 0 \implies f(x) \ne f(y)$.
>
> **(c)** Với $x \in A$, $x_2 = 2x_1$, chuẩn $\|x\|_1 = |x_1| + |2x_1| + \sum_{n \ge 3}|x_n| \ge 3|x_1|$.
> Do đó $|f(x)| = \frac{3}{4}|x_1| \le \frac{1}{4}\|x\|_1$. Dấu bằng đạt được tại $x = (1, 2, 0, \dots) \in A$. Vậy $\|f\|_{A^*} = 1/4$.
> Mọi phiếm hàm tuyến tính liên tục $h$ trên $\ell^1$ có dạng $h(x) = \sum_{n=1}^\infty c_n x_n$ với $\|h\| = \sup_n |c_n|$.
> Để $h$ là mở rộng Hahn–Banach của $f$, ta cần:
> 6. $\|h\| = 1/4 \implies |c_n| \le 1/4$ với mọi $n \ge 1$.
> 7. $h(e_n) = f(e_n) = 0$ với mọi $n \ge 3$ (vì $e_n \in A$ khi $n \ge 3$), suy ra $c_n = 0$ với mọi $n \ge 3$.
> 8. Với phần tử $(1, 2, 0, \dots) \in A$: $h(1,2,0,\dots) = c_1 + 2c_2 = f(1,2,0,\dots) = 3/4$.
> Vì $|c_1| \le 1/4$ và $|c_2| \le 1/4$, ta có $c_1 + 2c_2 \le 1/4 + 2(1/4) = 3/4$. Dấu bằng chỉ xảy ra khi $c_1 = 1/4$ và $c_2 = 1/4$.
> Vậy $h(x) = \frac{1}{4}x_1 + \frac{1}{4}x_2 \equiv g(x)$ là mở rộng Hahn–Banach duy nhất.
>
> **(d)** Theo Định lý Biểu diễn Riesz trên không gian Hilbert $M$, tồn tại duy nhất $y \in M$ sao cho $f(x) = \langle x, y \rangle$ với mọi $x \in M$, và $\|f\|_{M^*} = \|y\|$.
> Giả sử $F \in H^*$ là một mở rộng Hahn–Banach của $f$. Theo Định lý Riesz trên $H$, tồn tại duy nhất $z \in H$ sao cho $F(x) = \langle x, z \rangle$ với mọi $x \in H$, và $\|F\|_{H^*} = \|z\|$.
> Vì $F$ mở rộng $f$, ta có $\langle x, z \rangle = \langle x, y \rangle$ với mọi $x \in M$, suy ra $\langle x, z - y \rangle = 0$ với mọi $x \in M$, tức $z - y \in M^\perp$.
> Vì $y \in M$ và $z - y \in M^\perp$, áp dụng định lý Pythagoras:
> $$\|z\|^2 = \|y + (z - y)\|^2 = \|y\|^2 + \|z - y\|^2.$$
> Vì $F$ bảo toàn chuẩn nên $\|z\| = \|F\|_{H^*} = \|f\|_{M^*} = \|y\|$. Do đó $\|z - y\|^2 = 0 \implies z = y$.
> Vậy $F(x) = \langle x, y \rangle$ là duy nhất.

> [!prob] Câu 19
> Cho $(e_n)_{n \ge 1}$ là một hệ trực chuẩn trong không gian Hilbert $H$.
> (a) Chứng tỏ chuỗi $\sum_{n=1}^\infty \alpha_n e_n$ hội tụ $\iff \sum_{n=1}^\infty |\alpha_n|^2 < \infty$.
> (b) Nếu chuỗi hội tụ về $x$, chứng minh $\alpha_n = \langle x, e_n \rangle$.
> (c) Với mọi $x \in H$, chứng tỏ chuỗi $\sum_{n=1}^\infty \langle x, e_n \rangle e_n$ luôn hội tụ.
> (d) Với mọi $x \in H$, chứng tỏ $\lim_{n \to \infty} \langle x, e_n \rangle = 0$.

> [!prf]
> **(a)** Xét dãy tổng riêng $s_N = \sum_{n=1}^N \alpha_n e_n$. Với $M > N$:
> $$\|s_M - s_N\|^2 = \left\| \sum_{n=N+1}^M \alpha_n e_n \right\|^2 = \sum_{n=N+1}^M |\alpha_n|^2.$$
> Do $H$ là không gian Hilbert (đầy đủ), dãy $(s_N)$ hội tụ trong $H$ khi và chỉ khi $(s_N)$ là dãy Cauchy trong $H$. Đẳng thức trên chứng minh $(s_N)$ là dãy Cauchy trong $H$ khi và chỉ khi dãy tổng riêng của chuỗi số $\sum |\alpha_n|^2$ là dãy Cauchy trong $\mathbb{R}$, tức là khi chuỗi số $\sum_{n=1}^\infty |\alpha_n|^2$ hội tụ.
>
> **(b)** Giả sử $s_N \to x$ trong $H$. Do tích vô hướng liên tục theo biến thứ nhất:
> $$\langle x, e_k \rangle = \left\langle \lim_{N \to \infty} \sum_{n=1}^N \alpha_n e_n, e_k \right\rangle = \lim_{N \to \infty} \sum_{n=1}^N \alpha_n \langle e_n, e_k \rangle = \alpha_k.$$
> Vậy $\alpha_n = \langle x, e_n \rangle$ với mọi $n \ge 1$, suy ra $x = \sum_{n=1}^\infty \langle x, e_n \rangle e_n$.
>
> **(c)** Theo bất đẳng thức Bessel, $\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 \le \|x\|^2 < \infty$.
> Đặt $\alpha_n = \langle x, e_n \rangle$, ta có chuỗi số $\sum |\alpha_n|^2$ hội tụ. Theo kết quả câu (a), chuỗi véctơ $\sum_{n=1}^\infty \langle x, e_n \rangle e_n$ hội tụ trong $H$.
>
> **(d)** Do chuỗi số không âm $\sum_{n=1}^\infty |\langle x, e_n \rangle|^2$ hội tụ (theo Bessel), số hạng tổng quát của nó phải tiến về $0$ khi $n \to \infty$:
> $$\lim_{n \to \infty} |\langle x, e_n \rangle|^2 = 0 \implies \lim_{n \to \infty} \langle x, e_n \rangle = 0.$$