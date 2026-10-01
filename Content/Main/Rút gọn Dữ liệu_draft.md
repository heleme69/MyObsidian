
# Thống kê Đủ

> [!def] Định nghĩa Thống kê đủ (Sufficient Statistic)
> Cho mẫu ngẫu nhiên $X = (X_1, X_2, \dots, X_n)$ tuân theo phân phối phụ thuộc vào tham số chưa biết $\theta \in \Theta$.
> 
> Một thống kê $T = T(X)$ được gọi là **thống kê đủ** cho $\theta$ nếu phân phối có điều kiện của mẫu $X$ khi biết giá trị của $T(X)$, tức là:
> $$P_\theta(X = x \mid T(X) = t)$$
> hoàn toàn **không phụ thuộc vào tham số $\theta$** với mọi $x$ và với mọi $t$ mà $P_\theta(T(X) = t) > 0$.

> [!obs] (Motivation qua mô phỏng dữ liệu)
> Giả sử ta cần suy diễn về tham số $\theta$:
> 
> **Người A:** Biết đầy đủ thông tin về toàn bộ mẫu $X = (X_1, X_2, \dots, X_n)$ và dùng nó để ước lượng $\hat{\theta}$.
> 
> **Người B:** Chỉ biết giá trị thống kê tóm tắt $T(X) = t$, nhưng biết được phân phối có điều kiện $X \mid T(X) = t$ trên tập $A_t = \{x \in \mathcal{X} : T(x) = t\}$.
> 
> Vì $T$ là thống kê đủ, phân phối có điều kiện $P(X = y \mid T(X) = t)$ hoàn toàn không phụ thuộc vào $\theta$. Do đó, Người B có thể tự mô phỏng (sinh ngẫu nhiên) một mẫu mới $Y$ từ chính phân phối có điều kiện này sao cho:
> $$P(Y = y \mid T(X) = t) = P(X = y \mid T(X) = t)$$
> 
> **Chứng minh mẫu mô phỏng $Y$ có cùng phân phối xác suất với mẫu gốc $X$ ($P_\theta(X = x) = P_\theta(Y = x)$):**
> 
> Ta có biến cố $\{X = x\} \subset \{T(X) = T(x)\}$ (vì khi biết $X = x$ thì đương nhiên $T(X) = T(x)$). Do đó:
> $$P_\theta(X = x) = P_\theta(\{X = x\} \cap \{T(X) = T(x)\})$$
> 
> Theo công thức nhân xác suất:
> $$P_\theta(\{X = x\} \cap \{T(X) = T(x)\}) = P_\theta(T(X) = T(x)) \cdot P_\theta(X = x \mid T(X) = T(x))$$
> 
> Do $T$ là thống kê đủ nên phân phối có điều kiện $X \mid T(X)$ không phụ thuộc vào $\theta$. Đồng thời, mẫu $Y$ được mô phỏng có cùng phân phối điều kiện với $X$:
> $$P_\theta(X = x \mid T(X) = T(x)) = P(X = x \mid T(X) = T(x)) = P(Y = x \mid T(X) = T(x))$$
> 
> Thay ngược lại vào biểu thức:
> $$= P_\theta(T(X) = T(x)) \cdot P(Y = x \mid T(X) = T(x))$$
> $$= P_\theta(\{Y = x\} \cap \{T(X) = T(x)\})$$
> 
> Vì $\{Y = x\} \subset \{T(X) = T(x)\}$ (mẫu $Y$ được sinh trên phân hoạch $A_{T(x)}$), ta thu được:
> $$= P_\theta(Y = x)$$
> 
> **Kết luận:** Người B chỉ từ thống kê $T(X)$ đã có thể tái tạo ra một mẫu $Y$ có cùng quy luật phân phối với mẫu ban đầu $X$ mà không làm mất mát bất kỳ thông tin nào về $\theta$. Đây chính là lý do vì sao $T(X)$ được gọi là "đủ".

