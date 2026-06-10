# Định lý Hahn-Banach: Sự Giao Thoa Giữa Hình Học Siêu Phẳng và Đại Số Giải Tích

## 1. Dẫn nhập Hình học: Tập lồi và Sự phân tách bằng Siêu phẳng

> [!def]
> Mọi ý tưởng của Định lý Hahn-Banach đều bắt nguồn từ một trực giác hình học cơ bản: Nếu có một vật thể lồi và một điểm nằm ngoài nó, ta luôn có thể dựng một "mặt phẳng" ngăn cách chúng. Trong không gian vô hạn chiều, "mặt phẳng" này chính là siêu phẳng, và "vật thể lồi" quan trọng nhất chính là quả cầu đơn vị.
> 
> - **Tập lồi:** Trong không gian vectơ trên trường $\mathbb{F}$, tập $C$ được gọi là tập lồi nếu đoạn thẳng nối hai điểm bất kỳ của nó cũng nằm trọn trong nó:
> $$\{(1-t)x + ty \mid t \in [0,1]\} \subset C$$
> *(Ghi chú: Quả cầu đơn vị đóng $B = \{x \mid \|x\| \le 1\}$ trong không gian định chuẩn luôn là một tập lồi).*
> 
> - **Siêu phẳng (Affine hyperplane):** Nếu $f$ là phiếm hàm tuyến tính liên tục ($f \in X^*$) không triệt tiêu, tập mức $f^{-1}(\{\alpha\}) = \{x \in X \mid f(x) = \alpha\}$ là một siêu phẳng đóng. 
> Việc một tập lồi $C$ nằm về một phía của siêu phẳng tương đương với bất đẳng thức đại số: $f(x) \le \alpha$ với mọi $x \in C$.

> [!thm] Định lý (Dạng hình học của Định lý Hahn-Banach)
> Cho $A$ và $B$ là hai tập lồi không rỗng rời nhau trong không gian định chuẩn $X$ trên trường số thực, ít nhất một trong hai tập là mở. Khi đó, tồn tại một siêu phẳng đóng $f^{-1}(\{\alpha\})$ tách $A$ và $B$. 
> Nghĩa là tồn tại $f \in X^*$ và $\alpha \in \mathbb{R}$ sao cho: $f(x) \le \alpha \le f(y)$ với mọi $x \in A, y \in B$.

Để biến hình ảnh "vật thể lồi" thành công cụ tính toán đại số, ta dùng Bổ đề Minkowski. Nó đo độ phình của tập lồi so với gốc tọa độ.

> [!thm] Bổ đề 1 (Phiếm hàm Minkowski)
> Cho $C$ là tập lồi, mở với $0 \in C$. Hàm $p(x) = \inf\{\alpha > 0 \mid \alpha^{-1}x \in C\}$ thỏa mãn tính thuần nhất $p(\lambda x) = \lambda p(x)$ và $p(x+y) \le p(x) + p(y)$. 
> Tính chất then chốt: $x \in C \Leftrightarrow p(x) < 1$.

> [!thm] Bổ đề 2
> Cho $C \subsetneq E$ là tập lồi, mở và $x_0 \in E \setminus C$. Tồn tại $f \in E^*$ sao cho $f(x) < f(x_0)$ với mọi $x \in C$ (tồn tại siêu phẳng tách điểm và tập lồi).

## 2. Cầu nối Hình học - Đại số: Ý nghĩa thực sự của việc "Bảo toàn chuẩn"

Trong giải tích, ta thường nói về bài toán: "Mở rộng phiếm hàm $T$ từ không gian con $M$ lên không gian $E$ sao cho bảo toàn chuẩn $\|T\|$". Mối liên hệ hình học ở đây là gì?

Giả sử $\|T\| = 1$. Điều này tương đương với $T(x) \le \|x\|$. 
Nhìn dưới góc độ hình học, hàm $p(x) = \|x\|$ chính là phiếm hàm Minkowski của **quả cầu đơn vị**. 
Do đó, việc **"mở rộng bảo toàn chuẩn"** chính là bài toán hình học: **"Tiếp tục kéo dài siêu phẳng ra các chiều không gian lớn hơn sao cho nó vẫn tựa vào quả cầu đơn vị mà không bao giờ cắt sâu vào bên trong quả cầu đó".**

