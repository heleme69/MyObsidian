
# Không gian nội suy Hermite và tính trùng khớp

Xét không gian tuyến tính $\mathcal{P}_n$ gồm các đa thức hệ số thực có bậc không vượt quá $n \in \mathbb{N}$ trên trường số thực $\mathbb{R}$.

> [!def] Dãy mốc nội suy và sự trùng khớp
> Cho dãy hữu hạn $n+1$ mốc nội suy $X = (x_0, x_1, \dots, x_n) \in \mathbb{R}^{n+1}$, trong đó các mốc không nhất thiết phân biệt. Tập hợp các mốc phân biệt trích xuất từ dãy $X$ được ký hiệu là $Z = \{z_1, z_2, \dots, z_r\}$, với $1 \le r \le n+1$. Với mỗi $z_i \in Z$, gọi số nguyên dương $\alpha(z_i) + 1$ là số lần xuất hiện (cấp độ lặp) của $z_i$ trong dãy $X$. Hệ thức bảo toàn số chiều thỏa mãn:
> $$ \sum_{i=1}^r (\alpha(z_i) + 1) = n + 1 $$
> Cho hàm số $f: \mathbb{R} \to \mathbb{R}$ khả vi liên tục đến cấp $\max_{1 \le i \le r} \alpha(z_i)$ trên khoảng đóng chứa tập mốc $X$. Một đa thức $p \in \mathcal{P}_n$ được gọi là trùng khớp với hàm số $f$ trên hệ mốc $X$ nếu thỏa mãn hệ điều kiện:
> $$ p^{(l)}(z_i) = f^{(l)}(z_i), \quad \forall i \in \{1, \dots, r\}, \quad \forall l \in \{0, 1, \dots, \alpha(z_i)\} $$
> Bài toán nội suy Hermite yêu cầu xác định một đa thức $p_n \in \mathcal{P}_n$ thỏa mãn toàn bộ $n+1$ điều kiện trùng khớp trên.

> [!prp] Định lý về sự tồn tại và tính duy nhất của đa thức nội suy Hermite
> Cho dãy mốc $X = (x_0, x_1, \dots, x_n)$ và hàm số $f$ thỏa mãn các điều kiện khả vi tương ứng. Tồn tại duy nhất một đa thức $p_n \in \mathcal{P}_n$ trùng khớp với hàm số $f$ trên hệ mốc $X$.

> [!prf]
> Biểu diễn đa thức $p_n \in \mathcal{P}_n$ qua hệ cơ sở đơn thức chính tắc $\{1, x, x^2, \dots, x^n\}$:
> $$ p_n(x) = \sum_{k=0}^n a_k x^k, \quad a_k \in \mathbb{R} $$
> Hệ điều kiện trùng khớp:
> $$ p_n^{(l)}(z_i) = f^{(l)}(z_i), \quad \forall i \in \{1, \dots, r\}, \quad \forall l \in \{0, 1, \dots, \alpha(z_i)\} $$
> tương đương với một hệ phương trình đại số tuyến tính gồm $n+1$ phương trình với $n+1$ ẩn số là vector tọa độ $a = (a_0, a_1, \dots, a_n)^\top \in \mathbb{R}^{n+1}$.
> Để chứng minh hệ vuông có nghiệm duy nhất, ta xét hệ thuần nhất tương ứng đối với đa thức $q \in \mathcal{P}_n$:
> $$ q^{(l)}(z_i) = 0, \quad \forall i \in \{1, \dots, r\}, \quad \forall l \in \{0, 1, \dots, \alpha(z_i)\} $$
> Theo định lý cơ bản của đại số, điều kiện $q(z_i) = q'(z_i) = \dots = q^{(\alpha(z_i))}(z_i) = 0$ khẳng định rằng $z_i$ là nghiệm có cấp bội tối thiểu là $\alpha(z_i) + 1$ của đa thức $q(x)$. Do đó, tổng số nghiệm tính cả cấp bội của đa thức $q(x)$ thỏa mãn:
> $$ N \ge \sum_{i=1}^r (\alpha(z_i) + 1) = n + 1 $$
> Mặt khác, đa thức $q \in \mathcal{P}_n$ nên có bậc $\deg(q) \le n$. Một đa thức có bậc không vượt quá $n$ nếu sở hữu từ $n+1$ nghiệm trở lên thì bắt buộc phải là đa thức không trên toàn trục số:
> $$ q(x) \equiv 0 \implies a_k = 0, \quad \forall k \in \{0, 1, \dots, n\} $$
> Do hệ phương trình đại số tuyến tính thuần nhất có số phương trình bằng số ẩn chỉ có nghiệm tầm thường, ma trận hệ số vuông của hệ là khả nghịch (định thức khác không). Do đó, theo quy tắc Cramer, hệ phương trình không thuần nhất luôn có nghiệm duy nhất, chứng minh sự tồn tại và duy nhất của đa thức nội suy Hermite $p_n(x)$.

