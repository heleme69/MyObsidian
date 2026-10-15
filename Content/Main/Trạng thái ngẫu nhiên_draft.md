
> [!rem] (ký hiệu)
> Không gian trạng thái ký hiệu $E$ (một số tài liệu dùng $I$ hoặc $S$); các trạng thái ký hiệu bằng các chỉ số $i, j, k \in E$.
> 
> Ma trận chuyển $P = (p_{ij})_{i, j \in E}$, với
> 
> $$p_{ij} = \mathbb{P}(X_{n+1} = j \mid X_n = i), \quad p_{ij}^{(n)} = \mathbb{P}(X_n = j \mid X_0 = i).$$
> 
> $\mathbb{P}_i(\,\cdot\,) := \mathbb{P}(\,\cdot \mid X_0 = i)$ và $\mathbb{E}_i[\,\cdot\,] := \mathbb{E}[\,\cdot \mid X_0 = i]$ là xác suất và kỳ vọng khi xích *khởi đầu* tại $i$.

Xét một xích Markov $(X_n)_{n \ge 0}$ được định nghĩa trên không gian trạng thái $E$ với ma trận chuyển $P$.

> [!def] (Lớp giao tiếp)
> Cho hai trạng thái $i$ và $j$. Ta nói rằng $i$ dẫn đến $j$ hay $j$ có thể tiếp cận được từ $i$, ký hiệu $i \to j$, nếu:
> 
> $$\exists n \in \mathbb{N}, \quad p_{ij}^{(n)} = \mathbb{P}(X_n = j \mid X_0 = i) > 0.$$
> 
> Quan hệ này có nghĩa là bắt đầu từ $i$, sau một số hữu hạn bước ta có thể đi đến $j$.
> * Ta nói rằng $i$ **giao tiếp** (*communicate*) với $j$, ký hiệu $i \leftrightarrow j$, nếu $i \to j$ và $j \to i$.

> [!prp] 
> Quan hệ giao tiếp $\leftrightarrow$ là một quan hệ tương đương.

> [!prf] Chứng minh
> Để chứng minh $\leftrightarrow$ là một quan hệ tương đương trên không gian trạng thái $E$, ta cần chứng minh ba tính chất: phản xạ, đối xứng và bắc cầu.
> 
> 1. Tính phản xạ ($i \leftrightarrow i$ với mọi $i \in E$):
>    Với $n = 0$, theo định nghĩa xác suất có điều kiện:
>    $$p_{ii}^{(0)} = \mathbb{P}(X_0 = i \mid X_0 = i) = 1 > 0.$$
>    Do đó, $i \to i$ với mọi $i \in E$. Suy ra $i \leftrightarrow i$.
> 
> 2. Tính đối xứng ($i \leftrightarrow j \implies j \leftrightarrow i$):
>    Giả sử $i \leftrightarrow j$. Theo định nghĩa của quan hệ giao tiếp, điều này có nghĩa là $i \to j$ và $j \to i$.  
>    Từ đó trực tiếp suy ra $j \to i$ và $i \to j$, tức là $j \leftrightarrow i$.
> 
> 3. Tính bắc cầu ($i \leftrightarrow j$ và $j \leftrightarrow k \implies i \leftrightarrow k$):
>    Giả sử $i \leftrightarrow j$ và $j \leftrightarrow k$. Ta cần chứng minh $i \to k$ và $k \to i$.
>  Vì $i \to j$ và $j \to k$, tồn tại $m, n \in \mathbb{N}$ sao cho $p_{ij}^{(m)} > 0$ và $p_{jk}^{(n)} > 0$.
>      Áp dụng phương trình Chapman-Kolmogorov:
>      $$p_{ik}^{(m+n)} = \sum_{r \in E} p_{ir}^{(m)} p_{rk}^{(n)} \ge p_{ij}^{(m)} p_{jk}^{(n)} > 0.$$
>      Do đó tồn tại bước $m + n \in \mathbb{N}$ sao cho $p_{ik}^{(m+n)} > 0$, tức là $i \to k$.
>  Tương tự, vì $k \to j$ và $j \to i$, tồn tại các số nguyên $u, v \in \mathbb{N}$ sao cho $p_{kj}^{(u)} > 0$ và $p_{ji}^{(v)} > 0$.
>      Theo phương trình Chapman-Kolmogorov:
>      $$p_{ki}^{(u+v)} = \sum_{r \in E} p_{kr}^{(u)} p_{ri}^{(v)} \ge p_{kj}^{(u)} p_{ji}^{(v)} > 0.$$
>      Suy ra $k \to i$.
>    
>    Kết hợp $i \to k$ và $k \to i$, ta thu được $i \leftrightarrow k$.
> 
> Vậy $\leftrightarrow$ là một quan hệ tương đương trên $E$.