### 2.1. Mở rộng trên không gian con trù mật
Nếu không gian con $M$ đã trù mật (chiếm gần hết không gian $E$), siêu phẳng của ta thực chất đã được định hình hướng đi cố định. Ta chỉ việc lấp đầy các "lỗ hổng" bằng giới hạn.

> [!thm] Dẫn nhập 1 (Ánh xạ thu hẹp)
> Nếu $F \subset E$ và $T$ liên tục trên $E$, thì thu hẹp $T|_F$ liên tục và $\|T|_F\| \le \|T\|$. 
> (Hiển nhiên: siêu phẳng tựa trên vật thể lớn $E$ thì cũng là tựa trên lát cắt $F$ của nó).

> [!prf] 
> - Tính tuyến tính: $T|_F(x) + T|_F(y) = T(x+y) = T|_F(x+y)$. Tương tự với phép nhân vô hướng.
> - Tính bị chặn: Lấy $x \in F$, $\|T|_F(x)\| = \|Tx\| \le M\|x\|_E = M\|x\|_F$.
> - Tính chuẩn: $\|T|_F\| = \sup_{\|x\|_F < 1} \|Tx\| \le \sup_{\|x\|_E < 1} \|Tx\| = \|T\|$.

> [!thm] Dẫn nhập 2 (Mở rộng duy nhất trên không gian trù mật)
> Cho $M$ trù mật trong $E$, $T \in M^*$. Tồn tại duy nhất $S \in E^*$ sao cho $S|_M = T$ và $\|S\| = \|T\|$.

> [!prf] 
> - **Tồn tại:** Do $M$ trù mật, mọi $x \in E$ đều có $x_n \to x$ (với $x_n \in M$). Vì $(x_n)$ là Cauchy và $\|Tx_m - Tx_n\| \le \|T\|\|x_m - x_n\|$, dãy ảnh $(Tx_n)$ là Cauchy trong trường đầy đủ $\mathbb{F}$. Đặt $Sx = \lim_{n \to \infty} Tx_n$. Giới hạn này định nghĩa tốt (không phụ thuộc dãy).
> - **Liên tục và bảo toàn chuẩn:** $\|Sx\| = \lim \|Tx_n\| \le \lim \|T\|\|x_n\| = \|T\|\|x\|$. Suy ra $\|S\| \le \|T\|$. Kết hợp Dẫn nhập 1, ta có $\|S\| = \|T\|$.
> - **Duy nhất:** Nếu có $\tilde{S}$, xét $f = S - \tilde{S}$. Với $x_n \to x$, $f(x) = \lim (S(x_n) - \tilde{S}(x_n)) = 0$. Vậy $S \equiv \tilde{S}$.

**Vấn đề:** Nếu $M$ "rất mỏng" (không trù mật), làm sao ta mở rộng siêu phẳng mà không vô tình làm nó cắt vào quả cầu đơn vị? Đây là nhiệm vụ của định lý Hahn-Banach.

## 3. Định lý Hahn-Banach (Dạng Đại số)

> [!thm] Định lý (Hahn-Banach)
> Cho $M \subset E$ trên $\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{C}$. Mọi $T \in M^*$ đều mở rộng được thành $\tilde{T} \in E^*$ sao cho $\|\tilde{T}\| = \|T\|$. (Mở rộng này không nhất thiết duy nhất).

Để duy trì siêu phẳng tựa trong không gian vô hạn chiều, ta dùng Bổ đề Zorn (để thực hiện quy trình mở rộng siêu hạng).

> [!thm] Nhắc lại: Bổ đề Zorn
> Nếu một tập hợp không rỗng có thứ tự mà mọi tập con có thứ tự toàn phần đều bị chặn trên, thì nó có phần tử cực đại.

