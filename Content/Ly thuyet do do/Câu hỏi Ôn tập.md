# Vấn đáp Rigorous: Hội tụ trong Lý thuyết Độ đo — Phát biểu, Sơ đồ, Derive đầy đủ

> [!info] Cấu trúc tài liệu
> Mỗi phần (Dạng) gồm 3 mục: **(X.1) Phát biểu** các bổ đề/định lý liên quan (chỉ phát biểu, không lặp lại chứng minh đầy đủ — đã có ở ghi chú gốc); **(X.2) Sơ đồ** luồng suy luận giả thiết → kết luận, từ yếu đến mạnh, chỉ rõ "modify điểm nào → kết quả nào"; **(X.3) Vấn đáp** — mỗi câu hỏi là một mệnh đề rigorous, trả lời bằng derivation súc tích nhưng đầy đủ (đủ để trình bày tại bàn vấn đáp).

---

## Phần 0 — Công cụ nền tảng dùng xuyên suốt

> [!def] (Tích phân hàm không âm qua hàm đơn giản)
> $f \ge 0$ đo được trên $D$: $\int_D f\,d\mu = \sup\{\int_D \varphi\,d\mu : \varphi \text{ đơn giản}, 0\le\varphi\le f\}$.

> [!lem] (Tính đơn điệu của tích phân)
> $f \le g$ a.e. trên $D$ $\implies \int_D f\,d\mu \le \int_D g\,d\mu$ (khi hai vế có nghĩa).

> [!lem] (Tính cộng tính hữu hạn / tuyến tính)
> $\int_D (f+g)\,d\mu = \int_D f\,d\mu + \int_D g\,d\mu$, không vướng dạng vô định $\infty-\infty$.

> [!lem] (Liên tục từ dưới của độ đo)
> $E_n \uparrow E \implies \mu(E_n) \to \mu(E)$.

> [!lem] (Liên tục từ trên của độ đo)
> $E_n \downarrow E$, $\mu(E_1) < \infty \implies \mu(E_n) \to \mu(E)$.

> [!lem] (Bổ đề 8.6 — Xấp xỉ bằng hàm đơn giản)
> $f \ge 0$ đo được $\implies \exists (\varphi_n)$ đơn giản không âm, $\varphi_n \uparrow f$ khắp nơi, hội tụ đều trên tập $f$ bị chặn, và $\int_D \varphi_n \to \int_D f$ với mọi $D$ đo được.

---

## Phần A — Hàm không âm: MCT và Bổ đề Fatou

### A.1 Phát biểu các định lý/bổ đề

> [!thm] (MCT — dãy tăng)
> $(f_n)$ đo được không âm, $f_n \uparrow f$ a.e. trên $D$ (mọi $\mu(D)$, kể cả $\infty$) $\implies \int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!cor] (Liên tục từ dưới của tích phân)
> $g \ge 0$ đo được, $E_n \uparrow E \implies \int_{E_n} g\,d\mu \to \int_E g\,d\mu$. *(Hệ quả trực tiếp của MCT, đặt $g_n = g\chi_{E_n}$.)*

> [!cor] (Hệ quả 1 — $\sigma$-cộng tính của dãy hàm)
> $(f_n)$ không âm đo được $\implies \int_D \sum_n f_n\,d\mu = \sum_n \int_D f_n\,d\mu$.

> [!cor] (Hệ quả 2 — Tích phân là một độ đo mới)
> $f \ge 0$ đo được $\implies \nu(E) := \int_E f\,d\mu$ là một độ đo trên $\mathfrak{A}$.

> [!thm] (Bổ đề Fatou)
> $(f_n)$ đo được không âm (không cần đơn điệu, không cần hội tụ điểm) $\implies \int_D \liminf f_n\,d\mu \le \liminf \int_D f_n\,d\mu$.

> [!thm] (Định lý 8.14)
> $(f_n)$ không âm, $f_n \to f$ a.e. và $f_n \le f$ a.e. mọi $n$ (không cần đơn điệu!) $\implies \int_D f_n \to \int_D f$.

> [!thm] (Hệ quả 4 — MCT cho dãy giảm)
> $(f_n)$ không âm, $f_n \downarrow f$ a.e., **và** $\exists k: \int_D f_k\,d\mu < \infty$ $\implies \int_D f_n \to \int_D f$.

> [!thm] (Biểu diễn Layer Cake)
> $f \ge 0$ đo được trên $D$ $\implies \int_D f\,d\mu = \int_0^\infty \mu(\{f \ge t\})\,dt$.

> [!thm] (Prob 8.13 — Tiêu chuẩn khả tích)
> $f \ge 0$ đo được trên $D$, $\mu(D) < \infty$, $D_n = \{f \ge n\}$ $\implies$ $f$ khả tích $\iff \sum_n \mu(D_n) < \infty$.

### A.2 Sơ đồ luồng suy luận

```
Hàm không âm, đo được trên D
        │
        │ (chỉ cần liminf tồn tại, KHÔNG cần hội tụ điểm, KHÔNG cần đơn điệu)
        ▼
   BỔ ĐỀ FATOU:  ∫liminf fₙ ≤ liminf ∫fₙ      [chỉ 1 chiều, có thể NGẶT]
        │
        ├── thêm: fₙ ↑ f a.e. (TĂNG đơn điệu)
        │         ──► MCT: đẳng thức, đúng với MỌI μ(D) kể cả ∞
        │
        ├── thêm: fₙ ≤ f a.e. ∀n, fₙ→f a.e. (KHÔNG cần đơn điệu, chỉ cần bị chặn bởi chính f)
        │         ──► Định lý 8.14: đẳng thức
        │
        └── thêm: fₙ ↓ f a.e. (GIẢM) + ∃k: ∫fₖ<∞
                  ──► MCT giảm: đẳng thức
                  (THIẾU điều kiện ∫fₖ<∞ ⟹ SAI, vd: χ_{[n,∞)})

Ứng dụng đặc biệt của MCT (không cần đơn điệu hàm gốc, chỉ cần dựng dãy tăng phụ):
   E_n↑E         ──► liên tục từ dưới
   φ_n↑f (8.6)   ──► định nghĩa qua hàm đơn giản nhất quán với mọi định nghĩa khác
   g_N=Σ_{n≤N}fn ──► Hệ quả 1 (Σ↔∫), Hệ quả 2 (∫ là độ đo), Layer Cake
```

### A.3 Vấn đáp

> [!prob] (A-1) Phát biểu và chứng minh: nếu $(f_n)$ không âm đo được và $f_n \uparrow f$ a.e., thì $\liminf_n \int_D f_n\,d\mu = \int_D f\,d\mu$ là đẳng thức chặt — tức là suy MCT trực tiếp từ Fatou (không lặp lại chứng minh gốc của MCT bằng hàm đơn giản).

> [!ans]
> Vì $f_n \le f$ a.e. (do dãy tăng tới $f$), đơn điệu tích phân cho $\int_D f_n \le \int_D f$ với mọi $n$; lấy giới hạn (dãy số $\int f_n$ tăng nên có giới hạn, có thể là $\liminf=\limsup=\lim$):
> $$\limsup_n \int_D f_n\,d\mu \le \int_D f\,d\mu \tag{1}$$
> Mặt khác, $(f_n)$ không âm đo được nên Fatou áp dụng được trực tiếp, và vì $f_n \to f$ a.e. nên $\liminf_n f_n = f$ a.e.:
> $$\int_D f\,d\mu = \int_D \liminf_n f_n\,d\mu \le \liminf_n \int_D f_n\,d\mu \tag{2}$$
> Kết hợp $(1)$, $(2)$ và bất đẳng thức hiển nhiên $\liminf \le \limsup$:
> $$\int_D f\,d\mu \overset{(2)}{\le} \liminf_n \int_D f_n\,d\mu \le \limsup_n \int_D f_n\,d\mu \overset{(1)}{\le} \int_D f\,d\mu$$
> Toàn chuỗi bị kẹp bằng nhau, suy ra $\lim_n \int_D f_n\,d\mu$ tồn tại và bằng $\int_D f\,d\mu$. $\blacksquare$

---

> [!prob] (A-2) Chứng minh rằng bất đẳng thức trong Bổ đề Fatou có thể xảy ra **ngặt** (strict), tức là tồn tại dãy $(f_n)$ không âm đo được sao cho $\int_D \liminf f_n\,d\mu < \liminf_n \int_D f_n\,d\mu$.

> [!ans]
> Trên $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$, đặt $f_n = \chi_{[n, n+1]}$.
>
> **Liminf điểm**: cố định $x \in \mathbb{R}$, vì $[n,n+1] \to \infty$ nên với $n$ đủ lớn ($n > x$), $x \notin [n,n+1]$, suy ra $f_n(x) = 0$ với mọi $n$ đủ lớn. Vậy $\liminf_n f_n(x) = 0$ tại **mọi** điểm, tức $\liminf_n f_n \equiv 0$.
>
> Vế trái: $\int_{\mathbb{R}} \liminf_n f_n\,d\mu_L = \int_{\mathbb{R}} 0\,d\mu_L = 0$.
>
> Vế phải: $\int_{\mathbb{R}} f_n\,d\mu_L = \mu_L([n,n+1]) = 1$ với mọi $n$, nên $\liminf_n \int_{\mathbb{R}} f_n\,d\mu_L = 1$.
>
> Vậy $0 = \int \liminf f_n < \liminf \int f_n = 1$ — bất đẳng thức ngặt thực sự. $\blacksquare$
>
> *(Đây là hiện tượng "khối lượng trượt ngang ra vô cực" quen thuộc — cùng cơ chế với phản ví dụ MCT giảm $\chi_{[n,\infty)}$, nhưng ở đây khối lượng không tích lũy mà chỉ "đi qua" từng điểm một lần.)*

