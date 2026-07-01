# Ôn tập 3.8 — Ánh xạ tuyến tính liên tục

## Phần lý thuyết nền tảng

> [!def] Chuẩn toán tử
> Cho $E, F$ là các không gian định chuẩn và $T: E \to F$ tuyến tính liên tục (bị chặn). Chuẩn toán tử của $T$ được định nghĩa
> $$\|T\| = \sup_{\|x\| \le 1} \|Tx\| = \sup_{\|x\|=1} \|Tx\| \quad (E \ne \{0\}).$$

> [!prp] Đặc trưng của chuẩn toán tử
> Với $T \in L(E,F)$, $E \ne \{0\}$, hai điều sau tương đương với $\|T\| = M$:
> 1. $\forall x \in E,\ \|Tx\| \le M\|x\|$, và
> 2. tồn tại dãy $(x_n)$, $\|x_n\|=1$, sao cho $\|Tx_n\| \to M$.
>
> (Đây chính là nội dung Bài 3.8.16, được chứng minh chi tiết bên dưới và dùng lại nhiều lần.)

> [!thm] Bất đẳng thức Hölder / Cauchy–Schwarz cho $\ell^p$ và $L^p$
> Với $1/p + 1/q = 1$ ($p,q \in [1,\infty]$), với $x \in \ell^p$, $y \in \ell^q$:
> $$\sum_n |x_n y_n| \le \|x\|_p \|y\|_q,$$
> và tương tự cho $L^p(\Omega), L^q(\Omega)$: $\int |fg| \le \|f\|_p \|g\|_q$. Trường hợp $p=q=2$ chính là Cauchy–Schwarz.

> [!thm] Định lý Arzelà–Ascoli
> Một tập con $\mathcal{F} \subseteq C(K)$ ($K$ compắc) là compắc tương đối (có bao đóng compắc) khi và chỉ khi $\mathcal{F}$ bị chặn đều và đồng liên tục (equicontinuous).

> [!prp] $L(E,F)$ đầy đủ khi $F$ đầy đủ
> Nếu $F$ là không gian Banach thì $L(E,F)$ (với chuẩn toán tử) cũng là không gian Banach, với $E$ định chuẩn bất kỳ. (Dùng ở các Bài 3.8.23–3.8.26; chứng minh: dãy Cauchy $(T_n)$ trong $L(E,F)$ cho $(T_nx)$ Cauchy trong $F$ với mỗi $x$, hội tụ về $Tx$ do $F$ đầy đủ; kiểm tra $T$ tuyến tính, bị chặn, và $T_n \to T$ theo chuẩn toán tử.)

## Câu 3.8.1

> [!prob] 3.8.1
> Chứng tỏ nếu $\forall x, \|Tx\| \le M\|x\|$ thì $\|T\| \le M$.

> [!prf] Lời giải
> Theo định nghĩa, $\|T\| = \sup_{\|x\|\le 1} \|Tx\|$. Với mọi $x$, $\|x\|\le 1$, giả thiết cho $\|Tx\| \le M\|x\| \le M$. Vậy $M$ là một chặn trên của tập $\{\|Tx\| : \|x\|\le 1\}$, do đó
> $$\|T\| = \sup_{\|x\|\le1}\|Tx\| \le M$$

## Câu 3.8.2

> [!prob] 3.8.2
> Giả sử $E \ne \{0\}$. Với $T \in L(E,F)$ thì $\|T\| = \min\{M \in \mathbb{R} \mid \forall x \in E, \|Tx\| \le M\|x\|\}$.

> [!prf] Lời giải
> Đặt $\mathcal{S} = \{M \in \mathbb{R} : \forall x \in E, \|Tx\| \le M\|x\|\}$.
>
> **$\|T\| \in \mathcal{S}$:** với $x \ne 0$, đặt $y = x/\|x\|$, $\|y\|=1$, khi đó $\|Tx\| = \|x\|\,\|Ty\| \le \|x\| \sup_{\|z\|=1}\|Tz\| = \|x\|\,\|T\|$. Với $x=0$ bất đẳng thức hiển nhiên đúng ($0 \le 0$). Vậy $\|T\| \in \mathcal{S}$.
>
> **$\|T\|$ là cận dưới của $\mathcal{S}$:** với mọi $M \in \mathcal{S}$, theo Bài 3.8.1, $\|T\| \le M$.
>
> Vậy $\|T\|$ vừa thuộc $\mathcal{S}$ vừa là cận dưới của $\mathcal{S}$, nên $\|T\| = \min \mathcal{S}$. 

## Câu 3.8.3

> [!prob] 3.8.3
> Giả sử $T: E \to F$ tuyến tính liên tục. Đặt $\|T\|_1 = \sup\{\|Tx\| \mid x \in B(0,1)\}$ và $\|T\|_2 = \sup\{\|Tx\| \mid x \in B(0,r)\}$. Chứng tỏ $\|T\|_2 = r\|T\|_1$.

> [!prf] Lời giải
> Ánh xạ $x \mapsto x/r$ là song ánh từ $B(0,r)$ (hình cầu mở bán kính $r$) lên $B(0,1)$: $x \in B(0,r) \Leftrightarrow \|x\| < r \Leftrightarrow \|x/r\| < 1$. Đặt $y = x/r \in B(0,1)$, ta có $x = ry$ và
> $$\|Tx\| = \|T(ry)\| = r\|Ty\|.$$
> Khi $x$ chạy khắp $B(0,r)$ thì $y$ chạy khắp $B(0,1)$ (song ánh), nên
> $$\|T\|_2 = \sup_{x \in B(0,r)} \|Tx\| = \sup_{y \in B(0,1)} r\|Ty\| = r \sup_{y\in B(0,1)} \|Ty\| = r\|T\|_1$$

## Câu 3.8.4

> [!prob] 3.8.4
> Chứng tỏ nếu $F$ là không gian định chuẩn con của $E$ và $T$ là ánh xạ tuyến tính liên tục trên $E$ thì thu hẹp $T|_F$ của $T$ xuống $F$ cũng tuyến tính liên tục và $\|T|_F\| \le \|T\|$.

> [!prf] Lời giải
> **Tuyến tính:** hiển nhiên vì $T|_F$ chỉ là $T$ giới hạn miền xác định xuống $F$, không thay đổi giá trị hay cấu trúc tuyến tính.
>
> **Liên tục và đánh giá chuẩn:** vì $T$ liên tục trên $E$, $\|Tx\| \le \|T\|\|x\|$ với mọi $x \in E$, đặc biệt với mọi $x \in F \subseteq E$. Theo Bài 3.8.1 (áp dụng cho $T|_F$ trên $F$ với $M = \|T\|$), $T|_F$ bị chặn (liên tục) và
> $$\|T|_F\| \le \|T\|$$

## Câu 3.8.5

> [!prob] 3.8.5
> Trên $\mathbb{R}$, xét $T: \ell^\infty \to \mathbb{R}$, $Tx = \sum_{n=1}^\infty \dfrac{x_n}{3^n}$. Chứng tỏ $T$ tuyến tính liên tục. Tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt:** với $x \in \ell^\infty$, $|x_n/3^n| \le \|x\|_\infty/3^n$, và $\sum 1/3^n$ hội tụ (chuỗi hình học tỉ số $1/3$), nên chuỗi định nghĩa $Tx$ hội tụ tuyệt đối.
>
> **Tuyến tính:** hiển nhiên từ tính tuyến tính của tổng chuỗi hội tụ.
>
> **Liên tục:**
> $$|Tx| \le \sum_{n=1}^\infty \frac{|x_n|}{3^n} \le \|x\|_\infty \sum_{n=1}^\infty \frac{1}{3^n} = \|x\|_\infty \cdot \frac{1/3}{1-1/3} = \frac{\|x\|_\infty}{2}.$$
> Vậy $T$ bị chặn với $\|T\| \le 1/2$.
>
> **Tính $\|T\|$:** lấy $x = (1,1,1,\dots) \in \ell^\infty$, $\|x\|_\infty = 1$, khi đó $Tx = \sum 1/3^n = 1/2$. Đạt cận trên, vậy
> $$\|T\| = \frac12.$$

# Câu 3.8.6

> [!prob] 3.8.6
> Kiểm ánh xạ $T: \ell^2 \to \mathbb{R}$, $x = (x_1,x_2,\dots) \mapsto Tx = -2x_1$ là tuyến tính liên tục và tính chuẩn.

> [!prf] Lời giải
> **Tuyến tính:** hiển nhiên vì $T$ là $-2$ nhân với phép chiếu tọa độ thứ nhất.
>
> **Liên tục:** $|Tx| = 2|x_1| \le 2\|x\|_2$ (vì $|x_1| \le \|x\|_2$), nên $\|T\| \le 2$.
>
> **Tính $\|T\|$:** lấy $x = e_1 = (1,0,0,\dots)$, $\|e_1\|_2 = 1$, $Te_1 = -2$, $|Te_1| = 2$. Đạt cận trên, vậy
> $$\|T\| = 2.$$



