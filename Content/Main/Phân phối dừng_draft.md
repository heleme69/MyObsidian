
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

> [!exm] Công thức tổng quát cho xích 2 trạng thái
> Xét xích Markov trên không gian trạng thái $E = \{1, 2\}$ với ma trận chuyển:
> 
> $$P = \begin{pmatrix} 1 - a & a \\ b & 1 - b \end{pmatrix}, \quad 0 < a, b \le 1$$
> 
> Gọi phân phối dừng là $\pi = (\pi_1, \pi_2)$. Từ phương trình cân bằng $\pi = \pi P$:
> 
> $$\pi_1 = (1 - a)\pi_1 + b\pi_2 \iff a\pi_1 = b\pi_2$$
> 
> Kết hợp với điều kiện chuẩn hóa $\pi_1 + \pi_2 = 1$:
> 
> $$\pi = \left(\frac{b}{a + b}, \, \frac{a}{a + b}\right)$$
> 
> **Ví dụ cụ thể:**
> Cho ma trận chuyển:
> 
> $$P = \begin{pmatrix} \frac{3}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{2} \end{pmatrix}$$
> 
> Ở đây ta có $a = \frac{1}{4}$ và $b = \frac{1}{2}$. Áp dụng công thức trên:
> 
> $$\pi_1 = \frac{\frac{1}{2}}{\frac{1}{4} + \frac{1}{2}} = \frac{2}{3}, \quad \pi_2 = \frac{\frac{1}{4}}{\frac{1}{4} + \frac{1}{2}} = \frac{1}{3}$$
> 
> Vậy phân phối dừng là $\pi = \left(\frac{2}{3}, \frac{1}{3}\right)$.
> 
> Trừ trường hợp suy biến $a = b = 0$ (hai trạng thái bị cô lập, không giao tiếp với nhau), xích Markov 2 trạng thái luôn có duy nhất một phân phối dừng.

> [!prp] Phương trình cân bằng dòng
> Cho xích Markov với không gian trạng thái $E$ và ma trận xác suất chuyển $P = (p_{ij})_{i,j \in E}$. Khi đó, một phân phối $\lambda = (\lambda_j)_{j \in E}$ là phân phối dừng (tức $\lambda = \lambda P$) khi và chỉ khi thỏa mãn **phương trình cân bằng dòng**:
> 
> $$\lambda_j \sum_{k \neq j} p_{jk} = \sum_{i \neq j} \lambda_i p_{ij}, \quad \forall j \in E$$
> 
> Trong đó:
> - **Vế trái** $\lambda_j \sum_{k \neq j} p_{jk}$: Biểu diễn tổng lượng xác suất (dòng xác suất) rời khỏi trạng thái $j$.
> - **Vế phải** $\sum_{i \neq j} \lambda_i p_{ij}$: Biểu diễn tổng lượng xác suất (dòng xác suất) đi vào trạng thái $j$.
> 
> Một phân phối dừng thiết lập trạng thái cân bằng động hoàn toàn giữa dòng vào và dòng ra tại mỗi trạng thái $j \in E$.

> [!prf] Chứng minh
> Giả sử $\lambda$ là phân phối dừng, theo định nghĩa ta có phương trình cân bằng:
> 
> $$\lambda_j = \sum_{i \in E} \lambda_i p_{ij}, \quad \forall j \in E$$
> 
> Tách số hạng ứng với $i = j$ ở vế phải:
> 
> $$\lambda_j = \lambda_j p_{jj} + \sum_{i \neq j} \lambda_i p_{ij}$$
> 
> Chuyển $\lambda_j p_{jj}$ sang vế trái:
> 
> $$\lambda_j (1 - p_{jj}) = \sum_{i \neq j} \lambda_i p_{ij}$$
> 
> Mặt khác, do $P$ là ma trận chuyển ngẫu nhiên nên tổng mỗi hàng bằng $1$, tức là $\sum_{k \in E} p_{jk} = 1 \iff p_{jj} + \sum_{k \neq j} p_{jk} = 1$, suy ra:
> 
> $$1 - p_{jj} = \sum_{k \neq j} p_{jk}$$
> 
> Thay đẳng thức này vào vế trái, ta thu được:
> 
> $$\lambda_j \sum_{k \neq j} p_{jk} = \sum_{i \neq j} \lambda_i p_{ij}, \quad \forall j \in E$$
> 
> Ngược lại, nếu phương trình cân bằng dòng được thỏa mãn, biến đổi ngược các bước tương đương ở trên ta trực tiếp thu lại $\lambda_j = (\lambda P)_j$ với mọi $j \in E$, tức $\lambda = \lambda P$.

