> [!exr]
> Sử dụng đa thức Taylor tại $\frac{\pi}{4}$ để xấp xỉ $\cos(42^{\circ})$ đến độ chính xác $10^{-6}$.

> [!sol] 
> - Xét hàm số $f(x) = \cos(x)$. Ta cần xấp xỉ giá trị của hàm tại điểm $x = 42^{\circ}$. Chuyển sang radian:
> 	- Điểm cần xấp xỉ: $x = 42^{\circ} = \frac{7\pi}{30}$.
> 	- Điểm khai triển: $a = \frac{\pi}{4}$.
> 	- Bước nhảy: ${} h = x - a = -\frac{\pi}{60}$.
> - Ta có phần dư lagrange: $$R_{n}(x) = \frac{f^{n+1}(c)}{(n+1)!}(x-1)^{n+1}$$, với $c$ nằm giữa ${} \frac{\pi}{4}$ và $\frac{7\pi}{30}$.
> - Ta có $\lvert f^{n+1}(c) \rvert \le 1$, nên để đạt độ chính xác $10^{-6}$, ta cần giải bất phương trình:
> $$|R_n(x)| \le \frac{1}{(n+1)!} \left| -\frac{\pi}{60} \right|^{n+1} \le 10^{-6}$$, 
> ta thấy $n = 3$ có $|R_3| \le \frac{1}{4!} \left(\frac{\pi}{60}\right)^4 \approx 3.13 \times 10^{-7} \le 10^{-6}$ (Thỏa mãn)
> - Đa thức Taylor bậc 3 theo biến $h$ tại $a = \frac{\pi}{4}$: $$P_3(a+h) = f(a) + f'(a)h + \frac{f''(a)}{2}h^2 + \frac{f'''(a)}{6}h^3$$
Tính các đạo hàm tại $a = \frac{\pi}{4}$ ta được $f(a) = f'''(a) = \frac{\sqrt{2}}{2}$ và $f'(a) = f''(a) = -\frac{\sqrt{2}}{2}$. Rút gọn biểu thức: $$ \begin{aligned} P_3(x) &= \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}h - \frac{\sqrt{2}}{4}h^2 + \frac{\sqrt{2}}{12}h^3 \\ &= \frac{\sqrt{2}}{2} \left( 1 - h - \frac{h^2}{2} + \frac{h^3}{6} \right) \end{aligned} $$
> Thay $h = - \frac{\pi}{60}$ và các giá trị đạo hàm, ta có $P_{3}(x)$, kết quả: $\cos(42^{\circ}) \approx 0.743145$








$\pi$