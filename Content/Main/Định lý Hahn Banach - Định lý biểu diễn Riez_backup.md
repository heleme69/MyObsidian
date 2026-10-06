
# Định lý Hahn–Banach và Định lý Riesz: Góc nhìn Hình học

## Phần I: Nền tảng Không gian Đối ngẫu và Hình học Quả cầu

Trước khi xây dựng các kết quả mở rộng (Hahn–Banach) hay biểu diễn (Riesz), ta thiết lập các đối tượng cơ sở: phiếm hàm tuyến tính liên tục, không gian đối ngẫu và cấu trúc hình học của quả cầu đơn vị.

### 1.1 Chuẩn, Quả cầu đơn vị và Phiếm hàm tuyến tính

> [!def] Chuẩn và Quả cầu đơn vị đóng
> Cho $E$ là một không gian vectơ trên trường $\mathbb{F}$ (với $\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{C}$). **Chuẩn** $\|\cdot\|$ là một ánh xạ từ $E$ vào $[0, +\infty)$ thỏa mãn:
> 1. $\|x\| = 0 \iff x = 0$;
> 2. $\|\alpha x\| = |\alpha| \|x\|$ với mọi $\alpha \in \mathbb{F}, x \in E$;
> 3. $\|x + y\| \le \|x\| + \|y\|$ với mọi $x, y \in E$.
>
> **Quả cầu đơn vị đóng** trong $E$ là tập hợp:
> $$B_E = \{x \in E \mid \|x\| \le 1\}.$$
> Tập $B_E$ luôn là tập lồi và đối xứng qua gốc tọa độ. Hình dáng của $B_E$ phụ thuộc vào chuẩn: trong không gian Hilbert nó là hình cầu trơn; trong không gian $\ell^1$ nó có các điểm gãy và góc nhọn; trong không gian $\ell^\infty$ nó là khối đa diện vuông.

> [!def] Phiếm hàm tuyến tính và Không gian đối ngẫu
> Một **phiếm hàm tuyến tính** trên $E$ là ánh xạ $f: E \to \mathbb{F}$ thỏa mãn:
> $$f(\alpha x + \beta y) = \alpha f(x) + \beta f(y) \quad \forall x, y \in E,\ \forall \alpha, \beta \in \mathbb{F}.$$
> Phiếm hàm $f$ liên tục khi và chỉ khi nó bị chặn, tức tồn tại hằng số $C \ge 0$ sao cho $|f(x)| \le C\|x\|$ với mọi $x \in E$.
>
> **Không gian đối ngẫu liên tục** $E^*$ là không gian vectơ của tất cả các phiếm hàm tuyến tính liên tục trên $E$, trang bị chuẩn toán tử:
> $$\|f\| = \sup_{x \ne 0} \frac{|f(x)|}{\|x\|} = \sup_{\|x\| \le 1} |f(x)|.$$
> Không gian $E^*$ luôn là một không gian Banach đối với chuẩn này.

### 1.2 Siêu phẳng mức và khoảng cách hình học

Mỗi phiếm hàm $f \in E^* \setminus \{0\}$ xác định một họ các siêu phẳng song song, gọi là các **tập mức** (level sets):
$$H_\alpha = \{x \in E \mid f(x) = \alpha\}, \quad \alpha \in \mathbb{R}.$$

> [!prp] Khoảng cách giữa các siêu phẳng mức
> Giả sử $\mathbb{F} = \mathbb{R}$. Khoảng cách hình học từ gốc tọa độ $0 \in H_0$ đến siêu phẳng $H_1 = \{x \in E \mid f(x) = 1\}$ được xác định bởi:
> $$d(H_0, H_1) = \frac{1}{\|f\|}.$$

> [!prf]
> Theo định nghĩa khoảng cách từ một điểm đến một tập hợp trong không gian định chuẩn:
> $$d(H_0, H_1) = \inf_{x \in H_1} \|x - 0\| = \inf_{f(x)=1} \|x\|.$$
>
> **Chặn dưới:** Với mọi $x \in H_1$, ta có $f(x) = 1$. Do $f$ liên tục:
> $$1 = |f(x)| \le \|f\| \cdot \|x\| \implies \|x\| \ge \frac{1}{\|f\|}.$$
> Lấy infimum trên toàn bộ $x \in H_1$, ta thu được:
> $$\inf_{f(x)=1} \|x\| \ge \frac{1}{\|f\|}.$$
>
> **Đạt cận dưới:** Theo định nghĩa chuẩn toán tử $\|f\| = \sup_{x \ne 0} \frac{|f(x)|}{\|x\|}$, với mọi $\varepsilon > 0$, tồn tại vectơ $x_\varepsilon \in E \setminus \{0\}$ sao cho:
> $$|f(x_\varepsilon)| > (\|f\| - \varepsilon)\|x_\varepsilon\|.$$
> Đặt $z_\varepsilon = \frac{x_\varepsilon}{f(x_\varepsilon)}$. Khi đó $f(z_\varepsilon) = 1$, tức $z_\varepsilon \in H_1$. Độ dài của vectơ này thỏa mãn:
> $$\|z_\varepsilon\| = \frac{\|x_\varepsilon\|}{|f(x_\varepsilon)|} < \frac{1}{\|f\| - \varepsilon}.$$
> Do đó:
> $$\inf_{f(x)=1} \|x\| \le \|z_\varepsilon\| < \frac{1}{\|f\| - \varepsilon}.$$
> Cho $\varepsilon \to 0^+$, ta nhận được $\inf_{f(x)=1} \|x\| \le \frac{1}{\|f\|}$.
> Kết hợp hai bất đẳng thức, ta có $d(H_0, H_1) = \frac{1}{\|f\|}$.

Ý nghĩa hình học: Chuẩn $\|f\|$ tỷ lệ nghịch với khoảng cách giữa các siêu phẳng mức $H_\alpha$. Khi $\|f\|$ lớn, các siêu phẳng mức xếp dày đặc quanh gốc tọa độ. Khi $\|f\|$ nhỏ, các siêu phẳng trải thưa thớt hơn.

### 1.3 Siêu phẳng tựa của quả cầu đơn vị

Xét trường hợp không gian thực $\mathbb{F} = \mathbb{R}$. Hai siêu phẳng
$$H_{\|f\|}^+ = \{x \in E \mid f(x) = \|f\|\}, \quad H_{\|f\|}^- = \{x \in E \mid f(x) = -\|f\|\}$$
là hai siêu phẳng tựa kẹp chặt quả cầu đơn vị đóng $B_E$.

> [!prp] Tính tựa của siêu phẳng ranh giới
> Hai siêu phẳng $H_{\|f\|}^\pm$ tiếp xúc với biên $\partial B_E$ và không giao với phần trong (interior) của quả cầu đơn vị $\operatorname{int}(B_E)$.

> [!prf]
> Ta chứng minh cho $H_{\|f\|}^+$ (trường hợp $H_{\|f\|}^-$ hoàn toàn tương tự).
>
> *Không giao với nội tâm quả cầu:* Giả sử $x \in \operatorname{int}(B_E)$, tức là $\|x\| < 1$. Do tính bị chặn của $f$:
> $$f(x) \le |f(x)| \le \|f\| \cdot \|x\| < \|f\|.$$
> Do đó $f(x) \ne \|f\|$, dẫn đến $x \notin H_{\|f\|}^+$. Như vậy $\operatorname{int}(B_E) \cap H_{\|f\|}^+ = \emptyset$.
>
> *Tiếp xúc với biên:* Theo định nghĩa chuẩn của phiếm hàm, $\|f\| = \sup_{\|x\| \le 1} f(x)$. Do đó, tồn tại một dãy $(x_n) \subset B_E$ sao cho $f(x_n) \to \|f\|$. Nếu không gian $E$ có tính chất đạt chuẩn (chẳng hạn không gian phản xạ hoặc hữu hạn chiều), tồn tại $x_0 \in \partial B_E$ sao cho $f(x_0) = \|f\|$, tức $x_0 \in \partial B_E \cap H_{\|f\|}^+$. Khi đó $H_{\|f\|}^+$ là một siêu phẳng tựa của $B_E$ tại $x_0$.

### 1.4 Tính không duy nhất của mở rộng tại điểm biên không trơn

Bài toán mở rộng một phiếm hàm tuyến tính từ không gian con $M \subset E$ lên $E$ tương đương với việc mở rộng một siêu phẳng tựa của $B_M = B_E \cap M$ thành siêu phẳng tựa của toàn bộ $B_E$. Nếu quả cầu đơn vị có điểm biên không trơn (tại đó tồn tại nhiều hơn một siêu phẳng tựa), phiếm hàm mở rộng bảo toàn chuẩn sẽ không duy nhất.

> [!exm] Mở rộng không duy nhất trong chuẩn $\ell^1$
> Xét $X = \mathbb{R}^2$ trang bị chuẩn $\|(x,y)\|_1 = |x| + |y|$ và không gian con $M = \{(x,0) \mid x \in \mathbb{R}\} \subset X$. Xét phiếm hàm $f: M \to \mathbb{R}$ xác định bởi:
> $$f(x, 0) = x.$$
> Khi đó $\|f\|_{M^*} = 1$ và tồn tại vô số mở rộng $F \in X^*$ sao cho $F|_M = f$ và $\|F\|_{X^*} = 1$.

> [!prf]
> **Bước 1: Tính chuẩn của $f$ trên $M$.**
> Với mọi $(x,0) \in M$, ta có $\|(x,0)\|_1 = |x| + |0| = |x|$. Giá trị phiếm hàm thỏa mãn $|f(x,0)| = |x| = \|(x,0)\|_1$. Do đó:
> $$\|f\|_{M^*} = \sup_{(x,0) \ne (0,0)} \frac{|f(x,0)|}{\|(x,0)\|_1} = 1.$$
>
> **Bước 2: Cấu trúc của phiếm hàm mở rộng.**
> Một phiếm hàm tuyến tính $F: \mathbb{R}^2 \to \mathbb{R}$ mở rộng $f$ phải thỏa mãn $F(x, 0) = f(x, 0) = x$ với mọi $x \in \mathbb{R}$. Đặt $a = F(0, 1) \in \mathbb{R}$. Theo tính tuyến tính của $F$:
> $$F(x, y) = F(x, 0) + yF(0, 1) = x + ay.$$
>
> **Bước 3: Điều kiện bảo toàn chuẩn $\|F\|_{X^*} = 1$.**
> Điều kiện $\|F\|_{X^*} \le 1$ tương đương với bất đẳng thức:
> $$|x + ay| \le |x| + |y| \quad \forall (x, y) \in \mathbb{R}^2.$$
>
> *Điều kiện cần:* Cho $(x, y) = (0, 1)$, bất đẳng thức trở thành $|a| \le 1$, tức $a \in [-1, 1]$.
>
> *Điều kiện đủ:* Giả sử $|a| \le 1$. Khi đó với mọi $(x, y) \in \mathbb{R}^2$, theo bất đẳng thức tam giác:
> $$|F(x,y)| = |x + ay| \le |x| + |a||y| \le |x| + |y| = \|(x, y)\|_1.$$
> Suy ra $\|F\|_{X^*} \le 1$. Mặt khác, tại $(1, 0) \in X$: $\|(1,0)\|_1 = 1$ và $F(1, 0) = 1$, do đó $\|F\|_{X^*} = 1$.
>
> **Kết luận:** Với mỗi hằng số $a \in [-1, 1]$, phiếm hàm $F_a(x, y) = x + ay$ là một mở rộng của $f$ lên $X$ thỏa mãn $\|F_a\|_{X^*} = \|f\|_{M^*} = 1$. Vì tập $[-1, 1]$ có vô số phần tử, mở rộng bảo toàn chuẩn là không duy nhất.

