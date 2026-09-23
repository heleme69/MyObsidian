
> [!def] Định nghĩa 1
> Gọi $(\Omega, \mathcal{F}, \mathbb{P})$ là một không gian xác suất và $(I, \mathcal{I})$ là một không gian được trang bị một $\sigma$-đại số, gọi là không gian trạng thái (*state-space*). Một quá trình ngẫu nhiên là một họ các biến ngẫu nhiên thực $(X_t)_{t \in T}$, được xác định trên $(\Omega, \mathcal{F}, \mathbb{P})$ với giá trị trong $(I, \mathcal{I})$.
> 
> Tập $T$ biểu diễn thời gian. Do đó, biến ngẫu nhiên $X_t$ ứng với trạng thái của hiện tượng tại thời điểm $t$.
> 
> Nếu tập $T$ là:
> * đếm được (*countable set*), quá trình ngẫu nhiên được gọi là rời rạc; ví dụ $T = \mathbb{N}$ hoặc bất kỳ tập hữu hạn nào.
> * liên tục (*continuous*), quá trình ngẫu nhiên được gọi là liên tục; ví dụ $T = \mathbb{R}^+$, $[0, t_0]$ hoặc bất kỳ tập con nào của $\mathbb{R}^+$.

> [!def] (Định nghĩa Quá trình ngẫu nhiên)
> Gọi $(X_t)_{t \in T}$ là một quá trình ngẫu nhiên được xác định trên một không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ với giá trị trong $(I, \mathcal{I})$, và gọi $\omega \in \Omega$ là một biến cố sơ cấp. Quỹ đạo (*trajectory/sample path*) của quá trình ứng với $\omega$ là ánh xạ
> 
> $$T \to I,$$
> $$t \mapsto X_t(\omega).$$
> 
> Trong trường hợp quá trình ngẫu nhiên rời rạc, tức là $T = \mathbb{N}$, quỹ đạo ứng với $\omega$ là ánh xạ
> 
> $$\mathbb{N} \to I,$$
> $$n \mapsto X_n(\omega).$$
> 
> Quỹ đạo của một quá trình ngẫu nhiên là một hàm cụ thể của thời gian, thu được bằng cách cố định một kết quả $\omega$, biểu diễn diễn tiến thực sự của quá trình trong một lần quan sát.

> [!def] (Khái niệm và Ký hiệu)
> Gọi $I$ là một tập đếm được, $I = \{i, j, k, \dots\}$. Mỗi $i \in I$ được gọi là một **trạng thái** (*state*) và $I$ được gọi là **không gian trạng thái** (*state-space*).
> 
> Xét không gian xác suất $(\Omega, \mathcal{F}, P)$. Ta sẽ khảo sát một dãy các biến ngẫu nhiên $X_0, X_1, \dots$ (nhận giá trị trong $I$).
> 
> Một vector hàng $\lambda = (\lambda_i : i \in I)$ được gọi là một **độ đo** (*measure*) nếu $\lambda_i \ge 0$ với mọi $i$. Nếu $\sum_i \lambda_i = 1$ thì đó là một **phân phối** (*distribution*) hay độ đo xác suất. Ta bắt đầu với một *phân phối ban đầu* (*initial distribution*) trên $I$, xác định bởi $\{\lambda_i : i \in I\}$ sao cho $0 \le \lambda_i \le 1$ với mọi $i$ và $\sum_{i \in I} \lambda_i = 1$.
> 
> Trường hợp đặc biệt, ta bắt đầu tại trạng thái $i$ với xác suất bằng $1$, được ký hiệu là $\lambda = \delta_i = (0, \dots, 1, \dots, 0)$.
> 
> Ta cũng có một **ma trận chuyển** (*transition matrix*) $P = (p_{ij} : i, j \in I)$ với $p_{ij} \ge 0$ với mọi $i, j$, với $p_{ij}$ là xác suất chuyển từ trạng thái $i$ sang trạng thái $j$.
> 
> $P$ là một ma trận ngẫu nhiên (stochastic matrix), nghĩa là $p_{ij}$ ≥ 0 với mọi $i,j \in I$ và $\sum_{j \in I} \, p_{ij} = 1$ (tức là mỗi hàng của $P$ là một phân phối xác suất trên I).