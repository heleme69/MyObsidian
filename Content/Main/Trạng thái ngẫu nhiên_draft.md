
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

> [!prp] Mệnh đề 1
> Quan hệ giao tiếp $\leftrightarrow$ là một quan hệ tương đương.

> [!prf] Chứng minh
> Để chứng minh $\leftrightarrow$ là một quan hệ tương đương trên không gian trạng thái $E$, ta cần chứng minh ba tính chất: phản xạ, đối xứng và bắc cầu.
> 
> 1. **Tính phản xạ ($i \leftrightarrow i$ với mọi $i \in E$):**
>    Với $n = 0$, theo định nghĩa xác suất có điều kiện:
>    $$p_{ii}^{(0)} = \mathbb{P}(X_0 = i \mid X_0 = i) = 1 > 0.$$
>    Do đó, $i \to i$ với mọi $i \in E$. Suy ra $i \leftrightarrow i$.
> 
> 2. **Tính đối xứng ($i \leftrightarrow j \implies j \leftrightarrow i$):**
>    Giả sử $i \leftrightarrow j$. Theo định nghĩa của quan hệ giao tiếp, điều này có nghĩa là $i \to j$ và $j \to i$.  
>    Từ đó trực tiếp suy ra $j \to i$ và $i \to j$, tức là $j \leftrightarrow i$.
> 
> 3. **Tính bắc cầu ($i \leftrightarrow j$ và $j \leftrightarrow k \implies i \leftrightarrow k$):**
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
> (1) Với mọi $i, j \in E$, nếu $i \in C$ và $i \to j$ thì $j \in C$.  
> (2) Với mọi $i \in C$ và mọi $n \in \mathbb{N}$, 
> 
> $$\sum_{j \in C} p_{ij}^{(n)} = 1.$$

> [!prf] Chứng minh
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
> Điểm khác nhau **duy nhất** nằm ở việc có tính bước $n = 0$ hay không:
> 
> $H_i$ tính **từ** $n = 0$: nếu đang ở sẵn $i$ thì đã *chạm* ngay, $H_i = 0$.
> 
> $T_i$ tính **từ** $n \ge 1$: buộc phải bước ít nhất một lần rồi mới xét việc *quay lại* $i$, nên $T_i \ge 1$.

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

> [!prf] Chứng minh
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
> 1. Với mọi $n \in \mathbb{N}^*$,
>    $$\mathbb{P}_i(N_j \ge n + 1) = \mathbb{P}_i(T_j < \infty) \, \mathbb{P}_j(N_j \ge n).$$
>    Đẳng thức này cũng đúng cho $n = 0$ nếu $i \ne j$.
> 
> 2. Đối với hàm Green,
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
> 4. Trạng thái $i$ là **thoáng qua** (*transient*), tức là $\mathbb{P}_i(T_i < \infty) < 1$.
> 5. $\mathbb{P}_i(N_i = \infty) = 0$.
> 6. $G(i, i) < \infty$, và khi đó:
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
> * Với $n = 1$: $\mathbb{P}_i(N_i \ge 2) = \mathbb{P}_i(T_i < \infty) \, \mathbb{P}_i(N_i \ge 1) = \mathbb{P}_i(T_i < \infty)$.
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