> [!problem] (Bài tập 1)  
> Cho mẫu ngẫu nhiên kích thước $n = 3$, ký hiệu $(X_1, X_2, X_3)$, lấy từ một tổng thể có kỳ vọng $\mu$ và phương sai $\sigma^2$.  
> Xét thống kê:  
> $$
> T_a = \tfrac{1}{4}(X_1 + aX_2 + X_3).
> $$  
>  
> (a) Tìm $a$ sao cho $T_a$ là ước lượng không chệch của $\mu$.  
> *Gợi ý:* $\hat{\theta}$ được gọi là ước lượng không chệch của $\mu$ nếu $E(\hat{\theta}) = \mu$.  
>  
> (b) Tính phương sai của $T_a$.  
> *Gợi ý:* $(X_1, X_2, \ldots, X_n)$ được chọn từ tổng thể có kỳ vọng $\mu$ và phương sai $\sigma^2$, tức là các $X_i$ độc lập và cùng phân phối, với $E(X_i) = \mu$, $Var(X_i) = \sigma^2$.  
>  
> (c) (Tuỳ chọn) Xét sai số bình phương trung bình  
> $$
> MSE(T_a, \mu) = E[(T_a - \mu)^2].
> $$  
> Tìm giá trị $a$ sao cho $T_a$ là ước lượng tốt nhất của $\mu$, tức là tối thiểu hóa $MSE$.

> [!ans]
> a)
> Tính kỳ vọng $T_{a}$:
> $$
> \begin{align}
> \mathbb{E}(T_a) = \mathbb{E}\left[\frac{1}{4}(X_1 + aX_2 + X_3)\right] &=  \frac{1}{4}\left[\mathbb{E}(X_1) + a\mathbb{E}(X_2) + \mathbb{E}(X_3)\right] \\
> &= \frac{1}{4}(\mu + a\mu + \mu) = \frac{a+2}{4}\mu
> \end{align}
> $$
> Để $T_{a}$ là ước lượng không chệch của $\mu$, ta cần:
> $$\mathbb{E}(T_{a}) = \mu \iff \frac{a+2}{4}\mu = \mu \iff \frac{a+2}{4} = 2 \iff a =2$$
> Kết luận: $a = 2$ thì $T_{a}$ là ước lượng không chệch của $\mu$.
> 
> b)
> Tính phương sai $T_{a}$:
> $$
> \begin{align}
> \text{Var}(T_a) = \text{Var}\left[\frac{1}{4}(X_1 + aX_2 + X_3)\right] &=  \frac{1}{16}\left[\text{Var}(X_1) + a^2\text{Var}(X_2) + \text{Var}(X_3)\right] \\
> &= \frac{1}{16}(\sigma ^{2} + a^{2} + \sigma ^{2} +\sigma ^{2}) = \frac{a^{2}+2}{16} \sigma ^{2}
> \end{align}
> $$
> 
> c)
> Ta có công thức trung bình bình phương sai số:
> $$
> MSE(T_a, \mu) = \text{Var}(T_a) + \left[\text{Bias}(T_a, \mu)\right]^2
> $$
> Tính độ chệch của ước lượng:
> $$
> \text{Bias}(T_a, \mu) = \mathbb{E}(T_a) - \mu = \left(\frac{a+2}{4} - 1\right)\mu = \frac{a-2}{4}\mu
> $$
> Để tìm $a$ cực tiểu hóa hàm số này, ta lấy đạo hàm theo $a$:
> $$
> \frac{d}{da}\left[MSE(T_a, \mu)\right] = \frac{2a}{16}\sigma^2 + \frac{2(a-2)}{16}\mu^2
> $$
> Giải tìm $a$:
> $$
> a\sigma^2 + (a-2)\mu^2 = 0 \iff a(\sigma^2 + \mu^2) = 2\mu^2 \iff a = \frac{2\mu^2}{\sigma^2 + \mu^2}
> $$
> Kết luận: Giá trị $a$ giúp $T_a$ tối ưu nhất theo nghĩa cực tiểu MSE là **$a = \frac{2\mu^2}{\sigma^2 + \mu^2}$**.

> [!problem] (Bài tập 2)  
> Cho $X_1, X_2, \ldots, X_n$ là mẫu ngẫu nhiên lấy từ tổng thể có hàm mật độ xác suất:  
> $$
> f(x; \theta) = \frac{1}{\theta} e^{-x/\theta}, \quad 0 < x < \infty, \; 0 < \theta < \infty,
> $$
> và bằng 0 trong các trường hợp khác.  
>  
> (a) Tìm ước lượng hợp lý cực đại $\hat{\theta}_{MLE}$ cho $\theta$.  
>  
> (b) $\hat{\theta}_{MLE}$ có phải là ước lượng không chệch cho $\theta$ hay không?  
>  
> (c) *(không bắt buộc)* Chứng minh rằng miền bác bỏ tối ưu để kiểm định $H_0 : \theta = \theta' = 1$ so với $H_1 : \theta = \theta'' = 2$ là  
> $$
> C = \{ (X_1, X_2, \ldots, X_n) : \hat{\theta}_{MLE} \geq k \},
> $$
> với $k = k(\alpha)$ là một số phụ thuộc vào mức ý nghĩa $\alpha$.  
>  
> (d) *(không bắt buộc)* Ở câu (c), xét trường hợp $n = 1$. Tìm $k$ để mức ý nghĩa kiểm định là $\alpha = 0,05$.  
>  
> (e) *(không bắt buộc)* $C$ có phải miền bác bỏ tối ưu đều để kiểm định $H_0 : \theta = 1$ so với $H_1 : \theta > 1$ hay không?

