
# I. Cấu trúc Tô-pô và Tính tương đương chuẩn

> [!lem] Tính tương đương của các chuẩn trên không gian hữu hạn chiều
> Cho $E$ là một không gian véctơ hữu hạn chiều trên $\mathbb{K}$ ($\mathbb{R}$ hoặc $\mathbb{C}$). Mọi chuẩn trên $E$ đều tương đương tô-pô với nhau: với hai chuẩn bất kỳ $\|\cdot\|_a$ và $\|\cdot\|_b$, luôn tồn tại hai hằng số thực $c_1, c_2 > 0$ sao cho:
> $$c_1 \|x\|_a \le \|x\|_b \le c_2 \|x\|_a \quad \forall x \in E.$$
> Hệ quả then chốt: Mọi không gian con hữu hạn chiều trong một không gian định chuẩn bất kỳ luôn là không gian Banach (đầy đủ) và do đó luôn là tập con đóng.

> [!prf]
> Cố định một cơ sở $\{e_1, \dots, e_n\}$ của $E$. Mỗi $x \in E$ có biểu diễn duy nhất $x = \sum_{i=1}^n x_i e_i$. Xét chuẩn cực đại tọa độ $\|x\|_\infty = \max_{1 \le i \le n} |x_i|$. Ta chứng minh một chuẩn bất kỳ $\|\cdot\|$ tương đương với $\|\cdot\|_\infty$.
>
> Chiều chặn trên: Theo bất đẳng thức tam giác:
> $$\|x\| \le \sum_{i=1}^n |x_i| \|e_i\| \le \left( \sum_{i=1}^n \|e_i\| \right) \|x\|_\infty = C \|x\|_\infty.$$
> Chiều chặn dưới: Xét hàm $f: (E, \|\cdot\|_\infty) \to \mathbb{R}$ xác định bởi $f(x) = \|x\|$. Ta có:
> $$|f(x) - f(y)| \le \|x - y\| \le C \|x - y\|_\infty,$$
> do đó $f$ liên tục đều theo chuẩn $\|\cdot\|_\infty$.
> Mặt cầu đơn vị $S = \{x \in E \mid \|x\|_\infty = 1\}$ là tập đóng và bị chặn trong không gian hữu hạn chiều, nên compact theo định lý Heine–Borel.
> Theo định lý Weierstrass, hàm liên tục $f$ đạt giá trị nhỏ nhất trên $S$ tại một điểm $u_0 \in S$:
> $$c = \min_{u \in S} f(u) = \|u_0\|.$$
> Vì $u_0 \in S$ nên $\|u_0\|_\infty = 1 \implies u_0 \ne 0$, kéo theo $c > 0$.
> Với mọi véctơ $x \ne 0$, phần tử chuẩn hóa $u = \dfrac{x}{\|x\|_\infty} \in S$, suy ra:
> $$\left\| \frac{x}{\|x\|_\infty} \right\| \ge c \implies \|x\| \ge c \|x\|_\infty.$$
> Bất đẳng thức hiển nhiên đúng khi $x = 0$. Kết hợp hai chiều ta có $c \|x\|_\infty \le \|x\| \le C \|x\|_\infty$.

> [!lem] Tính Compact của hình cầu đơn vị đóng
> Cho $E$ là không gian định chuẩn. Hình cầu đơn vị đóng $B_E = \{x \in E \mid \|x\| \le 1\}$ là tập compact khi và chỉ khi $\dim(E) < \infty$.