> [!rem] Mối liên hệ với Trị riêng và Vector riêng của Ma trận chuyển
> Phương trình cân bằng phân phối dừng $\pi = \pi P$ (và dạng tương đương là phương trình cân bằng dòng) chính là bài toán tìm **vector riêng trái** (left eigenvector) của ma trận chuyển $P$ ứng với **trị riêng** $\lambda = 1$:
> 
> $$\pi P = 1 \cdot \pi \iff \pi (P - I) = 0 \iff (P^\top - I) \pi^\top = 0$$
> 
> Ta cũng nhớ lại mọi ma trận chuyển ngẫu nhiên $P$ (tổng mỗi hàng bằng 1) luôn có ít nhất một trị riêng bằng $1$, với vector riêng tương ứng là $\mathbf{1} = (1, 1, \dots, 1)^\top$.

> [!thm] Định lý về Bán kính phổ của Ma trận chuyển
> Cho $P = (p_{ij})$ là ma trận chuyển ngẫu nhiên cỡ $r \times r$ ($p_{ij} \ge 0$ và $\sum_j p_{ij} = 1$). Với mọi trị riêng $\lambda \in \mathbb{C}$ của $P$, ta luôn có:  
> 
> 
> $$
> |\lambda| \le 1  
> $$
> 
> Do đó, bán kính phổ của ma trận chuyển thỏa mãn $\rho(P) = 1$, và trị riêng $\lambda = 1$ là một trị riêng có module cực đại (dominant eigenvalue).  

> [!prf] 
> Giả sử $\lambda \in \mathbb{C}$ là một trị riêng bất kỳ của ma trận $P$, và gọi $v = (v_1, v_2, \dots, v_r)^\top \in \mathbb{C}^r \setminus \{\mathbf{0}\}$ là một vector riêng phải tương ứng, nghĩa là:  
> 
> 
> $$
> Pv = \lambda v  
> $$
> 
> Chọn chỉ số $k \in \{1, 2, \dots, r\}$ sao cho tọa độ $v_k$ có độ lớn tuyệt đối cực đại:  
> 
> 
> $$
> |v_k| = \max_{1 \le i \le r} |v_i| = \|v\|_\infty  
> $$
> 
> Vì $v \ne \mathbf{0}$ nên $|v_k| > 0$. Xét phương trình tại thành phần thứ $k$ của hệ thức $Pv = \lambda v$:  
> 
> 
> $$
> \sum_{j=1}^r p_{kj} v_j = \lambda v_k  
> $$
> 
> Lấy giá trị tuyệt đối hai vế và áp dụng bất đẳng thức tam giác:  
> 
> 
> $$
> |\lambda| |v_k| = \left| \sum_{j=1}^r p_{kj} v_j \right| \le \sum_{j=1}^r |p_{kj} v_j|  
> $$
> 
> Do các xác suất chuyển $p_{kj} \ge 0$ và $|v_j| \le |v_k|$ với mọi $j$:  
> 
> 
> $$
> |\lambda| |v_k| \le \sum_{j=1}^r p_{kj} |v_j| \le \sum_{j=1}^r p_{kj} |v_k| = |v_k| \sum_{j=1}^r p_{kj}  
> $$
> 
> Mặt khác, vì tổng xác suất trên mỗi hàng của ma trận $P$ bằng $1$, ta có $\sum_{j=1}^r p_{kj} = 1$. Do đó:  
> 
> 
> $$
> |\lambda| |v_k| \le |v_k| \cdot 1  
> $$
> 
> Chia cả hai vế cho $|v_k| > 0$, ta thu được:  
> 
> 
> $$
> |\lambda| \le 1  
> $$
> 
> Vì $P$ luôn có trị riêng $\lambda = 1$, suy ra $\rho(P) = \max \{|\lambda| : \lambda \in \sigma(P)\} = 1$.  

 
> [!thm] Định lý về Không gian hạch và Dạng đại số của Phương trình cân bằng dòng
> Cho xích Markov hữu hạn với không gian trạng thái $E = \{1, \dots, r\}$ và ma trận chuyển $P$.  
> 1. Vector $\pi = (\pi_1, \dots, \pi_r)$ là một phân phối dừng khi và chỉ khi vector cột $\pi^\top$ thuộc không gian hạch (null space) của ma trận $(P^\top - I)$:
> 
> 
> $$
> \pi^\top \in \ker(P^\top - I) \quad \text{với } \pi_i \ge 0, \; \sum_{i=1}^r \pi_i = 1  
> $$
> 
> 2. Phương trình xác định không gian hạch $\pi (P - I) = 0$ tương đương hoàn toàn với hệ phương trình cân bằng dòng:
> 
> 
> $$
> \pi_j \sum_{k \neq j} p_{jk} = \sum_{i \neq j} \pi_i p_{ij}, \quad \forall j \in E  
> $$

