
# Thống kê Đủ

> [!obs] Rút gọn dữ liệu là bài toán Phân hoạch
> Mỗi thống kê $T$ xác định một **phân hoạch** của không gian mẫu $\mathcal{X} \subset \mathbb{R}^n$ thành các tập mức:
> $$A_t = \{x \in \mathcal{X} : T(x) = t\}, \quad t \in T(\mathcal{X})$$
> 
> Việc dùng $T$ thay cho mẫu dữ liệu gốc $x$ có nghĩa là ta chỉ còn biết $x$ thuộc tập mức $A_t$ nào, chứ không còn phân biệt được $x$ là điểm cụ thể nào bên trong $A_t$:
>  Thống kê $T$ càng "thô" thì phân hoạch càng có ít tập hợp, mức độ rút gọn dữ liệu càng mạnh. **Câu hỏi trọng tâm:** Vậy ta có thể rút gọn dữ liệu đến mức độ nào mà vẫn **chưa làm mất thông tin** về tham số $\theta$?

> [!def] Ba nguyên tắc rút gọn dữ liệu (Data Reduction Principles)
> 
> Ba câu trả lời cổ điển cho bài toán rút gọn dữ liệu tương ứng với ba nguyên tắc sau:
> 
> * **Nguyên tắc đủ (Sufficiency Principle):** 
>   Nếu $T(X)$ là một thống kê đủ cho $\theta$ thì mọi suy diễn về $\theta$ chỉ được phép phụ thuộc vào mẫu $X$ thông qua $T(X)$: nếu $T(x) = T(y)$ thì kết luận rút ra từ $x$ và từ $y$ phải như nhau.
> 
> * **Nguyên tắc hợp lý (Likelihood Principle):** 
>   Nếu hai mẫu $x, y$ cho hai hàm hợp lý tỉ lệ với nhau, tức là $L(\theta \mid x) = c(x, y)L(\theta \mid y)$ với mọi $\theta$, thì kết luận về $\theta$ rút ra từ $x$ và từ $y$ phải như nhau.
> 
> * **Nguyên tắc đẳng biến (Equivariance Principle):** 
>   Nếu bài toán bất biến dưới một nhóm phép biến đổi (dịch chuyển, co giãn, ...), thì thủ tục suy diễn cũng phải đẳng biến tương ứng.

> [!def] Định nghĩa Thống kê đủ (Sufficient Statistic)
> Cho mẫu ngẫu nhiên $X = (X_1, X_2, \dots, X_n)$ tuân theo phân phối phụ thuộc vào tham số chưa biết $\theta \in \Theta$.
> 
> Một thống kê $T = T(X)$ được gọi là **thống kê đủ** cho $\theta$ nếu phân phối có điều kiện của mẫu $X$ khi biết giá trị của $T(X)$, tức là:
> $$P_\theta(X = x \mid T(X) = t)$$
>  **không phụ thuộc vào tham số $\theta$** với mọi $x$ và với mọi $t$ mà $P_\theta(T(X) = t) > 0$.

> [!exm] (Motivation qua mô phỏng dữ liệu)
> Giả sử ta cần suy diễn về tham số $\theta$:
> 
> **Người A:** Biết đầy đủ thông tin về toàn bộ mẫu $X = (X_1, X_2, \dots, X_n)$ và dùng nó để ước lượng $\hat{\theta}$.
> 
> **Người B:** Chỉ biết giá trị thống kê tóm tắt $T(X) = t$, nhưng biết được phân phối có điều kiện $X \mid T(X) = t$ trên tập $A_t = \{x \in \mathcal{X} : T(x) = t\}$.
> 
> Vì $T$ là thống kê đủ, phân phối có điều kiện $P(X = y \mid T(X) = t)$  không phụ thuộc vào $\theta$. Do đó, Người B có thể tự mô phỏng (sinh ngẫu nhiên) một mẫu mới $Y$ từ chính phân phối có điều kiện này sao cho:
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
> Biểu thức trên  **không phụ thuộc vào tham số $p$** với mọi vector $x \in \{0, 1\}^n$ và mọi giá trị $t \in \{0, 1, \dots, n\}$.
> 
> Theo đúng định nghĩa, $T(X) = \sum_{i=1}^n X_i$ là một **thống kê đủ** cho tham số $p$.

> [!def] (Định lý Tách Neyman–Fisher)
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
> Chiều ($\impliedby$) Giả sử tồn tại phân tích $f(x \mid \theta) = g_\theta(T(x)) \cdot h(x)$, chứng minh $T(X)$ là thống kê đủ:
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
> Biểu thức này  **không phụ thuộc vào $\theta$**. Theo định nghĩa, $T(X)$ là thống kê đủ cho $\theta$.
> 
> Chiều ($\implies$) Giả sử $T(X)$ là thống kê đủ, chứng minh tồn tại dạng phân tích:
> 
> Vì $T(X)$ là thống kê đủ, nên theo định nghĩa, phân phối có điều kiện:
> $$P_\theta(X = x \mid T(X) = T(x))$$
>  không phụ thuộc vào tham số $\theta$.
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
> **Bước 1: Tìm và chứng minh tính đủ bằng Định lý Tách (Neyman–Fisher)**
> 
> Hàm mật độ xác suất đồng thời của toàn bộ mẫu dữ liệu $x$ là:
> $$f_n(x \mid f) = \prod_{i=1}^n f(x_i)$$
> 
> Do phép nhân các số thực có tính chất giao hoán, tích của các giá trị mật độ $f(x_i)$ không phụ thuộc vào thứ tự xuất hiện của các phần tử trong mẫu. Nói cách khác, tích của các phần tử theo thứ tự ban đầu luôn bằng tích của các phần tử đã được sắp xếp theo thứ tự tăng dần:
> $$\prod_{i=1}^n f(x_i) = \prod_{i=1}^n f(x_{(i)})$$
> 
> Biểu diễn lại hàm mật độ đồng thời theo cấu trúc phân tích của Định lý Tách:
> $$f_n(x \mid f) = \left[ \prod_{i=1}^n f(x_{(i)}) \right] \cdot 1$$
> 
> Ta xác định hai nhân tử:
> * $g_f(T(x)) = \prod_{i=1}^n f(x_{(i)})$: Phụ thuộc vào hàm phân phối $f$, nhưng chỉ tương tác với vector mẫu $x$ thông qua giá trị của thống kê thứ tự $T(x) = (x_{(1)}, \dots, x_{(n)})$.
> * $h(x) = 1$:  không phụ thuộc vào tham số phân phối $f$.
> 
> Theo Định lý Tách, vector thống kê thứ tự $T(X) = (X_{(1)}, X_{(2)}, \dots, X_{(n)})$ là một **thống kê đủ** cho họ phân phối phi tham số $f \in \mathcal{F}$.
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
> Phân phối có điều kiện này là hằng số $\frac{1}{n!}$,  **không phụ thuộc vào hàm phân phối $f$**. 
> 
> Do đó, Người B dù  không biết hình dạng hàm phân phối $f$, vẫn có thể dùng thuật toán sinh số ngẫu nhiên đều để chọn ngẫu nhiên 1 trong $n!$ hoán vị của $t$ nhằm tạo ra một mẫu mô phỏng mới $Y$. Ta có:
> $$P_f(Y = x) = P_f(T(X) = T(x)) \cdot P(Y = x \mid T(X) = T(x))$$
> $$= \left( n! \prod_{i=1}^n f(x_{(i)}) \right) \cdot \frac{1}{n!} = \prod_{i=1}^n f(x_i) = P_f(X = x)$$
> 
> Mẫu mô phỏng $Y$ của Người B có cùng quy luật xác suất tuyệt đối với mẫu thật $X$ của Người A mà không cần dùng đến $f$.  
> 
> **Kết luận:** Trình tự thời gian xuất hiện của các quan sát chỉ là nhiễu ngẫu nhiên thuần túy (mang phân phối đều trên tập các hoán vị, độc lập với $f$). Toàn bộ thông tin cần thiết về hình dạng phân phối đều được nén trọn vẹn trong tập các giá trị của thống kê thứ tự $T(X)$.

> [!rem] Tính không duy nhất của thống kê đủ 
> Kết quả từ ví dụ trên chỉ ra rằng vector thống kê thứ tự $T(X) = (X_{(1)}, \dots, X_{(n)})$ là một thống kê đủ cho mô hình phi tham số. Tuy nhiên, bản thân vector mẫu gốc $X = (X_1, \dots, X_n)$ cũng là một thống kê đủ tầm thường (khi chọn $h(x) = 1$ và $g_f(X) = f_n(X \mid f)$). 
> 
> Mặc dù cả hai đều "đủ", vector mẫu ban đầu $X$  không nén dữ liệu (giữ nguyên $n!$ hoán vị thứ tự), trong khi vector thống kê thứ tự $T(X)$ đã gộp tất cả $n!$ điểm mẫu có cùng tập giá trị vào chung một lớp đại diện. 
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

