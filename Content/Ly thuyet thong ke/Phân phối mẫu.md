
# Mẫu ngẫu nhiên

> [!def] (Định nghĩa mẫu)
> Các biến ngẫu nhiên $X_{1}, X_{2}, \dots, X_{n}$ được gọi là mẫu ngẫu nhiên cỡ $n$ chọn từ tổng thể có phân phối $F_{\theta}(x)$ (hoặc pdf $f_{\theta}(x)$). Nếu chúng độc lập với nhau và mỗi $X_{i}$ có cùng pdf $f_{\theta}(x)$ (hay pmf nếu $X_{i}$ rời rạc). Kí hiệu $X_{1}, X_{2}, \dots X_{n} \overset{\text{i.i.d.}}{\sim} f_{\theta}\left(x\right)$ (hoặc $f(x \mid \theta)$) 

> [!def] 
> Giả sử $X_1, \dots, X_n$ là một mẫu ngẫu nhiên kích thước $n$ từ một tổng thể và $T(x_1, \dots, x_n)$ là một hàm nhận giá trị thực hoặc giá trị vector có miền xác định chứa không gian mẫu của $(X_1, \dots, X_n)$. Khi đó, biến ngẫu nhiên hoặc vector ngẫu nhiên $Y = T(X_1, \dots, X_n)$ được gọi là một thống kê (*statistic*). Phân phối xác suất của một thống kê $Y$ được gọi là phân phối mẫu (*sampling distribution*) của $Y$.

> [!def] 
> Trung bình mẫu (*sample mean*) là trung bình cộng của các giá trị trong một mẫu ngẫu nhiên. Nó thường được ký hiệu bởi
> $$\bar{X} = \frac{X_1 + \dots + X_n}{n} = \frac{1}{n} \sum_{i=1}^n X_i.$$

> [!def] 
> Phương sai mẫu (*sample variance*) là thống kê được định nghĩa bởi
> $$S^2 = \frac{1}{n - 1} \sum_{i=1}^n (X_i - \bar{X})^2.$$
> Độ lệch chuẩn mẫu (*sample standard deviation*) là thống kê được định nghĩa bởi $S = \sqrt{S^2}$.

> [!def] 
> Giả sử $x_1, \dots, x_n$ là các số bất kỳ và $\bar{x} = (x_1 + \dots + x_n)/n$. Khi đó:
> 
> $$\min_a \sum_{i=1}^n (x_i - a)^2 = \sum_{i=1}^n (x_i - \bar{x})^2 \tag{1}$$ và
> $$(n - 1)s^2 = \sum_{i=1}^n (x_i - \bar{x})^2 = \sum_{i=1}^n x_i^2 - n\bar{x}^2 \tag{2}$$

> [!prf] 
> **a. Chứng minh (1)**
> 
> Thêm và bớt $\bar{x}$ vào trong biểu thức, ta có:
> 
> $$\begin{aligned}
> \sum_{i=1}^n (x_i - a)^2 &= \sum_{i=1}^n \big[(x_i - \bar{x}) + (\bar{x} - a)\big]^2 \\
> &= \sum_{i=1}^n (x_i - \bar{x})^2 + 2\sum_{i=1}^n (x_i - \bar{x})(\bar{x} - a) + \sum_{i=1}^n (\bar{x} - a)^2
> \end{aligned}$$
> 
> Xét số hạng chéo ở giữa, do $(\bar{x} - a)$ không phụ thuộc vào chỉ số $i$:
> 
> $$2\sum_{i=1}^n (x_i - \bar{x})(\bar{x} - a) = 2(\bar{x} - a) \sum_{i=1}^n (x_i - \bar{x}) = 2(\bar{x} - a) \left( \sum_{i=1}^n x_i - n\bar{x} \right)$$
> 
> Vì $\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i \implies \sum_{i=1}^n x_i = n\bar{x}$, nên:
> 
> $$\sum_{i=1}^n (x_i - \bar{x}) = n\bar{x} - n\bar{x} = 0$$
> 
> Do đó, số hạng chéo triệt tiêu và ta thu được:
> 
> $$\sum_{i=1}^n (x_i - a)^2 = \sum_{i=1}^n (x_i - \bar{x})^2 + n(\bar{x} - a)^2$$
> 
> Vì $n(\bar{x} - a)^2 \ge 0$ với mọi $a$, nên:
> 
> $$\sum_{i=1}^n (x_i - a)^2 \ge \sum_{i=1}^n (x_i - \bar{x})^2, \quad \forall a$$
> 
> Dấu đẳng thức xảy ra khi và chỉ khi $\bar{x} - a = 0 \iff a = \bar{x}$.  
> Vậy $\min_a \sum_{i=1}^n (x_i - a)^2 = \sum_{i=1}^n (x_i - \bar{x})^2$.
> 
> **b. Chứng minh (2)**
> 
> Theo định nghĩa của phương sai mẫu, $s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})^2$, do đó:
> 
> $$(n - 1)s^2 = \sum_{i=1}^n (x_i - \bar{x})^2$$
> 
> Khai triển trực tiếp tổng bình phương:
> 
> $$\begin{aligned}
> \sum_{i=1}^n (x_i - \bar{x})^2 &= \sum_{i=1}^n (x_i^2 - 2x_i\bar{x} + \bar{x}^2) \\
> &= \sum_{i=1}^n x_i^2 - 2\bar{x}\sum_{i=1}^n x_i + \sum_{i=1}^n \bar{x}^2 \\
> &= \sum_{i=1}^n x_i^2 - 2\bar{x}(n\bar{x}) + n\bar{x}^2 \\
> &= \sum_{i=1}^n x_i^2 - 2n\bar{x}^2 + n\bar{x}^2 \\
> &= \sum_{i=1}^n x_i^2 - n\bar{x}^2
> \end{aligned}$$
> 
> Kết hợp hai kết quả trên, ta có điều phải chứng minh:
> 
> $$(n - 1)s^2 = \sum_{i=1}^n (x_i - \bar{x})^2 = \sum_{i=1}^n x_i^2 - n\bar{x}^2$$

> [!prp] 
> Giả sử $X_1, \dots, X_n$ là một mẫu ngẫu nhiên từ một tổng thể và $g(x)$ là một hàm sao cho $\mathrm{E}g(X_1)$ và $\mathrm{Var}\,g(X_1)$ tồn tại. Khi đó:
> 
> $$\mathrm{E}\left(\sum_{i=1}^n g(X_i)\right) = n \big(\mathrm{E}g(X_1)\big) \tag{1}$$
> 
> và
> 
> $$\mathrm{Var}\left(\sum_{i=1}^n g(X_i)\right) = n \big(\mathrm{Var}\,g(X_1)\big). \tag{2}$$

> [!prf] 
> Mẫu ngẫu nhiên kích thước $n$ nghĩa là các biến ngẫu nhiên $X_1, \dots, X_n$ độc lập và có cùng phân phối xác suất.
> 
> Vì $X_1, \dots, X_n$ có cùng phân phối nên với hàm đo được $g$, các biến ngẫu nhiên $g(X_1), \dots, g(X_n)$ cũng có cùng phân phối xác suất. Do đó:
> 
> $$\mathrm{E}[g(X_i)] = \mathrm{E}[g(X_1)] =: \mu_g, \quad \forall i = 1, \dots, n$$
> 
> và
> 
> $$\mathrm{Var}(g(X_i)) = \mathrm{E}\big[(g(X_i) - \mu_g)^2\big] = \mathrm{Var}(g(X_1)), \quad \forall i = 1, \dots, n$$
> 
> **a. Chứng minh (1):**
> 
> Đặt $S = \sum_{i=1}^n g(X_i)$. Theo tính chất tuyến tính của tích phân Lebesgue xác định kỳ vọng:
> 
> $$\mathrm{E}(S) = \mathrm{E}\left(\sum_{i=1}^n g(X_i)\right) = \sum_{i=1}^n \mathrm{E}[g(X_i)] = \sum_{i=1}^n \mathrm{E}[g(X_1)] = n\big(\mathrm{E}g(X_1)\big).$$
> 
> **b. Chứng minh (2):**
> 
> Theo định nghĩa của phương sai:
> 
> $$\mathrm{Var}(S) = \mathrm{E}\big[(S - \mathrm{E}(S))^2\big] = \mathrm{E}\left[ \left( \sum_{i=1}^n g(X_i) - \sum_{i=1}^n \mu_g \right)^2 \right] = \mathrm{E}\left[ \left( \sum_{i=1}^n (g(X_i) - \mu_g) \right)^2 \right].$$
> 
> Khai triển bình phương của tổng:
> 
> $$\left( \sum_{i=1}^n (g(X_i) - \mu_g) \right)^2 = \sum_{i=1}^n (g(X_i) - \mu_g)^2 + \sum_{i \neq j} (g(X_i) - \mu_g)(g(X_j) - \mu_g).$$
> 
> Lấy kỳ vọng hai vế theo tính tuyến tính:
> 
> $$\mathrm{Var}(S) = \sum_{i=1}^n \mathrm{E}\big[(g(X_i) - \mu_g)^2\big] + \sum_{i \neq j} \mathrm{E}\big[(g(X_i) - \mu_g)(g(X_j) - \mu_g)\big].$$
> 
> Với mọi $i \neq j$, vì $X_i$ và $X_j$ độc lập nên hai biến ngẫu nhiên $g(X_i) - \mu_g$ và $g(X_j) - \mu_g$ độc lập. Do đó:
> 
> $$\mathrm{E}\big[(g(X_i) - \mu_g)(g(X_j) - \mu_g)\big] = \mathrm{E}[g(X_i) - \mu_g] \cdot \mathrm{E}[g(X_j) - \mu_g].$$
> 
> Mặt khác:
> 
> $$\mathrm{E}[g(X_i) - \mu_g] = \mathrm{E}[g(X_i)] - \mu_g = \mu_g - \mu_g = 0.$$
> 
> Suy ra:
> 
> $$\mathrm{E}\big[(g(X_i) - \mu_g)(g(X_j) - \mu_g)\big] = 0 \cdot 0 = 0, \quad \forall i \neq j.$$
> 
> Toàn bộ các số hạng chéo triệt tiêu, do đó:
> 
> $$\mathrm{Var}(S) = \sum_{i=1}^n \mathrm{E}\big[(g(X_i) - \mu_g)^2\big] = \sum_{i=1}^n \mathrm{Var}(g(X_i)) = \sum_{i=1}^n \mathrm{Var}(g(X_1)) = n\big(\mathrm{Var}\,g(X_1)\big).$$

> [!prp] 
> Giả sử $X_1, \dots, X_n$ là một mẫu ngẫu nhiên từ một tổng thể có kỳ vọng $\mu$ và phương sai $\sigma^2 < \infty$. Khi đó:
> 
> a. $\mathrm{E}\bar{X} = \mu$,
> b. $\mathrm{Var}\,\bar{X} = \frac{\sigma^2}{n}$,
> c. $\mathrm{E}S^2 = \sigma^2$.