> [!prf] 
> (Trường hợp $\mathbb{F} = \mathbb{R}$)
> **Bước 1: Mở rộng thêm 1 chiều (Hình học: Chỉnh góc nghiêng của mặt phẳng)**
> Xét $E_1 = M + \langle x_0 \rangle = \{x + tx_0 \mid x \in M, t \in \mathbb{R}\}$. 
> Ta cần xác định $\tilde{T}(x + tx_0) = Tx + tc$ (với $c = \tilde{T}x_0$) sao cho siêu phẳng mới vẫn không cắt vào quả cầu bán kính $1/\|T\|$, tức là:
> $$|\tilde{T}(x + tx_0)| \le \|T\|\|x + tx_0\| \quad \forall x, t$$
> 
> Chuyển đổi đại số (với $t > 0$ và $t < 0$):
> $Tx + tc \le \|T\|\|x+tx_0\|$ và $-Tx - tc \le \|T\|\|x+tx_0\|$
> Rút $c$ ra, ta thấy $c$ phải bị "kẹp" giữa hai mặt nón lồi (upper bound và lower bound tạo bởi quả cầu):
> $$-\|T\|\|x_1 + x_0\| - Tx_1 \le c \le \|T\|\|x_2 + x_0\| - Tx_2 \quad \forall x_1, x_2 \in M$$
> 
> Sự tồn tại của "khe hở" $c$ này phụ thuộc vào việc vế trái luôn $\le$ vế phải:
> $$T(x_2 - x_1) \le \|T\|(\|x_2 + x_0\| + \|x_1 + x_0\|)$$
> Bất đẳng thức này hiển nhiên đúng vì:
> $$T(x_2 - x_1) \le \|T\|\|x_2 - x_1\| = \|T\|\|(x_2 + x_0) - (x_0 + x_1)\| \le \|T\|(\|x_2 + x_0\| + \|x_1 + x_0\|)$$
> *Kết luận Bước 1:* Ta luôn tìm được một góc nghiêng $c$ để lách siêu phẳng qua thêm 1 chiều không gian mà không vi phạm ranh giới quả cầu đơn vị.
> 
> **Bước 2: Dùng Zorn mở rộng phủ kín không gian**
> Xét tập $\mathcal{C}$ các cặp $(A, S)$ với $M \subset A$, $S$ là mở rộng bảo toàn chuẩn của $T$. Thứ tự $(A, S) \le (A', S')$ nếu $A \subset A'$ và $S'|_A = S$.
> Với mọi xích $\mathcal{F}$ toàn phần, ta dựng chặn trên $(B, g)$ bằng cách hợp tất cả các không gian con $A$ lại và giữ nguyên quy tắc $g(x) = S(x)$. Ánh xạ định nghĩa tốt, tuyến tính và $\|g\| = \|T\|$.
> Theo Zorn, $\mathcal{C}$ có phần tử cực đại $(A_0, S_0)$. 
> Nếu $A_0 \subsetneq E$, Bước 1 cho phép ta mở rộng thêm 1 chiều nữa, phá vỡ tính cực đại. Vậy bắt buộc $A_0 = E$. Ta có mở rộng hoàn chỉnh $\tilde{T}$.

> [!prf] 
> (Trường hợp $\mathbb{F} = \mathbb{C}$)
> Tách $T = u + iv$. Do $T(ix) = iT(x)$, ta suy ra $u(ix) + iv(ix) = -v(x) + iu(x)$, tức là $v(x) = -u(ix)$.
> Vậy toàn bộ mặt phẳng phức được điều khiển bởi phần thực: $T(x) = u(x) - iu(ix)$.
> Ước tính chuẩn: Hiển nhiên $\|u\| \le \|T\|$. 
> Ngược lại, chọn $\alpha = \frac{\overline{Tx}}{|Tx|}$ (để xoay vectơ về trục thực, $|\alpha| = 1$). 
> $|Tx| = \alpha Tx = T(\alpha x) = u(\alpha x) \le \|u\|\|\alpha x\| = \|u\|\|x\|$. Suy ra $\|T\| = \|u\|$.
> Áp dụng Hahn-Banach dạng thực cho $u$ để lấy $\tilde{u}$ trên $E$, rồi đặt $\tilde{T}(x) = \tilde{u}(x) - i\tilde{u}(ix)$. Mở rộng này bảo toàn chuẩn phức.

## 4. Các Hệ quả Giải tích và Ý nghĩa Hình học

Các hệ quả sau cho thấy không gian đối ngẫu $E^*$ chứa đủ lượng siêu phẳng để "chụp" lại toàn bộ hình dáng của không gian $E$.

