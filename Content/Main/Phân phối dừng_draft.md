
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

> [!rem] Độ đo bất biến so với phân phối dừng
> 1. Với không gian trạng thái hữu hạn, một độ đo bất biến luôn chuẩn hoá được thành phân phối dừng (vì tổng $\sum_i \mu_i < \infty$ và dương).
> 2. Với không gian vô hạn, có thể tồn tại độ đo bất biến nhưng $\sum_i \mu_i = \infty$ (không chuẩn hoá được). Khi đó xích có độ đo dừng mà không có phân phối dừng – đây là tình huống *tái diễn bằng không* (sẽ gặp lại ở sau).
> 3. Độ đo bất biến (khi tồn tại và duy nhất sai khác hằng số) chỉ xác định đến một hằng số nhân dương: nếu $\mu$ bất biến thì $c\mu$ cũng bất biến với mọi $c > 0$.

> [!prf] Chứng minh
> **1. Chuẩn hóa độ đo trên không gian hữu hạn:**
> Giả sử không gian trạng thái $E$ hữu hạn và $\mu = (\mu_i)_{i \in E}$ là một độ đo bất biến, tức $\mu = \mu P$ với $\mu_i \ge 0$ và $\mu \not\equiv 0$.
> Vì $E$ hữu hạn và $\mu_i < \infty$ với mọi $i \in E$, ta có tổng:
> 
> $$S = \sum_{i \in E} \mu_i < \infty$$
> 
> Hơn nữa, do $\mu \not\equiv 0$ và $\mu_i \ge 0$ nên $S > 0$.
> Đặt $\pi_i = \frac{\mu_i}{S}$ với mọi $i \in E$. Ta kiểm tra hai điều kiện của phân phối dừng:
> - Tính phân phối xác suất:
> 
> $$\sum_{j \in E} \pi_j = \sum_{j \in E} \frac{\mu_j}{S} = \frac{1}{S} \sum_{j \in E} \mu_j = \frac{S}{S} = 1$$
> 
> - Tính bất biến: Do phép nhân ma trận có tính phân phối đối với nhân vô hướng:
> 
> $$\pi P = \left(\frac{1}{S} \mu\right) P = \frac{1}{S} (\mu P) = \frac{1}{S} \mu = \pi$$
> 
> Do đó, $\pi$ là một phân phối dừng.
> 
> **2. Tồn tại độ đo dừng nhưng không có phân phối dừng trên không gian vô hạn:**
> Xét ví dụ bước ngẫu nhiên đối xứng đơn giản trên $E = \mathbb{Z}$: từ mỗi trạng thái $i$, xích chuyển sang $i-1$ hoặc $i+1$ với xác suất bằng nhau $p_{i, i-1} = p_{i, i+1} = \frac{1}{2}$.
> Chọn độ đo $\mu$ với $\mu_i = 1$ với mọi $i \in \mathbb{Z}$. Khi đó:
> 
> $$(\mu P)_j = \sum_{i \in \mathbb{Z}} \mu_i p_{ij} = \mu_{j-1} p_{j-1, j} + \mu_{j+1} p_{j+1, j} = 1 \cdot \frac{1}{2} + 1 \cdot \frac{1}{2} = 1 = \mu_j, \quad \forall j \in \mathbb{Z}$$
> 
> Vậy $\mu$ là một độ đo bất biến. Tuy nhiên:
> 
> $$\sum_{i \in \mathbb{Z}} \mu_i = \sum_{i \in \mathbb{Z}} 1 = \infty$$
> 
> Do tổng phân kỳ ra vô cùng, không tồn tại bất kỳ hằng số nhân dương $c > 0$ nào để $\sum_i (c\mu_i) = 1$. Do xích này bất khả quy và tái diễn, mọi độ đo dừng đều tỷ lệ với $\mu$, kéo theo xích không có bất kỳ phân phối dừng nào (đây chính là trường hợp tái diễn bằng không).
> 
> **3. Tính bất biến khi nhân với một hằng số dương:**
> Giả sử $\mu$ thỏa mãn phương trình cân bằng $\mu = \mu P$. Với mọi hằng số $c > 0$, xét vector $v = c\mu$:
> - Với mọi $i \in E$, $v_i = c\mu_i \ge 0$ và $v_i < \infty$. Do $\mu \not\equiv 0$ và $c > 0$ nên $v \not\equiv 0$.
> - Xét phương trình nhân ma trận:
> 
> $$v P = (c\mu) P = c(\mu P) = c\mu = v$$
> 
> Suy ra $c\mu$ cũng là một độ đo bất biến.