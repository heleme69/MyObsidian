# Giải Tích Hàm: Hahn-Banach, Không Gian Hilbert và Định Lý Riesz

## I. Nền tảng Hình học và Giải tích

Trong không gian vô hạn chiều, ta cần trang bị các công cụ để đo đạc và "thái lát" không gian. Các khái niệm chuẩn và phiếm hàm tuyến tính đóng vai trò là thước đo và dao cắt cơ bản.

> [!def] Định nghĩa: Chuẩn và Quả cầu đơn vị
> Cho E là một không gian vectơ. Chuẩn (Norm), ký hiệu là $\|x\|$, đo độ dài của vectơ x. Quả cầu đơn vị đóng của E là tập hợp các điểm có độ dài không vượt quá 1:
> $$B_E = \{x \in E \mid \|x\| \le 1\}$$
> Ý nghĩa hình học: $B_E$ luôn là một vật thể lồi và đối xứng qua gốc tọa độ. Trong không gian Hilbert, quả cầu này trơn tròn hoàn hảo, trong khi ở các không gian Banach tổng quát, nó có thể có các góc nhọn.

> [!def] Định nghĩa: Phiếm hàm tuyến tính và Không gian đối ngẫu
> Phiếm hàm tuyến tính là một ánh xạ $f: E \to \mathbb{F}$ nén một cấu trúc vectơ thành một số vô hướng, bảo toàn phép cộng và phép nhân vô hướng.
> Tập hợp tất cả các phiếm hàm tuyến tính liên tục (bị chặn) trên E được gọi là không gian đối ngẫu, ký hiệu là $E^*$. Không gian này được trang bị chuẩn:
> $$\|f\|_{E^*} = \sup_{\|x\| \le 1} |f(x)|$$



> [!prp] Sự thái lát không gian và khoảng cách siêu phẳng
> Mỗi phiếm hàm $f \in E^* \setminus \{0\}$ thái lát không gian E thành một họ các siêu phẳng song song, ứng với các tập mức $H_\alpha = \{x \in E \mid f(x) = \alpha\}$.
> Khoảng cách hình học từ gốc tọa độ $0$ đến siêu phẳng $H_1$ tỉ lệ nghịch với chuẩn $\|f\|$, tức là $d(H_0, H_1) = \frac{1}{\|f\|}$.

> [!prf]
> Ta có $d(H_0, H_1) = \inf_{f(x)=1} \|x\|$. 
> Với mọi x thuộc $H_1$, ta có $1 = |f(x)| \le \|f\| \|x\| \implies \|x\| \ge \frac{1}{\|f\|}$.
> Theo định nghĩa của chuẩn toán tử, với mọi $\epsilon > 0$, tồn tại $x_\epsilon \ne 0$ sao cho $|f(x_\epsilon)| > (\|f\| - \epsilon)\|x_\epsilon\|$. 
> Đặt $z_\epsilon = \frac{x_\epsilon}{f(x_\epsilon)} \in H_1$, ta có $\|z_\epsilon\| < \frac{1}{\|f\| - \epsilon}$. 
> Cho $\epsilon \to 0^+$, ta thu được $\inf_{f(x)=1} \|x\| = \frac{1}{\|f\|}$.

> [!rem] Trực giác hình học về độ dốc và siêu phẳng tựa
> Chuẩn $\|f\|$ đo độ dốc của phiếm hàm. Khi $\|f\|$ lớn, khoảng cách giữa các siêu phẳng rất nhỏ, chúng xếp chồng lên nhau dày đặc. 
> Hai siêu phẳng $f(x) = \|f\|$ và $f(x) = -\|f\|$ đóng vai trò là các siêu phẳng tựa (supporting hyperplanes), kẹp chặt lấy biên của quả cầu đơn vị $B_E$ mà không cắt vào nội tâm.



## II. Định lý Hahn-Banach

Định lý Hahn-Banach giải quyết bài toán cốt lõi: Làm sao để mở rộng một phiếm hàm từ không gian con ra toàn không gian mà không làm thay đổi các đặc tính bị chặn của nó.

### 1. Dạng hình học: Sự phân tách tập lồi

> [!def] Siêu phẳng đóng và Tập lồi
> Tập $C$ là tập lồi nếu đoạn thẳng nối hai điểm bất kỳ của nó nằm trọn trong $C$.
> Một siêu phẳng $f^{-1}(\{\alpha\})$ đóng khi và chỉ khi phiếm hàm tuyến tính định nghĩa nó liên tục ($f \in E^*$).

