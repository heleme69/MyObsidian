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
> Tính kỳ vọng $T_{a}$:
> $$
> \mathbb{E}(T_a) = \mathbb{E}\left[\frac{1}{4}(X_1 + aX_2 + X_3)\right] = \frac{1}{4}\left[\mathbb{E}(X_1) + a\mathbb{E}(X_2) + \mathbb{E}(X_3)\right]
> $$