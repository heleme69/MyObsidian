
# [V] Tính chính quy của độ đo ngoài

> [!lem] (Borel Regularity of the Lebesgue Outer Measure)
> The Lebesgue outer measure ${} \mu ^{*}$ on $\mathbb{R}$ has the following properities:
> a) For every $E \in \mathfrak{B}(\mathbb{R})$ and $\epsilon >0$, there exist an open set $O \in \mathbb{R}$ such that $O \supset E$ and 
> $$
> \mu ^{*}_{L}(E) \le \mu ^{*}_{L}(O) \le \mu ^{*}_{L}(E) + \epsilon 
> $$
> (Note that the inequalities $\mu ^{*}(E)_{L} \le \mu ^{*}_{L}(O)$ and $\mu ^{*}_{L}(O) < \mu ^{*}_{L}(E) + \epsilon$ may not hold.)
> b) For every $E \in \mathfrak{B}(\mathbb{R})$ and $\epsilon > 0$, there exists sequence $(O_{n}) _{n = 1}^{\infty}$ such that $E \subseteq O_{n}$ for every $n \in \mathbb{N}$ and $\mu ^{*}_{L}(G) = \mu ^{*}_{L}(E)$, with $G = \bigcap_{n = 1} ^{\infty}O_{n}$.

> [!prf]
> 1. Trường hợp $\mu_{L}^{*} = \infty$, ta có $\mathbb{R} \supset E$ cho ta $\mu ^{*}_{L} \le \mu ^{*}_{L}(\mathbb{R}) = \infty = \infty +\epsilon = \mu ^{*}_{L}(E) + \epsilon$. Ta xét trường hợp $\mu ^{*}_{L}(E) < \infty$. Theo định nghĩa infimum, ta tìm được $(I_{n}: n \in \mathbb{N}) \in \mathfrak{J_{o}}$ sao cho $\bigcup_{n \in \mathbb{N}}I_{n} \supset E$ và $\mu ^{*}_{L}(E) \le \sum_{n \in \mathbb{N}} \ell(I_{n}) < \mu ^{*}_{L}(E) +\epsilon$. Ta chọn $O = \bigcup_{n \in \mathbb{N}} I_{n}$, khi đó kết hợp với tính đơn điệu: 
> $$
> \mu ^{*}_{L}(E) \le \mu ^{*}_{L}(O) = \mu ^{*}_{L}\left( \bigcup_{n \in \mathbb{N}}I_{n} \right) \le \sum_{n \in \mathbb{N}}\mu ^{*}_{L}(I_{n}) = \sum_{n \in \mathbb{N}}\ell(I_{n}) \le \mu ^{*}_{L}(E) + \epsilon   
> $$
>
> 2. Với $\epsilon = \frac{1}{n}$, với $n \in \mathbb{N}$, theo a), với mỗi số nguyên dương n, tìm được $O_{n} \supset E$ sao cho $\mu_{L} ^{*}(O_{n}) < \mu ^{*}_{L}(E) + \frac{1}{n}$. Với $G = \bigcap_{n=1} ^{\infty}O_{n}$, ta sử dụng định lý kẹp để chứng minh  $\mu ^{*}_{L} (G) = \mu ^{*}_{L}(E)$.
> - Chiều ${} (\ge)$:
> Vì $E \subseteq O_n$ với mọi $n$, nên $E$ phải nằm trong phần giao của chúng: $E \subseteq \bigcap_{n=1}^\infty O_n = G$.
> Áp dụng tính chất đơn điệu của độ đo ngoài, ta suy ra: 
> $$
> \mu_L^*(E) \le \mu_L^*(G)
> $$
> - Chiều ${} (\le)$:
> Mặt khác, vì $G$ là giao của tất cả các $O_n$, nên $G$ bắt buộc phải là tập con của từng cái $O_n$ một: $G \subseteq O_n$ với mọi $n \in \mathbb{N}$.
> Lại dùng tính đơn điệu của độ đo ngoài, ta có:$$\mu_L^*(G) \le \mu_L^*(O_n) \le \mu_L^*(E) + \frac{1}{n} \quad \text{với mọi } n \in \mathbb{N}$$
> Cho $n \to \infty$, ta được điều cần chứng minh

> [!def] (Borel regular outer measure)
> Một độ đo ngoài ${} \mu ^{*}$ trên một không gian topo được gọi là Chính quy Borel nếu nó thỏa mãn đồng thời hai điều kiện:
> 1. Tính Borel: Mọi tập Borel đều bắt buộc là một tập $\mu ^{*}$ - đo được. Nghĩa là: $\mathcal{B}(\mathbb{R}) \subseteq \mathfrak{M}(\mu ^{*})$.
> 2. Tính chính quy (Regularity): Với mọi tập hợp $A$ bất kì, luôn tồn tại một tập Borel $B \in \mathcal{B}$ sao cho $A \subseteq B$ và 

$\pi$