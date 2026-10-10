
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
> Biểu thức này  **không phụ thuộc vào $\theta$**. Theo định nghĩa, $T(X)$ là thống kê đủ cho $\theta$.
> 
> Chiều ($\implies$): Giả sử $T(X)$ là thống kê đủ, chứng minh tồn tại dạng phân tích.
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
> Chiều ($\implies$): Giả sử $T(x) = T(y)$
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
> * **Phương sai vô điều kiện (trung bình trên mọi lần tung đồng xu):**
>   $$\text{Var}(\hat{\theta}) = \mathbb{E}\big[\text{Var}(X \mid K)\big] + \text{Var}\big(\mathbb{E}[X \mid K]\big) = \left( \frac{1}{2}\cdot 1^2 + \frac{1}{2}\cdot 100^2 \right) + 0 = 5000.5$$
>   Khoảng tin cậy $95\%$ vô điều kiện báo cáo cho thực nghiệm là:
>   $$X \pm 1.96 \sqrt{5000.5} \approx X \pm 138.6$$
> 
> * **Nghịch lý thực tế:**
>   * Khi đồng xu rơi vào $K = 1$: Ta cầm trong tay kết quả từ máy đo chính xác ($\sigma_1 = 1$). Báo cáo sai số $\pm 138.6$ là hoàn toàn vô lý vì đã thổi phồng độ bất định lên hơn 70 lần.
>   * Khi đồng xu rơi vào $K = 2$: Ta cầm kết quả từ máy kém ($\sigma_2 = 100$). Khoảng sai số $\pm 138.6$ lại quá lạc quan so với độ lệch chuẩn thực tế của thiết bị.
> 
> **3. Sự xuất hiện và Vai trò của Thống kê phụ (Ancillary Statistic):**
> Xét riêng thành phần $K = \pi_1(T)$:
> * Phân phối của biến ngẫu nhiên $K$:
>   $$\mathbb{P}_\theta(K = 1) = \frac{1}{2}, \quad \mathbb{P}_\theta(K = 2) = \frac{1}{2}, \quad \forall \theta \in \mathbb{R}$$
>   Phân phối của $K$ hoàn toàn độc lập với tham số vị trí $\theta$.
> * Tuy $K$ không mang thông tin về độ lớn của $\theta$, nó lại xác định bối cảnh thực nghiệm và thước đo độ chính xác của mẫu đo:
>   $$\text{Var}(X \mid K = 1) = 1 \quad \text{và} \quad \text{Var}(X \mid K = 2) = 10000$$
> 
> Một thống kê có phân phối xác suất độc lập với tham số $\theta$ như $K$ được gọi là một **Thống kê phụ (Ancillary Statistic)**.
> 
> Thí nghiệm của Cox chứng minh rằng: Suy diễn thống kê hợp lý không được lấy trung bình cào bằng trên toàn bộ không gian mẫu, mà phải được điều kiện hóa trên giá trị quan sát của thống kê phụ $f(x \mid K = k, \, \theta)$ để phản ánh đúng độ tin cậy thực nghiệm.

> [!def] Định nghĩa Thống kê Phụ Ancillary Statistic)
> Một Thống ke $A(X)$ được gọi là Thống kê Phụ nếu phân phối của nó không phụ thuộc vào tham số $\theta$.