> [!prf]
> Chiều thuận ($\Leftarrow$): Nếu $\dim(E) = n < \infty$, theo tính tương đương của các chuẩn, $E$ đẳng cấu tô-pô với $\mathbb{K}^n$. Khi đó $B_E$ là tập đóng và bị chặn, nên theo định lý Heine–Borel nó là tập compact.
>
> Chiều nghịch ($\Rightarrow$): Giả sử ngược lại $\dim(E) = \infty$.
> Chọn $x_1 \in E$ với $\|x_1\| = 1$. Đặt $E_1 = \operatorname{span}\{x_1\}$. Vì $E_1$ hữu hạn chiều nên $E_1$ đóng và $E_1 \subsetneq E$.
> Theo bổ đề Riesz về khoảng cách, tồn tại $x_2 \in E$ với $\|x_2\| = 1$ sao cho $\operatorname{dist}(x_2, E_1) \ge 1/2$.
> Bằng quy nạp, nếu đã chọn được hệ $\{x_1, \dots, x_k\}$ thỏa $\|x_i\| = 1$ và $\operatorname{dist}(x_i, \operatorname{span}\{x_1, \dots, x_{i-1}\}) \ge 1/2$, ta đặt $E_k = \operatorname{span}\{x_1, \dots, x_k\}$. Do $\dim(E) = \infty$ nên $E_k$ là không gian con đóng thực sự. Ta tiếp tục chọn được $x_{k+1}$ sao cho $\|x_{k+1}\| = 1$ và $\operatorname{dist}(x_{k+1}, E_k) \ge 1/2$.
> Dãy $(x_n) \subset B_E$ thu được thỏa mãn $\|x_n - x_m\| \ge 1/2$ với mọi $n \ne m$, nên không thể trích ra bất kỳ dãy con Cauchy nào, tức không có dãy con hội tụ. Điều này mâu thuẫn với giả thiết $B_E$ compact. Vậy $\dim(E) < \infty$.

# II. Hình học Không gian Euclid / Tiền Hilbert hữu hạn chiều

> [!thm] Đẳng thức Hình bình hành (Parallelogram Law)
> Trong không gian Euclid hữu hạn chiều $\mathbb{R}^n$ (hoặc $\mathbb{C}^n$) với tích vô hướng tiêu chuẩn $\langle x, y \rangle$ và chuẩn cảm sinh $\|x\| = \sqrt{\langle x, x \rangle}$, ta có:
> $$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2 \quad \forall x, y \in \mathbb{K}^n.$$

> [!prf]
> Khai triển trực tiếp theo định nghĩa của tích vô hướng:
> $$\|x + y\|^2 = \langle x + y, x + y \rangle = \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2,$$
> $$\|x - y\|^2 = \langle x - y, x - y \rangle = \|x\|^2 - \langle x, y \rangle - \langle y, x \rangle + \|y\|^2.$$
> Cộng hai đẳng thức từng vế, các số hạng đan dấu $\langle x, y \rangle + \langle y, x \rangle$ triệt tiêu hoàn toàn, ta được:
> $$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2.$$

> [!thm] Đẳng thức Phân cực (Polarization Identity)
> Tích vô hướng trên không gian hữu hạn chiều được xác định hoàn toàn thông qua giá trị chuẩn của các véctơ:
> 1. Trên $\mathbb{R}^n$: $\langle x, y \rangle = \dfrac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 \right)$.
> 2. Trên $\mathbb{C}^n$: $\langle x, y \rangle = \dfrac{1}{4} \sum_{k=0}^3 i^k \|x + i^k y\|^2 = \dfrac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 + i\|x + iy\|^2 - i\|x - iy\|^2 \right)$.

> [!prf]
> Trường thực: Lấy hiệu hai phương trình khai triển chuẩn ở đẳng thức hình bình hành:
> $$\|x + y\|^2 - \|x - y\|^2 = 2\langle x, y \rangle + 2\langle y, x \rangle = 4\langle x, y \rangle.$$
> Chia cho $4$ ta thu được công thức phân cực thực.
>
> Trường phức: Chú ý $\langle y, x \rangle = \overline{\langle x, y \rangle}$, nên vế phải của phép trừ là:
> $$\|x + y\|^2 - \|x - y\|^2 = 2(\langle x, y \rangle + \overline{\langle x, y \rangle}) = 4\operatorname{Re}\langle x, y \rangle.$$
> Thay $y$ bởi $iy$, sử dụng tính chất $\langle x, iy \rangle = -i\langle x, y \rangle$:
> $$\|x + iy\|^2 - \|x - iy\|^2 = 4\operatorname{Re}(-i\langle x, y \rangle) = 4\operatorname{Im}\langle x, y \rangle.$$
> Nhân đẳng thức thứ hai với $i$ rồi cộng với đẳng thức thứ nhất:
> $$(\|x + y\|^2 - \|x - y\|^2) + i(\|x + iy\|^2 - \|x - iy\|^2) = 4(\operatorname{Re}\langle x, y \rangle + i\operatorname{Im}\langle x, y \rangle) = 4\langle x, y \rangle.$$
> Chia cho $4$ ta được công thức phân cực phức.

