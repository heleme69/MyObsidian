
# I. Ánh xạ Tuyến tính, Không gian con và Không gian Thương

> [!def] Ánh xạ Tuyến tính và Các không gian liên kết
> Cho $V, W$ là các không gian véctơ trên trường $\mathbb{K}$ ($\mathbb{R}$ hoặc $\mathbb{C}$). Ánh xạ $T: V \to W$ được gọi là **tuyến tính** nếu:
> 1. $T(x + y) = T(x) + T(y)$ với mọi $x, y \in V$.
> 2. $T(\alpha x) = \alpha T(x)$ với mọi $x \in V$ và $\alpha \in \mathbb{K}$.
>
> Hai không gian con cơ bản liên kết với $T$:
> * **Hạt nhân (Kernel / Null space):** $\ker(T) = \{x \in V \mid T(x) = 0\} \subseteq V$.
> * **Ảnh (Image / Range):** $\operatorname{Im}(T) = \{T(x) \mid x \in V\} \subseteq W$.

> [!thm] Định lý Hạng số – Số chiều hạt nhân (Rank–Nullity Theorem)
> Cho $V$ là không gian véctơ hữu hạn chiều và $T: V \to W$ là ánh xạ tuyến tính. Khi đó:
> $$\dim(V) = \dim(\ker(T)) + \dim(\operatorname{Im}(T)).$$
> Hệ quả trực tiếp: Nếu $\dim(V) = \dim(W) < \infty$, thì $T$ là đơn ánh khi và chỉ khi $T$ là toàn ánh, khi và chỉ khi $T$ là song ánh khả nghịch.

> [!prf]
> Đặt $k = \dim(\ker(T))$ và $n = \dim(V)$. Chọn một cơ sở $\{u_1, \dots, u_k\}$ của $\ker(T)$.
>
> Theo định lý bổ sung cơ sở, ta thác triển hệ độc lập tuyến tính này thành một cơ sở của toàn bộ không gian $V$:
> $$\{u_1, \dots, u_k, v_1, \dots, v_{n-k}\}.$$
> Ta chứng minh hệ $\{T(v_1), \dots, T(v_{n-k})\}$ là một cơ sở của $\operatorname{Im}(T)$.
>
> Hệ sinh: Với mọi $y \in \operatorname{Im}(T)$, tồn tại $x \in V$ sao cho $y = T(x)$. Biểu diễn $x$ qua cơ sở của $V$:
> $$x = \sum_{i=1}^k \alpha_i u_i + \sum_{j=1}^{n-k} \beta_j v_j.$$
> Do tính tuyến tính của $T$ và $u_i \in \ker(T)$ nên $T(u_i) = 0$:
> $$y = T(x) = \sum_{i=1}^k \alpha_i T(u_i) + \sum_{j=1}^{n-k} \beta_j T(v_j) = \sum_{j=1}^{n-k} \beta_j T(v_j).$$
> Do đó $\{T(v_1), \dots, T(v_{n-k})\}$ sinh ra $\operatorname{Im}(T)$.
>
> Độc lập tuyến tính: Giả sử $\sum_{j=1}^{n-k} c_j T(v_j) = 0$. Khi đó:
> $$T\left( \sum_{j=1}^{n-k} c_j v_j \right) = 0 \implies \sum_{j=1}^{n-k} c_j v_j \in \ker(T).$$
> Vì $\{u_1, \dots, u_k\}$ là cơ sở của $\ker(T)$, tồn tại các hệ số $d_1, \dots, d_k$ sao cho:
> $$\sum_{j=1}^{n-k} c_j v_j = \sum_{i=1}^k d_i u_i \iff \sum_{j=1}^{n-k} c_j v_j - \sum_{i=1}^k d_i u_i = 0.$$
> Vì $\{u_1, \dots, u_k, v_1, \dots, v_{n-k}\}$ độc lập tuyến tính trong $V$, mọi hệ số bắt buộc phải bằng $0$, đặc biệt $c_j = 0$ với mọi $j = 1, \dots, n-k$.
>
> Vậy $\dim(\operatorname{Im}(T)) = n - k = \dim(V) - \dim(\ker(T))$.