> [!lem] (Đổi biến Ngẫu nhiên và Phép biến đổi Affine Bảo toàn Thứ tự)
> 
> Cho vector ngẫu nhiên liên tục $X = (X_1, \dots, X_n)$ có miền giá trị $\mathcal{X} \subseteq \mathbb{R}^n$ và hàm mật độ xác suất đồng thời $f_X(x)$.
> 
> **1. Công thức Đổi biến Tổng quát:**
> Giả sử ánh xạ $g: \mathcal{X} \to \mathcal{U} \subseteq \mathbb{R}^n$ là một vi phôi (song ánh khả vi liên tục hai chiều với Jacobian $\det J_g(x) \neq 0, \ \forall x \in \mathcal{X}$). Khi đó, vector ngẫu nhiên $U = g(X)$ có hàm mật độ xác suất:
> $$f_U(u) = f_X\big(g^{-1}(u)\big) \cdot \left| \det J_{g^{-1}}(u) \right| = \frac{f_X\big(g^{-1}(u)\big)}{\left| \det J_g\big(g^{-1}(u)\big) \right|}, \quad \forall u \in \mathcal{U}$$
> 
> **2. Hệ quả cho Phép chuẩn hóa Vị trí – Tỉ lệ (Location-Scale Transformation):**
> Xét phép biến đổi affine độc lập trên từng tọa độ với tham số vị trí $\mu \in \mathbb{R}$ và tham số tỉ lệ $\sigma > 0$:
> $$g_{\mu, \sigma}(x) = \left( \frac{x_1 - \mu}{\sigma}, \, \frac{x_2 - \mu}{\sigma}, \, \dots, \, \frac{x_n - \mu}{\sigma} \right)$$
> 
> Đặt $Z = g_{\mu, \sigma}(X)$ (tức $Z_i = \dfrac{X_i - \mu}{\sigma}$). Khi đó:
> 
> * **Độ co giãn mật độ (Jacobian):** Ma trận Jacobi là ma trận đường chéo $J_{g_{\mu, \sigma}}(x) = \frac{1}{\sigma} I_n$, suy ra $\det J_{g_{\mu, \sigma}}(x) = \sigma^{-n}$. Do đó:
>   $$f_Z(z \mid \mu, \sigma) = \sigma^n f_X(\sigma z + \mu \mathbf{1} \mid \mu, \sigma)$$
> 
> * **Bảo toàn thứ tự (Tính đơn điệu tăng ngặt):** Vì $\sigma > 0$, hàm vô hướng $h(t) = \dfrac{t - \mu}{\sigma}$ là hàm tăng ngặt trên $\mathbb{R}$:
>   $$\forall i, j \in \{1, \dots, n\}: \quad x_i \le x_j \iff \frac{x_i - \mu}{\sigma} \le \frac{x_j - \mu}{\sigma} \iff z_i \le z_j$$
>   Hệ quả là thứ tự của các quan sát được bảo toàn nguyên vẹn:
>   $$Z_{(i)} = \frac{X_{(i)} - \mu}{\sigma}, \quad \forall i = 1, \dots, n$$
>   Đặc biệt, các thống kê thứ tự cực trị thỏa mãn:
>   $$Z_{(1)} = \frac{X_{(1)} - \mu}{\sigma} \quad \text{và} \quad Z_{(n)} = \frac{X_{(n)} - \mu}{\sigma}$$