# III. Phổ của Ma trận Đối xứng và Dạng toàn phương Xác định dương

> [!thm] Định lý Phổ cho Ma trận Đối xứng thực
> Cho ma trận đối xứng $A \in \mathbb{R}^{n \times n}$ ($A = A^T$). Khi đó:
> 1. Toàn bộ $n$ trị riêng $\lambda_1, \dots, \lambda_n$ của $A$ đều là số thực.
> 2. Tồn tại một ma trận trực giao $P \in \mathbb{R}^{n \times n}$ ($P^T = P^{-1}$) sao cho $A = P D P^T$, với $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$.
> 3. Không gian $\mathbb{R}^n$ có một cơ sở trực chuẩn gồm toàn các véctơ riêng của $A$.

> [!prf]
> Giả sử $\lambda \in \mathbb{C}$ là một trị riêng của $A$ và $v \in \mathbb{C}^n \setminus \{0\}$ là véctơ riêng tương ứng: $Av = \lambda v$.
> Lấy liên hợp phức hai vế: $A \bar{v} = \bar{\lambda} \bar{v}$ (do $A$ là ma trận thực nên $\bar{A} = A$).
> Xét tích vô hướng phức $\langle Av, v \rangle = v^* A v$:
> $$v^* (Av) = v^* (\lambda v) = \lambda (v^* v) = \lambda \|v\|^2.$$
> Mặt khác, do $A = A^T$:
> $$v^* A v = (A^T v)^* v = (Av)^* v = (\lambda v)^* v = \bar{\lambda} (v^* v) = \bar{\lambda} \|v\|^2.$$
> Vì $v \ne 0 \implies \|v\|^2 > 0$, ta suy ra $\lambda = \bar{\lambda}$, tức mọi trị riêng của ma trận đối xứng thực đều là số thực.
>
> Việc tồn tại cơ sở trực chuẩn gồm các véctơ riêng được chứng minh bằng quy nạp theo số chiều $n$: lấy véctơ riêng đơn vị $u_1$ ứng với $\lambda_1$, xét không gian bù trực giao $u_1^\perp$. Vì $A$ đối xứng nên $A(u_1^\perp) \subseteq u_1^\perp$. Thu hẹp $A$ lên không gian $(n-1)$ chiều $u_1^\perp$ và áp dụng giả thiết quy nạp ta thu được ma trận trực giao chéo hóa $P$.

> [!prob] Bài toán 1 — Tính Cưỡng bức (Coercivity) của Ma trận Xác định dương
> Cho ma trận $A \in \mathbb{R}^{n \times n}$ xác định dương, tức $\langle Av, v \rangle > 0$ với mọi $v \in \mathbb{R}^n \setminus \{0\}$.
> Chứng minh rằng tồn tại hằng số $\alpha > 0$ sao cho:
> $$\langle Av, v \rangle \ge \alpha \|v\|^2 \quad \forall v \in \mathbb{R}^n.$$

