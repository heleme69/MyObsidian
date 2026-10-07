
# BỔ TRỢ ĐẠI SỐ TUYẾN TÍNH CHO GIẢI TÍCH HÀM

Tài liệu tổng hợp các định lý, bổ đề nền tảng của đại số tuyến tính có vai trò quyết định trong việc xây dựng hình học không gian Hilbert, định lý Riesz, định lý Lax–Milgram, lý thuyết toán tử và dạng toàn phương.

---

## Phần lý thuyết nền tảng bổ trợ

> [!thm] Đẳng thức Hình bình hành (Parallelogram Law)
> Cho $H$ là không gian tiền Hilbert với tích vô hướng $\langle \cdot, \cdot \rangle$ và chuẩn cảm sinh $\|x\| = \sqrt{\langle x, x \rangle}$. Với mọi $x, y \in H$, ta có:
> $$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2.$$
> Ngược lại (Định lý Jordan–von Neumann), một không gian định chuẩn có chuẩn thỏa mãn đẳng thức hình bình hành thì chuẩn đó được cảm sinh từ một tích vô hướng duy nhất.

> [!prf]
> Khai triển trực tiếp theo định nghĩa chuẩn cảm sinh từ tích vô hướng:
> $$\|x + y\|^2 = \langle x + y, x + y \rangle = \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2,$$
> $$\|x - y\|^2 = \langle x - y, x - y \rangle = \|x\|^2 - \langle x, y \rangle - \langle y, x \rangle + \|y\|^2.$$
> Cộng từng vế của hai đẳng thức trên, các số hạng đan dấu $\langle x, y \rangle$ và $\langle y, x \rangle$ triệt tiêu lẫn nhau, ta thu được:
> $$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2.$$

> [!thm] Đẳng thức Phân cực (Polarization Identity)
> Cho $H$ là không gian tiền Hilbert. Tích vô hướng có thể được khôi phục hoàn toàn từ chuẩn:
> 1. Trong trường hợp không gian thực $\mathbb{R}$:
>    $$\langle x, y \rangle = \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 \right).$$
> 2. Trong trường hợp không gian phức $\mathbb{C}$:
>    $$\langle x, y \rangle = \frac{1}{4} \sum_{k=0}^3 i^k \|x + i^k y\|^2 = \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 + i\|x + iy\|^2 - i\|x - iy\|^2 \right).$$

> [!prf]
> Trong trường thực, trừ hai hệ thức khai triển ở đẳng thức hình bình hành:
> $$\|x + y\|^2 - \|x - y\|^2 = 2\langle x, y \rangle + 2\langle y, x \rangle = 4\langle x, y \rangle.$$
> Chia cả hai vế cho $4$ ta được đẳng thức phân cực thực.
>
> Trong trường phức, vì $\langle y, x \rangle = \overline{\langle x, y \rangle}$, ta có:
> $$\|x + y\|^2 - \|x - y\|^2 = 2\langle x, y \rangle + 2\overline{\langle x, y \rangle} = 4\operatorname{Re}\langle x, y \rangle.$$
> Thay $y$ bởi $iy$ và chú ý rằng $\langle x, iy \rangle = -i\langle x, y \rangle$:
> $$\|x + iy\|^2 - \|x - iy\|^2 = 4\operatorname{Re}(-i\langle x, y \rangle) = 4\operatorname{Im}\langle x, y \rangle.$$
> Nhân biểu thức thứ hai với $i$ rồi cộng với biểu thức thứ nhất, ta được:
> $$(\|x + y\|^2 - \|x - y\|^2) + i(\|x + iy\|^2 - \|x - iy\|^2) = 4(\operatorname{Re}\langle x, y \rangle + i\operatorname{Im}\langle x, y \rangle) = 4\langle x, y \rangle.$$
> Chia cho $4$ suy ra điều phải chứng minh.

> [!lem] Tính tương đương của các chuẩn trên không gian hữu hạn chiều
> Cho $E$ là một không gian véctơ hữu hạn chiều trên $\mathbb{K}$ ($\mathbb{R}$ hoặc $\mathbb{C}$). Khi đó mọi chuẩn trên $E$ đều tương đương tô-pô với nhau: với hai chuẩn bất kỳ $\|\cdot\|_a$ và $\|\cdot\|_b$, tồn tại các hằng số $c_1, c_2 > 0$ sao cho
> $$c_1 \|x\|_a \le \|x\|_b \le c_2 \|x\|_a \quad \forall x \in E.$$
> Hệ quả trực tiếp: Mọi không gian con hữu hạn chiều của một không gian định chuẩn đều là không gian Banach (đầy đủ) và do đó luôn là tập con đóng.