> [!def] Lớp tương đương
> Các trạng thái $E$ của xích Markov có thể được phân hoạch thành các lớp tương đương gọi là **các lớp bất khả quy** (*irreducible class*). Nếu $E$ thu gọn còn một lớp duy nhất, xích Markov được gọi là **bất khả quy** (*irreducible*).
> 
> Lớp $C'$ có thể *tiếp cận* được từ $C$, ký hiệu $C \to C'$, nếu
> 
> $$\forall (i, i') \in C \times C', \quad i \to i'.$$
> 
> Một lớp tương đương $C$ là **lớp đóng** (*closed class*) nếu, với mọi $i, j$ sao cho $(i \in C \text{ và } i \to j \implies j \in C)$, tức $C$ là lớp mà không thể thoát ra ngoài.
> 
> Nếu $C$ không đóng thì nó **mở**, khi đó tồn tại $i \in C$ và $j \notin C$ sao cho $i \to j$.

> [!prp] Tính tương đương của định nghĩa lớp đóng
> Cho xích Markov xác định trên không gian trạng thái $E$ và một lớp tương đương $C \subseteq E$. Hai mệnh đề sau là tương đương:
> 
> 1. Với mọi $i, j \in E$, nếu $i \in C$ và $i \to j$ thì $j \in C$.  
> 2. Với mọi $i \in C$ và mọi $n \in \mathbb{N}$, 
> 
> $$\sum_{j \in C} p_{ij}^{(n)} = 1.$$

> [!prf] 
> Xét chiều thuận $(1) \implies (2)$:  
> Giả sử mệnh đề $(1)$ đúng. Lấy tùy ý $i \in C$ và $n \in \mathbb{N}$. Do tính chuẩn hóa của xác suất trên toàn không gian trạng thái $E$, ta có:
> 
> $$\sum_{j \in E} p_{ij}^{(n)} = \sum_{j \in C} p_{ij}^{(n)} + \sum_{j \notin C} p_{ij}^{(n)} = 1.$$
> 
> Giả sử phản chứng $\sum_{j \in C} p_{ij}^{(n)} \neq 1$, kéo theo:
> 
> $$\sum_{j \notin C} p_{ij}^{(n)} > 0.$$
> 
> Vì $p_{ij}^{(n)} \ge 0$ với mọi $j$, phải tồn tại ít nhất một trạng thái $k \notin C$ sao cho $p_{ik}^{(n)} > 0$. Theo định nghĩa của quan hệ giao tiếp, điều này có nghĩa là $i \to k$. Áp dụng giả thiết $(1)$, vì $i \in C$ và $i \to k$ nên suy ra $k \in C$, mâu thuẫn trực tiếp với $k \notin C$. Do đó:
> 
> $$\sum_{j \notin C} p_{ij}^{(n)} = 0 \iff \sum_{j \in C} p_{ij}^{(n)} = 1.$$
> 
> Xét chiều đảo $(2) \implies (1)$:  
> Giả sử mệnh đề $(2)$ đúng. Xét trạng thái $i \in C$ và giả sử tồn tại $j \in E$ sao cho $i \to j$. Theo định nghĩa, tồn tại một số nguyên $m \in \mathbb{N}$ thỏa mãn $p_{ij}^{(m)} > 0$.  
> Giả sử phản chứng $j \notin C$. Khi đó:
> 
> $$\sum_{k \notin C} p_{ik}^{(m)} \ge p_{ij}^{(m)} > 0.$$
> 
> Do tổng xác suất rời khỏi $i$ luôn bảo toàn:
> 
> $$\sum_{k \in C} p_{ik}^{(m)} = 1 - \sum_{k \notin C} p_{ik}^{(m)} \le 1 - p_{ij}^{(m)} < 1.$$
> 
> Điều này mâu thuẫn với giả thiết $(2)$ là $\sum_{k \in C} p_{ik}^{(m)} = 1$ với mọi $m \in \mathbb{N}$. Vì vậy, bắt buộc $j \in C$. Mệnh đề $(1)$ được chứng minh.

> [!rem] Trạng thái hấp thụ
> Một trạng thái $i \in E$ được gọi là **trạng thái hấp thụ** (*absorbing state*) khi và chỉ khi tập đơn tử $\{i\}$ là một lớp đóng. Theo định nghĩa và tính chất lớp đóng ở trên, điều này tương đương với:
> 
> $$p_{ii} = 1$$
> 
> (hay nói cách khác, $p_{ij} = 0$ với mọi $j \ne i$, một khi xích đi vào trạng thái $i$ thì không thể rời khỏi nó trong mọi bước tiếp theo, tức $p_{ii}^{(n)} = 1$ với mọi $n \ge 1$).

> [!obs] 
> Trong phần tiếp theo, ta sẽ nghiên cứu một cách thứ hai để phân loại các trạng thái, phụ thuộc vào các kiểu hành vi của xích.
> 
> Trong toàn bộ mục này, xét một xích Markov $(X_n)_{n \ge 0}$ nhận giá trị trong không gian trạng thái $E$ với ma trận chuyển $P$.
> 
> Cho một trạng thái $i \in E$ sao cho $\mathbb{P}(X_0 = i) > 0$. Ta ký hiệu gọn $\mathbb{P}_i(\,\cdot\,)$ là xác suất có điều kiện $\mathbb{P}(\,\cdot \mid X_0 = i)$, tức là xác suất khi biết sự kiện $\{X_0 = i\}$ đã xảy ra.

> [!def] (Thời gian chạm)
> Với xích Markov $(X_n)_{n \ge 0}$ trên không gian trạng thái $E$ và $i \in E$, định nghĩa:
> 
> Thời gian chạm (hitting time):
> $$H_i := \inf\{n \ge 0 : X_n = i\},$$
> 
> Thời gian chạm đầu tiên (first passage time):
> $$T_i := \inf\{n \ge 1 : X_n = i\}.$$
> 
> Tổng quát, với tập con $A \subseteq E$: $H_A := \inf\{n \ge 0 : X_n \in A\}$. (Quy ước $\inf \emptyset = +\infty$.)

> [!rem] Phân biệt $H_i$ và $T_i$
> Điểm khác nhau duy nhất nằm ở việc có tính bước $n = 0$ hay không:
> 
> $H_i$ tính từ $n = 0$: nếu đang ở sẵn $i$ thì đã *chạm* ngay, $H_i = 0$.
> 
> $T_i$ tính từ $n \ge 1$: buộc phải bước ít nhất một lần rồi mới xét việc *quay lại* $i$, nên $T_i \ge 1$.

> [!obs] (Thời gian chạm đầu tiên $T_j$ là một biến ngẫu nhiên)
> Thời gian chạm đầu tiên $T_j = \inf\{n \ge 1 : X_n = j\}$ không phải là một tập hợp chỉ số cố định, mà là một biến ngẫu nhiên từ không gian mẫu $\Omega$ vào tập số tự nhiên mở rộng $\mathbb{N}^* \cup \{\infty\}$:
> 
> $$T_j: \Omega \to \mathbb{N}^* \cup \{\infty\}, \quad \omega \mapsto T_j(\omega) = \inf\{n \ge 1 : X_n(\omega) = j\}.$$
> 
> Với mọi mốc nguyên $n \ge 1$, biến cố $\{T_j \le n\}$ được biểu diễn qua hợp hữu hạn các tập nghịch ảnh đo được của các biến ngẫu nhiên $X_k$:
> 
> $$\{T_j \le n\} \equiv T_j^{-1}(\{1, \dots, n\}) = \bigcup_{k=1}^n \{X_k = j\} = \bigcup_{k=1}^n X_k^{-1}(\{j\}) \in \mathcal{F}.$$
> 
> Vậy $T_j$ là một ánh xạ đo được, tức là một **biến ngẫu nhiên**.

> [!def] (Trạng thái tái diễn và thoáng qua)
> Một trạng thái $i \in E$ được gọi là **tái diễn** (*recurrent*) nếu
> 
> $$\mathbb{P}_i(T_i < +\infty) = 1.$$
> 
> Trạng thái $i \in E$ được gọi là **thoáng qua** (*transient*) nếu không thoả điều kiện trên, tức là khi
> 
> $$\mathbb{P}_i(T_i < +\infty) < 1 \quad (\text{tương đương } \mathbb{P}_i(T_i = +\infty) > 0).$$
> 
> Nghĩa là:
> $i$ là tái diễn nếu *chắc chắn* sẽ quay lại;
> $i$ là thoáng qua nếu có xác suất dương *không bao giờ* quay lại, tức là rời khỏi $i$ vĩnh viễn.

> [!def] (Hàm Green)
> Số lần ghé thăm *trạng thái $i$* là biến ngẫu nhiên $N_i$ được định nghĩa bởi
> 
> $$N_i = \sum_{n=0}^\infty \mathbf{1}_{\{X_n = i\}}.$$
> 
> *Đại lượng* $G(i, j) := \mathbb{E}_i[N_j] = \mathbb{E}[N_j \mid X_0 = i]$ là kỳ vọng số lần ghé thăm trạng thái $j$ khi xuất phát từ trạng thái $i$. $G$ được gọi là **hàm Green**.

> [!lem] (Biểu diễn hàm Green qua xác suất chuyển)
> Với mọi $(i, j) \in E^2$,
> 
> $$G(i, j) = \sum_{n=0}^\infty p_{ij}^{(n)}.$$

> [!prf] 
> Theo định nghĩa của biến ngẫu nhiên $N_j$ và toán tử kỳ vọng có điều kiện $\mathbb{E}_i$:
> 
> $$G(i, j) = \mathbb{E}_i[N_j] = \mathbb{E}_i\left[ \sum_{n=0}^\infty \mathbf{1}_{\{X_n = j\}} \right].$$
> 
> Vì các số hạng $\mathbf{1}_{\{X_n = j\}} \ge 0$, áp dụng định lý hội tụ đơn điệu (Monotone Convergence Theorem) hoặc tính chất tuyến tính của kỳ vọng cho chuỗi không âm, ta có thể hoán đổi kỳ vọng và tổng vô hạn:
> 
> $$G(i, j) = \sum_{n=0}^\infty \mathbb{E}_i\left[ \mathbf{1}_{\{X_n = j\}} \right].$$
> 
> Mặt khác, kỳ vọng của hàm chỉ thị chính là xác suất của biến cố tương ứng:
> 
> $$\mathbb{E}_i\left[ \mathbf{1}_{\{X_n = j\}} \right] = \mathbb{P}_i(X_n = j) = \mathbb{P}(X_n = j \mid X_0 = i) = p_{ij}^{(n)}.$$
> 
> Thay vào đẳng thức trên, ta thu được:
> 
> $$G(i, j) = \sum_{n=0}^\infty p_{ij}^{(n)}.$$

> [!lem] (Hệ thức truy hồi phân phối số lần ghé thăm và hàm Green)
> Với mọi $(i, j) \in E^2$:
> 
> 3. Với mọi $n \in \mathbb{N}^*$,
>    $$\mathbb{P}_i(N_j \ge n + 1) = \mathbb{P}_i(T_j < \infty) \, \mathbb{P}_j(N_j \ge n).$$
>    Đẳng thức này cũng đúng cho $n = 0$ nếu $i \ne j$.
> 
> 4. Đối với hàm Green,
>    $$G(i, j) = \delta_{\{i=j\}} + \mathbb{P}_i(T_j < \infty) \, G(j, j),$$
>    trong đó $G(i, j) = \mathbb{E}_i[N_j]$ và $\delta_{\{i=j\}} = 1$ nếu $i = j$ (ngược lại bằng $0$).

> [!prf] 
> **1. Chứng minh hệ thức truy hồi phân phối:**
> 
> $$\mathbb{P}_i(N_j \ge n + 1) = \mathbb{P}_i(T_j < \infty) \, \mathbb{P}_j(N_j \ge n), \quad \forall n \ge 1.$$
> 
> Xét $n \ge 1$. Sử dụng công thức xác suất toàn phần theo sự kiện $T_j < \infty$ và phần bù $T_j = \infty$:
> 
> $$\mathbb{P}_i(N_j \ge n + 1) = \mathbb{P}_i(N_j \ge n + 1,\, T_j < \infty) + \mathbb{P}_i(N_j \ge n + 1,\, T_j = \infty).$$
> 
> Trên biến cố $\{T_j = \infty\}$, xích không bao giờ chạm tới trạng thái $j$ ở bất kỳ thời điểm nào $k \ge 1$. Do đó:
> * Nếu $i \ne j$, xích không bao giờ tới $j$, suy ra $N_j = 0 < n + 1$.
> * Nếu $i = j$, xích chỉ ở $j$ duy nhất tại thời điểm xuất phát $k = 0$ và không bao giờ quay lại, suy ra $N_j = 1 < n + 1$ (vì $n \ge 1 \implies n + 1 \ge 2$).
> 
> Trong cả hai trường hợp, biến cố $\{N_j \ge n + 1,\, T_j = \infty\} = \emptyset$, kéo theo xác suất của nó bằng $0$. Do đó:
> 
> $$\mathbb{P}_i(N_j \ge n + 1) = \mathbb{P}_i(N_j \ge n + 1,\, T_j < \infty).$$
> 
> Vì biến cố $\{T_j < \infty\}$ là hợp đếm được của các biến cố rời nhau $\{T_j = \ell\}$ với $\ell \in \{1, 2, \dots\}$, ta phân hoạch theo giá trị của thời gian chạm đầu tiên $\ell$:
> 
> $$\mathbb{P}_i(N_j \ge n + 1) = \sum_{\ell=1}^\infty \mathbb{P}_i(N_j \ge n + 1,\, T_j = \ell).$$
> 
> Chú ý rằng khi $T_j = \ell$, xích chạm $j$ lần đầu tiên tại bước $\ell$. Khi đó, số lần ghé thăm $j$ trong khoảng thời gian từ $0$ đến $\ell$ đúng bằng $1$ (nếu $i \ne j$ thì chỉ ghé thăm tại $\ell$; nếu $i = j$ thì theo định nghĩa $T_j = \inf\{k \ge 1 : X_k = j\} = \ell$, nên tại các bước $1, \dots, \ell-1$ xích không ghé thăm $j$, tức chỉ ghé thăm tại $0$ và $\ell$, nhưng lần ở $0$ không ảnh hưởng tới các bước sau). Để tổng số lần ghé thăm $N_j \ge n + 1$, số lần ghé thăm kể từ sau bước $\ell$ phải đạt ít nhất $n$ lần:
> 
> $$\{N_j \ge n + 1\} \cap \{T_j = \ell\} = \left\{ \sum_{k=\ell+1}^\infty \mathbf{1}_{\{X_k = j\}} \ge n \right\} \cap \{T_j = \ell\}.$$
> 
> Sử dụng công thức xác suất có điều kiện:
> 
> $$\mathbb{P}_i(N_j \ge n + 1) = \sum_{\ell=1}^\infty \mathbb{P}\left(\sum_{k=\ell+1}^\infty \mathbf{1}_{\{X_k = j\}} \ge n \;\Bigg|\; T_j = \ell,\, X_0 = i\right) \mathbb{P}_i(T_j = \ell).$$
> 
> Khai triển điều kiện $\{T_j = \ell, X_0 = i\}$, biến cố này tương đương với $\{X_\ell = j, X_{\ell-1} \ne j, \dots, X_1 \ne j, X_0 = i\}$. Theo tính chất Markov tổng quát (tính chất Markov đơn giản tại thời điểm cố định $\ell$ kết hợp với tính thuần nhất theo thời gian): tương lai sau bước $\ell$ chỉ phụ thuộc vào trạng thái hiện tại $X_\ell = j$ mà độc lập với toàn bộ lịch sử trước đó:
> 
> $$\mathbb{P}\left(\sum_{k=\ell+1}^\infty \mathbf{1}_{\{X_k = j\}} \ge n \;\Bigg|\; X_\ell = j,\, X_{\ell-1} \ne j,\, \dots,\, X_1 \ne j,\, X_0 = i\right) = \mathbb{P}\left(\sum_{k=\ell+1}^\infty \mathbf{1}_{\{X_k = j\}} \ge n \;\Bigg|\; X_\ell = j\right).$$
> 
> Đặt biến đổi chỉ số thời gian $m = k - \ell \ge 1$, ta thấy quá trình từ bước $\ell$ trở đi có cùng phân phối với một xích Markov mới xuất phát từ $j$ tại thời điểm $0$:
> 
> $$\mathbb{P}\left(\sum_{m=1}^\infty \mathbf{1}_{\{X_{\ell+m} = j\}} \ge n \;\Bigg|\; X_\ell = j\right) = \mathbb{P}_j\left(\sum_{m=1}^\infty \mathbf{1}_{\{X_m = j\}} \ge n\right).$$
> 
> Vì xích xuất phát từ $j$, tại mốc $m = 0$ ta luôn có $X_0 = j$ (tức $\mathbf{1}_{\{X_0 = j\}} = 1$). Do đó:
> 
> $$\sum_{m=1}^\infty \mathbf{1}_{\{X_m = j\}} \ge n \iff \sum_{m=0}^\infty \mathbf{1}_{\{X_m = j\}} \ge n + 1 \iff N_j \ge n + 1.$$
> 
> *(Lưu ý: Đối với việc xích đếm số lần quay lại sau bước đầu tiên, số lần chạm $N_j$ tính cả $X_0 = j$ sẽ có $N_j \ge n+1 \iff$ số bước chạm ở tương lai $\ge n$. Ta cũng có thể viết gọn là $\mathbb{P}_j(N_j \ge n)$ tùy theo quy ước tính số lần thăm sau bước nhảy đầu).*
> 
> Thay đại lượng không phụ thuộc vào $\ell$ này ra ngoài tổng, ta thu được:
> 
> $$\mathbb{P}_i(N_j \ge n + 1) = \mathbb{P}_j(N_j \ge n) \sum_{\ell=1}^\infty \mathbb{P}_i(T_j = \ell) = \mathbb{P}_i(T_j < \infty) \, \mathbb{P}_j(N_j \ge n).$$
> 
> Khi $i \ne j$, với $n = 0$: Biến cố $\{N_j \ge 1\}$ tương đương với việc xích ghé thăm $j$ ít nhất một lần ở thời điểm nào đó, tức là $T_j < \infty$. Mặt khác với xích xuất phát từ $j$, $\mathbb{P}_j(N_j \ge 0) = 1$. Do đó đẳng thức vẫn đúng:
> 
> $$\mathbb{P}_i(N_j \ge 1) = \mathbb{P}_i(T_j < \infty) = \mathbb{P}_i(T_j < \infty) \, \mathbb{P}_j(N_j \ge 0).$$
> 
> **2. Chứng minh hệ thức đối với hàm Green:**
> 
> $$G(i, j) = \delta_{\{i=j\}} + \mathbb{P}_i(T_j < \infty) \, G(j, j).$$
> 
> Theo Bổ đề 2, ta tách số hạng đầu tiên ứng với $n = 0$:
> 
> $$G(i, j) = \sum_{n=0}^\infty p_{ij}^{(n)} = p_{ij}^{(0)} + \sum_{n=1}^\infty p_{ij}^{(n)} = \delta_{\{i=j\}} + \sum_{n=1}^\infty \mathbb{P}_i(X_n = j).$$
> 
> Với mỗi $n \ge 1$, biến cố $\{X_n = j\}$ xảy ra khi và chỉ khi xích chạm trạng thái $j$ lần đầu tiên tại một thời điểm $\ell$ nào đó thỏa mãn $1 \le \ell \le n$. Sử dụng công thức xác suất toàn phần:
> 
> $$\mathbb{P}_i(X_n = j) = \sum_{\ell=1}^n \mathbb{P}_i(X_n = j,\, T_j = \ell) = \sum_{\ell=1}^n \mathbb{P}(X_n = j \mid T_j = \ell,\, X_0 = i) \, \mathbb{P}_i(T_j = \ell).$$
> 
> Do tính chất Markov và tính thuần nhất thời gian của xích:
> 
> $$\mathbb{P}(X_n = j \mid T_j = \ell,\, X_0 = i) = \mathbb{P}(X_n = j \mid X_\ell = j) = \mathbb{P}(X_{n-\ell} = j \mid X_0 = j) = p_{jj}^{(n-\ell)}.$$
> 
> Do đó:
> 
> $$\sum_{n=1}^\infty \mathbb{P}_i(X_n = j) = \sum_{n=1}^\infty \sum_{\ell=1}^n p_{jj}^{(n-\ell)} \, \mathbb{P}_i(T_j = \ell).$$
> 
> Vì mọi số hạng đều không âm, ta có thể đổi thứ tự lấy tổng theo định lý Fubini-Tonelli: miền lấy tổng $1 \le \ell \le n < \infty$ tương đương với $1 \le \ell < \infty$ và $\ell \le n < \infty$:
> 
> $$\sum_{n=1}^\infty \sum_{\ell=1}^n p_{jj}^{(n-\ell)} \, \mathbb{P}_i(T_j = \ell) = \sum_{\ell=1}^\infty \mathbb{P}_i(T_j = \ell) \left( \sum_{n=\ell}^\infty p_{jj}^{(n-\ell)} \right).$$
> 
> Thực hiện phép đổi biến số $m = n - \ell$ (khi $n$ chạy từ $\ell$ đến $\infty$ thì $m$ chạy từ $0$ đến $\infty$):
> 
> $$\sum_{n=\ell}^\infty p_{jj}^{(n-\ell)} = \sum_{m=0}^\infty p_{jj}^{(m)} = G(j, j).$$
> 
> Đại lượng $G(j, j)$ không phụ thuộc vào chỉ số $\ell$, nên ta có thể đưa ra ngoài tổng:
> 
> $$\sum_{\ell=1}^\infty \mathbb{P}_i(T_j = \ell) \cdot G(j, j) = \left( \sum_{\ell=1}^\infty \mathbb{P}_i(T_j = \ell) \right) G(j, j) = \mathbb{P}_i(T_j < \infty) \, G(j, j).$$
> 
> Thay kết quả này vào biểu thức ban đầu của $G(i, j)$, ta thu được:
> 
> $$G(i, j) = \delta_{\{i=j\}} + \mathbb{P}_i(T_j < \infty) \, G(j, j).$$

> [!thm] (Đặc trưng hóa các điều kiện tái diễn và thoáng qua)
> Các điều kiện sau là tương đương cho trạng thái $i \in E$ (khi bắt đầu từ $i$ với xác suất $\mathbb{P}_i$):
> 
> 1. Trạng thái $i$ là **tái diễn** (*recurrent*), tức là $\mathbb{P}_i(T_i < \infty) = 1$.
> 2. $\mathbb{P}_i(N_i = \infty) = 1$.
> 3. $G(i, i) = \infty$.
> 
> Tương tự, các điều kiện sau là tương đương cho trạng thái $i \in E$:
> 
> 1. Trạng thái $i$ là **thoáng qua** (*transient*), tức là $\mathbb{P}_i(T_i < \infty) < 1$.
> 2. $\mathbb{P}_i(N_i = \infty) = 0$.
> 3. $G(i, i) < \infty$, và khi đó:
> 
> $$G(i, i) = \frac{1}{\mathbb{P}_i(T_i = \infty)}.$$
> 
> Trong trường hợp này, phân phối có điều kiện của $N_i$ khi xuất phát từ $i$ là phân phối hình học với tham số thành công $\mathbb{P}_i(T_i = \infty)$.

> [!prf]
> **1. Chứng minh tương đương giữa điều kiện (1) và điều kiện (2):**
> 
> Khi xích xuất phát từ $i$ ($X_0 = i$), xích chắc chắn ghé thăm trạng thái $i$ tại bước $0$, do đó $\mathbb{P}_i(N_i \ge 1) = 1$.
> 
> Theo Bổ đề về hệ thức truy hồi phân phối số lần ghé thăm, với mọi $n \in \mathbb{N}^*$, ta có:
> 
> $$\mathbb{P}_i(N_i \ge n + 1) = \mathbb{P}_i(T_i < \infty) \, \mathbb{P}_i(N_i \ge n).$$
> 
> Bằng quy nạp toán học theo $n \ge 1$:
> * Với $n = 1$: ${} \mathbb{P}_i(N_i \ge 2) = \mathbb{P}_i(T_i < \infty) \, \mathbb{P}_i(N_i \ge 1) = \mathbb{P}_i(T_i < \infty) {}$.
> * Giả sử đẳng thức đúng với $n - 1 \ge 1$, tức là $\mathbb{P}_i(N_i \ge n) = \big(\mathbb{P}_i(T_i < \infty)\big)^{n-1}$. Khi đó:
> 
> $$\mathbb{P}_i(N_i \ge n + 1) = \mathbb{P}_i(T_i < \infty) \cdot \big(\mathbb{P}_i(T_i < \infty)\big)^{n-1} = \big(\mathbb{P}_i(T_i < \infty)\big)^n.$$
> 
> Do đó, với mọi $n \ge 1$, ta thu được công thức tổng quát:
> 
> $$\mathbb{P}_i(N_i \ge n) = \big(\mathbb{P}_i(T_i < \infty)\big)^{n-1}.$$
> 
> Nhận thấy rằng dãy biến cố $\{N_i \ge n\}_{n \ge 1}$ là một dãy giảm theo nghĩa bao hàm tập hợp:
> 
> $$\{N_i \ge 1\} \supseteq \{N_i \ge 2\} \supseteq \cdots \supseteq \{N_i \ge n\} \supseteq \{N_i \ge n+1\} \supseteq \cdots$$
> 
> và giao đếm được của dãy biến cố này chính là sự kiện xích ghé thăm trạng thái $i$ vô hạn lần:
> 
> $$\bigcap_{n=1}^\infty \{N_i \ge n\} = \{N_i = \infty\}.$$
> 
> Sử dụng tính chất liên tục dưới của độ đo xác suất $\mathbb{P}_i$, ta lấy giới hạn:
> 
> $$\mathbb{P}_i(N_i = \infty) = \mathbb{P}_i\left( \bigcap_{n=1}^\infty \{N_i \ge n\} \right) = \lim_{n \to \infty} \mathbb{P}_i(N_i \ge n) = \lim_{n \to \infty} \big(\mathbb{P}_i(T_i < \infty)\big)^{n-1}.$$
> 
> Đặt giá trị xác suất trở lại là $f_{ii} := \mathbb{P}_i(T_i < \infty) \in [0, 1]$. Xét giới hạn của cấp số nhân:
> * **Trường hợp tái diễn:** Nếu $\mathbb{P}_i(T_i < \infty) = 1$, thì $f_{ii} = 1$, kéo theo:
>   $$\mathbb{P}_i(N_i = \infty) = \lim_{n \to \infty} 1^{n-1} = 1.$$
>   Ngược lại, nếu $\mathbb{P}_i(N_i = \infty) = 1$, thì bắt buộc $\lim_{n \to \infty} f_{ii}^{n-1} = 1$, điều này chỉ có thể xảy ra khi $f_{ii} = 1$, tức $\mathbb{P}_i(T_i < \infty) = 1$.
> * **Trường hợp thoáng qua:** Nếu $\mathbb{P}_i(T_i < \infty) < 1$, thì $0 \le f_{ii} < 1$, do đó:
>   $$\mathbb{P}_i(N_i = \infty) = \lim_{n \to \infty} f_{ii}^{n-1} = 0.$$
>   Ngược lại, nếu $\mathbb{P}_i(N_i = \infty) = 0$, thì bắt buộc $f_{ii} < 1$, tức $\mathbb{P}_i(T_i < \infty) < 1$.
> 
> Từ đó khẳng định tính tương đương hoàn toàn giữa điều kiện (1) và điều kiện (2).
> 
> **2. Chứng minh tương đương giữa điều kiện (1) và điều kiện (3):**
> 
> Áp dụng hệ thức đối với hàm Green từ Bổ đề biểu diễn hàm Green cho trường hợp $j = i$:
> 
> $$G(i, i) = \delta_{\{i=i\}} + \mathbb{P}_i(T_i < \infty) \, G(i, i) = 1 + \mathbb{P}_i(T_i < \infty) \, G(i, i).$$
> 
> Chuyển vế số hạng chứa $G(i, i)$, ta được hệ thức:
> 
> $$G(i, i) \big(1 - \mathbb{P}_i(T_i < \infty)\big) = 1.$$
> 
> Chú ý rằng theo định nghĩa biến cố bù, $1 - \mathbb{P}_i(T_i < \infty) = \mathbb{P}_i(T_i = \infty)$. Do đó:
> 
> $$G(i, i) \, \mathbb{P}_i(T_i = \infty) = 1.$$
> 
> Phân tích phương trình này:
> * **Nếu trạng thái $i$ là thoáng qua ($\mathbb{P}_i(T_i < \infty) < 1$):**  
>   Khi đó xác suất xích rời khỏi $i$ vĩnh viễn là số dương thực sự: $\mathbb{P}_i(T_i = \infty) > 0$. Chia cả hai vế cho đại lượng khác $0$ này, ta suy ra:
>   $$G(i, i) = \frac{1}{1 - \mathbb{P}_i(T_i < \infty)} = \frac{1}{\mathbb{P}_i(T_i = \infty)} < \infty.$$
>   Ngược lại, nếu $G(i, i) < \infty$, từ đẳng thức $G(i, i) \big(1 - \mathbb{P}_i(T_i < \infty)\big) = 1$, đại lượng $1 - \mathbb{P}_i(T_i < \infty)$ không thể bằng $0$, kéo theo $\mathbb{P}_i(T_i < \infty) < 1$.
> 
> * **Nếu trạng thái $i$ là tái diễn ($\mathbb{P}_i(T_i < \infty) = 1$):**  
>   Khi đó $\mathbb{P}_i(T_i = \infty) = 0$. Giả sử phản chứng $G(i, i) < \infty$, thì vế trái bằng $G(i, i) \cdot 0 = 0$, mâu thuẫn với vế phải bằng $1$. Do đó bắt buộc:
>   $$G(i, i) = \infty.$$
>   Ngược lại, nếu $G(i, i) = \infty$, thì đại lượng $1 - \mathbb{P}_i(T_i < \infty)$ bắt buộc phải bằng $0$ (vì nếu nó là số dương hằng số $c > 0$ thì $G(i, i) = 1/c < \infty$), kéo theo $\mathbb{P}_i(T_i < \infty) = 1$.
> 
> **3. Phân phối hình học của số lần ghé thăm trong trường hợp thoáng qua:**
> 
> Trong trường hợp trạng thái $i$ là thoáng qua, với mọi số nguyên dương $n \ge 1$, ta xác định phân phối điểm của biến ngẫu nhiên $N_i$ thông qua hiệu của hai biến cố liên tiếp:
> 
> $$\mathbb{P}_i(N_i = n) = \mathbb{P}_i(N_i \ge n) - \mathbb{P}_i(N_i \ge n + 1).$$
> 
> Thay biểu thức $\mathbb{P}_i(N_i \ge n) = \big(\mathbb{P}_i(T_i < \infty)\big)^{n-1}$ đã chứng minh ở phần 1:
> 
> $$\mathbb{P}_i(N_i = n) = \big(\mathbb{P}_i(T_i < \infty)\big)^{n-1} - \big(\mathbb{P}_i(T_i < \infty)\big)^n = \big(\mathbb{P}_i(T_i < \infty)\big)^{n-1} \big(1 - \mathbb{P}_i(T_i < \infty)\big).$$
> 
> Vì $1 - \mathbb{P}_i(T_i < \infty) = \mathbb{P}_i(T_i = \infty)$, ta thu được dạng tường minh:
> 
> $$\mathbb{P}_i(N_i = n) = \big(1 - \mathbb{P}_i(T_i = \infty)\big)^{n-1} \mathbb{P}_i(T_i = \infty), \quad \forall n \ge 1.$$
> 
> Đây chính là hàm khối xác suất của **phân phối hình học** trên tập $\{1, 2, 3, \dots\}$ mô tả số phép thử độc lập cho đến khi gặp thất bại đầu tiên, với tham số xác suất dừng (thành công trong việc thoát ra ngoài vĩnh viễn) là $p = \mathbb{P}_i(T_i = \infty)$.

> [!prp] (Tính hữu hạn của kỳ vọng thời gian chạm trong xích Markov bất khả quy hữu hạn)
> Cho $(X_n)_{n \ge 0}$ là một xích Markov bất khả quy trên không gian trạng thái hữu hạn $E$. Khi đó, với mọi $i, j \in E$,
> 
> $$\mathbb{E}_i(T_j) < \infty$$
> 
> trong đó $T_j := \inf\{n \ge 1 : X_n = j\}$ là thời gian chạm đầu tiên trạng thái $j$ khi xuất phát từ $i$.

> [!prf] Chứng minh
> Cố định trạng thái đích $j \in E$.
> 
> **Bước 1: Thiết lập chặn dưới xác suất chạm**
> Do xích Markov $(X_n)_{n \ge 0}$ bất khả quy, mọi trạng thái đều liên thông tới $j$, tức là với mỗi $i \in E$, luôn tồn tại $n_i \in \mathbb{N}^*$ sao cho:
> $$p_{ij}^{(n_i)} = \mathbb{P}_i(X_{n_i} = j) > 0$$
> Vì không gian trạng thái $E$ hữu hạn, ta xác định thời gian cực đại và xác suất tối thiểu tương ứng:
> $$N := \max_{i \in E} n_i < \infty \quad \text{và} \quad \varepsilon := \min_{i \in E} p_{ij}^{(n_i)} > 0$$
> Với mọi $i \in E$, do $n_i \le N$, nếu xích tới $j$ ở bước $n_i$ thì thời điểm chạm đầu tiên không vượt quá $N$, kéo theo quan hệ bao hàm giữa các biến cố:
> $$\{X_{n_i} = j\} \subseteq \{T_j \le n_i\} \subseteq \{T_j \le N\}$$
> Suy ra:
> $$\mathbb{P}_i(T_j \le N) \ge \mathbb{P}_i(X_{n_i} = j) = p_{ij}^{(n_i)} \ge \varepsilon > 0$$
> Lấy biến cố đối, xác suất không chạm $j$ trong $N$ bước đầu tiên thỏa mãn:
> $$\mathbb{P}_i(T_j > N) = 1 - \mathbb{P}_i(T_j \le N) \le 1 - \varepsilon, \quad \forall i \in E$$
> 
> **Bước 2: Phân chia khối và đánh giá xác suất đuôi**
> Chia trục thời gian thành các khối rời nhau có độ dài bằng $N$: 
> $$[0, N],\; [N, 2N],\; [2N, 3N],\; \dots,\; [(m-1)N, mN] \quad (m \ge 1)$$Với mỗi khối thứ $k \ge 1$, đặt biến cố không ghé thăm $j$ trong khối là:
> $$A_k := \bigcap_{r=(k-1)N + 1}^{kN} \{X_r \neq j\}$$
> Khi đó, biến cố xích chưa chạm $j$ sau $m$ khối ($m \ge 1$) được viết thành:
> $$\{T_j > mN\} = \bigcap_{k=1}^m A_k$$
> 
> Với $m \ge 2$, đặt $t_0 := (m-1)N$ là mốc bắt đầu khối thứ $m$. Sử dụng công thức xác suất toàn phần theo trạng thái $X_{t_0} \in E$:
> $$\begin{aligned}
> \mathbb{P}_i\left(\bigcap_{k=1}^m A_k\right) &= \sum_{x \in E} \mathbb{P}_i\left(A_m \cap \bigcap_{k=1}^{m-1} A_k \cap \{X_{t_0} = x\}\right) \\
> &= \sum_{x \in E} \mathbb{P}_i\left(A_m \;\middle|\; \bigcap_{k=1}^{m-1} A_k,\, X_{t_0} = x\right) \mathbb{P}_i\left(\bigcap_{k=1}^{m-1} A_k,\, X_{t_0} = x\right)
> \end{aligned}$$
> 
> Theo tính chất Markov, biết trạng thái hiện tại $X_{t_0} = x$ thì tương lai $A_m$ độc lập với quá khứ. Kết hợp tính thuần nhất thời gian:
> $$\mathbb{P}_i\left(A_m \;\middle|\; \bigcap_{k=1}^{m-1} A_k,\, X_{t_0} = x\right) = \mathbb{P}\left(\bigcap_{r=1}^N \{X_r \neq j\} \;\middle|\; X_0 = x\right) = \mathbb{P}_x(T_j > N) \le 1 - \varepsilon$$
> 
> Thay cận trên $1 - \varepsilon$ vào tổng:
> $$\begin{aligned}
> \mathbb{P}_i\left(\bigcap_{k=1}^m A_k\right) &\le (1 - \varepsilon) \sum_{x \in E} \mathbb{P}_i\left(\bigcap_{k=1}^{m-1} A_k,\, X_{t_0} = x\right) \\
> &= (1 - \varepsilon) \, \mathbb{P}_i\left(\bigcap_{k=1}^{m-1} A_k\right)
> \end{aligned}$$
> 
> Bằng quy nạp theo số khối $m$, ta thu được chặn trên dạng hàm mũ:
> $$\mathbb{P}_i(T_j > mN) = \mathbb{P}_i\left(\bigcap_{k=1}^m A_k\right) \le (1 - \varepsilon)^m, \quad \forall m \ge 1$$
> 
> **Bước 3: Tính kỳ vọng $\mathbb{E}_i(T_j)$ qua chuỗi đuôi phân phối**
> Do $T_j$ nhận giá trị trong $\mathbb{N}^* \cup \{\infty\}$, kỳ vọng được biểu diễn qua tổng các xác suất đuôi và gom theo từng khối:
> $$\mathbb{E}_i(T_j) = \sum_{t=0}^\infty \mathbb{P}_i(T_j > t) = \sum_{m=0}^\infty \sum_{t=mN}^{(m+1)N - 1} \mathbb{P}_i(T_j > t)$$
> 
> Vì biến cố $\{T_j > t\}$ thu hẹp dần khi $t$ tăng, hàm $t \mapsto \mathbb{P}_i(T_j > t)$ là hàm không tăng. Do đó, với mọi $t \in [mN, (m+1)N)$:
> $$\mathbb{P}_i(T_j > t) \le \mathbb{P}_i(T_j > mN) \le (1 - \varepsilon)^m$$
> 
> Mỗi khối chứa đúng $N$ giá trị nguyên của $t$, nên ta chặn trên chuỗi tổng:
> $$\mathbb{E}_i(T_j) \le \sum_{m=0}^\infty N (1 - \varepsilon)^m = N \sum_{m=0}^\infty (1 - \varepsilon)^m$$
> 
> Vì $0 < \varepsilon \le 1$ nên $0 \le 1 - \varepsilon < 1$. Cấp số nhân lùi vô hạn hội tụ:
> $$\mathbb{E}_i(T_j) \le N \cdot \frac{1}{1 - (1 - \varepsilon)} = \frac{N}{\varepsilon} < \infty$$
> 
> Chứng minh hoàn tất.

> [!prp] (Sự bảo toàn tính tái diễn qua quan hệ giao tiếp)
> Xét hai trạng thái $i$ và $j$. Giả sử chúng giao tiếp với nhau, tức là $i \leftrightarrow j$. Khi đó $i$ và $j$ hoặc đều tái diễn, hoặc đều thoáng qua.

> [!prf] 
> Vì $i \leftrightarrow j$, theo định nghĩa quan hệ giao tiếp, tồn tại hai số nguyên $m, n \ge 0$ sao cho:
> $$p_{ij}^{(m)} > 0 \quad \text{và} \quad p_{ji}^{(n)} > 0$$
> 
> Xét hàm Green (số lần ghé thăm kỳ vọng) tại trạng thái $i$:
> $$G(i, i) = \sum_{k=0}^\infty p_{ii}^{(k)}$$
> 
> Với mọi số nguyên $k \ge 0$, ta xem xét hành trình xuất phát từ $j$, đi đến $i$ sau $n$ bước, quay lại $i$ sau $k$ bước, và trở về $j$ sau $m$ bước. Theo phương trình Chapman-Kolmogorov:
> $$p_{jj}^{(n + k + m)} \ge p_{ji}^{(n)} p_{ii}^{(k)} p_{ij}^{(m)}$$
> 
> Lấy tổng hai vế theo $k \ge 0$:
> $$\sum_{k=0}^\infty p_{jj}^{(n + k + m)} \ge p_{ji}^{(n)} \left(\sum_{k=0}^\infty p_{ii}^{(k)}\right) p_{ij}^{(m)} = p_{ji}^{(n)} G(i, i) p_{ij}^{(m)}$$
> 
> Mặt khác, chuỗi ở vế trái là một phần của chuỗi hàm Green $G(j, j)$:
> $$G(j, j) = \sum_{t=0}^\infty p_{jj}^{(t)} \ge \sum_{k=0}^\infty p_{jj}^{(n + k + m)}$$
> 
> Do đó, ta thu được bất đẳng thức:
> $$G(j, j) \ge p_{ji}^{(n)} p_{ij}^{(m)} G(i, i)$$
> 
> Tương tự, hoán đổi vai trò của $i$ và $j$, tồn tại hằng số $p_{ij}^{(m)} p_{ji}^{(n)} > 0$ sao cho:
> $$G(i, i) \ge p_{ij}^{(m)} p_{ji}^{(n)} G(j, j)$$
> 
> Đặt $c = p_{ji}^{(n)} p_{ij}^{(m)} > 0$, ta có:
> $$c \, G(i, i) \le G(j, j) \le \frac{1}{c} \, G(i, i)$$
> 
> Từ bất đẳng thức kép trên:
> * Nếu $i$ tái diễn thì $G(i, i) = \infty$, suy ra $G(j, j) = \infty$, do đó $j$ tái diễn.
> * Nếu $i$ thoáng qua thì $G(i, i) < \infty$, suy ra $G(j, j) < \infty$, do đó $j$ thoáng qua.
> 
> Vậy $i$ và $j$ có cùng tính chất tái diễn hoặc thoáng qua.

> [!def] (Lớp tái diễn / Lớp thoáng qua)
> Một lớp tương đương (lớp giao tiếp) được gọi là: 
>  1. **tái diễn** nếu một (và khi đó mọi) trạng thái trong lớp là tái diễn;
>  2. **thoáng qua** nếu một (và khi đó mọi) trạng thái trong lớp là thoáng qua.

> [!prp] (Tính đóng của lớp tái diễn)
> Một lớp tái diễn là **đóng**; nói cách khác, xác suất rời khỏi một lớp tái diễn bằng 0.

> [!prf] 
> Giả sử phản chứng rằng lớp tái diễn $C$ không đóng. 
> 
> Khi đó, tồn tại một trạng thái $i \in C$ và một trạng thái $j \notin C$ sao cho $i \to j$, nghĩa là tồn tại $m \ge 1$ để:
> $$p_{ij}^{(m)} = \mathbb{P}_i(X_m = j) > 0$$
> Vì $j \notin C$ và $C$ là một lớp giao tiếp cực đại, ta không thể có $j \to i$ (bởi nếu $j \to i$ thì do $i \to j$ suy ra $i \leftrightarrow j$, kéo theo $j \in C$, mâu thuẫn). Do $j \not\to i$, từ $j$ xích không thể quay lại $i$:
> $$\mathbb{P}_j(T_i < \infty) = 0$$
> 
> Xét xác suất quay trở lại $i$ lần đầu tiên khi xuất phát từ $i$:
> $$\begin{aligned}
> \mathbb{P}_i(T_i < \infty) &= \mathbb{P}_i(T_i < \infty,\, X_m = j) + \mathbb{P}_i(T_i < \infty,\, X_m \neq j) \\
> &\le \mathbb{P}_i(T_i < \infty,\, X_m = j) + \mathbb{P}_i(X_m \neq j)
> \end{aligned}$$
> 
> Áp dụng tính chất Markov tại bước $m$:
> $$\mathbb{P}_i(T_i < \infty,\, X_m = j) = \mathbb{P}_i(X_m = j) \mathbb{P}_j(T_i < \infty) = p_{ij}^{(m)} \cdot 0 = 0$$
> 
> Kết hợp hai điều trên:
> $$\mathbb{P}_i(T_i < \infty) \le 0 + \mathbb{P}_i(X_m \neq j) = 1 - p_{ij}^{(m)} < 1$$
> 
> Điều này mâu thuẫn với giả thiết $i$ là trạng thái tái diễn (vốn đòi hỏi $\mathbb{P}_i(T_i < \infty) = 1$). Vậy lớp tái diễn $C$ bắt buộc phải là tập đóng.

> [!prp] (Tính tái diễn của lớp đóng hữu hạn)
> Mọi lớp đóng có số phần tử hữu hạn đều tái diễn.

> [!prf]
> Giả sử $C$ là một lớp đóng hữu hạn gồm các trạng thái $\{1, 2, \dots, K\}$.
> 
> Giả sử phản chứng rằng $C$ không tái diễn. Vì tính tái diễn/thoáng qua là tính chất lớp, mọi trạng thái trong $C$ đều phải là thoáng qua.
> 
> Do mỗi trạng thái $k \in C$ là thoáng qua, hàm Green tại đó là hữu hạn với mọi điểm xuất phát $i \in C$:
> 
> $$G(i, k) = \sum_{n=0}^\infty p_{ik}^{(n)} < \infty, \quad \forall k \in C$$
> 
> Lấy tổng số lần ghé thăm trên toàn bộ lớp $C$:
> 
> $$\sum_{k \in C} G(i, k) = \sum_{k \in C} \sum_{n=0}^\infty p_{ik}^{(n)} = \sum_{n=0}^\infty \sum_{k \in C} p_{ik}^{(n)}$$
> 
> Vì $C$ là tập đóng và xuất phát từ $i \in C$, xích không bao giờ rời khỏi $C$, tức là $\sum_{k \in C} p_{ik}^{(n)} = 1$ với mọi $n \ge 0$. Do đó:
> 
> $$\sum_{k \in C} G(i, k) = \sum_{n=0}^\infty 1 = \infty$$
> 
> Mặt khác, vì $C$ có hữu hạn phần tử ($|C| < \infty$), tổng của hữu hạn các số hữu hạn $G(i, k)$ bắt buộc phải là một số hữu hạn:
> 
> $$\sum_{k \in C} G(i, k) < \infty$$
> 
> Mâu thuẫn này chứng tỏ không thể có chuyện mọi trạng thái trong $C$ đều thoáng qua. Vậy lớp đóng hữu hạn $C$ phải là một lớp tái diễn.

> [!prp] Cấu trúc Thứ tự một phần giữa các Lớp và Sự tồn tại của Lớp đóng
> Giả sử không gian trạng thái $E$ được phân hoạch thành họ các lớp giao tiếp đôi một rời nhau $\mathcal{C}$. Định nghĩa quan hệ tiếp cận $\preceq$ giữa hai lớp giao tiếp $C, C' \in \mathcal{C}$ bởi:
> 
> $$C \preceq C' \iff C \to C' \quad (\exists i \in C, \, \exists j \in C': i \to j).$$
> 
> Khi đó:
> 1. Quan hệ $\preceq$ là một **quan hệ thứ tự một phần** (partial order) trên $\mathcal{C}$.
> 2. Lớp $C \in \mathcal{C}$ là **phần tử cực đại** (maximal element) đối với thứ tự $\preceq$ khi và chỉ khi $C$ là một **lớp đóng** (closed class).
> 3. Nếu $E$ hữu hạn, xích Markov luôn tồn tại ít nhất một lớp đóng.

> [!prf]
> **1. Tính phản đối xứng của $\preceq$:**
> Ta đã chứng minh tính phản xạ và bắc cầu. Với tính phản đối xứng: Giả sử $C_1 \preceq C_2$ và $C_2 \preceq C_1$. Tồn tại $i, i' \in C_1$ và $j, j' \in C_2$ sao cho $i \to j$ và $j' \to i'$. Vì $j \to j'$ và $i' \to i$, ta có chuỗi dẫn $j \to j' \to i' \to i \implies j \to i$. Kết hợp với $i \to j$, suy ra $i \leftrightarrow j$. Do đó hai lớp tương đương trùng nhau: $C_1 = C_2$.
> 
> **2. $C$ cực đại $\iff C$ là lớp đóng:**
> * $(\implies)$ Giả sử $C$ cực đại. Nếu $i \in C$ và $i \to k$, gọi $C_k$ là lớp chứa $k$, ta có $C \preceq C_k$. Do $C$ cực đại nên $C_k = C \implies k \in C$. Vậy $C$ đóng.
> * $(\impliedby)$ Giả sử $C$ đóng. Nếu $C \preceq C'$, tồn tại $i \in C, j \in C'$ sao cho $i \to j$. Do $C$ đóng nên $j \in C \implies C' = C$. Vậy $C$ là cực đại.
> 
> **3. Sự tồn tại lớp đóng khi $E$ hữu hạn:**
> Khi $E$ hữu hạn, số lớp $|\mathcal{C}| = r < \infty$. Giả sử phản chứng không có lớp nào đóng (tức không có phần tử cực đại). Khi đó từ mỗi lớp luôn tồn tại một lớp khác lớn hơn ngặt, sinh ra chuỗi tăng vô hạn:
> 
> $$C_1 \prec C_2 \prec C_3 \prec \dots$$
> 
> Do tính phản đối xứng, các lớp trong chuỗi phải đôi một khác nhau (nếu $a < b$ mà $C_a = C_b$ thì $C_a \prec C_a$, vô lý). Điều này kéo theo họ $\mathcal{C}$ có vô hạn phần tử, mâu thuẫn với $|\mathcal{C}| < \infty$. Vậy luôn tồn tại ít nhất một lớp đóng.

> [!def] (Thời điểm chạm, Xác suất chạm và Thời gian chạm trung bình)
> Cho xích Markov $(X_n)_{n \ge 0}$ với không gian trạng thái $E$ và tập con $A \subseteq E$.
> 
> **Thời điểm chạm (Hitting time)** vào tập $A$ là biến ngẫu nhiên:
> $$H_A = \inf\{n \ge 0 : X_n \in A\}$$
> quy ước $\inf \emptyset = \infty$.
> 
> **Xác suất chạm (Hitting probability):** Xác suất xích xuất phát từ $i$ sẽ chạm vào tập $A$ sau một số bước hữu hạn:
>   $$h_i^A = \mathbb{P}_i(H_A < \infty)$$
>   Khi $A$ là một lớp đóng, $h_i^A$ còn được gọi là **xác suất hấp thụ (absorption probability)**.
> 
> **Thời gian chạm trung bình (Mean hitting time):** Kỳ vọng của thời điểm chạm vào tập $A$ khi xích xuất phát từ $i$:
>   $$k_i^A = \mathbb{E}_i(H_A) = \sum_{n < \infty} n \, \mathbb{P}_i(H_A = n) + \infty \cdot \mathbb{P}_i(H_A = \infty)$$

> [!thm] Phương trình xác suất chạm (First Step Analysis)
> Vector xác suất chạm $h^A = (h_i^A : i \in E)$ là nghiệm không âm nhỏ nhất của hệ:
> 
> $$\begin{cases}
> h_i^A = 1, & i \in A, \\
> h_i^A = \displaystyle\sum_{j \in E} p_{ij} h_j^A, & i \notin A.
> \end{cases}$$

> [!prf]
> Chứng minh gồm hai phần: kiểm tra $h^A$ là một nghiệm và chứng minh tính cực tiểu (nghiệm không âm nhỏ nhất).
> 
> **Phần 1: $h^A$ thỏa mãn hệ phương trình**
> 
> Trường hợp $i \in A$:
> Nếu xích xuất phát từ $i \in A$, thì $X_0 = i \in A$, dẫn đến $H_A = 0 < \infty$ chắc chắn xảy ra:
> 
> $$h_i^A = \mathbb{P}_i(H_A < \infty) = 1$$
> 
> Trường hợp $i \notin A$:
> Khi $X_0 = i \notin A$, thời điểm chạm sớm nhất vào $A$ phải thỏa $H_A \ge 1$. Do đó:
> 
> $$\{H_A < \infty\} = \{1 \le H_A < \infty\}$$
> 
> Phân tích theo trạng thái sau bước nhảy đầu tiên $X_1 = j \in E$ bằng công thức xác suất toàn phần:
> 
> $$h_i^A = \mathbb{P}_i(H_A < \infty) = \sum_{j \in E} \mathbb{P}_i(H_A < \infty,\, X_1 = j) = \sum_{j \in E} \mathbb{P}_i(H_A < \infty \mid X_1 = j) \, \mathbb{P}_i(X_1 = j)$$
> 
> Theo tính chất Markov tại thời điểm $n = 1$ và tính thuần nhất thời gian:
> 
> $$\mathbb{P}_i(H_A < \infty \mid X_1 = j) = \mathbb{P}_j(H_A < \infty) = h_j^A$$
> 
> Vì $\mathbb{P}_i(X_1 = j) = p_{ij}$, thay vào tổng ta được:
> 
> $$h_i^A = \sum_{j \in E} p_{ij} h_j^A, \quad \forall i \notin A$$
> 
> Như vậy, vector $h^A = (h_i^A : i \in E)$ thỏa mãn hệ phương trình đã cho. Hiển nhiên $h_i^A = \mathbb{P}_i(H_A < \infty) \ge 0$, nên $h^A$ là một nghiệm không âm.
> 
> **Phần 2: $h^A$ là nghiệm không âm nhỏ nhất**
> 
> Giả sử $x = (x_i : i \in E)$ là một nghiệm không âm bất kỳ của hệ, nghĩa là $x_i \ge 0$ với mọi $i \in E$ và thỏa mãn:
> 
> $$\begin{cases}
> x_i = 1, & i \in A, \\
> x_i = \displaystyle\sum_{j \in E} p_{ij} x_j, & i \notin A.
> \end{cases}$$
> 
> Ta cần chứng minh $x_i \ge h_i^A$ với mọi $i \in E$.
> 
> Đặt $H_A^{(n)} = \inf\{0 \le k \le n : X_k \in A\}$ và xác suất chạm trong tối đa $n$ bước là:
> 
> $$h_i^{A, (n)} = \mathbb{P}_i(H_A \le n)$$
> 
> Ta chứng minh bằng quy nạp theo $n$ rằng $x_i \ge \mathbb{P}_i(H_A \le n)$ với mọi $i \in E$:
> 
> 7. **Với $n = 0$:**
> Nếu $i \in A$: $\mathbb{P}_i(H_A \le 0) = \mathbb{P}_i(X_0 \in A) = 1 = x_i$.
> Nếu $i \notin A$: $\mathbb{P}_i(H_A \le 0) = \mathbb{P}_i(X_0 \in A) = 0 \le x_i$ (do $x_i \ge 0$).
> Vậy khẳng định đúng với $n = 0$.
> 
> 8. **Giả sử khẳng định đúng đến bước $n$:** $x_j \ge \mathbb{P}_j(H_A \le n)$ với mọi $j \in E$.
> 
> 9. **Xét bước $n + 1$:**
> Nếu $i \in A$: $\mathbb{P}_i(H_A \le n + 1) = 1 = x_i$.
> Nếu $i \notin A$: để xích chạm $A$ trong vòng $n + 1$ bước, nó phải nhảy đến một trạng thái $j$ ở bước 1 rồi từ $j$ chạm $A$ trong tối đa $n$ bước kế tiếp:
> 
> $$\mathbb{P}_i(H_A \le n + 1) = \sum_{j \in E} p_{ij} \, \mathbb{P}_j(H_A \le n)$$
> 
> Áp dụng giả thiết quy nạp $\mathbb{P}_j(H_A \le n) \le x_j$:
> 
> $$\mathbb{P}_i(H_A \le n + 1) \le \sum_{j \in E} p_{ij} x_j = x_i$$
> 
> Theo nguyên lý quy nạp toán học, ta có $x_i \ge \mathbb{P}_i(H_A \le n)$ với mọi $n \ge 0$ và mọi $i \in E$.
> 
> Lấy giới hạn hai vế khi $n \to \infty$, theo tính liên tục của độ đo xác suất trên dãy biến cố tăng $\{H_A \le n\} \uparrow \{H_A < \infty\}$:
> 
> $$x_i \ge \lim_{n \to \infty} \mathbb{P}_i(H_A \le n) = \mathbb{P}_i(H_A < \infty) = h_i^A, \quad \forall i \in E$$
> 
> Do đó, $h^A$ là nghiệm không âm nhỏ nhất của hệ.

> [!thm] Phương trình thời gian chạm trung bình (Mean Hitting Time First Step Analysis)
> Vector thời gian chạm trung bình $k^A = (k_i^A : i \in E)$ với $k_i^A = \mathbb{E}_i(H_A)$ là nghiệm không âm nhỏ nhất của hệ:
> 
> $$\begin{cases}
> k_i^A = 0, & i \in A, \\
> k_i^A = 1 + \displaystyle\sum_{j \notin A} p_{ij} k_j^A, & i \notin A.
> \end{cases}$$

> [!prf]
> **Phần 1: $k^A$ thỏa mãn hệ phương trình**
> 
> Trường hợp $i \in A$:
> Nếu $X_0 = i \in A$, biến ngẫu nhiên thời điểm chạm nhận giá trị $H_A = 0$ hầu chắc chắn, do đó:
> 
> $$k_i^A = \mathbb{E}_i(H_A) = 0$$
> 
> Trường hợp $i \notin A$:
> Vì $X_0 \notin A$, thời điểm chạm sớm nhất vào $A$ thỏa mãn $H_A \ge 1$. Do đó:
> 
> $$H_A = 1 + (H_A - 1)$$
> 
> Phân tích theo bước nhảy đầu tiên $X_1 = j \in E$:
> 
> $$k_i^A = \mathbb{E}_i(H_A) = 1 + \sum_{j \in E} p_{ij} \, \mathbb{E}[H_A - 1 \mid X_1 = j]$$
> 
> Theo tính chất Markov tại bước 1:
> * Nếu $j \in A$, xích chạm $A$ ngay tại bước 1, nên thời gian còn lại là $H_A - 1 = 0$.
> * Nếu $j \notin A$, thời gian còn lại từ bước 1 trở đi có cùng phân phối với $H_A$ khi xích xuất phát từ $j$, tức $\mathbb{E}[H_A - 1 \mid X_1 = j] = \mathbb{E}_j(H_A) = k_j^A$.
> 
> Do đó, tổng triệt tiêu trên tập $A$ và chỉ còn lại trên $E \setminus A$:
> 
> $$k_i^A = 1 + \sum_{j \notin A} p_{ij} k_j^A, \quad \forall i \notin A$$
> 
> **Phần 2: $k^A$ là nghiệm không âm nhỏ nhất**
> 
> Giả sử $y = (y_i : i \in E)$ là một nghiệm không âm bất kỳ của hệ ($y_i \ge 0, \forall i \in E$). Bằng quy nạp tương tự như phần xác suất chạm với biến cố cắt cụt $H_A \wedge n = \min(H_A, n)$, ta có $y_i \ge \mathbb{E}_i(H_A \wedge n)$ với mọi $n \ge 0$. Cho $n \to \infty$, theo định lý hội tụ đơn điệu ta được $y_i \ge \mathbb{E}_i(H_A) = k_i^A$. Do đó $k^A$ là nghiệm không âm nhỏ nhất.

> [!def] Dạng chính tắc của Ma trận chuyển (Canonical Form)
> Xét tập trạng thái đích $A \subset E$ và tập các trạng thái chưa chạm $T = E \setminus A$. Ta hoán vị các hàng và cột của không gian trạng thái $E$ sao cho các trạng thái thuộc $T$ được xếp trước, các trạng thái thuộc $A$ được xếp sau ($E = T \cup A$).
> 
> Khi coi $A$ là tập các trạng thái hấp thụ ($p_{ii} = 1, \forall i \in A$), ma trận chuyển $P$ có dạng khối chính tắc:
> 
> $$P = \begin{pmatrix} Q & R \\ \mathbf{0} & I \end{pmatrix}$$
> 
> trong đó:
> * $Q = (p_{ij})_{i, j \in T}$: Ma trận chuyển giữa các trạng thái trong $T$.
> * $R = (p_{ij})_{i \in T, j \in A}$: Ma trận chuyển từ trạng thái thuộc $T$ sang trạng thái thuộc $A$.
> * $I$: Ma trận đơn vị kích thước $|A| \times |A|$.
> * $\mathbf{0}$: Ma trận không kích thước $|A| \times |T|$.

> [!prp] Sự tồn tại và Biểu diễn của Ma trận cơ bản (Fundamental Matrix)
> Cho xích Markov hữu hạn có tập trạng thái đích $A$ và tập các trạng thái chưa chạm $T = E \setminus A$. Giả sử mọi trạng thái trong $T$ đều là trạng thái thoáng qua (nghĩa là từ mỗi $i \in T$, xích đều có thể dẫn tới $A$ với xác suất dương). Khi đó:
> 
> 1. $\lim_{n \to \infty} Q^n = \mathbf{0}$ (ma trận không).
> 2. Ma trận $I - Q$ khả nghịch và nghịch đảo của nó được biểu diễn bởi chuỗi hội tụ:
> 
> $$N = (I - Q)^{-1} = \sum_{n=0}^\infty Q^n = I + Q + Q^2 + \dots$$
> 
> Ma trận $N$ được gọi là **ma trận cơ bản** của xích Markov.
> 
> 3. Với mọi $i, j \in T$, phần tử $N_{ij}$ biểu diễn kỳ vọng số lần xích ghé thăm trạng thái $j$ trước khi bị hấp thụ vào $A$ khi xuất phát từ $i$ (hàm Green hạn chế trên $T$):
> 
> $$N_{ij} = \sum_{n=0}^\infty p_{ij}^{(n)} = G(i, j).$$

> [!prf]
> **Chứng minh (1):** Vì từ mỗi trạng thái thuộc $T$ xích đều có thể dẫn tới $A$, với mỗi $i \in T$ tồn tại một số nguyên $m_i \ge 1$ sao cho $\mathbb{P}_i(X_{m_i} \in A) > 0$. Do tập $T$ hữu hạn, đặt $m = \max_{i \in T} m_i < \infty$ và:
> 
> $$\varepsilon = \min_{i \in T} \mathbb{P}_i(H_A \le m) > 0.$$
> 
> Khi đó, xác suất xích vẫn còn nằm trong $T$ sau $m$ bước không vượt quá $1 - \varepsilon < 1$. Nhờ tính chất Markov và tính thuần nhất thời gian, sau $k$ khối thời gian độ dài $m$ (tức sau $km$ bước):
> 
> $$\sum_{j \in T} (Q^{km})_{ij} \le (1 - \varepsilon)^k.$$
> 
> Cho $k \to \infty$, vì $0 \le 1 - \varepsilon < 1$ nên $(1 - \varepsilon)^k \to 0$, kéo theo mọi phần tử của ma trận không âm $Q^n$ đều tiến về 0:
> 
> $$\lim_{n \to \infty} Q^n = \mathbf{0}.$$
> 
> **Chứng minh (2):** Xét tổng riêng cấp số nhân ma trận $S_n = \sum_{k=0}^{n-1} Q^k = I + Q + \dots + Q^{n-1}$. Ta có hằng đẳng thức:
> 
> $$(I - Q) S_n = S_n (I - Q) = I - Q^n.$$
> 
> Lấy giới hạn hai vế khi $n \to \infty$, do $\lim_{n \to \infty} Q^n = \mathbf{0}$, ta thu được:
> 
> $$(I - Q) \left( \sum_{n=0}^\infty Q^n \right) = \left( \sum_{n=0}^\infty Q^n \right) (I - Q) = I.$$
> 
> Theo định nghĩa ma trận nghịch đảo, $I - Q$ khả nghịch và $(I - Q)^{-1} = \sum_{n=0}^\infty Q^n = N$.
> 
> **Chứng minh (3):** Đặt biến ngẫu nhiên số lần ghé thăm trạng thái $j \in T$ trước khi bị hấp thụ vào $A$ là $N_j = \sum_{n=0}^\infty \mathbf{1}_{\{X_n = j\}}$. Lấy kỳ vọng có điều kiện khi xuất phát từ $i \in T$:
> 
> $$\mathbb{E}_i(N_j) = \mathbb{E}_i \left[ \sum_{n=0}^\infty \mathbf{1}_{\{X_n = j\}} \right] = \sum_{n=0}^\infty \mathbb{P}_i(X_n = j) = \sum_{n=0}^\infty (Q^n)_{ij} = \left(\sum_{n=0}^\infty Q^n\right)_{ij} = N_{ij}.$$

> [!prp] Dạng ma trận của Xác suất chạm và Thời gian chạm trung bình
> Xét vector xác suất chạm $h_T^A = (h_i^A)_{i \in T}$, vector thời gian chạm trung bình $k_T^A = (k_i^A)_{i \in T}$, vector cột toàn số 1 trên $A$ là $\mathbf{1}_A$, và vector cột toàn số 1 trên $T$ là $\mathbf{1}_T$.
> 
> Khi mọi trạng thái trong $T$ đều là thoáng qua dẫn tới $A$, nghiệm duy nhất của hệ phương trình First Step Analysis được xác định tường minh qua ma trận cơ bản $N = (I - Q)^{-1}$:
> 
> 1. **Dạng ma trận của Xác suất chạm:**
> 
> $$h_T^A = Q h_T^A + R \mathbf{1}_A \iff (I - Q) h_T^A = R \mathbf{1}_A \iff h_T^A = N R \mathbf{1}_A.$$
> 
> 2. **Dạng ma trận của Thời gian chạm trung bình:**
> 
> $$k_T^A = \mathbf{1}_T + Q k_T^A \iff (I - Q) k_T^A = \mathbf{1}_T \iff k_T^A = N \mathbf{1}_T.$$
> 
> Cụ thể, thời gian chạm trung bình từ trạng thái $i \in T$ bằng tổng các phần tử trên hàng thứ $i$ của ma trận cơ bản $N$:
> 
> $$k_i^A = \sum_{j \in T} N_{ij}, \quad \forall i \in T.$$

> [!prf]
> **1. Chứng minh dạng ma trận của Xác suất chạm:**
> 
> Với mỗi $i \in T = E \setminus A$, theo Định lý phương trình xác suất chạm:
> 
> $$h_i^A = \sum_{j \in E} p_{ij} h_j^A = \sum_{j \in T} p_{ij} h_j^A + \sum_{j \in A} p_{ij} h_j^A.$$
> 
> Do điều kiện biên $h_j^A = 1$ với mọi $j \in A$, phương trình trở thành:
> 
> $$h_i^A = \sum_{j \in T} p_{ij} h_j^A + \sum_{j \in A} p_{ij} \cdot 1, \quad \forall i \in T.$$
> 
> Gom tất cả các hàng $i \in T$ lại dưới dạng ma trận:
> * Vector cột vế trái $(h_i^A)_{i \in T}$ chính là $h_T^A$.
> * Hàng thứ $i$ của tổng $\sum_{j \in T} p_{ij} h_j^A$ là phần tử thứ $i$ của tích ma trận - vector $Q h_T^A$.
> * Hàng thứ $i$ của tổng $\sum_{j \in A} p_{ij} \cdot 1$ là phần tử thứ $i$ của tích ma trận - vector $R \mathbf{1}_A$.
> 
> Do đó, ta có phương trình ma trận:
> 
> $$h_T^A = Q h_T^A + R \mathbf{1}_A \iff (I - Q) h_T^A = R \mathbf{1}_A.$$
> 
> Theo mệnh đề về sự tồn tại của ma trận cơ bản, ma trận $I - Q$ khả nghịch và có ma trận nghịch đảo duy nhất $N = (I - Q)^{-1}$. Nhân hai vế với $N$, ta thu được:
> 
> $$h_T^A = (I - Q)^{-1} R \mathbf{1}_A = N R \mathbf{1}_A.$$
> 
> **2. Chứng minh dạng ma trận của Thời gian chạm trung bình:**
>    
> Với mỗi $i \in T = E \setminus A$, theo Định lý phương trình thời gian chạm trung bình:
> 
> $$k_i^A = 1 + \sum_{j \notin A} p_{ij} k_j^A = 1 + \sum_{j \in T} p_{ij} k_j^A, \quad \forall i \in T.$$
> 
> Gom tất cả các hàng $i \in T$ lại dưới dạng ma trận:
> * Vector cột vế trái $(k_i^A)_{i \in T}$ chính là $k_T^A$.
> * Hằng số $1$ ở mỗi hàng tương ứng với vector cột $\mathbf{1}_T$.
> * Hàng thứ $i$ của tổng $\sum_{j \in T} p_{ij} k_j^A$ là phần tử thứ $i$ của tích ma trận - vector $Q k_T^A$.
> 
> Ta thu được phương trình ma trận:
> 
> $$k_T^A = \mathbf{1}_T + Q k_T^A \iff (I - Q) k_T^A = \mathbf{1}_T.$$
> 
> Nhân hai vế với ma trận cơ bản $N = (I - Q)^{-1}$:
> 
> $$k_T^A = (I - Q)^{-1} \mathbf{1}_T = N \mathbf{1}_T.$$
> 
> Khai triển phần tử thứ $i$ của vector tích $N \mathbf{1}_T$:
> 
> $$k_i^A = (N \mathbf{1}_T)_i = \sum_{j \in T} N_{ij} \cdot 1 = \sum_{j \in T} N_{ij}, \quad \forall i \in T.$$