> [!prf]
> Xét hàm số $f: \mathbb{R}^n \to \mathbb{R}$ xác định bởi $f(v) = \langle Av, v \rangle$. Vì $f$ là một đa thức thuần nhất bậc hai đối với các tọa độ của $v$, hàm $f$ liên tục trên $\mathbb{R}^n$.
>
> Mặt cầu đơn vị $S = \{v \in \mathbb{R}^n \mid \|v\| = 1\}$ là tập đóng và bị chặn trong không gian hữu hạn chiều $\mathbb{R}^n$, do đó $S$ compact.
>
> Theo định lý Weierstrass, hàm liên tục $f$ đạt giá trị nhỏ nhất trên tập compact $S$ tại điểm $u_0 \in S$. Đặt $\alpha = f(u_0) = \langle Au_0, u_0 \rangle$.
> Do $u_0 \in S$, ta có $\|u_0\| = 1 \ne 0$. Theo giả thiết $A$ xác định dương, ta suy ra $\alpha > 0$.
>
> Với mọi véctơ $v \in \mathbb{R}^n \setminus \{0\}$, véctơ chuẩn hóa $u = \dfrac{v}{\|v\|}$ nằm trên $S$. Do đó:
> $$f(u) \ge \alpha \iff \left\langle A\left(\frac{v}{\|v\|}\right), \frac{v}{\|v\|} \right\rangle \ge \alpha.$$
> Do tính song tuyến tính của tích vô hướng:
> $$\frac{1}{\|v\|^2} \langle Av, v \rangle \ge \alpha \iff \langle Av, v \rangle \ge \alpha \|v\|^2.$$
> Đẳng thức hiển nhiên đúng khi $v = 0$. Bổ đề được chứng minh trọn vẹn với $\alpha = \lambda_{\min}(A) > 0$.

> [!prob] Bài toán 2 — Tiêu chuẩn Phân tích $B^T B$ (Phân tích Cholesky)
> Chứng minh rằng một ma trận đối xứng thực $A \in \mathbb{R}^{n \times n}$ xác định dương khi và chỉ khi tồn tại một ma trận thực không suy biến $B \in \mathbb{R}^{n \times n}$ sao cho $A = B^T B$.

> [!prf]
> Chiều thuận ($\implies$): Giả sử $A$ xác định dương.
> Theo Định lý Phổ, ma trận đối xứng $A$ được chéo hóa trực giao: $A = P D P^T$, với $P$ là ma trận trực giao ($P^T = P^{-1}$) và $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$.
> Do $A$ xác định dương, toàn bộ các trị riêng đều dương: $\lambda_i > 0$.
> Xét ma trận đường chéo: $D^{1/2} = \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})$.
> Ma trận này thỏa mãn $(D^{1/2})^T = D^{1/2}$ và $D^{1/2} D^{1/2} = D$. Biểu diễn lại $A$:
> $$A = P D^{1/2} D^{1/2} P^T = (D^{1/2} P^T)^T (D^{1/2} P^T).$$
> Đặt $B = D^{1/2} P^T$. Vì $P^T$ và $D^{1/2}$ đều là các ma trận khả nghịch, ma trận tích $B$ không suy biến và ta có $A = B^T B$.
>
> Chiều nghịch ($\impliedby$): Giả sử $A = B^T B$ với $B$ khả nghịch.
> Ta có $A^T = (B^T B)^T = B^T (B^T)^T = B^T B = A$, do đó $A$ đối xứng.
> Với mọi véctơ $x \in \mathbb{R}^n \setminus \{0\}$, ta có:
> $$\langle Ax, x \rangle = x^T (B^T B) x = (Bx)^T (Bx) = \|Bx\|^2.$$
> Vì ma trận $B$ không suy biến ($\ker(B) = \{0\}$) và $x \ne 0$, véctơ ảnh $Bx \ne 0$.
> Chuẩn của một véctơ khác không luôn thực dương: $\|Bx\|^2 > 0 \implies \langle Ax, x \rangle > 0$.
> Vậy $A$ là ma trận xác định dương.

> [!prob] Bài toán 3 — Phần tử trên đường chéo chính
> Cho ma trận đối xứng xác định dương $A = [a_{ij}] \in \mathbb{R}^{n \times n}$. Chứng minh rằng tất cả các phần tử trên đường chéo chính đều dương, tức $a_{ii} > 0$ với mọi $i = 1, \dots, n$.