> [!prf]
> Cố định một cơ sở $\{e_1, \dots, e_n\}$ của $E$. Mọi $x \in E$ biểu diễn duy nhất $x = \sum_{i=1}^n x_i e_i$. Xét chuẩn tổng $\|x\|_\infty = \max_{1 \le i \le n} |x_i|$. Ta chỉ cần chứng minh chuẩn bất kỳ $\|\cdot\|$ tương đương với $\|\cdot\|_\infty$.
>
> Bất đẳng thức tam giác cho chiều chặn trên:
> $$\|x\| \le \sum_{i=1}^n |x_i| \|e_i\| \le \left( \sum_{i=1}^n \|e_i\| \right) \|x\|_\infty = C \|x\|_\infty.$$
> Chiều ngược lại: Xét hàm số $f(x) = \|x\|$ xác định trên $E$. Từ bất đẳng thức trên, ta có $|f(x) - f(y)| \le \|x - y\| \le C\|x - y\|_\infty$, nên $f$ là hàm liên tục theo chuẩn $\|\cdot\|_\infty$.
> Mặt cầu đơn vị $S = \{x \in E \mid \|x\|_\infty = 1\}$ là tập đóng và bị chặn trong $\mathbb{K}^n \cong E$, do đó compact theo định lý Heine–Borel.
> Theo định lý Weierstrass, $f$ đạt giá trị nhỏ nhất trên $S$ tại $u_0 \in S$:
> $$c = \min_{u \in S} f(u) = \|u_0\|.$$
> Vì $u_0 \in S \implies u_0 \ne 0$, nên $c > 0$.
> Với mọi $x \ne 0$, véctơ chuẩn hóa $u = \dfrac{x}{\|x\|_\infty} \in S$, nên:
> $$\left\| \frac{x}{\|x\|_\infty} \right\| \ge c \implies \|x\| \ge c \|x\|_\infty.$$
> Bất đẳng thức hiển nhiên đúng khi $x = 0$. Vậy $c\|x\|_\infty \le \|x\| \le C\|x\|_\infty$.

> [!lem] Bổ đề Riesz về Compact và Chiều vô hạn
> Cho $X$ là một không gian định chuẩn. Mặt cầu đơn vị đóng $B_X = \{x \in X \mid \|x\| \le 1\}$ là tập compact khi và chỉ khi $\dim(X) < \infty$.

> [!prf]
> Chiều thuận ($\Leftarrow$): Nếu $\dim(X) < \infty$, do mọi chuẩn đều tương đương với chuẩn Euclid trên $\mathbb{R}^n$, tập $B_X$ đóng và bị chặn nên theo định lý Heine–Borel nó là tập compact.
>
> Chiều nghịch ($\Rightarrow$): Giả sử ngược lại $\dim(X) = \infty$.
> Chọn $x_1 \in X$ với $\|x_1\| = 1$. Đặt $Y_1 = \operatorname{span}\{x_1\}$, đây là không gian con đóng thực sự của $X$.
> Theo bổ đề Riesz về khoảng cách, tồn tại $x_2 \in X$ với $\|x_2\| = 1$ sao cho $\operatorname{dist}(x_2, Y_1) \ge 1/2$.
> Giả sử đã chọn được $x_1, \dots, x_k$ thỏa $\|x_i\| = 1$ và $\operatorname{dist}(x_i, \operatorname{span}\{x_1, \dots, x_{i-1}\}) \ge 1/2$. Đặt $Y_k = \operatorname{span}\{x_1, \dots, x_k\}$, vì $\dim(X) = \infty$ nên $Y_k \subsetneq X$ và $Y_k$ là không gian hữu hạn chiều nên đóng. Tiếp tục chọn $x_{k+1}$ sao cho $\|x_{k+1}\| = 1$ và $\operatorname{dist}(x_{k+1}, Y_k) \ge 1/2$.
> Bằng quy nạp ta thu được dãy $(x_n) \subset B_X$ thỏa mãn $\|x_n - x_m\| \ge 1/2$ với mọi $n \ne m$. Dãy này không chứa bất kỳ dãy con Cauchy nào, do đó không thể có dãy con hội tụ. Điều này mâu thuẫn với giả thiết $B_X$ compact. Vậy $\dim(X) < \infty$.