# Khai triển Newton và tỷ sai phân Hermite

> [!def] Cơ sở Newton suy rộng và Tỷ sai phân Hermite
> Xét hệ đa thức cơ sở Newton $\{\pi_k\}_{k=0}^n$ của không gian $\mathcal{P}_n$ ứng với dãy mốc $X = (x_0, x_1, \dots, x_n)$:
> $$ \pi_0(x) = 1, \quad \pi_k(x) = \prod_{j=0}^{k-1} (x - x_j), \quad \forall k \in \{1, 2, \dots, n\} $$
> Tỷ sai phân cấp $n$ của hàm số $f$ trên hệ mốc $(x_0, x_1, \dots, x_n)$, ký hiệu là $f[x_0, x_1, \dots, x_n]$, được định nghĩa là hệ số của số hạng bậc cao nhất $x^n$ trong đa thức nội suy Hermite $p_n(x) \in \mathcal{P}_n$.

> [!prp] Công thức khai triển Newton của đa thức nội suy Hermite
> Đa thức nội suy Hermite $p_n \in \mathcal{P}_n$ của hàm số $f$ trên dãy mốc $X = (x_0, x_1, \dots, x_n)$ có biểu diễn tường minh qua cơ sở Newton:
> $$ p_n(x) = \sum_{k=0}^n f[x_0, x_1, \dots, x_k] \pi_k(x) $$

> [!prf]
> Ta tiến hành chứng minh bằng phương pháp quy nạp toán học theo số mốc nội suy.
> Khi $n = 0$, bài toán xét trên một mốc $x_0$. Đa thức nội suy là hằng số $p_0(x) = f(x_0)$. Theo định nghĩa, $f[x_0] = f(x_0)$ và $\pi_0(x) = 1$, do đó $p_0(x) = f[x_0]\pi_0(x)$. Mệnh đề đúng với $n = 0$.
> Giả sử công thức đúng cho trường hợp $n - 1$ mốc, tức là đa thức nội suy Hermite $p_{n-1} \in \mathcal{P}_{n-1}$ trên hệ mốc $(x_0, \dots, x_{n-1})$ thỏa mãn:
> $$ p_{n-1}(x) = \sum_{k=0}^{n-1} f[x_0, x_1, \dots, x_k] \pi_k(x) $$
> Xét việc bổ sung mốc $x_n$ để thiết lập đa thức nội suy $p_n \in \mathcal{P}_n$ trên $(x_0, \dots, x_n)$. Hiệu hai đa thức $R_n(x) = p_n(x) - p_{n-1}(x)$ thuộc $\mathcal{P}_n$. Do cả $p_n$ và $p_{n-1}$ đều trùng khớp với hàm số $f$ trên hệ mốc $(x_0, \dots, x_{n-1})$, đa thức $R_n(x)$ nhận toàn bộ các điểm $x_0, \dots, x_{n-1}$ làm nghiệm với đúng cấp bội yêu cầu. Do đó, $R_n(x)$ chia hết cho đa thức:
> $$ \pi_n(x) = \prod_{j=0}^{n-1} (x - x_j) $$
> Vì $\deg(R_n) \le n$ và $\deg(\pi_n) = n$, thương của phép chia bắt buộc phải là một hằng số thực $\gamma_n$:
> $$ R_n(x) = \gamma_n \pi_n(x) \implies p_n(x) = p_{n-1}(x) + \gamma_n \pi_n(x) $$
> Do bậc của $p_{n-1}(x)$ không vượt quá $n-1$, hệ số của số hạng bậc cao nhất $x^n$ trong $p_n(x)$ hoàn toàn do số hạng $\gamma_n \pi_n(x)$ xác định. Mặt khác, hệ số của $x^n$ trong $\pi_n(x)$ bằng 1, nên hệ số của $x^n$ trong $p_n(x)$ chính bằng $\gamma_n$. Theo định nghĩa tỷ sai phân, giá trị này bằng $f[x_0, \dots, x_n]$. Từ đó:
> $$ \gamma_n = f[x_0, x_1, \dots, x_n] $$
> Thay biểu thức của $\gamma_n$ và giả thiết quy nạp vào $p_n(x)$, ta thu được:
> $$ p_n(x) = \sum_{k=0}^{n-1} f[x_0, \dots, x_k]\pi_k(x) + f[x_0, \dots, x_n]\pi_n(x) = \sum_{k=0}^n f[x_0, \dots, x_k]\pi_k(x) $$
> Theo nguyên lý quy nạp toán học, công thức khai triển Newton đúng với mọi $n \in \mathbb{N}$.

