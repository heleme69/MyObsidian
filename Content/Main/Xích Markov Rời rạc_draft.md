
# Công cụ xác suất nền tảng

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
> Áp dụng luật nhân xác suất $\mathbb{P}(A \cap B_k) = \mathbb{P}(A \mid B_k)\mathbb{P}(B_k)$, ta có điều phải chứng minh.

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
> Với mỗi $k$ sao cho $\mathbb{P}(B_k \cap C) > 0$, theo luật nhân xác suất ta có:
> 
> $$\mathbb{P}(A \cap B_k \cap C) = \mathbb{P}(A \mid B_k \cap C)\mathbb{P}(B_k \cap C) = \mathbb{P}(A \mid B_k \cap C)\mathbb{P}(B_k \mid C)\mathbb{P}(C).$$
> 
> Thay vào tử số và triệt tiêu $\mathbb{P}(C) > 0$, ta thu được kết quả.

> [!prp] Phân phối biên qua phép lấy tổng hệ đầy đủ
> Cho dãy biến ngẫu nhiên $(X_0, X_1, \dots, X_n)$ nhận giá trị trong không gian trạng thái đếm được $I$. Với bất kỳ tập chỉ số con $\{t_1, \dots, t_k\} \subset \{0, 1, \dots, n\}$, phân phối đồng thời của tập con được tính bằng cách lấy tổng phân phối đồng thời toàn phần trên mọi trạng thái có thể của các biến ngẫu nhiên còn lại:
> 
> $$\mathbb{P}(X_{t_1} = i_{t_1}, \dots, X_{t_k} = i_{t_k}) = \sum_{\{i_s : s \notin \{t_1, \dots, t_k\}\}} \mathbb{P}(X_0 = i_0, X_1 = i_1, \dots, X_n = i_n).$$
> 
> Cụ thể, để thu gọn lịch sử từ thời điểm $0$ đến $n-1$ về hai thời điểm $n$ và $n+1$:
> 
> $$\mathbb{P}(X_n = i_n, X_{n+1} = i_{n+1}) = \sum_{i_0 \in I} \dots \sum_{i_{n-1} \in I} \mathbb{P}(X_0 = i_0, \dots, X_{n-1} = i_{n-1}, X_n = i_n, X_{n+1} = i_{n+1}).$$

> [!prf]
> Ta trình bày chứng minh cho trường hợp thu gọn về hai biến ngẫu nhiên $(X_n, X_{n+1})$.
> 
> Đặt biến cố tại hai thời điểm cuối là:
> 
> $$A = \{X_n = i_n, X_{n+1} = i_{n+1}\} = \{\omega \in \Omega : X_n(\omega) = i_n, X_{n+1}(\omega) = i_{n+1}\}.$$
> 
> Với mỗi bộ giá trị quá khứ cụ thể $(i_0, i_1, \dots, i_{n-1}) \in I^n$, ta định nghĩa biến cố:
> 
> $$B(i_0, \dots, i_{n-1}) = \{X_0 = i_0, \dots, X_{n-1} = i_{n-1}\} = \bigcap_{s=0}^{n-1} \{X_s = i_s\}.$$
> 
> Họ các biến cố $\{B(i_0, \dots, i_{n-1})\}_{(i_0, \dots, i_{n-1}) \in I^n}$ lập thành một hệ đầy đủ của không gian mẫu $\Omega$:
> 
> 1. Tính đôi một xung khắc: Nếu hai bộ chỉ số quá khứ khác nhau, tồn tại ít nhất một vị trí $s \in \{0, \dots, n-1\}$ sao cho $i_s \neq i'_s$. Vì ánh xạ $X_s: \Omega \to I$ gán cho mỗi $\omega$ một giá trị duy nhất, ta có $\{X_s = i_s\} \cap \{X_s = i'_s\} = \emptyset$, kéo theo:
> 
> $$B(i_0, \dots, i_{n-1}) \cap B(i'_0, \dots, i'_{n-1}) = \emptyset \quad (\forall (i_0, \dots, i_{n-1}) \neq (i'_0, \dots, i'_{n-1})).$$
> 
> 2. Tính phủ kín không gian mẫu: Với mọi kết quả sơ cấp $\omega \in \Omega$, vector $(X_0(\omega), \dots, X_{n-1}(\omega))$ luôn thuộc vào $I^n$. Do đó:
> 
> $$\bigcup_{(i_0, \dots, i_{n-1}) \in I^n} B(i_0, \dots, i_{n-1}) = \Omega.$$
> 
> Áp dụng công thức xác suất toàn phần cho biến cố $A$ trên hệ đầy đủ trên:
> 
> $$\mathbb{P}(A) = \sum_{(i_0, \dots, i_{n-1}) \in I^n} \mathbb{P}\big(A \cap B(i_0, \dots, i_{n-1})\big).$$
> 
> Theo định nghĩa tập hợp, biến cố giao là:
> 
> $$A \cap B(i_0, \dots, i_{n-1}) = \{X_0 = i_0, \dots, X_{n-1} = i_{n-1}, X_n = i_n, X_{n+1} = i_{n+1}\}.$$
> 
> Thay vào tổng xác suất:
> 
> $$\mathbb{P}(X_n = i_n, X_{n+1} = i_{n+1}) = \sum_{i_0 \in I} \dots \sum_{i_{n-1} \in I} \mathbb{P}(X_0 = i_0, \dots, X_{n-1} = i_{n-1}, X_n = i_n, X_{n+1} = i_{n+1}).$$