> [!thm] Định lý tách (Dạng hình học của Hahn-Banach)
> Cho A và B là hai tập lồi không rỗng rời nhau trong không gian định chuẩn X trên trường số thực, ít nhất một trong hai tập là mở. Khi đó, tồn tại một siêu phẳng đóng tách A và B, tức là tồn tại $f \in X^*$ và $\alpha \in \mathbb{R}$ sao cho $f(x) \le \alpha \le f(y)$ với mọi $x \in A$ và $y \in B$.



> [!lem] Phiếm hàm Minkowski
> Cho $C$ là tập lồi, mở với $0 \in C$. Hàm $p(x) = \inf\{\alpha > 0 \mid \alpha^{-1}x \in C\}$ thỏa mãn tính thuần nhất dương và bất đẳng thức tam giác. Đặc biệt, $x \in C \Leftrightarrow p(x) < 1$.

### 2. Dạng đại số: Bài toán mở rộng

> [!thm] Định lý Hahn-Banach (Dạng đại số)
> Cho M là một không gian con của không gian định chuẩn E trên trường $\mathbb{F}$. Mọi phiếm hàm tuyến tính liên tục T trên M đều mở rộng được thành một phiếm hàm tuyến tính liên tục $\tilde{T}$ trên E sao cho $\|\tilde{T}\| = \|T\|$.

> [!prf]
> Trường hợp $\mathbb{F} = \mathbb{R}$:
> Xét $E_1 = M + \langle x_0 \rangle$. Ta cần tìm hằng số c để $\tilde{T}(x + tx_0) = Tx + tc$ thỏa mãn $|\tilde{T}(x + tx_0)| \le \|T\|\|x + tx_0\|$. 
> Biến đổi đại số tương đương với việc tìm c nằm giữa hai dải:
> $-\|T\|\|x_1 + x_0\| - Tx_1 \le c \le \|T\|\|x_2 + x_0\| - Tx_2$ với mọi $x_1, x_2 \in M$.
> Bất đẳng thức chặn trên luôn lớn hơn chặn dưới nhờ bất đẳng thức tam giác $T(x_2 - x_1) \le \|T\|\|x_2 - x_1\| \le \|T\|(\|x_2 + x_0\| + \|x_1 + x_0\|)$. Do đó luôn mở rộng được 1 chiều.
> Dùng Bổ đề Zorn trên tập các cặp mở rộng bảo toàn chuẩn được sắp thứ tự bao hàm. Mọi xích toàn phần đều có chặn trên (hợp các không gian con). Zorn đảm bảo tồn tại phần tử cực đại. Nếu không gian cực đại này chưa phủ kín E, ta lại dùng bước mở rộng 1 chiều để tạo mâu thuẫn. Do đó mở rộng cực đại phải phủ kín toàn bộ E.
> Trường hợp $\mathbb{F} = \mathbb{C}$:
> Tách $T = u + iv$. Từ tính tuyến tính phức, ta có $T(x) = u(x) - iu(ix)$ và $\|T\| = \|u\|$. Dùng Hahn-Banach dạng thực mở rộng u thành $\tilde{u}$ trên E, rồi khôi phục $\tilde{T}(x) = \tilde{u}(x) - i\tilde{u}(ix)$. Mở rộng này bảo toàn chuẩn phức.

> [!cor] Các hệ quả giải tích
> Đo chiều dài vectơ: Với $x_0 \ne 0$, tồn tại $f \in E^*$ sao cho $\|f\| = 1$ và $f(x_0) = \|x_0\|$.
> Phân tách điểm: Nếu $x \ne y$, tồn tại $f \in E^*$ sao cho $f(x) \ne f(y)$.
> Công thức đối ngẫu của chuẩn: $\|x\| = \sup\{|Tx| \mid T \in E^*, \|T\| = 1\}$.

### 3. Tính không duy nhất của mở rộng Hahn-Banach

Nguyên nhân hình học sâu xa của sự không duy nhất là do ranh giới của quả cầu đơn vị có thể gãy khúc (không trơn). Tại một đỉnh nhọn, có vô số mặt phẳng có thể tựa lên nó mà không cắt vào nội tâm.