> [!ans]
> Nhận xét $f(x;\theta) = \frac{1}{\theta}e^{-x/\theta}$ với $x > 0$ là phân phối mũ với kỳ vọng $\mathbb{E}(X_i) = \theta$.
> a)
> Hàm hợp lý của mẫu:
> $$
> L(\theta) = \prod_{i=1}^n \frac{1}{\theta}e^{-x_i/\theta} = \frac{1}{\theta^n} e^{-\frac{1}{\theta}\sum_{i=1}^n x_i}
> $$
> Lấy logarit:
> $$
> \ell(\theta) = \ln L(\theta) = -n \ln\theta - \frac{1}{\theta}\sum_{i=1}^{n} x_{i}
> $$
> Tìm cực trị hàm $\ell(\theta)$:
> $$
> \ell'(\theta) = -\frac{n}{\theta} + \frac{1}{\theta ^{2}} \sum_{i=1}^{n} x_{i} = 0 \iff \frac{1}{\theta ^{2}} \sum_{i=1}^{n} = \frac{n}{\theta} \iff \theta = \frac{1}{n} \sum_{i=1}^{n} x_{i} = \bar{X}
> $$
> Kiểm tra cực đại:
> $$
> \ell''(\bar{X}) = \frac{n}{\bar{X^{2}}} - \frac{2}{\bar{X}^{3}} \cdot n \bar{X} = -\frac{n}{\bar{X}^{2}} < 0
> $$
> Kết luận: Ước lượng hợp lý cực đại là **$\hat{\Theta}_{MLE} = \bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$**.
>
> b)
> Tính kỳ vọng $\hat{\Theta}_{MLE}$:
> $$
> \mathbb{E}(\hat{\Theta}_{MLE})= \mathbb{E}\left( \frac{1}{n} \sum_{i=1}^{n} X_{i} \right) = \frac{1}{n} \mathbb{E}\left( \sum_{i=1}^{n} X_{i} \right) 
> $$
> Vì $X$ tuân theo phân phối mũ, ta có $\mathbb{E}(X_{i}) = \theta$. Do đó:
> $$
> \frac{1}{n} \mathbb{E}\left( \sum_{i=1}^{n} X_{i} \right) = \frac{1}{n} \cdot n \theta = \theta 
> $$
> Kết luận: $\hat{\Theta}_{MLE}$ là ước lượng không chệch cho $\theta$.
>
> c)
> Theo bổ đề Neyman-Pearson:
> $$
> \frac{L(\theta=2)}{L(\theta=1)} \ge c \iff \frac{\frac{1}{2^n} e^{-\frac{1}{2}\sum X_i}}{\frac{1}{1^n} e^{-\frac{1}{1}\sum X_i}} \ge c \iff e^{\frac{1}{2}\sum X_i} \ge c \cdot2^{n}
> $$
> Lấy lograrit:
> $$
> \frac{1}{2}\sum_{i=1}^n X_i \ge \ln(c \cdot 2^n) \iff \frac{1}{n}\sum_{i=1}^n X_i \ge \frac{2\ln(c \cdot 2^n)}{n} \iff \hat{\Theta}_{MLE} \ge k
> $$
> Kết luận: Miền bác bỏ tối ưu có dạng: $C = \{(X_1, \dots, X_n): \hat{\Theta}_{MLE} \ge k\}$.
>
> d)
> Với $n = 1$, $\hat{\Theta}_{MLE} = X_{1}$. Miền bác bỏ trở thành $C = \{ X_1 \ge k \}$.
> 
> Mức ý nghĩa $\alpha$ là xác suất bác bỏ sai $H_0$ (tức là bác bỏ $H_0$ khi $H_0: \theta=1$ đúng):
> $$
> \alpha = \mathbb{P}(X_1 \ge k \mid \theta = 1) = 0.05
> $$
> Khi $\theta = 1$, hàm mật độ của $X_1$ là $f(x; 1) = e^{-x}$ với $x > 0$. Ta có:
> $$
> \mathbb{P}(X_1 \ge k) = \int_{k}^{\infty} e^{-x} dx = \left[ -e^{-x} \right]_k^{\infty} = e^{-k} = 0.05
> $$
> Giải tìm $k$:
> $$
> e^{-k} = 0.05 \iff k = -\ln(0.05) \approx 2.996
> $$