# Định lý nhân tử tuyến tính và thuật toán đệ quy

> [!prp] Định lý về phép nhân với nhân tử bậc nhất
> Cho hàm số $f$ khả vi liên tục đến cấp cần thiết và một mốc nội suy bổ sung $x_{n+1} \in \mathbb{R}$. Định nghĩa hàm số phụ trợ:
> $$ h(x) = (x - x_{n+1}) f(x) $$
> Khi đó, tỷ sai phân của hàm số $h$ trên hệ mốc mở rộng $(x_0, x_1, \dots, x_{n+1})$ thỏa mãn hệ thức:
> $$ h[x_0, x_1, \dots, x_{n+1}] = f[x_0, x_1, \dots, x_n] $$

> [!prf]
> Gọi $p_n \in \mathcal{P}_n$ là đa thức nội suy Hermite duy nhất của hàm số $f$ trên hệ mốc $(x_0, \dots, x_n)$. Định nghĩa đa thức phụ trợ:
> $$ H(x) = (x - x_{n+1}) p_n(x) \in \mathcal{P}_{n+1} $$
> Ta chứng minh $H(x)$ trùng khớp với hàm số $h(x)$ trên toàn bộ hệ mốc $(x_0, \dots, x_{n+1})$.
> Xét mốc $z \in \{x_0, \dots, x_n\}$. Áp dụng quy tắc Leibniz cho đạo hàm cấp $l \in \{0, 1, \dots, \alpha(z)\}$ của tích hai hàm số:
> $$ h^{(l)}(z) = \frac{d^l}{dz^l} \left[ (z - x_{n+1}) f(z) \right] = (z - x_{n+1}) f^{(l)}(z) + l f^{(l-1)}(z) $$
> $$ H^{(l)}(z) = \frac{d^l}{dz^l} \left[ (z - x_{n+1}) p_n(z) \right] = (z - x_{n+1}) p_n^{(l)}(z) + l p_n^{(l-1)}(z) $$
> Do tính trùng khớp của $p_n$ với $f$ trên hệ mốc cũ, ta có $f^{(k)}(z) = p_n^{(k)}(z)$ với mọi $k \le l$. Thay thế trực tiếp vào hai hệ thức trên dẫn đến $h^{(l)}(z) = H^{(l)}(z)$.
> Xét mốc bổ sung $z = x_{n+1}$. Khi $l = 0$, ta có $h(x_{n+1}) = 0 = H(x_{n+1})$. Với cấp đạo hàm $l \ge 1$, số hạng $(z - x_{n+1})$ triệt tiêu tại $z = x_{n+1}$, cho kết quả:
> $$ h^{(l)}(x_{n+1}) = l f^{(l-1)}(x_{n+1}), \quad H^{(l)}(x_{n+1}) = l p_n^{(l-1)}(x_{n+1}) $$
> Nếu $x_{n+1}$ trùng với một mốc đã tồn tại trong $\{x_0, \dots, x_n\}$, đẳng thức $f^{(l-1)}(x_{n+1}) = p_n^{(l-1)}(x_{n+1})$ được nghiệm đúng do giả thiết nội suy cấp thấp hơn. Nếu $x_{n+1}$ là mốc mới hoàn toàn, đẳng thức được thỏa mãn tự nhiên từ cấu trúc đại số.
> Do đó, $H(x)$ là đa thức nội suy Hermite duy nhất của hàm $h(x)$ trên $(x_0, \dots, x_{n+1})$. Theo định nghĩa tỷ sai phân, hệ số của $x^{n+1}$ trong $H(x)$ là $h[x_0, \dots, x_{n+1}]$. Mặt khác, từ phép nhân phân phối $H(x) = (x - x_{n+1})p_n(x)$, hệ số của $x^{n+1}$ trong $H(x)$ bằng đúng hệ số của $x^n$ trong $p_n(x)$, tức bằng $f[x_0, \dots, x_n]$. Ta thu được đẳng thức cần chứng minh.