> [!prf]
> Xét hệ cơ sở chính tắc $\{e_1, e_2, \dots, e_n\}$ của $\mathbb{R}^n$, trong đó véctơ $e_i$ có thành phần thứ $i$ bằng $1$ và tất cả các thành phần còn lại bằng $0$. Hiển nhiên $e_i \ne 0$.
>
> Tính dạng toàn phương tại véctơ $e_i$:
> $$\langle Ae_i, e_i \rangle = e_i^T A e_i = e_i^T \begin{pmatrix} a_{1i} \\ \vdots \\ a_{ni} \end{pmatrix} = a_{ii}.$$
> Do $A$ xác định dương và $e_i \ne 0$, theo định nghĩa ta có:
> $$\langle Ae_i, e_i \rangle = a_{ii} > 0 \quad \forall i = 1, \dots, n.$$

> [!prob] Bài toán 4 — Tính xác định dương của Ma trận nghịch đảo
> Cho ma trận đối xứng xác định dương $A \in \mathbb{R}^{n \times n}$. Chứng minh rằng $A$ khả nghịch và $A^{-1}$ cũng là ma trận xác định dương.

> [!prf]
> Vì $A$ đối xứng xác định dương nên mọi trị riêng $\lambda_i > 0$.
> Định thức $\det(A) = \prod_{i=1}^n \lambda_i > 0 \ne 0$, suy ra ma trận $A$ khả nghịch.
>
> Tính đối xứng của $A^{-1}$:
> $$(A^{-1})^T = (A^T)^{-1} = A^{-1}.$$
>
> Tính xác định dương: Lấy véctơ $x \in \mathbb{R}^n \setminus \{0\}$ bất kỳ.
> Đặt $y = A^{-1}x \iff x = Ay$. Vì $A$ khả nghịch và $x \ne 0$ nên $y \ne 0$. Dạng toàn phương của $A^{-1}$ biến đổi thành:
> $$x^T A^{-1} x = (Ay)^T A^{-1} (Ay) = y^T A^T (A^{-1} A) y = y^T A y.$$
> Do $A$ xác định dương và $y \ne 0$, ta có $y^T A y > 0$.
> Suy ra $x^T A^{-1} x > 0$ với mọi $x \ne 0$. Vậy $A^{-1}$ đối xứng xác định dương.

> [!prob] Bài toán 5 — Phép biến đổi đồng dư (Congruence)
> Cho ma trận đối xứng xác định dương $A \in \mathbb{R}^{n \times n}$ và $C \in \mathbb{R}^{n \times n}$ là một ma trận không suy biến. Chứng minh rằng ma trận $M = C^T A C$ cũng là một ma trận xác định dương.

> [!prf]
> Tính đối xứng:
> $$M^T = (C^T A C)^T = C^T A^T (C^T)^T = C^T A C = M.$$
>
> Tính xác định dương: Lấy véctơ $x \in \mathbb{R}^n \setminus \{0\}$ bất kỳ. Ta có:
> $$x^T M x = x^T (C^T A C) x = (Cx)^T A (Cx).$$
> Đặt $y = Cx$. Do ma trận $C$ không suy biến ($\ker(C) = \{0\}$) và $x \ne 0$, ta có $y \ne 0$.
> Biểu thức trở thành $y^T A y$. Vì $A$ xác định dương và $y \ne 0$, ta có $y^T A y > 0$.
> Suy ra $x^T M x > 0$ với mọi $x \ne 0$. Vậy $M = C^T A C$ xác định dương.

> [!prob] Bài toán 6 — Dấu của Định thức và Vết ma trận
> Cho ma trận đối xứng xác định dương $A \in \mathbb{R}^{n \times n}$. Chứng minh rằng $\det(A) > 0$ và $\operatorname{tr}(A) > 0$.

> [!prf]
> Theo Định lý Phổ, ma trận đối xứng thực $A$ có đúng $n$ trị riêng thực $\lambda_1, \dots, \lambda_n$.
> Với mỗi trị riêng $\lambda_i$, tồn tại véctơ riêng $v_i \ne 0$ thỏa mãn $Av_i = \lambda_i v_i$.
> Do tính xác định dương của $A$:
> $$\langle Av_i, v_i \rangle = \langle \lambda_i v_i, v_i \rangle = \lambda_i \|v_i\|^2 > 0.$$
> Vì $\|v_i\|^2 > 0$, ta suy ra $\lambda_i > 0$ với mọi $i = 1, \dots, n$.
>
> Định thức bằng tích các trị riêng:
> $$\det(A) = \prod_{i=1}^n \lambda_i > 0.$$
>
> Vết bằng tổng các trị riêng:
> $$\operatorname{tr}(A) = \sum_{i=1}^n \lambda_i > 0.$$