> [!problem] (Bài tập 3)  
> Cho $X_1, X_2, \ldots, X_n$ là mẫu ngẫu nhiên lấy từ tổng thể có hàm mật độ xác suất:  
> $$
> f(x; \theta) = \theta x^{\theta - 1}, \quad 0 < x < 1, \; 0 < \theta < \infty,
> $$
> và bằng 0 trong các trường hợp khác.  
>  
> (a) Chứng minh rằng ước lượng hợp lý cực đại cho $\theta$ là:  
> $$
> \hat{\Theta}(X_1, \ldots, X_n) = \frac{-n}{\ln(X_1 X_2 \cdots X_n)}.
> $$  
>  
> (b) Chứng minh rằng miền bác bỏ tối ưu để kiểm định $H_0 : \theta = 1$ so với $H_1 : \theta = 2$ là:  
> $$
> C = \{ (X_1, \ldots, X_n) : \hat{\Theta}(X_1, \ldots, X_n) \geq k \}.
> $$  
>  
> (c) Trong câu (b), xét trường hợp $n = 1$. Tìm $k$ để mức ý nghĩa của kiểm định là $\alpha = 0{,}05$.  
>  
> (d) $C$ có phải là miền bác bỏ tối ưu đều để kiểm định $H_0 : \theta = 1$ so với $H_1 : \theta > 1$ hay không?

> [!ans]
> a)
> Hàm hợp lý của mẫu:
> $$
> L(\theta) = \prod_{i=1}^{n} \theta x_{i}^{\theta -1} = \theta ^{n} \left( \prod_{i=1}^{n} x_{i} \right)^{\theta - 1}
> $$
> Lấy logarit:
> $$
> \ell(\theta) = n\ln(\theta) + (\theta - 1) \sum_{i=1}^{n} \ln(x_{i})
> $$
> Tìm cực trị hàm $\ell(\theta)$:
> $$
> \ell'(\theta) = \frac{n}{\theta} + \sum_{i=1}^{n} \ln(x_{i}) = 0 \iff \theta = - \frac{n}{\sum_{i=1}^{n} \ln x_{i}} = -\frac{n}{\ln x_{1}x_{2}\dots x_{n}}
> $$
> Kết luận: $\hat{\Theta}_{MLE} = - \frac{n}{\ln(X_{1}X_{2}\dots X_{n})}$.
>
> b)
> Theo bổ đề Neymann-Pearson:
> $$
> \frac{L(\theta=2)}{L(\theta=1)} \ge c \iff \frac{2^n \left(\prod X_i\right)^{2-1}}{1^n \left(\prod X_i\right)^{1-1}} \ge c \iff \prod_{i=1}^n X_i \ge c \cdot 2^{n}
> $$
> Lấy logarit:
> $$
>  \ln\left(\prod_{i=1}^n X_i\right) \ge \ln\left(\frac{c}{2^n}\right) \iff \frac{-n}{\ln\left(\prod_{i=1}^n X_i\right)} \ge \frac{-n}{\ln\left(\frac{c}{2^n}\right)} \iff  \hat{\Theta} \ge k
> $$
> Kết luận: Miền bác bỏ tối ưu có dạng $C = \{(X_1,\dots,X_n): \hat{\Theta} \ge k\}$
> 
> c)
> Với $n = 1$, $\hat{\Theta}_{MLE} = \frac{-1}{\ln X_{1}}$. Ta có miền bác bỏ tối ưu $C = \{ \hat{\Theta} \ge k\} = \{ X_{1} \ge e^{-1/k} \}$. Ta đặt $m = e^{-1/k}$.
> 
> Tính xác suất sai lầm loại I (bác bỏ $H_{0}$ khi $H_{0}: \theta = 1$ đúng):
> $$
> \alpha = \mathbb{P}(X_{1} \ge m \mid \theta = 1) = \int_{m}^{\infty} 1\cdot e^{1 - 1} = 1 - k =0.05 \iff m = 0.95
> $$
> Giải tìm $k$:
> $$
> e^{-1/k} = 0.95 \iff k = -\frac{1}{\ln 0.95} \approx 19.496
> $$

> [!problem] (Bài tập 4)  
> Xét các biến ngẫu nhiên $Y_1, \ldots, Y_n$ thỏa mô hình hồi quy tuyến tính:  
> $$
> Y_j = \beta_0 + \beta_1 X_j + \epsilon_j, \quad j = 1, \ldots, n,
> $$
> trong đó $\epsilon_j \overset{i.i.d.}{\sim} \mathcal{N}(0, \sigma^2)$ với $\sigma^2$ đã biết, còn $\beta_0$ và $\beta_1$ là các hệ số hồi quy.  
>  
> (a) Xác định phân phối có điều kiện $Y_j \mid X_j = x_j$, với $x_j$ ($j = 1, \ldots, n$) là các hằng số cố định. Viết hàm phân phối có điều kiện $f(y_j \mid x_j)$.  
>  
> (b) Xây dựng ước lượng cho các tham số $\beta_0$ và $\beta_1$ bằng phương pháp hợp lý cực đại.

> [!ans]
> Mô hình cho trước: $Y_j = \beta_0 + \beta_1 X_j + \epsilon_j$ với $\epsilon_j \overset{i.i.d.}{\sim} \mathcal{N}(0, \sigma^2)$ ($\sigma^2$ đã biết).
> 

