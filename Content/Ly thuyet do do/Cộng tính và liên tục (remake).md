# 1. Định nghĩa

## a) Độ đo và các khái niệm cộng tính

> [!def] (Độ đo và các khái niệm cộng tính)
> Cho $\Omega$ là tập khác rỗng, $\mathcal{A}$ là một đại số $\sigma$ trên $\Omega$. Một hàm tập hợp $\mu : \mathcal{A} \to [0, \infty]$ được gọi là một độ đo nếu nó thỏa mãn 2 tiên đề:
> 1. $\mu(\emptyset) = 0$
> 2. $\sigma$ - cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathcal{A}$, 
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n}\right) = \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> Các thuật ngữ mở rộng:
> 3. hữu hạn cộng tính: Cho trước $A_{1}, A_{2}, \dots, A_{N} \in \mathcal{A}$ rời nhau,
> $$
> \mu\left( \bigcup_{n=1}^{N} A_{n} \right) = \sum_{n=1}^{N} \mu(A_{n})
> $$
> 4. $\sigma$ - dưới cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ bất kì trên $\mathcal{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_n \right) \le \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 5. $\sigma$ - cộng tính trên: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathcal{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) \ge \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 6. đơn điệu: Cho $A,B \in \mathcal{A}, A \subset B$,
> $$
> \mu(A) \le \mu(B)
> $$

# 2. Mệnh đề

## a) Các tính chất đại số cơ bản

> [!thm] 
> $\sigma$ - Cộng tính $\implies$ Hữu hạn cộng tính

> [!prf] 
> Cho $A_{1}, A_{2},\dots, A_{N} \in \mathcal{A}$ là họ các tập rời nhau, xét $A_{n}= \emptyset$ $\forall n>N$. Theo định nghĩa $\sigma$ cộng tính:
> $$
> \mu\left( \bigcup_{n=1} ^{N} A_{n} \right) = \mu\left( \bigcup_{n=1} ^{\infty} A_{n} \right) = \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n}) + \sum_{n=N+1}^{\infty} \mu(\emptyset ) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ Đơn điệu

> [!prf] 
> Lấy $A,B \in \mathcal{A}$ sao cho $A \subseteq B$. Ta tách $B = B \sqcup (B\setminus A)$ rời nhau, theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(B) = \mu(A) + \mu(B\setminus A)
> $$
> vì $\mu \ge 0$ nên $\mu(B\setminus A)\ge 0$, nên $\mu(B)\ge 0$, hay
> $$
> \mu(B) \ge \mu(A)
> $$

> [!thm] (Tính chất trừ)
> Cho $A, B \in \mathcal{A}$ sao cho $A \subseteq B$ và $\mu(A) < \infty$. Khi đó:
> $$
> \mu(B \setminus A) = \mu(B) - \mu(A)
> $$

> [!prf]
> Ta có $B = A \sqcup (B \setminus A)$. Áp dụng tính hữu hạn cộng tính:
> $$
> \mu(B) = \mu(A) + \mu(B \setminus A)
> $$
> Vì $\mu(A) < \infty$, ta có thể trừ $\mu(A)$ ở cả hai vế để nhận được $\mu(B \setminus A) = \mu(B) - \mu(A)$.

> [!thm] 
> Hữu hạn cộng tính $\implies$ $\sigma$ Cộng tính trên

> [!prf] 
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau trong $\mathcal{A}$, với $N \in \mathbb{N}$, $\bigcup _{n=1}^{N} A_n \subseteq \bigcup _{n=1}^{\infty} A_n$. Vì $\mu$ hữu hạn cộng tính nên nó đơn điệu, ta có
> $$
> \mu\left( \bigcup_{n=1} ^{\infty }A_{n} \right) \ge \mu\left( \bigcup_{n=1}^{N}A_{n} \right) = \sum_{n=1}^{N} \mu(A_{n}) 
> $$
> vì $\mu \ge 0$ và biểu thức đúng với mọi N, lấy giới hạn $N\to \infty$ ở vế phải, ta được:
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) \ge \sum_{n=1}^{\infty} \mu(A_{n})
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ Hữu hạn dưới cộng tính

> [!prf] 
> Lấy $A,B \in \mathcal{A}$, Ta tách $A \cup B = A \sqcup (B\setminus A)$ rời nhau, theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(A \cup B) = \mu(A) + \mu(B\setminus A)
> $$
> mà vì $B\setminus A \subseteq B$, nên theo tính chất đơn điệu, $\mu(B\setminus A)\le\mu(B)$, vậy:
> $$
> \mu(A \cup B) \le \mu(A) + \mu(B)
> $$

> [!thm] 
> $\sigma$ - Cộng tính $\implies$ $\sigma$ - Dưới cộng tính

