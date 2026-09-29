
> [!def] Xác suất có điều kiện và Luật nhân xác suất
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ và hai biến cố $A, B \in \mathcal{F}$ thỏa mãn $\mathbb{P}(B) > 0$. Xác suất có điều kiện của $A$ khi biết $B$ được định nghĩa bởi
> 
> $$\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}.$$
> 
> Từ định nghĩa này, ta có công thức nhân xác suất
> 
> $$\mathbb{P}(A \cap B) = \mathbb{P}(A \mid B)\mathbb{P}(B) = \mathbb{P}(B \mid A)\mathbb{P}(A) \quad (\text{khi } \mathbb{P}(A) > 0, \mathbb{P}(B) > 0).$$
> 
> Tổng quát cho $n$ biến cố $A_1, A_2, \dots, A_n$ với $\mathbb{P}(A_1 \cap \dots \cap A_{n-1}) > 0$:
> 
> $$\mathbb{P}(A_1 \cap A_2 \cap \dots \cap A_n) = \mathbb{P}(A_1)\mathbb{P}(A_2 \mid A_1)\mathbb{P}(A_3 \mid A_1 \cap A_2) \dots \mathbb{P}(A_n \mid A_1 \cap \dots \cap A_{n-1}).$$

> [!def] Hệ biến cố đầy đủ
> Một họ đếm được các biến cố $\{B_k\}_{k \in I} \subset \mathcal{F}$ được gọi là một hệ đầy đủ (hay một phân hoạch của không gian mẫu $\Omega$) nếu thỏa mãn:
> 
> 1. $B_j \cap B_k = \emptyset$ với mọi $j \neq k$.
> 2. $\bigcup_{k \in I} B_k = \Omega$.

> [!prp] Công thức xác suất toàn phần
> Cho $\{B_k\}_{k \in I}$ là một hệ đầy đủ các biến cố với $\mathbb{P}(B_k) > 0$ với mọi $k \in I$. Khi đó, với mọi biến cố $A \in \mathcal{F}$:
> 
> $$\mathbb{P}(A) = \sum_{k \in I} \mathbb{P}(A \cap B_k) = \sum_{k \in I} \mathbb{P}(A \mid B_k)\mathbb{P}(B_k).$$

> [!prf]
> Vì $\bigcup_{k \in I} B_k = \Omega$, ta phân tích biến cố $A$:
> 
> $$A = A \cap \Omega = A \cap \left( \bigcup_{k \in I} B_k \right) = \bigcup_{k \in I} (A \cap B_k).$$
> 
> Do các tập $B_k$ đôi một rời nhau nên các tập $(A \cap B_k)$ cũng đôi một rời nhau. Theo tính chất cộng tính đếm được của độ đo xác suất:
> 
> $$\mathbb{P}(A) = \sum_{k \in I} \mathbb{P}(A \cap B_k).$$
> 
> Áp dụng công thức nhân xác suất $\mathbb{P}(A \cap B_k) = \mathbb{P}(A \mid B_k)\mathbb{P}(B_k)$, ta có điều phải chứng minh.

> [!prp] Công thức xác suất toàn phần dạng có điều kiện
> Cho $\{B_k\}_{k \in I}$ là một hệ đầy đủ và biến cố $C \in \mathcal{F}$ thỏa mãn $\mathbb{P}(C) > 0$. Với mọi biến cố $A \in \mathcal{F}$:
> 
> $$\mathbb{P}(A \mid C) = \sum_{k \in I} \mathbb{P}(A \mid B_k \cap C)\mathbb{P}(B_k \mid C),$$
> 
> trong đó các số hạng ứng với $\mathbb{P}(B_k \cap C) = 0$ được quy ước bằng $0$.

> [!prf]
> Theo định nghĩa xác suất có điều kiện và phân tích trên hệ đầy đủ $\{B_k\}$:
> 
> $$\mathbb{P}(A \mid C) = \frac{\mathbb{P}(A \cap C)}{\mathbb{P}(C)} = \frac{\mathbb{P}\left(\bigcup_{k \in I} (A \cap B_k \cap C)\right)}{\mathbb{P}(C)} = \frac{\sum_{k \in I} \mathbb{P}(A \cap B_k \cap C)}{\mathbb{P}(C)}.$$
> 
> Với mỗi $k$ sao cho $\mathbb{P}(B_k \cap C) > 0$, ta có:
> 
> $$\mathbb{P}(A \cap B_k \cap C) = \mathbb{P}(A \mid B_k \cap C)\mathbb{P}(B_k \cap C) = \mathbb{P}(A \mid B_k \cap C)\mathbb{P}(B_k \mid C)\mathbb{P}(C).$$
> 
> Thay vào tử số và triệt tiêu $\mathbb{P}(C) > 0$, ta thu được kết quả.

