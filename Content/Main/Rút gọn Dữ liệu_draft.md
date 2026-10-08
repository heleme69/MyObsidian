
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

> [!def] (Định lý tách Neyman–Fisher)
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

> [!exm] (Thống kê thứ tự là thống kê đủ)
> Cho $X = (X_1, X_2, \dots, X_n)$ là mẫu ngẫu nhiên độc lập cùng phân phối (i.i.d.) với mỗi $X_i$ tuân theo một hàm mật độ xác suất liên tục $f(x)$ chưa biết (hoặc hàm khối xác suất $p(x)$).
> 
> Ở đây, tham số cần suy diễn chính là toàn bộ quy luật phân phối $\theta = f \in \mathcal{F}$, trong đó $\mathcal{F}$ là họ tất cả các hàm mật độ xác suất khả dĩ (bài toán phi tham số).
> 
> Với mẫu quan sát cụ thể $x = (x_1, x_2, \dots, x_n)$, gọi $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$ là các giá trị sau khi được sắp xếp theo thứ tự không giảm. Ta định nghĩa vector thống kê thứ tự là:
> $$T(x) = (x_{(1)}, x_{(2)}, \dots, x_{(n)})$$
> 
> **Bước 1: Tìm và chứng minh tính đủ bằng Định lý tách (Neyman–Fisher)**
> 
> Hàm mật độ xác suất đồng thời của toàn bộ mẫu dữ liệu $x$ là:
> $$f_n(x \mid f) = \prod_{i=1}^n f(x_i)$$
> 
> Do phép nhân các số thực có tính chất giao hoán, tích của các giá trị mật độ $f(x_i)$ không phụ thuộc vào thứ tự xuất hiện của các phần tử trong mẫu. Nói cách khác, tích của các phần tử theo thứ tự ban đầu luôn bằng tích của các phần tử đã được sắp xếp theo thứ tự tăng dần:
> $$\prod_{i=1}^n f(x_i) = \prod_{i=1}^n f(x_{(i)})$$
> 
> Biểu diễn lại hàm mật độ đồng thời theo cấu trúc phân tích của Định lý tách:
> $$f_n(x \mid f) = \left[ \prod_{i=1}^n f(x_{(i)}) \right] \cdot 1$$
> 
> Ta xác định hai nhân tử:
> * $g_f(T(x)) = \prod_{i=1}^n f(x_{(i)})$: Phụ thuộc vào hàm phân phối $f$, nhưng chỉ tương tác với vector mẫu $x$ thông qua giá trị của thống kê thứ tự $T(x) = (x_{(1)}, \dots, x_{(n)})$.
> * $h(x) = 1$: Hoàn toàn không phụ thuộc vào tham số phân phối $f$.
> 
> Theo Định lý tách, vector thống kê thứ tự $T(X) = (X_{(1)}, X_{(2)}, \dots, X_{(n)})$ là một **thống kê đủ** cho họ phân phối phi tham số $f \in \mathcal{F}$.
> 
> **Bước 2: Kiểm tra lại ví dụ trong Motivation**
> 
> Để làm sáng tỏ động lực và bản chất thông tin của kết quả trên, ta xét lại kịch bản suy diễn giữa hai người:
> 
> * **Người A:** Biết đầy đủ toàn bộ vector mẫu ban đầu $X = (x_1, x_2, \dots, x_n)$ theo đúng trình tự thời gian thu thập dữ liệu.
> * **Người B:** Chỉ nhận được vector thống kê thứ tự tóm tắt $T(X) = t = (t_1, t_2, \dots, t_n)$ với $t_1 \le t_2 \le \dots \le t_n$ (chỉ biết tập hợp các giá trị quan sát mà không biết giá trị nào xuất hiện trước, giá trị nào xuất hiện sau).
> 
> Lát cắt các mẫu có cùng giá trị thống kê $T(x) = t$ là tập hợp tất cả các hoán vị của $t$:
> $$A_t = \{y \in \mathcal{X} : T(y) = t\} = \{\sigma(t) : \sigma \in \mathcal{S}_n\}$$
> trong đó $\mathcal{S}_n$ là nhóm đối xứng gồm $n!$ hoán vị của các chỉ số $\{1, 2, \dots, n\}$.
> 
> Do tính chất độc lập cùng phân phối, mỗi hoán vị đều có cùng xác suất xuất hiện $f(t_1)f(t_2)\dots f(t_n)$. Vì vậy, xác suất để thống kê nhận giá trị $t$ là:
> $$P_f(T(X) = t) = \sum_{y \in A_t} f_n(y \mid f) = n! \prod_{i=1}^n f(t_i)$$
> 
> Khi đó, phân phối có điều kiện của mẫu khi biết giá trị $T(X) = t$ là:
> $$P(X = x \mid T(X) = t) = \frac{f_n(x \mid f)}{P_f(T(X) = t)} = \frac{\prod_{i=1}^n f(x_i)}{n! \prod_{i=1}^n f(t_i)} = \begin{cases} \dfrac{1}{n!} & \text{khi } x \in A_t \\ 0 & \text{khi } x \notin A_t \end{cases}$$
> 
> Phân phối có điều kiện này là hằng số $\frac{1}{n!}$, hoàn toàn **không phụ thuộc vào hàm phân phối $f$**. 
> 
> Do đó, Người B dù hoàn toàn không biết hình dạng hàm phân phối $f$, vẫn có thể dùng thuật toán sinh số ngẫu nhiên đều để chọn ngẫu nhiên 1 trong $n!$ hoán vị của $t$ nhằm tạo ra một mẫu mô phỏng mới $Y$. Ta có:
> $$P_f(Y = x) = P_f(T(X) = T(x)) \cdot P(Y = x \mid T(X) = T(x))$$
> $$= \left( n! \prod_{i=1}^n f(x_{(i)}) \right) \cdot \frac{1}{n!} = \prod_{i=1}^n f(x_i) = P_f(X = x)$$
> 
> Mẫu mô phỏng $Y$ của Người B có cùng quy luật xác suất tuyệt đối với mẫu thật $X$ của Người A mà không cần dùng đến $f$.  
> 
> **Kết luận:** Trình tự thời gian xuất hiện của các quan sát chỉ là nhiễu ngẫu nhiên thuần túy (mang phân phối đều trên tập các hoán vị, độc lập với $f$). Toàn bộ thông tin cần thiết về hình dạng phân phối đều được nén trọn vẹn trong tập các giá trị của thống kê thứ tự $T(X)$.