> [!prf]  
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập bất kì trong $\mathcal{A}$, ta đặt $\{ B_{n} \}_{n=1}^{\infty}$, lần lượt là: 
> $$
> B_{1}=A_{1}, B_{2} =A_{2}\setminus A_{1},\dots ,B_{n}=A_{n}\setminus \bigcup_{i=1}^{n-1}A_{i} \quad \forall n \ge 2
> $$
> nhận xét, ta thấy $\{ B_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau, và $\bigcup_{n=1}^{\infty} B_{n} = \bigcup_{n=1}^{\infty} A_{n}$, $B_{n}\subseteq A_{n}$, sử dụng tính $\sigma$ - cộng tính của $B_{n}$:
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) =\mu\left( \bigcup_{n=1}^{\infty}B_{n} \right) =\sum_{n=1}^{\infty} \mu(B_{n})
> $$
> lại áp dụng tính đơn điệu: $\mu(B_{n})\le \mu(A_{n})$ 
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) \le\sum_{n=1}^{\infty} \mu(A_{n})
> $$

> [!thm] 
> $\sigma$ - Dưới cộng tính $\implies$ Hữu hạn dưới cộng tính

> [!prf]
> Cho $A_1, \dots, A_N$ là họ các tập bất kì trong $\mathcal{A}$, xét $A_{n}= \emptyset$ $\forall n>N$.
> Ta áp dụng tính dưới cộng tính:
> $$
> \mu\left( \bigcup_{n=1}^{N} A_n \right) =\mu\left( \bigcup_{n=1}^{\infty }A_{n} \right) \le \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm]
> $\sigma$ - Dưới cộng tính và $\sigma$ - Cộng tính trên $\iff$ $\sigma$ - Cộng tính

> [!prf] 
> $(\implies)$ : Dựa vào bất đẳng thức hai chiều từ tính dưới cộng tính và tính cộng tính trên.
> $(\impliedby)$ : Xét $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau, từ tính hữu hạn cộng tính, ta được tính cộng tính trên: $\mu\left( \bigcup_{n=1}^{\infty } A_{n}\right)\ge \sum_{n=1}^{\infty}\mu(A_{n})$ ; kết hợp tính dưới cộng tính: $\mu\left( \bigcup_{n=1}^{\infty} A_{n}\right)\le \sum_{n=1}^{\infty} \mu(A_{n} )$.

## b) Tính liên tục và Giới hạn

> [!thm] 
> $\mu$ là $\sigma$ - cộng tính $\iff$ $\mu$ liên tục dưới 

