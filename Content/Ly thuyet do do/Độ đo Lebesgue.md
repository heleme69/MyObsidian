
> [!def] (Các khoảng trên $\mathbb{R}$)
> Cho $\mathfrak{J_{o}}$ là họ bao gồm tập rỗng $\emptyset$ và tất cả các khoảng mở trong $\mathbb{R}$ có dạng $(a,b)$. Tương tự, ta định nghĩa $\mathfrak{J_{co}}, \mathfrak{J_{oc}}, \mathfrak{J_{c}}$ lần lượt là là khoảng nửa mở - nửa đóng khoảng đóng. Quy ước ${} (a, \infty)$ và ${} (\infty, a)$ cũng nằm trong họ tương ứng. Gọi $\mathfrak{J}$ là hợp của tất cả các họ này, tức là mọi khoảng trên $\mathbb{R}$.

> [!def] (Hàm tập đo độ dài khoảng)
> Với mọi khoảng $I \in \mathfrak{J}$ có hai đầu mút $a, b \in \mathbb{R}$, ta định nghĩa chiều dài $I$ là: 
> $$
> l(I) = b - a
> $$
> Đối với một khoảng vô hạn, ta định nghĩa $l(I) =  \infty$. Đối với tập rỗng, $l(\emptyset) = 0$. Hàm chiều dài có tính chất cộng tính đếm được trên các họ khoảng rời nhau. Cụ thể: nếu $\{ I_{n}: n \in \mathbb{N} \}$ là một họ đếm được các khoảng rời rạc trong $\mathfrak{J}$ thì : 
> $$
> l\left( \bigcup_{n \in \mathbb{N}}I_{n} \right) = \sum_{n \in \mathbb{N}} l(I_{n}) 
> $$

> [!def] (Độ đo ngoài Lebesgue)
> Đô đo ngoài Lebesgue trên $\mathbb{R}$, kí hiệu là ${} \mu_{L} ^{*}$ là một hàm tập xác đĩnh trên toàn bộ không gian con $\mathfrak{B}(\mathbb{R})$, được định nghĩa bởi:
> $$
> \mu _{L} ^{*}(E) = inf\left\{  \sum_{n \in \mathbb{N}} l(I_{n}): (I_{n}: n \in \mathbb{N}) \subset \mathfrak{J_{o}}, \bigcup_{n \in \mathbb{N}} I_{n} \supset E   \right\}
> $$, với mọi $E \in \mathfrak{B}(\mathbb{R})$.
> Vì ${} \mu_{L} ^{*}$ là độ đo ngoài, nó thỏa các tính chất: $\mu_{L}^{*} (\emptyset) = 0$, đơn điệu $(A \subset B \implies \mu_{L}^{*}(A) \le \mu_{L}^{*} (B))$, tính $\sigma$ - dưới cộng tính.
> Ý nghĩa trực quan: ta cố gắng phủ một tập  $E$ bất kì bằng vô hạn đếm được các khoảng mở, tổng chiều dài các phủ này sẽ là cận trên cho kích thước của $E$. Độ đo ngoài $\mu_{L}^{*}(E)$ chính là giới hạn dưới đúng (infimum) của tất cả các tổng chiều dài bao phủ đó.

> [!def] (Tính đo được theo tiêu chuẩn *Caratheodory*).
> Một tập $E \in \mathfrak{B}(\mathbb{R})$ được gọi là $\mu_{L} ^{*}$ đo được (hay Lebesgue đo được) nếu với mọi tập thử $A \in \mathfrak{B}(\mathbb{R})$, ta có đẳng thức:
> $$
> \mu_{L}^{*}(A) = \mu_{L} ^{*}(A \cap E) + \mu _{L} ^{*}(A \cap E^{c})
> $$
> Tập hợp hợp tất cả các tập Lebesgue đo được tạo thành một $\sigma$ - đại số, ký hiệu $\mathfrak{M}_{L}$. Dộ đo ngoài ${} \mu_{L}^{*}$ khi thu hẹp trên $\mathfrak{M}_{L}$ sẽ trở thành độ đo $\sigma$ - cộng tính, gọi là độ đo Lebesgue, ký hiệu là $\mu_{L}$.

> [!lem] $\mu_{L}^{*} = l$ trên $\mathfrak{J}$.
> Tức là $\mu _{L} ^{*} (I) = l(I)$ với mọi khoảng $I$ trong $\mathbb{R}$.

> [!prf]
> - Trườn hợp 1: $I$ là khoảng đóng hữu hạn ($I = [a,b]$)
> 	- Cận trên: 
> 	Với mọi $\epsilon > 0$, ta có $[a, b]$, ta có $[a,b] \subset (a - \epsilon, b + \epsilon) \in \mathfrak{J_{o}}$. Ta có dãy $((a - \epsilon, b + \epsilon), \emptyset, \emptyset, \dots)$ là dãy phủ trong $\mathfrak{J}_{o}$ cho tập $I$. Do đó: $\mu _{L} ^{*}(I) \le l((a - \epsilon, b+ \epsilon)) = (b+ \epsilon) - (a - \epsilon) = (b-a) + 2 \epsilon$. Cho $\epsilon \to 0$, ta thu được chiều bất đẳng thức: $\mu_{L} ^{*}(I) \le (b - a) = l(I)$.
> 	- Cận dưới: 
> 	







$\pi$