> [!rem] Tính không duy nhất của thống kê đủ 
> Kết quả từ ví dụ trên chỉ ra rằng vector thống kê thứ tự $T(X) = (X_{(1)}, \dots, X_{(n)})$ là một thống kê đủ cho mô hình phi tham số. Tuy nhiên, bản thân vector mẫu gốc $X = (X_1, \dots, X_n)$ cũng là một thống kê đủ tầm thường (khi chọn $h(x) = 1$ và $g_f(X) = f_n(X \mid f)$). 
> 
> Mặc dù cả hai đều "đủ", vector mẫu ban đầu $X$ hoàn toàn không nén dữ liệu (giữ nguyên $n!$ hoán vị thứ tự), trong khi vector thống kê thứ tự $T(X)$ đã gộp tất cả $n!$ điểm mẫu có cùng tập giá trị vào chung một lớp đại diện. 
> 
> Mục tiêu cốt lõi là tìm một thống kê đủ có khả năng nén dữ liệu mạnh nhất có thể mà không làm mất thông tin suy diễn. Đây chính là động lực để định nghĩa **thống kê đủ tối tiểu (Minimal Sufficient Statistic)**.

# Thống kê Đủ Tối tiểu

> [!def] Định nghĩa: Thống kê đủ tối tiểu (Minimal Sufficient Statistic)
> 
> Một thống kê $T$ được gọi là **thống kê đủ tối tiểu** (*minimal sufficient statistic*) nếu:
> 1. $T$ là một thống kê đủ cho tham số $\theta$.
> 2. Với mọi thống kê đủ $T'$ khác, $T$ là một hàm (đo được) của $T'$, tức là tồn tại hàm $g$ sao cho $T = g(T')$.
> 
> **Các đặc trưng quan trọng:**
> 
> * Rút gọn dữ liệu tối đa: $T$ chính là một thống kê đủ nhỏ nhất, thể hiện tối đa sự nén dữ liệu tương ứng cho việc ước lượng tham số $\theta$.
> * Ngôn ngữ phân hoạch: Phân hoạch sinh bởi $T$ trên không gian mẫu là phân hoạch thô nhất trong số các phân hoạch ứng với các thống kê đủ.
> * Duy nhất sai khác một song ánh: Nếu $T$ và $T'$ đều là các thống kê đủ tối tiểu thì mỗi cái đều là hàm của cái kia (tồn tại một song ánh liên hệ giữa chúng).
> * Sự tồn tại: Thống kê đủ tối tiểu có thể tồn tại hoặc không; tuy nhiên, với các họ phân phối bị chi phối bởi một độ đo $\sigma$-hữu hạn thì nó luôn luôn tồn tại.

> [!prp] Tính duy nhất sai khác một hàm song ánh của Thống kê đủ tối tiểu
> 
> Cho $T(X)$ là một **thống kê đủ tối tiểu** cho không gian tham số $\Theta$. Khi đó:
> 
> 1. Nếu $\psi$ là một ánh xạ $1-1$ (đơn ánh trên tập giá trị của $T$), thì $T'(X) = \psi(T(X))$ cũng là một thống kê đủ tối tiểu.
> 2. Ngược lại, nếu $T_1(X)$ và $T_2(X)$ là hai thống kê đủ tối tiểu bất kỳ cho cùng một tham số $\theta$, thì tồn tại một hàm song ánh $\psi$ sao cho:
>    $$T_2(X) = \psi(T_1(X)) \quad \text{hầu chắc chắn}$$
> 
> *(Nói cách khác: Thống kê đủ tối tiểu là duy nhất sai khác một phép biến đổi song ánh - "unique up to a bijection").*

> [!prf] Chứng minh Tính duy nhất sai khác một hàm song ánh
> 
> **Phần 1: Giả sử $T$ là thống kê đủ tối tiểu và $\psi$ là ánh xạ $1-1$, chứng minh $T' = \psi(T)$ cũng là thống kê đủ tối tiểu.**
> 
> * **Tính đủ:** Vì $\psi$ là ánh xạ $1-1$, tồn tại hàm ngược $\psi^{-1}$ trên ảnh của $T$. Ta có $T(x) = \psi^{-1}(T'(x))$. Do $T$ là thống kê đủ, theo Định lý tách ta có:
>   $$f(x \mid \theta) = g_\theta(T(x)) \cdot h(x) = g_\theta(\psi^{-1}(T'(x))) \cdot h(x) = g^*_\theta(T'(x)) \cdot h(x)$$
>   với $g^*_\theta(t') = g_\theta(\psi^{-1}(t'))$. Cũng theo Định lý tách, $T'(X)$ là một thống kê đủ.
> 
> * **Tính tối tiểu:** Giả sử $S(X)$ là một thống kê đủ bất kỳ. Vì $T$ là thống kê đủ tối tiểu, theo định nghĩa tồn tại hàm $h$ sao cho $T(X) = h(S(X))$. Khi đó:
>   $$T'(X) = \psi(T(X)) = \psi(h(S(X))) = (\psi \circ h)(S(X))$$
>   Đặt $h^* = \psi \circ h$, ta có $T'(X) = h^*(S(X))$. Vậy $T'$ là hàm của mọi thống kê đủ khác, nghĩa là $T'(X)$ là thống kê đủ tối tiểu.
> 
> **Phần 2: Giả sử $T_1$ và $T_2$ là hai thống kê đủ tối tiểu, chứng minh tồn tại song ánh giữa chúng.**
> 
> * Vì $T_1$ là thống kê đủ và $T_2$ là thống kê đủ tối tiểu, theo định nghĩa thống kê đủ tối tiểu thì $T_2$ phải là một hàm của $T_1$:
>   $$\exists \phi: \quad T_2(X) = \phi(T_1(X))$$
> 
> * Ngược lại, vì $T_2$ là thống kê đủ và $T_1$ là thống kê đủ tối tiểu, theo định nghĩa thì $T_1$ cũng phải là một hàm của $T_2$:
>   $$\exists \xi: \quad T_1(X) = \xi(T_2(X))$$
> 
> * Kết hợp hai biểu thức trên:
>   $$T_1(X) = \xi(\phi(T_1(X))) = (\xi \circ \phi)(T_1(X))$$
>   $$T_2(X) = \phi(\xi(T_2(X))) = (\phi \circ \xi)(T_2(X))$$
> 
> * Các đẳng thức trên suy ra $\xi \circ \phi = \text{id}_{\text{Im}(T_1)}$ và $\phi \circ \xi = \text{id}_{\text{Im}(T_2)}$ (ánh xạ đồng nhất trên ảnh tương ứng). 
> 
> * Do đó, ánh xạ $\phi: \text{Im}(T_1) \to \text{Im}(T_2)$ vừa là đơn ánh vừa là toàn ánh, tức là một **hàm song ánh** $\psi \equiv \phi$ thỏa mãn $T_2(X) = \psi(T_1(X))$ (và có hàm ngược $\psi^{-1} \equiv \xi$).
> 
> Phép chứng minh hoàn tất.

> [!def] Quan hệ tương đương trên không gian mẫu và Lớp tương đương
> 
> Xét mẫu ngẫu nhiên $X$ có hàm mật độ xác suất (hoặc hàm khối xác suất) $f(x \mid \theta)$ với $x \in \mathcal{X}$ và $\theta \in \Theta$. Đặt $L(\theta \mid x) = f(x \mid \theta)$ là hàm hợp lý.
> 
> Trên tập các điểm mẫu có mật độ dương, ta định nghĩa một quan hệ hai ngôi $\sim$:
> $$x \sim y \iff \frac{L(\theta \mid x)}{L(\theta \mid y)} \text{ không phụ thuộc vào } \theta$$
> 
> Ta chứng minh $\sim$ là một quan hệ tương đương trên không gian mẫu $\mathcal{X}$:
> * Tính phản xạ: $\dfrac{L(\theta \mid x)}{L(\theta \mid x)} = 1$ không phụ thuộc $\theta$ $\implies x \sim x$.
> * Tính đối xứng: Nếu $\dfrac{L(\theta \mid x)}{L(\theta \mid y)} = c(x, y)$ độc lập với $\theta$ thì $\dfrac{L(\theta \mid y)}{L(\theta \mid x)} = \dfrac{1}{c(x, y)}$ cũng độc lập với $\theta$ $\implies y \sim x$.
> * Tính bắc cầu: Nếu $x \sim y$ và $y \sim z$, thì $\dfrac{L(\theta \mid x)}{L(\theta \mid z)} = \dfrac{L(\theta \mid x)}{L(\theta \mid y)} \cdot \dfrac{L(\theta \mid y)}{L(\theta \mid z)}$ là tích hai đại lượng độc lập với $\theta$, do đó độc lập với $\theta$ $\implies x \sim z$.
> 
> Lớp tương đương của một quan sát $x$, ký hiệu là $[x]$, được xác định bởi:
> $$[x] = \{y \in \mathcal{X} : y \sim x\}$$
> Phân hoạch $\mathcal{X}/\!\sim$ gom toàn bộ các mẫu có cùng hình dạng hàm hợp lý (sai khác một thừa số nhân độc lập với $\theta$) vào chung một nhóm.

> [!def] (Tiêu chuẩn Thống kê đủ tối tiểu Lehmann–Scheffé)
> 
> Xét $f(x \mid \theta)$ là hàm mật độ xác suất (pdf) hoặc hàm khối xác suất (pmf) của mẫu ngẫu nhiên $X$.  
> 
> Giả sử tồn tại một thống kê $T(X)$ sao cho với mọi cặp điểm mẫu $x, y \in \mathcal{X}$ (trong miền mật độ dương), $T(x) = T(y)$ khi và chỉ khi $x$ và $y$ thuộc cùng một lớp tương đương theo quan hệ $\sim$:  
> 
> $$
> T(x) = T(y) \iff x \sim y \iff \frac{f(x \mid \theta)}{f(y \mid \theta)} \text{ độc lập với } \theta  
> $$
> 
> Khi đó:  
> 1. Mỗi tập mức $\{x : T(x) = t\}$ của thống kê $T$ trùng khớp chính xác với một lớp tương đương $[x]$ trên không gian mẫu.
> 2. Ánh xạ $T(X)$ là một **thống kê đủ tối tiểu** (*minimal sufficient statistic*) cho tham số $\theta$.

> [!prf] 
> Ta có giả thiết: Với mọi cặp điểm mẫu $x, y \in \mathcal{X}$ (trong miền mật độ dương):
> $$T(x) = T(y) \iff x \sim y \iff \frac{f(x \mid \theta)}{f(y \mid \theta)} \text{ không phụ thuộc vào } \theta$$
> 
> Ta lần lượt chứng minh hai ý của kết luận:
> 
> **Phần 1: Mỗi tập mức của $T$ trùng khớp chính xác với một lớp tương đương $[x]$**
> 
> Xét một điểm mẫu $x \in \mathcal{X}$ bất kỳ và gọi $t = T(x)$. Đặt tập mức của thống kê $T$ ứng với giá trị $t$ là:
> $$A_t = \{y \in \mathcal{X} : T(y) = t\}$$
> 
> Lớp tương đương chứa phần tử $x$ theo quan hệ $\sim$ là:
> $$[x] = \{y \in \mathcal{X} : y \sim x\}$$
> 
> Ta cần chứng minh $A_t = [x]$:
> * Với mọi $y \in A_t$, ta có $T(y) = t = T(x)$. Theo chiều thuận của giả thiết:
>   $$T(y) = T(x) \implies y \sim x \implies y \in [x]$$
>   Do đó $A_t \subseteq [x]$.
> 
> * Ngược lại, với mọi $y \in [x]$, ta có $y \sim x$. Theo chiều nghịch của giả thiết:
>   $$y \sim x \implies T(y) = T(x) = t \implies y \in A_t$$
>   Do đó $[x] \subseteq A_t$.
> 
> Vì $A_t \subseteq [x]$ và $[x] \subseteq A_t$, ta kết luận:
> $$A_t = [x]$$
> Nghĩa là mỗi tập mức $\{y : T(y) = t\}$ chính là một lớp tương đương $[x]$, và phân hoạch do $T$ tạo ra trùng khít hoàn toàn với phân hoạch thương $\mathcal{X}/\!\sim$.
> 
> **Phần 2: Ánh xạ $T(X)$ là một thống kê đủ tối tiểu**
> 
> Để khẳng định $T(X)$ là thống kê đủ tối tiểu, ta cần chỉ ra $T(X)$ thỏa mãn hai tính chất:
> 
> * **Tính đủ:**
>   Trên mỗi lớp tương đương $A_t = \{x \in \mathcal{X} : T(x) = t\}$, ta chọn cố định một phần tử đại diện $x_0(t) \in A_t$. Khi đó với mọi $x \in A_t$, vì $T(x) = T(x_0(t)) = t$, áp dụng chiều thuận giả thiết ta có:
>   $$\frac{f(x \mid \theta)}{f(x_0(t) \mid \theta)} \text{ không phụ thuộc vào } \theta$$
>   
>   Đặt hàm chỉ phụ thuộc vào quan sát $x$ (thông qua điểm đại diện $x_0(T(x))$ đã chọn):
>   $$h(x) := \frac{f(x \mid \theta)}{f(x_0(T(x)) \mid \theta)}$$
>   
>   Đồng thời đặt phần còn lại:
>   $$g_\theta(T(x)) := f(x_0(T(x)) \mid \theta)$$
>   Đại lượng này phụ thuộc $\theta$ và chỉ phụ thuộc vào $x$ thông qua giá trị $T(x)$.
>   
>   Khi đó ta có phân tích:
>   $$f(x \mid \theta) = g_\theta(T(x)) \cdot h(x)$$
>   Theo Định lý tách (Neyman–Fisher), $T(X)$ là một **thống kê đủ** cho $\theta$.
> 
> * **Tính tối tiểu:**
>   Giả sử $S(X)$ là một thống kê đủ bất kỳ khác cho $\theta$. Ta cần chứng minh $T$ là một hàm của $S$, tức là $S(x) = S(y) \implies T(x) = T(y)$.
>   
>   Vì $S(X)$ là thống kê đủ, theo Định lý tách tồn tại $g^*_\theta$ và $h^*$ sao cho:
>   $$f(x \mid \theta) = g^*_\theta(S(x)) \cdot h^*(x)$$
>   
>   Lấy hai điểm mẫu $x, y \in \mathcal{X}$ bất kỳ thỏa mãn $S(x) = S(y)$. Xét tỷ số hàm mật độ:
>   $$\frac{f(x \mid \theta)}{f(y \mid \theta)} = \frac{g^*_\theta(S(x)) \cdot h^*(x)}{g^*_\theta(S(y)) \cdot h^*(y)}$$
>   
>   Do $S(x) = S(y)$, ta có $g^*_\theta(S(x)) = g^*_\theta(S(y))$, dẫn đến:
>   $$\frac{f(x \mid \theta)}{f(y \mid \theta)} = \frac{h^*(x)}{h^*(y)}$$
>   Tỷ số này hoàn toàn không phụ thuộc vào $\theta$, nghĩa là $x \sim y$.
>   
>   Áp dụng chiều nghịch của giả thiết:
>   $$x \sim y \implies T(x) = T(y)$$
>   
>   Như vậy ta đã suy ra được $S(x) = S(y) \implies T(x) = T(y)$. Điều này khẳng định tồn tại hàm $\psi$ sao cho $T(X) = \psi(S(X))$, tức $T$ là hàm của mọi thống kê đủ khác.
> 
> Kết hợp cả hai tính chất, $T(X)$ là một **thống kê đủ tối tiểu**.