> [!def] Quá trình ngẫu nhiên và Quỹ đạo
> Gọi $(\Omega, \mathcal{F}, \mathbb{P})$ là một không gian xác suất và $(I, \mathcal{I})$ là không gian trạng thái (*state-space*). Một quá trình ngẫu nhiên là một họ các biến ngẫu nhiên $(X_t)_{t \in T}$ xác định trên $(\Omega, \mathcal{F}, \mathbb{P})$ nhận giá trị trong $(I, \mathcal{I})$.
> 
> Tập chỉ số $T$ biểu diễn thời gian:
> * Nếu $T$ đếm được (chẳng hạn $T = \mathbb{N}$), quá trình được gọi là quá trình ngẫu nhiên thời gian rời rạc.
> * Nếu $T$ liên tục (chẳng hạn $T = \mathbb{R}^+$ hoặc $[0, t_0]$), quá trình được gọi là quá trình ngẫu nhiên thời gian liên tục.
> 
> Với mỗi biến cố sơ cấp $\omega \in \Omega$ cố định, ánh xạ
> 
> $$T \to I, \quad t \mapsto X_t(\omega)$$
> 
> được gọi là một quỹ đạo (*trajectory* hay *sample path*) của quá trình ngẫu nhiên.

> [!def] Không gian trạng thái, Độ đo và Phân phối ban đầu
> Giả sử không gian trạng thái $I$ là tập đếm được, $I = \{i, j, k, \dots\}$. Mỗi phần tử $i \in I$ được gọi là một trạng thái (*state*).
> 
> * Một vector hàng $\lambda = (\lambda_i : i \in I)$ được gọi là một độ đo (*measure*) trên $I$ nếu $\lambda_i \ge 0$ với mọi $i \in I$.
> * Nếu $\sum_{i \in I} \lambda_i = 1$, thì $\lambda$ được gọi là một phân phối xác suất (*distribution*).
> * Phân phối ban đầu của dãy biến ngẫu nhiên $(X_n)_{n \ge 0}$ là vector hàng $\lambda = (\lambda_i : i \in I)$ với $\lambda_i = \mathbb{P}(X_0 = i)$. Trường hợp xích xuất phát chắc chắn từ trạng thái $i$, ta có $\lambda = \delta_i = (0, \dots, 1, \dots, 0)$.

> [!def] Ma trận ngẫu nhiên
> Một ma trận $P = (p_{ij})_{i,j \in I}$ được gọi là một ma trận ngẫu nhiên (*stochastic matrix*) nếu:
> 
> 1. $p_{ij} \ge 0$ với mọi $i, j \in I$.
> 2. $\sum_{j \in I} p_{ij} = 1$ với mọi $i \in I$ (mỗi hàng của $P$ là một phân phối xác suất trên $I$).

> [!def] Xích Markov rời rạc và Tính thuần nhất
> Dãy các biến ngẫu nhiên $(X_n)_{n \ge 0}$ nhận giá trị trong tập đếm được $I$ được gọi là một xích Markov với phân phối ban đầu $\lambda$ và ma trận chuyển $P = (p_{ij})$ nếu với mọi $n \ge 0$ và mọi dãy trạng thái $i_0, i_1, \dots, i_{n+1} \in I$:
> 
> 1. $\mathbb{P}(X_0 = i_0) = \lambda_{i_0}$.
> 2. $\mathbb{P}(X_{n+1} = i_{n+1} \mid X_0 = i_0, \dots, X_n = i_n) = \mathbb{P}(X_{n+1} = i_{n+1} \mid X_n = i_n) = p_{i_n i_{n+1}}$ (tính chất Markov).
> 
> Xích Markov được gọi là thuần nhất theo thời gian (*homogeneous*) nếu xác suất chuyển không phụ thuộc vào thời điểm $n$:
> 
> $$\mathbb{P}(X_{n+1} = j \mid X_n = i) = \mathbb{P}(X_1 = j \mid X_0 = i) = p_{ij}, \quad \forall n \ge 0.$$

> [!prp] Đặc trưng phân phối đồng thời của Xích Markov
> Dãy biến ngẫu nhiên $(X_n)_{n \ge 0}$ là xích Markov với phân phối ban đầu $\lambda$ và ma trận chuyển $P$ khi và chỉ khi với mọi $n \ge 0$ và mọi trạng thái $i_0, i_1, \dots, i_n \in I$:
> 
> $$\mathbb{P}(X_0 = i_0, X_1 = i_1, \dots, X_n = i_n) = \lambda_{i_0} p_{i_0 i_1} p_{i_1 i_2} \dots p_{i_{n-1} i_n}.$$

