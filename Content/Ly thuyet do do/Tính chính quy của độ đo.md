
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
> 2. Tính chính quy (Regularity): Với mọi tập hợp $A$ bất kì, luôn tồn tại một tập Borel $B \in \mathcal{B}$ sao cho $A \subseteq B$ và thõa $\mu ^{*}(A) = \mu ^{*}(B)$.

> [!thm] $\mu ^{*} _{L}$ là độ đo ngoài chính quy Borel

> [!prf]
> 1. (Nhắc lại) Ta đã chứng minh mọi tập Borel đều Lebesgue đo được, tức $\mathcal{B} \subseteq \mathfrak{M}_{L}$
> 2. Cho $E \subseteq \mathbb{R}$ là một tập bất kì, ta cần tìm tập Borel $B$ sao cho nó chứa $E$ và có cùng độ đo ngoài bằng với $E$.
> Sử dụng bổ đề **Lemma 1b)**, trong đó ta có khẳng định: Với tập $E \in \mathfrak{B(\mathbb{R})}$ bất kì, ta tìm được $G$ sao cho $E \subseteq G$ và $\mu ^{*} _{L}(E) = \mu ^{*}_{L}(G)$. Với $G = \bigcap_{n = 1} ^{\infty}O_{n}$:
> - Mọi tập mở ${} O_{n}$ hiển nhiên là một tập Borel ${} (O_{n} \in \mathcal{B})$.
> - Họ các tập Borel là một $\sigma$ - đại số, nên nó có tính chất đóng với phép giao đếm được. Do đó, giao vô hạn đếm được tập Borel ${} O_{n}$ cũng bắt buôc là tập Borel.
> - Từ hai điều trên ta kết luận $G \in \mathcal{B(\mathbb{R})}$, vậy ta chọn $B = G$ là tập Borel cần tìm, khi đó ta kết luận $E \subseteq B$ và $\mu_{L}^{*} (E) = \mu ^{*}_{L}(B)$ thõa cả hai điều kiện chính quy.

> [!thm] (Outer - Inner Approximation)
> For every $E \in \mathfrak{B}(\mathbb{R})$, the following conditions are all equivalent:
> ${} (i) {}$ $E \in  \mathfrak{M}_{L}$
> 1. Outer Approximation:
> ${} (ii) {}$ For every $\epsilon >0$, there exists an open set $O \supset E$ with $\mu ^{*}_{L}(O \setminus E) \le \epsilon$.
> $(iii)$ There exists a set $G$ $\left( G = \bigcap_{n=1} ^{\infty} O_{n} \right)$, ${} O_{n}$ is open,  $G \supset E$ with $\mu ^{*} _{L}(G \setminus E) = 0$.
> 2. Inner Approximation:
> $(iv)$ For every ${} \epsilon > 0 {}$, there exists a closed set $C \subset E$ with $\mu ^{*} _{L}(E \setminus C) \le \epsilon$.
> $(v)$ There exists a set $F$ $\left( F = \bigcup _{n = 1} ^{\infty} C_{n}\right)$, $C_{n}$ is closed, $F \subset E$ with $\mu ^{*}_{L}(E \setminus F) = 0$.