> [!prf] 
> Vì $X_1, \dots, X_n$ là một mẫu ngẫu nhiên từ cùng một tổng thể nên các biến ngẫu nhiên $X_1, \dots, X_n$ độc lập và có cùng phân phối (i.i.d.) với $\mathrm{E}[X_i] = \mu$ và $\mathrm{Var}(X_i) = \sigma^2$ với mọi $i = 1, \dots, n$.
> 
> **a. Chứng minh $\mathrm{E}\bar{X} = \mu$**
> 
> Theo định nghĩa của trung bình mẫu:
> 
> $$\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i$$
> 
> Áp dụng tính tuyến tính của kỳ vọng:
> 
> $$\mathrm{E}\bar{X} = \mathrm{E}\left[ \frac{1}{n} \sum_{i=1}^n X_i \right] = \frac{1}{n} \sum_{i=1}^n \mathrm{E}[X_i] = \frac{1}{n} \sum_{i=1}^n \mu = \frac{1}{n} (n\mu) = \mu.$$
> 
> **b. Chứng minh $\mathrm{Var}\,\bar{X} = \frac{\sigma^2}{n}$**
> 
> Theo định nghĩa của phương sai và kết quả $\mathrm{E}\bar{X} = \mu$:
> 
> $$\mathrm{Var}\,\bar{X} = \mathrm{E}\big[(\bar{X} - \mu)^2\big] = \mathrm{E}\left[ \left( \frac{1}{n}\sum_{i=1}^n X_i - \mu \right)^2 \right] = \frac{1}{n^2} \mathrm{E}\left[ \left( \sum_{i=1}^n (X_i - \mu) \right)^2 \right].$$
> 
> Khai triển bình phương của tổng:
> 
> $$\left( \sum_{i=1}^n (X_i - \mu) \right)^2 = \sum_{i=1}^n (X_i - \mu)^2 + \sum_{i \neq j} (X_i - \mu)(X_j - \mu).$$
> 
> Lấy kỳ vọng hai vế theo tính tuyến tính:
> 
> $$\mathrm{E}\left[ \left( \sum_{i=1}^n (X_i - \mu) \right)^2 \right] = \sum_{i=1}^n \mathrm{E}\big[(X_i - \mu)^2\big] + \sum_{i \neq j} \mathrm{E}\big[(X_i - \mu)(X_j - \mu)\big].$$
> 
> Với mọi $i \neq j$, do $X_i$ và $X_j$ độc lập nên hai biến ngẫu nhiên $X_i - \mu$ và $X_j - \mu$ cũng độc lập, do đó:
> 
> $$\mathrm{E}\big[(X_i - \mu)(X_j - \mu)\big] = \mathrm{E}[X_i - \mu] \cdot \mathrm{E}[X_j - \mu] = (\mu - \mu)(\mu - \mu) = 0.$$
> 
> Toàn bộ các số hạng chéo triệt tiêu, do đó:
> 
> $$\mathrm{Var}\,\bar{X} = \frac{1}{n^2} \sum_{i=1}^n \mathrm{E}\big[(X_i - \mu)^2\big] = \frac{1}{n^2} \sum_{i=1}^n \mathrm{Var}(X_i) = \frac{1}{n^2} (n\sigma^2) = \frac{\sigma^2}{n}.$$
> 
> **c. Chứng minh $\mathrm{E}S^2 = \sigma^2$**
> 
> Từ đẳng thức đại số đã chứng minh ở trên:
> 
> $$(n - 1)S^2 = \sum_{i=1}^n X_i^2 - n\bar{X}^2 \implies S^2 = \frac{1}{n - 1}\left( \sum_{i=1}^n X_i^2 - n\bar{X}^2 \right).$$
> 
> Lấy kỳ vọng hai vế:
> 
> $$\mathrm{E}S^2 = \frac{1}{n - 1}\left( \sum_{i=1}^n \mathrm{E}[X_i^2] - n\mathrm{E}[\bar{X}^2] \right).$$
> 
> Áp dụng công thức liên hệ giữa phương sai và kỳ vọng bình phương $\mathrm{Var}(Y) = \mathrm{E}[Y^2] - (\mathrm{E}Y)^2 \implies \mathrm{E}[Y^2] = \mathrm{Var}(Y) + (\mathrm{E}Y)^2$:
> 
> * Với mỗi $X_i$: $\mathrm{E}[X_i^2] = \mathrm{Var}(X_i) + (\mathrm{E}X_i)^2 = \sigma^2 + \mu^2$.
> * Với $\bar{X}$: $\mathrm{E}[\bar{X}^2] = \mathrm{Var}\,\bar{X} + (\mathrm{E}\bar{X})^2 = \frac{\sigma^2}{n} + \mu^2$.
> 
> Thay các giá trị trên vào biểu thức của $\mathrm{E}S^2$:
> 
> $$\begin{aligned}
> \mathrm{E}S^2 &= \frac{1}{n - 1}\left( \sum_{i=1}^n (\sigma^2 + \mu^2) - n\left( \frac{\sigma^2}{n} + \mu^2 \right) \right) \\
> &= \frac{1}{n - 1}\left( n(\sigma^2 + \mu^2) - \sigma^2 - n\mu^2 \right) \\
> &= \frac{1}{n - 1}\left( n\sigma^2 + n\mu^2 - \sigma^2 - n\mu^2 \right) \\
> &= \frac{1}{n - 1}(n - 1)\sigma^2 = \sigma^2.
> \end{aligned}$$

> [!prp] (Định lý về phân phối và hàm sinh mômen của trung bình mẫu)
> Giả sử $X_1, \dots, X_n$ là một mẫu ngẫu nhiên độc lập, cùng phân phối (i.i.d.) từ một tổng thể, và ký hiệu $\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$ là trung bình mẫu. Khi đó:
> 
> a. Nếu tổng thể liên tục có hàm mật độ xác suất (pdf) $f_X(x)$, thì hàm mật độ xác suất của $\bar{X}$ được xác định bởi:
> $$f_{\bar{X}}(x) = n f_{X_1 + \dots + X_n}(nx),$$
> ngay cả khi hàm sinh mômen (mgf) của $X$ không tồn tại.
> 
> b. Nếu tổng thể có hàm sinh mômen $M_X(t)$, thì hàm sinh mômen của trung bình mẫu $\bar{X}$ là:
> $$M_{\bar{X}}(t) = \big[ M_X(t/n) \big]^n.$$

> [!prf] 
> Đặt tổng ngẫu nhiên $Y = \sum_{i=1}^n X_i = X_1 + \dots + X_n$, khi đó theo định nghĩa của trung bình mẫu, ta có:
> $$\bar{X} = \frac{1}{n} Y \iff Y = n\bar{X}.$$
> 
> **a. Chứng minh công thức hàm mật độ xác suất:**
> 
> Xét hàm phân phối tích lũy (cdf) của $\bar{X}$:
> $$F_{\bar{X}}(x) = \mathbb{P}(\bar{X} \le x) = \mathbb{P}\left(\frac{Y}{n} \le x\right) = \mathbb{P}(Y \le nx) = F_Y(nx).$$
> 
> Lấy đạo hàm hai vế theo $x$ theo quy tắc chuỗi để tìm hàm mật độ xác suất $f_{\bar{X}}(x)$:
> $$f_{\bar{X}}(x) = \frac{d}{dx} F_{\bar{X}}(x) = \frac{d}{dx} \big[F_Y(nx)\big] = n F_Y'(nx) = n f_Y(nx).$$
> 
> Thay $Y = X_1 + \dots + X_n$ vào biểu thức, ta thu được:
> $$f_{\bar{X}}(x) = n f_{X_1 + \dots + X_n}(nx).$$
> 
> Chứng minh này chỉ sử dụng phép biến đổi biến ngẫu nhiên đơn điệu trên hàm phân phối tích lũy, do đó kết quả hoàn toàn đúng ngay cả khi tổng thể không tồn tại hàm sinh mômen.
> 
> **b. Chứng minh công thức hàm sinh mômen:**
> 
> Theo định nghĩa của hàm sinh mômen:
> $$M_{\bar{X}}(t) = \mathbb{E}\left[ e^{t\bar{X}} \right] = \mathbb{E}\left[ e^{t \left(\frac{1}{n} \sum_{i=1}^n X_i \right)} \right] = \mathbb{E}\left[ \exp\left( \sum_{i=1}^n \frac{t}{n} X_i \right) \right] = \mathbb{E}\left[ \prod_{i=1}^n e^{\frac{t}{n} X_i} \right].$$
> 
> Vì $X_1, \dots, X_n$ là các biến ngẫu nhiên độc lập nên các biến ngẫu nhiên $e^{\frac{t}{n} X_i}$ ($i = 1, \dots, n$) cũng độc lập. Kỳ vọng của một tích các biến ngẫu nhiên độc lập bằng tích các kỳ vọng:
> $$\mathbb{E}\left[ \prod_{i=1}^n e^{\frac{t}{n} X_i} \right] = \prod_{i=1}^n \mathbb{E}\left[ e^{\frac{t}{n} X_i} \right].$$
> 
> Hơn nữa, do các biến $X_i$ có cùng phân phối xác suất với tổng thể $X$, ta có:
> $$\mathbb{E}\left[ e^{\frac{t}{n} X_i} \right] = M_{X_i}\left(\frac{t}{n}\right) = M_X\left(\frac{t}{n}\right), \quad \forall i = 1, \dots, n.$$
> 
> Do đó:
> $$M_{\bar{X}}(t) = \prod_{i=1}^n M_X\left(\frac{t}{n}\right) = \big[ M_X(t/n) \big]^n.$$

# Một số Họ hàm và Phân phối

> [!def]  (Họ hàm mũ/lũy thừa - exponential families)
> Xét $X$ là một véc-tơ ngẫu nhiên (hoặc biến ngẫu nhiên) có không gian mẫu $\mathcal{X} \subset \mathbb{R}^p$ và mô hình tham số $\{P_\theta : \theta \in \Theta\}$ bị chi phối bởi độ đo $\sigma$-hữu hạn $\nu$. $\{P_\theta : \theta \in \Theta\}$ được gọi là một **họ hàm mũ/lũy thừa** (*exponential family*) nếu pdf (hoặc pmf) $f(x \mid \theta)$ có thể được biểu diễn dưới dạng
> 
> $$f(x \mid \theta) = \exp\left\{ [\eta(\theta)]^T T(x) - A(\theta) \right\} h(x), \quad x \in \mathcal{X},$$
> 
> trong đó $T : \mathcal{X} \to \mathbb{R}^k$ là một thống kê $k$ chiều, $\eta : \Theta \to \mathbb{R}^k$, $A : \Theta \to \mathbb{R}$ và $h \ge 0$. *Số chiều $k$ của thống kê $T$ không nhất thiết bằng số chiều $p$ của $x$.*
> 
> Ta gọi các thành phần:
> * **$h(x)$ (Base measure):** Độ đo cơ sở, là hàm trọng số của dữ liệu độc lập với tham số $\theta$.
> * **$T(x)$ (Sufficient statistic):** Vector thống kê đủ gom toàn bộ thông tin của mẫu về tham số $\theta$.
> * **$\eta(\theta)$ (Natural parameter):** Tham số tự nhiên (tham số chính tắc).
> * **$A(\theta)$ (Log-partition function / Cumulant function):** Hàm sinh tích lũy, đóng vai trò là hàm log-chuẩn hóa phân phối xác suất.
> 

