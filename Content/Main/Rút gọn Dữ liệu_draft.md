
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

> [!def] Định lý tách 
> Giả sử rằng $X = (X_1, \dots, X_n)$ là một mẫu ngẫu nhiên chọn từ một phân phối liên tục hoặc rời rạc mà có pdf hoặc pmf $f(x|\theta)$, với $\theta$ thuộc về một không gian tham số $\Theta$.
> 
> Thống kê $T(X)$ được gọi là một thống kê đủ khi và chỉ khi pdf (hoặc pmf) đồng thời $f_n(x|\theta)$ của $X$ có thể được phân tích thành dạng sau với mọi điểm $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ và với mọi $\theta \in \Theta$:
> $$f_n(x|\theta) = g_{\theta}(T(x))h(x),$$
> trong đó hàm $h$ phụ thuộc vào $x$ nhưng không phụ thuộc vào $\theta$, hàm $g_{\theta}$ phụ thuộc vào $\theta$ nhưng chỉ phụ thuộc vào $x$ thông qua giá trị của thống kê $T(x)$.

> [!prf] 
> Ta sẽ chứng minh định lý Tách cho biến rời rạc
> Cho $X = (X_1, X_2, \dots, X_n)$ là mẫu ngẫu nhiên có hàm khối xác suất đồng thời (pmf) $f(x \mid \theta)$ với $\theta \in \Theta$. Ta cần chứng minh: $T(X)$ là thống kê đủ cho $\theta$ khi và chỉ khi tồn tại dạng phân tích:
> $$f(x \mid \theta) = g_\theta(T(x)) \cdot h(x)$$
> với mọi $x \in \mathcal{X}$ và mọi $\theta \in \Theta$.
> 
> Chiều ($\impliedby$): Giả sử tồn tại phân tích $f(x \mid \theta) = g_\theta(T(x)) \cdot h(x)$, chứng minh $T(X)$ là thống kê đủ.
> 
> Ta cần chỉ ra rằng phân phối có điều kiện $P_\theta(X = x \mid T(X) = t)$ không phụ thuộc vào $\theta$.
> 
> Trường hợp 1: Nếu $T(x) \neq t$, biến cố $\{X = x\}$ và $\{T(X) = t\}$ xung khắc nhau:
>   $$P_\theta(X = x \mid T(X) = t) = 0 \quad \text{(không phụ thuộc vào } \theta\text{)}$$
> 
> Trường hợp 2: Nếu $T(x) = t$, đặt lát cắt các điểm mẫu có cùng giá trị thống kê:
> $$A_t = \{y \in \mathcal{X} : T(y) = t\}$$
> 
> Gọi $q_\theta(t)$ là pmf của thống kê $T(X)$:
> $$q_\theta(t) = P_\theta(T(X) = t) = \sum_{y \in A_t} f(y \mid \theta)$$
> 
> Thay dạng phân tích $f(y \mid \theta) = g_\theta(T(y)) h(y)$ vào. Vì trên tập $A_t$ ta luôn có $T(y) = t$, nên $g_\theta(T(y)) = g_\theta(t)$ là hằng số đối với tổng theo $y$:
> $$q_\theta(t) = \sum_{y \in A_t} g_\theta(t) h(y) = g_\theta(t) \sum_{y \in A_t} h(y)$$
> 
> Áp dụng công thức xác suất có điều kiện (lưu ý biến cố $\{X = x\} \subset \{T(X) = t\}$ khi $T(x) = t$):
> $$P_\theta(X = x \mid T(X) = t) = \frac{P_\theta(\{X = x\} \cap \{T(X) = t\})}{P_\theta(T(X) = t)} = \frac{f(x \mid \theta)}{q_\theta(t)}$$
> 
> Thay các biểu thức đã phân tích vào:
> $$P_\theta(X = x \mid T(X) = t) = \frac{g_\theta(T(x)) h(x)}{g_\theta(t) \sum_{y \in A_t} h(y)} = \frac{g_\theta(t) h(x)}{g_\theta(t) \sum_{y \in A_t} h(y)}$$
> 
> Triệt tiêu thừa số $g_\theta(t)$:
> $$P_\theta(X = x \mid T(X) = t) = \frac{h(x)}{\sum_{y \in A_t} h(y)}$$
> 
> Biểu thức này hoàn toàn **không phụ thuộc vào $\theta$**. Theo định nghĩa, $T(X)$ là thống kê đủ cho $\theta$.
> 
> Chiều ($\implies$): Giả sử $T(X)$ là thống kê đủ, chứng minh tồn tại dạng phân tích.
> 
> Vì $T(X)$ là thống kê đủ, nên theo định nghĩa, phân phối có điều kiện:
> $$P_\theta(X = x \mid T(X) = T(x))$$
> hoàn toàn không phụ thuộc vào tham số $\theta$.
> 
> Do đó, ta có thể đặt một hàm chỉ phụ thuộc vào mẫu quan sát $x$:
> $$h(x) := P(X = x \mid T(X) = T(x))$$
> 
> Mặt khác, theo công thức nhân xác suất (vì $\{X = x\} \subset \{T(X) = T(x)\}$):
> $$f(x \mid \theta) = P_\theta(X = x) = P_\theta(\{X = x\} \cap \{T(X) = T(x)\})$$
> $$= P_\theta(T(X) = T(x)) \cdot P_\theta(X = x \mid T(X) = T(x))$$
> 
> Đặt $g_\theta(T(x)) := P_\theta(T(X) = T(x))$. Đại lượng này là pmf của $T(X)$ tại điểm $T(x)$, chỉ phụ thuộc vào $\theta$ và phụ thuộc vào $x$ thông qua giá trị của $T(x)$.
> 
> Thay $g_\theta(T(x))$ và $h(x)$ vào đẳng thức trên, ta thu được:
> $$f(x \mid \theta) = g_\theta(T(x)) \cdot h(x)$$
> 
> Vậy chứng minh hoàn tất cho trường hợp rời rạc.