---

> [!prob] (A-3) Phát biểu chính xác điều kiện cần và đủ bổ sung khi thay "$f_n \uparrow f$" bằng "$f_n \downarrow f$" để giữ được đẳng thức MCT, và chứng minh bằng phản ví dụ rằng điều kiện này **không thể bỏ**.

> [!ans]
> **Mệnh đề**: với $(f_n)$ không âm đo được, $f_n \downarrow f$ a.e., đẳng thức $\int_D f_n \to \int_D f$ đúng **khi và chỉ khi đủ** có thêm $\exists k: \int_D f_k\,d\mu < \infty$ (chiều ngược — sự cần thiết — được chứng minh bằng phản ví dụ dưới đây, không phải một mệnh đề "nếu và chỉ nếu" hình thức mà là minh họa tính không thể thiếu).
>
> **Chiều đủ**: đặt $h_n = f_k - f_n \ge 0$ với $n \ge k$ (giả sử $k=1$ không mất tổng quát). Vì $f_n \downarrow f$ nên $h_n \uparrow f_1 - f \ge 0$. Áp MCT (tăng) cho $(h_n)$:
> $$\lim_n \int_D (f_1-f_n)\,d\mu = \int_D (f_1-f)\,d\mu$$
> Vì $\int_D f_1\,d\mu < \infty$, tách tuyến tính (hợp lệ vì không vướng $\infty-\infty$):
> $$\int_D f_1\,d\mu - \lim_n \int_D f_n\,d\mu = \int_D f_1\,d\mu - \int_D f\,d\mu \implies \lim_n \int_D f_n\,d\mu = \int_D f\,d\mu$$
>
> **Tính cần thiết**: lấy $f_n = \chi_{[n,\infty)}$ trên $D=[0,\infty)$, độ đo Lebesgue. Dãy giảm ($[n+1,\infty)\subset[n,\infty)$) và $f_n(x) \to 0$ tại mọi $x$ (Archimedes). Không có $k$ nào để $\int_D f_k\,d\mu = \mu_L([k,\infty)) < \infty$ — mọi số hạng đều có tích phân $\infty$. Kết quả: $\int_D f_n\,d\mu = \infty$ với mọi $n$ nên $\lim_n \int_D f_n\,d\mu = \infty \ne 0 = \int_D 0\,d\mu = \int_D f\,d\mu$. $\blacksquare$

---

> [!prob] (A-4) Chứng minh rằng MCT (dãy tăng) đúng với **mọi** giá trị của $\mu(D)$, kể cả $\mu(D)=\infty$ — tức là chỉ ra chính xác MCT không hề sử dụng giả thiết $\mu(D)<\infty$ ở bất kỳ bước nào trong chứng minh.

> [!ans]
> Rà lại 2 chiều chứng minh gốc:
>
> **Chiều $\le$**: $f_n \le f \implies \int f_n \le \int f$ (đơn điệu tích phân) — không hề dùng $\mu(D)$.
>
> **Chiều $\ge$**: với $\varphi \le f$ đơn giản, $\alpha\in(0,1)$, đặt $E_n = \{f_n \ge \alpha\varphi\}$; chứng minh $E_n \uparrow D$ chỉ dùng định nghĩa giới hạn điểm (không dùng $\mu$); rồi $\int_D f_n \ge \alpha\int_{E_n}\varphi \to \alpha\int_D \varphi$ nhờ **liên tục từ dưới** của độ đo $\nu(A)=\int_A\varphi\,d\mu$ — liên tục từ dưới đúng vô điều kiện về độ lớn của không gian (khác liên tục từ trên, cần $\mu$ hữu hạn của một số hạng). Không có bước nào cần $\mu(D)<\infty$.
>
> **Minh họa cụ thể trên không gian vô hạn**: trên $([0,\infty), \mu_L)$ (độ đo vô hạn), lấy $f_n = n \cdot \chi_{[0,1]} $ — không, ta cần dãy *tăng*; lấy đơn giản hơn: $f_n = \chi_{[0,n]}$, tăng, $f_n \uparrow \chi_{[0,\infty)} = 1$ trên $D$. MCT cho $\int_D f_n\,d\mu_L = n \to \int_D 1\,d\mu_L = \infty$ — đẳng thức $\infty=\infty$ vẫn đúng theo nghĩa mở rộng, xác nhận MCT không sụp đổ dù $\mu(D)=\infty$. $\blacksquare$

---

> [!prob] (A-5) (Prob 9.24) Cho $(f_n)$ không âm đo được, $f_n \to f$ a.e. trên $D$, và $\int_D f_n\,d\mu \to \int_D f\,d\mu < \infty$. Chứng minh rằng với mọi $E \in \mathfrak{A}$, $E \subseteq D$: $\int_E f_n\,d\mu \to \int_E f\,d\mu$.

> [!ans]
> Đặt $E^c = D\setminus E$. Áp Fatou riêng trên $E$ và trên $E^c$ (hội tụ điểm a.e. trên toàn $D$ kéo theo hội tụ a.e. trên mọi tập con):
> $$\int_E f\,d\mu \le \liminf_n \int_E f_n\,d\mu \tag{1}, \qquad \int_{E^c} f\,d\mu \le \liminf_n \int_{E^c} f_n\,d\mu \tag{2}$$
> Từ tính cộng tính, $\int_E f_n = \int_D f_n - \int_{E^c} f_n$. Lấy $\limsup$, dùng giả thiết $\int_D f_n \to \int_D f$ (giới hạn thực sự tồn tại, hữu hạn) để tách:
> $$\limsup_n \int_E f_n\,d\mu = \int_D f\,d\mu - \liminf_n \int_{E^c} f_n\,d\mu \overset{(2)}{\le} \int_D f\,d\mu - \int_{E^c} f\,d\mu = \int_E f\,d\mu \tag{3}$$
> Kết hợp $(1)$ và $(3)$: $\int_E f \le \liminf_n \int_E f_n \le \limsup_n \int_E f_n \le \int_E f$ — kẹp chặt, suy ra $\lim_n \int_E f_n\,d\mu = \int_E f\,d\mu$. $\blacksquare$

---

> [!prob] (A-6) Chứng minh Hệ quả 1 ($\sigma$-cộng tính: $\int_D \sum_n f_n\,d\mu = \sum_n \int_D f_n\,d\mu$ cho $f_n \ge 0$) trực tiếp từ MCT.

> [!ans]
> Đặt $g_N = \sum_{n=1}^N f_n$. Vì $f_n \ge 0$, $(g_N)$ không âm, tăng ($g_{N+1}=g_N+f_{N+1}\ge g_N$), và $g_N \uparrow \sum_{n=1}^\infty f_n$ theo định nghĩa chuỗi. Theo tính cộng tính hữu hạn:
> $$\int_D g_N\,d\mu = \sum_{n=1}^N \int_D f_n\,d\mu$$
> Áp MCT cho $(g_N)$: $\lim_N \int_D g_N\,d\mu = \int_D \big(\sum_{n=1}^\infty f_n\big)\,d\mu$. Vế phải của đẳng thức trên, lấy giới hạn $N\to\infty$, chính là định nghĩa $\sum_{n=1}^\infty \int_D f_n\,d\mu$. So sánh hai vế, ta có điều phải chứng minh. $\blacksquare$

---

> [!prob] (A-7) Dùng công thức Layer Cake để kiểm chứng trực tiếp với $f = c\cdot\chi_A$ ($c>0$, $A$ đo được), rồi suy ra hệ quả: Layer Cake có sử dụng MCT ở bước nào, vì sao bước đó là cần thiết?

> [!ans]
> **Kiểm chứng trực tiếp**: $\{f \ge t\} = \{c\chi_A \ge t\}$. Với $t \in (0, c]$: $c\chi_A(x) \ge t \iff \chi_A(x) > 0 \iff x \in A$, vậy $\{f\ge t\}=A$. Với $t > c$: tập rỗng. Với $t\le 0$: toàn không gian (không ảnh hưởng vì miền tích phân Layer Cake là $[0,\infty)$, $t=0$ cho $\{f\ge0\}\supseteq A$ nhưng đo trên $[0,\infty)$ điểm $t=0$ không ảnh hưởng tích phân Lebesgue 1 chiều). Vậy:
> $$\int_0^\infty \mu(\{f\ge t\})\,dt = \int_0^c \mu(A)\,dt = c\cdot\mu(A) = \int_D c\chi_A\,d\mu$$
> khớp với định nghĩa trực tiếp $\int_D f\,d\mu = c\mu(A)$. $\blacksquare$
>
> **Vai trò MCT trong chứng minh tổng quát**: ở Bước 3 của chứng minh Layer Cake (xem ghi chú gốc), ta lấy dãy hàm đơn giản xấp xỉ $\varphi_n \uparrow f$ (Bổ đề 8.6), rồi cần đẩy giới hạn qua **hai** tích phân đồng thời: $\int_D \varphi_n \to \int_D f$ (MCT theo biến $x$) và $\int_0^\infty \mu(\{\varphi_n\ge t\})\,dt \to \int_0^\infty \mu(\{f\ge t\})\,dt$ (MCT theo biến $t$, vì $\mu(\{\varphi_n\ge t\}) \uparrow \mu(\{f\ge t\})$ theo $n$ — đây chính là **liên tục từ dưới** của độ đo áp dụng cho dãy tập tăng $\{\varphi_n\ge t\}\uparrow\{f\ge t\}$). Thiếu MCT, không có cách nào đảm bảo hai giới hạn này "khớp" với nhau để cho ra đẳng thức Layer Cake tổng quát — công thức chỉ được xác lập trước cho hàm đơn giản (Bước 1), MCT là cầu nối duy nhất đưa nó lên hàm không âm bất kỳ.