> [!problem] (Bài tập 5)  
> Cho biến ngẫu nhiên $X \sim G(\theta)$ (phân phối hình học) với tham số $\theta \in (0,1)$, có hàm xác suất:  
> $$
> P(X = x) = \theta (1 - \theta)^{x - 1}, \quad x = 1, 2, \ldots
> $$  
>  
> Xét bài toán kiểm định giả thuyết:  
> $$
> H_0 : \theta = \theta_0 \quad \text{vs.} \quad H_1 : \theta = \theta_1, \quad \text{với } \theta_1 > \theta_0.
> $$  
>  
> Yêu cầu: Tìm kiểm định mạnh nhất cho bài toán trên và xác định miền bác bỏ tương ứng.

> [!ans]
> Hàm hợp lý của mẫu tuân theo phân phối hình học:
> $$
> L(\theta) = \mathbb{P}(X = x \mid \theta) = \theta(1- \theta)^{x - 1}
> $$
> Theo bổ đề Neymann-Pearson:
> $$
> \frac{L(\theta_1)}{L(\theta_0)} = \frac{\theta_1(1 - \theta_1)^{x - 1}}{\theta_0(1 - \theta_0)^{x - 1}} = \left( \frac{\theta_1}{\theta_0} \right) \cdot \left( \frac{1 - \theta_1}{1 - \theta_0} \right)^{x - 1} \ge c
> $$
> Lấy logarit:
> $$
> \ln \left[ \left( \frac{1 - \theta_1}{1 - \theta_0} \right)^{x - 1} \right] \ge \ln \left( c \cdot \frac{\theta_0}{\theta_1} \right) \iff (x - 1) \ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right) \ge \ln \left( c \cdot \frac{\theta_0}{\theta_1} \right)
> $$
> Vì $\theta_{1} > \theta_{2}$:
> $$
> \frac{1 - \theta_1}{1 - \theta_0} < 1 \implies \ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right) < 0
> $$
> Giải tìm k:
> $$
> x - 1 \le \frac{\ln \left( c \cdot \frac{\theta_0}{\theta_1} \right)}{\ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right)} \iff x \le 1 + \frac{\ln \left( c \cdot \frac{\theta_0}{\theta_1} \right)}{\ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right)}
> $$
> Kết luận: Miền bác bỏ có dạng: $$C = \{ x \in \mathbb{N}^* : x \le k \}$$

> [!prob] (Bài tập 6) 
> Đo đường kính (đv: mm) của một số chi tiết máy do một máy tiện tự động sản xuất, ta ghi nhận được số liệu như sau:
>
> | Đường kính | 12,00 | 12,05 | 12,10 | 12,15 | 12,20 | 12,25 | 12,30 | 12,35 | 12,40 |
> |------------|-------|-------|-------|-------|-------|-------|-------|-------|-------|
> | Số lượng   |   2   |   3   |   7   |   9   |  10   |   8   |   6   |   5   |   3   |
>
> (a) Tính trung bình mẫu, phương sai mẫu và độ lệch chuẩn mẫu.  
> 
> (b) Tìm khoảng tin cậy (KTC) 98% cho đường kính trung bình của các chi tiết máy.  
> 
> (c) Nếu muốn sai số ước lượng KTC cho trung bình không quá $E = 0{,}02 \,\text{mm}$ với độ tin cậy 98% thì phải lấy cỡ mẫu tối thiểu bao nhiêu?  
> 
> (d) Những chi tiết máy có đường kính nhỏ hơn 12,1 và lớn hơn 12,30 được xem là không đạt tiêu chuẩn kĩ thuật. Tìm khoảng tin cậy 96% cho tỷ lệ chi tiết máy không đạt tiêu chuẩn.

