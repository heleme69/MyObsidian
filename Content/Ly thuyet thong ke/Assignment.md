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
> b)
> Tính phương sai $T_{a}$:
> $$
> \begin{align}
> \text{Var}(T_a) = \text{Var}\left[\frac{1}{4}(X_1 + aX_2 + X_3)\right] &=  \frac{1}{16}\left[\text{Var}(X_1) + a^2\text{Var}(X_2) + \text{Var}(X_3)\right] \\
> &= \frac{1}{16}(\sigma ^{2} + a^{2} + \sigma ^{2} +\sigma ^{2}) = \frac{a^{2}+2}{16} \sigma ^{2}
> \end{align}
> $$
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
> 
> $$




$\xi$