> [!thm] Định lý Lax–Milgram (Dạng toán tử / Ma trận Coercive)
> Cho $H$ là không gian Hilbert thực và $a: H \times H \to \mathbb{R}$ là một dạng song tuyến tính thỏa mãn:
> 1. Bị chặn (Liên tục): Tồn tại hằng số $C > 0$ sao cho $|a(u, v)| \le C \|u\| \|v\|$ với mọi $u, v \in H$.
> 2. Cưỡng bức (Coercive / Elliptic): Tồn tại hằng số $\alpha > 0$ sao cho $a(u, u) \ge \alpha \|u\|^2$ với mọi $u \in H$.
>
> Khi đó với mọi phiếm hàm tuyến tính liên tục $f \in H^*$, tồn tại duy nhất một phần tử $u \in H$ sao cho
> $$a(u, v) = f(v) \quad \forall v \in H.$$
> Trường hợp $H = \mathbb{R}^n$, định lý tương đương với việc ma trận $A$ xác định dương thì khả nghịch và hệ phương trình $Ax = b$ luôn có nghiệm duy nhất với mọi $b$.

> [!prf]
> Với mỗi $u \in H$ cố định, ánh xạ $v \mapsto a(u, v)$ là một phiếm hàm tuyến tính liên tục trên $H$ vì $|a(u, v)| \le (C\|u\|)\|v\|$.
> Theo Định lý Biểu diễn Riesz, tồn tại duy nhất một phần tử, ký hiệu là $Au \in H$, sao cho
> $$a(u, v) = \langle Au, v \rangle \quad \forall v \in H.$$
> Ánh xạ $A: H \to H$ tuyến tính và bị chặn với $\|Au\| \le C\|u\|$.
>
> Từ tính chất cưỡng bức: $\langle Au, u \rangle = a(u, u) \ge \alpha \|u\|^2$.
> Theo bất đẳng thức Cauchy–Schwarz, $\|Au\| \|u\| \ge \langle Au, u \rangle \ge \alpha \|u\|^2 \implies \|Au\| \ge \alpha \|u\|$.
> Bất đẳng thức này chứng minh $A$ là đơn ánh và ảnh $\operatorname{Im}(A)$ là không gian con đóng trong $H$.
>
> Nếu $\operatorname{Im}(A) \ne H$, theo Bổ đề Phân tích Trực giao, tồn tại $w \in (\operatorname{Im}(A))^\perp$ với $w \ne 0$. Khi đó $\langle Au, w \rangle = 0$ với mọi $u \in H$. Chọn $u = w$, ta có $\langle Aw, w \rangle = a(w, w) = 0 \ge \alpha \|w\|^2 \implies w = 0$ (mâu thuẫn). Vậy $\operatorname{Im}(A) = H$, tức $A$ là toàn ánh.
>
> Do đó toán tử $A$ là một song ánh khả nghịch liên tục. Với $f \in H^*$, áp dụng Riesz, tồn tại duy nhất $y \in H$ sao cho $f(v) = \langle y, v \rangle$. Phương trình $a(u, v) = f(v)$ tương đương với $\langle Au, v \rangle = \langle y, v \rangle$ với mọi $v$, tức $Au = y$. Nghiệm duy nhất chính là $u = A^{-1}y$.

---

## Phần bài tập về tính xác định dương và dạng toàn phương

> [!prob] Bài 1 (Tính cưỡng bức của ma trận xác định dương)
> Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng xác định dương, nghĩa là $\langle Av, v \rangle > 0$ với mọi $v \in \mathbb{R}^n \setminus \{0\}$.
> Chứng minh rằng tồn tại hằng số $\alpha > 0$ sao cho:
> $$\langle Av, v \rangle \ge \alpha \|v\|^2 \quad \forall v \in \mathbb{R}^n.$$