# Định nghĩa của Xích Markov rời rạc

> [!def] Quá trình ngẫu nhiên và Quỹ đạo
> Gọi $(\Omega, \mathcal{F}, \mathbb{P})$ là một không gian xác suất và $(I, \mathcal{I})$ là không gian trạng thái (state space). Một quá trình ngẫu nhiên là một họ các biến ngẫu nhiên $(X_t)_{t \in T}$ xác định trên $(\Omega, \mathcal{F}, \mathbb{P})$ nhận giá trị trong $(I, \mathcal{I})$.
> 
> Tập chỉ số $T$ biểu diễn thời gian:
> * Nếu $T$ đếm được (chẳng hạn $T = \mathbb{N}$), quá trình được gọi là quá trình ngẫu nhiên thời gian rời rạc.
> * Nếu $T$ liên tục (chẳng hạn $T = \mathbb{R}^+$ hoặc $[0, t_0]$), quá trình được gọi là quá trình ngẫu nhiên thời gian liên tục.
> 
> Với mỗi biến cố sơ cấp $\omega \in \Omega$ cố định, ánh xạ
> 
> $$T \to I, \quad t \mapsto X_t(\omega)$$
> 
> được gọi là một quỹ đạo (trajectory hay sample path) của quá trình ngẫu nhiên.

> [!def] Không gian trạng thái, Độ đo và Phân phối ban đầu
> Giả sử không gian trạng thái $I$ là tập đếm được, $I = \{i, j, k, \dots\}$. Mỗi phần tử $i \in I$ được gọi là một trạng thái (state).
> 
> * Một vector hàng $\lambda = (\lambda_i : i \in I)$ được gọi là một độ đo (measure) trên $I$ nếu $\lambda_i \ge 0$ với mọi $i \in I$.
> * Nếu $\sum_{i \in I} \lambda_i = 1$, thì $\lambda$ được gọi là một phân phối xác suất (distribution).
> * Phân phối ban đầu của dãy biến ngẫu nhiên $(X_n)_{n \ge 0}$ là vector hàng $\lambda = (\lambda_i : i \in I)$ với $\lambda_i = \mathbb{P}(X_0 = i)$. Trường hợp xích xuất phát chắc chắn từ trạng thái $i$, ta có $\lambda = \delta_i = (0, \dots, 1, \dots, 0)$.

> [!def] Ma trận ngẫu nhiên
> Một ma trận $P = (p_{ij})_{i,j \in I}$ được gọi là một ma trận ngẫu nhiên (stochastic matrix) nếu:
> 
> 1. $p_{ij} \ge 0$ với mọi $i, j \in I$.
> 2. $\sum_{j \in I} p_{ij} = 1$ với mọi $i \in I$ (mỗi hàng của $P$ là một phân phối xác suất trên $I$).

> [!prp] Tính chất bảo toàn của ma trận ngẫu nhiên
> Cho $P$ là một ma trận ngẫu nhiên. Khi đó:
> 
> 1. Với mọi số nguyên $n \ge 1$, lũy thừa ma trận $P^n$ cũng là một ma trận ngẫu nhiên.
> 2. $P$ luôn có một trị riêng là $\lambda = 1$ với vector riêng phải tương ứng là vector cột $\mathbf{1} = (1, 1, \dots)^T$.