> [!algo] Thuật toán đệ quy xây dựng bảng tỷ sai phân Hermite
> Định nghĩa hai hàm phụ trợ $u(x) = (x - x_n)f(x)$ và $v(x) = (x - x_0)f(x)$. Áp dụng định lý về phép nhân với nhân tử bậc nhất:
> $$ u[x_0, x_1, \dots, x_n] = f[x_0, x_1, \dots, x_{n-1}] $$
> $$ v[x_0, x_1, \dots, x_n] = f[x_1, \dots, x_n] $$
> Xét hiệu hai hàm số:
> $$ (v - u)(x) = (x - x_0)f(x) - (x - x_n)f(x) = (x_n - x_0)f(x) $$
> Do toán tử tỷ sai phân có tính tuyến tính, ta áp dụng trực tiếp lên hiệu hai hàm:
> $$ (x_n - x_0) f[x_0, \dots, x_n] = v[x_0, \dots, x_n] - u[x_0, \dots, x_n] = f[x_1, \dots, x_n] - f[x_0, \dots, x_{n-1}] $$
> Khi $x_0 = x_n$, tất cả các mốc trung gian đều chập lại tại một điểm $x$, phép trừ mẫu số triệt tiêu và giá trị tỷ sai phân chuyển thành giá trị đạo hàm cấp cao thông qua giới hạn Taylor. Thuật toán truy hồi hoàn chỉnh để tính toán từng phần tử trong bảng tỷ sai phân có dạng:
> $$ f[x_0, \dots, x_n] = \begin{cases} \dfrac{f^{(n)}(x)}{n!} & \text{nếu } x_0 = x_1 = \dots = x_n = x \\ \dfrac{f[x_1, \dots, x_n] - f[x_0, \dots, x_{n-1}]}{x_n - x_0} & \text{nếu } x_0 \neq x_n \end{cases} $$

# Tính chất giải tích và tính liên tục của tỷ sai phân

> [!prp] Tính đối xứng của tỷ sai phân Hermite
> Cho $\sigma$ là một hoán vị bất kỳ của tập hợp chỉ số $\{0, 1, \dots, n\}$. Tỷ sai phân Hermite hoàn toàn bất biến đối với mọi hoán vị mốc nội suy:
> $$ f[x_{\sigma(0)}, x_{\sigma(1)}, \dots, x_{\sigma(n)}] = f[x_0, x_1, \dots, x_n] $$

> [!prf]
> Đa thức nội suy Hermite $p_n(x)$ được xác định một cách duy nhất bởi tập hợp các điều kiện trùng khớp về giá trị và đạo hàm tại các mốc phân biệt thuộc tập $Z$ cùng cấp bội tương ứng. Tập hợp điều kiện này không phụ thuộc vào thứ tự liệt kê các phần tử trong dãy mốc $X = (x_0, \dots, x_n)$. Do đó, đa thức $p_n(x)$ là bất biến đối với mọi phép hoán vị $\sigma$ trên các mốc. Vì tỷ sai phân $f[x_0, \dots, x_n]$ được định nghĩa là hệ số của số hạng bậc cao nhất $x^n$ trong $p_n(x)$, giá trị này cũng bất biến đối với mọi hoán vị mốc.

> [!prp] Tính liên tục của tỷ sai phân Hermite
> Giả sử $f \in C^n(\mathbb{R})$. Cho hệ mốc $X = (x_0, \dots, x_n)$ và dãy các hệ mốc $X^{(k)} = (x_{0k}, x_{1k}, \dots, x_{nk})$ thỏa mãn $\lim_{k \to \infty} x_{ik} = x_i$ với mọi $i \in \{0, 1, \dots, n\}$. Khi đó:
> $$ \lim_{k \to \infty} f[x_{0k}, x_{1k}, \dots, x_{nk}] = f[x_0, x_1, \dots, x_n] $$