---

## Phần B — Hàm dấu bất kỳ / bị chặn: BCT, DCT, Generalized DCT

### B.1 Phát biểu các định lý/bổ đề

> [!thm] (Hệ quả 5 — Fatou ngược)
> $(f_n)$ đo được (dấu bất kỳ), $\exists g\in L^1$: $f_n \le g$ a.e. mọi $n$ $\implies \limsup_n \int_D f_n\,d\mu \le \int_D \limsup_n f_n\,d\mu$.

> [!thm] (BCT — Định lý Hội tụ Bị chặn)
> $\mu(D)<\infty$, $f_n \to f$ a.e., $\exists M: |f_n|\le M$ a.e. mọi $n$ $\implies \int_D f_n \to \int_D f$.

> [!thm] (DCT — Định lý Hội tụ Bị chặn Lebesgue)
> $f_n \to f$ a.e., $\exists g\in L^1$ (mọi $\mu(D)$): $|f_n|\le g$ a.e. mọi $n$ $\implies \int_D f_n \to \int_D f$ **và** $\int_D|f_n-f|\,d\mu \to 0$.

> [!thm] (Generalized DCT — Prob 9.22)
> $f_n\to f$, $g_n\to g\ge0$ a.e. ($g_n,g$ khả tích), $|f_n|\le g_n$, $\int_D g_n\to\int_D g<\infty$ $\implies f\in L^1$, $\int_D f_n\to\int_D f$.

> [!cor] (Liên tục từ trên của tích phân — qua DCT)
> $g$ khả tích trên $X$, $E_n\downarrow E$ $\implies \int_{E_n} g\,d\mu \to \int_E g\,d\mu$. *(So với liên tục từ dưới: cần $g$ khả tích **toàn cục**, không chỉ không âm.)*

> [!cor] (Hội tụ đều trên không gian hữu hạn)
> $\mu(X)<\infty$, $(f_n)\subset L^1$, $f_n \to f$ đều trên $X$ $\implies f\in L^1$ và $\int_X f_n \to \int_X f$. *(Chứng minh: dãy Cauchy đều $\implies |f_n|\le|f_N|+1=:g\in L^1$ với $n\ge N$, áp DCT.)*

> [!thm] (Prob 9.29 — Hoán đổi tổng và tích phân, dấu bất kỳ)
> $\sum_n \int_D |f_n|\,d\mu < \infty$ $\implies \sum_n f_n$ hội tụ a.e., khả tích, và $\int_D \sum_n f_n\,d\mu = \sum_n \int_D f_n\,d\mu$.

### B.2 Sơ đồ luồng suy luận

```
Hàm có dấu bất kỳ, đo được, fₙ → f a.e.
        │
        ├── chặn TRÊN (1 phía) bởi g khả tích: fₙ ≤ g
        │         ──► FATOU NGƯỢC:  limsup ∫fₙ ≤ ∫limsup fₙ   [1 chiều]
        │
        └── chặn CẢ HAI PHÍA: |fₙ| ≤ (hàm trội)
                  │
                  ├── trội = hằng số M  +  CẦN μ(D)<∞
                  │         ──► BCT:  ∫fₙ → ∫f
                  │
                  ├── trội = g cố định ∈ L¹, KHÔNG cần μ(D)<∞
                  │         ──► DCT:  ∫fₙ → ∫f  VÀ  ∫|fₙ-f| → 0   (mạnh hơn BCT)
                  │         (BCT = DCT với g = M·χ_D, hợp lệ vì μ(D)<∞ làm g khả tích)
                  │
                  └── trội = dãy gₙ → g, CẦN ∫gₙ → ∫g < ∞ (không tự động!)
                            ──► Generalized DCT:  ∫fₙ → ∫f   (tăng cường: cả ∫|fₙ-f|→0)
                            (DCT = Generalized DCT với gₙ ≡ g)
```

### B.3 Vấn đáp

> [!prob] (B-1) Chứng minh BCT là một trường hợp riêng của DCT.

> [!ans]
> Đặt $g = M\chi_D$. Vì $\mu(D)<\infty$ theo giả thiết BCT, $\int_D g\,d\mu = M\mu(D) < \infty$, nên $g \in L^1(D)$. Điều kiện $|f_n|\le M$ a.e. trên $D$ tương đương $|f_n| \le g$ a.e. trên $D$ (vì $g\equiv M$ trên $D$). Áp DCT trực tiếp với hàm trội $g$ này: $\int_D f_n \to \int_D f$ — đúng kết luận BCT, đồng thời DCT cho thêm $\int_D|f_n-f|\to 0$ (mạnh hơn kết luận gốc của BCT). $\blacksquare$

---

> [!prob] (B-2) Chứng minh rằng điều kiện $\mu(D)<\infty$ trong BCT là **cần thiết một cách bản chất** — không thể thay bằng điều kiện yếu hơn nào về $D$ — bằng phản ví dụ cụ thể có $f_n$ bị chặn đều **và hội tụ đều** (hội tụ mạnh hơn a.e. rất nhiều) nhưng $\mu(D)=\infty$.

> [!ans]
> Trên $D=[1,\infty)$ với độ đo Lebesgue, đặt $f_n(x) = \frac1n \chi_{[1,n]}(x)$.
>
> **Bị chặn đều**: $0\le f_n\le 1$ với mọi $n,x$ — chọn $M=1$.
>
> **Hội tụ đều** (mạnh hơn yêu cầu của BCT): $\sup_{x\in D}|f_n(x)-0| = \frac1n \to 0$, không phụ thuộc $x$.
>
> **Tính tích phân**: $\int_D f_n\,d\mu_L = \frac1n\cdot\mu_L([1,n]) = \frac1n(n-1) = 1-\frac1n \to 1$, trong khi $\int_D 0\,d\mu_L = 0$.
>
> Vậy $1 \ne 0$: BCT thất bại dù giả thiết hội tụ được làm mạnh hết mức (đều thay vì a.e.) — chỉ ra rằng chính $\mu(D)<\infty$, không phải tốc độ hội tụ, mới là nguyên nhân cốt lõi. Lý do cấu trúc: hàm hằng $M=1$ không khả tích trên $D=[1,\infty)$ ($\int_D 1\,d\mu_L=\infty$), nên $g=M$ không đóng vai trò "hàm trội khả tích" được — đúng như dự đoán từ chứng minh B-1 (cần $\int_D g\,d\mu<\infty$). $\blacksquare$

---

> [!prob] (B-3) Chứng minh Generalized DCT tổng quát hóa thực sự DCT (DCT là trường hợp riêng), và chỉ ra rõ DCT chỉ "nới lỏng" đúng một chỗ so với Generalized DCT.

> [!ans]
> Đặt $g_n \equiv g$ (không đổi theo $n$). Khi đó: (i) $g_n \to g$ a.e. hiển nhiên đúng (dãy hằng); (ii) $\int_D g_n\,d\mu = \int_D g\,d\mu$ với mọi $n$, nên $\int_D g_n\,d\mu \to \int_D g\,d\mu$ tự động đúng (dãy hằng số, giới hạn chính nó); (iii) $|f_n|\le g_n$ trở thành $|f_n|\le g$ — đúng giả thiết DCT. Áp Generalized DCT cho ra đúng kết luận DCT.
>
> **Điểm nới lỏng duy nhất**: Generalized DCT cho phép hàm trội $g_n$ **biến thiên theo $n$**, miễn là $\int_D g_n\,d\mu$ hội tụ đúng về $\int_D g\,d\mu$ hữu hạn — một giả thiết về *tích phân* của dãy trội, không phải về bản thân *hàm trội tại từng điểm*. DCT là trường hợp suy biến khi dãy trội không đổi. $\blacksquare$

---

> [!prob] (B-4) Chứng minh bằng phản ví dụ rằng điều kiện $\int_D g_n\,d\mu \to \int_D g\,d\mu$ trong Generalized DCT **không thể suy ra** chỉ từ $g_n \to g$ a.e., và do đó không thể bỏ khỏi giả thiết.

> [!ans]
> Trên $D=[0,1]$, đặt $g_n(x) = f_n(x) = n\chi_{[0,1/n]}(x)$ (thỏa $|f_n|\le g_n$ một cách tầm thường, đẳng thức).
>
> **Hội tụ a.e.**: với $x\in(0,1]$ cố định, $n$ đủ lớn ($n>1/x$) cho $x\notin[0,1/n]$, nên $g_n(x)\to 0 = g(x)$ với $g\equiv 0$. Hội tụ a.e. đúng (trừ điểm $x=0$, độ đo $0$).
>
> **Tích phân không hội tụ đúng**: $\int_D g_n\,d\mu = n\cdot\frac1n = 1$ với mọi $n$, nên $\int_D g_n\,d\mu \to 1 \ne 0 = \int_D g\,d\mu$ — giả thiết $\int g_n\to\int g$ bị vi phạm dù $g_n\to g$ a.e. vẫn đúng.
>
> **Hệ quả**: $f_n=g_n$ nên $\int_D f_n\,d\mu = 1 \not\to 0 = \int_D f\,d\mu$ (với $f\equiv 0$ là giới hạn a.e. của $f_n$) — kết luận của định lý sụp đổ đúng tại chỗ giả thiết bị vi phạm, xác nhận tính cần thiết. $\blacksquare$