> [!obs] (Bản chất của Hàm Log-Partition A(θ) và Điều kiện Chuẩn hóa)
> Xuất phát từ lõi hàm mật độ chưa chuẩn hóa (unnormalized kernel):
> $$q(x \mid \theta) = h(x) \exp\big(\eta(\theta)^\top T(x)\big)$$
> 
> Để hàm trở thành một hàm mật độ xác suất hợp lệ, tổng xác suất trên toàn không gian mẫu $\mathcal{X}$ bắt buộc phải bằng 1 (Điều kiện chuẩn hóa):
> $$\int_{\mathcal{X}} f(x \mid \theta) \, dx = 1$$
> 
> Tích phân của riêng lõi $q(x \mid \theta)$ sinh ra một đại lượng phụ thuộc vào tham số $\theta$, gọi là hàm phân hoạch $Z(\theta)$ (Partition function):
> $$Z(\theta) = \int_{\mathcal{X}} q(x \mid \theta) \, dx = \int_{\mathcal{X}} h(x) \exp\big(\eta(\theta)^\top T(x)\big) \, dx$$
> 
> Để diện tích dưới đường cong luôn bằng 1, ta bắt buộc phải chia lõi hàm cho thừa số chuẩn hóa này:
> $$f(x \mid \theta) = \frac{q(x \mid \theta)}{Z(\theta)} = \frac{h(x) \exp\big(\eta(\theta)^\top T(x)\big)}{Z(\theta)}$$
> 
> Để thuận lợi cho việc lấy log-likelihood và tính đạo hàm, người ta đặt $Z(\theta) = e^{A(\theta)}$ (tức $A(\theta) = \ln Z(\theta)$):
> $$f(x \mid \theta) = \frac{h(x) \exp\big(\eta(\theta)^\top T(x)\big)}{e^{A(\theta)}} = h(x) \exp\big(\eta(\theta)^\top T(x) - A(\theta)\big)$$
> 
> Áp dụng trực tiếp điều kiện chuẩn hóa lên biểu thức họ mũ:
> $$\int_{\mathcal{X}} h(x) \exp\big(\eta(\theta)^\top T(x) - A(\theta)\big) \, dx = 1$$
> 
> Đưa $e^{-A(\theta)}$ ra ngoài dấu tích phân vì không chứa biến lấy tích phân $x$:
> $$e^{-A(\theta)} \int_{\mathcal{X}} h(x) e^{\eta(\theta)^\top T(x)} \, dx = 1$$
> 
> Nhân cả hai vế với $e^{A(\theta)}$:
> $$e^{A(\theta)} = \int_{\mathcal{X}} h(x) e^{\eta(\theta)^\top T(x)} \, dx$$
> 
> Lấy logarit tự nhiên ở hai vế, ta thu được biểu thức tường minh của $A(\theta)$:
> $$A(\theta) = \ln \left( \int_{\mathcal{X}} h(x) e^{\eta(\theta)^\top T(x)} \, dx \right)$$

> [!def] (Dạng chính tắc của Họ Phân phối mũ - Canonical form)
> Đặt tiếp $\eta = \eta(\theta)$ và xem $\eta$ như tham số của mô hình, ta thu được *dạng chính tắc* của họ hàm mũ
> 
> $$f(x \mid \eta) = \exp \left\{ \eta^T T(x) - A(\eta) \right\} h(x), \quad A(\eta) = \ln \int_{\mathcal{X}} e^{\eta^T T(x)} h(x) d\nu.$$
> 
> Tập hợp
> 
> $$\mathcal{N} = \left\{ \eta \in \mathbb{R}^k : \int_{\mathcal{X}} \exp\{\eta^T T(x)\} h(x) d\nu < \infty \right\}$$
> 
> được gọi là *không gian tham số tự nhiên (natural parameter space)*.

> [!exm] (Ví dụ: Viết Phân phối Chuẩn $\mathcal{N}(\mu, \sigma^2)$ theo Dạng Chính tắc của Họ Mũ)
> 
> Xét biến ngẫu nhiên $X \sim \mathcal{N}(\mu, \sigma^2)$ với không gian mẫu $x \in \mathbb{R}$ và bộ tham số $\theta = (\mu, \sigma^2)^\top$ (trong đó $\mu \in \mathbb{R}, \sigma^2 > 0$):
> $$f(x \mid \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right)$$
> 
> Khai triển hằng đẳng thức trên số mũ:
> $$-\frac{(x - \mu)^2}{2\sigma^2} = -\frac{x^2 - 2\mu x + \mu^2}{2\sigma^2} = \frac{\mu}{\sigma^2} x - \frac{1}{2\sigma^2} x^2 - \frac{\mu^2}{2\sigma^2}$$
> 
> Đưa toàn bộ hằng số chuẩn hóa $\frac{1}{\sqrt{2\pi\sigma^2}}$ lên số mũ:
> $$\frac{1}{\sqrt{2\pi\sigma^2}} = \exp\left( \ln\left(\frac{1}{\sqrt{2\pi\sigma^2}}\right) \right) = \exp\left( -\frac{1}{2}\ln(2\pi\sigma^2) \right)$$
> 
> Gộp lại, ta viết hàm mật độ dưới dạng:
> $$f(x \mid \theta) = \exp\left\{ \frac{\mu}{\sigma^2} x - \frac{1}{2\sigma^2} x^2 - \left( \frac{\mu^2}{2\sigma^2} + \frac{1}{2}\ln(2\pi\sigma^2) \right) \right\} \cdot 1$$
> 
> Biểu diễn dưới dạng tích vô hướng $\eta^\top T(x)$:
> $$f(x \mid \eta) = \exp\left\{ \begin{pmatrix} \eta_1 \\ \eta_2 \end{pmatrix}^\top \begin{pmatrix} x \\ x^2 \end{pmatrix} - A(\eta) \right\} h(x)$$
> 
> Gọi tên các thành phần:
> 
> Thống kê đủ:
>   $$T(x) = \begin{pmatrix} x \\ x^2 \end{pmatrix}$$
> 
> Tham số tự nhiên:
>   $$\eta = \begin{pmatrix} \eta_1 \\ \eta_2 \end{pmatrix} = \begin{pmatrix} \dfrac{\mu}{\sigma^2} \\ -\dfrac{1}{2\sigma^2} \end{pmatrix}$$
> 
> Độ đo cơ sở:
>   $$h(x) = 1$$
> 
> Hàm sinh tích lũy $A(\eta)$:
> Từ hệ thức đặt $\eta$:
>   $$\sigma^2 = -\frac{1}{2\eta_2}, \quad \mu = -\frac{\eta_1}{2\eta_2}$$
> Thay vào biểu thức ban đầu:
>   $$A(\eta) = \frac{\mu^2}{2\sigma^2} + \frac{1}{2}\ln(2\pi\sigma^2) = -\frac{\eta_1^2}{4\eta_2} - \frac{1}{2}\ln(-2\eta_2) + \frac{1}{2}\ln(2\pi)$$
> 
> Không gian tham số tự nhiên $\mathcal{N}$):
> Vì $\sigma^2 > 0 \implies \eta_2 = -\frac{1}{2\sigma^2} < 0$, tích phân chuẩn hóa chỉ hữu hạn khi $\eta_2 < 0$:
>   $$\mathcal{N} = \left\{ (\eta_1, \eta_2)^\top \in \mathbb{R}^2 : \eta_2 < 0 \right\}$$

> [!def] (Họ hàm mũ có hạng đầy đủ)
> Họ hàm mũ được gọi là có hạng đầy đủ (*full rank*) nếu $\mathcal{N}^\circ \neq \emptyset$ và các thành phần $1, T_1, \dots, T_k$ độc lập tuyến tính (không tồn tại quan hệ affine $c^T T(x) = c_0$ h.c.c.).

> [!prp] (Tính lồi của tập không gian tham số tự nhiên)
>  $\mathcal{N}$ là một tập lồi và $A$ là một hàm lồi trên $\mathcal{N}$. 

> [!prf]
> Lấy hai điểm bất kì $\eta_{1}, \eta_{2} \in \mathcal{N}$ và số thực $\alpha \in (0,1)$. Đặt $\beta = 1 - \alpha$. Xét tổ hợp lồi $n_{\alpha} = \alpha \eta_{1} + \beta \eta_{2}$. Đặt $M(\eta) = \exp\{A(\eta)\} = \int_{\mathcal{X}} \exp\{\eta^\top T(x)\} h(x) \, d\nu$, ta sẽ chứng minh $M(\alpha \eta_1 + \beta \eta_2) < \infty$. Ta có: 
> $$
> \exp\{\eta_\alpha^\top T(x)\} = \exp\{(\alpha \eta_1 + \beta \eta_2)^\top T(x)\} = \left( \exp\{\eta_1^\top T(x)\} \right)^\alpha \cdot \left( \exp\{\eta_2^\top T(x)\} \right)^\beta
> $$
> Vì $\alpha + \beta = 1$ nên $h(x) = [h(x)]^\alpha [h(x)]^\beta$), thế vào biểu thức trên, ta được: 
> $$
> \exp\{\eta_\alpha^\top T(x)\} h(x) = \left( \exp\{\eta_1^\top T(x)\} h(x) \right)^\alpha \cdot \left( \exp\{\eta_2^\top T(x)\} h(x) \right)^\beta
> $$
> Áp dụng Bất đẳng thức Hölder cho tích phân với cặp số mũ liên hợp $p = \frac{1}{\alpha} > 1$ và $q = \frac{1}{\beta} > 1$ (thỏa mãn $\frac{1}{p} + \frac{1}{q} = \alpha + \beta = 1$):
> $$\int_{\mathcal{X}} \exp\{\eta_\alpha^\top T(x)\} h(x) \, d\nu \le \left( \int_{\mathcal{X}} \exp\{\eta_1^\top T(x)\} h(x) \, d\nu \right)^\alpha \left( \int_{\mathcal{X}} \exp\{\eta_2^\top T(x)\} h(x) \, d\nu \right)^\beta$$
> Tức là:
> $$
> M(\alpha \eta_1 + \beta \eta_2) \le [M(\eta_1)]^\alpha [M(\eta_2)]^\beta
> $$
> Vì $\eta_1, \eta_2 \in \mathcal{N}$ nên $M(\eta_1) < \infty$ và $M(\eta_2) < \infty$. Do đó $M(\alpha \eta_1 + \beta \eta_2) < \infty$, suy ra $\alpha \eta_1 + \beta \eta_2 \in \mathcal{N}$. Vậy $\mathcal{N}$ là tập lồi. 
> 
> Lấy logarit tự nhiên hai vế (hàm $\log$ đồng biến):
> $$
> A(\alpha \eta_1 + \beta \eta_2) \le \alpha A(\eta_1) + \beta A(\eta_2)
> $$
> Vậy ta cũng kết luận $A(\eta)$ là một hàm lồi trên $\mathcal{N}$