> [!def] Không gian Thương (Quotient Space)
> Cho $V$ là không gian véctơ và $M$ là một không gian con của $V$.
> Quan hệ tương đương xác định bởi: $x \sim y \iff x - y \in M$.
> Lớp tương đương chứa $x$ là tập hợp $x + M = \{x + m \mid m \in M\}$.
>
> Tập hợp tất cả các lớp tương đương được ký hiệu là $V/M$. Khi trang bị hai phép toán:
> 1. Phép cộng: $(x + M) + (y + M) = (x + y) + M$.
> 2. Phép nhân vô hướng: $\alpha(x + M) = (\alpha x) + M$ với $\alpha \in \mathbb{K}$.
>
> thì $V/M$ trở thành một không gian véctơ, gọi là **không gian thương** của $V$ theo $M$. Ánh xạ $\pi: V \to V/M$ xác định bởi $\pi(x) = x + M$ là một toàn ánh tuyến tính, gọi là **phép chiếu chính tắc**, thỏa mãn $\ker(\pi) = M$.

> [!thm] Định lý Đồng cấu thứ nhất và Số chiều của Không gian Thương
> 1. Cho $T: V \to W$ là ánh xạ tuyến tính. Khi đó tồn tại duy nhất một đẳng cấu tuyến tính $\widetilde{T}: V/\ker(T) \to \operatorname{Im}(T)$ sao cho $T = \widetilde{T} \circ \pi$, nghĩa là $\widetilde{T}(x + \ker(T)) = T(x)$.
> 2. Nếu $V$ hữu hạn chiều và $M$ là không gian con của $V$, thì:
>    $$\dim(V/M) = \dim(V) - \dim(M).$$

> [!prf]
> Đặt $K = \ker(T)$. Xét ánh xạ $\widetilde{T}: V/K \to \operatorname{Im}(T)$ cho bởi $\widetilde{T}(x + K) = T(x)$.
>
> Ánh xạ định nghĩa tốt: Giả sử $x + K = y + K$, khi đó $x - y \in K = \ker(T)$. Suy ra $T(x - y) = 0 \iff T(x) = T(y)$.
>
> Tuyến tính: Với mọi $x, y \in V$ và $\alpha \in \mathbb{K}$:
> $\widetilde{T}((x + K) + (y + K)) = \widetilde{T}((x + y) + K) = T(x + y) = T(x) + T(y) = \widetilde{T}(x + K) + \widetilde{T}(y + K)$,
> $\widetilde{T}(\alpha(x + K)) = \widetilde{T}(\alpha x + K) = T(\alpha x) = \alpha T(x) = \alpha \widetilde{T}(x + K)$.
>
> Đơn ánh: Giả sử $\widetilde{T}(x + K) = 0$. Khi đó $T(x) = 0 \implies x \in \ker(T) = K \implies x + K = 0 + K$.
>
> Toàn ánh: Với mọi $z \in \operatorname{Im}(T)$, tồn tại $x \in V$ sao cho $z = T(x) = \widetilde{T}(x + K)$.
>
> Vậy $\widetilde{T}$ là một đẳng cấu tuyến tính, suy ra $V/\ker(T) \cong \operatorname{Im}(T)$.
>
> Áp dụng cho phép chiếu chính tắc $\pi: V \to V/M$ có $\ker(\pi) = M$ và $\operatorname{Im}(\pi) = V/M$. Theo Định lý Hạng số – Số chiều hạt nhân:
> $$\dim(V) = \dim(\ker(\pi)) + \dim(\operatorname{Im}(\pi)) = \dim(M) + \dim(V/M) \implies \dim(V/M) = \dim(V) - \dim(M).$$

# II. Phổ của Ánh xạ Tuyến tính và Toán tử Đối xứng

