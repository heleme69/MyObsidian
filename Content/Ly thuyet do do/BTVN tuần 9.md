> [!thm] (Định lý 4.16)
> Cho $(X, \mathfrak{A})$ là một không gian đo được và $f, g$ là hai hàm nhận giá trị thực mở rộng $\mathfrak{A}$-đo được trên tập $D \in \mathfrak{A}$. Khi đó các tập hợp sau đây đều thuộc $\mathfrak{A}$:
> (1) $\{x \in D : f(x) = g(x)\}$
> (2) $\{x \in D : f(x) < g(x)\}$
> (3) $\{x \in D : f(x) \le g(x)\}$
> (4) $\{x \in D : f(x) \neq g(x)\}$

> [!thm] (Định lý 4.22)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable on a set $D \in \mathfrak{A}$:
> a) $\min_{n=1,\ldots,N} f_n, \; \max_{n=1,\ldots,N} f_n, \; \inf_{n \in \mathbb{N}} f_n, \; \sup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> b) $\liminf_{n \in \mathbb{N}} f_n, \; \limsup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> c) Let $D_{e} = \{ D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}}\}$. Then $D_{e} \in \mathfrak{A}$ and $\lim_{ n \to \infty }f_{n}$ is $\mathfrak{A}$-measureable on $D_{e}$.

> [!prf]
> Ta sẽ chứng minh ý c)
> Tập $D_{e}$ là tập hợp các nơi mà giới hạn tồn tại trong $\overline{\mathbb{R}}$, theo định nghĩa là tập mà giới hạn trên và giới hạn dưới bằng nhau:
> $$
> D_e = \{x \in D : \liminf_{n \to \infty} f_n(x) = \limsup_{n \to \infty} f_n(x)\}
> $$
> Vì $\liminf f_n$ và $\limsup f_n$ đều là hai hàm đo được (theo b), tập hợp các điểm mà hai hàm đo được có giá trị bằng nhau là một tập đo được (theo Định lý 4.16). Vậy $D_e \in \mathfrak{A}$.
> Vì $\liminf f_n$ là hàm đo được trên toàn bộ $D$, thì nó hiển nhiên cũng đo được trên miền $D_e$. Vậy $\lim f_n$ (${} = \liminf f_{n}= \limsup f_{n} {}$) là hàm đo được trên $D_e$.

> [!thm] (Định lý 4.23)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable fucntions on a set $D \in \mathfrak{A}$. Let:
> 1. ${} D_{e} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}} \} {}$,
> 2. $D_{c} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \mathbb{R} \}$,
> 3. ${} D_{\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = \infty\} {}$,
> 4. $D_{-\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = -\infty\}$,
> 5. ${} D_{ne} = \{ x \in D: \lim_{ n \to \infty }f_{n} \text{ does not exist}\} {}$,
> so that $D_{e}$ and $D_{ne}$ are disjoint and $D_{e} \cup D_{ne} = D$, $D_{c}, D_{-\infty}, D_{\infty}$ are disjoint and $D_{c} \cup D_{\infty} \cup D_{-\infty} = D_{e}$. Then $D_{e}, D_{c}, D_{\infty}, D_{-\infty} \in \mathfrak{A}$ and $\lim_{ n \to \infty } f_{n}$ is $\mathfrak{A}$-measureable on each $D_{e}, D_{c}, D_{\infty}$ and $D_{-\infty}$.

> [!prf]
> Theo Định lý 4.22 c), ta có $D_{c} \in \mathfrak{A}$ và hàm $f = \lim_{ n \to \infty } f_{n}$ là $\mathfrak{A}$-đo được trên $D_{e}$.
> Ta chứng minh các tập còn lại được biểu diễn bởi giao đếm được các hàm đo được, nên là hàm đo được:
> 1. Tập $D_{\infty}$:
> 	 Với mỗi $k \in \mathbb{R}$, ta có:
> 	 $$
> 	 \{ x \in D: \lim_{ n \to \infty }f_{n} = \infty\} = \bigcap_{k=1}^{\infty} \{x \in D_e : f(x) > k\} \in \mathfrak{A}
> 	 $$
> 	- Chiều ($\subset$): Nếu $x$ thuộc vế trái, tức là ta có $f(x) = \infty$. Vì vô cực lớn hơn mọi số thực hữu hạn, nên với mọi số nguyên dương $k \in \mathbb{N}$, ta luôn có $f(x) > k$. Suy ra $x$ nằm trong mọi tập hợp dạng $\{x \in D_e : f(x) > k\}$ với mọi $k$. Theo định nghĩa phép giao, $x$ thuộc vế phải.
> 	- Chiều ($\supset$): Nếu $x$ thuộc vế phải, điều này có nghĩa là với mọi số tự nhiên $k \in \mathbb{N}$, ta đều có $f(x) > k$. Do hàm số nhận giá trị trên tập số thực mở rộng $\overline{\mathbb{R}}$, giá trị duy nhất lớn hơn mọi số nguyên dương $k$ chính là vô cực. Bắt buộc $f(x) = \infty$. Vậy $x$ thuộc vế trái.
> 2. Tập $D_{-\infty}$:
> 






$\xi$