> [!thm] (Tính mô-men bằng cách lấy đạo hàm)
> Xét họ hàm mũ ở dạng chính tắc. Khi đó mọi mô-men của T(X) đều tồn tại và
> a. $\mathbb{E}_\eta[T(X)] = \nabla A(\eta)$
> b. $\text{Cov}_\eta(T(X)) = \nabla^2 A(\eta)$

> [!prf]
> 
> **a. Chứng minh công thức Kỳ vọng $\mathbb{E}_\eta[T(X)] = \nabla A(\eta)$**
> 
> Từ điều kiện chuẩn hóa của hàm mật độ xác suất, ta có:
> $$
> e^{A(\eta)} = \int_{\mathcal{X}} \exp\{\eta^\top T(x)\} h(x) \, d\nu
> $$
> 
> Lấy đạo hàm riêng theo thành phần $\eta_i$ ở cả hai vế (với việc đổi thứ tự đạo hàm và tích phân được đảm bảo trên $\mathcal{N}^\circ$):
> * Vế trái:
>   $$
> \frac{\partial}{\partial \eta_i} \left[ e^{A(\eta)} \right] = \frac{\partial A(\eta)}{\partial \eta_i} e^{A(\eta)}
> $$
> * Vế phải:
>   $$
>   \frac{\partial}{\partial \eta_i} \int_{\mathcal{X}} \exp\left\{ \sum_{m=1}^k \eta_m T_m(x) \right\} h(x) \, d\nu = \int_{\mathcal{X}} T_i(x) \exp\{\eta^\top T(x)\} h(x) \, d\nu
>   $$
>   
> Đồng nhất hai vế:
> $$
> \frac{\partial A(\eta)}{\partial \eta_i} e^{A(\eta)} = \int_{\mathcal{X}} T_i(x) \exp\{\eta^\top T(x)\} h(x) \, d\nu
> $$
> 
> Nhân cả hai vế với $e^{-A(\eta)}$:
> $$
> \frac{\partial A(\eta)}{\partial \eta_i} = \int_{\mathcal{X}} T_i(x) \underbrace{\exp\{\eta^\top T(x) - A(\eta)\} h(x)}_{= f(x \mid \eta)} d\nu = \int_{\mathcal{X}} T_i(x) f(x \mid \eta) \, d\nu
> $$
> 
> Theo định nghĩa kỳ vọng:
> $$
> \frac{\partial A(\eta)}{\partial \eta_i} = \mathbb{E}_\eta[T_i(X)]
> $$
> 
> Viết dưới dạng vector gradient:
> $$
> \nabla A(\eta) = \mathbb{E}_\eta[T(X)]
> $$
> 
> **b. Chứng minh công thức Ma trận Hiệp phương sai $\text{Cov}_\eta(T(X)) = \nabla^2 A(\eta)$**
> 
> Lấy tiếp đạo hàm riêng theo $\eta_j$ đối với thành phần $\frac{\partial A(\eta)}{\partial \eta_i} = \int_{\mathcal{X}} T_i(x) \exp\{\eta^\top T(x) - A(\eta)\} h(x) \, d\nu$:
> $$
> \frac{\partial^2 A(\eta)}{\partial \eta_i \partial \eta_j} = \frac{\partial}{\partial \eta_j} \left( \int_{\mathcal{X}} T_i(x) \exp\{\eta^\top T(x) - A(\eta)\} h(x) \, d\nu \right)
> $$
> 
> Đưa đạo hàm vào trong dấu tích phân:
> $$
> \frac{\partial^2 A(\eta)}{\partial \eta_i \partial \eta_j} = \int_{\mathcal{X}} T_i(x) \cdot \frac{\partial}{\partial \eta_j} \left[ \exp\{\eta^\top T(x) - A(\eta)\} \right] h(x) \, d\nu
> $$
> 
> Áp dụng quy tắc chuỗi cho hàm mũ:
> $$
> \frac{\partial}{\partial \eta_j} \left[ \exp\{\eta^\top T(x) - A(\eta)\} \right] = \left( T_j(x) - \frac{\partial A(\eta)}{\partial \eta_j} \right) \exp\{\eta^\top T(x) - A(\eta)\}
> $$
> 
> Thay lại vào tích phân và sử dụng $\frac{\partial A(\eta)}{\partial \eta_j} = \mathbb{E}_\eta[T_j(X)]$:
> $$
> \begin{aligned}
> \frac{\partial^2 A(\eta)}{\partial \eta_i \partial \eta_j} &= \int_{\mathcal{X}} T_i(x) \left( T_j(x) - \mathbb{E}_\eta[T_j(X)] \right) f(x \mid \eta) \, d\nu \\
> &= \int_{\mathcal{X}} T_i(x) T_j(x) f(x \mid \eta) \, d\nu - \mathbb{E}_\eta[T_j(X)] \int_{\mathcal{X}} T_i(x) f(x \mid \eta) \, d\nu \\
> &= \mathbb{E}_\eta[T_i(X) T_j(X)] - \mathbb{E}_\eta[T_i(X)] \mathbb{E}_\eta[T_j(X)] \\
> &= \text{Cov}_\eta(T_i(X), T_j(X))
> \end{aligned}
> $$
> 
> Viết dưới dạng ma trận Hessian:
> $$\nabla^2 A(\eta) = \text{Cov}_\eta(T(X))$$

> [!prp] (Tính chất Họ hàm mũ có hạng đầy đủ)
> Nếu họ hàm mũ có hạng đầy đủ, thì: 
> * Ma trận Hessian $\nabla^2 A(\eta) = \text{Cov}_\eta(T(X))$ xác định dương tại mọi điểm $\eta \in \mathcal{N}^\circ$.
> * Hàm $A(\eta)$ là lồi nghiêm ngặt (strictly convex) trên $\mathcal{N}^\circ$.
> * Ánh xạ gradient $\mu(\eta) = \nabla A(\eta) = E_\eta[T(X)]$ là một đơn ánh từ $\mathcal{N}^\circ$ vào $\mathbb{R}^k$.

> [!prf]
> Lấy một vector bất kỳ $c \in \mathbb{R}^k \setminus \{\mathbf{0}\}$. Xét dạng toàn phương tương ứng với ma trận Hessian tại điểm $\eta \in \mathcal{N}^\circ$:  
> $$
> c^\top \nabla^2 A(\eta) c = c^\top \text{Cov}_\eta(T(X)) c  
> $$
> 
> Theo tính chất của ma trận hiệp phương sai:  
> $$
> c^\top \text{Cov}_\eta(T(X)) c = \text{Var}_\eta\big(c^\top T(X)\big)  
> $$
> 
> Vì phương sai của một biến ngẫu nhiên thực luôn không âm, ta có $\text{Var}_\eta\big(c^\top T(X)\big) \ge 0$.  
> Dấu đẳng thức $\text{Var}_\eta\big(c^\top T(X)\big) = 0$ xảy ra khi và chỉ khi biến ngẫu nhiên $c^\top T(X)$ suy biến thành một hằng số hầu chắc chắn:  
> $$
> c^\top T(x) = \mathbb{E}_\eta[c^\top T(X)] = c_0 \quad (\text{h.c.c. đối với } \nu)  
> $$
> 
> Tuy nhiên, điều này mâu thuẫn với giả thiết họ hàm mũ có hạng đầy đủ (các thành phần $1, T_1, \dots, T_k$ độc lập tuyến tính, không tồn tại quan hệ affine h.c.c.).
> Do đó, với mọi $c \in \mathbb{R}^k \setminus \{\mathbf{0}\}$:  
> $$
> c^\top \nabla^2 A(\eta) c = \text{Var}_\eta\big(c^\top T(X)\big) > 0  
> $$
> 
> Vậy ma trận Hessian $\nabla^2 A(\eta)$ xác định dương ($\nabla^2 A(\eta) \succ 0$) tại mọi điểm $\eta \in \mathcal{N}^\circ$.  
> 
> **b. Chứng minh Hàm $A(\eta)$ lồi nghiêm ngặt (strictly convex) trên $\mathcal{N}^\circ$**
> 
> Vì $\mathcal{N}$ là tập lồi nên phần trong $\mathcal{N}^\circ$ cũng là một tập mở lồi.  
> Lấy hai điểm phân biệt bất kỳ $\eta_1, \eta_2 \in \mathcal{N}^\circ$ ($\eta_1 \neq \eta_2$). Toàn bộ đoạn thẳng nối hai điểm này nằm trọn trong $\mathcal{N}^\circ$:  
> $$
> S = \big\{ (1 - t)\eta_1 + t\eta_2 : t \in [0, 1] \big\} \subset \mathcal{N}^\circ  
> $$
> 
> Áp dụng khai triển Taylor cấp hai với phần dư dạng Lagrange cho hàm khả vi $A(\eta)$, tồn tại một điểm $\xi$ nằm giữa $\eta_1$ và $\eta_2$ ($\xi \in \mathcal{N}^\circ$) sao cho:  
> $$
> A(\eta_2) = A(\eta_1) + \nabla A(\eta_1)^\top (\eta_2 - \eta_1) + \frac{1}{2} (\eta_2 - \eta_1)^\top \nabla^2 A(\xi) (\eta_2 - \eta_1)  
> $$
> 
> Do $\eta_1 \neq \eta_2 \implies \eta_2 - \eta_1 \neq \mathbf{0}$, và ma trận Hessian $\nabla^2 A(\xi)$ xác định dương theo Mệnh đề trước (ý a):  
> $$
> (\eta_2 - \eta_1)^\top \nabla^2 A(\xi) (\eta_2 - \eta_1) > 0  
> $$
> 
> Kéo theo bất đẳng thức tiếp tuyến ngặt:  
> $$
> A(\eta_2) > A(\eta_1) + \nabla A(\eta_1)^\top (\eta_2 - \eta_1) \quad \forall \eta_1 \neq \eta_2 \in \mathcal{N}^\circ  
> $$
> 
> Bất đẳng thức này là điều kiện cần và đủ để hàm $A(\eta)$ lồi nghiêm ngặt trên $\mathcal{N}^\circ$.  
> 
> **c. Chứng minh Ánh xạ gradient $\mu(\eta) = \nabla A(\eta) = \mathbb{E}_\eta[T(X)]$ là một đơn ánh trên $\mathcal{N}^\circ$**
> 
> Cần chứng minh: Với mọi $\eta_1, \eta_2 \in \mathcal{N}^\circ$, nếu $\eta_1 \neq \eta_2$ thì $\nabla A(\eta_1) \neq \nabla A(\eta_2)$.  
> 
> Từ bất đẳng thức tiếp tuyến ngặt của hàm lồi nghiêm ngặt $A(\eta)$:  
> * Xét tại $\eta_1$:
> $$
> A(\eta_2) - A(\eta_1) > \nabla A(\eta_1)^\top (\eta_2 - \eta_1)  
> $$
> * Đổi vai trò của $\eta_1$ và $\eta_2$, xét tại $\eta_2$:
> $$
> A(\eta_1) - A(\eta_2) > \nabla A(\eta_2)^\top (\eta_1 - \eta_2)  
> $$
> 
> Cộng hai bất đẳng thức vế theo vế:  
> $$
> 0 > \nabla A(\eta_1)^\top (\eta_2 - \eta_1) + \nabla A(\eta_2)^\top (\eta_1 - \eta_2)  
> $$
> 
> Đổi dấu số hạng thứ hai: $\nabla A(\eta_2)^\top (\eta_1 - \eta_2) = - \nabla A(\eta_2)^\top (\eta_2 - \eta_1)$, ta được:  
> $$
> 0 > \big( \nabla A(\eta_1) - \nabla A(\eta_2) \big)^\top (\eta_2 - \eta_1)  
> $$
> 
> Tương đương với:  
> $$
> \big( \nabla A(\eta_2) - \nabla A(\eta_1) \big)^\top (\eta_2 - \eta_1) > 0  
> $$
> 
> Tích vô hướng của hai vector dương ngặt chứng tỏ vector $\nabla A(\eta_2) - \nabla A(\eta_1)$ không thể bằng vector không $\mathbf{0}$:  
> $$
> \nabla A(\eta_1) \neq \nabla A(\eta_2)  
> $$
> 
> Vậy ánh xạ gradient $\mu(\eta) = \nabla A(\eta) = \mathbb{E}_\eta[T(X)]$ là một đơn ánh (injective) trên $\mathcal{N}^\circ$.  