> [!prf]
> 1. Xấp xỉ từ bên ngoài: $(i)$ $\implies$ $(ii)$ $\implies$ $(iii)$ $\implies$ $(i)$
> 	- $((i) \implies (ii))$
> 	Giả sử $E \in \mathfrak{M}_{L}$, ta cần chứng minh: với mọi $\epsilon >0$, tìm được tập mở $O \supset E$ sao cho $\mu ^{*} _{L}(O \setminus E) \le \epsilon$.
> 	Theo bổ đề **Lemma 1a)**, với mọi $\epsilon>0$, ta luôn tìm được tập mở $O \supset E$ sao cho $\mu_L^*(O) \le \mu_L^*(E) + \epsilon$.
> 	Vì $E$ là tập Lebesgue đo được ($E \in \mathfrak{M}_L$), nó thỏa mãn phương trình Carathéodory. Lấy tập mở $O$ làm "tập thử" để $E$ cắt, ta có: 
> 	$$\mu_L^*(O) = \mu_L^*(O \cap E) + \mu_L^*(O \cap E^c) = \mu_L^*(E) + \mu_L^*(O \setminus E)$$
> 	Thế vào bất đẳng thức đầu tiên, ta được: 
> 	$$\mu_L^*(E) + \mu_L^*(O \setminus E) \le \mu_L^*(E) + \epsilon$$
> 	Tới đây, ta cẩn thận xét hai trường hơp:
> 		- Nếu $\mu ^{*}_{L}(E) < \infty$: ta đơn giản $\mu ^{*}_{L}(E)$ ở hai vế để có điều cần chứng minh.
> 		- Nếu $\mu ^{*}_{L}(E) = \infty$: ta đặt $E_n = E \cap (n-1, n]$ với $n \in \mathbb{N}$. Vì $\mu ^{*}_{L}(E_{n}) \le n$ là tập hữu hạn, ta tìm được $O_{n}$ mở sao cho $\mu ^{*} _{L}(O_{n} \setminus E_{n}) \le \frac{\epsilon}{2^{n}}$
> 		Đặt $O = \bigcup_{n \in \mathbb{N}} O_n$, ta có:
> 	$$O \setminus E \subseteq \bigcup_{n \in \mathbb{Z}} (O_n \setminus E_n)$$
> 		Suy ra: $$\mu_L^*(O \setminus E) \le \sum_{n \in \mathbb{N}} \mu_L^*(O_n \setminus E_n) \le \sum_{n \in \mathbb{N}} \frac{\epsilon}{2^{n}} = \epsilon$$ (liên hệ tới tính chất $\sigma$ - dưới cộng tính: $\mu^*(A \cup B) \le \mu^*(A) + \mu^*(B)$)
> 	- $((ii) \implies (iii))$
> 	Ta cần tìm một tập $G$ là giao của vô hạn tập mở chứa $E$ sao cho $\mu_L^*(G \setminus E) = 0$.
> 	Sử dụng tính chất $(ii)$, với mỗi $\frac{1}{n}$, tồn tại một tập mở $O_n \supset E$ sao cho: $\mu_L^*(O_n \setminus E) \le \frac{1}{n}$.
> 	Đặt $G = \bigcap_{n=1}^\infty O_n$, ta có $G \setminus E \subseteq O_n \setminus E$ với mọi $n \in \mathbb{N}$.
> 	Áp dụng tính đơn điệu của độ đo ngoài: 
> 	$$\mu_L^*(G \setminus E) \le \mu_L^*(O_n \setminus E) \le \frac{1}{n}$$ 
> 	Cho $n \to \infty$ ta có điều cần chứng minh.
> 	- ($(iii) \implies (i)$)
> 	Giả sử ta có $G \supset E$ và $\mu_L^*(G \setminus E) = 0$, ta cần chỉ ra  $E \in \mathfrak{M}_{L}$.
> 	Vì $E \subseteq G$, ta có $E = G \setminus (G \setminus E)$:
> 		- Tập $G$ là giao đếm được các tập mở nên $G$ là một tập Borel, ta đã chứng minh mọi tập Borel đều Lebesgue đo được nên $G \in \mathfrak{M}_{L}$
> 		- $G \setminus E$ có độ đo ngoài bằng 0 (theo giả thiết). Mà mọi tập có độ đo ngoài bằng 0 đều tự động là tập đo được nên $(G \setminus E) \in \mathfrak{M}_L$
> 		- Vì họ $\mathfrak{M}_L$ là một $\sigma$-đại số nên nó đóng kín với phép hiệu (trừ) tập hợp, vậy $E \in \mathfrak{M}_L$
> 2. Xấp xỉ từ bên trong: $(i)$ $\implies$ $(iv)$ $\implies$ $(v)$ $\implies$ $(i)$
> 	- $((i) \implies (iv))$
> 	Vì họ các tập đo được $\mathfrak{M}_L$ là một $\sigma$-đại số, ta có $E \in \mathfrak{M}_L$ nên $E^c \in \mathfrak{M}_L$. 
> 	Vì $E^{c}$ là tập đo được, áp dụng ${} (ii)$, ta tìm được tập mở $O \supset E^c$ sao cho $\mu_L^*(O \setminus E^c) \le \epsilon$.
> 	Đặt $C = O^c$,
> 		- Vì $O$ là tập mở, suy ra lõi $C$ là tập đóng.
> 		- Vì $O \supset E^c$ nên $C \subset E$.
> 		- Ta có $$O \setminus E^c = O \cap (E^c)^c = O \cap E = E \cap C^c = E \setminus C$$
> 		- Vậy ta có $\mu_L^*(E \setminus C) \le \epsilon$.
> 	- $((iv) \implies (v))$





$\pi$