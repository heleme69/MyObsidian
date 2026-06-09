
> [!thm] (Prob 9.22: Mở rộng của Định lý Hội tụ Bị chặn (Generalized DCT))
> Giả sử ta thay thế điều kiện bị chặn tuyệt đối bởi một hàm hằng số $g$ bằng một dãy các hàm khả tích biến đổi $g_n$. Phát biểu tổng quát như sau:
> 
> Cho dãy hàm đo được $(f_n)_{n=1}^\infty$ và hàm $f$ đo được trên $D$. Cho dãy hàm không âm, khả tích $(g_n)_{n=1}^\infty$ và hàm không âm, khả tích $g$ trên $D$ thỏa mãn:
> 1. $f_n \to f$ và $g_n \to g$ hầu khắp nơi (a.e.) trên $D$.
> 2. $\lim_{n \to \infty} \int_D g_n \, d\mu = \int_D g \, d\mu < \infty$.
> 3. $|f_n| \le g_n$ trên $D$ với mọi $n \ge 1$.
> 
> Khi đó, hàm giới hạn $f$ cũng khả tích trên $D$ và ta có quyền đưa giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$

> [!prf]
> Vì $|f_n| \le g_n$, lấy giới hạn hai vế ta có $|f| \le g$ hầu khắp nơi trên $D$. Do $g$ khả tích, ta suy ra ngay $f$ cũng khả tích. 
> Từ điều kiện 3, ta có bất đẳng thức kẹp: $-g_n \le f_n \le g_n$. Ta thiết lập hai dãy hàm không âm và áp dụng Bổ đề Fatou:
> 
> **Bước 1: Xét dãy hàm không âm $(g_n + f_n \ge 0)$**
> Áp dụng Bổ đề Fatou cho dãy này trên miền $D$:
> $$\int_D \liminf_{n \to \infty} (g_n + f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n + f_n) \, d\mu$$
> 
> Nhờ tính chất hội tụ điểm hầu khắp nơi, vế trái hội tụ về $\int_D (g + f) \, d\mu$. Vế phải tách thành tổng các $\liminf$:
> $$\int_D g \, d\mu + \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Sử dụng giả thiết $\lim \int_D g_n d\mu = \int_D g d\mu < \infty$, ta triệt tiêu đại lượng hữu hạn này ở hai vế, thu được rào chặn dưới:
> $$\int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu \tag{1}$$
> 
> **Bước 2: Xét dãy hàm không âm $(g_n - f_n \ge 0)$**
> Tiếp tục áp dụng Bổ đề Fatou cho dãy hiệu:
> $$\int_D \liminf_{n \to \infty} (g_n - f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n - f_n) \, d\mu$$
> $$\implies \int_D g \, d\mu - \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D (-f_n) \, d\mu$$
> 
> Chú ý rằng $\liminf (-a_n) = - \limsup a_n$. Thay vào và tiếp tục giản ước $\int_D g \, d\mu < \infty$ ở hai vế:
> $$-\int_D f \, d\mu \le - \limsup_{n \to \infty} \int_D f_n \, d\mu \implies \int_D f \, d\mu \ge \limsup_{n \to \infty} \int_D f_n \, d\mu \tag{2}$$
> 
> **Bước 3: Nguyên lý kẹp**
> Kết hợp hai đánh giá $(1)$ và $(2)$, ta có chuỗi bao hàm:
> $$\limsup_{n \to \infty} \int_D f_n \, d\mu \le \int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Vì bất đẳng thức $\liminf \le \limsup$ luôn đúng, toàn bộ chuỗi trên ép buộc các dấu bằng phải xảy ra. Do đó, giới hạn tồn tại và thỏa mãn đẳng thức:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> Định lý mở rộng được chứng minh hoàn tất. 

> [!prob] (Prob 9.23)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$. Cho $f_{n}$ là dãy hàm thực mở rộng, $\mu$-đo được trên $D \in \mathfrak{A}$. Giả sử:
> 1. $\lim_{ n \to \infty }f_{n} = f$ a.e trên $D$,
> 2. $f_{n}$ và $f$ khả tích đối với $\mu$ trên $D$.
>    
> (a) Nếu ta có $\lim_{ n \to \infty } \int_{D}|f_{n}| d\mu = \int_{D} |f|d\mu$ thì $\lim_{ n \to \infty } \int_{D}f_{n} d\mu = \int_{D} fd\mu$
> (b) Chứng tỏ (a) sai bằng cách cho phản ví dụ

> [!prf]
> Chứng minh ý (a)
> Đặt $g_{n} = |f_{n}|$ và $g = |f|$. Ta sẽ chứng minh $f_{n}$ và $g$ thỏa 3 điều kiện của định lý DCT mở rộng từ Prob 9.22 để áp dụng chứng minh ý (a). 
> Ta có $\lim_{ n \to \infty }f_{n} = f$ a.e thì suy ra được $\lim_{ n \to \infty } |f_{n}| = |f|$ a.e trên $D$, điều này có được do hàm lấy trị tuyệt đối là liên tục nên ta được phép đưa qua giới hạn. Ta cũng có $\lim_{ n \to \infty }g_{n} = g$ a.e trên D, $g$ là khả tích đối với $\mu$ và $\lim_{ n \to \infty }\int_{D}g_{n} d\mu = \int_{D} g d\mu$. Vậy $f_{n}$ và $g_{n}$ thỏa điều kiện 1 và 2 của DCT mở rộng.
> 
> Gọi $f^+_{n}$ và $f^-_{n}$ lần lượt là phần dương và phần âm của dãy hàm $f_{n}$ ($f_{n} = f^+_{n} - f^-_{n}$ với $f^+_{n}, f^-_{n} \ge 0$).








$\xi$