> [!def] (Phân phối Chi bình phương)
> 
> Xét $Z_1, \dots, Z_k$ là các biến ngẫu nhiên độc lập cùng phân phối chuẩn chuẩn tắc $\mathcal{N}(0, 1)$. Phân phối của  
> 
> $$
> Q = \sum_{i=1}^k Z_i^2  
> $$
> được gọi là **phân phối Chi bình phương với $k$ bậc tự do**, ký hiệu là $Q \sim \chi_k^2$.  


> [!prp] (Các Tính chất Cơ bản của Phân phối Chi bình phương)
> 
> Cho $Q \sim \chi_k^2$ với $k \in \mathbb{N}^*$. Khi đó:
> 
> a. **Hàm mật độ xác suất:** $Q$ có hàm mật độ xác định bởi:
> $$f_k(x) = \frac{1}{2^{k/2}\Gamma(k/2)} x^{k/2 - 1} e^{-x/2}, \quad x > 0$$
> Do đó $\chi_k^2 \equiv \text{Gamma}(k/2, 2)$ (theo tham số hóa dạng shape - scale).
> 
> b. **Hàm sinh mô-men và các đặc trưng số:** Hàm sinh mô-men của $Q$ là:
> $$M_Q(t) = (1 - 2t)^{-k/2}, \quad t < 1/2$$
> Kéo theo kỳ vọng và phương sai lần lượt là $\mathbb{E}[Q] = k$ và $\mathbb{V}ar(Q) = 2k$.
> 
> c. **Tính cộng tính:** Nếu $Q_1 \sim \chi_{k_1}^2$, $Q_2 \sim \chi_{k_2}^2$ và $Q_1 \perp\!\!\!\perp Q_2$ thì:
> $$Q_1 + Q_2 \sim \chi_{k_1 + k_2}^2$$
> 
> d. **Trường hợp phi trung tâm:** Nếu $X_i \sim \mathcal{N}(\mu_i, 1)$ là các biến ngẫu nhiên độc lập ($i = 1, \dots, k$), thì:
> $$\sum_{i=1}^k X_i^2 \sim \chi_k^2(\delta)$$
> với tham số phi trung tâm $\delta = \sum_{i=1}^k \mu_i^2$.

> [!prf] 
> 
> **Chứng minh ý a và b:**
> 
> *Xét một thành phần đơn lẻ:* Cho $Z \sim \mathcal{N}(0, 1)$ và đặt $Y = Z^2$. 
> Với $y > 0$, hàm phân phối tích lũy của $Y$ là:
> $$F_Y(y) = \mathbb{P}(Z^2 \le y) = \mathbb{P}(-\sqrt{y} \le Z \le \sqrt{y}) = 2\Phi(\sqrt{y}) - 1$$
> Lấy đạo hàm theo $y$, ta thu được hàm mật độ của $Y$:
> $$f_Y(y) = 2 \cdot \frac{1}{\sqrt{2\pi}} e^{-y/2} \cdot \frac{1}{2\sqrt{y}} = \frac{1}{\sqrt{2\pi}} y^{-1/2} e^{-y/2} = \frac{1}{2^{1/2}\Gamma(1/2)} y^{1/2 - 1} e^{-y/2}, \quad y > 0$$
> (vì $\Gamma(1/2) = \sqrt{\pi}$). Đây chính là mật độ của phân phối $\text{Gamma}(1/2, 2)$, hay $\chi_1^2$.
> 
> Hàm sinh mô-men (MGF) của $Y$ với $t < 1/2$ là:
> $$M_Y(t) = \int_0^\infty e^{ty} \frac{1}{\sqrt{2\pi}} y^{-1/2} e^{-y/2} \, dy = \frac{1}{\sqrt{2\pi}} \int_0^\infty y^{-1/2} e^{-\frac{1 - 2t}{2}y} \, dy$$
> Đổi biến $u = \frac{1 - 2t}{2} y$, ta được:
> $$M_Y(t) = \frac{1}{\sqrt{2\pi}} \left( \frac{2}{1 - 2t} \right)^{1/2} \int_0^\infty u^{-1/2} e^{-u} \, du = (1 - 2t)^{-1/2}$$
> 
> *Xét tổng $Q = \sum_{i=1}^k Z_i^2$:*
> Vì $Z_1, \dots, Z_k \stackrel{i.i.d.}{\sim} \mathcal{N}(0, 1)$, các biến $Y_i = Z_i^2$ là độc lập. Do đó, MGF của $Q$ bằng tích các MGF thành phần:
> $$M_Q(t) = \prod_{i=1}^k M_{Y_i}(t) = \big( (1 - 2t)^{-1/2} \big)^k = (1 - 2t)^{-k/2}, \quad t < 1/2$$
> 
> Mặt khác, phân phối $\text{Gamma}(\alpha, \beta)$ có MGF là $M(t) = (1 - \beta t)^{-\alpha}$ và hàm mật độ $f(x) = \frac{1}{\beta^\alpha \Gamma(\alpha)} x^{\alpha - 1} e^{-x/\beta}$ ($x > 0$). Đồng nhất với MGF của $Q$ tại $\alpha = k/2$ và $\beta = 2$, theo tính duy nhất của hàm sinh mô-men:
> $$Q \sim \text{Gamma}(k/2, 2) \implies f_k(x) = \frac{1}{2^{k/2}\Gamma(k/2)} x^{k/2 - 1} e^{-x/2}, \quad x > 0$$
> 
> Tính kỳ vọng và phương sai qua đạo hàm của $M_Q(t)$ tại $t = 0$:
> $$M_Q'(t) = k(1 - 2t)^{-k/2 - 1} \implies \mathbb{E}[Q] = M_Q'(0) = k$$
> $$M_Q''(t) = k(k + 2)(1 - 2t)^{-k/2 - 2} \implies \mathbb{E}[Q^2] = M_Q''(0) = k^2 + 2k$$
> $$\mathbb{V}ar(Q) = \mathbb{E}[Q^2] - (\mathbb{E}[Q])^2 = (k^2 + 2k) - k^2 = 2k$$
> 
> **Chứng minh ý c:**
> 
> Do $Q_1 \perp\!\!\!\perp Q_2$, hàm sinh mô-men của tổng $Q_1 + Q_2$ bằng tích hai hàm sinh mô-men:
> $$M_{Q_1 + Q_2}(t) = M_{Q_1}(t) \cdot M_{Q_2}(t) = (1 - 2t)^{-k_1/2} \cdot (1 - 2t)^{-k_2/2} = (1 - 2t)^{-(k_1 + k_2)/2}, \quad t < 1/2$$
> Đây là hàm sinh mô-men của phân phối Chi bình phương với bậc tự do $k_1 + k_2$. Suy ra $Q_1 + Q_2 \sim \chi_{k_1 + k_2}^2$.
> 
> **Chứng minh ý d:**
> 
> Với mỗi $X_i \sim \mathcal{N}(\mu_i, 1)$, MGF của $X_i^2$ là:
> $$M_{X_i^2}(t) = \mathbb{E}\left[e^{t X_i^2}\right] = \int_{-\infty}^\infty e^{tx^2} \frac{1}{\sqrt{2\pi}} e^{-\frac{(x - \mu_i)^2}{2}} \, dx$$
> Khai triển phần số mũ:
> $$tx^2 - \frac{(x - \mu_i)^2}{2} = -\frac{1 - 2t}{2}\left( x - \frac{\mu_i}{1 - 2t} \right)^2 + \frac{t\mu_i^2}{1 - 2t}$$
> Tích phân hàm mật độ chuẩn biến đổi cho kết quả:
> $$M_{X_i^2}(t) = (1 - 2t)^{-1/2} \exp\left\{ \frac{t\mu_i^2}{1 - 2t} \right\}, \quad t < 1/2$$
> 
> Do các $X_i$ độc lập, MGF của tổng $W = \sum_{i=1}^k X_i^2$ là:
> $$M_W(t) = \prod_{i=1}^k M_{X_i^2}(t) = (1 - 2t)^{-k/2} \exp\left\{ \frac{t \sum_{i=1}^k \mu_i^2}{1 - 2t} \right\} = (1 - 2t)^{-k/2} \exp\left\{ \frac{\delta t}{1 - 2t} \right\}$$
> với $\delta = \sum_{i=1}^k \mu_i^2$. Đây chính là MGF định nghĩa của phân phối Chi bình phương phi trung tâm $\chi_k^2(\delta)$.