> [!ans]
> a) b)
> Tính trung bình mẫu: 
> $$
> \bar{x} = \frac{646.95}{53} \approx 12.2066 \text{ mm}
> $$
> Phương sai mẫu:
> $$
> s^2 = \frac{1}{53 - 1} \left[ 7901.6125 - 53 \cdot (12.20660378)^2 \right] \approx 0.008677 \text{ mm}^2
> $$
> Độ lệch chuẩn: 
> $$
> s = \sqrt{0.008677} \approx 0.0931 \text{ mm}
> $$
> Độ tin cậy: $1- \alpha = 0.98 \implies \alpha = 0.02 \implies Z_{\alpha/2} = Z_{0.01} \approx 2.326$.
>
> Dung sai: 
> $$\epsilon = Z_{\alpha/2} \cdot \frac{s}{\sqrt{n}} = 2.326 \cdot \frac{0.09315}{\sqrt{53}} \approx 2.326 \cdot 0.0128 = 0.0298 \text{ mm}$$
> Khoảng tin cậy 98% cho đường kính trung bình là:
> $$
> \left( \bar{x} - \epsilon \,;\, \bar{x} + \epsilon \right) = \left( 12.2066 - 0.0298 \,;\, 12.2066 + 0.0298 \right) = \left( 12.1768 \,;\, 12.2364 \right)
> $$
> Kết luận: Với độ tin cậy 98%, đường kính trung bình của các chi tiết máy nằm trong khoảng từ $12.1768 \text{ mm}$ đến $12.2364 \text{ mm}$
> 
> c)
> Với sai số tối đa $\epsilon = 0.02 \text{ mm}$, độ tin cậy 98% $\implies Z_{0.01} = 2.326$. Ta có cỡ mẫu tối thiểu:
> $$
> n \ge \left( \frac{Z_{\alpha/2} \cdot s}{E} \right)^2 = \left( \frac{2.326 \cdot 0.09315}{0.02} \right)^2 = \left( \frac{0.21667}{0.02} \right)^2 = (10.8333)^2 \approx 117.36
> $$
> Kết luận: Phải lấy cỡ mẫu tối thiểu là $n = 118$ chi tiết máy
> 
> d)
> Ta có chi tiết không đạt là chi tiết có đường kính $< 12.1 \text{ mm}$ hoặc $> 12.30 \text{ mm}$.
> 
> Số chi tiết $< 12.1$: gồm nhóm $12.00$ ($2$ chi tiết) và $12.05$ ($3$ chi tiết) $\implies 2 + 3 = 5$ chi tiết,
> 
> Số chi tiết $> 12.30$: gồm nhóm $12.35$ ($5$ chi tiết) và $12.40$ ($3$ chi tiết) $\implies 5 + 3 = 8$ chi tiết. 
> 
> Vây tổng có $m = 5+ 8 = 13$ chi tiết không đạt.
> 
> Tỷ lệ mẫu không đạt: 
> $$
> f = \frac{m}{n} = \frac{13}{53} \approx 0.2453 \quad (24.53\%)
> $$
> 
> Độ tin cậy: ${} \alpha = 0.04 \implies \alpha/2 = 0.02 \implies Z_{0.02} \approx 2.054$. 
>
> Sai số ược lượng tỉ lệ:
> $$\epsilon = Z_{\alpha/2} \cdot \sqrt{\frac{f(1-f)}{n}} = 2.054 \cdot \sqrt{\frac{0.2453 \cdot (1 - 0.2453)}{53}} = 2.054 \cdot \sqrt{0.003493} \approx 2.054 \cdot 0.0591 = 0.1214$$
> 
> Khoảng tin cậy 96% cho tỷ lệ thực tế $p$ là:
> $$
> \left( f - \epsilon \,;\, f + \epsilon \right) = \left( 0.2453 - 0.1214 \,;\, 0.2453 + 0.1214 \right) = \left( 0.1239 \,;\, 0.3667 \right)
> $$
> Kết luận: Với độ tin cậy 96%, tỷ lệ chi tiết máy không đạt tiêu chuẩn của nhà máy nằm trong khoảng từ **$12.39\%$ đến $36.67\%$**

> [!prob]
> Bài tập 7
>
> Cục khí tượng Australia ghi nhận về lượng mưa trung bình hằng năm (đv: mm) trong giai đoạn 1983–2002 với dữ liệu đã được sắp xếp theo thứ tự như sau:
>
> | 338 | 340 | 390 | 400 | 418 | 452 | 455 | 460 | 470 | 470 |
> |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
> | 482 | 498 | 500 | 522 | 526 | 554 | 558 | 565 | 584 | 728 |
>
> Giả sử lượng mưa xấp xỉ phân phối chuẩn $N(\mu,\sigma^2)$ với $\mu\in\mathbb{R},\ \sigma>0$ **không biết**.
>
> (a) Tìm một ước lượng điểm của:
>
> Trung bình tổng thể $\mu$;
> Phương sai tổng thể $\sigma^2$;
> Độ lệch chuẩn tổng thể $\sigma$.
>
> (b) Xây dựng khoảng tin cậy $99\%$ cho lượng mưa trung bình hằng năm của nước Australia.
>
> (c) Với độ tin cậy $95\%$, giả sử độ lệch chuẩn là $\sigma=90$. Nếu muốn sai số ước lượng $\varepsilon$ (cho khoảng tin cậy lượng mưa trung bình hằng năm) không vượt quá $30$ mm thì cần khảo sát lượng mưa của ít nhất bao nhiêu năm?
>
> (d) Ghi nhận lượng mưa của $120$ tháng thấy có $15$ tháng có lượng mưa ít.
>
> Tìm khoảng tin cậy $95\%$ cho tỷ lệ tháng có lượng mưa ít.
>
> Với dữ liệu lượng mưa hằng năm ở Australia (giai đoạn 1983–2002) ở trên, hãy:
>
> *(Nếu đề bài cho dữ liệu chưa sắp xếp thì cần sắp dữ liệu theo thứ tự không giảm trước.)*
>
> (e) Lập bảng phân bố tần số và vẽ đồ thị Histogram cho dữ liệu về lượng mưa này.
>
> (f) Xác định các tứ phân vị:
>
> $Q_1$ (phân vị mức $25\%$);
> $Q_2$ (phân vị mức $50\%$);
> $Q_3$ (phân vị mức $75\%$).
>
> Từ đó suy ra khoảng tứ phân vị:
>
> $$IQR = Q_3 - Q_1.$$
>
> (g) Xác định các giá trị ngoại lai (*outliers*) (nếu có).