> [!thm] Định lý (Tính không duy nhất tại điểm không trơn)
> Trong $X = \mathbb{R}^2$ với chuẩn $\|(x,y)\|_1 = |x| + |y|$, xét không gian con $M = \{(x,0) \mid x \in \mathbb{R}\}$ và phiếm hàm $f(x,0) = x$. Khi đó $\|f\|_M = 1$. Tồn tại vô số phiếm hàm mở rộng Hahn-Banach F trên X của f thỏa mãn $\|F\|_X = 1$.

> [!prf]
> Ta xây dựng họ phiếm hàm mở rộng $F_a(x,y) = x + ay$ với $a \in \mathbb{R}$.
> Để bảo toàn chuẩn $\|F_a\| = 1$, ta cần $|x + ay| \le |x| + |y|$ với mọi $(x,y)$.
> Nếu giả sử bất đẳng thức trên đúng, thử tại $(0,1)$ ta có $|a| \le 1$. 
> Ngược lại, nếu $a \in [-1, 1]$, áp dụng bất đẳng thức tam giác: $|x + ay| \le |x| + |a||y| \le |x| + |y| = \|(x,y)\|_1$. Từ đó chuẩn toán tử $\|F_a\| \le 1$.
> Xét tại điểm biên chạm $x_0 = (1,0)$, ta có $|F_a(1,0)| = 1$, nên supremum đạt được và $\|F_a\| = 1$.
> Rõ ràng trên không gian con M, $F_a(x,0) = x = f(x,0)$. 
> Vì $a \in [-1, 1]$ là một đoạn liên tục, ta thu được vô số phiếm hàm mở rộng phân biệt.

## III. Cấu trúc Hilbert và Phép chiếu vuông góc

Khi trang bị thêm tích trong, không gian có được cấu trúc góc và sự vuông góc, biến quả cầu đơn vị thành hình trơn hoàn hảo.

> [!def] Tích trong và Không gian Hilbert
> Tích trong là một ánh xạ $\langle \cdot, \cdot \rangle : H \times H \to \mathbb{F}$ tuyến tính theo biến thứ nhất, đối xứng liên hợp và xác định dương. 
> Không gian Hilbert là không gian tích trong đầy đủ đối với chuẩn sinh bởi tích trong $\|x\| = \langle x,x \rangle^{1/2}$.

> [!thm] Đẳng thức hình bình hành và Bất đẳng thức Cauchy-Schwarz
> Một chuẩn được sinh ra từ tích trong khi và chỉ khi $2\|x\|^2 + 2\|y\|^2 = \|x+y\|^2 + \|x-y\|^2$. (Phản ví dụ không thỏa mãn: $\ell^p$ với $p \ne 2$).
> Bất đẳng thức Cauchy-Schwarz: $|\langle x, y \rangle| \le \|x\| \|y\|$.



> [!prf]
> Chứng minh Cauchy-Schwarz bằng hình học: Xét độ dài bình phương của phần dư khi chiếu x lên y trên trường phức. Ta có $\|x - \frac{\langle x,y \rangle}{\|y\|^2}y\|^2 \ge 0$. Khai triển đại số dẫn đến $\|x\|^2 - \frac{|\langle x,y \rangle|^2}{\|y\|^2} \ge 0$, từ đó suy ra điều phải chứng minh.

> [!thm] Sự tồn tại của phép chiếu vuông góc
> Cho M là một không gian vectơ con đóng của không gian Hilbert H. Với mọi $x \in H$, có duy nhất $y \in M$ sao cho $(x-y) \perp M$. Ta ký hiệu $y = P_Mx$ là hình chiếu vuông góc, và khoảng cách đạt cực tiểu $\|x - P_Mx\| = d(x, M)$.



> [!prf]
> Đặt $d = \inf_{m \in M} \|x-m\|$. Tồn tại dãy $(y_n) \subset M$ sao cho $\|x-y_n\| \to d$.
> Áp dụng đẳng thức hình bình hành cho $(x-y_n)$ và $(x-y_m)$ ta thu được $\|y_m-y_n\|^2 \le 2\|x-y_n\|^2 + 2\|x-y_m\|^2 - 4d^2$. Khi $m,n \to \infty$, vế phải tiến về 0, nên $(y_n)$ là dãy Cauchy. Do M đóng và H đầy đủ, dãy hội tụ về $y \in M$ với $\|x-y\| = d$.
> Đánh giá đa thức bậc hai $\|x - (y - tw)\|^2 \ge \|x-y\|^2$ dẫn đến $\mathfrak{R}\langle x-y, w \rangle = 0$ và $\mathfrak{S}\langle x-y, w \rangle = 0$. Suy ra $(x-y) \perp M$.
> Nếu có $y_1, y_2$ cùng là hình chiếu, $(y_1-y_2) \in M$ và $(y_1-y_2) \perp M$, nên nó phải tự trực giao với chính nó, dẫn đến $y_1 = y_2$.