> [!def] (Họ Dịch chuyển - Co giãn (Location - Scale Families))
> 
> Xét $f_0$ là một hàm mật độ xác định trên $\mathbb{R}$ (mật độ chuẩn hóa). Họ các phân phối có mật độ:
> $$f(x \mid \mu, \sigma) = \frac{1}{\sigma} f_0\left(\frac{x - \mu}{\sigma}\right), \quad \mu \in \mathbb{R}, \; \sigma > 0$$
> được gọi là họ dịch chuyển - co giãn sinh bởi $f_0$.
> 
> Tham số $\mu$ được gọi là tham số vị trí (location) và $\sigma$ là tham số co giãn (scale). Nếu chỉ có $\mu$ thay đổi ($\sigma \equiv 1$) ta có họ dịch chuyển; nếu chỉ có $\sigma$ thay đổi ($\mu \equiv 0$) ta có họ co giãn.

> [!prp] (Đặc trưng họ dịch chuyển)
> 
> $X$ có mật độ $f(\cdot \mid \mu, \sigma)$ khi và chỉ khi $X \stackrel{d}{=} \mu + \sigma Z$ với $Z$ có mật độ $f_0$.

> [!prf] 
> 
> **Chiều ($\implies$):**
> Giả sử $Z$ là biến ngẫu nhiên có hàm mật độ $f_0(z)$ và hàm phân phối tích lũy $F_0(z) = \mathbb{P}(Z \le z)$.
> Xét biến ngẫu nhiên $X = \mu + \sigma Z$ với $\sigma > 0$.
> 
> Hàm phân phối tích lũy của $X$ là:
> $$F_X(x) = \mathbb{P}(X \le x) = \mathbb{P}(\mu + \sigma Z \le x)$$
> 
> Do $\sigma > 0$, bất đẳng thức tương đương với:
> $$F_X(x) = \mathbb{P}\left(Z \le \frac{x - \mu}{\sigma}\right) = F_0\left(\frac{x - \mu}{\sigma}\right)$$
> 
> Lấy đạo hàm theo biến $x$ ở cả hai vế để xác định hàm mật độ xác suất $f_X(x)$:
> $$f_X(x) = \frac{d}{dx} F_X(x) = \frac{d}{dx} \left[ F_0\left(\frac{x - \mu}{\sigma}\right) \right]$$
> 
> Áp dụng quy tắc đạo hàm của hàm hợp:
> $$f_X(x) = F_0'\left(\frac{x - \mu}{\sigma}\right) \cdot \frac{d}{dx}\left(\frac{x - \mu}{\sigma}\right) = f_0\left(\frac{x - \mu}{\sigma}\right) \cdot \frac{1}{\sigma} = \frac{1}{\sigma} f_0\left(\frac{x - \mu}{\sigma}\right)$$
> 
> Như vậy, $X$ có hàm mật độ chính là $f(x \mid \mu, \sigma)$.
> 
> **Chiều ($\impliedby$):**
> Giả sử $X$ có hàm mật độ $f_X(x) = \frac{1}{\sigma} f_0\left(\frac{x - \mu}{\sigma}\right)$ với $\sigma > 0$.
> 
> Xét biến ngẫu nhiên được định nghĩa bởi $Z = \frac{X - \mu}{\sigma}$. Ta tìm hàm phân phối tích lũy của $Z$:
> $$F_Z(z) = \mathbb{P}(Z \le z) = \mathbb{P}\left(\frac{X - \mu}{\sigma} \le z\right) = \mathbb{P}(X \le \mu + \sigma z) = F_X(\mu + \sigma z)$$
> 
> Lấy đạo hàm theo biến $z$ để tìm hàm mật độ của $Z$:
> $$f_Z(z) = \frac{d}{dz} F_Z(z) = \frac{d}{dz} \big[F_X(\mu + \sigma z)\big] = f_X(\mu + \sigma z) \cdot \frac{d}{dz}(\mu + \sigma z) = f_X(\mu + \sigma z) \cdot \sigma$$
> 
> Thay biểu thức hàm mật độ của $X$ vào:
> $$f_Z(z) = \left[ \frac{1}{\sigma} f_0\left(\frac{(\mu + \sigma z) - \mu}{\sigma}\right) \right] \cdot \sigma = f_0(z)$$
> 
> Do đó, biến ngẫu nhiên $Z$ có mật độ chính là $f_0$. Vì $X = \mu + \sigma Z$, ta kết luận:
> $$X \stackrel{d}{=} \mu + \sigma Z$$

> [!def] (Phân phối Student)
> Xét $Z \sim \mathcal{N}(0, 1)$, $V \sim \chi_n^2$ và $Z \perp\!\!\!\perp V$. Phân phối của
> $$T = \frac{Z}{\sqrt{V / n}}$$
> được gọi là **phân phối Student với $n$ bậc tự do**, ký hiệu $T \sim t_n$, với mật độ
> $$f_T(t) = \frac{\Gamma\left(\frac{n+1}{2}\right)}{\sqrt{n\pi}\,\Gamma\left(\frac{n}{2}\right)} \left(1 + \frac{t^2}{n}\right)^{-\frac{n+1}{2}}, \quad t \in \mathbb{R}.$$

> [!def] (Định lý Fisher)
> 
> Xét mẫu ngẫu nhiên $X_1, \dots, X_n \stackrel{i.i.d.}{\sim} \mathcal{N}(\mu, \sigma^2)$ với $n \ge 2$. Khi đó:
> 
> a. $\bar{X} \sim \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$;
> 
> b. $\frac{(n - 1)S^2}{\sigma^2} \sim \chi_{n - 1}^2$;
> 
> c. $\bar{X} \perp\!\!\!\perp S^2$ ($\bar{X}$ và $S^2$ độc lập với nhau).

> [!prf]
> 
> **Bước 1: Chuẩn hóa dữ liệu về phân phối chuẩn chuẩn tắc**
> 
> Đặt $Z_i = \frac{X_i - \mu}{\sigma}$ với mọi $i = 1, \dots, n$.
> Khi đó $Z_1, \dots, Z_n \stackrel{i.i.d.}{\sim} \mathcal{N}(0, 1)$, hay dưới dạng vector ngẫu nhiên:
> $$Z = (Z_1, \dots, Z_n)^\top \sim \mathcal{N}_n(0, I_n)$$
> 
> Biểu diễn trung bình mẫu $\bar{X}$ qua vector $Z$:
> $$\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i = \mu + \frac{\sigma}{n} \sum_{i=1}^n Z_i$$
> 
> **Bước 2: Xây dựng phép biến đổi trực giao**
> 
> Chọn một ma trận trực giao $P \in \mathbb{R}^{n \times n}$ (thỏa mãn $P^\top P = P P^\top = I_n$) sao cho hàng đầu tiên có dạng:
> $$p_1 = \left( \frac{1}{\sqrt{n}}, \frac{1}{\sqrt{n}}, \dots, \frac{1}{\sqrt{n}} \right)$$
> Do $p_1$ có chuẩn Euclid $\|p_1\|_2 = 1$, theo phương pháp trực chuẩn hóa Gram-Schmidt, ta luôn bổ sung được $n-1$ hàng trực giao còn lại $p_2, \dots, p_n$ để tạo thành ma trận trực giao $P$.
> 
> Xét biến đổi ngẫu nhiên:
> $$Y = P Z = (Y_1, Y_2, \dots, Y_n)^\top$$
> 
> Vì $P$ trực giao và $Z \sim \mathcal{N}_n(0, I_n)$, phân phối đồng thời của $Y$ là phân phối chuẩn nhiều chiều với:
> $$\mathbb{E}[Y] = P \mathbb{E}[Z] = 0$$
> $$\text{Cov}(Y) = P \text{Cov}(Z) P^\top = P I_n P^\top = P P^\top = I_n$$
> 
> Do đó, $Y \sim \mathcal{N}_n(0, I_n)$, nghĩa là các biến ngẫu nhiên $Y_1, Y_2, \dots, Y_n$ độc lập cùng phân phối $\mathcal{N}(0, 1)$.
> 
> **Bước 3: Biểu diễn $\bar{X}$ và $S^2$ qua các thành phần của $Y$**
> 
> Thành phần đầu tiên của $Y$ là:
> $$Y_1 = p_1 Z = \frac{1}{\sqrt{n}} \sum_{i=1}^n Z_i = \frac{1}{\sqrt{n}} \sum_{i=1}^n \left( \frac{X_i - \mu}{\sigma} \right) = \frac{\sqrt{n}(\bar{X} - \mu)}{\sigma}$$
> 
> Suy ra:
> $$\bar{X} = \mu + \frac{\sigma}{\sqrt{n}} Y_1$$
> 
> Mặt khác, vì ma trận $P$ bảo toàn chuẩn Euclid:
> $$\sum_{i=1}^n Y_i^2 = \|Y\|_2^2 = \|P Z\|_2^2 = \|Z\|_2^2 = \sum_{i=1}^n Z_i^2 = \sum_{i=1}^n \left( \frac{X_i - \mu}{\sigma} \right)^2$$
> 
> Phân tích tổng bình phương:
> $$\sum_{i=1}^n (X_i - \mu)^2 = \sum_{i=1}^n \big( (X_i - \bar{X}) + (\bar{X} - \mu) \big)^2 = \sum_{i=1}^n (X_i - \bar{X})^2 + n(\bar{X} - \mu)^2$$
> 
> Chia cả hai vế cho $\sigma^2$:
> $$\sum_{i=1}^n Z_i^2 = \frac{1}{\sigma^2} \sum_{i=1}^n (X_i - \bar{X})^2 + \left( \frac{\sqrt{n}(\bar{X} - \mu)}{\sigma} \right)^2$$
> 
> Thay định nghĩa $(n-1)S^2 = \sum_{i=1}^n (X_i - \bar{X})^2$ và $Y_1 = \frac{\sqrt{n}(\bar{X} - \mu)}{\sigma}$:
> $$\sum_{i=1}^n Y_i^2 = \frac{(n - 1)S^2}{\sigma^2} + Y_1^2$$
> 
> Rút gọn $Y_1^2$ ở cả hai vế:
> $$\frac{(n - 1)S^2}{\sigma^2} = \sum_{i=2}^n Y_i^2$$
> 
> **Bước 4: Kết luận các mệnh đề**
> 
> **Chứng minh (a):**
>   Do $Y_1 \sim \mathcal{N}(0, 1)$, biến ngẫu nhiên $\bar{X} = \mu + \frac{\sigma}{\sqrt{n}} Y_1$ là một biến đổi affine của $Y_1$, nên:
>   $$\bar{X} \sim \mathcal{N}\left(\mu, \left(\frac{\sigma}{\sqrt{n}}\right)^2\right) = \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$$
> 
> **Chứng minh (b):**
>   Biểu thức $\frac{(n - 1)S^2}{\sigma^2} = \sum_{i=2}^n Y_i^2$ là tổng bình phương của $n - 1$ biến ngẫu nhiên độc lập chuẩn chuẩn tắc $Y_2, \dots, Y_n \stackrel{i.i.d.}{\sim} \mathcal{N}(0, 1)$.
>   Theo định nghĩa phân phối Khi bình phương ($\chi^2$):
>   $$\frac{(n - 1)S^2}{\sigma^2} \sim \chi_{n - 1}^2$$
> 
> **Chứng minh (c):**
>   Trung bình mẫu $\bar{X}$ chỉ phụ thuộc duy nhất vào biến ngẫu nhiên $Y_1$.
>   Phương sai mẫu $S^2 = \frac{\sigma^2}{n - 1} \sum_{i=2}^n Y_i^2$ chỉ phụ thuộc vào vector $(Y_2, \dots, Y_n)$.
>   Vì ma trận hiệp phương sai của $Y$ là ma trận đơn vị $I_n$, thành phần $Y_1$ hoàn toàn độc lập với nhóm $(Y_2, \dots, Y_n)$.
>   Do đó, hai hàm Borel tương ứng là $\bar{X}$ và $S^2$ độc lập với nhau:
>   $$\bar{X} \perp\!\!\!\perp S^2$$

