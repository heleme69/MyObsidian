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
> (b) Tìm khoảng tin cậy (KTC) 98% cho đường kính trung bình của các chi tiết máy.  
> (c) Nếu muốn sai số ước lượng KTC cho trung bình không quá $E = 0{,}02 \,\text{mm}$ với độ tin cậy 98% thì phải lấy cỡ mẫu tối thiểu bao nhiêu?  
> (d) Những chi tiết máy có đường kính nhỏ hơn 12,1 và lớn hơn 12,30 được xem là không đạt tiêu chuẩn kĩ thuật. Tìm khoảng tin cậy 96% cho tỷ lệ chi tiết máy không đạt tiêu chuẩn.

> [!ans]
> a)
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
> Độ tin cậy: ${} 1- \alpha = 0.98 \implies \alpha = 0.02 {}$


$\xi$