---

## Phần II: Hình học hóa Định lý Hahn–Banach và Tính Tương đương

Định lý Hahn–Banach tồn tại dưới hai hình thức: dạng giải tích (mở rộng phiếm hàm tuyến tính bị chặn bởi một phiếm hàm dưới tuyến tính) và dạng hình học (phân tách các tập lồi bằng siêu phẳng). Hai dạng này hoàn toàn tương đương nhau thông qua công cụ trung gian là **phiếm hàm Minkowski**.

### 2.1 Tập lồi, Siêu phẳng tách và Phiếm hàm Minkowski

> [!def] Tập lồi và Siêu phẳng tách
> Một tập con $C \subset E$ là **lồi** nếu với mọi $x, y \in C$ và $t \in [0, 1]$, ta có $(1-t)x + ty \in C$.
>
> Một siêu phẳng affine $H = \{x \in E \mid f(x) = \alpha\}$ (với $f \in E^* \setminus \{0\}, \alpha \in \mathbb{R}$) được gọi là **tách** hai tập lồi không rỗng $A, B \subset E$ nếu:
> $$f(x) \le \alpha \le f(y) \quad \forall x \in A,\ \forall y \in B.$$
> Nếu các bất đẳng thức trên là ngặt (với ít nhất một vế ngặt trên tập mở), ta gọi đó là phân tách ngặt.

> [!lem] Phiếm hàm Minkowski (Hàm chuẩn tắc)
> Cho $C$ là một tập con lồi, mở trong không gian định chuẩn thực $E$ sao cho $0 \in C$. Ánh xạ $p: E \to [0, +\infty)$ định nghĩa bởi:
> $$p(x) = \inf\{\lambda > 0 \mid \lambda^{-1}x \in C\}$$
> được gọi là **phiếm hàm Minkowski** của tập $C$. Ánh xạ $p$ thỏa mãn:
> 1. Thuần nhất dương: $p(\alpha x) = \alpha p(x)$ với mọi $\alpha > 0, x \in E$;
> 2. Dưới cộng: $p(x + y) \le p(x) + p(y)$ với mọi $x, y \in E$;
> 3. Tồn tại hằng số $M > 0$ sao cho $0 \le p(x) \le M\|x\|$ với mọi $x \in E$;
> 4. $C = \{x \in E \mid p(x) < 1\}$.

> [!prf]
> *Tính thuần nhất dương:* Với $\alpha > 0$:
> $$p(\alpha x) = \inf\{\lambda > 0 \mid \lambda^{-1}(\alpha x) \in C\} = \inf\{\alpha(\alpha^{-1}\lambda) > 0 \mid (\alpha^{-1}\lambda)^{-1}x \in C\}.$$
> Đặt $\mu = \lambda / \alpha$, ta thu được $p(\alpha x) = \inf\{\alpha \mu > 0 \mid \mu^{-1}x \in C\} = \alpha p(x)$.
>
> *Tính dưới cộng:* Cho $x, y \in E$. Với mọi $\varepsilon > 0$, theo định nghĩa infimum, tồn tại $\lambda_1, \lambda_2 > 0$ sao cho $\lambda_1 < p(x) + \varepsilon$, $\lambda_2 < p(y) + \varepsilon$ và $\lambda_1^{-1}x \in C$, $\lambda_2^{-1}y \in C$.
> Do $C$ là tập lồi, tổ hợp lồi của hai điểm này cũng thuộc $C$:
> $$\frac{\lambda_1}{\lambda_1 + \lambda_2}(\lambda_1^{-1}x) + \frac{\lambda_2}{\lambda_1 + \lambda_2}(\lambda_2^{-1}y) = \frac{x + y}{\lambda_1 + \lambda_2} \in C.$$
> Theo định nghĩa của $p$:
> $$p(x+y) \le \lambda_1 + \lambda_2 < p(x) + p(y) + 2\varepsilon.$$
> Cho $\varepsilon \to 0^+$, ta được $p(x + y) \le p(x) + p(y)$.
>
> *Tính bị chặn:* Vì $0 \in C$ và $C$ mở, tồn tại $r > 0$ sao cho quả cầu mở $B(0, r) = \{z \in E \mid \|z\| < r\} \subset C$. Với mọi $x \ne 0$, đặt $\lambda = \frac{\|x\|}{r/2} > 0$. Khi đó:
> $$\|\lambda^{-1}x\| = \frac{\|x\|}{\lambda} = \frac{r}{2} < r \implies \lambda^{-1}x \in B(0, r) \subset C.$$
> Do đó $p(x) \le \lambda = \frac{2}{r}\|x\|$. Đặt $M = 2/r$, ta có $p(x) \le M\|x\|$.
>
> *Đặc trưng của $C$:*
> Giả sử $x \in C$. Vì $C$ mở, tồn tại $\delta > 0$ sao cho $(1 + \delta)x \in C$. Khi đó $\lambda = \frac{1}{1+\delta} < 1$ thỏa mãn $\lambda^{-1}x \in C$. Do đó $p(x) \le \lambda < 1$.
> Ngược lại, giả sử $p(x) < 1$. Tồn tại $\lambda \in (0, 1)$ sao cho $\lambda^{-1}x \in C$. Do $0 \in C$ và $C$ lồi:
> $$x = (1 - \lambda)\cdot 0 + \lambda(\lambda^{-1}x) \in C.$$
> Vậy $C = \{x \in E \mid p(x) < 1\}$.

### 2.2 Chứng minh sự Tương đương giữa Dạng Giải tích và Dạng Hình học

Ta phát biểu hai định lý cốt lõi trên không gian định chuẩn thực $E$.

> [!thm] Định lý Hahn–Banach (Dạng Giải tích: Mở rộng Phiếm hàm)
> Cho $E$ là một không gian vectơ thực và $p: E \to \mathbb{R}$ là một phiếm hàm dưới tuyến tính (tức $p(\alpha x) = \alpha p(x)$ với $\alpha > 0$ và $p(x+y) \le p(x) + p(y)$). Cho $M$ là một không gian con của $E$ và $f: M \to \mathbb{R}$ là một phiếm hàm tuyến tính thỏa mãn:
> $$f(m) \le p(m) \quad \forall m \in M.$$
> Khi đó tồn tại một phiếm hàm tuyến tính $F: E \to \mathbb{R}$ sao cho:
> $$F|_M = f \quad \text{và} \quad F(x) \le p(x) \quad \forall x \in E.$$

> [!thm] Định lý Hahn–Banach (Dạng Hình học: Phân tách Tập lồi và Điểm)
> Cho $C$ là một tập con lồi, mở, không rỗng trong không gian định chuẩn thực $E$, và $x_0 \in E \setminus C$. Khi đó tồn tại một phiếm hàm tuyến tính liên tục $F \in E^*$ sao cho:
> $$F(x) < F(x_0) \quad \forall x \in C.$$

