
> [!exr] 
> Cho hàm $f(x) = 3xe^{x} - \cos x$. Sử dụng dữ liệu bảng 
> $$
> \begin{array}{|l|l|}
> \hline x & f(x) \\
> \hline 1.2 & 11.59006 \\
> \hline 1.29 & 13.78176 \\
> \hline 1.30 & 14.04276 \\
> \hline 1.31 & 14.30741 \\
> \hline 1.40 & 16.86187 \\
> \hline
> \end{array}
>
> $$
> để tính giá trị xấp xỉ của $f''(1.3)$ với $h = 0.1$ và $h = 0.01$. Sau đó, xác định giá trị sai số.

> [!sol]
> - Công thức sai phân trung tâm: 
> $$
> \frac{f''(x) = f(x+h) - 2f(x) + f(x-h)}{h^{2}}
> $$
> - Tính xấp xỉ tại $x = 1.3$ và $h = 0.1$:
> $$
> f''(1.3) \approx \frac{f(1.4) - 2f(1.3) + f(1.2)}{0.1^2} = 36.641
> $$
> 
> - Tính xấp xỉ tại $x = 1.3$ và $h = 0.01$:
> $$
> f''(1.3) \approx \frac{f(1.31) - 2f(1.3) + f(1.29)}{0.01^2} = 36.5
> $$
> 
> - Tính đạo hàm chính xác tại $x = 1.3$:
> $$
> f''(1.3) = 3e^{1.3}(1.3+2) + \cos(1.3) = 9.9e^{1.3} + \cos(1.3) \approx 36.59354
> $$
> 
> - Sai số tuyệt đối: 
> 	- $h = 0.1$: $|36.59354 - 36.641| \approx 0.04746$.
> 	- $h = 0.01$: $|36.59354 - 36.5| \approx 0.09354$.

> [!lem]
> Xét bài toán xấp xỉ đạo hàm cấp của hàm $f(z)$ dựa trên $N$ điểm lưới $x_{j} = x + \alpha_{j}h$, với $j = 0, 1,\dots, N-1$.
> Gọi $P(z)$ là đa thức nội suy bậc $N-1$ của hàm $f(z)$, thỏa điều kiện:
> $$
> P(x_{j}) = f(x_{j}), \forall j \tag{1}
> $$
> Đặt $s = \frac{z-x}{h}$, ta có ${} s_{j} = \alpha_{j} {}$, $\forall j$.
> Đặt $\tilde{P}(s)  = P(x + sh)$ là đa thức nội suy theo biến $s$, có dạng tổng quát: 
> $$
> \tilde{P}(s) = \sum_{m=0}^{N - 1}a_{m}s^{m} \tag{2}
> $$
> Khi đó từ điều kiện $(1)$, ta có: 
> $$
> \tilde{P}(\alpha_{j}) = f(x_{j}), \forall j \tag{3}
> $$
> Ta có phương trình ma trận Vandermonde tương ứng:
> $$
> V
> $$