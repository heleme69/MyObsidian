> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1) 
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> **Kiểm tra X $\times$ Y $\in \mathcal{R}$:** Vì $X \in \mathcal{F}$ và $Y \in \mathcal{G}$, ta viết được $X \times Y = \bigcup_{i=1}^{1} (X \times Y)$, nên $X \times Y \in \mathcal{R}$.
> 
> **$\mathcal{R}$ đóng với phép bù:** Giả sử $E \in \mathcal{R}$, cần chứng minh phần bù $E^c$ cũng phải thuộc $\mathcal{R}$.
> 
> Vì $E \in \mathcal{R}$, theo định nghĩa, $E$ là hợp hữu hạn của các hình chữ nhật rời nhau: $E = \bigcup_{i=1}^m (A_i \times B_i)$, với $A_i \in \mathcal{F}, B_i \in \mathcal{G}$
> 
> Với $E = \bigcup_{i=1}^m (A_i \times B_i)$, ta có:
> $$
> E^c = \left( \bigcup_{i=1}^m (A_i \times B_i) \right)^c = \bigcap_{i=1}^m (A_i \times B_i)^c
> $$
> 
> Ta có giao của hai hình chữ nhật:
> $$
> (A_1 \times B_1) \cap (A_2 \times B_2) = (A_1 \cap A_2) \times (B_1 \cap B_2)
> $$
> Vì $A_1 \cap A_2 \in \mathcal{F}$ và $B_1 \cap B_2 \in \mathcal{G}$ nên là một hình chữ nhật đo được. .