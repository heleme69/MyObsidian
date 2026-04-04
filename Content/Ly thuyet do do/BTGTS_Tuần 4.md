> [!exr]
> Sử dụng đa thức Taylor tại $\frac{\pi}{4}$ để xấp xỉ $\cos(42^{\circ})$ đến độ chính xác $10^{-6}$.

> [!sol] 
> - Xét hàm số $f(x) = \cos(x)$. Ta cần xấp xỉ giá trị của hàm tại điểm $x = 42^{\circ}$. Chuyển sang radian:
> 	- Điểm cần xấp xỉ: $x = 42^{\circ} = \frac{7\pi}{30}$.
> 	- Điểm khai triển: $a = \frac{\pi}{4}$.
> 	- Bước nhảy: $\Delta x = x - a = -\frac{\pi}{60}$.
> - Ta có phần dư lagrange: $$R_{n}(x) = \frac{f^{n+1}(c)}{(n+1)!}(x-1)^{n+1}$$, với $c$ nằm giữa ${} \frac{\pi}{4}$ và $\frac{7\pi}{30}$.
> - Ta có $\lvert f^{n+1}(c) \rvert \le 1$, nên để đạt độ chính xác $10^{-6}$, ta cần giải bất phương trình:
> $$|R_n(x)| \le \frac{1}{(n+1)!} \left| -\frac{\pi}{60} \right|^{n+1} \le 10^{-6}$$
> Thử nghiệm các giá trị của $n$: thấy $n = 3$ có $|R_3| \le \frac{1}{4!} \left(\frac{\pi}{60}\right)^4 \approx 3.13 \times 10^{-7} \le 10^{-6}$ (Thỏa mãn)
> Tính các đạo hàm tại $a = \frac{\pi}{4}$: $$ \begin{aligned} f\left(\frac{\pi}{4}\right) &= \cos\left(\frac{\pi}{4}\right) &&= \frac{\sqrt{2}}{2} \\ f'\left(\frac{\pi}{4}\right) &= -\sin\left(\frac{\pi}{4}\right) &&= -\frac{\sqrt{2}}{2} \\ f''\left(\frac{\pi}{4}\right) &= -\cos\left(\frac{\pi}{4}\right) &&= -\frac{\sqrt{2}}{2} \\ f'''\left(\frac{\pi}{4}\right) &= \sin\left(\frac{\pi}{4}\right) &&= \frac{\sqrt{2}}{2} \end{aligned} $$