> [!prf]
> 1. Với điều kiện không âm, vì các phần tử $p_{ij} \ge 0$, tích các ma trận không âm luôn cho các phần tử không âm, do đó $(P^n)_{ij} \ge 0$ với mọi $n \ge 1$.
> 
> Điều kiện tổng hàng bằng 1 tương đương với phương trình ma trận $P \mathbf{1} = \mathbf{1}$. Ta quy nạp theo $n$:
> 
> Với $n = 1$, mệnh đề đúng theo định nghĩa ma trận ngẫu nhiên. Giả sử $P^{n-1} \mathbf{1} = \mathbf{1}$, khi đó:
> 
> $$P^n \mathbf{1} = P^{n-1} (P \mathbf{1}) = P^{n-1} \mathbf{1} = \mathbf{1}.$$
> 
> Hoặc kiểm tra qua từng phần tử:
> 
> $$\sum_{j \in I} (P^n)_{ij} = \sum_{j \in I} \sum_{k \in I} (P^{n-1})_{ik} p_{kj} = \sum_{k \in I} (P^{n-1})_{ik} \left( \sum_{j \in I} p_{kj} \right) = \sum_{k \in I} (P^{n-1})_{ik} \cdot 1 = 1.$$
> 
> Vậy $P^n$ là ma trận ngẫu nhiên.
> 
> 2. Từ đẳng thức $P \mathbf{1} = 1 \cdot \mathbf{1}$, theo định nghĩa trị riêng và vector riêng, $\lambda = 1$ là một trị riêng của $P$ với vector riêng tương ứng $\mathbf{1} \neq \mathbf{0}$.

> [!def] Xích Markov rời rạc và Tính thuần nhất
> Dãy các biến ngẫu nhiên $(X_n)_{n \ge 0}$ nhận giá trị trong tập đếm được $I$ được gọi là một xích Markov với phân phối ban đầu $\lambda$ và ma trận chuyển $P = (p_{ij})$ nếu với mọi $n \ge 0$ và mọi dãy trạng thái $i_0, i_1, \dots, i_{n+1} \in I$:
> 
> 1. $\mathbb{P}(X_0 = i_0) = \lambda_{i_0}$.
> 2. $\mathbb{P}(X_{n+1} = i_{n+1} \mid X_0 = i_0, \dots, X_n = i_n) = \mathbb{P}(X_{n+1} = i_{n+1} \mid X_n = i_n) = p_{i_n i_{n+1}}$ (tính chất Markov).
> 
> Xích Markov được gọi là thuần nhất theo thời gian (homogeneous) nếu xác suất chuyển không phụ thuộc vào thời điểm $n$:
> 
> $$\mathbb{P}(X_{n+1} = j \mid X_n = i) = \mathbb{P}(X_1 = j \mid X_0 = i) = p_{ij}, \quad \forall n \ge 0.$$

# Định lý đặc trưng và Tiến hóa của xích Markov

> [!prp] Đặc trưng phân phối đồng thời của Xích Markov
> Dãy biến ngẫu nhiên $(X_n)_{n \ge 0}$ là xích Markov với phân phối ban đầu $\lambda$ và ma trận chuyển $P$ khi và chỉ khi với mọi $n \ge 0$ và mọi trạng thái $i_0, i_1, \dots, i_n \in I$:
> 
> $$\mathbb{P}(X_0 = i_0, X_1 = i_1, \dots, X_n = i_n) = \lambda_{i_0} p_{i_0 i_1} p_{i_1 i_2} \dots p_{i_{n-1} i_n}.$$