## Câu 3.8.7

> [!prob] 3.8.7
> Trên $\mathbb{R}$, xét $T: \ell^2 \to \mathbb{R}$, $Tx = \sum_{n=1}^\infty \dfrac{x_n}{n}$. Đây có là ánh xạ tuyến tính liên tục không? Nếu có, tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt & liên tục:** dãy $(1/n)_n \in \ell^2$ vì $\sum 1/n^2 = \pi^2/6 < \infty$. Theo Cauchy–Schwarz trong $\ell^2$:
> $$|Tx| = |\langle x, (1/n)_n\rangle| \le \|x\|_2 \left(\sum_{n=1}^\infty \frac{1}{n^2}\right)^{1/2} = \|x\|_2 \cdot \frac{\pi}{\sqrt6}.$$
> Vậy chuỗi định nghĩa $Tx$ hội tụ tuyệt đối với mọi $x \in \ell^2$, $T$ tuyến tính (hiển nhiên), và bị chặn: $\|T\| \le \pi/\sqrt6$. Vậy **$T$ là ánh xạ tuyến tính liên tục**.
>
> **Tính $\|T\|$:** đẳng thức Cauchy–Schwarz xảy ra khi $x$ tỉ lệ với $(1/n)_n$; lấy $x = (1/n)_n \in \ell^2$, $\|x\|_2 = \pi/\sqrt6$, và
> $$Tx = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}.$$
> Tỉ số $Tx/\|x\|_2 = (\pi^2/6)/(\pi/\sqrt6) = \pi/\sqrt6$, đạt đúng cận trên. Vậy
> $$\|T\| = \frac{\pi}{\sqrt6}.$$



## Câu 3.8.8

> [!prob] 3.8.8
> Tiếp tục Bài 2.8.17, 2.8.18. Cho $1 \le p < q \le \infty$. Xét $i: \ell^p \to \ell^q$, $x \mapsto x$.
> (a) Kiểm $i$ tuyến tính. (b) Chứng tỏ $i$ tuyến tính liên tục. (c) Tính chuẩn của $i$.

> [!prf] Lời giải (trường hợp $q < \infty$)
> **(a) Tuyến tính:** $i$ là ánh xạ đồng nhất giữa hai tập nền giống nhau (dãy số), nên tuyến tính hiển nhiên: $i(\alpha x + \beta y) = \alpha x + \beta y = \alpha i(x) + \beta i(y)$.
>
> **(b) Định nghĩa tốt & liên tục.** Trước hết cần $x \in \ell^p \Rightarrow x \in \ell^q$. Nếu $x = 0$ hiển nhiên. Nếu $x \ne 0$, đặt $y = x/\|x\|_p$, khi đó $\|y\|_p = 1$ nên $\sum_n |y_n|^p = 1$, suy ra $|y_n| \le 1$ với mọi $n$ (mỗi số hạng không âm của tổng bằng 1 phải $\le 1$). Vì $q \ge p$ và $|y_n|\le 1$:
> $$|y_n|^q \le |y_n|^p.$$
> Lấy tổng: $\sum_n |y_n|^q \le \sum_n |y_n|^p = 1$, nên $\|y\|_q \le 1$. Vậy $y \in \ell^q$ với $\|y\|_q \le \|y\|_p = 1$. Suy ra $x = \|x\|_p y \in \ell^q$ và
> $$\|x\|_q = \|x\|_p \|y\|_q \le \|x\|_p.$$
> Vậy $i$ được định nghĩa tốt và $\|i(x)\|_q \le \|x\|_p$ với mọi $x$, nên theo Bài 3.8.1, $i$ liên tục với $\|i\| \le 1$.
>
> **(c) Tính chuẩn.** Lấy $x = e_1 = (1,0,0,\dots)$: $\|e_1\|_p = \|e_1\|_q = 1$, và tỉ số bằng $1$, đạt cận trên. Vậy
> $$\|i\| = 1.$$
> (Trường hợp $q = \infty$: lập luận tương tự với $\|x\|_\infty = \sup_n |x_n| \le \left(\sum |x_n|^p\right)^{1/p} = \|x\|_p$, cũng cho $\|i\|=1$.)



## Câu 3.8.9

> [!prob] 3.8.9
> Kiểm ánh xạ $T: C([0,1],\mathbb{R}) \to \mathbb{R}$, $x \mapsto Tx = -3x(1/2)$ là tuyến tính liên tục và tính chuẩn.

> [!prf] Lời giải
> **Tuyến tính:** $T$ là $-3$ nhân phiếm hàm định giá tại $1/2$, tuyến tính hiển nhiên.
>
> **Liên tục:** $|Tx| = 3|x(1/2)| \le 3\|x\|_\infty$, nên $\|T\| \le 3$.
>
> **Tính $\|T\|$:** lấy $x \equiv 1$, $\|x\|_\infty = 1$, $Tx = -3$, $|Tx| = 3$. Đạt cận trên, vậy
> $$\|T\| = 3.$$



## Câu 3.8.10

> [!prob] 3.8.10
> Với $x \in C([0,1],\mathbb{R})$, đặt $T(x)(t) = x(1-t)$, $0 \le t \le 1$. Chứng tỏ $T$ tuyến tính liên tục từ $(C([0,1],\mathbb{R}), \|\cdot\|_\infty)$ vào chính nó. Tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt:** ánh xạ $t \mapsto 1-t$ liên tục từ $[0,1]$ vào $[0,1]$, hợp với $x$ liên tục nên $Tx = x \circ (1-\cdot)$ liên tục, $Tx \in C([0,1])$.
>
> **Tuyến tính:** hiển nhiên từ định nghĩa qua phép hợp với ánh xạ tuyến tính (theo biến $x$).
>
> **Liên tục và tính chuẩn — thực chất $T$ là một phép đẳng cự.** Ánh xạ $\varphi: [0,1]\to[0,1]$, $\varphi(t) = 1-t$, là song ánh (với nghịch đảo là chính nó). Do đó
> $$\|Tx\|_\infty = \sup_{t\in[0,1]} |x(1-t)| = \sup_{s \in [0,1]} |x(s)| = \|x\|_\infty,$$
> (đổi biến $s = 1-t$, khi $t$ chạy khắp $[0,1]$ thì $s$ cũng chạy khắp $[0,1]$). Vậy $\|Tx\| = \|x\|$ với **mọi** $x$, nên $T$ liên tục (bị chặn với hằng số $1$) và
> $$\|T\| = 1$$
> (đạt được với bất kỳ $x \ne 0$ nào).



## Câu 3.8.11

> [!prob] 3.8.11
> Với $x \in C([0,1],\mathbb{R})$, đặt $T(x)(t) = x(t^2)$, $0 \le t \le 1$. Chứng tỏ $T$ tuyến tính liên tục từ $C([0,1],\mathbb{R})$ (chuẩn sup) vào chính nó. Tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt:** $t \mapsto t^2$ liên tục $[0,1]\to[0,1]$, hợp với $x$ liên tục cho $Tx \in C([0,1])$.
>
> **Tuyến tính:** hiển nhiên.
>
> **Liên tục và tính chuẩn.** Ánh xạ $\varphi(t)=t^2$ là **toàn ánh** từ $[0,1]$ lên $[0,1]$ (không cần song ánh, chỉ cần toàn ánh để đổi biến sup). Với mỗi $s \in [0,1]$, tồn tại $t = \sqrt s \in [0,1]$ sao cho $t^2 = s$. Do đó
> $$\|Tx\|_\infty = \sup_{t\in[0,1]} |x(t^2)| = \sup_{s\in[0,1]} |x(s)| = \|x\|_\infty.$$
> Vậy $T$ là một phép đẳng cự, $T$ liên tục, và
> $$\|T\| = 1.$$



## Câu 3.8.12

> [!prob] 3.8.12
> Kiểm ánh xạ $T: C([0,1],\mathbb{R}) \to C([0,1],\mathbb{R})$, $x \mapsto Tx$, với $(Tx)(t) = \displaystyle\int_0^1 sx(s)\,ds$ (không phụ thuộc $t$). Chứng tỏ tuyến tính liên tục, tính chuẩn.