> [!def] Trị riêng, Véctơ riêng và Phổ (Spectrum)
> Cho $V$ là không gian véctơ trên $\mathbb{K}$ và $T: V \to V$ là một toán tử tuyến tính.
> * Vô hướng $\lambda \in \mathbb{K}$ được gọi là một **trị riêng** của $T$ nếu tồn tại véctơ $v \in V \setminus \{0\}$ sao cho:
>   $$T(v) = \lambda v \iff (\lambda I - T)v = 0.$$
>   Véctơ $v$ khi đó được gọi là **véctơ riêng** ứng với trị riêng $\lambda$.
> * **Không gian con riêng** ứng với $\lambda$ là hạt nhân $E_\lambda = \ker(\lambda I - T) \subseteq V$.
> * **Phổ của $T$**, ký hiệu là $\sigma(T)$, là tập hợp tất cả các phần tử $\lambda \in \mathbb{K}$ sao cho toán tử $(\lambda I - T)$ không khả nghịch:
>   $$\sigma(T) = \{\lambda \in \mathbb{K} \mid (\lambda I - T) \text{ không khả nghịch}\}.$$
>
> Trong không gian hữu hạn chiều $\dim(V) < \infty$, $(\lambda I - T)$ không khả nghịch khi và chỉ khi nó không phải là đơn ánh ($\ker(\lambda I - T) \ne \{0\}$). Do đó, phổ $\sigma(T)$ trùng hoàn toàn với tập hợp tất cả các trị riêng của $T$:
> $$\sigma(T) = \{\lambda \in \mathbb{K} \mid \det(\lambda I - T) = 0\}.$$

> [!thm] Định lý Phổ cho Toán tử Tự liên hợp (Ma trận Đối xứng thực)
> Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng thực ($A = A^T$). Khi đó:
> 1. Toàn bộ phổ của $A$ đều thuộc trường số thực: $\sigma(A) \subset \mathbb{R}$.
> 2. Các véctơ riêng ứng với các trị riêng phân biệt thì đôi một trực giao.
> 3. Tồn tại ma trận trực giao $P \in \mathbb{R}^{n \times n}$ ($P^T = P^{-1}$) sao cho $A = PDP^T$ với $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$. Tương đương với việc $\mathbb{R}^n$ có một cơ sở trực chuẩn gồm toàn các véctơ riêng của $A$.

> [!prf]
> 4. Xét $A$ như một toán tử trên $\mathbb{C}^n$ với tích vô hướng phức $\langle x, y \rangle = y^* x$. Giả sử $\lambda \in \sigma(A)$ và $v \in \mathbb{C}^n \setminus \{0\}$ thỏa mãn $Av = \lambda v$. Khi đó:
> $$\langle Av, v \rangle = v^* (Av) = v^* (\lambda v) = \lambda (v^* v) = \lambda \|v\|^2.$$
> Mặt khác, vì $A$ là ma trận thực và $A = A^T$, ta có $A^* = \overline{A^T} = A$. Do đó:
> $$\langle Av, v \rangle = v^* A v = (A^* v)^* v = (Av)^* v = (\lambda v)^* v = \bar{\lambda} (v^* v) = \bar{\lambda} \|v\|^2.$$
> Vì $v \ne 0 \implies \|v\|^2 > 0$, ta suy ra $\lambda = \bar{\lambda} \implies \lambda \in \mathbb{R}$.
>
> 5. Giả sử $A u = \lambda u$ và $A v = \mu v$ với $\lambda \ne \mu \in \mathbb{R}$. Do tính đối xứng:
> $$\lambda \langle u, v \rangle = \langle Au, v \rangle = u^T A^T v = u^T (Av) = \mu \langle u, v \rangle \implies (\lambda - \mu)\langle u, v \rangle = 0.$$
> Vì $\lambda \ne \mu$, ta buộc phải có $\langle u, v \rangle = 0$, nghĩa là $u \perp v$.
>
> 6. Quy nạp theo số chiều $n$: Với $n=1$, khẳng định hiển nhiên. Giả sử đúng cho $n-1$.
> Đa thức đặc trưng của $A$ trên $\mathbb{C}$ có ít nhất một nghiệm $\lambda_1$, và theo phần 1 thì $\lambda_1 \in \mathbb{R}$. Chọn véctơ riêng $u_1 \in \mathbb{R}^n$ ứng với $\lambda_1$ sao cho $\|u_1\| = 1$.
> Xét không gian bù trực giao $W = u_1^\perp$. Với mọi $w \in W$:
> $$\langle Aw, u_1 \rangle = \langle w, A u_1 \rangle = \langle w, \lambda_1 u_1 \rangle = \lambda_1 \langle w, u_1 \rangle = 0 \implies Aw \in W.$$
> Vậy $W$ là không gian con bất biến dưới $A$. Thu hẹp của $A$ lên $W$ (có chiều $n-1$) là một toán tử đối xứng. Theo giả thiết quy nạp, $W$ có một cơ sở trực chuẩn $\{u_2, \dots, u_n\}$ gồm các véctơ riêng của $A$. Khi đó $\{u_1, u_2, \dots, u_n\}$ là cơ sở trực chuẩn của $\mathbb{R}^n$ gồm các véctơ riêng của $A$. Ma trận $P$ có các cột là các véctơ này chính là ma trận trực giao cần tìm.