> [!prf]
> Ta chứng minh bằng phương pháp quy nạp theo $n$.
> Khi $n = 0$, ta có $f[x_{0k}] = f(x_{0k})$. Vì $f \in C^0(\mathbb{R})$, khi $k \to \infty$ thì $\lim_{k \to \infty} f(x_{0k}) = f(x_0) = f[x_0]$. Mệnh đề đúng với $n = 0$.
> Giả sử mệnh đề đúng đến cấp $n - 1$. Xét hệ mốc gồm $n + 1$ điểm ở bước $n$, ta chia thành hai trường hợp:
> Trường hợp 1: Các mốc $x_0, \dots, x_n$ không đồng nhất bằng nhau. Không mất tính tổng quát, do tính đối xứng, giả sử $x_0 \neq x_n$. Vì $\lim_{k \to \infty} (x_{nk} - x_{0k}) = x_n - x_0 \neq 0$, tồn tại $K$ sao cho với mọi $k \ge K$ ta có $x_{nk} \neq x_{0k}$. Áp dụng công thức truy hồi tỷ sai phân cho các phần tử dãy:
> $$ f[x_{0k}, \dots, x_{nk}] = \frac{f[x_{1k}, \dots, x_{nk}] - f[x_{0k}, \dots, x_{(n-1)k}]}{x_{nk} - x_{0k}} $$
> Lấy giới hạn hai vế khi $k \to \infty$, sử dụng giả thiết quy nạp cho tử số (chứa $n$ mốc) và tính liên tục của phép chia:
> $$ \lim_{k \to \infty} f[x_{0k}, \dots, x_{nk}] = \frac{\lim_{k \to \infty} f[x_{1k}, \dots, x_{nk}] - \lim_{k \to \infty} f[x_{0k}, \dots, x_{(n-1)k}]}{\lim_{k \to \infty} (x_{nk} - x_{0k})} = \frac{f[x_1, \dots, x_n] - f[x_0, \dots, x_{n-1}]}{x_n - x_0} $$
> Theo công thức truy hồi, biểu thức này chính bằng $f[x_0, \dots, x_n]$.
> Trường hợp 2: Các mốc đồng nhất bằng nhau, tức $x_0 = x_1 = \dots = x_n = x$. Theo định lý giá trị trung bình cho tỷ sai phân, với mỗi hệ mốc $X^{(k)}$, tồn tại điểm $\xi_k \in [\min_{0 \le i \le n} x_{ik}, \max_{0 \le i \le n} x_{ik}]$ sao cho:
> $$ f[x_{0k}, \dots, x_{nk}] = \frac{f^{(n)}(\xi_k)}{n!} $$
> Khi $k \to \infty$, do $\lim_{k \to \infty} x_{ik} = x$ với mọi $i$, theo nguyên lý kẹp ta có $\lim_{k \to \infty} \xi_k = x$. Do $f \in C^n(\mathbb{R})$, hàm đạo hàm $f^{(n)}$ liên tục tại $x$. Lấy giới hạn hai vế:
> $$ \lim_{k \to \infty} f[x_{0k}, \dots, x_{nk}] = \lim_{k \to \infty} \frac{f^{(n)}(\xi_k)}{n!} = \frac{f^{(n)}(x)}{n!} = f[x_0, \dots, x_n] $$
> Như vậy, mệnh đề đúng với mọi $n \in \mathbb{N}$.

> [!rem] Định nghĩa giới hạn cho mốc trùng nhau
> Định lý về tính liên tục của tỷ sai phân là công cụ chứng minh rằng việc gán giá trị đạo hàm chia cho giai thừa $\frac{f^{(n)}(x)}{n!}$ khi các mốc nội suy trùng nhau không phải là một quy ước, mà chính là giới hạn duy nhất thu được khi khoảng cách giữa các mốc tiến về 0:
> $$ \lim_{(x_1, \dots, x_n) \to (x_0, \dots, x_0)} f[x_0, x_1, \dots, x_n] = \frac{f^{(n)}(x_0)}{n!} $$

# Biểu diễn ma trận của các hệ cơ sở trong nội suy Hermite

> [!def] Hệ cơ sở Lagrange suy rộng và cơ sở Newton
> Trong không gian $\mathcal{P}_n$, xét hai hệ cơ sở chính:
> Cơ sở Lagrange suy rộng $\{l_{il}(x)\}$ với $i \in \{1, \dots, r\}$ và $l \in \{0, \dots, \alpha(z_i)\}$, thỏa mãn điều kiện trực giao Kronecker:
> $$ \left. \frac{d^k}{dx^k} l_{il}(x) \right|_{x = z_j} = \delta_{ij} \delta_{lk} $$
> Cơ sở Newton suy rộng $\{\phi_k(x)\}_{k=0}^n$ được sắp xếp tương ứng theo cấu trúc tích lũy từng mốc và cấp bội:
> $$ \phi_k(x) = \prod_{j=0}^{k-1} (x - x_j) $$
> Đặt $L(x)$ là vector cột chứa các đa thức cơ sở Lagrange và $\Phi(x)$ là vector cột chứa các đa thức cơ sở Newton.