> [!ans]
> a)
> Tính trung bình tổng thể ($\mu$):
> $$
> \bar{x} = \frac{1}{n}\sum_{i=1}^{20} x_i = \frac{9842}{20} = 492.1 \text{ mm}
> $$
> Tính phương sai tổng thể ($\sigma ^{2}$):
> $$
> s^2 = \frac{1}{n-1}\left(\sum_{i=1}^{20} x_i^2 - n\bar{x}^2\right) = \frac{1}{19}\left(4981440 - 20 \cdot 492.1^2\right) \approx 7273.2526 \text{ mm}^{2}
> $$
> 
> b)
> Vì cỡ mẫu $n  = 20< 30$, ta sử dụng thống kê Student $t$-distribution với bậc tự do $df = n - 1 = 19$
>
> Độ tin cậy: $1 - \alpha = 0.99 \implies \alpha/2 = 0.005 \implies t_{\alpha/2}^{(n-1)} = t_{0.005}^{(19)} \approx 2.861$
> 
> Sai số ước lượng: 
> $$
> \varepsilon = t_{0.005}^{(19)} \cdot \frac{s}{\sqrt{n}} = 2.861 \cdot \frac{85.2834}{\sqrt{20}} \approx 2.861 \cdot 19.0699 \approx 54.5591 \text{ mm}
> $$
> 
> Khoảng tin cậy 99% cho $\mu$ là:
> $$(\bar{x} - \varepsilon \,;\, \bar{x} + \varepsilon) = (492.1 - 54.5591 \,;\, 492.1 + 54.5591) = (437.5409 \,;\, 546.6591)$$
> 
> Kết luận: Lượng mưa trung bình hàng năm nằm trong khoảng $[437.5409 \text{ mm} \,;\, 546.6591 \text{ mm}]$ với độ tin cậy 99%.
> 
> c)
> Độ lệch chuẩn: $\sigma = 90$
> 
> Độ tin cậy: $1 - \alpha = 0.95 \implies \alpha/2 = 0.025 \implies Z_{\alpha/2} = Z_{0.025} = 1.96$
>
>Sai số tối đa cho phép: $\varepsilon_0 = 30$ mm.
>
> Tính cỡ mẫu khi đã biết phương sai:
> $$
> n \ge \left(\frac{Z_{\alpha/2} \cdot \sigma}{\varepsilon_0}\right)^2 = \left(\frac{1.96 \cdot 90}{30}\right)^2 = (1.96 \cdot 3)^2 = (5.88)^2 = 34.5744
> $$
> 
> Kết luận: Cần khảo sát lượng mưa của **ít nhất 35 năm**.
>
> d)
> Cỡ mẫu tháng: $n' = 120$, số tháng lượng mưa ít: $m = 15$
> 
> Tỷ lệ mẫu: $f = \frac{15}{120} = 0.125$.
> 
> Độ tin cậy $1 - \alpha = 0.95 \implies Z_{\alpha/2} = Z_{0.025} = 1.96$.
> 
> Sai số ước lượng tỷ lệ:
> $$
> \varepsilon_p = Z_{0.025} \cdot \sqrt{\frac{f(1-f)}{n'}} = 1.96 \cdot \sqrt{\frac{0.125 \cdot 0.875}{120}} = 1.96 \cdot \sqrt{0.0009115} \approx 1.96 \cdot 0.03019 \approx 0.0592
> $$
> 
> Khoảng tin cậy 95% cho tỷ lệ thực tế $p$ là:
> $$
> (f - \varepsilon_p \,;\, f + \varepsilon_p) = (0.125 - 0.0592 \,;\, 0.125 + 0.0592) = (0.0658 \,;\, 0.1842)
> $$
> Kết luận: Khoảng tin cậy 95% cho tỷ lệ tháng có lượng mưa ít là $[6.58\% \,;\, 18.42\%]$
> 
> e)
> Dữ liệu có giá trị nhỏ nhất $X_{min} = 338$ và lớn nhất $X_{max} = 728$. Khoảng biến thiên $R = 728 - 338 = 390$. 
> Ta chia dữ liệu thành 4 nhóm (lớp), mỗi nhóm có độ rộng là $100$ đơn vị (bắt đầu từ 330):
> 
> | Lượng mưa (mm) | Tần số (Số năm) |
> | :--- | :---: |
> | $[330 \,;\, 430)$ | 5 |
> | $[430 \,;\, 530)$ | 10 |
> | $[530 \,;\, 630)$ | 4 |
> | $[630 \,;\, 730]$ | 1 |
> | **Tổng** | **20** |
> 
> f)
> Tứ phân vị thứ nhất $Q_1$ (gồm 10 phần tử đầu tiên từ vị trí 1 đến 10):
> $$
> Q_1 = \frac{x_5 + x_6}{2} = \frac{418 + 452}{2} = 435 \text{ mm}
> $$
>
> Tứ phân vị thứ hai $Q_2$ (Trung vị là vị trí thứ 10 và 11):
> $$
> Q_2 = \frac{x_{10} + x_{11}}{2} = \frac{470 + 482}{2} = 476 \text{ mm}
> $$
> 
> Tứ phân vị thứ ba $Q_3$ (gồm 10 phần tử cuối từ vị trí 11 đến 20):
> $$
> Q_3 = \frac{x_{15} + x_{16}}{2} = \frac{526 + 554}{2} = 540 \text{ mm}
> $$
> 
> Khoảng tứ phân vị IQR: 
> $$
> IQR = Q_3 - Q_1 = 540 - 435 = 105 \text{ mm}
> $$
> Giá trị ngoại lai $x$là các điểm nằm ngoài khoảng hàng rào hợp lý $[L_L \,;\, L_U]$ định bởi:
> $$
> L_L = Q_1 - 1.5 \cdot IQR = 435 - 1.5 \cdot 105 = 435 - 157.5 = 277.5 \text{ mm}
> $$ 
> $$
> L_U = Q_3 + 1.5 \cdot IQR = 540 + 1.5 \cdot 105 = 540 + 157.5 = 697.5 \text{ mm}
> $$
> Không có giá trị nào nhỏ hơn $277.5$ mm và có giá trị $728$ mm lớn hơn hàng rào trên $697.5$ mm.
> 
> Kết luận: Tập dữ liệu tồn tại duy nhất **một giá trị ngoại lai lớn là 728 mm**.