> [!prob] Bài toán 7 — Biểu diễn chuẩn của ma trận qua tỉ số Rayleigh (Chuẩn toán tử $L^2$)
> Cho $A \in \mathbb{R}^{n \times n}$. Trang bị cho $\mathbb{R}^n$ chuẩn Euclid tiêu chuẩn $\|\cdot\|_2$. Chứng minh rằng:
> $$\|A\| = \sup_{\|x\|_2 \le 1} \|Ax\|_2 = \sqrt{\lambda_{\max}(A^T A)}.$$
> Nếu $A$ là ma trận đối xứng thì $\|A\| = \max_{1 \le i \le n} |\lambda_i(A)|$.

> [!prf]
> Ta có $\|Ax\|_2^2 = \langle Ax, Ax \rangle = \langle A^T A x, x \rangle$.
> Ma trận $M = A^T A$ luôn đối xứng và nửa xác định dương vì $M^T = (A^T A)^T = A^T A$ và $\langle Mx, x \rangle = \|Ax\|_2^2 \ge 0$.
> Theo Định lý Phổ, $\mathbb{R}^n$ có cơ sở trực chuẩn gồm các véctơ riêng $\{u_1, \dots, u_n\}$ của $A^T A$ ứng với các trị riêng $0 \le \lambda_1 \le \dots \le \lambda_n = \lambda_{\max}(A^T A)$.
> Biểu diễn mọi véctơ $x$ qua cơ sở này: $x = \sum_{i=1}^n c_i u_i$ với $\|x\|_2^2 = \sum_{i=1}^n c_i^2$.
> Khi đó:
> $$\langle A^T A x, x \rangle = \sum_{i=1}^n \lambda_i c_i^2 \le \lambda_{\max}(A^T A) \sum_{i=1}^n c_i^2 = \lambda_{\max}(A^T A) \|x\|_2^2.$$
> Suy ra $\dfrac{\|Ax\|_2}{\|x\|_2} \le \sqrt{\lambda_{\max}(A^T A)}$ với mọi $x \ne 0$.
> Dấu bằng đạt được khi chọn $x = u_n$ (véctơ riêng ứng với $\lambda_{\max}$).
> Do đó $\|A\| = \sqrt{\lambda_{\max}(A^T A)}$.
> Khi $A$ đối xứng, $A^T A = A^2$, trị riêng của $A^2$ là $\lambda_i^2$, nên $\sqrt{\lambda_{\max}(A^T A)} = \sqrt{\max \lambda_i^2} = \max |\lambda_i|$.

> [!prob] Bài toán 8 — Bất đẳng thức Hadamard về thể tích (Hình học Trực giao)
> Cho $A = [v_1 \ v_2 \ \dots \ v_n] \in \mathbb{R}^{n \times n}$ có các cột là các véctơ $v_1, \dots, v_n$. Chứng minh:
> $$|\det(A)| \le \prod_{i=1}^n \|v_i\|_2.$$
> Đẳng thức xảy ra khi và chỉ khi hệ $\{v_1, \dots, v_n\}$ là một họ trực giao hoặc có ít nhất một véctơ $v_i = 0$.