> [!prp] Tính duy nhất sai khác một phép song ánh của Thống kê đủ tối tiểu
> 
> Cho $T(X)$ là một **thống kê đủ tối tiểu** cho không gian tham số $\Theta$. Khi đó:
> 
> 1. Nếu $\psi$ là một ánh xạ $1-1$ (đơn ánh trên tập giá trị của $T$), thì $T'(X) = \psi(T(X))$ cũng là một thống kê đủ tối tiểu.
> 2. Ngược lại, nếu $T_1(X)$ và $T_2(X)$ là hai thống kê đủ tối tiểu bất kỳ cho cùng một tham số $\theta$, thì tồn tại một hàm song ánh $\psi$ sao cho:
>    $$T_2(X) = \psi(T_1(X)) \quad \text{hầu chắc chắn}$$
> 
> *(Nói cách khác: Thống kê đủ tối tiểu là duy nhất sai khác một phép biến đổi song ánh - "unique up to a bijection").*

> [!prf] 
> 
> **Phần 1: Giả sử $T$ là thống kê đủ tối tiểu và $\psi$ là ánh xạ $1-1$, chứng minh $T' = \psi(T)$ cũng là thống kê đủ tối tiểu.**
> 
> * **Tính đủ:** Vì $\psi$ là ánh xạ $1-1$, tồn tại hàm ngược $\psi^{-1}$ trên ảnh của $T$. Ta có $T(x) = \psi^{-1}(T'(x))$. Do $T$ là thống kê đủ, theo Định lý Tách ta có:
>   $$f(x \mid \theta) = g_\theta(T(x)) \cdot h(x) = g_\theta(\psi^{-1}(T'(x))) \cdot h(x) = g^*_\theta(T'(x)) \cdot h(x)$$
>   với $g^*_\theta(t') = g_\theta(\psi^{-1}(t'))$. Cũng theo Định lý Tách, $T'(X)$ là một thống kê đủ.
> 
> * **Tính tối tiểu:** Giả sử $S(X)$ là một thống kê đủ bất kỳ. Vì $T$ là thống kê đủ tối tiểu, theo định nghĩa tồn tại hàm $h$ sao cho $T(X) = h(S(X))$. Khi đó:
>   $$T'(X) = \psi(T(X)) = \psi(h(S(X))) = (\psi \circ h)(S(X))$$
>   Đặt $h^* = \psi \circ h$, ta có $T'(X) = h^*(S(X))$. Vậy $T'$ là hàm của mọi thống kê đủ khác, nghĩa là $T'(X)$ là thống kê đủ tối tiểu.
> 
> **Phần 2: Giả sử $T_1$ và $T_2$ là hai thống kê đủ tối tiểu, chứng minh tồn tại song ánh giữa chúng.**
> 
> Vì $T_1$ là thống kê đủ và $T_2$ là thống kê đủ tối tiểu, theo định nghĩa thống kê đủ tối tiểu thì $T_2$ phải là một hàm của $T_1$:
> $$\exists \phi: \quad T_2(X) = \phi(T_1(X))$$
> 
> Ngược lại, vì $T_2$ là thống kê đủ và $T_1$ là thống kê đủ tối tiểu, theo định nghĩa thì $T_1$ cũng phải là một hàm của $T_2$:
> $$\exists \xi: \quad T_1(X) = \xi(T_2(X))$$
> 
> Kết hợp hai biểu thức trên:
> $$T_1(X) = \xi(\phi(T_1(X))) = (\xi \circ \phi)(T_1(X))$$
> $$T_2(X) = \phi(\xi(T_2(X))) = (\phi \circ \xi)(T_2(X))$$
> 
> Các đẳng thức trên suy ra $\xi \circ \phi = \text{id}_{\text{Im}(T_1)}$ và $\phi \circ \xi = \text{id}_{\text{Im}(T_2)}$ (ánh xạ đồng nhất trên ảnh tương ứng). 
> 
> Do đó, ánh xạ $\phi: \text{Im}(T_1) \to \text{Im}(T_2)$ vừa là đơn ánh vừa là toàn ánh, tức là một **hàm song ánh** $\psi \equiv \phi$ thỏa mãn $T_2(X) = \psi(T_1(X))$ (và có hàm ngược $\psi^{-1} \equiv \xi$).
> 
> Phép chứng minh hoàn tất.

> [!def] Quan hệ tương đương, Lớp tương đương và Thứ tự phân hoạch trên Không gian mẫu
> 
> Xét mẫu ngẫu nhiên $X$ có hàm mật độ xác suất (hoặc hàm khối xác suất) $f(x \mid \theta)$ với $x \in \mathcal{X}$ và $\theta \in \Theta$. Đặt $L(\theta \mid x) = f(x \mid \theta)$ là hàm hợp lý.
> 
> **1. Quan hệ tương đương và Lớp tương đương:**
> Trên tập các điểm mẫu có mật độ dương, định nghĩa quan hệ hai ngôi $\sim$:
> $$x \sim y \iff \frac{L(\theta \mid x)}{L(\theta \mid y)} \text{ không phụ thuộc vào } \theta$$
> 
> Quan hệ $\sim$ là một quan hệ tương đương trên $\mathcal{X}$ vì thỏa mãn:
> * **Tính phản xạ:** $\dfrac{L(\theta \mid x)}{L(\theta \mid x)} = 1$ không phụ thuộc $\theta \implies x \sim x$.
> * **Tính đối xứng:** $\dfrac{L(\theta \mid x)}{L(\theta \mid y)} = c(x, y) \implies \dfrac{L(\theta \mid y)}{L(\theta \mid x)} = \frac{1}{c(x, y)}$ không phụ thuộc $\theta \implies y \sim x$.
> * **Tính bắc cầu:** $x \sim y$ và $y \sim z \implies \dfrac{L(\theta \mid x)}{L(\theta \mid z)} = \dfrac{L(\theta \mid x)}{L(\theta \mid y)} \cdot \dfrac{L(\theta \mid y)}{L(\theta \mid z)}$ không phụ thuộc $\theta \implies x \sim z$.
> 
> Lớp tương đương chứa quan sát $x$ là:
> $$[x] = \{y \in \mathcal{X} : y \sim x\}$$
> Không gian thương $\mathcal{X}/\!\sim = \{[x] : x \in \mathcal{X}\}$ tạo thành một phân hoạch của $\mathcal{X}$, gom toàn bộ các mẫu có cùng hình dạng hàm hợp lý vào chung một tập hợp.
> 
> **2. Thứ tự bộ phận trên họ các phân hoạch:**
> Cho hai phân hoạch bất kỳ $\mathcal{P}_1, \mathcal{P}_2$ của $\mathcal{X}$. Ta định nghĩa quan hệ thứ tự bộ phận $\preceq$ (độ mịn của phân hoạch):
> $$\mathcal{P}_1 \preceq \mathcal{P}_2 \iff \forall A \in \mathcal{P}_1, \ \exists B \in \mathcal{P}_2: A \subseteq B$$
> Khi đó ta nói $\mathcal{P}_1$ **mịn hơn** $\mathcal{P}_2$ (hoặc $\mathcal{P}_2$ **thô hơn** $\mathcal{P}_1$).
> 
> Với mỗi thống kê $S: \mathcal{X} \to \mathcal{S}$, gọi $\mathcal{P}_S = \{S^{-1}(s) : s \in \mathcal{S}\}$ là phân hoạch các tập mức do $S$ sinh ra. Khi đó:
> $$
> \begin{align*}
> \mathcal{P}_{S_1} \preceq \mathcal{P}_{S_2} &\iff \Big(\forall x, y \in \mathcal{X}: S_1(x) = S_1(y) \implies S_2(x) = S_2(y)\Big) \\
> &\iff \exists \psi: S_2 = \psi(S_1)
> \end{align*}
> $$
> Phân hoạch càng thô ($\mathcal{P}$ càng lớn theo thứ tự $\preceq$) thì mức độ nén và rút gọn dữ liệu càng cao.

> [!thm] Định lý Lehmann–Scheffé về Thống kê đủ tối tiểu
> 
> Cho $X$ là một mẫu ngẫu nhiên có hàm mật độ xác suất (hoặc hàm khối xác suất) $f(x \mid \theta)$ với $x \in \mathcal{X}$ và $\theta \in \Theta$, bị chi phối bởi một độ đo $\sigma$-hữu hạn. Xét quan hệ tương đương tỉ số hợp lý trên tập các điểm mẫu có mật độ dương:
> $$x \sim y \iff \frac{f(x \mid \theta)}{f(y \mid \theta)} \text{ không phụ thuộc vào } \theta$$
> và ký hiệu không gian thương tương ứng là $\mathcal{X}/\!\sim = \{[x] : x \in \mathcal{X}\}$, trong đó $[x] = \{y \in \mathcal{X} : y \sim x\}$.
> 
> Với một thống kê $T: \mathcal{X} \to \mathcal{T}$ bất kỳ, ba mệnh đề sau là tương đương:
> 
> 1. $T(X)$ là một **thống kê đủ tối tiểu** (minimal sufficient statistic) cho tham số $\theta$.
> 2. Phân hoạch tập mức của $T$ trùng khớp với phân hoạch thương của tỉ số hợp lý:
>    $$\mathcal{P}_T \equiv \mathcal{X}/\!\sim \quad \big(\text{tức } T^{-1}(T(x)) = [x], \ \forall x \in \mathcal{X}\big)$$
> 3. $T$ phân biệt chính xác các mẫu có hình dạng hàm hợp lý khác nhau:
>    $$\forall x, y \in \mathcal{X}: \quad T(x) = T(y) \iff x \sim y$$

> [!prf] 
> 
> **Bước 1: Chứng minh (2) $\iff$ (3)**
> 
> Theo định nghĩa ảnh ngược và lớp tương đương:
> $$T^{-1}(T(x)) = \{y \in \mathcal{X} : T(y) = T(x)\}, \quad [x] = \{y \in \mathcal{X} : y \sim x\}$$
> * Giả sử (2) đúng: Khi đó $T(x) = T(y) \iff y \in T^{-1}(T(x)) \iff y \in [x] \iff x \sim y$, suy ra (3) đúng.
> * Ngược lại, giả sử (3) đúng: Với mọi $y \in T^{-1}(T(x)) \iff T(y) = T(x) \iff y \sim x \iff y \in [x]$, do đó $T^{-1}(T(x)) = [x]$, suy ra (2) đúng.
> 
> Như vậy, $(2) \iff (3)$ là tương đương trực tiếp theo định nghĩa tập hợp. Ta hoàn tất định lý bằng cách chứng minh $(3) \iff (1)$.
> 
> **Bước 2: Chứng minh $(3) \implies (1)$**
> 
> Giả sử $T(x) = T(y) \iff x \sim y$. Ta chứng minh $T(X)$ là thống kê đủ tối tiểu:
> 
> * **Tính đủ:**
>   Do $(3) \implies (2)$, mỗi tập mức $A_t = \{x \in \mathcal{X} : T(x) = t\}$ chính là một lớp tương đương trong $\mathcal{X}/\!\sim$. Trên mỗi tập mức $A_t$, chọn cố định một điểm đại diện $x_0(t) \in A_t$.
>   Với mọi $x \in A_t$, ta có $T(x) = T(x_0(t)) = t \implies x \sim x_0(t)$, tức tỉ số sau độc lập với $\theta$:
>   $$h(x) := \frac{f(x \mid \theta)}{f(x_0(T(x)) \mid \theta)}$$
>   Đặt $g_\theta(T(x)) := f(x_0(T(x)) \mid \theta)$, ta thu được phân tích tích số:
>   $$f(x \mid \theta) = g_\theta(T(x)) \cdot h(x)$$
>   Theo Định lý Tách Neyman–Fisher, $T(X)$ là một **thống kê đủ**.
> 
> * **Tính tối tiểu:**
>   Giả sử $S(X)$ là một thống kê đủ bất kỳ khác cho $\theta$. Theo Định lý Tách, tồn tại các hàm $g^*_\theta$ và $h^*$ sao cho:
>   $$f(x \mid \theta) = g^*_\theta(S(x)) \cdot h^*(x)$$
>   Lấy hai điểm $x, y \in \mathcal{X}$ bất kỳ thỏa mãn $S(x) = S(y)$, ta lập tỉ số:
>   $$\frac{f(x \mid \theta)}{f(y \mid \theta)} = \frac{g^*_\theta(S(x)) \cdot h^*(x)}{g^*_\theta(S(y)) \cdot h^*(y)} = \frac{h^*(x)}{h^*(y)}$$
>   Tỉ số này độc lập với $\theta$, tức là $x \sim y$.
>   Áp dụng chiều nghịch của giả thiết (3): $x \sim y \implies T(x) = T(y)$.
>   Do đó:
>   $$S(x) = S(y) \implies T(x) = T(y)$$
>   Điều này khẳng định tồn tại hàm $\psi$ sao cho $T(X) = \psi(S(X))$, nghĩa là $T$ là hàm của mọi thống kê đủ khác.
> 
> Kết hợp cả hai tính chất, $T(X)$ là một thống kê đủ tối tiểu.
> 
> **Bước 3: Chứng minh $(1) \implies (3)$**
> 
> Giả sử $T(X)$ là một thống kê đủ tối tiểu cho $\theta$. Ta chứng minh hai chiều của mệnh đề (3):
> 
> Chiều ($\implies$) Giả sử $T(x) = T(y)$:
> Vì $T(X)$ là thống kê đủ tối tiểu, $T$ trước hết là một thống kê đủ. Theo Định lý Tách, tồn tại $g_\theta, h$ sao cho $f(x \mid \theta) = g_\theta(T(x)) \cdot h(x)$.
> Lấy hai điểm $x, y$ thỏa mãn $T(x) = T(y)$:
> $$\frac{f(x \mid \theta)}{f(y \mid \theta)} = \frac{g_\theta(T(x)) \cdot h(x)}{g_\theta(T(y)) \cdot h(y)} = \frac{h(x)}{h(y)}$$
> Tỉ số này  độc lập với $\theta$, do đó $x \sim y$.
> 
> Chiều ($\impliedby$): Giả sử $x \sim y$:
> Xét thống kê phân hoạch thương $S_0(x) := [x]$ (gán mỗi mẫu vào chính lớp tương đương của nó).
> Trên mỗi lớp $[x]$, chọn cố định một phần tử đại diện $x_0 \in [x]$. Vì mọi $x \in [x]$ đều có $x \sim x_0$, đại lượng:
> $$h_0(x) := \frac{f(x \mid \theta)}{f(x_0 \mid \theta)}$$
>  độc lập với $\theta$. Đặt $g^0_\theta(S_0(x)) := f(x_0 \mid \theta)$, ta có phân tích:
> $$f(x \mid \theta) = g^0_\theta(S_0(x)) \cdot h_0(x)$$
> Theo Định lý Tách Neyman–Fisher, $S_0(X)$ là một **thống kê đủ** cho $\theta$.
> 
> Do $T(X)$ là thống kê đủ tối tiểu, theo định nghĩa $T$ phải là một hàm của mọi thống kê đủ khác, kể cả $S_0$:
> $$\exists \phi: \quad T(x) = \phi(S_0(x)) = \phi([x]) \quad \forall x \in \mathcal{X}$$
> Với mọi cặp điểm $x, y$ thỏa mãn $x \sim y$, ta có $[x] = [y] \implies S_0(x) = S_0(y)$. 
> Tác động hàm $\phi$ lên hai vế:
> $$T(x) = \phi(S_0(x)) = \phi(S_0(y)) = T(y)$$
> 
> Phép chứng minh hoàn tất cho cả ba mệnh đề.

> [!rem] Mối liên hệ giữa Thống kê đủ, Thống kê đủ tối tiểu và Nguyên tắc hợp lý
> 
> **Đặc trưng quan hệ tương đương theo Nguyên tắc hợp lý (LP):**
> Xét quan hệ tương đương tỉ số hợp lý trên không gian mẫu $\mathcal{X}$:
> $$x \sim_{\text{LP}} y \iff \exists c(x, y) > 0, \ \forall \theta \in \Theta: L(\theta \mid x) = c(x, y)L(\theta \mid y)$$
> 
> **So sánh quan hệ thứ tự phân hoạch:**
> Gọi $\mathcal{P}_S = \{S^{-1}(s)\}$ là phân hoạch sinh bởi thống kê $S$ và $\mathcal{X}/\!\sim_{\text{LP}}$ là phân hoạch thương của LP:
> 
> * **Thống kê đủ $S$ (Phân hoạch mịn hơn):**
>   Theo Định lý Tách Fisher–Neyman, $L(\theta \mid x) = g_\theta(S(x))h(x)$, do đó:
>   $$S(x) = S(y) \implies \frac{L(\theta \mid x)}{L(\theta \mid y)} = \frac{h(x)}{h(y)} \implies x \sim_{\text{LP}} y$$
>   Bao hàm thức trên tương đương với $\mathcal{P}_S \preceq \mathcal{X}/\!\sim_{\text{LP}}$. Thống kê đủ $S$ bảo toàn thông tin về $\theta$ nhưng có thể phân tách các mẫu có cùng hàm hợp lý ($x \sim_{\text{LP}} y \centernot\implies S(x) = S(y)$), tức chưa nén dữ liệu triệt để theo LP.
> 
> * **Thống kê đủ tối tiểu $T$ (Phân hoạch trùng khớp):**
>   Do $T$ là hàm của thống kê phân hoạch thương $S_0(x) = [x]_{\sim_{\text{LP}}}$, chiều ngược lại được thỏa mãn:
>   $$x \sim_{\text{LP}} y \implies T(x) = T(y)$$
>   Kết hợp với tính đủ, ta thu được điều kiện đồng nhất:
>   $$T(x) = T(y) \iff x \sim_{\text{LP}} y \iff \mathcal{P}_T \equiv \mathcal{X}/\!\sim_{\text{LP}}$$
>   Thống kê đủ tối tiểu $T$ chính là chặn trên đúng (phân hoạch thô nhất) trong họ mọi thống kê đủ: $\mathcal{P}_T = \sup_{\preceq} \{\mathcal{P}_S : S \text{ đủ}\} = \mathcal{X}/\!\sim_{\text{LP}}$.
> 
> **Hệ quả suy diễn:**
> Một thủ tục suy diễn $\delta: \mathcal{X} \to \mathcal{D}$ tuân thủ Nguyên tắc hợp lý (tức $x \sim_{\text{LP}} y \implies \delta(x) = \delta(y)$):
> $$
> \begin{align*}
> x \sim_{\text{LP}} y \implies \delta(x) = \delta(y) &\iff \left[ T(x) = T(y) \implies \delta(x) = \delta(y) \right] \\ &\iff \exists \psi: \delta(x) = \psi(T(x))
> \end{align*}
> $$
> Do đó, tuân thủ Nguyên tắc hợp lý tương đương với việc mọi kết luận suy diễn (như ước lượng $\hat{\theta}_{\text{MLE}}$, tỉ số likelihood ratio, posterior $p(\theta \mid x)$) phải biểu diễn được dưới dạng hàm của thống kê đủ tối tiểu $T(X)$.

# Thống kê Phụ

> [!exm] (Thí nghiệm Hai Máy Đo của Cox)
> 
> Xét bài toán ước lượng đại lượng vật lý $\theta \in \mathbb{R}$. Người làm thực nghiệm chọn ngẫu nhiên một trong hai máy đo bằng cách tung một đồng xu cân đối:
> * Nếu đồng xu ra ngửa ($K = 1$, xác suất $1/2$): Sử dụng máy đo có độ chính xác cao, kết quả $X \sim \mathcal{N}(\theta, 1)$.
> * Nếu đồng xu ra sấp ($K = 2$, xác suất $1/2$): Sử dụng máy đo có độ chính xác thấp, kết quả $X \sim \mathcal{N}(\theta, 100^2)$.
> 
> Không gian mẫu quan sát là cặp ngẫu nhiên $(K, X) \in \{1, 2\} \times \mathbb{R}$.
> 
> **1. Hàm mật độ đồng thời và Thống kê đủ tối tiểu:**
> Đặt $\sigma_1 = 1$ và $\sigma_2 = 100$. Hàm mật độ đồng thời của mẫu quan sát $(k, x)$ là:
> $$f(k, x \mid \theta) = \mathbb{P}(K = k) \cdot f(x \mid K = k, \, \theta) = \frac{1}{2} \cdot \frac{1}{\sqrt{2\pi}\sigma_k} \exp\left( -\frac{(x - \theta)^2}{2\sigma_k^2} \right)$$
> 
> Xét tỉ số hợp lý giữa hai mẫu quan sát $(k, x)$ và $(k', y)$:
> $$\frac{f(k, x \mid \theta)}{f(k', y \mid \theta)} = \frac{\sigma_{k'}}{\sigma_k} \exp\left( -\frac{(x - \theta)^2}{2\sigma_k^2} + \frac{(y - \theta)^2}{2\sigma_{k'}^2} \right)$$
> Khai triển số mũ theo biến $\theta$:
> $$-\theta^2 \left( \frac{1}{2\sigma_k^2} - \frac{1}{2\sigma_{k'}^2} \right) + \theta \left( \frac{x}{\sigma_k^2} - \frac{y}{\sigma_{k'}^2} \right) - \left( \frac{x^2}{2\sigma_k^2} - \frac{y^2}{2\sigma_{k'}^2} \right)$$
> Biểu thức trên độc lập với $\theta$ với mọi $\theta \in \mathbb{R}$ khi và chỉ khi:
> $$\begin{cases} \dfrac{1}{2\sigma_k^2} - \dfrac{1}{2\sigma_{k'}^2} = 0 \\ \dfrac{x}{\sigma_k^2} - \dfrac{y}{\sigma_{k'}^2} = 0 \end{cases} \iff \begin{cases} k = k' \\ x = y \end{cases}$$
> Theo Định lý Lehmann–Scheffé, thống kê đủ tối tiểu là:
> $$T(K, X) = (K, X), \quad \dim T = 2 > 1 = \dim \Theta$$
> Dữ liệu không thể nén thêm theo nguyên lý thông kê đủ: ta bắt buộc phải giữ lại cả chỉ số máy $K$ lẫn giá trị đo $X$.
> 
> **2. Mâu thuẫn trong Suy diễn Vô điều kiện:**
> Xét ước lượng không chệch tự nhiên cho $\theta$ là $\hat{\theta}(K, X) = X$.
> 
> **Phương sai vô điều kiện (trung bình trên mọi lần tung đồng xu):**
> $$\text{Var}(\hat{\theta}) = \mathbb{E}\big[\text{Var}(X \mid K)\big] + \text{Var}\big(\mathbb{E}[X \mid K]\big) = \left( \frac{1}{2}\cdot 1^2 + \frac{1}{2}\cdot 100^2 \right) + 0 = 5000.5$$
> Khoảng tin cậy $95\%$ vô điều kiện báo cáo cho thực nghiệm là:
> $$X \pm 1.96 \sqrt{5000.5} \approx X \pm 138.6$$
> 
> **Nghịch lý thực tế:**
> * Khi đồng xu rơi vào $K = 1$: Ta cầm trong tay kết quả từ máy đo chính xác ($\sigma_1 = 1$) có sai số $$1.96 \times \sigma_1 = 1.96 \times 1 = 1.96$$. Báo cáo sai số $\pm 138.6$ là vô lý vì đã thổi phồng độ bất định lên hơn 70 lần.
> * Khi đồng xu rơi vào $K = 2$: Ta cầm kết quả từ máy kém ($\sigma_2 = 100$). Khoảng sai số $\pm 138.6$ lại quá lạc quan so với độ lệch chuẩn thực tế của thiết bị.
> 
> **3. Sự xuất hiện và Vai trò của Thống kê phụ (Ancillary Statistic):**
> Xét riêng thành phần $K = \pi_1(T)$:
> * Phân phối của biến ngẫu nhiên $K$:
>   $$\mathbb{P}_\theta(K = 1) = \frac{1}{2}, \quad \mathbb{P}_\theta(K = 2) = \frac{1}{2}, \quad \forall \theta \in \mathbb{R}$$
>   Phân phối của $K$  độc lập với tham số vị trí $\theta$.
> * Tuy $K$ không mang thông tin về độ lớn của $\theta$, nó lại xác định bối cảnh thực nghiệm và thước đo độ chính xác của mẫu đo:
>   $$\text{Var}(X \mid K = 1) = 1 \quad \text{và} \quad \text{Var}(X \mid K = 2) = 10000$$
> 
> Một thống kê có phân phối xác suất độc lập với tham số $\theta$ như $K$ được gọi là một **Thống kê phụ (Ancillary Statistic)**.
> 
> Thí nghiệm của Cox chứng minh rằng: Suy diễn thống kê hợp lý không được lấy trung bình cào bằng trên toàn bộ không gian mẫu, mà phải được điều kiện hóa trên giá trị quan sát của thống kê phụ $f(x \mid K = k, \, \theta)$ để phản ánh đúng độ tin cậy thực nghiệm.

> [!def] Định nghĩa Thống kê Phụ Ancillary Statistic)
> Một Thống kê $A(X)$ được gọi là Thống kê Phụ nếu phân phối của nó không phụ thuộc vào tham số $\theta$.

> [!lem] (Tính Bảo toàn Thứ tự qua Phép biến đổi Affine)
> 
> Cho vector ngẫu nhiên $Z = (Z_1, \dots, Z_n)$ gồm các biến độc lập cùng phân phối sinh từ hàm mật độ chuẩn hóa $f_0(z)$ (không phụ thuộc tham số). Với tham số vị trí $\mu \in \mathbb{R}$ và tham số tỉ lệ $\sigma > 0$, xét phép biến đổi affine tọa độ:
> $$X_i = \mu + \sigma Z_i, \quad i = 1, \dots, n$$
> 
> Khi đó:
> 
> **1. Hàm mật độ đồng thời của mẫu quan sát:**
> Phép đổi biến $z_i \mapsto x_i = \sigma z_i + \mu$ có đạo hàm $dx_i = \sigma dz_i$. Hàm mật độ đồng thời của vector quan sát $X = (X_1, \dots, X_n)$ là:
> $$f_X(x \mid \mu, \sigma) = \frac{1}{\sigma^n} \prod_{i=1}^n f_0\left( \frac{x_i - \mu}{\sigma} \right)$$
> Ngược lại, vector sai số $Z = \dfrac{X - \mu \mathbf{1}}{\sigma}$ luôn có phân phối đồng thời $f_Z(z) = \prod_{i=1}^n f_0(z_i)$  độc lập với $(\mu, \sigma)$.
> 
> **2. Bảo toàn thứ tự quan sát (Order-Preserving Property):**
> Vì $\sigma > 0$, ánh xạ affine $h(t) = \sigma t + \mu$ là một hàm đồng biến nghiêm ngặt trên $\mathbb{R}$:
> $$\forall i, j \in \{1, \dots, n\}: \quad z_i \le z_j \iff \sigma z_i + \mu \le \sigma z_j + \mu \iff x_i \le x_j$$
> Do đó, phép biến đổi bảo toàn nguyên vẹn thứ tự sắp xếp của mẫu:
> $$X_{(i)} = \mu + \sigma Z_{(i)}, \quad \forall i = 1, \dots, n$$
> Đặc biệt, các thống kê thứ tự cực trị thỏa mãn:
> $$X_{(1)} = \mu + \sigma Z_{(1)} \quad \text{và} \quad X_{(n)} = \mu + \sigma Z_{(n)}$$

> [!thm] Tính Phụ của Thống kê Chuẩn hóa (Location-Scale Invariant Theorem)
> 
> Xét mẫu ngẫu nhiên $X = (X_1, \dots, X_n)$ độc lập cùng phân phối sinh bởi một hàm mật độ cơ sở chuẩn hóa $f_0(\cdot)$ qua phép biến đổi vị trí – tỉ lệ:
> $$X_i = \mu + \sigma Z_i, \quad i = 1, \dots, n$$
> trong đó $(\mu, \sigma) \in \mathbb{R} \times (0, \infty)$ là các tham số chưa biết, và $Z = (Z_1, \dots, Z_n)$ là vector sai số chuẩn hóa có phân phối đồng thời $f_Z(z) = \prod_{i=1}^n f_0(z_i)$  độc lập với $(\mu, \sigma)$.
> 
> Giả sử tồn tại hai hàm đo được $M(X)$ và $S(X) > 0$ thỏa mãn tính chất tương đương nghiệm (equivariance) dưới mọi phép đổi biến afin $x \mapsto c x + d$ (với $c > 0, d \in \mathbb{R}$):
> 1. Tương đương nghiệm vị trí: $M(c X + d \mathbf{1}) = c M(X) + d$
> 2. Tương đương nghiệm tỉ lệ: $S(c X + d \mathbf{1}) = c S(X)$
> 
> Khi đó:
> 1. Vector chuẩn hóa:
>    $$W(X) := \frac{X - M(X)\mathbf{1}}{S(X)} = \left( \frac{X_1 - M(X)}{S(X)}, \dots, \frac{X_n - M(X)}{S(X)} \right)$$
>    là một **thống kê phụ** (ancillary statistic) đối với tham số $(\mu, \sigma)$.
> 2. Mọi hàm đo được $A(X) = h\big(W(X)\big)$ chỉ phụ thuộc vào vector $W(X)$ (chẳng hạn như khoảng biến thiên chuẩn hóa, các tỷ số hiệu khoảng cách, hoặc độ nhọn/độ lệch mẫu) đều là thống kê phụ.

> [!prf] 
> **Bước 1: Biểu diễn vector sai số chuẩn**
> 
> Dưới dạng vector, mô hình sinh dữ liệu được viết thành:
> $$X = \mu \mathbf{1} + \sigma Z$$
> trong đó $\mathbf{1} = (1, 1, \dots, 1)^T \in \mathbb{R}^n$, và vector ngẫu nhiên $Z = (Z_1, \dots, Z_n)^T$ có hàm mật độ đồng thời:
> $$f_Z(z_1, \dots, z_n) = \prod_{i=1}^n f_0(z_i)$$
> Tích phân xác suất của $Z$ trên bất kỳ tập đo được $B \subset \mathbb{R}^n$ là:
> $$\mathbb{P}(Z \in B) = \int_B \left( \prod_{i=1}^n f_0(z_i) \right) dz_1 \dots dz_n$$
> Tích phân này là một hằng số xác định chỉ phụ thuộc vào dạng hàm cơ sở $f_0$,  độc lập với hai tham số $\mu$ và $\sigma$.
> 
> **Bước 2: Phân tích hàm đặc trưng $M(X)$ và $S(X)$**
> 
> Áp dụng trực tiếp tính chất tương đương nghiệm affine của $M$ và $S$ với $c = \sigma > 0$ và $d = \mu \in \mathbb{R}$:
> * Đối với vị trí trung tâm $M(X)$:
>   $$M(X) = M(\sigma Z + \mu \mathbf{1}) = \sigma M(Z) + \mu$$
> * Đối với độ phân tán $S(X)$:
>   $$S(X) = S(\sigma Z + \mu \mathbf{1}) = \sigma S(Z)$$
> 
> **Bước 3: Giản ước tham số $(\mu, \sigma)$**
> 
> Xét từng thành phần tọa độ thứ $i$ của vector chuẩn hóa $W(X)$:
> $$W_i(X) = \frac{X_i - M(X)}{S(X)}$$
> Thay các biểu thức biểu diễn theo $Z$ từ Bước 1 và Bước 2 vào tử số và mẫu số:
> * **Tử số:**
>   $$X_i - M(X) = \big(\mu + \sigma Z_i\big) - \big(\mu + \sigma M(Z)\big) = \sigma \big(Z_i - M(Z)\big)$$
>   Tham số vị trí $\mu$ bị triệt tiêu  qua phép trừ.
> * **Mẫu số:**
>   $$S(X) = \sigma S(Z)$$
> 
> Ta chia tử số với mẫu số:
> $$W_i(X) = \frac{\sigma \big(Z_i - M(Z)\big)}{\sigma S(Z)} = \frac{Z_i - M(Z)}{S(Z)}$$
> Vì $\sigma > 0$, tham số tỉ lệ $\sigma$ ở cả tử và mẫu triệt tiêu nhau.
> 
> Dưới dạng vector:
> $$W(X) = \frac{Z - M(Z)\mathbf{1}}{S(Z)} =: \psi(Z)$$
> trong đó $\psi: \mathbb{R}^n \to \mathbb{R}^n$ là một ánh xạ xác định  không phụ thuộc vào bất kỳ tham số nào.
> 
> **Bước 4: Kết luận tính phụ**
> 
> Với mọi tập Borel $C \subset \mathbb{R}^n$, xác suất để $W(X) \in C$ dưới phân phối $\mathbb{P}_{(\mu, \sigma)}$ là:
> $$\mathbb{P}_{(\mu, \sigma)}\big(W(X) \in C\big) = \mathbb{P}_{(\mu, \sigma)}\big(\psi(Z) \in C\big) = \mathbb{P}\big(Z \in \psi^{-1}(C)\big) = \int_{\psi^{-1}(C)} f_Z(z) \, dz$$
> Biểu thức tích phân vế phải chỉ phụ thuộc vào tập $\psi^{-1}(C)$ và hàm mật độ chuẩn hóa $f_Z$,  độc lập với $(\mu, \sigma)$.
> 
> Theo đúng định nghĩa, $W(X)$ là một thống kê phụ cho $(\mu, \sigma)$. Mọi biến đổi $A(X) = h(W(X))$ cũng có phân phối xác định qua ảnh của $Z$, do đó đều là các thống kê phụ. 

> [!exm] Ví dụ: Thống kê Phụ cho một Phân phối Đều 
> 
> Xét mẫu ngẫu nhiên $X = (X_1, \dots, X_n)$ độc lập cùng phân phối:
> $$X_i \overset{\text{i.i.d.}}{\sim} \mathcal{U}\left(\theta - \frac{1}{2}, \, \theta + \frac{1}{2}\right), \quad \theta \in \mathbb{R}$$
> Mục tiêu là tìm một thống kê phụ $A(X)$, tức là một hàm của dữ liệu có phân phối xác suất  độc lập với tham số $\theta$.
> 
> **Bước 1: Xác định Thống kê đủ (tối tiểu)**
> 
> Hàm mật độ đồng thời của mẫu quan sát $x = (x_1, \dots, x_n)$ là:
> $$f(x \mid \theta) = \prod_{i=1}^n \mathbb{I}_{\left[\theta - \frac{1}{2}, \, \theta + \frac{1}{2}\right]}(x_i) = \mathbb{I}_{\left[\theta - \frac{1}{2}, \, +\infty\right)}\big(x_{(1)}\big) \cdot \mathbb{I}_{\left(-\infty, \, \theta + \frac{1}{2}\right]}\big(x_{(n)}\big) \cdot 1$$
> 
> * **Tính đủ (Định lý Tách Fisher–Neyman):**
>   Đặt $g\big(x_{(1)}, x_{(n)}; \, \theta\big) = \mathbb{I}_{\left[\theta - 1/2, \, +\infty\right)}\big(x_{(1)}\big) \cdot \mathbb{I}_{\left(-\infty, \, \theta + 1/2\right]}\big(x_{(n)}\big)$ và $h(x) = 1$. Theo định lý Tách, cặp giá trị cực trị là thống kê đủ:
>   $$T(X) = \big(X_{(1)}, \, X_{(n)}\big)$$
> 
> * **Tính tối tiểu (Tiêu chuẩn Lehmann–Scheffé):**
>   Tỉ số hợp lý giữa hai mẫu $x$ và $y$ độc lập với $\theta$ khi và chỉ khi miền khả dĩ của $\theta$ tương ứng với hai mẫu trùng nhau:
>   $$\left[x_{(n)} - \frac{1}{2}, \, x_{(1)} + \frac{1}{2}\right] = \left[y_{(n)} - \frac{1}{2}, \, y_{(1)} + \frac{1}{2}\right] \iff \begin{cases} x_{(1)} = y_{(1)} \\ x_{(n)} = y_{(n)} \end{cases}$$
>   Do đó, $T(X) = \big(X_{(1)}, \, X_{(n)}\big)$ là thống kê đủ tối tiểu.
> 
> Vì $\dim T(X) = 2$ trong khi tham số $\dim \Theta = 1$, không gian dữ liệu rút gọn còn dư $2 - 1 = 1$ bậc tự do. Đây là gợi ý cho sự xuất hiện của Thống kê Phụ.
> 
> **Bước 2: Phép biến đổi Chuẩn hóa**
> 
> Phân phối $\mathcal{U}(\theta - 1/2, \theta + 1/2)$ thực chất là phân phối đều chuẩn tắc $\mathcal{U}(-1/2, 1/2)$ bị tịnh tiến gốc tọa độ đi một đoạn $\theta$. Ta biểu diễn mỗi quan sát dưới dạng tổng của tham số vị trí và sai số chuẩn hóa độc lập với $\theta$:
> $$X_i = \theta + Z_i, \quad \text{với } Z_i \overset{\text{i.i.d.}}{\sim} \mathcal{U}\left(-\frac{1}{2}, \, \frac{1}{2}\right)$$
> Do phép cộng $\theta$ là ánh xạ đồng biến nghiêm ngặt, theo bổ đề bảo toàn thứ tự:
> $$X_{(1)} = \theta + Z_{(1)} \quad \text{và} \quad X_{(n)} = \theta + Z_{(n)}$$
> trong đó vector $(Z_{(1)}, Z_{(n)})$ có phân phối đồng thời  không chứa $\theta$.
> 
> **Bước 3: Xác định thống kê phụ**
> 
> Nhìn vào hai tọa độ của $T(X)$:
> $$\begin{cases} X_{(1)} = \theta + Z_{(1)} \\ X_{(n)} = \theta + Z_{(n)} \end{cases}$$
> Tham số $\theta$ xuất hiện dưới dạng cộng tính đồng bậc ở cả hai thành phần. Để triệt tiêu đại lượng tịnh tiến $+\theta$ mà không thay đổi bản chất biến ngẫu nhiên, phép biến đổi tự nhiên nhất là phép trừ:
> $$A(X) := X_{(n)} - X_{(1)} = \big(\theta + Z_{(n)}\big) - \big(\theta + Z_{(1)}\big) = Z_{(n)} - Z_{(1)} =: R(X)$$
> 
> **Bước 4: Kiểm chứng tính phụ**
> 
> Vì $R(X) = Z_{(n)} - Z_{(1)}$, với mọi $r \in (0, 1)$, hàm phân phối tích lũy của $R(X)$ là:
> $$F_R(r \mid \theta) = \mathbb{P}_\theta\big(X_{(n)} - X_{(1)} \le r\big) = \mathbb{P}\big(Z_{(n)} - Z_{(1)} \le r\big) = n r^{n-1} - (n - 1) r^n =: F_R(r)$$
> Hàm phân phối $F_R(r)$ và hàm mật độ tương ứng $f_R(r) = n(n-1)r^{n-2}(1-r)$  không phụ thuộc vào $\theta$.
> 
> Theo đúng định nghĩa, khoảng biến thiên mẫu $R(X) = X_{(n)} - X_{(1)}$ là một **thống kê phụ** cho tham số vị trí $\theta$.

# Thống kê đầy đủ 

> [!exm] Kỳ vọng Triệt tiêu trên Phân phối Bernoulli
> 
> Xét $X \sim \text{Bernoulli}(\theta)$ với $\theta \in \Theta \subseteq (0, 1)$, không gian mẫu $\mathcal{X} = \{0, 1\}$.
> 
> Xét một hàm $g(X)$ bất kỳ, đặt $a := g(0)$ và $b := g(1)$. Phương trình kỳ vọng triệt tiêu là:
> $$\mathbb{E}_\theta[g(X)] = g(0)\mathbb{P}_\theta(X = 0) + g(1)\mathbb{P}_\theta(X = 1) = a(1 - \theta) + b\theta = 0$$
> $$\iff a + (b - a)\theta = 0$$
> 
> * **Khi $\theta$ cố định ($\Theta = \{\theta_0\}$):**
>   Phương trình có vô số nghiệm phi tầm thường. Chẳng hạn với $\theta_0 = 0.5$, chọn $a = 2, b = -2$ ta được $g(X) \not\equiv 0$ nhưng $\mathbb{E}[g(X)] = 2(0.5) + (-2)(0.5) = 0$.
> 
> * **Khi $\theta$ biến thiên trên khoảng ($\Theta = (0, 1)$):**
>   Yêu cầu $a + (b - a)\theta = 0$ với mọi $\theta \in (0, 1)$ dẫn đến:
>   $$\begin{cases} a = 0 \\ b - a = 0 \end{cases} \iff a = b = 0 \implies \mathbb{P}_\theta(g(X) = 0) = 1, \quad \forall \theta \in (0, 1)$$
> 
> Sự biến thiên của $\theta$ trên toàn bộ không gian tham số tạo ra ràng buộc đồng thời, ép hàm $g(X)$ có kỳ vọng bằng $0$ phải triệt tiêu thành $0$ hầu chắc chắn. Hiện tượng này chính là cơ sở dẫn đến định nghĩa của **tính đầy đủ**.

> [!def] Họ Phân phối Đầy đủ và Thống kê Đầy đủ (Completeness)
> 
> Xét $\{f(t \mid \theta), \, \theta \in \Theta\}$ là một họ các hàm mật độ xác suất pdf (hoặc hàm khối xác suất pmf) cho một thống kê $T(X)$.
> 
> Họ các phân phối xác suất được gọi là **đầy đủ (complete)** nếu:
> $$\mathbb{E}_\theta[g(T)] = 0, \quad \forall \theta \in \Theta \implies \mathbb{P}_\theta\big(g(T) = 0\big) = 1, \quad \forall \theta \in \Theta$$
> hay nói cách khác, $g(T) = 0$ hầu chắc chắn (almost surely - a.s.).
> 
> Một cách tương đương, khi đó $T(X)$ được gọi là một **thống kê đầy đủ (complete statistic)**.

> [!obs] Thống kê Đầy đủ và Cơ chế Triệt tiêu Nhiễu
> 
> **1. Bản chất thống kê:**
> * Điều kiện $\mathbb{E}_\theta[g(T)] = 0, \, \forall \theta \in \Theta$ định nghĩa một **ước lượng không chệch của số không** (unbiased estimator of zero), tức là một đại lượng dao động ngẫu nhiên quanh $0$ mà không mang lại giá trị định vị tham số.
> * Tính đầy đủ khẳng định rằng: từ thống kê $T(X)$, không thể tạo ra bất kỳ hàm dao động phi tầm thường nào có kỳ vọng luôn bằng $0$. Toàn bộ thông tin chứa trong $T(X)$ đều bị ràng buộc với sự thay đổi của $\theta$.
> 
> **2. Vì sao tính đầy đủ bảo đảm tính duy nhất của ước lượng không chệch?**
> Giả sử tồn tại hai hàm $h_1(T)$ và $h_2(T)$ cùng là ước lượng không chệch cho hàm tham số $q(\theta)$:
> $$\mathbb{E}_\theta[h_1(T)] = q(\theta) \quad \text{và} \quad \mathbb{E}_\theta[h_2(T)] = q(\theta), \quad \forall \theta \in \Theta$$
> Xét hiệu số $g(T) := h_1(T) - h_2(T)$, ta có:
> $$\mathbb{E}_\theta[g(T)] = \mathbb{E}_\theta[h_1(T)] - \mathbb{E}_\theta[h_2(T)] = q(\theta) - q(\theta) = 0, \quad \forall \theta \in \Theta$$
> Do họ phân phối của $T$ là **đầy đủ**, điều kiện trên lập tức kéo theo:
> $$\mathbb{P}_\theta\big(g(T) = 0\big) = 1 \iff h_1(T) = h_2(T) \quad (\text{hầu chắc chắn}), \quad \forall \theta \in \Theta$$
> Nhờ đó, nếu một đại lượng có thể ước lượng không chệch qua một thống kê đầy đủ, thì ước lượng đó là duy nhất.

> [!thm] Định lý Bahadur (Mối quan hệ giữa Tính Đầy đủ và Tính Đủ Tối tiểu)
> 
> Xét mô hình thống kê với họ phân phối xác suất $\{P_\theta : \theta \in \Theta\}$ trên không gian mẫu $\mathcal{X}$.
> 
> Giả sử tồn tại một thống kê đủ tối tiểu $S(X)$. Nếu thống kê $T(X)$ thỏa mãn:
> 1. $T(X)$ là một **thống kê đủ** (sufficient statistic) cho tham số $\theta$,
> 2. Họ phân phối của $T(X)$ là **đầy đủ** (complete),
> 
> thì $T(X)$ cũng là một **thống kê đủ tối tiểu** (minimal sufficient statistic).

> [!prf] 
> 
> Theo định nghĩa của thống kê đủ tối tiểu, nếu $S(X)$ là đủ tối tiểu thì với mọi thống kê đủ khác, nó phải là một hàm của thống kê đó. Cụ thể, vì $T(X)$ là thống kê đủ, tồn tại một hàm đo được $h$ sao cho:
> $$S(X) = h\big(T(X)\big) \quad \text{hầu chắc chắn } P_\theta, \quad \forall \theta \in \Theta$$
> 
> Để chứng minh $T(X)$ cũng là thống kê đủ tối tiểu, ta cần chứng minh chiều ngược lại: $T(X)$ có thể biểu diễn thành một hàm đo được của $S(X)$ hầu chắc chắn.
> 
> **Bước 1: Xây dựng ước lượng dựa trên kỳ vọng có điều kiện**
> 
> Xét kỳ vọng có điều kiện của $T(X)$ khi biết $S(X)$:
> $$\psi(S) := \mathbb{E}\big[T(X) \mid S(X)\big]$$
> Do $S(X)$ là một thống kê đủ, theo định nghĩa của tính đủ, phân phối có điều kiện của $X$ (và do đó của bất kỳ hàm nào của $X$) khi biết $S(X)$ hoàn toàn không phụ thuộc vào tham số $\theta$. Vì vậy, $\psi(S)$ là một thống kê xác định, không chứa $\theta$.
> 
> **Bước 2: Lập hàm hiệu số và kiểm tra kỳ vọng**
> 
> Xét biến ngẫu nhiên là hiệu giữa thống kê $T(X)$ và ước lượng $\psi\big(S(X)\big)$:
> $$D(X) := T(X) - \psi\big(S(X)\big)$$
> Thay $S(X) = h\big(T(X)\big)$ vào biểu thức của $D(X)$, ta thấy $D(X)$ thực chất là một hàm chỉ phụ thuộc vào $T(X)$:
> $$D(X) = T(X) - \psi\big(h(T(X))\big) =: g\big(T(X)\big)$$
> 
> Ta tính kỳ vọng của $g\big(T(X)\big)$ dưới tham số $\theta$ bằng định lý kỳ vọng lặp:
> $$\mathbb{E}_\theta\big[g(T)\big] = \mathbb{E}_\theta\big[T(X) - \psi(S(X))\big] = \mathbb{E}_\theta[T(X)] - \mathbb{E}_\theta\Big[\mathbb{E}\big[T(X) \mid S(X)\big]\Big]$$
> Áp dụng luật kỳ vọng toàn phần:
> $$\mathbb{E}_\theta\Big[\mathbb{E}\big[T(X) \mid S(X)\big]\Big] = \mathbb{E}_\theta[T(X)]$$
> Do đó:
> $$\mathbb{E}_\theta\big[g(T(X))\big] = \mathbb{E}_\theta[T(X)] - \mathbb{E}_\theta[T(X)] = 0, \quad \forall \theta \in \Theta$$
> 
> **Bước 3: Vận dụng tính đầy đủ để kết luận**
> 
> Vì họ phân phối của $T(X)$ là đầy đủ theo giả thiết, phương trình kỳ vọng triệt tiêu $\mathbb{E}_\theta\big[g(T)\big] = 0$ với mọi $\theta \in \Theta$ dẫn đến:
> $$\mathbb{P}_\theta\big(g(T(X)) = 0\big) = 1, \quad \forall \theta \in \Theta$$
> Nghĩa là:
> $$T(X) = \psi\big(S(X)\big) \quad \text{hầu chắc chắn } P_\theta, \quad \forall \theta \in \Theta$$
> 
> Như vậy, $T(X)$ là một hàm đo được của thống kê đủ tối tiểu $S(X)$ (hầu chắc chắn). Kết hợp với việc $S(X) = h\big(T(X)\big)$, hai thống kê $T(X)$ và $S(X)$ tương đương nhau về mặt phân hoạch không gian mẫu. 
> 
> Do đó, $T(X)$ là một thống kê đủ tối tiểu.

> [!exm] Phản ví dụ: Chiều ngược của Định lý Bahadur không đúng
> 
> Xét mẫu ngẫu nhiên độc lập cùng phân phối:
> $$X_i \overset{\text{i.i.d.}}{\sim} \mathcal{U}\left(\theta - \frac{1}{2}, \, \theta + \frac{1}{2}\right), \quad \theta \in \mathbb{R}$$
> 
> **1. Thống kê đủ tối tiểu:**
> Theo tiêu chuẩn tỉ số hợp lý Lehmann–Scheffé, cặp giá trị cực trị:
> $$T(X) = \big(X_{(1)}, \, X_{(n)}\big)$$
> là một **thống kê đủ tối tiểu** cho tham số $\theta$ với số chiều $\dim T = 2$.
> 
> **2. Kiểm tra tính đầy đủ của $T(X)$:**
> Xét khoảng biến thiên mẫu $R(X) := X_{(n)} - X_{(1)}$, đây là một hàm đo được của $T(X)$.
> 
> Biểu diễn các quan sát qua sai số chuẩn hóa $X_i = \theta + Z_i$ với $Z_i \overset{\text{i.i.d.}}{\sim} \mathcal{U}(-1/2, 1/2)$, ta có:
> $$R(X) = X_{(n)} - X_{(1)} = Z_{(n)} - Z_{(1)}$$
> Do đó, $R(X)$ là một thống kê phụ có hàm mật độ hoàn toàn độc lập với $\theta$. Kỳ vọng của nó là một hằng số xác định $c \in \mathbb{R}$ không phụ thuộc vào $\theta$:
> $$\mathbb{E}_\theta[R(X)] = c = \frac{n - 1}{n + 1}, \quad \forall \theta \in \mathbb{R}$$
> 
> Thiết lập hàm hiệu số của $T(X)$:
> $$g(T) := R(X) - c = \big(X_{(n)} - X_{(1)}\big) - c$$
> 
> Tính kỳ vọng của $g(T)$ với mọi $\theta \in \mathbb{R}$:
> $$\mathbb{E}_\theta[g(T)] = \mathbb{E}_\theta[R(X)] - c = c - c = 0, \quad \forall \theta \in \mathbb{R}$$
> 
> Tuy nhiên, vì $R(X)$ là một biến ngẫu nhiên liên tục có hàm mật độ xác suất thực sự, xác suất tại một giá trị đơn lẻ luôn triệt tiêu:
> $$\mathbb{P}_\theta\big(g(T) = 0\big) = \mathbb{P}_\theta\big(R(X) = c\big) = 0 \neq 1, \quad \forall \theta \in \mathbb{R}$$
> 
> **3. Kết luận:**
> Tồn tại hàm $g(T) \not\equiv 0$ thỏa mãn $\mathbb{E}_\theta[g(T)] = 0$ với mọi $\theta \in \mathbb{R}$, suy ra họ phân phối của $T(X)$ **không đầy đủ**.
> 
> Như vậy, $T(X)$ là thống kê đủ tối tiểu nhưng không phải là thống kê đầy đủ. Chiều ngược lại của Định lý Bahadur nói chung không đúng.

> [!prp] Liên hệ Thống kê Đầy đủ và Thống kê Phụ qua phép biến đổi đo được
> 
> Cho mô hình thống kê $\{P_\theta : \theta \in \Theta\}$ và một thống kê $T(X)$.
> 
> 1. **Tính bất tương thích với thống kê phụ (Tính chất loại trừ):**  
>    Nếu tồn tại hàm đo được $r$ sao cho $A := r(T)$ là một thống kê phụ và $A$ không phải là hằng số hầu chắc chắn, thì $T(X)$ **không thể** là một thống kê đầy đủ.
> 
> 2. **Tính kế thừa qua phép biến đổi (Tính truyền xuống):**  
>    Nếu $T(X)$ là một thống kê đầy đủ, thì với mọi hàm đo được $r$, thống kê rút gọn $T^* := r(T)$ cũng là một thống kê đầy đủ.  
>    *(Chiều ngược lại nói chung không đúng: $r(T)$ đầy đủ không suy ra $T$ đầy đủ, điển hình khi $r$ là hàm hằng).*

> [!prf] 
> 
> **Chứng minh Phần 1:**  
> Vì $A = r(T)$ là thống kê phụ, phân phối xác suất của nó hoàn toàn không phụ thuộc vào $\theta$.
> 
> Giả sử $A$ có kỳ vọng hữu hạn (nếu kỳ vọng không tồn tại, ta xét hàm bị chặn $\mathbb{I}_B(A)$ với $0 < P(A \in B) < 1$). Khi đó kỳ vọng của $A$ là hằng số $c \in \mathbb{R}$ độc lập với $\theta$:
> $$\mathbb{E}_\theta[r(T)] = c, \quad \forall \theta \in \Theta$$
> 
> Xét hàm $g(T) := r(T) - c$. Lấy kỳ vọng hai vế:
> $$\mathbb{E}_\theta[g(T)] = \mathbb{E}_\theta[r(T)] - c = c - c = 0, \quad \forall \theta \in \Theta$$
> 
> Do $r(T)$ không phải là hằng số hầu chắc chắn, ta có:
> $$P_\theta\big(g(T) = 0\big) = P_\theta\big(r(T) = c\big) < 1$$
> Tồn tại hàm $g(T) \not\equiv 0$ có kỳ vọng luôn bằng $0$, kéo theo họ phân phối của $T(X)$ không đầy đủ.
> 
> **Chứng minh Phần 2:**  
> 
> Chiều ($\implies$) (Tính kế thừa của tính đầy đủ):  
> Giả sử tồn tại một hàm đo được $h$ sao cho:
> $$\mathbb{E}_\theta\big[h(T^*)\big] = 0, \quad \forall \theta \in \Theta \iff \mathbb{E}_\theta\big[h(r(T))\big] = 0, \quad \forall \theta \in \Theta$$
> Đặt $g(t) := (h \circ r)(t) = h(r(t))$. Biểu thức trở thành:
> $$\mathbb{E}_\theta[g(T)] = 0, \quad \forall \theta \in \Theta$$
> Do $T(X)$ là thống kê đầy đủ theo giả thiết, điều kiện kỳ vọng triệt tiêu trên lập tức kéo theo:
> $$P_\theta\big(g(T) = 0\big) = 1, \quad \forall \theta \in \Theta \iff P_\theta\big(h(T^*) = 0\big) = 1, \quad \forall \theta \in \Theta$$
> Theo định nghĩa, $T^* = r(T)$ là một thống kê đầy đủ.
> 
> Bác bỏ chiều ($\impliedby$) (Chỉ ra phản ví dụ):  
> Mệnh đề đảo "$r(T)$ đầy đủ suy ra $T$ đầy đủ" không đúng. Ta chỉ ra một phản ví dụ cụ thể:  
> Xét mẫu ngẫu nhiên $X_1, X_2 \overset{\text{i.i.d.}}{\sim} \text{Bernoulli}(\theta)$ với $\theta \in (0, 1)$.  
> 
> 1. Thống kê ban đầu $T = (X_1, X_2)$ không đầy đủ:  
>  Xét hàm $g(T) = X_1 - X_2 \not\equiv 0$, ta có:
>  $$\mathbb{E}_\theta[g(T)] = \mathbb{E}_\theta[X_1] - \mathbb{E}_\theta[X_2] = \theta - \theta = 0, \quad \forall \theta \in (0, 1)$$
>  nhưng $P_\theta(X_1 - X_2 = 0) = \theta^2 + (1 - \theta)^2 < 1$. Do đó $T$ không đầy đủ.
>  
> 2. Xét phép biến đổi tổng $r(x_1, x_2) = x_1 + x_2$, khi đó $T^* = r(T) = X_1 + X_2 \sim \text{Binomial}(2, \theta)$.  
>  Với mọi hàm $h(T^*)$, điều kiện:
>  $$\mathbb{E}_\theta[h(T^*)] = \sum_{k=0}^2 h(k) \binom{2}{k} \theta^k (1 - \theta)^{2-k} = 0, \quad \forall \theta \in (0, 1)$$
>  Đây là đa thức bậc hai theo $\theta$ đồng nhất bằng $0$ trên $(0, 1)$, buộc $h(0) = h(1) = h(2) = 0$, tức $P_\theta(h(T^*) = 0) = 1$.  
>  Do đó $T^* = r(T)$ là **thống kê đầy đủ**.
>  
> Như vậy, $r(T)$ đầy đủ nhưng $T$ không đầy đủ.

> [!thm] Định lý Basu 
> 
> Xét mô hình thống kê $\{P_\theta : \theta \in \Theta\}$. Nếu $T(X)$ là một **thống kê đủ và đầy đủ** (complete sufficient statistic), thì $T(X)$ độc lập ngẫu nhiên với mọi **thống kê phụ** (ancillary statistic).

> [!prf] 
> 
> Giả sử $U(X)$ là một thống kê phụ tùy ý. Để chứng minh $T(X)$ và $U(X)$ độc lập ngẫu nhiên, ta cần chứng minh với mọi tập Borel khả dĩ $A$ thuộc không gian giá trị của $U$, xác suất có điều kiện thỏa mãn:
> $$P_\theta(U \in A \mid T) = P_\theta(U \in A) \quad \text{hầu chắc chắn } P_\theta, \quad \forall \theta \in \Theta$$
> 
> **Bước 1: Khai thác tính chất của Thống kê Đủ và Thống kê Phụ**
> 
> * Do $T(X)$ là thống kê đủ, theo định nghĩa, phân phối có điều kiện của bất kỳ biến ngẫu nhiên nào của mẫu khi biết $T$ không phụ thuộc vào tham số $\theta$. Do đó, xác suất có điều kiện:
>   $$g(T) := P(U \in A \mid T) = \mathbb{E}\big[\mathbb{I}_A(U) \mid T\big]$$
>   là một thống kê xác định, hoàn toàn không phụ thuộc vào $\theta$.
> 
> * Do $U(X)$ là thống kê phụ, phân phối của nó không phụ thuộc vào $\theta$. Do đó, xác suất không điều kiện là một hằng số $c \in [0, 1]$ độc lập với $\theta$:
>   $$P_\theta(U \in A) = c, \quad \forall \theta \in \Theta$$
> 
> **Bước 2: Thiết lập phương trình kỳ vọng triệt tiêu**
> 
> Áp dụng luật kỳ vọng toàn phần (Law of Total Expectation):
> $$\mathbb{E}_\theta\big[g(T)\big] = \mathbb{E}_\theta\big[P(U \in A \mid T)\big] = \mathbb{E}_\theta\big[\mathbb{E}(\mathbb{I}_A(U) \mid T)\big] = \mathbb{E}_\theta[\mathbb{I}_A(U)] = P_\theta(U \in A) = c$$
> 
> Xét hàm hiệu số $h(T) := g(T) - c$. Lấy kỳ vọng hai vế:
> $$\mathbb{E}_\theta\big[h(T)\big] = \mathbb{E}_\theta\big[g(T) - c\big] = \mathbb{E}_\theta\big[g(T)\big] - c = c - c = 0, \quad \forall \theta \in \Theta$$
> 
> **Bước 3: Vận dụng tính đầy đủ để kết luận tính độc lập**
> 
> Do $T(X)$ là một thống kê đầy đủ, điều kiện $\mathbb{E}_\theta[h(T)] = 0$ với mọi $\theta \in \Theta$ buộc hàm $h(T)$ phải triệt tiêu hầu chắc chắn:
> $$P_\theta\big(h(T) = 0\big) = 1, \quad \forall \theta \in \Theta \iff P_\theta\big(g(T) = c\big) = 1, \quad \forall \theta \in \Theta$$
> 
> Thay lại định nghĩa của $g(T)$ và $c$:
> $$P(U \in A \mid T) = P_\theta(U \in A) \quad \text{hầu chắc chắn } P_\theta, \quad \forall \theta \in \Theta$$
> 
> Đẳng thức này đúng với mọi tập đo được $A$, suy ra phân phối có điều kiện của $U$ khi biết $T$ trùng với phân phối biên duyên của $U$. 
> 
> Do đó, $T(X)$ độc lập ngẫu nhiên với $U(X)$.