> [!prob] (Bài tập 8)
>
> Một khảo sát về chiều cao $X$ (cm) của một giống cây trồng, người ta quan sát một mẫu và có kết quả sau:
>
> | Chiều cao (cm) | 100 | 110 | 120 | 130 | 140 | 150 | 160 |
> |:-------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | Số cây | 10 | 10 | 15 | 30 | 10 | 10 | 15 |
>
> Giả sử chiều cao $X$ có phân phối chuẩn.
>
> (a) Ước lượng chiều cao trung bình của giống cây trồng trên với độ tin cậy $95\%$.
>
> (b) Những cây trồng có chiều cao từ $135$ cm trở lên được gọi là những cây "cao". Hãy ước lượng tỷ lệ những cây cao với độ tin cậy $96\%$.
>
> (c) Một chuyên gia lâm nghiệp cho rằng chiều cao trung bình của giống cây này là $133$ cm. Hãy kiểm định ý kiến trên với mức ý nghĩa $3\%$.
>
> (d) Người ta áp dụng phương pháp mới trong việc trồng và chăm sóc cây. Sau một thời gian, khảo sát $100$ cây đã trồng theo phương pháp mới được số liệu sau:
>
> | Chiều cao (cm) | 100 | 110 | 120 | 130 | 140 | 150 | 160 |
> |:-------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | Số cây | 6 | 10 | 20 | 34 | 12 | 7 | 11 |
>
> Với mức ý nghĩa $2\%$, kiểm định xem phương pháp mới có làm tăng chiều cao trung bình của cây không.
>
> (e) Có ý kiến cho rằng phương pháp mới làm tăng tỷ lệ cây "cao".
>
> Với mức ý nghĩa $1\%$, hãy kiểm tra ý kiến này.