> [!prf]
> Xét hàm số $f: \mathbb{R}^n \to \mathbb{R}$ xác định bởi $f(v) = \langle Av, v \rangle$. Vì $f$ là dạng toàn phương bậc hai theo các tọa độ của $v$, nên $f$ liên tục trên $\mathbb{R}^n$.
>
> Xét mặt cầu đơn vị trong không gian hữu hạn chiều $\mathbb{R}^n$:
> $$S = \{v \in \mathbb{R}^n \mid \|v\| = 1\}.$$
> Tập $S$ đóng và bị chặn nên theo định lý Heine–Borel, $S$ là một tập compact.
>
> Theo định lý Weierstrass, hàm liên tục $f$ đạt giá trị nhỏ nhất trên tập compact $S$ tại một điểm $u_0 \in S$. Đặt $\alpha = f(u_0) = \langle Au_0, u_0 \rangle$.
> Do $u_0 \in S \implies \|u_0\| = 1 \ne 0$. Vì $A$ xác định dương nên $\alpha = \langle Au_0, u_0 \rangle > 0$.
>
> Với mọi véctơ $v \in \mathbb{R}^n \setminus \{0\}$, véctơ chuẩn hóa $u = \dfrac{v}{\|v\|} \in S$. Do đó:
> $$f\left(\frac{v}{\|v\|}\right) \ge \alpha \iff \left\langle A\left(\frac{v}{\|v\|}\right), \frac{v}{\|v\|} \right\rangle \ge \alpha.$$
> Do tính song tuyến tính của tích vô hướng:
> $$\frac{1}{\|v\|^2} \langle Av, v \rangle \ge \alpha \iff \langle Av, v \rangle \ge \alpha \|v\|^2.$$
> Bất đẳng thức hiển nhiên đúng khi $v = 0$. Vậy tồn tại $\alpha > 0$ thỏa mãn yêu cầu.

> [!prob] Bài 2 (Phân tích Cholesky / Phân tích $B^T B$)
> Chứng minh rằng một ma trận đối xứng $A \in \mathbb{R}^{n \times n}$ xác định dương khi và chỉ khi tồn tại một ma trận thực không suy biến $B \in \mathbb{R}^{n \times n}$ sao cho $A = B^T B$.

> [!prf]
> **Chiều thuận ($\implies$):** Giả sử $A$ xác định dương.
> Theo Định lý Phổ (Spectral Theorem) cho ma trận đối xứng thực, tồn tại ma trận trực giao $P$ ($P^T = P^{-1}$) và ma trận đường chéo $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ sao cho $A = PDP^T$.
> Vì $A$ xác định dương, tất cả các trị riêng $\lambda_i > 0$. Xét ma trận đường chéo căn bậc hai:
> $$D^{1/2} = \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n}).$$
> Rõ ràng $(D^{1/2})^T = D^{1/2}$ và $D^{1/2} D^{1/2} = D$. Khi đó:
> $$A = P D^{1/2} D^{1/2} P^T = (D^{1/2} P^T)^T (D^{1/2} P^T).$$
> Đặt $B = D^{1/2} P^T$. Do $P^T$ và $D^{1/2}$ đều là các ma trận khả nghịch nên $B$ không suy biến, và ta có biểu diễn $A = B^T B$.
>
> **Chiều nghịch ($\impliedby$):** Giả sử $A = B^T B$ với $B$ không suy biến.
> Trước hết $A^T = (B^T B)^T = B^T (B^T)^T = B^T B = A$, nên $A$ đối xứng.
> Với mọi $x \in \mathbb{R}^n \setminus \{0\}$:
> $$\langle Ax, x \rangle = x^T A x = x^T (B^T B) x = (Bx)^T (Bx) = \|Bx\|^2.$$
> Vì $B$ không suy biến ($\ker(B) = \{0\}$) và $x \ne 0$, ta suy ra $Bx \ne 0$. Do chuẩn của véctơ khác không luôn dương nên $\|Bx\|^2 > 0$, suy ra $\langle Ax, x \rangle > 0$. Vậy $A$ xác định dương.

> [!prob] Bài 3 (Các phần tử trên đường chéo chính)
> Cho $A = [a_{ij}] \in \mathbb{R}^{n \times n}$ là một ma trận đối xứng xác định dương. Chứng minh rằng tất cả các phần tử trên đường chéo chính đều dương, tức $a_{ii} > 0$ với mọi $i = 1, \dots, n$.