> [!prf] Chứng minh
> **1. Chứng minh tính chất không gian hạch:**
> Theo định nghĩa, $\pi$ là phân phối dừng khi và chỉ khi:  
> 
> 
> $$
> \pi P = \pi \iff \pi P - \pi = 0 \iff \pi (P - I) = 0  
> $$
> 
> Lấy chuyển vị cả hai vế của phương trình ma trận trên:  
> 
> 
> $$
> (\pi (P - I))^\top = 0^\top \iff (P - I)^\top \pi^\top = 0 \iff (P^\top - I) \pi^\top = 0  
> $$
> 
> Theo định nghĩa không gian hạch của một toán tử ma trận, điều này tương đương với:  
> 
> 
> $$
> \pi^\top \in \ker(P^\top - I)  
> $$
> 
> Kết hợp với điều kiện phân phối xác suất $\pi_i \ge 0$ và $\sum_i \pi_i = 1$, ta có kết luận thứ nhất.  
> 
> **2. Biến đổi tương đương sang phương trình cân bằng dòng:**
> Xét phương trình $\pi (P - I) = 0$. Thành phần thứ $j$ ($j \in E$) của vector hàng kết quả được viết tường minh là:  
> 
> 
> $$
> (\pi(P - I))_j = 0 \iff \sum_{i \in E} \pi_i p_{ij} - \pi_j = 0  
> $$
> 
> Vì $P$ là ma trận ngẫu nhiên, ta có $\sum_{k \in E} p_{jk} = 1$. Nhân cả hai vế với $\pi_j$:  
> 
> 
> $$
> \pi_j = \pi_j \sum_{k \in E} p_{jk}  
> $$
> 
> Thay biểu thức này của $\pi_j$ vào phương trình ban đầu:  
> 
> 
> $$
> \sum_{i \in E} \pi_i p_{ij} - \pi_j \sum_{k \in E} p_{jk} = 0  
> $$
> 
> Tách riêng phần tử chéo $i = j$ ở tổng thứ nhất và $k = j$ ở tổng thứ hai:  
> 
> 
> $$
> \left( \pi_j p_{jj} + \sum_{i \neq j} \pi_i p_{ij} \right) - \left( \pi_j p_{jj} + \pi_j \sum_{k \neq j} p_{jk} \right) = 0  
> $$
> 
> Triệt tiêu số hạng chung $\pi_j p_{jj}$:  
> 
> 
> $$
> \sum_{i \neq j} \pi_i p_{ij} - \pi_j \sum_{k \neq j} p_{jk} = 0  
> $$
> 
> Chuyển vế, ta thu được:  
> 
> 
> $$
> \pi_j \sum_{k \neq j} p_{jk} = \sum_{i \neq j} \pi_i p_{ij}  
> $$
> 
> Vì các phép biến đổi trên đều là tương đương hai chiều với mọi $j \in E$, phương trình vector riêng trái $\pi(P - I) = 0$ tương đương hoàn toàn với hệ phương trình cân bằng dòng.  