---

> [!prob] (B-5) (Phản ví dụ DCT cấu trúc) Với $f_n(x) = \dfrac{n}{1+n^2x^2}$ trên $D=(-\infty,\infty)$, xác định hàm bao trên $\sup_n f_n(x)$ theo $x$ bằng giải tích, và chứng minh hàm bao này không khả tích — từ đó suy ra **không tồn tại bất kỳ hàm trội khả tích nào** cho dãy này trên một miền chứa lân cận của $0$.

> [!ans]
> Cố định $x\ne0$, khảo sát $f$ như hàm của biến liên tục $n>0$: $f(n)=\dfrac{n}{1+n^2x^2}$. Đạo hàm:
> $$f'(n) = \frac{(1+n^2x^2) - n\cdot 2nx^2}{(1+n^2x^2)^2} = \frac{1-n^2x^2}{(1+n^2x^2)^2}$$
> $f'(n)=0 \iff n = \frac{1}{|x|}$ (điểm cực đại vì $f'$ đổi dấu $+\to-$). Giá trị cực đại:
> $$f\Big(\frac{1}{|x|}\Big) = \frac{1/|x|}{1+1} = \frac{1}{2|x|}$$
> Vậy với mọi $n$ nguyên dương, $f_n(x) \le \dfrac{1}{2|x|}$, và hàm bao trên đúng nghĩa (cận trên nhỏ nhất khả dĩ qua tham số hóa liên tục) là $g(x)=\dfrac{1}{2|x|}$.
>
> **Không khả tích quanh gốc**: $\int_{-\delta}^{\delta} \dfrac{1}{2|x|}\,dx = 2\int_0^\delta \dfrac{1}{2x}\,dx = \int_0^\delta \frac{dx}{x} = \infty$ với mọi $\delta>0$ (phân kỳ logarit tại $0$).
>
> **Suy ra không có trội khả tích nào khác**: giả sử tồn tại $h\in L^1$ với $f_n\le h$ với mọi $n$ trên miền chứa lân cận của $0$. Vì $g(x)=\sup_n f_n(x)$ là cận **nhỏ nhất** khả dĩ thỏa $f_n\le g$ mọi $n$, ta phải có $h\ge g$ trên miền đó, nên $\int h \ge \int g = \infty$ — mâu thuẫn $h\in L^1$. Vậy không tồn tại hàm trội khả tích nào trên bất kỳ miền nào chứa $0$, giải thích chính xác tại sao DCT chỉ áp dụng được khi $a>0$ (miền tích phân tránh xa gốc). $\blacksquare$

---

> [!prob] (B-6) Chứng minh tính liên tục từ trên của tích phân **cần** giả thiết $g$ khả tích toàn cục (không chỉ không âm như liên tục từ dưới) bằng phản ví dụ cụ thể.

> [!ans]
> Trên $X=\mathbb{R}$, lấy $g\equiv 1$ (không âm nhưng **không khả tích**: $\int_{\mathbb{R}} 1\,d\mu_L=\infty$). Đặt $E_n = [n,\infty)$, dãy **giảm** ($E_{n+1}\subset E_n$), với $E=\bigcap_n E_n = \emptyset$.
>
> Ta có $\int_{E_n} g\,d\mu_L = \mu_L([n,\infty)) = \infty$ với mọi $n$, nên $\lim_n \int_{E_n} g\,d\mu_L = \infty$. Nhưng $\int_E g\,d\mu_L = \int_\emptyset g\,d\mu_L = 0$.
>
> Vậy $\infty \ne 0$: liên tục từ trên thất bại khi $g$ không khả tích, dù $g\ge0$ và $E_n\downarrow E$ đúng chuẩn. So sánh: liên tục từ dưới ($E_n\uparrow E$) chỉ cần $g\ge0$ đo được (xem A.1) — sự bất đối xứng này phản ánh đúng sự bất đối xứng giữa MCT (không cần gì thêm) và MCT giảm (cần một số hạng khả tích, mục A-3): "đi xuống" (giảm dần hoặc thu hẹp tập) luôn tiềm ẩn rủi ro mất khối lượng vô hạn ở bước đầu mà không có cách "phục hồi", trong khi "đi lên" (tăng dần) luôn an toàn. $\blacksquare$

---

## Phần C — Khả tích đều, Tính chặt, Định lý Vitali

### C.1 Phát biểu các định nghĩa/bổ đề/định lý

> [!def] (Khả tích Lebesgue / Bán khả tích)
> $f=f^+-f^-$ đo được trên $D$. **Bán khả tích**: $\int_D f^+\,d\mu - \int_D f^-\,d\mu$ có nghĩa trong $\overline{\mathbb{R}}$ (không $\infty-\infty$). **Khả tích** ($f\in L^1$): giá trị đó hữu hạn $\iff \int_D|f|\,d\mu<\infty$.

> [!lem] (Tính liên tục tuyệt đối của tích phân)
> $\varphi\in L^1(D) \implies \forall\varepsilon>0\,\exists\delta>0: \mu(A)<\delta \implies \int_A|\varphi|\,d\mu<\varepsilon$.

> [!lem] (Tính "chặt" của tích phân)
> $\varphi\in L^1(D) \implies \forall\varepsilon>0\,\exists B_\varepsilon$, $\mu(B_\varepsilon)<\infty: \int_{B_\varepsilon^c}|\varphi|\,d\mu<\varepsilon$.

> [!def] (Khả tích đều — UI, Tính chặt — Tightness, cho dãy $(f_n)\subset L^1$)
> **UI**: $\forall\varepsilon\exists\delta: \mu(A)<\delta \implies \int_A|f_n|<\varepsilon\ \forall n$.
> **Tight**: $\forall\varepsilon\exists B_\varepsilon, \mu(B_\varepsilon)<\infty: \int_{B_\varepsilon^c}|f_n|<\varepsilon\ \forall n$.

> [!thm] (Định lý Egorov) *(công cụ nhập, dùng trong chứng minh Vitali)*
> $\mu(D)<\infty$, $f_n\to f$ a.e. trên $D$ $\implies \forall\delta>0\,\exists A_\delta\subset D$ đo được, $\mu(A_\delta)<\delta$, sao cho $f_n\to f$ **đều** trên $D\setminus A_\delta$.

> [!cor] (Nhận xét 1) $|f_n|\le g\in L^1$ mọi $n$ $\implies$ $(f_n)$ thỏa UI và Tight.

> [!cor] (Nhận xét 2) $\mu(D)<\infty \implies$ mọi dãy $(f_n)\subset L^1$ tự động Tight.

> [!thm] (Định lý Hội tụ Vitali)
> $(f_n)\subset L^1(D)$, $f_n\to f$ a.e., $(f_n)$ thỏa UI và Tight $\implies f\in L^1(D)$ và $\int_D|f_n-f|\,d\mu\to0$.

> [!lem] (Prob 9.15 — Bổ đề Barbalat)
> $f$ khả tích trên $[0,\infty)$ và liên tục đều $\implies \lim_{x\to\infty}f(x)=0$.

> [!thm] (Tương đương trên $[0,\infty)$)
> $f\in L^1[0,\infty)$ và liên tục đều $\implies$ $f$ thỏa UI và Tight (theo nghĩa dãy hằng $f_n\equiv f$, hoặc mở rộng cho họ tịnh tiến).

> [!thm] (Phản ví dụ: Vitali ngặt hơn DCT) $f_n = n\cdot\chi_{[1/n,\ 1/n+1/n^2)}$ trên $\mathbb{R}$: thỏa UI+Tight (vì $\int|f_n|=1/n\to0$) nhưng $\sup_n f_n \notin L^1$ (chuỗi điều hòa) — không có hàm trội khả tích.

> [!lem] (Bất đẳng thức Logarit) $\forall x>0,\varepsilon\in(0,1): x\le \varepsilon x\ln(\varepsilon x)+e^{1/\varepsilon}$.

> [!thm] (Tiêu chuẩn de la Vallée-Poussin) $\mu(D)<\infty$, $\int_D|f_n|\ln^+|f_n|\,d\mu\le C<\infty\ \forall n$ $\implies$ $(f_n)$ thỏa UI (kết hợp Tight tự động từ Nhận xét 2 $\implies$ Vitali áp dụng được).

> [!cor] (Bị chặn $L^p$, $p>1$ $\implies$ UI) $\mu(D)<\infty$, $\sup_n\int_D|f_n|^p\,d\mu\le C \implies (f_n)$ thỏa UI.

### C.2 Sơ đồ luồng suy luận

```
fₙ ∈ L¹(D), fₙ → f a.e.
        │
        ├── (UI) Khả tích đều          ├── (Tight) Tính chặt
        │                               │
        └──────────────┬────────────────┘
                        │   (+ Định lý Egorov nếu μ(D)<∞ trên mảnh "lõi")
                        ▼
              ĐỊNH LÝ VITALI:  f∈L¹,  ∫|fₙ-f|dμ → 0     [MẠNH NHẤT — không cần hàm trội nào]
                        ▲
        ┌───────────────┼────────────────────────┬─────────────────────────┐
        │                                          │                         │
   ∃g∈L¹: |fₙ|≤g                          μ(D)<∞ tự động cho Tight    sup∫|fₙ|^p≤C (p>1), μ(D)<∞
   ──► UI + Tight tự động (Nhận xét 1)     (Nhận xét 2), còn UI cần     ──► UI tự động (không cần g)
   ──► DCT ⊂ Vitali                        thêm điều kiện khác         (cần μ(D)<∞ để có Tight)
        │                                  ──► BCT ⊂ Vitali
        │                                       (|fₙ|≤M ⟹ UI tầm thường)
        │
   g≡M, μ(D)<∞  ──► BCT ⊂ DCT ⊂ Vitali

Khi KHÔNG có hàm trội nào (kể cả dãy gₙ) nhưng vẫn UI+Tight trực tiếp
        ──► VITALI vẫn đúng, DCT/Generalized DCT đều bó tay
            (vd: fₙ = n·χ_{[1/n, 1/n+1/n²)})
```

