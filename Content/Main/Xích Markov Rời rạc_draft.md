
> [!def] Định nghĩa 1
> Gọi $(\Omega, \mathcal{F}, \mathbb{P})$ là một không gian xác suất và $(I, \mathcal{I})$ là một không gian được trang bị một $\sigma$-đại số, gọi là không gian trạng thái (*state-space*). Một quá trình ngẫu nhiên là một họ các biến ngẫu nhiên thực $(X_t)_{t \in T}$, được xác định trên $(\Omega, \mathcal{F}, \mathbb{P})$ với giá trị trong $(I, \mathcal{I})$.
> 
> Tập $T$ biểu diễn thời gian. Do đó, biến ngẫu nhiên $X_t$ ứng với trạng thái của hiện tượng tại thời điểm $t$.
> 
> Nếu tập $T$ là:
> * đếm được (*countable set*), quá trình ngẫu nhiên được gọi là rời rạc; ví dụ $T = \mathbb{N}$ hoặc bất kỳ tập hữu hạn nào.
> * liên tục (*continuous*), quá trình ngẫu nhiên được gọi là liên tục; ví dụ $T = \mathbb{R}^+$, $[0, t_0]$ hoặc bất kỳ tập con nào của $\mathbb{R}^+$.

> [!def] Định nghĩa 2
> Gọi $(X_t)_{t \in T}$ là một quá trình ngẫu nhiên được xác định trên một không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ với giá trị trong $(I, \mathcal{I})$, và gọi $\omega \in \Omega$ là một biến cố sơ cấp. Quỹ đạo (*trajectory/sample path*) của quá trình ứng với $\omega$ là ánh xạ
> 
> $$T \to I,$$
> $$t \mapsto X_t(\omega).$$
> 
> Trong trường hợp quá trình ngẫu nhiên rời rạc, tức là $T = \mathbb{N}$, quỹ đạo ứng với $\omega$ là ánh xạ
> 
> $$\mathbb{N} \to I,$$
> $$n \mapsto X_n(\omega).$$

Quỹ đạo của một quá trình ngẫu nhiên là một hàm cụ thể của thời gian, thu được bằng cách cố định một kết quả $\omega$, biểu diễn diễn tiến thực sự của quá trình trong một lần quan sát.