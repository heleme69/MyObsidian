
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