> [!ans]
> a)
> Độ tin cậy: $1 - \alpha = 0.95 \implies \alpha/2 = 0.025 \implies Z_{0.025} = 1.96$.
>
> Sai số ước lượng trung bình: 
> $$
> E = Z_{\alpha/2} \cdot \frac{s}{\sqrt{n}} = 1.96 \cdot \frac{17.3787}{\sqrt{100}} \approx 3.4062 \text{ cm}
> $$
> Khoảng tin cậy 95% cho chiều cao trung bình $\mu$ là:
> $$
> (\bar{x} - E \,;\, \bar{x} + E) = (131 - 3.4062 \,;\, 131 + 3.4062) = (127.5938 \,;\, 134.4062)
> $$
> Kết luận: Với độ tin cậy 95%, chiều cao trung bình nằm trong khoảng $[127.5938 \text{ cm} \,;\, 134.4062 \text{ cm}]$
> 
> b)
> Số cây "cao" trong mẫu (cây có chiều cao 135cm trở lên): $m = 10 + 10 + 15 = 35$ cây
> 
> Tỷ lệ mẫu: $f = \frac{35}{100} = 0.35$
> 
> Độ tin cậy $1 - \alpha = 0.96 \implies \alpha/2 = 0.02 \implies Z_{0.02} \approx 2.054$
> 
> Sai số ước lượng tỷ lệ:
> $$
> E_p = Z_{\alpha/2} \cdot \sqrt{\frac{f(1-f)}{n}} = 2.054 \cdot \sqrt{\frac{0.35 \cdot 0.65}{100}} \approx 2.054 \cdot 0.0477 = 0.0980
> $$
> 
> Khoảng tin cậy 96% cho tỷ lệ thực tế $p$ là:
> $$
> (f - E_p \,;\, f + E_p) = (0.35 - 0.0980 \,;\, 0.35 + 0.0980) = (0.2520 \,;\, 0.4480)
> $$
> Kết luận: Khoảng ước lượng tỷ lệ cây cao là **$[25.20\% \,;\, 44.80\%]$** với độ tin cậy 96%
> 
> c)
> Cặp giả thuyết: $H_0: \mu = 133$ vs $H_1: \mu \neq 133$
> 
> Tiêu chuẩn kiểm định: $Z = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} = \frac{131 - 133}{17.3787/\sqrt{100}} \approx -1.1508$.
> 
> Mức ý nghĩa $\alpha = 0.03 \implies \alpha/2 = 0.015 \implies Z_{0.015} \approx 2.17$
> 
> Miền bác bỏ: $W_\alpha = (-\infty ; -2.17) \cup (2.17 ; +\infty)$
>
> Vì $Z_{kđ} = -1.1508 \notin W_\alpha$, ta chưa có đủ bằng chứng để bác bỏ $H_0$
> Kết luận: Với mức ý nghĩa 3%, ý kiến cho rằng chiều cao trung bình bằng $133\text{ cm}$ là phù hợp với số liệu mẫu
> 
> d)
> Tính đặc trưng mẫu với $n_{2} = 100$:
> $$
> \sum n_{2i} x_{2i} = 6(100) + \dots + 11(160) = 12960 \implies \bar{x}_2 = \frac{12960}{100} = 129.6 \text{ cm}
> $$
> $$
> \sum n_{2i} x_{2i}^2 = 1704600 \implies s_2^2 = \frac{1}{99}[1704600 - 100 \cdot 129.6^2] \approx 252.3636$, $s_2 \approx 15.8860 \text{ cm}
> $$
> Cặp giả thuyết (kiểm định 1 phía): $H_0: \mu_2 = \mu_1$ vs $H_1: \mu_2 > \mu_1$ (phương pháp mới làm tăng chiều cao)
> 
> Tiêu chuẩn kiểm định so sánh 2 trung bình (mẫu lớn độc lập):
> $$
> Z = \frac{\bar{x}_2 - \bar{x}_1}{\sqrt{\frac{s_2^2}{n_2} + \frac{s_1^2}{n_1}}} = \frac{129.6 - 131}{\sqrt{\frac{252.3636}{100} + \frac{302.0202}{100}}} = \frac{-1.4}{\sqrt{5.5438}} \approx -0.5946
> $$
> Mức ý nghĩa $\alpha = 0.02 \implies Z_{\alpha} = Z_{0.02} \approx 2.054$
> 
> Miền bác bỏ một phía: $W_\alpha = (2.054 \,;\, +\infty)$.
> 
> Vì $Z_{kđ} = -0.5946 \notin W_\alpha$, ta không bác bỏ $H_0$
> Kết luận: Phương pháp mới **không làm tăng** chiều cao trung bình của giống cây
> 
> e)
> Số cây "cao" mẫu mới ($n_{2} = 100$): $m_2 = 12 + 7 + 11 = 30$ cây
> 
> Tỷ lệ mẫu mới: f2​=10030​=0.30.
> 
> Tỷ lệ mẫu cũ (ở câu b): $f_1 = 0.35$.
> 
> Tỷ lệ chung đại diện dưới $H_0$: $f_0 = \frac{m_1 + m_2}{n_1 + n_2} = \frac{35 + 30}{100 + 100} = 0.325$.
> 
> Cặp giả thuyết: $H_0: p_2 = p_1$ vs $H_1: p_2 > p_1$.
> 
> Tiêu chuẩn kiểm định:
> $$
> Z = \frac{f_2 - f_1}{\sqrt{f_0(1-f_0)\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}} = \frac{0.30 - 0.35}{\sqrt{0.325 \cdot 0.675 \cdot \left(\frac{1}{100} + \frac{1}{100}\right)}} = \frac{-0.05}{0.0662} \approx -0.7553
> $$
> 
> Mức ý nghĩa $\alpha = 0.01 \implies Z_{\alpha} = Z_{0.01} \approx 2.326$.
> 
> Miền bác bỏ một phía: $W_\alpha = (2.326 \,;\, +\infty)$
> 
> Vì $Z_{kđ} = -0.7553 \notin W_\alpha$, ta không bác bỏ $H_0$
> Kết luận: Không đủ bằng chứng để khẳng định phương pháp mới làm tăng tỷ lệ cây "cao"

> [!prob] (Bài tập 9)
> Tuổi thọ một loại pin (đv: giờ) do một nhà máy sản xuất có phân phối chuẩn với độ lệch chuẩn là $1{,}25$ giờ. Khảo sát mẫu ngẫu nhiên $10$ viên pin thấy trung bình tuổi thọ là $40{,}5$ giờ.
>
> Có đủ bằng chứng để kết luận rằng tuổi thọ trung bình loại pin này lớn hơn $40$ giờ hay không?
>
> Sử dụng $\alpha = 0{,}05$.
>
> Tính $p$-giá trị.

> [!ans]
> 































$\xi$