> [!def] (Phân phối Fisher $F$)
> 
> Xét $U \sim \chi_m^2$, $V \sim \chi_n^2$ độc lập. Phân phối của
> $$F = \frac{U/m}{V/n}$$
> được gọi là **phân phối Fisher với $(m, n)$ bậc tự do**, ký hiệu $F \sim F_{m,n}$.

> [!prp] (Trường hợp hai mẫu)
> 
> Xét hai mẫu độc lập $X_1, \dots, X_{n_1} \sim \mathcal{N}(\mu_1, \sigma_1^2)$ và $Y_1, \dots, Y_{n_2} \sim \mathcal{N}(\mu_2, \sigma_2^2)$ với phương sai mẫu $S_1^2, S_2^2$. Khi đó
> $$\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} \sim F_{n_1-1, n_2-1}.$$

> [!prf]
> 
> Theo Định lý Fisher đối với từng mẫu ngẫu nhiên độc lập:
> 
> * Với mẫu thứ nhất:
>   $$U = \frac{(n_1 - 1)S_1^2}{\sigma_1^2} \sim \chi_{n_1 - 1}^2$$
> * Với mẫu thứ hai:
>   $$V = \frac{(n_2 - 1)S_2^2}{\sigma_2^2} \sim \chi_{n_2 - 1}^2$$
> 
> Vì hai mẫu ban đầu độc lập với nhau, hai biến ngẫu nhiên $U$ và $V$ cũng độc lập ($U \perp\!\!\!\perp V$).
> 
> Đặt $m = n_1 - 1$ và $n = n_2 - 1$. Xét tỷ số:
> $$\frac{U/m}{V/n} = \frac{\frac{(n_1 - 1)S_1^2}{\sigma_1^2} \cdot \frac{1}{n_1 - 1}}{\frac{(n_2 - 1)S_2^2}{\sigma_2^2} \cdot \frac{1}{n_2 - 1}} = \frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}$$
> 
> Theo Định nghĩa của phân phối Fisher, tỷ số giữa hai biến Chi bình phương độc lập chia cho số bậc tự do tương ứng tuân theo phân phối Fisher với số bậc tự do $(m, n) = (n_1 - 1, n_2 - 1)$:
> $$\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} \sim F_{n_1-1, n_2-1}.$$

# Thống kê Thứ tự

> [!def] (Thống kê thứ tự (Order Statistics))
> Cho mẫu ngẫu nhiên $X = (X_1, X_2, \dots, X_n)$ độc lập cùng phân phối (i.i.d.) với hàm phân phối tích lũy (cdf) $F(x)$ và hàm mật độ xác suất (pdf) $f(x)$.
> Sắp xếp các giá trị quan sát theo thứ tự không giảm:
> $$X_{(1)} \le X_{(2)} \le \dots \le X_{(n)}$$
> Khi đó:
> - $X_{(1)} = \min(X_1, \dots, X_n)$ được gọi là thống kê thứ tự bậc $1$.
> - $X_{(k)}$ được gọi là thống kê thứ tự bậc $k$ ($1 \le k \le n$).
> - $X_{(n)} = \max(X_1, \dots, X_n)$ được gọi là thống kê thứ tự bậc $n$.
> Vector $(X_{(1)}, X_{(2)}, \dots, X_{(n)})$ được gọi là thống kê thứ tự của mẫu.

> [!prp] (Hàm mật độ xác suất đồng thời của toàn bộ thống kê thứ tự)
> Hàm mật độ xác suất đồng thời của $(X_{(1)}, X_{(2)}, \dots, X_{(n)})$ được xác định bởi:
> $$
> g(x_1, x_2, \dots, x_n) = \begin{cases} n! \prod_{k=1}^n f(x_k) & \text{nếu } x_1 < x_2 < \dots < x_n \\ 0 & \text{khác} \end{cases}
> $$

> [!prf]
> Vì các biến ngẫu nhiên $X_1, X_2, \dots, X_n$ độc lập cùng phân phối và liên tục, xác suất để hai biến bằng nhau bằng 0, nghĩa là $P(X_i = X_j) = 0$ với mọi $i \ne j$.
>
> Hàm mật độ đồng thời của mẫu ban đầu là:
> $$f_{X_1, \dots, X_n}(u_1, \dots, u_n) = \prod_{k=1}^n f(u_k)$$
>
> Không gian mẫu $\mathbb{R}^n$ có thể phân hoạch thành $n!$ miền tương ứng với $n!$ hoán vị của tập chỉ số $\{1, 2, \dots, n\}$. Với mỗi bộ giá trị cố định $x_1 < x_2 < \dots < x_n$, có đúng $n!$ hoán vị đối xứng của $(X_1, \dots, X_n)$ dẫn đến cùng một thống kê thứ tự $(x_1, \dots, x_n)$.
>
> Do hàm mật độ của mẫu đối xứng qua các hoán vị, ta lấy tổng mật độ trên toàn bộ $n!$ hoán vị:
> $$
> g(x_1, x_2, \dots, x_n) = \sum_{\pi \in S_n} f_{X_1, \dots, X_n}(x_{\pi(1)}, \dots, x_{\pi(n)}) = n! \prod_{k=1}^n f(x_k)
> $$
> với $x_1 < x_2 < \dots < x_n$, và bằng $0$ trong các trường hợp khác.

> [!prp] (Hàm mật độ xác suất của thống kê thứ tự bậc $i$)
> Với $1 \le i \le n$, hàm mật độ xác suất của $X_{(i)}$ được xác định bởi:
> $$
> g_i(x) = \frac{n!}{(i-1)!(n-i)!} [F(x)]^{i-1} [1 - F(x)]^{n-i} f(x)
> $$

> [!prf]
> Xét biến cố $\{X_{(i)} \le x\}$. Biến cố này xảy ra khi và chỉ khi có ít nhất $i$ quan sát trong số $n$ quan sát $X_1, \dots, X_n$ nhỏ hơn hoặc bằng $x$.
>
> Gọi $Y$ là số lượng quan sát $X_k \le x$. Vì mỗi quan sát rơi vào khoảng $(-\infty, x]$ độc lập với xác suất $p = F(x)$, nên $Y$ tuân theo phân phối nhị thức $\text{Binomial}(n, F(x))$.
>
> Do đó, hàm phân phối tích lũy của $X_{(i)}$ là:
> $$G_i(x) = P(X_{(i)} \le x) = P(Y \ge i) = \sum_{k=i}^n \binom{n}{k} [F(x)]^k [1 - F(x)]^{n-k}$$
>
> Lấy đạo hàm hai vế theo $x$ để tìm hàm mật độ $g_i(x) = G'_i(x)$:
> $$
> g_i(x) = \sum_{k=i}^n \binom{n}{k} \left[ k [F(x)]^{k-1} f(x) [1 - F(x)]^{n-k} - (n - k) [F(x)]^k [1 - F(x)]^{n-k-1} f(x) \right]
> $$
>
> Tách thành hai tổng:
> $$
> g_i(x) = f(x) \left[ \sum_{k=i}^n k \binom{n}{k} [F(x)]^{k-1} [1 - F(x)]^{n-k} - \sum_{k=i}^{n-1} (n-k) \binom{n}{k} [F(x)]^k [1 - F(x)]^{n-k-1} \right]
> $$
>
> Sử dụng các đẳng thức tổ hợp $k \binom{n}{k} = n \binom{n-1}{k-1}$ và $(n-k) \binom{n}{k} = n \binom{n-1}{k}$:
> - Số hạng đầu: $n \sum_{k=i}^n \binom{n-1}{k-1} [F(x)]^{k-1} [1 - F(x)]^{(n-1)-(k-1)}$
> - Đổi chỉ số $j = k-1$: $n \sum_{j=i-1}^{n-1} \binom{n-1}{j} [F(x)]^j [1 - F(x)]^{(n-1)-j}$
> - Số hạng sau: $n \sum_{k=i}^{n-1} \binom{n-1}{k} [F(x)]^k [1 - F(x)]^{(n-1)-k}$
>
> Toàn bộ các số hạng từ $i$ đến $n-1$ bị triệt tiêu lẫn nhau dạng telescoping, chỉ còn lại duy nhất số hạng tương ứng với $j = i - 1$:
> $$
> g_i(x) = n f(x) \binom{n-1}{i-1} [F(x)]^{i-1} [1 - F(x)]^{n-i}
> $$
>
> Biến đổi hệ số tổ hợp:
> $$
> n \binom{n-1}{i-1} = n \frac{(n-1)!}{(i-1)!(n-i)!} = \frac{n!}{(i-1)!(n-i)!}
> $$
>
> Ta thu được:
> $$
> g_i(x) = \frac{n!}{(i-1)!(n-i)!} [F(x)]^{i-1} [1 - F(x)]^{n-i} f(x)
> $$

> [!prp] (Hàm mật độ xác suất đồng thời của hai thống kê thứ tự $X_{(i)}$ và $X_{(j)}$)
> Với $1 \le i < j \le n$, hàm mật độ xác suất đồng thời của $(X_{(i)}, X_{(j)})$ là:
> $$
> g_{i,j}(x, y) = \begin{cases} \frac{n!}{(i-1)!(j-i-1)!(n-j)!} [F(x)]^{i-1} [F(y) - F(x)]^{j-i-1} [1 - F(y)]^{n-j} f(x) f(y) & \text{nếu } x < y \\ 0 & \text{khác} \end{cases}
> $$