> [!prf] Chứng minh Tính Tương đương Hai chiều
>
> **Chiều I: Dạng Giải tích $\implies$ Dạng Hình học.**
> Giả sử Định lý Hahn–Banach dạng giải tích đúng. Cho $C \subset E$ lồi, mở, khác rỗng và $x_0 \notin C$.
> Chọn một điểm $c_0 \in C$. Bằng phép tịnh tiến, đặt $C' = C - c_0$ và $x'_0 = x_0 - c_0$. Khi đó $C'$ là tập lồi, mở, chứa gốc tọa độ $0$, và $x'_0 \notin C'$.
> 
> Xét phiếm hàm Minkowski của $C'$:
> $$p(x) = \inf\{\lambda > 0 \mid \lambda^{-1}x \in C'\}.$$
> Theo Bổ đề 2.1, $p$ là phiếm hàm dưới tuyến tính, $p(x) \le M\|x\|$, và $C' = \{x \in E \mid p(x) < 1\}$. Vì $x'_0 \notin C'$, ta có $p(x'_0) \ge 1$.
>
> Xét không gian con một chiều $M = \mathbb{R}x'_0 = \{t x'_0 \mid t \in \mathbb{R}\}$. Định nghĩa phiếm hàm tuyến tính $f: M \to \mathbb{R}$ bởi:
> $$f(t x'_0) = t.$$
> Ta kiểm tra $f(y) \le p(y)$ với mọi $y \in M$:
> - Nếu $t \ge 0$: Do $p(x'_0) \ge 1$, ta có $f(t x'_0) = t \le t p(x'_0) = p(t x'_0)$.
> - Nếu $t < 0$: Do $p(y) \ge 0$ với mọi $y$, ta có $f(t x'_0) = t < 0 \le p(t x'_0)$.
> Vậy $f(y) \le p(y)$ với mọi $y \in M$.
>
> Áp dụng Định lý dạng giải tích, tồn tại phiếm hàm tuyến tính $F: E \to \mathbb{R}$ thỏa mãn $F|_M = f$ và $F(x) \le p(x)$ với mọi $x \in E$.
> - Tính liên tục của $F$: Vì $F(x) \le p(x) \le M\|x\|$ và $-F(x) = F(-x) \le M\|-x\| = M\|x\|$, ta có $|F(x)| \le M\|x\|$, suy ra $F \in E^*$.
> - Phân tách tập: Với mọi $z \in C'$, ta có $p(z) < 1$, do đó $F(z) \le p(z) < 1$. Trong khi đó, tại $x'_0$, $F(x'_0) = f(x'_0) = 1$. Vậy:
> $$F(z) < F(x'_0) \quad \forall z \in C'.$$
> Chuyển về biến ban đầu với $z = x - c_0$ và $x'_0 = x_0 - c_0$, tính tuyến tính cho ta $F(x) - F(c_0) < F(x_0) - F(c_0)$, tức là $F(x) < F(x_0)$ với mọi $x \in C$.
>
> **Chiều II: Dạng Hình học $\implies$ Dạng Giải tích.**
> Giả sử Định lý Hahn–Banach dạng hình học đúng. Cho $M$ là không gian con của $E$, $p: E \to \mathbb{R}$ là phiếm hàm dưới tuyến tính, và $f: M \to \mathbb{R}$ tuyến tính thỏa mãn $f(m) \le p(m)$ với mọi $m \in M$.
>
> Xét không gian tích $X = E \times \mathbb{R}$. Trang bị chuẩn trên $X$ bởi $\|(x, t)\|_X = \|x\|_E + |t|$.
> Thiết lập hai tập con trong $X$:
> 1. Phần trong của epigraph của $p$:
> $$C = \{(x, t) \in E \times \mathbb{R} \mid t > p(x)\}.$$
> Vì $p$ dưới tuyến tính, $p$ là hàm lồi: với $(x_1, t_1), (x_2, t_2) \in C$ và $\lambda \in [0, 1]$:
> $$p(\lambda x_1 + (1-\lambda)x_2) \le \lambda p(x_1) + (1-\lambda)p(x_2) < \lambda t_1 + (1-\lambda)t_2.$$
> Do đó $C$ là tập lồi trong $X$. Tập $C$ mở do $p$ liên tục (hoặc mở theo cấu trúc chiều dọc).
> 2. Đồ thị của phiếm hàm $f$:
> $$L = \operatorname{graph}(f) = \{(m, f(m)) \in E \times \mathbb{R} \mid m \in M\}.$$
> Do $M$ là không gian con và $f$ tuyến tính, $L$ là một không gian vectơ con của $X$, do đó $L$ lồi.
>
> Ta chứng minh $C \cap L = \emptyset$:
> Nếu tồn tại $(u, s) \in C \cap L$, thì $u \in M$, $s = f(u)$ và đồng thời $s > p(u)$. Điều này kéo theo $f(u) > p(u)$, mâu thuẫn với giả thiết $f(m) \le p(m)$ với mọi $m \in M$. Do đó $C \cap L = \emptyset$.
>
> Áp dụng dạng hình học của Định lý phân tách cho tập lồi mở $C$ và các điểm thuộc $L$ (hoặc dạng tách hai tập lồi $C$ và $L$ với $C$ mở): Tồn tại một phiếm hàm tuyến tính liên tục khác không $\Phi \in X^*$ và $\alpha \in \mathbb{R}$ sao cho:
> $$\Phi(c) > \alpha \ge \Phi(l) \quad \forall c \in C,\ \forall l \in L.$$
> Mọi phiếm hàm tuyến tính liên tục $\Phi$ trên $E \times \mathbb{R}$ đều có dạng:
> $$\Phi(x, t) = F_0(x) + k \cdot t$$
> với $F_0: E \to \mathbb{R}$ tuyến tính và $k \in \mathbb{R}$.
>
> Vì $L$ là một không gian vectơ con của $X$, ảnh $\Phi(L)$ là một không gian con tuyến tính của $\mathbb{R}$. Một không gian con của $\mathbb{R}$ bị chặn trên bởi $\alpha$ thì bắt buộc phải là tập $\{0\}$, và $\alpha \ge 0$. Do đó:
> $$\Phi(m, f(m)) = F_0(m) + k f(m) = 0 \quad \forall m \in M.$$
> Suy ra $F_0(m) = -k f(m)$ với mọi $m \in M$.
>
> Mặt khác, với $x \in E$ cố định và $t > p(x)$, ta có $(x, t) \in C$, dẫn đến:
> $$\Phi(x, t) = F_0(x) + k \cdot t > 0.$$
> Khi cho $t \to +\infty$, bất đẳng thức trên chỉ giữ được tính đúng đắn nếu $k \ge 0$. Nếu $k = 0$, ta có $F_0(x) > 0$ với mọi $x \in E$. Thay $x$ bằng $-x$, ta có $F_0(-x) = -F_0(x) > 0$, dẫn đến mâu thuẫn. Vì vậy $k > 0$.
>
> Chia biểu thức cho $k > 0$ và đặt $F(x) = -\frac{1}{k}F_0(x)$. Khi đó $F: E \to \mathbb{R}$ là phiếm hàm tuyến tính.
> - Trên $M$: Với mọi $m \in M$, ta có $F(m) = -\frac{1}{k}(-k f(m)) = f(m)$. Vậy $F|_M = f$.
> - Trên toàn $E$: Với mọi $x \in E$ và mọi $\varepsilon > 0$, điểm $(x, p(x) + \varepsilon)$ thuộc $C$. Do đó:
> $$F_0(x) + k(p(x) + \varepsilon) > 0 \implies -k F(x) + k(p(x) + \varepsilon) > 0.$$
> Vì $k > 0$, ta chia cho $k$:
> $$-F(x) + p(x) + \varepsilon > 0 \implies F(x) < p(x) + \varepsilon.$$
> Cho $\varepsilon \to 0^+$, ta thu được $F(x) \le p(x)$ với mọi $x \in E$.
> Chứng minh tương đương hoàn tất.

### 2.3 Mở rộng duy nhất trên Không gian con Trù mật

Nếu $M$ là một không gian con trù mật trong $E$, sự tồn tại và duy nhất của mở rộng không phụ thuộc vào Bổ đề Zorn mà hoàn toàn dựa vào cấu trúc topo metric đầy đủ của trường vô hướng.

> [!prp] Toán tử Thu hẹp
> Cho $E, F$ là các không gian định chuẩn, $T \in \mathcal{L}(E, F)$ và $M$ là một không gian vectơ con của $E$. Khi đó toán tử thu hẹp $T|_M: M \to F$ là tuyến tính liên tục và:
> $$\|T|_M\|_{\mathcal{L}(M, F)} \le \|T\|_{\mathcal{L}(E, F)}.$$

> [!prf]
> Tính tuyến tính của $T|_M$ được kế thừa từ $T$. Với mọi $x \in M$, ta có $\|T|_M(x)\|_F = \|Tx\|_F \le \|T\| \|x\|_E$. Lấy supremum trên quả cầu đơn vị của $M$:
> $$\|T|_M\| = \sup_{x \in M,\, \|x\| \le 1} \|Tx\|_F \le \sup_{x \in E,\, \|x\| \le 1} \|Tx\|_F = \|T\|.$$

> [!thm] Mở rộng duy nhất qua Không gian con Trù mật
> Cho $M$ là một không gian con trù mật trong không gian định chuẩn $E$, và $T \in M^*$. Khi đó tồn tại duy nhất một phiếm hàm $S \in E^*$ sao cho $S|_M = T$ và $\|S\|_{E^*} = \|T\|_{M^*}$.

> [!prf]
> **Sự tồn tại:**
> Lấy $x \in E$ bất kỳ. Do $M$ trù mật trong $E$, tồn tại một dãy $(x_n) \subset M$ sao cho $\lim_{n \to \infty} x_n = x$.
> Dãy $(x_n)$ hội tụ nên là một dãy Cauchy trong $E$. Do $T$ liên tục trên $M$:
> $$|T(x_n) - T(x_m)| = |T(x_n - x_m)| \le \|T\|_{M^*} \|x_n - x_m\|.$$
> Suy ra $(T(x_n))$ là một dãy Cauchy trong trường vô hướng $\mathbb{F}$. Vì $\mathbb{F}$ ($\mathbb{R}$ hoặc $\mathbb{C}$) là đầy đủ, tồn tại giới hạn:
> $$S(x) = \lim_{n \to \infty} T(x_n).$$
> Giới hạn này không phụ thuộc vào việc chọn dãy: Nếu $(x'_n) \subset M$ cũng hội tụ về $x$, thì $\|x_n - x'_n\| \to 0$. Khi đó $|T(x_n) - T(x'_n)| \le \|T\|\|x_n - x'_n\| \to 0$, do đó $\lim T(x_n) = \lim T(x'_n)$.
>
> **Tính tuyến tính của $S$:**
> Cho $x, y \in E$ và $\alpha, \beta \in \mathbb{F}$. Chọn $(x_n) \subset M \to x$ và $(y_n) \subset M \to y$. Khi đó $(\alpha x_n + \beta y_n) \subset M \to \alpha x + \beta y$. Do tính tuyến tính của $T$ và giới hạn:
> $$S(\alpha x + \beta y) = \lim_{n\to\infty} T(\alpha x_n + \beta y_n) = \alpha \lim_{n\to\infty} T(x_n) + \beta \lim_{n\to\infty} T(y_n) = \alpha S(x) + \beta S(y).$$
>
> **Bảo toàn chuẩn:**
> Lấy giá trị tuyệt đối qua giới hạn:
> $$|S(x)| = \lim_{n \to \infty} |T(x_n)| \le \lim_{n \to \infty} (\|T\|_{M^*} \|x_n\|) = \|T\|_{M^*} \|x\|.$$
> Do đó $\|S\|_{E^*} \le \|T\|_{M^*}$. Kết hợp với bất đẳng thức của toán tử thu hẹp $\|T\|_{M^*} = \|S|_M\|_{M^*} \le \|S\|_{E^*}$, ta thu được đẳng thức chuẩn $\|S\|_{E^*} = \|T\|_{M^*}$.
>
> **Tính duy nhất:**
> Giả sử tồn tại $S_1, S_2 \in E^*$ đều là mở rộng của $T$. Khi đó phiếm hàm $h = S_1 - S_2 \in E^*$ thỏa mãn $h(m) = 0$ với mọi $m \in M$. Với bất kỳ $x \in E$, chọn $(x_n) \subset M \to x$. Do $h$ liên tục:
> $$h(x) = \lim_{n \to \infty} h(x_n) = \lim_{n \to \infty} 0 = 0.$$
> Suy ra $h \equiv 0$ trên $E$, tức $S_1 = S_2$.

---

## Phần III: Định lý Hahn–Banach (Dạng Đại số)

Khi không gian con $M$ không trù mật, ta xây dựng mở rộng từng bước qua không gian một chiều, sau đó áp dụng Bổ đề Zorn để hoàn tất việc mở rộng lên toàn bộ không gian.

> [!thm] Bổ đề Zorn
> Một tập hợp có thứ tự bộ phận khác rỗng mà mọi tập con có thứ tự toàn phần (xích) đều có một chặn trên thì chứa ít nhất một phần tử cực đại.

> [!thm] Định lý Hahn–Banach (Mở rộng bảo toàn chuẩn trên Không gian Định chuẩn)
> Cho $E$ là một không gian định chuẩn trên trường $\mathbb{F}$ ($\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{C}$), $M$ là một không gian vectơ con của $E$, và $T \in M^*$. Khi đó tồn tại một phiếm hàm $\tilde{T} \in E^*$ sao cho:
> $$\tilde{T}|_M = T \quad \text{và} \quad \|\tilde{T}\|_{E^*} = \|T\|_{M^*}.$$

> [!prf]
> **Trường hợp 1: Không gian thực $\mathbb{F} = \mathbb{R}$.**
>
> *Bước 1: Mở rộng thêm một chiều.*
> Giả sử $M \subsetneq E$. Lấy một vectơ $x_0 \in E \setminus M$. Đặt:
> $$E_1 = M \oplus \mathbb{R}x_0 = \{x + t x_0 \mid x \in M,\ t \in \mathbb{R}\}.$$
> Mỗi phần tử $z \in E_1$ có biểu diễn duy nhất dưới dạng $z = x + t x_0$ với $x \in M, t \in \mathbb{R}$.
> Để xây dựng phiếm hàm tuyến tính $T_1: E_1 \to \mathbb{R}$ thỏa mãn $T_1|_M = T$, ta chỉ cần chọn giá trị $c = T_1(x_0) \in \mathbb{R}$. Khi đó:
> $$T_1(x + t x_0) = T(x) + t c.$$
> Để bảo toàn chuẩn, tức $\|T_1\|_{E_1^*} = \|T\|_{M^*}$, ta cần tìm $c \in \mathbb{R}$ sao cho:
> $$|T(x) + t c| \le \|T\| \|x + t x_0\| \quad \forall x \in M,\ \forall t \in \mathbb{R}.$$
> Trường hợp $t = 0$ bất đẳng thức đúng do tính bị chặn của $T$ trên $M$.
> Xét $t > 0$. Chia hai vế cho $t$ và đặt $x_1 = x / t \in M$:
> $$|T(x_1) + c| \le \|T\| \|x_1 + x_0\|.$$
> Bất đẳng thức trị tuyệt đối này tương đương với:
> $$-\|T\| \|x_1 + x_0\| - T(x_1) \le c \le \|T\| \|x_1 + x_0\| - T(x_1) \quad \forall x_1 \in M.$$
> (Trường hợp $t < 0$ sau khi chia cho $-t > 0$ và đặt biến đổi cũng dẫn về cùng điều kiện trên).
> Điều kiện cần và đủ để tồn tại hằng số $c$ là:
> $$\sup_{x_1 \in M} \left( -\|T\| \|x_1 + x_0\| - T(x_1) \right) \le \inf_{x_2 \in M} \left( \|T\| \|x_2 + x_0\| - T(x_2) \right).$$
> Ta kiểm tra tính tương thích: Với mọi $x_1, x_2 \in M$, do tính tuyến tính của $T$ và bất đẳng thức tam giác của chuẩn:
> $$T(x_2) - T(x_1) = T(x_2 - x_1) \le \|T\| \|x_2 - x_1\| = \|T\| \|(x_2 + x_0) - (x_1 + x_0)\| \le \|T\| \|x_2 + x_0\| + \|T\| \|x_1 + x_0\|.$$
> Chuyển vế:
> $$-\|T\| \|x_1 + x_0\| - T(x_1) \le \|T\| \|x_2 + x_0\| - T(x_2).$$
> Vì bất đẳng thức này đúng với mọi cặp $x_1, x_2 \in M$, supremum của vế trái bé hơn hoặc bằng infimum của vế phải. Do đó tồn tại hằng số $c \in \mathbb{R}$ nằm giữa hai giá trị. Với việc chọn hằng số $c$ này, phiếm hàm $T_1$ được xác định trên $E_1$ thỏa mãn $T_1|_M = T$ và $\|T_1\|_{E_1^*} = \|T\|_{M^*}$.
>
> *Bước 2: Mở rộng cực đại qua Bổ đề Zorn.*
> Xét tập hợp $\mathcal{P}$ gồm tất cả các cặp $(N, S)$, trong đó $N$ là không gian vectơ con của $E$ chứa $M$, và $S: N \to \mathbb{R}$ là phiếm hàm tuyến tính thỏa mãn $S|_M = T$ và $\|S\|_{N^*} = \|T\|_{M^*}$.
> Tập $\mathcal{P}$ khác rỗng vì $(M, T) \in \mathcal{P}$.
> Định nghĩa một thứ tự bộ phận $\le$ trên $\mathcal{P}$:
> $$(N_1, S_1) \le (N_2, S_2) \iff N_1 \subset N_2 \quad \text{và} \quad S_2|_{N_1} = S_1.$$
> Giả sử $\mathcal{C} = \{(N_i, S_i)\}_{i \in I}$ là một xích (tập con có thứ tự toàn phần) trong $\mathcal{P}$.
> Đặt $N_\infty = \bigcup_{i \in I} N_i$. Vì $\mathcal{C}$ có thứ tự toàn phần, $N_\infty$ là một không gian con của $E$.
> Định nghĩa ánh xạ $S_\infty: N_\infty \to \mathbb{R}$ như sau: Với mỗi $x \in N_\infty$, tồn tại $i \in I$ sao cho $x \in N_i$; đặt $S_\infty(x) = S_i(x)$.
> Giá trị này không phụ thuộc vào chỉ số $i$ được chọn: nếu $x \in N_i$ và $x \in N_j$, do $\mathcal{C}$ có thứ tự toàn phần, giả sử $(N_i, S_i) \le (N_j, S_j)$, ta có $N_i \subset N_j$ và $S_j|_{N_i} = S_i$, do đó $S_j(x) = S_i(x)$.
> Dễ thấy $S_\infty$ tuyến tính trên $N_\infty$, $S_\infty|_M = T$, và với mọi $x \in N_\infty$:
> $$|S_\infty(x)| = |S_i(x)| \le \|S_i\|_{N_i^*} \|x\| = \|T\|_{M^*} \|x\|.$$
> Do đó $\|S_\infty\|_{N_\infty^*} = \|T\|_{M^*}$. Cặp $(N_\infty, S_\infty) \in \mathcal{P}$ chính là một chặn trên của xích $\mathcal{C}$.
>
> Theo Bổ đề Zorn, $\mathcal{P}$ có ít nhất một phần tử cực đại $(\tilde{E}, \tilde{T})$.
> Nếu $\tilde{E} \subsetneq E$, theo Bước 1, ta có thể mở rộng $\tilde{T}$ lên một không gian con lớn hơn $\tilde{E}_1 = \tilde{E} \oplus \mathbb{R}x_0$ mà vẫn bảo toàn chuẩn, mâu thuẫn với tính cực đại của $(\tilde{E}, \tilde{T})$.
> Vậy bắt buộc $\tilde{E} = E$, và $\tilde{T}$ là phiếm hàm trên $E$ thỏa mãn $\tilde{T}|_M = T$ cùng $\|\tilde{T}\|_{E^*} = \|T\|_{M^*}$.
>
> **Trường hợp 2: Không gian phức $\mathbb{F} = \mathbb{C}$.**
>
> Xem $E$ và $M$ như các không gian vectơ trên trường thực $\mathbb{R}$, ký hiệu là $E_\mathbb{R}$ và $M_\mathbb{R}$.
> Đặt $u(x) = \operatorname{Re}(T(x))$ với mọi $x \in M$. Khi đó $u: M_\mathbb{R} \to \mathbb{R}$ là phiếm hàm tuyến tính thực.
> Từ tính chất tuyến tính phức $T(ix) = iT(x)$, ta có:
> $$\operatorname{Re}(T(ix)) + i\operatorname{Im}(T(ix)) = i(\operatorname{Re}(T(x)) + i\operatorname{Im}(T(x))) = -\operatorname{Im}(T(x)) + i\operatorname{Re}(T(x)).$$
> So sánh phần thực hai vế: $\operatorname{Im}(T(x)) = -\operatorname{Re}(T(ix)) = -u(ix)$.
> Do đó phiếm hàm $T$ được hoàn nguyên từ phần thực:
> $$T(x) = u(x) - i u(ix) \quad \forall x \in M.$$
>
> *Đẳng thức chuẩn giữa $T$ và $u$:*
> Với mọi $x \in M$, $|u(x)| = |\operatorname{Re}(T(x))| \le |T(x)| \le \|T\|\|x\|$, do đó $\|u\| \le \|T\|$.
> Ngược lại, với $x \in M$ cố định sao cho $T(x) \ne 0$, đặt $\theta = \arg(T(x))$. Khi đó $e^{-i\theta}T(x) = |T(x)| \in \mathbb{R}$.
> Theo tính tuyến tính phức của $T$:
> $$|T(x)| = e^{-i\theta} T(x) = T(e^{-i\theta} x) = \operatorname{Re}(T(e^{-i\theta} x)) = u(e^{-i\theta} x) \le \|u\| \|e^{-i\theta} x\| = \|u\| \|x\|.$$
> Bất đẳng thức này đúng với mọi $x \in M$, suy ra $\|T\| \le \|u\|$. Vậy $\|u\|_{M_\mathbb{R}^*} = \|T\|_{M^*}$.
>
> Áp dụng định lý cho trường hợp thực, tồn tại phiếm hàm tuyến tính thực $\tilde{u}: E_\mathbb{R} \to \mathbb{R}$ sao cho $\tilde{u}|_M = u$ và $\|\tilde{u}\|_{E_\mathbb{R}^*} = \|u\|_{M_\mathbb{R}^*}$.
> Định nghĩa phiếm hàm trên $E$:
> $$\tilde{T}(x) = \tilde{u}(x) - i \tilde{u}(ix) \quad \forall x \in E.$$
>
> Kiểm tra các điều kiện:
> 1. Tính tuyến tính phức: $\tilde{T}$ cộng tính hiển nhiên. Với phép nhân vô hướng phức:
> $$\tilde{T}(ix) = \tilde{u}(ix) - i\tilde{u}(i^2 x) = \tilde{u}(ix) + i\tilde{u}(x) = i(\tilde{u}(x) - i\tilde{u}(ix)) = i\tilde{T}(x).$$
> Do đó $\tilde{T}$ tuyến tính trên trường $\mathbb{C}$.
> 2. Tính mở rộng: Với $x \in M$, $\tilde{T}(x) = u(x) - iu(ix) = T(x)$. Vậy $\tilde{T}|_M = T$.
> 3. Bảo toàn chuẩn: Áp dụng cùng đánh giá pha xoay ở trên, với mọi $x \in E$, tồn tại $\alpha \in \mathbb{C}, |\alpha| = 1$ sao cho $|\tilde{T}(x)| = \alpha \tilde{T}(x) = \tilde{T}(\alpha x) = \tilde{u}(\alpha x) \le \|\tilde{u}\| \|\alpha x\| = \|\tilde{u}\| \|x\|$. Suy ra $\|\tilde{T}\| \le \|\tilde{u}\| = \|u\| = \|T\|$. Mặt khác do tính thu hẹp $\|\tilde{T}\| \ge \|T\|$, ta kết luận $\|\tilde{T}\|_{E^*} = \|T\|_{M^*}$.

---

## Phần IV: Các Hệ quả Hình học của Định lý Hahn–Banach

Các hệ quả sau đây chứng minh rằng không gian đối ngẫu $E^*$ chứa đủ số lượng phiếm hàm để xác định khoảng cách và tách biệt các phần tử trong $E$.

> [!cor] Hệ quả 1: Sự tồn tại của Siêu phẳng tựa tại một điểm
> Cho $E$ là không gian định chuẩn và $x_0 \in E \setminus \{0\}$. Khi đó tồn tại $f \in E^*$ sao cho:
> $$\|f\| = 1 \quad \text{và} \quad f(x_0) = \|x_0\|.$$

> [!prf]
> Xét không gian con một chiều $M = \mathbb{F}x_0 = \{\alpha x_0 \mid \alpha \in \mathbb{F}\}$.
> Định nghĩa phiếm hàm tuyến tính $g: M \to \mathbb{F}$ bởi:
> $$g(\alpha x_0) = \alpha \|x_0\|.$$
> Ta có $g(x_0) = \|x_0\|$. Chuẩn của $g$ trên $M$ là:
> $$\|g\|_{M^*} = \sup_{\alpha \ne 0} \frac{|g(\alpha x_0)|}{\|\alpha x_0\|} = \sup_{\alpha \ne 0} \frac{|\alpha| \|x_0\|}{|\alpha| \|x_0\|} = 1.$$
> Theo Định lý Hahn–Banach, tồn tại $f \in E^*$ sao cho $f|_M = g$ và $\|f\|_{E^*} = \|g\|_{M^*} = 1$.
> Khi đó $f(x_0) = g(x_0) = \|x_0\|$ và $\|f\| = 1$.

> [!cor] Hệ quả 2: Phân tách hai điểm phân biệt
> Cho $E$ là không gian định chuẩn. Nếu $x, y \in E$ với $x \ne y$, thì tồn tại $f \in E^*$ sao cho $f(x) \ne f(y)$.

> [!prf]
> Đặt $x_0 = x - y$. Do $x \ne y$, ta có $x_0 \ne 0$.
> Theo Hệ quả 1, tồn tại $f \in E^*$ sao cho $f(x_0) = \|x_0\| \ne 0$.
> Do tính tuyến tính của $f$:
> $$f(x) - f(y) = f(x - y) = f(x_0) = \|x_0\| \ne 0 \implies f(x) \ne f(y).$$

> [!cor] Hệ quả 3: Biểu diễn chuẩn qua Không gian đối ngẫu
> Với mọi $x \in E$, ta có:
> $$\|x\| = \sup_{f \in E^*,\, \|f\| \le 1} |f(x)| = \max_{f \in E^*,\, \|f\| = 1} |f(x)|.$$

> [!prf]
> Nếu $x = 0$, đẳng thức hiển nhiên đúng.
> Xét $x \ne 0$. Với mọi $f \in E^*$ thỏa mãn $\|f\| \le 1$:
> $$|f(x)| \le \|f\| \|x\| \le \|x\| \implies \sup_{f \in E^*,\, \|f\| \le 1} |f(x)| \le \|x\|.$$
> Ngược lại, theo Hệ quả 1, tồn tại $f_0 \in E^*$ với $\|f_0\| = 1$ sao cho $f_0(x) = \|x\|$.
> Do đó:
> $$\|x\| = f_0(x) \le \sup_{f \in E^*,\, \|f\| \le 1} |f(x)|.$$
> Hai bất đẳng thức chứng minh supremum bằng $\|x\|$ và đạt được cực đại tại $f_0$.

> [!cor] Hệ quả 4: Triệt tiêu trên Không gian con
> Cho $M$ là một không gian vectơ con của $E$ và $x_0 \in E$ thỏa mãn $d = d(x_0, M) = \inf_{m \in M} \|x_0 - m\| > 0$. Khi đó tồn tại $f \in E^*$ sao cho:
> $$\|f\| = 1, \quad f|_M \equiv 0, \quad \text{và} \quad f(x_0) = d.$$

> [!prf]
> Xét không gian con $M_1 = M \oplus \mathbb{F}x_0 = \{m + t x_0 \mid m \in M,\ t \in \mathbb{F}\}$.
> Định nghĩa phiếm hàm $g: M_1 \to \mathbb{F}$ bởi:
> $$g(m + t x_0) = t \cdot d.$$
> Dễ thấy $g|_M = 0$ (ứng với $t = 0$) và $g(x_0) = d$ (ứng với $m = 0, t = 1$).
> Ta tính chuẩn của $g$ trên $M_1$: Với $t \ne 0$, đặt $m' = -m/t \in M$:
> $$\|m + t x_0\| = |t| \left\| x_0 - \left(-\frac{m}{t}\right) \right\| = |t| \|x_0 - m'\| \ge |t| d = |g(m + tx_0)|.$$
> Do đó $|g(z)| \le \|z\|$ với mọi $z \in M_1$, suy ra $\|g\|_{M_1^*} \le 1$.
> Mặt khác, theo định nghĩa của $d$, tồn tại dãy $(m_n) \subset M$ sao cho $\|x_0 - m_n\| \to d$. Đặt $z_n = x_0 - m_n \in M_1$. Khi đó $g(z_n) = g(x_0) - g(m_n) = d$. Ta có:
> $$\|g\|_{M_1^*} \ge \lim_{n\to\infty} \frac{|g(z_n)|}{\|z_n\|} = \lim_{n\to\infty} \frac{d}{\|x_0 - m_n\|} = \frac{d}{d} = 1.$$
> Vậy $\|g\|_{M_1^*} = 1$. Mở rộng $g$ lên $E$ nhờ Hahn–Banach, ta thu được phiếm hàm $f \in E^*$ thỏa mãn yêu cầu.

---

## Phần V: Không gian Hilbert và Cấu trúc Hình học Euclid

### 5.1 Tích trong và các Đẳng thức Căn bản

> [!def] Tích trong và Không gian Hilbert
> Cho $H$ là một không gian vectơ trên $\mathbb{F}$ ($\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{C}$). Một **tích trong** trên $H$ là ánh xạ $\langle \cdot, \cdot \rangle: H \times H \to \mathbb{F}$ thỏa mãn các tiên đề:
> 1. Tuyến tính theo biến thứ nhất: $\langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle$;
> 2. Đối xứng liên hợp: $\langle x, y \rangle = \overline{\langle y, x \rangle}$;
> 3. Xác định dương: $\langle x, x \rangle \ge 0$ với mọi $x \in H$, và $\langle x, x \rangle = 0 \iff x = 0$.
>
> Chuẩn cảm sinh bởi tích trong được xác định bởi $\|x\| = \sqrt{\langle x, x \rangle}$. Nếu $H$ đầy đủ đối với chuẩn này, $H$ được gọi là một **không gian Hilbert**.

> [!prp] Tính chất trực giao và độ dài đường chéo
> Cho $H$ là một không gian tích trong và $x, y \in H$. Nếu $x \perp y$ (tức $\langle x, y \rangle = 0$), thì:
> $$\|x + y\| = \|x - y\|.$$

> [!prf]
> Vì $\langle x, y \rangle = 0$, ta cũng có $\langle y, x \rangle = \overline{\langle x, y \rangle} = 0$. Khai triển bình phương chuẩn:
> $$\|x + y\|^2 = \langle x+y, x+y \rangle = \langle x, x \rangle + \langle x, y \rangle + \langle y, x \rangle + \langle y, y \rangle = \|x\|^2 + \|y\|^2.$$
> Tương tự:
> $$\|x - y\|^2 = \langle x-y, x-y \rangle = \langle x, x \rangle - \langle x, y \rangle - \langle y, x \rangle + \langle y, y \rangle = \|x\|^2 + \|y\|^2.$$
> Suy ra $\|x + y\|^2 = \|x - y\|^2$. Lấy căn bậc hai hai vế, ta được $\|x + y\| = \|x - y\|$.

> [!prp] Đẳng thức phân cực (Polarization Identity)
> Cho $H$ là một không gian tích trong thực. Tích trong được tính hoàn toàn thông qua chuẩn:
> $$\langle x, y \rangle = \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 \right) \quad \forall x, y \in H.$$
> Nếu $H$ là không gian tích trong phức:
> $$\langle x, y \rangle = \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 + i\|x + iy\|^2 - i\|x - iy\|^2 \right) \quad \forall x, y \in H.$$

> [!prf]
> Ta chứng minh cho trường hợp thực: Khai triển vế phải:
> $$\|x + y\|^2 = \|x\|^2 + 2\langle x, y \rangle + \|y\|^2,$$
> $$\|x - y\|^2 = \|x\|^2 - 2\langle x, y \rangle + \|y\|^2.$$
> Trừ vế với vế:
> $$\|x + y\|^2 - \|x - y\|^2 = 4\langle x, y \rangle.$$
> Chia hai vế cho 4, ta thu được đẳng thức cần chứng minh. Trường hợp phức được chứng minh bằng cách khai triển tương tự với lưu ý $\langle x, iy \rangle = -i\langle x, y \rangle$ và $\langle ix, y \rangle = i\langle x, y \rangle$.

> [!prp] Đẳng thức hình bình hành (Tiêu chuẩn Jordan–von Neumann)
> Một chuẩn $\|\cdot\|$ trên không gian định chuẩn $H$ được cảm sinh từ một tích trong khi và chỉ khi nó thỏa mãn đẳng thức hình bình hành:
> $$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2 \quad \forall x, y \in H.$$

> [!prf]
> *Chiều thuận ($\implies$):* Nếu chuẩn được sinh bởi tích trong, áp dụng khai triển chuẩn:
> $$\|x + y\|^2 = \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2,$$
> $$\|x - y\|^2 = \|x\|^2 - \langle x, y \rangle - \langle y, x \rangle + \|y\|^2.$$
> Cộng hai đẳng thức lại, các số hạng $\langle x, y \rangle$ và $\langle y, x \rangle$ triệt tiêu, cho ta vế phải $2\|x\|^2 + 2\|y\|^2$.
>
> *Chiều nghịch ($\impliedby$):* Định nghĩa hàm $\langle \cdot, \cdot \rangle$ qua Đẳng thức phân cực. Việc kiểm tra các tiên đề tích trong (tính cộng tính, thuần nhất trên $\mathbb{Q}$ rồi mở rộng sang $\mathbb{R}$ nhờ tính liên tục) được thực hiện trực tiếp dựa trên đẳng thức hình bình hành.

> [!exm] Không gian $L^p(\mathbb{R})$ với $p \ne 2$ không phải là không gian Hilbert
> Xét không gian $L^p(\mathbb{R})$ ($1 \le p < \infty$). Chọn hai hàm đặc trưng $f_1 = \chi_{[0, 1)}$ và $f_2 = \chi_{[1, 2)}$.
> Ta tính chuẩn của các hàm này:
> $$\|f_1\|_p = \left( \int_0^1 1^p dx \right)^{1/p} = 1 \implies \|f_1\|_p^2 = 1,$$
> $$\|f_2\|_p = \left( \int_1^2 1^p dx \right)^{1/p} = 1 \implies \|f_2\|_p^2 = 1.$$
> Do đó vế trái của đẳng thức hình bình hành là:
> $$2\|f_1\|_p^2 + 2\|f_2\|_p^2 = 2(1) + 2(1) = 4.$$
> Mặt khác, vì $f_1$ và $f_2$ có giá mang rời nhau:
> $$|f_1(x) + f_2(x)| = |f_1(x) - f_2(x)| = \chi_{[0, 2)}(x).$$
> Do đó:
> $$\|f_1 + f_2\|_p = \|f_1 - f_2\|_p = \left( \int_0^2 1 dx \right)^{1/p} = 2^{1/p} \implies \|f_1 \pm f_2\|_p^2 = 2^{2/p}.$$
> Vế phải của đẳng thức hình bình hành là:
> $$\|f_1 + f_2\|_p^2 + \|f_1 - f_2\|_p^2 = 2^{2/p} + 2^{2/p} = 2^{1 + 2/p}.$$
> Để đẳng thức hình bình hành nghiệm đúng:
> $$4 = 2^{1 + 2/p} \iff 2^2 = 2^{1 + 2/p} \iff 2 = 1 + \frac{2}{p} \iff p = 2.$$
> Do đó, với mọi $p \ne 2$, chuẩn của $L^p(\mathbb{R})$ không thỏa mãn đẳng thức hình bình hành, nên $L^p(\mathbb{R})$ không thể trang bị cấu trúc không gian Hilbert.

### 5.2 Bất đẳng thức Cauchy–Schwarz

> [!thm] Bất đẳng thức Cauchy–Schwarz
> Cho $H$ là không gian tích trong. Với mọi $x, y \in H$:
> $$|\langle x, y \rangle| \le \|x\| \|y\|.$$
> Đẳng thức xảy ra khi và chỉ khi $x$ và $y$ phụ thuộc tuyến tính.

> [!prf]
> Nếu $y = 0$, hai vế đều bằng 0, bất đẳng thức đúng hiển nhiên.
> Giả sử $y \ne 0$. Đặt $\alpha = \frac{\langle x, y \rangle}{\|y\|^2}$. Xét vectơ dư $z = x - \alpha y$. Theo tiên đề xác định dương:
> $$0 \le \|z\|^2 = \langle x - \alpha y, x - \alpha y \rangle = \langle x, x \rangle - \bar\alpha \langle x, y \rangle - \alpha \langle y, x \rangle + |\alpha|^2 \langle y, y \rangle.$$
> Thay $\alpha = \frac{\langle x, y \rangle}{\|y\|^2}$ và lưu ý $\langle y, x \rangle = \overline{\langle x, y \rangle}$:
> $$0 \le \|x\|^2 - \frac{\overline{\langle x, y \rangle} \langle x, y \rangle}{\|y\|^2} - \frac{\langle x, y \rangle \overline{\langle x, y \rangle}}{\|y\|^2} + \frac{|\langle x, y \rangle|^2}{\|y\|^4} \|y\|^2 = \|x\|^2 - \frac{|\langle x, y \rangle|^2}{\|y\|^2}.$$
> Nhân hai vế với $\|y\|^2 > 0$:
> $$|\langle x, y \rangle|^2 \le \|x\|^2 \|y\|^2.$$
> Lấy căn bậc hai hai vế, ta được $|\langle x, y \rangle| \le \|x\| \|y\|$.
> Đẳng thức xảy ra khi và chỉ khi $\|z\|^2 = 0 \iff z = 0 \iff x = \alpha y$, tức $x$ và $y$ phụ thuộc tuyến tính.

> [!prp] Tính liên tục của Tích trong
> Ánh xạ tích trong liên tục theo từng biến. Đặc biệt, với mỗi $y \in H$ cố định, ánh xạ $f_y(x) = \langle x, y \rangle$ là một phiếm hàm tuyến tính liên tục trên $H$ với chuẩn:
> $$\|f_y\|_{H^*} = \|y\|_H.$$

> [!prf]
> Tính tuyến tính của $f_y$ suy ra trực tiếp từ tiên đề tích trong: $f_y(\alpha x_1 + \beta x_2) = \langle \alpha x_1 + \beta x_2, y \rangle = \alpha \langle x_1, y \rangle + \beta \langle x_2, y \rangle = \alpha f_y(x_1) + \beta f_y(x_2)$.
> Theo bất đẳng thức Cauchy–Schwarz:
> $$|f_y(x)| = |\langle x, y \rangle| \le \|y\| \|x\| \quad \forall x \in H.$$
> Do đó $f_y$ bị chặn và $\|f_y\|_{H^*} \le \|y\|$.
> Nếu $y = 0$, hiển nhiên $\|f_y\| = 0 = \|y\|$.
> Nếu $y \ne 0$, chọn $x_0 = y$. Khi đó:
> $$\|f_y\|_{H^*} \ge \frac{|f_y(y)|}{\|y\|} = \frac{\langle y, y \rangle}{\|y\|} = \frac{\|y\|^2}{\|y\|} = \|y\|.$$
> Kết hợp hai chiều đánh giá, ta có $\|f_y\|_{H^*} = \|y\|$.

### 5.3 Phép chiếu vuông góc và Phân tích trực giao

> [!thm] Định lý Hình chiếu Vuông góc
> Cho $M$ là một không gian vectơ con **đóng** trong không gian Hilbert $H$. Với mọi $x \in H$, tồn tại duy nhất một phần tử $y \in M$ sao cho:
> $$\|x - y\| = \inf_{m \in M} \|x - m\| = d(x, M).$$
> Hơn nữa, phần tử $y$ này được đặc trưng bởi điều kiện trực giao:
> $$(x - y) \perp M \iff \langle x - y, m \rangle = 0 \quad \forall m \in M.$$
> Phần tử $y$ được ký hiệu là $P_M x$ (hình chiếu vuông góc của $x$ lên $M$).

> [!prf]
> **Sự tồn tại của $y$:**
> Đặt $d = \inf_{m \in M} \|x - m\|$. Theo định nghĩa infimum, tồn tại một dãy $(y_n) \subset M$ sao cho:
> $$\lim_{n \to \infty} \|x - y_n\| = d.$$
> Áp dụng đẳng thức hình bình hành cho hai vectơ $u = x - y_n$ và $v = x - y_m$:
> $$\|(x - y_n) + (x - y_m)\|^2 + \|(x - y_n) - (x - y_m)\|^2 = 2\|x - y_n\|^2 + 2\|x - y_m\|^2,$$
> hay:
> $$\|2x - (y_n + y_m)\|^2 + \|y_m - y_n\|^2 = 2\|x - y_n\|^2 + 2\|x - y_m\|^2.$$
> Chia cho 4 và sắp xếp lại:
> $$\|y_m - y_n\|^2 = 2\|x - y_n\|^2 + 2\|x - y_m\|^2 - 4 \left\| x - \frac{y_n + y_m}{2} \right\|^2.$$
> Vì $M$ là không gian vectơ con, $\frac{y_n + y_m}{2} \in M$, do đó $\left\| x - \frac{y_n + y_m}{2} \right\| \ge d$. Suy ra:
> $$\|y_m - y_n\|^2 \le 2\|x - y_n\|^2 + 2\|x - y_m\|^2 - 4d^2.$$
> Cho $n, m \to \infty$, vế phải tiến về $2d^2 + 2d^2 - 4d^2 = 0$.
> Do đó $(y_n)$ là một dãy Cauchy trong $M$. Vì $H$ đầy đủ và $M$ đóng, $M$ là đầy đủ, nên tồn tại $y \in M$ sao cho $y_n \to y$.
> Do chuẩn liên tục, $\|x - y\| = \lim_{n \to \infty} \|x - y_n\| = d$.
>
> **Đặc trưng trực giao:**
> Ta chứng minh $\|x - y\| = d \iff (x - y) \perp M$.
> $(\implies)$ Giả sử $\|x - y\| \le \|x - m\|$ với mọi $m \in M$. Với bất kỳ $w \in M$ và $t \in \mathbb{R}$, ta có $y + tw \in M$. Đặt $\phi(t) = \|x - (y + tw)\|^2$:
> $$\phi(t) = \langle (x - y) - tw, (x - y) - tw \rangle = \|x - y\|^2 - 2t \operatorname{Re}\langle x - y, w \rangle + t^2 \|w\|^2.$$
> Hàm $\phi(t)$ đạt cực tiểu tại $t = 0$. Do đó đạo hàm $\phi'(0) = 0$, kéo theo:
> $$-2 \operatorname{Re}\langle x - y, w \rangle = 0 \implies \operatorname{Re}\langle x - y, w \rangle = 0.$$
> Nếu trường vô hướng là $\mathbb{C}$, thay $w$ bởi $iw \in M$, ta có $\operatorname{Re}\langle x - y, iw \rangle = \operatorname{Im}\langle x - y, w \rangle = 0$.
> Vậy $\langle x - y, w \rangle = 0$ với mọi $w \in M$, tức $(x - y) \perp M$.
> 
> $(\impliedby)$ Giả sử $(x - y) \perp M$. Với mọi $m \in M$, viết $x - m = (x - y) + (y - m)$. Do $y - m \in M$, ta có $(x - y) \perp (y - m)$. Áp dụng định lý Pythagore:
> $$\|x - m\|^2 = \|(x - y) + (y - m)\|^2 = \|x - y\|^2 + \|y - m\|^2 \ge \|x - y\|^2.$$
> Do đó $\|x - y\| \le \|x - m\|$ với mọi $m \in M$.
>
> **Tính duy nhất:**
> Giả sử tồn tại $y_1, y_2 \in M$ đều thỏa mãn tính chất khoảng cách cực tiểu. Theo chứng minh trên:
> $$(x - y_1) \perp M \quad \text{và} \quad (x - y_2) \perp M.$$
> Trừ hai hệ thức: $(y_2 - y_1) \perp M$.
> Mặt khác $y_2 - y_1 \in M$ vì $M$ là không gian vectơ con. Do đó:
> $$\langle y_2 - y_1, y_2 - y_1 \rangle = 0 \implies \|y_2 - y_1\|^2 = 0 \implies y_1 = y_2.$$

> [!cor] Định lý Phân tích Trực giao
> Cho $M$ là không gian con đóng của không gian Hilbert $H$. Khi đó:
> $$H = M \oplus M^\perp.$$
> Nghĩa là mọi vectơ $x \in H$ được phân tích duy nhất dưới dạng:
> $$x = y + z, \quad y \in M,\ z \in M^\perp.$$
> Trong đó $y = P_M x$ và $z = P_{M^\perp} x$. Đồng thời thỏa mãn đẳng thức Pythagore:
> $$\|x\|^2 = \|P_M x\|^2 + \|P_{M^\perp} x\|^2.$$

> [!prf]
> *Sự tồn tại:* Với $x \in H$, theo Định lý hình chiếu vuông góc, tồn tại $y = P_M x \in M$ sao cho $z = x - y \perp M$. Theo định nghĩa của phần bù trực giao $M^\perp = \{v \in H \mid \langle v, m \rangle = 0\ \forall m \in M\}$, ta có $z \in M^\perp$. Ta có $x = y + z$.
>
> *Tính duy nhất:* Giả sử có hai phân tích $x = y_1 + z_1 = y_2 + z_2$ với $y_1, y_2 \in M$ và $z_1, z_2 \in M^\perp$. Khi đó:
> $$y_1 - y_2 = z_2 - z_1.$$
> Vectơ bên trái thuộc $M$ (do $M$ là không gian con), vectơ bên phải thuộc $M^\perp$ (do $M^\perp$ là không gian con).
> Do đó $y_1 - y_2 \in M \cap M^\perp$.
> Theo định nghĩa trực giao, $\langle y_1 - y_2, y_1 - y_2 \rangle = 0 \implies \|y_1 - y_2\|^2 = 0 \implies y_1 = y_2$, kéo theo $z_1 = z_2$.
>
> *Đẳng thức chuẩn:* Do $y \perp z$, khai triển tích trong:
> $$\|x\|^2 = \langle y + z, y + z \rangle = \|y\|^2 + \langle y, z \rangle + \langle z, y \rangle + \|z\|^2 = \|y\|^2 + \|z\|^2 = \|P_M x\|^2 + \|P_{M^\perp} x\|^2.$$

---

## Phần VI: Định lý Biểu diễn Riesz

### 6.1 Cấu trúc đại số và tô pô của Hạt nhân

> [!prp] Tính chất đối chiều của Hạt nhân
> Cho $f$ là một phiếm hàm tuyến tính không tầm thường ($f \not\equiv 0$) trên không gian định chuẩn $E$. Khi đó hạt nhân $\ker(f) = \{x \in E \mid f(x) = 0\}$ là một không gian vectơ con có đối chiều bằng 1 (codimension 1). Nghĩa là với mọi $x_0 \notin \ker(f)$, ta có:
> $$E = \ker(f) \oplus \mathbb{F}x_0.$$

> [!prf]
> Tính không gian con của $\ker(f)$ suy ra từ tính tuyến tính của $f$: nếu $u, v \in \ker(f)$ và $\alpha, \beta \in \mathbb{F}$ thì $f(\alpha u + \beta v) = \alpha f(u) + \beta f(v) = 0$, nên $\alpha u + \beta v \in \ker(f)$.
> Cho $x_0 \in E \setminus \ker(f)$, tức $f(x_0) \ne 0$.
> Với mọi $x \in E$, ta phân tích:
> $$x = \left( x - \frac{f(x)}{f(x_0)} x_0 \right) + \frac{f(x)}{f(x_0)} x_0.$$
> Đặt $u = x - \frac{f(x)}{f(x_0)} x_0$. Tác động phiếm hàm $f$ lên $u$:
> $$f(u) = f(x) - \frac{f(x)}{f(x_0)} f(x_0) = f(x) - f(x) = 0 \implies u \in \ker(f).$$
> Phần tử thứ hai $\frac{f(x)}{f(x_0)} x_0 \in \mathbb{F}x_0$. Do đó $E = \ker(f) + \mathbb{F}x_0$.
> Giả sử $z \in \ker(f) \cap \mathbb{F}x_0$. Khi đó $z = t x_0$ với $t \in \mathbb{F}$. Vì $z \in \ker(f)$, ta có $f(z) = t f(x_0) = 0$. Vì $f(x_0) \ne 0$, suy ra $t = 0$, dẫn đến $z = 0$.
> Vậy tổng là tổng trực tiếp: $E = \ker(f) \oplus \mathbb{F}x_0$.

> [!prp] Tính tương đương giữa Tính liên tục và Hạt nhân đóng
> Cho $f$ là phiếm hàm tuyến tính trên không gian định chuẩn $E$. Phiếm hàm $f$ liên tục khi và chỉ khi $\ker(f)$ là một tập con đóng trong $E$.

> [!prf]
> *Chiều thuận ($\implies$):* Nếu $f$ liên tục, vì $\{0\}$ là tập đóng trong $\mathbb{F}$, tập nghịch ảnh $\ker(f) = f^{-1}(\{0\})$ là tập đóng trong $E$.
>
> *Chiều nghịch ($\impliedby$):* Nếu $f \equiv 0$, hiển nhiên $f$ liên tục.
> Xét $f \not\equiv 0$ và giả sử $\ker(f)$ đóng. Khi đó phần bù $E \setminus \ker(f)$ là tập mở.
> Chọn $x_0 \notin \ker(f)$. Tồn tại $r > 0$ sao cho quả cầu mở $B(x_0, r) \subset E \setminus \ker(f)$.
> Bằng phép phản chứng hoặc định giá khoảng cách: Khoảng cách $\delta = d(x_0, \ker(f)) \ge r > 0$.
> Với bất kỳ $y \in E$ thỏa mãn $f(y) \ne 0$, xét vectơ:
> $$z = x_0 - \frac{f(x_0)}{f(y)} y.$$
> Ta kiểm tra $f(z) = f(x_0) - \frac{f(x_0)}{f(y)}f(y) = 0 \implies z \in \ker(f)$.
> Theo định nghĩa khoảng cách từ $x_0$ đến $\ker(f)$:
> $$\delta \le \|x_0 - z\| = \left\| \frac{f(x_0)}{f(y)} y \right\| = \frac{|f(x_0)|}{|f(y)|} \|y\|.$$
> Chuyển vế:
> $$|f(y)| \le \frac{|f(x_0)|}{\delta} \|y\|.$$
> Bất đẳng thức này đúng với mọi $y$ có $f(y) \ne 0$, và đúng hiển nhiên khi $f(y) = 0$.
> Đặt $C = \frac{|f(x_0)|}{\delta} < \infty$, ta có $|f(y)| \le C\|y\|$ với mọi $y \in E$. Do đó $f$ bị chặn, tương đương với $f$ liên tục.

> [!prp] Khoảng cách từ một điểm đến Hạt nhân
> Cho $f \in E^* \setminus \{0\}$. Với mọi $x_0 \in E$:
> $$d(x_0, \ker(f)) = \frac{|f(x_0)|}{\|f\|}.$$

> [!prf]
> **Đánh giá chặn dưới:** Với mọi $z \in \ker(f)$, ta có $f(z) = 0$. Do tính liên tục của $f$:
> $$|f(x_0)| = |f(x_0 - z)| \le \|f\| \|x_0 - z\|.$$
> Do $f \ne 0$, $\|f\| > 0$. Chia cho $\|f\|$:
> $$\|x_0 - z\| \ge \frac{|f(x_0)|}{\|f\|} \quad \forall z \in \ker(f).$$
> Lấy infimum theo $z \in \ker(f)$, ta được:
> $$d(x_0, \ker(f)) \ge \frac{|f(x_0)|}{\|f\|}.$$
>
> **Đánh giá chặn trên:** Nếu $x_0 \in \ker(f)$, cả hai vế đều bằng 0. Xét $x_0 \notin \ker(f)$.
> Theo định nghĩa của chuẩn toán tử, với mọi $\varepsilon > 0$, tồn tại $v \in E$ với $\|v\| = 1$ sao cho $|f(v)| > \|f\| - \varepsilon$.
> Đặt $z_0 = x_0 - \frac{f(x_0)}{f(v)} v$. Dễ thấy $f(z_0) = 0 \implies z_0 \in \ker(f)$.
> Do đó:
> $$d(x_0, \ker(f)) \le \|x_0 - z_0\| = \left\| \frac{f(x_0)}{f(v)} v \right\| = \frac{|f(x_0)|}{|f(v)|} \|v\| = \frac{|f(x_0)|}{|f(v)|} < \frac{|f(x_0)|}{\|f\| - \varepsilon}.$$
> Cho $\varepsilon \to 0^+$, ta nhận được:
> $$d(x_0, \ker(f)) \le \frac{|f(x_0)|}{\|f\|}.$$
> Kết hợp hai đánh giá, ta có đẳng thức cần chứng minh.

### 6.2 Phát biểu và Chứng minh Định lý Biểu diễn Riesz

> [!thm] Định lý Biểu diễn Riesz (Fréchet–Riesz)
> Cho $H$ là một không gian Hilbert. Với mọi phiếm hàm tuyến tính liên tục $f \in H^*$, tồn tại **duy nhất** một vectơ $y \in H$ sao cho:
> $$f(x) = \langle x, y \rangle \quad \forall x \in H.$$
> Hơn nữa, chuẩn của phiếm hàm bằng chuẩn của vectơ biểu diễn:
> $$\|f\|_{H^*} = \|y\|_H.$$
> Nếu $f \not\equiv 0$, vectơ $y$ sinh ra phần bù trực giao của hạt nhân:
> $$\ker(f)^\perp = \mathbb{F}y.$$

> [!prf]
> **Trường hợp 1:** Nếu $f \equiv 0$, chọn $y = 0$. Khi đó $f(x) = \langle x, 0 \rangle = 0$ và $\|f\| = \|y\| = 0$. Tính duy nhất: nếu $\langle x, y' \rangle = 0$ với mọi $x$, chọn $x = y'$ ta được $\|y'\|^2 = 0 \implies y' = 0$.
>
> **Trường hợp 2:** Xét $f \not\equiv 0$.
> Khi đó hạt nhân $M = \ker(f)$ là một không gian con đóng (theo Mệnh đề 6.1) và $M \subsetneq H$.
> Theo Định lý phân tích trực giao (Hệ quả 5.3):
> $$H = M \oplus M^\perp, \quad \text{với } M^\perp \ne \{0\}.$$
> Do $\ker(f)$ có đối chiều bằng 1 trong $H$, phần bù trực giao $M^\perp$ phải có số chiều bằng 1.
> Thật vậy, lấy $z_0 \in M^\perp \setminus \{0\}$. Với mọi $z \in M^\perp$, áp dụng phân tích:
> $$z = \left( z - \frac{f(z)}{f(z_0)} z_0 \right) + \frac{f(z)}{f(z_0)} z_0.$$
> Phần tử trong ngoặc vừa thuộc $\ker(f) = M$, vừa thuộc $M^\perp$ (vì là tổ hợp tuyến tính của các phần tử thuộc $M^\perp$). Do $M \cap M^\perp = \{0\}$, phần tử trong ngoặc bắt buộc bằng 0.
> Suy ra $z = \frac{f(z)}{f(z_0)} z_0$, tức mọi phần tử trong $M^\perp$ đều là bội của $z_0$. Vậy $\dim(M^\perp) = 1$.
>
> *Xây dựng vectơ biểu diễn $y$:*
> Chọn một vectơ đơn vị $v \in M^\perp$ sao cho $\|v\| = 1$. Vì $v \notin \ker(f)$, ta có $f(v) \ne 0$.
> Với mọi $x \in H$, xét phần tử $u = x - \frac{f(x)}{f(v)} v$.
> Ta có $f(u) = f(x) - \frac{f(x)}{f(v)} f(v) = 0 \implies u \in M$.
> Vì $v \in M^\perp$, $u \perp v$, tức $\langle u, v \rangle = 0$. Do đó:
> $$\left\langle x - \frac{f(x)}{f(v)} v,\ v \right\rangle = 0 \iff \langle x, v \rangle - \frac{f(x)}{f(v)} \langle v, v \rangle = 0.$$
> Vì $\|v\|^2 = \langle v, v \rangle = 1$, phương trình trở thành:
> $$\langle x, v \rangle = \frac{f(x)}{f(v)} \implies f(x) = f(v) \langle x, v \rangle = \langle x, \overline{f(v)} v \rangle.$$
> Đặt $y = \overline{f(v)} v \in H$. Khi đó:
> $$f(x) = \langle x, y \rangle \quad \forall x \in H.$$
>
> *Bảo toàn chuẩn:*
> Theo bất đẳng thức Cauchy–Schwarz: $|f(x)| = |\langle x, y \rangle| \le \|y\| \|x\|$, suy ra $\|f\|_{H^*} \le \|y\|$.
> Ngược lại, xét tại $x = y$:
> $$f(y) = \langle y, y \rangle = \|y\|^2.$$
> Mặt khác, $f(y) \le \|f\| \|y\|$, do đó $\|y\|^2 \le \|f\| \|y\|$. Chia hai vế cho $\|y\| > 0$ (do $f \not\equiv 0 \implies y \ne 0$), ta được $\|y\| \le \|f\|$.
> Vậy $\|f\|_{H^*} = \|y\|_H$.
>
> *Tính duy nhất của $y$:*
> Giả sử tồn tại $y_1, y_2 \in H$ sao cho $f(x) = \langle x, y_1 \rangle = \langle x, y_2 \rangle$ với mọi $x \in H$.
> Suy ra:
> $$\langle x, y_1 - y_2 \rangle = 0 \quad \forall x \in H.$$
> Chọn $x = y_1 - y_2$:
> $$\|y_1 - y_2\|^2 = \langle y_1 - y_2, y_1 - y_2 \rangle = 0 \implies y_1 - y_2 = 0 \implies y_1 = y_2.$$
>
> *Đặc trưng của $M^\perp$:*
> Do $y = \overline{f(v)} v$ với $f(v) \ne 0$ và $v \in M^\perp \setminus \{0\}$, ta có $y \ne 0$ và $y \in M^\perp$. Do $\dim(M^\perp) = 1$, suy ra $M^\perp = \ker(f)^\perp = \mathbb{F}y$.

### 6.3 Ý nghĩa Hình học của Vectơ Biểu diễn

> [!prp] Hình chiếu lên phương pháp tuyến
> Cho $f \in H^* \setminus \{0\}$ có vectơ biểu diễn Riesz là $y$ (tức $f(x) = \langle x, y \rangle$). Khi đó hình chiếu trực giao vô hướng của $x$ lên phương của vectơ pháp tuyến $y$ thỏa mãn:
> $$\operatorname{proj}_y(x) = \frac{\langle x, y \rangle}{\|y\|} = \frac{f(x)}{\|f\|}.$$
> Do đó giá trị phiếm hàm $f(x)$ bằng độ dài hình chiếu của $x$ lên trục pháp tuyến nhân với chuẩn $\|f\|$:
> $$f(x) = \|f\| \cdot \operatorname{proj}_y(x).$$

> [!prf]
> Đặt vectơ đơn vị cùng hướng với $y$ là $\hat{y} = \frac{y}{\|y\|}$. Hình chiếu trực giao của $x$ lên trục xác định bởi vectơ $y$ có giá trị vô hướng bằng:
> $$\operatorname{proj}_y(x) = \langle x, \hat{y} \rangle = \left\langle x, \frac{y}{\|y\|} \right\rangle = \frac{1}{\|y\|} \langle x, y \rangle = \frac{f(x)}{\|y\|}.$$
> Theo Định lý Riesz, $\|y\| = \|f\|$. Do đó:
> $$\operatorname{proj}_y(x) = \frac{f(x)}{\|f\|} \implies f(x) = \|f\| \cdot \operatorname{proj}_y(x).$$

Ý nghĩa hình học: Vectơ $y$ đóng vai trò là một vectơ pháp tuyến của siêu phẳng $\ker(f)$. Khi chuẩn hóa $\|f\| = 1$, ta có $\|y\| = 1$, và giá trị của phiếm hàm $f(x)$ phản ánh đúng độ dài đại số của hình chiếu vuông góc của $x$ lên trục pháp tuyến $\mathbb{F}y$, đồng thời trùng với khoảng cách hình học từ $x$ tới siêu phẳng $\ker(f)$.

> [!cor] Công thức xác định vectơ Riesz từ một vectơ trực giao bất kỳ
> Cho $f \in H^* \setminus \{0\}$. Nếu $u$ là một vectơ bất kỳ thuộc $\ker(f)^\perp$ với $u \ne 0$, thì vectơ biểu diễn $y$ trong Định lý Riesz được tính bằng công thức:
> $$y = \frac{\overline{f(u)}}{\|u\|^2} u.$$

> [!prf]
> Vì $\ker(f)^\perp$ là không gian một chiều chứa cả $u$ và $y$ (với $u \ne 0$), tồn tại vô hướng $c \in \mathbb{F}$ sao cho $y = c u$.
> Theo Định lý Riesz:
> $$f(u) = \langle u, y \rangle = \langle u, c u \rangle = \bar{c} \langle u, u \rangle = \bar{c} \|u\|^2.$$
> Suy ra:
> $$\bar{c} = \frac{f(u)}{\|u\|^2} \implies c = \overline{\left( \frac{f(u)}{\|u\|^2} \right)} = \frac{\overline{f(u)}}{\|u\|^2}.$$
> Thay $c$ vào biểu thức của $y$, ta thu được công thức cần tìm.

### 6.4 Tính Tự đối ngẫu của Không gian Hilbert

> [!thm] Đẳng cấu Tự đối ngẫu
> Cho $H$ là một không gian Hilbert. Ánh xạ $\Phi: H \to H^*$ xác định bởi:
> $$\Phi(y) = f_y, \quad \text{trong đó } f_y(x) = \langle x, y \rangle \quad \forall x \in H$$
> là một đẳng cấu đẳng cự (isometric isomorphism). Cụ thể:
> 1. $\Phi$ bảo toàn chuẩn: $\|\Phi(y)\|_{H^*} = \|y\|_H$ với mọi $y \in H$;
> 2. $\Phi$ là một toàn ánh;
> 3. $\Phi$ là một đơn ánh;
> 4. $\Phi$ thỏa mãn tính liên hợp tuyến tính (conjugate-linear):
> $$\Phi(\alpha y_1 + \beta y_2) = \bar\alpha \Phi(y_1) + \bar\beta \Phi(y_2) \quad \forall \alpha, \beta \in \mathbb{F},\ \forall y_1, y_2 \in H.$$
> Nếu $\mathbb{F} = \mathbb{R}$, $\Phi$ là một đẳng cấu tuyến tính đẳng cự, do đó $H^* \cong H$.
> Nếu $\mathbb{F} = \mathbb{C}$, $\Phi$ là một đẳng cấu phản tuyến tính đẳng cự, do đó $H^* \cong \overline{H}$.

> [!prf]
> 1. *Bảo toàn chuẩn:* Theo Mệnh đề 5.2 và Định lý Riesz, $\|\Phi(y)\|_{H^*} = \|f_y\|_{H^*} = \|y\|_H$.
> 2. *Toàn ánh:* Với mọi $f \in H^*$, Định lý Biểu diễn Riesz đảm bảo tồn tại $y \in H$ sao cho $f = f_y = \Phi(y)$.
> 3. *Đơn ánh:* Nếu $\Phi(y_1) = \Phi(y_2)$, thì $\|\Phi(y_1 - y_2)\| = 0$. Do tính bảo toàn chuẩn, $\|y_1 - y_2\| = 0 \implies y_1 = y_2$.
> 4. *Liên hợp tuyến tính:* Với mọi $x \in H$:
> $$\Phi(\alpha y_1 + \beta y_2)(x) = \langle x, \alpha y_1 + \beta y_2 \rangle = \bar\alpha \langle x, y_1 \rangle + \bar\beta \langle x, y_2 \rangle = \bar\alpha \Phi(y_1)(x) + \bar\beta \Phi(y_2)(x).$$
> Do đó $\Phi(\alpha y_1 + \beta y_2) = \bar\alpha \Phi(y_1) + \bar\beta \Phi(y_2)$.
> Trên trường số thực $\mathbb{R}$, $\bar\alpha = \alpha$, nên $\Phi$ tuyến tính.

---

## Phần VII: Sự Thống nhất: Tính Duy nhất của Hahn–Banach trong Không gian Hilbert

Trong không gian Banach tổng quát, mở rộng Hahn–Banach có thể không duy nhất do tính không trơn của quả cầu đơn vị. Ngược lại, trong không gian Hilbert, Định lý Biểu diễn Riesz và tính chất hình học của tích trong khóa chặt vectơ biểu diễn, dẫn đến tính duy nhất của mở rộng.

> [!thm] Tính Duy nhất của Mở rộng Hahn–Banach trong Không gian Hilbert
> Cho $M$ là một không gian con đóng của không gian Hilbert $H$, và $f \in M^*$. Khi đó tồn tại **duy nhất** một phiếm hàm $g \in H^*$ sao cho:
> $$g|_M = f \quad \text{và} \quad \|g\|_{H^*} = \|f\|_{M^*}.$$

> [!prf]
> **Bước 1: Biểu diễn Riesz trên $M$.**
> Vì $M$ là không gian con đóng của không gian Hilbert $H$, $M$ trang bị tích trong cảm sinh từ $H$ là một không gian Hilbert.
> Áp dụng Định lý Biểu diễn Riesz cho $f \in M^*$, tồn tại duy nhất một vectơ $u \in M$ sao cho:
> $$f(x) = \langle x, u \rangle \quad \forall x \in M,$$
> và thỏa mãn $\|f\|_{M^*} = \|u\|_H$.
>
> **Bước 2: Biểu diễn Riesz của mở rộng trên $H$.**
> Giả sử $g \in H^*$ là một mở rộng bảo toàn chuẩn bất kỳ của $f$ lên $H$, nghĩa là:
> $$g|_M = f \quad \text{và} \quad \|g\|_{H^*} = \|f\|_{M^*} = \|u\|.$$
> Áp dụng Định lý Biểu diễn Riesz cho $g \in H^*$, tồn tại duy nhất một vectơ $v \in H$ sao cho:
> $$g(x) = \langle x, v \rangle \quad \forall x \in H,$$
> và thỏa mãn $\|v\|_H = \|g\|_{H^*} = \|u\|_H$.
>
> **Bước 3: Khóa chặt vectơ biểu diễn $v$ trùng với $u$.**
> Do $g|_M = f$, với mọi $m \in M$, ta có:
> $$\langle m, v \rangle = g(m) = f(m) = \langle m, u \rangle.$$
> Chuyển vế:
> $$\langle m, v - u \rangle = 0 \quad \forall m \in M.$$
> Điều này chứng minh rằng $(v - u) \in M^\perp$.
>
> Mặt khác, ta có thể phân tích vectơ $v$ dưới dạng:
> $$v = u + (v - u).$$
> Trong phân tích này, $u \in M$ và $(v - u) \in M^\perp$. Do $u \perp (v - u)$, áp dụng Định lý Pythagore:
> $$\|v\|^2 = \|u + (v - u)\|^2 = \|u\|^2 + \|v - u\|^2.$$
> Theo Bước 2, ta đã có đẳng thức về độ lớn $\|v\| = \|u\|$, hay $\|v\|^2 = \|u\|^2$. Thay vào đẳng thức trên:
> $$\|u\|^2 = \|u\|^2 + \|v - u\|^2 \implies \|v - u\|^2 = 0 \implies v - u = 0 \implies v = u.$$
>
> **Kết luận:**
> Vectơ biểu diễn $v$ của phiếm hàm mở rộng $g$ bắt buộc phải trùng với vectơ $u \in M$.
> Vì $v = u$, phiếm hàm $g$ được xác định duy nhất bởi:
> $$g(x) = \langle x, u \rangle \quad \forall x \in H.$$
> Do tính duy nhất của biểu diễn Riesz, không thể tồn tại một phiếm hàm mở rộng bảo toàn chuẩn nào khác.

### 7.2 Ví dụ tính toán Minh họa

> [!exm] Xác định mở rộng Hahn–Banach duy nhất trong $\mathbb{R}^2$
> Trong không gian Hilbert $\mathbb{R}^2$ trang bị tích trong Euclid chính tắc $\langle (x_1, x_2), (y_1, y_2) \rangle = x_1 y_1 + x_2 y_2$, xét không gian con đóng:
> $$M = \{(x, 3x) \mid x \in \mathbb{R}\} \subset \mathbb{R}^2$$
> và phiếm hàm tuyến tính $f: M \to \mathbb{R}$ xác định bởi $f(x, 3x) = x$.
> Tìm phiếm hàm mở rộng Hahn–Banach duy nhất $g \in (\mathbb{R}^2)^*$ thỏa mãn $g|_M = f$ và $\|g\| = \|f\|$.
> 
> **Bước 1: Xác định vectơ cơ sở và tính chuẩn của $f$ trên $M$.**
> Không gian con $M$ được sinh bởi vectơ đơn vị:
> $$e_1 = \frac{1}{\sqrt{1^2 + 3^2}} (1, 3) = \frac{1}{\sqrt{10}} (1, 3).$$
> Giá trị của phiếm hàm $f$ tại vectơ cơ sở đơn vị này là:
> $$f(e_1) = f\left( \frac{1}{\sqrt{10}}, \frac{3}{\sqrt{10}} \right) = \frac{1}{\sqrt{10}}.$$
> Chuẩn của $f$ trên $M$ là:
> $$\|f\|_{M^*} = |f(e_1)| = \frac{1}{\sqrt{10}}.$$
> 
> **Bước 2: Tìm vectơ biểu diễn Riesz $u \in M$.**
> Theo Định lý Riesz áp dụng trên không gian một chiều $M$, vectơ biểu diễn $u \in M$ được xác định bởi:
> $$u = f(e_1) e_1 = \frac{1}{\sqrt{10}} \cdot \frac{1}{\sqrt{10}} (1, 3) = \frac{1}{10} (1, 3) = \left( \frac{1}{10}, \frac{3}{10} \right).$$
> Kiểm tra chuẩn: $\|u\| = \sqrt{\left(\frac{1}{10}\right)^2 + \left(\frac{3}{10}\right)^2} = \sqrt{\frac{10}{100}} = \frac{1}{\sqrt{10}} = \|f\|_{M^*}$.
> 
> **Bước 3: Thiết lập phiếm hàm mở rộng duy nhất $g$ trên $\mathbb{R}^2$.**
> Theo kết quả của Định lý 7.1, phiếm hàm mở rộng Hahn–Banach bảo toàn chuẩn duy nhất $g$ trên $\mathbb{R}^2$ có vectơ biểu diễn chính là $u$:
> $$g(x, y) = \langle (x, y), u \rangle = \left\langle (x, y), \left( \frac{1}{10}, \frac{3}{10} \right) \right\rangle = \frac{1}{10} x + \frac{3}{10} y.$$
> 
> **Bước 4: Kiểm tra lại các điều kiện.**
> - Với mọi $(x, 3x) \in M$:
> $$g(x, 3x) = \frac{1}{10} x + \frac{3}{10} (3x) = \frac{1}{10} x + \frac{9}{10} x = x = f(x, 3x).$$
> - Chuẩn của $g$ trên $\mathbb{R}^2$:
> $$\|g\|_{(\mathbb{R}^2)^*} = \|u\| = \frac{1}{\sqrt{10}} = \|f\|_{M^*}.$$
> Phiếm hàm $g(x, y) = \frac{x + 3y}{10}$ là nghiệm duy nhất của bài toán.