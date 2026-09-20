
> [!def] (Định nghĩa mẫu)
> Các biến ngẫu nhiên $X_{1}, X_{2}, \dots, X_{n}$ được gọi là mẫu ngẫu nhiên cỡ $n$ chọn từ tổng thể có phân phối $F_{\theta}(x)$ (hoặc pdf $f_{\theta}(x)$). Nếu chúng độc lập với nhau và mỗi $X_{i}$ có cùng pdf $f_{\theta}(x)$ (hay pmf nếu $X_{i}$ rời rạc). Kí hiệu $X_{1}, X_{2}, \dots X_{n} \overset{\text{i.i.d.}}{\sim} f_{\theta}\left(x\right)$ (hoặc $f(x \mid \theta)$) 

> [!def] 
> Giả sử $X_1, \dots, X_n$ là một mẫu ngẫu nhiên kích thước $n$ từ một tổng thể và $T(x_1, \dots, x_n)$ là một hàm nhận giá trị thực hoặc giá trị vector có miền xác định chứa không gian mẫu của $(X_1, \dots, X_n)$. Khi đó, biến ngẫu nhiên hoặc vector ngẫu nhiên $Y = T(X_1, \dots, X_n)$ được gọi là một thống kê (*statistic*). Phân phối xác suất của một thống kê $Y$ được gọi là phân phối mẫu (*sampling distribution*) của $Y$.

> [!def] 5.2.2
> Trung bình mẫu (*sample mean*) là trung bình cộng của các giá trị trong một mẫu ngẫu nhiên. Nó thường được ký hiệu bởi
> $$\bar{X} = \frac{X_1 + \dots + X_n}{n} = \frac{1}{n} \sum_{i=1}^n X_i.$$

> [!def] 5.2.3
> Phương sai mẫu (*sample variance*) là thống kê được định nghĩa bởi
> $$S^2 = \frac{1}{n - 1} \sum_{i=1}^n (X_i - \bar{X})^2.$$
> Độ lệch chuẩn mẫu (*sample standard deviation*) là thống kê được định nghĩa bởi $S = \sqrt{S^2}$.

> [!def] 5.2.4 (Định lý)
> Giả sử $x_1, \dots, x_n$ là các số bất kỳ và $\bar{x} = (x_1 + \dots + x_n)/n$. Khi đó:
> 
> $$\min_a \sum_{i=1}^n (x_i - a)^2 = \sum_{i=1}^n (x_i - \bar{x})^2 \tag{1}$$ và
> $$(n - 1)s^2 = \sum_{i=1}^n (x_i - \bar{x})^2 = \sum_{i=1}^n x_i^2 - n\bar{x}^2 \tag{2}$$

> [!prf] Chứng minh
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

> [!prf] Chứng minh
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

> [!prp] 5.2.6 (Định lý)
> Giả sử $X_1, \dots, X_n$ là một mẫu ngẫu nhiên từ một tổng thể có kỳ vọng $\mu$ và phương sai $\sigma^2 < \infty$. Khi đó:
> 
> a. $\mathrm{E}\bar{X} = \mu$,
> b. $\mathrm{Var}\,\bar{X} = \frac{\sigma^2}{n}$,
> c. $\mathrm{E}S^2 = \sigma^2$.

> [!prf] Chứng minh
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