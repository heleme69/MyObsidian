
# Độ đo tích

Cho hai không gian độ độ $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu) \xrightarrow{?}$ Xây dựng độ đo tích trên $X \times Y$.

Đặt $\mathcal{R} = \left\{ \bigcup_{i=1,\dots,m}^{\text{nhau}} A_i \times B_i : A_i \in \mathcal{F}, B_i \in \mathcal{G} \right\}$

> [!abstract] Mệnh đề
> $\mathcal{R}$ là một đại số trên $X \times Y$.
> 
> **Chứng minh nhanh:**
> * $X \times Y \in \mathcal{R} \quad \checkmark$
> * $E \in \mathcal{R} \implies E^c \in \mathcal{R} \quad \checkmark$
> * $\{E_i\}_{i=1,\dots,m} \subset \mathcal{R} \implies \bigcup_{i=1}^m E_i \in \mathcal{R}$ (Bản tập)

> [!def] Định nghĩa: $\sigma$-đại số tích
> Không gian tích $(X \times Y, \mathcal{F} \otimes \mathcal{G} := \sigma(\mathcal{R}))$.
> Trong đó $\sigma(\mathcal{R})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{R}$.

**Mục tiêu tiếp theo:** Định nghĩa độ đo tích: 
$$\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]\,?$$