> [!prf] 
> Liên tục dưới: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy tăng trong $\mathcal{A}$ ($A_{1} \subseteq A_{2} \subseteq A_{3} \subseteq \dots$) và $A=\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$, khi đó $\mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})$.
> $(\implies )$ :
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ $\uparrow A$. Ta định nghĩa $\{ B_{n} \}_{n=1}^{\infty }$: $B_{1}=A_{1}$, $B_{2} =A_{2}\setminus A_{1} ,\dots ,$ $B_{n} =A_{n} \setminus A_{n-1} \quad \forall n\ge 2$, ta có $B_{n}$ là họ rời nhau: $A_{n} = \bigsqcup_{i=1}^{n}B_{i}$ và $A = \bigsqcup_{i=1}^{\infty}B_{i}$, vì $\mu$ $\sigma$ - cộng tính:
> $$
> \mu(A) = \sum_{i=1}^{\infty} \mu(B_{i}) = \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(B_{i})
> $$
> vì $\mu$ cộng tính hữu hạn trên $A_{n}$:
> $$
> \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(B_{i}) = \lim_{ n \to \infty } \mu\left(\bigsqcup_{i=1}^{n}B_{i}\right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> Vậy $\lim_{ n \to \infty }\mu(A_{n})=\mu(A)$
> $(\impliedby)$ :
> lấy $\{ E_{n} \}_{n=1}^{\infty}$ rời nhau, lấy $A_{n} = \bigsqcup_{i=1}^{n}E_{i}$, ta có $A_{n} \uparrow \bigsqcup_{i=1}^{\infty}E_{i}$ vì $\mu$ liên tục dưới, 
> $$
> \mu\left( \bigcup_{i=1}^{\infty} E_{i}\right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> áp dụng tính chất cộng tính hữu hạn:
> $$
> \lim_{ n \to \infty } \mu(A_{n}) =\lim_{ n \to \infty } \mu\left(\bigsqcup_{i=1}^{n}E_{i}\right) =\lim_{ n \to \infty } \sum_{i=1}^{n} \mu(E_{i}) = \sum_{i=1}^{\infty} \mu(E_{i})
> $$
> Vậy $\mu\left( \bigcup_{i=1}^{\infty} E_{i} \right) = \sum_{i=1}^{\infty} \mu(E_{i})$

> [!thm] 
> $\mu$ là $\sigma$ - cộng tính $\iff$ $\mu$ liên tục trên tại $\emptyset$

> [!prf] 
> Liên tục trên tại $\emptyset$: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy giảm trong $\mathcal{A}$ ($A_{1} \supseteq A_{2} \supseteq A_{3} \supseteq \dots$) tiến về $\emptyset$ và $\mu(A_{1})<\infty$, khi đó $\lim_{ n \to \infty } \mu(A_{n}) = 0$.
> $(\implies )$ :
> lấy $\{ A_{n} \}_{n=1}^{\infty} \downarrow \emptyset$. Ta định nghĩa $B_{n} =A_{n} \setminus A_{n+1}$ là họ rời nhau, ta có $A_{1}= \bigsqcup_{n=1}^{\infty}B_{n}$, sử dụng tính $\sigma$ - cộng tính:
> $$
> \mu(A_{1}) = \mu\left(\bigsqcup_{n=1}^{\infty}B_{n}\right) = \sum_{n=1}^{\infty } \mu(B_{n})
> $$
> vì $\mu \ge 0$ và $\mu(A_{1})< \infty$ nên chuỗi hội tụ, vậy ta tìm được $N \in \mathbb{N}, \forall n \ge N$:
> $$
> \lim_{ n \to \infty } \sum_{i=n}^{\infty} \mu(B_{i}) = 0 
> $$
> ta có $A_{n} = \bigsqcup_{i=n}^{\infty} B_{i}$, vậy $\lim_{ n \to \infty }\mu(A_{n}) = \lim_{ n \to \infty } \sum_{i=n}^{\infty}\mu(B_{i}) = 0$
> $(\impliedby)$ :
> ta chứng minh $\mu$ liên tục trên tương đương $\mu$ liên tục dưới, khi đó từ định lý trước ta có điều phải chứng minh. lấy $A_{n} \uparrow A$, đặt $R_{n} =A \setminus A_{n}$, khi đó $R_{n} \downarrow \emptyset$. sử dụng tính cộng tính hữu hạn, ta có:
> $$
> \mu(A) = \mu(A_{n} )+ \mu(R_{n}) \implies \lim_{ n \to \infty } \mu(A) = \lim_{ n \to \infty } (\mu(A_{n} )+ \mu(R_{n}))
> $$
> vì $\lim_{ n \to \infty }\mu(R_{n}) =0$, vậy $\mu(A)=\lim_{ n \to \infty }\mu(A_{n})$ hay $\mu$ liên tục dưới

> [!lem] (Liên tục trên tổng quát)
> Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy giảm trong $\mathcal{A}$ ($A_{1} \supseteq A_{2} \supseteq A_{3} \supseteq \dots$), $A=\bigcap_{n=1}^{\infty} A_n \in \mathcal{A}$ và tồn tại $k$ sao cho $\mu(A_{k})<\infty$, khi đó:
> $$
> \mu\left( \bigcap _{n=1} ^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$

> [!prf]
> Không mất tính tổng quát, giả sử $\mu(A_1) < \infty$. Đặt $B_n = A_n \setminus A$, ta có $B_n \downarrow \emptyset$ và $\mu(B_1) \le \mu(A_1) < \infty$.
> Áp dụng tính liên tục trên tại $\emptyset$, ta được $\lim_{n \to \infty} \mu(B_n) = 0$.
> Theo tính chất trừ: $\mu(B_n) = \mu(A_n) - \mu(A)$. Do đó $\lim_{n \to \infty} (\mu(A_n) - \mu(A)) = 0$, suy ra $\lim_{n \to \infty} \mu(A_n) = \mu(A)$.

> [!thm] (Bổ đề Borel-Cantelli)
> Cho dãy tập hợp $\{A_n\}_{n=1}^\infty$ trong $\mathcal{A}$. Nếu $\sum_{n=1}^{\infty} \mu(A_n) < \infty$, thì:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$

> [!prf]
> Bằng định nghĩa của giới hạn trên tập hợp: $\limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k$. 
> Đặt $E_n = \bigcup_{k=n}^\infty A_k$. Ta thấy $\{E_n\}_{n=1}^\infty$ là một dãy giảm. 
> Áp dụng tính $\sigma$-dưới cộng tính, ta đánh giá được tập đầu tiên:
> $$
> \mu(E_1) = \mu\left( \bigcup_{k=1}^\infty A_k \right) \le \sum_{k=1}^\infty \mu(A_k) < \infty
> $$
> Vì tồn tại $E_1$ có độ đo hữu hạn, ta đủ điều kiện áp dụng bổ đề Liên tục trên tổng quát cho dãy giảm $\{E_n\}$:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = \mu\left( \bigcap_{n=1}^\infty E_n \right) = \lim_{n \to \infty} \mu(E_n)
> $$
> Mặt khác, tiếp tục theo tính $\sigma$-dưới cộng tính:
> $$
> \mu(E_n) = \mu\left( \bigcup_{k=n}^\infty A_k \right) \le \sum_{k=n}^\infty \mu(A_k)
> $$
> Khi $n \to \infty$, vế phải là phần dư của một chuỗi số hội tụ nên nó sẽ tiến về 0. Do đó $\lim_{n \to \infty} \mu(E_n) = 0$. 
> Kết luận: $\mu\left( \limsup_{n \to \infty} A_n \right) = 0$.