> [!rem] Liên hệ giữa Hàm hợp lý, Lớp tương đương, Định lý tách và Ước lượng hợp lý cực đại
> 
> Xét hàm hợp lý $L(\theta \mid x) = f(x \mid \theta)$ với $x \in \mathcal{X}$ và $\theta \in \Theta$. Giữa các khái niệm có mối liên hệ bản chất và chặt chẽ như sau:
> 
> Quan hệ tương đương và Lớp tương đương: Quan hệ tương đương trên không gian mẫu $\mathcal{X}$ được định nghĩa bởi:
>   $$x \sim y \iff \frac{L(\theta \mid x)}{L(\theta \mid y)} \text{ không phụ thuộc vào } \theta$$
>   Lớp tương đương của một quan sát $x$, ký hiệu là $[x] = \{y \in \mathcal{X} : y \sim x\}$, tập hợp tất cả các mẫu quan sát tạo ra cùng một hình dạng hàm hợp lý theo $\theta$ (sai khác nhau một hằng số nhân độc lập với $\theta$).
> 
> Bản chất của Thống kê đủ tối tiểu: Theo Định lý Lehmann–Scheffé, ánh xạ $T: \mathcal{X} \to \mathcal{X}/\!\sim$ gán mỗi quan sát $x$ vào chính lớp tương đương $[x]$ của nó chính là một **thống kê đủ tối tiểu**. Nó tạo ra phân hoạch thô nhất trên không gian mẫu: mọi điểm trong cùng một lớp mang lượng thông tin suy diễn y hệt nhau về $\theta$, và không thể nén dữ liệu thêm nữa mà không làm mất thông tin.
> 
> Cầu nối với Định lý tách: Nếu $T(X)$ là thống kê đủ, theo Định lý tách ta có:
>   $$L(\theta \mid x) = g_\theta(T(x)) \cdot h(x)$$
>   Khi đó, tỷ số hàm hợp lý giữa hai quan sát $x$ và $y$ trở thành:
>   $$\frac{L(\theta \mid x)}{L(\theta \mid y)} = \frac{g_\theta(T(x)) \cdot h(x)}{g_\theta(T(y)) \cdot h(y)}$$
>   Do đó, nếu $T(x) = T(y)$ thì $g_\theta(T(x)) = g_\theta(T(y))$, suy ra tỷ số bằng $\dfrac{h(x)}{h(y)}$ (hoàn toàn độc lập với $\theta$). Điều này chứng minh rằng các tập mức của bất kỳ thống kê đủ nào cũng luôn là tập con của các lớp tương đương này.
> 
> Hệ quả đối với Ước lượng hợp lý cực đại (MLE): 
>   Giả sử nghiệm của bài toán ước lượng hợp lý cực đại $\hat{\theta}_{\text{MLE}}(x) = \arg\max_{\theta \in \Theta} L(\theta \mid x)$ tồn tại và duy nhất. 
>    Nếu $x \sim y$, thì tồn tại hằng số $c(x, y) > 0$ độc lập với $\theta$ sao cho $L(\theta \mid x) = c(x, y) \cdot L(\theta \mid y)$. Do việc nhân với hằng số dương không làm thay đổi vị trí điểm cực đại, ta luôn có:
>     $$\hat{\theta}_{\text{MLE}}(x) = \hat{\theta}_{\text{MLE}}(y)$$
>   Điều này dẫn tới hai hệ quả quan trọng:
>     1. Ước lượng hợp lý cực đại là một hàm hằng trên từng lớp tương đương, nghĩa là **$\hat{\theta}_{\text{MLE}}$ luôn luôn là một hàm của thống kê đủ tối tiểu** (và do đó là hàm của mọi thống kê đủ).
>     2. Mọi suy diễn dựa trên nguyên lý hợp lý (như MLE hay tỷ số hợp lý) hoàn toàn bất biến đối với các quan sát thuộc cùng một lớp tương đương.