> [!exm] Ví dụ: Thống kê đủ cho dãy phép thử Bernoulli
> 
> Xét bài toán tung một đồng xu $n$ lần độc lập, với xác suất xuất hiện mặt Ngửa trong mỗi lần tung là $p \in (0, 1)$ chưa biết.
> 
> Gọi $X = (X_1, X_2, \dots, X_n)$ là mẫu ngẫu nhiên độc lập cùng phân phối (i.i.d.), trong đó mỗi $X_i \sim \text{Bernoulli}(p)$:
> $$X_i = \begin{cases} 1 & \text{nếu lần tung thứ } i \text{ ra mặt Ngửa} \\ 0 & \text{nếu lần tung thứ } i \text{ ra mặt Sấp} \end{cases}$$
> 
> Hàm khối xác suất của mỗi $X_i$ là:
> $$P_p(X_i = x_i) = p^{x_i}(1 - p)^{1 - x_i}, \quad x_i \in \{0, 1\}$$
> 
> Do các $X_i$ độc lập, xác suất đồng thời của toàn bộ mẫu $X = x = (x_1, \dots, x_n)$ là:
> $$P_p(X = x) = \prod_{i=1}^n P_p(X_i = x_i) = \prod_{i=1}^n p^{x_i}(1 - p)^{1 - x_i} = p^{\sum_{i=1}^n x_i} (1 - p)^{n - \sum_{i=1}^n x_i}$$
> 
> Đặt thống kê $T(X) = \sum_{i=1}^n X_i$ (tổng số lần xuất hiện mặt Ngửa trong $n$ lần tung). Ta sẽ chứng minh $T(X)$ là thống kê đủ cho $p$ bằng đúng định nghĩa.
> 
> **Bước 1: Xác định phân phối của $T(X)$**
> Vì $X_1, \dots, X_n$ là các biến ngẫu nhiên độc lập nhận phân phối $\text{Bernoulli}(p)$, tổng của chúng tuân theo phân phối nhị thức:
> $$T(X) \sim \text{Binomial}(n, p)$$
> Do đó, với mọi $t \in \{0, 1, \dots, n\}$, ta có:
> $$P_p(T(X) = t) = \binom{n}{t} p^t (1 - p)^{n - t}$$
> 
> **Bước 2: Tính phân phối có điều kiện $P_p(X = x \mid T(X) = t)$**
> Ta xét hai trường hợp:
> 
> * **Trường hợp 1:** Nếu $\sum_{i=1}^n x_i \neq t$, biến cố $\{X = x\}$ mâu thuẫn với biến cố $\{T(X) = t\}$, do đó:
>   $$P_p(X = x \mid T(X) = t) = 0$$
> 
> * **Trường hợp 2:** Nếu $\sum_{i=1}^n x_i = t$, biến cố $\{X = x\}$ là tập con của $\{T(X) = t\}$ vì $\{X = x\} \subset \{\sum_{i=1}^n X_i = t\}$. Áp dụng công thức xác suất có điều kiện:
>   $$P_p(X = x \mid T(X) = t) = \frac{P_p(\{X = x\} \cap \{T(X) = t\})}{P_p(T(X) = t)} = \frac{P_p(X = x)}{P_p(T(X) = t)}$$
> 
>   Thay các biểu thức xác suất đã tìm ở trên vào:
>   $$P_p(X = x \mid T(X) = t) = \frac{p^{\sum_{i=1}^n x_i} (1 - p)^{n - \sum_{i=1}^n x_i}}{\binom{n}{t} p^t (1 - p)^{n - t}}$$
> 
>   Vì $\sum_{i=1}^n x_i = t$, ta rút gọn:
>   $$P_p(X = x \mid T(X) = t) = \frac{p^t (1 - p)^{n - t}}{\binom{n}{t} p^t (1 - p)^{n - t}} = \frac{1}{\binom{n}{t}}$$
> 
> **Bước 3: Kết luận**
> Tổng hợp lại, phân phối có điều kiện của mẫu $X$ khi biết $T(X) = t$ là:
> $$P(X = x \mid T(X) = t) = \begin{cases} \dfrac{1}{\binom{n}{t}} & \text{khi } \sum_{i=1}^n x_i = t \\ 0 & \text{khi } \sum_{i=1}^n x_i \neq t \end{cases}$$
> 
> Biểu thức trên hoàn toàn **không phụ thuộc vào tham số $p$** với mọi vector $x \in \{0, 1\}^n$ và mọi giá trị $t \in \{0, 1, \dots, n\}$.
> 
> Theo đúng định nghĩa, $T(X) = \sum_{i=1}^n X_i$ là một **thống kê đủ** cho tham số $p$.

> [!thm] (Định lý tách - Factorization Theorem) 
> 