> [!prf]
> Xét xác suất để $X_{(i)} \in (x, x + dx)$ và $X_{(j)} \in (y, y + dy)$ với $x < y$:
> $$
> g_{i,j}(x, y) \, dx \, dy \approx P\big(x < X_{(i)} \le x + dx, \, y < X_{(j)} \le y + dy\big)
> $$
>
> Để biến cố trên xảy ra, tập hợp $n$ quan sát độc lập phải thỏa mãn phân bố vào 5 khoảng rời nhau như sau:
> 1. Có đúng $i - 1$ quan sát nhỏ hơn $x$, với xác suất mỗi phần tử là $F(x)$.
> 2. Có đúng $1$ quan sát nằm trong khoảng $(x, x + dx]$, với xác suất là $f(x)\,dx$.
> 3. Có đúng $j - i - 1$ quan sát nằm trong khoảng $(x + dx, y]$, với xác suất xấp xỉ $F(y) - F(x)$.
> 4. Có đúng $1$ quan sát nằm trong khoảng $(y, y + dy]$, với xác suất là $f(y)\,dy$.
> 5. Có đúng $n - j$ quan sát lớn hơn $y + dy$, với xác suất xấp xỉ $1 - F(y)$.
>
> Số cách phân chia $n$ phần tử vào 5 nhóm phân biệt này được xác định bởi hệ số đa thức:
> $$
> \binom{n}{i-1, \, 1, \, j-i-1, \, 1, \, n-j} = \frac{n!}{(i-1)! \, 1! \, (j-i-1)! \, 1! \, (n-j)!} = \frac{n!}{(i-1)!(j-i-1)!(n-j)!}
> $$
>
> Nhân tổ hợp cách chọn với tích các xác suất tương ứng:
> $$
> g_{i,j}(x, y) \, dx \, dy = \frac{n!}{(i-1)!(j-i-1)!(n-j)!} [F(x)]^{i-1} [f(x)\,dx] [F(y)-F(x)]^{j-i-1} [f(y)\,dy] [1-F(y)]^{n-j}
> $$
>
> Triệt tiêu $dx\,dy$ ở cả hai vế khi $dx, dy \to 0$, ta thu được:
> $$
> g_{i,j}(x, y) = \frac{n!}{(i-1)!(j-i-1)!(n-j)!} [F(x)]^{i-1} [F(y) - F(x)]^{j-i-1} [1 - F(y)]^{n-j} f(x) f(y)
> $$
> với $x < y$, và bằng $0$ khi ngược lại.

> [!def] (Phân phối đều) 
> Biến ngẫu nhiên $U$ được gọi là có phân phối đều trên khoảng $(0, 1)$, ký hiệu $U \sim \mathcal{U}(0, 1)$, nếu hàm mật độ xác suất của nó có dạng:
> $$f_U(u) = \begin{cases} 1, & u \in (0, 1) \\ 0, & u \notin (0, 1) \end{cases}$$
> Hàm phân phối tích lũy tương ứng là:
> $$F_U(u) = \begin{cases} 0, & u \le 0 \\ u, & 0 < u < 1 \\ 1, & u \ge 1 \end{cases}$$

> [!prp] Phép biến đổi tích phân xác suất (Probability Integral Transform)
> Cho $X$ là biến ngẫu nhiên liên tục có hàm phân phối tích lũy $F_X(x)$ liên tục và đơn điệu tăng ngặt. Khi đó, biến ngẫu nhiên $U = F_X(X)$ tuân theo phân phối đều trên khoảng $(0, 1)$, tức là $U \sim \mathcal{U}(0, 1)$.

> [!prf]
> Do $F_X(x)$ là hàm liên tục và đơn điệu tăng ngặt nên tồn tại ánh xạ ngược $F_X^{-1}$ xác định trên $(0, 1)$. Do đó, biến ngẫu nhiên $U = F_X(X)$ nhận giá trị hầu chắc chắn trong khoảng $(0, 1)$.
> Với mọi $u \in (0, 1)$, hàm phân phối tích lũy của $U$ được xác định bởi:
> $$F_U(u) = \mathbb{P}(U \le u) = \mathbb{P}(F_X(X) \le u)$$
> Vì $F_X$ tăng ngặt, phép biến đổi tương đương cho tập nghiệm:
> $$\mathbb{P}(F_X(X) \le u) = \mathbb{P}(X \le F_X^{-1}(u))$$
> Theo định nghĩa hàm phân phối tích lũy của $X$:
> $$\mathbb{P}(X \le F_X^{-1}(u)) = F_X(F_X^{-1}(u)) = u$$
> Suy ra $F_U(u) = u$ với mọi $u \in (0, 1)$.
> Lấy đạo hàm theo $u$, ta được hàm mật độ $f_U(u) = 1$ trên $(0, 1)$ và $0$ ở ngoài khoảng đó.
> Vậy $U \sim \mathcal{U}(0, 1)$.

> [!prp] (Bảo toàn thứ tự qua phép biến đổi phân phối)
> Giả sử $X_1, X_2, \dots, X_n$ là mẫu ngẫu nhiên độc lập cùng phân phối với hàm phân phối tích lũy liên tục $F_X$. Đặt $U_k = F_X(X_k)$ với $k = 1, \dots, n$.
> Khi đó dãy thống kê thứ tự $X_{(1)} \le X_{(2)} \le \dots \le X_{(n)}$ và $U_{(1)} \le U_{(2)} \le \dots \le U_{(n)}$ thỏa mãn:
> $$U_{(i)} = F_X(X_{(i)}), \quad \forall i = 1, \dots, n$$
> và $U_{(1)} \le \dots \le U_{(n)}$ chính là dãy thống kê thứ tự của mẫu ngẫu nhiên phân phối đều $\mathcal{U}(0, 1)$. Do đó, các tính chất phân phối của thống kê thứ tự liên tục bất kỳ đều có thể quy về nghiên cứu thống kê thứ tự của phân phối đều.

> [!prf]
> Vì $F_X$ là hàm liên tục và đơn điệu tăng ngặt trên giá của $X$, bất đẳng thức thứ tự được bảo toàn:
> $$X_{(1)} \le X_{(2)} \le \dots \le X_{(n)} \iff F_X(X_{(1)}) \le F_X(X_{(2)}) \le \dots \le F_X(X_{(n)})$$
> Do $U_k = F_X(X_k)$ là một hoán vị của các giá trị sau phép biến đổi, phần tử bé thứ $i$ của tập $\{U_1, \dots, U_n\}$ chính là ảnh của phần tử bé thứ $i$ của tập $\{X_1, \dots, X_n\}$:
> $$U_{(i)} = F_X(X_{(i)})$$
> Mặt khác, theo phép biến đổi tích phân xác suất, $U_1, \dots, U_n \overset{\text{i.i.d}}{\sim} \mathcal{U}(0, 1)$, nên $U_{(i)}$ chính là thống kê thứ tự thứ $i$ từ mẫu phân phối đều kích thước $n$.

> [!prp] (Phân phối của thống kê thứ tự từ mẫu phân phối đều)
> Giả sử $U_1, U_2, \dots, U_n \overset{\text{i.i.d}}{\sim} \mathcal{U}(0, 1)$ và gọi $U_{(1)} \le U_{(2)} \le \dots \le U_{(n)}$ là dãy thống kê thứ tự tương ứng.
> Khi đó, thống kê thứ tự thứ $i$ tuân theo phân phối Beta:
> $$U_{(i)} \sim \mathrm{Beta}(i, n - i + 1)$$
> với kỳ vọng và phương sai lần lượt là:
> $$\mathbb{E}[U_{(i)}] = \frac{i}{n + 1}$$
> $$\mathrm{Var}(U_{(i)}) = \frac{i(n - i + 1)}{(n + 1)^2 (n + 2)}$$

> [!prf]
> Hàm mật độ xác suất biên duyên của thống kê thứ tự thứ $i$ trong mẫu độc lập kích thước $n$ có hàm phân phối $F(u)$ và hàm mật độ $f(u)$ là:
> $$f_{U_{(i)}}(u) = \frac{n!}{(i - 1)!(n - i)!} [F(u)]^{i - 1} [1 - F(u)]^{n - i} f(u)$$
> Với phân phối chuẩn hóa $U \sim \mathcal{U}(0, 1)$, ta có $F(u) = u$ và $f(u) = 1$ với mọi $u \in (0, 1)$. Thay trực tiếp vào công thức:
> $$f_{U_{(i)}}(u) = \frac{n!}{(i - 1)!(n - i)!} u^{i - 1} (1 - u)^{n - i}, \quad u \in (0, 1)$$
> Sử dụng hàm Beta thông qua hàm Gamma:
> $$\mathrm{B}(i, n - i + 1) = \frac{\Gamma(i)\Gamma(n - i + 1)}{\Gamma(n + 1)} = \frac{(i - 1)!(n - i)!}{n!}$$
> Viết lại hàm mật độ dưới dạng chính tắc của phân phối Beta:
> $$f_{U_{(i)}}(u) = \frac{1}{\mathrm{B}(i, n - i + 1)} u^{i - 1} (1 - u)^{(n - i + 1) - 1}, \quad u \in (0, 1)$$
> Do đó $U_{(i)} \sim \mathrm{Beta}(\alpha, \beta)$ với $\alpha = i$ và $\beta = n - i + 1$.
> Áp dụng các hệ thức mô-men của phân phối Beta:
> $$\mathbb{E}[U_{(i)}] = \frac{\alpha}{\alpha + \beta} = \frac{i}{i + (n - i + 1)} = \frac{i}{n + 1}$$
> $$\mathrm{Var}(U_{(i)}) = \frac{\alpha\beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)} = \frac{i(n - i + 1)}{(n + 1)^2 (n + 2)}$$

> [!def] Phương pháp lấy mẫu biến đổi ngược (Inverse Transform Sampling)
> Giả sử cần mô phỏng một biến ngẫu nhiên có hàm phân phối tích lũy $F_X$ liên tục và khả nghịch. Nếu $U \sim \mathcal{U}(0, 1)$ thì biến ngẫu nhiên:
> $$X = F_X^{-1}(U)$$
> sẽ có đúng hàm phân phối tích lũy là $F_X$. Đây là nền tảng của thuật toán sinh số ngẫu nhiên từ bất kỳ phân phối xác suất nào thông qua các bộ tạo số ngẫu nhiên đều chuẩn.

> [!prf]
> Với mọi $x \in \mathbb{R}$, xét hàm phân phối của biến ngẫu nhiên $X = F_X^{-1}(U)$:
> $$\mathbb{P}(X \le x) = \mathbb{P}(F_X^{-1}(U) \le x)$$
> Do $F_X$ liên tục và tăng ngặt, áp dụng $F_X$ lên hai vế của bất đẳng thức bên trong:
> $$\mathbb{P}(F_X^{-1}(U) \le x) = \mathbb{P}(U \le F_X(x))$$
> Vì $U \sim \mathcal{U}(0, 1)$, với mọi giá trị $F_X(x) \in (0, 1)$ ta có $\mathbb{P}(U \le F_X(x)) = F_X(x)$.
> Do đó $\mathbb{P}(X \le x) = F_X(x)$ với mọi $x$, chứng tỏ $X$ tuân theo đúng phân phối xác suất mong muốn.