# III. Hình học Trực giao và Phép Chiếu Tuyến tính

> [!def] Toán tử Chiếu (Projection Operator)
> Cho $V$ là không gian véctơ. Toán tử tuyến tính $P: V \to V$ được gọi là một **phép chiếu** (hoặc toán tử lũy đẳng) nếu:
> $$P^2 = P.$$
> Khi đó $V = \operatorname{Im}(P) \oplus \ker(P)$, và $P$ là phép chiếu lên $\operatorname{Im}(P)$ song song với $\ker(P)$.

> [!prob] Đặc trưng của Phép Chiếu Trực giao
> Cho không gian Euclid $\mathbb{R}^n$ và ma trận $P \in \mathbb{R}^{n \times n}$. Chứng minh rằng $P$ là phép chiếu trực giao lên không gian con $M = \operatorname{Im}(P)$ khi và chỉ khi:
> $$P^2 = P \quad \text{và} \quad P^T = P.$$

> [!prf]
> Chiều thuận ($\implies$): Giả sử $P$ là phép chiếu trực giao lên $M$, nghĩa là với mọi $x \in \mathbb{R}^n$, $Px \in M$ và $x - Px \in M^\perp$.
> Vì $Px \in M$, áp dụng phép chiếu một lần nữa ta có $P(Px) = Px$, suy ra $P^2 = P$.
> Với mọi $x, y \in \mathbb{R}^n$, biểu diễn $x = Px + (x - Px)$ và $y = Py + (y - Py)$. Vì $Px, Py \in M$ và $(x - Px), (y - Py) \in M^\perp$, ta có:
> $$\langle Px, y \rangle = \langle Px, Py + (y - Py) \rangle = \langle Px, Py \rangle + 0 = \langle Px, Py \rangle.$$
> Tương tự:
> $$\langle x, Py \rangle = \langle Px + (x - Px), Py \rangle = \langle Px, Py \rangle + 0 = \langle Px, Py \rangle.$$
> Do đó $\langle Px, y \rangle = \langle x, Py \rangle$ với mọi $x, y$, tương đương với $x^T P^T y = x^T P y$, suy ra $P^T = P$.
>
> Chiều nghịch ($\impliedby$): Giả sử $P^2 = P = P^T$. Đặt $M = \operatorname{Im}(P)$.
> Với mọi $x \in \mathbb{R}^n$, ta viết $x = Px + (x - Px)$. Hiển nhiên $Px \in M$.
> Ta chứng minh $(x - Px) \in M^\perp$. Thật vậy, với mọi $y \in M$, tồn tại $w \in \mathbb{R}^n$ sao cho $y = Pw$. Khi đó:
> $$\langle x - Px, y \rangle = \langle x - Px, Pw \rangle = (x - Px)^T (Pw) = x^T (I - P)^T P w = x^T (I - P) P w.$$
> Vì $(I - P)P = P - P^2 = P - P = 0$, ta có $\langle x - Px, y \rangle = 0$.
> Vậy $(x - Px) \perp M$, tức $P$ chính là phép chiếu trực giao lên $M$.