> [!obs] (Ý nghĩa Suy diễn và Phép chuẩn hóa của Thống kê phụ)
> 
> **1. Chiều dữ liệu và Cấu trúc tách không gian:**
> Xét mẫu $X = (X_1, \dots, X_n) \in \mathbb{R}^n$ trong mô hình Location-Scale với hàm mật độ $f(x \mid \mu, \sigma) = \frac{1}{\sigma^n} \prod_{i=1}^n f_0\left(\frac{x_i - \mu}{\sigma}\right)$, trong đó tham số $(\mu, \sigma) \in \mathbb{R} \times (0, +\infty)$ có số chiều $\dim \Theta = 2$.  
> 
> Tồn tại phép biến đổi song ánh $1-1$ trên không gian mẫu $X \longleftrightarrow \big( \hat{\mu}(X), \, \hat{\sigma}(X), \, A(X) \big)$ giúp phân rã $n$ bậc tự do: 
> $$
> \mathbb{R}^n \longleftrightarrow \underbrace{\mathbb{R} \times (0, +\infty)}_{\dim = 2 \ (\text{mang thông tin } \mu, \sigma)} \times \underbrace{\mathcal{A}}_{\dim = n - 2 \ (\text{thống kê phụ } A(X))}  
> $$
> 
> **2. Chứng minh: Phép chuẩn hóa triệt tiêu tham số:**
> Áp dụng Bổ đề đổi biến affine, đặt vector chuẩn hóa:
> $$Z_i := \frac{X_i - \mu}{\sigma} \overset{\text{i.i.d.}}{\sim} f_0(z) \implies Z = (Z_1, \dots, Z_n) \sim \prod_{i=1}^n f_0(z_i)$$
> Phân phối của vector $Z$  độc lập với cặp tham số $(\mu, \sigma)$.
> 
> * **Trường hợp mô hình Vị trí ($\sigma = 1$ cố định, $\mu$ chưa biết):**
> Xét thống kê vector sai phân:  
> 
> $$
> D(X) := (X_2 - X_1, \, X_3 - X_1, \, \dots, \, X_n - X_1) \in \mathbb{R}^{n-1}  
> $$
> Biểu diễn từng thành phần qua $Z_i = X_i - \mu$:  
> 
> $$
> X_i - X_1 = (Z_i + \mu) - (Z_1 + \mu) = Z_i - Z_1, \quad \forall i = 2, \dots, n  
> $$
> Suy ra:  
> 
> $$
> D(X) = (Z_2 - Z_1, \, Z_3 - Z_1, \, \dots, \, Z_n - Z_1) =: h(Z)  
> $$
> Tham số vị trí $\mu$ bị triệt tiêu  qua phép trừ. Vì $D(X) = h(Z)$ là hàm của riêng vector $Z$, phân phối của $D(X)$ độc lập với $\mu$. Do đó, $D(X)$ là một **thống kê phụ** $(n-1)$ chiều.  
> 
> * **Trường hợp mô hình Vị trí – Tỉ lệ (Cả $\mu$ và $\sigma$ đều chưa biết):**
> Xét thống kê chuẩn hóa Studentized $W(X) = (W_1, \dots, W_n)$ với $W_i := \dfrac{X_i - \bar{X}}{S_X}$, trong đó $\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$ và $S_X = \sqrt{\frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2}$.  
> 
> Biểu diễn các đại lượng mẫu qua $X_i = \sigma Z_i + \mu$:  
> 
> $$
> \bar{X} = \sigma \bar{Z} + \mu \quad \text{và} \quad S_X = \sigma S_Z  
> $$
> Thay trực tiếp vào từng tọa độ của $W(X)$:  
> 
> $$
> W_i(X) = \frac{(\sigma Z_i + \mu) - (\sigma \bar{Z} + \mu)}{\sigma S_Z} = \frac{\sigma(Z_i - \bar{Z})}{\sigma S_Z} = \frac{Z_i - \bar{Z}}{S_Z}, \quad \forall i = 1, \dots, n  
> $$
> Suy ra:  
> 
> $$
> W(X) = \left( \frac{Z_1 - \bar{Z}}{S_Z}, \, \dots, \, \frac{Z_n - \bar{Z}}{S_Z} \right) =: g(Z)  
> $$
> Cả hai tham số $\mu$ và $\sigma$ đều bị giản ước . Vì $W(X) = g(Z)$ là hàm của riêng vector $Z$, phân phối của $W(X)$ độc lập với bộ tham số $(\mu, \sigma)$. Do đó, $W(X)$ là một thống kê phụ.  
>
> **3. Ý nghĩa Suy diễn: Đo lường chất lượng mẫu (Precision Conditioning):**
> Mặc dù $\mathbb{P}_{\mu, \sigma}(A \in B)$ không phụ thuộc $(\mu, \sigma)$ (không chứa thông tin vị trí hay độ co giãn tổng thể), giá trị thực tế $a = A(x)$ đo lường hình dáng thực nghiệm:
> * Xét ví dụ cụ thể $\mathcal{U}\left(\mu - \frac{\sigma}{2}, \, \mu + \frac{\sigma}{2}\right)$ với $\sigma = 1$: Thống kê phụ $R(X) = X_{(n)} - X_{(1)} = Z_{(n)} - Z_{(1)} \in (0, 1)$.
> * Chiều rộng miền khả dĩ chứa tham số vị trí $\mu$:
>   $$\text{Length}\left( \left[X_{(n)} - \frac{1}{2}, \, X_{(1)} + \frac{1}{2}\right] \right) = 1 - \big(X_{(n)} - X_{(1)}\big) = 1 - R(x)$$
> * Khi $R(x) \to 1$: Độ dài tiến về $0$, thông tin về $\mu$ từ mẫu cực kỳ chính xác.
> * Khi $R(x) \to 0$: Độ dài tiến về $1$, độ bất định về $\mu$ đạt mức tối đa.
> 
> Thống kê phụ đóng vai trò ấn định "thước đo độ tin cậy" (ancillary precision) của mẫu quan sát, trả lời câu hỏi "Dữ liệu nẳm trong ngữ cảnh như thế nào", thay vì câu hỏi "Tham số bằng bao nhiêu cho hợp lý".