> [!prf]
> Chiều thuận ($\implies$): Giả sử $(X_n)_{n \ge 0}$ là xích Markov $(\lambda, P)$.
> 
> Xét biến cố $\{X_0 = i_0, X_1 = i_1, \dots, X_n = i_n\}$. Áp dụng luật nhân xác suất cho dãy biến cố:
> 
> $$\mathbb{P}(X_0 = i_0, \dots, X_n = i_n) = \mathbb{P}(X_0 = i_0) \prod_{k=0}^{n-1} \mathbb{P}(X_{k+1} = i_{k+1} \mid X_0 = i_0, \dots, X_k = i_k).$$
> 
> Theo định nghĩa phân phối ban đầu, ta có $\mathbb{P}(X_0 = i_0) = \lambda_{i_0}$. Theo tính chất Markov trong định nghĩa xích Markov và định nghĩa ma trận ngẫu nhiên:
> 
> $$\mathbb{P}(X_{k+1} = i_{k+1} \mid X_0 = i_0, \dots, X_k = i_k) = \mathbb{P}(X_{k+1} = i_{k+1} \mid X_k = i_k) = p_{i_k i_{k+1}}.$$
> 
> Thay trực tiếp vào tích trên, ta nhận được công thức xác suất đồng thời:
> 
> $$\mathbb{P}(X_0 = i_0, X_1 = i_1, \dots, X_n = i_n) = \lambda_{i_0} p_{i_0 i_1} p_{i_1 i_2} \dots p_{i_{n-1} i_n}.$$
> 
> Chiều đảo ($\impliedby$): Giả sử hệ thức tích đúng với mọi $n \ge 0$ và mọi trạng thái $i_0, \dots, i_n \in I$.
> 
> Với $n = 0$, ta thu được ngay điều kiện phân phối ban đầu $\mathbb{P}(X_0 = i_0) = \lambda_{i_0}$.
> 
> Với $n \ge 0$, xét trường hợp $\mathbb{P}(X_0 = i_0, \dots, X_n = i_n) > 0$. Theo định nghĩa xác suất có điều kiện:
> 
> $$\mathbb{P}(X_{n+1} = i_{n+1} \mid X_0 = i_0, \dots, X_n = i_n) = \frac{\mathbb{P}(X_0 = i_0, \dots, X_n = i_n, X_{n+1} = i_{n+1})}{\mathbb{P}(X_0 = i_0, \dots, X_n = i_n)}.$$
> 
> Thay giả thiết tích vào tử số và mẫu số, sau khi rút gọn ta được $p_{i_n i_{n+1}}$.
> 
> Mặt khác, để tính $\mathbb{P}(X_{n+1} = i_{n+1} \mid X_n = i_n)$, ta áp dụng mệnh đề phân phối biên qua phép lấy tổng hệ đầy đủ cho toàn bộ kịch bản quá khứ:
> 
> $$\mathbb{P}(X_n = i_n, X_{n+1} = i_{n+1}) = \sum_{i_0, \dots, i_{n-1} \in I} \mathbb{P}(X_0 = i_0, \dots, X_n = i_n, X_{n+1} = i_{n+1})$$
> 
> $$= \left( \sum_{i_0, \dots, i_{n-1} \in I} \lambda_{i_0} p_{i_0 i_1} \dots p_{i_{n-1} i_n} \right) p_{i_n i_{n+1}}.$$
> 
> Biểu thức trong ngoặc chính là $\mathbb{P}(X_n = i_n)$ theo mệnh đề phân phối biên qua phép lấy tổng hệ đầy đủ. Do đó:
> 
> $$\mathbb{P}(X_n = i_n, X_{n+1} = i_{n+1}) = \mathbb{P}(X_n = i_n) \cdot p_{i_n i_{n+1}}.$$
> 
> Theo định nghĩa xác suất có điều kiện:
> 
> $$\mathbb{P}(X_{n+1} = i_{n+1} \mid X_n = i_n) = \frac{\mathbb{P}(X_n = i_n, X_{n+1} = i_{n+1})}{\mathbb{P}(X_n = i_n)} = p_{i_n i_{n+1}}.$$
> 
> Như vậy ta có:
> 
> $$\mathbb{P}(X_{n+1} = i_{n+1} \mid X_0 = i_0, \dots, X_n = i_n) = \mathbb{P}(X_{n+1} = i_{n+1} \mid X_n = i_n) = p_{i_n i_{n+1}}.$$
> 
> Điều này chứng tỏ quá trình thỏa mãn tính chất Markov và tính thuần nhất thời gian trong định nghĩa xích Markov.

> [!prp] Tính chất Markov tổng quát
> Cho $(X_n)_{n \ge 0}$ là một xích Markov với phân phối ban đầu $\lambda$ và ma trận chuyển $P$. Khi đó, với mọi mốc thời gian nguyên $0 \le m < n$, mọi trạng thái $k, j \in I$ và mọi kịch bản quá khứ $i_0, i_1, \dots, i_{m-1} \in I$ sao cho $\mathbb{P}(X_0 = i_0, \dots, X_{m-1} = i_{m-1}, X_m = k) > 0$:
> 
> $$\mathbb{P}(X_n = j \mid X_m = k, X_{m-1} = i_{m-1}, \dots, X_0 = i_0) = \mathbb{P}(X_n = j \mid X_m = k) = (P^{n-m})_{kj}.$$