> [!prob] Bất đẳng thức Hadamard về Thể tích
> Cho ma trận $A = [v_1 \ v_2 \ \dots \ v_n] \in \mathbb{R}^{n \times n}$ có các cột là các véctơ $v_1, \dots, v_n$. Chứng minh:
> $$|\det(A)| \le \prod_{i=1}^n \|v_i\|_2.$$
> Đẳng thức xảy ra khi và chỉ khi hệ $\{v_1, \dots, v_n\}$ là một họ trực giao hoặc có ít nhất một véctơ $v_i = 0$.

> [!prf]
> Nếu tồn tại $v_i = 0$ hoặc hệ $\{v_1, \dots, v_n\}$ phụ thuộc tuyến tính, thì $\det(A) = 0$, bất đẳng thức hiển nhiên đúng vì vế phải không âm.
>
> Giả sử $\{v_1, \dots, v_n\}$ độc lập tuyến tính. Áp dụng quá trình trực chuẩn hóa Gram–Schmidt cho các cột của $A$, ta thu được phân tích $QR$:
> $$A = QR,$$
> trong đó $Q$ là ma trận trực giao ($Q^T Q = I$) và $R = [r_{ij}]$ là ma trận tam giác trên với $r_{ii} > 0$.
> Theo công thức của Gram–Schmidt, mỗi cột $v_i$ được biểu diễn:
> $$v_i = \sum_{j=1}^{i-1} r_{ji} q_j + r_{ii} q_i,$$
> với $\{q_1, \dots, q_n\}$ là hệ trực chuẩn (các cột của $Q$). Áp dụng định lý Pythagoras:
> $$\|v_i\|_2^2 = \sum_{j=1}^{i-1} r_{ji}^2 + r_{ii}^2 \ge r_{ii}^2 \implies r_{ii} \le \|v_i\|_2.$$
> Vì $Q$ trực giao nên $|\det(Q)| = 1$. Định thức của ma trận tam giác $R$ bằng tích các phần tử đường chéo. Do đó:
> $$|\det(A)| = |\det(Q)| \cdot |\det(R)| = 1 \cdot \prod_{i=1}^n r_{ii} \le \prod_{i=1}^n \|v_i\|_2.$$
> Dấu bằng xảy ra khi và chỉ khi $r_{ji} = 0$ với mọi $j < i$, tức ma trận $R$ là ma trận đường chéo, tương đương với việc các cột $v_i$ đôi một trực giao.

# IV. Dạng Toàn phương và Ma trận Xác định dương

> [!def] Dạng Song tuyến tính và Dạng Toàn phương
> Cho $V$ là không gian véctơ thực $n$-chiều.
> * Ánh xạ $B: V \times V \to \mathbb{R}$ được gọi là **dạng song tuyến tính đối xứng** nếu nó tuyến tính theo từng biến và $B(x, y) = B(y, x)$ với mọi $x, y \in V$.
> * Ánh xạ $Q: V \to \mathbb{R}$ xác định bởi $Q(x) = B(x, x)$ được gọi là **dạng toàn phương** cảm sinh bởi $B$.
> * Trong cơ sở chính tắc của $\mathbb{R}^n$, tồn tại ma trận đối xứng duy nhất $A \in \mathbb{R}^{n \times n}$ sao cho $Q(x) = x^T A x = \langle Ax, x \rangle$.
> * Ma trận $A$ (và dạng toàn phương $Q$) được gọi là **xác định dương** nếu:
>   $$\langle Ax, x \rangle > 0 \quad \forall x \in \mathbb{R}^n \setminus \{0\}.$$