> [!exm] Ví dụ: Thống kê Phụ cho một Phân phối Đều
> 
> Xét mẫu ngẫu nhiên $X = (X_1, \dots, X_n)$ độc lập cùng phân phối:
> $$X_i \overset{\text{i.i.d.}}{\sim} \mathcal{U}\left(\theta - \frac{1}{2}, \, \theta + \frac{1}{2}\right), \quad \theta \in \mathbb{R}$$
> Mục tiêu là tìm một thống kê phụ $A(X)$, tức là một hàm của dữ liệu có phân phối xác suất hoàn toàn độc lập với tham số $\theta$.
> 
> **Bước 1: Xác định Thống kê đủ và Thống kê đủ tối tiểu**
> 
> Hàm mật độ đồng thời của mẫu quan sát $x = (x_1, \dots, x_n)$ là:
> $$f(x \mid \theta) = \prod_{i=1}^n \mathbb{I}_{\left[\theta - \frac{1}{2}, \, \theta + \frac{1}{2}\right]}(x_i) = \mathbb{I}_{\left[\theta - \frac{1}{2}, \, +\infty\right)}\big(x_{(1)}\big) \cdot \mathbb{I}_{\left(-\infty, \, \theta + \frac{1}{2}\right]}\big(x_{(n)}\big) \cdot 1$$
> 
> * **Tính đủ (Định lý Tách Fisher–Neyman):**
>   Đặt $g\big(x_{(1)}, x_{(n)}; \, \theta\big) = \mathbb{I}_{\left[\theta - 1/2, \, +\infty\right)}\big(x_{(1)}\big) \cdot \mathbb{I}_{\left(-\infty, \, \theta + 1/2\right]}\big(x_{(n)}\big)$ và $h(x) = 1$. Theo định lý tách, cặp giá trị cực trị là thống kê đủ:
>   $$T(X) = \big(X_{(1)}, \, X_{(n)}\big)$$
> 
> * **Tính tối tiểu (Tiêu chuẩn Lehmann–Scheffé):**
>   Tỉ số hợp lý giữa hai mẫu $x$ và $y$ là hằng số theo $\theta$ khi và chỉ khi hai hàm chỉ thị theo $\theta$ trùng miền xác định:
>   $$\left[x_{(n)} - \frac{1}{2}, \, x_{(1)} + \frac{1}{2}\right] = \left[y_{(n)} - \frac{1}{2}, \, y_{(1)} + \frac{1}{2}\right] \iff \begin{cases} x_{(1)} = y_{(1)} \\ x_{(n)} = y_{(n)} \end{cases}$$
>   Do đó, $T(X) = \big(X_{(1)}, \, X_{(n)}\big)$ là thống kê đủ tối tiểu.
> 
> Vì $\dim T(X) = 2$ trong khi tham số $\dim \Theta = 1$, không gian dữ liệu rút gọn còn dư $2 - 1 = 1$ bậc tự do. Thống kê phụ sẽ được trích xuất từ chiều thông tin này.
> 
> **Bước 2: Chuẩn hóa theo nhóm dịch chuyển**
> 
> Phân phối $\mathcal{U}(\theta - 1/2, \theta + 1/2)$ thực chất là phân phối đều chuẩn tắc $\mathcal{U}(-1/2, 1/2)$ bị tịnh tiến gốc tọa độ đi một đoạn $\theta$. Ta biểu diễn mỗi quan sát dưới dạng tổng của tham số vị trí và sai số chuẩn hóa độc lập với $\theta$:
> $$X_i = \theta + Z_i, \quad \text{với } Z_i \overset{\text{i.i.d.}}{\sim} \mathcal{U}\left(-\frac{1}{2}, \, \frac{1}{2}\right)$$
> Do phép cộng $\theta$ là ánh xạ đồng biến, thứ tự các quan sát được bảo toàn:
> $$X_{(1)} = \theta + Z_{(1)} \quad \text{và} \quad X_{(n)} = \theta + Z_{(n)}$$
> trong đó vector $(Z_{(1)}, Z_{(n)})$ có phân phối hoàn toàn không chứa $\theta$.
> 
> **Bước 3: Xác định phân phối phụ:**
> 
> Nhìn vào hai tọa độ của $T(X)$:
> $$\begin{cases} X_{(1)} = \theta + Z_{(1)} \\ X_{(n)} = \theta + Z_{(n)} \end{cases}$$
> Tham số $\theta$ xuất hiện dưới dạng cộng tính đồng bậc ở cả hai thành phần. Để triệt tiêu một đại lượng tịnh tiến $+\theta$ mà không làm biến dạng cấu trúc ngẫu nhiên, phép biển đổi tự nhiên nhất là phép trừ:
> $$A(X) := X_{(n)} - X_{(1)} = \big(\theta + Z_{(n)}\big) - \big(\theta + Z_{(1)}\big) = Z_{(n)} - Z_{(1)} =: R(X)$$
> 
> **Bước 4: Kiểm chứng tính phụ qua hàm phân phối xác suất**
> 
> Vì $R(X) = Z_{(n)} - Z_{(1)}$, với mọi $r \in (0, 1)$, hàm phân phối tích lũy của $R(X)$ là:
> $$F_R(r \mid \theta) = \mathbb{P}_\theta\big(X_{(n)} - X_{(1)} \le r\big) = \mathbb{P}\big(Z_{(n)} - Z_{(1)} \le r\big) = n r^{n-1} - (n - 1) r^n$$
> Hàm phân phối $F_R(r \mid \theta)$ và hàm mật độ tương ứng $f_R(r) = n(n-1)r^{n-2}(1-r)$ hoàn toàn không chứa $\theta$.
> 
> Theo đúng định nghĩa, khoảng biến thiên mẫu $R(X) = X_{(n)} - X_{(1)}$ là một **thống kê phụ** cho tham số $\theta$.