### C.3 Vấn đáp

> [!prob] (C-1) Chứng minh BCT là một trường hợp riêng của Vitali (giả thiết BCT $\implies$ UI và Tight).

> [!ans]
> **Tight**: $\mu(D)<\infty$ theo giả thiết BCT $\implies$ Tight tự động (Nhận xét 2, chọn $B_\varepsilon=D$, $B_\varepsilon^c=\emptyset$).
>
> **UI**: $|f_n|\le M$ a.e. $\implies \int_A|f_n|\,d\mu \le \int_A M\,d\mu = M\mu(A)$ (đơn điệu tích phân, đúng với mọi $A$, không cần $\mu(D)<\infty$ ở bước này). Cho $\varepsilon>0$, chọn $\delta=\varepsilon/M$: $\mu(A)<\delta \implies \int_A|f_n|\le M\mu(A) < M\delta = \varepsilon$, đúng với mọi $n$.
>
> Cả hai điều kiện thỏa, áp Vitali: $f\in L^1$, $\int_D|f_n-f|\,d\mu\to0$ — mạnh hơn kết luận gốc của BCT. $\blacksquare$

---

> [!prob] (C-2) Chứng minh DCT là một trường hợp riêng của Vitali, và chỉ rõ DCT **không cần** $\mu(D)<\infty$ trong khi BCT cần — bước nào trong C-1 là nơi khác biệt xuất hiện?

> [!ans]
> Với $|f_n|\le g$, $g\in L^1(D)$ (không cần $\mu(D)<\infty$): áp trực tiếp Bổ đề liên tục tuyệt đối và Bổ đề tính chặt cho **chính hàm $g$** (không phải hằng số):
> - **UI**: từ liên tục tuyệt đối của $g$: $\exists\delta: \mu(A)<\delta\implies\int_A g<\varepsilon$, và $\int_A|f_n|\le\int_A g<\varepsilon$.
> - **Tight**: từ tính chặt của $g$: $\exists B_\varepsilon,\mu(B_\varepsilon)<\infty:\int_{B_\varepsilon^c}g<\varepsilon$, và $\int_{B_\varepsilon^c}|f_n|\le\int_{B_\varepsilon^c}g<\varepsilon$.
>
> **Khác biệt then chốt với C-1**: trong C-1, Tight được suy ra từ $\mu(D)<\infty$ trực tiếp (không cần đến $M$); ở đây, Tight được suy ra từ **chính hàm trội $g$** đã khả tích — Bổ đề tính chặt áp dụng cho mọi $\varphi\in L^1$ bất kể $\mu(D)$. Đây chính là lý do DCT thoát được điều kiện $\mu(D)<\infty$: vai trò "tạo Tight" được hàm $g$ (khả tích) đảm nhiệm thay vì không gian hữu hạn đo. $\blacksquare$

---

> [!prob] (C-3) Chứng minh bằng ví dụ cụ thể rằng tập giả thiết của Vitali **ngặt hơn thực sự** (không tương đương) so với DCT — tồn tại dãy thỏa Vitali mà không thỏa DCT.

> [!ans]
> Trên $\mathbb{R}$, $f_n = n\cdot\chi_{I_n}$ với $I_n = [\frac1n, \frac1n+\frac1{n^2})$ (độ dài $\frac1{n^2}$).
>
> **UI + Tight**: $\int_{\mathbb{R}}|f_n|\,d\mu_L = n\cdot\frac1{n^2}=\frac1n\to0$. Với $\varepsilon>0$ cho trước, chọn $N$ với $\frac1N<\varepsilon$: với $n\ge N$, $\int_{\mathbb{R}}|f_n|<\varepsilon$ tự động trên **mọi** tập (kể cả toàn không gian); với hữu hạn $n<N$ còn lại, mỗi $f_n$ riêng lẻ là một hàm cố định trong $L^1$, áp được Bổ đề liên tục tuyệt đối/tính chặt cho từng hàm rồi lấy $\delta,B$ nhỏ nhất trong hữu hạn giá trị — UI và Tight đều thỏa cho toàn dãy.
>
> **Không có hàm trội khả tích**: các khoảng $I_n$ rời nhau với $n$ đủ lớn (kiểm tra trực tiếp: $I_n, I_{n+1}$ không giao nhau khi $n\ge1$), nên $\sup_n f_n(x) = \sum_{n=1}^\infty n\chi_{I_n}(x)$ tại mỗi điểm (chỉ nhiều nhất một số hạng khác 0). Tích phân của hàm bao này: $\int_{\mathbb{R}}\sup_n f_n\,d\mu_L = \sum_{n=1}^\infty n\cdot\frac1{n^2} = \sum_{n=1}^\infty\frac1n = \infty$ (chuỗi điều hòa). Bất kỳ hàm trội $h\ge f_n\,\forall n$ nào cũng phải $\ge\sup_n f_n$, nên $\int h=\infty$ — không tồn tại $h\in L^1$ thỏa $|f_n|\le h$.
>
> Vậy $(f_n)$ thỏa Vitali nhưng **không thể** áp dụng DCT (giả thiết về hàm trội cố định không thể thỏa mãn). Vitali là tổng quát hóa thực sự, không phải chỉ là phát biểu lại. $\blacksquare$

---

> [!prob] (C-4) Trên $D=[0,1]$ (độ đo hữu hạn), xây dựng một dãy $(f_n)\subset L^1$ minh họa rằng **Tight tự động đúng** (theo Nhận xét 2) nhưng **UI có thể vẫn sai** — chứng tỏ hai giả thiết của Vitali độc lập nhau, không cái nào suy ra cái kia chỉ từ $\mu(D)<\infty$.

> [!ans]
> Đặt $f_n(x) = n\chi_{[0,1/n]}(x)$ trên $D=[0,1]$.
>
> **Tight**: $\mu(D)=1<\infty$, tự động đúng theo Nhận xét 2 (chọn $B_\varepsilon=D$).
>
> **UI thất bại**: lấy $A_n=[0,1/n]$, $\mu(A_n)=1/n\to0$, nhưng $\int_{A_n}|f_n|\,d\mu = n\cdot\frac1n=1$ với mọi $n$. Với $\varepsilon=\frac12$: dù chọn $\delta>0$ nhỏ thế nào, luôn tồn tại $n$ đủ lớn để $\mu(A_n)=1/n<\delta$ nhưng $\int_{A_n}|f_n|=1>\varepsilon$ — vi phạm định nghĩa UI (không tồn tại $\delta$ làm việc đồng thời cho mọi $n$).
>
> **Kiểm tra hệ quả**: $f_n(x)\to0$ với mọi $x\in(0,1]$ (a.e.), nhưng $\int_D f_n\,d\mu=1\not\to0=\int_D f\,d\mu$ — đúng như Vitali dự đoán sẽ thất bại khi thiếu UI. $\blacksquare$

---

> [!prob] (C-5) Phát biểu và chứng minh tiêu chuẩn de la Vallée-Poussin: $\mu(D)<\infty$, $\int_D|f_n|\ln^+|f_n|\,d\mu\le C$ với mọi $n$ $\implies$ $(f_n)$ thỏa UI.

> [!ans]
> Cố định $\varepsilon\in(0,1)$. Áp Bổ đề bất đẳng thức Logarit với $x=|f_n(t)|$:
> $$|f_n| \le \varepsilon|f_n|\ln(\varepsilon|f_n|) + e^{1/\varepsilon}$$
> Vì $\varepsilon<1\implies\ln\varepsilon<0$, nên $|f_n|\ln(\varepsilon|f_n|)=|f_n|\ln|f_n|+|f_n|\ln\varepsilon \le |f_n|\ln|f_n| \le |f_n|\ln^+|f_n|$ (vì $\ln|f_n|\le\ln^+|f_n|$ luôn đúng). Suy ra:
> $$|f_n| \le \varepsilon|f_n|\ln^+|f_n| + e^{1/\varepsilon}$$
> Lấy tích phân trên $A\in\mathfrak{A}$ bất kỳ:
> $$\int_A|f_n|\,d\mu \le \varepsilon\int_D|f_n|\ln^+|f_n|\,d\mu + e^{1/\varepsilon}\mu(A) \le \varepsilon C + e^{1/\varepsilon}\mu(A)$$
> Cho $\alpha>0$: chọn $\varepsilon$ sao cho $\varepsilon C<\alpha/2$ (luôn được vì $\varepsilon$ tùy ý nhỏ), rồi chọn $\delta=\dfrac{\alpha}{2e^{1/\varepsilon}}$ (với $\varepsilon$ đã cố định). Khi $\mu(A)<\delta$:
> $$\int_A|f_n|\,d\mu < \frac\alpha2 + e^{1/\varepsilon}\cdot\frac{\alpha}{2e^{1/\varepsilon}} = \alpha,\quad\forall n$$
> Vậy $(f_n)$ thỏa UI. Kết hợp với Tight tự động (Nhận xét 2, do $\mu(D)<\infty$), Vitali áp dụng được. $\blacksquare$