> [!prf]
> Xét hệ cơ sở chính tắc $\{e_1, e_2, \dots, e_n\}$ của $\mathbb{R}^n$, trong đó véctơ $e_i$ có thành phần thứ $i$ bằng $1$ và các thành phần khác bằng $0$. Hiển nhiên $e_i \ne 0$.
>
> Ta có tích ma trận:
> $$e_i^T A e_i = e_i^T (A e_i) = e_i^T \begin{pmatrix} a_{1i} \\ \vdots \\ a_{ni} \end{pmatrix} = a_{ii}.$$
> Vì $A$ xác định dương và $e_i \ne 0$, theo định nghĩa ta có:
> $$\langle Ae_i, e_i \rangle = e_i^T A e_i = a_{ii} > 0 \quad \forall i = 1, \dots, n.$$

> [!prob] Bài 4 (Tính xác định dương của ma trận nghịch đảo)
> Cho ma trận đối xứng $A \in \mathbb{R}^{n \times n}$ xác định dương. Chứng minh rằng $A$ khả nghịch và ma trận nghịch đảo $A^{-1}$ cũng là ma trận đối xứng xác định dương.

> [!prf]
> Vì $A$ đối xứng xác định dương nên mọi trị riêng $\lambda_i > 0$. Do đó $\det(A) = \prod_{i=1}^n \lambda_i > 0 \ne 0$, suy ra $A$ khả nghịch.
>
> Tính đối xứng của $A^{-1}$:
> $$(A^{-1})^T = (A^T)^{-1} = A^{-1}.$$
>
> Tính xác định dương: Lấy véctơ $x \in \mathbb{R}^n \setminus \{0\}$ bất kỳ.
> Đặt $y = A^{-1}x \iff x = Ay$. Vì $A$ khả nghịch và $x \ne 0$ nên $y \ne 0$. Khi đó:
> $$x^T A^{-1} x = (Ay)^T A^{-1} (Ay) = y^T A^T (A^{-1} A) y = y^T A y.$$
> Do $A$ xác định dương và $y \ne 0$, ta có $y^T A y > 0$.
> Suy ra $x^T A^{-1} x > 0$ với mọi $x \ne 0$. Vậy $A^{-1}$ là ma trận xác định dương.

> [!prob] Bài 5 (Phép biến đổi đồng dư - Congruence Transformation)
> Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng xác định dương và $C \in \mathbb{R}^{n \times n}$ là một ma trận không suy biến. Chứng minh rằng ma trận $M = C^T A C$ cũng là một ma trận đối xứng xác định dương.

> [!prf]
> Tính đối xứng của $M$:
> $$M^T = (C^T A C)^T = C^T A^T (C^T)^T = C^T A C = M.$$
>
> Tính xác định dương: Với mọi véctơ $x \in \mathbb{R}^n \setminus \{0\}$, xét dạng toàn phương:
> $$x^T M x = x^T (C^T A C) x = (Cx)^T A (Cx).$$
> Đặt $y = Cx$. Do ma trận $C$ không suy biến ($\ker(C) = \{0\}$) và $x \ne 0$ nên $y \ne 0$.
> Khi đó biểu thức trở thành $y^T A y$.
> Vì $A$ xác định dương và $y \ne 0$, ta luôn có $y^T A y > 0$.
> Suy ra $x^T M x > 0$ với mọi $x \ne 0$. Vậy $M = C^T A C$ xác định dương.

> [!prob] Bài 6 (Dấu của Định thức và Vết ma trận)
> Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng xác định dương. Chứng minh rằng $\det(A) > 0$ và $\operatorname{tr}(A) > 0$.

> [!prf]
> Theo Định lý Phổ, ma trận đối xứng $A$ có $n$ trị riêng thực $\lambda_1, \dots, \lambda_n$ (kể cả bội số).
> Với mỗi trị riêng $\lambda_i$, tồn tại véctơ riêng tương ứng $v_i \ne 0$ thỏa mãn $Av_i = \lambda_i v_i$.
> Vì $A$ xác định dương:
> $$\langle Av_i, v_i \rangle = \langle \lambda_i v_i, v_i \rangle = \lambda_i \|v_i\|^2 > 0.$$
> Do $\|v_i\| > 0$ nên $\lambda_i > 0$ với mọi $i = 1, \dots, n$.
>
> Định thức của ma trận bằng tích các trị riêng:
> $$\det(A) = \prod_{i=1}^n \lambda_i > 0.$$
>
> Vết của ma trận bằng tổng các trị riêng:
> $$\operatorname{tr}(A) = \sum_{i=1}^n \lambda_i > 0.$$