> [!prob] Cận dưới phổ cho Ma trận Xác định dương
> Cho ma trận đối xứng $A \in \mathbb{R}^{n \times n}$ xác định dương. Chứng minh rằng:
> $$\langle Ax, x \rangle \ge \lambda_{\min}(A) \|x\|^2 \quad \forall x \in \mathbb{R}^n,$$
> trong đó $\lambda_{\min}(A) > 0$ là trị riêng nhỏ nhất của $A$.

> [!prf]
> Theo Định lý Phổ, tồn tại ma trận trực giao $P$ sao cho $A = P D P^T$ với $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ và $P^T = P^{-1}$.
> Vì $A$ xác định dương, lấy véctơ riêng đơn vị $u_i$ ứng với $\lambda_i$, ta có $\lambda_i = \langle A u_i, u_i \rangle > 0$, suy ra mọi trị riêng đều thực dương.
>
> Với mọi véctơ $x \in \mathbb{R}^n$, đặt $y = P^T x = (y_1, \dots, y_n)^T$. Do $P$ trực giao nên $\|y\|^2 = y^T y = x^T P P^T x = x^T x = \|x\|^2$.
> Biểu diễn dạng toàn phương qua tọa độ $y$:
> $$\langle Ax, x \rangle = x^T A x = x^T (P D P^T) x = (P^T x)^T D (P^T x) = y^T D y = \sum_{i=1}^n \lambda_i y_i^2.$$
> Vì $\lambda_i \ge \lambda_{\min}(A) > 0$ với mọi $i = 1, \dots, n$, ta có:
> $$\sum_{i=1}^n \lambda_i y_i^2 \ge \lambda_{\min}(A) \sum_{i=1}^n y_i^2 = \lambda_{\min}(A) \|y\|^2 = \lambda_{\min}(A) \|x\|^2.$$
> Đẳng thức đạt được khi $x$ là véctơ riêng ứng với $\lambda_{\min}(A)$.

> [!prob] Tiêu chuẩn Phân tích $B^T B$
> Chứng minh rằng ma trận đối xứng thực $A \in \mathbb{R}^{n \times n}$ xác định dương khi và chỉ khi tồn tại một ma trận thực không suy biến $B \in \mathbb{R}^{n \times n}$ sao cho:
> $$A = B^T B.$$

> [!prf]
> Chiều thuận ($\implies$): Giả sử $A$ xác định dương.
> Theo Định lý Phổ, $A = P D P^T$ với $P$ trực giao và $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ có $\lambda_i > 0$ với mọi $i$.
> Xét ma trận đường chéo căn bậc hai $D^{1/2} = \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})$. Ma trận này khả nghịch và thỏa mãn $(D^{1/2})^T = D^{1/2}$, $D^{1/2} D^{1/2} = D$. Khi đó:
> $$A = P D^{1/2} D^{1/2} P^T = (D^{1/2} P^T)^T (D^{1/2} P^T).$$
> Đặt $B = D^{1/2} P^T$. Vì $P^T$ và $D^{1/2}$ đều là các ma trận khả nghịch nên tích $B$ là ma trận không suy biến, và ta có $A = B^T B$.
>
> Chiều nghịch ($\impliedby$): Giả sử $A = B^T B$ với $B$ khả nghịch.
> Ta có $A^T = (B^T B)^T = B^T (B^T)^T = B^T B = A$, do đó $A$ đối xứng.
> Với mọi véctơ $x \in \mathbb{R}^n \setminus \{0\}$:
> $$\langle Ax, x \rangle = x^T (B^T B) x = (Bx)^T (Bx) = \|Bx\|^2.$$
> Vì $B$ khả nghịch nên $\ker(B) = \{0\}$. Do $x \ne 0$, ta có $Bx \ne 0$.
> Chuẩn của một véctơ khác không luôn dương nên $\|Bx\|^2 > 0 \implies \langle Ax, x \rangle > 0$.
> Vậy $A$ xác định dương.