> [!prp] Định lý về tính tương đương đại số và ma trận chuyển cơ sở
> Hai dạng biểu diễn theo cơ sở Lagrange và cơ sở Newton cùng xác định một đa thức nội suy Hermite duy nhất $p_n(x) \in \mathcal{P}_n$. Tồn tại duy nhất một ma trận chuyển cơ sở $\Pi \in \mathbb{R}^{(n+1) \times (n+1)}$ khả nghịch sao cho:
> $$ L^\top(x) = \Phi^\top(x) \Pi^{-1} $$
> Khi đó, vector tỷ sai phân Newton $\Lambda$ và vector dữ liệu đầu vào $F$ liên hệ với nhau qua hệ phương trình đại số tuyến tính:
> $$ \Pi \Lambda = F $$
> trong đó $\Pi$ là một ma trận tam giác dưới.

> [!prf]
> Vì $\mathcal{P}_n$ là không gian vectơ có số chiều bằng $n+1$, và hai hệ hàm $\{l_{il}\}$ cùng $\{\phi_k\}$ đều là các cơ sở tuyến tính độc lập, luôn tồn tại duy nhất một ma trận chuyển cơ sở $\Pi$ khả nghịch liên hệ hai cơ sở theo dạng:
> $$ L^\top(x) = \Phi^\top(x) \Pi^{-1} $$
> Gọi $F$ là vector cột chứa các giá trị hàm và đạo hàm tại các mốc:
> $$ F = (f(z_1), f'(z_1), \dots, f^{(\alpha(z_1))}(z_1), \dots, f^{(\alpha(z_r))}(z_r))^\top $$
> Gọi $\Lambda$ là vector cột chứa các hệ số tỷ sai phân Newton tương ứng.
> Biểu diễn của đa thức $p_n(x)$ qua hai cơ sở:
> $$ p_n(x) = F^\top L(x) = L^\top(x) F $$
> $$ p_n(x) = \Lambda^\top \Phi(x) = \Phi^\top(x) \Lambda $$
> Do tính duy nhất của đa thức nội suy Hermite, hai biểu diễn này phải đồng nhất với nhau trên toàn miền xác định:
> $$ L^\top(x) F = \Phi^\top(x) \Lambda $$
> Thay đẳng thức chuyển cơ sở $L^\top(x) = \Phi^\top(x) \Pi^{-1}$ vào vế trái:
> $$ \Phi^\top(x) \Pi^{-1} F = \Phi^\top(x) \Lambda \implies \Phi^\top(x) (\Pi^{-1} F - \Lambda) = 0 $$
> Do các phần tử của cơ sở Newton $\Phi(x)$ độc lập tuyến tính trong $\mathcal{P}_n$, hệ số đi kèm bắt buộc phải triệt tiêu:
> $$ \Pi^{-1} F - \Lambda = 0 \implies \Pi \Lambda = F $$
> Xét cấu trúc của đa thức cơ sở Newton thứ $k$:
> $$ \phi_k(x) = (x - x_0)(x - x_1)\dots(x - x_{k-1}) $$
> Khi lấy đạo hàm cấp $l$ tại mốc $x_j$, nếu chỉ số vị trí của mốc $x_j$ nằm sau chỉ số $k$ (tức là mốc $x_j$ chưa từng xuất hiện trong tích xác định $\phi_k$), giá trị của $\phi_k^{(l)}(x_j)$ triệt tiêu do bậc của nghiệm tại các mốc trước đó chưa bị suy giảm hết. Điều này dẫn đến toàn bộ các phần tử nằm phía trên đường chéo chính của ma trận $\Pi$ đều bằng 0, chứng minh $\Pi$ là một ma trận tam giác dưới.

> [!rem] Cấu trúc ma trận tam giác dưới và giải thuật số trị
> Định lý về ma trận chuyển cơ sở chỉ ra rằng việc tìm vector hệ số Newton $\Lambda$ tương đương với việc giải hệ phương trình tuyến tính có ma trận tam giác dưới $\Pi \Lambda = F$. Hệ phương trình này cho phép xác định trực tiếp các phần tử của $\Lambda$ bằng phương pháp thế tiến với chi phí tính toán $\mathcal{O}(n^2)$ phép toán số học, hoàn toàn đồng nhất với cấu trúc bảng tỷ sai phân đệ quy Hermite.