> [!prf]
> Đặt biến cố lịch sử trước thời điểm $m$ là:
> 
> $$H_{<m} = \{X_0 = i_0, X_1 = i_1, \dots, X_{m-1} = i_{m-1}\}.$$
> 
> Trước hết, xét một quỹ đạo cụ thể từ $m$ đến $n$ với các trạng thái $k_{m+1}, \dots, k_{n-1} \in I$ và $k_n = j$. 
> 
> Áp dụng định nghĩa xác suất có điều kiện:
> 
> $$\mathbb{P}(X_{m+1} = k_{m+1}, \dots, X_n = j \mid X_m = k, H_{<m}) = \frac{\mathbb{P}(H_{<m}, X_m = k, X_{m+1} = k_{m+1}, \dots, X_n = j)}{\mathbb{P}(H_{<m}, X_m = k)}.$$
> 
> Theo mệnh đề đặc trưng phân phối đồng thời của xích Markov, phân tích cả tử số và mẫu số thành dạng tích:
> * Tử số là xác suất đồng thời từ bước $0$ đến bước $n$:
> 
> $$\lambda_{i_0} p_{i_0 i_1} \dots p_{i_{m-1} k} \cdot \left( p_{k k_{m+1}} p_{k_{m+1} k_{m+2}} \dots p_{k_{n-1} j} \right).$$
> 
> * Mẫu số là xác suất đồng thời từ bước $0$ đến bước $m$:
> 
> $$\lambda_{i_0} p_{i_0 i_1} \dots p_{i_{m-1} k}.$$
> 
> Chia tử số cho mẫu số, cụm tích lịch sử $\lambda_{i_0} p_{i_0 i_1} \dots p_{i_{m-1} k}$ bị triệt tiêu hoàn toàn:
> 
> $$\mathbb{P}(X_{m+1} = k_{m+1}, \dots, X_n = j \mid X_m = k, H_{<m}) = p_{k k_{m+1}} p_{k_{m+1} k_{m+2}} \dots p_{k_{n-1} j}.$$
> 
> Biểu thức vế phải hoàn toàn không phụ thuộc vào trạng thái quá khứ $(i_0, \dots, i_{m-1})$. 
> 
> Để thu gọn về duy nhất trạng thái tương lai $X_n = j$, áp dụng mệnh đề phân phối biên qua phép lấy tổng hệ đầy đủ trên tất cả các trạng thái trung gian $k_{m+1}, \dots, k_{n-1} \in I$:
> 
> $$\mathbb{P}(X_n = j \mid X_m = k, H_{<m}) = \sum_{k_{m+1} \in I} \dots \sum_{k_{n-1} \in I} p_{k k_{m+1}} p_{k_{m+1} k_{m+2}} \dots p_{k_{n-1} j}.$$
> 
> Mặt khác, áp dụng cùng phép phân tích tỉ số xác suất có điều kiện cho riêng hai thời điểm $m$ và tương lai:
> 
> $$\mathbb{P}(X_{m+1} = k_{m+1}, \dots, X_n = j \mid X_m = k) = p_{k k_{m+1}} p_{k_{m+1} k_{m+2}} \dots p_{k_{n-1} j}.$$
> 
> Lấy tổng trên toàn bộ các trạng thái trung gian $k_{m+1}, \dots, k_{n-1} \in I$:
> 
> $$\mathbb{P}(X_n = j \mid X_m = k) = \sum_{k_{m+1} \in I} \dots \sum_{k_{n-1} \in I} p_{k k_{m+1}} p_{k_{m+1} k_{m+2}} \dots p_{k_{n-1} j}.$$
> 
> Theo định nghĩa phép nhân $n-m$ ma trận liên tiếp, tổng trên bằng $(P^{n-m})_{kj}$. Do đó:
> 
> $$\mathbb{P}(X_n = j \mid X_m = k, X_{m-1} = i_{m-1}, \dots, X_0 = i_0) = \mathbb{P}(X_n = j \mid X_m = k) = (P^{n-m})_{kj}.$$

> [!prp] Chuyển trạng thái qua phân hoạch trung gian
> Cho xích Markov $(X_n)_{n \ge 0}$ thuần nhất với không gian trạng thái đếm được $I$. Với các mốc thời gian $0 < m < n$ và hai trạng thái $i, j \in I$ sao cho $\mathbb{P}(X_0 = i) > 0$:
> 
> $$\mathbb{P}(X_n = j \mid X_0 = i) = \sum_{k \in I} \mathbb{P}(X_m = k \mid X_0 = i)\mathbb{P}(X_n = j \mid X_m = k).$$