---

> [!prob] (C-6) Chứng minh: $\mu(D)<\infty$, $\sup_n\int_D|f_n|^p\,d\mu\le C$ với $p>1$ $\implies$ $(f_n)$ thỏa UI, bằng phương pháp phân hoạch ngưỡng (tách $x\le M$ và $x>M$), không dùng logarit.

> [!ans]
> Với $x\ge0$, $M>0$ tùy ý: nếu $x<M$ thì $x\le M$; nếu $x\ge M$ thì $x^{p-1}\ge M^{p-1}$ (do $p>1$), suy ra $x\le \dfrac{x^p}{M^{p-1}}$. Gộp hai trường hợp: $\forall x\ge0: x\le \dfrac{x^p}{M^{p-1}}+M$.
>
> Thay $x=|f_n(t)|$, lấy tích phân trên $A$ bất kỳ:
> $$\int_A|f_n|\,d\mu \le \frac1{M^{p-1}}\int_D|f_n|^p\,d\mu + M\mu(A) \le \frac{C}{M^{p-1}} + M\mu(A)$$
> Cho $\alpha>0$: vì $p-1>0$, chọn $M$ đủ lớn để $\dfrac{C}{M^{p-1}}<\dfrac\alpha2$ (cố định $M$ trước); sau đó chọn $\delta=\dfrac{\alpha}{2M}$. Khi $\mu(A)<\delta$:
> $$\int_A|f_n|\,d\mu < \frac\alpha2 + M\cdot\frac\alpha{2M} = \alpha,\quad\forall f_n$$
> UI được thỏa. (Lưu ý: không cần $\mu(D)<\infty$ cho riêng bước UI này — giống cấu trúc DCT/C-2 — nhưng đề bài đặt thêm $\mu(D)<\infty$ để đảm bảo Tight, hoàn thiện đủ điều kiện cho Vitali.) $\blacksquare$

---

> [!prob] (C-7) Phát biểu và chứng minh (phác thảo đầy đủ) Định lý Egorov — công cụ được dùng như "hộp đen" trong chứng minh Vitali.

> [!ans]
> **Phát biểu**: $\mu(D)<\infty$, $f_n\to f$ a.e. trên $D$ $\implies \forall\delta>0\,\exists A_\delta\subset D$, $\mu(A_\delta)<\delta$, sao cho $f_n\to f$ đều trên $D\setminus A_\delta$.
>
> **Chứng minh**: với mỗi $k,n\in\mathbb{N}^*$, đặt $E_{n,k} = \bigcup_{m\ge n}\{x\in D: |f_m(x)-f(x)|\ge\frac1k\}$. Với $k$ cố định, $(E_{n,k})_n$ là dãy **giảm** theo $n$ (hợp của ít số hạng hơn khi $n$ tăng). Vì $f_n\to f$ a.e., với hầu hết $x$, tồn tại $n$ đủ lớn để $|f_m(x)-f(x)|<\frac1k$ với mọi $m\ge n$ — tức $x\notin E_{n,k}$ — suy ra $\bigcap_n E_{n,k}$ có độ đo $0$ (chứa nhiều nhất tập null nơi hội tụ thất bại). Vì $\mu(D)<\infty$, áp **liên tục từ trên** của độ đo: $\mu(E_{n,k})\to\mu(\bigcap_n E_{n,k})=0$ khi $n\to\infty$.
>
> Với mỗi $k$, chọn $n_k$ sao cho $\mu(E_{n_k,k}) < \delta/2^k$. Đặt $A_\delta = \bigcup_{k=1}^\infty E_{n_k,k}$, khi đó $\mu(A_\delta) \le \sum_k \delta/2^k = \delta$.
>
> Trên $D\setminus A_\delta$: với mọi $k$, $x\notin E_{n_k,k}$, nghĩa là $|f_m(x)-f(x)|<\frac1k$ với **mọi** $m\ge n_k$ — đây chính xác là định nghĩa hội tụ đều (ngưỡng $n_k$ không phụ thuộc $x$, chỉ phụ thuộc $k$, trên toàn bộ $D\setminus A_\delta$). $\blacksquare$
>
> *(Liên hệ với Vitali: $\mu(D)<\infty$ ở đây đóng vai trò y hệt như trong BCT — nó là điều kiện kích hoạt liên tục từ trên. Trong chứng minh Vitali, Egorov chỉ được áp dụng trên tập $B_\varepsilon$ (độ đo hữu hạn nhờ Tight) chứ không phải toàn bộ $D$ — đây là lý do Tight là giả thiết không thể thiếu ngay cả khi đã có UI.)*

---

## Phần D — Khả tích Lebesgue tương đương Riemann

### D.1 Phát biểu các định nghĩa/bổ đề/định lý

> [!def] (Tích phân Riemann, Tổng Darboux) $f$ bị chặn trên $I=[a,b]$, phân hoạch $\mathcal{P}$. $m_k=\inf_{I_k}f$, $M_k=\sup_{I_k}f$. $\underline{S}(f)=\sup_{\mathcal P}s(f,\mathcal P)$, $\overline{S}(f)=\inf_{\mathcal P}S(f,\mathcal P)$. $f$ khả tích Riemann $\iff \underline S(f)=\overline S(f)$.

> [!def] (Đường bao trên/dưới) $f_*(x_0)=\sup_{\delta>0}\inf_{U(x_0,\delta)\cap D}f$, $f^*(x_0)=\inf_{\delta>0}\sup_{U(x_0,\delta)\cap D}f$.

> [!lem] (Quan sát 7.25) $f_*(x_0)\le f(x_0)\le f^*(x_0)$; $f$ liên tục tại $x_0 \iff f_*(x_0)=f^*(x_0)$.

> [!lem] (Bổ đề 7.26) $f$ bị chặn trên $I$: $f_*,f^*$ đo được Borel, bị chặn, và $\int_I f_*\,d\mu_L=\underline S(f)$, $\int_I f^*\,d\mu_L=\overline S(f)$.

> [!thm] (Định lý 7.27) $f$ khả tích Riemann trên $I$ $\implies$ $f$ đo được Lebesgue, khả tích Lebesgue, $\int_a^b f(x)\,dx = \int_I f\,d\mu_L$.

> [!thm] (Định lý 7.28 — Tiêu chuẩn Lebesgue) Tương đương: (1) $f$ khả tích Riemann; (2) $f_*=f^*$ $\mu_L$-a.e.; (3) $\mu_L(E)=0$ với $E$ là tập điểm gián đoạn của $f$.

> [!thm] (Prob 9.47) $f\ge0$ liên tục trên $[0,\infty)$, $\int_0^\infty f(x)\,dx$ (Riemann suy rộng) hội tụ hữu hạn $\implies \int_{[0,\infty)}f\,d\mu_L = \int_0^\infty f(x)\,dx$.

> [!thm] (Mở rộng dấu bất kỳ) $f$ liên tục trên $[0,\infty)$, $\int_0^\infty|f(x)|\,dx<\infty$ (hội tụ tuyệt đối) $\implies f\in L^1([0,\infty),\mu_L)$ và $\int_{[0,\infty)}f\,d\mu_L=\int_0^\infty f(x)\,dx$.

### D.2 Sơ đồ luồng suy luận

```
f bị chặn trên [a,b]
        │
        ├── f_*, f^*: LUÔN đo được Borel, bị chặn (Bổ đề 7.26) — không cần thêm giả thiết
        │
        ├── f liên tục tại x₀  ⟺  f_*(x₀) = f^*(x₀)        (Quan sát 7.25, mức ĐIỂM)
        │
        └── f khả tích Riemann
                  ⟺  S̲(f) = S̄(f)                            (định nghĩa Darboux)
                  ⟺  f_* = f^*  μ_L-a.e.                     (Bổ đề 7.26, mức TÍCH PHÂN)
                  ⟺  μ_L({điểm gián đoạn}) = 0                (Định lý 7.28, mức TẬP HỢP)
                  ──► [MỘT CHIỀU] đo được Lebesgue + khả tích Lebesgue + ∫_R = ∫_L  (Định lý 7.27)
                      (chiều ngược KHÔNG đúng: có hàm khả tích Lebesgue mà không khả tích Riemann,
                       vd: χ_{ℚ∩[0,1]} — gián đoạn KHẮP NƠI nhưng khả tích Lebesgue = 0)

Trên miền VÔ HẠN [0,∞), f liên tục:
        │
        ├── f ≥ 0, ∫₀^∞f(x)dx hội tụ (Riemann suy rộng)
        │         ──► [Prob 9.47, dùng MCT cho fₙ=f·χ_{[0,n]} + Định lý 7.27 từng đoạn hữu hạn]
        │         ──► ∫_{[0,∞)} f dμ_L = ∫₀^∞ f(x)dx
        │
        └── f dấu bất kỳ, ∫₀^∞|f(x)|dx hội tụ TUYỆT ĐỐI
                  ──► [Bước 1: Prob 9.47 cho |f| ⟹ f∈L¹;  Bước 2: DCT cho fₙ=f·χ_{[0,n]} + Định lý 7.27]
                  ──► ∫_{[0,∞)} f dμ_L = ∫₀^∞ f(x)dx
                  (NẾU chỉ hội tụ CÓ ĐIỀU KIỆN — không tuyệt đối — thì tích phân Lebesgue
                   KHÔNG TỒN TẠI theo nghĩa thông thường: vd f(x)=sin(x)/x, xem D-4)
```