> [!prf]
> Áp dụng luật nhân xác suất cho dãy biến cố:
> 
> $$\mathbb{P}(X_0 = i_0, \dots, X_n = i_n) = \mathbb{P}(X_0 = i_0) \prod_{k=0}^{n-1} \mathbb{P}(X_{k+1} = i_{k+1} \mid X_0 = i_0, \dots, X_k = i_k).$$
> 
> Theo tính chất Markov, $\mathbb{P}(X_{k+1} = i_{k+1} \mid X_0 = i_0, \dots, X_k = i_k) = p_{i_k i_{k+1}}$ và $\mathbb{P}(X_0 = i_0) = \lambda_{i_0}$, ta nhận được trực tiếp đẳng thức. Chiều ngược lại được suy ra bằng cách lập tỉ số xác suất có điều kiện theo định nghĩa.

> [!def] Xác suất chuyển sau $n$ bước và Phương trình Chapman – Kolmogorov
> Xác suất chuyển từ trạng thái $i$ sang trạng thái $j$ sau $n$ bước được ký hiệu là:
> 
> $$p_{ij}^{(n)} = \mathbb{P}(X_n = j \mid X_0 = i) = \mathbb{P}(X_{m+n} = j \mid X_m = i).$$
> 
> Ma trận chuyển sau $n$ bước là $P^{(n)} = (p_{ij}^{(n)})_{i, j \in I}$ với quy ước $P^{(0)} = I$ (ma trận đơn vị).
> 
> Với mọi số nguyên không âm $m, n \ge 0$ và mọi $i, j \in I$, phương trình Chapman – Kolmogorov phát biểu rằng:
> 
> $$p_{ij}^{(m+n)} = \sum_{k \in I} p_{ik}^{(m)} p_{kj}^{(n)}.$$
> 
> Dưới dạng ma trận:
> 
> $$P^{(m+n)} = P^{(m)} P^{(n)} \implies P^{(n)} = P^n.$$

> [!prf]
> Cố định thời điểm trung gian $m$. Họ biến cố $\{X_m = k\}_{k \in I}$ tạo thành một hệ đầy đủ các biến cố trên $\Omega$. Áp dụng công thức xác suất toàn phần dạng có điều kiện:
> 
> $$p_{ij}^{(m+n)} = \mathbb{P}(X_{m+n} = j \mid X_0 = i) = \sum_{k \in I} \mathbb{P}(X_{m+n} = j \mid X_m = k, X_0 = i)\mathbb{P}(X_m = k \mid X_0 = i).$$
> 
> Theo tính chất Markov và tính thuần nhất thời gian:
> 
> $$\mathbb{P}(X_{m+n} = j \mid X_m = k, X_0 = i) = \mathbb{P}(X_{m+n} = j \mid X_m = k) = p_{kj}^{(n)}.$$
> 
> Đồng thời $\mathbb{P}(X_m = k \mid X_0 = i) = p_{ik}^{(m)}$. Thay vào biểu thức tổng:
> 
> $$p_{ij}^{(m+n)} = \sum_{k \in I} p_{ik}^{(m)} p_{kj}^{(n)}.$$
> 
> Phép tính trên chính là định nghĩa phần tử hàng $i$ cột $j$ của tích hai ma trận $P^{(m)} P^{(n)}$. Bằng quy nạp ta có $P^{(n)} = P^n$.

> [!rem] Công thức kết hợp thường dùng trong biến đổi
> 
> * Chuyển trạng thái qua phân hoạch trung gian:
> 
> $$\mathbb{P}(X_n = j \mid X_0 = i) = \sum_{k \in I} \mathbb{P}(X_m = k \mid X_0 = i)\mathbb{P}(X_n = j \mid X_m = k) \iff p_{ij}^{(n)} = \sum_{k \in I} p_{ik}^{(m)} p_{kj}^{(n-m)}.$$
> 
> * Tiến hóa của phân phối trạng thái (nhân trái):
> 
> $$\mathbb{P}(X_n = j) = \sum_{i \in I} \mathbb{P}(X_0 = i)\mathbb{P}(X_n = j \mid X_0 = i) = \sum_{i \in I} \lambda_i p_{ij}^{(n)} \iff \lambda^{(n)} = \lambda^{(0)} P^n.$$
> 
> * Xác suất đồng thời của đường đi trạng thái:
> 
> $$\mathbb{P}(X_0 = i_0, X_1 = i_1, \dots, X_n = i_n) = \lambda_{i_0} \prod_{t=0}^{n-1} p_{i_t i_{t+1}}.$$