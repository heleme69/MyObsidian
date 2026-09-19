
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
> a. $\min_a \sum_{i=1}^n (x_i - a)^2 = \sum_{i=1}^n (x_i - \bar{x})^2$,
> b. $(n - 1)s^2 = \sum_{i=1}^n (x_i - \bar{x})^2 = \sum_{i=1}^n x_i^2 - n\bar{x}^2$.

> [!prf] Chứng minh
> **a. Chứng minh $\min_a \sum_{i=1}^n (x_i - a)^2 = \sum_{i=1}^n (x_i - \bar{x})^2$**
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
> **b. Chứng minh $(n - 1)s^2 = \sum_{i=1}^n (x_i - \bar{x})^2 = \sum_{i=1}^n x_i^2 - n\bar{x}^2$**
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