### D.3 Vấn đáp

> [!prob] (D-1) Chứng minh: nếu $f$ liên tục trên $[a,b]$ thì $f$ khả tích Riemann trên $[a,b]$ — derive trực tiếp từ Định lý 7.28 (không dùng lập luận $\varepsilon$-$\delta$ cổ điển về liên tục đều).

> [!ans]
> $f$ liên tục trên $[a,b]$ (tại mọi điểm của miền) $\implies$ tập điểm gián đoạn $E=\emptyset$. Hiển nhiên $\mu_L(\emptyset)=0$. Theo điều kiện (3) của Định lý 7.28, $\mu_L(E)=0 \iff f$ khả tích Riemann. Vậy $f$ khả tích Riemann trên $[a,b]$. $\blacksquare$

---

> [!prob] (D-2) Xét $f=\chi_{\mathbb{Q}\cap[0,1]}$ (hàm Dirichlet). Chứng minh $f$ **không** khả tích Riemann nhưng khả tích Lebesgue, với $\int_{[0,1]} f\,d\mu_L = 0$. Đối chiếu với Định lý 7.28.

> [!ans]
> **Gián đoạn khắp nơi**: tại mọi $x_0\in[0,1]$, mọi lân cận $U(x_0,\delta)$ đều chứa cả điểm hữu tỉ ($f=1$) và vô tỉ ($f=0$) (tính trù mật của $\mathbb{Q}$ và $\mathbb{R}\setminus\mathbb{Q}$), nên $\sup_{U\cap[0,1]} f = 1$, $\inf_{U\cap[0,1]} f = 0$ với mọi $\delta>0$, suy ra $f^*(x_0)=1\ne0=f_*(x_0)$ tại **mọi** $x_0$. Theo Quan sát 7.25, $f$ gián đoạn tại mọi điểm: $E=[0,1]$, $\mu_L(E)=1\ne0$.
>
> Theo Định lý 7.28 (chiều (3)$\implies$(1) phủ định), $f$ **không** khả tích Riemann.
>
> **Khả tích Lebesgue**: $\mathbb{Q}\cap[0,1]$ là tập đếm được nên $\mu_L(\mathbb{Q}\cap[0,1])=0$ (hợp đếm được các tập một điểm, mỗi tập có độ đo $0$). Vậy $f=\chi_{\mathbb{Q}\cap[0,1]} = 0$ $\mu_L$-a.e., suy ra $\int_{[0,1]} f\,d\mu_L = \int_{[0,1]} 0\,d\mu_L = 0$ — hữu hạn, $f\in L^1$.
>
> **Đối chiếu**: đây là ví dụ kinh điển cho thấy chiều "$\Leftarrow$" của Định lý 7.27 không đúng — khả tích Lebesgue **không** kéo theo khả tích Riemann. Lý thuyết Lebesgue thực sự tổng quát hơn ngay trên các đoạn hữu hạn, không chỉ trên miền vô hạn. $\blacksquare$

---

> [!prob] (D-3) Trong Prob 9.47, giả thiết "$f$ liên tục" được dùng ở bước nào, và điều gì xảy ra (về mặt khái niệm) nếu chỉ giả sử $f$ đo được Lebesgue thay vì liên tục?

> [!ans]
> Giả thiết liên tục được dùng ở **đúng một bước**: để áp Định lý 7.27 cho từng đoạn hữu hạn $[0,n]$ — cụ thể, "$f$ liên tục trên $[0,n]$ (đóng, compact) $\implies$ $f$ bị chặn trên $[0,n]$ $\implies$ $f$ khả tích Riemann trên $[0,n]$ (theo D-1) $\implies \int_{[0,n]} f\,d\mu_L = \int_0^n f(x)\,dx$" — đẳng thức Riemann/Lebesgue trên từng đoạn hữu hạn chỉ có nghĩa khi tích phân Riemann $\int_0^n f(x)\,dx$ tồn tại theo đúng định nghĩa cổ điển (Darboux).
>
> **Nếu chỉ có $f$ đo được Lebesgue** (không liên tục): khái niệm "$\int_0^n f(x)\,dx$ theo Riemann suy rộng" trong phát biểu bài toán **không còn được định nghĩa rõ ràng** một cách hiển nhiên — bản thân giả thiết của bài toán ("tích phân Riemann suy rộng hội tụ") đã ngầm đòi hỏi $f$ khả tích Riemann trên mỗi đoạn $[0,n]$ trước. Theo Định lý 7.28, điều này tương đương $f$ liên tục $\mu_L$-a.e. trên mỗi $[0,n]$ — yếu hơn "liên tục khắp nơi" nhưng vẫn là một ràng buộc thực sự (ví dụ hàm Dirichlet trên $[0,n]$ sẽ không thỏa). Vậy giả thiết liên tục trong Prob 9.47 không phải tùy ý mà là điều kiện *tối thiểu cần có* để vế phải $\int_0^\infty f(x)\,dx$ (Riemann) còn có nghĩa để so sánh với vế trái (Lebesgue). $\blacksquare$

---

> [!prob] (D-4) Chứng minh rằng giả thiết "hội tụ **tuyệt đối**" trong định lý mở rộng dấu bất kỳ là cần thiết — không thể thay bằng "hội tụ" (có điều kiện) — bằng ví dụ $f(x) = \dfrac{\sin x}{x}$ trên $(0,\infty)$ (quy ước $f(0)=1$).

> [!ans]
> **Hội tụ có điều kiện (Riemann)**: đây là kết quả kinh điển của giải tích, $\int_0^\infty \dfrac{\sin x}{x}\,dx = \dfrac\pi2$ (hội tụ theo nghĩa Riemann suy rộng, bằng kỹ thuật tích phân từng phần / Dirichlet, không chứng minh lại ở đây).
>
> **Không hội tụ tuyệt đối**: chia $(0,\infty)$ thành các đoạn $[k\pi, (k+1)\pi]$, $k=0,1,2,\dots$. Trên mỗi đoạn, $|\sin x|\ge \frac{\sqrt2}{2}$ trên một đoạn con có độ dài $\ge \pi/2$ (cụ thể, $|\sin x|\ge\frac1{\sqrt2}$ trên đoạn giữa chiếm ít nhất nửa độ dài $[k\pi,(k+1)\pi]$), và trên đó $\dfrac1x \ge \dfrac1{(k+1)\pi}$. Suy ra:
> $$\int_{k\pi}^{(k+1)\pi} \left|\frac{\sin x}{x}\right|dx \ge \frac{1}{\sqrt2}\cdot\frac\pi2\cdot\frac1{(k+1)\pi} = \frac{C}{k+1}$$
> với $C=\frac{1}{2\sqrt2}>0$ là hằng số. Tổng theo $k$: $\sum_k \dfrac{C}{k+1}$ là (bội của) chuỗi điều hòa, phân kỳ. Vậy $\int_0^\infty \left|\dfrac{\sin x}{x}\right|dx = \infty$.
>
> **Hệ quả cho Lebesgue**: vì $\int|f|\,d\mu_L=\infty$, cả $f^+$ và $f^-$ (phần dương/âm của $f$) đều có $\int f^+\,d\mu_L=\int f^-\,d\mu_L=\infty$ (do tính đối xứng dao động của $\sin x/x$, cả hai phần đều phân kỳ), nên biểu thức định nghĩa $\int f\,d\mu_L = \int f^+ - \int f^-$ rơi vào dạng vô định $\infty-\infty$ — **không bán khả tích**, tích phân Lebesgue của $f$ trên $(0,\infty)$ **không tồn tại**.
>
> **Bài học cốt lõi**: lý thuyết Lebesgue hoàn toàn không có khái niệm "hội tụ có điều kiện" — chỉ có khả tích (tuyệt đối) hoặc không bán khả tích. Tích phân Riemann suy rộng $\pi/2$ là một đối tượng *khác*, tồn tại nhờ sự triệt tiêu (cancellation) giữa các dao động dương/âm theo một **thứ tự lấy giới hạn cụ thể** ($n\to\infty$ trên $[0,n]$) — điều mà tích phân Lebesgue (không có khái niệm thứ tự) không thể nắm bắt. Đây chính xác là lý do giả thiết "hội tụ tuyệt đối" không thể yếu hóa thành "hội tụ" trong định lý mở rộng. $\blacksquare$

---

> [!prob] (D-5) Trong chứng minh Prob 9.47, chỉ rõ bước nào dùng MCT và giải thích vì sao **không thể thay MCT bằng Định lý 7.27 áp dụng trực tiếp trên $[0,\infty)$** (tức là vì sao cần bước trung gian qua dãy hàm cắt ngọn).

