
> [!rem] Ký hiệu
> Không gian trạng thái $E$ (đếm được); các trạng thái ký hiệu bằng chỉ số $i, j, k \in E$.
> 
> Ma trận chuyển $P = (p_{ij})_{i,j \in E}$, với $p_{ij}^{(n)} = \mathbb{P}(X_n = j \mid X_0 = i)$.
> 
> $\mathbb{P}_i(\cdot) = \mathbb{P}(\cdot \mid X_0 = i)$, $\mathbb{E}_i[\cdot] = \mathbb{E}[\cdot \mid X_0 = i]$.
> 
> Một *độ đo* trên $E$ là một hàng vector $\mu = (\mu_i)_{i \in E}$ với $\mu_i \ge 0$; một *phân phối* là độ đo có tổng bằng 1. Phép nhân $\mu P$ hiểu theo hàng: $(\mu P)_j = \sum_i \mu_i p_{ij}$.

> [!def] Độ đo bất biến và phân phối dừng
> Giả sử $\mu$ là một độ đo dương trên $E$ sao cho $\mu_i < \infty$ với mọi $i \in E$ và $\mu \not\equiv 0$. $\mu$ được gọi là **độ đo bất biến** (*invariant*) hay **độ đo dừng** (*stationary*) nếu
> 
> $$\mu = \mu P,$$
> 
> hay tương đương
> 
> $$\forall j \in E, \quad \mu_j = \sum_{i \in E} \mu_i p_{ij}.$$
> 
> Một độ đo dừng được gọi là **phân phối dừng** (*stationary distribution*) nếu $\sum_{i \in E} \mu_i = 1$.
> 
> ${} \mu = \mu P \implies \mu = \mu P^n {}$ với mọi $n$. Vậy nếu *phân phối ban đầu* $\lambda$ là phân phối dừng thì $\lambda^{(n)} = \lambda P^n = \lambda$, tức
> 
> $$\forall j \in E, \quad \mathbb{P}[X_n = j] = \mathbb{P}[X_0 = j] \quad \forall n.$$
> 
> Phân phối của xích *không đổi theo thời gian*.