# Thống kê đầy đủ 

> [!exm] Bài toán Ước lượng trên Phân phối Bernoulli
> 
> Xét quan sát đơn lẻ từ phân phối Bernoulli:
> $$X \sim \text{Bernoulli}(\theta), \quad \theta \in \Theta$$
> Không gian mẫu chỉ gồm hai phần tử $\mathcal{X} = \{0, 1\}$. 
> 
> Để kiểm tra xem một thống kê có chứa "thành phần nhiễu không chệch của số không" hay không, ta tìm một hàm thực $g(X)$ thỏa mãn điều kiện kỳ vọng triệt tiêu:
> $$\mathbb{E}_\theta[g(X)] = 0$$
> Vì $X$ chỉ nhận hai giá trị $0$ và $1$, hàm $g$ được xác định hoàn toàn bởi hai số thực $a := g(0)$ và $b := g(1)$. Khai triển phương trình kỳ vọng:
> $$\mathbb{E}_\theta[g(X)] = g(0) \cdot \mathbb{P}_\theta(X = 0) + g(1) \cdot \mathbb{P}_\theta(X = 1) = a(1 - \theta) + b\theta = 0$$
> Biến đổi tương đương theo biến $\theta$:
> $$a + (b - a)\theta = 0$$
> 
> **Kịch bản 1: Xét trên một phân phối đơn lẻ cố định ($\Theta = \{\theta_0\}$)**
> Giả sử ta chỉ xét một phân phối chuẩn tắc cố định, chẳng hạn đồng xu cân đối với $\theta_0 = 0.5$:
> $$a + (b - a)(0.5) = 0 \iff 0.5a + 0.5b = 0 \iff b = -a$$
> Ta có vô số nghiệm phi tầm thường. Ví dụ chọn $a = 5, b = -5$, tức hàm:
> $$g(x) = \begin{cases} 5, & x = 0 \\ -5, & x = 1 \end{cases}$$
> Dù $g(X) \neq 0$ với mọi $x$, ta vẫn có $\mathbb{E}[g(X)] = 5(0.5) + (-5)(0.5) = 0$.
> 
> *Hệ quả thống kê:* Nếu tồn tại một ước lượng không chệch $T(X)$ cho một đại lượng nào đó, ta có thể cộng thêm bội số của $g(X)$ để tạo ra vô số ước lượng không chệch khác ($T + g, T + 2g, \dots$). Trên một phân phối đơn lẻ, điều kiện kỳ vọng bằng $0$ không đủ sức ép ước lượng về tính duy nhất.
> 
> **Kịch bản 2: Xét trên cả họ phân phối biến thiên ($\Theta = (0, 1)$)**
> Bây giờ ta nâng yêu cầu: phương trình kỳ vọng phải triệt tiêu **với mọi giá trị khả dĩ của tham số**:
> $$a + (b - a)\theta = 0, \quad \forall \theta \in (0, 1)$$
> Vế trái là một đa thức bậc nhất theo biến $\theta$. Một đa thức bậc nhất đồng nhất bằng $0$ trên một khoảng liên tục khi và chỉ khi tất cả các hệ số của nó đồng thời bằng $0$:
> $$\begin{cases} a = 0 \\ b - a = 0 \end{cases} \iff a = 0 \quad \text{và} \quad b = 0$$
> Kéo theo:
> $$g(0) = 0 \quad \text{và} \quad g(1) = 0 \implies \mathbb{P}_\theta(g(X) = 0) = 1, \quad \forall \theta \in (0, 1)$$
> 
> **Bản chất của Tính Đầy đủ (Completeness)**
> * Sự biến thiên của toàn bộ họ tham số $\{\mathbb{P}_\theta : \theta \in \Theta\}$ tạo ra một hệ vô hạn các ràng buộc, "quét sạch" toàn bộ không gian và ép mọi nghiệm $g(X)$ phi tầm thường phải triệt tiêu về $0$.
> * Một họ phân phối có tính chất này được gọi là **họ phân phối đầy đủ**. Nhờ tính đầy đủ, nếu tồn tại một ước lượng không chệch là hàm của thống kê đó, ước lượng đó được bảo đảm là **duy nhất**.