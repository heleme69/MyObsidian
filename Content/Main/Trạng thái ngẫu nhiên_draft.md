
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