> [!cor] Phân tích trực giao
> Không gian Hilbert được xẻ thành hai nửa trực giao $H = M \oplus M^\perp$. Mọi x phân tích duy nhất thành $x = P_Mx + P_{M^\perp}x$, và định lý Pythagore cho ta $\|x\|^2 = \|P_Mx\|^2 + \|P_{M^\perp}x\|^2$.

## IV. Định lý Riesz và Sự khóa chặt Hahn-Banach

> [!lem] Hạt nhân của phiếm hàm
> Cho $f \in H^* \setminus \{0\}$. Hạt nhân $\ker(f)$ là một không gian con đóng và kém H đúng 1 chiều. Ta có phân tích trực giao $H = \ker(f) \oplus \ker(f)^\perp$, trong đó $\ker(f)^\perp$ là không gian một chiều.

> [!thm] Định lý Biểu diễn Riesz
> Với mọi phiếm hàm tuyến tính liên tục f trên không gian Hilbert H, tồn tại duy nhất một vectơ $y \in H$ sao cho $f(x) = \langle x, y \rangle$ với mọi $x \in H$. Đồng thời $\|f\|_{H^*} = \|y\|_H$.

> [!prf]
> Nếu $f \equiv 0$, chọn $y = 0$. Nếu $f \not\equiv 0$, chọn vectơ đơn vị $v \in \ker(f)^\perp$. 
> Với mọi x, phần dư $x - \frac{f(x)}{f(v)}v \in \ker(f)$. 
> Vì nó thuộc hạt nhân nên nó trực giao với v: $\langle x - \frac{f(x)}{f(v)}v, v \rangle = 0$.
> Giải phương trình này với chú ý $\|v\|^2 = 1$, ta được $\langle x, v \rangle = \frac{f(x)}{f(v)}$, từ đó $f(x) = \langle x, \overline{f(v)}v \rangle$. Vectơ cần tìm là $y = \overline{f(v)}v$.
> Sự duy nhất dễ dàng được chứng minh thông qua tính xác định dương của tích trong.

> [!prp] Sự duy nhất của Hahn-Banach trong không gian Hilbert
> Khác với không gian Banach tổng quát, nếu M là không gian con đóng của không gian Hilbert H, mọi phiếm hàm $f \in M^*$ có duy nhất một mở rộng Hahn-Banach trên H.

> [!prf]
> Bản thân M là không gian Hilbert. Theo Riesz, tồn tại duy nhất $u \in M$ sao cho $f(x) = \langle x, u \rangle$ trên M.
> Hahn-Banach cho ta một mở rộng g trên H bảo toàn chuẩn. Áp dụng Riesz cho g, tồn tại duy nhất $v \in H$ sao cho $g(x) = \langle x, v \rangle$ trên H.
> Trên M, $f(x) = g(x) \implies \langle x, u-v \rangle = 0 \implies (u-v) \perp M$.
> Áp dụng định lý Pythagore cho phân tích $v = u + (v-u)$ ta có $\|v\|^2 = \|u\|^2 + \|u-v\|^2$.
> Tính bảo toàn chuẩn buộc $\|v\| = \|g\| = \|f\| = \|u\|$. Suy ra $\|u-v\|^2 = 0 \implies u = v$.
> Vectơ biểu diễn trên H phải trùng với vectơ trên M, không còn bất kỳ góc độ tự do nào khác. Mở rộng là duy nhất.

> [!exm] Ví dụ tính toán
> Xét $X = \{(x,3x) \in \mathbb{R}^2\}$ và phiếm hàm $f(x,y) = x$ trên X. 
> Dùng Riesz trên X, ta tìm được vectơ sinh $e_1 = (1/\sqrt{10}, 3/\sqrt{10})$. Từ đó xác định được vectơ biểu diễn trên X là $u = (1/10, 3/10)$. 
> Mở rộng Hahn-Banach duy nhất trên $\mathbb{R}^2$ chính là thao tác lấy tích trong với u: $g(x,y) = \frac{x}{10} + \frac{3y}{10}$.