> [!prf] Lời giải
> **Định nghĩa tốt:** với $x$ cố định, $Tx$ là hàm hằng (giá trị $\int_0^1 sx(s)\,ds$ tại mọi $t$), là hàm liên tục, nên $Tx \in C([0,1])$.
>
> **Tuyến tính:** hiển nhiên từ tuyến tính của tích phân.
>
> **Liên tục:** với mọi $t$,
> $$|(Tx)(t)| = \left|\int_0^1 sx(s)\,ds\right| \le \|x\|_\infty \int_0^1 s\,ds = \frac{\|x\|_\infty}{2},$$
> nên $\|Tx\|_\infty \le \dfrac{\|x\|_\infty}{2}$, $T$ bị chặn với $\|T\| \le 1/2$.
>
> **Tính $\|T\|$:** lấy $x \equiv 1$, $\|x\|_\infty = 1$, $(Tx)(t) = \int_0^1 s\,ds = 1/2$ với mọi $t$, nên $\|Tx\|_\infty = 1/2$. Đạt cận trên, vậy
> $$\|T\| = \frac12.$$



## Câu 3.8.13

> [!prob] 3.8.13
> Với $x \in C([0,1],\mathbb{R})$, đặt $Tx$ là hàm cho bởi $T(x)(t) = \displaystyle\int_0^1 x(s)\sin(st)\,ds$, $0 \le t \le 1$.
> (a) Chứng tỏ $T$ tuyến tính liên tục $C([0,1])\to C([0,1])$ (chuẩn sup).
> (b) Ước lượng $\|T\|$.
> (c) Tính chính xác $\|T\|$.

> [!prf] Lời giải
> **(a) Định nghĩa tốt & tuyến tính liên tục.**
>
> *Liên tục theo $t$:* với $t, t' \in [0,1]$,
> $$|(Tx)(t) - (Tx)(t')| \le \int_0^1 |x(s)|\,|\sin(st)-\sin(st')|\,ds \le \|x\|_\infty \int_0^1 |\sin(st)-\sin(st')|\,ds.$$
> Vì $\sin$ liên tục đều trên $[0,1]$, khi $t' \to t$ thì $\sin(st') \to \sin(st)$ đều theo $s \in [0,1]$ (do $|st-st'|\le|t-t'|\to0$ đều theo $s\in[0,1]$), nên vế phải $\to 0$. Vậy $Tx$ liên tục, $Tx \in C([0,1])$.
>
> *Tuyến tính:* hiển nhiên từ tuyến tính của tích phân theo $x$.
>
> **(b) Ước lượng $\|T\|$.** Với mọi $t \in [0,1]$:
> $$|(Tx)(t)| \le \int_0^1 |x(s)||\sin(st)|\,ds \le \|x\|_\infty \int_0^1 |\sin(st)|\,ds \le \|x\|_\infty \int_0^1 1\,ds = \|x\|_\infty$$
> (vì $|\sin(st)|\le 1$). Vậy $\|Tx\|_\infty \le \|x\|_\infty$, tức $\|T\| \le 1$.
>
> **(c) Tính chính xác $\|T\|$.** Ước lượng ở (b) **không chặt**: với $s,t\in[0,1]$, $st \in [0,1] \subset [0,\pi]$, nên $\sin(st) \ge 0$ luôn luôn. Do đó, với $t$ cố định, hàm $s \mapsto \sin(st)$ không đổi dấu trên $[0,1]$, nên
> $$\sup_{\|x\|_\infty\le1} |(Tx)(t)| = \sup_{\|x\|_\infty\le1}\left|\int_0^1 x(s)\sin(st)\,ds\right| = \int_0^1 \sin(st)\,ds,$$
> đạt được (chính xác, không chỉ xấp xỉ) tại $x \equiv 1$. Vì sup theo $x$ và sup theo $t$ có thể hoán đổi thứ tự tự do:
> $$\|T\| = \sup_{\|x\|\le1}\|Tx\|_\infty = \sup_{t\in[0,1]}\sup_{\|x\|\le1}|(Tx)(t)| = \sup_{t\in[0,1]} \int_0^1 \sin(st)\,ds.$$
> Tính tích phân: với $t \ne 0$,
> $$\int_0^1 \sin(st)\,ds = \left[-\frac{\cos(st)}{t}\right]_0^1 = \frac{1-\cos t}{t} =: f(t),$$
> và $f(0) := \lim_{t\to0} f(t) = 0$.
>
> Xét đạo hàm: $f'(t) = \dfrac{t\sin t - (1-\cos t)}{t^2}$. Đặt $g(t) = t\sin t - 1 + \cos t$; $g(0)=0$ và $g'(t) = \sin t + t\cos t - \sin t = t\cos t \ge 0$ trên $[0,1]$ (vì $\cos t > 0$ ở đó). Vậy $g$ tăng trên $[0,1]$, $g(t) \ge g(0) = 0$, nên $f'(t) \ge 0$: $f$ **tăng** trên $[0,1]$. Do đó
> $$\|T\| = \sup_{t\in[0,1]} f(t) = f(1) = 1 - \cos 1.$$



## Câu 3.8.14 & 3.8.15