> [!prob] Tính chất của các Phần tử Đường chéo chính
> Cho ma trận đối xứng xác định dương $A = [a_{ij}] \in \mathbb{R}^{n \times n}$. Chứng minh rằng tất cả các phần tử trên đường chéo chính đều dương:
> $$a_{ii} > 0 \quad \forall i = 1, \dots, n.$$

> [!prf]
> Xét hệ cơ sở chính tắc $\{e_1, e_2, \dots, e_n\}$ của $\mathbb{R}^n$, trong đó véctơ $e_i$ có tọa độ thứ $i$ bằng $1$ và các tọa độ khác bằng $0$. Hiển nhiên $e_i \ne 0$.
>
> Xét dạng toàn phương tại véctơ $e_i$:
> $$\langle Ae_i, e_i \rangle = e_i^T A e_i = e_i^T (A e_i) = e_i^T \begin{pmatrix} a_{1i} \\ \vdots \\ a_{ii} \\ \vdots \\ a_{ni} \end{pmatrix} = a_{ii}.$$
> Vì $A$ xác định dương và $e_i \ne 0$, theo định nghĩa ta có:
> $$a_{ii} = \langle Ae_i, e_i \rangle > 0 \quad \forall i = 1, \dots, n.$$

> [!prob] Tính xác định dương của Ma trận Nghịch đảo
> Cho ma trận đối xứng $A \in \mathbb{R}^{n \times n}$ xác định dương. Chứng minh rằng $A$ khả nghịch và $A^{-1}$ cũng là ma trận xác định dương.

> [!prf]
> Theo Định lý Phổ, mọi trị riêng $\lambda_i$ của $A$ đều thỏa mãn $\lambda_i > 0$.
> Do đó $\det(A) = \prod_{i=1}^n \lambda_i > 0 \ne 0$, suy ra $A$ khả nghịch.
>
> Tính đối xứng của $A^{-1}$:
> $$(A^{-1})^T = (A^T)^{-1} = A^{-1}.$$
>
> Tính xác định dương: Lấy véctơ $x \in \mathbb{R}^n \setminus \{0\}$ bất kỳ.
> Đặt $y = A^{-1}x \iff x = Ay$. Vì $A$ khả nghịch và $x \ne 0$, suy ra $y \ne 0$.
> Xét dạng toàn phương của $A^{-1}$:
> $$x^T A^{-1} x = (Ay)^T A^{-1} (Ay) = y^T A^T A^{-1} A y = y^T A (A^{-1} A) y = y^T A y.$$
> Do $A$ xác định dương và $y \ne 0$, ta có $y^T A y > 0$.
> Suy ra $x^T A^{-1} x > 0$ với mọi $x \ne 0$. Vậy $A^{-1}$ xác định dương.

> [!prob] Biến đổi Đồng dư (Congruence Transformation)
> Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng xác định dương và $C \in \mathbb{R}^{n \times n}$ là một ma trận không suy biến. Chứng minh rằng $M = C^T A C$ cũng là ma trận xác định dương.

> [!prf]
> Tính đối xứng của $M$:
> $$M^T = (C^T A C)^T = C^T A^T (C^T)^T = C^T A C = M.$$
>
> Tính xác định dương: Lấy véctơ $x \in \mathbb{R}^n \setminus \{0\}$ bất kỳ. Ta có:
> $$x^T M x = x^T (C^T A C) x = (Cx)^T A (Cx).$$
> Đặt $y = Cx$. Vì $C$ không suy biến nên $\ker(C) = \{0\}$. Do $x \ne 0$, ta có $y \ne 0$.
> Biểu thức trở thành $y^T A y$. Vì $A$ xác định dương và $y \ne 0$, ta có $y^T A y > 0$.
> Suy ra $x^T M x > 0$ với mọi $x \ne 0$. Vậy $M = C^T A C$ xác định dương.

> [!prob] Dấu của Định thức và Vết
> Cho ma trận đối xứng xác định dương $A \in \mathbb{R}^{n \times n}$. Chứng minh rằng:
> $$\det(A) > 0 \quad \text{và} \quad \operatorname{tr}(A) > 0.$$

