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




$\xi$