> [!prob] 3.8.14–3.8.15
> Xét $E = C([0,1],\mathbb{R})$. Đặt $T: E \to E$, $f \mapsto Tf$, với $Tf(t) = \int_0^t f(s)\,ds$ (như vậy $T$ mang mỗi hàm thành nguyên hàm của nó).
> (a) $T$ được định nghĩa tốt. (b) $T$ tuyến tính. (c) $T$ tuyến tính liên tục. (d) Ước lượng $\|T\|$. (e) Tính chính xác $\|T\|$. (f) $T$ là song ánh lên tập giá trị của nó nhưng ánh xạ ngược không liên tục. (g)* $T$ là toán tử compắc.
>
> *(Tiếp theo, Bài 3.8.15 giới thiệu $C^1([0,1])$ với chuẩn $\|f\| = \|f\|_\infty + \|f'\|_\infty$ và ánh xạ đạo hàm $D: C^1([0,1]) \to C([0,1])$, $f \mapsto f'$; yêu cầu chứng tỏ đây là ánh xạ tuyến tính liên tục.)*

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Với $f$ liên tục trên $[0,1]$, $Tf(t) = \int_0^t f(s)\,ds$ khả vi (theo định lý cơ bản của giải tích) nên liên tục; vậy $Tf \in C([0,1])$.
>
> **(b) Tuyến tính.** Hiển nhiên từ tính tuyến tính của tích phân.
>
> **(c) Liên tục.** Với $t \in [0,1]$:
> $$|Tf(t)| = \left|\int_0^t f(s)\,ds\right| \le \int_0^t |f(s)|\,ds \le t\|f\|_\infty \le \|f\|_\infty,$$
> vậy $\|Tf\|_\infty \le \|f\|_\infty$, $T$ bị chặn, $\|T\|\le1$.
>
> **(d) Ước lượng.** Từ (c), $\|T\| \le 1$.
>
> **(e) Tính chính xác.** Lấy $f\equiv1$: $Tf(t)=t$, $\|Tf\|_\infty = 1 = \|f\|_\infty$. Đạt cận trên, vậy
> $$\|T\| = 1.$$
>
> **(f) $T$ là song ánh lên ảnh, nghịch đảo không liên tục.**
>
> *Đơn ánh:* nếu $Tf = Tg$ thì $\int_0^t (f-g) = 0$ với mọi $t \in [0,1]$; lấy đạo hàm theo $t$ (định lý cơ bản của giải tích), $f(t)-g(t)=0$ với mọi $t$, tức $f=g$. Vậy $T$ đơn ánh, do đó là song ánh từ $E$ lên $\operatorname{Ran}(T)$.
>
> *Nghịch đảo không liên tục:* $\operatorname{Ran}(T) = \{h \in C^1([0,1]) : h(0)=0\}$, và $T^{-1}(h) = h'$ (phép lấy đạo hàm) — vì $(Tf)' = f$ với mọi $f$. Xét dãy $h_n(t) = \dfrac{\sin(n^2t)}{n} \in \operatorname{Ran}(T)$ ($h_n(0)=0$, $h_n \in C^1$). Ta có
> $$\|h_n\|_\infty = \frac1n \to 0, \qquad \text{nhưng} \qquad h_n'(t) = n\cos(n^2t), \quad \|h_n'\|_\infty = n \to \infty.$$
> Vậy $\|T^{-1}h_n\|_\infty = \|h_n'\|_\infty = n \to \infty$ trong khi $\|h_n\|_\infty \to 0$: $T^{-1}$ **không bị chặn**, do đó không liên tục.
>
> **(g)* $T$ là toán tử compắc.** Cần chứng tỏ $T$ mang tập bị chặn vào tập compắc tương đối. Xét $B = \{f \in E : \|f\|_\infty \le M\}$. Ta kiểm tra $T(B)$ thỏa Arzelà–Ascoli:
>
> - *Bị chặn đều:* với $f \in B$, $\|Tf\|_\infty \le M$ (từ (c)).
> - *Đồng liên tục:* với $f\in B$, $t,t'\in[0,1]$: $|Tf(t)-Tf(t')| = \left|\int_{t'}^t f(s)\,ds\right| \le M|t-t'|$ — đây là điều kiện Lipschitz với hằng số $M$ **đều** cho mọi $f \in B$, nên $T(B)$ đồng liên tục.
>
> Theo Arzelà–Ascoli, $T(B)$ compắc tương đối trong $C([0,1])$. Vậy $T$ là toán tử compắc. 



## Câu 3.8.16

> [!prob] 3.8.16
> Tổng quát hóa cách tìm chuẩn, chứng tỏ:
> $$\|T\| = M \iff \begin{cases} \forall x, \|Tx\| \le M\|x\| \\ \forall n \in \mathbb{Z}^+, \exists x_n, \|x_n\|=1, \|Tx_n\| \xrightarrow{n\to\infty} M.\end{cases}$$

> [!prf] Lời giải
> **($\Rightarrow$)** Giả sử $\|T\|=M$. Điều kiện thứ nhất chính là Bài 3.8.2 (đã có $\|Tx\|\le\|T\|\|x\|$ với mọi $x$). Về điều kiện thứ hai: theo định nghĩa $\sup$, $M = \sup_{\|x\|=1}\|Tx\|$, nên với mỗi $n$ tồn tại $x_n$, $\|x_n\|=1$, sao cho $\|Tx_n\| > M - 1/n$ (tính chất của sup). Kết hợp $\|Tx_n\| \le M$ (từ điều kiện thứ nhất), ta có $M - 1/n < \|Tx_n\| \le M$, nên $\|Tx_n\| \to M$.
>
> **($\Leftarrow$)** Giả sử cả hai điều kiện đúng. Từ điều kiện thứ nhất và Bài 3.8.1, $\|T\| \le M$. Từ điều kiện thứ hai, với mỗi $n$, vì $\|x_n\|=1$, $\|Tx_n\| \le \|T\|$ (định nghĩa của $\|T\|$ như sup). Cho $n\to\infty$: $M = \lim \|Tx_n\| \le \|T\|$. Kết hợp hai chiều, $\|T\| = M$. 



## Câu 3.8.17

> [!prob] 3.8.17
> Trên $\mathbb{R}$, xét $T: \ell^2 \to \ell^2$, $x=(x_n)_{n\in\mathbb{Z}^+} \mapsto Tx = \left(\dfrac{n}{3n+1}x_n\right)_{n\in\mathbb{Z}^+}$.
> (a) $T$ định nghĩa tốt, tức $Tx \in \ell^2$. (b) $T$ tuyến tính liên tục. (c) Với $e_k$ là vectơ có thành phần thứ $k$ bằng $1$, còn lại bằng $0$, tính $\lim_{k\to\infty} \|Te_k\|_2$. (d) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Với mọi $n$, $0 < \dfrac{n}{3n+1} < \dfrac13$ (vì $3n < 3n+1$). Do đó
> $$\|Tx\|_2^2 = \sum_{n=1}^\infty \left(\frac{n}{3n+1}\right)^2 x_n^2 \le \frac19 \sum_{n=1}^\infty x_n^2 = \frac{\|x\|_2^2}{9} < \infty,$$
> vậy $Tx \in \ell^2$.
>
> **(b) Tuyến tính liên tục.** Tuyến tính hiển nhiên (mỗi tọa độ nhân với hằng số). Từ bất đẳng thức ở (a), $\|Tx\|_2 \le \dfrac13\|x\|_2$, nên $T$ bị chặn với $\|T\| \le 1/3$.
>
> **(c) Tính giới hạn.** $Te_k = \dfrac{k}{3k+1}e_k$, nên $\|Te_k\|_2 = \dfrac{k}{3k+1}$. Khi $k\to\infty$:
> $$\lim_{k\to\infty}\|Te_k\|_2 = \lim_{k\to\infty}\frac{k}{3k+1} = \frac13.$$
>
> **(d) Tính $\|T\|$.** Ta có $\|e_k\|_2=1$ với mọi $k$, và $\|Te_k\|_2 = \dfrac{k}{3k+1} \to \dfrac13$. Theo Bài 3.8.16 (áp dụng chiều $\Leftarrow$, kết hợp cận $\|T\|\le1/3$ ở (b) là điều kiện thứ nhất), suy ra
> $$\|T\| = \frac13.$$



## Câu 3.8.18

> [!prob] 3.8.18
> Xét $E = \{f \in C([0,1],\mathbb{R}) \mid f(0)=0\}$ với chuẩn sup. Với $f \in E$ đặt $Tf = \int_0^1 f$.
> (a) $T$ là phiếm hàm tuyến tính liên tục trên $E$.
> (b) Đặt $f_n(x) = \begin{cases} nx, & 0\le x\le 1/n \\ 1, & 1/n \le x \le 1\end{cases}$. Vẽ đồ thị $f_n$; chứng tỏ $f_n \in E$; tính $\|f_n\|$ và $Tf_n$.
> (c) Đặt $g_n(x) = \sqrt[n]{x}$. Vẽ đồ thị; chứng tỏ $g_n \in E$; tính $\|g_n\|$ và $Tg_n$.
> (d) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Tuyến tính hiển nhiên. Bị chặn: $|Tf| \le \int_0^1|f| \le \|f\|_\infty$, nên $\|T\| \le 1$.
>
> **(b) Về $f_n$.** Đồ thị: đoạn thẳng nối $(0,0)$ đến $(1/n,1)$, sau đó hằng số $1$ trên $[1/n,1]$ — hình dạng "dốc lên rồi phẳng".
>
> $f_n$ liên tục (hai mảnh khớp tại $x=1/n$: $n\cdot(1/n)=1$) và $f_n(0)=0$, nên $f_n \in E$.
>
> $\|f_n\|_\infty = 1$ (giá trị lớn nhất, đạt trên $[1/n,1]$).
>
> $$Tf_n = \int_0^{1/n} nx\,dx + \int_{1/n}^1 1\,dx = \frac{n}{2}\cdot\frac{1}{n^2} + \left(1-\frac1n\right) = \frac{1}{2n} + 1 - \frac1n = 1 - \frac{1}{2n}.$$
>
> **(c) Về $g_n$.** Đồ thị: đường cong lõm tăng từ $(0,0)$ đến $(1,1)$, càng dựng đứng gần $x=0$ khi $n$ lớn (đồ thị căn bậc $n$).
>
> $g_n$ liên tục trên $[0,1]$ và $g_n(0) = 0^{1/n} = 0$, nên $g_n \in E$.
>
> $\|g_n\|_\infty = g_n(1) = 1$ (hàm tăng trên $[0,1]$).
>
> $$Tg_n = \int_0^1 x^{1/n}\,dx = \frac{1}{1/n+1} = \frac{n}{n+1}.$$
>
> **(d) Tính $\|T\|$.** Từ (b), $\|f_n\|_\infty=1$ và $Tf_n = 1-\dfrac{1}{2n}\to1$. Kết hợp (a) và Bài 3.8.16:
> $$\|T\| = 1.$$
> (Kiểm tra chéo: (c) cũng cho $Tg_n = n/(n+1) \to 1$ với $\|g_n\|_\infty=1$, cùng kết luận.)



## Câu 3.8.19

> [!prob] 3.8.19
> Xét $E = C([0,1],\mathbb{R})$ với chuẩn sup. Với $f \in E$ đặt $Tf = \int_0^{1/2} f - \int_{1/2}^1 f$.
> (a) $T$ là phiếm hàm tuyến tính liên tục trên $E$.
> (b) Đặt $f_n(x) = \begin{cases} 1, & 0\le x\le \frac12-\frac1n \\ -n(x-\frac12+\frac1n)+1, & \frac12-\frac1n < x < \frac12+\frac1n \\ -1, & \frac12+\frac1n \le x \le 1.\end{cases}$ Vẽ đồ thị; chứng tỏ $f_n \in E$; tính $\|f_n\|$ và $Tf_n$.
> (c) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Tuyến tính hiển nhiên. Bị chặn:
> $$|Tf| \le \int_0^{1/2}|f| + \int_{1/2}^1|f| \le \frac12\|f\|_\infty + \frac12\|f\|_\infty = \|f\|_\infty,$$
> nên $\|T\| \le 1$.
>
> **(b) Về $f_n$.** Đồ thị: hằng số $1$ trên $[0,\tfrac12-\tfrac1n]$, đoạn thẳng dốc xuống nối $(\tfrac12-\tfrac1n,1)$ với $(\tfrac12+\tfrac1n,-1)$ (đi qua điểm $(\tfrac12,0)$), rồi hằng số $-1$ trên $[\tfrac12+\tfrac1n,1]$.
>
> $f_n$ liên tục (các mảnh khớp tại hai điểm nối, kiểm tra trực tiếp bằng công thức mảnh giữa), nên $f_n \in E$.
>
> $\|f_n\|_\infty = 1$ (giá trị chạy liên tục trong $[-1,1]$).
>
> Tính $Tf_n$: dùng tính đối xứng lẻ quanh $x=\tfrac12$ (tức $f_n(\tfrac12+t) = -f_n(\tfrac12-t)$, kiểm tra trực tiếp từ định nghĩa). Trước hết,
> $$\int_0^{1/2} f_n = \int_0^{\frac12-\frac1n} 1\,dx + \int_{\frac12-\frac1n}^{1/2} f_n\,dx = \left(\frac12-\frac1n\right) + \frac{1}{2}\cdot\left(1+0\right)\cdot\frac1n,$$
> (mảnh giữa từ $\tfrac12-\tfrac1n$ đến $\tfrac12$ là đoạn thẳng nối giá trị $1$ đến $f_n(\tfrac12)=0$, tích phân bằng diện tích hình thang $\frac{1+0}{2}\cdot\frac1n = \frac{1}{2n}$)
> $$= \frac12 - \frac1n + \frac{1}{2n} = \frac12 - \frac{1}{2n}.$$
> Theo tính đối xứng lẻ, $\displaystyle\int_{1/2}^1 f_n = -\int_0^{1/2}f_n = -\left(\frac12-\frac{1}{2n}\right)$. Vậy
> $$Tf_n = \int_0^{1/2}f_n - \int_{1/2}^1 f_n = \left(\frac12-\frac{1}{2n}\right) - \left(-\left(\frac12-\frac{1}{2n}\right)\right) = 2\left(\frac12-\frac{1}{2n}\right) = 1 - \frac1n.$$
>
> **(c) Tính $\|T\|$.** $\|f_n\|_\infty = 1$, $Tf_n = 1-\dfrac1n \to 1$. Kết hợp (a) và Bài 3.8.16:
> $$\|T\| = 1.$$



## Câu 3.8.20

> [!prob] 3.8.20
> Xét $E = C([-1,1],\mathbb{R})$ với chuẩn sup. Với $f \in E$ đặt $Tf = -f(0) + \int_{-1}^1 f(t)\,dt$.
> (a) $T$ là phiếm hàm tuyến tính liên tục trên $E$.
> (b) Đặt $f_n$ là hàm tuyến tính từng khúc, liên tục, bằng $1$ trên $[-1,-\tfrac1n]$ và $[\tfrac1n,1]$, và bằng $-1$ tại $0$. Vẽ đồ thị; tính $\|f_n\|$ và $Tf_n$.
> (c) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Tuyến tính hiển nhiên (tổng của phiếm hàm định giá và phiếm hàm tích phân, cả hai tuyến tính). Bị chặn:
> $$|Tf| \le |f(0)| + \int_{-1}^1|f| \le \|f\|_\infty + 2\|f\|_\infty = 3\|f\|_\infty,$$
> nên $\|T\| \le 3$.
>
> **(b) Về $f_n$.** Đồ thị: hằng số $1$ trên $[-1,-\tfrac1n]$, đoạn thẳng dốc xuống nối $(-\tfrac1n,1)$ với $(0,-1)$, đoạn thẳng dốc lên nối $(0,-1)$ với $(\tfrac1n,1)$, rồi hằng số $1$ trên $[\tfrac1n,1]$ — dạng chữ V lộn ngược ở giữa, đối xứng qua $x=0$.
>
> $\|f_n\|_\infty = 1$ (giá trị nằm trong $[-1,1]$).
>
> Trên $[0,\tfrac1n]$: $f_n$ tuyến tính từ $-1$ (tại $0$) đến $1$ (tại $\tfrac1n$): $f_n(x) = -1+2nx$. Tích phân trên đoạn này: diện tích hình thang $\dfrac{-1+1}{2}\cdot\dfrac1n = 0$.
> $$\int_0^1 f_n = \int_0^{1/n} f_n + \int_{1/n}^1 1\,dx = 0 + \left(1-\frac1n\right) = 1-\frac1n.$$
> Do $f_n$ chẵn ($f_n(-x)=f_n(x)$), $\displaystyle\int_{-1}^1 f_n = 2\int_0^1 f_n = 2-\frac2n$.
>
> Vậy
> $$Tf_n = -f_n(0) + \int_{-1}^1 f_n = -(-1) + \left(2-\frac2n\right) = 3 - \frac2n.$$
>
> **(c) Tính $\|T\|$.** $\|f_n\|_\infty=1$, $Tf_n = 3-\dfrac2n \to 3$. Kết hợp (a) và Bài 3.8.16:
> $$\|T\| = 3.$$



## Câu 3.8.21

> [!prob] 3.8.21
> Trên trường số thực, cho $g \in L^2(\Omega)$. Xét ánh xạ $T: L^2(\Omega) \to L^1(\Omega)$, $f \mapsto fg$. Chứng tỏ $T$ là ánh xạ tuyến tính liên tục và $\|T\| = \|g\|_2$.

> [!prf] Lời giải
> **Định nghĩa tốt & liên tục.** Nếu $g=0$ h.k.n. thì $T \equiv 0$, kết quả tầm thường ($\|T\|=0=\|g\|_2$). Giả sử $g \ne 0$. Theo Cauchy–Schwarz (trường hợp riêng của Hölder với $p=q=2$):
> $$\|fg\|_1 = \int_\Omega |fg| \le \|f\|_2\|g\|_2 < \infty,$$
> nên $fg \in L^1(\Omega)$, $T$ định nghĩa tốt. Tuyến tính hiển nhiên. Bất đẳng thức trên cho $\|Tf\|_1 \le \|g\|_2\|f\|_2$ với mọi $f$, nên $T$ bị chặn với $\|T\| \le \|g\|_2$.
>
> **Đạt cận trên.** Lấy $f = \dfrac{g}{\|g\|_2} \in L^2(\Omega)$, $\|f\|_2 = 1$. Khi đó $fg = \dfrac{g^2}{\|g\|_2} \ge 0$, và
> $$\|Tf\|_1 = \int_\Omega |fg| = \int_\Omega \frac{g^2}{\|g\|_2}\,d\mu = \frac{\|g\|_2^2}{\|g\|_2} = \|g\|_2.$$
> Vậy tỉ số $\|Tf\|_1/\|f\|_2 = \|g\|_2$ đạt được, kết hợp cận trên:
> $$\|T\| = \|g\|_2$$



## Câu 3.8.22

> [!prob] 3.8.22
> Cho $E$ là không gian định chuẩn. Cho $S, T$ là ánh xạ tuyến tính liên tục từ $E$ vào $E$.
> (a) $S\circ T$ là ánh xạ tuyến tính liên tục.
> (b) Chứng tỏ $\|S\circ T\| \le \|S\|\,\|T\|$.
> (c) Viết $S^0 = \operatorname{Id}_E$, và với $n \in \mathbb{Z}^+$ đặt $S^n = S^{n-1}\circ S$. Chứng tỏ $\|S^n\| \le \|S\|^n$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Hợp của hai ánh xạ tuyến tính là tuyến tính (kiểm tra trực tiếp: $(S\circ T)(\alpha x+\beta y) = S(\alpha Tx+\beta Ty) = \alpha S(Tx)+\beta S(Ty)$). Về liên tục, xem đánh giá ở (b).
>
> **(b) Đánh giá chuẩn.** Với mọi $x \in E$:
> $$\|(S\circ T)x\| = \|S(Tx)\| \le \|S\|\,\|Tx\| \le \|S\|\,\|T\|\,\|x\|.$$
> Theo Bài 3.8.1 (áp dụng cho $S\circ T$ với $M = \|S\|\|T\|$), $S\circ T$ bị chặn (do đó liên tục, hoàn tất (a)) và
> $$\|S\circ T\| \le \|S\|\,\|T\|.$$
>
> **(c) Quy nạp.** Với $n=0$: $\|S^0\| = \|\operatorname{Id}_E\| = 1 = \|S\|^0$ (quy ước), đúng.
>
> Giả sử $\|S^{n-1}\| \le \|S\|^{n-1}$ (giả thiết quy nạp). Áp dụng (b) cho cặp $(S^{n-1}, S)$:
> $$\|S^n\| = \|S^{n-1}\circ S\| \le \|S^{n-1}\|\,\|S\| \le \|S\|^{n-1}\cdot\|S\| = \|S\|^n.$$
> Theo nguyên lý quy nạp, $\|S^n\| \le \|S\|^n$ đúng với mọi $n \in \mathbb{Z}^+$. 



## Câu 3.8.23

> [!prob] 3.8.23
> Cho $E$ là không gian Banach và $S \in L(E,E)$. Giả sử $c = \|S\| < 1$.
> (a) Chứng tỏ $\|I+S+S^2+\cdots+S^n\| \le \dfrac{1}{1-c}$ với mọi $n \ge 1$ ($I$ là ánh xạ đồng nhất).
> (b) Chứng tỏ chuỗi $\sum_{n=0}^\infty S^n$ hội tụ trong $L(E,E)$.
> (c) Chứng tỏ ánh xạ $(I-S)$ khả nghịch và $(I-S)^{-1} = \sum_{n=0}^\infty S^n$.

> [!prf] Lời giải
> **(a)** Theo bất đẳng thức tam giác và Bài 3.8.22(c) ($\|S^i\| \le c^i$, kể cả $i=0$ vì $\|S^0\|=\|I\|=1=c^0$):
> $$\left\|\sum_{i=0}^n S^i\right\| \le \sum_{i=0}^n \|S^i\| \le \sum_{i=0}^n c^i \le \sum_{i=0}^\infty c^i = \frac{1}{1-c}$$
> (chuỗi hình học hội tụ vì $0 \le c < 1$).
>
> **(b) Chuỗi hội tụ.** Đặt $s_n = \sum_{i=0}^n S^i$. Ta chứng minh $(s_n)$ là dãy Cauchy trong $L(E,E)$. Với $m > n$:
> $$\|s_m - s_n\| = \left\|\sum_{i=n+1}^m S^i\right\| \le \sum_{i=n+1}^m c^i = c^{n+1}\cdot\frac{1-c^{m-n}}{1-c} \le \frac{c^{n+1}}{1-c} \xrightarrow{n\to\infty} 0,$$
> vì $0\le c<1$. Vậy $(s_n)$ Cauchy trong $L(E,E)$. Vì $E$ Banach nên $L(E,E)$ Banach (đầy đủ), do đó $(s_n)$ hội tụ về một giới hạn $\tilde S \in L(E,E)$, tức chuỗi $\sum_{n=0}^\infty S^n$ hội tụ.
>
> **(c) Khả nghịch.** Với mỗi $n$:
> $$(I-S)s_n = (I-S)(I+S+\cdots+S^n) = I - S^{n+1}$$
> (khai triển tổng lồng nhau — kính viễn vọng). Vì $\|S^{n+1}\| \le c^{n+1} \to 0$, ta có $S^{n+1} \to 0$ trong $L(E,E)$. Mặt khác $s_n \to \tilde S$ (từ (b)), và phép nhân toán tử liên tục (từ bất đẳng thức $\|AB-A'B'\|\le\|A-A'\|\|B\|+\|A'\|\|B-B'\|$), nên
> $$(I-S)\tilde S = \lim_{n\to\infty}(I-S)s_n = \lim_{n\to\infty}(I-S^{n+1}) = I.$$
> Tương tự $\tilde S(I-S) = I$ (do $s_n(I-S) = I-S^{n+1}$ cũng đúng bằng tính giao hoán của $S$ với chính nó). Vậy $I-S$ khả nghịch với
> $$(I-S)^{-1} = \tilde S = \sum_{n=0}^\infty S^n$$



## Câu 3.8.24

> [!prob] 3.8.24
> Cho $E$ là không gian định chuẩn và $T \in L(E,E)$.
> (a) Nhắc lại $\sum_{i=0}^\infty \dfrac{x^i}{i!} = e^x$ với mọi $x \in \mathbb{R}$. Đặt $s_n = \sum_{i=0}^n \dfrac{\|T\|^i}{i!}$. Chứng tỏ $(s_n)_{n\in\mathbb{N}}$ là dãy Cauchy trong $\mathbb{R}$.
> (b) Đặt $S_n = \sum_{i=0}^n \dfrac{T^i}{i!}$. Chứng tỏ $(S_n)_{n\in\mathbb{N}}$ là dãy Cauchy trong $L(E,E)$.
> (c) Giả sử thêm $E$ Banach. Chứng tỏ $(S_n)$ hội tụ về một giới hạn, ký hiệu $e^T = \sum_{i=0}^\infty \dfrac{T^i}{i!}$.

> [!prf] Lời giải
> **(a)** Vì chuỗi $\sum_{i=0}^\infty x^i/i!$ hội tụ (tuyệt đối) với mọi $x \in \mathbb{R}$, đặc biệt với $x = \|T\| \ge 0$, dãy tổng riêng $(s_n)$ hội tụ trong $\mathbb{R}$ (về $e^{\|T\|}$), do đó là dãy Cauchy.
>
> Chi tiết hơn (không viện dẫn hội tụ tổng đã biết): với $m>n$, $|s_m-s_n| = \sum_{i=n+1}^m \dfrac{\|T\|^i}{i!}$. Theo tiêu chuẩn tỉ số, tỉ số hai số hạng liên tiếp $\dfrac{\|T\|^{i+1}/(i+1)!}{\|T\|^i/i!} = \dfrac{\|T\|}{i+1} \to 0$ khi $i\to\infty$, nên chuỗi $\sum \|T\|^i/i!$ hội tụ (theo tiêu chuẩn tỉ số), suy ra phần dư $\sum_{i=n+1}^m \|T\|^i/i! \to 0$ khi $n,m\to\infty$: $(s_n)$ Cauchy.
>
> **(b)** Với $m > n$:
> $$\|S_m - S_n\| = \left\|\sum_{i=n+1}^m \frac{T^i}{i!}\right\| \le \sum_{i=n+1}^m \frac{\|T^i\|}{i!} \le \sum_{i=n+1}^m \frac{\|T\|^i}{i!} = s_m - s_n$$
> (dùng $\|T^i\| \le \|T\|^i$ từ Bài 3.8.22(c), và bất đẳng thức tam giác). Vì $(s_n)$ Cauchy trong $\mathbb{R}$ (từ (a)), vế phải $\to 0$ khi $n,m\to\infty$, nên $(S_n)$ Cauchy trong $L(E,E)$.
>
> **(c)** Vì $E$ Banach, $L(E,E)$ (với chuẩn toán tử) cũng là không gian Banach (đầy đủ). Dãy $(S_n)$ Cauchy trong không gian đầy đủ $L(E,E)$ (từ (b)), do đó hội tụ về một giới hạn duy nhất trong $L(E,E)$, ký hiệu
> $$e^T := \lim_{n\to\infty} S_n = \sum_{i=0}^\infty \frac{T^i}{i!}$$



## Câu 3.8.25

> [!prob] 3.8.25
> Cho $T$ là một song ánh tuyến tính từ không gian định chuẩn $(E,\|\cdot\|_E)$ vào không gian định chuẩn $(F,\|\cdot\|_F)$. Đặt $S = T^{-1}$. Chứng minh:
> (a) $S$ là ánh xạ tuyến tính từ $F$ vào $E$.
> (b) Nếu $S$ và $T$ liên tục thì $\|S\| \ge \|T\|^{-1}$.

> [!prf] Lời giải
> **(a) $S$ tuyến tính.** Cho $y_1, y_2 \in F$, $\alpha,\beta$ vô hướng. Đặt $x_1 = S(y_1), x_2 = S(y_2)$, tức $Tx_1=y_1, Tx_2=y_2$. Vì $T$ tuyến tính,
> $$T(\alpha x_1+\beta x_2) = \alpha Tx_1+\beta Tx_2 = \alpha y_1+\beta y_2.$$
> Vì $T$ song ánh, $T^{-1}=S$ là ánh xạ được xác định duy nhất bởi $S(Ty)=y$ với mọi $y$ (hay $T(Sx)=x$), nên từ đẳng thức trên và tính đơn ánh của $T$:
> $$S(\alpha y_1+\beta y_2) = \alpha x_1+\beta x_2 = \alpha S(y_1)+\beta S(y_2).$$
> Vậy $S$ tuyến tính.
>
> **(b) Đánh giá $\|S\|$.** Vì $S = T^{-1}$, $S\circ T = \operatorname{Id}_E$. Áp dụng Bài 3.8.22(b) (bất đẳng thức chuẩn của hợp thành, mở rộng tự nhiên cho $S: F\to E$, $T: E\to F$):
> $$1 = \|\operatorname{Id}_E\| = \|S\circ T\| \le \|S\|\,\|T\|$$
> (giả sử $E \ne \{0\}$, để $\|\operatorname{Id}_E\|=1$; nếu $E=\{0\}$ mệnh đề tầm thường). Vì $T$ song ánh và $E\ne\{0\}$ nên $T \ne 0$, tức $\|T\| > 0$. Chia hai vế cho $\|T\|$:
> $$\|S\| \ge \frac{1}{\|T\|} = \|T\|^{-1}$$



## Câu 3.8.26

> [!prob] 3.8.26
> Cho $M$ là một không gian vectơ con dày đặc trong một không gian định chuẩn $E$, và $T \in L(M,F)$ với $F$ Banach. Chứng minh có duy nhất một $S \in L(E,F)$ sao cho $S(x) = T(x)$ với mọi $x \in M$.

> [!prf] Lời giải
> *(Giả thiết $F$ đầy đủ là cần thiết để đảm bảo sự tồn tại; tính duy nhất không cần giả thiết này.)*
>
> **Tồn tại.** Cho $x \in E$. Vì $M$ dày đặc trong $E$, tồn tại dãy $(x_n) \subset M$ với $x_n \to x$. Vì $(x_n)$ hội tụ nên Cauchy trong $E$, và $T$ bị chặn trên $M$:
> $$\|Tx_n - Tx_m\|_F = \|T(x_n-x_m)\|_F \le \|T\|\,\|x_n-x_m\|_E \xrightarrow{n,m\to\infty} 0.$$
> Vậy $(Tx_n)$ Cauchy trong $F$; vì $F$ Banach (đầy đủ), $(Tx_n)$ hội tụ. Định nghĩa
> $$S(x) := \lim_{n\to\infty} Tx_n.$$
>
> *Không phụ thuộc dãy chọn:* nếu $(x_n), (x_n')$ đều $\to x$ trong $M$, xét dãy đan xen $x_1,x_1',x_2,x_2',\dots$ cũng $\to x$, nên theo lập luận trên $(Tx_1,Tx_1',Tx_2,Tx_2',\dots)$ cũng hội tụ (dãy Cauchy trong $F$ đầy đủ), do đó hai dãy con $(Tx_n)$ và $(Tx_n')$ có cùng giới hạn. Vậy $S$ được định nghĩa tốt.
>
> *Tuyến tính:* cho $x,y\in E$, $x_n\to x$, $y_n\to y$ ($x_n,y_n\in M$). Khi đó $\alpha x_n+\beta y_n \to \alpha x+\beta y$, và
> $$S(\alpha x+\beta y) = \lim_n T(\alpha x_n+\beta y_n) = \lim_n (\alpha Tx_n+\beta Ty_n) = \alpha S(x)+\beta S(y)$$
> (dùng tuyến tính của $T$ trên $M$ và tính liên tục của phép cộng/nhân vô hướng trong $F$).
>
> *Mở rộng $T$:* nếu $x \in M$, lấy dãy hằng $x_n = x$, thì $S(x) = \lim Tx = Tx$. Vậy $S|_M = T$.
>
> *Bị chặn:* với $x \in E$, $x_n \to x$ ($x_n \in M$):
> $$\|S(x)\|_F = \lim_n \|Tx_n\|_F \le \lim_n \|T\|\,\|x_n\|_E = \|T\|\,\|x\|_E$$
> (dùng tính liên tục của chuẩn). Vậy $S$ bị chặn (liên tục), $S \in L(E,F)$, và thực ra $\|S\|\le\|T\|$ (kết hợp với $S|_M=T$ suy ra $\|S\|=\|T\|$, dù không được yêu cầu).
>
> **Duy nhất.** Giả sử $S, S' \in L(E,F)$ đều mở rộng $T$, tức $S|_M = S'|_M = T$. Đặt $R = S-S' \in L(E,F)$; $R$ triệt tiêu trên $M$. Với $x \in E$ bất kỳ, lấy $(x_n)\subset M$, $x_n \to x$; vì $R$ liên tục,
> $$R(x) = \lim_n R(x_n) = \lim_n 0 = 0.$$
> Vậy $R \equiv 0$ trên $E$, tức $S = S'$.

## Câu 3.8.27

> [!prob] 3.8.27
> Cho $\Lambda$ là một phiếm hàm tuyến tính trên $X$. Giả sử $\Lambda \ne 0$, nghĩa là tồn tại $x \in X$ sao cho $\Lambda x \ne 0$. Đặt $\ker(\Lambda) = \{x \in X \mid \Lambda x = 0\}$ là **nhân** của $\Lambda$.
> (a) Với $y \in X$ bất kì, chứng tỏ $y - \dfrac{\Lambda y}{\Lambda x}x \in \ker(\Lambda)$.
> (b) Suy ra $X = \ker(\Lambda) + \langle x\rangle$. Như vậy $\ker(\Lambda)$ kém $X$ đúng 1 chiều.

> [!prf] Lời giải
> **(a)** Vì $\Lambda$ tuyến tính:
> $$\Lambda\left(y - \frac{\Lambda y}{\Lambda x}x\right) = \Lambda y - \frac{\Lambda y}{\Lambda x}\Lambda x = \Lambda y - \Lambda y = 0.$$
> Vậy $y - \dfrac{\Lambda y}{\Lambda x}x \in \ker(\Lambda)$.
>
> **(b)** Với mọi $y \in X$, viết
> $$y = \underbrace{\left(y - \frac{\Lambda y}{\Lambda x}x\right)}_{\in\, \ker(\Lambda) \text{ theo (a)}} + \underbrace{\frac{\Lambda y}{\Lambda x}x}_{\in\, \langle x\rangle}.$$
> Vậy $X = \ker(\Lambda) + \langle x\rangle$.
>
> Hơn nữa tổng này **trực tiếp**: nếu $tx \in \ker(\Lambda)$ với $t \ne 0$ thì $\Lambda(tx) = t\Lambda x = 0$, mâu thuẫn $\Lambda x \ne 0$. Vậy $\ker(\Lambda) \cap \langle x\rangle = \{0\}$, nên
> $$X = \ker(\Lambda) \oplus \langle x\rangle,$$
> tức $\ker(\Lambda)$ có đối chiều (codimension) đúng bằng $1$ trong $X$, hay nói cách khác $\ker(\Lambda)$ kém $X$ đúng 1 chiều.



## Câu 3.8.28

> [!prob] 3.8.28
> Cho $x$ và $y$ là hai vectơ khác nhau trong một không gian định chuẩn $E$. Chứng minh có $f \in E^*$ sao cho $f(x) \ne f(y)$.
>
> Trong trường hợp trường số thực, giả sử $f(x) < f(y)$, lấy $f(x) < \alpha < f(y)$ thì tập $\{x \in E \mid f(x) = \alpha\}$ là một **siêu phẳng** tách $x$ và $y$. Vậy ta có thể tách hai điểm khác nhau bằng một siêu phẳng đóng.

> [!prf] Lời giải
> **Tồn tại $f$ với $f(x) \ne f(y)$.** Vì $x \ne y$, đặt $z = x - y \ne 0$. Theo Hệ quả 2 của Hahn–Banach (phiếm hàm chuẩn hóa), tồn tại $f \in E^*$, $\|f\| = 1$, sao cho
> $$f(z) = \|z\| > 0.$$
> Vì $f$ tuyến tính, $f(z) = f(x) - f(y) = \|x-y\| \ne 0$, vậy $f(x) \ne f(y)$.
>
> **Tách bằng siêu phẳng.** Giả sử $f(x) < f(y)$ (trường hợp ngược lại đối xứng), lấy $\alpha$ với $f(x) < \alpha < f(y)$. Đặt $H = \{z \in E \mid f(z) = \alpha\}$.
>
> $H$ đóng vì $H = f^{-1}(\{\alpha\})$ là ảnh ngược của tập đóng $\{\alpha\} \subset \mathbb{R}$ qua ánh xạ liên tục $f$.
>
> $H$ tách $x, y$: $x$ thuộc nửa không gian mở $\{z : f(z) < \alpha\}$ (vì $f(x)<\alpha$) và $y$ thuộc nửa không gian mở $\{z : f(z) > \alpha\}$ (vì $f(y)>\alpha$), hai nửa không gian này rời nhau và có biên chung $H$. Vậy $H$ là siêu phẳng đóng tách $x$ và $y$.



## Câu 3.8.29

> [!prob] 3.8.29
> Cho $x$ là một phần tử khác không trong một không gian định chuẩn $E$. Chứng minh có $f \in E^*$ sao cho $\|f\| = \|x\|$ và $f(x) = \|x\|^2$.

> [!prf] Lời giải
> Theo Hệ quả 2 của Hahn–Banach, tồn tại $f_0 \in E^*$ với $\|f_0\| = 1$ và $f_0(x) = \|x\|$.
>
> Đặt $f = \|x\| f_0$. Vì $f$ là bội vô hướng của $f_0 \in E^*$, $f \in E^*$, và
> $$\|f\| = \|x\|\,\|f_0\| = \|x\|\cdot 1 = \|x\|,$$
> $$f(x) = \|x\|\,f_0(x) = \|x\|\cdot\|x\| = \|x\|^2.$$
> Vậy $f$ thỏa cả hai điều kiện.



## Câu 3.8.30

> [!prob] 3.8.30
> Cho $x$ là một phần tử trong một không gian định chuẩn $E$. Chứng minh $x = 0$ khi và chỉ khi với mọi $f \in E^*$ thì $f(x) = 0$.

> [!prf] Lời giải
> **($\Rightarrow$)** Nếu $x=0$, mọi $f \in E^*$ tuyến tính nên $f(0) = 0$.
>
> **($\Leftarrow$)** Ta chứng minh phản đảo: nếu $x \ne 0$ thì tồn tại $f \in E^*$ với $f(x) \ne 0$. Theo Hệ quả 2 của Hahn–Banach, tồn tại $f \in E^*$, $\|f\|=1$, sao cho $f(x) = \|x\| > 0 \ne 0$.
>
> Vậy nếu $f(x)=0$ với mọi $f \in E^*$ thì $x$ không thể khác $0$, tức $x=0$.
>
> (Đây chính là nội dung Câu 7 phần trước, được phát biểu lại theo hướng "điểm" thay vì "giao các nhân".)



## Câu 3.8.31

> [!prob] 3.8.31
> Cho $x_1,\dots,x_n$ là $n$ vectơ độc lập tuyến tính trong một không gian định chuẩn $E$. Chứng minh có $f_1,\dots,f_n \in E^*$ sao cho $f_i(x_j) = \delta_i^j$, ở đây $\delta_i^j$ là số Kronecker.

> [!prf] Lời giải
> Đặt $M = \operatorname{span}\{x_1,\dots,x_n\}$, một không gian con **hữu hạn chiều** của $E$ (chiều đúng bằng $n$ vì $x_1,\dots,x_n$ độc lập tuyến tính, nên chúng tạo thành một cơ sở của $M$).
>
> Với mỗi $i \in \{1,\dots,n\}$, định nghĩa $g_i: M \to \mathbb{R}$ (hoặc $\mathbb{C}$) là phiếm hàm tuyến tính xác định trên cơ sở bởi
> $$g_i(x_j) = \delta_i^j, \qquad j=1,\dots,n,$$
> và mở rộng tuyến tính lên toàn $M$ (định nghĩa hợp lệ vì $x_1,\dots,x_n$ là cơ sở của $M$, mỗi phần tử $M$ viết duy nhất dưới dạng tổ hợp tuyến tính của chúng).
>
> Vì $M$ **hữu hạn chiều**, mọi phiếm hàm tuyến tính trên $M$ đều liên tục (tính chất chuẩn của không gian định chuẩn hữu hạn chiều: mọi ánh xạ tuyến tính từ không gian hữu hạn chiều đều bị chặn). Vậy $g_i \in M^*$.
>
> Áp dụng Hệ quả 1 của Hahn–Banach, mở rộng $g_i$ thành $f_i \in E^*$ với $f_i|_M = g_i$. Đặc biệt,
> $$f_i(x_j) = g_i(x_j) = \delta_i^j, \qquad \forall i,j \in \{1,\dots,n\}.$$
> Đây chính là hệ $f_1,\dots,f_n$ cần tìm.



## Câu 3.8.32

> [!prob] 3.8.32
> Cho không gian định chuẩn $X$. Nhắc lại rằng với mọi $\Lambda \in X^*$: $\|\Lambda\| = \sup_{\|x\|\le1}|\Lambda x|$. Chứng tỏ với mọi $x \in X$:
> $$\|x\| = \sup_{\|\Lambda\|_{X^*}\le1}|\Lambda x| = \max_{\|\Lambda\|_{X^*}\le1}|\Lambda x|.$$

> [!prf] Lời giải
> Đặt $M(x) = \sup_{\|\Lambda\|_{X^*}\le1}|\Lambda x|$.
>
> **($M(x) \le \|x\|$).** Với mọi $\Lambda \in X^*$, $\|\Lambda\|\le1$: theo định nghĩa chuẩn toán tử, $|\Lambda x| \le \|\Lambda\|\,\|x\| \le \|x\|$. Lấy sup theo $\Lambda$, $M(x) \le \|x\|$.
>
> **($M(x) \ge \|x\|$, và đạt được).** Nếu $x = 0$, hiển nhiên $M(x) = 0 = \|x\|$ (đạt bởi $\Lambda = 0$). Nếu $x \ne 0$, theo Hệ quả 2 của Hahn–Banach, tồn tại $f \in X^*$ với $\|f\| = 1 \le 1$ và $f(x) = \|x\|$. Vậy
> $$|f(x)| = \|x\|,$$
> tức giá trị $\|x\|$ **đạt được** trong tập $\{|\Lambda x| : \|\Lambda\|\le1\}$ (bởi $\Lambda = f$). Suy ra $M(x) \ge \|x\|$, đồng thời sup thực chất là max.
>
> Kết hợp hai chiều:
> $$\|x\| = \sup_{\|\Lambda\|_{X^*}\le1}|\Lambda x| = \max_{\|\Lambda\|_{X^*}\le1}|\Lambda x|,$$
> với giá trị lớn nhất đạt tại phiếm hàm chuẩn hóa $f$ vừa xây dựng.



## Câu 3.8.33*

> [!prob] 3.8.33*
> Cho $M$ là một không gian vectơ con đóng của một không gian định chuẩn $X$ và $x_0 \in X$. Chứng tỏ nếu $x_0 \notin M$ thì tồn tại $f \in X^*$ sao cho $f(x) = 0$ với mọi $x \in M$ nhưng $f(x_0) \ne 0$.

> [!prf] Lời giải
> Vì $M$ đóng và $x_0 \notin M$, đặt $d = \operatorname{dist}(x_0, M) = \inf\{\|x_0-m\| : m \in M\}$. Theo lập luận đã dùng ở Câu 8 (phần trước), $d > 0$ (nếu $d=0$ thì tồn tại dãy trong $M$ hội tụ về $x_0$, và vì $M$ đóng, $x_0 \in M$, mâu thuẫn).
>
> Áp dụng trực tiếp Hệ quả 3 của Hahn–Banach (đã chứng minh chi tiết trong lời giải Câu 8): tồn tại $f \in X^*$ sao cho
> $$f(x_0) = 1, \qquad f|_M = 0, \qquad \|f\| \le \frac1d.$$
> Đặc biệt $f(x_0) = 1 \ne 0$ và $f(x) = 0$ với mọi $x \in M$, đúng như yêu cầu.



## Câu 3.8.34*

> [!prob] 3.8.34*
> Cho $\Lambda$ là một phiếm hàm tuyến tính trên $X$. Giả sử $\Lambda \ne 0$. Chứng tỏ mệnh đề sau là tương đương:
> (a) $\Lambda$ liên tục.
> (b) $\ker(\Lambda) = \{x \in X \mid \Lambda x = 0\}$ là không gian con đóng của $X$.

> [!prf] Lời giải
> **(a) $\Rightarrow$ (b).** Nếu $\Lambda$ liên tục, thì $\ker(\Lambda) = \Lambda^{-1}(\{0\})$ là ảnh ngược của tập đóng $\{0\} \subset \mathbb{R}$ (hoặc $\mathbb{C}$) qua ánh xạ liên tục $\Lambda$, do đó $\ker(\Lambda)$ đóng.
>
> **(b) $\Rightarrow$ (a).** Đặt $M = \ker(\Lambda)$, giả sử $M$ đóng. Vì $\Lambda \ne 0$, tồn tại $x_0 \in X$ với $\Lambda x_0 \ne 0$; thay $x_0$ bởi $x_0/\Lambda x_0$, có thể giả sử $\Lambda x_0 = 1$ (chuẩn hóa). Khi đó $x_0 \notin M$ (vì $\Lambda x_0 = 1 \ne 0$).
>
> Ta chứng minh $\Lambda$ bị chặn bằng phản chứng. Giả sử $\Lambda$ không bị chặn: khi đó tồn tại dãy $(x_n) \subset X$, $\|x_n\| = 1$, sao cho $|\Lambda x_n| \to \infty$ (nếu không, $\Lambda$ bị chặn trên hình cầu đơn vị, mâu thuẫn giả thiết).
>
> Đặt
> $$z_n = x_0 - \frac{x_n}{\Lambda x_n} \in X.$$
> Tính $\Lambda z_n = \Lambda x_0 - \dfrac{\Lambda x_n}{\Lambda x_n} = 1 - 1 = 0$, vậy $z_n \in M$ với mọi $n$.
>
> Mặt khác,
> $$\left\|z_n - x_0\right\| = \left\|\frac{x_n}{\Lambda x_n}\right\| = \frac{\|x_n\|}{|\Lambda x_n|} = \frac{1}{|\Lambda x_n|} \xrightarrow{n\to\infty} 0$$
> (vì $|\Lambda x_n| \to \infty$). Vậy $z_n \to x_0$.
>
> Vì $(z_n) \subset M$, $z_n \to x_0$, và $M$ **đóng** theo giả thiết, ta suy ra $x_0 \in M$, tức $\Lambda x_0 = 0$. Điều này mâu thuẫn với việc đã chuẩn hóa $\Lambda x_0 = 1$.
>
> Vậy giả thiết phản chứng sai, $\Lambda$ phải bị chặn, do đó liên tục.