> [!ans]
> **Bước dùng MCT**: đặt $f_n = f\cdot\chi_{[0,n]}$. Vì $f\ge0$ liên tục, $(f_n)$ không âm, tăng ($f_n\le f_{n+1}$ do miền mở rộng), và $f_n\to f$ tại mọi điểm của $[0,\infty)$. Áp MCT: $\int_{[0,\infty)} f_n\,d\mu_L \to \int_{[0,\infty)} f\,d\mu_L$. Đây là bước **duy nhất** đưa tích phân trên miền vô hạn về giới hạn của tích phân trên các đoạn hữu hạn $[0,n]$.
>
> **Vì sao không thể bỏ qua bước này**: Định lý 7.27 (và 7.28) chỉ được phát biểu và chứng minh cho $f$ **bị chặn trên đoạn hữu hạn** $I=[a,b]$ — toàn bộ cấu trúc tổng Darboux $s(f,\mathcal P), S(f,\mathcal P)$ đòi hỏi phân hoạch hữu hạn của một đoạn hữu hạn, và Bổ đề 7.26 chứng minh tính đo được của $f_*,f^*$ dựa trên dãy phân hoạch $\mathcal P_m$ của chính đoạn $I$ đó. Khái niệm "tổng Darboux trên $[0,\infty)$" không được định nghĩa (không thể phân hoạch một khoảng vô hạn thành hữu hạn đoạn con có độ dài hữu hạn). Do đó Định lý 7.27 chỉ áp dụng được cho **từng** $[0,n]$ riêng lẻ (cho $\int_{[0,n]} f\,d\mu_L = \int_0^n f(x)dx$), còn việc nối các kết quả hữu hạn này lại thành giới hạn trên toàn miền vô hạn nhất thiết phải đi qua một định lý hội tụ độc lập — ở đây là MCT (cho $f\ge0$) hoặc DCT (cho $f$ dấu bất kỳ, xem định lý mở rộng). $\blacksquare$

---

## Phần E — Bản đồ tổng hợp toàn cảnh

### E.1 Sơ đồ hợp nhất bốn dạng

```
                                    HÀM KHÔNG ÂM, ĐO ĐƯỢC
                                            │
                          ┌─────────────────┴─────────────────┐
                          │ (chỉ liminf)                       │ (đơn điệu tăng)
                          ▼                                     ▼
                     BỔ ĐỀ FATOU  ─────────────────────────►  MCT
                          │                                     │
              (chặn trên bởi g∈L¹,                    (nếu lim ∫fₙ<∞: f đóng vai
               dấu bất kỳ)                              trò trội cho chính nó)
                          ▼                                     ▼
                  FATOU NGƯỢC                          MCT ⟹ hội tụ L¹ (DCT với g=f)
                          │
        (kết hợp 2 chiều: |fₙ|≤trội)
                          ▼
        ┌─────────────────┼─────────────────┐
        │ trội = M, μ(D)<∞│ trội = g∈L¹      │ trội = dãy gₙ, ∫gₙ→∫g
        ▼                 ▼                  ▼
       BCT      ────►    DCT      ────►   Generalized DCT
        │                 │                  │
        └─────────────────┴────────┬─────────┘
                                    │ (đều là trường hợp riêng: UI+Tight tự động)
                                    ▼
                          ĐỊNH LÝ VITALI  (UI + Tight + h.t.a.e. ⟹ hội tụ L¹)
                                    │
                    (công cụ riêng: Egorov — biến h.t. a.e. thành h.t. đều
                     trên phần "lõi" có độ đo hữu hạn nhờ Tight)

                          ════════════════════

                    RIEMANN ──(liên tục h.k.n / gián đoạn độ đo 0)──► LEBESGUE
                          │  (trên đoạn hữu hạn: Định lý 7.27/7.28)
                          │
                          │  (trên [0,∞): cần MCT nếu f≥0 — Prob 9.47,
                          │   cần DCT nếu f dấu bất kỳ + hội tụ TUYỆT ĐỐI — Mở rộng)
                          ▼
                  KHÔNG có Riemann suy rộng "có điều kiện" nào tương ứng
                  với Lebesgue — đây là biên giới cứng giữa hai lý thuyết
```

### E.2 Bài toán tổng hợp (capstone)

> [!prob] (E-1) Cho $f_n(x) = nxe^{-nx}$ trên $[0,\infty)$. (a) Tìm giới hạn điểm $f$. (b) Chứng minh $(f_n)$ **không đơn điệu** theo $n$ tại mỗi $x>0$ cố định — vậy MCT không áp dụng trực tiếp được bằng lý do cấu trúc. (c) Bất chấp điều đó, xây dựng tường minh một hàm trội khả tích $g\in L^1([0,\infty))$ sao cho $f_n\le g$ với mọi $n$, từ đó hợp thức hóa DCT. (d) Tính $\lim_n\int_0^\infty f_n\,dx$ bằng hai cách (trực tiếp và qua DCT) để đối chiếu, rồi so sánh với phản ví dụ B-5 ($f_n=\frac{n}{1+n^2x^2}$) — vì sao trường hợp đó *thực sự* không có trội khả tích còn trường hợp này *có*?

> [!ans]
> **(a) Giới hạn điểm**: với $x>0$ cố định, đặt $t=nx\to\infty$ khi $n\to\infty$; $f_n(x) = nxe^{-nx} = te^{-t}$. Vì $te^{-t}\to0$ khi $t\to\infty$ (hàm mũ thắng đa thức), $f_n(x)\to0$. Tại $x=0$: $f_n(0)=0$ với mọi $n$. Vậy $f_n\to f\equiv0$ trên $[0,\infty)$, tại **mọi** điểm.
>
> **(b) Không đơn điệu**: xem $n$ như biến liên tục $t>0$ (đạo hàm hình thức), $\dfrac{\partial}{\partial t}(txe^{-tx}) = xe^{-tx}(1-tx)$. Biểu thức này dương khi $t<1/x$, âm khi $t>1/x$ — hàm $t\mapsto txe^{-tx}$ tăng rồi giảm, đạt cực đại tại $t=1/x$. Vậy với $x$ cố định, dãy $(f_n(x))_n$ tăng khi $n<1/x$ và giảm khi $n>1/x$ — không đơn điệu một chiều. MCT (cả tăng lẫn giảm) không áp dụng được trực tiếp vì giả thiết đơn điệu bị vi phạm theo đúng cơ chế của phản ví dụ $nx^n$ (Mục V tài liệu trước).
>
> **(c) Xây dựng hàm trội**: tách miền theo điểm cực đại $t^*=1/x=1$, tức $x=1$.
> - Với $x\in(0,1]$: dùng cận tổng quát (không phụ thuộc $x$) $te^{-t}\le\sup_{t>0}te^{-t}=\frac1e$ (đạt tại $t=1$, kiểm tra bằng đạo hàm $\frac{d}{dt}(te^{-t})=e^{-t}(1-t)=0\iff t=1$). Vậy $f_n(x)=nxe^{-nx}\le\frac1e$ với mọi $n,x$ — trên $(0,1]$, chặn bởi hằng số $\frac1e$, khả tích vì $\mu_L((0,1])=1<\infty$.
> - Với $x>1$: vì $x>1\implies 1/x<1\le n$ với mọi $n\ge1$, nên với $t=nx\ge x>1$, ta đang ở miền **sau** điểm cực đại $t^*=1$, nơi $t\mapsto te^{-t}$ giảm. Trong các giá trị nguyên $n\ge1$, $t=nx$ nhỏ nhất ứng với $n=1$ ($t=x$), và hàm giảm nên giá trị lớn nhất đạt tại $n=1$: $\sup_{n\ge1} f_n(x) = f_1(x) = xe^{-x}$. Hàm này khả tích trên $(1,\infty)$: $\int_1^\infty xe^{-x}\,dx = [-(x+1)e^{-x}]_1^\infty = \frac2e <\infty$.
>
> Ghép lại: $g(x) = \frac1e\chi_{(0,1]}(x) + xe^{-x}\chi_{(1,\infty)}(x)$ thỏa $f_n\le g$ với mọi $n$, và $\int_0^\infty g\,dx = \frac1e + \frac2e = \frac3e <\infty$, tức $g\in L^1$. DCT áp dụng được hợp lệ.
>
> **(d) Đối chiếu hai cách tính**:
> *Trực tiếp*: đặt $u=nx$, $du=n\,dx$: $\int_0^\infty nxe^{-nx}\,dx = \int_0^\infty \frac{u}{n}e^{-u}\,\frac{du}{n}\cdot n = \frac1n\int_0^\infty ue^{-u}\,du = \frac1n\cdot\Gamma(2) = \frac1n \to 0$.
> *Qua DCT*: vì $f_n\to0$ a.e. và $f_n\le g\in L^1$ (phần (c)), DCT cho ngay $\int_0^\infty f_n\,dx \to \int_0^\infty 0\,dx = 0$ — khớp với tính trực tiếp.
>
> **So sánh với B-5**: ở $f_n=\frac{n}{1+n^2x^2}$, hàm bao $\sup_n f_n(x) = \frac1{2|x|}$ phân kỳ logarit **tại chính điểm $x=0$ mà mọi $f_n$ đều "đi qua"** khi đạt cực đại của nó (đỉnh tại $t^*=1/|x|$ luôn ứng với cùng độ cao $\frac1{2|x|}\to\infty$ khi $x\to0$, không bị giới hạn) — không có cách "cắt ngưỡng" nào cứu được vì ngay tại lân cận gốc, độ cao đỉnh tăng vô hạn. Ngược lại, ở $f_n=nxe^{-nx}$, độ cao đỉnh tại mỗi $x$ là **hằng số $\frac1e$** (không phụ thuộc $x$, vì $te^{-t}$ đạt đúng cùng giá trị cực đại $1/e$ bất kể $x$ là bao nhiêu — chỉ vị trí $n=t^*/x$ thay đổi) — đây chính là điểm mấu chốt cho phép xây dựng trội hữu hạn trên $(0,1]$ bằng một hằng số, trong khi ở B-5 đỉnh "phình to" vô hạn khi tiến về gốc. Bài học cấu trúc: **hàm trội tồn tại được hay không phụ thuộc vào việc đỉnh dao động của họ hàm có bị "phình to" tại một điểm cố định hay không, không chỉ phụ thuộc vào việc dãy có đơn điệu hay không.** $\blacksquare$