### Hệ quả 1: Đặt mặt phẳng tựa vào một điểm của quả cầu
> [!thm] Hệ quả 1
> Với $x_0 \neq 0$, tồn tại $f \in E^*$ sao cho $\|f\| = 1$ và $f(x_0) = \|x_0\|$.
> *(Ý nghĩa hình học: Luôn tồn tại một siêu phẳng tựa vào quả cầu bán kính $\|x_0\|$ ngay tại chính điểm chạm $x_0$).*

> [!prf] 
> Đặt trên không gian con 1 chiều $M = \langle x_0 \rangle$ hàm $g(tx_0) = t\|x_0\|$. Ta có $|g(tx_0)| = \|tx_0\| \Rightarrow \|g\| = 1$. Dùng Hahn-Banach mở rộng $g$ lên $E$ thành $f$, ta có $\|f\| = 1$ và $f(x_0) = \|x_0\|$.

### Hệ quả 2: Phân tách hai điểm
> [!thm] Hệ quả 2
> $E^*$ phân tách điểm: Nếu $x \neq y$, tồn tại $f \in E^*$ sao cho $f(x) \neq f(y)$.
> *(Ý nghĩa hình học: Cho 2 điểm phân biệt, ta luôn có thể nhét 1 siêu phẳng vào giữa chúng).*

> [!prf] 
> Xét $u = x - y \neq 0$. Theo HQ 1, có $f$ sao cho $f(u) = \|u\| \neq 0$. Do tuyến tính, $f(x) - f(y) \neq 0 \Rightarrow f(x) \neq f(y)$.

### Hệ quả 3: Tính chuẩn bằng đối ngẫu
> [!thm] Hệ quả 3
> $\|x\| = \sup\{|Tx| \mid T \in E^*, \|T\| = 1\}$.
> *(Ý nghĩa hình học: Độ dài của vectơ $x$ chính là khoảng cách lớn nhất từ gốc tọa độ đến các siêu phẳng tựa bao quanh nó).*

> [!prf] 
> $x = 0$ thì hiển nhiên. Với $x \neq 0$: $|Tx| \le \|T\|\|x\| = \|x\|$ với mọi $\|T\|=1$, suy ra $\sup |Tx| \le \|x\|$.
> Ngược lại, HQ 1 cung cấp một $T_0$ có chuẩn 1 sao cho $T_0x = \|x\|$, do đó dấu bằng xảy ra.

### Trực quan Hình học về tính KHÔNG duy nhất của mở rộng
Định lý nói mở rộng không duy nhất. Tại sao? Hãy nhìn vào hình dáng của quả cầu.

> [!thm] Ví dụ minh họa ($\ell_1$ norm)
> Trong $X = \mathbb{R}^2$ với chuẩn hình thoi $\|(x,y)\|_1 = |x| + |y|$. 
> Xét không gian con $M = \{(x,0)\}$ (trục hoành) và $f(x,0) = x$.
> (a) Ta có $\|f\| = 1$ vì $|f(x,0)| = |x| = \|(x,0)\|_1$.
> (b) Xét họ siêu phẳng $F_a(x,y) = x + ay$ với $a \in [-1, 1]$.

> [!prf]
> Tính bị chặn: $|F_a(x,y)| = |x + ay| \le |x| + |a||y| \le |x| + |y| = \|(x,y)\|_1 \Rightarrow \|F_a\| \le 1$.
> Tại điểm chạm $(1,0)$: $|F_a(1,0)| = 1 = \|(1,0)\|_1 \Rightarrow \|F_a\| = 1$.
> Thu hẹp: $F_a(x,0) = x = f(x,0)$.
> 
> **Giải thích Hình học:** Quả cầu đơn vị của chuẩn $\ell_1$ là một hình thoi (diamond) với các đỉnh nhọn tại $(1,0), (0,1), (-1,0), (0,-1)$. Tại góc nhọn $(1,0)$, đường biên không trơn (not smooth), do đó bạn có thể "bập bênh" mặt phẳng tựa qua lại (thay đổi tham số góc $a \in [-1, 1]$) mà mặt phẳng này vẫn không cắt vào trong hình thoi. Đây chính là lý do đại số sinh ra vô số nghiệm bảo toàn chuẩn!