> [!prf]
> Theo Định lý Phổ, ma trận đối xứng $A$ có $n$ trị riêng thực $\lambda_1, \dots, \lambda_n$.
> Với mỗi trị riêng $\lambda_i$, tồn tại véctơ riêng $v_i \ne 0$ sao cho $Av_i = \lambda_i v_i$.
> Do tính xác định dương của $A$:
> $$\langle Av_i, v_i \rangle = \langle \lambda_i v_i, v_i \rangle = \lambda_i \|v_i\|^2 > 0.$$
> Vì $\|v_i\|^2 > 0$, ta suy ra $\lambda_i > 0$ với mọi $i = 1, \dots, n$.
>
> Định thức của ma trận bằng tích các trị riêng:
> $$\det(A) = \prod_{i=1}^n \lambda_i > 0.$$
>
> Vết của ma trận bằng tổng các trị riêng:
> $$\operatorname{tr}(A) = \sum_{i=1}^n \lambda_i > 0.$$

> [!prob] Cực trị của Tỉ số Rayleigh và Chuẩn Toán tử
> Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng thực. Chứng minh rằng:
> $$\lambda_{\max}(A) = \max_{x \ne 0} \frac{\langle Ax, x \rangle}{\|x\|^2}, \qquad \lambda_{\min}(A) = \min_{x \ne 0} \frac{\langle Ax, x \rangle}{\|x\|^2}.$$
> Từ đó suy ra chuẩn toán tử cảm sinh bởi chuẩn Euclid là $\|A\|_2 = \max_{1 \le i \le n} |\lambda_i(A)|$.

> [!prf]
> Theo Định lý Phổ, tồn tại cơ sở trực chuẩn $\{u_1, \dots, u_n\}$ của $\mathbb{R}^n$ gồm các véctơ riêng của $A$ ứng với các trị riêng được sắp thứ tự $\lambda_{\min} = \lambda_1 \le \lambda_2 \le \dots \le \lambda_n = \lambda_{\max}$.
>
> Mọi véctơ $x \ne 0$ được biểu diễn duy nhất: $x = \sum_{i=1}^n c_i u_i$. Do tính trực chuẩn, ta có:
> $$\|x\|^2 = \sum_{i=1}^n c_i^2, \qquad \langle Ax, x \rangle = \left\langle \sum_{i=1}^n c_i \lambda_i u_i, \sum_{j=1}^n c_j u_j \right\rangle = \sum_{i=1}^n \lambda_i c_i^2.$$
> Vì $\lambda_1 \le \lambda_i \le \lambda_n$ với mọi $i$, ta có đánh giá:
> $$\lambda_1 \sum_{i=1}^n c_i^2 \le \sum_{i=1}^n \lambda_i c_i^2 \le \lambda_n \sum_{i=1}^n c_i^2 \iff \lambda_1 \|x\|^2 \le \langle Ax, x \rangle \le \lambda_n \|x\|^2.$$
> Chia cả hai vế cho $\|x\|^2 > 0$:
> $$\lambda_1 \le \frac{\langle Ax, x \rangle}{\|x\|^2} \le \lambda_n.$$
> Cận trên đạt được tại $x = u_n$ và cận dưới đạt được tại $x = u_1$.
>
> Với chuẩn toán tử: $\|A\|_2^2 = \sup_{\|x\|=1} \|Ax\|^2 = \sup_{\|x\|=1} \langle A^2 x, x \rangle$.
> Vì $A$ đối xứng nên $A^2$ cũng đối xứng và có các trị riêng là $\lambda_i^2$. Theo kết quả tỉ số Rayleigh ở trên:
> $\|A\|_2^2 = \lambda_{\max}(A^2) = \max_{1 \le i \le n} \lambda_i^2 = \left( \max_{1 \le i \le n} |\lambda_i| \right)^2 \implies \|A\|_2 = \max_{1 \le i \le n} |\lambda_i|$.