> [!prf]
> Cố định mốc thời gian trung gian $m$ với $0 < m < n$.
> 
> Họ các biến cố $\{X_m = k\}_{k \in I}$ lập thành một hệ đầy đủ của không gian mẫu $\Omega$.
> 
> Áp dụng công thức xác suất toàn phần dạng có điều kiện cho biến cố mục tiêu $A = \{X_n = j\}$ trên hệ đầy đủ $\{X_m = k\}_{k \in I}$ với điều kiện $C = \{X_0 = i\}$:
> 
> $$\mathbb{P}(X_n = j \mid X_0 = i) = \sum_{k \in I} \mathbb{P}(X_n = j \mid X_m = k, X_0 = i)\mathbb{P}(X_m = k \mid X_0 = i).$$
> 
> Theo mệnh đề tính chất Markov tổng quát, với mốc hiện tại là $m$, quá khứ tại mốc $0$ độc lập với tương lai tại mốc $n$:
> 
> $$\mathbb{P}(X_n = j \mid X_m = k, X_0 = i) = \mathbb{P}(X_n = j \mid X_m = k).$$
> 
> Thay đẳng thức này vào tổng ở trên:
> 
> $$\mathbb{P}(X_n = j \mid X_0 = i) = \sum_{k \in I} \mathbb{P}(X_m = k \mid X_0 = i)\mathbb{P}(X_n = j \mid X_m = k).$$

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
> Cố định thời điểm trung gian $m$. Theo mệnh đề chuyển trạng thái qua phân hoạch trung gian, ta có:
> 
> $$p_{ij}^{(m+n)} = \sum_{k \in I} p_{ik}^{(m)} p_{kj}^{(n)}.$$
> 
> Biểu thức vế phải chính là định nghĩa của phần tử tại hàng $i$, cột $j$ trong tích hai ma trận $P^{(m)} P^{(n)}$, do đó:
> 
> $$P^{(m+n)} = P^{(m)} P^{(n)}.$$
> 
> Quy nạp toán học theo số bước $n$: với $n = 1$ ta có $P^{(1)} = P = P^1$. Giả sử $P^{(n-1)} = P^{n-1}$, khi đó chọn $m = 1$ trong đẳng thức trên:
> 
> $$P^{(n)} = P^{(1)} P^{(n-1)} = P \cdot P^{n-1} = P^n.$$

> [!prp] Tiến hóa phân phối trạng thái vô điều kiện
> Cho $(X_n)_{n \ge 0}$ là xích Markov với phân phối ban đầu $\lambda = \lambda^{(0)}$ và ma trận chuyển $P$. Đặt $\lambda^{(n)} = (\lambda_j^{(n)} : j \in I)$ là vector hàng biểu diễn phân phối xác suất của biến ngẫu nhiên $X_n$, tức $\lambda_j^{(n)} = \mathbb{P}(X_n = j)$. Khi đó, với mọi $n \ge 0$:
> 
> $$\lambda_j^{(n)} = \sum_{i \in I} \lambda_i^{(0)} p_{ij}^{(n)} \iff \lambda^{(n)} = \lambda^{(0)} P^n.$$

> [!prf]
> Xét biến cố $\{X_n = j\}$. Họ các biến cố xuất phát $\{X_0 = i\}_{i \in I}$ lập thành một hệ đầy đủ của không gian mẫu $\Omega$.
> 
> Áp dụng công thức xác suất toàn phần trên hệ đầy đủ này:
> 
> $$\mathbb{P}(X_n = j) = \sum_{i \in I} \mathbb{P}(X_0 = i) \mathbb{P}(X_n = j \mid X_0 = i).$$
> 
> Theo định nghĩa phân phối ban đầu $\mathbb{P}(X_0 = i) = \lambda_i^{(0)}$ và xác suất chuyển sau $n$ bước $\mathbb{P}(X_n = j \mid X_0 = i) = p_{ij}^{(n)}$, ta có:
> 
> $$\lambda_j^{(n)} = \sum_{i \in I} \lambda_i^{(0)} p_{ij}^{(n)}.$$
> 
> Biểu thức vế phải chính là phần tử thứ $j$ của tích giữa vector hàng $\lambda^{(0)}$ và ma trận $P^{(n)} = P^n$. Do đó, viết dưới dạng vector ma trận:
> 
> $$\lambda^{(n)} = \lambda^{(0)} P^n.$$