> [!prf]
> Nếu tồn tại $v_i = 0$ hoặc hệ phụ thuộc tuyến tính thì $\det(A) = 0$ và vế phải $\ge 0$, bất đẳng thức đúng.
> Giả sử $\{v_1, \dots, v_n\}$ độc lập tuyến tính. Áp dụng thuật toán trực chuẩn hóa Gram–Schmidt cho các cột $v_i$:
> Tồn tại ma trận tam giác trên khả nghịch $R = [r_{ij}]$ với các phần tử chéo $r_{ii} > 0$ và ma trận trực giao $Q = [q_1 \ \dots \ q_n]$ sao cho $A = QR$ (Phân tích QR).
> Do đó $v_i = \sum_{j=1}^{i-1} r_{ji} q_j + r_{ii} q_i$. Do tính trực chuẩn của họ $\{q_j\}$, theo định lý Pythagoras:
> $$\|v_i\|_2^2 = \sum_{j=1}^{i-1} r_{ji}^2 + r_{ii}^2 \ge r_{ii}^2 \implies r_{ii} \le \|v_i\|_2.$$
> Vì $Q$ trực giao nên $|\det(Q)| = 1$. Định thức của ma trận tích:
> $$|\det(A)| = |\det(Q)| \cdot |\det(R)| = 1 \cdot \prod_{i=1}^n r_{ii} \le \prod_{i=1}^n \|v_i\|_2.$$
> Đẳng thức xảy ra khi và chỉ khi $r_{ji} = 0$ với mọi $j < i$, tức ma trận $R$ là ma trận đường chéo, tương đương với các cột $v_i$ đôi một trực giao.

> [!prob] Bài toán 9 — Ma trận chiếu trực giao (Orthogonal Projection Matrix)
> Cho $M$ là không gian con $k$-chiều của $\mathbb{R}^n$, và $P \in \mathbb{R}^{n \times n}$ là ma trận biểu diễn phép chiếu trực giao lên $M$. Chứng minh rằng:
> 1. $P^2 = P$ (Lũy đẳng) và $P^T = P$ (Tự liên hợp/Đối xứng).
> 2. Ngược lại, mọi ma trận thỏa mãn $P^2 = P = P^T$ đều là một phép chiếu trực giao lên không gian ảnh $\operatorname{Im}(P)$.
> 3. $\|P\| = 1$ khi $M \ne \{0\}$.

> [!prf]
> 4. Với mọi $x \in \mathbb{R}^n$, phân tích duy nhất $x = y + z$ với $y \in M, z \in M^\perp$. Theo định nghĩa, $Px = y$.
> Vì $y \in M$ nên $P(Px) = Py = y = Px$, suy ra $P^2 = P$.
> Với mọi $x_1, x_2 \in \mathbb{R}^n$, viết $x_i = y_i + z_i$:
> $\langle Px_1, x_2 \rangle = \langle y_1, y_2 + z_2 \rangle = \langle y_1, y_2 \rangle$ (vì $y_1 \perp z_2$).
> $\langle x_1, Px_2 \rangle = \langle y_1 + z_1, y_2 \rangle = \langle y_1, y_2 \rangle$ (vì $z_1 \perp y_2$).
> Do đó $\langle Px_1, x_2 \rangle = \langle x_1, Px_2 \rangle \implies P = P^T$.
>
> 5. Giả sử $P^2 = P = P^T$. Đặt $M = \operatorname{Im}(P)$. Với mọi $x \in \mathbb{R}^n$, phân tích $x = Px + (I - P)x$. Rõ ràng $Px \in M$.
> Ta kiểm tra phần dư thuộc $M^\perp$: Với $y \in M$, tồn tại $w$ sao cho $y = Pw$.
> $\langle (I - P)x, y \rangle = \langle (I - P)x, Pw \rangle = \langle P^T (I - P)x, w \rangle = \langle P(I - P)x, w \rangle$.
> Vì $P(I - P) = P - P^2 = 0$, ta có $\langle (I - P)x, y \rangle = 0$. Vậy $(I - P)x \perp M$.
> Theo tính duy nhất của phép chiếu, $Px$ chính là hình chiếu trực giao của $x$ lên $M$.
>
> 6. Áp dụng Pythagoras cho phân tích trực giao: $\|x\|^2 = \|Px\|^2 + \|(I-P)x\|^2 \ge \|Px\|^2$.
> Suy ra $\|Px\| \le \|x\| \implies \|P\| \le 1$.
> Khi $M \ne \{0\}$, chọn $x \in M \setminus \{0\}$, ta có $Px = x \implies \|Px\| = \|x\|$, do đó $\|P\| = 1$.

